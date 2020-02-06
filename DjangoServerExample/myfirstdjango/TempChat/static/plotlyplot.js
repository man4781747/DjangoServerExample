/*
此程式為控制感測器 數據-時間折線圖的繪畫

變數 layout 控制折線圖的參數 詳細在 plotly_set.js
*/

/*
DrawUpdateSingle(StationIndex, Data_SingleIndex)
只對單一視窗的摺線圖做更新重繪
Input:
  1. StationIndex: INT 指的是要選擇的站的Index
  2. Data_SingleIndex: INT 想要更新的感測器的Index
*/
function DrawUpdateSingle(StationIndex, Data_SingleIndex) {
  let DrawData_x = [];
  let DrawData_y = [];
  for (let i=0;i<DataLenMax[StationIndex];i++) {
    DrawData_x[i] = AllStationData[StationIndex][0][i];
    DrawData_y[i] = AllStationData[StationIndex][1][Data_SingleIndex][i];
  }
  let tt = {
    x: DrawData_x,
    y: DrawData_y,
    type: 'scatter',
    line: LineStyle
  };
  Plotly.newPlot('PlotDiv'+StationInfo[StationIndex].sensors[Data_SingleIndex], [tt],layout);
}

/*
更新指定站下所有感測器的摺線圖
*/
function DrawUpdateAll(StationIndex) {
  // console.log(AllStationData)
  for (let i=0;i<AllStationData[StationIndex][1].length;i++){
    if (select('#PlotDiv'+StationInfo[StationIndex].sensors[i])){
      let DrawData_x = [];
      let DrawData_y = [];
      for (let j=0;j<DataLenMax[StationIndex];j++) {
        DrawData_x[j] = AllStationData[StationIndex][0][AllStationData[StationIndex][0].length-j];
        DrawData_y[j] = AllStationData[StationIndex][1][i][AllStationData[StationIndex][1][i].length-j];
      }
      let tt = {
        x: DrawData_x,
        y: DrawData_y,
        type: 'scatter',
        line: LineStyle
      };
      Plotly.newPlot('PlotDiv'+StationInfo[StationIndex].sensors[i], [tt],layout);
    }
  }
}
