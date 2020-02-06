function Enemy(Position, Face, EnemyBehaviorList, MagazineList = [PetalTest]){
  this.EnemyPosition = Position;
  this.EnemyVFace = createVector(0,1);
  this.EnemyVValue = 3;
  this.EnemyV = this.EnemyVFace.copy().setMag(this.EnemyVValue);
  this.EnemyShapePoint = [
    new createVector(this.EnemyPosition.x+20, this.EnemyPosition.y+30),
    new createVector(this.EnemyPosition.x-20, this.EnemyPosition.y+30),
    new createVector(this.EnemyPosition.x-20, this.EnemyPosition.y-30),
    new createVector(this.EnemyPosition.x+20, this.EnemyPosition.y-30),
  ];
  this.EnemyBehaviorList = EnemyBehaviorList;
  this.EnemyFace = Face;
  this.MagazineList = MagazineList;
  this.EnemyFrameCount_Position = 0;
  this.EnemyFrameCount_Bullet = 0;
  this.EnemyFrameCount_Total = 0;
  // this.MagazineListFin = [];
  this.EnemySurvive = true;
  this.EnemyLifeMax = 1000;
  this.EnemyLife = this.EnemyLifeMax;
  this.EnemyHurtable = true;
  this.EnemyScreenLock = false;
}

Enemy.prototype.Show = function() {
  push();
  noStroke();
  fill(255,0,0);
  ellipse(this.EnemyPosition.x, this.EnemyPosition.y, 5, 5);
  image(Img_Boss, this.EnemyPosition.x, this.EnemyPosition.y)
  pop();
}


Enemy.prototype.Update = function() {
  if (this.EnemyLife <= 0) {
    this.EnemySurvive = false;
  }
  if (this.EnemyBehaviorChose(this, this.EnemyFrameCount_Position)) {
    EnemyBehavior(this);
  }
  this.EnemyPosition.add(this.EnemyV);
  console.log(this.EnemyFrameCount_Position)
  this.MagazineCheck();
  this.EnemyShapePoint = [
    new createVector(this.EnemyPosition.x+20, this.EnemyPosition.y+30),
    new createVector(this.EnemyPosition.x-20, this.EnemyPosition.y+30),
    new createVector(this.EnemyPosition.x-20, this.EnemyPosition.y-30),
    new createVector(this.EnemyPosition.x+20, this.EnemyPosition.y-30),
  ];
  if (this.EnemyScreenLock) {
    if (this.EnemyPosition.x > GameWidth*9/10) {
      this.EnemyPosition.x = GameWidth*9/10;
    } else if (this.EnemyPosition.x < GameWidth/10) {
      this.EnemyPosition.x = GameWidth/10;
    }
    if (this.EnemyPosition.y > GameHeight*2/5) {
      this.EnemyPosition.y = GameHeight*2/5;
    } else if (this.EnemyPosition.y < 50) {
      this.EnemyPosition.y = 50;
    }
  }
  this.Show();
  this.SurviveCheck();
  this.EnemyFrameCount_Position += 1;
  this.EnemyFrameCount_Bullet += 1;
  this.EnemyFrameCount_Total += 1;
}

Enemy.prototype.MagazineCheck = function () {
  for (let j=0;j<this.MagazineList.length;j++){
    for (let i=0;i<this.MagazineList[j].length;i++){
      if (this.EnemyFrameCount_Bullet == this.MagazineList[j][i][0]) {
        Magazine(this.MagazineList[j][i][1], this.EnemyPosition, this);
      }
    }
  }
};

Enemy.prototype.EnemyBehaviorChose = function () {
  let IfNoUpdate = true;
  for (let i=0;i<this.EnemyBehaviorList.length;i++) {
    if (this.EnemyFrameCount_Position == this.EnemyBehaviorList[i][0]){
      IfNoUpdate = false;
      this.EnemyBehavior = this.EnemyBehaviorList[i][1];
      this.EnemyBehaviorInput = this.EnemyBehaviorList[i][2];
      EnemyBehavior(this);
    } else if (this.EnemyBehaviorList[i][0] == 'DiedAndSpawn') {
      if (this.EnemySurvive == false) {
        EnemyList[EnemyList.length] = new Enemy(
          this.EnemyPosition,
          'test',
          this.EnemyBehaviorList[i][1],
          [NarudoTest])
      }
    } else if (this.EnemyBehaviorList[i][0] == 'DiedEndGame') {
      if (this.EnemySurvive == false) {
        GameType = 'EndGame';
      }
    }
  }
  return IfNoUpdate;
}

Enemy.prototype.SurviveCheck = function() {
  if (this.EnemyPosition.x < 0 |
      this.EnemyPosition.y < 0 |
      this.EnemyPosition.x > GameWidth |
      this.EnemyPosition.y > GameHeight) {
        // console.log('test');
        this.EnemySurvive = false;
      }
};
