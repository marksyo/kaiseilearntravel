(function () {
    window.ShareThisEvent = {};
    ShareThisEvent.listen = function (a, b) {
        if (document.addEventListener) {
            document.addEventListener(a, b, false)
        } else {
            document.documentElement.attachEvent("onpropertychange", function (d) {
                if (d.propertyName == a) {
                    b()
                }
            })
        }
    };
    ShareThisEvent.trigger = function (b) {
        if (document.createEvent) {
            var a = document.createEvent("Event");
            a.initEvent(b, true, true);
            document.dispatchEvent(a)
        } else {
            document.documentElement[b]++
        }
    }
})();
(function (a) {
    var d = document.createElement(a);
    var f = "async-buttons";
    if (document.getElementById(f)) {
        return
    }
    d.type = "text/javascript";
    d.id = f;
    d.src = "https://ws.sharethis.com/button/async-buttons.js";
    var b = document.getElementsByTagName("script")[0];
    b.parentNode.insertBefore(d, b)
})("script");
var stlib = stlib || {
    functions: [],
    functionCount: 0,
    util: {
        prop: function (b, a) {
            if (a) {
                return a[b]
            }
            return function (d) {
                return d[b]
            }
        }
    },
    dynamicOn: true,
    setPublisher: function (a) {
        stlib.publisher = a
    },
    setProduct: function (a) {
        stlib.product = a
    },
    parseQuery: function (e) {
        var f = new Object();
        if (!e) {
            return f
        }
        var a = e.split(/[;&]/);
        for (var d = 0; d < a.length; d++) {
            var h = a[d].split("=");
            if (!h || h.length != 2) {
                continue
            }
            var b = unescape(h[0]);
            var g = unescape(h[1]);
            g = g.replace(/\+/g, " ");
            f[b] = g
        }
        return f
    },
    getQueryParams: function () {
        var a = document.getElementById("st_insights_js");
        if (a && a.src) {
            var d = a.src.replace(/^[^\?]+\??/, "");
            var b = stlib.parseQuery(d);
            stlib.setPublisher(b.publisher);
            stlib.setProduct(b.product)
        }
    }
};
stlib.global = {
    hash: stlib.util.prop("hash", document.location).substr(1)
};
stlib.getQueryParams();
stlib.debugOn = false;
stlib.debug = {
    count: 0,
    messages: [],
    debug: function (b, a) {
        if (a && (typeof console) != "undefined") {
            console.log(b)
        }
        stlib.debug.messages.push(b)
    },
    show: function (a) {
        for (message in stlib.debug.messages) {
            if ((typeof console) != "undefined") {
                if (a) {
                    /ERROR/.test(stlib.debug.messages[message]) ? console.log(stlib.debug.messages[message]) : null
                } else {
                    console.log(stlib.debug.messages[message])
                }
            }
        }
    },
    showError: function () {
        stlib.debug.show(true)
    }
};
var _$d = function (a) {
    stlib.debug.debug(a, stlib.debugOn)
};
var _$d0 = function () {
    _$d(" ")
};
var _$d_ = function () {
    _$d("___________________________________________")
};
var _$d1 = function (a) {
    _$d(_$dt() + "| " + a)
};
var _$d2 = function (a) {
    _$d(_$dt() + "|  * " + a)
};
var _$de = function (a) {
    _$d(_$dt() + "ERROR: " + a)
};
var _$dt = function () {
    var b = new Date();
    var e = b.getHours();
    var a = b.getMinutes();
    var d = b.getSeconds();
    return e + ":" + a + ":" + d + " > "
};
stlib.allServices = {
    adfty: {
        title: "Adfty"
    },
    allvoices: {
        title: "Allvoices"
    },
    amazon_wishlist: {
        title: "Amazon Wishlist"
    },
    arto: {
        title: "Arto"
    },
    att: {
        title: "AT&T"
    },
    baidu: {
        title: "Baidu"
    },
    blinklist: {
        title: "Blinklist"
    },
    blip: {
        title: "Blip"
    },
    blogmarks: {
        title: "Blogmarks"
    },
    blogger: {
        title: "Blogger",
        type: "post"
    },
    buddymarks: {
        title: "BuddyMarks"
    },
    buffer: {
        title: "Buffer"
    },
    care2: {
        title: "Care2"
    },
    chiq: {
        title: "chiq"
    },
    citeulike: {
        title: "CiteULike"
    },
    chiq: {
        title: "chiq"
    },
    corkboard: {
        title: "Corkboard"
    },
    dealsplus: {
        title: "Dealspl.us"
    },
    delicious: {
        title: "Delicious"
    },
    digg: {
        title: "Digg"
    },
    diigo: {
        title: "Diigo"
    },
    dzone: {
        title: "DZone"
    },
    edmodo: {
        title: "Edmodo"
    },
    email: {
        title: "Email"
    },
    embed_ly: {
        title: "Embed.ly"
    },
    evernote: {
        title: "Evernote"
    },
    facebook: {
        title: "Facebook"
    },
    fark: {
        title: "Fark"
    },
    fashiolista: {
        title: "Fashiolista"
    },
    flipboard: {
        title: "Flipboard"
    },
    folkd: {
        title: "folkd.com"
    },
    foodlve: {
        title: "FoodLve"
    },
    fresqui: {
        title: "Fresqui"
    },
    friendfeed: {
        title: "FriendFeed"
    },
    funp: {
        title: "Funp"
    },
    fwisp: {
        title: "fwisp"
    },
    google: {
        title: "Google"
    },
    googleplus: {
        title: "Google +"
    },
    google_bmarks: {
        title: "Bookmarks"
    },
    google_reader: {
        title: "Google Reader"
    },
    google_translate: {
        title: "Google Translate"
    },
    hatena: {
        title: "Hatena"
    },
    instapaper: {
        title: "Instapaper"
    },
    jumptags: {
        title: "Jumptags"
    },
    kaboodle: {
        title: "Kaboodle"
    },
    kik: {
        title: "Kik"
    },
    linkagogo: {
        title: "linkaGoGo"
    },
    linkedin: {
        title: "LinkedIn"
    },
    livejournal: {
        title: "LiveJournal",
        type: "post"
    },
    mail_ru: {
        title: "mail.ru"
    },
    meneame: {
        title: "Meneame"
    },
    messenger: {
        title: "Messenger"
    },
    mister_wong: {
        title: "Mr Wong"
    },
    moshare: {
        title: "moShare"
    },
    myspace: {
        title: "MySpace"
    },
    n4g: {
        title: "N4G"
    },
    netlog: {
        title: "Netlog"
    },
    netvouz: {
        title: "Netvouz"
    },
    newsvine: {
        title: "Newsvine"
    },
    nujij: {
        title: "NUjij"
    },
    odnoklassniki: {
        title: "Odnoklassniki"
    },
    oknotizie: {
        title: "Oknotizie"
    },
    pinterest: {
        title: "Pinterest"
    },
    pocket: {
        title: "Pocket"
    },
    print: {
        title: "Print"
    },
    raise_your_voice: {
        title: "Raise Your Voice"
    },
    reddit: {
        title: "Reddit"
    },
    segnalo: {
        title: "Segnalo"
    },
    sharethis: {
        title: "ShareThis"
    },
    sina: {
        title: "Sina"
    },
    sonico: {
        title: "Sonico"
    },
    startaid: {
        title: "Startaid"
    },
    startlap: {
        title: "Startlap"
    },
    stumbleupon: {
        title: "StumbleUpon"
    },
    stumpedia: {
        title: "Stumpedia"
    },
    typepad: {
        title: "TypePad",
        type: "post"
    },
    tumblr: {
        title: "Tumblr"
    },
    twitter: {
        title: "Twitter"
    },
    viadeo: {
        title: "Viadeo"
    },
    virb: {
        title: "Virb"
    },
    vkontakte: {
        title: "Vkontakte"
    },
    voxopolis: {
        title: "VOXopolis"
    },
    whatsapp: {
        title: "WhatsApp"
    },
    weheartit: {
        title: "We Heart It"
    },
    wordpress: {
        title: "WordPress",
        type: "post"
    },
    xerpi: {
        title: "Xerpi"
    },
    xing: {
        title: "Xing"
    },
    yammer: {
        title: "Yammer"
    }
};
stlib.allOauthServices = {
    twitter: {
        title: "Twitter"
    },
    linkedIn: {
        title: "LinkedIn"
    },
    facebook: {
        title: "Facebook"
    }
};
stlib.allNativeServices = {
    fblike: {
        title: "Facebook Like"
    },
    fbrec: {
        title: "Facebook Recommend"
    },
    fbsend: {
        title: "Facebook Send"
    },
    fbsub: {
        title: "Facebook Subscribe"
    },
    foursquaresave: {
        title: "Foursquare Save"
    },
    foursquarefollow: {
        title: "Foursquare Follow"
    },
    instagram: {
        title: "Instagram Badge"
    },
    plusone: {
        title: "Google +1"
    },
    pinterestfollow: {
        title: "Pinterest Follow"
    },
    twitterfollow: {
        title: "Twitter Follow"
    },
    youtube: {
        title: "Youtube Subscribe"
    }
};
stlib.allDeprecatedServices = {
    google_bmarks: {
        title: "Google Bookmarks"
    },
    yahoo_bmarks: {
        title: "Yahoo Bookmarks"
    }
};
stlib.allOtherServices = {
    copy: {
        title: "Copy Paste"
    },
    sharenow: {
        title: "ShareNow"
    },
    sharenow_auto: {
        title: "Frictionless Sharing"
    },
    fbunlike: {
        title: "Facebook Unlike"
    }
};
var _all_services = stlib.allServices;
stlib.buttonInfo = {
    buttonList: [],
    addButton: function (a) {
        stlib.buttonInfo.buttonList.push(a)
    },
    getButton: function (a) {
        if (!isNaN(a)) {
            if (a >= stlib.buttonInfo.buttonList.length) {
                return false
            } else {
                return stlib.buttonInfo.buttonList[a]
            }
        } else {
            for (c = 0; c < stlib.buttonInfo.buttonList.length; c++) {
                if (stlib.buttonInfo.buttonList[c].service == a) {
                    debug(stlib.buttonInfo.buttonList[c])
                }
            }
        }
    },
    clickButton: function (a) {
        if (!isNaN(a)) {
            if (a >= stlib.buttonInfo.buttonList.length) {
                return false
            } else {
                if (stlib.buttonInfo.getButton(a).service == "sharethis" || stlib.buttonInfo.getButton(a).service == "email" || stlib.buttonInfo.getButton(a).service == "wordpress") {
                    stlib.buttonInfo.getButton(a).popup()
                } else {
                    stlib.buttonInfo.getButton(a).element.childNodes[0].onclick()
                }
            }
        } else {
            for (c = 0; c < stlib.buttonInfo.buttonList.length; c++) {
                if (stlib.buttonInfo.buttonList[c].service == a) {
                    if (stlib.buttonInfo.getButton(c).service == "sharethis" || stlib.buttonInfo.getButton(c).service == "email" || stlib.buttonInfo.getButton(c).service == "wordpress") {
                        stlib.buttonInfo.getButton(c).popup();
                        return true
                    } else {
                        stlib.buttonInfo.getButton(c).element.childNodes[0].onclick()
                    }
                }
            }
        }
    },
    resetButton: function () {
        stlib.buttonInfo.buttonList = []
    },
    listButton: function () {
        for (c = 0; c < stlib.buttonInfo.buttonList.length; c++) {
            debug(stlib.buttonInfo.buttonList[c])
        }
    }
};
stlib.buttonInfo.resetButton();
stlib.messageQueue = function () {
    var a = this;
    this.pumpInstance = null;
    this.queue = [];
    this.dependencies = ["data"];
    this.sending = true;
    this.setPumpInstance = function (b) {
        this.pumpInstance = b
    };
    this.send = function (f, d) {
        if ((typeof (f) == "string") && (typeof (d) == "string")) {
            _$d_();
            _$d1("Queueing message: " + d + ": " + f)
        }(typeof (f) == "string") && (typeof (d) == "string") ? this.queue.push([d, f]): null;
        if (this.sending == false || stlib.browser.ieFallback) {
            if (this.pumpInstance != null) {
                if (this.dependencies.length > 0) {
                    for (messageSet in this.queue) {
                        if (this.queue.hasOwnProperty(messageSet) && this.queue[messageSet][0] == this.dependencies[0]) {
                            if (this.queue.length > 0) {
                                _$d1("Current Queue Length: " + this.queue.length);
                                var b = this.queue.shift();
                                this.pumpInstance.broadcastSendMessage(b[1]);
                                this.dependencies.shift();
                                this.sending = true
                            }
                        }
                    }
                } else {
                    if (this.queue.length > 0) {
                        _$d1("Current Queue Length: " + this.queue.length);
                        var b = this.queue.shift();
                        this.pumpInstance.broadcastSendMessage(b[1]);
                        this.sending = true
                    }
                }
            } else {
                _$d_();
                _$d1("Pump is null")
            }
        }
        if ((stlib.browser.ieFallback) && (this.queue.length > 0)) {
            var e = "process" + stlib.functionCount;
            stlib.functionCount++;
            stlib.functions[e] = a.process;
            setTimeout("stlib.functions['" + e + "']()", 500)
        }
    };
    this.process = function () {
        _$d1("Processing MessageQueue");
        a.sending = false;
        _$d(this.queue);
        a.send()
    }
};
stlib.sharer = {
    sharerUrl: "https://ws.sharethis.com/api/sharer.php",
    regAuto: new RegExp(/(.*?)_auto$/),
    constructParamString: function () {
        stlib.data.validate();
        var a = stlib.data.pageInfo;
        var d = "?";
        var b;
        for (b in a) {
            d += b + "=" + encodeURIComponent(a[b]) + "&";
            _$d1("constructParamStringPageInfo: " + b + ": " + a[b])
        }
        a = stlib.data.shareInfo;
        for (b in a) {
            d += b + "=" + encodeURIComponent(a[b]) + "&";
            _$d1("constructParamStringShareInfo: " + b + ": " + a[b])
        }
        d += "ts=" + new Date().getTime() + "&";
        return d.substring(0, d.length - 1)
    },
    stPrint: function () {
        window.print()
    },
    incrementShare: function () {
        var j = document.referrer;
        var e = j.replace("http://", "").replace("https://", "").split("/");
        var h = e.shift();
        if (h == "www.mangatown.com" || h == "imobiliariacasa.com.br") {
            return
        }
        var b = stlib.data.get("url", "shareInfo");
        var i = stlib.data.get("destination", "shareInfo");
        var g = "https://";
        var a = "count-server.sharethis.com/increment_shares?countType=share&output=false";
        b = b.split("#sthash")[0];
        var f = "&service=" + encodeURIComponent(i) + "&url=" + encodeURIComponent(b);
        var d = g + a + f;
        if (i != "copy") {
            stlib.scriptLoader.loadJavascript(d, function () {})
        }
    },
    sharePinterest: function () {
        if (stlib.data.get("image", "shareInfo") == false || stlib.data.get("image", "shareInfo") == null || stlib.data.get("pinterest_native", "shareInfo") == "true") {
            if (typeof (stWidget) != "undefined" && typeof (stWidget.closeWidget) === "function") {
                stWidget.closeWidget()
            }
            if (typeof (stcloseWidget) === "function") {
                stcloseWidget()
            }
            if (typeof (stToolbar) != "undefined" && typeof (stToolbar.closeWidget) === "function") {
                stToolbar.closeWidget()
            }
            var a = document.createElement("script");
            a.setAttribute("type", "text/javascript");
            a.setAttribute("charset", "UTF-8");
            a.setAttribute("src", "//assets.pinterest.com/js/pinmarklet.js?r=" + Math.random() * 99999999);
            document.body.appendChild(a)
        }
    },
    share: function (e, a) {
        var d = stlib.sharer.constructParamString();
        _$d_();
        _$d1("Initiating a Share with the following url:");
        _$d2(stlib.sharer.sharerUrl + d);
        if ((stlib.data.get("destination", "shareInfo") == "print") || (stlib.data.get("destination", "shareInfo") == "email") || (stlib.data.get("destination", "shareInfo") == "pinterest" && stlib.data.get("source", "shareInfo").match(/share4xmobile/) == null && stlib.data.get("source", "shareInfo").match(/share4xpage/) == null && stlib.data.get("source", "shareInfo").match(/5xpage/) == null && (stlib.data.get("image", "shareInfo") == false || stlib.data.get("image", "shareInfo") == null)) || stlib.data.get("destination", "shareInfo") == "snapsets" || stlib.data.get("destination", "shareInfo") == "copy" || stlib.data.get("destination", "shareInfo") == "plusone" || stlib.data.get("destination", "shareInfo").match(stlib.sharer.regAuto) || (typeof (stlib.nativeButtons) != "undefined" && stlib.nativeButtons.checkNativeButtonSupport(stlib.data.get("destination", "shareInfo"))) || (stlib.data.get("pinterest_native", "shareInfo") != false && stlib.data.get("pinterest_native", "shareInfo") != null)) {
            var b = new Image(1, 1);
            b.src = stlib.sharer.sharerUrl + d;
            b.onload = function () {
                return
            }
        } else {
            if (typeof (a) != "undefined" && a == true) {
                window.open(stlib.sharer.sharerUrl + d, (new Date()).valueOf(), "scrollbars=1, status=1, height=480, width=640, resizable=1")
            } else {
                window.open(stlib.sharer.sharerUrl + d)
            }
        }
        e ? e() : null
    }
};
stlib.scriptLoader = {
    loadJavascript: function (b, d) {
        var a = stlib.scriptLoader;
        a.head = document.getElementsByTagName("head")[0];
        a.scriptSrc = b;
        a.script = document.createElement("script");
        a.script.setAttribute("type", "text/javascript");
        a.script.setAttribute("src", a.scriptSrc);
        a.script.async = true;
        if (window.attachEvent && document.all) {
            a.script.onreadystatechange = function () {
                if (this.readyState == "complete" || this.readyState == "loaded") {
                    d()
                }
            }
        } else {
            a.script.onload = d
        }
        a.s = document.getElementsByTagName("script")[0];
        a.s.parentNode.insertBefore(a.script, a.s)
    },
    loadCSS: function (b, e) {
        _$d_();
        _$d1("Loading CSS: " + b);
        var a = stlib.scriptLoader;
        var d;
        a.head = document.getElementsByTagName("head")[0];
        a.cssSrc = b;
        a.css = document.createElement("link");
        a.css.setAttribute("rel", "stylesheet");
        a.css.setAttribute("type", "text/css");
        a.css.setAttribute("href", b);
        a.css.setAttribute("id", b);
        setTimeout(function () {
            e();
            if (!document.getElementById(b)) {
                d = setInterval(function () {
                    if (document.getElementById(b)) {
                        clearInterval(d);
                        e()
                    }
                }, 100)
            }
        }, 100);
        a.head.appendChild(a.css)
    }
};
stlib.browser = {
    iemode: null,
    firefox: null,
    firefoxVersion: null,
    safari: null,
    chrome: null,
    opera: null,
    windows: null,
    mac: null,
    ieFallback: (/MSIE [6789]/).test(navigator.userAgent),
    init: function () {
        var a = navigator.userAgent.toString().toLowerCase();
        if (/msie|trident/i.test(a)) {
            if (document.documentMode) {
                stlib.browser.iemode = document.documentMode
            } else {
                stlib.browser.iemode = 5;
                if (document.compatMode) {
                    if (document.compatMode == "CSS1Compat") {
                        stlib.browser.iemode = 7
                    }
                }
            }
        }
        stlib.browser.firefox = ((a.indexOf("firefox") != -1) && (typeof InstallTrigger !== "undefined")) ? true : false;
        stlib.browser.firefoxVersion = (a.indexOf("firefox/5.0") != -1 || a.indexOf("firefox/9.0") != -1) ? false : true;
        stlib.browser.safari = (a.indexOf("safari") != -1 && a.indexOf("chrome") == -1) ? true : false;
        stlib.browser.chrome = (a.indexOf("safari") != -1 && a.indexOf("chrome") != -1) ? true : false;
        stlib.browser.opera = (window.opera || a.indexOf(" opr/") >= 0) ? true : false;
        stlib.browser.windows = (a.indexOf("windows") != -1) ? true : false;
        stlib.browser.mac = (a.indexOf("macintosh") != -1) ? true : false
    },
    getIEVersion: function () {
        return stlib.browser.iemode
    },
    isFirefox: function () {
        return stlib.browser.firefox
    },
    firefox8Version: function () {
        return stlib.browser.firefoxVersion
    },
    isSafari: function () {
        return stlib.browser.safari
    },
    isWindows: function () {
        return stlib.browser.windows
    },
    isChrome: function () {
        return stlib.browser.chrome
    },
    isOpera: function () {
        return stlib.browser.opera
    },
    isMac: function () {
        return stlib.browser.mac
    },
    isSafariBrowser: function (h, g) {
        var f = h && h.indexOf("Apple Computer, Inc.") > -1 && g && !g.match("CriOS");
        var b = /^((?!chrome|android).)*safari/i.test(g);
        var e = /^((?!firefox|linux))/i.test(g);
        var d = (g.indexOf("Mac OS X") > -1) || (/iPad|iPhone|iPod/.test(g) && !window.MSStream);
        var a = (g.indexOf("Windows NT") > -1) && b;
        return (f && b && e && (d || a))
    }
};
stlib.browser.init();
stlib.browser.mobile = {
    mobile: false,
    uagent: null,
    android: null,
    iOs: null,
    silk: null,
    windows: null,
    kindle: null,
    url: null,
    sharCreated: false,
    sharUrl: null,
    isExcerptImplementation: false,
    iOsVer: 0,
    init: function () {
        this.uagent = navigator.userAgent.toLowerCase();
        if (this.isAndroid()) {
            this.mobile = true
        } else {
            if (this.isIOs()) {
                this.mobile = true
            } else {
                if (this.isSilk()) {
                    this.mobile = true
                } else {
                    if (this.isWindowsPhone()) {
                        this.mobile = true
                    } else {
                        if (this.isKindle()) {
                            this.mobile = true
                        }
                    }
                }
            }
        }
    },
    isMobile: function isMobile() {
        return this.mobile
    },
    isAndroid: function () {
        if (this.android === null) {
            this.android = this.uagent.indexOf("android") > -1
        }
        return this.android
    },
    isKindle: function () {
        if (this.kindle === null) {
            this.kindle = this.uagent.indexOf("kindle") > -1
        }
        return this.kindle
    },
    isIOs: function isIOs() {
        if (this.iOs === null) {
            this.iOs = (this.uagent.indexOf("ipad") > -1) || (this.uagent.indexOf("ipod") > -1) || (this.uagent.indexOf("iphone") > -1)
        }
        return this.iOs
    },
    isSilk: function () {
        if (this.silk === null) {
            this.silk = this.uagent.indexOf("silk") > -1
        }
        return this.silk
    },
    getIOSVersion: function () {
        if (this.isIOs()) {
            this.iOsVer = this.uagent.substr((this.uagent.indexOf("os ")) + 3, 5).replace(/\_/g, ".")
        }
        return this.iOsVer
    },
    isWindowsPhone: function () {
        if (this.windows === null) {
            this.windows = this.uagent.indexOf("windows phone") > -1
        }
        return this.windows
    }
};
stlib.browser.mobile.init();
stlib = stlib || {};
stlib.browser = stlib.browser || {};
stlib.browser.mobile = stlib.browser.mobile || {};
stlib.browser.mobile.handleForMobileFriendly = function (k, d, l) {
    if (!this.isMobile()) {
        return false
    }
    if (typeof (stLight) === "undefined") {
        stLight = {};
        stLight.publisher = d.publisher;
        stLight.sessionID = d.sessionID;
        stLight.fpc = ""
    }
    var t = (typeof (k.title) !== "undefined") ? k.title : encodeURIComponent(document.title);
    var e = (typeof (k.url) !== "undefined") ? k.url : document.URL;
    var u = (d.short_url != "" && d.short_url != null) ? d.short_url : "";
    if (d.service == "sharethis") {
        var t = (typeof (k.title) !== "undefined") ? k.title : encodeURIComponent(document.title);
        var e = (typeof (k.url) !== "undefined") ? k.url : document.URL;
        var f = "";
        if (typeof (k.summary) != "undefined" && k.summary != null) {
            f = k.summary
        }
        var a = document.createElement("form");
        a.setAttribute("method", "GET");
        a.setAttribute("action", "http://edge.sharethis.com/share4x/mobile.html");
        a.setAttribute("target", "_blank");
        var p = {
            url: e,
            title: t,
            summary: f,
            destination: d.service,
            publisher: stLight.publisher,
            fpc: stLight.fpc,
            sessionID: stLight.sessionID,
            short_url: u
        };
        if (typeof (k.image) != "undefined" && k.image != null) {
            p.image = k.image
        }
        if (typeof (k.summary) != "undefined" && k.summary != null) {
            p.desc = k.summary
        }
        if (typeof (l) != "undefined" && typeof (l.exclusive_services) != "undefined" && l.exclusive_services != null) {
            p.exclusive_services = l.exclusive_services
        }
        if (typeof (d.exclusive_services) != "undefined" && d.exclusive_services != null) {
            p.exclusive_services = d.exclusive_services
        }
        if (typeof (l) != "undefined" && typeof (l.services) != "undefined" && l.services != null) {
            p.services = l.services
        }
        if (typeof (d.services) != "undefined" && d.services != null) {
            p.services = d.services
        }
        var h = d;
        if (typeof (l) != "undefined") {
            h = l
        }
        if (typeof (h.doNotHash) != "undefined" && h.doNotHash != null) {
            p.doNotHash = h.doNotHash
        }
        if (typeof (k.via) != "undefined" && k.via != null) {
            p.via = k.via
        }
        p.service = d.service;
        p.type = d.type;
        if (stlib.data) {
            var r = stlib.json.encode(stlib.data.pageInfo);
            var q = stlib.json.encode(stlib.data.shareInfo);
            if (stlib.browser.isFirefox() && !stlib.browser.firefox8Version()) {
                r = encodeURIComponent(encodeURIComponent(r));
                q = encodeURIComponent(encodeURIComponent(q))
            } else {
                r = encodeURIComponent(r);
                q = encodeURIComponent(q)
            }
            p.pageInfo = r;
            p.shareInfo = q
        }
        for (var s in p) {
            var g = document.createElement("input");
            g.setAttribute("type", "hidden");
            g.setAttribute("name", s);
            g.setAttribute("value", p[s]);
            a.appendChild(g)
        }
        document.body.appendChild(a);
        a.submit();
        return true
    }
    if (d.service == "email") {
        var b, n = 0;
        stlib.browser.mobile.url = e;
        if (stlib.browser.mobile.sharUrl == null) {
            stlib.browser.mobile.createSharOnPage()
        }
        var j = (u != "") ? u + "%0A%0a" : "{sharURLValue}%0A%0a";
        if ((typeof (k.summary) != "undefined") && k.summary != null) {
            j += k.summary + "%0A%0a"
        }
        j += "Sent using ShareThis";
        var m = "mailto:?";
        m += "subject=" + t;
        m += "&body=" + j;
        b = setInterval(function () {
            if (stlib.browser.mobile.sharUrl != null) {
                clearInterval(b);
                window.location.href = m.replace("{sharURLValue}", stlib.browser.mobile.sharUrl)
            }
            if (n > 500) {
                clearInterval(b);
                window.location.href = m.replace("{sharURLValue}", stlib.browser.mobile.sharUrl)
            }
            n++
        }, 100)
    }
    return true
};
stlib.browser.mobile.createSharOnPage = function () {
    if (stlib.browser.mobile.url !== "" && stlib.browser.mobile.url !== " " && stlib.browser.mobile.url !== null && !stlib.browser.mobile.sharCreated) {
        var a = ["return=json", "cb=stlib.browser.mobile.createSharOnPage_onSuccess", "service=createSharURL", "url=" + encodeURIComponent(stlib.browser.mobile.url)];
        a = a.join("&");
        stlib.scriptLoader.loadJavascript("https://ws.sharethis.com/api/getApi.php?" + a, function () {})
    }
};
stlib.browser.mobile.createSharOnPage_onSuccess = function (a) {
    if (a.status == "SUCCESS") {
        stlib.browser.mobile.sharCreated = true;
        stlib.browser.mobile.sharUrl = a.data.sharURL
    } else {
        stlib.browser.mobile.sharUrl = stlib.browser.mobile.url
    }
};
var tpcCookiesEnableCheckingDone = false;
var tpcCookiesEnabledStatus = true;
stlib.cookie = {
    setCookie: function (e, n, p) {
        var d = (navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1);
        var b = (navigator.userAgent.indexOf("MSIE") != -1);
        if (d || b) {
            var r = (p) ? p * 24 * 60 * 60 : 0;
            var k = document.createElement("div");
            k.setAttribute("id", e);
            k.setAttribute("type", "hidden");
            document.body.appendChild(k);
            var a = document.getElementById(e),
                f = document.createElement("form");
            try {
                var m = document.createElement('<iframe name="' + e + '" ></iframe>')
            } catch (l) {
                m = document.createElement("iframe")
            }
            m.name = e;
            m.src = "javascript:false";
            m.style.display = "none";
            a.appendChild(m);
            f.action = "https://sharethis.com/account/setCookie.php";
            f.method = "POST";
            var j = document.createElement("input");
            j.setAttribute("type", "hidden");
            j.setAttribute("name", "name");
            j.setAttribute("value", e);
            f.appendChild(j);
            var q = document.createElement("input");
            q.setAttribute("type", "hidden");
            q.setAttribute("name", "value");
            q.setAttribute("value", n);
            f.appendChild(q);
            var o = document.createElement("input");
            o.setAttribute("type", "hidden");
            o.setAttribute("name", "time");
            o.setAttribute("value", r);
            f.appendChild(o);
            f.target = e;
            a.appendChild(f);
            f.submit()
        } else {
            if (p) {
                var i = new Date();
                i.setTime(i.getTime() + (p * 24 * 60 * 60 * 1000));
                var g = "; expires=" + i.toGMTString()
            } else {
                var g = ""
            }
            var h = e + "=" + escape(n) + g;
            h += "; domain=" + escape(".sharethis.com") + ";path=/";
            document.cookie = h
        }
    },
    setTempCookie: function (e, f, g) {
        if (g) {
            var d = new Date();
            d.setTime(d.getTime() + (g * 24 * 60 * 60 * 1000));
            var a = "; expires=" + d.toGMTString()
        } else {
            var a = ""
        }
        var b = e + "=" + escape(f) + a;
        b += "; domain=" + escape(".sharethis.com") + ";path=/";
        document.cookie = b
    },
    getCookie: function (b) {
        var a = document.cookie.match("(^|;) ?" + b + "=([^;]*)(;|$)");
        if (a) {
            return (unescape(a[2]))
        } else {
            return false
        }
    },
    deleteCookie: function (e) {
        var l = "/";
        var k = ".sharethis.com";
        document.cookie = e.replace(/^\s+|\s+$/g, "") + "=" + ((l) ? ";path=" + l : "") + ((k) ? ";domain=" + k : "") + ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
        var d = (navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1);
        var b = (navigator.userAgent.indexOf("MSIE") != -1);
        if (d || b) {
            var h = document.createElement("div");
            h.setAttribute("id", e);
            h.setAttribute("type", "hidden");
            document.body.appendChild(h);
            var a = document.getElementById(e),
                f = document.createElement("form");
            try {
                var j = document.createElement('<iframe name="' + e + '" ></iframe>')
            } catch (i) {
                j = document.createElement("iframe")
            }
            j.name = e;
            j.src = "javascript:false";
            j.style.display = "none";
            a.appendChild(j);
            f.action = "https://sharethis.com/account/deleteCookie.php";
            f.method = "POST";
            var g = document.createElement("input");
            g.setAttribute("type", "hidden");
            g.setAttribute("name", "name");
            g.setAttribute("value", e);
            f.appendChild(g);
            f.target = e;
            a.appendChild(f);
            f.submit()
        }
    },
    deleteAllSTCookie: function () {
        var e = document.cookie;
        e = e.split(";");
        for (var g = 0; g < e.length; g++) {
            var d = e[g];
            d = d.split("=");
            if (!/st_optout/.test(d[0])) {
                var f = d[0];
                var j = "/";
                var h = ".edge.sharethis.com";
                document.cookie = f + "=;path=" + j + ";domain=" + h + ";expires=Thu, 01-Jan-1970 00:00:01 GMT"
            }
        }
    },
    setFpcCookie: function (a, h) {
        var d = new Date;
        var j = d.getFullYear();
        var g = d.getMonth() + 9;
        var i = d.getDate();
        var e = a + "=" + escape(h);
        if (j) {
            var b = new Date(j, g, i);
            e += "; expires=" + b.toGMTString()
        }
        var f = stlib.cookie.getDomain();
        e += "; domain=" + escape(f) + ";path=/";
        document.cookie = e
    },
    getFpcCookie: function (b) {
        var a = document.cookie.match("(^|;) ?" + b + "=([^;]*)(;|$)");
        if (a) {
            return (unescape(a[2]))
        } else {
            return false
        }
    },
    getDomain: function () {
        var b = document.domain.split(/\./);
        var a = "";
        if (b.length > 1) {
            a = "." + b[b.length - 2] + "." + b[b.length - 1]
        }
        return a
    },
    checkCookiesEnabled: function () {
        if (!tpcCookiesEnableCheckingDone) {
            stlib.cookie.setTempCookie("STPC", "yes", 1);
            if (stlib.cookie.getCookie("STPC") == "yes") {
                tpcCookiesEnabledStatus = true
            } else {
                tpcCookiesEnabledStatus = false
            }
            tpcCookiesEnableCheckingDone = true;
            return tpcCookiesEnabledStatus
        } else {
            return tpcCookiesEnabledStatus
        }
    },
    hasLocalStorage: function () {
        try {
            localStorage.setItem("stStorage", "yes");
            localStorage.removeItem("stStorage");
            return true
        } catch (a) {
            return false
        }
    }
};
stlib.fpc = {
    cookieName: "__unam",
    cookieValue: "",
    createFpc: function () {
        if (!document.domain || document.domain.search(/\.gov/) > 0) {
            return false
        }
        var i = stlib.cookie.getFpcCookie(stlib.fpc.cookieName);
        if (i == false) {
            var d = Math.round(Math.random() * 2147483647);
            d = d.toString(16);
            var g = (new Date()).getTime();
            g = g.toString(16);
            var f = window.location.hostname.split(/\./)[1];
            if (!f) {
                return false
            }
            var h = "";
            h = stlib.fpc.determineHash(f) + "-" + g + "-" + d + "-1";
            i = h
        } else {
            var b = i;
            var a = b.split(/\-/);
            if (a.length == 4) {
                var e = Number(a[3]);
                e++;
                i = a[0] + "-" + a[1] + "-" + a[2] + "-" + e
            }
        }
        stlib.cookie.setFpcCookie(stlib.fpc.cookieName, i);
        stlib.fpc.cookieValue = i;
        return i
    },
    determineHash: function (b) {
        var f = 0;
        var e = 0;
        for (var d = b.length - 1; d >= 0; d--) {
            var a = parseInt(b.charCodeAt(d));
            f = ((f << 8) & 268435455) + a + (a << 12);
            if ((e = f & 161119850) != 0) {
                f = (f ^ (e >> 20))
            }
        }
        return f.toString(16)
    }
};
stlib.validate = {
    regexes: {
        notEncoded: /(%[^0-7])|(%[0-7][^0-9a-f])|["{}\[\]\<\>\\\^`\|]/gi,
        tooEncoded: /%25([0-7][0-9a-f])/gi,
        publisher: /^(([a-z]{2}(-|\.))|)[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
        url: /^(http|https):\/\/([a-z0-9!'\(\)\*\.\-\+:]*(\.)[a-z0-9!'\(\)\*\.\-\+:]*)((\/[a-z0-9!'\(\)\*\.\-\+:]*)*)/i,
        fpc: /^[0-9a-f]{7}-[0-9a-f]{11}-[0-9a-f]{7,8}-[0-9]*$/i,
        sessionID: /^[0-9]*\.[0-9a-f]*$/i,
        title: /.*/,
        description: /.*/,
        buttonType: /^(chicklet|vcount|hcount|large|custom|button|)$/,
        comment: /.*/,
        destination: /.*/,
        source: /.*/,
        image: /(^(http|https):\/\/([a-z0-9!'\(\)\*\.\-\+:]*(\.)[a-z0-9!'\(\)\*\.\-\+:]*)((\/[a-z0-9!'\(\)\*\.\-\+:]*)*))|^$/i,
        sourceURL: /^(http|https):\/\/([a-z0-9!'\(\)\*\.\-\+:]*(\.)[a-z0-9!'\(\)\*\.\-\+:]*)((\/[a-z0-9!'\(\)\*\.\-\+:]*)*)/i,
        sharURL: /(^(http|https):\/\/([a-z0-9!'\(\)\*\.\-\+:]*(\.)[a-z0-9!'\(\)\*\.\-\+:]*)((\/[a-z0-9!'\(\)\*\.\-\+:]*)*))|^$/i
    }
};
stlib.html = {
    encode: function (a) {
        if (stlib.html.startsWith(a, "http")) {
            return String(a).replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        } else {
            return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }
    },
    startsWith: function (a, b) {
        return (a.match("^" + b) == b)
    }
};
if (typeof (stlib.data) == "undefined") {
    stlib.data = {
        bInit: false,
        publisherKeySet: false,
        pageInfo: {},
        shareInfo: {},
        resetPageData: function () {
            stlib.data.pageInfo.sessionID = "ERROR";
            stlib.data.pageInfo.hostname = "ERROR";
            stlib.data.pageInfo.location = "ERROR";
            stlib.data.pageInfo.product = "widget";
            stlib.data.pageInfo.stid = ""
        },
        resetShareData: function () {
            stlib.data.shareInfo = {};
            stlib.data.shareInfo.url = "ERROR";
            stlib.data.shareInfo.sharURL = "";
            stlib.data.shareInfo.buttonType = "ERROR";
            stlib.data.shareInfo.destination = "ERROR";
            stlib.data.shareInfo.source = "ERROR"
        },
        resetData: function () {
            stlib.data.resetPageData();
            stlib.data.resetShareData()
        },
        validate: function () {
            var a = stlib.validate.regexes;

            function b(f, h) {
                if (h != encodeURIComponent(h)) {
                    a.notEncoded.test(h) ? _$de(f + " not encoded") : null;
                    a.tooEncoded.test(h) ? _$de(f + " has too much encoding") : null
                }
                var g = a[f] ? a[f].test(decodeURIComponent(h)) : true;
                if (!g) {
                    _$de(f + " failed validation")
                }
            }
            var d = stlib.data.pageInfo;
            var e;
            for (e in d) {
                b(e, d[e])
            }
            d = stlib.data.shareInfo;
            for (e in d) {
                b(e, d[e])
            }
        },
        init: function () {
            if (!stlib.data.bInit) {
                stlib.data.bInit = true;
                stlib.data.resetData();
                stlib.data.set("fcmp", typeof (window.__cmp) == "function", "pageInfo");
                stlib.data.set("fcmpv2", typeof (window.__tcfapi) == "function", "pageInfo");
                if (stlib.publisher) {
                    stlib.data.setPublisher(stlib.publisher)
                }
                stlib.data.set("product", stlib.product, "pageInfo");
                var h = document.location.href,
                    d = "",
                    a = "",
                    g = [],
                    k = "",
                    j = "",
                    e = "",
                    b = "",
                    f = "",
                    i = "";
                g = stlib.data.getRefDataFromUrl(h);
                if (g.length > 0) {
                    d = (typeof (g[0]) != "undefined") ? g[0] : "";
                    a = (typeof (g[1]) != "undefined") ? g[1] : "";
                    j = stlib.data.removeRefDataFromUrl(h);
                    stlib.data.showModifiedUrl(j);
                    stlib.data.set("url", j, "shareInfo")
                } else {
                    k = document.referrer;
                    g = k.replace("http://", "").replace("https://", "").split("/");
                    d = g.shift();
                    a = g.join("/");
                    stlib.data.set("url", h, "shareInfo")
                }
                stlib.data.set("title", document.title, "shareInfo");
                if (stlib.data.publisherKeySet != true) {
                    stlib.data.set("publisher", "ur.00000000-0000-0000-0000-000000000000", "pageInfo")
                }
                f = (new Date()).getTime().toString();
                i = Number(Math.random().toPrecision(5).toString().substr(2)).toString();
                stlib.data.set("sessionID", f + "." + i, "pageInfo");
                stlib.data.set("hostname", document.location.hostname, "pageInfo");
                stlib.data.set("location", document.location.pathname, "pageInfo");
                stlib.data.set("refDomain", d, "pageInfo");
                stlib.data.set("refQuery", a, "pageInfo")
            }
        },
        showModifiedUrl: function (b) {
            if (window.history && history.replaceState) {
                history.replaceState(null, document.title, b)
            } else {
                if ((/MSIE/).test(navigator.userAgent)) {
                    var g = 0,
                        d = window.location.hash,
                        a = new RegExp("(&st_refDomain=?)[^&|]+"),
                        f = new RegExp("(#st_refDomain=?)[^&|]+"),
                        e = document.location.href;
                    if (a.test(e)) {
                        g = d.indexOf("&st_refDomain");
                        window.location.hash = d.substr(0, g)
                    } else {
                        if (f.test(e)) {
                            window.location.replace("#")
                        }
                    }
                } else {
                    document.location.replace(b)
                }
            }
        },
        getRefDataFromUrl: function (b) {
            var e = new RegExp("st_refDomain="),
                f = "",
                d = "",
                a = [];
            if (e.test(b)) {
                f = b.match(/(st_refDomain=?)[^\&|]+/g);
                a.push(f[0].split("=")[1]);
                d = b.match(/(st_refQuery=?)[^\&|]+/g);
                a.push(d[0].replace("st_refQuery=", ""))
            }
            return a
        },
        removeRefDataFromUrl: function (b) {
            var f = "",
                d = "",
                a = new RegExp("(&st_refDomain=?)[^&|]+"),
                e = new RegExp("(#st_refDomain=?)[^&|]+");
            if (a.test(b)) {
                f = b.replace(/\&st_refDomain=(.*)/g, "")
            } else {
                if (e.test(b)) {
                    f = b.replace(/\#st_refDomain=(.*)/g, "")
                } else {
                    f = b
                }
            }
            return f
        },
        setPublisher: function (a) {
            stlib.data.set("publisher", a, "pageInfo");
            stlib.data.publisherKeySet = true
        },
        setSource: function (d, a) {
            var b = "";
            if (a) {
                if (a.toolbar) {
                    b = "toolbar" + d
                } else {
                    if (a.page && a.page != "home" && a.page != "") {
                        b = "chicklet" + d
                    } else {
                        b = "button" + d
                    }
                }
            } else {
                b = d
            }
            stlib.data.set("source", b, "shareInfo")
        },
        set: function (a, d, b) {
            if (typeof (d) == "number" || typeof (d) == "boolean") {
                stlib.data[b][a] = d
            } else {
                if (typeof (d) == "undefined" || d == null) {} else {
                    stlib.data[b][a] = encodeURIComponent(decodeURIComponent(unescape(d.replace(/<[^<>]*>/gi, " ")).replace(/%/gi, "%25")));
                    if (a == "url" || a == "location" || a == "image") {
                        try {
                            stlib.data[b][a] = encodeURIComponent(decodeURIComponent(decodeURI(d.replace(/<[^<>]*>/gi, " ")).replace(/%/gi, "%25")))
                        } catch (f) {
                            stlib.data[b][a] = encodeURIComponent(decodeURIComponent(unescape(d.replace(/<[^<>]*>/gi, " ")).replace(/%/gi, "%25")))
                        }
                    }
                }
            }
        },
        get: function (a, b) {
            try {
                if (stlib.data[b] && stlib.data[b][a]) {
                    return decodeURIComponent(stlib.data[b][a])
                } else {
                    return false
                }
            } catch (d) {
                return false
            }
        },
        unset: function (a, b) {
            if (stlib.data[b] && typeof (stlib.data[b][a]) != "undefined") {
                delete stlib.data[b][a]
            }
        },
        bindEvent: function (d, a, b) {
            if (d.addEventListener) {
                d.addEventListener(a, b, false)
            } else {
                if (d.attachEvent) {
                    d.attachEvent("on" + a, b)
                }
            }
        },
        debug: function (j, g) {
            stlib.data.init();
            var f = stlib.data.pageInfo;
            var k = "";
            var d;
            for (d in f) {
                k += d + "=" + f[d] + "&"
            }
            k = k.substring(0, k.length - 1);
            var i = "https://l.sharethis.com/";
            i += j;
            i += "?event=" + g;
            i += "&" + k;
            var h = new Image(1, 1);
            h.src = i;
            h.onload = function () {
                return
            }
        },
        hostname: function (d) {
            var b;
            if (d == null) {
                d = st.href
            }
            b = document.createElement("a");
            b.setAttribute("href", d);
            return b.hostname
        },
        protocol: function (d) {
            var b;
            if (d == null) {
                d = st.href
            }
            b = document.createElement("a");
            b.setAttribute("href", d);
            return b.protocol
        },
        parseCookie: function (b, d) {
            var a = d.match("(^|;)\\s*" + b + "\\s*=\\s*([^;]+)");
            return a ? a.pop() : null
        },
        writeCookie: function (b, g, a) {
            if (!a) {
                a = 33696000
            }
            var d = (window && window.location && window.location.hostname) || "";
            var i = d.split(".");
            var f = "";
            if (i.length > 1) {
                f = "domain=." + i.slice(-2).join(".")
            }
            var j = "";
            try {
                document.cookie = "st_samesite=1;SameSite=None;Secure";
                if (stlib.data.parseCookie("st_samesite", document.cookie)) {
                    j = "SameSite=None;Secure";
                    document.cookie = "st_samesite=1;max-age=0;SameSite=None;Secure"
                }
            } catch (h) {}
            document.cookie = b + "=" + g + ";" + f + ";path=/;max-age=" + a + ";" + j
        },
        setConsent: function (b) {
            for (var a in b) {
                stlib.data.set(a, b[a], "pageInfo")
            }
        },
        getEUConsent: function (j) {
            function d(l, k) {
                var e;
                return function () {
                    if (l) {
                        e = l.apply(k || this, arguments);
                        l = null
                    }
                    return e
                }
            }
            var b = d(j);
            var a = stlib.data.parseCookie("usprivacy", document.cookie);
            if (a) {
                stlib.data.setConsent({
                    usprivacy: a
                })
            }
            var i = Date.now();
            var h = d(function () {
                var l = Date.now();
                var k = stlib.data.parseCookie("euconsent-v2", document.cookie);
                if (k !== null) {
                    stlib.data.setConsent({
                        consent_cookie_duration: Date.now() - l,
                        consent_duration: Date.now() - i,
                        gdpr_consent: k,
                        gdpr_domain: document.location.hostname,
                        gdpr_method: "cookie"
                    });
                    b()
                } else {
                    setTimeout(b, 5000);
                    var n = document.createElement("iframe");
                    var m = "https://c.sharethis.mgr.consensu.org/portal-v2.html";
                    n.setAttribute("src", m);
                    n.setAttribute("id", "st_gdpr_iframe");
                    n.setAttribute("title", "GDPR Consent Management");
                    n.style.width = "0px";
                    n.style.height = "0px";
                    n.style.position = "absolute";
                    n.style.left = "-5000px";
                    var e = setInterval((function () {
                        if (document.body != null) {
                            clearInterval(e);
                            document.body.appendChild(n)
                        }
                    }), 10);
                    stlib.data.bindEvent(window, "message", function (s) {
                        if (s.origin == "https://c.sharethis.mgr.consensu.org") {
                            var t = s.data && s.data.command;
                            var o = s.data;
                            var q = s.data && s.data.supports_samesite;
                            if (t == "isLoaded") {
                                var p = o.v2;
                                var r = ".consensu.org";
                                stlib.data.setConsent({
                                    bsamesite: q,
                                    consent_cookie_duration: Date.now() - l,
                                    consent_duration: Date.now() - i,
                                    gdpr_consent: p,
                                    gdpr_domain: r,
                                    gdpr_method: "cookie"
                                });
                                b()
                            }
                        }
                    })
                }
            });
            if (typeof window.__tcfapi == "function") {
                var f = setTimeout(h, 5000);
                try {
                    window.__tcfapi("getTCData", 2, function (e) {
                        if (e && e.tcString) {
                            var k = (e.isServiceSpecific) ? document.location.hostname : ".consensu.org";
                            stlib.data.setConsent({
                                consent_duration: Date.now() - i,
                                gdpr_consent: e.tcString,
                                gdpr_domain: k,
                                gdpr_method: "api"
                            });
                            clearTimeout(f);
                            b()
                        } else {
                            h()
                        }
                    })
                } catch (g) {
                    h()
                }
            } else {
                h()
            }
        }
    };
    stlib.data.resetData()
}
stlib.comscore = {
    load: function () {
        var b = document.referrer;
        var d = "https://sb.scorecardresearch.com/";
        d += "b?c1=7&c2=8097938&rn=" + Math.round(Math.random() * 2147483647) + "&c7=" + encodeURIComponent(document.location.href) + "&c3=8097938&c8=" + encodeURIComponent(document.title) + ((b) ? "&c9=" + encodeURIComponent(document.referrer) : "") + "&cv=2.2&cs=js";
        var a = new Image(1, 1);
        a.src = d;
        a.onload = function () {
            return
        }
    }
};
stlib.hash = {
    doNotHash: false,
    hashAddressBar: false,
    doNotCopy: false,
    prefix: "sthash",
    shareHash: "",
    incomingHash: "",
    validChars: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    servicePreferences: {
        linkedin: "param",
        stumbleupon: "param",
        bebo: "param"
    },
    hashDestination: function (b) {
        if (b == "copy") {
            return "dpuf"
        }
        var d = b.substring(0, 2) + b.substring(b.length - 2, b.length);
        var a = function (e, f) {
            if (e.charCodeAt(f) == 122) {
                return "a"
            }
            return String.fromCharCode(e.charCodeAt(f) + 1)
        };
        return a(d, 0) + a(d, 1) + a(d, 2) + a(d, 3)
    },
    getHash: function () {
        var d = false;
        var b = "";
        var e = document.location.href;
        e = e.split("#").shift();
        var a = e.split("?");
        if (a.length > 1) {
            a = a[1].split("&");
            for (arg in a) {
                try {
                    if (a[arg].substring(0, 6) == "sthash") {
                        d = true;
                        b = a[arg]
                    }
                } catch (f) {}
            }
            if (d) {
                return b
            } else {
                return document.location.hash.substring(1)
            }
        } else {
            return document.location.hash.substring(1)
        }
    },
    stripHash: function (a) {
        var b = a;
        b = b.split("#");
        if (b.length > 1) {
            return b[1]
        } else {
            return ""
        }
    },
    clearHash: function () {
        if (stlib.hash.validateHash(document.location.hash)) {
            var a = document.location.href.split("#").shift();
            if (window.history && history.replaceState) {
                history.replaceState(null, document.title, a)
            } else {
                if ((/MSIE/).test(navigator.userAgent)) {
                    window.location.replace("#")
                } else {
                    document.location.hash = ""
                }
            }
        }
    },
    init: function () {
        var b = "";
        var a = stlib.hash.validChars.length;
        for (var f = 0; f < 8; f++) {
            b += stlib.hash.validChars[Math.random() * a | 0]
        }
        if (stlib.hash.getHash() == "") {
            stlib.hash.shareHash = stlib.hash.prefix + "." + b
        } else {
            var d = stlib.hash.getHash().split(".");
            var e = d.shift();
            if (e == stlib.hash.prefix || e == stlib.hash.prefix) {
                stlib.hash.incomingHash = stlib.hash.getHash();
                stlib.hash.shareHash = stlib.hash.prefix + "." + d.shift() + "." + b
            } else {
                stlib.hash.shareHash = stlib.hash.prefix + "." + b
            }
        }
        if (!stlib.hash.doNotHash && stlib.hash.hashAddressBar) {
            if (document.location.hash == "" || stlib.hash.validateHash(document.location.hash)) {
                if (window.history && history.replaceState) {
                    history.replaceState(null, "ShareThis", "#" + stlib.hash.shareHash + ".dpbs")
                } else {
                    if ((/MSIE/).test(navigator.userAgent)) {
                        window.location.replace("#" + stlib.hash.shareHash + ".dpbs")
                    } else {
                        document.location.hash = stlib.hash.shareHash + ".dpbs"
                    }
                }
            }
        } else {
            stlib.hash.clearHash()
        }
        if (!stlib.hash.doNotHash && !stlib.hash.doNotCopy) {
            stlib.hash.copyPasteInit()
        }
        stlib.hash.copyPasteLog()
    },
    checkURL: function () {
        var b = stlib.data.get("destination", "shareInfo");
        var g = stlib.hash.updateParams(b);
        var e = "." + stlib.hash.hashDestination(b);
        stlib.hash.updateDestination(e);
        if (!stlib.hash.doNotHash && typeof (stlib.data.pageInfo.shareHash) != "undefined") {
            var d = stlib.data.get("url", "shareInfo");
            var h = stlib.hash.stripHash(d);
            if (stlib.hash.validateHash(h) || h == "") {
                if (typeof (stlib.hash.servicePreferences[b]) != "undefined") {
                    if (stlib.hash.servicePreferences[b] == "param") {
                        _$d1("Don't use hash, use params");
                        _$d2(g);
                        if (g.split("?").length > 1) {
                            var f = g.split("?")[1].split("&");
                            var i = false;
                            for (var a = 0; a < f.length; a++) {
                                if (f[a].split(".")[0] == "sthash") {
                                    i = true
                                }
                            }
                            if (i) {
                                stlib.data.set("url", g, "shareInfo")
                            } else {
                                stlib.data.set("url", g + "&" + stlib.data.pageInfo.shareHash, "shareInfo")
                            }
                        } else {
                            stlib.data.set("url", g + "?" + stlib.data.pageInfo.shareHash, "shareInfo")
                        }
                        if (b == "linkedin") {
                            if (stlib.data.get("sharURL", "shareInfo") != "") {
                                stlib.data.set("sharURL", stlib.data.get("url", "shareInfo"), "shareInfo")
                            }
                        }
                    } else {
                        _$d1("Using Hash");
                        stlib.data.set("url", g + "#" + stlib.data.pageInfo.shareHash, "shareInfo")
                    }
                } else {
                    _$d1("Not using custom destination hash type");
                    stlib.data.set("url", g + "#" + stlib.data.pageInfo.shareHash, "shareInfo")
                }
            }
        }
    },
    updateParams: function (a) {
        var g = stlib.data.get("url", "shareInfo").split("#").shift();
        var f = /(\?)sthash\.[a-zA-z0-9]{8}\.[a-zA-z0-9]{8}/;
        var e = /(&)sthash\.[a-zA-z0-9]{8}\.[a-zA-z0-9]{8}/;
        var d = /(\?)sthash\.[a-zA-z0-9]{8}/;
        var b = /(&)sthash\.[a-zA-z0-9]{8}/;
        if (f.test(g)) {
            g = g.replace(f, "?" + stlib.data.pageInfo.shareHash)
        } else {
            if (e.test(g)) {
                g = g.replace(e, "&" + stlib.data.pageInfo.shareHash)
            } else {
                if (d.test(g)) {
                    g = g.replace(d, "?" + stlib.data.pageInfo.shareHash)
                } else {
                    if (b.test(g)) {
                        g = g.replace(b, "&" + stlib.data.pageInfo.shareHash)
                    }
                }
            }
        }
        return g
    },
    updateDestination: function (b) {
        var a = /sthash\.[a-zA-z0-9]{8}\.[a-zA-z0-9]{8}\.[a-z]{4}/;
        var d = /sthash\.[a-zA-z0-9]{8}\.[a-z]{4}/;
        _$d_();
        _$d1("Updating Destination");
        if (a.test(stlib.data.pageInfo.shareHash)) {
            _$d2(stlib.data.pageInfo.shareHash.substring(0, 24));
            stlib.data.pageInfo.shareHash = stlib.data.pageInfo.shareHash.substring(0, 24) + b
        } else {
            if (d.test(stlib.data.pageInfo.shareHash)) {
                _$d2(stlib.data.pageInfo.shareHash.substring(0, 15));
                stlib.data.pageInfo.shareHash = stlib.data.pageInfo.shareHash.substring(0, 15) + b
            } else {
                stlib.data.pageInfo.shareHash += b
            }
        }
    },
    validateHash: function (a) {
        var b = /[\?#&]?sthash\.[a-zA-z0-9]{8}\.[a-zA-z0-9]{8}$/;
        var d = /[\?#&]?sthash\.[a-zA-z0-9]{8}\.[a-zA-z0-9]{8}\.[a-z]{4}$/;
        var e = /[\?#&]?sthash\.[a-zA-z0-9]{8}\.[a-z]{4}$/;
        var f = /[\?#&]?sthash\.[a-zA-z0-9]{8}$/;
        return f.test(a) || e.test(a) || d.test(a) || b.test(a)
    },
    appendHash: function (a) {
        var b = stlib.hash.stripHash(a);
        if (stlib.data.pageInfo.shareHash && (stlib.hash.validateHash(b) || b == "")) {
            a = a.replace("#" + b, "") + "#" + stlib.data.pageInfo.shareHash
        } else {}
        return a
    },
    copyPasteInit: function () {
        var a = document.getElementsByTagName("body")[0];
        var d = document.createElement("div");
        d.id = "stcpDiv";
        d.style.position = "absolute";
        d.style.top = "-1999px";
        d.style.left = "-1988px";
        a.appendChild(d);
        d.innerHTML = "ShareThis Copy and Paste";
        var b = document.location.href.split("#").shift();
        var e = "#" + stlib.hash.shareHash;
        if (document.addEventListener) {
            a.addEventListener("copy", function (i) {
                if (typeof (Tynt) != "undefined") {
                    return
                }
                var h = document.getSelection();
                if (h.isCollapsed) {
                    return
                }
                var g = h.getRangeAt(0).cloneContents();
                d.innerHTML = "";
                d.appendChild(g);
                if (d.textContent.trim().length == 0) {
                    return
                }
                if ((h + "").trim().length == 0) {} else {
                    if (d.innerHTML == (h + "") || d.textContent == (h + "")) {
                        d.innerHTML = stlib.html.encode(stlib.hash.selectionModify(h))
                    } else {
                        d.innerHTML += stlib.html.encode(stlib.hash.selectionModify(h, true))
                    }
                }
                var f = document.createRange();
                f.selectNodeContents(d);
                var j = h.getRangeAt(0)
            }, false)
        } else {
            if (document.attachEvent) {}
        }
    },
    copyPasteLog: function () {
        var d = window.addEventListener ? "addEventListener" : "attachEvent";
        var b = d == "attachEvent" ? "oncopy" : "copy";
        var a = document.getElementsByTagName("body")[0];
        if (a) {
            a[d](b, function (g) {
                var f = true;
                stlib.data.resetShareData();
                stlib.data.set("url", document.location.href, "shareInfo");
                stlib.data.setSource("copy");
                stlib.data.set("destination", "copy", "shareInfo");
                stlib.data.set("buttonType", "custom", "shareInfo");
                if (typeof (Tynt) != "undefined") {
                    stlib.data.set("result", "tynt", "shareInfo");
                    f = false
                }
                if (typeof (addthis_config) != "undefined") {
                    stlib.data.set("result", "addThis", "shareInfo");
                    if (typeof (addthis_config.data_track_textcopy) == "undefined" || addthis_config.data_track_textcopy) {
                        stlib.data.set("enabled", "true", "shareInfo");
                        f = false
                    } else {
                        stlib.data.set("enabled", "false", "shareInfo")
                    }
                }
            }, false)
        }
    },
    logCopy: function (a, b) {
        stlib.data.resetShareData();
        stlib.data.set("url", a, "shareInfo");
        stlib.data.setSource("copy");
        stlib.data.set("destination", "copy", "shareInfo");
        stlib.data.set("buttonType", "custom", "shareInfo");
        if (b) {
            stlib.data.set("copy_text", b, "shareInfo")
        }
        stlib.sharer.share()
    },
    selectionModify: function (o, m) {
        o = "" + o;
        _$d_();
        _$d1("Copy Paste");
        var n = /^((http|https):\/\/([a-z0-9!'\(\)\*\.\-\+:]*(\.)[a-z0-9!'\(\)\*\.\-\+:]*)((\/[a-z0-9!'\(\)\*\.\-\+:]*)*))/i;
        var h = /^([a-z0-9!'\(\)\*\.\-\+:]*(\.)[a-z0-9!'\(\)\*\.\-\+:]*)((\/[a-z0-9!'\(\)\*\.\-\+:]*)*)/i;
        var f = /^\+?1?[\.\-\\)_\s]?[\\(]?[0-9]{3}[\.\-\\)_\s]?[0-9]{3}[\.\-_\s]?[0-9]{4}$|^[0-9]{3}[\.\-_\s]?[0-9]{4}$/;
        var j = /^[0-9]{3}[\.\-_\s]?[0-9]{8}$/;
        var l = /^[0-9]{2}[\.\-_\s]?[0-9]{4}[\.\-_\s]?[0-9]{4}$/;
        var d = /[\-_\.a-z0-9]+@[\-_\.a-z0-9]+\.[\-_\.a-z0-9]+/i;
        var g = /[\s@]/;
        var b = document.location.href.split("#").shift();
        var i = "#" + stlib.hash.shareHash;
        var a = "";
        var k = "";
        var e = o;
        if (typeof (m) == "undefined" && ((n.test(o) || h.test(o)) && !g.test(o.trim()))) {
            _$d2("is Url");
            if (o.match(/#/) == null || stlib.hash.validateHash(o)) {
                k = o.split("#")[0] + i + ".dpuf"
            } else {
                k = o
            }
        } else {
            _$d2("is Not Url");
            if (document.location.hash == "" || (/^#$/).test(document.location.hash) || stlib.hash.validateHash(document.location.hash)) {
                k = b + i + ".dpuf"
            } else {
                k = document.location.href
            }
            e = o;
            if (o.length > 50) {
                if (!f.test(o) && !j.test(o) && !l.test(o) && !d.test(o)) {
                    e += a
                }
            }
        }
        if (o.length > 500) {
            o = o.substring(0, 497) + "..."
        }
        stlib.hash.logCopy(k, o);
        return e
    }
};
stlib.pump = function (a, d, e) {
    var b = this;
    this.isIframeReady = false;
    this.isIframeSending = false;
    this.getHash = function (f) {
        var g = f.split("#");
        g.shift();
        return g.join("#")
    };
    this.broadcastInit = function (f) {
        this.destination = f;
        _$d_("---------------------");
        _$d1("Initiating broadcaster:");
        _$d(this.destination)
    };
    this.broadcastSendMessage = function (f) {
        _$d_("---------------------");
        _$d1("Initiating Send:");
        if (this.destination === window) {
            if (stlib.browser.ieFallback) {
                window.location.replace(window.location.href.split("#")[0] + "#" + f);
                _$d2("child can't communicate with parent");
                return
            }
            _$d2("Iframe to publisher: " + f);
            parent.postMessage("#" + f, document.referrer)
        } else {
            _$d2("Publisher to Iframe: " + f);
            if (stlib.browser.ieFallback) {
                if (this.destination.contentWindow) {
                    this.destination.contentWindow.location.replace(this.destination.src + "#" + f);
                    this.isIframeSending = true
                }
                return
            }
            this.destination.contentWindow.postMessage("#" + f, this.destination.src)
        }
    };
    this.receiverInit = function (h, k) {
        _$d_("---------------------");
        _$d1("Initiating Receiver:");
        _$d(h);
        if (stlib.browser.ieFallback) {
            this.callback = k;
            this.source = h;
            if (h === window) {
                window.location.replace(window.location.href.split("#")[0] + "#");
                this.currentIframe = window.location.hash;
                var g = "receiver" + stlib.functionCount;
                stlib.functions[g] = function (m) {
                    if ("" != window.location.hash && "#" != window.location.hash) {
                        var l = window.location.hash;
                        m(l);
                        window.location.replace(window.location.href.split("#")[0] + "#")
                    }
                };
                stlib.functionCount++;
                var j = "callback" + stlib.functionCount;
                stlib.functions[j] = k;
                stlib.functionCount++;
                setInterval("stlib.functions['" + g + "'](stlib.functions['" + j + "'])", 200)
            } else {}
            var i = window.addEventListener ? "addEventListener" : "attachEvent";
            var f = i == "attachEvent" ? "onmessage" : "message";
            window[i](f, function (l) {
                if (h == window) {} else {
                    if (l.origin.indexOf("sharethis.com") != -1) {
                        if (l.data.match(/#Pinterest Click/)) {
                            stlib.sharer.sharePinterest()
                        }
                        if (l.data.match(/#Print Click/)) {
                            stlib.sharer.stPrint()
                        }
                    }
                }
            }, false);
            return
        }
        var i = window.addEventListener ? "addEventListener" : "attachEvent";
        var f = i == "attachEvent" ? "onmessage" : "message";
        window[i](f, function (l) {
            if (h == window) {
                _$d1("arrived in iframe from:");
                _$d(l.origin);
                if (l.data.match(/#fragmentPump/) || l.data.match(/#Buttons Ready/) || l.data.match(/#Widget Ready/) || l.data.indexOf("#light") == 0 || l.data.indexOf("#widget") == 0 || l.data.indexOf("#popup") == 0 || l.data.indexOf("#show") == 0 || l.data.indexOf("#init") == 0 || l.data.indexOf("#test") == 0 || l.data.indexOf("#data") == 0) {
                    k(l.data)
                }
            } else {
                if (l.origin.indexOf("sharethis.com") != -1) {
                    _$d1("arrived in parent from:");
                    _$d(l.origin);
                    if (l.data.match(/#fragmentPump/) || l.data.match(/#Buttons Ready/) || l.data.match(/#Widget Ready/) || l.data.indexOf("#light") == 0 || l.data.indexOf("#widget") == 0 || l.data.indexOf("#popup") == 0 || l.data.indexOf("#show") == 0 || l.data.indexOf("#init") == 0 || l.data.indexOf("#test") == 0 || l.data.indexOf("#data") == 0) {
                        k(l.data)
                    } else {
                        if (l.data.match(/#Pinterest Click/)) {
                            stlib.sharer.sharePinterest()
                        } else {
                            if (l.data.match(/#Print Click/)) {
                                stlib.sharer.stPrint()
                            }
                        }
                    }
                } else {
                    _$d1("discarded event from:");
                    _$d(l.origin)
                }
            }
        }, false)
    };
    this.broadcastInit(a);
    this.receiverInit(d, e)
};
stlib.json = {
    c: {
        "\b": "b",
        "\t": "t",
        "\n": "n",
        "\f": "f",
        "\r": "r",
        '"': '"',
        "\\": "\\",
        "/": "/"
    },
    d: function (a) {
        return a < 10 ? "0".concat(a) : a
    },
    e: function (c, f, e) {
        e = eval;
        delete eval;
        if (typeof eval === "undefined") {
            eval = e
        }
        f = eval("" + c);
        eval = e;
        return f
    },
    i: function (d, b, a) {
        return 1 * d.substr(b, a)
    },
    p: ["", "000", "00", "0", ""],
    rc: null,
    rd: /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}$/,
    rs: /(\x5c|\x2F|\x22|[\x0c-\x0d]|[\x08-\x0a])/g,
    rt: /^([0-9]+|[0-9]+[,\.][0-9]{1,3})$/,
    ru: /([\x00-\x07]|\x0b|[\x0e-\x1f])/g,
    s: function (a, b) {
        return "\\".concat(stlib.json.c[b])
    },
    u: function (a, b) {
        var e = b.charCodeAt(0).toString(16);
        return "\\u".concat(stlib.json.p[e.length], e)
    },
    v: function (b, a) {
        return stlib.json.types[typeof result](result) !== Function && (a.hasOwnProperty ? a.hasOwnProperty(b) : a.constructor.prototype[b] !== a[b])
    },
    types: {
        "boolean": function () {
            return Boolean
        },
        "function": function () {
            return Function
        },
        number: function () {
            return Number
        },
        object: function (a) {
            return a instanceof a.constructor ? a.constructor : null
        },
        string: function () {
            return String
        },
        "undefined": function () {
            return null
        }
    },
    $$: function (a) {
        function b(f, d) {
            d = f[a];
            delete f[a];
            try {
                stlib.json.e(f)
            } catch (e) {
                f[a] = d;
                return 1
            }
        }
        return b(Array) && b(Object)
    },
    encode: function () {
        var d = arguments.length ? arguments[0] : this,
            a, h;
        if (d === null) {
            a = "null"
        } else {
            if (d !== undefined && (h = stlib.json.types[typeof d](d))) {
                switch (h) {
                    case Array:
                        a = [];
                        for (var g = 0, e = 0, b = d.length; e < b; e++) {
                            if (d[e] !== undefined && (h = stlib.json.encode(d[e]))) {
                                a[g++] = h
                            }
                        }
                        a = "[".concat(a.join(","), "]");
                        break;
                    case Boolean:
                        a = String(d);
                        break;
                    case Date:
                        a = '"'.concat(d.getFullYear(), "-", stlib.json.d(d.getMonth() + 1), "-", stlib.json.d(d.getDate()), "T", stlib.json.d(d.getHours()), ":", stlib.json.d(d.getMinutes()), ":", stlib.json.d(d.getSeconds()), '"');
                        break;
                    case Function:
                        break;
                    case Number:
                        a = isFinite(d) ? String(d) : "null";
                        break;
                    case String:
                        a = '"'.concat(d.replace(stlib.json.rs, stlib.json.s).replace(stlib.json.ru, stlib.json.u), '"');
                        break;
                    default:
                        var g = 0,
                            f;
                        a = [];
                        for (f in d) {
                            if (d[f] !== undefined && (h = stlib.json.encode(d[f]))) {
                                a[g++] = '"'.concat(f.replace(stlib.json.rs, stlib.json.s).replace(stlib.json.ru, stlib.json.u), '":', h)
                            }
                        }
                        a = "{".concat(a.join(","), "}");
                        break
                }
            }
        }
        return a
    },
    decode: function (a) {
        if (typeof (a) == "string") {
            var d = null;
            try {
                if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                    d = window.JSON && window.JSON.parse ? window.JSON.parse(a) : (new Function("return " + a))();
                    return d
                } else {
                    return null
                }
            } catch (b) {}
        }
    }
};
try {
    stlib.json.rc = new RegExp('^("(\\\\.|[^"\\\\\\n\\r])*?"|[,:{}\\[\\]0-9.\\-+Eaeflnr-u \\n\\r\\t])+?$')
} catch (z) {
    stlib.json.rc = /^(true|false|null|\[.*\]|\{.*\}|".*"|\d+|\d+\.\d+)$/
}
stlib.logger = {
    loggerUrl: "https://l.sharethis.com/",
    l2LoggerUrl: "https://l2.sharethis.com/",
    productArray: new Array(),
    version: "",
    lang: "en",
    isFpEvent: false,
    constructParamString: function () {
        var b = stlib.data.pageInfo;
        var h = "";
        var g;
        for (g in b) {
            if (b[g] == null || b[g] === "" || b[g] == "ERROR") {
                continue
            }
            h += g + "=" + b[g] + "&"
        }
        b = stlib.data.shareInfo;
        for (g in b) {
            if (b[g] == null || b[g] === "" || b[g] == "ERROR") {
                continue
            }
            h += g + "=" + b[g] + "&"
        }
        h += "sop=false";
        var f = stlib.data.parseCookie("fpestid", document.cookie);
        if (f) {
            h += "&fpestid=" + f
        }
        try {
            var a = document.getElementsByTagName("meta");
            for (var j = 0; j < a.length; j++) {
                var d = a[j].getAttribute("property");
                if (d == null) {
                    d = a[j].getAttribute("name")
                }
                if (d == "twitter:description" || d == "og:description" || d == "description" || d == "Description") {
                    var l = encodeURIComponent(a[j].getAttribute("content"));
                    h += "&description=" + l;
                    break
                }
            }
        } catch (k) {}
        return h
    },
    ibl: function () {
        var e, g, j, d, b, f, a;
        b = document.referrer;
        if (b) {
            d = stlib.data.hostname(b) || "";
            if (stlib.data.protocol) {
                j = stlib.data.protocol(b) || "";
                if (j == "android-app:") {
                    return true
                }
            }
            e = ["aol", "bing", "bs.to", "facebook", "google", "yahoo", "yandex", document.location.hostname];
            for (f = 0, a = e.length; f < a; f++) {
                g = e[f];
                if (d.indexOf(g) > -1) {
                    return true
                }
            }
            var h = stlib.logger.loggerUrl + "log?event=ibl&url=" + b;
            stlib.logger.logByImage("ibl", h, null)
        }
        return true
    },
    obl: function (g) {
        var a, d, b;
        if ((g != null ? (b = g.target) != null ? b.tagName : void 0 : void 0) === "A") {
            a = g.target.getAttribute("href") || "";
            d = a.slice(0, a.indexOf(":"));
            if (a.slice(0, 4) === "http" && g.target.hostname !== document.location.hostname) {
                var f = stlib.logger.loggerUrl + "log?event=obl&url=" + a;
                stlib.logger.logByImage("obl", f, null)
            }
        }
        return true
    },
    getGDPRQueryString: function () {
        var b = stlib.data.get("gdpr_consent", "pageInfo");
        var d = encodeURIComponent(stlib.data.get("gdpr_domain", "pageInfo"));
        var a = stlib.data.get("gdpr_method", "pageInfo");
        var e = "";
        if (b) {
            e += "&gdpr_consent=" + b
        }
        if (d) {
            e += "&gdpr_domain=" + d
        }
        if (a) {
            e += "&gdpr_method=" + a
        }
        return e
    },
    loadPixelsAsync: function (b) {
        if (typeof (stlib.product) !== "undefined") {
            if ((stlib.product == "ecommerce") || (stlib.product == "dos2") || (stlib.product == "feather") || (stlib.product == "simple") || (stlib.product == "simpleshare") || (stlib.product == "simple-share-pro")) {
                return
            }
        }
        if (typeof (b) !== "undefined") {
            if (b.status === "true") {
                stlib.data.set("stid", b.stid, "pageInfo");
                var d = "https://t.sharethis.com/1/d/t.dhj?rnd=" + (new Date()).getTime() + "&cid=c010&dmn=" + window.location.hostname + stlib.logger.getGDPRQueryString();
                var a = document.createElement("script");
                a.async = 1;
                a.src = d;
                a.id = "pxscrpt";
                var e = document.getElementsByTagName("script")[0];
                e.parentNode.insertBefore(a, e)
            }
        }
    },
    logByImage: function (d, n, p) {
        var b = stlib.data.get("gdpr_consent", "pageInfo");
        var q = stlib.data.get("gdpr_domain", "pageInfo");
        if (b) {
            n += "&gdpr_consent=" + b
        }
        if (q) {
            n += "&gdpr_domain=" + q
        }
        var m = stlib.data.get("gdpr_method", "pageInfo");
        if (m) {
            n += "&gdpr_method=" + m
        }
        var f = stlib.data.get("usprivacy", "pageInfo");
        if (f) {
            n += "&usprivacy=" + f
        }
        var h = stlib.data.parseCookie("fpestid", document.cookie);
        if (h) {
            n += "&fpestid=" + h
        }
        try {
            var a = document.getElementsByTagName("meta");
            for (var j = 0; j < a.length; j++) {
                var g = a[j].getAttribute("property");
                if (g == null) {
                    g = a[j].getAttribute("name")
                }
                if (g == "twitter:description" || g == "og:description" || g == "description" || g == "Description") {
                    var o = encodeURIComponent(a[j].getAttribute("content"));
                    n += "&description=" + o;
                    break
                }
            }
        } catch (l) {}
        var k = new Image(1, 1);
        k.src = n + "&img_pview=true";
        k.onload = function () {
            return
        };
        if (d == "pview") {
            stlib.logger.loadPixelsAsync(undefined)
        } else {
            p ? p() : null
        }
    },
    log: function (g, f, h, d) {
        if (typeof (stlib.data.get("counter", "shareInfo")) != "undefined") {
            var e = 0;
            if (stlib.data.get("counter", "shareInfo")) {
                e = stlib.data.get("counter", "shareInfo")
            }
            stlib.data.set("ts" + new Date().getTime() + "." + e, "", "shareInfo");
            stlib.data.unset("counter", "shareInfo")
        } else {
            stlib.data.set("ts" + new Date().getTime(), "", "shareInfo")
        }
        if (g == "widget") {
            var b = "." + stlib.hash.hashDestination(stlib.data.shareInfo.destination);
            stlib.hash.updateDestination(b)
        }
        if (!f || (f != stlib.logger.loggerUrl && f != stlib.logger.l2LoggerUrl)) {
            f = stlib.logger.loggerUrl
        }
        var a = null;
        if (d) {
            a = g
        } else {
            a = (g == "pview") ? g : ((g == "debug") ? "cns" : "log")
        }
        stlib.data.getEUConsent(function (n) {
            if (g == "pview") {
                var m = f + a + "?event=" + g + "&version=" + stlib.logger.version + "&lang=" + stlib.logger.lang + "&" + stlib.logger.constructParamString()
            } else {
                var m = f + a + "?event=" + g + "&" + stlib.logger.constructParamString()
            }
            var j = (stlib.data.get("gdpr_consent", "pageInfo")) ? true : false;
            stlib.data.set("pview_had_consent", j, "pageInfo");
            try {
                var i = new XMLHttpRequest();
                var k;
                i.open("GET", m, true);
                i.withCredentials = true;
                i.timeout = 10000;
                i.onreadystatechange = function () {
                    if (this.readyState == this.DONE) {
                        try {
                            k = JSON.parse(i.responseText);
                            if (k.fpestid) {
                                stlib.data.writeCookie("fpestid", k.fpestid, k.fpestid_maxage)
                            }
                            if (g == "pview") {
                                stlib.logger.loadPixelsAsync(k)
                            } else {
                                h ? h() : null
                            }
                        } catch (o) {
                            stlib.logger.logByImage(g, m, h)
                        }
                    }
                };
                i.send()
            } catch (l) {
                stlib.logger.logByImage(g, m, h)
            }
        })
    },
    tcfapi_listener: function () {
        var b = Date.now();
        var a = setInterval(function () {
            if (window.__tcfapi) {
                try {
                    window.__tcfapi("addEventListener", 2, function (f) {
                        if (f && f.eventStatus == "useractioncomplete") {
                            stlib.data.set("gdpr_consent", f.tcString, "pageInfo");
                            var g = (f.isServiceSpecific) ? document.location.hostname : ".consensu.org";
                            stlib.data.set("gdpr_domain", g, "pageInfo");
                            stlib.data.set("gdpr_method", "api", "pageInfo");
                            var e = stlib.logger.loggerUrl;
                            e += "log?event=updated_consent";
                            e += "&pview_had_consent=" + stlib.data.get("pview_had_consent", "pageInfo");
                            stlib.logger.logByImage("updated_consent", e, null)
                        }
                    })
                } catch (d) {
                    clearInterval(a)
                }
            }
            if (Date.now() - b > 10000) {
                clearInterval(a)
            }
        }, 1000)
    }()
};
if (typeof (stlib.ajax) == "undefined") {
    stlib.ajax = {
        post: function (b, e, f, d) {
            var a = new XMLHttpRequest();
            if (f) {
                d ? (a.onreadystatechange = f) : null
            }
            a.open("POST", b, d);
            a.send(e);
            if (f) {
                !d ? f() : null
            }
        },
        get: function (b, f) {
            try {
                var a = new XMLHttpRequest();
                a.open("GET", b, true);
                a.withCredentials = true;
                a.onreadystatechange = function () {
                    if (this.readyState == this.HEADERS_RECEIVED) {
                        f ? f() : null
                    }
                };
                a.send()
            } catch (e) {
                var d = new Image(1, 1);
                d.src = b;
                d.onload = function () {
                    return
                };
                f ? f() : null
            }
        }
    }
}
stlib.logger.version = "buttons.js";
var customProduct = "widget";
if (typeof (stLight) == "undefined" && typeof (SHARETHIS) == "undefined") {
    var stWidgetVersion = false;
    if (typeof (switchTo5x) == "undefined") {
        stWidgetVersion = "4x"
    } else {
        if (switchTo5x == false) {
            stWidgetVersion = "4x"
        }
        if (switchTo5x == true) {
            stWidgetVersion = "5xa"
        }
    }
    stLight = new function () {
        this.version = false;
        this.publisher = null;
        this.sessionID_time = (new Date()).getTime().toString();
        this.sessionID_rand = Number(Math.random().toPrecision(5).toString().substr(2)).toString();
        this.sessionID = this.sessionID_time + "." + this.sessionID_rand;
        this.fpc = null;
        this.counter = 0;
        this.readyRun = false;
        this.meta = {
            hostname: document.location.host,
            location: document.location.pathname
        };
        this.loadedFromBar = false;
        this.clickCallBack = false
    };
    stLight.loadDefault = function () {
        if (typeof (customProduct) == "undefined") {
            this.product = "DOS2"
        } else {
            this.product = customProduct
        }
        this.source = "DOS2";
        this.version = "st_insights.js"
    };
    stLight.options = function (a) {
        this.loadDefault();
        if (a && a.publisher) {
            stLight.setPublisher(a.publisher)
        }
        if (a && a.refDomain) {
            stLight.setRefDomain(a.refDomain)
        }
        stlib.logger.productArray = [];
        if (a && a.product) {
            stLight.setProduct(a.product)
        } else {
            stLight.setProduct(stLight.product)
        }
        if (a && typeof (a.hashAddressBar) != "undefined") {
            stlib.hash.hashAddressBar = a.hashAddressBar
        }
        stlib.hash.doNotHash = stlib.hash.doNotCopy = false;
        if (a) {
            a.doNotCopy = a.doNotHash = false
        }
        stlib.stLightOptionsObj = a
    };
    stLight.onReady = function () {
        if (stLight.readyRun == true) {
            return false
        }
        stLight.loadFromScript();
        stLight.readyRun = true;
        stlib.data.init();
        stLight.fpc = stlib.data.get("fpc", "pageInfo");
        if (stLight.publisher == null) {
            if (typeof (window.console) !== "undefined") {
                try {} catch (a) {}
            }
        }
        stLight.setProduct(stLight.product);
        stlib.logger.lang = "en"
    };
    stLight.log = function (a) {
        stlib.data.resetShareData();
        stlib.data.setSource(stLight.getSource());
        stlib.data.set("url", document.location.href, "shareInfo");
        stlib.data.set("title", document.title, "shareInfo");
        stlib.data.set("counter", stLight.counter++, "shareInfo");
        stlib.logger.log(a)
    };
    if (window.document.readyState == "completed") {
        stLight.onReady()
    } else {
        if (typeof (window.addEventListener) != "undefined") {
            window.addEventListener("load", stLight.onReady, false)
        } else {
            if (typeof (document.addEventListener) != "undefined") {
                document.addEventListener("load", stLight.onReady, false)
            } else {
                if (typeof window.attachEvent != "undefined") {
                    window.attachEvent("onload", stLight.onReady)
                }
            }
        }
    }
    stLight.setPublisher = function (a) {
        stlib.data.setPublisher(a);
        stLight.publisher = a
    };
    stLight.setRefDomain = function (a) {
        stlib.data.setRefDomain(a)
    };
    stLight.setProduct = function (a) {
        this.product = a;
        stlib.data.set("product", a, "pageInfo")
    };
    stLight.getProduct = function () {
        return this.product
    };
    stLight.getSource = function () {
        var a = "share4x";
        if (stWidgetVersion == "5xa") {
            a = "share5x"
        }
        return a
    }
}
stLight.getUrlSearchParam = function () {
    var a = window.location.search.substring(1);
    return a.split("&")
};
stLight.getUrlQueryParams = function (a) {
    var d = {};
    var b = a.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (e, f, g) {
        d[f] = g
    });
    return d
};
stLight.getScriptSrcParams = function (b) {
    var a = document.getElementById(b);
    if (a) {
        return stLight.getUrlQueryParams(a.src)
    }
};
stLight.setParams = function (a) {
    if (a) {
        if (a.refdomain) {
            stLight.setRefDomain(a.refdomain)
        }
        if (a.publisher) {
            stLight.setPublisher(a.publisher)
        }
        if (a.product) {
            stLight.setProduct(a.product)
        }
    }
};
stLight.loadFromScript = function () {
    var a = stLight.getScriptSrcParams("st_insights_js");
    stLight.setParams(a)
};
stLight.loadFromWindowLocation = function () {
    var a = stLight.getUrlSearchParam();
    stLight.setParams(a)
};
stLight.onDomContentLoaded = function () {
    stLight.onReady()
};
stLight.domReady = function () {
    stLight.onReady()
};
st_showing = false;
stLight.clickSubscribers = [];
stLight.nonClickSubscribers = [];
if (window.document.readyState == "completed") {
    stLight.domReady()
} else {
    if (typeof (window.addEventListener) != "undefined") {
        window.addEventListener("load", stLight.domReady, false)
    } else {
        if (typeof (document.addEventListener) != "undefined") {
            document.addEventListener("load", stLight.domReady, false)
        } else {
            if (typeof window.attachEvent != "undefined") {
                window.attachEvent("onload", stLight.domReady)
            }
        }
    }
}
if (typeof (__st_loadLate) == "undefined") {
    if (typeof (window.addEventListener) != "undefined") {
        window.addEventListener("DOMContentLoaded", stLight.onDomContentLoaded, false)
    } else {
        if (typeof (document.addEventListener) != "undefined") {
            document.addEventListener("DOMContentLoaded", stLight.onDomContentLoaded, false)
        }
    }
} else {
    if (typeof (window.addEventListener) != "undefined") {
        window.addEventListener("DOMContentLoaded", stLight.onDomContentLoadedLazy, false)
    } else {
        if (typeof (document.addEventListener) != "undefined") {
            document.addEventListener("DOMContentLoaded", stLight.onDomContentLoadedLazy, false)
        }
    }
}
if (document.readyState == "complete" && stLight.readyRun == false) {
    stLight.domReady()
}
var stButtons = stButtons || {};
stButtons.getCount = function (d, a, e) {
    var b = false;
    if (e && e !== null) {
        while (e.childNodes.length >= 1) {
            try {
                e.removeChild(e.firstChild)
            } catch (f) {}
        }
    }
    ShareThisEvent.listen("on_async_buttons_load", function () {
        stButtons = async_buttons.stButtons;
        stButtons.cbQueue.push({
            url: d,
            service: a,
            element: e
        });
        stButtons.getCountsFromService(d, a, e)
    }, false)
};
stButtons.locateElements = function (a) {
    ShareThisEvent.listen("on_async_buttons_load", function () {
        async_buttons.stButtons.locateElements(a)
    }, false)
};
var stWidget = stWidget || {};
if (typeof (stWidget.readyRun) == "undefined") {
    stWidget.addEntry = function (a) {
        ShareThisEvent.listen("on_async_buttons_load", function () {
            stWidget = async_buttons.stWidget;
            stWidget.addEntry(a)
        }, false)
    }
}
stLight.subscribe = function (b, a) {
    ShareThisEvent.listen("on_async_buttons_load", function () {
        stButtonsLib.subscribe(b, a)
    }, false)
};
if (window.__sharethis__) {
    stlib.setProduct(window.__sharethis__.product);
    stlib.setPublisher(window.__sharethis__.property)
}
var sop_pview_logged = typeof __stdos__ !== "undefined" && __stdos__ !== null && __stdos__.onscriptload;
if (!sop_pview_logged && !stlib.onscriptload && document.URL.indexOf("edge.sharethis.com") == -1) {
    stlib.data.init();
    stlib.onscriptload = true;
    stlib.logger.log("pview", null)
}
stlib.logger.ibl();
stlib.data.bindEvent(document, "click", stlib.logger.obl);
stlib.scriptLoader = {
    loadJavascript: function (b, d) {
        var a = stlib.scriptLoader;
        a.head = document.getElementsByTagName("head")[0];
        a.scriptSrc = b;
        a.script = document.createElement("script");
        a.script.setAttribute("type", "text/javascript");
        a.script.setAttribute("src", a.scriptSrc);
        a.script.async = true;
        if (window.attachEvent && document.all) {
            a.script.onreadystatechange = function () {
                if (this.readyState == "complete" || this.readyState == "loaded") {
                    d()
                }
            }
        } else {
            a.script.onload = d
        }
        a.s = document.getElementsByTagName("script")[0];
        a.s.parentNode.insertBefore(a.script, a.s)
    },
    loadCSS: function (b, e) {
        _$d_();
        _$d1("Loading CSS: " + b);
        var a = stlib.scriptLoader;
        var d;
        a.head = document.getElementsByTagName("head")[0];
        a.cssSrc = b;
        a.css = document.createElement("link");
        a.css.setAttribute("rel", "stylesheet");
        a.css.setAttribute("type", "text/css");
        a.css.setAttribute("href", b);
        a.css.setAttribute("id", b);
        setTimeout(function () {
            e();
            if (!document.getElementById(b)) {
                d = setInterval(function () {
                    if (document.getElementById(b)) {
                        clearInterval(d);
                        e()
                    }
                }, 100)
            }
        }, 100);
        a.head.appendChild(a.css)
    }
};
