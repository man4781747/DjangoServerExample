function Bullet(BulletStartPosition, BulletStartFace, BulletBehaviorList, BulletImage) {
  this.BulletPosition = BulletStartPosition.copy();     // 敵人子彈位置
  this.BulletVFace = BulletStartFace.copy().setMag(1);  // 敵人子彈速度單位向量
  this.BulletVValue = 3;                                // 敵人子彈速度值
  this.BulletV = this.BulletVFace.copy().setMag(this.BulletVValue);   // 敵人子彈速度向量
  this.BulletA = 0;
  this.BulletSurvive = true;                            // 子彈是否還在
  this.BulletFrameCount = 0;                            // 子彈Frame累積
  this.BulletBehaviorList = BulletBehaviorList;         // 子彈行為清單
  this.BulletBehaviorListLen = this.BulletBehaviorList.length;
  // this.BulletColor = BulletImage;
  this.BulletShow = false;                              // 子彈現行?
  this.BulletSize = 10;                                 // 子彈判定大小
  this.BulletImage = BulletImage;
};

Bullet.prototype.Show = function () {
  TotalBulletCount += 1;
  if (this.BulletShow) {
    push();
    translate(this.BulletPosition.x, this.BulletPosition.y);

    rotate(this.BulletV.copy().heading()-PI/2);
    // noStroke();
    // fill(255,0,0);
    // ellipse(0, 0, this.BulletSize, this.BulletSize);
    image(this.BulletImage, 0, 0);
    pop();
    if (DecisionPointShow) {
      push();
      noStroke();
      fill(255,0,0);
      ellipse(this.BulletPosition.x, this.BulletPosition.y, this.BulletSize, this.BulletSize);
      pop();
    }
  }
};

Bullet.prototype.Update = function () {

  if (this.BehaviorChose()) {
    BulletBehavior(this);
  };
  this.BulletPosition.add(this.BulletV);
  this.SurviveCheck();
  this.BulletFrameCount += 1;
};

Bullet.prototype.SurviveCheck = function() {
  if (this.BulletPosition.x < -GameWidth*0.25 |
      this.BulletPosition.y < -GameHeight*0.25 |
      this.BulletPosition.x > GameWidth*1.25 |
      this.BulletPosition.y > GameHeight*1.25) {
        this.BulletSurvive = false;
      }
};

Bullet.prototype.BehaviorChose = function() {
  let IfNotChange = true;
  for (let i=0;i<this.BulletBehaviorListLen;i++) {
    if (this.BulletFrameCount == this.BulletBehaviorList[i][0]){
      IfNotChange = false;
      this.BulletShow = true;
      this.BulletBehavior = this.BulletBehaviorList[i][1];
      this.BulletBehaviorInput = this.BulletBehaviorList[i][2];
      BulletBehavior(this);
    }
  }
  return IfNotChange;
}
