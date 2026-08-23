(function () {
  "use strict";
  window.KF = window.KF || {};

  /* Basit test koşucusu — test/runner.html açıldığında sonuçları ekrana yazar. */
  const sonuclar = [];

  function test(ad, fn) {
    let gecti = false;
    try {
      gecti = !!fn();
    } catch (e) {
      gecti = false;
    }
    sonuclar.push({ ad: ad, gecti: gecti });
  }

  test("KF.Ar tanımlı", function () { return typeof KF.Ar === "object"; });
  test("sayı biçimleme tr-TR", function () { return KF.Ar.sayi(1234.5) === "1.234,5"; });
  test("para biçimleme", function () { return KF.Ar.para(10).indexOf("10") !== -1; });
  test("depo yaz ve oku", function () {
    KF.Depo.koy("test-anahtar", 42);
    return KF.Depo.al("test-anahtar", 0) === 42;
  });
  test("depo varsayılan değer", function () { return KF.Depo.al("olmayan-anahtar", "v") === "v"; });
  test("gorev modeli şekli", function () {
    const g = KF.Modeller.gorev("deneme");
    return g.ad === "deneme" && g.bitti === false && typeof g.id === "string";
  });
  test("not modeli şekli", function () {
    const n = KF.Modeller.not("selam");
    return n.metin === "selam" && n.arsivde === false;
  });
  test("tarih kısa biçim", function () { return KF.Tarih.kisa(new Date()).length > 0; });

  const kutu = document.getElementById("sonuclar");
  const ozet = document.getElementById("ozet");
  if (kutu) {
    sonuclar.forEach(function (s) {
      const div = document.createElement("div");
      div.className = "satir";
      const ad = document.createElement("span");
      ad.textContent = s.ad;
      const durum = document.createElement("strong");
      durum.className = s.gecti ? "gecti" : "kaldi";
      durum.textContent = s.gecti ? "GEÇTİ" : "KALDI";
      div.appendChild(ad);
      div.appendChild(durum);
      kutu.appendChild(div);
    });
  }
  if (ozet) {
    const gecen = sonuclar.filter(function (s) { return s.gecti; }).length;
    ozet.textContent = gecen + " / " + sonuclar.length + " test geçti.";
  }
})();
