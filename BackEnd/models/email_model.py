from pydantic import BaseModel

#model das rotas de enviar email
class emailSender(BaseModel):
    nome: str
    email: str
    dropD: list[str]
    edv: int
    