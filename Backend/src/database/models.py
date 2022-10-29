import json
import os
from sqlalchemy import Column, String, Integer
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

database_filename = "database.db"
project_dir = os.path.dirname(os.path.abspath(__file__))
database_path = "sqlite:///{}".format(os.path.join(project_dir, database_filename))

db = SQLAlchemy()

def setup_db(app):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)

def db_drop_and_create_all():
    db.drop_all()
    db.create_all()
    # add one demo row which is helping in POSTMAN test
    url = Url(
        long_url='https://tailwindcss.com/docs/text-color',
        short_url='https://tailwindcss.com/'
    )
    url.insert()

class Url(db.Model):
    # Autoincrementing, unique primary key
    id = Column(Integer().with_variant(Integer, "sqlite"), primary_key=True)
    long_url = Column(String(80), unique=True)
    short_url = Column(String(80), nullable=False, unique=True)
    
    def format(self):
        return {
            'id': self.id,
            'long_url': self.long_url,
            'short_url': self.short_url,
        } 

    def insert(self):
        db.session.add(self)
        db.session.commit()
    