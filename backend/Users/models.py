import os
import secrets
import shutil
from typing import List, Optional
from bson import ObjectId
from fastapi import Depends, File, HTTPException, Request, Security, status, UploadFile
from datetime import datetime
import bcrypt
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import EmailStr
import uuid
from fastapi.encoders import jsonable_encoder
from fastapi import UploadFile
from Users.schema import Order, OrderOut, User, UserLogin, ResetPassword
from auth.jwt_sign import decode_jwt, sign_jwt
from auth.jwt_bearer import JWTBearer

from db import db

def encrypt_password(password: str):
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt())

def compare_passwords(pass_1: str, pass_2: str):
    return bcrypt.checkpw(pass_1.encode(), pass_2)

def check_pass_match(password: str, confirm_password: str):
    if password == confirm_password:
        return True
    else:
        raise HTTPException(status_code=400, detail="Passwords do not match")

def create_user(user: User):
    user = jsonable_encoder(user)
    email = user["email"]
    existing_user = db.users.find_one({"email": email})
    if existing_user:
        raise HTTPException(status_code=400, detail=f"User with this email : {email} already exists")
    check_pass_match(user["password"], user["confirm_password"])
    hashed_password = encrypt_password(user["password"])
    user["password"] = hashed_password
    user["confirm_password"] = hashed_password
    user["created_at"] = datetime.now()
    user["updated_at"] = datetime.now()
    user["is_admin"] = False
    user.pop("confirm_password")
    new_user = db.users.insert_one(user)
    created_user = db.users.find_one({"_id": new_user.inserted_id})
    return created_user

def get_total_users():
    user = db.users.find_one({"is_admin": True})
    if not user:
        return db.users.count_documents({})
    else:
        return db.users.count_documents({}) - 1
    
def get_all_users():
    users = db.users.find({})
    users = list(users)
    return {"users": users}

def user_login(user: UserLogin):
    email = user.email
    password = user.password
    user = db.users.find_one({"email": email})
    if not user:
        raise HTTPException(status_code=400, detail=f"User with this email : {email} does not exist")
    if not compare_passwords(password, user["password"]):
        raise HTTPException(status_code=400, detail="Incorrect password")
    user_id = user["_id"]
    token = sign_jwt(user_id)
    print(token)
    return {"token": token, "user": user}

def get_current_user(token: str = Depends(HTTPBearer())):
    credentials_exception = HTTPException(
        status_code=401,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"}
    )
    token = token.credentials
    payload = decode_jwt(token)
    if payload is None:
        raise credentials_exception
    user = db.users.find_one({"_id": payload["user_id"]})
    if user is None:
        raise credentials_exception
    return user

def create_order(order: Order, user: User = Depends(get_current_user)):
    order_dict = jsonable_encoder(order)
    print("Order dictionary:", order_dict)
    order_dict["user_id"] = str(user["_id"])
    order_dict["order_owner"] = user["first_name"]
    order_dict["is_approved"] = False
    order_dict["created_at"] = datetime.now()
    order_dict["updated_at"] = datetime.now()
    new_order = db.orders.insert_one(order_dict)
    created_order = db.orders.find_one({"_id": new_order.inserted_id})
    return OrderOut(**created_order)

def get_all_orders():
    orders = db.orders.find({})
    orders = list(orders)
    return {"orders": orders}

def get_total_orders():
    return db.orders.count_documents({})

def approve_order(order_id: str):
    order = db.orders.find_one({"_id": order_id})
    print(order)
    if not order:
        raise HTTPException(status_code=400, detail=f"Order with this id : {order_id} does not exist")
    db.orders.update_one({"_id": order_id}, {"$set": {"is_approved": True}})
    return {"message": "Order approved"}


def reset_password(user_updates: ResetPassword):
   email = user_updates.email
   plain_pass = user_updates.password
   encrypted_password = encrypt_password(plain_pass)
   user = db.users.find_one({"email" : email})
   if not user:
       raise HTTPException(status_code=400, detail=f"User with this email {email} does not exist")
   db["users"].update_one({"email": email}, {"$set":{ "password": encrypted_password}})

   return {"message" : "pasword updated"}



    
   




