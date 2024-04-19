from typing import List, Optional
from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from fastapi import FastAPI
from Users.schema import ResetPassword
from auth.jwt_bearer import JWTBearer
from db import db
from fastapi import UploadFile
from Users import models as user_model


router = APIRouter()

@router.get("/")
async def root():
    return {"message": "Hello World"}

@router.get("/current_user", dependencies=[Depends(JWTBearer())])
def current_user(user: user_model.User = Depends(user_model.get_current_user)):
    return user


@router.post("/create_user" )
def create_user(user: user_model.User):
    print(user)
    return user_model.create_user(user)

@router.get("/get_total_users")
def get_total_users():
    return user_model.get_total_users()

@router.get("/get_all_users")
def get_all_users():
    return user_model.get_all_users()

@router.post("/user_login")
def user_login(user: user_model.UserLogin):
    return user_model.user_login(user)

@router.put("/reset_password")
def pass_reset(credentials: ResetPassword):
    return user_model.reset_password(credentials)
    

@router.post("/create_order" , dependencies=[Depends(JWTBearer())])
def create_order(order: user_model.Order, user: user_model.User = Depends(user_model.get_current_user)):
    return user_model.create_order(order, user)

@router.get("/get_all_orders")
def get_all_orders():
    return user_model.get_all_orders()

@router.get("/get_total_orders")
def get_total_orders():
    return user_model.get_total_orders()

@router.put("/approve_order/{order_id}", dependencies=[Depends(JWTBearer())])
def approve_order(order_id: str):
    return user_model.approve_order(order_id)


# @router.get("/get_total_orders")
# def get_total_orders():
#     return user_model.get_total_orders()

# @router.put("/approve_order/{order_id}", dependencies=[Depends(JWTBearer())])
# def approve_order(order_id: str):
#     return user_model.approve_order(order_id)

# @router.put("/update_order/{order_id}", dependencies=[Depends(JWTBearer())])
# def update_order(order_id: str, pieces: int):
#     return user_model.update_order(order_id, pieces)

# @router.delete("/delete_order/{order_id}", dependencies=[Depends(JWTBearer())])
# def delete_order(order_id: str):
#     return user_model.delete_order(order_id)

# @router.get("/get_user_orders/{user_id}", dependencies=[Depends(JWTBearer())])
# def get_user_orders(user_id: str):
#     return user_model.get_user_orders(user_id)








