release: python manage.py migrate
web: daphne -p 8001 geospatialproject.asgi:application
celery: celery -A geospatialproject worker --pool=solo -l info
celerybeat: celery -A geospatialproject beat -l info