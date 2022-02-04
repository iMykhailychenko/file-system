import os
import json

from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

BASE_PATH = "/Users/igormikhaylichenko"


def get_response(path):
    result = {"files": [], "directories": []}

    try:
        content = os.listdir(path)
        for item in content:
            result["directories" if os.path.isdir(path + "/" + item) else "files"].append(item)
    except:
        print('Error while reading files')

    return result


def system_open_file(path):
    command = "open /Applications/Visual\ Studio\ Code.app --args " + BASE_PATH + path
    print(command)
    os.system(command)


@app.route("/open-file", methods=['POST'])
@cross_origin()
def open_file():
    data = request.get_json()
    system_open_file(data['path'])

    return {"status": "ok"}


@app.route("/")
@cross_origin()
def open_home_dir():
    return json.dumps(get_response(BASE_PATH))


@app.route("/<path:sub_path>")
@cross_origin()
def open_dir(sub_path):
    return json.dumps(get_response(BASE_PATH + "/" + sub_path))
