(function () {
  "use strict";
  window.KF = window.KF || {};

  const GUNLER = ["Paz", "Pzt", "Sal", "\u00c7ar", "Per", "Cum", "Cmt"];

  KF.Tarih = {
    uzun: function (d) {
      return d.toLocaleDateString("tr-TR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    },
    kisa: function (d) {
      return d.toLocaleDateString("tr-TR", { day: "numeric", month: "short" });
    },
    saat: function (d) {
      return d.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" });
    },
    gunAd: function (index) {
      return GUNLER[index % 7];
    }
  };
})();
