import pymongo
from pymongo import MongoClient

# client = MongoClient("mongodb://mongo:27017/")
client = MongoClient("mongodb://localhost:27017/")


db = client["testdb"]