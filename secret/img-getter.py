# -*- coding: UTF-8 -*-

"""
Author: liye
Date: 2019/3/12
Description: download instagram imgs
"""


def request_download():
    import requests
    with open("./img-link.txt", "r") as link:
        img_count = 0
        for line in link.readlines():
            print(line)
            r = requests.get(line.strip())
            with open("./{0}.jpg".format(img_count), 'wb') as f:
                f.write(r.content)
                f.close()
            img_count = img_count + 1
        link.close()


request_download()
