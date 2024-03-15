from fastapi import APIRouter 
from api.routes import cad_routes, user_routes, send_email

api_router = APIRouter()
api_router.include_router(cad_routes.router, prefix='/fdt/cadastros', tags=["Cadastros"])
api_router.include_router(user_routes.router, prefix='/fdt/users', tags=["Usuários"])
api_router.include_router(send_email.router, prefix='/fdt/email', tags=["Email"])

