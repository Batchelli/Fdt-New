import sys
default_path = "C:\\Users\\ct67ca\\Desktop\\Fdt-New\\BackEnd"
sys.path.append(default_path)

from core.configs import settings
from core.db import engine

from models.user_model import *


async def create_tables() -> None:
    print('Criando as tabelas do DB...')
    async with engine.begin() as conn:
        await conn.run_sync(settings.DBBaseModel.metadata.create_all)
    
    print("Tabelas criadas com sucesso...")
    await engine.dispose()

if __name__ == '__main__':
    import asyncio
    asyncio.run(create_tables())