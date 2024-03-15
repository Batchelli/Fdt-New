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


@router.post("/token")
async def login_for_access_token(login_request: UserLogin, db: AsyncSession = Depends(get_session)):
    user = await db.execute(select(UserModel).filter(UserModel.edv == login_request.user))
    db_user = user.scalar_one_or_none()
  
    if db_user and pbkdf2_sha256.verify(login_request.senha, db_user.senha):
        token_data = {"sub": login_request.user}
        access_token = create_access_token(token_data)
        return {"access_token": access_token, "token_type": "bearer", "tipo_user": db_user.tipo_user}
    else:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    
@router.put('/firstAccess/{edv}', status_code=status.HTTP_202_ACCEPTED)
async def update_password_and_access(edv: str = Path(...), email: str = None, senha: str = None, db: AsyncSession = Depends(get_session)):
    """This router is to update the password and access"""
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
    
    
@router.put('/access/{edv}', status_code=status.HTTP_202_ACCEPTED)
async def update_password_and_access(edv: str = Path(...), senha: str = None, db: AsyncSession = Depends(get_session)):
    """This router is to update the password and access"""
    criptografia = password_encrypt(senha)
    async with db as session:
        query = select(UserModel).filter(UserModel.edv == edv)
        result = await session.execute(query)
        user_to_update = result.scalar_one_or_none()
        if user_to_update:
            user_to_update.senha = criptografia
            user_to_update.acesso = True 
        
            await session.commit()
            return user_to_update
        else:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="EDV not found")


@router.get('/allUsers', response_model=List[UserSchema])
async def get_users(db: AsyncSession = Depends(get_session)):
    """This route to get all users"""
    async with db as session:
        query = select(UserModel)
        result = await session.execute(query)
        users: List[UserModel] = result.scalars().all()
        return users


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
        
        
# @router.put('/acesso/{edv}')
# async def put_user(edv: str, db: AsyncSession = Depends(get_session)):
#     '''
#     Atualiza o valor de acesso ao primeiro login do usuário
#     '''
#     user = await update_user_access(db, edv)
#     if user:
#         await db.commit() 
#         print(f"Access updated for user with EDV {edv}")
#         return user
#     else:
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Usuário não encontrado")