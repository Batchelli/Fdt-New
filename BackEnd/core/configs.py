from pydantic.v1 import BaseSettings
from sqlalchemy.orm import declarative_base

#Configuração para criação do banco de dados
class Settings(BaseSettings):
		API_V1_STR: str = '/api/v1'
		DB_URL: str = 'mysql+aiomysql://root@127.0.0.1:3306/FabricaDeTalentos'
		DBBaseModel = declarative_base() 
		class Config:case_sensitive = True
settings = Settings() 
