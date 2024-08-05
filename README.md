<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> 
    </a> 
    <h1>Pizza sipariş uygulaması</h1>
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

<h1>Stok Takip</h1>
 <a href="https://www.python.org" target="_blank" rel="noreferrer"> 
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> 
    </a> 
Ürün Ekleme Fonksiyonu
add_product():
Kullanıcının girdiği ürün adı (entry_name) ve miktar (entry_quantity) alınır.
Ürün adı boş değilse ve miktar bir sayıysa:
Miktar int türüne dönüştürülür.
JSON dosyasından mevcut ürün verileri yüklenir.
Ürün adı daha önce listede varsa, miktarı güncellenir. Eğer yoksa, yeni bir ürün olarak eklenir.
Güncellenmiş veriler JSON dosyasına kaydedilir.
Ürün listeleme alanı güncellenir.
Girdi kutuları temizlenir.
Eğer girdi geçersizse, hata mesajı gösterilir.
Ürün Güncelleme Fonksiyonu
update_product(action):
Listeden seçili ürünü alır.
Ürünün miktarını artırma ("increase") veya azaltma ("decrease") işlemi yapar.
Güncellenmiş veriler JSON dosyasına kaydedilir.
Ürün listeleme alanı güncellenir.
Ürün Silme Fonksiyonu
delete_product():
Listeden seçili ürünü alır.
Bu ürünü ürün verilerinden siler.
Güncellenmiş veriler JSON dosyasına kaydedilir.
Ürün listeleme alanı güncellenir.
Arama Fonksiyonu
search_product():
Kullanıcının arama kutusuna girdiği terimi alır.
Ürün listesini terime göre filtreler ve arama sonucunu listede gösterir.
Liste Güncelleme Fonksiyonu
update_listbox():
JSON dosyasındaki ürünleri yükler ve liste kutusunu günceller.
Ürünler alfabetik sıraya göre listelenir.
Sayfa Değiştirme Fonksiyonları
switch_to_list_page():

Ürün ekleme sayfasını gizler ve ürün listesi sayfasını gösterir.
switch_to_add_page():

Ürün listesi sayfasını gizler ve ürün ekleme sayfasını gösterir.
Tkinter Arayüzü
Ürün Ekleme Sayfası (page_frame):

Ürün adı ve miktarını girmek için giriş kutuları.
"Ürün Ekle" butonu, ürün ekleme işlemini başlatır.
"Liste Sayfasına Geç" butonu, ürün listesi sayfasına geçiş yapar.
Ürün Listesi Sayfası (list_frame):

Ürünlerin listelendiği bir listbox.
"Ürünü Arttır", "Ürünü Azalt" ve "Ürünü Sil" butonları, ilgili işlemleri yapar.
Ürün araması için bir arama kutusu ve "Ara" butonu.
"Ürün Ekleme Sayfasına Geç" butonu, ürün ekleme sayfasına geçiş yapar.
Ana Program Döngüsü
root.mainloop()
root.mainloop(): Tkinter penceresini açık tutar ve kullanıcı etkileşimlerini bekler.
Bu kod temel bir stok takip uygulaması için gerekli olan işlevleri sağlar. Tkinter arayüzü sayesinde kullanıcı, ürünleri ekleyebilir, güncelleyebilir, silebilir ve arama yapabilir. JSON dosyası verilerin kalıcı bir şekilde saklanmasını sağlar.

![Ekran görüntüsü 2024-08-05 122320](https://github.com/user-attachments/assets/18aee097-9b9a-432d-b2c4-00be97b1e6d8)

![Ekran görüntüsü 2024-08-05 122245](https://github.com/user-attachments/assets/1f774dbf-3d63-460a-a49a-a5842ef7a603)
![Ekran görüntüsü 2024-08-05 122303](https://github.com/user-attachments/assets/a948f787-f51c-419f-9610-f7d41a3c8bda)



