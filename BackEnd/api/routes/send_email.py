from fastapi import APIRouter, HTTPException, status, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm.exc import NoResultFound

from core.deps import get_session

from schemas.user_schema import *
from models.email_model import *
from models.user_model import *

from api.functions import *


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
async def reset_password_and_access(edv: str, db: AsyncSession = Depends(get_session)):
    try:
        query = select(UserModel).filter(UserModel.edv == edv)
        user = await db.execute(query)
        user_to_reset = user.scalar_one_or_none()

        if user_to_reset:
            user_email = user_to_reset.user_email
            user_name = user_to_reset.nome

            content = f"""
                Olá {user_name}!

                Sua senha foi redefinida com sucesso. 
                Seu novo código de acesso é: {edv}
                
                IMPORTATNE:
                Assim que acessar a plataforma, troque sua senha!

                Atenciosamente,
                Fabrica de Talentos
                """
            await send_email(user_email, content)

            return user_to_reset
        else:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="EDV not found")

    except NoResultFound:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    except Exception as e:
        print(f"Erro ao resetar a senha e enviar e-mail: {e}")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to reset password and send email")

