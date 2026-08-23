(function () {
  "use strict";
  window.KF = window.KF || {};
  KF.Ekranlar = KF.Ekranlar || {};

  KF.Ekranlar.ayarlar = function (kutu) {
    const sehirler = KF.Yapi.sehirler;
    let sehirBolumu = "";
    if (sehirler && sehirler.length > 0) {
      const secili = KF.Depo.al("varsayilan-sehir", sehirler[0]);
      sehirBolumu =
        '<div class="ayar-satir">' +
          '<div><strong>Varsayılan şehir</strong><span>Vakit ve hava ekranlarında kullanılır.</span></div>' +
          '<select id="ay-sehir">' +
            sehirler.map(function (s) {
              return '<option value="' + s + '"' + (s === secili ? ' selected' : '') + '>' + s + '</option>';
            }).join("") +
          '</select>' +
        '</div>';
    }

    kutu.innerHTML =
      '<h2 class="ayar-baslik">Ayarlar</h2>' +
      '<div class="ayar-liste">' +
        '<div class="ayar-satir">' +
          '<div><strong>Karanlık tema</strong><span>Göz yormayan gece görünümü.</span></div>' +
          '<button type="button" id="ay-tema" class="btn-hayalet">' + (KF.Tema.koyuMu() ? "Aydınlığa geç" : "Karanlığa geç") + '</button>' +
        '</div>' +
        sehirBolumu +
        '<div class="ayar-satir">' +
          '<div><strong>Verileri sıfırla</strong><span>Bu tarayıcıda saklanan her şeyi siler.</span></div>' +
          '<button type="button" id="ay-sifirla" class="btn-hayalet tehlike">Sıfırla</button>' +
        '</div>' +
      '</div>' +
      '<p class="ayar-alt">Edebiyat Soru Oyunu · sürüm ' + KF.Yapi.surum + ' · ' + KF.Yapi.ureten + ' ile üretildi</p>';

    kutu.querySelector("#ay-tema").addEventListener("click", function () {
      KF.Tema.degistir();
      this.textContent = KF.Tema.koyuMu() ? "Aydınlığa geç" : "Karanlığa geç";
      KF.Arac.toast("Tema değiştirildi", "bilgi");
    });

    const sehirSel = kutu.querySelector("#ay-sehir");
    if (sehirSel) {
      sehirSel.addEventListener("change", function () {
        KF.Depo.koy("varsayilan-sehir", sehirSel.value);
        KF.Arac.toast("Varsayılan şehir: " + sehirSel.value, "basari");
      });
    }

    kutu.querySelector("#ay-sifirla").addEventListener("click", function () {
      KF.Arac.modal(
        "Veriler sıfırlansın mı?",
        "Bu tarayıcıda saklanan tüm uygulama verileri kalıcı olarak silinecek. Bu işlem geri alınamaz.",
        function () {
          KF.Depo.temizle();
          KF.Tema.uygula();
          KF.Arac.toast("Tüm veriler silindi", "uyari");
        }
      );
    });
  };
})();
