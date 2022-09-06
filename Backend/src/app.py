import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from .database.models import setup_db

app = Flask(__name__)
setup_db(app)


@app.route('/')
def hello():
    return '<h1>Hello, World</h1>'