/*
此處設定網頁收到 WebSocket 的反應時用到的function
*/

/*
當收到的訊息是 ChangeData
則更換掉整個紀錄內容
Input:
   1. obj: WebSocket收到的內容
     格式範例:
     {
         'StationName':'Ching-Ling',
         'DataType':'ChangeData',
         'Data': [[...],[...],[...]]
      }
      詳細在 ../consumers.py 的 receive() 中
*/
function WhenGetAllData(obj) {
  // 從 DataInfo.js 中的紀錄去比對對應站名在 DataInfo 中的 Index
  let StationIndex;
  for (let i=0;i<StationInfo.length;i++){
    if (StationInfo[i].name == obj['StationName']){
      StationIndex = i;
      break;
    }
  }

  // 提取接收資料的詳細內容
  /*
  資料型式 範例:
      年    月    日   時   分   秒    資料1     資料2   資料3
    [['2020' '01' '30' '17' '32' '32' '1007.24' '52.07' '25.47']
    ['2020' '01' '30' '17' '32' '42' '1007.25' '52.08' '25.46']
    ['2020' '01' '30' '17' '32' '52' '1007.36' '52.07' '25.47']
    ['2020' '01' '30' '17' '33' '02' '1007.38' '52.05' '25.48']]

  為 二維 Array 型式
  內容為 Str
  */
  let Data_Time = [];
  let Data_All = [];
  for (let i=0;i<StationInfo[StationIndex].sensors.length;i++) {
    Data_All[i] = [];
  }
  for (let i=0;i<obj['Data'].length-1;i++){
    // 將資料合併為 年-月-日 時:分:秒  型式
    /*
     時間資料存取格式 範例:
    [['年-月-日 時:分:秒'],
    ['年-月-日 時:分:秒'],
    ['年-月-日 時:分:秒'],
    ['年-月-日 時:分:秒']]
    */
    let Info_ = obj['Data'][i];
    Data_Time.push(Info_[0]+'-'+padLeft(Info_[1].toString(),2)+'-'+
                                padLeft(Info_[2].toString(),2)+' '+
                                padLeft(Info_[3].toString(),2)+':'+
                                padLeft(Info_[4].toString(),2)+':'+
                                padLeft(Info_[5].toString(),2));

    for (let i=0;i<Data_All.length;i++){
      // 將其餘資料做整理
      /*
      資料排序範例:
        時間1     時間2    時間3
     [[1007.24, 1007.25, 1007.36],     感測器 1
      [52.07,   52.08,   52.07  ],     感測器 2
      [25.47,   25.46,   25.47  ]]     感測器 3
     */
      Data_All[i].push(parseFloat(Info_[i+6]));
    }
  }
  // 最終資料型式
  AllStationData[StationIndex] = [Data_Time, Data_All]
}

/*
當收到的訊息是 AddNewData
則只新增資料
Input:
   1. obj: WebSocket收到的內容
     格式範例:
     {
         'StationName':'Ching-Ling',
         'DataType':'AddNewData',
         'Data': [[...]]
      }
      詳細在 ../viwes.py 中
*/
function UpdateData(NewObj) {

  console.log('更新資訊:'+NewObj['StationName']);
  // 從 DataInfo.js 中的紀錄去比對對應站名在 DataInfo 中的 Index
  let StationIndex;
  for (let i=0;i<StationInfo.length;i++){
    if (StationInfo[i].name == NewObj['StationName']){
      StationIndex = i;
      break;
    }
  }
  // 提取接收資料的詳細內容
  // 若當前已存取的資料筆數達最大上限 則刪去第一筆
  if (AllStationData[StationIndex][0].length >= DataLenMax[StationIndex]) {
    AllStationData[StationIndex][0].splice(0,1);
    for (let k=0;k<NewObj['Data'][1].length;k++){
      AllStationData[StationIndex][1][k].splice(0,1);
    }
  }

  // 將新資料加入
  let Info_ = NewObj['Data'];
  AllStationData[StationIndex][0].push(Info_[0]+'-'+padLeft(Info_[1],2)+'-'+padLeft(Info_[2],2)+' '+padLeft(Info_[3],2)+':'+padLeft(Info_[4],2)+':'+padLeft(Info_[5],2));
  // 分站找尋指定元件
  if (select('#SensorDiv'+StationIndex)!=null){
    for (let i=0;i<AllStationData[StationIndex][1].length;i++){
      // 各感測器資料新增
      AllStationData[StationIndex][1][i].push(parseFloat(Info_[i+6]));
      // 刷新最新數據的內容
      select('#NowTemp'+StationInfo[StationIndex].sensors[i]).html('最新數值: '+'<br/>'+Info_[i+6]+StationInfo[StationIndex].unit[i]);
    }
  }
  // 更新完後觸發 ploylyplot.js 中的 DrawUpdateAll() 方程
  DrawUpdateAll(StationIndex);
}
