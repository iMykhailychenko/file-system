from flask import jsonify
from flask_restful import Resource

from apps.service import get_apps_list


class Apps(Resource):
    @classmethod
    def get(cls):
        return jsonify(get_apps_list())
