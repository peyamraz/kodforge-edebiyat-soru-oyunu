(function () {
  "use strict";
  window.KF = window.KF || {};

  /* Türk edebiyatı veri seti: [yazar, dönem, [[eser, tür], ...]] */
  const YAZARLAR = [
    ["Orhan Pamuk","Cumhuriyet Dönemi",[["Kara Kitap","Roman"],["Benim Adım Kırmızı","Roman"],["Masumiyet Müzesi","Roman"],["Kar","Roman"]]],
    ["Yaşar Kemal","Cumhuriyet Dönemi",[["İnce Memed","Roman"],["Yer Demir Gök Bakır","Roman"],["Ağrı Dağı Efsanesi","Roman"],["Teneke","Roman"]]],
    ["Sabahattin Ali","Cumhuriyet Dönemi",[["Kürk Mantolu Madonna","Roman"],["Kuyucaklı Yusuf","Roman"],["İçimizdeki Şeytan","Roman"]]],
    ["Halide Edip Adıvar","Milli Edebiyat",[["Ateşten Gömlek","Roman"],["Sinekli Bakkal","Roman"],["Vurun Kahpeye","Roman"]]],
    ["Reşat Nuri Güntekin","Cumhuriyet Dönemi",[["Çalıkuşu","Roman"],["Yaprak Dökümü","Roman"],["Dudaktan Kalbe","Roman"]]],
    ["Peyami Safa","Cumhuriyet Dönemi",[["Dokuzuncu Hariciye Koğuşu","Roman"],["Fatih-Harbiye","Roman"],["Matmazel Noralya'nın Koltuğu","Roman"]]],
    ["Ahmet Hamdi Tanpınar","Cumhuriyet Dönemi",[["Huzur","Roman"],["Saatleri Ayarlama Enstitüsü","Roman"],["Mahur Beste","Roman"]]],
    ["Oğuz Atay","Cumhuriyet Dönemi",[["Tutunamayanlar","Roman"],["Tehlikeli Oyunlar","Roman"],["Korkuyu Beklerken","Hikaye"]]],
    ["Yusuf Atılgan","Cumhuriyet Dönemi",[["Aylak Adam","Roman"],["Anayurt Oteli","Roman"]]],
    ["Kemal Tahir","Cumhuriyet Dönemi",[["Devlet Ana","Roman"],["Yorgun Savaşçı","Roman"],["Esir Şehrin İnsanları","Roman"]]],
    ["Tarık Buğra","Cumhuriyet Dönemi",[["Küçük Ağa","Roman"],["Osmancık","Roman"]]],
    ["Fakir Baykurt","Cumhuriyet Dönemi",[["Yılanların Öcü","Roman"],["Kaplumbağalar","Roman"]]],
    ["Aziz Nesin","Cumhuriyet Dönemi",[["Zübük","Roman"],["Yaşar Ne Yaşar Ne Yaşamaz","Roman"],["Şimdiki Çocuklar Harika","Roman"]]],
    ["Rıfat Ilgaz","Cumhuriyet Dönemi",[["Hababam Sınıfı","Roman"],["Karartma Geceleri","Roman"]]],
    ["Adalet Ağaoğlu","Cumhuriyet Dönemi",[["Ölmeye Yatmak","Roman"],["Fikrimin İnce Gülü","Roman"]]],
    ["Orhan Kemal","Cumhuriyet Dönemi",[["Bereketli Topraklar Üzerinde","Roman"],["Murtaza","Roman"],["Hanımın Çiftliği","Roman"]]],
    ["Sait Faik Abasıyanık","Cumhuriyet Dönemi",[["Semaver","Hikaye"],["Son Kuşlar","Hikaye"],["Lüzumsuz Adam","Hikaye"]]],
    ["Ömer Seyfettin","Milli Edebiyat",[["Kaşağı","Hikaye"],["Diyet","Hikaye"],["Bomba","Hikaye"]]],
    ["Memduh Şevket Esendal","Milli Edebiyat",[["Ayaşlı ve Kiracıları","Roman"]]],
    ["Yakup Kadri Karaosmanoğlu","Milli Edebiyat",[["Yaban","Roman"],["Kiralık Konak","Roman"],["Ankara","Roman"]]],
    ["Halit Ziya Uşaklıgil","Servet-i Fünun",[["Mai ve Siyah","Roman"],["Aşk-ı Memnu","Roman"],["Kırık Hayatlar","Roman"]]],
    ["Mehmet Rauf","Servet-i Fünun",[["Eylül","Roman"]]],
    ["Hüseyin Rahmi Gürpınar","Tanzimat Dönemi",[["Şık","Roman"],["Mürebbiye","Roman"],["Gulyabani","Roman"]]],
    ["Namık Kemal","Tanzimat Dönemi",[["İntibah","Roman"],["Cezmi","Roman"],["Vatan yahut Silistre","Tiyatro"]]],
    ["Recaizade Mahmut Ekrem","Tanzimat Dönemi",[["Araba Sevdası","Roman"]]],
    ["Sami Paşazade Sezai","Tanzimat Dönemi",[["Sergüzeşt","Roman"]]],
    ["Nabizade Nazım","Tanzimat Dönemi",[["Karabibik","Roman"],["Zehra","Roman"]]],
    ["Elif Şafak","Günümüz Edebiyatı",[["Aşk","Roman"],["Pinhan","Roman"],["Mahrem","Roman"]]],
    ["Ahmet Ümit","Günümüz Edebiyatı",[["Bab-ı Esrar","Roman"],["İstanbul Hatırası","Roman"]]],
    ["Zülfü Livaneli","Günümüz Edebiyatı",[["Serenad","Roman"],["Mutluluk","Roman"]]],
    ["Ayşe Kulin","Günümüz Edebiyatı",[["Adı Aylin","Roman"],["Nefes Nefese","Roman"]]],
    ["İhsan Oktay Anar","Günümüz Edebiyatı",[["Puslu Kıtalar Atlası","Roman"],["Kitab-ül Hiyel","Roman"]]],
    ["Hasan Ali Toptaş","Günümüz Edebiyatı",[["Gölgesizler","Roman"],["Bin Hüzünlü Haz","Roman"]]],
    ["Latife Tekin","Günümüz Edebiyatı",[["Sevgili Arsız Ölüm","Roman"]]],
    ["Tomris Uyar","Cumhuriyet Dönemi",[["Gündökümü","Hikaye"],["İpek ve Bakır","Hikaye"]]],
    ["Füruzan","Cumhuriyet Dönemi",[["Parasız Yatılı","Hikaye"],["Kırk Yedi'liler","Hikaye"]]],
    ["Bilge Karasu","Cumhuriyet Dönemi",[["Gece","Roman"],["Göçmüş Kediler Bahçesi","Roman"]]],
    ["Haldun Taner","Cumhuriyet Dönemi",[["Keşanlı Ali Destanı","Tiyatro"],["Sersem Kocanın Kurnaz Karısı","Tiyatro"]]],
    ["Güngör Dilmen","Cumhuriyet Dönemi",[["Midas'ın Kulakları","Tiyatro"]]],
    ["Refik Halit Karay","Milli Edebiyat",[["Memleket Hikayeleri","Hikaye"],["Yezidin Kızı","Roman"]]],
    ["Hüseyin Nihal Atsız","Cumhuriyet Dönemi",[["Bozkurtlar","Roman"],["Ruh Adam","Roman"]]],
    ["Kerime Nadir","Cumhuriyet Dönemi",[["Hıçkırık","Roman"],["Samanyolu","Roman"]]],
    ["Mithat Cemal Kuntay","Milli Edebiyat",[["Üç İstanbul","Roman"]]],
    ["Abdülhak Şinasi Hisar","Cumhuriyet Dönemi",[["Fahim Bey ve Biz","Roman"],["Çamlıcadaki Eniştemiz","Roman"]]],
    ["Mustafa Kutlu","Günümüz Edebiyatı",[["Uzun Hikaye","Hikaye"],["Beyhude Ömrüm","Hikaye"]]],
    ["Rasim Özdenören","Günümüz Edebiyatı",[["Gül Yetiştiren Adam","Hikaye"]]],
    ["Sevgi Soysal","Cumhuriyet Dönemi",[["Tante Rosa","Roman"],["Yürümek","Roman"]]],
    ["Tezer Özlü","Cumhuriyet Dönemi",[["Çocukluğun Soğuk Geceleri","Roman"]]],
    ["Turgut Özakman","Günümüz Edebiyatı",[["Şu Çılgın Türkler","Roman"]]],
    ["Esat Mahmut Karakurt","Cumhuriyet Dönemi",[["Allahaısmarladık","Roman"]]],
    ["Nazım Hikmet","Cumhuriyet Dönemi",[["Memleketimden İnsan Manzaraları","Şiir"],["Kuvayı Milliye","Şiir"],["Şeyh Bedrettin Destanı","Şiir"]]],
    ["Yahya Kemal Beyatlı","Milli Edebiyat",[["Kendi Gök Kubbemiz","Şiir"],["Eski Şiirin Rüzgarıyle","Şiir"]]],
    ["Ahmet Haşim","Fecri Ati",[["Göl Saatleri","Şiir"],["Piyale","Şiir"]]],
    ["Necip Fazıl Kısakürek","Cumhuriyet Dönemi",[["Kaldırımlar","Şiir"],["Çile","Şiir"],["Ben ve Ötesi","Şiir"]]],
    ["Cahit Sıtkı Tarancı","Cumhuriyet Dönemi",[["Otuz Beş Yaş","Şiir"],["Düşten Güzel","Şiir"]]],
    ["Orhan Veli Kanık","Garip Akımı",[["Garip","Şiir"],["Vazgeçemediğim","Şiir"]]],
    ["Oktay Rifat","Garip Akımı",[["Güzelleme","Şiir"],["Aşağı Yukarı","Şiir"]]],
    ["Melih Cevdet Anday","Garip Akımı",[["Rahatı Kaçan Ağaç","Şiir"],["Teknenin Ölümü","Şiir"]]],
    ["Faruk Nafiz Çamlıbel","Beş Hececiler",[["Han Duvarları","Şiir"],["Çoban Çeşmesi","Şiir"]]],
    ["Ziya Osman Saba","Beş Hececiler",[["Sebil ve Güvercinler","Şiir"]]],
    ["Ahmet Muhip Dıranas","Cumhuriyet Dönemi",[["Olvido","Şiir"],["Fahriye Abla","Şiir"]]],
    ["Cahit Külebi","Cumhuriyet Dönemi",[["Atatürk'e Ağıt","Şiir"]]],
    ["Bedri Rahmi Eyüboğlu","Cumhuriyet Dönemi",[["Dol Karabakır Dol","Şiir"]]],
    ["Attila İlhan","Cumhuriyet Dönemi",[["Sisler Bulvarı","Şiir"],["Ben Sana Mecburum","Şiir"]]],
    ["Sezai Karakoç","İkinci Yeni",[["Mona Roza","Şiir"],["Hızırla Kırk Saat","Şiir"]]],
    ["Cemal Süreya","İkinci Yeni",[["Üvercinka","Şiir"],["Göçebe","Şiir"]]],
    ["Edip Cansever","İkinci Yeni",[["Yerçekimli Karanfil","Şiir"],["Tragedyalar","Şiir"]]],
    ["Turgut Uyar","İkinci Yeni",[["Dünyanın En Güzel Arabistanı","Şiir"],["Tütünler Islak","Şiir"]]],
    ["Ece Ayhan","İkinci Yeni",[["Bakışsız Bir Kedi Kara","Şiir"]]],
    ["Can Yücel","Cumhuriyet Dönemi",[["Sevgi Duvarı","Şiir"],["Bir Siyasinin Şiirleri","Şiir"]]],
    ["Özdemir Asaf","Cumhuriyet Dönemi",[["Dünya Kaçtı Gözüme","Şiir"],["Sen Sen Sen","Şiir"]]],
    ["Ümit Yaşar Oğuzcan","Cumhuriyet Dönemi",[["Bir Gün Anlarsın","Şiir"]]],
    ["Ataol Behramoğlu","Günümüz Edebiyatı",[["Bir Gün Mutlaka","Şiir"]]],
    ["İsmet Özel","Günümüz Edebiyatı",[["Erbain","Şiir"]]],
    ["Hilmi Yavuz","Günümüz Edebiyatı",[["Bakış Kuşu","Şiir"]]],
    ["Gülten Akın","Günümüz Edebiyatı",[["Maraş'ın ve Ökkeş'in Destanı","Şiir"]]],
    ["Fazıl Hüsnü Dağlarca","Cumhuriyet Dönemi",[["Çocuk ve Allah","Şiir"],["Üç Şehitler Destanı","Şiir"]]],
    ["Arif Nihat Asya","Cumhuriyet Dönemi",[["Bir Bayrak Rüzgar Bekliyor","Şiir"]]],
    ["Kemalettin Kamu","Beş Hececiler",[["Bingöl Çobanları","Şiir"]]],
    ["Ömer Bedrettin Uşaklı","Beş Hececiler",[["Yayla Dumanı","Şiir"]]]
  ];

  const TURLER = ["Roman", "Hikaye", "Şiir", "Tiyatro"];

  function karistir(dizi) {
    const k = dizi.slice();
    for (let i = k.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const gecici = k[i]; k[i] = k[j]; k[j] = gecici;
    }
    return k;
  }

  let HAVUZ = null;

  /* Her veri satırından birden çok soru tipi üretilir; havuz 1000 soruyu aşar. */
  function havuzKur() {
    if (HAVUZ) return HAVUZ;
    HAVUZ = [];

    const yazarAdlari = YAZARLAR.map(function (y) { return y[0]; });
    const tumDonemler = [];
    const tumEserler = [];
    YAZARLAR.forEach(function (y) {
      if (tumDonemler.indexOf(y[1]) === -1) tumDonemler.push(y[1]);
      y[2].forEach(function (e) {
        tumEserler.push({ ad: e[0], tur: e[1], yazar: y[0], donem: y[1] });
      });
    });

    function ekle(soru, dogru, yanlisHavuz, kategori) {
      const yanlislar = karistir(yanlisHavuz.filter(function (h) { return h !== dogru; })).slice(0, 3);
      if (yanlislar.length < 3) return;
      const secenekler = karistir(yanlislar.concat([dogru]));
      HAVUZ.push({ soru: soru, dogru: secenekler.indexOf(dogru), secenekler: secenekler, kategori: kategori });
    }

    tumEserler.forEach(function (e) {
      ekle("«" + e.ad + "» hangi yazara aittir?", e.yazar, yazarAdlari, "Yazar-Eser");
      ekle("«" + e.ad + "» hangi edebi türde yazılmıştır?", e.tur, TURLER.filter(function (t) { return t !== e.tur; }), "Tür");
      ekle("«" + e.ad + "» hangi edebi döneme aittir?", e.donem, tumDonemler.filter(function (d) { return d !== e.donem; }), "Dönem");
      ekle("Hangisi bir " + e.tur + " örneğidir?", e.ad, tumEserler.filter(function (x) { return x.tur !== e.tur; }).map(function (x) { return x.ad; }), "Tür");
      ekle("Hangi eser " + e.donem + " dönemine aittir?", e.ad, tumEserler.filter(function (x) { return x.donem !== e.donem; }).map(function (x) { return x.ad; }), "Dönem");
    });

    YAZARLAR.forEach(function (y) {
      y[2].forEach(function (e) {
        ekle("Hangisi " + y[0] + " imzalı bir eserdir?", e[0], tumEserler.filter(function (x) { return x.yazar !== y[0]; }).map(function (x) { return x.ad; }), "Yazar-Eser");
      });
      ekle(y[0] + " hangi edebi döneme aittir?", y[1], tumDonemler.filter(function (d) { return d !== y[1]; }), "Dönem");
      ekle("Hangi yazar " + y[1] + " dönemindendir?", y[0], YAZARLAR.filter(function (b) { return b[1] !== y[1]; }).map(function (b) { return b[0]; }), "Dönem");
    });

    HAVUZ = karistir(HAVUZ);
    return HAVUZ;
  }

  let OYUN = null;

  KF.SoruOyunu = {
    havuzBoyutu: function () { return havuzKur().length; },
    kategoriler: function () {
      const k = ["Tümü"];
      havuzKur().forEach(function (s) {
        if (k.indexOf(s.kategori) === -1) k.push(s.kategori);
      });
      return k;
    },
    baslat: function (adet, kategori) {
      let havuz = havuzKur();
      if (kategori && kategori !== "Tümü") {
        havuz = havuz.filter(function (s) { return s.kategori === kategori; });
      }
      OYUN = {
        sorular: karistir(havuz).slice(0, adet),
        sira: 0, puan: 0, dogruSayi: 0, yanlisSayi: 0,
        seri: 0, enIyiSeri: 0, baslangic: Date.now(), kategori: kategori
      };
      return OYUN;
    },
    durumu: function () { return OYUN; },
    siradaki: function () { return OYUN ? OYUN.sorular[OYUN.sira] : null; },
    ilerleme: function () { return OYUN ? OYUN.sira / OYUN.sorular.length : 0; },
    yanitla: function (secilen) {
      if (!OYUN) return null;
      const s = OYUN.sorular[OYUN.sira];
      const dogruMu = secilen === s.dogru;
      let kazanilan = 0;
      if (dogruMu) {
        OYUN.seri += 1;
        if (OYUN.seri > OYUN.enIyiSeri) OYUN.enIyiSeri = OYUN.seri;
        kazanilan = 100 + Math.min(OYUN.seri - 1, 5) * 10;
        OYUN.puan += kazanilan;
        OYUN.dogruSayi += 1;
      } else {
        OYUN.seri = 0;
        OYUN.yanlisSayi += 1;
      }
      OYUN.sira += 1;
      return { dogruMu: dogruMu, kazanilan: kazanilan, dogruSecenek: s.dogru, bitti: OYUN.sira >= OYUN.sorular.length, seri: OYUN.seri };
    },
    sure: function () { return OYUN ? Math.round((Date.now() - OYUN.baslangic) / 1000) : 0; }
  };

  KF.Skorlar = {
    getir: function () { return KF.Depo.al("edebiyat-skorlar", []); },
    ekle: function (kayit) {
      const liste = KF.Skorlar.getir();
      liste.push(kayit);
      liste.sort(function (a, b) { return b.puan - a.puan; });
      liste = liste.slice(0, 50);
      KF.Depo.koy("edebiyat-skorlar", liste);
      return liste;
    },
    enIyi: function () {
      const liste = KF.Skorlar.getir();
      return liste.length ? liste[0].puan : 0;
    },
    oyunSayisi: function () { return KF.Depo.al("edebiyat-oyun-sayisi", 0); },
    oyunArtir: function () { KF.Depo.koy("edebiyat-oyun-sayisi", KF.Skorlar.oyunSayisi() + 1); },
    sil: function () { KF.Depo.koy("edebiyat-skorlar", []); }
  };
})();
