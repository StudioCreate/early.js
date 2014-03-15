# early.js — to be included first

> The JS bundle to be included first
> <http://englishextra.github.io/libs/early.js/>

## Purpose

This bunch of third‒party JS libraries is meant to be included first in
your HTML markup and helps to:

-   detect user device,

-   detect browser capabilities,

-   conditionally load other JS scripts,

-   add user device and browser info to your stats.

## Contents

The following third-party libraries are included in the bundle:

-   [Modernizr][] — a JavaScript library that detects HTML5 and CSS3
    features in the user’s browser (cssanimations, generatedcontent,
    cssgradients, csstransforms, csstransforms3d, csstransitions,
    hashchange, audio, video, svg, touch, shiv, mq, cssclasses,
    prefixed, teststyles, testprop, testallprops, prefixes, domprefixes,
    load)

-   [Detectizr][] — a Modernizr extension to detect device, device
    model, screen size, operating system, and browser details

-   [yepnope.js][] — an Asynchronous Conditional Resource Loader

-   [addEvent()][] — a cross-browser addEvent solution

-   [domready][] — lets you know when the DOM is ready

-   [Detect Mobile Browsers][] — open source mobile phone detection
    (returns true or false instead of redirection)

The bundle initialises the following variables:

    var earlyDeviceType String  ["tv", "tablet", "mobile", "desktop"]
    var earlyDeviceModel    String  ["smartTv", "gameConsole", "ipad", "android", "kindle", "blackberry", "crawler"]
    var earlyDeviceOrientation  String  ["portrait", "landscape"]
    var earlyBrowser    String  ["chrome", "firefox", "ie", "iron", "konqueror", "opera", "safari"]
    var earlyBrowserVersion String
    var earlyBrowserEngine  String  ["gecko", "presto", "trident", "webkit"]
    var earlyOs String  ["ios", "android", "blackberry", "windows", "mac", "webtv", "linux", "sun", "irix", "freebsd", "bsd"]
    var earlyOsVersion  String  ["ios", "8", "8.1", "8", "7", "vista", "xp", "2k", "nt", "98", "95", "68k", "ppc", "os x"]
    var earlyFnGetYyyymmdd  String  "YYYY-MM-DD"
    var earlyIsMobileBrowser    Integer [1:!1]
    var earlyDocumentReferrer   String
    var earlyWindowLocation String
    var earlySelfLocationHost   String
    var earlyDevicePixelRatio   Number
    var earlyDeviceWidth    Number
    var earlyIsRetina   Integer [1:""]
    var earlyHasCssgradients    Integer [1:""]
    var earlyHasTouch   Integer [1:""]
    var earlyDeviceHeight   Number
    var earlyDocumentTitle  String

[See the full code on GitHub][]

## Usage

This should be included before loading jQuery, its pluguins, or any
other JS library.

    <script src="js/early.min.js"></script>
    <script>
    var deferredJS = function () {
        yepnope.injectJs("//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js", function () {
            ("undefined" !== typeof earlyIsMobileBrowser && earlyIsMobileBrowser) || yepnope.injectJs("http://pastebin.com/raw.php?i=dhjs0YeJ", function () {
                (function (b, a) {
                    b && a && a.parallax()
                })($.fn.parallax || "", $("#scene1") || "");
            }, {
                charset : "utf-8"
            }, 5E3);
        }, {
            charset : "utf-8"
        }, 5E3);
    };
    window.addEventListener ? window.addEventListener("load", deferredJS, !1) : window.attachEvent ? window.attachEvent("onload", deferredJS) : window.onload = deferredJS;
    </script>

## Copyright

Copyright (c) 2006-2014 Serguei Shimansky, <englishextra@yandex.ru>

  [Modernizr]: https://github.com/Modernizr/Modernizr
  [Detectizr]: https://github.com/barisaydinoglu/Detectizr
  [yepnope.js]: https://github.com/SlexAxton/yepnope.js
  [addEvent()]: http://dean.edwards.name/weblog/2005/10/add-event/
  [domready]: https://github.com/ded/domready
  [Detect Mobile Browsers]: http://detectmobilebrowser.com
  [See the full code on GitHub]: https://github.com/englishextra/early.js/blob/master/js/early.js
