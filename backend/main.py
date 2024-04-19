from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from Users import routes as user_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    
)

app.include_router(user_router.router, prefix="/users", tags=["users"])


