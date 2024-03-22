
from typing import Optional
from pydantic import BaseModel as SchemaBaseModel


#Schema do usuário
class UserSchema(SchemaBaseModel):
    id: Optional[int] = None
    nome: str 
    edv: str
    trilha: str
    user_email:str 
    gestor : str 
    gestor_email: str 
    tipo_user : str
    acesso : bool
    senha : str
    class Config:
        from_attributes = True
        

#Schema do login
class LoginSchema(SchemaBaseModel):
    user : str
    senha : str

