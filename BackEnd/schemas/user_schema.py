
from typing import Optional
from pydantic import BaseModel as SchemaBaseModel

class UserSchema(SchemaBaseModel):
    id: Optional[int] = None
    nome: str 
    edv : int
    trilha: str
    user_email:str 
    gestor : str 
    gestor_email: str 
    tipo_user : str
    acesso : bool
    senha : str
    class Config:
        from_attributes = True
        
class LoginSchema(SchemaBaseModel):
    user : str
    senha : str

# class AdminSchema(SchemaBaseModel):
#     id: Optional[int] = None
#     name: str 
#     edv : int
#     email_user: str
#     user_area : str
#     typeUser: str 
#     is_activate : bool
#     hashed_password : str
#     class Config:
#         from_attributes = True