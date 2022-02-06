from flask import Flask
from flask_cors import CORS
from flask_restful import Api

from apps.controller import Apps
from directory.controller import Home, Directory
from files.controller import OpenFile

app = Flask(__name__)
api = Api(app)
cors = CORS(app)

app.config['CORS_HEADERS'] = 'Content-Type'

api.add_resource(Home, "/")
api.add_resource(Apps, "/apps")
api.add_resource(OpenFile, "/open-file")
api.add_resource(Directory, "/<path:sub_path>")

if __name__ == "__main__":
    api.init_app(app)
    app.run(debug=True, host="0.0.0.0", port=5000)
