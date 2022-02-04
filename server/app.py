import os
import json

from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

BASE_PATH = "/Users/igormikhaylichenko"


def get_dir_list(path):
    results = {"files": [], "directories": []}
    try:
        content = os.listdir(path)
        for item in content:
            results["directories" if os.path.isdir(path + "/" + item) else "files"].append(item)
    except Exception as e:
        print(e)
    return results


def get_apps_list():
    results = []
    try:
        results = list(filter(lambda item: item.endswith('.app'), os.listdir('/Applications/')))
    except Exception as e:
        print(e)
    return results


def system_open_file(path):
    command = "open /Applications/Visual\ Studio\ Code.app --args " + BASE_PATH + path
    os.system(command)


@app.route("/open-file", methods=['POST'])
@cross_origin()
def open_file():
    data = request.get_json()
    system_open_file(data['path'])

    return '', 204


@app.route("/apps")
@cross_origin()
def apps_list():
    return json.dumps(get_apps_list())


@app.route("/")
@cross_origin()
def open_home_dir():
    return json.dumps(get_dir_list(BASE_PATH))


@app.route("/<path:sub_path>")
@cross_origin()
def open_dir(sub_path):
    return json.dumps(get_dir_list(BASE_PATH + "/" + sub_path))
