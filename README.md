Tabii, işte kodun adım adım ne yaptığını, amacını ve işlevini açıklayan bir rapor:

Kodun Amacı ve Genel İşlevi
Bu kod, kullanıcıdan pizza ve içecek seçimi yapmasını isteyen basit bir pizza sipariş uygulamasıdır. Kullanıcının seçimine göre toplam ücreti hesaplar ve siparişin başarıyla alınıp alınmadığını gösteren bir mesaj görüntüler.

Adım Adım Analiz
1. Başlangıç ve Değişken Tanımlamaları
document.writeln("kamil"): HTML sayfasına "kamil" yazısını yazdırır.
Pizza ve içecek fiyatları, ayrıca kullanıcının bakiyesi tanımlanır:
küçükpizza = 55
ortapizza = 95
büyükpizza = 155
kola = 15
ayran = 10
şalgam = 15
bakiye = 1000
2. Kullanıcıdan Pizza ve İçecek Seçimi İstemek
yenisatir = "\r\n": Yeni satır karakteri tanımlanır.
Kullanıcıya pizza ve içecek seçenekleri sunan mesajlar oluşturulur:
pizzaseçenek: Kullanıcıdan pizza boyutunu seçmesini isteyen mesaj.
pizzaseçenekiçecek: Kullanıcıdan içecek seçmesini isteyen mesaj.
prompt fonksiyonları ile kullanıcıdan seçimler alınır:
pizzaseçim = prompt(pizzaseçenek)
içecek = prompt(pizzaseçenekiçecek)
3. Kullanıcının Seçimine Göre Ücretleri Gösterme
switch yapıları ile kullanıcının seçimine göre pizza ve içecek ücretlerini gösteren uyarılar (alert) görüntülenir:
pizzaseçenek için switch yapısı:
javascript
Kodu kopyala
switch (pizzaseçim) {
  case "1":
    alert("küçük boy pizza seçtiniz şuanki ücret:" + küçükpizza);
    break;
  case "2":
    alert("orta boy pizza seçtiniz şuanki ücret : " + ortapizza);
    break;
  case "3":
    alert("büyük boy pizza seçtiniz şuanki ücret : " + büyükpizza);
    break;
}
pizzaseçenekiçecek için switch yapısı:
javascript
Kodu kopyala
switch (içecek) {
  case "1":
    alert("kola seçtiniz şuanki ücret : " + kola);
    break;
  case "2":
    alert("ayran seçtiniz şuanki ucret:" + ayran);
    break;
  case "3":
    alert("şalgam seçtiniz şuanki ücreti:" + şalgam);
    break;
}
4. Seçime Göre Toplam Ücreti Hesaplama
Kullanıcının seçimine göre toplam ücretleri hesaplamak için değişkenler tanımlanır:
javascript
Kodu kopyala
içecekvepizza = Number(küçükpizza + kola);
içeçekvepizza2 = Number(ortapizza + kola);
içeçekvepizza3 = Number(büyükpizza + kola);
içeçekvepizza4 = Number(küçükpizza + ayran);
içeçekvepizza5 = Number(ortapizza + ayran);
içeçekvepizza6 = Number(büyükpizza + ayran);
içeçekvepizza7 = Number(küçükpizza + şalgam);
içeçekvepizza8 = Number(ortapizza + şalgam);
içeçekvepizza9 = Number(büyükpizza + şalgam);
5. Siparişin Başarıyla Alındığını Gösteren Mesaj
Kullanıcının seçimine göre toplam ücreti ve kalan bakiyeyi hesaplayarak bir uyarı mesajı gösterilir:
javascript
Kodu kopyala
if (içecekvepizza) {
  alert("siparişiniz başarıyla alınmıştır!!en kısa zamanda elinizde olacaktır toplam ücret: " + içecekvepizza + " kartınızda " + (bakiye - içecekvepizza) + " liranız kaldı");
} else if (içeçekvepizza2) {
  alert("siparişiniz başarıyla alınmısştır!!en kısa zamanda elinizde olacaktır toplam ücret:" + içeçekvepizza2 + " kartınızda" + (bakiye - içeçekvepizza2) + " liranız kaldı");
} else if (içeçekvepizza3) {
  alert("siparişiniz başarıyla alınmıştır en kısa zamanda elinizde olacaktır toplam ücret:" + içeçekvepizza3 + " kartınızda" + (bakiye - içeçekvepizza3) + " liranız kaldı");
} else if (içeçekvepizza4) {
  alert("siparişiniz başarıyla alınmıştır en kısa zamanda elinizde olacaktır toplam ücret:" + içeçekvepizza4 + " kartınızda" + (bakiye - içeçekvepizza4) + " liranız kaldı");
} else if (içeçekvepizza5) {
  alert("siparişiniz başarıyla alınmıştır en kısa zamanda elinizde olacaktır toplam ücret:" + içeçekvepizza5 + " kartınızda" + (bakiye - içeçekvepizza5) + " liranız kaldı");
} else if (içeçekvepizza6) {
  alert("siparişiniz başarıyla alınmıştır en kısa zamanda elinizde olacaktır toplam ücret:" + içeçekvepizza6 + " kartınızda" + (bakiye - içeçekvepizza6) + " liranız kaldı");
} else if (içeçekvepizza7) {
  alert("siparişiniz başarıyla alınmıştır en kısa zamanda elinizde olacaktır toplam ücret:" + içeçekvepizza7 + " kartınızda" + (bakiye - içeçekvepizza7) + " liranız kaldı");
} else if (içeçekvepizza8) {
  alert("siparişiniz başarıyla alınmıştır en kısa zamanda elinizde olacaktır toplam ücret:" + içeçekvepizza8 + " kartınızda" + (bakiye - içeçekvepizza8) + " liranız kaldı");
} else if (içeçekvepizza9) {
  alert("siparişiniz başarıyla alınmıştır en kısa zamanda elinizde olacaktır toplam ücret:" + içeçekvepizza9 + " kartınızda" + (bakiye - içeçekvepizza9) + " liranız kaldı");
} else {
  alert("siparişiniz alınamamıştır!!")
}
Özet
Bu kod, kullanıcıdan pizza ve içecek seçimi yapmasını isteyen, ardından seçime göre toplam ücreti hesaplayarak siparişin başarıyla alındığını veya alınamadığını gösteren bir pizza sipariş uygulamasıdır. Kullanıcıdan alınan bilgilerle sipariş oluşturulur ve toplam ücret hesaplanarak kullanıcının bakiyesinden düşülür. Kodda birkaç mantık hatası bulunmakta olup, bu hatalar düzeltilerek daha doğru çalışması sağlanabilir.






