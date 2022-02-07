from flask import Flask
from flask_cors import CORS
from flask_restful import Api

from apps.controller import Apps
from directory.controller import Home, Directory
from files.controller import OpenFile

app = Flask(__name__)
api = Api(app)
cors = CORS(app)

app.config['APPLICATION_ROOT'] = '/api/v1'
app.config['CORS_HEADERS'] = 'Content-Type'

api.add_resource(Home, "/api/v1/")
api.add_resource(Apps, "/api/v1/apps")
api.add_resource(OpenFile, "/api/v1/open-file")
api.add_resource(Directory, "/api/v1/<path:sub_path>")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
