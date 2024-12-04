release: python manage.py migrate
web: daphne -b 0.0.0.0 -p $PORT geospatialproject.asgi:application
celery: celery -A geospatialproject worker --pool=solo -l info
celerybeat: celery -A geospatialproject beat -l info