
from core.configs import settings
from sqlalchemy import Column, Integer, String, Float, Boolean
from pydantic import BaseModel


#models do usuário
class UserModel(settings.DBBaseModel):
    __tablename__ = "Users"
    id: int = Column(Integer, primary_key=True, autoincrement=True)
    nome: str = Column(String(255))
    edv: str  = Column(String(8))
    trilha: str = Column(String(50))
    user_email: str = Column(String(255))
    gestor: str = Column(String(255))
    gestor_email : str = Column(String(255))
    tipo_user: str = Column(String(50))
    acesso: bool = Column(Boolean, default=False)
    senha : str = Column(String(255)) 


#models da rota de login
class UserLogin(BaseModel):
    user : str = Column(String(200))
    senha : str = Column(String(200))


#complemento para a rota de users
class User(BaseModel):
    user : str


#models do token JWT
class Token(BaseModel):
    acess_token: str
    token_type: str
