from django.shortcuts import render
from django.utils.safestring import mark_safe
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import os
import numpy as np
global ChingLingTemporarilyData
global NanYingTemporarilyData
ChingLingTemporarilyData = np.zeros((0,14))
NanYingTemporarilyData = np.zeros((0,9))
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

import time

LoadOldDataFileName = r'/data2/man4781747/{0}Data/{1}.npy'

# 調用 '/home/man4781747/DjangoServer/myfirstdjango/TempChat' 下的 globalvar.py模組
'''
gl 內儲存的資料為 np.array 型式
內部資料 'str'
範例:
np.array(
        年    月    日   時   分   秒    資料1     資料2   資料3
    [['2020' '01' '30' '17' '32' '32' '1007.24' '52.07' '25.47']
     ['2020' '01' '30' '17' '32' '42' '1007.25' '52.08' '25.46']
     ['2020' '01' '30' '17' '32' '52' '1007.36' '52.07' '25.47']
     ['2020' '01' '30' '17' '33' '02' '1007.38' '52.05' '25.48']]
)
'''
from . import TempChat_globalvar as gl
gl._init()
try:
    gl.set_value('ChingLing', np.load(LoadOldDataFileName.format('ChingLing',time.strftime("%Y%m%d", time.localtime()))))
except:
    gl.set_value('ChingLing', np.zeros((0,14)))
try:
    gl.set_value('NanYing', np.load(LoadOldDataFileName.format('NanYing',time.strftime("%Y%m%d", time.localtime()))))
except:
    gl.set_value('NanYing', np.zeros((0,9)))

# 開啟網頁時給出的回應
def indexTempChat(request):
    return render(request, 'chat/TempChat.html', {})

# 測試用  IP/TempChat/test/
@csrf_exempt
def test(request):
    # print(type(request.POST.getlist('Hour')))
    global ChingLingTemporarilyData
    # print(len(ChingLingTemporarilyData))
    return JsonResponse({'test':'ttt'})


# "ChingLing"站資料回傳時伺服器的行為
@csrf_exempt
def GetChingLingData(request):
    # 從 gl 資料中拿取 'ChingLing' 的資料
    ChingLingTemporarilyData =gl.get_value('ChingLing')
    # 將儀器端回傳的字串處理
    GetPOSTData = np.array([request.body.decode("utf-8").split(' \t')])
    # 擴增資料 將新資料加入至Arrayy最後端
    ChingLingTemporarilyData = np.append(ChingLingTemporarilyData, GetPOSTData,axis=0)
    if len(ChingLingTemporarilyData)>4320:
        ChingLingTemporarilyData = ChingLingTemporarilyData[len(ChingLingTemporarilyData)-4320:]

    # 更新gl資料
    gl.set_value('ChingLing', ChingLingTemporarilyData)

    DataFileName = r'/data2/man4781747/ChingLingData/{0:04d}{1:02d}{2:02d}.npy'.format(
      int(GetPOSTData[0,0]),
      int(GetPOSTData[0,1]),
      int(GetPOSTData[0,2]))

    if not os.path.isdir(r'/data2/man4781747/ChingLingData/'):
        os.makedirs(r'/data2/man4781747/ChingLingData/')
    # 將單日資料存檔 每收筆更新一次
    '''
    儲存的檔案形式為 numpy 的 npy 檔
    內容為 np.array 型式
    內部資料 'str'
    '''
    # 若不存在當日資料 創建一個
    if not os.path.isfile(DataFileName):
        np.save(DataFileName, GetPOSTData)
    # 若存在 將新資料加入並存檔
    else:
        OldDataLoad = np.load(DataFileName)
        OldDataLoad = np.append(OldDataLoad,GetPOSTData,axis=0)
        np.save(DataFileName, OldDataLoad)
    # 將新資料廣播出去給所有連線者
    '''
    輸出格式

    {
        'type': 'chat_message',
        'message': {'StationName':'站名',
                    'DataType':'AddNewData',
                    'Data': 資料 }
    }

    其中資料格式為  list   內部資料為 'str'
    範例:
        年    月    日   時   分   秒    資料1     資料2   資料3
    [['2020' '01' '30' '17' '32' '32' '1007.24' '52.07' '25.47']
     ['2020' '01' '30' '17' '32' '42' '1007.25' '52.08' '25.46']
     ['2020' '01' '30' '17' '32' '52' '1007.36' '52.07' '25.47']
     ['2020' '01' '30' '17' '33' '02' '1007.38' '52.05' '25.48']]

    '''

    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(
        "TestGroup",
        {
            'type': 'chat_message',
            'message': {'StationName':'Ching-Ling',
                        'DataType':'AddNewData',
                        'Data':GetPOSTData[0].tolist()}
        }
    )

    return JsonResponse({'test':'ttt'})


@csrf_exempt
def GetNanYingData(request):
    # 從 gl 資料中拿取 'NanYing' 的資料
    NanYingTemporarilyData = gl.get_value('NanYing')
    # 將儀器端回傳的字串處理
    GetPOSTData = np.array([request.POST['SensorInfo'].split('xxx')[:9]])
    # 擴增資料 將新資料加入至Arrayy最後端
    NanYingTemporarilyData = np.append(NanYingTemporarilyData, GetPOSTData,axis=0)
    if len(NanYingTemporarilyData)>4320:
        NanYingTemporarilyData = NanYingTemporarilyData[len(ChingLingTemporarilyData)-4320:]
    # 更新gl資料
    gl.set_value('NanYing', NanYingTemporarilyData)

    DataFileName = r'/data2/man4781747/NanYingData/{0:04d}{1:02d}{2:02d}.npy'.format(
      int(GetPOSTData[0,0]),
      int(GetPOSTData[0,1]),
      int(GetPOSTData[0,2]))

    if not os.path.isdir(r'/data2/man4781747/NanYingData/'):
        os.makedirs(r'/data2/man4781747/NanYingData/')
    # 將單日資料存檔 每收筆更新一次
    # 若不存在當日資料 創建一個
    if not os.path.isfile(DataFileName):
        np.save(DataFileName, GetPOSTData)
    # 若存在 將新資料加入並存檔
    else:
        OldDataLoad = np.load(DataFileName)
        OldDataLoad = np.append(OldDataLoad,GetPOSTData,axis=0)
        np.save(DataFileName, OldDataLoad)

    # 將新資料廣播出去給所有連線者
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(
        "TestGroup",
        {
            'type': 'chat_message',
            'message': {'StationName':'Nan-Ying',
                        'DataType':'AddNewData',
                        'Data':GetPOSTData[0].tolist()}
        }
    )

    return JsonResponse({'test':'ttt'})


def SendData(channel_name, message):
    if message['StationName'] == 'Ching-Ling':
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.send)(
            channel_name,
            {
                'type': 'chat_message',
                'message': {'StationName':'Ching-Ling',
                            'DataType':'ChangeData',
                            'Data':ChingLingTemporarilyData}
            }
        )

# def room(request, room_name):
#     return render(request, 'chat/room.html', {
#         'room_name_json': mark_safe(json.dumps(room_name))
#     })
