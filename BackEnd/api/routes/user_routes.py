from typing import List
from fastapi import APIRouter, status, Depends, HTTPException, status
from datetime import datetime, timedelta
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import MetaData
from core.deps import get_session
from passlib.hash import pbkdf2_sha256
from jose import JWTError, jwt
from fastapi.security import OAuth2PasswordBearer

from models.user_model import *
from schemas.user_schema import *

router = APIRouter()
metadata = MetaData()

SECRET_KEY = "q1w2e3r4"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def verify_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except JWTError:
        return None

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

@router.post("/token")
async def login_for_access_token(login_request: UserLogin, db: AsyncSession = Depends(get_session)):
    user = await db.execute(select(UserModel).filter(UserModel.edv == login_request.user))
    db_user = user.scalar_one_or_none()
  
    if db_user and pbkdf2_sha256.verify(login_request.senha, db_user.senha):
        token_data = {"sub": login_request.user}
        access_token = create_access_token(token_data)
        return {"access_token": access_token, "token_type": "bearer"}
    else:
        raise HTTPException(status_code=401, detail="Invalid credentials")

@router.get('/allUsers', response_model=List[UserSchema])
async def get_users(db: AsyncSession = Depends(get_session)):
    """This route to get all users"""
    async with db as session:
        query = select(UserModel)
        result = await session.execute(query)
        users: List[UserModel] = result.scalars().all()
        return users

@router.get('/user/{user_edv}')
async def get_userEdv(user_edv: str, db: AsyncSession = Depends(get_session)):
    """This router get the edv's user"""
    async with db as session:
        query = select(UserModel).filter(UserModel.edv == user_edv)
        result = await session.execute(query)
        user_edv = result.scalar_one_or_none()
        if user_edv:
            return user_edv
        else:
            raise(HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="edv not found"))