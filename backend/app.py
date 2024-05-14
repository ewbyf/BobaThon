from flask import Flask, request, jsonify
import datetime
from flask_cors import CORS
import os
from pymongo import MongoClient
from pymongo import ReturnDocument
from dotenv import load_dotenv     
import json
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
import re

load_dotenv()

# MongoDB setup

client = MongoClient(os.getenv("MONGO_URL"))
db = client['Cluster0']
users_collection = db['users']

app = Flask(__name__)
CORS(app)



@app.route("/signup", methods=['POST'])
def signup():
    body = json.loads(request.data)

    existing_user = users_collection.find_one({'username': re.compile(body['username'], re.IGNORECASE)})
    if existing_user:
        return "User already exists", 400
    
    body['password'] = generate_password_hash(body['password'])
    users_collection.insert_one(body)
    body.pop("_id")
    body.pop("password")

    return jsonify(body)

@app.route("/sirac/login", methods=["POST"])
def login():
    username = request.json.get('username', None)
    password = request.json.get('password', None)
    existing_user = users_collection.find_one({'username': re.compile(username, re.IGNORECASE)})

    if existing_user is None:
        return jsonify({"msg": "Invalid username or password"}), 401
    if not check_password_hash(existing_user['password'], password):
        return jsonify({"msg": "Invalid username or password"}), 401

    response_data = {
        # "token": existing_user['token']
    }
    return jsonify(response_data)



if __name__ == "__main__":
    app.run(debug=True)