import os
import json
import random
import string
from urllib import response
from flask import Flask, jsonify, request, abort, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_cors import cross_origin
import validators
from validators import ValidationFailure
from database.models import setup_db, db_drop_and_create_all, Url

app = Flask(__name__)
setup_db(app)
# CORS(app)

# db_drop_and_create_all()



def random_string(N):
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

def is_string_a_url(url_string: str) -> bool:
# Checks if string is a valid URL. If it is, returns True. Otherwise Returns False
    result = validators.url(url_string)

    if isinstance(result, ValidationFailure):
        return False

    return result


# Gets all the urls
@app.route('/')
@cross_origin()
def get_urls():

    query = Url.query.all()

    urls = [url.format() for url in query]


    return jsonify({
        'success': True,
        'urls': urls
    }), 200


# Creates new short url and saves it together with long url in database
@app.route('/url', methods=['POST'])
@cross_origin()
def add_url():
    # Gets long url data from the body of the request
    body = request.get_json()
    new_long_url = body.get('new_url', None).replace(" ", "")
    # If there is no data from the user, abort the request
    if len(new_long_url) == 0:
        return jsonify({
            "success": False,
            "message": "empty string"
        }), 404

    if 'http' not in new_long_url:
        new_long_url = 'http://' + new_long_url

    # Check if string is a valid url, else abort
    if not is_string_a_url(new_long_url):
        return jsonify({
            "success": False,
            "message": "Provide a valid URL"
        }), 404

    # check if new_long_url is in the database, if it is return existing entry
    query_long_url = Url.query.filter(Url.long_url == new_long_url).one_or_none()
    if query_long_url is not None:
        url = {
            "id": query_long_url.id,
            "long_url": query_long_url.long_url,
            "short_url":request.root_url + query_long_url.short_url,
            "short_code": query_long_url.short_url
        }

        return jsonify({
            "success": True,
            "url": url
        }), 200

    # Call function to generate new string to be used for the short_url
    new_str = random_string(4)

    try:
        url = Url(
            long_url=new_long_url,
            short_url=new_str
        )

        url.insert()
        # Update short_url to return to the user the base/root url with the randomly generated string, without adding the root_url to the database. Because the random string will be used in hitting the endpoint to get and redirect to the long url that matches with the long_url.
        url.short_code = url.short_url
        url.short_url = request.root_url + new_str
        url = url.format()
    
        return jsonify({
            "success": True,
            "url": url
        }), 200
    
    except BaseException:
        abort(422)

# Redirects all requests to the short URL to the full URL.
@app.route('/<short_url>')
@cross_origin()
def redirect_to_long_url(short_url):
    url = Url.query.filter(Url.short_url==short_url).one_or_none()

    print(url.long_url)
    if url is None:
        abort(404)
    # if 'http' in url:
    try:
        if url is not None:
            
            return redirect(str(url.long_url), code=302)
    except:
        abort(422)

# Deletes url
@app.route('/<id>', methods=['DELETE'])
@cross_origin()
def delete_url(id):
   
    try:
        url = Url.query.filter(Url.id==id).one_or_none()

        if url is None:
            abort(404)
    
        url.delete()
    
        return jsonify({
                "success": True,
                "id": id
            }), 200

    except:
        abort(422)



# Error Handler
@app.errorhandler(400)
def bad_request(error):
    return jsonify({
        "success": False,
        "error": 400,
        "message": "Bad request"
    }), 400

@app.errorhandler(404)
def not_found(error):
    return jsonify({
        "success": False,
        "error": 404,
        "message": "Resource not found"
    }), 404


@app.errorhandler(405)
def not_allowed(error):
    return jsonify({
        "success": False,
        "error": 405,
        "message": "Method not allowed"
    }), 405

@app.errorhandler(422)
def unprocessed_request(error):
    return jsonify({
        "success": False,
        "error": 422,
        "message": "This request is unprocessable"
    }), 422


@app.errorhandler(500)
def internal_server_error(error):
    return jsonify({
        "success": False,
        "error": 500,
        "message": "Internal server error, please try again later"
    }), 500
