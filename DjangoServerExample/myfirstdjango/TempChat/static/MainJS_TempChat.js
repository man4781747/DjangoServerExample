var MainWindowDiv;
var AllData_Y,AllData_M,AllData_D,AllData_H,AllData_Min,AllData_S;
var AllData_Time;
var AllData_Temp1,AllData_Temp2,AllData_Temp3,AllData_Temp4,AllData_Press,AllData_Hum1,AllData_Hum2;
var NanData_Time, NanData_Temp, NanData_Press, NanData_Hum;
var trace;
var test_num;
var AllStationData;


function setup() {
  AllStationData = [];

/*
  開啟網頁後 第一步就對伺服器傳送websock的請求
  格式
  'message': {
    'StationName': 要求資料的站名,
    'DataLen':     要求的資料長度最大值
            }

  在 WebSocket.js 中設定網頁接收伺服器的 WebSocket 廣播反應
*/

  createCanvas(windowWidth, windowHeight);
  setTimeout(function(){
    for (let i = 0;i<StationInfo.length;i++){
      chatSocket.send(JSON.stringify({
          'message': {'StationName':StationInfo[i].name,
                      'DataLen':DataLenMax[i]}
      }));
    }
   }, 1000);

  // setTimeout(function(){ MainWindow(); }, 1000);
}

function draw() {
  if (AllStationData.length==0) {
    console.log('資料尚未讀取完成');
    background(0);
    textAlign(CENTER);
    fill(255);
    stroke(255);
    strokeWeight(2);
    textSize(50);
    text('讀取資料當中.....', windowWidth/2, windowHeight/2);

  } else {
    BuildWindow();
    noLoop();
    console.log('OK')
  }
}
