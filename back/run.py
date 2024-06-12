import sys
import importlib
from app import create_app
from config import app_config, app_active

def main():
    config = app_config[app_active]
    app = create_app(app_active)

    if __name__ == '__main__':
        app.run(host=config.IP_HOST, port=config.PORT_HOST)

main()
