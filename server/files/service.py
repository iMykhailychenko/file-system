import os

from config import BASE_PATH


def system_open_file(path):
    command = "open /Applications/Visual\ Studio\ Code.app --args " + BASE_PATH + path
    os.system(command)
