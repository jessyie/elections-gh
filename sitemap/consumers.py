from channels.generic.websocket import AsyncWebsocketConsumer
import json

class DataUpdateConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        # Join a group named 'data_updates'
        await self.channel_layer.group_add("data_updates", self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        # Leave the group when the WebSocket disconnects
        await self.channel_layer.group_discard("data_updates", self.channel_name)

    async def data_update(self, event):
        # Send the updated data to the WebSocket client
        data = event['data']
        print("Data received in WebSocket:", data)  # Log data
        await self.send(text_data=json.dumps(data))
