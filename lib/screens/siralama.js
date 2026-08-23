(function () {
  "use strict";
  window.KF = window.KF || {};
  KF.Ekranlar = KF.Ekranlar || {};

  KF.Ekranlar.siralama = function (kutu) {
    kutu.innerHTML =
      '<div class="sir-baslik">' +
        '<h2 class="sir-h2">Liderlik Tablosu</h2>' +
        '<button type="button" class="btn-hayalet kucuk" id="sir-sil">Temizle</button>' +
      '</div>' +
      '<div id="sir-liste"></div>';

    const liste = kutu.querySelector("#sir-liste");
    const MADALYA = ["birinci", "ikinci", "ucuncu"];

    function ciz() {
      const skorlar = KF.Skorlar.getir().slice(0, 10);
      liste.innerHTML = "";
      if (!skorlar.length) {
        liste.innerHTML = '<div class="sir-bos">Henüz kayıtlı skor yok. Bir oyun oyna ve zirveye adını yaz.</div>';
        return;
      }
      skorlar.forEach(function (s, i) {
        const satir = document.createElement("div");
        satir.className = "sir-satir" + (i < 3 ? " " + MADALYA[i] : "");
        const tarih = new Date(s.tarih);
        const tarihYazi = tarih.toLocaleDateString("tr-TR");
        satir.innerHTML =
          '<span class="sir-sira">' + (i + 1) + '</span>' +
          '<span class="sir-ad">' + s.ad + '</span>' +
          '<span class="sir-detay">' + s.dogru + '/' + s.toplam + ' · ' + tarihYazi + '</span>' +
          '<strong class="sir-puan">' + s.puan + '</strong>';
        liste.appendChild(satir);
      });
    }

    kutu.querySelector("#sir-sil").addEventListener("click", function () {
      KF.Skorlar.sil();
      KF.Arac.toast("Skorlar temizlendi", "info");
      ciz();
    });
    ciz();

  };
})();
