from django_celery_beat.models import PeriodicTask, IntervalSchedule

def setup_periodic_tasks(sender, **kwargs):
    # Create a schedule that runs every 10 seconds
    schedule, created = IntervalSchedule.objects.get_or_create(every=5, period=IntervalSchedule.SECONDS)

    # Schedule the periodic task
    PeriodicTask.objects.get_or_create(
        interval=schedule,
        name='Fetch 2024 data every 5 seconds',
        task='sitemap.tasks.update_year_2024_data',
    )
