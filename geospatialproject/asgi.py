"""
ASGI config for geospatialproject project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'geospatialproject.settings')

application = get_asgi_application()

# RT
# import os

# from django.core.asgi import get_asgi_application
# from channels.routing import ProtocolTypeRouter, URLRouter
# from channels.auth import AuthMiddlewareStack
# from django.urls import path
# from sitemap import consumers

# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'geospatialproject.settings')

# #application = get_asgi_application()

# application = ProtocolTypeRouter({
#     "http": get_asgi_application(),
#     "websocket": AuthMiddlewareStack(
#         URLRouter([
#             path('ws/data/', consumers.DataConsumer.as_asgi()),
#         ])
#     ),
# })
