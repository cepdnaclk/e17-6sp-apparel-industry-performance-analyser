from typing import Optional
from pydantic import BaseModel


# defines the datamodels to be acceped by the API endpoints

class Item(BaseModel):
    name: str
    description: Optional[str] = None