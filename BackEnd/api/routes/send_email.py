from fastapi import APIRouter
import smtplib

from models.email_model import *

router = APIRouter()


@router.post('/email')
async def send_message(emails: emailSender):
    try:
        FROM = 'campinas.ets@br.bosch.com'
        email = emails.email
        SUBJECT = 'Fabrica de Talentos'
        TEXT = 'Prezado gestor, o usuário:  {} \nEDV: {} \nEstá solicitando o acesso aos cursos: \n\n{}'.format(emails.nome, emails.edv, '\n\n'.join(emails.dropD))        
        TO = [email]
        message = 'Subject: {}\n\n{}\n\nFrom: {}\n\nTo: {}'.format(SUBJECT, TEXT, FROM, ", ".join(TO))
        messageUtf = message.encode('utf-8')
        print(message)
        with smtplib.SMTP('rb-smtp-auth.rbesz01.com', 25) as smtp:
            smtp.ehlo()
            smtp.starttls()
            smtp.ehlo()
            smtp.login('ct67ca@bosch.com','26INDUSTRIAconectada')
            smtp.sendmail(FROM, TO, messageUtf)
        smtp.quit()
    except Exception as e:
        print("Nome: ", emails.nome)
        print("Email: ", emails.email)
        print("Edv: ", emails.edv)
        print("Cursos: ", emails.dropD)