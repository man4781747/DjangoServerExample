// 敵人行為設計
// 依紀錄之 Enemy.EnemyBehavior 來改變 Enemy 的參數
// Enemy.EnemyBehaviorInput:
//       1. Enemy: Enemy 物件
//       2. Enemy.EnemyBehavior: String or Number
//       3. Enemy.EnemyBehaviorInput: 依 Enemy.EnemyBehavior 不同有不同所需之 Enemy.EnemyBehaviorInput
function EnemyBehavior(Enemy) {

  // 令 Enemy 順時針轉 PI/100 弧度後移動位置
  if (Enemy.EnemyBehavior == 'test1') {
    Enemy.EnemyVFace.rotate(PI/100);
    Enemy.EnemyV.rotate(PI/100);
  }

  // 令 Enemy 停止不動
  else if (Enemy.EnemyBehavior == 'Stop') {
    Enemy.EnemyVValue = 0;
    Enemy.EnemyV.setMag(0);
  }

  // 令 Enemy 做直線等速運動
  else if (Enemy.EnemyBehavior == 'LinearMotion') {

  }

  else if (Enemy.EnemyBehavior == 'BossTest') {
    Enemy.EnemyVFace.rotate(PI/6);
    Enemy.EnemyV.rotate(PI/6);
  }

  else if (Enemy.EnemyBehavior == 'BossTest_2') {
    Enemy.EnemyVFace.rotate(-PI*2/3);
    Enemy.EnemyV.rotate(-PI*2/3);
  }

  // 令 Enemy 死亡
  else if (Enemy.EnemyBehavior == 'Died') {
    Enemy.EnemySurvive = false;
  }

  // 令 Enemy 中記錄 Enemy 運動時間紀錄之參數重設為指定數值
  else if ((typeof Enemy.EnemyBehavior) == 'number') {
    Enemy.EnemyFrameCount_Position = Enemy.EnemyBehavior;
  }

  // 令 Enemy 的速度方向順時針旋轉 Enemy.EnemyBehaviorInput 弧度並移動
  else if (Enemy.EnemyBehavior == 'RotateEnemyVFave') {
    Enemy.EnemyVFace.rotate(Enemy.EnemyBehaviorInput);
    Enemy.EnemyV.rotate(Enemy.EnemyBehaviorInput);
  }

  // 令 Enemy 的速度量值訂增加 Enemy.EnemyBehaviorInput
  else if (Enemy.EnemyBehavior == 'AddVValue') {
    Enemy.EnemyVValue += Enemy.EnemyBehaviorInput;
    Enemy.EnemyV = Enemy.EnemyVFace.copy().setMag(Enemy.EnemyVValue);
  }

  // 指定 Enemy 的速度量值訂為 Enemy.EnemyBehaviorInput
  else if (Enemy.EnemyBehavior == 'SetVValue') {
    Enemy.EnemyVValue = Enemy.EnemyBehaviorInput;
    Enemy.EnemyV = Enemy.EnemyVFace.copy().setMag(Enemy.EnemyVValue);
  }

  // 指定 Enemy 的速度方向訂為 Enemy.EnemyBehaviorInput
  else if (Enemy.EnemyBehavior == 'SetVFace') {
    Enemy.EnemyVFace = new createVector(Enemy.EnemyBehaviorInput[0], Enemy.EnemyBehaviorInput[1]);
    Enemy.EnemyV = Enemy.EnemyVFace.copy().setMag(Enemy.EnemyVValue);
  }

  // 指定 Enemy 的速度方向訂為 Enemy.EnemyBehaviorInput
  else if (Enemy.EnemyBehavior == 'RandomVFace') {
    let RandomVFace = Math.random()*2*PI;
    Enemy.EnemyVFace.rotate(RandomVFace);
    Enemy.EnemyV.rotate(RandomVFace);
  }

  // 指定 Enemy 的速度方向訂為 Enemy.EnemyBehaviorInput
  else if (Enemy.EnemyBehavior == 'RandomVValue') {
    let RandomVValue = Math.random()*Enemy.EnemyBehaviorInput;
    Enemy.EnemyVValue = RandomVValue;
    Enemy.EnemyV = Enemy.EnemyVFace.copy().setMag(RandomVValue);
  }

  //
  else if (Enemy.EnemyBehavior == 'ToPosition') {
    let ToDestination = new createVector(Enemy.EnemyBehaviorInput[0], Enemy.EnemyBehaviorInput[1]).add(
      Enemy.EnemyPosition.copy().rotate(PI)
    )
    Enemy.EnemyVValue = ToDestination.mag()/Enemy.EnemyBehaviorInput[2];
    Enemy.EnemyVFace = ToDestination.setMag(1);
    Enemy.EnemyV = Enemy.EnemyVFace.copy().setMag(Enemy.EnemyVValue);
  }

  else if (Enemy.EnemyBehavior == 'SetHP') {
    Enemy.EnemyLife = Enemy.EnemyBehaviorInput;
  }

  else if (Enemy.EnemyBehavior == 'AddHP') {
    Enemy.EnemyLife += Enemy.EnemyBehaviorInput;
  }

  else if (Enemy.EnemyBehavior == 'HurtableSet') {
    Enemy.EnemyHurtable = Enemy.EnemyBehaviorInput;
  }

  else if (Enemy.EnemyBehavior == 'EnemyScreenLockSet') {
    Enemy.EnemyScreenLock = Enemy.EnemyBehaviorInput;
  }

  else if (Enemy.EnemyBehavior == 'KillAllBullets') {
    for (let i=0;i<AllBullets.length;i++){
      AllBullets[i].BulletSurvive =false;
      EctraPointsItemList[EctraPointsItemList.length] = new EctraPointsItem(AllBullets[i].BulletPosition, 'Bomb');
    }
  }

  else if (Enemy.EnemyBehavior == 'MagazineListSet') {
    Enemy.MagazineList = Enemy.EnemyBehaviorInput;
  }
}
