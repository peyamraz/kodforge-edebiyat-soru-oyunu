(function () {
  "use strict";
  window.KF = window.KF || {};

  /* localStorage üzerinde JSON katmanı — okuma/yazma asla çökmez. */
  const ON_EK = "kf2-";

  KF.Depo = {
    al: function (anahtar, varsayilan) {
      try {
        const ham = localStorage.getItem(ON_EK + anahtar);
        return ham === null ? varsayilan : JSON.parse(ham);
      } catch (e) {
        return varsayilan;
      }
    },
    koy: function (anahtar, deger) {
      try {
        localStorage.setItem(ON_EK + anahtar, JSON.stringify(deger));
      } catch (e) {
        /* depolama dolu ya da kapalı — sessizce geç */
      }
    },
    sil: function (anahtar) {
      try {
        localStorage.removeItem(ON_EK + anahtar);
      } catch (e) { /* yoksay */ }
    },
    temizle: function () {
      try {
        Object.keys(localStorage)
          .filter(function (k) { return k.indexOf(ON_EK) === 0; })
          .forEach(function (k) { localStorage.removeItem(k); });
      } catch (e) { /* yoksay */ }
    }
  };
})();
