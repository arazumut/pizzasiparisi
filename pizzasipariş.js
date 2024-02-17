//!pizza sipariş uygulaması
document.writeln("kamil")
let küçükpizza = Number(55);
let ortapizza = Number(95);
let büyükpizza = Number(155);
let kola = Number(15);
let ayran = Number(10);
let şalgam = Number(15);
let bakiye = Number(1000);
yenisatir = "\r\n"
let pizzaseçenek = "1-küçük boy" + yenisatir
  + "2-orta boy" + yenisatir
  + "3-büyük boy" + yenisatir
  + "UMUT PİZZAYA HOŞGELDİNİZ!! İstediğiniz pizza boyutunu seçiniz";

let pizzaseçenekiçecek = "1-kola" + yenisatir
  + "2-ayran" + yenisatir
  + "3-şalgam" + yenisatir
  + "istediğiniz içeceği seçiniz";

let pizzaseçim = prompt(pizzaseçenek);
let içecek = prompt(pizzaseçenekiçecek);

switch (pizzaseçenek) {
  case "1":
    alert("küçük boy pizza seçtiniz şuanki ücret:" + küçükpizza)
    break;
  case "2":
    alert("orta boy pizza seçtiniz şuanki ücret : " + ortapizza)
    break;
  case "3":
    alert("büyük boy pizza seçtiniz şuanki ücret : " + büyükpizza)
    break;
}
switch (pizzaseçenekiçecek) {
  case "1":
    alert("kola seçtiniz şuanki ücret : " + kola)
    break;
  case "2":
    alert("ayran seçtiniz şuanki ucret:" + ayran)
    break;
  case "3":
    alert("şalgam seçtiniz şuanki ücreti:" + şalgam)
    break;

}
içecekvepizza = Number(küçükpizza + kola);
içeçeckvepizza2 = Number(ortapizza + kola);
içeçeckvepizza3 = Number(büyükpizza + kola);
içeçeckvepizza4 = Number(küçükpizza + ayran);
içecekvepizza5 = Number(ortapizza + ayran);
içecekvepizza6 = Number(büyükpizza + ayran);
içecekvepizza7 = Number(küçükpizza + şalgam);
içecekvepizza8 = Number(ortapizza + şalgam);
içecekvepizza9 = Number(büyükpizza + şalgam);

if (içecekvepizza) {
  alert("siparişiniz başarıyla alınmıştır!!en kısa zamanda elinizde olacaktır toplam ücret: " + içecekvepizza + " kartınızda " + (bakiye - içecekvepizza) + " liranız kaldı");
}
else if (içeçeckvepizza2) {
  alert("siparişiniz başarıyla alınmısştır!!en kısa zamanda elinizde olacaktır toplam ücret:" + içeçeckvepizza2 + " kartınızda" + (bakiye - içeçeckvepizza2) + " liranız kaldı");
}
else if (içeçeckvepizza3) {
  alert("siparişiniz başarıyla alınmıştır en kısa zamanda elinizde olacaktır toplam ücret:" + içeçeckvepizza3 + " kartınızda" + (bakiye - içeçeckvepizza3) + " liranız kaldı");
}
else if (içeçeckvepizza4) {
  alert("siparişiniz başarıyla alınmıştır en kısa zamanda elinizde olacaktır toplam ücret:" + içeçeckvepizza4 + " kartınızda" + (bakiye - içeçeckvepizza4) + " liranız kaldı");
}
else if (içecekvepizza5) {
  alert("siparişiniz başarıyla alınmıştır en kısa zamanda elinizde olacaktır toplam ücret:" + içecekvepizza5 + " kartınızda" + (bakiye - içecekvepizza5) + " liranız kaldı");
}
else if (içecekvepizza6) {
  alert("siparişiniz başarıyla alınmıştır en kısa zamanda elinizde olacaktır toplam ücret:" + içecekvepizza6 + " kartınızda" + (bakiye - içecekvepizza6) + " liranız kaldı");
}
else if (içecekvepizza7) {
  alert("siparişiniz başarıyla alınmıştır en kısa zamanda elinizde olacaktır toplam ücret:" + içecekvepizza7 + " kartınızda" + (bakiye - içecekvepizza7) + " liranız kaldı");
}
else if (içecekvepizza8) {
  alert("siparişiniz başarıyla alınmıştır en kısa zamanda elinizde olacaktır toplam ücret:" + içecekvepizza8 + " kartınızda" + (bakiye - içecekvepizza8) + " liranız kaldı");
}
else if (içecekvepizza9) {
  alert("siparişiniz başarıyla alınmıştır en kısa zamanda elinizde olacaktır toplam ücret:" + içecekvepizza9 + " kartınızda" + (bakiye - içecekvepizza9) + " liranız kaldı");
}
else {
  alert("siparişiniz alınamamıştır!!")
}

