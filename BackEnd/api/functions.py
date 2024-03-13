
from datetime import datetime, timedelta
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from passlib.hash import pbkdf2_sha256
from jose import JWTError, jwt
from fastapi.security import OAuth2PasswordBearer
from fastapi import Depends
from fastapi import HTTPException, status
from email.message import EmailMessage
import smtplib 

from core.deps import get_session
from models.user_model import *
from schemas.user_schema import *


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

async def passwordReset(user_email: str, edv: str, db: AsyncSession = Depends(get_session)):
    query = select(UserModel).filter(UserModel.edv == edv)
    result = await db.execute(query)
    user_to_reset = result.scalar_one_or_none()
    if user_to_reset:
        user_to_reset.senha = edv
        user_to_reset.acesso = False
        await db.commit()
        return user_to_reset, user_email  # Retorna o usuário e o email
    else:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Usuário não encontrado")


async def send_email(user_email, content):
    msg = EmailMessage()
    msg.set_content(content)
    msg['Subject'] = 'Fabrica De Talentos'
    msg['From'] = 'campinas.ets@br.bosch.com'
    msg['To'] = user_email
    
    try:
        server = smtplib.SMTP('rb-smtp-auth.rbesz01.com', 25)
        server.starttls()
        server.login('ct67ca@bosch.com', '26INDUSTRIAconectada')
        server.send_message(msg)
        server.quit()
        print("E-mail enviado com sucesso")
    except Exception as e:
        print("Erro ao enviar o e-mail:", e)
