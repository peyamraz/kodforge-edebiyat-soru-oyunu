(function () {
  "use strict";
  window.KF = window.KF || {};
  KF.Ekranlar = KF.Ekranlar || {};

  KF.Ekranlar.oyun = function (kutu) {
    const oyun = KF.SoruOyunu.durumu();
    if (!oyun) { KF.Yoneltici.git("anasayfa"); return; }

    let zamanlayici = null;
    let gecisZamani = null;
    let kalanSure = 20;

    kutu.innerHTML =
      '<div class="oyun-hud">' +
        '<div class="hud-parca"><span class="hud-etiket">Soru</span><strong id="hud-sira">1/' + oyun.sorular.length + '</strong></div>' +
        '<div class="hud-parca"><span class="hud-etiket">Puan</span><strong id="hud-puan">0</strong></div>' +
        '<div class="hud-parca"><span class="hud-etiket">Seri</span><strong id="hud-seri">0</strong></div>' +
      '</div>' +
      '<div class="ilerleme-kutu"><i id="ilerleme-cubuk"></i></div>' +
      '<div class="sure-kutu"><span id="sure-yazi">20 sn</span></div>' +
      '<div class="soru-kart">' +
        '<div class="soru-kategori" id="soru-kategori"></div>' +
        '<p class="soru-metin" id="soru-metin"></p>' +
        '<div class="secenek-liste" id="secenek-liste"></div>' +
        '<div class="yanit-geri" id="yanit-geri"></div>' +
      '</div>' +
      '<button type="button" class="btn-hayalet oyun-cikis" id="oyun-cikis">Oyundan çık</button>';

    const siraEl = kutu.querySelector("#hud-sira");
    const puanEl = kutu.querySelector("#hud-puan");
    const seriEl = kutu.querySelector("#hud-seri");
    const cubukEl = kutu.querySelector("#ilerleme-cubuk");
    const sureEl = kutu.querySelector("#sure-yazi");
    const katEl = kutu.querySelector("#soru-kategori");
    const metinEl = kutu.querySelector("#soru-metin");
    const listeEl = kutu.querySelector("#secenek-liste");
    const geriEl = kutu.querySelector("#yanit-geri");

    kutu.querySelector("#oyun-cikis").addEventListener("click", function () {
      KF.Yoneltici.git("anasayfa");
    });

    function durdur() {
      if (zamanlayici !== null) { clearInterval(zamanlayici); zamanlayici = null; }
      if (gecisZamani !== null) { clearTimeout(gecisZamani); gecisZamani = null; }
    }
    kutu.addEventListener("yon-ayril", durdur);

    function soruYukle() {
      const s = KF.SoruOyunu.siradaki();
      if (!s) { KF.Yoneltici.git("sonuc"); return; }
      siraEl.textContent = (oyun.sira + 1) + "/" + oyun.sorular.length;
      puanEl.textContent = oyun.puan;
      seriEl.textContent = oyun.seri;
      cubukEl.style.width = Math.round(KF.SoruOyunu.ilerleme() * 100) + "%";
      katEl.textContent = s.kategori;
      metinEl.textContent = s.soru;
      geriEl.textContent = "";
      listeEl.innerHTML = "";
      s.secenekler.forEach(function (sec, i) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "secenek";
        b.innerHTML = '<span class="secenek-harf">' + "ABCD".charAt(i) + '</span><span>' + sec + '</span>';
        b.addEventListener("click", function () { yanitVer(i); });
        listeEl.appendChild(b);
      });
      sureBaslat();
    }

    function sureBaslat() {
      durdur();
      kalanSure = 20;
      sureEl.textContent = kalanSure + " sn";
      zamanlayici = setInterval(function () {
        kalanSure -= 1;
        sureEl.textContent = kalanSure + " sn";
        if (kalanSure <= 5) sureEl.classList.add("az-kaldi"); else sureEl.classList.remove("az-kaldi");
        if (kalanSure <= 0) {
          durdur();
          yanitVer(-1);
        }
      }, 1000);
    }

    function yanitVer(i) {
      durdur();
      const sonuc = KF.SoruOyunu.yanitla(i);
      if (!sonuc) return;
      const tuslar = listeEl.querySelectorAll(".secenek");
      tuslar.forEach(function (b, idx) {
        b.disabled = true;
        if (idx === sonuc.dogruSecenek) b.classList.add("dogru");
      });
      if (i !== -1 && i !== sonuc.dogruSecenek) tuslar[i].classList.add("yanlis");
      seriEl.textContent = oyun.seri;
      puanEl.textContent = oyun.puan;
      geriEl.innerHTML = sonuc.dogruMu
        ? '<span class="geri-dogru">Doğru! +' + sonuc.kazanilan + ' puan</span>'
        : (i === -1 ? '<span class="geri-yanlis">Süre doldu!</span>' : '<span class="geri-yanlis">Yanlış!</span>');
      gecisZamani = setTimeout(function () {
        gecisZamani = null;
        if (sonuc.bitti) KF.Yoneltici.git("sonuc"); else soruYukle();
      }, 1100);
    }

    soruYukle();

  };
})();
