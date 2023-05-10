function loadCSS(url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
  }
  
  loadCSS("https://raw.githack.com/malikweb2023/malik2023/main/api/leagues-rank.css");
  
async function get() {
const leagueElement = document.querySelector('.LeagueRank');
const leagueClass = leagueElement.classList[1];
const leagueIds = {
// دوريات الـ20 فريق  
"L1": "7",//الدوري الانجليزي
"L2": "11",//الدوري الاسباني
"L3": "17",//الدوري الايطالي
"L4": "35",//الدوري الفرنسي
"L5": "6822",//الدوري العراقي

//دوريات الـ19 فريق
"L6": "78",//الدوري التركي

//دوريات الـ18 فريق
"L7": "25",//الدوري الالماني
"L8": "552",//الدوري المصري

//دوريات الـ16 فريق
"L9": "649",//الدوري السعودي
"L10": "557",//الدوري المغربي
"L11": "560",//الدوري الجزائري

//دوريات الـ14 فريق
"L12": "549",//الدوري الاماراتي

// بطولات الـ32 فريق
"L13": "5930",//كأس العالم
"L14": "572",//دوري أبطال أوروبا

"L15": "624",//دوري أبطال أفريقيا
"L16": "623",//دوري أبطال أسيا

};
const leagueId = leagueIds[leagueClass] || console.log("بطولة غير مدعومة");

const tableLink = `https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&competitions=${leagueId}&live=true&showOdds=true`;
const tableResponse = await fetch(tableLink);
const data = await tableResponse.json();
console.log(data.standings[0]);

// بداية جداول الترتيب

//الجزء الرئيسي فى جميع الجداول
document.querySelector(".LeagueRank").innerHTML = "<div class='LeagueName'></div></div>";
document.querySelector(".LeagueRank .LeagueName").innerHTML = "<img src='https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v11/Competitions/light/" + data.standings[0].competitionId + ".png'>" + data.standings[0].displayName;

// جدول لاعتماد الدوريات التي تحوي 20 فريق

if (data.standings[0].competitionId == 7 || data.standings[0].competitionId == 11 || data.standings[0].competitionId == 17 || data.standings[0].competitionId == 35 || data.standings[0].competitionId == 6822) {

document.querySelector(".LeagueRank").innerHTML += "<div class='MalikLeague'><table class='standings'><thead><tr><th>المركز</th><th style='text-align: center;'>فريق</th><th>لعب</th><th class='won'>فاز</th><th class='draw'>تعادل</th><th class='lost'>خسر</th><th>نقاط</th></tr></thead></table></div></div>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1)").innerHTML += "<tbody></tbody>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML = "<th>" + data.standings[0].rows[0].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[0].competitor.id + ".png'> " + data.standings[0].rows[0].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML = "<th>" + data.standings[0].rows[1].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[1].competitor.id + ".png'> " + data.standings[0].rows[1].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML = "<th>" + data.standings[0].rows[2].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[2].competitor.id + ".png'> " + data.standings[0].rows[2].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML = "<th>" + data.standings[0].rows[3].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[3].competitor.id + ".png'> " + data.standings[0].rows[3].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML = "<th>" + data.standings[0].rows[4].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[4].competitor.id + ".png'> " + data.standings[0].rows[4].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML = "<th>" + data.standings[0].rows[5].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[5].competitor.id + ".png'> " + data.standings[0].rows[5].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML = "<th>" + data.standings[0].rows[6].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[6].competitor.id + ".png'> " + data.standings[0].rows[6].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML = "<th>" + data.standings[0].rows[7].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[7].competitor.id + ".png'> " + data.standings[0].rows[7].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML = "<th>" + data.standings[0].rows[8].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[8].competitor.id + ".png'> " + data.standings[0].rows[8].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML = "<th>" + data.standings[0].rows[9].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[9].competitor.id + ".png'> " + data.standings[0].rows[9].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML = "<th>" + data.standings[0].rows[10].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[10].competitor.id + ".png'> " + data.standings[0].rows[10].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML = "<th>" + data.standings[0].rows[11].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[11].competitor.id + ".png'> " + data.standings[0].rows[11].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML = "<th>" + data.standings[0].rows[12].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[12].competitor.id + ".png'> " + data.standings[0].rows[12].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML = "<th>" + data.standings[0].rows[13].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[13].competitor.id + ".png'> " + data.standings[0].rows[13].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML = "<th>" + data.standings[0].rows[14].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[14].competitor.id + ".png'> " + data.standings[0].rows[14].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML += "<th>" + data.standings[0].rows[14].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML += "<th>" + data.standings[0].rows[14].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML += "<th>" + data.standings[0].rows[14].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML += "<th>" + data.standings[0].rows[14].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML += "<th>" + data.standings[0].rows[14].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML = "<th>" + data.standings[0].rows[15].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[15].competitor.id + ".png'> " + data.standings[0].rows[15].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML += "<th>" + data.standings[0].rows[15].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML += "<th>" + data.standings[0].rows[15].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML += "<th>" + data.standings[0].rows[15].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML += "<th>" + data.standings[0].rows[15].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML += "<th>" + data.standings[0].rows[15].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(17)").innerHTML = "<th>" + data.standings[0].rows[16].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(17)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[16].competitor.id + ".png'> " + data.standings[0].rows[16].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(17)").innerHTML += "<th>" + data.standings[0].rows[16].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(17)").innerHTML += "<th>" + data.standings[0].rows[16].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(17)").innerHTML += "<th>" + data.standings[0].rows[16].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(17)").innerHTML += "<th>" + data.standings[0].rows[16].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(17)").innerHTML += "<th>" + data.standings[0].rows[16].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(18)").innerHTML = "<th>" + data.standings[0].rows[17].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(18)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[17].competitor.id + ".png'> " + data.standings[0].rows[17].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(18)").innerHTML += "<th>" + data.standings[0].rows[17].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(18)").innerHTML += "<th>" + data.standings[0].rows[17].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(18)").innerHTML += "<th>" + data.standings[0].rows[17].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(18)").innerHTML += "<th>" + data.standings[0].rows[17].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(18)").innerHTML += "<th>" + data.standings[0].rows[17].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(19)").innerHTML = "<th>" + data.standings[0].rows[18].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(19)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[18].competitor.id + ".png'> " + data.standings[0].rows[18].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(19)").innerHTML += "<th>" + data.standings[0].rows[18].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(19)").innerHTML += "<th>" + data.standings[0].rows[18].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(19)").innerHTML += "<th>" + data.standings[0].rows[18].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(19)").innerHTML += "<th>" + data.standings[0].rows[18].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(19)").innerHTML += "<th>" + data.standings[0].rows[18].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(20)").innerHTML = "<th>" + data.standings[0].rows[19].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(20)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[19].competitor.id + ".png'> " + data.standings[0].rows[19].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(20)").innerHTML += "<th>" + data.standings[0].rows[19].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(20)").innerHTML += "<th>" + data.standings[0].rows[19].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(20)").innerHTML += "<th>" + data.standings[0].rows[19].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(20)").innerHTML += "<th>" + data.standings[0].rows[19].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(20)").innerHTML += "<th>" + data.standings[0].rows[19].points + "</th>";



// جدول لاعتماد الدوريات التي تحوي 19 فريق
} else if (data.standings[0].competitionId == 78) {

    document.querySelector(".LeagueRank").innerHTML += "<div class='MalikLeague'><table class='standings'><thead><tr><th>المركز</th><th style='text-align: center;'>فريق</th><th>لعب</th><th class='won'>فاز</th><th class='draw'>تعادل</th><th class='lost'>خسر</th><th>نقاط</th></tr></thead></table></div></div>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1)").innerHTML += "<tbody></tbody>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML = "<th>" + data.standings[0].rows[0].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[0].competitor.id + ".png'> " + data.standings[0].rows[0].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML = "<th>" + data.standings[0].rows[1].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[1].competitor.id + ".png'> " + data.standings[0].rows[1].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML = "<th>" + data.standings[0].rows[2].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[2].competitor.id + ".png'> " + data.standings[0].rows[2].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML = "<th>" + data.standings[0].rows[3].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[3].competitor.id + ".png'> " + data.standings[0].rows[3].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML = "<th>" + data.standings[0].rows[4].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[4].competitor.id + ".png'> " + data.standings[0].rows[4].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML = "<th>" + data.standings[0].rows[5].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[5].competitor.id + ".png'> " + data.standings[0].rows[5].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML = "<th>" + data.standings[0].rows[6].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[6].competitor.id + ".png'> " + data.standings[0].rows[6].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML = "<th>" + data.standings[0].rows[7].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[7].competitor.id + ".png'> " + data.standings[0].rows[7].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML = "<th>" + data.standings[0].rows[8].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[8].competitor.id + ".png'> " + data.standings[0].rows[8].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML = "<th>" + data.standings[0].rows[9].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[9].competitor.id + ".png'> " + data.standings[0].rows[9].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML = "<th>" + data.standings[0].rows[10].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[10].competitor.id + ".png'> " + data.standings[0].rows[10].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML = "<th>" + data.standings[0].rows[11].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[11].competitor.id + ".png'> " + data.standings[0].rows[11].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML = "<th>" + data.standings[0].rows[12].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[12].competitor.id + ".png'> " + data.standings[0].rows[12].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML = "<th>" + data.standings[0].rows[13].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[13].competitor.id + ".png'> " + data.standings[0].rows[13].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML = "<th>" + data.standings[0].rows[14].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[14].competitor.id + ".png'> " + data.standings[0].rows[14].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML += "<th>" + data.standings[0].rows[14].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML += "<th>" + data.standings[0].rows[14].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML += "<th>" + data.standings[0].rows[14].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML += "<th>" + data.standings[0].rows[14].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML += "<th>" + data.standings[0].rows[14].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML = "<th>" + data.standings[0].rows[15].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[15].competitor.id + ".png'> " + data.standings[0].rows[15].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML += "<th>" + data.standings[0].rows[15].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML += "<th>" + data.standings[0].rows[15].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML += "<th>" + data.standings[0].rows[15].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML += "<th>" + data.standings[0].rows[15].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML += "<th>" + data.standings[0].rows[15].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(17)").innerHTML = "<th>" + data.standings[0].rows[16].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(17)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[16].competitor.id + ".png'> " + data.standings[0].rows[16].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(17)").innerHTML += "<th>" + data.standings[0].rows[16].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(17)").innerHTML += "<th>" + data.standings[0].rows[16].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(17)").innerHTML += "<th>" + data.standings[0].rows[16].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(17)").innerHTML += "<th>" + data.standings[0].rows[16].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(17)").innerHTML += "<th>" + data.standings[0].rows[16].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(18)").innerHTML = "<th>" + data.standings[0].rows[17].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(18)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[17].competitor.id + ".png'> " + data.standings[0].rows[17].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(18)").innerHTML += "<th>" + data.standings[0].rows[17].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(18)").innerHTML += "<th>" + data.standings[0].rows[17].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(18)").innerHTML += "<th>" + data.standings[0].rows[17].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(18)").innerHTML += "<th>" + data.standings[0].rows[17].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(18)").innerHTML += "<th>" + data.standings[0].rows[17].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(19)").innerHTML = "<th>" + data.standings[0].rows[18].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(19)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[18].competitor.id + ".png'> " + data.standings[0].rows[18].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(19)").innerHTML += "<th>" + data.standings[0].rows[18].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(19)").innerHTML += "<th>" + data.standings[0].rows[18].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(19)").innerHTML += "<th>" + data.standings[0].rows[18].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(19)").innerHTML += "<th>" + data.standings[0].rows[18].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(19)").innerHTML += "<th>" + data.standings[0].rows[18].points + "</th>";


// جدول لاعتماد الدوريات التي تحوي 18 فريق
} else if (data.standings[0].competitionId == 25 || data.standings[0].competitionId == 552) {

    document.querySelector(".LeagueRank").innerHTML += "<div class='MalikLeague'><table class='standings'><thead><tr><th>المركز</th><th style='text-align: center;'>فريق</th><th>لعب</th><th class='won'>فاز</th><th class='draw'>تعادل</th><th class='lost'>خسر</th><th>نقاط</th></tr></thead></table></div></div>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1)").innerHTML += "<tbody></tbody>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML = "<th>" + data.standings[0].rows[0].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[0].competitor.id + ".png'> " + data.standings[0].rows[0].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML = "<th>" + data.standings[0].rows[1].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[1].competitor.id + ".png'> " + data.standings[0].rows[1].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML = "<th>" + data.standings[0].rows[2].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[2].competitor.id + ".png'> " + data.standings[0].rows[2].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML = "<th>" + data.standings[0].rows[3].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[3].competitor.id + ".png'> " + data.standings[0].rows[3].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML = "<th>" + data.standings[0].rows[4].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[4].competitor.id + ".png'> " + data.standings[0].rows[4].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML = "<th>" + data.standings[0].rows[5].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[5].competitor.id + ".png'> " + data.standings[0].rows[5].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML = "<th>" + data.standings[0].rows[6].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[6].competitor.id + ".png'> " + data.standings[0].rows[6].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML = "<th>" + data.standings[0].rows[7].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[7].competitor.id + ".png'> " + data.standings[0].rows[7].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML = "<th>" + data.standings[0].rows[8].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[8].competitor.id + ".png'> " + data.standings[0].rows[8].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML = "<th>" + data.standings[0].rows[9].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[9].competitor.id + ".png'> " + data.standings[0].rows[9].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML = "<th>" + data.standings[0].rows[10].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[10].competitor.id + ".png'> " + data.standings[0].rows[10].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML = "<th>" + data.standings[0].rows[11].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[11].competitor.id + ".png'> " + data.standings[0].rows[11].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML = "<th>" + data.standings[0].rows[12].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[12].competitor.id + ".png'> " + data.standings[0].rows[12].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML = "<th>" + data.standings[0].rows[13].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[13].competitor.id + ".png'> " + data.standings[0].rows[13].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML = "<th>" + data.standings[0].rows[14].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[14].competitor.id + ".png'> " + data.standings[0].rows[14].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML += "<th>" + data.standings[0].rows[14].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML += "<th>" + data.standings[0].rows[14].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML += "<th>" + data.standings[0].rows[14].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML += "<th>" + data.standings[0].rows[14].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML += "<th>" + data.standings[0].rows[14].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML = "<th>" + data.standings[0].rows[15].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[15].competitor.id + ".png'> " + data.standings[0].rows[15].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML += "<th>" + data.standings[0].rows[15].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML += "<th>" + data.standings[0].rows[15].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML += "<th>" + data.standings[0].rows[15].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML += "<th>" + data.standings[0].rows[15].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML += "<th>" + data.standings[0].rows[15].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(17)").innerHTML = "<th>" + data.standings[0].rows[16].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(17)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[16].competitor.id + ".png'> " + data.standings[0].rows[16].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(17)").innerHTML += "<th>" + data.standings[0].rows[16].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(17)").innerHTML += "<th>" + data.standings[0].rows[16].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(17)").innerHTML += "<th>" + data.standings[0].rows[16].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(17)").innerHTML += "<th>" + data.standings[0].rows[16].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(17)").innerHTML += "<th>" + data.standings[0].rows[16].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(18)").innerHTML = "<th>" + data.standings[0].rows[17].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(18)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[17].competitor.id + ".png'> " + data.standings[0].rows[17].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(18)").innerHTML += "<th>" + data.standings[0].rows[17].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(18)").innerHTML += "<th>" + data.standings[0].rows[17].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(18)").innerHTML += "<th>" + data.standings[0].rows[17].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(18)").innerHTML += "<th>" + data.standings[0].rows[17].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(18)").innerHTML += "<th>" + data.standings[0].rows[17].points + "</th>";



// جدول لاعتماد الدوريات التي تحوي 16 فريق
} else if (data.standings[0].competitionId == 649 || data.standings[0].competitionId == 557 || data.standings[0].competitionId == 560) {

    document.querySelector(".LeagueRank").innerHTML += "<div class='MalikLeague'><table class='standings'><thead><tr><th>المركز</th><th style='text-align: center;'>فريق</th><th>لعب</th><th class='won'>فاز</th><th class='draw'>تعادل</th><th class='lost'>خسر</th><th>نقاط</th></tr></thead></table></div></div>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1)").innerHTML += "<tbody></tbody>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML = "<th>" + data.standings[0].rows[0].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[0].competitor.id + ".png'> " + data.standings[0].rows[0].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML = "<th>" + data.standings[0].rows[1].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[1].competitor.id + ".png'> " + data.standings[0].rows[1].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML = "<th>" + data.standings[0].rows[2].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[2].competitor.id + ".png'> " + data.standings[0].rows[2].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML = "<th>" + data.standings[0].rows[3].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[3].competitor.id + ".png'> " + data.standings[0].rows[3].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML = "<th>" + data.standings[0].rows[4].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[4].competitor.id + ".png'> " + data.standings[0].rows[4].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML = "<th>" + data.standings[0].rows[5].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[5].competitor.id + ".png'> " + data.standings[0].rows[5].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML = "<th>" + data.standings[0].rows[6].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[6].competitor.id + ".png'> " + data.standings[0].rows[6].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML = "<th>" + data.standings[0].rows[7].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[7].competitor.id + ".png'> " + data.standings[0].rows[7].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML = "<th>" + data.standings[0].rows[8].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[8].competitor.id + ".png'> " + data.standings[0].rows[8].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML = "<th>" + data.standings[0].rows[9].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[9].competitor.id + ".png'> " + data.standings[0].rows[9].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML = "<th>" + data.standings[0].rows[10].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[10].competitor.id + ".png'> " + data.standings[0].rows[10].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML = "<th>" + data.standings[0].rows[11].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[11].competitor.id + ".png'> " + data.standings[0].rows[11].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML = "<th>" + data.standings[0].rows[12].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[12].competitor.id + ".png'> " + data.standings[0].rows[12].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML = "<th>" + data.standings[0].rows[13].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[13].competitor.id + ".png'> " + data.standings[0].rows[13].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML = "<th>" + data.standings[0].rows[14].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[14].competitor.id + ".png'> " + data.standings[0].rows[14].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML += "<th>" + data.standings[0].rows[14].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML += "<th>" + data.standings[0].rows[14].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML += "<th>" + data.standings[0].rows[14].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML += "<th>" + data.standings[0].rows[14].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(15)").innerHTML += "<th>" + data.standings[0].rows[14].points + "</th>";

document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML = "<th>" + data.standings[0].rows[15].position + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[15].competitor.id + ".png'> " + data.standings[0].rows[15].competitor.name + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML += "<th>" + data.standings[0].rows[15].gamePlayed + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML += "<th>" + data.standings[0].rows[15].gamesWon + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML += "<th>" + data.standings[0].rows[15].gamesEven + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML += "<th>" + data.standings[0].rows[15].gamesLost + "</th>";
document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(16)").innerHTML += "<th>" + data.standings[0].rows[15].points + "</th>";



// جدول لاعتماد الدوريات التي تحوي 14 فريق
} else if (data.standings[0].competitionId == 549) {

    document.querySelector(".LeagueRank").innerHTML += "<div class='MalikLeague'><table class='standings'><thead><tr><th>المركز</th><th style='text-align: center;'>فريق</th><th>لعب</th><th class='won'>فاز</th><th class='draw'>تعادل</th><th class='lost'>خسر</th><th>نقاط</th></tr></thead></table></div></div>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1)").innerHTML += "<tbody></tbody>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML = "<th>" + data.standings[0].rows[0].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[0].competitor.id + ".png'> " + data.standings[0].rows[0].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML = "<th>" + data.standings[0].rows[1].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[1].competitor.id + ".png'> " + data.standings[0].rows[1].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML = "<th>" + data.standings[0].rows[2].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[2].competitor.id + ".png'> " + data.standings[0].rows[2].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML = "<th>" + data.standings[0].rows[3].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[3].competitor.id + ".png'> " + data.standings[0].rows[3].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML = "<th>" + data.standings[0].rows[4].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[4].competitor.id + ".png'> " + data.standings[0].rows[4].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(5)").innerHTML += "<th>" + data.standings[0].rows[4].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML = "<th>" + data.standings[0].rows[5].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[5].competitor.id + ".png'> " + data.standings[0].rows[5].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(6)").innerHTML += "<th>" + data.standings[0].rows[5].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML = "<th>" + data.standings[0].rows[6].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[6].competitor.id + ".png'> " + data.standings[0].rows[6].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(7)").innerHTML += "<th>" + data.standings[0].rows[6].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML = "<th>" + data.standings[0].rows[7].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[7].competitor.id + ".png'> " + data.standings[0].rows[7].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(8)").innerHTML += "<th>" + data.standings[0].rows[7].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML = "<th>" + data.standings[0].rows[8].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[8].competitor.id + ".png'> " + data.standings[0].rows[8].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(9)").innerHTML += "<th>" + data.standings[0].rows[8].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML = "<th>" + data.standings[0].rows[9].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[9].competitor.id + ".png'> " + data.standings[0].rows[9].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(10)").innerHTML += "<th>" + data.standings[0].rows[9].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML = "<th>" + data.standings[0].rows[10].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[10].competitor.id + ".png'> " + data.standings[0].rows[10].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(11)").innerHTML += "<th>" + data.standings[0].rows[10].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML = "<th>" + data.standings[0].rows[11].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[11].competitor.id + ".png'> " + data.standings[0].rows[11].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(12)").innerHTML += "<th>" + data.standings[0].rows[11].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML = "<th>" + data.standings[0].rows[12].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[12].competitor.id + ".png'> " + data.standings[0].rows[12].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(13)").innerHTML += "<th>" + data.standings[0].rows[12].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML = "<th>" + data.standings[0].rows[13].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[13].competitor.id + ".png'> " + data.standings[0].rows[13].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(14)").innerHTML += "<th>" + data.standings[0].rows[13].points + "</th>";
    

// جدول لاعتماد الدوريات التي تحوي 32 فريق
} else if (data.standings[0].competitionId == 5930 || data.standings[0].competitionId == 572  || data.standings[0].competitionId == 623) {


    document.querySelector(".LeagueRank").innerHTML += "<div class='MalikLeague'><table class='standings'><thead><tr><th>المركز</th><th style='text-align: center;'>فريق</th><th>لعب</th><th class='won'>فاز</th><th class='draw'>تعادل</th><th class='lost'>خسر</th><th>نقاط</th></tr></thead></table><table class='standings'><thead><tr><th>المركز</th><th style='text-align: center;'>فريق</th><th>لعب</th><th class='won'>فاز</th><th class='draw'>تعادل</th><th class='lost'>خسر</th><th>نقاط</th></tr></thead></table><table class='standings'><thead><tr><th>المركز</th><th style='text-align: center;'>فريق</th><th>لعب</th><th class='won'>فاز</th><th class='draw'>تعادل</th><th class='lost'>خسر</th><th>نقاط</th></tr></thead></table><table class='standings'><thead><tr><th>المركز</th><th style='text-align: center;'>فريق</th><th>لعب</th><th class='won'>فاز</th><th class='draw'>تعادل</th><th class='lost'>خسر</th><th>نقاط</th></tr></thead></table><table class='standings'><thead><tr><th>المركز</th><th style='text-align: center;'>فريق</th><th>لعب</th><th class='won'>فاز</th><th class='draw'>تعادل</th><th class='lost'>خسر</th><th>نقاط</th></tr></thead></table><table class='standings'><thead><tr><th>المركز</th><th style='text-align: center;'>فريق</th><th>لعب</th><th class='won'>فاز</th><th class='draw'>تعادل</th><th class='lost'>خسر</th><th>نقاط</th></tr></thead></table><table class='standings'><thead><tr><th>المركز</th><th style='text-align: center;'>فريق</th><th>لعب</th><th class='won'>فاز</th><th class='draw'>تعادل</th><th class='lost'>خسر</th><th>نقاط</th></tr></thead></table><table class='standings'><thead><tr><th>المركز</th><th style='text-align: center;'>فريق</th><th>لعب</th><th class='won'>فاز</th><th class='draw'>تعادل</th><th class='lost'>خسر</th><th>نقاط</th></tr></thead></table></div></div>";

    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1)").innerHTML += "<tbody></tbody>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML = "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML = "<th>" + data.standings[0].rows[0].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[0].competitor.id + ".png'> " + data.standings[0].rows[0].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[0].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML = "<th>" + data.standings[0].rows[1].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[1].competitor.id + ".png'> " + data.standings[0].rows[1].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[1].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML = "<th>" + data.standings[0].rows[2].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[2].competitor.id + ".png'> " + data.standings[0].rows[2].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[2].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML = "<th>" + data.standings[0].rows[3].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[3].competitor.id + ".png'> " + data.standings[0].rows[3].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[3].points + "</th>";
    
    
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2)").innerHTML += "<tbody></tbody>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody").innerHTML = "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(1)").innerHTML = "<th>" + data.standings[0].rows[4].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(1)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[4].competitor.id + ".png'> " + data.standings[0].rows[4].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[4].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[4].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[4].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[4].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[4].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(2)").innerHTML = "<th>" + data.standings[0].rows[5].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(2)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[5].competitor.id + ".png'> " + data.standings[0].rows[5].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[5].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[5].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[5].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[5].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[5].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody").innerHTML += "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(3)").innerHTML = "<th>" + data.standings[0].rows[6].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(3)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[6].competitor.id + ".png'> " + data.standings[0].rows[6].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[6].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[6].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[6].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[6].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[6].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(4)").innerHTML = "<th>" + data.standings[0].rows[7].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(4)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[7].competitor.id + ".png'> " + data.standings[0].rows[7].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[7].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[7].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[7].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[7].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[7].points + "</th>";
    
    
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3)").innerHTML += "<tbody></tbody>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody").innerHTML = "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(1)").innerHTML = "<th>" + data.standings[0].rows[8].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(1)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[8].competitor.id + ".png'> " + data.standings[0].rows[8].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[8].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[8].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[8].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[8].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[8].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(2)").innerHTML = "<th>" + data.standings[0].rows[9].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(2)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[9].competitor.id + ".png'> " + data.standings[0].rows[9].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[9].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[9].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[9].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[9].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[9].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody").innerHTML += "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(3)").innerHTML = "<th>" + data.standings[0].rows[10].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(3)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[10].competitor.id + ".png'> " + data.standings[0].rows[10].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[10].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[10].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[10].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[10].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[10].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(4)").innerHTML = "<th>" + data.standings[0].rows[11].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(4)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[11].competitor.id + ".png'> " + data.standings[0].rows[11].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[11].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[11].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[11].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[11].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[11].points + "</th>";
    
    
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4)").innerHTML += "<tbody></tbody>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody").innerHTML = "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(1)").innerHTML = "<th>" + data.standings[0].rows[12].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(1)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[12].competitor.id + ".png'> " + data.standings[0].rows[12].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[12].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[12].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[12].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[12].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[12].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(2)").innerHTML = "<th>" + data.standings[0].rows[13].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(2)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[13].competitor.id + ".png'> " + data.standings[0].rows[13].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[13].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[13].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[13].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[13].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[13].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody").innerHTML += "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(3)").innerHTML = "<th>" + data.standings[0].rows[14].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(3)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[14].competitor.id + ".png'> " + data.standings[0].rows[14].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[14].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[14].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[14].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[14].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[14].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(4)").innerHTML = "<th>" + data.standings[0].rows[15].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(4)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[15].competitor.id + ".png'> " + data.standings[0].rows[15].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[15].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[15].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[15].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[15].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[15].points + "</th>";
    
    
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5)").innerHTML += "<tbody></tbody>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody").innerHTML = "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(1)").innerHTML = "<th>" + data.standings[0].rows[16].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(1)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[16].competitor.id + ".png'> " + data.standings[0].rows[16].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[16].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[16].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[16].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[16].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[16].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(2)").innerHTML = "<th>" + data.standings[0].rows[17].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(2)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[17].competitor.id + ".png'> " + data.standings[0].rows[17].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[17].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[17].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[17].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[17].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[17].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody").innerHTML += "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(3)").innerHTML = "<th>" + data.standings[0].rows[18].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(3)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[18].competitor.id + ".png'> " + data.standings[0].rows[18].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[18].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[18].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[18].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[18].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[18].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(4)").innerHTML = "<th>" + data.standings[0].rows[19].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(4)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[19].competitor.id + ".png'> " + data.standings[0].rows[19].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[19].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[19].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[19].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[19].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(5) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[19].points + "</th>";
    
    
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6)").innerHTML += "<tbody></tbody>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody").innerHTML = "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(1)").innerHTML = "<th>" + data.standings[0].rows[20].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(1)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[20].competitor.id + ".png'> " + data.standings[0].rows[20].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[20].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[20].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[20].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[20].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[20].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(2)").innerHTML = "<th>" + data.standings[0].rows[21].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(2)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[21].competitor.id + ".png'> " + data.standings[0].rows[21].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[21].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[21].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[21].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[21].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[21].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody").innerHTML += "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(3)").innerHTML = "<th>" + data.standings[0].rows[22].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(3)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[22].competitor.id + ".png'> " + data.standings[0].rows[22].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[22].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[22].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[22].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[22].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[22].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(4)").innerHTML = "<th>" + data.standings[0].rows[23].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(4)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[23].competitor.id + ".png'> " + data.standings[0].rows[23].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[23].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[23].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[23].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[23].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(6) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[23].points + "</th>";
    
    
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7)").innerHTML += "<tbody></tbody>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody").innerHTML = "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(1)").innerHTML = "<th>" + data.standings[0].rows[24].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(1)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[24].competitor.id + ".png'> " + data.standings[0].rows[24].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[24].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[24].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[24].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[24].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[24].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(2)").innerHTML = "<th>" + data.standings[0].rows[25].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(2)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[25].competitor.id + ".png'> " + data.standings[0].rows[25].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[25].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[25].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[25].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[25].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[25].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody").innerHTML += "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(3)").innerHTML = "<th>" + data.standings[0].rows[26].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(3)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[26].competitor.id + ".png'> " + data.standings[0].rows[26].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[26].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[26].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[26].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[26].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[26].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(4)").innerHTML = "<th>" + data.standings[0].rows[27].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(4)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[27].competitor.id + ".png'> " + data.standings[0].rows[27].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[27].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[27].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[27].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[27].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(7) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[27].points + "</th>";
    
    
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8)").innerHTML += "<tbody></tbody>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody").innerHTML = "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(1)").innerHTML = "<th>" + data.standings[0].rows[28].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(1)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[28].competitor.id + ".png'> " + data.standings[0].rows[28].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[28].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[28].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[28].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[28].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[28].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(2)").innerHTML = "<th>" + data.standings[0].rows[29].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(2)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[29].competitor.id + ".png'> " + data.standings[0].rows[29].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[29].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[29].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[29].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[29].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[29].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody").innerHTML += "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(3)").innerHTML = "<th>" + data.standings[0].rows[30].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(3)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[30].competitor.id + ".png'> " + data.standings[0].rows[30].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[30].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[30].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[30].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[30].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[30].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(4)").innerHTML = "<th>" + data.standings[0].rows[31].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(4)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[31].competitor.id + ".png'> " + data.standings[0].rows[31].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[31].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[31].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[31].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[31].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(8) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[31].points + "</th>";  
    


// جدول دوري أبطال أفريقيا
} else if (data.standings[0].competitionId == 624) {

    document.querySelector(".LeagueRank").innerHTML += "<div class='MalikLeague'><table class='standings'><thead><tr><th>المركز</th><th style='text-align: center;'>فريق</th><th>لعب</th><th class='won'>فاز</th><th class='draw'>تعادل</th><th class='lost'>خسر</th><th>نقاط</th></tr></thead></table><table class='standings'><thead><tr><th>المركز</th><th style='text-align: center;'>فريق</th><th>لعب</th><th class='won'>فاز</th><th class='draw'>تعادل</th><th class='lost'>خسر</th><th>نقاط</th></tr></thead></table><table class='standings'><thead><tr><th>المركز</th><th style='text-align: center;'>فريق</th><th>لعب</th><th class='won'>فاز</th><th class='draw'>تعادل</th><th class='lost'>خسر</th><th>نقاط</th></tr></thead></table><table class='standings'><thead><tr><th>المركز</th><th style='text-align: center;'>فريق</th><th>لعب</th><th class='won'>فاز</th><th class='draw'>تعادل</th><th class='lost'>خسر</th><th>نقاط</th></tr></thead></table></div></div>";    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1)").innerHTML += "<tbody></tbody>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML = "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML = "<th>" + data.standings[0].rows[12].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[12].competitor.id + ".png'> " + data.standings[0].rows[12].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[12].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[12].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[12].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[12].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[12].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML = "<th>" + data.standings[0].rows[13].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[13].competitor.id + ".png'> " + data.standings[0].rows[13].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[13].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[13].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[13].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[13].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[13].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML = "<th>" + data.standings[0].rows[14].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[14].competitor.id + ".png'> " + data.standings[0].rows[14].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[14].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[14].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[14].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[14].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[14].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML = "<th>" + data.standings[0].rows[15].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[15].competitor.id + ".png'> " + data.standings[0].rows[15].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[15].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[15].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[15].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[15].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(1) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[15].points + "</th>";
    
    
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2)").innerHTML += "<tbody></tbody>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody").innerHTML = "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(1)").innerHTML = "<th>" + data.standings[0].rows[16].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(1)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[16].competitor.id + ".png'> " + data.standings[0].rows[16].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[16].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[16].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[16].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[16].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[16].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(2)").innerHTML = "<th>" + data.standings[0].rows[17].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(2)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[17].competitor.id + ".png'> " + data.standings[0].rows[17].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[17].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[17].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[17].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[17].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[17].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody").innerHTML += "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(3)").innerHTML = "<th>" + data.standings[0].rows[18].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(3)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[18].competitor.id + ".png'> " + data.standings[0].rows[18].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[18].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[18].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[18].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[18].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[18].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(4)").innerHTML = "<th>" + data.standings[0].rows[19].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(4)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[19].competitor.id + ".png'> " + data.standings[0].rows[19].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[19].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[19].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[19].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[19].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(2) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[19].points + "</th>";
    
    
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3)").innerHTML += "<tbody></tbody>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody").innerHTML = "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(1)").innerHTML = "<th>" + data.standings[0].rows[20].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(1)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[20].competitor.id + ".png'> " + data.standings[0].rows[20].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[20].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[20].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[20].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[20].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[20].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(2)").innerHTML = "<th>" + data.standings[0].rows[21].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(2)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[21].competitor.id + ".png'> " + data.standings[0].rows[21].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[21].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[21].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[21].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[21].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[21].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody").innerHTML += "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(3)").innerHTML = "<th>" + data.standings[0].rows[22].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(3)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[22].competitor.id + ".png'> " + data.standings[0].rows[22].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[22].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[22].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[22].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[22].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[22].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(4)").innerHTML = "<th>" + data.standings[0].rows[23].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(4)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[23].competitor.id + ".png'> " + data.standings[0].rows[23].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[23].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[23].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[23].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[23].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(3) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[23].points + "</th>";
    
    
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4)").innerHTML += "<tbody></tbody>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody").innerHTML = "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(1)").innerHTML = "<th>" + data.standings[0].rows[24].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(1)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[24].competitor.id + ".png'> " + data.standings[0].rows[24].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[24].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[24].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[24].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[24].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(1)").innerHTML += "<th>" + data.standings[0].rows[24].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(2)").innerHTML = "<th>" + data.standings[0].rows[25].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(2)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[25].competitor.id + ".png'> " + data.standings[0].rows[25].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[25].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[25].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[25].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[25].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(2)").innerHTML += "<th>" + data.standings[0].rows[25].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody").innerHTML += "<tr></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(3)").innerHTML = "<th>" + data.standings[0].rows[26].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(3)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[26].competitor.id + ".png'> " + data.standings[0].rows[26].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[26].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[26].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[26].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[26].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(3)").innerHTML += "<th>" + data.standings[0].rows[26].points + "</th>";
    
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody").innerHTML += "<tr class='even'></tr>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(4)").innerHTML = "<th>" + data.standings[0].rows[27].position + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(4)").innerHTML += "<th><img class='teamlogo' src='https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v6/Competitors/" + data.standings[0].rows[27].competitor.id + ".png'> " + data.standings[0].rows[27].competitor.name + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[27].gamePlayed + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[27].gamesWon + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[27].gamesEven + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[27].gamesLost + "</th>";
    document.querySelector(".LeagueRank .MalikLeague table:nth-child(4) tbody tr:nth-child(4)").innerHTML += "<th>" + data.standings[0].rows[27].points + "</th>";
    
    
    

} else {

}



document.querySelector(".LeagueRank .MalikLeague").innerHTML += "<div class='copy-right'></div>";
document.querySelector(".LeagueRank .MalikLeague .copy-right").innerHTML += "<p>Powered by <a href='https://www.malik-web.com/'> Malik Web</a></p>";





}
get()
