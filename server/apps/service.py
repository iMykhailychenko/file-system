import os

from config import apps_list


def get_apps_list():
    results = []
    try:
        results = list(filter(lambda item: item in apps_list, os.listdir('/Applications/')))
    except Exception as e:
        print(e)
    return results
