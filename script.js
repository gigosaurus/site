// Optional enhancements only: the site is fully usable without this file.
(function () {
  'use strict';

  var root = document.documentElement;
  var button = document.getElementById('theme-toggle');
  var KEY = 'theme';
  var modes = ['system', 'light', 'dark'];

  function read() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function write(value) {
    try {
      if (value === 'system') localStorage.removeItem(KEY);
      else localStorage.setItem(KEY, value);
    } catch (e) { /* storage unavailable: choice just won't persist */ }
  }

  function apply(mode) {
    if (mode === 'system') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', mode);
    if (button) button.querySelector('.theme-toggle-label').textContent = 'Theme: ' + mode;
  }

  var current = read();
  if (modes.indexOf(current) === -1) current = 'system';
  apply(current);

  if (button) {
    button.hidden = false;
    button.addEventListener('click', function () {
      current = modes[(modes.indexOf(current) + 1) % modes.length];
      apply(current);
      write(current);
    });
  }

  // Keep the footer year current
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
