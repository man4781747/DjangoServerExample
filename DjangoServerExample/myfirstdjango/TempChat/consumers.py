from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
import json
from channels.layers import get_channel_layer
# from views import SendData
from . import TempChat_globalvar as gl


class ChatConsumer(WebsocketConsumer):
    def connect(self):
        # self.room_name = 'testRoom'
        self.room_group_name = 'TestGroup'
        print('有人連近來拉')
        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    # Receive message from WebSocket
    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        if message['StationName'] == 'Ching-Ling':
            channel_layer = get_channel_layer()
            async_to_sync(channel_layer.send)(
                self.channel_name,
                {
                    'type': 'chat_message',
                    'message': {'StationName':'Ching-Ling',
                                'DataType':'ChangeData',
                                'Data':gl.get_value('ChingLing').tolist()}
                }
            )
        elif message['StationName'] == 'Nan-Ying':
            channel_layer = get_channel_layer()
            async_to_sync(channel_layer.send)(
                self.channel_name,
                {
                    'type': 'chat_message',
                    'message': {'StationName':'Nan-Ying',
                                'DataType':'ChangeData',
                                'Data':gl.get_value('NanYing').tolist()}
                }
            )
        # SendData(self.channel_name, message)

        # Send message to room group
        # 向 self.room_group_name 廣播訊息
        # async_to_sync(self.channel_layer.group_send)(
        #     self.room_group_name,
        #     {
        #         'type': 'chat_message',
        #         'message': '測試廣播訊息'
        #     }
        # )
    # Receive message from room group
    def chat_message(self, event):
        message = event['message']
        # Send message to WebSocket
        self.send(text_data=json.dumps({
            'message': message
        }))
