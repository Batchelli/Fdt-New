from typing import List
from fastapi import APIRouter, status, Depends, HTTPException, status, Path, Body
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import MetaData
from core.deps import get_session
from passlib.hash import pbkdf2_sha256

from models.user_model import *
from schemas.user_schema import *
from api.functions import *


router = APIRouter()
metadata = MetaData()

#Rota de login. Traz o token JWT para trava de acesso a plataforma 
@router.post("/token")
async def login_for_access_token(login_request: UserLogin, db: AsyncSession = Depends(get_session)):
    user = await db.execute(select(UserModel).filter(UserModel.edv == login_request.user))
    db_user = user.scalar_one_or_none()
  
    if db_user and pbkdf2_sha256.verify(login_request.senha, db_user.senha):
        token_data = {"sub": login_request.user, "tipo_user": db_user.tipo_user, "trilha": db_user.trilha, "edv": db_user.edv}#Envia os dados do usuário necessarios para o funcionamento da plataforma cripitografados
        access_token = create_access_token(token_data)
        return {"access_token": access_token, "token_type": "bearer", "tipo_user": db_user.tipo_user} 
    else:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    

#Rota responsavel por fazer a troca da senha do usuário no seu primeiro acesso e coletar o email do usuário
@router.put('/firstAccess/{edv}/{email}/{senha}', status_code=status.HTTP_202_ACCEPTED)
async def update_password_and_access(edv: str = Path(...), email: str = None, senha: str = None, db: AsyncSession = Depends(get_session)):
    criptografia = password_encrypt(senha)
    async with db as session:
        query = select(UserModel).filter(UserModel.edv == edv)
        result = await session.execute(query)
        user_to_update = result.scalar_one_or_none()
        if user_to_update:
            user_to_update.senha = criptografia
            user_to_update.acesso = True 
            if email:
                user_to_update.user_email = email
            await session.commit()
            return user_to_update
        else:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="EDV not found")
    

#Rota para pesquisar o usuário no banco de dados pelo seu EDV
@router.get('/user/{edv}')
async def get_userEdv(edv: str, db: AsyncSession = Depends(get_session)):
    """This router get the edv's user"""
    async with db as session:
        query = select(UserModel).filter(UserModel.edv == edv)
        result = await session.execute(query)
        edv = result.scalar_one_or_none()
        if edv:
            return edv
        else:
            raise(HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="edv not found"))


#Rota para chamar todos os usuário existentes no bancoa
# @router.get('/allUsers', response_model=List[UserSchema])
# async def get_users(db: AsyncSession = Depends(get_session)):
#     """This route to get all users"""
#     async with db as session:
#         query = select(UserModel)
#         result = await session.execute(query)
#         users: List[UserModel] = result.scalars().all()
#         return users

