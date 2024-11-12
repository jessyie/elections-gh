from django_celery_beat.models import PeriodicTask, IntervalSchedule

def setup_periodic_tasks(sender, **kwargs):
    # Create a schedule that runs every 10 seconds
    schedule, created = IntervalSchedule.objects.get_or_create(every=60, period=IntervalSchedule.SECONDS)

    # Schedule the periodic task
    PeriodicTask.objects.get_or_create(
        interval=schedule,
        name='Fetch 2024 data every 1 minute',
        task='sitemap.tasks.update_year_2024_data',
    )
