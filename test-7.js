/*
20.04.2017 tarihinde trafiğe çıkan bir aracın servis bakım süreleri aşağıda verilmiştir. 
Bu bilgilere göre servis uyarısını veriniz.

1. Bakım : 1 yıl 
2. Bakım : 2 yıl
3. Bakım : 3 yıl
*/

var trafige_cikis = new Date("04.20.2017");
var trafikteki_ms = Date.now() - trafige_cikis.getTime();
var trafikteki_gun = Math.floor(trafikteki_ms/(1000*60*60*24));

trafige_cikis.setHours(0,0,0,0);

console.log(trafikteki_ms);
console.log(trafikteki_gun);

if (trafikteki_gun <=365) {
    console.log("1. servis bakım süreniz geldi.");
} 
else if (trafikteki_gun > 365 && trafikteki_gun <= 365*2) {
    console.log("2. servis bakım süreniz geldi.");
} 
else if (trafikteki_gun > 365*2 && trafikteki_gun <= 365*3) {
    console.log("3. servis bakım süreniz geldi.");
}
else {
    console.log("Bilinmeyen süre.");
}