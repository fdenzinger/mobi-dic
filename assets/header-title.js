document.addEventListener("DOMContentLoaded", function () {
  var el = document.querySelector(".md-header__topic:first-child .md-ellipsis");
  if (el) {
    el.innerHTML =
      '<strong style="font-size:1rem">MOBI-DIC</strong>' +
      '<span style="opacity:0.4;padding:0 0.35em">—</span>' +
      '<span style="font-weight:300;font-size:0.8rem;opacity:0.85">' +
        '<span style="color:#000;font-weight:600">M</span>ulti-purp' +
        '<span style="color:#000;font-weight:600">O</span>se displacement ' +
        '<span style="color:#000;font-weight:600">B</span>ehavior ' +
        '<span style="color:#000;font-weight:600">I</span>dentifier ' +
        '<span style="color:#000;font-weight:600">D</span>igital ' +
        '<span style="color:#000;font-weight:600">I</span>mage ' +
        '<span style="color:#000;font-weight:600">C</span>orrelation Tool' +
      '</span>';
  }
});
