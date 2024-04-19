import datetime
from datetime import datetime
from typing import List, Optional
from bson import ObjectId
import bson
from fastapi import HTTPException, UploadFile, status
from pydantic import BaseModel, Field, validator
import uuid
from uuid import uuid4

class User(BaseModel):
    id: Optional[str] = Field(default_factory=lambda: str(ObjectId()), alias="_id")
    first_name: str = Field(...)
    last_name: str = Field(...)
    email: str = Field(...)
    password: str = Field(...)
    phone: str = Field(...)
    confirm_password: str = Field(...)

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {
            ObjectId: str
        }
        schema_extra = {
            "example": {
                "first_name": "John",
                "last_name": "Doe",
                "email": "johndoe@gmail.com",
                "password": "password",
                "confirm_password": "password",
                "phone": "1234567890",
            }
        }

            
        def user_dict(self, *args, **kwargs):
            data = super().model_dump(*args, **kwargs)
            data.pop("confirm_password")
            return data

class UserLogin(BaseModel):
    email: str = Field(...)
    password: str = Field(...)


class Order(BaseModel):
    id: Optional[str] = Field(default_factory=lambda: str(ObjectId()), alias="_id")
    order_type: str = Field(...)
    pieces: int = Field(...)
   

class OrderOut(BaseModel):
    id: Optional[str] = Field(default_factory=lambda: str(ObjectId()), alias="_id")
    order_type: str = Field(...)
    pieces: int = Field(...)
    order_owner:Optional[str] = Field(...)
    user_id: Optional[str] = Field(...)
    created_at: Optional[datetime] = Field(...)
    updated_at: Optional[datetime] = Field(...)
    is_approved: Optional[bool] = Field(...)
    class Config:
        arbitrary_types_allowed = True
        json_encoders = {
            ObjectId: str
        }
        schema_extra = {
            "example": {
                "order_type": "T-Shirt",
                "pieces": 100,
                "order_owner": "John Doe",
                "user_id": "1234567890",
                "created_at": "2021-01-01 00:00:00",
                "updated_at": "2021-01-01 00:00:00",
                "is_approved": True
            }
        }


class ResetPassword(BaseModel):
    email: str
    password: str



   




            