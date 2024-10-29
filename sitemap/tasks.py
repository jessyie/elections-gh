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
