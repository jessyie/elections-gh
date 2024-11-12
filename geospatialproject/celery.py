from __future__ import absolute_import, unicode_literals
import os
#import django
from celery import Celery
from django.conf import settings
from celery.schedules import crontab

# Set the default Django settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'geospatialproject.settings')

app = Celery('geospatialproject')

app.conf.enable_utc = True

app.conf.update(timezone = 'Africa/Accra')

# Configure Celery with Django settings
app.config_from_object(settings, namespace='CELERY')

# CELERY BEAT SETTINGS
app.conf.beat_schedule = {
    'update-2024-data-every-1-minute': {
        'task': 'sitemap.tasks.update_year_2024_data',
        'schedule': 60.0,  # every 60 seconds
    },
}

# Automatically discover tasks from all installed apps
app.autodiscover_tasks()

@app.task(bind=True)
def debug_task(self):
	print(f'Request: {self.request!r}')