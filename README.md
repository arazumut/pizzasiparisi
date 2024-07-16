
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
switch yapıları ile kullanıcının seçimine göre pizza ve içecek ücretlerini gösteren uyarılar (alert) görüntülenir
Özet
Bu kod, kullanıcıdan pizza ve içecek seçimi yapmasını isteyen, ardından seçime göre toplam ücreti hesaplayarak siparişin başarıyla alındığını veya alınamadığını gösteren bir pizza sipariş uygulamasıdır. Kullanıcıdan alınan bilgilerle sipariş oluşturulur ve toplam ücret hesaplanarak kullanıcının bakiyesinden düşülür. Kodda birkaç mantık hatası bulunmakta olup, bu hatalar düzeltilerek daha doğru çalışması sağlanabilir.






