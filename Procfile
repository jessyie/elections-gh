release: python manage.py migrate
web: web: daphne -p $PORT geospatialproject.asgi:application
celery: celery -A geospatialproject worker --pool=solo -l info
celerybeat: celery -A geospatialproject beat -l info