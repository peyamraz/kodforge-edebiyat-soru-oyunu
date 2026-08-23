(function () {
  "use strict";
  window.KF = window.KF || {};
  KF.Ekranlar = KF.Ekranlar || {};

  KF.Ekranlar.sonuc = function (kutu) {
    const oyun = KF.SoruOyunu.durumu();
    if (!oyun) { KF.Yoneltici.git("anasayfa"); return; }

    const toplam = oyun.sorular.length;
    const yuzde = toplam ? Math.round((oyun.dogruSayi / toplam) * 100) : 0;
    const sure = KF.SoruOyunu.sure();

    kutu.innerHTML =
      '<div class="sonuc-kart">' +
        '<div class="sonuc-rozet">' + (yuzde >= 80 ? "Şahane!" : yuzde >= 50 ? "İyi iş!" : "Tekrar dene!") + '</div>' +
        '<div class="sonuc-puan">' + oyun.puan + '</div>' +
        '<div class="sonuc-puan-etiket">Toplam Puan</div>' +
        '<div class="sonuc-uc">' +
          '<div><strong>' + oyun.dogruSayi + '/' + toplam + '</strong><span>Doğru</span></div>' +
          '<div><strong>%' + yuzde + '</strong><span>İsabet</span></div>' +
          '<div><strong>' + oyun.enIyiSeri + '</strong><span>En İyi Seri</span></div>' +
        '</div>' +
        '<div class="sonuc-sure">Süre: ' + sure + ' saniye</div>' +
      '</div>' +
      '<div class="skor-form">' +
        '<label class="secim-etiket" for="skor-ad">Adını yaz, sıralamaya gir</label>' +
        '<input id="skor-ad" type="text" maxlength="14" placeholder="Adın" value="' + (KF.Depo.al("son-oyuncu-adi", "") || "") + '">' +
        '<button type="button" class="btn tam" id="skor-kaydet">Skoru Kaydet</button>' +
      '</div>' +
      '<div class="sonuc-dugmeler">' +
        '<button type="button" class="btn-hayalet" id="sonuc-tekrar">Tekrar Oyna</button>' +
        '<button type="button" class="btn-hayalet" id="sonuc-siralama">Sıralamayı Gör</button>' +
      '</div>';

    kutu.querySelector("#skor-kaydet").addEventListener("click", function () {
      const adEl = kutu.querySelector("#skor-ad");
      const ad = adEl.value.trim() || "İsimsiz";
      KF.Depo.koy("son-oyuncu-adi", ad);
      KF.Skorlar.ekle({ ad: ad, puan: oyun.puan, dogru: oyun.dogruSayi, toplam: toplam, seri: oyun.enIyiSeri, tarih: Date.now() });
      KF.Arac.toast("Skor sıralamaya eklendi", "ok");
      KF.Yoneltici.git("siralama");
    });
    kutu.querySelector("#sonuc-tekrar").addEventListener("click", function () { KF.Yoneltici.git("anasayfa"); });
    kutu.querySelector("#sonuc-siralama").addEventListener("click", function () { KF.Yoneltici.git("siralama"); });

  };
})();
