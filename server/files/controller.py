from flask import request
from flask_restful import Resource

from files.service import system_open_file


class OpenFile(Resource):
    @classmethod
    def get(cls):
        data = request.get_json()
        system_open_file(data['path'])

        return '', 204
