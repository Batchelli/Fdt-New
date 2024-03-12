from pydantic import BaseModel

class emailSender(BaseModel):
    nome: str
    email: str
    dropD: list[str]
    edv: int
    