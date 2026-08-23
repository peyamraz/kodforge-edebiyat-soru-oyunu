(function () {
  "use strict";
  window.KF = window.KF || {};

  /* Uygulamanın kimlik kartı — ad, sürüm, tema ve ekran listesi.
     NOT: sehirler alanı yönlendirici başlarken servislerden doldurulur. */
  KF.Yapi = {
    ad: "Edebiyat Soru Oyunu",
    surum: "1.0.0",
    ureten: "KodForge FORGE-1",
    sehirler: null,
    ekranlar: [
      { id: "anasayfa", ad: "Oyun", ikon: "kitap" },
      { id: "siralama", ad: "Sıralama", ikon: "kupa" },
      { id: "ayarlar", ad: "Ayarlar", ikon: "ayar" }
    ]
  };
})();
