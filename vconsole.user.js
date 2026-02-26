// ==UserScript==
// @name        Force vConsole
// @description 모든 사이트에서 vConsole 로드
// @match       *://*/*
// @grant       none
// @run-at      document-end
// ==/UserScript==

(function() {
    if (window.VConsole) return;

    var s = document.createElement('script');
    s.src = 'https://unpkg.com/vconsole@latest/dist/vconsole.min.js';
    s.crossOrigin = 'anonymous'; 
    
    s.onload = function() {
        try {
            new VConsole();
            console.log('vConsole has been initialized.');
        } catch (e) {
            console.error('vConsole init error:', e);
        }
    };

    s.onerror = function() {
        console.error('vConsole script failed to load. (Maybe CSP issue)');
    };

    document.body.appendChild(s);
})();