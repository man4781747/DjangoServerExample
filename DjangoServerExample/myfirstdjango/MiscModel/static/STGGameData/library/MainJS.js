var Magazines = [];
var EnemyList = [];
var TotalBulletCount = 0;
var AllBullets = [];
var BombHaveNum = 3;
var LifeHaveNum = 3;
// var GameWidth = 600*0.9;
// var GameHeight = 1000*0.9;
var GameFrameCount = 0;
var Players = [];
var imgtest;
var BombList = [];
var PlayerBulletList = [];
var ShakeStartNum = 0;
var GameType = 'Title';
var Cheat = false;

function setup() {
  frameRate(60);
  createCanvas(GameWidth*2, GameHeight);
  Players[0] = new Player(new createVector(GameWidth/2, GameHeight*8/9));
  background(0);
  imageMode(CENTER);
  LoadAllImage();
  LoadAllSound();
}


function draw() {
  KeyBoard(Players[0])
  background(0);

  if (GameType == 'GameIng') {
    ShakeWindow();
    // image(imgtest, 0, 0);
    // 檢查此時刻是否有敵人需要生成
    // Code 位於 EnemySpawnList.js
    EnemySpawnCheck(EnemySpawnList);

    // 消除已經死亡之敵人
    AllBombDiedCheck()
    // 清除已死亡之敵人子彈
    AllBulletsDiedCheck();
    // 清除已死亡的角色大絕
    AllBombDiedCheck()
    // 清除已死亡加分道具
    AllEctraPointsItemDiedCheck()
    // 清除已死亡之玩家子彈
    AllPlayerBulletsDiedCheck();

    // 暫時不管
    Players[0].Show();
    if (Cheat != true) {
      if (Collision_Detection(Players[0], AllBullets)) {
        LifeHaveNum -= 1;
        if (LifeHaveNum == -1) {
          GameType = 'GameOver';
        }
        Players[0] = new Player(new createVector(GameWidth/2, GameHeight*8/9));
        for (let i=0;i<AllBullets.length;i++){
          AllBullets[i].BulletSurvive = false;
        }
      }
    }


    // 玩家自動發射
    if (Players[0].playerReloadTime == Players[0].playerReloadTimeMax) {
      PlayerBulletList[PlayerBulletList.length] = new PlayerBullet(Players[0]);
      Players[0].playerReloadTime = 0;
    } else {
      Players[0].playerReloadTime +=1;
    }

    // 更新現有之加分道具
    for (let i=0;i<EctraPointsItemList.length;i++){
      EctraPointsItemList[i].Update();
      // console.log(EctraPointsItemList.length);
    }

    // 更新尚存在的玩家子彈
    for (let i=0;i<PlayerBulletList.length;i++){
      PlayerBulletList[i].Update();
    }


    // 更新尚存在的玩家大絕
    for (let i=0;i<BombList.length;i++){
      BombList[i].Update();
    }

    // 更新現有之敵人資訊
    for (let i=0;i<EnemyList.length;i++){
      EnemyList[i].Update();
    }

    // 更新現有之敵人子彈資訊
    for (let i=0;i<AllBullets.length;i++){
      AllBullets[i].Update();
      AllBullets[i].Show();
    }
    GameFrameCount += 1;
  }
  else if (GameType == 'GameStop') {
    push();
    textSize(100);
    stroke(255);
    fill(255);
    textAlign(CENTER);
    strokeWeight(2);
    text('遊戲暫停' ,GameWidth/2,GameHeight/2);
    pop();
  }
  else if (GameType == 'Title') {
    push();
    textSize(30);
    stroke(255);
    fill(255);
    textAlign(CENTER);
    strokeWeight(2);
    text('此遊戲為模仿東方系列彈幕遊戲\n按下ENTER開始' ,GameWidth/2,GameHeight/2);
    pop();
  }
  else if (GameType == 'GameOver') {
    push();
    textSize(30);
    stroke(255);
    fill(255);
    textAlign(CENTER);
    strokeWeight(2);
    text('遊戲結束\n按下ENTER重新開始' ,GameWidth/2,GameHeight/2);
    pop();
  }
  else if (GameType == 'EndGame') {
    push();
    textSize(30);
    stroke(255);
    fill(255);
    textAlign(CENTER);
    strokeWeight(2);
    text('遊戲通關!!!!\n按下ENTER重新開始' ,GameWidth/2,GameHeight/2);
    pop();
  }
////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// 前景 ///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
  // Boss血條
  for (let i=0;i<EnemyList.length;i++){
    push();
    fill(255);
    stroke(0);
    strokeWeight(2);
    rect(GameWidth/10, 30+5*i, GameWidth/5*4*(EnemyList[i].EnemyLife/EnemyList[i].EnemyLifeMax), 5+5*i);
    pop();
  }

  // 右側狀態UI
  push();
  fill(0);
  noStroke();
  rect(GameWidth, 0, GameWidth, GameHeight);
  stroke(255);
  strokeWeight(10);
  line(GameWidth+5, GameHeight, GameWidth+5, 0);

  strokeWeight(1);
  textStyle(NORMAL);
  textSize(50);
  fill(255);
  text('技能 : ' ,GameWidth+50,75);
  for (let i=0;i<Players[0].BombHaveNum;i++) {
    image(Img_BombStar , GameWidth+200+50*i,60);
  }

  text('生命 : ' ,GameWidth+50,150);
  for (let i=0;i<LifeHaveNum;i++) {
    image(Img_PlayerLife , GameWidth+200+50*i,60+75);
  }

  textSize(30);
  text('Q/W/E : 人物移動低速/普通/快速' ,GameWidth+50,300);
  text('R : 清屏技能' ,GameWidth+50,400);
  text('A : 顯示子彈判定點' ,GameWidth+50,500);
  text('空白鍵 : 遊戲暫停' ,GameWidth+50,600);
  text(AllBullets.length,0,500)
  text(PlayerBulletList.length,0,600)
  pop();
////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// END ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
}

function AllBulletsDiedCheck() {
  for (let i=AllBullets.length-1;i>=0;i--){
    if (AllBullets[i].BulletSurvive != true){
      AllBullets.splice(i,1);
    }
  }
}

function AllPlayerBulletsDiedCheck() {
  for (let i=PlayerBulletList.length-1;i>=0;i--){
    if (PlayerBulletList[i].PlayerBulletSurvive != true){
      PlayerBulletList.splice(i,1);
    }
  }
}

function AllEctraPointsItemDiedCheck() {
  for (let i=EctraPointsItemList.length-1;i>=0;i--){
    if (EctraPointsItemList[i].EctraPointsItemSurvive != true){
      EctraPointsItemList.splice(i,1);
    }
  }
}

function AllBombDiedCheck() {
  for (let i=BombList.length-1;i>=0;i--){
    if (BombList[i].BombSurvive != true){
      BombList.splice(i,1);
    }
  }
}

function AllBombDiedCheck() {
  for (let i=EnemyList.length-1;i>=0;i--){
    if (EnemyList[i].EnemySurvive != true){
      EnemyList.splice(i,1);
    }
  }
}

function ReStartGame() {
  Magazines = [];
  EnemyList = [];
  AllBullets = [];
  BombHaveNum = 3;
  LifeHaveNum = 3;
  GameFrameCount = 0;
  Players = [];
  BombList = [];
  PlayerBulletList = [];
  ShakeStartNum = 0;
  Players[0] = new Player(new createVector(GameWidth/2, GameHeight*8/9));
}
