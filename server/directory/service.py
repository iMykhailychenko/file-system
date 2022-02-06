import os


def get_dir_list(path):
    results = {"files": [], "directories": []}
    try:
        content = os.listdir(path)
        for item in content:
            results["directories" if os.path.isdir(path + "/" + item) else "files"].append(item)
    except Exception as e:
        print(e)
    return results
