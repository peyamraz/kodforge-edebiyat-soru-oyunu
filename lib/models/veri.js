(function () {
  "use strict";
  window.KF = window.KF || {};

  /* Veri modelleri — her kayıt aynı şekle sahip olsun diye fabrikalar. */
  KF.Modeller = {
    gorev: function (ad) {
      return { id: KF.Ar.uid(), ad: ad, bitti: false, zaman: Date.now() };
    },
    not: function (metin) {
      return { id: KF.Ar.uid(), metin: metin, arsivde: false, zaman: Date.now() };
    },
    islem: function (aciklama, tur, tutar) {
      return { id: KF.Ar.uid(), aciklama: aciklama, tur: tur, tutar: tutar, zaman: Date.now() };
    }
  };
})();
