from typing import Generator
from sqlalchemy.ext.asyncio import AsyncSession
from core.db import Session

#Abre Conexão com o banco de dados
async def get_session() -> Generator:
    session: AsyncSession = Session()
    try:
        yield session #tenta usar
    finally:
        await session.close() #fecha a sessão