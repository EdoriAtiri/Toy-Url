import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from .database.models import setup_db, db_drop_and_create_all, Url

app = Flask(__name__)
setup_db(app)

db_drop_and_create_all()

@app.route('/')
def hello():
    return '<h1>Hello, World</h1>'