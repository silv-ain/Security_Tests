// ==UserScript==
// @name        DevTools - Force Eruda
// @description 모든 사이트에서 Eruda 로드
// @match       *://*/*
// @grant       none
// @run-at      document-end
// ==/UserScript==

(function() {
    if (window.eruda) {
        eruda.init();
        return;
    }

    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/eruda';
    s.crossOrigin = 'anonymous'; 
    
    s.onload = function() {
        try {
            eruda.init();
            console.log('Eruda has been initialized.');
        } catch (e) {
            console.error('Eruda init error:', e);
        }
    };

    s.onerror = function() {
        console.error('Eruda script failed to load. (Maybe CSP issue)');
    };

    document.body.appendChild(s);
})();