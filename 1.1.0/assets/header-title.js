document.addEventListener("DOMContentLoaded", function () {
  var el = document.querySelector(".md-header__topic:first-child .md-ellipsis");
  if (el) {
    el.innerHTML =
      '<strong style="font-size:1rem">MOBI-DIC</strong>' +
      '<span style="opacity:0.4;padding:0 0.35em">—</span>' +
      '<span style="font-weight:300;font-size:0.8rem;opacity:0.85">' +
        '<span style="color:#fff;font-weight:700;opacity:1">M</span>ulti-purp' +
        '<span style="color:#fff;font-weight:700;opacity:1">O</span>se displacement ' +
        '<span style="color:#fff;font-weight:700;opacity:1">B</span>ehavior ' +
        '<span style="color:#fff;font-weight:700;opacity:1">I</span>dentifier ' +
        '<span style="color:#fff;font-weight:700;opacity:1">D</span>igital ' +
        '<span style="color:#fff;font-weight:700;opacity:1">I</span>mage ' +
        '<span style="color:#fff;font-weight:700;opacity:1">C</span>orrelation Tool' +
      '</span>';
  }
});
