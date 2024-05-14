from flask import Flask, request
from flask_cors import CORS
import re

app = Flask(__name__)
CORS(app)


