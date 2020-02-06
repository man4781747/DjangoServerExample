function BulletBehavior(Bullet) {
  // 次適用單顆子彈行為
  if (Bullet.BulletBehavior == 'ChangeColor') {
    Bullet.BulletColor = Bullet.BulletBehaviorInput;
  }

  if (Bullet.BulletBehavior == 'ChangeSize') {
    Bullet.BulletSize = Bullet.BulletBehaviorInput;
  }

  if (Bullet.BulletBehavior == 'ChangeSpeed') {
    Bullet.BulletVValue = Bullet.BulletBehaviorInput;
    Bullet.BulletV = Bullet.BulletVFace.copy().setMag(Bullet.BulletVValue);
  }


  if (Bullet.BulletBehavior == 'AddSpeed') {
    Bullet.BulletVValue += Bullet.BulletBehaviorInput;
    Bullet.BulletV = Bullet.BulletVFace.copy().setMag(Bullet.BulletVValue);
  }

  if (Bullet.BulletBehavior == 'RotateFace') {
    Bullet.BulletVFace.rotate(Bullet.BulletBehaviorInput);
    Bullet.BulletV = Bullet.BulletVFace.copy().setMag(Bullet.BulletVValue);
  }

  if (Bullet.BulletBehavior == 'AddRotateFace') {
    Bullet.BulletVFace.rotate(Bullet.BulletBehaviorInput);
    Bullet.BulletV = Bullet.BulletVFace.copy().setMag(Bullet.BulletVValue);
  }

  if (Bullet.BulletBehavior == 'test1') {
    Bullet.BulletV.rotate(PI/200);
    Bullet.BulletV.add(Bullet.BulletV.copy().setMag(0.001));
  }

  else if (Bullet.BulletBehavior == 'LinearMotion') {
    // 單顆子彈直線等速運動
    Bullet.BulletPosition.add(Bullet.BulletV);
  }

  else if (Bullet.BulletBehavior == 'Stop') {
    // 單顆子彈停止運動
    Bullet.BulletVValue = 0;
    Bullet.BulletV = Bullet.BulletVFace.copy().setMag(0);
  }

  else if (Bullet.BulletBehavior == 'TestBullet'){
    // Bullet.BulletPosition = Bullet.BulletPosition.copy().add(Bullet.BulletV)
    Bullet.BulletV.rotate(-PI/200);
    Bullet.BulletV.add(Bullet.BulletV.copy().setMag(0.001));
  }

  else if (Bullet.BulletBehavior == 'FaceToMouse') {
    Bullet.BulletVFace = createVector(mouseX-Bullet.BulletPosition.x,
                                      mouseY-Bullet.BulletPosition.y).setMag(1);
    Bullet.BulletV = Bullet.BulletVFace.copy().setMag(Bullet.BulletVValue);
  }

  else if (Bullet.BulletBehavior == 'SlightRightTurn') {
    Bullet.BulletV.rotate(PI/800);
    Bullet.BulletV.add(Bullet.BulletV.copy().setMag(0.001));

  }

  else if (Bullet.BulletBehavior == 'SlightLeftTurn') {
    Bullet.BulletV.rotate(-PI/800);
    Bullet.BulletV.add(Bullet.BulletV.copy().setMag(0.0001));
  }

  else if (Bullet.BulletBehavior == 'Died') {
    Bullet.BulletSurvive = false;
  }

  else if (Bullet.BulletBehavior == 'Split_Sakura'){
    Bullet.BulletSurvive = false;
    Magazine('Sakura5', Bullet.BulletPosition, Bullet);
  }

  else if (Bullet.BulletBehavior == 'Split_Sakura'){
    Bullet.BulletSurvive = false;
    Magazine('Sakura5', Bullet.BulletPosition);
  }

  else if (Bullet.BulletBehavior == 'Split_Rain'){
    Bullet.BulletSurvive = false;
    Magazine('Rain', Bullet.BulletPosition);
  }

  else if (Bullet.BulletBehavior == 'RotateRight90'){
    Bullet.BulletV.rotate(PI/2);
  }

  else if (Bullet.BulletBehavior == 'RotateLeft90'){
    Bullet.BulletV.rotate(-PI/2);
  }

  else if (Bullet.BulletBehavior == 'ReturnIn100'){
    if (Bullet.BulletA == 0) {
      Bullet.BulletA = Bullet.BulletV.copy().setMag(3/100).rotate(PI);
    }
    Bullet.BulletV.add(Bullet.BulletA);
  }

  else if (Bullet.BulletBehavior == 'Split_Branch3'){
    Magazine('Branch3', Bullet.BulletPosition, Bullet);
  }

  else if (Bullet.BulletBehavior == 'Gravity'){
    Bullet.BulletV.add(new createVector(0,0.1));
    if (Bullet.BulletV.mag()>3) {
      Bullet.BulletV.setMag(3);
    }
  }

  else if (Bullet.BulletBehavior == 'ToPosition') {
    Bullet.BulletVFace = createVector(Bullet.BulletBehaviorInput[0].x-Bullet.BulletPosition.x,
                                      Bullet.BulletBehaviorInput[0].y-Bullet.BulletPosition.y);
    Bullet.BulletVValue = Bullet.BulletVFace.mag()/Bullet.BulletBehaviorInput[1];
    Bullet.BulletVFace = createVector(Bullet.BulletBehaviorInput[0].x-Bullet.BulletPosition.x,
                                      Bullet.BulletBehaviorInput[0].y-Bullet.BulletPosition.y).setMag(1)
    Bullet.BulletV = Bullet.BulletVFace.copy().setMag(Bullet.BulletVValue);
  }

  else {

  }
}
