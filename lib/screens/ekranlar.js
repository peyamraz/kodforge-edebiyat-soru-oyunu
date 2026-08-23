(function () {
  "use strict";
  window.KF = window.KF || {};
  KF.Ekranlar = KF.Ekranlar || {};

  /* Basit yönlendirici — alt gezinmeden ekran değiştirir, son ekranı hatırlar. */
  let aktif = null;

  function navCiz() {
    const nav = document.getElementById("alt-nav");
    if (!nav) return;
    nav.innerHTML = "";
    KF.Yapi.ekranlar.forEach(function (e) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "nav-tus" + (e.id === aktif ? " aktif" : "");
      const ikon = document.createElement("span");
      ikon.className = "nav-ikon";
      ikon.innerHTML = KF.Ikonlar[e.ikon] || "";
      const yazi = document.createElement("span");
      yazi.className = "nav-yazi";
      yazi.textContent = e.ad;
      b.appendChild(ikon);
      b.appendChild(yazi);
      b.addEventListener("click", function () { KF.Yoneltici.git(e.id); });
      nav.appendChild(b);
    });
  }

  KF.Yoneltici = {
    git: function (id) {
      const fn = KF.Ekranlar[id];
      if (!fn) return;
      const kutu = document.getElementById("ekran");
      if (aktif !== null && kutu) {
        const olay = new CustomEvent("yon-ayril");
        kutu.dispatchEvent(olay);
      }
      aktif = id;
      KF.Depo.koy("son-ekran", id);
      if (!kutu) return;
      kutu.scrollTop = 0;
      kutu.innerHTML = "";
      fn(kutu);
      navCiz();
    },
    baslat: function () {
      /* Şehir listesi servisten gelir — servisler config'ten sonra yüklendiği için burada tamamlanır. */
      if (!KF.Yapi.sehirler) {
        if (KF.VakitServis) KF.Yapi.sehirler = KF.VakitServis.sehirler();
        else if (KF.HavaServis) KF.Yapi.sehirler = ["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Trabzon"];
      }
      const adEl = document.getElementById("uygulama-adi");
      if (adEl) adEl.textContent = KF.Yapi.ad;
      const son = KF.Depo.al("son-ekran", KF.Yapi.ekranlar[0].id);
      const varMi = KF.Yapi.ekranlar.some(function (e) { return e.id === son; });
      KF.Yoneltici.git(varMi ? son : KF.Yapi.ekranlar[0].id);
    }
  };
})();
