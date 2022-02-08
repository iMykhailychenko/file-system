from flask import request
from flask_restful import Resource

from files.service import system_open_file


class OpenFile(Resource):
    @classmethod
    def post(cls):
        data = request.get_json()
        system_open_file(data['path'], data['app'])

        return '', 204
