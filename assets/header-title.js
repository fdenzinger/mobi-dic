document.addEventListener("DOMContentLoaded", function () {
  var el = document.querySelector(".md-header__topic:first-child .md-ellipsis");
  if (el) {
    el.innerHTML =
      '<span class="header-name">MOBI-DIC</span>' +
      '<span class="header-sep">—</span>' +
      '<span class="header-expansion">' +
        '<span class="accent">M</span>ulti-purp' +
        '<span class="accent">O</span>se displacement ' +
        '<span class="accent">B</span>ehavior ' +
        '<span class="accent">I</span>dentifier ' +
        '<span class="accent">D</span>igital ' +
        '<span class="accent">I</span>mage ' +
        '<span class="accent">C</span>orrelation Tool' +
      '</span>';
  }
});
