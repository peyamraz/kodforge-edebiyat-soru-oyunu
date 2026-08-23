(function () {
  "use strict";
  window.KF = window.KF || {};
  KF.Ekranlar = KF.Ekranlar || {};

  KF.Ekranlar.anasayfa = function (kutu) {
    const baslik = document.createElement("div");
    baslik.className = "oyun-baslik";
    baslik.innerHTML = '<h1 class="oyun-h1">Edebiyat<br>Soru Oyunu</h1>' +
      '<p class="oyun-alt">Türk edebiyatından ' + KF.SoruOyunu.havuzBoyutu() + ' soruluk havuz. ' +
      '4 şık, seri bonusu ve zamanlayıcı ile yarış, sıralamada zirveye çık.</p>';
    kutu.appendChild(baslik);

    const istatistikler = document.createElement("div");
    istatistikler.className = "istat-uc";
    istatistikler.innerHTML =
      '<div class="istat-kart"><strong>' + KF.SoruOyunu.havuzBoyutu() + '</strong><span>Soru Havuzu</span></div>' +
      '<div class="istat-kart"><strong>' + KF.Skorlar.enIyi() + '</strong><span>En İyi Skor</span></div>' +
      '<div class="istat-kart"><strong>' + KF.Skorlar.oyunSayisi() + '</strong><span>Oynanan</span></div>';
    kutu.appendChild(istatistikler);

    let seciliKategori = "Tümü";
    let seciliAdet = 10;

    const katBolum = document.createElement("div");
    katBolum.className = "secim-bolum";
    katBolum.innerHTML = '<div class="secim-etiket">Kategori</div>';
    const katSatir = document.createElement("div");
    katSatir.className = "cip-satir";
    const kategoriler = KF.SoruOyunu.kategoriler();
    kategoriler.forEach(function (k) {
      const c = document.createElement("button");
      c.type = "button";
      c.className = "cip" + (k === seciliKategori ? " secili" : "");
      c.textContent = k;
      c.addEventListener("click", function () {
        seciliKategori = k;
        katSatir.querySelectorAll(".cip").forEach(function (x) { x.classList.remove("secili"); });
        c.classList.add("secili");
      });
      katSatir.appendChild(c);
    });
    katBolum.appendChild(katSatir);
    kutu.appendChild(katBolum);

    const adetBolum = document.createElement("div");
    adetBolum.className = "secim-bolum";
    adetBolum.innerHTML = '<div class="secim-etiket">Soru Sayısı</div>';
    const adetSatir = document.createElement("div");
    adetSatir.className = "cip-satir";
    [10, 15, 20].forEach(function (n) {
      const c = document.createElement("button");
      c.type = "button";
      c.className = "cip" + (n === seciliAdet ? " secili" : "");
      c.textContent = n + " soru";
      c.addEventListener("click", function () {
        seciliAdet = n;
        adetSatir.querySelectorAll(".cip").forEach(function (x) { x.classList.remove("secili"); });
        c.classList.add("secili");
      });
      adetSatir.appendChild(c);
    });
    adetBolum.appendChild(adetSatir);
    kutu.appendChild(adetBolum);

    const basla = document.createElement("button");
    basla.type = "button";
    basla.className = "btn buyuk-basla";
    basla.textContent = "Oyuna Başla";
    basla.addEventListener("click", function () {
      KF.SoruOyunu.baslat(seciliAdet, seciliKategori);
      KF.Skorlar.oyunArtir();
      KF.Yoneltici.git("oyun");
    });
    kutu.appendChild(basla);

    const bilgi = document.createElement("div");
    bilgi.className = "puan-bilgi";
    bilgi.innerHTML = '<strong>Puanlama:</strong> Doğru cevap 100 puan. Üst üste her doğru +10 seri bonusu (en fazla +50).';
    kutu.appendChild(bilgi);

  };
})();
