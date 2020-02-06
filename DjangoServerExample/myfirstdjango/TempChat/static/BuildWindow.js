/*
 UI 介面的建構
*/

var DataLenMax = [];
var TimeLenChoseAll = [];
// 整體框架建立 不先填入數值
function BuildWindow() {
  // 取消 p5js的默認畫布
  noCanvas();

  for (let i = 0;i<StationInfo.length;i++){
    // 預設資料最大筆數 8640 (剛好24小時)
    DataLenMax[i] = 8640;
    // 預設時間按鈕為 '24'小時內
    TimeLenChoseAll[i] = '2';
    // 站別的DIV
    let DivMake = createDiv()
    DivMake.id(StationInfo[i].name);
    DivMake.class('Station');
    // 站別 Title 物件
    let Title = createElement('h1',StationInfo[i].name);
    Title.parent(DivMake);
    Title.id('Title'+i);

    // 站標籤在滑鼠離開/移上情況下的行為
    Title.mouseOver(x => TitleChange(i,1));
    Title.mouseOut(x => TitleChange(i,0));

    // 站標籤在滑鼠點下去時的行為
    // 若是展開狀態則消滅 反之創造
    Title.mousePressed(x => {
      if (select('#SensorDiv'+i)==null){
        SensorMake(DivMake,i);
      }
      else {
        select('#SensorDiv'+i).remove();
      }
    });
  }
}

// TitleChange: 更改站標籤在滑鼠離開/移上情況下的style
function TitleChange(Id,Type) {
  let TitleSelect = select('#Title'+Id);
  if (Type==1){
    TitleSelect.style('box-shadow','10px 10px rgb(170, 120, 100)');
    TitleSelect.style('transform','translate(-5px,-5px)');
  } else {
    TitleSelect.style('box-shadow','0px 0px rgb(170, 120, 100)');
    TitleSelect.style('transform','translate(0px,0px)');
  }
}

// SensorMake: 建立各站下所有Sensor的div
function SensorMake(DivMake,i){
  let test = createDiv('');
  test.parent(DivMake);
  test.id('SensorDiv'+i);
  test.class('SensorDiv');

  // 建立時間選取按鈕
  for (let k=0;k<3;k++){
    let TimeLenChose = createDiv();
    // 24Hr / 6Hr / 1Hr
    TimeLenChose.html(TimeLenData[0].name[k]);
    TimeLenChose.class('TimeLenChose');
    TimeLenChose.id('TimeLenChose'+StationInfo[i].name+k);
    TimeLenChose.parent(test);
    let TimeLenChecked = createElement('TimeLenChecked');
    TimeLenChecked.class('TimeLenChecked'+i);
    TimeLenChecked.style('background-color','rgb(170, 120, 100)');
    TimeLenChecked.style('width','40px');
    TimeLenChecked.style('height','40px');
    TimeLenChecked.style('position','absolute');
    TimeLenChecked.style('left','-50px');
    TimeLenChecked.style('z-index','1');
    if (k==2) {
      TimeLenChecked.style('z-index','3');
    }
    TimeLenChecked.parent(TimeLenChose);
    TimeLenChose.mousePressed(x => {
                                    TimeLenChoseAll[i] = TimeLenChose.html()[0];
                                    console.log('testtest : '+TimeLenChoseAll[i]);
                                    ChangeTimeLen(i);});
  }

  // 純粹為了排列版面用
  let test_ = createDiv('');
  test_.class('test_')
  test_.parent(test);

  // 建立sensor版面
  for (let j=0;j<StationInfo[i].sensors.length;j++){
    // sensor 版面
    let SensorDiv;
    SensorDiv = createDiv();
    SensorDiv.class('Sensor');
    SensorDiv.parent(test);
    // sensor 版面標題
    createElement('h5',StationInfo[i].sensors[j]).parent(SensorDiv)

    // sensor 版面最新數值顯示
    let ControlTable;
    ControlTable = createDiv();
    ControlTable.class('ControlTable');
    ControlTable.parent(SensorDiv);
    let NowTemp;
    // let datalen = (AllStationData[i][1][j]).length -1;
    // NowTemp = createDiv('最新數值: '+'<br/>'+AllStationData[i][1][j][datalen]+StationInfo[i].unit[j]);
    NowTemp = createDiv('最新數值: ');
    NowTemp.class('NowTemp');
    NowTemp.id('NowTemp'+StationInfo[i].sensors[j]);
    NowTemp.parent(ControlTable);
    TheLatestData(i, j);

    // sensor 版面滑鼠按壓行為
    SensorDiv.mousePressed(x => {
      if (SensorDiv.size().width <= 500) {
        SensorDiv.style('width','calc(100vw - 80px)');
        PlotDiv = createDiv();
        PlotDiv.id('PlotDiv'+StationInfo[i].sensors[j])
        PlotDiv.class('PlotDiv');
        PlotDiv.parent(SensorDiv);
        DrawUpdateSingle(i, j);
      } else {
        SensorDiv.style('width','350px');
        // PlotDiv.style('width','350px');
        select('#PlotDiv'+StationInfo[i].sensors[j]).remove();
      }
    });
  }
}

function TheLatestData(StationIndex, Data_SingleIndex){
  let DivChose = select('#NowTemp'+StationInfo[StationIndex].sensors[Data_SingleIndex]);
  DivChose.html('最新數值: '+'<br/>'+
  AllStationData[StationIndex][1][Data_SingleIndex][AllStationData[StationIndex][1][Data_SingleIndex].length-1]+
  StationInfo[StationIndex].unit[Data_SingleIndex]);
}
