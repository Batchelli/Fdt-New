from fastapi import APIRouter 
from api.routes import cad_routes, user_routes

api_router = APIRouter()
api_router.include_router(cad_routes.router, prefix='/cadastros', tags=["Cadastros"])
api_router.include_router(user_routes.router, prefix='/users', tags=["Usuários"])

