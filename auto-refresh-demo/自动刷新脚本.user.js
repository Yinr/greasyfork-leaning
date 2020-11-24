// ==UserScript==
// @name         自动刷新脚本
// @namespace    https://yinr.cc/
// @version      0.1
// @description  自动刷新脚本制作教程示例：在登陆情况下，网页每隔 2 秒进行自动刷新
// @author       Yinr
// @icon         https://yinr.cc/favicon.ico
// @match        https://greasyfork-learning.yinr.cc/auto-refresh-demo/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (uid) {
        setInterval(function() {document.location.reload()}, 2000)
    }
})();