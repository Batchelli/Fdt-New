from fastapi import APIRouter, HTTPException, status, Depends
from sqlalchemy.ext.asyncio import AsyncSession
import smtplib

from schemas.user_schema import *
from models.email_model import *
from models.user_model import *

from core.deps import get_session

from api.functions import *

import logging

router = APIRouter()


@router.post('/fdt/email/')
async def send_message(emails: emailSender):
    try:
        content = f"""
            Olá,

            O usuário: {emails.nome}
            EDV: {emails.edv}

            Esta solicitando acesso aos seguintes cursos:
            {', '.join(emails.dropD)}

            Atenciosamente,
            Fabrica de Talentos
            """
        await send_email(emails.email, content)

    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Falha ao enviar o e-mail")
       
        
@router.put('/fdt/resetPassword/{edv}', response_model=UserSchema, status_code=status.HTTP_202_ACCEPTED)
async def reset_password_and_access(edv: str, user_email: str, db: AsyncSession = Depends(get_session)):
    try:
        user_to_reset, email = await passwordReset(user_email, edv, db)
        user_name = user_to_reset.nome

        content = f"""
            Olá {user_name},

            Sua senha foi redefinida com sucesso. 
            Seu novo código de acesso é: {edv}

            Atenciosamente,
            Fabrica de Talentos
            """
        await send_email(email, content)

        return user_to_reset

    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Falha ao enviar o e-mail")