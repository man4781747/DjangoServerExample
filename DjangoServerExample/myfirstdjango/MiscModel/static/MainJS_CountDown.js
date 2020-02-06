var MainDiv;
var Days, Seconds;
function setup() {
  frameRate(1);
  noCanvas();
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://"+window.location.host+"/MiscModel/Countdown",false);
  xhttp.send();
  Days = JSON.parse(xhttp.response)['Days'];
  Seconds = JSON.parse(xhttp.response)['Seconds'];
  MainDiv = createDiv();
  MainDiv.id('testID')
  MainDiv.class('testClass')
}


function draw() {
  Hour = Math.floor(Seconds/3600);
  Minute = Math.floor((Seconds - Hour*3600)/60)
  Second = Seconds - Hour*3600 - Minute*60
  MainDiv.html('離隊伍還有倒數 '+Days+' 天 '+ Hour +' 時 '+ Minute +' 分 '+ Second +' 秒 ')
  Seconds -= 1;
  if (Seconds < 0 ){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://"+window.location.host+"/MiscModel/Countdown",false);
    xhttp.send();
    Days = JSON.parse(xhttp.response)['Days'];
    Seconds = JSON.parse(xhttp.response)['Seconds'];
  }
}
