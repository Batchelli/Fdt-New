from fastapi import FastAPI
from core.configs import settings
from api.router import api_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title= 'Fabrica de Talentos')
app.include_router(api_router, prefix=settings.API_V1_STR)
origins = ["*"]

#Configuração do CORSI
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#Roda a API
if __name__ == '__main__':
    import uvicorn
    uvicorn.run("main:app", host='0.0.0.0', port=8000, log_level='info', reload=True)