var Img_Bullet_Aoi, Img_Bullet_Blue, Img_Bullet_Green, Img_Bullet_Purple, Img_Bullet_Red, Img_Bullet_Yellow
var Img_MagicBall_Aoi, Img_MagicBall_Green;
var Img_EctraPointsItem;
var Img_player, Img_playerBullet, Img_BombStar, Img_PlayerLife;
var Img_Boss;
function LoadAllImage() {
  let IP_Path = 'http://127.0.0.1:8000/static/STGGameData/';
  let test = IP_Path+"picture/Bullet_S_Aoi.png";
  Img_Bullet_Aoi = loadImage(test);
  Img_Bullet_Blue = loadImage(IP_Path+"picture/Bullet_S_Blue.png");
  Img_Bullet_Green = loadImage(IP_Path+"picture/Bullet_S_Green.png");
  Img_Bullet_Purple = loadImage(IP_Path+"picture/Bullet_S_Purple.png");
  Img_Bullet_Red = loadImage(IP_Path+"picture/Bullet_S_Red.png");
  Img_Bullet_Yellow = loadImage(IP_Path+"picture/Bullet_S_Yellow.png");
  Img_EctraPointsItem = loadImage(IP_Path+"picture/EctraPointsItem.png");
  Img_player = loadImage(IP_Path+"picture/Player.png");
  Img_Boss = loadImage(IP_Path+"picture/Boss.png");
  Img_playerBullet = loadImage(IP_Path+"picture/playerBullet.png");
  Img_MagicBall_Aoi = loadImage(IP_Path+"picture/MagicBall_Aoi.png");
  Img_MagicBall_Green = loadImage(IP_Path+"picture/MagicBall_Green.png");
  Img_BombStar = loadImage(IP_Path+"picture/BombStar.png");
  Img_PlayerLife = loadImage(IP_Path+"picture/PlayerLife.png");
}
