import os

from config import BASE_PATH


def system_open_file(path, app):
    command = "open /Applications/" + app.replace(' ', '\ ') + " --args " + BASE_PATH + path
    os.system(command)
