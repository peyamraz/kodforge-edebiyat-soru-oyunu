(function () {
  "use strict";
  window.KF = window.KF || {};

  const svg = function (ic) {
    return '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + ic + "</svg>";
  };

  /* Ortak ikon seti — tüm ekranlar buradan çizer. */
  KF.Ikonlar = {
    ev: svg('<path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1Z"></path>'),
    liste: svg('<path d="M9 6h11M9 12h11M9 18h11"></path><path d="M4 6h.01M4 12h.01M4 18h.01"></path>'),
    grafik: svg('<path d="M4 20V10M10 20V4M16 20v-8M21 20H3"></path>'),
    hesap: svg('<rect x="5" y="3" width="14" height="18" rx="2"></rect><path d="M8.5 7.5h7M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 15.5h.01M12 15.5h.01M15.5 15.5h.01"></path>'),
    bulut: svg('<path d="M7 18a4.5 4.5 0 0 1-.5-9A6 6 0 0 1 18 8.5 4 4 0 0 1 17.5 18Z"></path>'),
    saat: svg('<circle cx="12" cy="12" r="8.5"></circle><path d="M12 7v5l3.5 2"></path>'),
    soru: svg('<circle cx="12" cy="12" r="8.5"></circle><path d="M9.5 9a2.5 2.5 0 1 1 3.8 2.1c-.8.5-1.3 1-1.3 1.9"></path><path d="M12 16.5h.01"></path>'),
    kupa: svg('<path d="M8 4h8v6a4 4 0 0 1-8 0Z"></path><path d="M8 5H5a3 3 0 0 0 3 4.5M16 5h3a3 3 0 0 1-3 4.5M12 14v3M8 21h8M10 17h4v4h-4z"></path>'),
    not: svg('<path d="M5 4h14v13l-4 3H5Z"></path><path d="M15 20v-3h4M8.5 9h7M8.5 12.5h5"></path>'),
    arsiv: svg('<rect x="4" y="4" width="16" height="5" rx="1"></rect><path d="M6 9v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9M10 13h4"></path>'),
    resim: svg('<rect x="4" y="5" width="16" height="14" rx="2"></rect><circle cx="9" cy="10" r="1.5"></circle><path d="m4 17 4.5-4.5L13 17l3-3 4 4"></path>'),
    yildiz: svg('<path d="m12 4 2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 16.4 7.2 18.9l.9-5.4-3.9-3.8 5.4-.8Z"></path>'),
    kullanici: svg('<circle cx="12" cy="8" r="3.5"></circle><path d="M5 20a7 7 0 0 1 14 0"></path>'),
    kalem: svg('<path d="m4 20 4.5-1L20 7.5 16.5 4 5 15.5Z"></path><path d="M14.5 6 18 9.5"></path>'),
    kimlik: svg('<rect x="3" y="5" width="18" height="14" rx="2"></rect><circle cx="8.5" cy="11" r="2"></circle><path d="M13 9.5h5M13 13h5M6 16c.5-1.2 1.4-1.8 2.5-1.8S10.5 14.8 11 16"></path>'),
    cuzdan: svg('<path d="M4 7a2 2 0 0 1 2-2h11a1 1 0 0 1 0 2H6"></path><rect x="4" y="7" width="16" height="12" rx="2"></rect><path d="M16 13h.01"></path>'),
    pusula: svg('<circle cx="12" cy="12" r="8.5"></circle><path d="m15.5 8.5-2 5-5 2 2-5Z"></path>'),
    boncuk: svg('<circle cx="12" cy="5" r="1.6"></circle><circle cx="17.5" cy="8" r="1.6"></circle><circle cx="17.5" cy="14.5" r="1.6"></circle><circle cx="12" cy="19" r="1.6"></circle><circle cx="6.5" cy="14.5" r="1.6"></circle><circle cx="6.5" cy="8" r="1.6"></circle>'),
    kitap: svg('<path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H19v17.5H7.5A2.5 2.5 0 0 0 5 22Z"></path><path d="M5 19.5A2.5 2.5 0 0 1 7.5 17H19"></path>'),
    ayar: svg('<circle cx="12" cy="12" r="3"></circle><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3.9a7 7 0 0 0-2.1-1.2L14 3h-4l-.5 2.6a7 7 0 0 0-2.1 1.2l-2.3-.9-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.4 2.3-.9a7 7 0 0 0 2.1 1.2L10 21h4l.5-2.6a7 7 0 0 0 2.1-1.2l2.3.9 2-3.4-2-1.5c.1-.4.1-.8.1-1.2Z"></path>'),
    takvim: svg('<rect x="4" y="5" width="16" height="16" rx="2"></rect><path d="M4 10h16M8 3v4M16 3v4"></path>'),
    cop: svg('<path d="M4 7h16M9 7V5h6v2M6.5 7l1 13h9l1-13"></path><path d="M10 11v5M14 11v5"></path>'),
    isik: svg('<path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12Z"></path>'),
    kalkan: svg('<path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6Z"></path><path d="m9 11.5 2 2 4-4.5"></path>'),
    klavye: svg('<rect x="3" y="6" width="18" height="12" rx="2"></rect><path d="M7 10h.01M11 10h.01M15 10h.01M7 14h10"></path>'),
    ay: svg('<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z"></path>'),
    posta: svg('<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path>')
  };

  /* Toast bildirimleri — kısa, altta, kaybolur. */
  let toastZaman = null;
  KF.Arac = {
    toast: function (mesaj, tur) {
      const kutu = document.getElementById("bilesen-kutusu");
      if (!kutu) return;
      let t = kutu.querySelector(".toast");
      if (!t) {
        t = document.createElement("div");
        t.className = "toast";
        kutu.appendChild(t);
      }
      t.textContent = mesaj;
      t.setAttribute("data-tur", tur || "bilgi");
      t.classList.add("goster");
      if (toastZaman !== null) clearTimeout(toastZaman);
      toastZaman = setTimeout(function () { t.classList.remove("goster"); }, 2400);
    },
    modal: function (baslik, aciklama, onayla) {
      const kutu = document.getElementById("bilesen-kutusu");
      if (!kutu) return;
      const arka = document.createElement("div");
      arka.className = "modal-arka";
      const kart = document.createElement("div");
      kart.className = "modal-kart";
      const h = document.createElement("h3");
      h.textContent = baslik;
      const p = document.createElement("p");
      p.textContent = aciklama;
      const tuslar = document.createElement("div");
      tuslar.className = "modal-tuslar";
      const vazgec = document.createElement("button");
      vazgec.type = "button";
      vazgec.className = "btn-hayalet";
      vazgec.textContent = "Vazgeç";
      const onay = document.createElement("button");
      onay.type = "button";
      onay.className = "btn";
      onay.textContent = "Onayla";
      function kapat() { arka.remove(); }
      vazgec.addEventListener("click", kapat);
      onay.addEventListener("click", function () { kapat(); onayla(); });
      arka.addEventListener("click", function (e) { if (e.target === arka) kapat(); });
      tuslar.appendChild(vazgec);
      tuslar.appendChild(onay);
      kart.appendChild(h);
      kart.appendChild(p);
      kart.appendChild(tuslar);
      arka.appendChild(kart);
      kutu.appendChild(arka);
    }
  };
})();
