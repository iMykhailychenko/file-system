from flask import jsonify
from flask_restful import Resource

from config import BASE_PATH
from directory.service import get_dir_list


class Home(Resource):
    @classmethod
    def get(cls):
        return jsonify(get_dir_list(BASE_PATH))


class Directory(Resource):
    @classmethod
    def get(cls, sub_path):
        return jsonify(get_dir_list(BASE_PATH + "/" + sub_path))
