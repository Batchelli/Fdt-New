from fastapi import APIRouter, status, Depends, HTTPException, status, UploadFile, File
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import MetaData, Table, update
from fastapi.responses import JSONResponse
from sqlalchemy.orm import sessionmaker
from passlib.hash import pbkdf2_sha256
from sqlalchemy.future import select 
from core.deps import get_session
from io import BytesIO
import pandas as pd
import databases
import re

from models.user_model import *
from schemas.user_schema import *

Base = declarative_base()
db = databases.Database("mysql+aiomysql://root@127.0.0.1:3306/FabricaDeTalentos")
async_engine = create_async_engine(str(db.url), echo=True)
async_session = sessionmaker(async_engine, expire_on_commit=False, class_=AsyncSession)

router = APIRouter()
metadata = MetaData()

colaboradores = Table(
    'users', metadata,
    Column('id', Integer, primary_key=True),
    Column('nome', String),
    Column('edv', Integer),
    Column('trilha', String),
    Column('user_email', String),
    Column('gestor', String),
    Column('gestor_email', String),
    Column('tipo_user', String),
    Column('acesso', Boolean),
    Column('senha', String)
)

def password_encrypt(password):
    password = str(password)
    return pbkdf2_sha256.hash(password)
    
@router.post('/singleRegister', status_code=status.HTTP_201_CREATED, response_model=UserSchema)
async def post_user(user: UserSchema, db: AsyncSession = Depends(get_session)):
    """This route is to create a new user"""
    criptografia = password_encrypt(user.edv)
    
    # Adicione a verificação do formato do EDV
    if not re.match(r'^\d{8}$', user.edv):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="O EDV deve conter exatamente 8 dígitos")

    existing_user = await db.execute(select(UserModel).filter(UserModel.edv == user.edv))
    if existing_user.scalar():
        print("tem")
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="O EDV já está em uso")

    new_user = UserModel ( id = 0,
                         nome = user.nome,
                         edv = user.edv,
                         trilha = user.trilha,
                         user_email = user.user_email,
                         gestor= user.gestor,
                         gestor_email = user.gestor_email,
                         tipo_user = user.tipo_user,
                         acesso = False,
                         senha = criptografia,
    )

    db.add(new_user)
    await db.commit()
    return new_user


def lerXml(df):
    df['user_email'] = ""
    df['tipo_user'] = "user"
    df['acesso'] = False
    df['senha'] = df['edv'].apply(password_encrypt)
    print(df)
    return df

@router.post("/cadXml/uploadfile/")
async def create_upload_file(file: UploadFile = File(...)):
    try:
        content = await file.read()
        content_io = BytesIO(content)
        df = pd.read_excel(content_io)

        df_processed = lerXml(df)

        async with async_session() as session:
            async with session.begin():
                for _, row in df_processed.iterrows():
                    user = await session.execute(select(colaboradores).where(colaboradores.c.edv == row['edv']))
                    existing_user = user.fetchone()

                    if not re.match(r'^\d{8}$', str(row['edv'])):
                        return JSONResponse(content={"error": "O EDV deve conter exatamente 8 dígitos"}, status_code=400)

                    user = await session.execute(select(colaboradores).where(colaboradores.c.edv == row['edv']))
                    existing_user = user.fetchone()

                    if existing_user:
                        existing_user_id, existing_user_nome, existing_user_edv, existing_user_trilha, existing_user_user_email, existing_user_gestor, existing_user_gestor_email, existing_user_tipo_user, existing_user_acesso, existing_user_senha = existing_user
                        update_data = {column: row[column] for column in df_processed.columns if column != 'acesso' and locals()[f'existing_user_{column}'] != row[column]}
                        if update_data:
                            await session.execute(update(colaboradores).where(colaboradores.c.edv == row['edv']).values(**update_data))
                    else:
                        # Insere um novo usuário
                        await session.execute(colaboradores.insert().values(
                            nome=row['nome'],
                            edv=row['edv'],
                            trilha=row['trilha'],
                            user_email=row['user_email'],
                            gestor=row['gestor'],
                            gestor_email=row['gestor_email'],
                            tipo_user=row['tipo_user'],
                            acesso=row['acesso'],
                            senha=row['senha']
                        ))
            await session.commit()

        return JSONResponse(content={"message": "Arquivo processado com sucesso"}, status_code=200)

    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)

@router.post("/cadXml/previewfile/")
async def redArchive(file: UploadFile = File(...)):
    try:
        content = await file.read()
        content_io = BytesIO(content)
        df = pd.read_excel(content_io)
        df.columns = df.columns.str.lower()
        df['is_activate'] = True
        df['is_activate'] = df['is_activate'].astype(bool)
        df.rename(columns={'nome': 'nome', 'edv': 'edv', 'trilha': 'trilha', 'gestor': 'gestor', 'gestor_email': 'gestor_email'}, inplace=True)
        print(df.to_dict(orient='records'))
        print("enviei")
        
        return df.to_dict(orient='records')
    except Exception as e:
        raise HTTPException(detail=str(e), status_code=500)
    


