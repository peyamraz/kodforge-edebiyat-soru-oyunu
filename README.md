# Edebiyat Soru Oyunu

Türk edebiyatı veri setinden üretilen 1000+ soruluk havuz; 4 şık, 20 sn zamanlayıcı, seri bonuslu puanlama ve localStorage liderlik tablosu.

Bu proje **Mehmet Reşat Raz** ajanı tarafından üretildi. Bağımsız bir **web uygulamasıdır**:
hiçbir bağımlılığı yoktur, `npm install` gerekmez, internet bağlantısı istemez. Ücretsiz İndirebilirsiniz..
Tüm veri tarayıcının localStorage'ında saklanır.

## Hızlı başlatma (PC)

1. ZIP'i bu klasöre çıkart
2. **`baslat.bat`** dosyasına çift tıkla (Windows) — ya da terminalde `sh baslat.sh` (macOS/Linux)
3. Uygulama varsayılan tarayıcında açılır. Hepsi bu.

> **Önemli:** Bu bir **Flutter projesi değildir**; `pubspec.yaml`, `android/` ya da `ios/`
> klasörü yoktur ve gerekmez. Bu klasörde `flutter run` çalıştırırsan
> *"No pubspec.yaml file found"* hatası alırsın — bu normaldir.
> Uygulamayı açmak için `baslat.bat`'ı kullan ya da `web/index.html`'i tarayıcıda aç.

## VS Code ile geliştirme

1. Bu klasörde `code .` çalıştır (ya da VS Code → File → Open Folder)
2. **Live Server** eklentisini kur (ritwickdey.LiveServer)
3. `web/index.html` dosyasına sağ tık → **Open with Live Server**

Alternatif olarak kök klasörde `python -m http.server 5500` çalıştırıp
`http://localhost:5500/web/index.html` adresini açabilirsin.

## Proje yapısı

```
├─ baslat.bat              Windows: çift tıkla → tarayıcıda açar
├─ baslat.sh               macOS/Linux başlatıcı (sh baslat.sh)
├─ web/index.html          Giriş sayfası
├─ css/base.css            Ortak tasarım sistemi (tema, düğme, kart, gezinme)
├─ css/app.css             Bu uygulamaya özel stiller
├─ lib/
│  ├─ main.js              Ana giriş noktası (başlatma akışı)
│  ├─ core/config.js       Uygulama kimliği ve ekran listesi
│  ├─ core/tema.js         Karanlık/aydınlık tema yönetimi
│  ├─ models/veri.js       Veri modeli fabrikaları
│  ├─ services/            Depolama + iş kuralları servisleri
│  ├─ utils/               DOM ve tarih yardımcıları
│  ├─ widgets/bilesenler.js  İkon seti, toast, modal
│  └─ screens/             Ekran dosyaları (her bölüm bir dosya)
├─ assets/logo.svg         Uygulama simgesi
├─ test/runner.html        Birim testleri
└─ .vscode/settings.json   Editör ayarları
```

## Ekranlar

- **Oyun** (`lib/screens/anasayfa.js`)
- **Sıralama** (`lib/screens/siralama.js`)
- **Ayarlar** (`lib/screens/ayarlar.js`)

## Genişletme

Yeni ekran eklemek için:

1. `lib/screens/yeni_ekran.js` dosyasını oluştur ve `KF.Ekranlar.yeni_ekran` fonksiyonunu yaz
2. `web/index.html` içine `<script src="../lib/screens/yeni_ekran.js" defer>` ekle
3. `lib/core/config.js` içindeki `ekranlar` listesine `{ id, ad, ikon }` kaydı ekle

İkonlar `lib/widgets/bilesenler.js` içindeki `KF.Ikonlar` sözlüğünde tanımlıdır.

## Testler

`test/runner.html` dosyasını tarayıcıda aç; sonuçlar ekranda listelenir.

## Not

Vakit/hava verileri benzetimdir; gerçek bir API'ye bağlamak için
ilgili `lib/services/` dosyasındaki fonksiyon gövdelerini `fetch` çağrısıyla değiştir.
