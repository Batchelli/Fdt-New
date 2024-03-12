
from datetime import datetime, timedelta
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from passlib.hash import pbkdf2_sha256
from jose import JWTError, jwt
from fastapi.security import OAuth2PasswordBearer

from models.user_model import *
from schemas.user_schema import *
from core.deps import get_session


SECRET_KEY = "q1w2e3r4"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

def password_encrypt(password):
    password = str(password)
    return pbkdf2_sha256.hash(password)
  
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
    
async def update_user_access(db: AsyncSession, edv: str):
    result = await db.execute(select(UserModel).where(UserModel.edv == edv))
    user = result.scalar_one_or_none()
    
    criptografia = password_encrypt(user.senha)
    if user:
        user.acesso = True
        user.senha = criptografia
        return user
    return None

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
