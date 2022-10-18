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


def random_string():
     #  initializing size of string
        N = 7

    # using random.choices()
    # generating random strings
        res = ''.join(random.choices(string.ascii_lowercase + string.digits, k=N))

    # print result
        return str(res)

@app.route('/')
def get_urls():
    query = Url.query.all()

    urls = [url.format() for url in query]


    return jsonify({
        'success': True,
        'urls': urls
    }), 200



@app.route('/url', methods=['POST'])
def add_url():
    body = request.get_json()
    new_url = body.get('url', None)
    if new_url is None:
        abort(404)

    new_str = random_string()
    print(new_str)

    try:
        url = Url(
            long_url=new_url,
            short_url=new_str
        )
            # short_url=f"https://toyurl/{str(res)}"

        url.insert()
        url = url.format()
    
        return jsonify({
            "success": True,
            "url": url
        }), 200
    
    except BaseException:
        abort(422)


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
