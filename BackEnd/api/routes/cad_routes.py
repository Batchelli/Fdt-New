from fastapi import APIRouter, status, Depends, HTTPException, status, UploadFile, File
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import MetaData, update
from fastapi.responses import JSONResponse
from sqlalchemy.orm import sessionmaker
from sqlalchemy.future import select 
from core.deps import get_session
from io import BytesIO
import pandas as pd
import databases
import re

from models.user_model import *
from schemas.user_schema import *

from api.functions import *

from core.db import AsyncSession


Base = declarative_base()
db = databases.Database("mysql+aiomysql://root@127.0.0.1:3306/FabricaDeTalentos")
async_engine = create_async_engine(str(db.url), echo=True)
async_session = sessionmaker(async_engine, expire_on_commit=False, class_=AsyncSession)


router = APIRouter()
metadata = MetaData()

    
@router.post('/fdt/singleRegister', status_code=status.HTTP_201_CREATED, response_model=UserSchema)
async def post_user(user: UserSchema, db: AsyncSession = Depends(get_session)):
    """This route is to create a new user"""
    criptografia = password_encrypt(user.edv)
    
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


@router.post("/fdt/cadXml/uploadfile/")
async def create_upload_file(file: UploadFile = File(...)):
    try:
        content = await file.read()
        content_io = BytesIO(content)
        df = pd.read_excel(content_io)

        df_processed = lerXml(df)

        async with async_session() as session:
            async with session.begin():
                for _, row in df_processed.iterrows():
                    if not re.match(r'^\d{8}$', str(row['edv'])):
                        return JSONResponse(content={"error": "O EDV deve conter exatamente 8 dígitos"}, status_code=400)

                    user = await session.execute(select(colaboradores).where(colaboradores.c.edv == row['edv']))
                    existing_user = user.fetchone()

                    if existing_user:
                        existing_user_data = dict(existing_user)
                        update_data = {column: row[column] for column in df_processed.columns if column in existing_user_data and existing_user_data[column] != row[column]}

                        update_data.pop('user_email', None)
                        update_data.pop('acesso', None)

                        update_data['tipo_user'] = 'user'

                        if update_data:
                            await session.execute(update(colaboradores).where(colaboradores.c.edv == row['edv']).values(**update_data))
                    else:
                        await session.execute(colaboradores.insert().values(
                            nome=row['nome'],
                            edv=row['edv'],
                            trilha=row['trilha'],
                            gestor=row['gestor'],
                            gestor_email=row['gestor_email'],
                            tipo_user='user', 
                            senha=row['senha']
                        ))
            await session.commit()

        return JSONResponse(content={"message": "Arquivo processado com sucesso"}, status_code=200)

    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)


@router.post("/fdt/cadXml/previewfile/")
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
    


