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
from uuid import uuid4

load_dotenv()

# MongoDB setup

client = MongoClient(os.getenv("MONGO_URL"))
db = client['Cluster0']
users_collection = db['users']

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000", "https://bobathon.onrender.com"])

@app.route("/signup", methods=['POST'])
def signup():
    body = json.loads(request.data)

    existing_user = users_collection.find_one({'email': re.compile(body['email'], re.IGNORECASE)})
    if existing_user:
        return "User already exists", 400
    
    rand_token = uuid4()
    
    body['password'] = generate_password_hash(body['password'])
    body['token'] = str(rand_token)
    body['preferences'] = {}
    body['matches'] = []
    body['reviews'] = []
    body['hasSetPreferences'] = False

    users_collection.insert_one(body)

    response_data = {
        "email": body['email'],
        "name": body['name'],
        "token": body['token']
    }
    return jsonify(response_data)

@app.route("/login", methods=["POST"])
def login():
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    existing_user = users_collection.find_one({'email': re.compile(email, re.IGNORECASE)})

    if existing_user is None:
        return jsonify({"msg": "Invalid username or password"}), 400
    if not check_password_hash(existing_user['password'], password):
        return jsonify({"msg": "Invalid username or password"}), 400

    response_data = {
        "email": existing_user['email'],
        "name": existing_user['name'],
        "token": existing_user['token']
    }
    return jsonify(response_data)

@app.route("/me", methods=["GET"])
def me():
    token = request.args.get('token')

    existing_user = users_collection.find_one({'token': token})

    if existing_user is None:
        return jsonify({"msg": "Invalid token"}), 400

    response_data = {
        "name": existing_user['name'],
        "email": existing_user['email'],
        "hasSetPreferences": existing_user['hasSetPreferences'],
        "reviews": existing_user['reviews'],
    }
    return jsonify(response_data)

@app.route("/preferences", methods=["GET"]) 
def get_preferences():
    token = request.json.get('token', None)

    existing_user = users_collection.find_one({'token': token})

    if existing_user is None:
        return jsonify({"msg": "Invalid token"}), 400

    response_data = {
        "preferences": existing_user['preferences'],
    }
    return jsonify(response_data)

@app.route("/preferences", methods=["POST"]) 
def set_preferences():
    preferences = request.json.get('preferences', None)
    token = request.json.get('token', None)

    if preferences is None:
        return jsonify({"msg": "Invalid preferences"}), 400

    users_collection.update_one({'token': token}, {"$set": {'preferences': preferences}})
    users_collection.update_one({'token': token}, {"$set": {'hasSetPreferences': True}})

    response_data = {
        "preferences": preferences
    }
    return jsonify(response_data)

@app.route("/location", methods=["POST"]) 
def set_location():
    location = request.json.get('location', None)
    token = request.json.get('token', None)

    if location is None:
        return jsonify({"msg": "Invalid location"}), 400

    users_collection.update_one({'token': token}, {"$set": {'location': location}})

    response_data = {
        "location": location
    }
    return jsonify(response_data)

@app.route("/matches", methods=["GET"]) 
def get_matches():
    token = request.args.get('token')

    user = users_collection.find_one({'token': token})
        
    response_data = {
        "matches": user['matches']
    }
    return jsonify(response_data)

@app.route("/matches", methods=["POST"]) 
def add_match():
    token = request.json.get('token', None)
    match = request.json.get('match', None)

    if match is None:
        return jsonify({"msg": "Invalid match"}), 400

    users_collection.update_one({'token': token}, {"$push": {'matches': match}})

    response_data = {
        "match": match
    }
    return jsonify(response_data)
    

@app.route("/reviews", methods=["POST"]) 
def add_review():
    review = request.json.get('review', None)
    token = request.json.get('token', None)

    if review is None:
        return jsonify({"msg": "Invalid review"}), 400

    users_collection.update_one({'token': token}, {"$push": {'reviews': review}})

    response_data = {
        "review": review
    }
    return jsonify(response_data)

# TODO: check match, add match, get reviews

if __name__ == "__main__":
    app.run(debug=True)