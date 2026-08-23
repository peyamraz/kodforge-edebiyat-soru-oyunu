(function () {
  "use strict";

  /* Uygulamanın ana giriş noktası — temayı kurar, splash gösterir, yönlendiriciyi başlatır. */
  function splashSonrasi() {
    const kutu = document.getElementById("bilesen-kutusu");
    const s = kutu ? kutu.querySelector(".splash") : null;
    if (s) s.classList.add("gider");
    setTimeout(function () {
      if (kutu) kutu.innerHTML = "";
      KF.Yoneltici.baslat();
    }, 360);
  }

  function baslat() {
    KF.Tema.uygula();
    KF.Tema.bagla();
    const kutu = document.getElementById("bilesen-kutusu");
    if (kutu) {
      kutu.innerHTML =
        '<div class="splash">' +
          '<div class="splash-logo">' + (KF.Ikonlar[KF.Yapi.ekranlar[0].ikon] || "") + '</div>' +
          '<div class="splash-ad">' + KF.Yapi.ad + '</div>' +
          '<div class="splash-cubuk"><i></i></div>' +
        '</div>';
      setTimeout(splashSonrasi, 800);
    } else {
      KF.Yoneltici.baslat();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", baslat);
  } else {
    baslat();
  }
})();
