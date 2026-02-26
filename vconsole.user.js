// ==UserScript==
// @name        Force vConsole
// @match       https://tax.*.com/*
// @grant       none
// @run-at      document-end
// ==/UserScript==

(function() {
    var s = document.createElement('script');
    s.src = 'https://unpkg.com/vconsole@latest/dist/vconsole.min.js';
    document.body.appendChild(s);
    s.onload = function() { new VConsole(); };
})();