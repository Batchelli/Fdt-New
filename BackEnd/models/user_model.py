
from core.configs import settings
from sqlalchemy import Column, Integer, String, Float, Boolean
from pydantic import BaseModel


class UserModel(settings.DBBaseModel):
    __tablename__ = "Users"
    id: int = Column(Integer, primary_key=True, autoincrement=True)
    nome: str = Column(String(255))
    edv: int = Column(Integer, unique=True)
    trilha: str = Column(String(50))
    user_email: str = Column(String(255))
    gestor: str = Column(String(255))
    gestor_email : str = Column(String(255))
    tipo_user: str = Column(String(50))
    acesso: bool = Column(Boolean, default=False)
    senha : str = Column(String(255)) 

class UserLogin(BaseModel):
    user : str = Column(String(200))
    senha : str = Column(String(200))

class User(BaseModel):
    user : str

class Token(BaseModel):
    acess_token: str
    token_type: str
