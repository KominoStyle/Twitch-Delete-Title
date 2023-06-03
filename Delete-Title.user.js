// ==UserScript==
// @name         Remove HTML Title Tag on Twitch Dashboard
// @author       !♥Koͨmͧiͭnͥoͤ Style♥!
// @version      1.0.0
// @description  Removes the HTML title tag from the Twitch dashboard and logs a message to the console
// @match        https://dashboard.twitch.tv/*
// @grant        none
// @license      MIT
// @updateURL    https://github.com/KominoStyle/Twitch-Delete-Title/raw/main/Delete-Title.user.js
// @downloadURL  https://github.com/KominoStyle/Twitch-Delete-Title/raw/main/Delete-Title.user.js
// ==/UserScript==

(function () {
    'use strict'

    function removeTitleTag() {
        var titleTag = document.querySelector('head title')
        if (titleTag) {
            titleTag.remove()
            console.log('%cTitle deleted', 'color: #cc1141')
        }
    }

    window.onload = function () {
        removeTitleTag()

        const observer = new MutationObserver(function (mutationsList) {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList' && mutation.target.nodeName === 'HEAD') {
                    removeTitleTag()
                    break
                }
            }
        })

        observer.observe(document.documentElement, { childList: true, subtree: true })
    }
})()
