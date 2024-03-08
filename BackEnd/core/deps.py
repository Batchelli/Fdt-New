from typing import Generator
from sqlalchemy.ext.asyncio import AsyncSession
from core.db import Session

async def get_session() -> Generator:
    """Abre a conexão com o banco de dados, faz o uso e fecha a conexão"""
    session: AsyncSession = Session()
    try:
        yield session #tenta usar
    finally:
        await session.close() #fecha a sessão