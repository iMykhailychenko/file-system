import os


def get_apps_list():
    results = []
    try:
        results = list(filter(lambda item: item.endswith('.app'), os.listdir('/Applications/')))
    except Exception as e:
        print(e)
    return results
