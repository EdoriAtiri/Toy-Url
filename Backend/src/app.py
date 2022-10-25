import os
import json
import random
import string
from flask import Flask, jsonify, request, abort, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from .database.models import setup_db, db_drop_and_create_all, Url

app = Flask(__name__)
setup_db(app)

# db_drop_and_create_all()


def random_string(N):
     #  initializing size of string
        

    # using random.choices()
    # generating random strings
        random_str = ''.join(random.choices(string.ascii_lowercase + string.digits, k=N))
        query = Url.query.filter(Url.short_url == random_str).one_or_none()

        while (query is not None):
            random_str = ''.join(random.choices(string.ascii_lowercase + string.digits, k=N))
            query = Url.query.filter(Url.short_url == random_str).one_or_none()
            N = N + 1

    # print result
        return str(random_str)


# Gets all the urls
@app.route('/')
def get_urls():
    query = Url.query.all()

    urls = [url.format() for url in query]


    return jsonify({
        'success': True,
        'urls': urls
    }), 200


# Creates new short url and saves it together with long url in database
@app.route('/url', methods=['POST'])
def add_url():
    # Gets long url data from the body of the request
    body = request.get_json()
    new_long_url = body.get('url', None).replace(" ", "")

    # If there is no data from the user, abort the request
    if new_long_url is None:
        abort(404)

    # check if new_long_url is in the database
    query_long_url = Url.query.filter(Url.long_url == new_long_url).one_or_none()
    if query_long_url is not None:
        url = {
            "id": query_long_url.id,
            "long_url": query_long_url.long_url,
            "short_url": query_long_url.short_url
        }
        return jsonify({
            "success": True,
            "url": url
        }), 200

    # Call function to generate new string to be used for the short_url
    new_str = random_string(7)

    try:
        url = Url(
            long_url=new_long_url,
            short_url=new_str
        )

        url.insert()
        url = url.format()
    
        return jsonify({
            "success": True,
            "url": url
        }), 200
    
    except BaseException:
        abort(422)

# Redirects all requests to the short URL to the full URL.
@app.route('/<short_url>')
def redirect_to_long_url(short_url):
    query = Url.query.filter(Url.short_url==short_url).one_or_none()

    if query is None:
        abort(404)

    try:
        if query is not None:
            # print(random_string())
            return redirect(str(query.long_url), code=302)
    except:
        abort(422)
