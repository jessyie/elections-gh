# from celery import shared_task
# from django.core.cache import cache
# from asgiref.sync import async_to_sync
# from channels.layers import get_channel_layer

# @shared_task(bind=True)
# def update_year_2024_data(self):
#     from .views import initialise_chart  # Assuming your logic is in views
#     data = initialise_chart(year="2024")
#     cache.set("data_2024", data, timeout=60*15)

#     # Broadcast the data using Channels
#     channel_layer = get_channel_layer()
#     async_to_sync(channel_layer.group_send)(
#         "data_updates", 
#         {
#             "type": "data_update",
#             "data": data,
#         }
#     )
#     return data




#////////////////////////

from celery import shared_task
from django.core.cache import cache
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
import os
from sqlalchemy import create_engine
from datetime import datetime
import pandas as pd
from dotenv import load_dotenv

load_dotenv()

# Get the variables from the environment
db_name = os.getenv('DB_NAME')
db_user = os.getenv('DB_USER')
db_password = os.getenv('DB_PASSWORD')
db_host = os.getenv('DB_HOST')

engine = create_engine(f'postgresql+psycopg2://{db_user}:{db_password}@{db_host}/{db_name}')


@shared_task(bind=True)
def update_year_2024_data(self):
    queryUpdateTime = """
        SELECT * FROM public."time_update"
        """

    with engine.connect() as connection:
        updateTime = pd.read_sql(queryUpdateTime, con=connection)

    if updateTime.empty:
        return "No records found in time_update table."

    # Extract the most recent timestamp
    current_time = updateTime['duration'].iloc[0]   # most recent time

    # Get the last cached time
    last_fetched_time = cache.get("last_fetched_time")

    # Proceed with data fetching only if the current time differs from the last fetched time
    if last_fetched_time is None or current_time != last_fetched_time:
        from .views import initialise_chart  # Import your function to fetch data
        data = initialise_chart(year="2024")

        # Cache the new data and update the last fetched time
        cache.set("data_2024", data, timeout=60 * 15)
        cache.set("last_fetched_time", current_time, timeout=60 * 15)

        # Use Django Channels to broadcast the data update
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            "data_updates",
            {
                "type": "data_update",
                "data": data,
            }
        )
        return data
    else:
        return "No data fetched as the latest record has not changed."