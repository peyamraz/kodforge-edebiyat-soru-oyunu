(function () {
  "use strict";
  window.KF = window.KF || {};

  const AY = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z"></path></svg>';
  const GUNES = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg>';

  KF.Tema = {
    koyuMu: function () {
      return KF.Depo.al("tema-koyu", document.body.classList.contains("koyu"));
    },
    uygula: function () {
      const koyu = KF.Tema.koyuMu();
      document.body.classList.toggle("koyu", koyu);
      const d = document.getElementById("tema-dugmesi");
      if (d) d.innerHTML = koyu ? GUNES : AY;
    },
    degistir: function () {
      KF.Depo.koy("tema-koyu", !KF.Tema.koyuMu());
      KF.Tema.uygula();
    },
    bagla: function () {
      const d = document.getElementById("tema-dugmesi");
      if (d) d.addEventListener("click", KF.Tema.degistir);
    }
  };
})();
