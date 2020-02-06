var today=new Date();
yr=today.getFullYear();
mh=today.getMonth()+1;
dy=today.getDate();
document.getElementById("in1").value=yr;
document.getElementById("in2").value=mh;
document.getElementById("in3").value=dy;

var synmonth = 29.530588853;     //synodic month (new Moon to new Moon)

var area="台灣、大陸、香港、澳門、外蒙古、美國、加拿大、朝鮮、韓國、日本、菲律賓、馬來西亞、印尼、新加坡、東帝汶、汶萊、越南、柬埔寨、寮國、緬甸、泰國、尼泊爾、錫金、不丹、孟加拉、印度、斯里蘭卡、馬爾代夫、哈薩克、吉爾吉斯、巴基斯坦、烏茲別克、阿富汗、塔吉克、土庫曼、阿曼、阿聯酋、卡塔爾、巴林、伊朗、亞塞拜然、科威特、亞美尼亞、沙烏地阿拉伯、葉門、伊拉克、敘利亞、黎巴嫩、約旦、以色列及巴勒斯坦、塞浦路斯、土耳其、羅馬尼亞、保加利亞、希臘、馬其頓、波蘭、南斯拉夫、阿爾巴尼亞、匈牙利、斯洛伐克、捷克、克羅地亞、斯洛文尼亞、馬爾他、奧地利、德國、丹麥、挪威、瑞典、芬蘭、瑞士、荷蘭、比利時、盧森堡、英國、愛爾蘭、法國、西班牙、葡萄牙、意大利、梵蒂岡、冰島、古巴、巴哈馬、牙買加、海地、墨西哥、危地馬拉、伯利茲、薩爾瓦多、洪都拉斯、尼加拉瓜、哥斯達黎加、巴拿馬、厄瓜多爾、哥倫比亞、秘魯、智利、多米尼加、委內瑞拉、玻利維亞、多米尼克國、阿根廷、圭亞那、巴拉圭、烏拉圭、蘇裏南、巴西、埃及、蘇丹、索馬裏、坦桑尼亞、烏幹達、中非、查德、利比亞、喀麥隆、突尼斯、加蓬、赤道幾內亞、阿爾及利亞、摩洛哥、西撒哈拉、茅利塔尼亞、塞內加爾、岡比亞、馬裏、象牙海岸、加納、肯雅、馬拉維、莫三比克、辛巴威、盧旺達、尚比亞、薩伊、剛果、安哥拉、南非、馬達加斯加、紐西蘭、澳大利亞、巴布亞新幾內亞、所羅門群島、斐濟、俄羅斯、白俄羅斯、烏克蘭、莫爾達瓦、立陶宛、愛沙尼亞";

var city="台北市、高雄市、基隆市、新竹市、台中市、台南市、台北縣、宜蘭縣市、桃園縣市、新竹縣、苗栗縣市、台中縣、彰化縣市、南投縣市、雲林縣、嘉義縣市、台南縣、高雄縣、屏東縣市、花蓮縣市、台東縣市、綠島、蘭嶼、澎湖縣、東引島、馬祖、金門@北京、天津、石家莊、保定、唐山、秦皇島、張家口、承德、太原、大同、臨汾、長治、呼和浩特、包頭、海拉爾、瀋陽、大連、鞍山、錦州、長春、吉林、哈爾濱、齊齊哈爾、牡丹江、上海、南京、無錫、蘇州、徐州、杭州、寧波、溫州、金華、合肥、蕪湖、安慶、福州、廈門、泉州、南昌、九江、贛州、濟南、煙臺、青島、鄭州、開封、洛陽、許昌、新鄉、武漢、宜昌、沙市、長沙、衡陽、湘潭、常德、廣州、深圳、汕頭、韶關、海口、南寧、桂林、柳州、悟州、成都、重慶、內江、瀘州、萬縣、貴陽、遵義、昆明、拉薩、日喀則、西安、寶雞、延安、蘭州、天水、酒泉、西寧、銀川、烏魯木齊、哈密、喀什、和田@香港@澳門@烏蘭巴托@波士頓、斯坦福、紐約、費城、巴爾的摩、華盛頓、匹茲堡、邁阿密、克利夫蘭、底特律、亞特蘭大、芝加哥、新奧爾良、堪薩斯城、休士頓、達拉斯、丹佛、洛杉磯、聖何塞、西雅圖、舊金山、火奴魯魯@多倫多、渥太華、蒙特利亞、魁北克、溫哥華@平壤@首爾、安養市、清洲、公洲、九里、水源、光州、大田、濟州、仁川、釜山@東京、千葉、廣島、兵庫、川越、神戶、尼崎、京都、名古屋、奈良、大阪、橫濱、神奈川、藤澤、長野、福岡、鹿兒島、登別、稚內@馬尼拉@怡保、文德甲、亞庇、納閩島、雙溪大年、萬津、吉藍丹、Sarikei、Lumut、芙蓉、森美蘭、新山、Johor Bahru、古來、麻坡、Bukit Kangkar、巴株吧轄、吉隆坡、關丹、麻六甲、檳城、古晉、詩巫、民都鲁@雅加達、巴東島@新加坡@帝力@斯裏巴加灣@河內、胡志明@金邊@萬象@仰光、瓦城@曼谷、清邁、Sakon Nakhon@加德滿都@甘托克@廷布@達卡@新德里、博帕爾、孟買、加爾各答、德里@可倫坡@馬累@阿拉木圖@比什凱克@伊斯蘭堡@塔什干@喀布爾@杜尚別@阿什哈巴德@馬斯喀特@迪拜、阿布扎比@多哈@麥納麥@德黑蘭@巴庫@科威特@埃里溫@杜拜、利雅得、麥迪那、麥加@薩那、亞丁@巴格達、巴士拉@大馬士革@貝魯特@安曼@耶路撒冷@尼科西亞@安哥拉@布加勒斯特@索非亞@雅典、斯巴達@斯科普里@華沙@貝爾格萊德@地拉那@布達佩斯@布拉迪斯拉發@布拉格@薩格勒布@盧布爾雅那@瓦萊塔@維也納@柏林、萊比錫、波茨坦、慕尼黑、漢堡、漢諾威、海德堡@哥本哈根@奧斯陸@斯德哥爾摩、哥德堡@赫爾辛基@日內瓦@阿姆斯特丹@布魯塞爾@盧森堡@倫敦、伯明罕、劍橋、愛丁堡、利物浦、曼徹斯特、南安普敦、牛津、朴次茅斯@都柏林@巴黎、普羅旺斯、馬賽@巴賽隆那、馬德里@里斯本@那不勒斯、羅馬、威尼斯、佛羅倫斯、比薩、米蘭@梵蒂岡城@雷克雅未克@哈瓦那@拿騷@金斯頓@太子港@墨西哥城@危地馬拉@貝爾莫潘@聖薩爾瓦多@特古西加爾巴@馬那瓜@聖何塞@巴拿馬城@基多@聖菲波哥大@利馬@聖地亞哥@聖多明各@加拉加斯@蘇克雷@羅索@布宜諾斯艾利斯@喬治敦@亞松森@蒙得維的亞@帕拉馬裏博@巴西利亞、里約熱內盧、聖保羅@開羅@喀土穆@摩加迪沙@達累斯薩拉姆@坎帕拉@班吉@恩賈梅納@的黎波裏@雅恩德@突尼斯@利伯維爾@馬拉博@阿爾及爾@拉巴特、卡薩布蘭卡@阿尤恩@努瓦克肖特@達喀爾@班珠爾@巴馬科@亞穆蘇克羅@阿克拉@內羅畢@利隆圭@馬布多@哈拉雷@基加里@盧薩卡@金沙薩@布拉柴維爾@羅安達@開普敦、約翰尼斯堡@塔那那利佛@奧克蘭@布裏斯班、坎培拉、墨爾本@莫爾茲比港@霍尼亞拉@蘇瓦@符拉迪沃斯托克、亞庫次克、布拉戈維申斯克、喀山、阿爾漢格爾斯克、莫斯科、摩爾曼斯克、斯摩棱斯克、聖彼德堡@明斯克@基輔@基希訥烏@維爾紐斯@塔林";
var ct = new Array(31);
ct[0]= new Array(8,121,30,25,03);	//台北市
ct[1]= new Array(8,120,17,22,38);	//高雄市
ct[2]= new Array(8,121,44,25,08);	//基隆市
ct[3]= new Array(8,120,58,24,48);	//新竹市
ct[4]= new Array(8,120,40,24,09);	//台中市
ct[5]= new Array(8,120,12,23,00);	//台南市
ct[6]= new Array(8,121,29,25,00);	//台北縣
ct[7]= new Array(8,121,45,24,46);	//宜蘭縣市
ct[8]= new Array(8,121,18,24,59);	//桃園縣市
ct[9]= new Array(8,120,59,24,46);	//新竹縣
ct[10]= new Array(8,120,49,24,33);	//苗栗縣市
ct[11]= new Array(8,120,43,24,15);	//台中縣
ct[12]= new Array(8,120,32,24,04);	//彰化縣市
ct[13]= new Array(8,120,41,23,54);	//南投縣市
ct[14]= new Array(8,120,32,23,42);	//雲林縣
ct[15]= new Array(8,120,27,23,29);	//嘉義縣市
ct[16]= new Array(8,120,17,23,08);	//台南縣
ct[17]= new Array(8,120,25,22,42);	//高雄縣
ct[18]= new Array(8,120,29,22,39);	//屏東縣市
ct[19]= new Array(8,121,36,23,59);	//花蓮縣市
ct[20]= new Array(8,121,09,22,45);	//台東縣市
ct[21]= new Array(8,121,28,22,35);	//綠島
ct[22]= new Array(8,121,33,22,25);	//蘭嶼
ct[23]= new Array(8,119,33,23,34);	//澎湖縣
ct[24]= new Array(8,120,32,26,19);	//東引島
ct[25]= new Array(8,119,53,26,12);	//馬祖
ct[26]= new Array(8,118,25,24,30);	//金門


ct[27]= new Array(8,116,28,39,54);	//北京
ct[28]= new Array(8,117,10,39,10);	//天津
ct[29]= new Array(8,114,26,38,03);	//石家莊
ct[30]= new Array(8,115,28,38,53);	//保定
ct[31]= new Array(8,118,09,39,37);	//唐山
ct[32]= new Array(8,119,37,39,54);	//秦皇島
ct[33]= new Array(8,114,55,40,51);	//張家口
ct[34]= new Array(8,117,52,40,59);	//承德
ct[35]= new Array(8,112,33,37,51);	//太原
ct[36]= new Array(8,113,13,40,07);	//大同
ct[37]= new Array(8,111,31,36,05);	//臨汾
ct[38]= new Array(8,113,13,36,05);	//長治
ct[39]= new Array(8,111,38,40,48);	//呼和浩特
ct[40]= new Array(8,110,00,40,35);	//包頭
ct[41]= new Array(8,119,43,49,14);	//海拉爾
ct[42]= new Array(8,123,23,41,48);	//瀋陽
ct[43]= new Array(8,121,38,38,54);	//大連
ct[44]= new Array(8,123,00,41,04);	//鞍山
ct[45]= new Array(8,121,09,41,09);	//錦州
ct[46]= new Array(8,125,18,43,55);	//長春
ct[47]= new Array(8,126,36,43,48);	//吉林
ct[48]= new Array(8,126,38,45,45);	//哈爾濱
ct[49]= new Array(8,123,55,47,22);	//齊齊哈爾
ct[50]= new Array(8,129,36,44,35);	//牡丹江
ct[51]= new Array(8,121,26,31,12);	//上海
ct[52]= new Array(8,118,46,32,03);	//南京
ct[53]= new Array(8,120,18,31,35);	//無錫
ct[54]= new Array(8,120,39,31,20);	//蘇州
ct[55]= new Array(8,117,12,34,16);	//徐州
ct[56]= new Array(8,120,10,30,15);	//杭州
ct[57]= new Array(8,121,34,29,53);	//寧波
ct[58]= new Array(8,120,38,28,00);	//溫州
ct[59]= new Array(8,119,49,29,10);	//金華
ct[60]= new Array(8,117,16,31,51);	//合肥
ct[61]= new Array(8,118,20,31,21);	//蕪湖
ct[62]= new Array(8,117,02,30,32);	//安慶
ct[63]= new Array(8,119,19,26,02);	//福州
ct[64]= new Array(8,118,04,24,26);	//廈門
ct[65]= new Array(8,118,37,24,54);	//泉州
ct[66]= new Array(8,115,53,28,41);	//南昌
ct[67]= new Array(8,115,59,29,43);	//九江
ct[68]= new Array(8,114,56,25,51);	//贛州
ct[69]= new Array(8,117,02,36,40);	//濟南
ct[70]= new Array(8,121,20,37,33);	//煙臺
ct[71]= new Array(8,120,19,36,04);	//青島
ct[72]= new Array(8,113,42,34,44);	//鄭州
ct[73]= new Array(8,114,23,34,52);	//開封
ct[74]= new Array(8,112,26,34,43);	//洛陽
ct[75]= new Array(8,113,48,34,00);	//許昌
ct[76]= new Array(8,113,54,35,18);	//新鄉
ct[77]= new Array(8,114,20,30,37);	//武漢
ct[78]= new Array(8,111,15,30,42);	//宜昌
ct[79]= new Array(8,112,17,30,16);	//沙市
ct[80]= new Array(8,112,55,28,12);	//長沙
ct[81]= new Array(8,112,34,26,55);	//衡陽
ct[82]= new Array(8,112,51,27,54);	//湘潭
ct[83]= new Array(8,111,39,29,00);	//常德
ct[84]= new Array(8,113,18,23,10);	//廣州
ct[85]= new Array(8,114,07,22,33);	//深圳
ct[86]= new Array(8,116,40,23,21);	//汕頭
ct[87]= new Array(8,113,33,24,48);	//韶關
ct[88]= new Array(8,110,10,20,03);	//海口
ct[89]= new Array(8,108,21,22,47);	//南寧
ct[90]= new Array(8,110,10,25,18);	//桂林
ct[91]= new Array(8,109,19,24,20);	//柳州
ct[92]= new Array(8,111,18,23,28);	//悟州
ct[93]= new Array(8,104,04,30,39);	//成都
ct[94]= new Array(8,106,33,29,33);	//重慶
ct[95]= new Array(8,105,03,29,35);	//內江
ct[96]= new Array(8,105,27,28,54);	//瀘州
ct[97]= new Array(8,108,22,30,48);	//萬縣
ct[98]= new Array(8,106,43,26,34);	//貴陽
ct[99]= new Array(8,106,53,27,45);	//遵義
ct[100]= new Array(8,102,42,25,03);	//昆明
ct[101]= new Array(8,91,02,29,39);	//拉薩
ct[102]= new Array(8,88,49,29,16);	//日喀則
ct[103]= new Array(8,108,55,34,15);	//西安
ct[104]= new Array(8,107,09,34,21);	//寶雞
ct[105]= new Array(8,109,26,36,35);	//延安
ct[106]= new Array(8,103,50,36,03);	//蘭州
ct[107]= new Array(8,105,33,34,35);	//天水
ct[108]= new Array(8,98,30,39,44);	//酒泉
ct[109]= new Array(8,101,49,36,37);	//西寧
ct[110]= new Array(8,106,13,38,28);	//銀川
ct[111]= new Array(8,87,36,43,46);	//烏魯木齊
ct[112]= new Array(8,93,27,42,50);	//哈密
ct[113]= new Array(8,75,59,39,27);	//喀什
ct[114]= new Array(8,79,55,37,07);	//和田

ct[115]= new Array(8,114,05,22,20);	//香港
ct[116]= new Array(8,113,33,22,11);	//澳門
ct[117]= new Array(8,106,53,47,55);	//烏蘭巴托


ct[118]= new Array(-5,-71,04,42,22);	//波士頓
ct[119]= new Array(-5,-73,32,41,03);	//斯坦福
ct[120]= new Array(-5,-74,00,40,43);	//紐約
ct[121]= new Array(-5,-75,10,39,57);	//費城
ct[122]= new Array(-5,-76,37,39,17);	//巴爾的摩
ct[123]= new Array(-5,-77,02,38,54);	//華盛頓
ct[124]= new Array(-5,-80,00,40,26);	//匹茲堡
ct[125]= new Array(-5,-80,11,25,47);	//邁阿密
ct[126]= new Array(-6,-81,42,41,30);	//克利夫蘭
ct[127]= new Array(-6,-83,03,42,20);	//底特律
ct[128]= new Array(-6,-84,23,33,45);	//亞特蘭大
ct[129]= new Array(-6,-87,38,41,53);	//芝加哥
ct[130]= new Array(-6,-90,04,29,58);	//新奧爾良
ct[131]= new Array(-6,-94,38,39,07);	//堪薩斯城
ct[132]= new Array(-6,-95,22,29,46);	//休士頓
ct[133]= new Array(-7,-96,49,32,47);	//達拉斯
ct[134]= new Array(-7,-104,59,39,44);	//丹佛
ct[135]= new Array(-8,-118,15,34,04);	//洛杉磯
ct[136]= new Array(-8,-121,53,37,20);	//聖何塞
ct[137]= new Array(-8,-122,20,47,36);	//西雅圖
ct[138]= new Array(-8,-122,33,37,47);	//舊金山
ct[139]= new Array(-10,-157,52,21,19);	//火奴魯魯
ct[140]= new Array(-5,-79,25,43,42);	//多倫多
ct[141]= new Array(-5,-75,42,45,25);	//渥太華
ct[142]= new Array(-5,-73,34,45,31);	//蒙特利亞
ct[143]= new Array(-5,-71,14,46,49);	//魁北克
ct[144]= new Array(-8,-123,07,49,16);	//溫哥華

ct[145]= new Array(9,125,45,39,01);	//平壤
ct[146]= new Array(9,126,58,37,33);	//首爾
ct[147]= new Array(9,126,55,37,28);	//安養市
ct[148]= new Array(9,127,27,36,38);	//清洲
ct[149]= new Array(9,126,53,36,30);	//公洲
ct[150]= new Array(9,127,06,37,30);	//九里
ct[151]= new Array(9,127,06,37,30);	//水源
ct[152]= new Array(9,126,54,35,09);	//光州
ct[153]= new Array(9,127,24,36,22);	//大田
ct[154]= new Array(9,126,29,33,31);	//濟州
ct[155]= new Array(9,126,38,37,28);	//仁川
ct[156]= new Array(9,129,03,35,06);	//釜山
ct[157]= new Array(9,139,46,35,42);	//東京
ct[158]= new Array(9,140,07,35,36);	//千葉
ct[159]= new Array(9,132,27,34,24);	//廣島
ct[160]= new Array(9,135,00,35,00);	//兵庫
ct[161]= new Array(9,138,10,36,40);	//川越
ct[162]= new Array(9,135,10,34,41);	//神戶
ct[163]= new Array(9,135,32,34,43);	//尼崎
ct[164]= new Array(9,135,45,35,00);	//京都
ct[165]= new Array(9,136,55,35,10);	//名古屋
ct[166]= new Array(9,135,50,34,41);	//奈良
ct[167]= new Array(9,135,30,34,40);	//大阪
ct[168]= new Array(9,139,39,35,27);	//橫濱
ct[169]= new Array(9,139,20,35,15);	//神奈川
ct[170]= new Array(9,139,27,35,30);	//藤澤
ct[171]= new Array(9,138,10,36,40);	//長野
ct[172]= new Array(9,130,25,33,33);	//福岡
ct[173]= new Array(9,130,20,31,21);	//鹿兒島
ct[174]= new Array(9,141,10,42,28);	//登別
ct[175]= new Array(9,141,50,45,30);	//稚內
ct[176]= new Array(8,120,59,14,35);	//馬尼拉
ct[177]= new Array(8,101,00,4,21);	//怡保
ct[178]= new Array(8,102,12,3,19);	//文德甲
ct[179]= new Array(8,116,06,5,58);	//亞庇
ct[180]= new Array(8,115,15,5,17);	//納閩島
ct[181]= new Array(8,99,45,6,25);	//雙溪大年
ct[182]= new Array(8,101,30,2,49);	//萬津
ct[183]= new Array(8,102,08,6,08);	//吉藍丹
ct[184]= new Array(8,11,30,2,08);	//Sarikei
ct[185]= new Array(8,100,37,04,13);	//Lumut
ct[186]= new Array(8,101,54,02,42);	//芙蓉
ct[187]= new Array(8,101,58,2,4);	//森美蘭
ct[188]= new Array(8,103,44,1,29);	//新山
ct[189]= new Array(8,103,46,1,28);	//Johor Bahru
ct[190]= new Array(8,103,21,1,26);	//古來
ct[191]= new Array(8,102,34,2,03);	//麻坡
ct[192]= new Array(8,102,33,2,11);	//Bukit Kangkar
ct[193]= new Array(8,102,56,1,50);	//巴株吧轄
ct[194]= new Array(8,101,43,3,09);	//吉隆坡
ct[195]= new Array(8,103,20,3,47);	//關丹
ct[196]= new Array(8,102,15,2,15);	//麻六甲
ct[197]= new Array(8,100,21,5,25);	//檳城
ct[198]= new Array(8,110,25,1,33);	//古晉
ct[199]= new Array(8,111,56,2,20);	//詩巫
ct[200]= new Array(8,113,00,3,10);	//民都鲁
ct[201]= new Array(7,106,48,-6,10);	//雅加達
ct[202]= new Array(7,100,12,-1,00);	//巴東島
ct[203]= new Array(8,103,51,1,17);	//新加坡
ct[204]= new Array(8,125,35,-8,33);	//帝力
ct[205]= new Array(8,114,55,4,56);	//斯裏巴加灣
ct[206]= new Array(8,105,51,21,02);	//河內
ct[207]= new Array(8,106,40,10,45);	//胡志明
ct[208]= new Array(7,104,55,11,33);	//金邊
ct[209]= new Array(7,102,38,17,59);	//萬象
ct[210]= new Array(5,96,10,16,47);	//仰光
ct[211]= new Array(5,96,04,21,58);	//瓦城
ct[212]= new Array(7,100,31,13,45);	//曼谷
ct[213]= new Array(7,98,58,18,46);	//清邁
ct[214]= new Array(7,104,09,17,10);	//Sakon Nakhon
ct[215]= new Array(6,85,19,27,43);	//加德滿都
ct[216]= new Array(6,88,37,27,20);	//甘托克
ct[217]= new Array(6,89,39,27,28);	//廷布
ct[218]= new Array(6,90,22,23,42);	//達卡
ct[219]= new Array(5.5,77,12,28,36);	//新德里
ct[220]= new Array(5,77,24,23,16);	//博帕爾
ct[221]= new Array(5.5,72,50,18,58);	//孟買
ct[222]= new Array(5.5,88,22,22,32);	//加爾各答
ct[223]= new Array(5.5,77,13,28,40);	//德里
ct[224]= new Array(5.5,79,51,6,56);	//可倫坡
ct[225]= new Array(5,73,30,4,40);	//馬累
ct[226]= new Array(5,76,57,43,15);	//阿拉木圖
ct[227]= new Array(5,74,36,42,54);	//比什凱克
ct[228]= new Array(5,73,10,33,42);	//伊斯蘭堡
ct[229]= new Array(5,69,18,41,20);	//塔什干
ct[230]= new Array(4.5,69,12,34,31);	//喀布爾
ct[231]= new Array(4,68,48,38,35);	//杜尚別
ct[232]= new Array(4,58,23,39,06);	//阿什哈巴德
ct[233]= new Array(4,58,35,23,37);	//馬斯喀特
ct[234]= new Array(4,55,18,25,18);	//迪拜
ct[235]= new Array(4,54,22,24,28);	//阿布扎比
ct[236]= new Array(4,51,32,25,17);	//多哈
ct[237]= new Array(4,50,35,26,13);	//麥納麥
ct[238]= new Array(3.5,51,26,35,40);	//德黑蘭
ct[239]= new Array(3,49,51,40,23);	//巴庫
ct[240]= new Array(3,47,59,29,30);	//科威特
ct[241]= new Array(3,44,30,40,11);	//埃里溫
ct[242]= new Array(3,55,12,25,11);	//杜拜
ct[243]= new Array(3,46,43,24,38);	//利雅得
ct[244]= new Array(3,39,36,24,28);	//麥迪那
ct[245]= new Array(3,39,49,21,27);	//麥加
ct[246]= new Array(3,44,12,15,23);	//薩那
ct[247]= new Array(3,24,12,12,45);	//亞丁
ct[248]= new Array(3,44,25,33,21);	//巴格達
ct[249]= new Array(3,47,47,30,30);	//巴士拉
ct[250]= new Array(2,36,18,33,30);	//大馬士革
ct[251]= new Array(2,35,30,33,53);	//貝魯特
ct[252]= new Array(2,35,56,31,57);	//安曼
ct[253]= new Array(2,35,14,31,46);	//耶路撒冷
ct[254]= new Array(2,33,32,35,10);	//尼科西亞
ct[255]= new Array(2,32,52,39,56);	//安哥拉

ct[256]= new Array(2,26,06,44,26);	//布加勒斯特
ct[257]= new Array(2,23,19,42,41);	//索非亞
ct[258]= new Array(2,23,43,37,58);	//雅典
ct[259]= new Array(2,22,25,37,05);	//斯巴達
ct[260]= new Array(2,21,28,42,00);	//斯科普里
ct[261]= new Array(1,21,00,52,15);	//華沙
ct[262]= new Array(1,20,30,44,50);	//貝爾格萊德
ct[263]= new Array(1,19,50,41,20);	//地拉那
ct[264]= new Array(1,19,05,47,30);	//布達佩斯
ct[265]= new Array(1,17,10,48,10);	//布拉迪斯拉發
ct[266]= new Array(1,14,26,50,05);	//布拉格
ct[267]= new Array(1,15,58,45,48);	//薩格勒布
ct[268]= new Array(1,14,31,46,03);	//盧布爾雅那
ct[269]= new Array(1,14,31,35,54);	//瓦萊塔
ct[270]= new Array(1,16,20,48,13);	//維也納
ct[271]= new Array(1,13,25,52,30);	//柏林
ct[272]= new Array(1,12,20,51,19);	//萊比錫
ct[273]= new Array(1,12,08,50,30);	//波茨坦
ct[274]= new Array(1,11,34,48,08);	//慕尼黑
ct[275]= new Array(1,9,59,53,33);	//漢堡
ct[276]= new Array(1,9,44,52,24);	//漢諾威
ct[277]= new Array(1,8,43,49,25);	//海德堡
ct[278]= new Array(1,12,35,55,40);	//哥本哈根
ct[279]= new Array(1,10,45,59,56);	//奧斯陸
ct[280]= new Array(1,18,03,59,20);	//斯德哥爾摩
ct[281]= new Array(1,11,58,57,45);	//哥德堡
ct[282]= new Array(2,24,58,60,10);	//赫爾辛基
ct[283]= new Array(1,6,09,46,12);	//日內瓦
ct[284]= new Array(1,4,54,52,22);	//阿姆斯特丹
ct[285]= new Array(1,4,20,50,50);	//布魯塞爾
ct[286]= new Array(1,6,09,49,36);	//盧森堡
ct[287]= new Array(0,0,10,51,30);	//倫敦
ct[288]= new Array(0,1,50,52,30);	//伯明罕
ct[289]= new Array(0,0,08,52,13);	//劍橋
ct[290]= new Array(0,3,13,55,57);	//愛丁堡
ct[291]= new Array(0,2,55,53,25);	//利物浦
ct[292]= new Array(0,2,15,53,30);	//曼徹斯特
ct[293]= new Array(0,1,25,50,55);	//南安普敦
ct[294]= new Array(0,-1,15,51,46);	//牛津
ct[295]= new Array(0,-1,05,50,48);	//￿次茅斯
ct[296]= new Array(0,-6,15,53,20);	//都柏林
ct[297]= new Array(1,2,20,48,52);	//巴黎
ct[298]= new Array(1,5,27,43,31);	//普羅旺斯
ct[299]= new Array(1,5,24,43,18);	//馬賽
ct[300]= new Array(0,2,10,41,25);	//巴賽隆那
ct[301]= new Array(0,-3,41,40,24);	//馬德里
ct[302]= new Array(0,-9,08,38,43);	//里斯本
ct[303]= new Array(1,14,17,40,51);	//那不勒斯
ct[304]= new Array(1,12,29,41,54);	//羅馬
ct[305]= new Array(1,12,21,45,27);	//威尼斯
ct[306]= new Array(1,11,15,43,46);	//佛羅倫斯
ct[307]= new Array(1,10,23,43,43);	//比薩
ct[308]= new Array(1,9,12,45,28);	//米蘭
ct[309]= new Array(1,12,27,41,54);	//梵蒂岡城
ct[310]= new Array(0,-21,51,64,09);	//雷克雅未克

ct[311]= new Array(-5,-82,22,23,08);	//哈瓦那
ct[312]= new Array(-5,-77,21,25,05);	//拿騷
ct[313]= new Array(-5,-76,48,17,58);	//金斯頓
ct[314]= new Array(-5,-72,20,18,32);	//太子港
ct[315]= new Array(-6,-99,09,19,24);	//墨西哥城
ct[316]= new Array(-6,-90,31,14,38);	//危地馬拉
ct[317]= new Array(-6,-88,47,17,15);	//貝爾莫潘
ct[318]= new Array(-6,-89,12,13,42);	//聖薩爾瓦多
ct[319]= new Array(-6,-87,13,14,06);	//特古西加爾巴
ct[320]= new Array(-6,-86,17,12,09);	//馬那瓜
ct[321]= new Array(-5,-84,05,9,56);	//聖何塞
ct[322]= new Array(-5,-79,32,8,58);	//巴拿馬城
ct[323]= new Array(-5,-78,30,0,13);	//基多
ct[324]= new Array(-5,-74,05,4,36);	//聖菲波哥大
ct[325]= new Array(-5,-77,03,-12,03);	//利馬
ct[326]= new Array(-4,-70,40,-33,27);	//聖地亞哥
ct[327]= new Array(-5,-69,54,18,28);	//聖多明各
ct[328]= new Array(-4,-66,56,10,30);	//加拉加斯
ct[329]= new Array(-4,-65,17,-19,02);	//蘇克雷
ct[330]= new Array(-4,-61,24,15,18);	//羅索
ct[331]= new Array(-3,-58,27,-34,36);	//布宜諾斯艾利斯
ct[332]= new Array(-3,-58,10,6,48);	//喬治敦
ct[333]= new Array(-3,-57,40,-25,16);	//亞松森
ct[334]= new Array(-3,-56,11,-34,53);	//蒙得維的亞
ct[335]= new Array(-3,-55,10,5,50);	//帕拉馬裏博
ct[336]= new Array(-3,-47,55,-15,47);	//巴西利亞
ct[337]= new Array(-3,-43,15,-22,54);	//里約熱內盧
ct[338]= new Array(-3,-46,38,-23,33);	//聖保羅

ct[339]= new Array(2,31,15,30,03);	//開羅
ct[340]= new Array(2,32,32,15,36);	//喀土穆
ct[341]= new Array(3,45,20,2,01);	//摩加迪沙
ct[342]= new Array(3,39,17,6,48);	//達累斯薩拉姆
ct[343]= new Array(3,32,25,0,19);	//坎帕拉
ct[344]= new Array(1,18,35,4,22);	//班吉
ct[345]= new Array(1,15,03,12,07);	//恩賈梅納
ct[346]= new Array(1,13,11,32,54);	//的黎波裏
ct[347]= new Array(1,11,31,3,52);	//雅恩德
ct[348]= new Array(1,10,11,36,48);	//突尼斯
ct[349]= new Array(1,9,27,0,23);	//利伯維爾
ct[350]= new Array(1,8,46,3,45);	//馬拉博
ct[351]= new Array(0,3,08,36,42);	//阿爾及爾
ct[352]= new Array(0,-6,51,34,02);	//拉巴特
ct[353]= new Array(0,-7,35,33,39);	//卡薩布蘭卡
ct[354]= new Array(0,-13,12,27,09);	//阿尤恩
ct[355]= new Array(0,-15,57,18,06);	//努瓦克肖特
ct[356]= new Array(0,-17,26,14,40);	//達喀爾
ct[357]= new Array(0,-16,39,13,28);	//班珠爾
ct[358]= new Array(0,-8,00,12,39);	//巴馬科
ct[359]= new Array(0,-5,17,6,49);	//亞穆蘇克羅
ct[360]= new Array(0,-0,15,5,33);	//阿克拉
ct[361]= new Array(3,36,49,-1,17);	//內羅畢
ct[362]= new Array(2,33,44,-13,59);	//利隆圭
ct[363]= new Array(2,32,42,-26,10);	//馬布多
ct[364]= new Array(2,31,03,-17,50);	//哈拉雷
ct[365]= new Array(2,30,04,-1,57);	//基加里
ct[366]= new Array(2,28,17,-15,25);	//盧薩卡
ct[367]= new Array(1,15,18,-4,18);	//金沙薩
ct[368]= new Array(1,15,17,-4,16);	//布拉柴維爾
ct[369]= new Array(1,13,30,-9,00);	//羅安達
ct[370]= new Array(2,18,28,-35,56);	//開普敦
ct[371]= new Array(2,28,00,-26,15);	//約翰尼斯堡
ct[372]= new Array(3,47,30,-18,58);	//塔那那利佛

ct[373]= new Array(12,174,45,-36,53);	//奧克蘭
ct[374]= new Array(10,153,02,-27,28);	//布裏斯班
ct[375]= new Array(10,149,08,-35,17);	//坎培拉
ct[376]= new Array(10,144,58,-37,49);	//墨爾本
ct[377]= new Array(10,147,10,-9,30);	//莫爾茲比港
ct[378]= new Array(11,159,57,-9,27);	//霍尼亞拉
ct[379]= new Array(12,178,25,-18,08);	//蘇瓦

ct[380]= new Array(10,131,56,43,10);	//符拉迪沃斯托克
ct[381]= new Array(10,129,49,62,13);	//亞庫次克
ct[382]= new Array(9,127,32,50,17);	//布拉戈維申斯克
ct[383]= new Array(4,49,08,55,45);	//喀山
ct[384]= new Array(4,40,32,64,34);	//阿爾漢格爾斯克
ct[385]= new Array(3,37,35,55,45);	//莫斯科
ct[386]= new Array(3,33,05,68,58);	//摩爾曼斯克
ct[387]= new Array(3,32,03,54,47);	//斯摩棱斯克
ct[388]= new Array(3,30,15,59,55);	//聖彼德堡
ct[389]= new Array(3,27,34,53,54);	//明斯克
ct[390]= new Array(3,30,31,50,26);	//基輔
ct[391]= new Array(2,28,50,47,00);	//基希訥烏
ct[392]= new Array(2,25,19,54,41);	//維爾紐斯
ct[393]= new Array(2,24,55,59,25);	//塔林

var split1="、";
var split2="@";
var sitesclass1=area.split(split1);
var sitesclass2=city.split(split2);  			//元素为以,隔开的mode串
var k=0

//var tz = new Array(+8, +8, +8, +8, -8, -5);
//var lg = new Array(121.5, 120.28, 116.46, 121.43, -118.25 ,-74);
//var lt = new Array(25, 22.63, 39.92, 31.2,34.07, 40.72);


initial_select();

function RiseSet(){
//       Rise and set times for Sun and Moon
//       Adapted and modified from Montenbruck
//       and Pfleger, 'Astronomy on the personal
//       Computer' 3rd Edition, Springer
//       section 3.8
//       Accuracy of detection of 'always below' and 'always above'
//       situations depends on the approximate routines used for Sun
//       and Moon. For instance, 1999 Dec 25th, at 0 long, 67.43 lat
//       this program will give an 8 minute long day between sunrise
//       and sunset. More accurate programs say the Sun is always below
//       the horizon on this day.
//Dim obname(5) As String, thedate As Double, jdx As Double
//Dim hmrise(3) As String, hmset(3) As String, hmabove(3) As Integer, arise(3) As Integer, aset(3) As Integer
var op=false;
var obname=new Array;
var rads = Math.PI / 180;
var degs = 180 / Math.PI;
obname[1] = "月亮";
obname[2] = "太陽";
obname[3] = "海上微光";
//取得輸入之陽曆年月日值,時差及經緯度
var y=in1.value-0;	//取得年之輸入值
var m=in2.value-0;	//取得月之輸入值
var d=in3.value-0;	//取得日之輸入值
//var zone=in4.value-0;	//取得時差之輸入值
//var glong=in5.value-0;	//取得經度之輸入值
//var glat=in6.value-0;	//取得緯度之輸入值

//var zone=tz[myform1.city.value];
//var glong=lg[myform1.city.value];
//var glat=lt[myform1.city.value];
var cp=0;
cp=k+Number(sites.class2.value);
var zone=ct[cp][0];
var losgn=1;
var lasgn=1;
if(ct[cp][1]<0){losgn=-1;}
if(ct[cp][3]<0){lasgn=-1;}
var glong=ct[cp][1]+losgn*ct[cp][2]/60;
var glat=ct[cp][3]+lasgn*ct[cp][4]/60;

var hmabove=new Array,arise=new Array,aset=new Array,hmrise=new Array,hmset=new Array;
var flag=0;

//限定範圍
if(y<-7000 || y>7000){
	alert("超出計算能力");
	return false;
}
if(y<-1000 || y>3000){
	alert("适用于西元-1000年至西元3000年，超出此范围误差较大");
}

//驗證輸入日期的正確性,若不正確則跳離
if(ValidDate(op, y, m, d) == false){ return false; }

//*********************************************************************************************
glong = -glong;  //routines use east longitude negative convention
zone = zone / 24;
var jdx = Jdays(op, y, m, d, 12); //求出指定年月日之JD值
var thedate = jdx - 2400001 - zone;  //儒略日,減去2400001再減去8小時時差
risenset(glong, glat, thedate, hmabove, arise, aset, hmrise, hmset);
var out="時區:";
out=out+ct[cp][0]+",   經度:";
if(ct[cp][1]>0){out=out+"東經";}else{out=out+"西經";}
out=out+Math.abs(ct[cp][1])+"度"+ct[cp][2]+"分,   緯度:";
if(ct[cp][3]>0){out=out+"北緯";}else{out=out+"南緯";}
out=out+Math.abs(ct[cp][3])+"度"+ct[cp][4]+"分"+"\r\n\r\n";
//out+=hmrise[1]+"\r\n";
    //STEP 6 of Web page description
for (jobj=1;jobj<=3;jobj++){
    out+="   " + obname[jobj]+"\r\n"; //顯示種類
    // logic to sort the various rise and set states
    if ((arise[jobj] == 1) || (aset[jobj] == 1)) {   //current object rises and sets today
        if (arise[jobj] == 1) {
            out+="升起:" + hmrise[jobj]+"\r\n";    //顯示升起
        }else{
            out+="升起:     ----"+"\r\n";          //此日無升起
        }
        if (aset[jobj] == 1) {
            out+="落下:" + hmset[jobj]+"\r\n";     //顯示下落
        }else{
            out+="落下:" + "    ----"+"\r\n";      //此日無下落
	}
    }else{              //current object not so simple
        if (hmabove[jobj] == 1) {
            switch(jobj){
                case 1: out+="    always above horizon"+"\r\n"; break;
                case 2: out+="    always above horizon"+"\r\n"; break;
                case 3: out+="    always bright"+"\r\n"; break;
            }
        }else{
            switch(jobj){
                case 1: out+="    always below horizon"+"\r\n"; break;
                case 2: out+="    always below horizon"+"\r\n"; break;
                case 3: out+="    always dark"+"\r\n"; break;
            }
        }
    }
//STEP 7 of Web page description
}
show1.innerText=out;	//for IE
show1.textContent=out;	//for mozilla
}


function ValidDate(op,yy,mm,dd){//驗證日期是否有效
var vd=true;
if(mm<=0 || mm>12){
	alert("月份超出範圍");
	vd=false;
}
else{
	var ndf1=-(yy%4==0);	//可被四整除
	var ndf2=((yy%400==0)-(yy%100==0)) && (((yy>1582) && (!op)) || op);
	var ndf=ndf1+ndf2;
	var dom=30+((Math.abs(mm-7.5)+0.5)%2)-(mm==2)*(2+ndf);
	if(dd<=0 || dd>dom){
		if(ndf==0 && mm==2 && dd==29){
			alert("此年無閏月");
		}
		else{
			alert("日期超出範圍");
		}
		vd=false;
	}
}
if((yy==1582 && mm==10 && dd>=5 &&dd<15) && !op){
	alert("此日期不存在");
	vd=false;
}
return vd;
}


function Jdays(op,yr,mh,dy,hr){//將年月日時，轉换爲儒略日
if(yr<-400000 || yr>400000) return false;
var yp=yr+Math.floor((mh-3)/10);
if(((yr>1582) || (yr==1582 && mh>10) || (yr==1582 && mh==10 && dy>=15)) || op){
	var init=1721119.5;
	var jdy=Math.floor(yp*365.25)-Math.floor(yp/100)+Math.floor(yp/400);
}
else{
	if((yr<1582) || (yr==1582 && mh<10) || (yr==1582 && mh==10 && dy<=4)){
		var init=1721117.5;
		var jdy=Math.floor(yp*365.25);
	}
	else {return false;}
}
var mp=Math.floor(mh+9)%12;
var jdm=mp*30+Math.floor((mp+1)*34/57);
var jdd=dy-1;
var jdh=hr/24;
var jd=jdy+jdm+jdd+jdh+init;
return jd;
}

function cn(x){
var cs = Math.cos(x*1.74532925199433E-02);  //cn 代表cosine
return cs;
}

function fpart(x){
//       returns fractional part of a number
x = x - Math.floor(x);
if(x<0){
   x = x + 1;
}
var fp = x;   //只取小数部份
return fp;
}

function hm(ut){
ut = Math.floor(ut * 60 + 0.5)/60;
var h = Math.floor(ut);
var m = Math.floor(60 * (ut - h) + 0.5);
var hrmn = h + "時" + m + "分";
return hrmn;
}

function ipart(x) {
var ip = (x/Math.abs(x)) * Math.floor(Math.abs(x));    //只取整数部份
return ip;
}

function lmst(mjd, glong) {
//    returns the local siderial time for
//    the mjd and longitude specified
var mjd0 = ipart(mjd);
var ut = (mjd - mjd0) * 24;
var t = (mjd0 - 51544.5) / 36525;
var gmst = 6.697374558 + 1.0027379093 * ut;
gmst = gmst + (8640184.812866 + (0.093104 - 0.0000062 * t) * t) * t / 3600;
var thelmst = 24 * fpart((gmst - glong / 15) / 24);  //取得观测地区的恒星时
return thelmst;
}


function moon(t , ra , dec ) {
// returns ra and dec of Moon to 5 arc min (ra) and 1 arc min (dec)
// for a few centuries either side of J2000.0
// Predicts rise and set times to within minutes for about 500 years
// in past - TDT and UT time diference may become significant for long
// times
var p2 = 2*Math.PI;
var ARC = 206264.8062;
var COSEPS = 0.91748;
var SINEPS = 0.39778;
var L0 = fpart(0.606433 + 1336.855225 * t);    //mean long Moon in revs
var L = p2 * fpart(0.374897 + 1325.55241 * t); //mean anomaly of Moon
var LS = p2 * fpart(0.993133 + 99.997361 * t); //mean anomaly of Sun
var d = p2 * fpart(0.827361 + 1236.853086 * t); //diff longitude sun and moon
var F = p2 * fpart(0.259086 + 1342.227825 * t); //mean arg latitude
// longitude correction terms
var dL = 22640 * Math.sin(L) - 4586 * Math.sin(L - 2 * d);
dL = dL + 2370 * Math.sin(2 * d) + 769 * Math.sin(2 * L);
dL = dL - 668 * Math.sin(LS) - 412 * Math.sin(2 * F);
dL = dL - 212 * Math.sin(2 * L - 2 * d) - 206 * Math.sin(L + LS - 2 * d);
dL = dL + 192 * Math.sin(L + 2 * d) - 165 * Math.sin(LS - 2 * d);
dL = dL - 125 * Math.sin(d) - 110 * Math.sin(L + LS);
dL = dL + 148 * Math.sin(L - LS) - 55 * Math.sin(2 * F - 2 * d);
// latitude arguments
var S = F + (dL + 412 * Math.sin(2 * F) + 541 * Math.sin(LS)) / ARC;
var h = F - 2 * d;
// latitude correction terms
var N = -526 * Math.sin(h) + 44 * Math.sin(L + h) - 31 * Math.sin(h - L) - 23 * Math.sin(LS + h);
var N = N + 11 * Math.sin(h - LS) - 25 * Math.sin(F - 2 * L) + 21 * Math.sin(F - L);
var lmoon = p2 * fpart(L0 + dL / 1296000);  //Lat in rads
var bmoon = (18520 * Math.sin(S) + N) / ARC;     //long in rads
// convert to equatorial coords using a fixed ecliptic
var CB = Math.cos(bmoon);
var x = CB * Math.cos(lmoon);
var V = CB * Math.sin(lmoon);
var W = Math.sin(bmoon);
var y = COSEPS * V - SINEPS * W;
var Z = SINEPS * V + COSEPS * W;
var rho = Math.sqrt(1 - Z * Z);
dec[0] = (360 / p2) * Math.atan(Z / rho);        //算出月球的视赤纬(apparent declination)
ra[0] = (48 / p2) * Math.atan(y / (x + rho));    //算出月球的视赤经(apparent right ascension)
if (ra[0] < 0) {
        ra[0] = ra[0] + 24;
}
}

function quad(ym, y0, yp, xe, ye, z1, z2, nz){
//  finds a parabola through three points and returns values of
//  coordinates of extreme value (xe, ye) and zeros if any (z1, z2)
//  assumes that the x values are -1, 0, +1
nz[0] = 0;
var A = 0.5 * (ym + yp) - y0;
var b = 0.5 * (yp - ym);
var c = y0;
xe[0] = -b / (2 * A);              //x coord of symmetry line
ye[0] = (A * xe[0] + b) * xe[0] + c;     //extreme value for y in interval
var dis = b * b - 4 * A * c;    //discriminant
if (dis > 0){                   //there are zeros
    var dx = 0.5 * Math.sqrt(dis) / Math.abs(A);
    z1[0] = xe[0] - dx;
    z2[0] = xe[0] + dx;
    if (Math.abs(z1[0]) <= 1) {nz[0]=nz[0]+1;}     //This zero is in interval
    if (Math.abs(z2[0]) <= 1) {nz[0]=nz[0]+1;}     //This zero is in interval
    if (z1[0] < -1) { z1[0] = z2[0];}
}
}

function sinalt(iobj, mjd0, hour, glong, cphi, sphi){
// returns sine of the altitude of either the sun or the moon given the
// modified julian day number at midnight UT and the hour of the UT day,
// the longitude of the observer, and the sine and cosine of the latitude
// of the observer
var ra=new Array,dec=new Array;
ra[0] = 0;
dec[0] = 0;
var instant = mjd0 + hour / 24;
var t = (instant - 51544.5) / 36525;
if (iobj == 1) {
        moon( t, ra, dec);
}else{
        sun( t, ra, dec);
}
var tau = 15 * (lmst(instant, glong) - ra[0]);   //hour angle of object
var sial = sphi * sn(dec[0]) + cphi * cn(dec[0]) * cn(tau);
return sial;
}

function sn(x) {
var se = Math.sin(x * 1.74532925199433E-02);
return se;
}

function sun(t, ra, dec){
// Returns RA and DEC of Sun to roughly 1 arcmin for few hundred
// years either side of J2000.0
var p2 = 2*Math.PI;
var COSEPS = 0.91748;
var SINEPS = 0.39778;
var m = p2 * fpart(0.993133 + 99.997361 * t);        //Mean anomaly
var dL = 6893 * Math.sin(m) + 72 * Math.sin(2 * m);          //Eq centre
var L = p2 * fpart(0.7859453 + m / p2 + (6191.2 * t + dL) / 1296000);
// convert to RA and DEC - ecliptic latitude of Sun taken as zero
var sl = Math.sin(L);
var x = Math.cos(L);
var y = COSEPS * sl;
var Z = SINEPS * sl;
var rho = Math.sqrt(1 - Z * Z);
dec[0] = (360 / p2) * Math.atan(Z / rho);
ra[0] = (48 / p2) * Math.atan(y / (x + rho));
if (ra[0] < 0) { ra[0] = ra[0] + 24; }
}

function risenset(glong, glat, thedate, hmabove, arise, aset, hmrise, hmset){
//define the altitudes for each object
//treat twilight as a separate object 3, so sinalt routine
//falls through to finding Sun altitude again
var sinho=new Array(3);
var sl = sn(glat);
var cl = cn(glat);
sinho[1] = sn(8 / 60);         //moonrise - average diameter used
sinho[2] = sn(-50 / 60);       //sunrise - classic value for refraction
sinho[3] = sn(-12);             //nautical twilight
var xe=new Array,ye=new Array,z1=new Array,z2=new Array,nz=new Array;
for(iobj=1;iobj<=3;iobj++){
    var utrise = 0;
    var utset = 0;
    var rise = 0;
    var sett = 0;
    var hour = 1;
    var zero2 = 0;
    // See STEP 1 and 2 of Web page description.
    var ym = sinalt(iobj, thedate, hour - 1, glong, cl, sl) - sinho[iobj];
    if (ym > 0) { above = 1;} else {above = 0;}
    //used later to classify non-risings
    do{
        //STEP 1 and STEP 3 of Web page description
        var y0 = sinalt(iobj, thedate, hour, glong, cl, sl) - sinho[iobj];
        var yp = sinalt(iobj, thedate, hour + 1, glong, cl, sl) - sinho[iobj];
        xe[0] = 0;
        ye[0] = 0;
        z1[0] = 0;
        z2[0] = 0;
        nz[0] = 0;
        //STEP 4 of web page description
        quad (ym, y0, yp, xe, ye, z1, z2, nz);
        switch (nz[0]){
            //cases depend on values of discriminant - inner part of STEP 4
            case 0:
		break; //nothing  - go to next time slot
            case 1:                      // simple rise / set event

                if (ym < 0) {       // must be a rising event
                        utrise = hour + z1[0];
                        rise = 1;
		}else{                    // must be setting
                        utset = hour + z1[0];
                        sett = 1;
                }
		break;
            case 2:                      // rises and sets within interval
                if (ye[0] < 0) {       // minimum - so set then rise
                        utrise = hour + z2[0];
                        utset = hour + z1[0];
                }else{                    // maximum - so rise then set
                        utrise = hour + z1[0];
                        utset = hour + z2[0];
                }
                rise = 1;
                sett = 1;
                zero2 = 1;
		break;
        }
        ym = yp;     //reuse the ordinate in the next interval
        hour = hour + 2;
    // STEP 5 of Web page description - have we finished for this object?
    } while (!((hour == 25) || (rise * sett == 1)));

    hmabove[iobj] = above;
    arise[iobj] = rise;
    aset[iobj] = sett;
    hmrise[iobj] = hm(utrise);
    hmset[iobj] = hm(utset);
}
}

function select()
{

	with(document.sites.class1)
	{
	var sel1=options[selectedIndex].text;

	}
	k=0;
	for(var i=0;i<sitesclass1.length;i++) //class1的总个数
	{

		if(sitesclass1[i]==sel1)
		{
			var now_subtypes=sitesclass2[i].split(split1);
			document.sites.class2.options.length=0;
			document.sites.class2.options.length=now_subtypes.length; //此为class1内class2的长度


			with(document.all.sites.class2)
			{
				for(var j=0;j<now_subtypes.length;j++)
				{
				options[j].text=now_subtypes[j];			//设置二级下拉列表的显示的文本
				options[j].value=j;		//设置二级下拉列表的显示的值
				}
			}
		break;
		}
		else
		{
			var past_subtypes=sitesclass2[i].split(split1);
			k=k+past_subtypes.length;

		}
	}
}

function initial_select()
{
	document.sites.class1.length=sitesclass1.length;
	with(document.sites.class1)
	{
		for(var i=0;i<sitesclass1.length;i++)
		{
			options[i].text=sitesclass1[i];
			options[i].value=i;

		}
		options[selectedIndex].text=sitesclass1[0];
		//options[selectedIndex].value=i;
	}
	var now_subtypes2=sitesclass2[0].split(split1);
	document.sites.class2.options.length=now_subtypes2.length;
	with(document.sites.class2)
	{
		for(var j=0;j<now_subtypes2.length;j++)
		{
			options[j].text=now_subtypes2[j];
			options[j].value=j;
		}

	}

}
