# this file is responsible for singing, enconding , decoding, and returning JWTS

from typing import Optional
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from fastapi import Depends, HTTPException, Header, Request, Security

from base64 import decode
import time
import jwt
from decouple import config
from db import db

JWT_SECRET = "2c32f8f5860ef161666b5963374ccd0c92057fe245cdfc5489058cf1cfabc37d"
JWT_ALGORITHM = "HS256"

def token_response(token: str):
    return {
        "access_token": token
    }

def sign_jwt(user_id: str):
    payload = {
        "user_id": user_id,
        "expires": time.time() + 600
    }
    token = jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)
    return token_response(token)

def decode_jwt(token: str):
    try:
        decoded_token = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        return decoded_token if decoded_token["expires"] >= time.time() else None
    except:
        return None
    
