!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 1284)
}([function(e, t, n) {
    "use strict";
    var r = n(29)
      , o = n(319)
      , i = n(155)
      , a = n(213)
      , c = function() {
        function e(e) {
            this._isScalar = !1,
            e && (this._subscribe = e)
        }
        return e.prototype.lift = function(t) {
            var n = new e;
            return n.source = this,
            n.operator = t,
            n
        }
        ,
        e.prototype.subscribe = function(e, t, n) {
            var r = this.operator
              , i = o.toSubscriber(e, t, n);
            if (r ? r.call(i, this.source) : i.add(this.source || !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)),
            i.syncErrorThrowable && (i.syncErrorThrowable = !1,
            i.syncErrorThrown))
                throw i.syncErrorValue;
            return i
        }
        ,
        e.prototype._trySubscribe = function(e) {
            try {
                return this._subscribe(e)
            } catch (t) {
                e.syncErrorThrown = !0,
                e.syncErrorValue = t,
                e.error(t)
            }
        }
        ,
        e.prototype.forEach = function(e, t) {
            var n = this;
            if (t || (r.root.Rx && r.root.Rx.config && r.root.Rx.config.Promise ? t = r.root.Rx.config.Promise : r.root.Promise && (t = r.root.Promise)),
            !t)
                throw new Error("no Promise impl found");
            return new t(function(t, r) {
                var o;
                o = n.subscribe(function(t) {
                    if (o)
                        try {
                            e(t)
                        } catch (e) {
                            r(e),
                            o.unsubscribe()
                        }
                    else
                        e(t)
                }, r, t)
            }
            )
        }
        ,
        e.prototype._subscribe = function(e) {
            return this.source.subscribe(e)
        }
        ,
        e.prototype[i.observable] = function() {
            return this
        }
        ,
        e.prototype.pipe = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t - 0] = arguments[t];
            return 0 === e.length ? this : a.pipeFromArray(e)(this)
        }
        ,
        e.prototype.toPromise = function(e) {
            var t = this;
            if (e || (r.root.Rx && r.root.Rx.config && r.root.Rx.config.Promise ? e = r.root.Rx.config.Promise : r.root.Promise && (e = r.root.Promise)),
            !e)
                throw new Error("no Promise impl found");
            return new e(function(e, n) {
                var r;
                t.subscribe(function(e) {
                    return r = e
                }, function(e) {
                    return n(e)
                }, function() {
                    return e(r)
                })
            }
            )
        }
        ,
        e.create = function(t) {
            return new e(t)
        }
        ,
        e
    }();
    t.Observable = c
}
, function(e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    ), i = this && this.__assign || function() {
        return (i = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }
    , a = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    }
    , c = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
    , s = this && this.__read || function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
    , u = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(s(arguments[t]));
        return e
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = n(204);
    t.assert = l.assert,
    t.assertNonNull = l.assertNonNull,
    t.AssertionError = l.AssertionError;
    var f = n(71);
    t.SafePromise = f.SafePromise;
    var p = n(205);
    t.CircularBuffer = p.CircularBuffer;
    var d = n(71)
      , h = n(206);
    t.Arr = h;
    var g = n(207);
    t.Obj = g;
    var m = n(208);
    t.MapEx = m;
    var v = n(86);
    t.Ms = v;
    var b = function() {
        function e(e) {
            this._getFallbackValue = e
        }
        return e.prototype.init = function(e) {
            if (void 0 !== this._value)
                throw new Error("Global value already initialized.");
            this._value = e
        }
        ,
        e.prototype.get = function() {
            if (void 0 === this._value) {
                if (void 0 === this._getFallbackValue)
                    throw new Error("Global value not initialized and no fallback value provided.");
                this._value = this._getFallbackValue()
            }
            return this._value
        }
        ,
        e
    }();
    function y(e, t) {
        return e.some(function(e) {
            return e === t
        }) ? t : void 0
    }
    t.Global = b,
    t.optionalStringUnion = y,
    t.assertStringUnion = function(e, t, n) {
        var r = y(e, t);
        if (void 0 !== r)
            return r;
        throw new TypeError('Unrecognized string union value "' + t + '"' + (n ? " for " + n : ""))
    }
    ;
    var _ = function(e) {
        function t(t) {
            return e.call(this, "Matching not exhaustive" + (t ? ": unexpected value " + t : "")) || this
        }
        return o(t, e),
        t
    }(Error);
    function w(e) {
        var t = parseInt(e, 10);
        return isNaN(t) ? void 0 : t
    }
    t.MatchingNotExhaustiveError = _,
    t.assertNever = function(e) {
        throw new _(e)
    }
    ,
    t.optionalIntString = w,
    t.assertIntString = function(e, t) {
        var n = w(e);
        if (void 0 !== n)
            return n;
        throw new Error("Expected a number string, got '" + e + "'" + (void 0 !== t ? " for " + t : ""))
    }
    ,
    t.try_ = function(e, t) {
        try {
            return e()
        } catch (e) {
            return t(e)
        }
    }
    ,
    t.noOp = function() {}
    ,
    t.callOnce = function(e) {
        var t, n = !1;
        return function() {
            for (var r = [], o = 0; o < arguments.length; o++)
                r[o] = arguments[o];
            return n || (n = !0,
            t = e.apply(void 0, u(r))),
            t
        }
    }
    ,
    t.throttle = function(e, t) {
        var n, r, o = !0;
        function i(e) {
            return o && (o = !1,
            r = d.SafePromise.createCompletionSource(),
            setTimeout(function() {
                try {
                    r.resolve(t())
                } catch (e) {
                    r.reject(e)
                } finally {
                    o = !0
                }
            }, e)),
            r.promise
        }
        return function() {
            var t = n;
            return n = Date.now(),
            i(void 0 === t || n - t >= e ? 0 : e - (n - t))
        }
    }
    ,
    t.retry = function e(t, n, r) {
        var o = r();
        return t > 0 ? o.catch(function(o) {
            return new Promise(function(e, t) {
                return setTimeout(e, n)
            }
            ).then(function(o) {
                return e(t - 1, n, r)
            })
        }) : o
    }
    ,
    t.conditionalRetry = function(e, t, n, r) {
        return void 0 === n && (n = 0),
        void 0 === r && (r = function(e) {
            return !0
        }
        ),
        a(this, void 0, void 0, function() {
            var o, i, a, s, u;
            return c(this, function(c) {
                switch (c.label) {
                case 0:
                    o = t,
                    i = [],
                    c.label = 1;
                case 1:
                    if (!(o > 0))
                        return [3, 8];
                    a = void 0,
                    c.label = 2;
                case 2:
                    return c.trys.push([2, 4, , 5]),
                    o--,
                    s = {},
                    [4, e()];
                case 3:
                    return s.val = c.sent(),
                    s.hasError = !1,
                    a = s,
                    [3, 5];
                case 4:
                    return u = c.sent(),
                    a = {
                        hasError: !0,
                        message: u && u.message || u || ""
                    },
                    [3, 5];
                case 5:
                    if (a.hasError)
                        i.push(a.message);
                    else if (r(a.val))
                        return [2, a.val];
                    return o > 0 ? [4, d.SafePromise.delay(n)] : [3, 7];
                case 6:
                    c.sent(),
                    c.label = 7;
                case 7:
                    return [3, 1];
                case 8:
                    throw new Error("Condition was not met after " + t + " retries. Errors: '" + i.join(";") + "'")
                }
            })
        })
    }
    ;
    var E = function() {
        function e(e) {
            this._factory = e,
            this._hasValue = !1
        }
        return e.prototype.get = function() {
            return this._hasValue || (this._value = this._factory(),
            this._hasValue = !0),
            this._value
        }
        ,
        e
    }();
    t.lazy = function(e) {
        return new E(e)
    }
    ,
    function(e) {
        function n() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        }
        (t.Guid || (t.Guid = {})).create = function() {
            return n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n()
        }
    }(),
    t.requestIdleCallback = void 0 !== window.requestIdleCallback ? window.requestIdleCallback : function(e) {
        var t = Date.now();
        return setTimeout(function() {
            e({
                didTimeout: !1,
                timeRemaining: function() {
                    return Math.max(0, 50 - Date.now() + t)
                }
            })
        }, 1)
    }
    ,
    t.withDefaults = function(e, t) {
        var n = i({}, e);
        for (var r in t) {
            var o = t[r];
            void 0 !== o && (n[r] = o)
        }
        return n
    }
}
, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(209);
    t.SimpleLogger = r.SimpleLogger,
    t.Logger = r.Logger;
    var o = n(87);
    t.FunctionLogWriter = o.FunctionLogWriter;
    var i = n(211);
    t.FelogLogWriter = i.FelogLogWriter;
    var a = n(106);
    t.logLevelFilter = a.logLevelFilter;
    var c = n(105);
    t.LogConfig = c.LogConfig
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    }
      , o = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
      , i = this && this.__read || function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
      , a = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(i(arguments[t]));
        return e
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = n(140)
      , s = n(94)
      , u = n(18)
      , l = n(18);
    function f(e, t) {
        var n = f.items = f.items || {}
          , r = n[e];
        if (r || t) {
            if (r && !t)
                return clearTimeout(r),
                void delete n[e];
            !function() {
                function r() {
                    o(),
                    e()
                }
                function o() {
                    var o = setTimeout(r, t);
                    n[e] = o
                }
                o()
            }()
        }
    }
    function p() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
    }
    function d() {}
    function h(e) {
        return new Promise(function(t) {
            return setTimeout(t, e)
        }
        )
    }
    t.isTestsMode = l.isTestsMode,
    t.getBrowser = l.getBrowser,
    t.isBg = l.isBg,
    t.isBgOrPopup = l.isBgOrPopup,
    t.isChrome = l.isChrome,
    t.isFF = l.isFF,
    t.isPopup = l.isPopup,
    t.isSafari = l.isSafari,
    t.isEdge = l.isEdge,
    t.isWindows = l.isWindows,
    t.isSafariApp = l.isSafariApp,
    t.chromeBgError = function() {
        return window.chrome && window.chrome.runtime && window.chrome.runtime.lastError
    }
    ,
    t.isFunction = function(e) {
        return !!(e && e.constructor && e.call && e.apply)
    }
    ,
    t.interval = f,
    (f = t.interval || (t.interval = {})).items = {},
    t.cancelInterval = function(e) {
        f(e)
    }
    ,
    t.guid = function() {
        return p() + p() + "-" + p() + "-" + p() + "-" + p() + "-" + p() + p() + p()
    }
    ,
    t.bytes = function(e) {
        for (var t, n, r = 0, o = e.length, i = 0; i < o; i++)
            (t = e.charCodeAt(i)) >= 55296 && t < 57344 && t < 56320 && i + 1 < o && (n = e.charCodeAt(i + 1)) >= 56320 && n < 57344 ? (r += 4,
            i++) : r += t < 128 ? 1 : t < 2048 ? 2 : 3;
        return r
    }
    ,
    t.chunks = function(e, t) {
        for (var n = t, r = 0, o = []; e[n]; )
            if (" " === e[n++])
                o.push(e.substring(r, n)),
                r = n,
                n += t;
            else {
                var i = n;
                do {
                    if (" " === e.substring(i - 1, i)) {
                        o.push(e.substring(r, i)),
                        r = i,
                        n = i + t;
                        break
                    }
                    i--
                } while (i > r)
            }
        return o.push(e.substr(r)),
        o
    }
    ,
    t._f = d,
    t._F = function() {
        return !0
    }
    ,
    t.isGmail = function(e) {
        if (e.location) {
            var t = "mail.google.com" == e.location.host
              , n = e.querySelector("iframe#js_frame") && e.querySelector("iframe#sound_frame");
            return t || n
        }
    }
    ,
    t.isValidEmail = function(e) {
        return /^[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+@[-!#$%&\'*+\\/0-9=?A-Z^_`a-z{|}~]+\.[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+$/.test(e)
    }
    ,
    t.formatNumber = function(e) {
        return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    ,
    t.declension = function(e, t) {
        return t[1 == e ? 0 : 1]
    }
    ,
    t.stub = function(e) {
        return c(e, function(e, t) {
            return e[t] = d
        })
    }
    ,
    t.memoize = function(e, t, n) {
        var r = {};
        return function() {
            var o = "_memoize_" + (t ? t.apply(this, arguments) : arguments[0]);
            return window.hasOwnProperty.call(r, o) ? r[o] : (n && setTimeout(function() {
                delete r[o]
            }, n),
            r[o] = e.apply(this, arguments))
        }
    }
    ,
    t.syncWait = function(e, t) {
        return Object.keys(t).reduce(function(n, r) {
            var o;
            return Object.assign({}, n, ((o = {})[r] = function() {
                for (var n = [], o = 0; o < arguments.length; o++)
                    n[o] = arguments[o];
                return e.then(function() {
                    return t[r].apply(t, a(n))
                })
            }
            ,
            o))
        }, {})
    }
    ,
    t.promisify = function(e) {
        return new Promise(function(t) {
            return e(t)
        }
        )
    }
    ,
    t.getRandomIntInclusive = function(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    }
    ,
    t.delay = h;
    var g = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    t.formatDate = function(e) {
        if (e) {
            var t = new Date(e);
            if ("Invalid Date" !== t.toString())
                return g[t.getMonth()] + " " + t.getDate() + ", " + t.getFullYear()
        }
    }
    ,
    t.createClass = function(e) {
        var t = function() {};
        return t.prototype = e(),
        t
    }
    ,
    t.versionComparator = function(e, t) {
        function n(e) {
            return e.split(".").map(function(e) {
                return Number(e) || 0
            })
        }
        void 0 === e && (e = ""),
        void 0 === t && (t = "");
        var r = n(e)
          , o = n(t)
          , i = Array(Math.abs(r.length - o.length)).fill(0);
        if (r.length > o.length ? o.push.apply(o, a(i)) : r.push.apply(r, a(i)),
        r.every(function(e, t) {
            return e === o[t]
        }))
            return 0;
        for (var c = 0, s = r.length; c < s; c++) {
            if (r[c] > o[c])
                return 1;
            if (r[c] < o[c])
                return -1
        }
        return -1
    }
    ,
    t.isBgAlive = function() {
        return r(this, void 0, void 0, function() {
            return o(this, function(e) {
                switch (e.label) {
                case 0:
                    if (!u.isChrome() && !u.isFF())
                        return [2, null];
                    e.label = 1;
                case 1:
                    return e.trys.push([1, 3, , 4]),
                    [4, Promise.race([new Promise(function(e) {
                        return window.chrome.runtime.sendMessage("ping", e)
                    }
                    ), h(1e4).then(function(e) {
                        return "timeouted"
                    })])];
                case 2:
                    return [2, e.sent()];
                case 3:
                    return e.sent(),
                    [2, "orphaned"];
                case 4:
                    return [2]
                }
            })
        })
    }
    ,
    t.asyncCall = function(e, t) {
        void 0 === t && (t = 10),
        setTimeout(e, t)
    }
    ,
    t.createChannel = function(e) {
        var t = (void 0 === e ? {} : e).buffered
          , n = void 0 === t || t
          , r = []
          , o = [];
        return {
            take: function() {
                return r.length ? Promise.resolve(r.shift()) : new Promise(function(e) {
                    return o.push(e)
                }
                )
            },
            put: function(e) {
                o.length > 0 ? o.shift()(e) : n ? r.push(e) : r[0] = e
            }
        }
    }
    ,
    t.normalizedHashCode = function(e, t) {
        if (void 0 === t && (t = 100),
        !e)
            return NaN;
        var n = s.createHash("superfasthash");
        return parseInt(n.hash(e), 16) % t
    }
    ,
    t.keyCode = function(e) {
        return e.which || e.charCode || e.keyCode || 0
    }
    ,
    t.NBSP_RE = new RegExp(String.fromCharCode(160),"g");
    var m = String.fromCharCode(160)
      , v = /\n/g
      , b = /\s$/g
      , y = new RegExp("\n" + String.fromCharCode(32),"g");
    t.br = function(e, t) {
        return e = e.replace(y, "<br>" + m).replace(v, "<br>"),
        t && (e = e.replace(b, m)),
        e
    }
    ,
    t.trimLeft = function(e) {
        return e.replace(/^\s+/, "")
    }
    ,
    t.trimRight = function(e) {
        return e.replace(/\s+$/, "")
    }
    ,
    t.SECOND = 1e3,
    t.MINUTE = 60 * t.SECOND,
    t.HOUR = 60 * t.MINUTE,
    t.DAY = 24 * t.HOUR,
    t.ESC_KEY = 27,
    t.ENTER_KEY = 13,
    t.BACKSPACE_KEY = 8,
    t.SPACE_KEY = 32,
    t.pastDays = function(e) {
        return Math.round(Math.abs(+new Date - +new Date(e)) / t.DAY)
    }
    ,
    t.getNextPingDate = function() {
        var e = new Date;
        return e.getHours() > 2 && e.setDate(e.getDate() + 1),
        e.setHours(3),
        e.setMinutes(Math.floor(60 * Math.random())),
        e.getTime()
    }
    ,
    t.escapeRegExp = function(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
    }
}
, , function(e, t) {
    var n = Array.isArray;
    e.exports = n
}
, , function(e, t) {
    e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function(e, t) {
        for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n]);
        function r() {
            this.constructor = e
        }
        e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
        new r)
    }
      , o = n(97)
      , i = n(30)
      , a = n(154)
      , c = n(109)
      , s = function(e) {
        function t(t, n, r) {
            switch (e.call(this),
            this.syncErrorValue = null,
            this.syncErrorThrown = !1,
            this.syncErrorThrowable = !1,
            this.isStopped = !1,
            arguments.length) {
            case 0:
                this.destination = a.empty;
                break;
            case 1:
                if (!t) {
                    this.destination = a.empty;
                    break
                }
                if ("object" == typeof t) {
                    if ((i = t)instanceof s || "syncErrorThrowable"in i && i[c.rxSubscriber]) {
                        var o = t[c.rxSubscriber]();
                        this.syncErrorThrowable = o.syncErrorThrowable,
                        this.destination = o,
                        o.add(this)
                    } else
                        this.syncErrorThrowable = !0,
                        this.destination = new u(this,t);
                    break
                }
            default:
                this.syncErrorThrowable = !0,
                this.destination = new u(this,t,n,r)
            }
            var i
        }
        return r(t, e),
        t.prototype[c.rxSubscriber] = function() {
            return this
        }
        ,
        t.create = function(e, n, r) {
            var o = new t(e,n,r);
            return o.syncErrorThrowable = !1,
            o
        }
        ,
        t.prototype.next = function(e) {
            this.isStopped || this._next(e)
        }
        ,
        t.prototype.error = function(e) {
            this.isStopped || (this.isStopped = !0,
            this._error(e))
        }
        ,
        t.prototype.complete = function() {
            this.isStopped || (this.isStopped = !0,
            this._complete())
        }
        ,
        t.prototype.unsubscribe = function() {
            this.closed || (this.isStopped = !0,
            e.prototype.unsubscribe.call(this))
        }
        ,
        t.prototype._next = function(e) {
            this.destination.next(e)
        }
        ,
        t.prototype._error = function(e) {
            this.destination.error(e),
            this.unsubscribe()
        }
        ,
        t.prototype._complete = function() {
            this.destination.complete(),
            this.unsubscribe()
        }
        ,
        t.prototype._unsubscribeAndRecycle = function() {
            var e = this._parent
              , t = this._parents;
            return this._parent = null,
            this._parents = null,
            this.unsubscribe(),
            this.closed = !1,
            this.isStopped = !1,
            this._parent = e,
            this._parents = t,
            this
        }
        ,
        t
    }(i.Subscription);
    t.Subscriber = s;
    var u = function(e) {
        function t(t, n, r, i) {
            var c;
            e.call(this),
            this._parentSubscriber = t;
            var s = this;
            o.isFunction(n) ? c = n : n && (c = n.next,
            r = n.error,
            i = n.complete,
            n !== a.empty && (s = Object.create(n),
            o.isFunction(s.unsubscribe) && this.add(s.unsubscribe.bind(s)),
            s.unsubscribe = this.unsubscribe.bind(this))),
            this._context = s,
            this._next = c,
            this._error = r,
            this._complete = i
        }
        return r(t, e),
        t.prototype.next = function(e) {
            if (!this.isStopped && this._next) {
                var t = this._parentSubscriber;
                t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e)
            }
        }
        ,
        t.prototype.error = function(e) {
            if (!this.isStopped) {
                var t = this._parentSubscriber;
                if (this._error)
                    t.syncErrorThrowable ? (this.__tryOrSetError(t, this._error, e),
                    this.unsubscribe()) : (this.__tryOrUnsub(this._error, e),
                    this.unsubscribe());
                else {
                    if (!t.syncErrorThrowable)
                        throw this.unsubscribe(),
                        e;
                    t.syncErrorValue = e,
                    t.syncErrorThrown = !0,
                    this.unsubscribe()
                }
            }
        }
        ,
        t.prototype.complete = function() {
            var e = this;
            if (!this.isStopped) {
                var t = this._parentSubscriber;
                if (this._complete) {
                    var n = function() {
                        return e._complete.call(e._context)
                    };
                    t.syncErrorThrowable ? (this.__tryOrSetError(t, n),
                    this.unsubscribe()) : (this.__tryOrUnsub(n),
                    this.unsubscribe())
                } else
                    this.unsubscribe()
            }
        }
        ,
        t.prototype.__tryOrUnsub = function(e, t) {
            try {
                e.call(this._context, t)
            } catch (e) {
                throw this.unsubscribe(),
                e
            }
        }
        ,
        t.prototype.__tryOrSetError = function(e, t, n) {
            try {
                t.call(this._context, n)
            } catch (t) {
                return e.syncErrorValue = t,
                e.syncErrorThrown = !0,
                !0
            }
            return !1
        }
        ,
        t.prototype._unsubscribe = function() {
            var e = this._parentSubscriber;
            this._context = null,
            this._parentSubscriber = null,
            e.unsubscribe()
        }
        ,
        t
    }(s)
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        for (var n in e)
            t.hasOwnProperty(n) || (t[n] = e[n])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    r(n(101)),
    r(n(104)),
    r(n(43)),
    r(n(103)),
    r(n(107)),
    r(n(102)),
    r(n(108));
    var o = n(108)
      , i = n(43)
      , a = n(1)
      , c = n(3).Logger.create("config")
      , s = new a.Global(function() {
        c.warn("Global config not initialized -- using fall back value.");
        var e = a.assertNonNull(i.TargetBrowser.detect(window), "runtime-detected browser type")
          , t = o.MainConfig.create(e, i.TargetContext.detect(window, e), o.ProcessEnv.fromBrowserify());
        return window.GR_CFG = t,
        t
    }
    );
    t.getGlobal = function() {
        return s.get()
    }
    ,
    t.initGlobal = function(e, t, n, r) {
        s.init(o.MainConfig.create(e, t, n || o.ProcessEnv.fromBrowserify(), r)),
        window.GR_CFG = s.get()
    }
}
, function(e, t, n) {
    var r = n(113)
      , o = "object" == typeof self && self && self.Object === Object && self
      , i = r || o || Function("return this")();
    e.exports = i
}
, , function(e, t, n) {
    "use strict";
    (function(e) {
        var r = this && this.__values || function(e) {
            var t = "function" == typeof Symbol && e[Symbol.iterator]
              , n = 0;
            return t ? t.call(e) : {
                next: function() {
                    return e && n >= e.length && (e = void 0),
                    {
                        value: e && e[n++],
                        done: !e
                    }
                }
            }
        }
          , o = this && this.__read || function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var r, o, i = n.call(e), a = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                    a.push(r.value)
            } catch (e) {
                o = {
                    error: e
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }
          , i = this && this.__spread || function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e = e.concat(o(arguments[t]));
            return e
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, c = n(288), s = n(25), u = n(4), l = n(162), f = n(56), p = n(1);
        function d() {
            if (null != a)
                return a;
            var t = (e && e.env,
            (u.isBg() ? f.getBackgoundPageExtensionApi() : f.getContentScriptExtensionApi()).message);
            return a = t,
            t
        }
        var h = s({})
          , g = {};
        function m(e, n) {
            if ("__bgerror" !== e) {
                var o = g[e] = g[e] || [];
                if (o.push(n),
                1 === o.length)
                    try {
                        d().listen(e, function() {
                            for (var e, t, n = [], a = 0; a < arguments.length; a++)
                                n[a] = arguments[a];
                            try {
                                for (var c = r(o), s = c.next(); !s.done; s = c.next()) {
                                    s.value.apply(void 0, i(n))
                                }
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    s && !s.done && (t = c.return) && t.call(c)
                                } finally {
                                    if (e)
                                        throw e.error
                                }
                            }
                        })
                    } catch (e) {
                        t.emitError(e)
                    }
            } else
                h.on("__bgerror", n)
        }
        function v(e, t) {
            if ("__bgerror" !== e) {
                var n = g[e];
                if (n) {
                    var r = n.indexOf(t);
                    -1 !== r && n.splice(r, 1),
                    0 === n.length && delete g[e]
                }
            } else
                h.off("__bgerror", t)
        }
        t.onBackgroundPortReconnect = function(e) {
            var t = d();
            "content-script-message-api" === t.kind && t.onBackgroundPortReconnect && t.onBackgroundPortReconnect(e)
        }
        ,
        t.emitError = c(function(e) {
            return h.emit("__bgerror", e)
        }, 1e3),
        u.isBg() && l.listen(document, "grammarly:offline", function() {
            return t.emitError("proxy dead")
        }, void 0),
        t.one = function(e, t) {
            m(e, function n() {
                for (var r = [], o = 0; o < arguments.length; o++)
                    r[o] = arguments[o];
                v(e, n),
                t.apply(this, r)
            })
        }
        ,
        t.on = m,
        t.off = v,
        t.emitTabs = function(e) {
            try {
                var n = d();
                switch (n.kind) {
                case "background-message-api":
                    n.broadcast(e, {});
                    break;
                default:
                    throw new Error("emitTabs can be used only on background")
                }
            } catch (e) {
                t.emitError(e)
            }
        }
        ,
        t.emitTo = function(e, n, r, o, i, a) {
            void 0 === r && (r = {}),
            void 0 === o && (o = p.noOp),
            void 0 === i && (i = p.noOp);
            try {
                if (!e)
                    throw TypeError("emitTo can't be used without destination point");
                var c = d();
                switch (c.kind) {
                case "background-message-api":
                    c.sendTo(e, n, r, o, i, a);
                    break;
                default:
                    throw new Error("emitTo can be used only on background")
                }
            } catch (e) {
                t.emitError(e)
            }
        }
        ,
        t.emitFocusedTab = function(e, n) {
            try {
                d().toFocused(e, n)
            } catch (e) {
                t.emitError(e)
            }
        }
        ,
        t.emitBackground = function(e, n, r, o) {
            try {
                var i = d();
                switch (i.kind) {
                case "content-script-message-api":
                    i.broadcastBackground(e, n, r, o);
                    break;
                default:
                    throw new Error("emitBackground can be used only in content script")
                }
            } catch (e) {
                t.emitError(e)
            }
        }
        ,
        t.promiseBackground = function(e, n, r) {
            void 0 === n && (n = {}),
            void 0 === r && (r = 1e4);
            var o = new Promise(function(r, o) {
                try {
                    var i = d();
                    switch (i.kind) {
                    case "content-script-message-api":
                        i.broadcastBackground(e, n, r, o);
                        break;
                    default:
                        throw new Error("promiseBackground can be used only on client scripts")
                    }
                } catch (e) {
                    o(e),
                    t.emitError(e)
                }
            }
            );
            return Promise.race([o, u.delay(r).then(function() {
                throw new Error("Request to bg page (" + a + ") rejected by timeout")
            })])
        }
    }
    ).call(t, n(69))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(127);
    t.call = r.call,
    t.getLog = r.getLog,
    t.logCall = r.logCall;
    var o = n(149);
    t.felog = o.felog
}
, function(e, t) {
    e.exports = function(e) {
        return null != e && "object" == typeof e
    }
}
, , function(e, t, n) {
    "use strict";
    var r = this && this.__read || function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
      , o = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(r(arguments[t]));
        return e
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(10)
      , a = n(18);
    t.isTestsMode = a.isTestsMode,
    t.getVersion = a.getVersion,
    t.getUuid = a.getUuid,
    t.ENV = a.ENV,
    t.URLS = a.URLS,
    t.GRAMMARLY_DOMAIN = a.GRAMMARLY_DOMAIN,
    t.appName = a.appName,
    t.gnarAppName = a.gnarAppName;
    var c = "data-enable-grammarly";
    t.GNAR = i.getGlobal().appConfig.gnar,
    t.news = ["The G logo gets out of the way when you're typing", "Switch between American, British, Australian, and Canadian English", "Quickly disable checking in certain types of text fields", "A fully redesigned and improved interface"],
    t.userFields = ["id", "email", "firstName", "anonymous", "type", "subscriptionFree", "experiments", "isTest", "premium", "settings", "registrationDate", "mimic", "groups", "extensionInstallDate", "fixed_errors"],
    t.userFields.push("token"),
    t.nextVerClass = "gr_ver_2",
    t.grammarlyAttrs = ["data-gramm_editor", "data-gramm", "data-gramm_id", "gramm_editor"],
    t.restrictedAttrs = o(t.grammarlyAttrs, ["readonly", "disabled"]),
    t.customFieldsRestrictedAttrs = ["pm-container", ["class", "ProseMirror"], "data-synchrony", ["data-gramm", "false"], [c, "false"], ["class", "redactor-layer"], ["class", "redactor-editor"], ["class", "ck-editor__editable"], ["class", "redactor_box"], ["aria-label", "Search Facebook"]],
    t.allRestrictedAttrs = o(t.restrictedAttrs, t.customFieldsRestrictedAttrs),
    t.forceEnableAttr = {
        name: c,
        value: "true"
    },
    t.restrictedParentAttrs = "[data-reactid]",
    t.externalEvents = ["changed-user", "changed-plan", "changed-dialect", "cleanup", "editor-fix"]
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(10).getGlobal();
    function o() {
        return "bg" === r.bundleInfo.context
    }
    function i() {
        return "popup" === r.bundleInfo.context
    }
    t.isTestsMode = function() {
        return !!window.__extensionTestsMode
    }
    ,
    t.getUuid = function() {
        return r.appConfig.extensionId
    }
    ,
    t.isFF = function() {
        return "firefox" === r.bundleInfo.browser
    }
    ,
    t.isChrome = function() {
        return "chrome" === r.bundleInfo.browser
    }
    ,
    t.isSafari = function() {
        return "safari" === r.bundleInfo.browser
    }
    ,
    t.isSafariApp = function() {
        return "safariApp" === r.bundleInfo.bundleType
    }
    ,
    t.isLegacySafari = function() {
        return "safari" === r.bundleInfo.bundleType
    }
    ,
    t.isEdge = function() {
        return "edge" === r.bundleInfo.browser
    }
    ,
    t.isWindows = function() {
        return r.systemInfo.os.isWindows
    }
    ,
    t.isBg = o,
    t.isPopup = i,
    t.isBgOrPopup = function() {
        return o() || i()
    }
    ,
    t.getBrowser = function() {
        return r.bundleInfo.browser
    }
    ,
    t.getVersion = function() {
        return r.buildInfo.version
    }
    ,
    t.ENV = r.bundleInfo.env,
    t.URLS = r.appConfig.url,
    t.appName = r.appConfig.felog.appName,
    t.gnarAppName = r.appConfig.gnar.appName,
    t.GRAMMARLY_DOMAIN = r.appConfig.url.grammarlyDomain
}
, , , function(e, t, n) {
    var r = n(34)
      , o = n(217)
      , i = n(218)
      , a = "[object Null]"
      , c = "[object Undefined]"
      , s = r ? r.toStringTag : void 0;
    e.exports = function(e) {
        return null == e ? void 0 === e ? c : a : s && s in Object(e) ? o(e) : i(e)
    }
}
, , function(e, t, n) {
    var r = n(234)
      , o = n(237);
    e.exports = function(e, t) {
        var n = o(e, t);
        return r(n) ? n : void 0
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(4)
      , o = n(135)
      , i = n(94)
      , a = function(e) {
        return e.replace("www.", "")
    };
    function c(e) {
        var t = e && e.ownerDocument || document
          , n = t.location || t.defaultView.location;
        return n ? a(n.hostname) : ""
    }
    t.getDomain = c,
    t.domainFromUrl = function(e) {
        if (r.isFF() && /^about:/.test(e))
            return e;
        var t = document.createElement("a");
        return t.href = e,
        a(t.hostname)
    }
    ,
    t.isFacebookSite = function() {
        return o.FACEBOOK_SITES.includes(c())
    }
    ,
    t.isGdocsSite = function() {
        return /\/document\//.test(u()) && "docs.google.com" === c()
    }
    ,
    t.isGdocsDocument = function() {
        return /\/document\/d\/.*$/.test(u()) && "docs.google.com" === c()
    }
    ,
    t.isJiraSite = function() {
        return /\.atlassian\.net/.test(c())
    }
    ,
    t.isBlackboardSite = function() {
        return /\.blackboard\.com/.test(c())
    }
    ;
    var s = /d\/(.*?)\//;
    function u(e) {
        var t = e && e.ownerDocument || document
          , n = t.location || t.defaultView.location;
        return n ? n.pathname + n.search : ""
    }
    t.getHashedGoogleDocId = function() {
        if (!document || !document.location)
            return null;
        if (s.test(document.location.href)) {
            var e = document.location.href.match(s)[1];
            return i.createHash("superfasthash").hash(e)
        }
        return null
    }
    ,
    t.getUrl = u,
    t.getFavicon = function() {
        for (var e = new RegExp("^(?:[a-z]+:)?//","i"), t = "", n = document.getElementsByTagName("link"), r = 0; r < n.length; r++) {
            var o = n[r];
            -1 !== ('"' + o.getAttribute("rel") + '"').search(/(\"icon )|( icon\")|(\"icon\")|( icon )/i) && (t = o.getAttribute("href"))
        }
        return t || (t = "favicon.ico"),
        e.test(t) ? t : "/" !== t[0] ? "//" + document.location.host + document.location.pathname + t : "//" + document.location.host + t
    }
    ,
    t.getPopupEditorBackLabel = function() {
        var e = c();
        return "Back to " + (e && {
            "mail.google.com": "Gmail",
            "facebook.com": "Facebook",
            "twitter.com": "Twitter"
        }[e] || document.title)
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {}
          , n = e || {};
        return n.emit = function(e, n) {
            e = r(e);
            var o = t[e];
            if (o)
                for (var i = o.concat(), a = 0; a < i.length; a++)
                    i[a](n)
        }
        ,
        n.emitArgs = function(e) {
            e = r(e);
            var n = t[e]
              , o = [].slice.call(arguments, 1);
            if (n)
                for (var i = n.concat(), a = 0; a < i.length; a++)
                    i[a].apply(null, o)
        }
        ,
        n.on = function(e, o) {
            return e = r(e),
            t[e] = t[e] || [],
            t[e].push(o),
            {
                un: function() {
                    n.un(e, o)
                }
            }
        }
        ,
        n.off = n.un = function(e, n) {
            e = r(e);
            var o = t[e];
            if (o) {
                var i = o.indexOf(n);
                i > -1 && (o.splice(i, 1),
                o.length > 0 || delete t[e])
            }
        }
        ,
        n.one = function(e, t) {
            var r = n.on(e, function() {
                r.un(),
                t.apply(null, arguments)
            })
        }
        ,
        n.delegate = function(e, t, o) {
            t = r(t),
            n.on(t, function(n) {
                e.emit(o || t, n)
            })
        }
        ,
        n;
        function r(e) {
            return "string" != typeof e ? e.join(" ") : e
        }
    }
}
, , , function(e, t, n) {
    var r = n(38)
      , o = n(72);
    e.exports = function(e) {
        return null != e && o(e.length) && !r(e)
    }
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var n = "undefined" != typeof window && window
          , r = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self
          , o = n || void 0 !== e && e || r;
        t.root = o,
        function() {
            if (!o)
                throw new Error("RxJS could not find any global context (window, self, global)")
        }()
    }
    ).call(t, n(33))
}
, function(e, t, n) {
    "use strict";
    var r = n(77)
      , o = n(212)
      , i = n(97)
      , a = n(54)
      , c = n(37)
      , s = n(311)
      , u = function() {
        function e(e) {
            this.closed = !1,
            this._parent = null,
            this._parents = null,
            this._subscriptions = null,
            e && (this._unsubscribe = e)
        }
        var t;
        return e.prototype.unsubscribe = function() {
            var e, t = !1;
            if (!this.closed) {
                var n = this._parent
                  , u = this._parents
                  , f = this._unsubscribe
                  , p = this._subscriptions;
                this.closed = !0,
                this._parent = null,
                this._parents = null,
                this._subscriptions = null;
                for (var d = -1, h = u ? u.length : 0; n; )
                    n.remove(this),
                    n = ++d < h && u[d] || null;
                if (i.isFunction(f))
                    a.tryCatch(f).call(this) === c.errorObject && (t = !0,
                    e = e || (c.errorObject.e instanceof s.UnsubscriptionError ? l(c.errorObject.e.errors) : [c.errorObject.e]));
                if (r.isArray(p))
                    for (d = -1,
                    h = p.length; ++d < h; ) {
                        var g = p[d];
                        if (o.isObject(g))
                            if (a.tryCatch(g.unsubscribe).call(g) === c.errorObject) {
                                t = !0,
                                e = e || [];
                                var m = c.errorObject.e;
                                m instanceof s.UnsubscriptionError ? e = e.concat(l(m.errors)) : e.push(m)
                            }
                    }
                if (t)
                    throw new s.UnsubscriptionError(e)
            }
        }
        ,
        e.prototype.add = function(t) {
            if (!t || t === e.EMPTY)
                return e.EMPTY;
            if (t === this)
                return this;
            var n = t;
            switch (typeof t) {
            case "function":
                n = new e(t);
            case "object":
                if (n.closed || "function" != typeof n.unsubscribe)
                    return n;
                if (this.closed)
                    return n.unsubscribe(),
                    n;
                if ("function" != typeof n._addParent) {
                    var r = n;
                    (n = new e)._subscriptions = [r]
                }
                break;
            default:
                throw new Error("unrecognized teardown " + t + " added to Subscription.")
            }
            return (this._subscriptions || (this._subscriptions = [])).push(n),
            n._addParent(this),
            n
        }
        ,
        e.prototype.remove = function(e) {
            var t = this._subscriptions;
            if (t) {
                var n = t.indexOf(e);
                -1 !== n && t.splice(n, 1)
            }
        }
        ,
        e.prototype._addParent = function(e) {
            var t = this._parent
              , n = this._parents;
            t && t !== e ? n ? -1 === n.indexOf(e) && n.push(e) : this._parents = [e] : this._parent = e
        }
        ,
        e.EMPTY = ((t = new e).closed = !0,
        t),
        e
    }();
    function l(e) {
        return e.reduce(function(e, t) {
            return e.concat(t instanceof s.UnsubscriptionError ? t.errors : t)
        }, [])
    }
    t.Subscription = u
}
, , function(e, t) {
    e.exports = function(e, t) {
        return e === t || e != e && t != t
    }
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0,
        eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t, n) {
    var r = n(11).Symbol;
    e.exports = r
}
, function(e, t, n) {
    (function(e) {
        var r = n(11)
          , o = n(219)
          , i = "object" == typeof t && t && !t.nodeType && t
          , a = i && "object" == typeof e && e && !e.nodeType && e
          , c = a && a.exports === i ? r.Buffer : void 0
          , s = (c ? c.isBuffer : void 0) || o;
        e.exports = s
    }
    ).call(t, n(44)(e))
}
, , function(e, t, n) {
    "use strict";
    t.errorObject = {
        e: {}
    }
}
, function(e, t, n) {
    var r = n(21)
      , o = n(8)
      , i = "[object AsyncFunction]"
      , a = "[object Function]"
      , c = "[object GeneratorFunction]"
      , s = "[object Proxy]";
    e.exports = function(e) {
        if (!o(e))
            return !1;
        var t = r(e);
        return t == a || t == c || t == i || t == s
    }
}
, function(e, t, n) {
    var r = n(112)
      , o = n(169)
      , i = n(28);
    e.exports = function(e) {
        return i(e) ? r(e) : o(e)
    }
}
, function(e, t, n) {
    var r = n(220)
      , o = n(114)
      , i = n(141)
      , a = i && i.isTypedArray
      , c = a ? o(a) : r;
    e.exports = c
}
, function(e, t, n) {
    var r = n(50)
      , o = 1 / 0;
    e.exports = function(e) {
        if ("string" == typeof e || r(e))
            return e;
        var t = e + "";
        return "0" == t && 1 / e == -o ? "-0" : t
    }
}
, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1);
    !function(e) {
        e.create = function(e) {
            return r.optionalStringUnion(["chrome", "safari", "firefox", "edge"], e)
        }
        ,
        e.detect = function(e) {
            return e.chrome && /google/i.test(e.navigator.vendor) ? "chrome" : -1 !== e.navigator.userAgent.indexOf("Firefox") ? "firefox" : /^((?!chrome).)*safari/i.test(e.navigator.userAgent) ? "safari" : "Netscape" === e.navigator.appName && e.navigator.appVersion.indexOf("Edge") > -1 ? "edge" : void 0
        }
    }(t.TargetBrowser || (t.TargetBrowser = {})),
    function(e) {
        (t.TargetEnv || (t.TargetEnv = {})).create = function(e) {
            return r.optionalStringUnion(["dev", "prod", "qa"], e)
        }
    }(),
    function(e) {
        e.create = function(e) {
            return r.optionalStringUnion(["bg", "cs", "popup"], e)
        }
        ,
        e.detect = function(e, t) {
            var n = !!e.IS_BG
              , r = "safari" === t ? function() {
                try {
                    return e.safari.extension.globalPage.contentWindow !== e
                } catch (e) {
                    return !1
                }
            }() : !!e.IS_POPUP;
            return n ? "bg" : r ? "popup" : "cs"
        }
    }(t.TargetContext || (t.TargetContext = {})),
    function(e) {
        (t.BundleInfo || (t.BundleInfo = {})).create = function(e, t, n, r) {
            return {
                browser: e,
                bundleType: t,
                env: n,
                context: r
            }
        }
    }()
}
, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}
        ,
        e.paths = [],
        e.children || (e.children = []),
        Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }),
        Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }),
        e.webpackPolyfill = 1),
        e
    }
}
, function(e, t, n) {
    var r = n(224)
      , o = n(225)
      , i = n(226)
      , a = n(227)
      , c = n(228);
    function s(e) {
        var t = -1
          , n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    s.prototype.clear = r,
    s.prototype.delete = o,
    s.prototype.get = i,
    s.prototype.has = a,
    s.prototype.set = c,
    e.exports = s
}
, function(e, t, n) {
    var r = n(32);
    e.exports = function(e, t) {
        for (var n = e.length; n--; )
            if (r(e[n][0], t))
                return n;
        return -1
    }
}
, function(e, t, n) {
    var r = n(23)(Object, "create");
    e.exports = r
}
, function(e, t, n) {
    var r = n(246);
    e.exports = function(e, t) {
        var n = e.__data__;
        return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(18)
      , o = n(4);
    function i(e, t) {
        return e + "=" + encodeURIComponent(t)
    }
    function a(e, t) {
        return i("utm_medium", "internal") + "&" + i("utm_source", e) + "&" + i("utm_campaign", t)
    }
    function c(e) {
        return i("utm_medium", "internal") + "&" + i("utm_source", e)
    }
    var s = "fromExtension=true";
    t.getEditorUrl = function() {
        return r.URLS.app + "?" + i("utm_medium", "internal")
    }
    ,
    t.getSignUpURL = function(e, t) {
        return r.URLS.signup + "?" + a(e, t) + "&" + s
    }
    ,
    t.getSignInURL = function() {
        return r.URLS.signin + "?" + c("signinHook") + "&" + s
    }
    ,
    t.getFbSigninURL = function() {
        return r.URLS.fbSignin + "&" + c("signinHook")
    }
    ,
    t.getGoogleSigninURL = function() {
        return r.URLS.googleSignin + "&" + c("signinHook")
    }
    ,
    t.getFbSignupURL = function(e) {
        return r.URLS.fbSignup + "&" + c(e)
    }
    ,
    t.getGoogleSignupURL = function(e) {
        return r.URLS.googleSignup + "&" + c(e)
    }
    ,
    t.getResetPasswordURL = function() {
        return r.URLS.resetPassword + "?" + i("utm_medium", "internal")
    }
    ,
    t.getTermsURL = function() {
        return r.URLS.terms + "?" + i("utm_medium", "internal")
    }
    ,
    t.getPrivatePolicyURL = function() {
        return r.URLS.policy + "?" + i("utm_medium", "internal")
    }
    ,
    t.getFirefoxPrivatePolicyURL = function() {
        return r.URLS.firefoxPrivatePolicy + "?" + i("utm_medium", "internal")
    }
    ,
    t.getUpgradeURL = function(e, t) {
        return r.URLS.upgrade + "?" + a(e, t)
    }
    ,
    t.getExtensionSuccessURL = function(e) {
        var t = o.getBrowser()
          , n = e ? "navigation" : "store";
        return r.URLS.welcomeC + "?" + i("utm_medium", n) + "&" + i("utm_source", t)
    }
    ,
    t.getAfterInstallURL = function(e) {
        var t = o.getBrowser()
          , n = r.URLS.afterInstall + "/?extension_install=true"
          , a = e ? "navigation" : "store"
          , c = e ? "" : "&" + i("utm_source", t);
        return n + "&" + i("utm_medium", a) + c
    }
    ,
    t.getUninstallURL = function(e) {
        var t = i("utm_medium", "internal") + "&" + i("utm_campaign", "extensionUninstall");
        return e ? r.URLS.uninstall + "?domain=" + encodeURI(e) + "&" + t : r.URLS.uninstall + "?" + t
    }
    ,
    t.addParamsToUpgradeURL = function(e, t, n) {
        return e + "&" + i("browser", o.getBrowser()) + "&" + a(t, n)
    }
}
, function(e, t, n) {
    var r = n(21)
      , o = n(15)
      , i = "[object Symbol]";
    e.exports = function(e) {
        return "symbol" == typeof e || o(e) && r(e) == i
    }
}
, function(e, t) {
    e.exports = function(e) {
        return e
    }
}
, , , function(e, t, n) {
    "use strict";
    var r, o = n(37);
    function i() {
        try {
            return r.apply(this, arguments)
        } catch (e) {
            return o.errorObject.e = e,
            o.errorObject
        }
    }
    t.tryCatch = function(e) {
        return r = e,
        i
    }
}
, function(e, t, n) {
    var r = n(216)
      , o = n(15)
      , i = Object.prototype
      , a = i.hasOwnProperty
      , c = i.propertyIsEnumerable
      , s = r(function() {
        return arguments
    }()) ? r : function(e) {
        return o(e) && a.call(e, "callee") && !c.call(e, "callee")
    }
    ;
    e.exports = s
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1)
      , o = n(3).Logger.create("extension-api");
    !function(e) {
        for (var n in e)
            t.hasOwnProperty(n) || (t[n] = e[n])
    }(n(59)),
    t.initBackgroundPageExtensionApi = function(e) {
        window.extenstionBackgroundPageApi && o.warn("Background Page Extension Api init called more than once"),
        window.extenstionBackgroundPageApi = window.extenstionBackgroundPageApi || e
    }
    ,
    t.initContentScriptExtensionApi = function(e) {
        window.extenstionContentScriptApi && o.warn("Content Script Extension Api init called more than once"),
        window.extenstionContentScriptApi = window.extenstionContentScriptApi || e
    }
    ,
    t.getContentScriptExtensionApi = function() {
        return r.assertNonNull(window.extenstionContentScriptApi, "content script extension api was not initialized")
    }
    ,
    t.getBackgoundPageExtensionApi = function() {
        return r.assertNonNull(window.extenstionBackgroundPageApi, "backgound page extension api was not initialized")
    }
}
, function(e, t, n) {
    var r = n(112)
      , o = n(280)
      , i = n(28);
    e.exports = function(e) {
        return i(e) ? r(e, !0) : o(e)
    }
}
, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ports = {
        bridge: "bridge",
        background: "message:to-priv",
        broadcast: "message:to-non-priv"
    };
    var r, o = function() {
        return function(e) {
            var t = e.userId
              , n = e.isTestUser
              , r = e.isAnonymous
              , o = e.containerId;
            this.userId = t,
            this.isTestUser = n,
            this.isAnonymous = r,
            this.containerId = o
        }
    }();
    t.UserInfo = o,
    (r = t.StorageMigrationResult || (t.StorageMigrationResult = {}))[r.success = 0] = "success",
    r[r.successWithEmpty = 1] = "successWithEmpty",
    r[r.alreadyMigrated = 2] = "alreadyMigrated"
}
, function(e, t, n) {
    e.exports = n(333)
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ;
        t.ident = function(e) {
            return e
        }
        ,
        t.check = function(e, t, n) {
            if (!t(e))
                throw new Error(n)
        }
        ,
        t.remove = function(e, t) {
            var n = e.indexOf(t);
            n >= 0 && e.splice(n, 1)
        }
        ,
        t.deferred = c,
        t.arrayOfDeffered = function(e) {
            for (var t = [], n = 0; n < e; n++)
                t.push(c());
            return t
        }
        ,
        t.autoInc = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
            return function() {
                return ++e
            }
        }
        ,
        t.asap = function(e) {
            return Promise.resolve(1).then(function() {
                return e()
            })
        }
        ,
        t.warnDeprecated = function(e) {
            i && console.warn("DEPRECATION WARNING", e)
        }
        ;
        var r = t.sym = function(e) {
            return "@@redux-saga/" + e
        }
          , o = t.TASK = r("TASK");
        t.kTrue = function() {
            return !0
        }
        ,
        t.noop = function() {}
        ;
        var i = t.isDev = void 0 !== e && e.env && !1;
        var a = t.is = {
            undef: function(e) {
                return null == e
            },
            notUndef: function(e) {
                return null != e
            },
            func: function(e) {
                return "function" == typeof e
            },
            array: Array.isArray,
            promise: function(e) {
                return e && a.func(e.then)
            },
            iterator: function(e) {
                return e && a.func(e.next) && a.func(e.throw)
            },
            task: function(e) {
                return e && e[o]
            }
        };
        function c() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]
              , t = n({}, e)
              , r = new Promise(function(e, n) {
                t.resolve = e,
                t.reject = n
            }
            );
            return t.promise = r,
            t
        }
    }
    ).call(t, n(69))
}
, , , function(e, t) {
    var n = 9007199254740991
      , r = /^(?:0|[1-9]\d*)$/;
    e.exports = function(e, t) {
        var o = typeof e;
        return !!(t = null == t ? n : t) && ("number" == o || "symbol" != o && r.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
}
, function(e, t) {
    var n = Object.prototype;
    e.exports = function(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || n)
    }
}
, function(e, t, n) {
    var r = n(45)
      , o = n(229)
      , i = n(230)
      , a = n(231)
      , c = n(232)
      , s = n(233);
    function u(e) {
        var t = this.__data__ = new r(e);
        this.size = t.size
    }
    u.prototype.clear = o,
    u.prototype.delete = i,
    u.prototype.get = a,
    u.prototype.has = c,
    u.prototype.set = s,
    e.exports = u
}
, function(e, t, n) {
    var r = n(115)(Object.getPrototypeOf, Object);
    e.exports = r
}
, function(e, t, n) {
    var r = n(180)
      , o = n(76);
    e.exports = function(e, t, n, i) {
        var a = !n;
        n || (n = {});
        for (var c = -1, s = t.length; ++c < s; ) {
            var u = t[c]
              , l = i ? i(n[u], e[u], u, n, e) : void 0;
            void 0 === l && (l = e[u]),
            a ? o(n, u, l) : r(n, u, l)
        }
        return n
    }
}
, function(e, t) {
    var n, r, o = e.exports = {};
    function i() {
        throw new Error("setTimeout has not been defined")
    }
    function a() {
        throw new Error("clearTimeout has not been defined")
    }
    function c(e) {
        if (n === setTimeout)
            return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout)
            return n = setTimeout,
            setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }
    !function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var s, u = [], l = !1, f = -1;
    function p() {
        l && s && (l = !1,
        s.length ? u = s.concat(u) : f = -1,
        u.length && d())
    }
    function d() {
        if (!l) {
            var e = c(p);
            l = !0;
            for (var t = u.length; t; ) {
                for (s = u,
                u = []; ++f < t; )
                    s && s[f].run();
                f = -1,
                t = u.length
            }
            s = null,
            l = !1,
            function(e) {
                if (r === clearTimeout)
                    return clearTimeout(e);
                if ((r === a || !r) && clearTimeout)
                    return r = clearTimeout,
                    clearTimeout(e);
                try {
                    r(e)
                } catch (t) {
                    try {
                        return r.call(null, e)
                    } catch (t) {
                        return r.call(this, e)
                    }
                }
            }(e)
        }
    }
    function h(e, t) {
        this.fun = e,
        this.array = t
    }
    function g() {}
    o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        u.push(new h(e,t)),
        1 !== u.length || l || c(d)
    }
    ,
    h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    o.title = "browser",
    o.browser = !0,
    o.env = {},
    o.argv = [],
    o.version = "",
    o.versions = {},
    o.on = g,
    o.addListener = g,
    o.once = g,
    o.off = g,
    o.removeListener = g,
    o.removeAllListeners = g,
    o.emit = g,
    o.prependListener = g,
    o.prependOnceListener = g,
    o.listeners = function(e) {
        return []
    }
    ,
    o.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    o.cwd = function() {
        return "/"
    }
    ,
    o.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    o.umask = function() {
        return 0
    }
}
, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    function(e) {
        function t(e) {
            return new Promise(e)
        }
        e.create = t,
        e.createCompletionSource = function() {
            var e, t;
            return {
                promise: new Promise(function(n, r) {
                    e = n,
                    t = r
                }
                ),
                resolve: function(t) {
                    e(t)
                },
                reject: function(e) {
                    t(e)
                }
            }
        }
        ,
        e.sync = function(e) {
            return t(function(t, n) {
                return t(e())
            })
        }
        ,
        e.delay = function(t) {
            return e.create(function(e) {
                setTimeout(function() {
                    e()
                }, t)
            })
        }
    }(t.SafePromise || (t.SafePromise = {}))
}
, function(e, t) {
    var n = 9007199254740991;
    e.exports = function(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n
    }
}
, function(e, t, n) {
    var r = n(23)(n(11), "Map");
    e.exports = r
}
, function(e, t, n) {
    var r = n(238)
      , o = n(245)
      , i = n(247)
      , a = n(248)
      , c = n(249);
    function s(e) {
        var t = -1
          , n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    s.prototype.clear = r,
    s.prototype.delete = o,
    s.prototype.get = i,
    s.prototype.has = a,
    s.prototype.set = c,
    e.exports = s
}
, function(e, t, n) {
    var r = n(6)
      , o = n(50)
      , i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
      , a = /^\w*$/;
    e.exports = function(e, t) {
        if (r(e))
            return !1;
        var n = typeof e;
        return !("number" != n && "symbol" != n && "boolean" != n && null != e && !o(e)) || a.test(e) || !i.test(e) || null != t && e in Object(t)
    }
}
, function(e, t, n) {
    var r = n(124);
    e.exports = function(e, t, n) {
        "__proto__" == t && r ? r(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : e[t] = n
    }
}
, function(e, t, n) {
    "use strict";
    t.isArray = Array.isArray || function(e) {
        return e && "number" == typeof e.length
    }
}
, function(e, t, n) {
    var r = n(250)
      , o = n(15);
    e.exports = function e(t, n, i, a, c) {
        return t === n || (null == t || null == n || !o(t) && !o(n) ? t != t && n != n : r(t, n, i, a, e, c))
    }
}
, , , function(e, t, n) {
    "use strict";
    var r = this && this.__assign || function() {
        return (r = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.createEventPayload = function(e, t) {
        return r({}, e, {
            application: t.application,
            version: t.version,
            env: t.env,
            sessionId: t.context && t.sessionId,
            userId: t.context && t.context.userId,
            containerId: t.context && t.context.containerId
        })
    }
    ,
    t.felogLogEndpoint = function(e) {
        return e + "/logv2"
    }
    ,
    t.felogCrashEndpoint = function(e) {
        return e + "/crashv2"
    }
    ,
    t.felogRequestUrl = function(e, t) {
        return t + "/log?json=" + encodeURIComponent(JSON.stringify(e))
    }
}
, , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.second = 1e3,
    t.minute = 60 * t.second,
    t.hour = 60 * t.minute,
    t.day = 24 * t.hour,
    t.week = 7 * t.day,
    t.days = function(e) {
        return e * t.day
    }
    ,
    t.seconds = function(e) {
        return e * t.second
    }
    ,
    t.hertz = function(e) {
        return t.second / e
    }
}
, function(e, t, n) {
    "use strict";
    var r, o;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        return function(e) {
            this.write = e
        }
    }();
    t.FunctionLogWriter = i;
    var a = function() {
        function e(t) {
            void 0 === t && (t = !0),
            this._edgeCompat = t,
            this._writeFunc = this._edgeCompat ? e._edgeWriteFunc : e._commonWriteFunc
        }
        return e.prototype.write = function(e) {
            try {
                var t = ["grm " + e.level + " 【" + e.loggerName + "】░░ " + e.message];
                e.data && t.push(e.data),
                e.exception && t.push(e.exception),
                this._writeFunc[e.level].apply(null, t)
            } catch (e) {}
        }
        ,
        e._commonWriteFunc = ((r = {}).TRACE = console.log.bind(console),
        r.DEBUG = console.log.bind(console),
        r.INFO = console.info.bind(console),
        r.WARN = console.warn.bind(console),
        r.ERROR = console.error.bind(console),
        r.FATAL = console.error.bind(console),
        r),
        e._edgeWriteFunc = ((o = {}).TRACE = function(e, t, n) {
            return console.log(e, t, n)
        }
        ,
        o.DEBUG = function(e, t, n) {
            return console.log(e, t, n)
        }
        ,
        o.INFO = function(e, t, n) {
            return console.info(e, t, n)
        }
        ,
        o.WARN = function(e, t, n) {
            return console.warn(e, t, n)
        }
        ,
        o.ERROR = function(e, t, n) {
            return console.error(e, t, n)
        }
        ,
        o.FATAL = function(e, t, n) {
            return console.error(e, t, n)
        }
        ,
        o),
        e
    }();
    t.ConsoleLogWriter2 = a
}
, , , function(e, t, n) {
    var r = n(222)
      , o = n(261)
      , i = n(51)
      , a = n(6)
      , c = n(270);
    e.exports = function(e) {
        return "function" == typeof e ? e : null == e ? i : "object" == typeof e ? a(e) ? o(e[0], e[1]) : r(e) : c(e)
    }
}
, function(e, t, n) {
    var r = n(257)
      , o = n(73)
      , i = n(258)
      , a = n(188)
      , c = n(259)
      , s = n(21)
      , u = n(116)
      , l = "[object Map]"
      , f = "[object Promise]"
      , p = "[object Set]"
      , d = "[object WeakMap]"
      , h = "[object DataView]"
      , g = u(r)
      , m = u(o)
      , v = u(i)
      , b = u(a)
      , y = u(c)
      , _ = s;
    (r && _(new r(new ArrayBuffer(1))) != h || o && _(new o) != l || i && _(i.resolve()) != f || a && _(new a) != p || c && _(new c) != d) && (_ = function(e) {
        var t = s(e)
          , n = "[object Object]" == t ? e.constructor : void 0
          , r = n ? u(n) : "";
        if (r)
            switch (r) {
            case g:
                return h;
            case m:
                return l;
            case v:
                return f;
            case b:
                return p;
            case y:
                return d
            }
        return t
    }
    ),
    e.exports = _
}
, function(e, t, n) {
    var r = n(93)
      , o = n(41);
    e.exports = function(e, t) {
        for (var n = 0, i = (t = r(t, e)).length; null != e && n < i; )
            e = e[o(t[n++])];
        return n && n == i ? e : void 0
    }
}
, function(e, t, n) {
    var r = n(6)
      , o = n(75)
      , i = n(263)
      , a = n(174);
    e.exports = function(e, t) {
        return r(e) ? e : o(e, t) ? [e] : i(a(e))
    }
}
, function(e, t, n) {
    n(189);
    var r = {
        superfasthash: n(273),
        murmurhash3: n(274)
    };
    e.exports = {
        createHash: function(e) {
            e = e.replace(/![a-zA-z0-9]/g, "").toLowerCase();
            try {
                return r[e]
            } catch (e) {
                throw new Error(e)
            }
        }
    }
}
, , , function(e, t, n) {
    "use strict";
    t.isFunction = function(e) {
        return "function" == typeof e
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e); )
            ;
        return e
    }
}
, function(e, t, n) {
    var r = n(8)
      , o = n(329)
      , i = n(313)
      , a = "Expected a function"
      , c = Math.max
      , s = Math.min;
    e.exports = function(e, t, n) {
        var u, l, f, p, d, h, g = 0, m = !1, v = !1, b = !0;
        if ("function" != typeof e)
            throw new TypeError(a);
        function y(t) {
            var n = u
              , r = l;
            return u = l = void 0,
            g = t,
            p = e.apply(r, n)
        }
        function _(e) {
            var n = e - h;
            return void 0 === h || n >= t || n < 0 || v && e - g >= f
        }
        function w() {
            var e, n, r = o();
            if (_(r))
                return E(r);
            d = setTimeout(w, (n = t - ((e = r) - h),
            v ? s(n, f - (e - g)) : n))
        }
        function E(e) {
            return d = void 0,
            b && u ? y(e) : (u = l = void 0,
            p)
        }
        function S() {
            var e, n = o(), r = _(n);
            if (u = arguments,
            l = this,
            h = n,
            r) {
                if (void 0 === d)
                    return g = e = h,
                    d = setTimeout(w, t),
                    m ? y(e) : p;
                if (v)
                    return d = setTimeout(w, t),
                    y(h)
            }
            return void 0 === d && (d = setTimeout(w, t)),
            p
        }
        return t = i(t) || 0,
        r(n) && (m = !!n.leading,
        f = (v = "maxWait"in n) ? c(i(n.maxWait) || 0, t) : f,
        b = "trailing"in n ? !!n.trailing : b),
        S.cancel = function() {
            void 0 !== d && clearTimeout(d),
            g = 0,
            u = h = l = d = void 0
        }
        ,
        S.flush = function() {
            return void 0 === d ? p : E(o())
        }
        ,
        S
    }
}
, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1)
      , o = n(102)
      , i = n(103);
    !function(e) {
        var t = "87677a2c52b84ad3a151a4a72f5bd3c4"
          , n = "grammarly.com"
          , a = 0;
        e.create = function(e, c, s, u) {
            var l = "https://127.0.0.1:8000"
              , f = "prod" === c ? "https://f-log-extension.grammarly.io" : "qa" === c || "dev" === c ? l : r.assertNever(c)
              , p = "prod" === c ? "https://endpoint2.collection.us2.sumologic.com/receiver/v1/http/ZaVnC4dhaV1OF-4ic11yqpre0casnyvs_ZoaCHciEYdRyBkrfwP6DMlsWt8tSVU76RPqgGvAGjXGQk_UNuxPx-pYbToJapM_Fr0CUcgKaA8_IVl-lhSr5Q==" : "qa" === c || "dev" === c ? l : r.assertNever(c)
              , d = "prod" === c ? n : "qa" === c || "dev" === c ? "qagr.io" : r.assertNever(c);
            return {
                url: o.UrlConfig.create(n, f, p, s, u),
                gnar: i.GnarConfig.create(e, d),
                felog: i.FelogConfig.create(e, c),
                sumologic: i.SumoLogicConfig.create(e),
                capi: i.CapiConfig.create(),
                extensionId: t,
                newsVersion: a
            }
        }
    }(t.AppConfig || (t.AppConfig = {}))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    function(e) {
        (t.UrlConfig || (t.UrlConfig = {})).create = function(e, t, n, r, o) {
            var i = "https://www." + e
              , a = "https://data." + e
              , c = "https://app." + e
              , s = "https://auth." + e + "/v3";
            return {
                app: c,
                appPersonalDictionary: c + "/profile/dictionary",
                capi: "wss://capi." + e + "/freews",
                capiGDocs: "wss://capi." + e + "/gdocs",
                dapiMimic: a + "/api/mimic",
                dapiProps: a + "/api/props/v2",
                dapiFindProps: a + "/api/props/v2/find",
                editorDictionary: c + "/profile/dictionary",
                dictionary: "https://capi." + e + "/api/defs",
                docs: c + "/docs",
                docsApi: "https://dox." + e + "/documents",
                newDoc: c + "/docs/new",
                userOrAnonymous: s + "/user/oranonymous",
                authSignin: s + "/api/login",
                authSignup: s + "/api/signup",
                authExchange: s + "/api/unified-login/code/exchange",
                authLogout: s + "/logout",
                signin: i + "/signin",
                signup: i + "/signup",
                fbSignin: i + "/signin?fromExtensionFb=true",
                fbSignup: i + "/signup?fromExtensionFb=true",
                googleSignin: i + "/signin?fromExtensionGoogle=true",
                googleSignup: i + "/signup?fromExtensionGoogle=true",
                gdocsSignin: i + "/signin?fromExtensionGdocs=true",
                gdocsSignup: i + "/signup?fromExtensionGdocs=true",
                resetPassword: i + "/resetpassword",
                newFelog: t,
                sumoLogic: n,
                welcomeC: i + "/extension-success",
                afterInstall: i + "/after_install_page",
                upgrade: i + "/upgrade",
                premium: i + "/business/plans/i",
                planComparison: i + "/plans/t",
                uninstall: i + "/extension-uninstall",
                terms: i + "/terms",
                policy: i + "/privacy-policy",
                firefoxPrivatePolicy: "https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/privacy/",
                dynamicConfigUrl: "https://d3cv4a9a9wh0bt.cloudfront.net/dynamicConfig.json",
                pageConfigUrl: "https://d3cv4a9a9wh0bt.cloudfront.net/browserplugin/config.json",
                edgePopupUrl: r,
                emptyScriptUrl: o,
                grammarlyDomain: e,
                grammarlyProtocol: "https:",
                safariMigration: i + "/safari",
                safariMigrationBackupNotifFirst: i + "/safari?notif=1",
                safariMigrationBackupNotifSecond: i + "/safari?notif=2"
            }
        }
    }()
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1);
    !function(e) {
        var t = {
            chrome: "chromeExt",
            firefox: "firefoxExt",
            safari: "safariExt",
            edge: "edgeExt"
        };
        e.create = function(e, n) {
            return {
                appName: r.assertNonNull(t[e], "gnar app name"),
                url: "https://gnar." + n,
                domain: "." + n,
                sendEmailInfoTracking: !0,
                sendFluidExperimentData: !1,
                googleAnalyticsId: "UA-6331378-16"
            }
        }
    }(t.GnarConfig || (t.GnarConfig = {})),
    function(e) {
        var t = {
            chrome: "extensionChrome",
            firefox: "extensionFirefox",
            safari: "extensionSafari",
            edge: "extensionEdge"
        }
          , n = .01;
        e.create = function(e, o) {
            return {
                appName: r.assertNonNull(t[e], "felog app name"),
                sendUsageMetrics: !0,
                sendPerfMetrics: "dev" === o || Math.random() <= n
            }
        }
    }(t.FelogConfig || (t.FelogConfig = {})),
    function(e) {
        var t = {
            chrome: "extensionChrome",
            firefox: "extensionFirefox",
            safari: "extensionSafari",
            edge: "extensionEdge"
        };
        e.create = function(e) {
            return {
                appName: r.assertNonNull(t[e], "sumologic app name")
            }
        }
    }(t.SumoLogicConfig || (t.SumoLogicConfig = {})),
    function(e) {
        (t.CapiConfig || (t.CapiConfig = {})).create = function() {
            return {}
        }
    }()
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1)
      , o = n(3)
      , i = n(133)
      , a = o.Logger.create("config.build");
    !function(e) {
        e.create = function(e, t, n, r, o, i, a) {
            var c = void 0 !== i && void 0 !== a ? i : "UNVERSIONED"
              , s = e + "." + t + "." + n;
            return {
                version: s,
                fullVersion: s + "-" + [r, ["prod" !== o ? o : null, c !== r ? c : null].filter(function(e) {
                    return !!e
                }).join(".")].filter(function(e) {
                    return "" !== e
                }).join("/"),
                commitHash: a,
                gitBranch: i
            }
        }
        ,
        e.getManifestVersion = function(e, t, n) {
            try {
                switch (e) {
                case "safari":
                    switch (t) {
                    case "bg":
                    case "popup":
                        return n.safari.extension.displayVersion;
                    default:
                        return
                    }
                case "chrome":
                    return n.chrome.runtime.getManifest().version;
                case "firefox":
                    return i.firefox.runtime.getManifest().version;
                case "edge":
                    return n.edge.runtime.getManifest().version;
                default:
                    return r.assertNever(e)
                }
            } catch (e) {
                return void a.error("Could not get extension version from manifest", e)
            }
        }
    }(t.BuildInfo || (t.BuildInfo = {}))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(87)
      , o = n(106);
    !function(e) {
        e.defaultConfig = {
            writer: new r.ConsoleLogWriter2,
            filterFn: function(e) {
                return !0
            }
        };
        var t = e.defaultConfig;
        function n(e) {
            t = Object.assign({}, t, e)
        }
        e.getGlobal = function() {
            return t
        }
        ,
        e.updateGlobal = n,
        e.configure = function(e) {
            n({
                writer: new r.ConsoleLogWriter2(e.edge),
                filterFn: e.prodCs ? o.logLevelFilter("ERROR") : function(e) {
                    return !0
                }
            })
        }
    }(t.LogConfig || (t.LogConfig = {}))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(210);
    t.logLevelFilter = function(e) {
        return function(t) {
            return r.getLogRank(t.level) >= r.getLogRank(e)
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o, i = n(43);
    !function(e) {
        (r = t.BrowserInfo || (t.BrowserInfo = {})).create = function(e) {
            return {
                type: i.TargetBrowser.detect(e) || "other"
            }
        }
    }(),
    function(e) {
        (o = t.OsInfo || (t.OsInfo = {})).create = function(e) {
            return {
                isWindows: -1 !== e.navigator.appVersion.indexOf("Win"),
                isMac: -1 !== e.navigator.appVersion.indexOf("Mac"),
                isChromeOS: -1 !== e.navigator.appVersion.indexOf("CrOS")
            }
        }
    }(),
    function(e) {
        (t.SystemInfo || (t.SystemInfo = {})).create = function(e) {
            return {
                browser: r.create(e),
                os: o.create(e)
            }
        }
    }()
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__read || function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(101)
      , i = n(104)
      , a = n(107)
      , c = n(43)
      , s = n(1)
      , u = n(3).Logger.create("config.mainConfig");
    !function(e) {
        function t(e, t, n, r, o, i, a, c) {
            return {
                env: e,
                major_number: t,
                build_number: n,
                release_number: r,
                git_branch: o,
                git_commit: i,
                edge_popup_url: a,
                empty_script_url: c
            }
        }
        e.create = t,
        e.fromBrowserify = function() {
            return t("prod", "14", "924", "2437", "UNVERSIONED", "7225dc9cde142e3aa459dfda6b8763840b39982a", "", "")
        }
    }(t.ProcessEnv || (t.ProcessEnv = {})),
    function(e) {
        (t.MainConfig || (t.MainConfig = {})).create = function(e, t, n, l) {
            var f;
            if (n.env) {
                var p = c.TargetEnv.create(n.env);
                void 0 !== p ? f = p : (u.warn("*** process.env.ENV is invalid ('" + n.env + "'), assuming 'prod' env"),
                f = "prod")
            } else
                u.warn("*** process.env.ENV is not defined, assuming 'prod' env"),
                f = "prod";
            var d, h = s.assertNonNull(f, "ENV env var OR a fallback value"), g = [n.major_number, n.build_number, n.release_number].map(s.optionalIntString);
            if (3 === g.length && g.every(function(e) {
                return void 0 !== e
            }))
                d = g;
            else {
                var m = (i.BuildInfo.getManifestVersion(e, t, window) || "").split(".").map(s.optionalIntString);
                d = 3 === m.length && m.every(function(e) {
                    return void 0 !== e
                }) ? m : [0, 0, 0]
            }
            var v = r(d, 3)
              , b = v[0]
              , y = v[1]
              , _ = v[2];
            return {
                buildInfo: i.BuildInfo.create(b, y, _, e, h, n.git_branch, n.git_commit),
                bundleInfo: c.BundleInfo.create(e, l || e, h, t),
                appConfig: o.AppConfig.create(e, h, n.edge_popup_url, n.empty_script_url),
                systemInfo: a.SystemInfo.create(window)
            }
        }
    }()
}
, function(e, t, n) {
    "use strict";
    var r = n(29).root.Symbol;
    t.rxSubscriber = "function" == typeof r && "function" == typeof r.for ? r.for("rxSubscriber") : "@@rxSubscriber",
    t.$$rxSubscriber = t.rxSubscriber
}
, function(e, t, n) {
    var r = n(8)
      , o = Object.create
      , i = function() {
        function e() {}
        return function(t) {
            if (!r(t))
                return {};
            if (o)
                return o(t);
            e.prototype = t;
            var n = new e;
            return e.prototype = void 0,
            n
        }
    }();
    e.exports = i
}
, function(e, t, n) {
    var r = n(214)();
    e.exports = r
}
, function(e, t, n) {
    var r = n(215)
      , o = n(55)
      , i = n(6)
      , a = n(35)
      , c = n(64)
      , s = n(40)
      , u = Object.prototype.hasOwnProperty;
    e.exports = function(e, t) {
        var n = i(e)
          , l = !n && o(e)
          , f = !n && !l && a(e)
          , p = !n && !l && !f && s(e)
          , d = n || l || f || p
          , h = d ? r(e.length, String) : []
          , g = h.length;
        for (var m in e)
            !t && !u.call(e, m) || d && ("length" == m || f && ("offset" == m || "parent" == m) || p && ("buffer" == m || "byteLength" == m || "byteOffset" == m) || c(m, g)) || h.push(m);
        return h
    }
}
, function(e, t, n) {
    (function(t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.exports = n
    }
    ).call(t, n(33))
}
, function(e, t) {
    e.exports = function(e) {
        return function(t) {
            return e(t)
        }
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        return function(n) {
            return e(t(n))
        }
    }
}
, function(e, t) {
    var n = Function.prototype.toString;
    e.exports = function(e) {
        if (null != e) {
            try {
                return n.call(e)
            } catch (e) {}
            try {
                return e + ""
            } catch (e) {}
        }
        return ""
    }
}
, function(e, t, n) {
    var r = n(157)
      , o = n(253)
      , i = n(158)
      , a = 1
      , c = 2;
    e.exports = function(e, t, n, s, u, l) {
        var f = n & a
          , p = e.length
          , d = t.length;
        if (p != d && !(f && d > p))
            return !1;
        var h = l.get(e);
        if (h && l.get(t))
            return h == t;
        var g = -1
          , m = !0
          , v = n & c ? new r : void 0;
        for (l.set(e, t),
        l.set(t, e); ++g < p; ) {
            var b = e[g]
              , y = t[g];
            if (s)
                var _ = f ? s(y, b, g, t, e, l) : s(b, y, g, e, t, l);
            if (void 0 !== _) {
                if (_)
                    continue;
                m = !1;
                break
            }
            if (v) {
                if (!o(t, function(e, t) {
                    if (!i(v, t) && (b === e || u(b, e, n, s, l)))
                        return v.push(t)
                })) {
                    m = !1;
                    break
                }
            } else if (b !== y && !u(b, y, n, s, l)) {
                m = !1;
                break
            }
        }
        return l.delete(e),
        l.delete(t),
        m
    }
}
, function(e, t, n) {
    var r = n(11).Uint8Array;
    e.exports = r
}
, function(e, t, n) {
    var r = n(8);
    e.exports = function(e) {
        return e == e && !r(e)
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        return function(n) {
            return null != n && n[e] === t && (void 0 !== t || e in Object(n))
        }
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r; )
            o[n] = t(e[n], n, e);
        return o
    }
}
, function(e, t) {
    e.exports = {
        toU8IntArray: function(e) {
            for (var t = [], n = [], r = 0; r < e.length; r++) {
                var o, i = e.charCodeAt(r);
                for (n.length = 0; (o = 255 & i) || i; )
                    n.push(o),
                    i >>>= 8;
                t = t.concat(n.reverse())
            }
            return t
        },
        intToUnsignedHex: function(e) {
            for (var t, n = []; (t = 65535 & e) || e; )
                t = t.toString(16),
                t = "0000".slice(t.length) + t,
                n.push(t),
                e >>>= 16;
            return n.reverse().join("")
        }
    }
}
, function(e, t, n) {
    var r = n(76)
      , o = n(32);
    e.exports = function(e, t, n) {
        (void 0 === n || o(e[t], n)) && (void 0 !== n || t in e) || r(e, t, n)
    }
}
, function(e, t, n) {
    var r = n(23)
      , o = function() {
        try {
            var e = r(Object, "defineProperty");
            return e({}, "", {}),
            e
        } catch (e) {}
    }();
    e.exports = o
}
, function(e, t) {
    e.exports = function(e, t) {
        if ("__proto__" != t)
            return e[t]
    }
}
, function(e, t, n) {
    var r = n(136)
      , o = n(192);
    e.exports = function(e) {
        return r(function(t, n) {
            var r = -1
              , i = n.length
              , a = i > 1 ? n[i - 1] : void 0
              , c = i > 2 ? n[2] : void 0;
            for (a = e.length > 3 && "function" == typeof a ? (i--,
            a) : void 0,
            c && o(n[0], n[1], c) && (a = i < 3 ? void 0 : a,
            i = 1),
            t = Object(t); ++r < i; ) {
                var s = n[r];
                s && e(t, s, r, a)
            }
            return t
        })
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__assign || function() {
        return (r = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }
      , o = this && this.__read || function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
      , i = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(o(arguments[t]));
        return e
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a, c, s, u, l, f = n(13), p = n(4), d = n(148), h = n(289), g = n(17), m = n(334), v = n(335), b = n(3).Logger.create("lib.tracking.call");
    s = a || (a = {}),
    u = p.isBg() ? new m.DefaultFelogClient(g.URLS.newFelog,g.appName,g.getVersion(),g.ENV,window.fetch.bind(window)) : void 0,
    l = p.isBg() ? new v.SumoLogicClient(g.URLS.sumoLogic,g.appName,g.getVersion(),g.ENV,window.fetch.bind(window)) : void 0,
    (c = s.methods || (s.methods = {})).sendFelog = function(e, t, n, r) {
        if (!u)
            throw Error("sendFelog unavailable");
        u.sendEvent({
            logger: e,
            message: t,
            level: n,
            extra: r
        }).catch(function(o) {
            return h.sendEventPixel(e, t, n, r, u.getContext())
        })
    }
    ,
    c.sendFelogEvent = function(e) {
        if (!u)
            throw Error("felog unavailable");
        u.sendEvent(e).catch(function(t) {
            return h.sendEventPixel2(e, u.getContext())
        })
    }
    ,
    c.sendSumoLogic = function(e, t, n, r) {
        if (!l)
            throw Error("sumoLogicClient unavailable");
        l.send({
            logger: e,
            message: t,
            level: n,
            extra: r
        }).catch(function(o) {
            return h.sendEventPixel(e, t, n, r, l.getContext())
        })
    }
    ,
    c.sendFelogCrashLogs = function(e) {
        u && u.sendCrashLog(e)
    }
    ,
    c.sendFelogUsageEvent = function(e, t, n, r) {
        if (!u)
            throw Error("felogClient unavailable");
        u.sendUsageEvent(e, t, n, r).catch(function(r) {
            return h.sendEventPixel(e, t, n)
        })
    }
    ,
    c.setUserId = function(e) {
        u && u.setUserId(e),
        l && l.setUserId(e)
    }
    ,
    c.setContainerId = function(e) {
        u && u.setContainerId(e),
        l && l.setContainerId(e)
    }
    ,
    s.CALL_HANDLER_ID = "tracking/RPC",
    t.callBgPage = Object.keys(a.methods).reduce(function(e, t) {
        return e[t] = function() {
            for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
            return _.apply(void 0, i([a.CALL_HANDLER_ID, t], e))
        }
        ,
        e
    }, {});
    var y = [];
    function _(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
        var r = function(t) {
            b.warn("tracking call " + e + " failed, reason: ", t)
        };
        if (p.isBg())
            p.asyncCall(function() {
                var n;
                try {
                    switch (E(e, t),
                    e) {
                    case a.CALL_HANDLER_ID:
                        var o = t[0]
                          , c = t.slice(1);
                        (n = a.methods)[o].apply(n, i(c));
                        break;
                    default:
                        w(e, t)
                    }
                } catch (e) {
                    r(e)
                }
            }, 20);
        else {
            var o, c = function() {
                return clearInterval(o)
            };
            o = window.setTimeout(function() {
                return e = "timeout call through bg page",
                c(),
                void r(e);
                var e
            }, 1e4),
            f.emitBackground("tracking-call", {
                msg: e,
                data: t
            }, c)
        }
    }
    function w(e, t) {
        var n = o(e.split("."), 2)
          , i = n[0]
          , a = n[1];
        if ("gnar" === i)
            if (d.tracker.gnar)
                if ("track" === a) {
                    var c = o(t, 2)
                      , s = c[0]
                      , u = c[1];
                    d.tracker.gnar.track(r({
                        eventName: g.gnarAppName + "/" + s
                    }, u))
                } else
                    "pingMaybe" === a ? d.tracker.gnar.pingMaybe() : "setUser" === a ? d.tracker.gnar.setUser(t[0], t[1]) : b.error("gnar client does not have method '" + a + "' for '" + e + "' in runMessage");
            else
                b.error("gnar client not available for '" + e + "' in runMessage");
        else
            b.error("unrecognized '" + e + "' in runMessage")
    }
    function E(e, t) {
        b.info(e, t)
    }
    t.call = _,
    t.runMessage = w,
    t.logCall = E,
    t.getLog = function() {
        var e = y.slice(0);
        return y.length = 0,
        e
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(3)
      , o = n(1)
      , i = function() {
        function e(e) {
            this._perf = e,
            this._log = r.Logger.create("cs.telemetry.PerformanceMetricsImpl")
        }
        return e.prototype.flushMeasures = function(e) {
            try {
                var t = this._perf.getEntriesByName(e, "measure");
                return this._perf.clearMeasures(e),
                t.map(function(e) {
                    return e.duration
                })
            } catch (e) {
                return this._log.warn("failed to retrieve perf measurements", e),
                []
            }
        }
        ,
        e.prototype.startMeasure = function(e) {
            var t = this
              , n = Math.random()
              , r = "__" + e + "_" + n + "-start"
              , i = "__" + e + "_" + n + "-end";
            try {
                this._perf.mark(r)
            } catch (e) {
                return this._log.warn("could not start measure – ignoring measurement", e),
                {
                    endMeasure: o.noOp
                }
            }
            var a = !1;
            return {
                endMeasure: function() {
                    if (!a) {
                        a = !0;
                        try {
                            t._perf.mark(i),
                            t._perf.measure(e, r, i)
                        } catch (e) {
                            t._log.warn("could not complete measure", e)
                        }
                    }
                }
            }
        }
        ,
        e.prototype.measure = function(e, t) {
            var n = "__" + e + "-start"
              , r = "__" + e + "-end";
            try {
                this._perf.mark(n)
            } catch (e) {
                return this._log.warn("could not start measure – ignoring measurement", e),
                t()
            }
            try {
                return t()
            } finally {
                try {
                    this._perf.mark(r),
                    this._perf.measure(e, n, r)
                } catch (e) {
                    this._log.warn("could not complete measure", e)
                }
            }
        }
        ,
        e
    }();
    t.PerformanceMetricsImpl = i,
    function(e) {
        e.dummy = {
            flushMeasures: function(e) {
                return []
            },
            measure: function(e, t) {
                return t()
            },
            startMeasure: function(e) {
                return {
                    endMeasure: function() {}
                }
            }
        },
        e.create = function(t) {
            return void 0 !== t ? new i(t) : e.dummy
        }
        ,
        e.getStats = function(e) {
            if (0 === e.length)
                return {
                    ct: 0
                };
            var t = e.reduce(function(e, t) {
                return Math.min(e, t)
            }, Number.MAX_VALUE)
              , n = e.reduce(function(e, t) {
                return Math.max(e, t)
            }, Number.MIN_VALUE)
              , r = e.length >= 6 ? e.reduce(function(e, t) {
                return e + t
            }, 0) / e.length : void 0;
            return {
                ct: e.length,
                min: t,
                max: n,
                range: n - t,
                avg: r,
                stddev: void 0 !== r && e.length > 1 ? Math.sqrt(e.reduce(function(e, t) {
                    return e + Math.pow(t - r, 2)
                }, 0) / (e.length - 1)) : void 0
            }
        }
    }(t.PerformanceMetrics || (t.PerformanceMetrics = {}))
}
, , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1);
    t.firefox = r.try_(function() {
        return browser
    }, function() {
        return window.browser
    }),
    window.edge = window.browser,
    window.chrome = window.chrome,
    t.default = void 0
}
, function(e, t, n) {
    var r = n(111)
      , o = n(39);
    e.exports = function(e, t) {
        return e && r(e, t, o)
    }
}
, function(e, t, n) {
    "use strict";
    var r, o = this && this.__read || function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
    , i = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(o(arguments[t]));
        return e
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(175)
      , c = n(17);
    t.PROTOCOL_VERSION = "1.0",
    t.SITES_TO_RELOAD = ["inbox.google.com", "mail.google.com", "yahoo.com", "mail.live.com", "facebook.com", "tumblr.com", "stackoverflow.com", "wordpress.com", "wordpress.org", "blogspot.com"],
    t.FACEBOOK_SITES = ["facebook.com", "messenger.com", "work.fb.com", "business.facebook.com"],
    t.HTML_GHOST_SITES = i(["twitter.com"], t.FACEBOOK_SITES),
    t.CUSTOM_UNSUPPORTED_MESSAGES = {
        "drive.google.com": {
            title: "Google Drive Not Supported",
            message: 'We hope to support Google Drive apps<br/> in the future, but for now please use your</br> <a class="openGrammarly" href="' + c.URLS.app + '">Grammarly Editor</a>.'
        },
        "docs.google.com": {
            title: "Google Drive Not Supported",
            message: 'We hope to support Google Drive apps<br/> in the future, but for now please use your</br> <a class="openGrammarly" href="' + c.URLS.app + '">Grammarly Editor</a>.'
        },
        "chrome.google.com": {
            title: "Web Store Not Supported"
        }
    };
    t.PAGE_CONFIG_DEFAULT_INTERVAL = 18e5,
    t.PAGE_CONFIG_UPDATE_INTERVALS = [6e5, t.PAGE_CONFIG_DEFAULT_INTERVAL, 36e5, 108e5, 432e5, 864e5, 31536e6],
    t.OVERRIDE_PAGE_CONFIG = {},
    t.PAGE_CONFIG_INTERNAL = ((r = {
        version: {
            enabled: !1,
            servicePage: !0
        },
        extensions: {
            enabled: !1,
            servicePage: !0
        },
        settings: {
            enabled: !1,
            servicePage: !0
        },
        "com.safari.grammarlyspellcheckergrammarchecker": {
            enabled: !1,
            matchInclusions: !0,
            servicePage: !0
        }
    })["app." + c.GRAMMARLY_DOMAIN] = {
        enabled: !1,
        grammarlyEditor: !0
    },
    r["linkedin.com"] = {
        pages: {
            "/messaging": {
                afterReplaceEvents: ["input"]
            }
        }
    },
    r["plus.google.com"] = {
        afterReplaceEvents: ["keyup"],
        minFieldHeight: 0,
        minFieldWidth: 0
    },
    r["facebook.com"] = {
        minFieldHeight: 0,
        pages: {
            "/marketplace": {
                afterReplaceEvents: ["input"]
            }
        }
    },
    r["mail.google.com"] = {
        fields: [{
            name: "to"
        }, {
            name: "cc"
        }, {
            name: "bcc"
        }, {
            className: "vO"
        }],
        subframes: !1
    },
    r["drive.google.com"] = {
        track: !0
    },
    r["docs.google.com"] = {
        track: !0
    },
    r["app.asana.com"] = {
        fields: [{
            className: "task-row-text-input"
        }]
    },
    r["tumblr.com"] = {
        fields: [{
            attr: ["aria-label", "Post title"]
        }, {
            attr: ["aria-label", "Type or paste a URL"]
        }]
    },
    r["chrome.google.com"] = {
        dontShowDisabledBadge: !0
    },
    r);
    t.PAGE_CONFIG = {
        pageConfig: a({}, {
            "hootsuite.com": {
                enabled: !1
            },
            "chrome.google.com": {
                enabled: !1
            },
            "facebook.com": {
                enabled: !0,
                pages: {
                    ".*/notes": {
                        enabled: !1
                    }
                }
            },
            "onedrive.live.com": {
                enabled: !1
            },
            "docs.com": {
                enabled: !1
            },
            "sp.docs.com": {
                enabled: !1
            },
            "docs.google.com": {
                enabled: !0,
                matchInclusions: !1,
                matchSubdomains: !1,
                disabledBrowsers: ["firefox", "safari", "edge"],
                pages: {
                    ".*/document": {
                        matchPartOfUrl: !0,
                        minFieldHeight: 0,
                        minFieldWidth: 0,
                        enabled: !0
                    },
                    ".*/spreadsheets": {
                        enabled: !1
                    },
                    ".*/presentation": {
                        enabled: !1
                    }
                },
                track: !0
            },
            "drive.google.com": {
                enabled: !1
            },
            "texteditor.nsspot.net": {
                enabled: !1
            },
            "jsbin.com": {
                enabled: !1
            },
            "jsfiddle.net": {
                enabled: !1
            },
            "quora.com": {
                enabled: !1
            },
            "paper.dropbox.com": {
                enabled: !1
            },
            "mail.live.com": {
                enabled: !1,
                matchInclusions: !0
            },
            "imperavi.com": {
                enabled: !1
            },
            "usecanvas.com": {
                enabled: !1
            }
        }, t.PAGE_CONFIG_INTERNAL)
    }
}
, function(e, t, n) {
    var r = n(51)
      , o = n(282)
      , i = n(283);
    e.exports = function(e, t) {
        return i(o(e, t, r), e + "")
    }
}
, , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(156)
      , o = n(4)
      , i = n(10)
      , a = n(1)
      , c = n(59)
      , s = n(3).Logger.create("extension-api.message.bg");
    function u(e) {
        if (!e)
            return !1;
        var t = i.getGlobal().bundleInfo.browser
          , n = "firefox" === t ? /^moz-extension:\/\/.*\/src\/popup.html$/ : "edge" === t ? /^ms-browser-extension:\/\/.*\/src\/popup.html$/ : "chrome" === t ? chrome && chrome.runtime && chrome.runtime.id ? new RegExp(chrome.runtime.id + "/src/popup.html") : void 0 : a.assertNever(t);
        return void 0 !== n && n.test(e)
    }
    t.SETTINGS_TAB_ID = "popup",
    t.bgPreload = function() {
        var e = (o.isChrome() || o.isFF()) && (!chrome.extension || !chrome.tabs || !chrome.runtime || !chrome.runtime.onConnect)
          , t = o.isEdge() && (!edge.extension || !edge.tabs || !edge.runtime || !edge.runtime.onConnect);
        if (e || t) {
            var n = window.localStorage.getItem("bgInitFail") || "0"
              , r = parseInt(n, 10);
            r > 4 ? s.error("too many bgInitFail " + r) : (window.localStorage.setItem("bgInitFail", (r + 1).toString()),
            document.location.reload())
        }
    }
    ;
    var l = function() {
        function e(e, n, i) {
            var a = this;
            this._getActiveTab = n,
            this._getAllTabs = i,
            this.kind = "background-message-api",
            this._callbacks = {},
            this._tabPorts = {
                popup: []
            },
            this._messageHelper = new r.MessageHelperImpl,
            this._sendMessageToPorts = function(e, t) {
                var n = a._tabPorts[e];
                n && n.forEach(function(e) {
                    return e.postMessage(t)
                })
            }
            ,
            this.toFocused = function(e, t) {
                return a._getActiveTab().then(function(n) {
                    var r = n.id
                      , i = n.url;
                    if (r)
                        return u(i) ? s.warn("toFocussed not allowed for popup when it open like regular tab " + e, t) : void a._sendMessageToPorts(r.toString(), {
                            type: e,
                            content: t,
                            callid: o.guid()
                        })
                })
            }
            ,
            this.broadcast = function(e, n) {
                if (n) {
                    var r = function(t) {
                        var r = t.id
                          , i = t.url;
                        r && i && -1 === i.indexOf("chrome-extension:") && a._sendMessageToPorts(r.toString(), {
                            type: e,
                            callid: o.guid(),
                            content: n
                        })
                    };
                    a._getAllTabs().then(function(e) {
                        return e.forEach(r)
                    }),
                    a._tabPorts.popup && a._tabPorts.popup.length && a._getActiveTab().then(function(e) {
                        var n = e.url;
                        r({
                            id: t.SETTINGS_TAB_ID,
                            url: n
                        })
                    })
                }
            }
            ,
            this._initPortListener = function(e) {
                if (e.name === c.ports.bridge)
                    e.onMessage(function(e) {
                        "message.toFocussed" === e.method && a.toFocused(e.params && e.params.type, e.params && e.params.content)
                    });
                else if (e.name === c.ports.broadcast)
                    e.onMessage(function(e) {
                        return a.broadcast(e.type, e.content)
                    });
                else if (e.name === c.ports.background) {
                    var n = e.sender;
                    if (n) {
                        if (n.tab) {
                            var r = n.tab
                              , o = r.id
                              , i = r.url;
                            if (o) {
                                var s = a._tabPorts[o];
                                void 0 === s && (s = a._tabPorts[o] = []),
                                s.push(e)
                            }
                            i && 0 === i.indexOf("http") && a._messageHelper.fire("tab-connected", {
                                tab: o,
                                url: i
                            }),
                            e.onDisconnect(function() {
                                if (o) {
                                    var t = a._tabPorts[o];
                                    t && t.splice(t.indexOf(e), 1)
                                }
                            })
                        }
                        var l = n.url ? n.url : n.tab ? n.tab.url : "";
                        if (l && u(l)) {
                            var f = t.SETTINGS_TAB_ID;
                            a._tabPorts[f] = a._tabPorts[f] || [],
                            a._tabPorts[f].push(e),
                            e.onDisconnect(function() {
                                var t = a._tabPorts[f];
                                t.splice(t.indexOf(e), 1)
                            })
                        }
                    }
                    e.onMessage(function(r) {
                        var o = function(t) {
                            var r = t.callid
                              , o = t.content
                              , i = t.type;
                            a._callbacks[r] && (a._callbacks[r](o),
                            delete a._callbacks[r]);
                            a._messageHelper.fire(i, o, function(t) {
                                return e.postMessage({
                                    content: t,
                                    callid: r
                                })
                            }, n && n.tab ? n.tab.id : -1)
                        };
                        "tab-connected" === r.type ? a._getActiveTab().then(function(e) {
                            var n = e.url;
                            r.content = {
                                tab: t.SETTINGS_TAB_ID,
                                url: n
                            },
                            o(r)
                        }) : o(r)
                    })
                }
            }
            ,
            e(this._initPortListener)
        }
        return e.prototype.getPortExists = function(e) {
            return !!this._tabPorts[e]
        }
        ,
        e.prototype.sendTo = function(e, t, n, r, i, a) {
            var c = this._tabPorts[e];
            if (c && c.length) {
                var s = a ? c.filter(function(e) {
                    return a(e.sender && e.sender.url)
                }) : c;
                if (s.length) {
                    var u = {
                        type: t,
                        content: n
                    };
                    r && "function" == typeof r && (u.callid = o.guid(),
                    this._callbacks[u.callid] = r),
                    s.forEach(function(e) {
                        return e.postMessage(u)
                    })
                } else
                    i && i({
                        message: "no ports on specified tabFilter"
                    })
            } else
                i && i({
                    message: "no ports on specified tabId"
                })
        }
        ,
        e.prototype.listen = function(e, t) {
            this._messageHelper.listen(e, t)
        }
        ,
        e
    }();
    t.GenericBackgroundMessageApiImpl = l
}
, function(e, t, n) {
    var r = n(98)
      , o = n(110)
      , i = n(134)
      , a = n(90)
      , c = n(67)
      , s = n(6)
      , u = n(35)
      , l = n(38)
      , f = n(8)
      , p = n(40);
    e.exports = function(e, t, n) {
        var d = s(e)
          , h = d || u(e) || p(e);
        if (t = a(t, 4),
        null == n) {
            var g = e && e.constructor;
            n = h ? d ? new g : [] : f(e) && l(g) ? o(c(e)) : {}
        }
        return (h ? r : i)(e, function(e, r, o) {
            return t(n, e, r, o)
        }),
        n
    }
}
, function(e, t, n) {
    (function(e) {
        var r = n(113)
          , o = "object" == typeof t && t && !t.nodeType && t
          , i = o && "object" == typeof e && e && !e.nodeType && e
          , a = i && i.exports === o && r.process
          , c = function() {
            try {
                var e = i && i.require && i.require("util").types;
                return e || a && a.binding && a.binding("util")
            } catch (e) {}
        }();
        e.exports = c
    }
    ).call(t, n(44)(e))
}
, function(e, t) {
    e.exports = function(e, t) {
        for (var n = -1, r = t.length, o = e.length; ++n < r; )
            e[o + n] = t[n];
        return e
    }
}
, function(e, t, n) {
    var r = n(187)
      , o = n(173)
      , i = Object.prototype.propertyIsEnumerable
      , a = Object.getOwnPropertySymbols
      , c = a ? function(e) {
        return null == e ? [] : (e = Object(e),
        r(a(e), function(t) {
            return i.call(e, t)
        }))
    }
    : o;
    e.exports = c
}
, function(e, t, n) {
    var r = n(118);
    e.exports = function(e) {
        var t = new e.constructor(e.byteLength);
        return new r(t).set(new r(e)),
        t
    }
}
, function(e, t, n) {
    var r = n(28)
      , o = n(15);
    e.exports = function(e) {
        return o(e) && r(e)
    }
}
, , function(e, t, n) {
    e.exports = n(330)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.tracker = {}
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(10)
      , o = n(127)
      , i = n(290)
      , a = n(18)
      , c = n(3).Logger.create("lib.tracking.logger");
    t.felog = new i.Telemetry(o.callBgPage.sendFelog.bind(o.callBgPage),o.callBgPage.sendFelogUsageEvent.bind(o.callBgPage),o.callBgPage.setUserId.bind(o.callBgPage),o.callBgPage.setContainerId.bind(o.callBgPage),r.getGlobal().appConfig.felog.sendUsageMetrics,i.PerformanceMetrics.create(window.performance),r.getGlobal().appConfig.felog.sendPerfMetrics,o.callBgPage.sendFelogEvent.bind(o.callBgPage),o.callBgPage.sendFelogCrashLogs.bind(o.callBgPage)),
    a.isBg() && (c.info("Installing unhandled error loggers..."),
    window.addEventListener("error", function(e) {
        return t.felog.unhandledBgPageException(e)
    }),
    window.addEventListener("unhandledrejection", function(e) {
        return t.felog.unhandledBgPageRejection(e)
    }))
}
, , , , , function(e, t, n) {
    "use strict";
    t.empty = {
        closed: !0,
        next: function(e) {},
        error: function(e) {
            throw e
        },
        complete: function() {}
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(29);
    function o(e) {
        var t, n = e.Symbol;
        return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"),
        n.observable = t) : t = "@@observable",
        t
    }
    t.getSymbolObservable = o,
    t.observable = o(r.root),
    t.$$observable = t.observable
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && e[Symbol.iterator]
          , n = 0;
        return t ? t.call(e) : {
            next: function() {
                return e && n >= e.length && (e = void 0),
                {
                    value: e && e[n++],
                    done: !e
                }
            }
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(17)
      , i = n(3).Logger.create("extension-api.message")
      , a = function() {}
      , c = function() {
        return function() {
            var e = this;
            this._listeners = {},
            this._queue = {},
            this.fire = function(t, n, r, o) {
                void 0 === r && (r = a);
                var i = e._listeners[t] || [];
                i.length ? i.forEach(function(e) {
                    return e(n, r, o)
                }) : (e._queue[t] = e._queue[t] || [],
                e._queue[t].push({
                    content: n,
                    callback: r,
                    sender: o
                }))
            }
            ,
            this.unlisten = function(t, n) {
                var r = e._listeners[t] || []
                  , o = r.indexOf(n);
                -1 !== o && (1 === r.length ? delete e._listeners[t] : r.splice(o, 1))
            }
            ,
            this.listenOnce = function(t, n) {
                var r = function(o, i, a) {
                    e.unlisten(t, r),
                    n && n(o, i, a)
                };
                e.listen(t, r)
            }
            ,
            this.listen = function(t, n) {
                var o, a;
                e._listeners[t] = e._listeners[t] || [],
                -1 === e._listeners[t].indexOf(n) && e._listeners[t].push(n);
                var c = e._queue[t] || [];
                if (c.length) {
                    try {
                        for (var s = r(c), u = s.next(); !u.done; u = s.next()) {
                            var l = u.value;
                            try {
                                n(l.content, l.callback, l.sender)
                            } catch (e) {
                                i.error("exception during proccesing buffered messages", e)
                            }
                        }
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            u && !u.done && (a = s.return) && a.call(s)
                        } finally {
                            if (o)
                                throw o.error
                        }
                    }
                    delete e._queue[t]
                }
            }
        }
    }();
    function s() {
        return safari.application.activeBrowserWindow && safari.application.activeBrowserWindow.activeTab
    }
    t.MessageHelperImpl = c,
    t.safariBridgeId = "forge-bridge" + o.getUuid(),
    t.getSafariActiveTab = s,
    t.getSafariActiveTabUrl = function() {
        var e = s();
        return e && e.url || "http://newtab"
    }
    ,
    t.emitter = function() {
        var e = {}
          , t = {};
        return {
            emit: function(n, r, o) {
                var i = e[n];
                i ? i.forEach(function(e) {
                    return e(r, o)
                }) : (t[n] || (t[n] = []),
                t[n].push({
                    data: r,
                    callback: o
                }))
            },
            on: function(n, r) {
                e[n] || (e[n] = []),
                e[n].push(r),
                t[n] && t[n].forEach(function(e) {
                    return r(e.data, e.callback)
                })
            }
        }
    }
}
, function(e, t, n) {
    var r = n(74)
      , o = n(251)
      , i = n(252);
    function a(e) {
        var t = -1
          , n = null == e ? 0 : e.length;
        for (this.__data__ = new r; ++t < n; )
            this.add(e[t])
    }
    a.prototype.add = a.prototype.push = o,
    a.prototype.has = i,
    e.exports = a
}
, function(e, t) {
    e.exports = function(e, t) {
        return e.has(t)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1)
      , o = n(156)
      , i = n(4)
      , a = n(59)
      , c = n(3).Logger.create("Messaging.extension-api.content")
      , s = function() {
        function e(e) {
            var t = this;
            this.kind = "content-script-message-api",
            this._callbacks = {},
            this._messageHelper = new o.MessageHelperImpl,
            this._proxyPortsStorage = {},
            this.broadcastBackground = function() {
                for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                return t._emit(t.backgroundPort, "bg").apply(null, e)
            }
            ,
            this.broadcast = function() {
                for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                return t._emit(t.broadcastPort, "tabs").apply(null, e)
            }
            ,
            this._onPortMessage = function(e) {
                c.trace("portMessage", e)
            }
            ,
            this._checkHealth = function() {
                var e = null
                  , n = null
                  , r = function() {
                    document.dispatchEvent(new CustomEvent("grammarly:ping"))
                }
                  , o = function() {
                    a()
                }
                  , i = function() {
                    [t.port, t.backgroundPort, t.broadcastPort].forEach(function(e) {
                        e && e.removeMessageListeners && e.removeMessageListeners()
                    }),
                    t.port = t.backgroundPort = t.broadcastPort = null,
                    a(),
                    document.addEventListener("grammarly:proxyports", t._onGrammarlyResetAfterTimeout),
                    document.dispatchEvent(new CustomEvent("grammarly:offline"))
                };
                function a() {
                    document.removeEventListener("grammarly:pong", o),
                    n && (clearTimeout(n),
                    n = null),
                    e && (clearInterval(e),
                    e = null)
                }
                return function() {
                    a(),
                    document.addEventListener("grammarly:pong", o),
                    e = window.setInterval(r, 500),
                    n = window.setTimeout(i, 5e3)
                }
            }(),
            this._onGrammarlyResetAfterTimeout = function() {
                document.removeEventListener("grammarly:proxyports", t._onGrammarlyResetAfterTimeout),
                t.port = t._initProxyPort(a.ports.bridge, t._onPortMessage, t._checkHealth, !0),
                t.backgroundPort = t._initProxyPort(a.ports.background, t._onBgPortMessage, t._checkHealth),
                t.broadcastPort = t._initProxyPort(a.ports.broadcast, null, t._checkHealth)
            }
            ,
            this._onBgPortMessage = function(e) {
                var n = e.callid
                  , r = e.content
                  , o = e.type;
                t._callbacks[n] ? (t._callbacks[n](r),
                delete t._callbacks[n]) : t._messageHelper.fire(o, r, function(e) {
                    if (!t.backgroundPort)
                        throw new Error("fail reply to bg page - connection lost");
                    t.backgroundPort.postMessage({
                        content: e,
                        callid: n
                    })
                })
            }
            ,
            this._initProxyPort = function(e, n, r, o) {
                void 0 === o && (o = !1);
                var i = t._proxyPort(e);
                return o && t._checkHealth(),
                n && i.onMessage(n),
                r && i.onDisconnect(r),
                i
            }
            ,
            this._emit = function(e, n) {
                return function(r, o, a, c) {
                    var s = i.guid();
                    a && "function" == typeof a && (t._callbacks[s] = a);
                    try {
                        if (!e)
                            throw new Error("lost connection to " + n + " port");
                        e.postMessage({
                            type: r,
                            callid: s,
                            content: o
                        })
                    } catch (e) {
                        if (!c)
                            throw e;
                        c(e)
                    }
                }
            }
            ,
            this._proxyPort = function(e) {
                t._proxyPortsStorage[e] = {};
                var n = function(n, r) {
                    var o = r.detail;
                    if (o.name === e) {
                        var i = t._proxyPortsStorage[e][n];
                        i && i(o.msg)
                    }
                }
                  , r = function(e) {
                    return n("success", e)
                }
                  , o = function(e) {
                    return n("error", e)
                };
                return document.addEventListener("grammarly:message", r),
                document.addEventListener("grammarly:error", o),
                {
                    postMessage: function(t) {
                        void 0 === t && (t = {});
                        var n = {
                            data: t,
                            name: e
                        };
                        return document.dispatchEvent(new CustomEvent("grammarly:action",{
                            detail: n
                        }))
                    },
                    onMessage: function(n) {
                        t._proxyPortsStorage[e].success = n
                    },
                    onDisconnect: function(n) {
                        t._proxyPortsStorage[e].error = n
                    },
                    removeMessageListeners: function() {
                        document.removeEventListener("grammarly:message", r),
                        document.removeEventListener("grammarly:error", o)
                    }
                }
            }
            ,
            this.port = e(a.ports.bridge),
            this.port.onMessage(this._onPortMessage),
            this.port.onDisconnect(function() {
                t.port = null,
                t.port = t._initProxyPort(a.ports.bridge, t._onPortMessage, t._checkHealth, !0)
            }),
            this.backgroundPort = e(a.ports.background),
            this.backgroundPort.onMessage(this._onBgPortMessage),
            this.backgroundPort.onDisconnect(function() {
                t.backgroundPort = null,
                t.backgroundPort = t._initProxyPort(a.ports.background, t._onBgPortMessage, t._checkHealth)
            }),
            this.broadcastPort = e(a.ports.broadcast),
            this.broadcastPort.onDisconnect(function() {
                t.broadcastPort = null,
                t.broadcastPort = t._initProxyPort(a.ports.broadcast, null, t._checkHealth)
            })
        }
        return e.prototype.onBackgroundPortReconnect = function(e) {
            this.backgroundPort && this.backgroundPort.onReconnect && this.backgroundPort.onReconnect(e)
        }
        ,
        e.prototype.listen = function(e, t) {
            this._messageHelper.listen(e, t)
        }
        ,
        e.prototype.toFocused = function(e, t) {
            var n = this;
            return r.SafePromise.create(function(r) {
                if (!n.port)
                    throw new Error("lost connection to bg page");
                n.port.postMessage({
                    method: "message.toFocussed",
                    params: {
                        type: e,
                        content: t
                    }
                }),
                r()
            })
        }
        ,
        e
    }();
    t.GenericContentScriptMessageApiImpl = s,
    t.runSettingsPopupCompatibilityFixes = function() {
        window.addEventListener("update-window-size-gr", function(e) {
            var t = document.createElement("div");
            if (t.style.height = "1px",
            e.detail && e.detail.force) {
                var n = setInterval(function() {
                    document.body.appendChild(t),
                    setTimeout(function() {
                        t.parentNode && t.parentNode.removeChild(t)
                    }, 10)
                }, 100);
                setTimeout(function() {
                    return clearInterval(n)
                }, 405)
            }
        }, !1),
        window.addEventListener("close-popup-gr", function() {
            window.close()
        }, !1)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.handleChromeError = function(e, t) {
        chrome.runtime.lastError ? t(chrome.runtime.lastError) : e()
    }
}
, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(147)
      , o = (n(60),
    n(4))
      , i = o.guid();
    function a(e, t, n, o, c) {
        if (void 0 === c && (c = !1),
        null != e) {
            var s = e;
            if ("string" != typeof t)
                return r(t, function(e, t) {
                    a(s, t, e, o)
                });
            if (n) {
                var u = s[i] || [];
                return s[i] = u,
                o ? (s[i] = u.filter(function(e) {
                    return !(e.event === t && e.cb === n)
                }),
                s.removeEventListener(t, n, c)) : (u.push({
                    event: t,
                    cb: n
                }),
                s.addEventListener(t, n, c)),
                {
                    el: s,
                    event: t,
                    cb: n,
                    bubble: c
                }
            }
        }
    }
    t.listen = a,
    t.unlisten = function e(t, n, r, o) {
        var c = t;
        n || null == c[i] ? a(c, n, r, !0, o) : c[i].forEach(function(t) {
            return e(c, t.event, t.cb, t.bubble)
        })
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.asEffect = t.SELECT_ARG_ERROR = t.INVALID_PATTERN = t.CANCEL_ARG_ERROR = t.JOIN_ARG_ERROR = t.FORK_ARG_ERROR = t.CALL_FUNCTION_ARG_ERROR = void 0;
    var r = function() {
        return function(e, t) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return function(e, t) {
                    var n = []
                      , r = !0
                      , o = !1
                      , i = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value),
                        !t || n.length !== t); r = !0)
                            ;
                    } catch (e) {
                        o = !0,
                        i = e
                    } finally {
                        try {
                            !r && c.return && c.return()
                        } finally {
                            if (o)
                                throw i
                        }
                    }
                    return n
                }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    t.matcher = function(e) {
        return ("*" === e ? E.wildcard : o.is.array(e) ? E.array : o.is.func(e) ? E.predicate : E.default)(e)
    }
    ,
    t.take = function(e) {
        if (arguments.length > 0 && o.is.undef(e))
            throw new Error(u);
        return w(p, o.is.undef(e) ? "*" : e)
    }
    ,
    t.put = function(e) {
        return w(d, e)
    }
    ,
    t.race = function(e) {
        return w(h, e)
    }
    ,
    t.call = function(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
        return w(g, S(e, n))
    }
    ,
    t.apply = function(e, t) {
        var n = arguments.length <= 2 || void 0 === arguments[2] ? [] : arguments[2];
        return w(g, S({
            context: e,
            fn: t
        }, n))
    }
    ,
    t.cps = function(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
        return w(m, S(e, n))
    }
    ,
    t.fork = function(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
        return w(v, S(e, n))
    }
    ,
    t.join = function(e) {
        if (!I(e))
            throw new Error(c);
        return w(b, e)
    }
    ,
    t.cancel = function(e) {
        if (!I(e))
            throw new Error(s);
        return w(y, e)
    }
    ,
    t.select = function(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
        0 === arguments.length ? e = o.ident : (0,
        o.check)(e, o.is.func, l);
        return w(_, {
            selector: e,
            args: n
        })
    }
    ;
    var o = n(61);
    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var a = t.CALL_FUNCTION_ARG_ERROR = "call/cps/fork first argument must be a function, an array [context, function] or an object {context, fn}"
      , c = (t.FORK_ARG_ERROR = "fork first argument must be a generator function or an iterator",
    t.JOIN_ARG_ERROR = "join argument must be a valid task (a result of a fork)")
      , s = t.CANCEL_ARG_ERROR = "cancel argument must be a valid task (a result of a fork)"
      , u = t.INVALID_PATTERN = "Invalid pattern passed to `take` (HINT: check if you didn't mispell a constant)"
      , l = t.SELECT_ARG_ERROR = "select first argument must be a function"
      , f = (0,
    o.sym)("IO")
      , p = "TAKE"
      , d = "PUT"
      , h = "RACE"
      , g = "CALL"
      , m = "CPS"
      , v = "FORK"
      , b = "JOIN"
      , y = "CANCEL"
      , _ = "SELECT"
      , w = function(e, t) {
        var n;
        return i(n = {}, f, !0),
        i(n, e, t),
        n
    }
      , E = {
        wildcard: function() {
            return o.kTrue
        },
        default: function(e) {
            return function(t) {
                return t.type === e
            }
        },
        array: function(e) {
            return function(t) {
                return e.some(function(e) {
                    return e === t.type
                })
            }
        },
        predicate: function(e) {
            return function(t) {
                return e(t)
            }
        }
    };
    function S(e, t) {
        (0,
        o.check)(e, o.is.notUndef, a);
        var n = null;
        if (o.is.array(e)) {
            var i = r(e, 2);
            n = i[0],
            e = i[1]
        } else if (e.fn) {
            var c = e;
            n = c.context,
            e = c.fn
        }
        return (0,
        o.check)(e, o.is.func, a),
        {
            context: n,
            fn: e,
            args: t
        }
    }
    var I = function(e) {
        return e[o.TASK]
    };
    t.asEffect = {
        take: function(e) {
            return e && e[f] && e[p]
        },
        put: function(e) {
            return e && e[f] && e[d]
        },
        race: function(e) {
            return e && e[f] && e[h]
        },
        call: function(e) {
            return e && e[f] && e[g]
        },
        cps: function(e) {
            return e && e[f] && e[m]
        },
        fork: function(e) {
            return e && e[f] && e[v]
        },
        join: function(e) {
            return e && e[f] && e[b]
        },
        cancel: function(e) {
            return e && e[f] && e[y]
        },
        select: function(e) {
            return e && e[f] && e[_]
        }
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t, n) {
        var r = "SagaCancellationException; type: " + e + ", saga: " + t + ", origin: " + n;
        this.name = "SagaCancellationException",
        this.message = r,
        this.type = e,
        this.saga = t,
        this.origin = n,
        this.stack = (new Error).stack
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = r,
    r.prototype = Object.create(Error.prototype),
    r.prototype.constructor = r
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__read || function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
      , o = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(r(arguments[t]));
        return e
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(13)
      , a = n(4)
      , c = n(14)
      , s = n(3)
      , u = n(71)
      , l = n(338)
      , f = n(509)
      , p = s.Logger.create("lib.tracking");
    function d(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
        if (!f.on[e])
            return p.error("No handler specified for message: " + e);
        a.asyncCall(function() {
            return f.on[e].apply(f.on, o(t))
        }, 20)
    }
    t.gnarSpecInstance = u.SafePromise.createCompletionSource(),
    t.gnar = new Proxy({},{
        get: function(e, n) {
            return function() {
                for (var e = [], r = 0; r < arguments.length; r++)
                    e[r] = arguments[r];
                return t.gnarSpecInstance.promise.then(function(t) {
                    var r;
                    c.logCall("gnar", o([n], e)),
                    (r = t)[n].apply(r, o(e))
                }).catch(function(e) {
                    p.error(e)
                })
            }
        }
    }),
    t.initBg = function(e) {
        l.init(e).then(function(e) {
            e ? t.gnarSpecInstance.resolve(e) : (c.felog.bgTrackingInitFail(),
            t.gnarSpecInstance.reject("failed to send tracking event: gnarSpec init failed"))
        }).catch(function(e) {
            c.felog.bgTrackingInitFail(),
            t.gnarSpecInstance.reject("failed to send tracking event: tracking init failed")
        }),
        i.on("gnar-track", function(e) {
            var n, r = e.props, i = e.method;
            return (n = t.gnar)[i].apply(n, o(r))
        }),
        i.on("tracking-fire", function(e) {
            var t = e.msg
              , n = e.data;
            return d.apply(void 0, o([t], n))
        }),
        i.on("tracking-call", function(e, t) {
            var n = e.msg
              , r = e.data;
            void 0 === t && (t = a._f),
            c.call.apply(void 0, o([n], r)),
            t()
        })
    }
    ,
    t.fire = d
}
, , , , function(e, t, n) {
    var r = n(65)
      , o = n(221)
      , i = Object.prototype.hasOwnProperty;
    e.exports = function(e) {
        if (!r(e))
            return o(e);
        var t = [];
        for (var n in Object(e))
            i.call(e, n) && "constructor" != n && t.push(n);
        return t
    }
}
, function(e, t) {
    e.exports = function(e) {
        var t = -1
          , n = Array(e.size);
        return e.forEach(function(e) {
            n[++t] = e
        }),
        n
    }
}
, function(e, t, n) {
    var r = n(172)
      , o = n(143)
      , i = n(39);
    e.exports = function(e) {
        return r(e, i, o)
    }
}
, function(e, t, n) {
    var r = n(142)
      , o = n(6);
    e.exports = function(e, t, n) {
        var i = t(e);
        return o(e) ? i : r(i, n(e))
    }
}
, function(e, t) {
    e.exports = function() {
        return []
    }
}
, function(e, t, n) {
    var r = n(266);
    e.exports = function(e) {
        return null == e ? "" : r(e)
    }
}
, function(e, t, n) {
    var r = n(277)
      , o = n(126)(function(e, t, n) {
        r(e, t, n)
    });
    e.exports = o
}
, function(e, t, n) {
    (function(e) {
        var r = n(11)
          , o = "object" == typeof t && t && !t.nodeType && t
          , i = o && "object" == typeof e && e && !e.nodeType && e
          , a = i && i.exports === o ? r.Buffer : void 0
          , c = a ? a.allocUnsafe : void 0;
        e.exports = function(e, t) {
            if (t)
                return e.slice();
            var n = e.length
              , r = c ? c(n) : new e.constructor(n);
            return e.copy(r),
            r
        }
    }
    ).call(t, n(44)(e))
}
, function(e, t, n) {
    var r = n(144);
    e.exports = function(e, t) {
        var n = t ? r(e.buffer) : e.buffer;
        return new e.constructor(n,e.byteOffset,e.length)
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        var n = -1
          , r = e.length;
        for (t || (t = Array(r)); ++n < r; )
            t[n] = e[n];
        return t
    }
}
, function(e, t, n) {
    var r = n(110)
      , o = n(67)
      , i = n(65);
    e.exports = function(e) {
        return "function" != typeof e.constructor || i(e) ? {} : r(o(e))
    }
}
, function(e, t, n) {
    var r = n(76)
      , o = n(32)
      , i = Object.prototype.hasOwnProperty;
    e.exports = function(e, t, n) {
        var a = e[t];
        i.call(e, t) && o(a, n) && (void 0 !== n || t in e) || r(e, t, n)
    }
}
, , , , , , function(e, t, n) {
    "use strict";
    t.noop = function() {}
}
, function(e, t) {
    e.exports = function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, o = 0, i = []; ++n < r; ) {
            var a = e[n];
            t(a, n, e) && (i[o++] = a)
        }
        return i
    }
}
, function(e, t, n) {
    var r = n(23)(n(11), "Set");
    e.exports = r
}
, function(e, t, n) {
    (function(e) {
        function n(e, t) {
            for (var n = 0, r = e.length - 1; r >= 0; r--) {
                var o = e[r];
                "." === o ? e.splice(r, 1) : ".." === o ? (e.splice(r, 1),
                n++) : n && (e.splice(r, 1),
                n--)
            }
            if (t)
                for (; n--; n)
                    e.unshift("..");
            return e
        }
        var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
          , o = function(e) {
            return r.exec(e).slice(1)
        };
        function i(e, t) {
            if (e.filter)
                return e.filter(t);
            for (var n = [], r = 0; r < e.length; r++)
                t(e[r], r, e) && n.push(e[r]);
            return n
        }
        t.resolve = function() {
            for (var t = "", r = !1, o = arguments.length - 1; o >= -1 && !r; o--) {
                var a = o >= 0 ? arguments[o] : e.cwd();
                if ("string" != typeof a)
                    throw new TypeError("Arguments to path.resolve must be strings");
                a && (t = a + "/" + t,
                r = "/" === a.charAt(0))
            }
            return (r ? "/" : "") + (t = n(i(t.split("/"), function(e) {
                return !!e
            }), !r).join("/")) || "."
        }
        ,
        t.normalize = function(e) {
            var r = t.isAbsolute(e)
              , o = "/" === a(e, -1);
            return (e = n(i(e.split("/"), function(e) {
                return !!e
            }), !r).join("/")) || r || (e = "."),
            e && o && (e += "/"),
            (r ? "/" : "") + e
        }
        ,
        t.isAbsolute = function(e) {
            return "/" === e.charAt(0)
        }
        ,
        t.join = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return t.normalize(i(e, function(e, t) {
                if ("string" != typeof e)
                    throw new TypeError("Arguments to path.join must be strings");
                return e
            }).join("/"))
        }
        ,
        t.relative = function(e, n) {
            function r(e) {
                for (var t = 0; t < e.length && "" === e[t]; t++)
                    ;
                for (var n = e.length - 1; n >= 0 && "" === e[n]; n--)
                    ;
                return t > n ? [] : e.slice(t, n - t + 1)
            }
            e = t.resolve(e).substr(1),
            n = t.resolve(n).substr(1);
            for (var o = r(e.split("/")), i = r(n.split("/")), a = Math.min(o.length, i.length), c = a, s = 0; s < a; s++)
                if (o[s] !== i[s]) {
                    c = s;
                    break
                }
            var u = [];
            for (s = c; s < o.length; s++)
                u.push("..");
            return (u = u.concat(i.slice(c))).join("/")
        }
        ,
        t.sep = "/",
        t.delimiter = ":",
        t.dirname = function(e) {
            var t = o(e)
              , n = t[0]
              , r = t[1];
            return n || r ? (r && (r = r.substr(0, r.length - 1)),
            n + r) : "."
        }
        ,
        t.basename = function(e, t) {
            var n = o(e)[2];
            return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)),
            n
        }
        ,
        t.extname = function(e) {
            return o(e)[3]
        }
        ;
        var a = "b" === "ab".substr(-1) ? function(e, t, n) {
            return e.substr(t, n)
        }
        : function(e, t, n) {
            return t < 0 && (t = e.length + t),
            e.substr(t, n)
        }
    }
    ).call(t, n(69))
}
, function(e, t, n) {
    var r = n(21)
      , o = n(67)
      , i = n(15)
      , a = "[object Object]"
      , c = Function.prototype
      , s = Object.prototype
      , u = c.toString
      , l = s.hasOwnProperty
      , f = u.call(Object);
    e.exports = function(e) {
        if (!i(e) || r(e) != a)
            return !1;
        var t = o(e);
        if (null === t)
            return !0;
        var n = l.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && u.call(n) == f
    }
}
, function(e, t) {
    e.exports = function(e, t, n) {
        switch (n.length) {
        case 0:
            return e.call(t);
        case 1:
            return e.call(t, n[0]);
        case 2:
            return e.call(t, n[0], n[1]);
        case 3:
            return e.call(t, n[0], n[1], n[2])
        }
        return e.apply(t, n)
    }
}
, function(e, t, n) {
    var r = n(32)
      , o = n(28)
      , i = n(64)
      , a = n(8);
    e.exports = function(e, t, n) {
        if (!a(n))
            return !1;
        var c = typeof t;
        return !!("number" == c ? o(n) && i(t, n.length) : "string" == c && t in n) && r(n[t], e)
    }
}
, function(e, t, n) {
    var r = n(134)
      , o = n(331)(r);
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.t = {
        UPDATE_CONNECTION: "connection/UPDATE_CONNECTION",
        ONLINE_STATE: "connection/ONLINE_STATE",
        ACTIVATE_DATA_CONTROL: "connection/ACTIVATE_DATA_CONTROL",
        ACCEPT_DATA_CONTROL: "connection/ACCEPT_DATA_CONTROL",
        DISABLE_DATA_CONTROL: "connection/DISABLE_DATA_CONTROL",
        UNINSTALL_EXTENSION: "connection/UNINSTALL_EXTENSION"
    },
    t.updateConnection = function(e) {
        return {
            type: t.t.UPDATE_CONNECTION,
            data: e
        }
    }
    ,
    t.onlineConnection = function(e) {
        return {
            type: t.t.ONLINE_STATE,
            online: e
        }
    }
    ,
    t.activateDataControl = function() {
        return {
            type: t.t.ACTIVATE_DATA_CONTROL
        }
    }
    ,
    t.acceptDataControl = function() {
        return {
            type: t.t.ACCEPT_DATA_CONTROL
        }
    }
    ,
    t.disableDataControl = function() {
        return {
            type: t.t.DISABLE_DATA_CONTROL
        }
    }
    ,
    t.uninstallExtension = function() {
        return {
            type: t.t.UNINSTALL_EXTENSION
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    (r = t.SiteCategory || (t.SiteCategory = {})).gdocs = "gdocs",
    r.other = "other"
}
, , , , , function(e, t, n) {
    "use strict";
    var r, o, i;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    (r = t.PopupEditorIFrameMessages || (t.PopupEditorIFrameMessages = {})).popupEditorIFrame = "popupEditorIFrame",
    r.bgPopupEditorIFrameToPopupEditor = "bg-PopupEditorIFrame-toPopupEditor",
    r.bgPopupEditorIFrameFromPopupEditor = "bg-PopupEditorIFrame-fromPopupEditor",
    (o = t.PopupEditorIFrameMessageType || (t.PopupEditorIFrameMessageType = {})).openPopup = "open-popup",
    o.closePopup = "close-popup",
    o.loaded = "iframe-cs-loaded",
    o.popupClosing = "iframe-cs-popup-closing-state",
    o.changeUser = "change-user-popup",
    o.fullyLoaded = "denali-editor-loaded",
    (i = t.SignInIframeMessages || (t.SignInIframeMessages = {})).signInIFrame = "signInIFrame",
    i.bgSignInIFrame = "bg-bgSignInIFrame",
    function(e) {
        (t.SignInIframeReady || (t.SignInIframeReady = {})).create = function() {
            return {
                _tag: "iframeReady"
            }
        }
    }(),
    function(e) {
        (t.SignInClose || (t.SignInClose = {})).create = function() {
            return {
                _tag: "close"
            }
        }
    }(),
    function(e) {
        (t.ShowSignInDialog || (t.ShowSignInDialog = {})).create = function(e, t, n, r) {
            return {
                _tag: "showSigninDialog",
                user: e,
                placement: t,
                totalErrors: n,
                shouldOpenLoginView: r
            }
        }
    }(),
    function(e) {
        (t.ShowSignInOnboarding || (t.ShowSignInOnboarding = {})).create = function(e) {
            return {
                _tag: "showSigninOnboarding",
                experiments: e
            }
        }
    }(),
    function(e) {
        (t.SignInOnboardingResult || (t.SignInOnboardingResult = {})).create = function(e) {
            return {
                _tag: "signinOnboardingResult",
                result: e
            }
        }
    }()
}
, , , , function(e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    );
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function(e) {
        function t(t) {
            return e.call(this, "Assertion failed: " + (t ? "string" == typeof t ? t : t() : "(unnamed)")) || this
        }
        return o(t, e),
        t
    }(Error);
    t.AssertionError = i,
    t.assert = function(e, t) {
        if (!e)
            throw new i(t)
    }
    ,
    t.assertNonNull = function(e, t) {
        if (null == e)
            throw new i(function() {
                return t ? "Expected " + t + " to be non-null" : "Expected non-null"
            }
            );
        return e
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e) {
            if (this.capacity = e,
            this._start = 0,
            this._end = 0,
            this._isFull = !1,
            e <= 0)
                throw new Error("Invalid capacity " + e);
            this._buffer = new Array(e)
        }
        return Object.defineProperty(e.prototype, "size", {
            get: function() {
                return this._isFull ? this._buffer.length : (this._end - this._start + this._buffer.length) % this._buffer.length
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "isEmpty", {
            get: function() {
                return 0 === this.size
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "isFull", {
            get: function() {
                return this._isFull
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "head", {
            get: function() {
                return this.isEmpty ? null : this._buffer[this._start]
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "tail", {
            get: function() {
                return this.isEmpty ? null : this._buffer[0 === this._end ? this.capacity - 1 : this._end - 1]
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.enqueue = function(e) {
            var t = null;
            return this.isFull && (t = this._buffer[this._start],
            this._startInc()),
            this._buffer[this._end] = e,
            this._endInc(),
            this._start === this._end && (this._isFull = !0),
            t
        }
        ,
        e.prototype.dequeue = function() {
            if (this.isEmpty)
                return null;
            var e = this._buffer[this._start];
            return this._buffer[this._start] = null,
            this._startInc(),
            this._isFull = !1,
            e
        }
        ,
        e.prototype.delete = function(e) {
            var t = this._buffer.indexOf(e);
            if (t >= 0) {
                if (t < this._end) {
                    for (var n = t; n < this._end - 1; n++)
                        this._buffer[n] = this._buffer[n + 1];
                    this._buffer[--this._end] = null
                } else {
                    for (n = this._start; n < t; n++)
                        this._buffer[n + 1] = this._buffer[n];
                    this._buffer[this._start] = null,
                    this._startInc()
                }
                return this._isFull = !1,
                !0
            }
            return !1
        }
        ,
        e.prototype._startInc = function() {
            this._start++,
            this._start === this.capacity && (this._start = 0)
        }
        ,
        e.prototype._endInc = function() {
            this._end++,
            this._end === this.capacity && (this._end = 0)
        }
        ,
        e.prototype.clear = function() {
            this._buffer = new Array(this.capacity),
            this._start = this._end = 0,
            this._isFull = !1
        }
        ,
        e.prototype.toArray = function() {
            var e;
            if (this.isEmpty)
                e = [];
            else if (this._start < this._end)
                e = this._buffer.slice(this._start, this._end);
            else {
                e = new Array(this.size);
                for (var t = 0, n = this._start; n < this.capacity; ++n,
                ++t)
                    e[t] = this._buffer[n];
                for (n = 0; n < this._end; ++n,
                ++t)
                    e[t] = this._buffer[n]
            }
            return e
        }
        ,
        e
    }();
    t.CircularBuffer = r
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__read || function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
      , o = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(r(arguments[t]));
        return e
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.flatMap = function(e, t) {
        var n;
        return (n = []).concat.apply(n, o(t.map(e)))
    }
    ,
    t.flatten = function(e) {
        var t;
        return (t = []).concat.apply(t, o(e))
    }
    ,
    t.distinct = function(e) {
        return o(new Set(e))
    }
    ,
    t.distinctBy = function(e, t) {
        var n = new Set;
        return t.filter(function(t) {
            var r = e(t)
              , o = !n.has(r);
            return n.add(r),
            o
        })
    }
    ,
    t.scan = function(e, t, n) {
        for (var r = [t], o = t, i = 0; i < n.length; i++)
            o = e(o, n[i]),
            r.push(o);
        return r
    }
    ,
    t.maximum = function(e) {
        return e.reduce(function(e, t) {
            return t > e ? t : e
        }, e[0])
    }
    ,
    t.maximumBy = function(e, t) {
        return 0 === e.length ? void 0 : e.reduce(function(e, n) {
            var r = t(n);
            return r > e[1] ? [n, r] : e
        }, [e[0], t(e[0])])[0]
    }
    ,
    t.reverse = function(e) {
        return e.slice().reverse()
    }
    ,
    t.partition = function(e, t) {
        for (var n = [], r = [], o = 0, i = 0, a = 0; a < t.length; a++)
            e(t[a]) ? n[o++] = t[a] : r[i++] = t[a];
        return [n, r]
    }
    ,
    t.chunkBySize = function(e, t) {
        if (e < 1)
            throw new Error("Invalid chunk size, expected > 0");
        if (0 === t.length)
            return [[]];
        for (var n = [], r = 0; r < Math.ceil(t.length / e); r++)
            n.push(t.slice(r * e, (r + 1) * e));
        return n
    }
    ,
    t.unfold = function(e, t) {
        for (var n = [], r = e(t); void 0 !== r; )
            n.push(r[0]),
            r = e(r[1]);
        return n
    }
    ,
    t.range = function(e, t) {
        return void 0 !== t ? Array.from(Array(t - e), function(t, n) {
            return n + e
        }) : Array.from(Array(e), function(e, t) {
            return t
        })
    }
    ,
    t.groupBy = function(e, t) {
        if (void 0 === t && (t = function(e, t) {
            return e === t
        }
        ),
        0 === e.length)
            return [];
        for (var n = [[e[0]]], r = 1; r < e.length; r += 1) {
            var o = n[n.length - 1][0]
              , i = e[r];
            t(o, i) ? n[n.length - 1].push(i) : n.push([i])
        }
        return n
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && e[Symbol.iterator]
          , n = 0;
        return t ? t.call(e) : {
            next: function() {
                return e && n >= e.length && (e = void 0),
                {
                    value: e && e[n++],
                    done: !e
                }
            }
        }
    }
      , o = this && this.__read || function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.map = function(e, t) {
        var n = {};
        return Object.keys(t).forEach(function(r) {
            return n[r] = e(r, t[r])
        }),
        n
    }
    ,
    t.filter = function(e, t) {
        var n = {};
        return Object.keys(t).forEach(function(r) {
            e(r, t[r]) && (n[r] = t[r])
        }),
        n
    }
    ,
    t.values = function(e) {
        return Object.keys(e).map(function(t) {
            return e[t]
        })
    }
    ,
    t.pairs = function(e) {
        return Object.keys(e).map(function(t) {
            return [t, e[t]]
        })
    }
    ,
    t.create = function(e) {
        var t, n, i = {};
        try {
            for (var a = r(e), c = a.next(); !c.done; c = a.next()) {
                var s = o(c.value, 2)
                  , u = s[0]
                  , l = s[1];
                i[u] = l
            }
        } catch (e) {
            t = {
                error: e
            }
        } finally {
            try {
                c && !c.done && (n = a.return) && n.call(a)
            } finally {
                if (t)
                    throw t.error
            }
        }
        return i
    }
    ,
    t.pluck = function(e, t) {
        return t.map(function(t) {
            return e[t]
        })
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && e[Symbol.iterator]
          , n = 0;
        return t ? t.call(e) : {
            next: function() {
                return e && n >= e.length && (e = void 0),
                {
                    value: e && e[n++],
                    done: !e
                }
            }
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.find = function(e, t) {
        var n, o;
        try {
            for (var i = r(e.values()), a = i.next(); !a.done; a = i.next()) {
                var c = a.value;
                if (t(c))
                    return c
            }
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                a && !a.done && (o = i.return) && o.call(i)
            } finally {
                if (n)
                    throw n.error
            }
        }
        return null
    }
}
, function(e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    ), i = this && this.__assign || function() {
        return (i = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(105)
      , c = function(e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            return r._config = n,
            r
        }
        return o(t, e),
        t.prototype.handleEvent = function(e) {
            this._config.filterFn(e) && this._config.writer.write(e)
        }
        ,
        t
    }(function() {
        function e(e) {
            this.name = e,
            this._isError = function(e) {
                var t = e;
                return t && (void 0 !== t.message && void 0 !== t.name || void 0 !== t.stack)
            }
        }
        return e.prototype.trace = function(e, t, n) {
            this._logMessage("TRACE", e, t, n)
        }
        ,
        e.prototype.debug = function(e, t, n) {
            this._logMessage("DEBUG", e, t, n)
        }
        ,
        e.prototype.info = function(e, t, n) {
            this._logMessage("INFO", e, t, n)
        }
        ,
        e.prototype.warn = function(e, t, n) {
            this._logMessage("WARN", e, t, n)
        }
        ,
        e.prototype.error = function(e, t, n) {
            this._logMessage("ERROR", e, t, n)
        }
        ,
        e.prototype.fatal = function(e, t, n) {
            this._logMessage("FATAL", e, t, n)
        }
        ,
        e.prototype._logMessage = function(e, t, n, r) {
            var o = {
                level: e,
                loggerName: this.name,
                message: t,
                timestamp: new Date
            };
            n && (this._isError(n) ? o.exception = n : o.data = n),
            o.data = o.data || r,
            this.handleEvent(o)
        }
        ,
        e
    }());
    t.SimpleLogger = c,
    function(e) {
        (t.Logger || (t.Logger = {})).create = function(e, t) {
            return new c(e,i({}, a.LogConfig.getGlobal(), t || {}))
        }
    }()
}
, function(e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = ((r = {}).TRACE = 1,
    r.DEBUG = 2,
    r.INFO = 3,
    r.WARN = 4,
    r.ERROR = 5,
    r.FATAL = 6,
    r);
    t.getLogRank = function(e) {
        return o[e] || 0
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return "INFO" === e || "TRACE" === e ? "INFO" : "WARN" === e ? "WARN" : "FATAL" === e || "ERROR" === e ? "ERROR" : "INFO"
    }
    function o(e) {
        var t = "";
        try {
            t = JSON.stringify(e.data)
        } catch (e) {}
        return {
            logger: e.loggerName,
            level: r(e.level),
            timestamp: +e.timestamp,
            message: e.message,
            extra: {
                json: t
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.logLevelToFelogLogLevel = r,
    t.logEventToFelogLogEvent = o;
    var i = 5e3
      , a = function() {
        return function(e) {
            var t = this;
            this._config = e,
            this._events = [],
            this.write = function(e) {
                "DEBUG" !== e.level && (t._events.push(e),
                t._events.length > i && t._events.splice(0, t._events.length - i))
            }
            ,
            this.send = function() {
                0 !== t._events.length && (t._config.felog.sendCrashLogs("crash logs", t._events.map(o)),
                t._events = [])
            }
        }
    }();
    t.FelogLogWriter = a
}
, function(e, t, n) {
    "use strict";
    t.isObject = function(e) {
        return null != e && "object" == typeof e
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(186);
    function o(e) {
        return e ? 1 === e.length ? e[0] : function(t) {
            return e.reduce(function(e, t) {
                return t(e)
            }, t)
        }
        : r.noop
    }
    t.pipe = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t - 0] = arguments[t];
        return o(e)
    }
    ,
    t.pipeFromArray = o
}
, function(e, t) {
    e.exports = function(e) {
        return function(t, n, r) {
            for (var o = -1, i = Object(t), a = r(t), c = a.length; c--; ) {
                var s = a[e ? c : ++o];
                if (!1 === n(i[s], s, i))
                    break
            }
            return t
        }
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        for (var n = -1, r = Array(e); ++n < e; )
            r[n] = t(n);
        return r
    }
}
, function(e, t, n) {
    var r = n(21)
      , o = n(15)
      , i = "[object Arguments]";
    e.exports = function(e) {
        return o(e) && r(e) == i
    }
}
, function(e, t, n) {
    var r = n(34)
      , o = Object.prototype
      , i = o.hasOwnProperty
      , a = o.toString
      , c = r ? r.toStringTag : void 0;
    e.exports = function(e) {
        var t = i.call(e, c)
          , n = e[c];
        try {
            e[c] = void 0;
            var r = !0
        } catch (e) {}
        var o = a.call(e);
        return r && (t ? e[c] = n : delete e[c]),
        o
    }
}
, function(e, t) {
    var n = Object.prototype.toString;
    e.exports = function(e) {
        return n.call(e)
    }
}
, function(e, t) {
    e.exports = function() {
        return !1
    }
}
, function(e, t, n) {
    var r = n(21)
      , o = n(72)
      , i = n(15)
      , a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0,
    a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1,
    e.exports = function(e) {
        return i(e) && o(e.length) && !!a[r(e)]
    }
}
, function(e, t, n) {
    var r = n(115)(Object.keys, Object);
    e.exports = r
}
, function(e, t, n) {
    var r = n(223)
      , o = n(260)
      , i = n(120);
    e.exports = function(e) {
        var t = o(e);
        return 1 == t.length && t[0][2] ? i(t[0][0], t[0][1]) : function(n) {
            return n === e || r(n, e, t)
        }
    }
}
, function(e, t, n) {
    var r = n(66)
      , o = n(78)
      , i = 1
      , a = 2;
    e.exports = function(e, t, n, c) {
        var s = n.length
          , u = s
          , l = !c;
        if (null == e)
            return !u;
        for (e = Object(e); s--; ) {
            var f = n[s];
            if (l && f[2] ? f[1] !== e[f[0]] : !(f[0]in e))
                return !1
        }
        for (; ++s < u; ) {
            var p = (f = n[s])[0]
              , d = e[p]
              , h = f[1];
            if (l && f[2]) {
                if (void 0 === d && !(p in e))
                    return !1
            } else {
                var g = new r;
                if (c)
                    var m = c(d, h, p, e, t, g);
                if (!(void 0 === m ? o(h, d, i | a, c, g) : m))
                    return !1
            }
        }
        return !0
    }
}
, function(e, t) {
    e.exports = function() {
        this.__data__ = [],
        this.size = 0
    }
}
, function(e, t, n) {
    var r = n(46)
      , o = Array.prototype.splice;
    e.exports = function(e) {
        var t = this.__data__
          , n = r(t, e);
        return !(n < 0 || (n == t.length - 1 ? t.pop() : o.call(t, n, 1),
        --this.size,
        0))
    }
}
, function(e, t, n) {
    var r = n(46);
    e.exports = function(e) {
        var t = this.__data__
          , n = r(t, e);
        return n < 0 ? void 0 : t[n][1]
    }
}
, function(e, t, n) {
    var r = n(46);
    e.exports = function(e) {
        return r(this.__data__, e) > -1
    }
}
, function(e, t, n) {
    var r = n(46);
    e.exports = function(e, t) {
        var n = this.__data__
          , o = r(n, e);
        return o < 0 ? (++this.size,
        n.push([e, t])) : n[o][1] = t,
        this
    }
}
, function(e, t, n) {
    var r = n(45);
    e.exports = function() {
        this.__data__ = new r,
        this.size = 0
    }
}
, function(e, t) {
    e.exports = function(e) {
        var t = this.__data__
          , n = t.delete(e);
        return this.size = t.size,
        n
    }
}
, function(e, t) {
    e.exports = function(e) {
        return this.__data__.get(e)
    }
}
, function(e, t) {
    e.exports = function(e) {
        return this.__data__.has(e)
    }
}
, function(e, t, n) {
    var r = n(45)
      , o = n(73)
      , i = n(74)
      , a = 200;
    e.exports = function(e, t) {
        var n = this.__data__;
        if (n instanceof r) {
            var c = n.__data__;
            if (!o || c.length < a - 1)
                return c.push([e, t]),
                this.size = ++n.size,
                this;
            n = this.__data__ = new i(c)
        }
        return n.set(e, t),
        this.size = n.size,
        this
    }
}
, function(e, t, n) {
    var r = n(38)
      , o = n(235)
      , i = n(8)
      , a = n(116)
      , c = /^\[object .+?Constructor\]$/
      , s = Function.prototype
      , u = Object.prototype
      , l = s.toString
      , f = u.hasOwnProperty
      , p = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    e.exports = function(e) {
        return !(!i(e) || o(e)) && (r(e) ? p : c).test(a(e))
    }
}
, function(e, t, n) {
    var r, o = n(236), i = (r = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
    e.exports = function(e) {
        return !!i && i in e
    }
}
, function(e, t, n) {
    var r = n(11)["__core-js_shared__"];
    e.exports = r
}
, function(e, t) {
    e.exports = function(e, t) {
        return null == e ? void 0 : e[t]
    }
}
, function(e, t, n) {
    var r = n(239)
      , o = n(45)
      , i = n(73);
    e.exports = function() {
        this.size = 0,
        this.__data__ = {
            hash: new r,
            map: new (i || o),
            string: new r
        }
    }
}
, function(e, t, n) {
    var r = n(240)
      , o = n(241)
      , i = n(242)
      , a = n(243)
      , c = n(244);
    function s(e) {
        var t = -1
          , n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    s.prototype.clear = r,
    s.prototype.delete = o,
    s.prototype.get = i,
    s.prototype.has = a,
    s.prototype.set = c,
    e.exports = s
}
, function(e, t, n) {
    var r = n(47);
    e.exports = function() {
        this.__data__ = r ? r(null) : {},
        this.size = 0
    }
}
, function(e, t) {
    e.exports = function(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0,
        t
    }
}
, function(e, t, n) {
    var r = n(47)
      , o = "__lodash_hash_undefined__"
      , i = Object.prototype.hasOwnProperty;
    e.exports = function(e) {
        var t = this.__data__;
        if (r) {
            var n = t[e];
            return n === o ? void 0 : n
        }
        return i.call(t, e) ? t[e] : void 0
    }
}
, function(e, t, n) {
    var r = n(47)
      , o = Object.prototype.hasOwnProperty;
    e.exports = function(e) {
        var t = this.__data__;
        return r ? void 0 !== t[e] : o.call(t, e)
    }
}
, function(e, t, n) {
    var r = n(47)
      , o = "__lodash_hash_undefined__";
    e.exports = function(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1,
        n[e] = r && void 0 === t ? o : t,
        this
    }
}
, function(e, t, n) {
    var r = n(48);
    e.exports = function(e) {
        var t = r(this, e).delete(e);
        return this.size -= t ? 1 : 0,
        t
    }
}
, function(e, t) {
    e.exports = function(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }
}
, function(e, t, n) {
    var r = n(48);
    e.exports = function(e) {
        return r(this, e).get(e)
    }
}
, function(e, t, n) {
    var r = n(48);
    e.exports = function(e) {
        return r(this, e).has(e)
    }
}
, function(e, t, n) {
    var r = n(48);
    e.exports = function(e, t) {
        var n = r(this, e)
          , o = n.size;
        return n.set(e, t),
        this.size += n.size == o ? 0 : 1,
        this
    }
}
, function(e, t, n) {
    var r = n(66)
      , o = n(117)
      , i = n(254)
      , a = n(256)
      , c = n(91)
      , s = n(6)
      , u = n(35)
      , l = n(40)
      , f = 1
      , p = "[object Arguments]"
      , d = "[object Array]"
      , h = "[object Object]"
      , g = Object.prototype.hasOwnProperty;
    e.exports = function(e, t, n, m, v, b) {
        var y = s(e)
          , _ = s(t)
          , w = y ? d : c(e)
          , E = _ ? d : c(t)
          , S = (w = w == p ? h : w) == h
          , I = (E = E == p ? h : E) == h
          , k = w == E;
        if (k && u(e)) {
            if (!u(t))
                return !1;
            y = !0,
            S = !1
        }
        if (k && !S)
            return b || (b = new r),
            y || l(e) ? o(e, t, n, m, v, b) : i(e, t, w, n, m, v, b);
        if (!(n & f)) {
            var O = S && g.call(e, "__wrapped__")
              , A = I && g.call(t, "__wrapped__");
            if (O || A) {
                var C = O ? e.value() : e
                  , x = A ? t.value() : t;
                return b || (b = new r),
                v(C, x, n, m, b)
            }
        }
        return !!k && (b || (b = new r),
        a(e, t, n, m, v, b))
    }
}
, function(e, t) {
    var n = "__lodash_hash_undefined__";
    e.exports = function(e) {
        return this.__data__.set(e, n),
        this
    }
}
, function(e, t) {
    e.exports = function(e) {
        return this.__data__.has(e)
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
            if (t(e[n], n, e))
                return !0;
        return !1
    }
}
, function(e, t, n) {
    var r = n(34)
      , o = n(118)
      , i = n(32)
      , a = n(117)
      , c = n(255)
      , s = n(170)
      , u = 1
      , l = 2
      , f = "[object Boolean]"
      , p = "[object Date]"
      , d = "[object Error]"
      , h = "[object Map]"
      , g = "[object Number]"
      , m = "[object RegExp]"
      , v = "[object Set]"
      , b = "[object String]"
      , y = "[object Symbol]"
      , _ = "[object ArrayBuffer]"
      , w = "[object DataView]"
      , E = r ? r.prototype : void 0
      , S = E ? E.valueOf : void 0;
    e.exports = function(e, t, n, r, E, I, k) {
        switch (n) {
        case w:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                return !1;
            e = e.buffer,
            t = t.buffer;
        case _:
            return !(e.byteLength != t.byteLength || !I(new o(e), new o(t)));
        case f:
        case p:
        case g:
            return i(+e, +t);
        case d:
            return e.name == t.name && e.message == t.message;
        case m:
        case b:
            return e == t + "";
        case h:
            var O = c;
        case v:
            var A = r & u;
            if (O || (O = s),
            e.size != t.size && !A)
                return !1;
            var C = k.get(e);
            if (C)
                return C == t;
            r |= l,
            k.set(e, t);
            var x = a(O(e), O(t), r, E, I, k);
            return k.delete(e),
            x;
        case y:
            if (S)
                return S.call(e) == S.call(t)
        }
        return !1
    }
}
, function(e, t) {
    e.exports = function(e) {
        var t = -1
          , n = Array(e.size);
        return e.forEach(function(e, r) {
            n[++t] = [r, e]
        }),
        n
    }
}
, function(e, t, n) {
    var r = n(171)
      , o = 1
      , i = Object.prototype.hasOwnProperty;
    e.exports = function(e, t, n, a, c, s) {
        var u = n & o
          , l = r(e)
          , f = l.length;
        if (f != r(t).length && !u)
            return !1;
        for (var p = f; p--; ) {
            var d = l[p];
            if (!(u ? d in t : i.call(t, d)))
                return !1
        }
        var h = s.get(e);
        if (h && s.get(t))
            return h == t;
        var g = !0;
        s.set(e, t),
        s.set(t, e);
        for (var m = u; ++p < f; ) {
            var v = e[d = l[p]]
              , b = t[d];
            if (a)
                var y = u ? a(b, v, d, t, e, s) : a(v, b, d, e, t, s);
            if (!(void 0 === y ? v === b || c(v, b, n, a, s) : y)) {
                g = !1;
                break
            }
            m || (m = "constructor" == d)
        }
        if (g && !m) {
            var _ = e.constructor
              , w = t.constructor;
            _ != w && "constructor"in e && "constructor"in t && !("function" == typeof _ && _ instanceof _ && "function" == typeof w && w instanceof w) && (g = !1)
        }
        return s.delete(e),
        s.delete(t),
        g
    }
}
, function(e, t, n) {
    var r = n(23)(n(11), "DataView");
    e.exports = r
}
, function(e, t, n) {
    var r = n(23)(n(11), "Promise");
    e.exports = r
}
, function(e, t, n) {
    var r = n(23)(n(11), "WeakMap");
    e.exports = r
}
, function(e, t, n) {
    var r = n(119)
      , o = n(39);
    e.exports = function(e) {
        for (var t = o(e), n = t.length; n--; ) {
            var i = t[n]
              , a = e[i];
            t[n] = [i, a, r(a)]
        }
        return t
    }
}
, function(e, t, n) {
    var r = n(78)
      , o = n(262)
      , i = n(267)
      , a = n(75)
      , c = n(119)
      , s = n(120)
      , u = n(41)
      , l = 1
      , f = 2;
    e.exports = function(e, t) {
        return a(e) && c(t) ? s(u(e), t) : function(n) {
            var a = o(n, e);
            return void 0 === a && a === t ? i(n, e) : r(t, a, l | f)
        }
    }
}
, function(e, t, n) {
    var r = n(92);
    e.exports = function(e, t, n) {
        var o = null == e ? void 0 : r(e, t);
        return void 0 === o ? n : o
    }
}
, function(e, t, n) {
    var r = n(264)
      , o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
      , i = /\\(\\)?/g
      , a = r(function(e) {
        var t = [];
        return 46 === e.charCodeAt(0) && t.push(""),
        e.replace(o, function(e, n, r, o) {
            t.push(r ? o.replace(i, "$1") : n || e)
        }),
        t
    });
    e.exports = a
}
, function(e, t, n) {
    var r = n(265)
      , o = 500;
    e.exports = function(e) {
        var t = r(e, function(e) {
            return n.size === o && n.clear(),
            e
        })
          , n = t.cache;
        return t
    }
}
, function(e, t, n) {
    var r = n(74)
      , o = "Expected a function";
    function i(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t)
            throw new TypeError(o);
        var n = function() {
            var r = arguments
              , o = t ? t.apply(this, r) : r[0]
              , i = n.cache;
            if (i.has(o))
                return i.get(o);
            var a = e.apply(this, r);
            return n.cache = i.set(o, a) || i,
            a
        };
        return n.cache = new (i.Cache || r),
        n
    }
    i.Cache = r,
    e.exports = i
}
, function(e, t, n) {
    var r = n(34)
      , o = n(121)
      , i = n(6)
      , a = n(50)
      , c = 1 / 0
      , s = r ? r.prototype : void 0
      , u = s ? s.toString : void 0;
    e.exports = function e(t) {
        if ("string" == typeof t)
            return t;
        if (i(t))
            return o(t, e) + "";
        if (a(t))
            return u ? u.call(t) : "";
        var n = t + "";
        return "0" == n && 1 / t == -c ? "-0" : n
    }
}
, function(e, t, n) {
    var r = n(268)
      , o = n(269);
    e.exports = function(e, t) {
        return null != e && o(e, t, r)
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        return null != e && t in Object(e)
    }
}
, function(e, t, n) {
    var r = n(93)
      , o = n(55)
      , i = n(6)
      , a = n(64)
      , c = n(72)
      , s = n(41);
    e.exports = function(e, t, n) {
        for (var u = -1, l = (t = r(t, e)).length, f = !1; ++u < l; ) {
            var p = s(t[u]);
            if (!(f = null != e && n(e, p)))
                break;
            e = e[p]
        }
        return f || ++u != l ? f : !!(l = null == e ? 0 : e.length) && c(l) && a(p, l) && (i(e) || o(e))
    }
}
, function(e, t, n) {
    var r = n(271)
      , o = n(272)
      , i = n(75)
      , a = n(41);
    e.exports = function(e) {
        return i(e) ? r(a(e)) : o(e)
    }
}
, function(e, t) {
    e.exports = function(e) {
        return function(t) {
            return null == t ? void 0 : t[e]
        }
    }
}
, function(e, t, n) {
    var r = n(92);
    e.exports = function(e) {
        return function(t) {
            return r(t, e)
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(122);
    function o(e, t) {
        return e[t] << 8 | e[t + 1]
    }
    e.exports = {
        hash: function(e) {
            var t, n = r.toU8IntArray(e + ""), i = 0;
            if (!e)
                return i.toString(16);
            var a = n.length
              , c = 0;
            t = 3 & a,
            a >>>= 2;
            for (var s = 0; s < a; s++)
                i = (i += o(n, c)) << 16 ^ o(n, c + 2) << 11 ^ i,
                c += 4,
                i += i >> 11;
            switch (t) {
            case 3:
                i += o(n, c),
                i ^= i << 16,
                i ^= n[c + 2] << 18,
                i += i >> 11;
                break;
            case 2:
                i += o(n, c),
                i ^= i << 11,
                i += i >> 17;
                break;
            case 1:
                i += n[c],
                i ^= i << 10,
                i += i >> 1
            }
            return i ^= i << 3,
            i += i >> 5,
            i ^= i << 4,
            i += i >> 17,
            i ^= i << 25,
            i += i >> 6,
            r.intToUnsignedHex(i)
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(122);
    function o(e, t) {
        return (65535 & e) * t + (((e >>> 16) * t & 65535) << 16)
    }
    function i(e, t) {
        return e << t | e >>> 32 - t
    }
    function a(e) {
        return e = o(e ^= e >>> 16, 2246822507),
        e = o(e ^= e >>> 13, 3266489909),
        e ^= e >>> 16
    }
    function c(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
        t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var n = [0, 0, 0, 0];
        return n[3] += e[3] + t[3],
        n[2] += n[3] >>> 16,
        n[3] &= 65535,
        n[2] += e[2] + t[2],
        n[1] += n[2] >>> 16,
        n[2] &= 65535,
        n[1] += e[1] + t[1],
        n[0] += n[1] >>> 16,
        n[1] &= 65535,
        n[0] += e[0] + t[0],
        n[0] &= 65535,
        [n[0] << 16 | n[1], n[2] << 16 | n[3]]
    }
    function s(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
        t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var n = [0, 0, 0, 0];
        return n[3] += e[3] * t[3],
        n[2] += n[3] >>> 16,
        n[3] &= 65535,
        n[2] += e[2] * t[3],
        n[1] += n[2] >>> 16,
        n[2] &= 65535,
        n[2] += e[3] * t[2],
        n[1] += n[2] >>> 16,
        n[2] &= 65535,
        n[1] += e[1] * t[3],
        n[0] += n[1] >>> 16,
        n[1] &= 65535,
        n[1] += e[2] * t[2],
        n[0] += n[1] >>> 16,
        n[1] &= 65535,
        n[1] += e[3] * t[1],
        n[0] += n[1] >>> 16,
        n[1] &= 65535,
        n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0],
        n[0] &= 65535,
        [n[0] << 16 | n[1], n[2] << 16 | n[3]]
    }
    function u(e, t) {
        return 32 === (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32,
        [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
    }
    function l(e, t) {
        return 0 === (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
    }
    function f(e, t) {
        return [e[0] ^ t[0], e[1] ^ t[1]]
    }
    function p(e) {
        return e = f(e = s(e = f(e = s(e = f(e, [0, e[0] >>> 1]), [4283543511, 3981806797]), [0, e[0] >>> 1]), [3301882366, 444984403]), [0, e[0] >>> 1])
    }
    var d = function(e, t) {
        e = "" + e || "";
        var n = r.toU8IntArray(e);
        t = t || 0;
        for (var o = (e = {
            charCodeAt: function(e) {
                return n[e]
            },
            length: n.length
        }).length % 16, i = e.length - o, a = [0, t], d = [0, t], h = [0, 0], g = [0, 0], m = [2277735313, 289559509], v = [1291169091, 658871167], b = 0; b < i; b += 16)
            h = [255 & e.charCodeAt(b + 4) | (255 & e.charCodeAt(b + 5)) << 8 | (255 & e.charCodeAt(b + 6)) << 16 | (255 & e.charCodeAt(b + 7)) << 24, 255 & e.charCodeAt(b) | (255 & e.charCodeAt(b + 1)) << 8 | (255 & e.charCodeAt(b + 2)) << 16 | (255 & e.charCodeAt(b + 3)) << 24],
            g = [255 & e.charCodeAt(b + 12) | (255 & e.charCodeAt(b + 13)) << 8 | (255 & e.charCodeAt(b + 14)) << 16 | (255 & e.charCodeAt(b + 15)) << 24, 255 & e.charCodeAt(b + 8) | (255 & e.charCodeAt(b + 9)) << 8 | (255 & e.charCodeAt(b + 10)) << 16 | (255 & e.charCodeAt(b + 11)) << 24],
            a = c(s(a = c(a = u(a = f(a, h = s(h = u(h = s(h, m), 31), v)), 27), d), [0, 5]), [0, 1390208809]),
            d = c(s(d = c(d = u(d = f(d, g = s(g = u(g = s(g, v), 33), m)), 31), a), [0, 5]), [0, 944331445]);
        switch (h = [0, 0],
        g = [0, 0],
        o) {
        case 15:
            g = f(g, l([0, e.charCodeAt(b + 14)], 48));
        case 14:
            g = f(g, l([0, e.charCodeAt(b + 13)], 40));
        case 13:
            g = f(g, l([0, e.charCodeAt(b + 12)], 32));
        case 12:
            g = f(g, l([0, e.charCodeAt(b + 11)], 24));
        case 11:
            g = f(g, l([0, e.charCodeAt(b + 10)], 16));
        case 10:
            g = f(g, l([0, e.charCodeAt(b + 9)], 8));
        case 9:
            d = f(d, g = s(g = u(g = s(g = f(g, [0, e.charCodeAt(b + 8)]), v), 33), m));
        case 8:
            h = f(h, l([0, e.charCodeAt(b + 7)], 56));
        case 7:
            h = f(h, l([0, e.charCodeAt(b + 6)], 48));
        case 6:
            h = f(h, l([0, e.charCodeAt(b + 5)], 40));
        case 5:
            h = f(h, l([0, e.charCodeAt(b + 4)], 32));
        case 4:
            h = f(h, l([0, e.charCodeAt(b + 3)], 24));
        case 3:
            h = f(h, l([0, e.charCodeAt(b + 2)], 16));
        case 2:
            h = f(h, l([0, e.charCodeAt(b + 1)], 8));
        case 1:
            a = f(a, h = s(h = u(h = s(h = f(h, [0, e.charCodeAt(b)]), m), 31), v))
        }
        return a = f(a, [0, e.length]),
        d = c(d = f(d, [0, e.length]), a = c(a, d)),
        a = p(a),
        d = c(d = p(d), a = c(a, d)),
        ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8)
    };
    e.exports = {
        x86Hash32: function(e, t) {
            e = "" + e || "";
            var n = r.toU8IntArray(e);
            t = t || 0;
            for (var c = (e = {
                charCodeAt: function(e) {
                    return n[e]
                },
                length: n.length
            }).length % 4, s = e.length - c, u = t, l = 0, f = 0; f < s; f += 4)
                u = o(u = i(u ^= l = o(l = i(l = o(l = 255 & e.charCodeAt(f) | (255 & e.charCodeAt(f + 1)) << 8 | (255 & e.charCodeAt(f + 2)) << 16 | (255 & e.charCodeAt(f + 3)) << 24, 3432918353), 15), 461845907), 13), 5) + 3864292196;
            switch (l = 0,
            c) {
            case 3:
                l ^= (255 & e.charCodeAt(f + 2)) << 16;
            case 2:
                l ^= (255 & e.charCodeAt(f + 1)) << 8;
            case 1:
                u ^= l = o(l = i(l = o(l ^= 255 & e.charCodeAt(f), 3432918353), 15), 461845907)
            }
            return ((u = a(u ^= e.length)) >>> 0).toString(16)
        },
        x86Hash128: function(e, t) {
            e = "" + e || "";
            var n = r.toU8IntArray(e);
            t = t || 0;
            for (var c = (e = {
                charCodeAt: function(e) {
                    return n[e]
                },
                length: n.length
            }).length % 16, s = e.length - c, u = t, l = t, f = t, p = t, d = 0, h = 0, g = 0, m = 0, v = 597399067, b = 2869860233, y = 951274213, _ = 2716044179, w = 0; w < s; w += 16)
                d = 255 & e.charCodeAt(w) | (255 & e.charCodeAt(w + 1)) << 8 | (255 & e.charCodeAt(w + 2)) << 16 | (255 & e.charCodeAt(w + 3)) << 24,
                h = 255 & e.charCodeAt(w + 4) | (255 & e.charCodeAt(w + 5)) << 8 | (255 & e.charCodeAt(w + 6)) << 16 | (255 & e.charCodeAt(w + 7)) << 24,
                g = 255 & e.charCodeAt(w + 8) | (255 & e.charCodeAt(w + 9)) << 8 | (255 & e.charCodeAt(w + 10)) << 16 | (255 & e.charCodeAt(w + 11)) << 24,
                m = 255 & e.charCodeAt(w + 12) | (255 & e.charCodeAt(w + 13)) << 8 | (255 & e.charCodeAt(w + 14)) << 16 | (255 & e.charCodeAt(w + 15)) << 24,
                u = i(u ^= d = o(d = i(d = o(d, v), 15), b), 19),
                u = o(u += l, 5) + 1444728091,
                l = i(l ^= h = o(h = i(h = o(h, b), 16), y), 17),
                l = o(l += f, 5) + 197830471,
                f = i(f ^= g = o(g = i(g = o(g, y), 17), _), 15),
                f = o(f += p, 5) + 2530024501,
                p = i(p ^= m = o(m = i(m = o(m, _), 18), v), 13),
                p = o(p += u, 5) + 850148119;
            switch (d = 0,
            h = 0,
            g = 0,
            m = 0,
            c) {
            case 15:
                m ^= e.charCodeAt(w + 14) << 16;
            case 14:
                m ^= e.charCodeAt(w + 13) << 8;
            case 13:
                p ^= m = o(m = i(m = o(m ^= e.charCodeAt(w + 12), _), 18), v);
            case 12:
                g ^= e.charCodeAt(w + 11) << 24;
            case 11:
                g ^= e.charCodeAt(w + 10) << 16;
            case 10:
                g ^= e.charCodeAt(w + 9) << 8;
            case 9:
                f ^= g = o(g = i(g = o(g ^= e.charCodeAt(w + 8), y), 17), _);
            case 8:
                h ^= e.charCodeAt(w + 7) << 24;
            case 7:
                h ^= e.charCodeAt(w + 6) << 16;
            case 6:
                h ^= e.charCodeAt(w + 5) << 8;
            case 5:
                l ^= h = o(h = i(h = o(h ^= e.charCodeAt(w + 4), b), 16), y);
            case 4:
                d ^= e.charCodeAt(w + 3) << 24;
            case 3:
                d ^= e.charCodeAt(w + 2) << 16;
            case 2:
                d ^= e.charCodeAt(w + 1) << 8;
            case 1:
                u ^= d = o(d = i(d = o(d ^= e.charCodeAt(w), v), 15), b)
            }
            return u ^= e.length,
            u += l ^= e.length,
            u += f ^= e.length,
            l += u += p ^= e.length,
            f += u,
            p += u,
            u = a(u),
            u += l = a(l),
            u += f = a(f),
            l += u += p = a(p),
            f += u,
            p += u,
            ("00000000" + (u >>> 0).toString(16)).slice(-8) + ("00000000" + (l >>> 0).toString(16)).slice(-8) + ("00000000" + (f >>> 0).toString(16)).slice(-8) + ("00000000" + (p >>> 0).toString(16)).slice(-8)
        },
        x64Hash64: function(e, t) {
            return d(e, t).slice(8)
        },
        x64Hash128: d,
        hash: function(e, t) {
            return d(e, t)
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    }
      , o = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
      , i = this && this.__read || function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
      , a = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(i(arguments[t]));
        return e
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = n(1)
      , s = n(323)
      , u = n(159);
    t.runSettingsPopupCompatibilityFixes = u.runSettingsPopupCompatibilityFixes;
    var l = n(139);
    t.bgPreload = l.bgPreload,
    function(e) {
        e.windowLocalStorage = {
            get: function(e) {
                return c.SafePromise.sync(function() {
                    return window.localStorage.getItem(e)
                })
            },
            set: function(e, t) {
                return c.SafePromise.sync(function() {
                    return window.localStorage.setItem(e, t)
                })
            },
            getAll: function() {
                return c.SafePromise.sync(function() {
                    var e = {};
                    return Object.keys(window.localStorage).forEach(function(t) {
                        e[t] = window.localStorage.getItem(t)
                    }),
                    e
                })
            },
            remove: function(e) {
                return c.SafePromise.sync(function() {
                    return window.localStorage.removeItem(e)
                })
            },
            removeAll: function() {
                return c.SafePromise.sync(function() {
                    return window.localStorage.clear()
                })
            }
        };
        var t = function() {
            function t(t) {
                var n = this;
                this._firefox = t,
                this._migrationCompleted = Promise.resolve(!1),
                this._ensureMigrationCompletedCalled = !1,
                this.get = this._getMigrationAwareMethod("get"),
                this.set = this._getMigrationAwareMethod("set"),
                this.getAll = this._getMigrationAwareMethod("getAll"),
                this.remove = this._getMigrationAwareMethod("remove"),
                this.removeAll = this._getMigrationAwareMethod("removeAll"),
                this.browserStorageLocal = {
                    get: function(e) {
                        return r(n, void 0, void 0, function() {
                            var t;
                            return o(this, function(n) {
                                switch (n.label) {
                                case 0:
                                    return [4, this._firefox.storage.local.get(e)];
                                case 1:
                                    return [2, (t = n.sent()).hasOwnProperty(e) ? t[e] : null]
                                }
                            })
                        })
                    },
                    set: function(e, t) {
                        var r;
                        return n._firefox.storage.local.set(((r = {})[e] = t,
                        r))
                    },
                    getAll: function() {
                        return n._firefox.storage.local.get(null)
                    },
                    remove: function(e) {
                        return n._firefox.storage.local.remove(e)
                    },
                    removeAll: function() {
                        return r(n, void 0, void 0, function() {
                            return o(this, function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, this._firefox.storage.local.clear()];
                                case 1:
                                    return e.sent(),
                                    [2]
                                }
                            })
                        })
                    }
                },
                this._migration = new s.StorageMigration("firefoxLocalStorageToExtApi",e.windowLocalStorage,this.browserStorageLocal,["version"])
            }
            return t.prototype.ensureMigrationCompleted = function() {
                this._ensureMigrationCompletedCalled = !0;
                var e = c.SafePromise.createCompletionSource();
                return this._migrationCompleted = e.promise,
                this._migration.ensureMigrationCompleted().then(function(t) {
                    return e.resolve(!0),
                    Promise.resolve(t)
                }, function(t) {
                    return e.resolve(!1),
                    Promise.reject(t)
                })
            }
            ,
            t.prototype._getMigrationAwareMethod = function(t) {
                var n = this;
                return function() {
                    for (var r = [], o = 0; o < arguments.length; o++)
                        r[o] = arguments[o];
                    return c.assert(!0 === n._ensureMigrationCompletedCalled, "supposed to run data migration before accessing prefs with web-extensions API"),
                    n._migrationCompleted.then(function(o) {
                        var i = o ? n._migration.migrationAwareDestination : e.windowLocalStorage;
                        return i[t].apply(i, a(r))
                    })
                }
            }
            ,
            t
        }();
        e.MigrationAwarePreferencesApiImpl = t
    }(t.preferencesApi || (t.preferencesApi = {}))
}
, function(e, t, n) {
    var r = n(78);
    e.exports = function(e, t) {
        return r(e, t)
    }
}
, function(e, t, n) {
    var r = n(66)
      , o = n(123)
      , i = n(111)
      , a = n(278)
      , c = n(8)
      , s = n(57)
      , u = n(125);
    e.exports = function e(t, n, l, f, p) {
        t !== n && i(n, function(i, s) {
            if (c(i))
                p || (p = new r),
                a(t, n, s, l, e, f, p);
            else {
                var d = f ? f(u(t, s), i, s + "", t, n, p) : void 0;
                void 0 === d && (d = i),
                o(t, s, d)
            }
        }, s)
    }
}
, function(e, t, n) {
    var r = n(123)
      , o = n(176)
      , i = n(177)
      , a = n(178)
      , c = n(179)
      , s = n(55)
      , u = n(6)
      , l = n(145)
      , f = n(35)
      , p = n(38)
      , d = n(8)
      , h = n(190)
      , g = n(40)
      , m = n(125)
      , v = n(279);
    e.exports = function(e, t, n, b, y, _, w) {
        var E = m(e, n)
          , S = m(t, n)
          , I = w.get(S);
        if (I)
            r(e, n, I);
        else {
            var k = _ ? _(E, S, n + "", e, t, w) : void 0
              , O = void 0 === k;
            if (O) {
                var A = u(S)
                  , C = !A && f(S)
                  , x = !A && !C && g(S);
                k = S,
                A || C || x ? u(E) ? k = E : l(E) ? k = a(E) : C ? (O = !1,
                k = o(S, !0)) : x ? (O = !1,
                k = i(S, !0)) : k = [] : h(S) || s(S) ? (k = E,
                s(E) ? k = v(E) : d(E) && !p(E) || (k = c(S))) : O = !1
            }
            O && (w.set(S, k),
            y(k, S, b, _, w),
            w.delete(S)),
            r(e, n, k)
        }
    }
}
, function(e, t, n) {
    var r = n(68)
      , o = n(57);
    e.exports = function(e) {
        return r(e, o(e))
    }
}
, function(e, t, n) {
    var r = n(8)
      , o = n(65)
      , i = n(281)
      , a = Object.prototype.hasOwnProperty;
    e.exports = function(e) {
        if (!r(e))
            return i(e);
        var t = o(e)
          , n = [];
        for (var c in e)
            ("constructor" != c || !t && a.call(e, c)) && n.push(c);
        return n
    }
}
, function(e, t) {
    e.exports = function(e) {
        var t = [];
        if (null != e)
            for (var n in Object(e))
                t.push(n);
        return t
    }
}
, function(e, t, n) {
    var r = n(191)
      , o = Math.max;
    e.exports = function(e, t, n) {
        return t = o(void 0 === t ? e.length - 1 : t, 0),
        function() {
            for (var i = arguments, a = -1, c = o(i.length - t, 0), s = Array(c); ++a < c; )
                s[a] = i[t + a];
            a = -1;
            for (var u = Array(t + 1); ++a < t; )
                u[a] = i[a];
            return u[t] = n(s),
            r(e, this, u)
        }
    }
}
, function(e, t, n) {
    var r = n(284)
      , o = n(286)(r);
    e.exports = o
}
, function(e, t, n) {
    var r = n(285)
      , o = n(124)
      , i = n(51)
      , a = o ? function(e, t) {
        return o(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: r(t),
            writable: !0
        })
    }
    : i;
    e.exports = a
}
, function(e, t) {
    e.exports = function(e) {
        return function() {
            return e
        }
    }
}
, function(e, t) {
    var n = 800
      , r = 16
      , o = Date.now;
    e.exports = function(e) {
        var t = 0
          , i = 0;
        return function() {
            var a = o()
              , c = r - (a - i);
            if (i = a,
            c > 0) {
                if (++t >= n)
                    return arguments[0]
            } else
                t = 0;
            return e.apply(void 0, arguments)
        }
    }
}
, , function(e, t, n) {
    var r = n(99)
      , o = n(8)
      , i = "Expected a function";
    e.exports = function(e, t, n) {
        var a = !0
          , c = !0;
        if ("function" != typeof e)
            throw new TypeError(i);
        return o(n) && (a = "leading"in n ? !!n.leading : a,
        c = "trailing"in n ? !!n.trailing : c),
        r(e, t, {
            leading: a,
            maxWait: t,
            trailing: c
        })
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(18)
      , o = n(81);
    function i(e, t) {
        var n = document.createElement("img")
          , i = o.createEventPayload(e, {
            application: r.appName,
            version: r.getVersion(),
            env: r.ENV,
            context: t
        });
        return n.src = o.felogRequestUrl(i, r.URLS.newFelog),
        Promise.resolve()
    }
    t.sendEventPixel2 = i,
    t.sendEventPixel = function(e, t, n, r, o) {
        return i({
            logger: e,
            level: n,
            message: t,
            extra: r
        }, o)
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__read || function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
      , o = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(r(arguments[t]));
        return e
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(10)
      , a = n(128)
      , c = n(291)
      , s = n(1)
      , u = n(24)
      , l = n(3)
      , f = n(128);
    t.PerformanceMetrics = f.PerformanceMetrics;
    var p = l.Logger.create("lib.tracking.telemetry")
      , d = .1
      , h = .05
      , g = .1
      , m = .01
      , v = .01
      , b = function() {
        function e(e, t, n, r, o, l, f, b, y, _, w) {
            void 0 === e && (e = s.noOp),
            void 0 === t && (t = s.noOp),
            void 0 === n && (n = s.noOp),
            void 0 === r && (r = s.noOp),
            void 0 === o && (o = !1),
            void 0 === l && (l = a.PerformanceMetrics.dummy),
            void 0 === f && (f = !1),
            void 0 === b && (b = s.noOp),
            void 0 === y && (y = s.noOp),
            void 0 === _ && (_ = function(e) {
                return m
            }
            ),
            void 0 === w && (w = "firefox" !== i.getGlobal().bundleInfo.browser);
            var E = this;
            this._sendFelog = e,
            this._sendFelogUsage = t,
            this._setUserId = n,
            this._setContainerId = r,
            this._sendUsageMetrics = o,
            this._perfMetrics = l,
            this._sendPerfMetrics = f,
            this._sendFelogEvent = b,
            this._sendFelogCrashLogs = y,
            this._getUsageMetricsRate = _,
            this._shouldSendEvents = w,
            this._perfMetricsThrottleTimeMs = 6e4,
            this._prepareDataString = function(e, t) {
                var n;
                try {
                    n = JSON.stringify(t)
                } catch (t) {
                    n = "stringify fail: '" + t + "', '" + (t && t.message) + "'",
                    p.warn(n, e)
                }
                return n
            }
            ,
            this._sendUsageMetricsSamplingRatio = this._getUsageMetricsRate(i.getGlobal().bundleInfo.browser),
            this.restoredBgConnection = function(e) {
                E._send("cs.connection.bg.restored", "INFO", {
                    timeWithoutConnection: e
                })
            }
            ,
            this.initWithoutBgConnection = function() {
                E._send("cs.connection.bg.disconnected", "INFO")
            }
            ,
            this.fetchDefinitionsFail = function() {
                E._send("cs.connection.api.definition.failed", "WARN")
            }
            ,
            this.infinityCheckResetFail = function(e) {
                E._send("cs.connection.infiniteCheck.failed", "ERROR", {
                    delay: e
                })
            }
            ,
            this.tooLongPageConfigInit = function(e) {
                E._send("cs.pageConfig.init.exceeded", "WARN", {
                    initTime: e
                })
            }
            ,
            this.tooLongUserUpdateTime = function(e) {
                E._send("bg.state.user.update.exceeded", "WARN", {
                    updateTime: e
                })
            }
            ,
            this.lostBgPageConnection = function() {
                E._send("cs.gbutton.bgСonnection.lost", "INFO")
            }
            ,
            this.restoreBgPageConnection = function(e) {
                E._send("cs.gbutton.bgСonnection.restored", "INFO", {
                    time: e
                })
            }
            ,
            this.badCursorPosition = function() {
                E._send("cs.editor.badCursorPosition", "INFO")
            }
            ,
            this.cursorJump = function() {
                E._send("cs.editor.cursorJump", "WARN")
            }
            ,
            this.signinOpen = function() {
                E._send("cs.signin.open", "INFO")
            }
            ,
            this.signinClose = function(e) {
                E._send("cs.signin.close", "INFO", {
                    openTime: e
                })
            }
            ,
            this.tabReloadClick = function() {
                E._send("cs.gbutton.reload.click", "WARN")
            }
            ,
            this.popupLoadError = function(e, t) {
                E._send("cs.popup.load.error", "ERROR", {
                    message: e,
                    name: t
                })
            }
            ,
            this.loginNoBgPageConnection = function(e) {
                E._send("debug.cs.connection.signin.bg.timeout", "INFO", {
                    message: e
                })
            }
            ,
            this.dynamicConfigLoadFromPrefsError = function(e) {
                E._sendSampled(v, "bg.dynamicConfig.prefs.load.error", "ERROR", {
                    message: e
                })
            }
            ,
            this.dynamicConfigSaveToPrefsError = function(e) {
                E._sendSampled(v, "bg.dynamicConfig.prefs.save.error", "ERROR", {
                    message: e
                })
            }
            ,
            this.dynamicConfigLoadFromServerError = function(e) {
                E._sendSampled(v, "bg.dynamicConfig.server.load.error", "ERROR", {
                    message: e
                })
            }
            ,
            this.pageConfigCDNError = function(e) {
                E._send("cs.pageConfig.cdn.error", "ERROR", {
                    message: e
                })
            }
            ,
            this.pageConfigLocalStorageError = function(e, t) {
                E._send("cs.pageConfig.localStorage.error", "INFO", {
                    message: e,
                    name: t
                })
            }
            ,
            this.pageConfigUpdated = function(e, t) {
                E._send("cs.pageConfig.updated", "INFO", {
                    oldVersion: e,
                    newVersion: t
                })
            }
            ,
            this.settingsPopupTimeout = function() {
                E._send("settings.popup.init.timeout", "WARN")
            }
            ,
            this.settingsUsupportedShow = function(e) {
                E._send("settings.popup.state.unsupported.show", "INFO", {
                    popupType: e
                })
            }
            ,
            this.socketBgError = function() {
                E._send("bg.socket.error", "WARN")
            }
            ,
            this.capiNotAuthorizedLoop = function(e, t) {
                E._send("debug.socket.notAuthorizedLoop", "INFO", {
                    authDegradation: e,
                    cookiesDisabled: t
                })
            }
            ,
            this.socketDisabledCookie = function() {
                E._send("debug.socket.disabledCookies", "INFO")
            }
            ,
            this.socketBgRestored = function(e) {
                E._send("debug.bg.socket.restored", "INFO", {
                    tryCount: e
                })
            }
            ,
            this.socketBgReconnectFail = function(e, t) {
                E._send("bg.socket.reconnect.fail", "WARN", {
                    token: e,
                    tryCount: t
                })
            }
            ,
            this.socketCsError = function() {
                E._send("cs.socket.error", "WARN")
            }
            ,
            this.soketCsErrorMsg = function(e) {
                E._send("cs.socket.errorMsg", "WARN", {
                    message: e
                })
            }
            ,
            this.gnarClientInitFail = function(e) {
                E._send("gnar.bg.tracking.gnar.init.fail", "WARN", {
                    message: e
                })
            }
            ,
            this.bgTrackingInitFail = function() {
                E._send("debug.tracking.init.fail", "INFO")
            }
            ,
            this.gnarSpecUndefinedInit = function() {
                E._send("debug.tracking.gnar.spec.init.fail", "INFO")
            }
            ,
            this.userUpgradeClick = function(e) {
                E._send("cs.ui.action.upgradeClick", "INFO", {
                    placement: e
                })
            }
            ,
            this.gButtonClick = function() {
                E._send("cs.ui.gbutton.click", "INFO")
            }
            ,
            this.checkingToggledInField = function(e) {
                E._send("cs.ui.gbutton.toggleInField", "INFO", {
                    enabled: e
                })
            }
            ,
            this.unexpectedAnonymous = function(e) {
                E._send("debug.bg.session.unexpectedAnonymous", "INFO", e)
            }
            ,
            this.getDapiPropError = function(e) {
                E._send("bg.connection.dapi.getProp.error", "WARN", {
                    statusCode: e
                })
            }
            ,
            this.setDapiPropError = function(e) {
                E._send("bg.connection.dapi.setProp.error", "WARN", {
                    statusCode: e
                })
            }
            ,
            this.toggleExtensionDefs = function(e) {
                E._send("bg.settings.definitions.toggle", "INFO", {
                    enabled: e
                })
            }
            ,
            this.toggleExtension = function(e, t) {
                E._send("bg.settings.extension.toggle", "INFO", {
                    enabled: e,
                    placement: t
                })
            }
            ,
            this.disableUntilNextVisit = function() {
                E._send("cs.gbutton.disableUntilNextVisit", "INFO")
            }
            ,
            this.disableButtonClick = function() {
                E._send("cs.gbutton.disableButtonClick", "INFO")
            }
            ,
            this.cookieOverflow = function(e, t) {
                E._send("debug.bg.state.cookie.overflow", "INFO", {
                    size: e,
                    biggestCookie: t
                })
            }
            ,
            this.externalChangePlan = function() {
                E._send("bg.api.external.changePlan", "INFO")
            }
            ,
            this.externalChangeDialect = function() {
                E._send("bg.api.external.changeDialect", "INFO")
            }
            ,
            this.externalChangeUser = function() {
                E._send("bg.api.external.changeUsed", "INFO")
            }
            ,
            this.externalLogout = function() {
                E._send("bg.api.external.logout", "INFO")
            }
            ,
            this.bgPageStartFail = function(e, t) {
                E._send("bg.start.fail", "ERROR", {
                    message: e,
                    stack: t
                })
            }
            ,
            this.acceptDataControl = function() {
                E._send("bg.dataControl.accepted", "INFO")
            }
            ,
            this.bgPageInitTimeout = function(e) {
                E._send("bg.state.start.timeout", "WARN", {
                    initTime: e
                })
            }
            ,
            this.bgPageInitFail = function(e) {
                E._send("bg.state.init.fail", "ERROR", {
                    initAttempts: e
                })
            }
            ,
            this.extensionUpdated = function(e, t) {
                E._send("bg.state.updated", "INFO", {
                    currentVersion: e,
                    previousVersion: t
                })
            }
            ,
            this.extensionUpdateFail = function(e) {
                E._send("bg.state.update.fail", "INFO", {
                    previousVersion: e
                })
            }
            ,
            this.cannotGetInstallSource = function() {
                E._send("bg.getSource.fail", "WARN")
            }
            ,
            this.extensionInstall = function(e) {
                E._send("bg.state.install", "INFO", {
                    source: e
                })
            }
            ,
            this.chromeForcedToUpdate = function(e) {
                E._send("bg.chrome.forcedToUpdate", "INFO", {
                    newVersion: e
                })
            }
            ,
            this.chromeContentScriptLoadError = function(e, t) {
                E._send("bg.chrome.cs.load.error", "WARN", {
                    message: e,
                    type: t
                })
            }
            ,
            this.reloadNotificationShow = function() {
                E._send("bg.ui.notification.tabsReload.show", "WARN")
            }
            ,
            this.reloadNotificationClick = function() {
                E._send("bg.ui.notification.tabsReload.click", "INFO")
            }
            ,
            this.fetchUserFail = function(e, t, n) {
                E._send("bg.user.fetch.fail", "WARN", {
                    body: t,
                    statusCode: n,
                    reason: e
                })
            }
            ,
            this.fetchMimicFail = function(e, t) {
                E._send("bg.user.mimic.fail", "WARN", {
                    body: e,
                    statusCode: t
                })
            }
            ,
            this.fetchStatsFail = function(e, t) {
                E._send("bg.user.dapi.prop.stats.fail", "WARN", {
                    body: e,
                    statusCode: t
                })
            }
            ,
            this.fetchCookieFail = function() {
                E._send("bg.cookie.fail", "WARN")
            }
            ,
            this.fetchSettingsFail = function(e, t) {
                E._send("bg.user.settings.fail", "WARN", {
                    body: e,
                    statusCode: t
                })
            }
            ,
            this.frequentCookieChanges = function(e) {
                E._send("debug.cookie.onChange.error", "INFO", {
                    canceled: e
                })
            }
            ,
            this.initializePropFromDapi = function(e) {
                E._send("bg.state.dapi.prop.initialize", "INFO", {
                    name: e
                })
            }
            ,
            this.onboardingPopupShow = function() {
                E._send("cs.onboarding.popup.show", "INFO")
            }
            ,
            this.onboardingPopupCancel = function() {
                E._send("cs.onboarding.popup.cancel", "INFO")
            }
            ,
            this.onboardingTutorialShow = function() {
                E._send("cs.onboarding.tutorial.show", "INFO")
            }
            ,
            this.onboardingVideoLoaded = function() {
                E._send("cs.onboarding.tutorial.video.loaded", "INFO")
            }
            ,
            this.incognitoInit = function() {
                E._send("bg.incognito.init", "INFO")
            }
            ,
            this.disabledCookiesInit = function() {
                E._send("bg.cookie.disabled", "INFO")
            }
            ,
            this.loginReminderPopupShow = function() {
                E._send("cs.gbutton.popup.loginReminder.show", "INFO")
            }
            ,
            this.delightfulMessagePopupShow = function() {
                E._send("cs.gbutton.popup.delightfulMessage.show", "INFO")
            }
            ,
            this.loginReminderBadgeShow = function() {
                E._send("bg.state.user.loginReminder.enable", "INFO")
            }
            ,
            this.proxyInit = function() {
                E._sendSampled(h, "proxy.init", "INFO")
            }
            ,
            this.proxyPortDisconnected = function(e, t) {
                E._sendSampled(h, "proxy.disconnect", "INFO", {
                    port: e,
                    error: t
                })
            }
            ,
            this.unhandledBgPageException = function(e) {
                E._sendSampled(g, "bg.unhandledException", "ERROR", {
                    message: e.error ? e.error.message : e.message
                })
            }
            ,
            this.unhandledBgPageRejection = function(e) {
                E._sendSampled(g, "bg.unhandledRejection", "ERROR", {
                    message: null != e.reason ? "string" == typeof e.reason ? e.reason : e.reason.message : void 0
                })
            }
            ,
            this.storageMigrationSucceeded = function() {
                E._send("bg.storageMigration.success", "INFO", {})
            }
            ,
            this.storageMigrationFailed = function(e) {
                E._send("bg.storageMigration.failure", "ERROR", {
                    message: e && e.message
                })
            }
            ,
            this.cardShowAction = function() {
                E._sendSampled(d, "cs.editor.card.show", "INFO")
            }
            ,
            this.cardHideAction = function() {
                E._sendSampled(d, "cs.editor.card.hide", "INFO")
            }
            ,
            this.cardReplacementAction = function() {
                E._sendSampled(d, "cs.editor.card.replacement", "INFO")
            }
            ,
            this.cardAddToDictAction = function() {
                E._sendSampled(d, "cs.editor.card.addToDict", "INFO")
            }
            ,
            this.cardIgnoreAction = function() {
                E._sendSampled(d, "cs.editor.card.ignore", "INFO")
            }
            ,
            this.synonymCardShowAction = function(e) {
                E._sendSampled(d, "cs.editor.synonym.show", "INFO", {
                    notFoundCard: e
                })
            }
            ,
            this.synonymCardHideAction = function(e) {
                E._sendSampled(d, "cs.editor.synonym.hide", "INFO", {
                    notFoundCard: e
                })
            }
            ,
            this.synonymReplacementAction = function() {
                E._sendSampled(d, "cs.editor.synonym.replacement", "INFO")
            }
            ,
            this.dictCardShowAction = function() {
                E._sendSampled(d, "cs.editor.dict.show", "INFO")
            }
            ,
            this.dictCardHideAction = function() {
                E._sendSampled(d, "cs.editor.dict.hide", "INFO")
            }
            ,
            this.errorBySendEmailData = function() {
                E._send("cs.editor.emailData.send.error", "WARN")
            }
            ,
            this.couldNotParseTransform = function(e, t) {
                E._send("cs.cards.transforms.parse.error", "WARN", {
                    transformHTML: e,
                    fallbackParseSuccessful: t
                })
            }
            ,
            this.disabledTabLoad = function(e) {
                E._sendUsage("usage.loadOnDisabledTab", "INFO", {
                    accountType: e
                })
            }
            ,
            this.disabledTabByUserLoad = function(e) {
                E._sendUsage("usage.loadOnDisabledByUserTab", "INFO", {
                    accountType: e
                })
            }
            ,
            this.initSession = function(e, t, n, r, o) {
                E._sendUsage("usage.session.init", "INFO", {
                    isTopSite: c.isTopSite(e),
                    accountType: t,
                    fieldType: n,
                    fieldSupported: r,
                    integrationType: o
                })
            }
            ,
            this.cardFirstInteraction = function(e, t) {
                E._sendUsage("usage.card.interaction", "INFO", {
                    accountType: e,
                    fieldType: t
                })
            }
            ,
            this.fluidGdocs = {
                getFullTextFailed: s.callOnce(function(e) {
                    return E._send("cs.gdocs.fluid.getFullTextFailed", "INFO", {
                        type: e
                    })
                }),
                pageToTextMapFail: s.callOnce(function() {
                    return E._send("cs.gdocs.fluid.pageToTextMapFail", "INFO")
                }),
                textFragmentMapFail: s.callOnce(function() {
                    return E._send("cs.gdocs.fluid.textFragmentMapFail", "INFO")
                }),
                init: function() {
                    return E._send("cs.gdocs.fluid.init", "INFO")
                }
            },
            this.gdocs = {
                initialGdocsDisable: function() {
                    return E._send("cs.gdocs.initialDisableSet", "INFO")
                },
                getInitialDocumentStateFailed: function(e) {
                    return E._send("cs.gdocs.state.getInitialFailed", "INFO", {
                        message: e
                    })
                },
                localStateSwappedWithRemote: function() {
                    return E._send("cs.gdocs.state.localStateSwapped", "INFO")
                },
                revisionSwitched: function() {
                    return E._send("cs.gdocs.revisionsSwitched", "INFO")
                },
                noMatchForUnderline: function() {
                    return E._send("cs.gdocs.orphantUnderline.noMatchFoundByUnderine", "INFO")
                },
                noMatchFoundForId: function() {
                    return E._send("cs.gdocs.orphantUnderline.noMatchFoundById", "INFO")
                },
                replacementFailed: function() {
                    return E._send("cs.gdocs.replacementFailed", "INFO")
                },
                editingDisabledNotification: function(e) {
                    return E._send("cs.gdocs.notifications.editingDisabledBloodyBar", "INFO", e && Object.assign({
                        hashedDocId: u.getHashedGoogleDocId()
                    }, e))
                },
                somethingWentWrongNotification: function(e) {
                    return E._send("cs.gdocs.notifications.somethingWentWrongButterBar", "INFO", e && Object.assign({
                        hashedDocId: u.getHashedGoogleDocId()
                    }, e))
                },
                misplacedUnderlines: function(e) {
                    var t = e.collaborators
                      , n = e.count;
                    return E._send("cs.gdocs.notifications.misplacedUnderlines", "INFO", {
                        collaborators: t,
                        count: n,
                        hashedDocId: u.getHashedGoogleDocId()
                    })
                },
                documentOpen: function(e) {
                    var t = e.grammarlyEnabled;
                    E._send("cs.gdocs.notifications.documentOpen", "INFO", {
                        hashedDocId: u.getHashedGoogleDocId(),
                        grammarlyEnabled: t
                    })
                },
                injectedSciptRollback: function(e) {
                    return E._send("cs.gdocs.injectedScriptsRollback", "INFO", {
                        reason: e
                    })
                },
                emptyResponseCrash: function() {
                    return E._send("cs.gdocs.emptyResponseCrash", "INFO")
                }
            },
            this.performance = {
                processInput: this._createPerfLogger("cs.fluid.processInput", 100),
                processAlerts: this._createPerfLogger("cs.fluid.processAlerts", 10),
                csInitialized: function(e, t, n) {
                    E._sendPerfMetrics && E._sendEvent({
                        logger: "cs.initialized",
                        level: "INFO",
                        ex_csInitPerf: {
                            loadTime: e,
                            initTime: t,
                            error: n
                        }
                    })
                }
            },
            this.oauthExchangeError = function(e) {
                E._send("bg.oauth.exchange.error", "ERROR", {
                    message: e
                })
            }
        }
        return e.prototype._send = function(e, t, n) {
            if (!1 !== this._shouldSendEvents) {
                var r = this._prepareDataString(e, n);
                try {
                    this._sendFelog(e, void 0, t, null != n ? {
                        json: r
                    } : void 0)
                } catch (t) {
                    p.warn("Failed to send felog for " + e + ": '" + (t && t.message) + "'", t)
                }
            }
        }
        ,
        e.prototype._sendEvent = function(e) {
            if (!1 !== this._shouldSendEvents)
                try {
                    this._sendFelogEvent(e)
                } catch (t) {
                    p.warn("Failed to send felog for " + JSON.stringify(e), t)
                }
        }
        ,
        e.prototype._sendUsage = function(e, t, n) {
            if (this._sendUsageMetrics && this._sendUsageMetricsSamplingRatio > Math.random())
                try {
                    this._sendFelogUsage(e, "", t, n)
                } catch (t) {
                    p.warn("Failed to send usage felog for " + e + ": '" + (t && t.message) + "'", t)
                }
        }
        ,
        e.prototype._sendSampled = function(e, t, n, r) {
            e > Math.random() && this._send(t, n, r)
        }
        ,
        e.prototype._createPerfLogger = function(e, t) {
            var n = this;
            if (void 0 === t && (t = 0),
            this._sendPerfMetrics) {
                var r = []
                  , i = s.throttle(this._perfMetricsThrottleTimeMs, function() {
                    if (r.push.apply(r, o(n._perfMetrics.flushMeasures(e))),
                    r.length >= t) {
                        var i = a.PerformanceMetrics.getStats(r);
                        r = [],
                        p.info("sending perf stats for " + e, i),
                        n._sendEvent({
                            logger: e,
                            level: "INFO",
                            ex_perfstats: i
                        })
                    }
                });
                return {
                    dummy: !1,
                    startMeasure: function() {
                        var t = n._perfMetrics.startMeasure(e);
                        return {
                            endMeasure: function() {
                                t.endMeasure(),
                                s.requestIdleCallback(function() {
                                    return i()
                                }, {
                                    timeout: 1e3
                                })
                            }
                        }
                    },
                    measure: function(t) {
                        var r = n._perfMetrics.measure(e, t);
                        return i(),
                        r
                    }
                }
            }
            return {
                dummy: !0,
                startMeasure: function() {
                    return {
                        endMeasure: s.noOp
                    }
                },
                measure: function(e) {
                    return e()
                }
            }
        }
        ,
        e.prototype.sendCrashLogs = function(e, t) {
            if (!1 !== this._shouldSendEvents)
                try {
                    this._sendFelogCrashLogs(t)
                } catch (t) {
                    p.warn("Failed to send crash data data for " + e + ": '" + (t && t.message) + "'", t)
                }
        }
        ,
        e.prototype.setUserId = function(e) {
            this._setUserId(e)
        }
        ,
        e.prototype.setContainerId = function(e) {
            this._setContainerId(e)
        }
        ,
        e.prototype.enableEventsSending = function() {
            this._shouldSendEvents = !0
        }
        ,
        e.prototype.disableEventsSending = function() {
            this._shouldSendEvents = !1
        }
        ,
        e.prototype.notificationShown = function(e) {
            this._send("cs.notification.show", "INFO", {
                type: e
            })
        }
        ,
        e.prototype.notificationHide = function(e) {
            this._send("cs.notification.hide", "INFO", {
                type: e
            })
        }
        ,
        e
    }();
    t.Telemetry = b
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && e[Symbol.iterator]
          , n = 0;
        return t ? t.call(e) : {
            next: function() {
                return e && n >= e.length && (e = void 0),
                {
                    value: e && e[n++],
                    done: !e
                }
            }
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.isTopSite = function(e) {
        return i.includes(e)
    }
    ;
    var o = function() {
        function e(e) {
            var t, n;
            function o(e) {
                return 'Invalid pattern "' + e + '": "*" is allowed only at start and/or end position'
            }
            this._equal = new Set,
            this._prefix = [],
            this._suffix = [],
            this._infix = [];
            try {
                for (var i = r(e), a = i.next(); !a.done; a = i.next()) {
                    var c = a.value
                      , s = c.indexOf("*");
                    if (-1 === s)
                        this._equal.add(c);
                    else if (s === c.length - 1)
                        this._prefix.push(c.substring(0, s));
                    else {
                        if (0 !== s)
                            throw new Error(o(c));
                        var u = c.indexOf("*", 1);
                        if (-1 === u)
                            this._suffix.push(c.substring(1));
                        else {
                            if (u !== c.length - 1)
                                throw new Error(o(c));
                            this._infix.push(c.substring(1, u))
                        }
                    }
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (n = i.return) && n.call(i)
                } finally {
                    if (t)
                        throw t.error
                }
            }
        }
        return e.prototype.includes = function(e) {
            return this._equal.has(e) || this._prefix.some(function(t) {
                return e.startsWith(t)
            }) || this._suffix.some(function(t) {
                return e.endsWith(t)
            }) || this._infix.some(function(t) {
                return e.includes(t)
            })
        }
        ,
        e
    }();
    t.TopSites = o;
    var i = new o(["mail.google.com", "translate.google.*", "docs.google.com", "web.whatsapp.com", "facebook.com", "outlook.*", "linkedin.com", "zendesk.*", "youtube.com", "twitter.com", "messenger.com", "*.slack.*", "*canvas*", "*instructure*", "trello.com", "editor.wix.com", "quizlet.com", "mail.yahoo.com", "*.force.*", "keep.google.com", "vk.com", "fanyi.baidu.com", "app.bullhornstaffing.com", "app.qa-world.com", "calendar.google.com", "papago.naver.com", "wordcounter.net", "blogger.*", "wattpad.com", "wordpress.com", "amazon.*", "smallseotools.com", "create.kahoot.it", "apps.rackspace.com", "basecamp.com", "varsitytutors.com", "canva.com", "fanyi.youdao.com", "reverso.net", "message.alibaba.com", "*schoology*", "*.blackboard.*", "classroom.google.com", "*upwork*", "business.facebook.com", "medium.com", "mail.aol.com", "workhub.transcribeme.com", "github.com"])
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.MANUAL_CANCEL = t.RACE_AUTO_CANCEL = t.PARALLEL_AUTO_CANCEL = t.CANCEL = t.undefindInputError = t.NOT_ITERATOR_ERROR = void 0,
    t.default = function e(t) {
        var n = arguments.length <= 1 || void 0 === arguments[1] ? function() {
            return o.noop
        }
        : arguments[1];
        var r = arguments.length <= 2 || void 0 === arguments[2] ? o.noop : arguments[2];
        var c = arguments.length <= 3 || void 0 === arguments[3] ? o.noop : arguments[3];
        var u = arguments.length <= 4 || void 0 === arguments[4] ? o.noop : arguments[4];
        var b = arguments.length <= 5 || void 0 === arguments[5] ? 0 : arguments[5];
        var y = arguments.length <= 6 || void 0 === arguments[6] ? "anonymous" : arguments[6];
        var _ = arguments[7];
        (0,
        o.check)(t, o.is.iterator, f);
        var w = p(y);
        var E = [];
        var S = (0,
        o.deferred)();
        var I = n(function(e) {
            if (void 0 === e)
                throw w;
            for (var t = 0; t < E.length; t++) {
                var n = E[t];
                n.match(e) && (E = [],
                n.resolve(e))
            }
        });
        j.cancel = o.noop;
        var k = (O = b,
        A = y,
        C = t,
        x = S.promise,
        P = _,
        l(T = {}, o.TASK, !0),
        l(T, "id", O),
        l(T, "name", A),
        l(T, "done", x),
        l(T, "forked", P),
        l(T, "cancel", function(e) {
            e instanceof s.default || (e = new s.default(m,A,e)),
            x[d](e)
        }),
        l(T, "isRunning", function() {
            return C._isRunning
        }),
        l(T, "result", function() {
            return C._result
        }),
        l(T, "error", function() {
            return C._error
        }),
        T);
        var O, A, C, x, P, T;
        k.done[d] = function(e) {
            var t = e.type
              , n = e.origin;
            j.cancel(new s.default(t,y,n))
        }
        ;
        t._isRunning = !0;
        j();
        return k;
        function N(e, t, n) {
            "undefined" == typeof window ? console.log("redux-saga " + e + ": " + t + "\n" + n.stack) : console[e].call(console, t, n)
        }
        function j(e, n) {
            if (!t._isRunning)
                throw new Error("Trying to resume an already finished generator");
            try {
                var r = e ? t.throw(e) : t.next(n);
                r.done ? R(r.value) : M(r.value, b, "", j)
            } catch (e) {
                R(e, !0),
                e instanceof s.default ? o.isDev && N("warn", y + ": uncaught", e) : N("error", y + ": uncaught", e)
            }
        }
        function R(e, n) {
            t._isRunning = !1,
            n ? (t._error = e,
            S.reject(e)) : (t._result = e,
            S.resolve(e)),
            I()
        }
        function M(t, f) {
            var p = arguments.length <= 2 || void 0 === arguments[2] ? "" : arguments[2]
              , b = arguments[3]
              , _ = v();
            u(a.effectTriggered(_, f, p, t));
            var w = void 0;
            function S(e, t) {
                w || (w = !0,
                b.cancel = o.noop,
                u(e ? a.effectRejected(_, e) : a.effectResolved(_, t)),
                b(e, t))
            }
            S.cancel = o.noop,
            b.cancel = function(e) {
                if (!w) {
                    w = !0;
                    try {
                        S.cancel(e)
                    } catch (e) {}
                    S.cancel = o.noop,
                    b(e),
                    u(a.effectRejected(_, e))
                }
            }
            ;
            var I, k, O, A, C, x, P, T, N, j, R, F, U, B = void 0;
            return o.is.promise(t) ? D(t, S) : o.is.iterator(t) ? L(t, _, y, S) : o.is.array(t) ? function(e, t, n) {
                if (!e.length)
                    return void n(null, []);
                var r = 0
                  , i = void 0
                  , a = Array(e.length);
                var c = e.map(function(e, t) {
                    var c = function(e, o) {
                        if (!i)
                            if (e) {
                                try {
                                    n.cancel(new s.default(h,y,y))
                                } catch (e) {}
                                n(e)
                            } else
                                a[t] = o,
                                ++r === a.length && (i = !0,
                                n(null, a))
                    };
                    return c.cancel = o.noop,
                    c
                });
                n.cancel = function(e) {
                    i || (i = !0,
                    c.forEach(function(t) {
                        return t.cancel(e)
                    }))
                }
                ,
                e.forEach(function(e, n) {
                    return M(e, t, n, c[n])
                })
            }(t, _, S) : o.is.notUndef(B = i.asEffect.take(t)) ? (R = B,
            F = S,
            U = {
                match: (0,
                i.matcher)(R),
                pattern: R,
                resolve: function(e) {
                    return F(null, e)
                }
            },
            E.push(U),
            void (F.cancel = function() {
                return (0,
                o.remove)(E, U)
            }
            )) : o.is.notUndef(B = i.asEffect.put(t)) ? (N = B,
            j = S,
            void (0,
            o.asap)(function() {
                return j(null, r(N))
            })) : o.is.notUndef(B = i.asEffect.race(t)) ? (O = B,
            A = _,
            C = S,
            x = void 0,
            P = Object.keys(O),
            T = {},
            P.forEach(function(e) {
                var t = function(t, n) {
                    if (!x)
                        if (t) {
                            try {
                                C.cancel(new s.default(g,y,y))
                            } catch (t) {}
                            C(l({}, e, t))
                        } else {
                            try {
                                C.cancel(new s.default(g,y,y))
                            } catch (t) {}
                            x = !0,
                            C(null, l({}, e, n))
                        }
                };
                t.cancel = o.noop,
                T[e] = t
            }),
            C.cancel = function(e) {
                x || (x = !0,
                P.forEach(function(t) {
                    return T[t].cancel(e)
                }))
            }
            ,
            void P.forEach(function(e) {
                return M(O[e], A, e, T[e])
            })) : o.is.notUndef(B = i.asEffect.call(t)) ? function(e, t, n) {
                var r = e.context
                  , i = e.fn
                  , a = e.args
                  , c = void 0;
                try {
                    c = i.apply(r, a)
                } catch (e) {
                    return n(e)
                }
                return o.is.promise(c) ? D(c, n) : o.is.iterator(c) ? L(c, t, i.name, n) : n(null, c)
            }(B, _, S) : o.is.notUndef(B = i.asEffect.cps(t)) ? function(e, t) {
                var n = e.context
                  , r = e.fn
                  , o = e.args;
                try {
                    r.apply(n, o.concat(t))
                } catch (e) {
                    return t(e)
                }
            }(B, S) : o.is.notUndef(B = i.asEffect.fork(t)) ? function(t, i, a) {
                var s = t.context
                  , l = t.fn
                  , f = t.args
                  , p = void 0
                  , d = void 0
                  , h = void 0;
                try {
                    p = l.apply(s, f)
                } catch (e) {
                    d = d
                }
                h = o.is.iterator(p) ? p : (d ? regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                throw d;
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }) : regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                p;
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }))();
                a(null, e(h, n, r, c, u, i, l.name, !0))
            }(B, _, S) : o.is.notUndef(B = i.asEffect.join(t)) ? (k = S,
            void D(B.done, k)) : o.is.notUndef(B = i.asEffect.cancel(t)) ? (I = S,
            B.done[d](new s.default(m,y,y)),
            void I()) : o.is.notUndef(B = i.asEffect.select(t)) ? function(e, t) {
                var n = e.selector
                  , r = e.args;
                try {
                    var o = n.apply(void 0, [c()].concat(function(e) {
                        {
                            if (Array.isArray(e)) {
                                for (var t = 0, n = Array(e.length); t < e.length; t++)
                                    n[t] = e[t];
                                return n
                            }
                            return Array.from(e)
                        }
                    }(r)));
                    t(null, o)
                } catch (e) {
                    t(e)
                }
            }(B, S) : S(null, t)
        }
        function D(e, t) {
            var n = e[d];
            "function" == typeof n && (t.cancel = n),
            e.then(function(e) {
                return t(null, e)
            }, function(e) {
                return t(e)
            })
        }
        function L(t, o, i, a) {
            D(e(t, n, r, c, u, o, i).done, a)
        }
    }
    ;
    var r, o = n(61), i = n(163), a = function(e) {
        {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e,
            t
        }
    }(n(293)), c = n(164), s = (r = c) && r.__esModule ? r : {
        default: r
    };
    function u(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) {
                n[t] = e[t]
            }
            return n
        } else {
            return Array.from(e)
        }
    }
    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var f = t.NOT_ITERATOR_ERROR = "proc first argument (Saga function result) must be an iterator"
      , p = t.undefindInputError = function(e) {
        return "\n  " + e + " saga was provided with an undefined input action\n  Hints :\n  - check that your Action Creator returns a non undefined value\n  - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners\n"
    }
      , d = t.CANCEL = (0,
    o.sym)("@@redux-saga/cancelPromise")
      , h = t.PARALLEL_AUTO_CANCEL = "PARALLEL_AUTO_CANCEL"
      , g = t.RACE_AUTO_CANCEL = "RACE_AUTO_CANCEL"
      , m = t.MANUAL_CANCEL = "MANUAL_CANCEL"
      , v = (0,
    o.autoInc)();
    function b(e) {
        var t = arguments.length <= 1 || arguments[1] === undefined ? function() {
            return o.noop
        }
        : arguments[1];
        var n = arguments.length <= 2 || arguments[2] === undefined ? o.noop : arguments[2];
        var r = arguments.length <= 3 || arguments[3] === undefined ? o.noop : arguments[3];
        var c = arguments.length <= 4 || arguments[4] === undefined ? o.noop : arguments[4];
        var y = arguments.length <= 5 || arguments[5] === undefined ? 0 : arguments[5];
        var _ = arguments.length <= 6 || arguments[6] === undefined ? "anonymous" : arguments[6];
        var w = arguments[7];
        (0,
        o.check)(e, o.is.iterator, f);
        var E = p(_);
        var S = [];
        var I = (0,
        o.deferred)();
        var k = t(function(e) {
            if (e === undefined)
                throw E;
            for (var t = 0; t < S.length; t++) {
                var n = S[t];
                if (n.match(e)) {
                    S = [];
                    n.resolve(e)
                }
            }
        });
        C.cancel = o.noop;
        var O = V(y, _, e, I.promise, w);
        O.done[d] = function(e) {
            var t = e.type;
            var n = e.origin;
            C.cancel(new s.default(t,_,n))
        }
        ;
        e._isRunning = true;
        C();
        return O;
        function A(e, t, n) {
            if (typeof window === "undefined") {
                console.log("redux-saga " + e + ": " + t + "\n" + n.stack)
            } else {
                console[e].call(console, t, n)
            }
        }
        function C(t, n) {
            if (!e._isRunning)
                throw new Error("Trying to resume an already finished generator");
            try {
                var r = t ? e.throw(t) : e.next(n);
                if (!r.done) {
                    P(r.value, y, "", C)
                } else {
                    x(r.value)
                }
            } catch (t) {
                x(t, true);
                if (t instanceof s.default) {
                    if (o.isDev) {
                        A("warn", _ + ": uncaught", t)
                    }
                } else {
                    A("error", _ + ": uncaught", t)
                }
            }
        }
        function x(t, n) {
            e._isRunning = false;
            if (!n) {
                e._result = t;
                I.resolve(t)
            } else {
                e._error = t;
                I.reject(t)
            }
            k()
        }
        function P(e, t) {
            var n = arguments.length <= 2 || arguments[2] === undefined ? "" : arguments[2];
            var r = arguments[3];
            var s = v();
            c(a.effectTriggered(s, t, n, e));
            var u = undefined;
            function l(e, t) {
                if (u)
                    return;
                u = true;
                r.cancel = o.noop;
                e ? c(a.effectRejected(s, e)) : c(a.effectResolved(s, t));
                r(e, t)
            }
            l.cancel = o.noop;
            r.cancel = function(e) {
                if (u)
                    return;
                u = true;
                try {
                    l.cancel(e)
                } catch (e) {
                    void 0
                }
                l.cancel = o.noop;
                r(e);
                c(a.effectRejected(s, e))
            }
            ;
            var f = undefined;
            return o.is.promise(e) ? T(e, l) : o.is.iterator(e) ? N(e, s, _, l) : o.is.array(e) ? B(e, s, l) : o.is.notUndef(f = i.asEffect.take(e)) ? j(f, l) : o.is.notUndef(f = i.asEffect.put(e)) ? R(f, l) : o.is.notUndef(f = i.asEffect.race(e)) ? G(f, s, l) : o.is.notUndef(f = i.asEffect.call(e)) ? M(f, s, l) : o.is.notUndef(f = i.asEffect.cps(e)) ? D(f, l) : o.is.notUndef(f = i.asEffect.fork(e)) ? L(f, s, l) : o.is.notUndef(f = i.asEffect.join(e)) ? F(f, l) : o.is.notUndef(f = i.asEffect.cancel(e)) ? U(f, l) : o.is.notUndef(f = i.asEffect.select(e)) ? W(f, l) : l(null, e)
        }
        function T(e, t) {
            var n = e[d];
            if (typeof n === "function") {
                t.cancel = n
            }
            e.then(function(e) {
                return t(null, e)
            }, function(e) {
                return t(e)
            })
        }
        function N(e, o, i, a) {
            T(b(e, t, n, r, c, o, i).done, a)
        }
        function j(e, t) {
            var n = {
                match: (0,
                i.matcher)(e),
                pattern: e,
                resolve: function e(n) {
                    return t(null, n)
                }
            };
            S.push(n),
            t.cancel = function() {
                return (0,
                o.remove)(S, n)
            }
        }
        function R(e, t) {
            (0,
            o.asap)(function() {
                return t(null, n(e))
            })
        }
        function M(e, t, n) {
            var r = e.context
              , i = e.fn
              , a = e.args
              , c = undefined;
            try {
                c = i.apply(r, a)
            } catch (e) {
                return n(e)
            }
            return o.is.promise(c) ? T(c, n) : o.is.iterator(c) ? N(c, t, i.name, n) : n(null, c)
        }
        function D(e, t) {
            var n = e.context
              , r = e.fn
              , o = e.args;
            try {
                r.apply(n, o.concat(t))
            } catch (e) {
                return t(e)
            }
        }
        function L(e, i, a) {
            var s = e.context
              , u = e.fn
              , l = e.args
              , f = undefined
              , p = undefined
              , d = undefined;
            try {
                f = u.apply(s, l)
            } catch (e) {
                p = p
            }
            if (o.is.iterator(f)) {
                d = f
            } else {
                d = (p ? regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function e(t) {
                        while (1) {
                            switch (t.prev = t.next) {
                            case 0:
                                throw p;
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }
                    }, e, this)
                }) : regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function e(t) {
                        while (1) {
                            switch (t.prev = t.next) {
                            case 0:
                                t.next = 2;
                                return f;
                            case 2:
                                return t.abrupt("return", t.sent);
                            case 3:
                            case "end":
                                return t.stop()
                            }
                        }
                    }, e, this)
                }))()
            }
            a(null, b(d, t, n, r, c, i, u.name, true))
        }
        function F(e, t) {
            T(e.done, t)
        }
        function U(e, t) {
            e.done[d](new s.default(m,_,_)),
            t()
        }
        function B(e, t, n) {
            if (!e.length) {
                n(null, []);
                return
            }
            var r = 0
              , i = undefined
              , a = Array(e.length);
            function c() {
                if (r === a.length) {
                    i = true;
                    n(null, a)
                }
            }
            var u = e.map(function(e, t) {
                var u = function e(o, u) {
                    if (i)
                        return;
                    if (o) {
                        try {
                            n.cancel(new s.default(h,_,_))
                        } catch (o) {
                            void 0
                        }
                        n(o)
                    } else {
                        a[t] = u;
                        r++;
                        c()
                    }
                };
                u.cancel = o.noop;
                return u
            });
            n.cancel = function(e) {
                if (!i) {
                    i = true;
                    u.forEach(function(t) {
                        return t.cancel(e)
                    })
                }
            }
            ,
            e.forEach(function(e, n) {
                return P(e, t, n, u[n])
            })
        }
        function G(e, t, n) {
            var r = undefined
              , i = Object.keys(e)
              , a = {};
            i.forEach(function(e) {
                var t = function t(o, i) {
                    if (r)
                        return;
                    if (o) {
                        try {
                            n.cancel(new s.default(g,_,_))
                        } catch (o) {
                            void 0
                        }
                        n(l({}, e, o))
                    } else {
                        try {
                            n.cancel(new s.default(g,_,_))
                        } catch (o) {
                            void 0
                        }
                        r = true;
                        n(null, l({}, e, i))
                    }
                };
                t.cancel = o.noop;
                a[e] = t
            }),
            n.cancel = function(e) {
                if (!r) {
                    r = true;
                    i.forEach(function(t) {
                        return a[t].cancel(e)
                    })
                }
            }
            ,
            i.forEach(function(n) {
                return P(e[n], t, n, a[n])
            })
        }
        function W(e, t) {
            var n = e.selector
              , o = e.args;
            try {
                var i = n.apply(undefined, [r()].concat(u(o)));
                t(null, i)
            } catch (e) {
                t(e)
            }
        }
        function V(e, t, n, r, i) {
            var a;
            return l(a = {}, o.TASK, true),
            l(a, "id", e),
            l(a, "name", t),
            l(a, "done", r),
            l(a, "forked", i),
            l(a, "cancel", function e(n) {
                if (!(n instanceof s.default)) {
                    n = new s.default(m,t,n)
                }
                r[d](n)
            }),
            l(a, "isRunning", function e() {
                return n._isRunning
            }),
            l(a, "result", function e() {
                return n._result
            }),
            l(a, "error", function e() {
                return n._error
            }),
            a
        }
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.effectTriggered = function(e, t, n, a) {
        var c;
        return r(c = {}, o, !0),
        r(c, "type", i),
        r(c, "effectId", e),
        r(c, "parentEffectId", t),
        r(c, "label", n),
        r(c, "effect", a),
        c
    }
    ,
    t.effectResolved = function(e, t) {
        var n;
        return r(n = {}, o, !0),
        r(n, "type", a),
        r(n, "effectId", e),
        r(n, "result", t),
        n
    }
    ,
    t.effectRejected = function(e, t) {
        var n;
        return r(n = {}, o, !0),
        r(n, "type", c),
        r(n, "effectId", e),
        r(n, "error", t),
        n
    }
    ;
    var o = t.MONITOR_ACTION = "MONITOR_ACTION"
      , i = t.EFFECT_TRIGGERED = "EFFECT_TRIGGERED"
      , a = t.EFFECT_RESOLVED = "EFFECT_RESOLVED"
      , c = t.EFFECT_REJECTED = "EFFECT_REJECTED"
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.t = {
        SETTINGS_INITIAL: "settings/SETTINGS_INITIAL",
        TOGGLE_DEFS: "settings/TOGGLE_DEFS",
        TOGGLE_SITE: "settings/TOGGLE_SITE",
        TOGGLE_FIELD: "settings/TOGGLE_FIELD",
        DISABLE_ON_TAB: "settings/DISABLE_ON_TAB",
        DISABLE_REMINDER_NOTIFICATION: "settings/DISABLE_REMINDER_NOTIFICATION",
        SHOW_DISABLE_REMINDER: "settings/SHOW_DISABLE_REMINDER",
        DISABLE_EMAIL_SUMMARIZATION: "settings/DISABLE_EMAIL_SUMMARIZATION",
        SHOW_NEWS: "settings/SHOW_NEWS",
        SEEN_NEWS: "settings/SEEN_NEWS",
        SEEN_GDOCS_OPT_IN: "settings/SEEN_GDOCS_OPT_IN",
        SEEN_GDOCS_LARGE_DOCUMENT_WARNING: "settings/SEEN_GDOCS_LARGE_DOCUMENT_WARNING",
        SET_GDOCS_INITIAL_DISABLE: "setting/SET_GDOCS_INITIAL_DISABLE",
        HIDE_GDOCS_SIGNIN_POPUP: "settings/HIDE_GDOCS_SIGNIN_POPUP",
        CLICK_GDOCS_AUTHENTICATION: "settings/CLICK_GDOCS_AUTHENTICATION",
        SET_GDOCS_ENABLED_SETTING: "settings/SET_GDOCS_ENABLED_SETTING",
        SHOW_ONBOARDING: "settings/SHOW_ONBOARDING",
        SEEN_ONBOARDING: "settings/SEEN_ONBOARDING",
        SEEN_ADVANCED_INLINE_CARDS_ONBOARDING: "settings/SEEN_ADVANCED_INLINE_CARDS_ONBOARDING",
        SEEN_DELIGHTFUL_MESSAGE: "settings/SEEN_DELIGHTFUL_MESSAGE",
        SHOW_LOGIN_REMINDER: "settings/SHOW_LOGIN_REMINDER",
        HIDE_LOGIN_REMINDER: "settings/HIDE_LOGIN_REMINDER",
        DISABLE_LOGIN_REMINDER: "settings/DISABLE_LOGIN_REMINDER",
        SET_DAPI_PROP: "settings/SET_DAPI_PROP",
        CHANGE_WEAK_DIALECT: "settings/CHANGE_WEAK_DIALECT",
        CHANGE_STRONG_DIALECT: "settings/CHANGE_STRONG_DIALECT",
        SAVE_ANONYMOUS_PROPERTIES: "settings/SAVE_ANONYMOUS_PROPERTIES",
        EDGE_POPUP_FROM_GBUTTON: "settings/EDGE_POPUP_FROM_GBUTTON",
        SAVE_EMAIL_CONNECTEDNESS_DATA: "settings/SAVE_EMAIL_CONNECTEDNESS_DATA",
        SHOW_DATA_CONTROL_POPUP: "settings/SHOW_DATA_CONTROL_POPUP",
        HIDE_EMOTIONS_PROMPT: "settings/HIDE_EMOTIONS_PROMPT",
        SET_EMOTIONS_EMOJI_STATE: "settings/SET_EMOTIONS_EMOJI_STATE",
        CHANGE_EMOTIONS_FEATURE: "settings/CHANGE_EMOTIONS_FEATURE",
        HIDE_EMOJI_BUTTON: "settings/HIDE_EMOJI_BUTTON",
        SHOW_EMOJI_BUTTON: "settings/SHOW_EMOJI_BUTTON",
        SEEN_CLARITY_NOTIFICATION: "settings/SEEN_CLARITY_NOTIFICATION",
        SET_SAFARI_MIGRATION_POPUP_SHOWN_TIMESTAMP: "settings/SET_SAFARI_MIGRATION_POPUP_SHOWN_TIMESTAMP",
        SET_SAFARI_MIGRATION_BACKUP_NOTIFY_FIRST_TIMESTAMP: "settings/SET_SAFARI_MIGRATION_BACKUP_NOTIFY_FIRST_TIMESTAMP",
        SET_SAFARI_MIGRATION_BACKUP_NOTIFY_SECOND_TIMESTAMP: "settings/SET_SAFARI_MIGRATION_BACKUP_NOTIFY_SECOND_TIMESTAMP",
        SHOW_GMAIL_SEND_EMAIL_PREMIUM_POPUP: "setting/SHOW_GMAIL_SEND_EMAIL_PREMIUM_POPUP"
    },
    t.DAPI_ACTIONS = [t.t.CHANGE_WEAK_DIALECT, t.t.CHANGE_STRONG_DIALECT, t.t.CHANGE_EMOTIONS_FEATURE, t.t.SET_EMOTIONS_EMOJI_STATE],
    t.CACHED_ACTIONS = [t.t.TOGGLE_DEFS, t.t.TOGGLE_SITE, t.t.TOGGLE_FIELD, t.t.SEEN_NEWS, t.t.SEEN_GDOCS_OPT_IN, t.t.SEEN_GDOCS_LARGE_DOCUMENT_WARNING, t.t.SET_GDOCS_INITIAL_DISABLE, t.t.HIDE_GDOCS_SIGNIN_POPUP, t.t.CLICK_GDOCS_AUTHENTICATION, t.t.SET_GDOCS_ENABLED_SETTING, t.t.SHOW_ONBOARDING, t.t.SEEN_ONBOARDING, t.t.SEEN_ADVANCED_INLINE_CARDS_ONBOARDING, t.t.SEEN_DELIGHTFUL_MESSAGE, t.t.SHOW_LOGIN_REMINDER, t.t.HIDE_LOGIN_REMINDER, t.t.DISABLE_LOGIN_REMINDER, t.t.SHOW_DISABLE_REMINDER, t.t.DISABLE_REMINDER_NOTIFICATION, t.t.DISABLE_EMAIL_SUMMARIZATION, t.t.EDGE_POPUP_FROM_GBUTTON, t.t.SHOW_DATA_CONTROL_POPUP, t.t.HIDE_EMOTIONS_PROMPT, t.t.SEEN_CLARITY_NOTIFICATION, t.t.SET_SAFARI_MIGRATION_POPUP_SHOWN_TIMESTAMP, t.t.SET_SAFARI_MIGRATION_BACKUP_NOTIFY_FIRST_TIMESTAMP, t.t.SET_SAFARI_MIGRATION_BACKUP_NOTIFY_SECOND_TIMESTAMP, t.t.SHOW_GMAIL_SEND_EMAIL_PREMIUM_POPUP],
    t.setDapiProp = function(e, n) {
        return {
            type: t.t.SET_DAPI_PROP,
            propKey: e,
            data: n
        }
    }
    ,
    t.changeWeakDialect = function(e) {
        return {
            type: t.t.CHANGE_WEAK_DIALECT,
            data: e
        }
    }
    ,
    t.changeStrongDialect = function(e) {
        return {
            type: t.t.CHANGE_STRONG_DIALECT,
            data: e
        }
    }
    ,
    t.initialSettings = function(e) {
        return {
            type: t.t.SETTINGS_INITIAL,
            data: e
        }
    }
    ,
    t.toggleDefs = function(e) {
        return {
            type: t.t.TOGGLE_DEFS,
            enabledDefs: e
        }
    }
    ,
    t.toggleSite = function(e, n) {
        return {
            type: t.t.TOGGLE_SITE,
            domain: n,
            enabled: e
        }
    }
    ,
    t.toggleField = function(e, n) {
        return {
            type: t.t.TOGGLE_FIELD,
            domain: n,
            data: e
        }
    }
    ,
    t.seenNews = function() {
        return {
            type: t.t.SEEN_NEWS
        }
    }
    ,
    t.gdocsDisabledInitially = function() {
        return {
            type: t.t.SET_GDOCS_INITIAL_DISABLE
        }
    }
    ,
    t.seenGdocsOptIn = function() {
        return {
            type: t.t.SEEN_GDOCS_OPT_IN
        }
    }
    ,
    t.seenGdocsLargeDocumentWarning = function() {
        return {
            type: t.t.SEEN_GDOCS_LARGE_DOCUMENT_WARNING
        }
    }
    ,
    t.hideGdocsSigninPopup = function() {
        return {
            type: t.t.HIDE_GDOCS_SIGNIN_POPUP
        }
    }
    ,
    t.clickGdocsAuthentication = function() {
        return {
            type: t.t.CLICK_GDOCS_AUTHENTICATION
        }
    }
    ,
    t.setGdocsEnabledSetting = function() {
        return {
            type: t.t.SET_GDOCS_ENABLED_SETTING
        }
    }
    ,
    t.showOnboarding = function() {
        return {
            type: t.t.SHOW_ONBOARDING
        }
    }
    ,
    t.seenOnboarding = function() {
        return {
            type: t.t.SEEN_ONBOARDING
        }
    }
    ,
    t.setSeenAdvancedInlineCardsOnboarding = function() {
        return {
            type: t.t.SEEN_ADVANCED_INLINE_CARDS_ONBOARDING
        }
    }
    ,
    t.seenDelightfulMessage = function(e) {
        return {
            type: t.t.SEEN_DELIGHTFUL_MESSAGE,
            delightfulMessageId: e
        }
    }
    ,
    t.showNews = function(e) {
        return {
            type: t.t.SHOW_NEWS,
            showNews: e
        }
    }
    ,
    t.saveAnonymousProps = function(e) {
        return {
            type: t.t.SAVE_ANONYMOUS_PROPERTIES,
            props: e
        }
    }
    ,
    t.disableOnTab = function() {
        return {
            type: t.t.DISABLE_ON_TAB
        }
    }
    ,
    t.showDisableReminder = function(e) {
        return {
            type: t.t.SHOW_DISABLE_REMINDER,
            domain: e
        }
    }
    ,
    t.disableReminder = function(e) {
        return {
            type: t.t.DISABLE_REMINDER_NOTIFICATION,
            domain: e
        }
    }
    ,
    t.showEdgePopupFromGButton = function() {
        return {
            type: t.t.EDGE_POPUP_FROM_GBUTTON
        }
    }
    ,
    t.showLoginReminder = function(e) {
        return {
            type: t.t.SHOW_LOGIN_REMINDER,
            loginReminderType: e
        }
    }
    ,
    t.hideLoginReminder = function() {
        return {
            type: t.t.HIDE_LOGIN_REMINDER
        }
    }
    ,
    t.disableLoginReminder = function() {
        return {
            type: t.t.DISABLE_LOGIN_REMINDER
        }
    }
    ,
    t.disableEmailSummarization = function() {
        return {
            type: t.t.DISABLE_EMAIL_SUMMARIZATION
        }
    }
    ,
    t.saveEmailConnectednessData = function(e) {
        return {
            type: t.t.SAVE_EMAIL_CONNECTEDNESS_DATA,
            emailConnectednessData: e
        }
    }
    ,
    t.hideEmotionsPrompt = function() {
        return {
            type: t.t.HIDE_EMOTIONS_PROMPT
        }
    }
    ,
    t.changeEmotionsFeature = function(e) {
        return {
            type: t.t.CHANGE_EMOTIONS_FEATURE,
            data: e
        }
    }
    ,
    t.setEmotionsEmojiState = function(e) {
        return {
            type: t.t.SET_EMOTIONS_EMOJI_STATE,
            data: e
        }
    }
    ,
    t.seenClarityNotification = function() {
        return {
            type: t.t.SEEN_CLARITY_NOTIFICATION
        }
    }
    ,
    t.setSafariMigrationPopupShownTimestamp = function() {
        return {
            type: t.t.SET_SAFARI_MIGRATION_POPUP_SHOWN_TIMESTAMP
        }
    }
    ,
    t.setSafariMigrationBackupNotifFirstTimestamp = function() {
        return {
            type: t.t.SET_SAFARI_MIGRATION_BACKUP_NOTIFY_FIRST_TIMESTAMP
        }
    }
    ,
    t.setSafariMigrationBackupNotifSecondTimestamp = function() {
        return {
            type: t.t.SET_SAFARI_MIGRATION_BACKUP_NOTIFY_FIRST_TIMESTAMP
        }
    }
    ,
    t.showGmailSendEmailPremiumPopup = function() {
        return {
            type: t.t.SHOW_GMAIL_SEND_EMAIL_PREMIUM_POPUP
        }
    }
}
, function(e, t, n) {
    e.exports = n(366)
}
, , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = {};
    t.timers = {
        start: function(e) {
            r[e] = Date.now()
        },
        stop: function(e) {
            var t = this.passed(e);
            return delete r[e],
            t
        },
        passed: function(e) {
            return e && r[e] ? Date.now() - r[e] : 0
        }
    }
}
, , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function(e, t) {
        for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n]);
        function r() {
            this.constructor = e
        }
        e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
        new r)
    }
      , o = function(e) {
        function t(t) {
            e.call(this),
            this.errors = t;
            var n = Error.call(this, t ? t.length + " errors occurred during unsubscription:\n  " + t.map(function(e, t) {
                return t + 1 + ") " + e.toString()
            }).join("\n  ") : "");
            this.name = n.name = "UnsubscriptionError",
            this.stack = n.stack,
            this.message = n.message
        }
        return r(t, e),
        t
    }(Error);
    t.UnsubscriptionError = o
}
, , function(e, t, n) {
    var r = n(8)
      , o = n(50)
      , i = NaN
      , a = /^\s+|\s+$/g
      , c = /^[-+]0x[0-9a-f]+$/i
      , s = /^0b[01]+$/i
      , u = /^0o[0-7]+$/i
      , l = parseInt;
    e.exports = function(e) {
        if ("number" == typeof e)
            return e;
        if (o(e))
            return i;
        if (r(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = r(t) ? t + "" : t
        }
        if ("string" != typeof e)
            return 0 === e ? e : +e;
        e = e.replace(a, "");
        var n = s.test(e);
        return n || u.test(e) ? l(e.slice(2), n ? 2 : 8) : c.test(e) ? i : +e
    }
}
, , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0)
      , o = n(139)
      , i = n(159)
      , a = n(320)
      , c = n(321)
      , s = n(160)
      , u = n(275)
      , l = n(4)
      , f = n(10)
      , p = n(1)
      , d = n(324)
      , h = function() {
        function e(e) {
            this.port = chrome.runtime.connect({
                name: e
            })
        }
        return e.prototype.onMessage = function(e) {
            this.port.onMessage.addListener(e)
        }
        ,
        e.prototype.onDisconnect = function(e) {
            this.port.onDisconnect.addListener(e)
        }
        ,
        e.prototype.postMessage = function(e) {
            this.port.postMessage(e)
        }
        ,
        e
    }()
      , g = function() {
        function e(e) {
            this._port = e,
            this.sender = {};
            var t = e.sender
              , n = e.name;
            this.name = n,
            t && (this.sender.url = t.url,
            t.tab && t.tab.url && t.tab.id && (this.sender.tab = {
                url: t.tab.url,
                id: t.tab.id
            }))
        }
        return e.prototype.onMessage = function(e) {
            this._port.onMessage.addListener(e)
        }
        ,
        e.prototype.onDisconnect = function(e) {
            this._port.onDisconnect.addListener(e)
        }
        ,
        e.prototype.postMessage = function(e) {
            this._port.postMessage(e)
        }
        ,
        e
    }()
      , m = function() {
        return function() {
            var e = this;
            this.alarms = new c.ChromeAlarmsApiImpl,
            this.tabs = new a.ChromeTabsApiImpl,
            this.notification = {
                kind: "web-extension",
                create: function(e) {
                    return p.SafePromise.create(function(t, n) {
                        var o = chrome.notifications
                          , i = l.guid();
                        o.create(i, Object.assign({
                            type: "basic"
                        }, e), function() {
                            s.handleChromeError(function() {
                                var e = new r.Observable(function(e) {
                                    var t = function(t) {
                                        return t === i && e.next(t)
                                    };
                                    return o.onClicked.addListener(t),
                                    function() {
                                        return o.onClicked.removeListener(t)
                                    }
                                }
                                )
                                  , n = new r.Observable(function(e) {
                                    var t = function(t, n) {
                                        return t === i && e.next({
                                            id: t,
                                            buttonIndex: n
                                        })
                                    };
                                    return o.onButtonClicked.addListener(t),
                                    function() {
                                        return o.onButtonClicked.removeListener(t)
                                    }
                                }
                                )
                                  , a = new r.Observable(function(e) {
                                    var t = function(t, n) {
                                        return t === i && e.next({
                                            id: t,
                                            byUser: n
                                        })
                                    };
                                    return o.onClosed.addListener(t),
                                    function() {
                                        return o.onClosed.removeListener(t)
                                    }
                                }
                                );
                                t({
                                    id: i,
                                    click: e,
                                    buttonClick: n,
                                    close: a
                                })
                            }, n)
                        })
                    })
                },
                clear: function(e) {
                    return p.SafePromise.create(function(t, n) {
                        chrome.notifications.clear(e, function(e) {
                            s.handleChromeError(function() {
                                return t(e)
                            }, n)
                        })
                    })
                }
            },
            this.cookies = {
                kind: "web-extension",
                get: function(e) {
                    return p.SafePromise.create(function(t, n) {
                        return chrome.cookies.get(e, function(e) {
                            return s.handleChromeError(function() {
                                return t(e)
                            }, n)
                        })
                    })
                },
                remove: function(e) {
                    return new Promise(function(t, n) {
                        return chrome.cookies.remove(e, function() {
                            return s.handleChromeError(function() {
                                return t(null)
                            }, n)
                        })
                    }
                    )
                },
                getAll: function(e) {
                    return p.SafePromise.create(function(t, n) {
                        return chrome.cookies.getAll(e, function(e) {
                            return s.handleChromeError(function() {
                                return t(e)
                            }, n)
                        })
                    })
                },
                set: function(e) {
                    return p.SafePromise.create(function(t, n) {
                        return chrome.cookies.set(e, function(e) {
                            return s.handleChromeError(function() {
                                return t(e)
                            }, n)
                        })
                    })
                },
                watch: function(e, t) {
                    chrome.cookies.onChanged.addListener(function(n) {
                        var r = n.cookie
                          , o = n.cause;
                        !r || !r.name || e.path && e.path !== r.path || e.name !== r.name || e.domain && -1 === r.domain.indexOf(e.domain) || ("explicit" === o && t(r),
                        "expired_overwrite" === o && t())
                    })
                }
            },
            this.preferences = u.preferencesApi.windowLocalStorage,
            this.button = {
                kind: "web-extension",
                setBadge: function(e) {
                    chrome.browserAction.setBadgeText({
                        text: e
                    })
                },
                setIconByName: function(e) {
                    var t = "./src/icon/icon"
                      , n = e ? "-" + e : "";
                    chrome.browserAction.setIcon({
                        path: {
                            16: t + "16" + n + ".png",
                            32: t + "32" + n + ".png"
                        }
                    })
                },
                setBadgeBackgroundColor: function(e) {
                    chrome.browserAction.setBadgeBackgroundColor({
                        color: e
                    })
                }
            },
            this.management = {
                uninstallSelf: function() {
                    chrome.management.uninstallSelf()
                }
            },
            this.message = "bg" === f.getGlobal().bundleInfo.context ? new o.GenericBackgroundMessageApiImpl(function(e) {
                return chrome.runtime.onConnect.addListener(function(t) {
                    return e(new g(t))
                })
            }
            ,this.tabs.getActiveTab.bind(this.tabs),this.tabs.getAllTabs.bind(this.tabs)) : new i.GenericContentScriptMessageApiImpl(function(e) {
                return new h(e)
            }
            ),
            this._baseUrl = p.try_(function() {
                return chrome.extension.getURL("")
            }, function(e) {
                return null
            }),
            this.fetchBlacklistConfig = function() {
                return d.fetchBlacklist()
            }
            ,
            this.getUrl = function(t) {
                return e._baseUrl ? e._baseUrl + t : chrome.extension.getURL(t)
            }
            ,
            this.openUrl = function(t) {
                return e.tabs.open(t, !0)
            }
            ,
            this.isExtensionUrl = function(t, n) {
                return e.getUrl(t) === n
            }
            ,
            this.reload = function() {
                return chrome.runtime.reload()
            }
        }
    }();
    t.createApi = function() {
        return new m
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(9)
      , o = n(109)
      , i = n(154);
    t.toSubscriber = function(e, t, n) {
        if (e) {
            if (e instanceof r.Subscriber)
                return e;
            if (e[o.rxSubscriber])
                return e[o.rxSubscriber]()
        }
        return e || t || n ? new r.Subscriber(e,t,n) : new r.Subscriber(i.empty)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0)
      , o = n(160)
      , i = n(1)
      , a = function() {
        function e() {
            this.kind = "web-extension"
        }
        return e.prototype.open = function(e, t) {
            return i.SafePromise.create(function(n, r) {
                chrome.tabs.create({
                    url: e,
                    active: t
                }, function(e) {
                    o.handleChromeError(function() {
                        return n(e)
                    }, r)
                })
            })
        }
        ,
        e.prototype.updateCurrent = function(e) {
            return i.SafePromise.create(function(t, n) {
                chrome.tabs.update({
                    url: e
                }, function(e) {
                    o.handleChromeError(function() {
                        return t(e)
                    }, n)
                })
            })
        }
        ,
        e.prototype.getActiveTab = function() {
            return i.SafePromise.create(function(e, t) {
                var n = chrome.tabs;
                n.query({
                    active: !0,
                    lastFocusedWindow: !0
                }, function(r) {
                    o.handleChromeError(function() {
                        r && r.length ? e(r[0]) : n.query({
                            active: !0
                        }, function(n) {
                            o.handleChromeError(function() {
                                e(n[0])
                            }, t)
                        })
                    }, t)
                })
            })
        }
        ,
        e.prototype.getAllTabs = function() {
            return i.SafePromise.create(function(e, t) {
                return chrome.tabs.query({}, function(n) {
                    return o.handleChromeError(function() {
                        return e(n)
                    }, t)
                })
            })
        }
        ,
        e.prototype.getActiveTabUrl = function() {
            var e = this;
            return i.SafePromise.create(function(t, n) {
                return e.getActiveTab().then(function(e) {
                    return o.handleChromeError(function() {
                        return t(e && e.url)
                    }, n)
                })
            })
        }
        ,
        e.prototype.onActiveTabChange = function(e, t) {
            var n = this
              , r = function(n) {
                o.handleChromeError(function() {
                    n && e(n)
                }, t)
            };
            chrome.tabs.onActivated.addListener(function(e) {
                return chrome.tabs.get(e.tabId, function(e) {
                    return r(e)
                })
            }),
            chrome.tabs.onUpdated.addListener(function(e, t) {
                n.getActiveTab().then(function(n) {
                    n && n.id === e && (t.url || t.favIconUrl || "complete" === t.status) && chrome.tabs.get(e, function(e) {
                        return r(e)
                    })
                })
            }),
            chrome.windows.onFocusChanged.addListener(function(e) {
                return chrome.tabs.query({
                    active: !0,
                    windowId: e,
                    lastFocusedWindow: !0
                }, function(e) {
                    return r(e[0])
                })
            }),
            this.getActiveTab().then(function(e) {
                return r(e)
            })
        }
        ,
        e.prototype.tabUrlChange = function() {
            return new r.Observable(function(e) {
                var t = function(t, n, r) {
                    "complete" === n.status && e.next({
                        id: t,
                        url: r.url
                    })
                };
                return chrome.tabs.onUpdated.addListener(t),
                function() {
                    return chrome.tabs.onUpdated.removeListener(t)
                }
            }
            )
        }
        ,
        e.prototype.reload = function(e) {
            return i.SafePromise.create(function(t, n) {
                var r = function() {
                    return o.handleChromeError(function() {
                        return t()
                    }, n)
                };
                e ? chrome.tabs.reload(e, {}, r) : chrome.tabs.reload(r)
            })
        }
        ,
        e
    }();
    t.ChromeTabsApiImpl = a
}
, function(e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    );
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return o(t, e),
        t.prototype.create = function(e, t) {
            var n = null
              , r = setTimeout(function() {
                t.period && (n = setInterval(e, t.period)),
                e()
            }, t.delay);
            return {
                dispose: function() {
                    clearTimeout(r),
                    null !== n && clearInterval(n)
                }
            }
        }
        ,
        t
    }(n(322).StubAlarmsApiImpl);
    t.ChromeAlarmsApiImpl = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1)
      , o = n(3)
      , i = function() {
        function e() {
            this._log = o.Logger.create("extension-api.alarms.stub"),
            this._warning = "Method is not implemented"
        }
        return e.prototype.create = function(e, t) {
            return this._log.warn(this._warning),
            {
                dispose: r.noOp
            }
        }
        ,
        e
    }();
    t.StubAlarmsApiImpl = i
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    }
      , o = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i, a, c = n(59), s = n(1), u = n(276);
    function l(e, t) {
        return {
            get: e.get.bind(e),
            set: e.set.bind(e),
            getAll: e.getAll.bind(e),
            remove: e.remove.bind(e),
            removeAll: function() {
                return r(this, void 0, void 0, function() {
                    var n;
                    return o(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, e.getAll()];
                        case 1:
                            return n = r.sent(),
                            [4, e.removeAll()];
                        case 2:
                            return r.sent(),
                            [4, Promise.all(Object.keys(n).filter(t).map(function(t) {
                                return e.set(t, n[t])
                            }))];
                        case 3:
                            return r.sent(),
                            [2]
                        }
                    })
                })
            }
        }
    }
    (a = i || (i = {}))[a.nonEmptyMigration = 0] = "nonEmptyMigration",
    a[a.emptyMigration = 1] = "emptyMigration",
    t.createMigrationAwareApi = l;
    var f = function() {
        function e(e, t, n, r) {
            void 0 === r && (r = []);
            var o = this;
            this._name = e,
            this._source = t,
            this._destination = n,
            this._destValuesToKeep = r,
            this._migrationFlagSuccessfulValue = "ok",
            this._migrationFlagUniqueKey = "104ccd8c-9919-9ae4-931f-782fb197486c",
            this._migrationFlagKey = "__migration-" + this._migrationFlagUniqueKey + ":(" + this._name + ")",
            this._migrationInProgress = !1,
            this.migrationAwareDestination = l(this._destination, function(e) {
                return e === o._migrationFlagKey
            })
        }
        return e.prototype._getMigrated = function() {
            var e = this;
            return this._destination.get(this._migrationFlagKey).then(function(t) {
                return t === e._migrationFlagSuccessfulValue
            })
        }
        ,
        e.prototype._setMigrated = function() {
            return r(this, void 0, void 0, function() {
                var e;
                return o(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this._destination.set(this._migrationFlagKey, this._migrationFlagSuccessfulValue)];
                    case 1:
                        return t.sent(),
                        [4, this._destination.get(this._migrationFlagKey)];
                    case 2:
                        if ((e = t.sent()) !== this._migrationFlagSuccessfulValue)
                            throw new Error("Could not verify status write, actual value: " + e);
                        return [2]
                    }
                })
            })
        }
        ,
        e.prototype._runMigration = function() {
            return r(this, void 0, void 0, function() {
                var e, t, n, r, a, c = this;
                return o(this, function(o) {
                    switch (o.label) {
                    case 0:
                        s.assert(!this._migrationInProgress, "migration already in progress"),
                        this._migrationInProgress = !0,
                        o.label = 1;
                    case 1:
                        return o.trys.push([1, 7, , 8]),
                        [4, this._source.getAll()];
                    case 2:
                        return e = o.sent(),
                        t = 0 === Object.keys(e).length,
                        [4, Promise.all(this._destValuesToKeep.map(function(t) {
                            return c._destination.get(t).then(function(n) {
                                null != n && (e[t] = n)
                            })
                        }))];
                    case 3:
                        return o.sent(),
                        [4, this._destination.removeAll()];
                    case 4:
                        return o.sent(),
                        [4, Promise.all(Object.keys(e).filter(function(t) {
                            return null != e[t]
                        }).map(function(t) {
                            return c._destination.set(t, e[t])
                        }))];
                    case 5:
                        return o.sent(),
                        n = u,
                        r = [e],
                        [4, this._destination.getAll()];
                    case 6:
                        if (!n.apply(void 0, r.concat([o.sent()])))
                            throw new Error("Could not verify write");
                        return this._migrationInProgress = !1,
                        [2, t ? i.emptyMigration : i.nonEmptyMigration];
                    case 7:
                        throw a = o.sent(),
                        this._migrationInProgress = !1,
                        a;
                    case 8:
                        return [2]
                    }
                })
            })
        }
        ,
        e.prototype.ensureMigrationCompleted = function() {
            return r(this, void 0, void 0, function() {
                var e;
                return o(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this._getMigrated()];
                    case 1:
                        return t.sent() ? [2, c.StorageMigrationResult.alreadyMigrated] : [3, 2];
                    case 2:
                        return [4, this._runMigration()];
                    case 3:
                        return e = t.sent(),
                        [4, this._setMigrated()];
                    case 4:
                        switch (t.sent(),
                        e) {
                        case i.nonEmptyMigration:
                            return [2, c.StorageMigrationResult.success];
                        case i.emptyMigration:
                            return [2, c.StorageMigrationResult.successWithEmpty];
                        default:
                            throw e,
                            new Error("Match not exhaustive: " + e)
                        }
                        t.label = 5;
                    case 5:
                        return [2]
                    }
                })
            })
        }
        ,
        e
    }();
    t.StorageMigration = f
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(10);
    t.fetchBlacklist = function() {
        return fetch(r.getGlobal().appConfig.url.pageConfigUrl, {
            credentials: "include"
        }).then(function(e) {
            return e.ok ? e.json() : e.text().then(function(t) {
                throw {
                    name: "RequestError",
                    body: t,
                    statusCode: e.status,
                    message: e.statusText
                }
            })
        }).then(function(e) {
            if ("string" != typeof e && e && e.error)
                throw new Error(e.error);
            return e
        })
    }
}
, , , , , function(e, t, n) {
    var r = n(11);
    e.exports = function() {
        return r.Date.now()
    }
}
, function(e, t, n) {
    var r = n(98)
      , o = n(193)
      , i = n(332)
      , a = n(6);
    e.exports = function(e, t) {
        return (a(e) ? r : o)(e, i(t))
    }
}
, function(e, t, n) {
    var r = n(28);
    e.exports = function(e, t) {
        return function(n, o) {
            if (null == n)
                return n;
            if (!r(n))
                return e(n, o);
            for (var i = n.length, a = t ? i : -1, c = Object(n); (t ? a-- : ++a < i) && !1 !== o(c[a], a, c); )
                ;
            return n
        }
    }
}
, function(e, t, n) {
    var r = n(51);
    e.exports = function(e) {
        return "function" == typeof e ? e : r
    }
}
, function(e, t, n) {
    var r = n(68)
      , o = n(126)
      , i = n(57)
      , a = o(function(e, t) {
        r(t, i(t), e)
    });
    e.exports = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(81)
      , o = n(4)
      , i = function() {
        function e(e, t, n, i, a) {
            this._baseUrl = e,
            this._appName = t,
            this._appVersion = n,
            this._env = i,
            this._fetch = a,
            this._context = {
                userId: void 0,
                containerId: void 0
            },
            this._sessionId = o.guid(),
            this._logEndpoint = r.felogLogEndpoint(this._baseUrl),
            this._crashEndpoint = r.felogCrashEndpoint(this._baseUrl)
        }
        return e.prototype.setUserId = function(e) {
            this._context = Object.assign({}, this._context, {
                userId: e
            })
        }
        ,
        e.prototype.setContainerId = function(e) {
            this._context = Object.assign({}, this._context, {
                containerId: e
            })
        }
        ,
        e.prototype.getContext = function() {
            return this._context
        }
        ,
        e.prototype._sendRaw = function(e, t) {
            return this._fetch(e, {
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                method: "post",
                cache: "no-cache",
                body: JSON.stringify(t)
            }).then(function(e) {}, function(e) {})
        }
        ,
        e.prototype.sendEvent = function(e) {
            var t = r.createEventPayload(e, {
                application: this._appName,
                version: this._appVersion,
                env: this._env,
                context: this.getContext()
            });
            return this._sendRaw(this._logEndpoint, t)
        }
        ,
        e.prototype.sendCrashLog = function(e) {
            var t = this
              , n = e.map(function(e) {
                return r.createEventPayload(e, {
                    application: t._appName,
                    version: t._appVersion,
                    sessionId: t._sessionId,
                    env: t._env,
                    context: t.getContext()
                })
            });
            return this._sendRaw(this._crashEndpoint, n)
        }
        ,
        e.prototype.sendUsageEvent = function(e, t, n, o) {
            var i = r.createEventPayload({
                logger: e,
                message: t,
                level: n,
                extra_usage: o
            }, {
                application: this._appName,
                version: this._appVersion,
                env: this._env
            });
            return this._sendRaw(this._logEndpoint, i)
        }
        ,
        e
    }();
    t.DefaultFelogClient = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(81)
      , o = function() {
        function e(e, t, n, r, o) {
            this._baseUrl = e,
            this._appName = t,
            this._appVersion = n,
            this._env = r,
            this._fetch = o,
            this._context = {
                userId: void 0,
                containerId: void 0
            }
        }
        return e.prototype.setUserId = function(e) {
            this._context = Object.assign({}, this._context, {
                userId: e
            })
        }
        ,
        e.prototype.setContainerId = function(e) {
            this._context = Object.assign({}, this._context, {
                containerId: e
            })
        }
        ,
        e.prototype.getContext = function() {
            return this._context
        }
        ,
        e.prototype.send = function(e) {
            var t = r.createEventPayload(e, {
                application: this._appName,
                version: this._appVersion,
                env: this._env,
                context: this.getContext()
            });
            return this._fetch(this._baseUrl, {
                mode: "no-cors",
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                cache: "no-cache",
                body: JSON.stringify(t)
            })
        }
        ,
        e
    }();
    t.SumoLogicClient = o
}
, function(e, t, n) {
    "use strict";
    var r = n(482)
      , o = n(487)
      , i = n(489)
      , a = "[object Object]"
      , c = Function.prototype
      , s = Object.prototype
      , u = c.toString
      , l = s.hasOwnProperty
      , f = u.call(Object);
    t.a = function(e) {
        if (!Object(i.a)(e) || Object(r.a)(e) != a)
            return !1;
        var t = Object(o.a)(e);
        if (null === t)
            return !0;
        var n = l.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && u.call(n) == f
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.t = {
        SET_USER: "user/SET_USER",
        SET_GROUPS: "user/SET_GROUPS",
        SET_SETTINGS: "user/SET_SETTINGS",
        SESSION_INVALIDATE: "user/SESSION_INVALIDATE",
        INC_FIXED: "user/INC_FIXED",
        UPDATE_GROUPS: "user/UPDATE_GROUPS"
    },
    t.setUser = function(e) {
        return {
            type: t.t.SET_USER,
            data: e
        }
    }
    ,
    t.setGroups = function(e) {
        return {
            type: t.t.SET_GROUPS,
            data: e
        }
    }
    ,
    t.setSettings = function(e) {
        return {
            type: t.t.SET_SETTINGS,
            data: e
        }
    }
    ,
    t.sessionInvalidate = function(e) {
        return {
            type: t.t.SESSION_INVALIDATE,
            reason: e
        }
    }
    ,
    t.incFixed = function() {
        return {
            type: t.t.INC_FIXED
        }
    }
    ,
    t.updateGroups = function() {
        return {
            type: t.t.UPDATE_GROUPS
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    }
      , o = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
      , i = this;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(10)
      , c = n(148)
      , s = n(149)
      , u = n(506)
      , l = n(1);
    t.init = function(e) {
        return r(this, void 0, void 0, function() {
            var t, n;
            return o(this, function(i) {
                switch (i.label) {
                case 0:
                    return i.trys.push([0, 2, , 3]),
                    [4, function(e) {
                        return r(this, void 0, void 0, function() {
                            var t, n, r, i, a, c, s, f, p, d;
                            return o(this, function(o) {
                                switch (o.label) {
                                case 0:
                                    return t = window.fetch.bind(window),
                                    n = e.bundleInfo.browser,
                                    r = e.appConfig.gnar,
                                    i = "safariApp" === e.bundleInfo.bundleType ? new u.CookieStorage(".grammarly.com") : "chrome" === n ? new u.ChromeCookieStorage(r.url,r.domain) : "firefox" === n ? new u.ReadonlyWebExtensionsCookieStorage(r.url,r.domain) : "edge" === n || "safari" === n ? new u.BackendStorage(t,r.url) : l.assertNever(n),
                                    a = "firefox" === n || "safariApp" === e.bundleInfo.bundleType ? [] : [new u.CookieStorage(r.domain), new u.LocalStorage, new u.MemoryStorage],
                                    c = new u.ContainerIdManager(i,a,null,"chrome" === n ? 1e3 : 5e3),
                                    "safariApp" !== e.bundleInfo.bundleType ? [3, 3] : (s = c.key(),
                                    f = window.bgInitArgs,
                                    p = f && f.companionContainerId,
                                    [4, i.safeGetValue(s)]);
                                case 1:
                                    return null != o.sent() ? [3, 3] : (d = null == p ? c.generateContainerId() : p,
                                    [4, i.safeSetValue(s, d)]);
                                case 2:
                                    o.sent(),
                                    o.label = 3;
                                case 3:
                                    return [2, {
                                        ga: "firefox" !== n ? new u.GoogleAnalyticsClient(r.googleAnalyticsId,new u.GAClientIdManager(i,a,null,"chrome" === n ? 1e3 : 5e3),!1) : null,
                                        gnar: new u.GnarClientImpl(r.url,r.appName,e.buildInfo.version,t,c,null,!0)
                                    }]
                                }
                            })
                        })
                    }(a.getGlobal())];
                case 1:
                    return t = i.sent(),
                    c.tracker.gnar = t.gnar,
                    c.tracker.ga = t.ga || void 0,
                    [2, new e(t.gnar)];
                case 2:
                    return n = i.sent(),
                    s.felog.gnarClientInitFail(n && n.message),
                    [2, void 0];
                case 3:
                    return [2]
                }
            })
        })
    }
    ,
    t.getContainerIdOrUndefined = function() {
        return r(i, void 0, void 0, function() {
            var e;
            return o(this, function(t) {
                switch (t.label) {
                case 0:
                    return t.trys.push([0, 4, , 5]),
                    c.tracker.gnar ? [4, c.tracker.gnar.getContainerId()] : [3, 2];
                case 1:
                    return e = t.sent(),
                    [3, 3];
                case 2:
                    e = void 0,
                    t.label = 3;
                case 3:
                    return [2, e];
                case 4:
                    return t.sent(),
                    [2, void 0];
                case 5:
                    return [2]
                }
            })
        })
    }
}
, , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = t.repeat = function(e, t) {
        return new Array(t + 1).join(e)
    }
      , o = t.pad = function(e, t) {
        return r("0", t - e.toString().length) + e
    }
    ;
    t.formatTime = function(e) {
        return o(e.getHours(), 2) + ":" + o(e.getMinutes(), 2) + ":" + o(e.getSeconds(), 2) + "." + o(e.getMilliseconds(), 3)
    }
    ,
    t.timer = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(360)
      , o = n(493)
      , i = n(494)
      , a = n(495)
      , c = n(363);
    n(362);
    n.d(t, "createStore", function() {
        return r.b
    }),
    n.d(t, "combineReducers", function() {
        return o.a
    }),
    n.d(t, "bindActionCreators", function() {
        return i.a
    }),
    n.d(t, "applyMiddleware", function() {
        return a.a
    }),
    n.d(t, "compose", function() {
        return c.a
    })
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return i
    }),
    t.b = function e(t, n, a) {
        var c;
        "function" == typeof n && void 0 === a && (a = n,
        n = void 0);
        if (void 0 !== a) {
            if ("function" != typeof a)
                throw new Error("Expected the enhancer to be a function.");
            return a(e)(t, n)
        }
        if ("function" != typeof t)
            throw new Error("Expected the reducer to be a function.");
        var s = t;
        var u = n;
        var l = [];
        var f = l;
        var p = !1;
        function d() {
            f === l && (f = l.slice())
        }
        function h() {
            return u
        }
        function g(e) {
            if ("function" != typeof e)
                throw new Error("Expected listener to be a function.");
            var t = !0;
            return d(),
            f.push(e),
            function() {
                if (t) {
                    t = !1,
                    d();
                    var n = f.indexOf(e);
                    f.splice(n, 1)
                }
            }
        }
        function m(e) {
            if (!Object(r.a)(e))
                throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === e.type)
                throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (p)
                throw new Error("Reducers may not dispatch actions.");
            try {
                p = !0,
                u = s(u, e)
            } finally {
                p = !1
            }
            for (var t = l = f, n = 0; n < t.length; n++) {
                var o = t[n];
                o()
            }
            return e
        }
        m({
            type: i.INIT
        });
        return c = {
            dispatch: m,
            subscribe: g,
            getState: h,
            replaceReducer: function(e) {
                if ("function" != typeof e)
                    throw new Error("Expected the nextReducer to be a function.");
                s = e,
                m({
                    type: i.INIT
                })
            }
        },
        c[o.a] = function() {
            var e, t = g;
            return (e = {
                subscribe: function(e) {
                    if ("object" != typeof e)
                        throw new TypeError("Expected the observer to be an object.");
                    function n() {
                        e.next && e.next(h())
                    }
                    n();
                    var r = t(n);
                    return {
                        unsubscribe: r
                    }
                }
            })[o.a] = function() {
                return this
            }
            ,
            e
        }
        ,
        c
    }
    ;
    var r = n(336)
      , o = n(490)
      , i = {
        INIT: "@@redux/INIT"
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(483).a.Symbol;
    t.a = r
}
, function(e, t, n) {
    "use strict"
}
, function(e, t, n) {
    "use strict";
    t.a = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        if (0 === t.length)
            return function(e) {
                return e
            }
            ;
        if (1 === t.length)
            return t[0];
        return t.reduce(function(e, t) {
            return function() {
                return e(t.apply(void 0, arguments))
            }
        })
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.utils = t.effects = t.takeLatest = t.takeEvery = t.storeIO = t.runSaga = t.isCancelError = t.SagaCancellationException = void 0;
    var r = n(497);
    Object.defineProperty(t, "runSaga", {
        enumerable: !0,
        get: function() {
            return r.runSaga
        }
    }),
    Object.defineProperty(t, "storeIO", {
        enumerable: !0,
        get: function() {
            return r.storeIO
        }
    });
    var o = n(498);
    Object.defineProperty(t, "takeEvery", {
        enumerable: !0,
        get: function() {
            return o.takeEvery
        }
    }),
    Object.defineProperty(t, "takeLatest", {
        enumerable: !0,
        get: function() {
            return o.takeLatest
        }
    });
    var i = l(n(499))
      , a = l(n(164))
      , c = u(n(366))
      , s = u(n(500));
    function u(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e,
        t
    }
    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = i.default;
    var f = t.SagaCancellationException = a.default;
    t.isCancelError = function(e) {
        return e instanceof f
    }
    ;
    t.effects = c,
    t.utils = s
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function() {
        var e = [];
        return {
            subscribe: function(t) {
                return e.push(t),
                function() {
                    return (0,
                    r.remove)(e, t)
                }
            },
            emit: function(t) {
                e.slice().forEach(function(e) {
                    return e(t)
                })
            }
        }
    }
    ;
    var r = n(61)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.select = t.cancel = t.join = t.fork = t.cps = t.apply = t.call = t.race = t.put = t.take = void 0;
    var r = n(163);
    t.take = r.take,
    t.put = r.put,
    t.race = r.race,
    t.call = r.call,
    t.apply = r.apply,
    t.cps = r.cps,
    t.fork = r.fork,
    t.join = r.join,
    t.cancel = r.cancel,
    t.select = r.select
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(337)
      , o = n(294)
      , i = r
      , a = n(194)
      , c = o;
    t.pureActions = Object.assign({}, i, a, c)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    t.alphanumeric = function e(t, n) {
        if (void 0 === n && (n = ""),
        t <= 0)
            return n;
        var o = Math.floor(Math.random() * (r.length - 1));
        return e(t - 1, n + r.charAt(o))
    }
    ,
    t.getNextPingDate = function() {
        var e = new Date;
        return e.getHours() > 2 && e.setDate(e.getDate() + 1),
        e.setHours(3),
        e.setMinutes(Math.floor(60 * Math.random())),
        e.getTime()
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            this._logger = e,
            this._metric = t
        }
        return e.prototype.getValueStart = function(e) {
            var t = this
              , n = this._metric.getTimer("doGet" + e + ".timer").start();
            return {
                getValueSuccess: function() {
                    n.stop(),
                    t._metric.getCounter("doGet" + e + ".success").increment()
                },
                getValueFailure: function(r) {
                    n.stop(),
                    t._metric.getCounter("doGet" + e + ".failure").increment(),
                    t._logger.warn("doGet" + e + ".failed", r)
                }
            }
        }
        ,
        e.prototype.valueGenerated = function() {
            this._metric.getCounter("generated").increment()
        }
        ,
        e.prototype.valueRecovered = function() {
            this._metric.getCounter("recovered").increment()
        }
        ,
        e
    }();
    t.TelemetryValueManagerLogger = r;
    var o = function() {
        function e(e, t) {
            this._logger = e,
            this._metric = t
        }
        return e.prototype.nextPingDateReadError = function(e) {
            this._metric.getCounter("nextPingDate.read.failure").increment(),
            this._logger.warn("nextPingDate.read.failed", e)
        }
        ,
        e.prototype.nextPingDateWriteError = function(e) {
            this._metric.getCounter("nextPingDate.write.failure").increment(),
            this._logger.warn("nextPingDate.write.failed", e)
        }
        ,
        e.prototype.sendError = function(e) {
            this._metric.getCounter("send.failure").increment(),
            this._logger.warn("send.failed", e)
        }
        ,
        e
    }();
    t.TelemetryGnarClientImplLogger = o,
    t.guard = function(e) {
        try {
            return e()
        } catch (e) {
            return
        }
    }
}
, , , , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.logger = t.defaults = void 0;
    var r, o = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , i = n(478), a = n(358), c = n(481), s = (r = c) && r.__esModule ? r : {
        default: r
    };
    function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = o({}, s.default, e)
          , n = t.logger
          , r = t.transformer
          , c = t.stateTransformer
          , u = t.errorTransformer
          , l = t.predicate
          , f = t.logErrors
          , p = t.diffPredicate;
        if (void 0 === n)
            return function() {
                return function(e) {
                    return function(t) {
                        return e(t)
                    }
                }
            }
            ;
        if (r && console.error("Option 'transformer' is deprecated, use 'stateTransformer' instead!"),
        e.getState && e.dispatch)
            return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n\n\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\n\nconst logger = createLogger({\n  // ...options\n});\n\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),
            function() {
                return function(e) {
                    return function(t) {
                        return e(t)
                    }
                }
            }
            ;
        var d = [];
        return function(e) {
            var n = e.getState;
            return function(e) {
                return function(r) {
                    if ("function" == typeof l && !l(n, r))
                        return e(r);
                    var s = {};
                    d.push(s),
                    s.started = a.timer.now(),
                    s.startedTime = new Date,
                    s.prevState = c(n()),
                    s.action = r;
                    var h = void 0;
                    if (f)
                        try {
                            h = e(r)
                        } catch (e) {
                            s.error = u(e)
                        }
                    else
                        h = e(r);
                    s.took = a.timer.now() - s.started,
                    s.nextState = c(n());
                    var g = t.diff && "function" == typeof p ? p(n, r) : t.diff;
                    if ((0,
                    i.printBuffer)(d, o({}, t, {
                        diff: g
                    })),
                    d.length = 0,
                    s.error)
                        throw s.error;
                    return h
                }
            }
        }
    }
    var l = u();
    t.defaults = s.default,
    t.logger = l,
    t.default = u,
    e.exports = t.default
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(432)
      , o = function() {
        function e(e) {
            var t = e.legacyStopWorkingDate
              , n = e.updateRequestType;
            this.legacyStopWorkingDate = t,
            this.updateRequestType = n
        }
        return e.parse = function(t) {
            return r.mapResult(r.parseObject(e.name, {
                legacyStopWorkingDate: r.parseMaybeUndefined(r.parseDate),
                updateRequestType: r.parseMaybeUndefined(r.mapResult(r.parseOneOf(["warning", "critical", "disabled"]), function(e) {
                    return e
                }))
            }), function(t) {
                return new e(t)
            })(t)
        }
        ,
        e.prototype.encode = function() {
            var e = {};
            return this.legacyStopWorkingDate && (e.legacyStopWorkingDate = this.legacyStopWorkingDate.toISOString()),
            null != this.updateRequestType && (e.updateRequestType = this.updateRequestType),
            e
        }
        ,
        e
    }();
    t.SafariAppExtensionMigration = o;
    var i = function() {
        function e(e, t) {
            this.source = e,
            t ? (this.version = t.version,
            this.safariAppExtensionMigration = t.safariAppExtensionMigration) : this.version = ""
        }
        return e.parse = function(t) {
            return function(n) {
                return r.mapResult(r.parseObject(e.name, {
                    version: r.parseString,
                    safariAppExtensionMigration: r.field(e.safariAppExtensionMigrationFieldName, r.parseMaybeUndefined(o.parse))
                }), function(n) {
                    return new e(t,n)
                })(n)
            }
        }
        ,
        e.prototype.encode = function() {
            var t = {
                version: this.version
            };
            return this.safariAppExtensionMigration && (t[e.safariAppExtensionMigrationFieldName] = this.safariAppExtensionMigration.encode()),
            t
        }
        ,
        e.empty = new e("empty"),
        e.safariAppExtensionMigrationFieldName = "safariAppExtensionMigration_1558396627629",
        e
    }();
    t.DynamicConfig = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(337);
    t.defaultUser = {
        anonymous: !0,
        premium: !1
    },
    t.userReducer = function(e, n) {
        void 0 === e && (e = t.defaultUser);
        var o = n.type
          , i = n.data
          , a = void 0 === i ? {} : i;
        switch (o) {
        case r.t.SET_USER:
            return a;
        case r.t.SET_SETTINGS:
            return Object.assign({}, e, {
                settings: a
            });
        case r.t.SET_GROUPS:
            return Object.assign({}, e, {
                mimic: a.mimic,
                experiments: a.experiments
            });
        case r.t.INC_FIXED:
            var c = e.fixed_errors + 1;
            return Object.assign({}, e, {
                fixed_errors: c
            });
        default:
            return e
        }
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        try {
            return encodeURIComponent(e)
        } catch (e) {
            return null
        }
    }
    function o(e) {
        try {
            return decodeURIComponent(e)
        } catch (e) {
            return null
        }
    }
    t.__esModule = !0,
    t.default = function(e, t, n) {
        if (arguments.length < 2)
            return i = e,
            a = function(e) {
                var t = {}
                  , n = e.split(/ *; */);
                if (!n[0])
                    return t;
                for (var r = n, i = Array.isArray(r), a = 0, r = i ? r : r[Symbol.iterator](); ; ) {
                    var c;
                    if (i) {
                        if (a >= r.length)
                            break;
                        c = r[a++]
                    } else {
                        if ((a = r.next()).done)
                            break;
                        c = a.value
                    }
                    var s = c;
                    s = s.split("="),
                    t[o(s[0])] = o(s[1])
                }
                return t
            }(document.cookie),
            i ? a[i] : a;
        var i, a;
        !function(e, t) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2]
              , o = r(e) + "=" + r(t);
            null == t && (n.maxage = -1);
            n.maxage && (n.expires = new Date(+new Date + n.maxage));
            n.path && (o += "; path=" + n.path);
            n.domain && (o += "; domain=" + n.domain);
            n.expires && (o += "; expires=" + n.expires.toUTCString());
            n.secure && (o += "; secure");
            document.cookie = o
        }(e, t, n)
    }
}
, , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.MessageTypes = {
        server: "socket-server",
        client: "socket-client",
        serverIframe: "socket-server-iframe",
        iframeMode: "iframe-mode"
    }
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    ), i = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && e[Symbol.iterator]
          , n = 0;
        return t ? t.call(e) : {
            next: function() {
                return e && n >= e.length && (e = void 0),
                {
                    value: e && e[n++],
                    done: !e
                }
            }
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        return function(e) {
            this.expectedType = e
        }
    }();
    t.ParseError = a;
    var c = function(e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            return r.value = n,
            r
        }
        return o(t, e),
        t
    }(a);
    t.ParseValueError = c;
    var s = function() {
        return function(e, t) {
            this.fieldName = e,
            this.error = t
        }
    }();
    t.ParseFieldError = s;
    var u = function(e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            return r.fieldErrors = n,
            r
        }
        return o(t, e),
        t
    }(a);
    t.ParseObjectError = u,
    t.parseString = function(e) {
        return "string" == typeof e ? {
            result: e
        } : {
            error: new c("string",e)
        }
    }
    ,
    t.parseOneOf = function(e) {
        return function(t) {
            var n, r;
            try {
                for (var o = i(e), a = o.next(); !a.done; a = o.next())
                    if (a.value === t)
                        return {
                            result: t
                        }
            } catch (e) {
                n = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (r = o.return) && r.call(o)
                } finally {
                    if (n)
                        throw n.error
                }
            }
            return {
                error: new c("one of " + JSON.stringify(e),t)
            }
        }
    }
    ,
    t.parseDate = function(e) {
        if ("string" == typeof e) {
            var t = void 0;
            try {
                t = new Date(e)
            } catch (t) {
                return {
                    error: new c("ISO date",e)
                }
            }
            return {
                result: t
            }
        }
        return {
            error: new c("ISO date",e)
        }
    }
    ,
    t.parseMaybeUndefined = function(e) {
        return function(t) {
            return void 0 === t ? {
                result: void 0
            } : e(t)
        }
    }
    ,
    t.parseObject = function(e, t) {
        return function(n) {
            if ("object" != typeof n || null == n)
                return {
                    error: new c(e,n)
                };
            var r = {}
              , o = [];
            return Object.keys(t).forEach(function(e) {
                var i = t[e](n[e], n, e);
                "error"in i ? o.push(new s(e,i.error)) : r[e] = i.result
            }),
            o.length > 0 ? {
                error: new u(e,o)
            } : {
                result: r
            }
        }
    }
    ,
    t.mapResult = function(e, t) {
        return function(n) {
            var r = e(n);
            return "error"in r ? r : {
                result: t(r.result)
            }
        }
    }
    ,
    t.parse = function(e) {
        return function(t) {
            var n = e(t);
            if ("error"in n)
                throw new Error("Parse error: " + JSON.stringify(n.error));
            return n.result
        }
    }
    ,
    t.field = function(e, t) {
        return function(n, r) {
            return t(r[e])
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.t = {
        DYNAMIC_CONFIG_INITIAL: "dynamicConfig/initial",
        DYNAMIC_CONFIG_UPDATED: "dynamicConfig/updated"
    },
    t.initialDynamicConfig = function(e) {
        return {
            type: t.t.DYNAMIC_CONFIG_INITIAL,
            config: e
        }
    }
    ,
    t.dynamicConfig = function(e) {
        return {
            type: t.t.DYNAMIC_CONFIG_UPDATED,
            config: e
        }
    }
}
, function(e, t, n) {
    var r = n(21)
      , o = n(15)
      , i = "[object Number]";
    e.exports = function(e) {
        return "number" == typeof e || o(e) && r(e) == i
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.t = {
        SET_ACTIVE_TAB: "tabs/SET_ACTIVE_TAB"
    },
    t.setActiveTab = function(e) {
        return {
            type: t.t.SET_ACTIVE_TAB,
            data: e
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    }
      , o = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
      , i = this;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(1)
      , c = n(4);
    t.isIncognito = function() {
        return r(i, void 0, void 0, function() {
            var e;
            return o(this, function(t) {
                switch (t.label) {
                case 0:
                    return (e = c.isChrome() || c.isFF()) ? [4, a.SafePromise.create(function(e) {
                        chrome && chrome.extension ? chrome.extension.isAllowedIncognitoAccess(e) : e(!1)
                    })] : [3, 2];
                case 1:
                    e = t.sent(),
                    t.label = 2;
                case 2:
                    return [2, e]
                }
            })
        })
    }
    ,
    t.getNextPingDate = function() {
        var e = new Date;
        return e.getHours() > 2 && e.setDate(e.getDate() + 1),
        e.setHours(3),
        e.setMinutes(Math.floor(60 * Math.random())),
        e.getTime()
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    }
      , o = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
      , i = this;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(3).Logger.create("universal.bg.prefs")
      , c = function(e, t) {
        return r(i, void 0, void 0, function() {
            var n, r;
            return o(this, function(o) {
                switch (o.label) {
                case 0:
                    return o.trys.push([0, 2, , 3]),
                    [4, t.get(e)];
                case 1:
                    return "undefined" === (n = o.sent()) ? [2, void 0] : [2, n && JSON.parse(n)];
                case 2:
                    throw (r = o.sent()) && r.toString().includes("SyntaxError") ? (t.remove(e),
                    new Error("'" + e + "' has unparseable value, removing")) : r;
                case 3:
                    return [2]
                }
            })
        })
    }
      , s = function() {
        return function(e) {
            var t = this;
            this._api = e,
            this.get = function(e) {
                return r(t, void 0, void 0, function() {
                    var t, n, r, i, s = this;
                    return o(this, function(o) {
                        switch (o.label) {
                        case 0:
                            t = Array.isArray(e),
                            o.label = 1;
                        case 1:
                            return o.trys.push([1, 6, , 7]),
                            t ? (e = e,
                            [4, Promise.all(e.map(function(e) {
                                return c(e, s._api)
                            }))]) : [3, 3];
                        case 2:
                            return r = o.sent(),
                            n = e.reduce(function(e, t, n) {
                                var o;
                                return Object.assign(e, ((o = {})[t] = r[n],
                                o))
                            }, {}),
                            [3, 5];
                        case 3:
                            return [4, c(e = e, this._api)];
                        case 4:
                            n = o.sent(),
                            o.label = 5;
                        case 5:
                            return [3, 7];
                        case 6:
                            return i = o.sent(),
                            t && (n = {}),
                            a.warn("prefs get error:", i),
                            [3, 7];
                        case 7:
                            return [2, n]
                        }
                    })
                })
            }
            ,
            this.set = function(e, n) {
                return r(t, void 0, void 0, function() {
                    var t, r = this;
                    return o(this, function(o) {
                        switch (o.label) {
                        case 0:
                            return null === e || "object" != typeof e ? [3, 2] : [4, Promise.all(Object.keys(e).map(function(t) {
                                return r.set(t, e[t])
                            }))];
                        case 1:
                            return o.sent(),
                            [3, 5];
                        case 2:
                            return o.trys.push([2, 4, , 5]),
                            n = void 0 === n ? "undefined" : JSON.stringify(n),
                            [4, this._api.set(e, n)];
                        case 3:
                            return o.sent(),
                            [3, 5];
                        case 4:
                            return t = o.sent(),
                            a.warn("prefs set error", t),
                            [3, 5];
                        case 5:
                            return [2]
                        }
                    })
                })
            }
            ,
            this.all = function() {
                return r(t, void 0, void 0, function() {
                    var e, t, n;
                    return o(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, this._api.getAll()];
                        case 1:
                            for (t in e = r.sent())
                                if ("undefined" === e[t])
                                    e[t] = void 0;
                                else
                                    try {
                                        n = e[t],
                                        e[t] = n && JSON.parse(n)
                                    } catch (e) {}
                            return [2, e]
                        }
                    })
                })
            }
            ,
            this.remove = function(e) {
                try {
                    return t._api.remove(e)
                } catch (e) {
                    return a.warn("prefs remove error", e),
                    Promise.resolve()
                }
            }
            ,
            this.clearAll = function() {
                try {
                    return t._api.removeAll().catch(function(e) {
                        return a.warn("prefs clearAll error", e)
                    })
                } catch (e) {
                    return a.warn("prefs clearAll error", e),
                    Promise.resolve()
                }
            }
        }
    }();
    t.PrefsImpl = s
}
, , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(25)
      , o = function() {
        return function(e) {
            void 0 === e && (e = {});
            var t = this;
            this.on = function(e, n) {
                return t._internalEmitter.on(e, n)
            }
            ,
            this.one = function(e, n) {
                return t._internalEmitter.one(e, n)
            }
            ,
            this.off = function(e, n) {
                return t._internalEmitter.off(e, n)
            }
            ,
            this.emit = function(e, n) {
                return t._internalEmitter.emit(e, n)
            }
            ,
            this.delegate = function(e, n, r) {
                return t._internalEmitter.delegate(e, n, r)
            }
            ,
            this._internalEmitter = r(e)
        }
    }();
    t.Emitter = o
}
, , , , , , function(e, t, n) {
    var r = n(25);
    "function" != typeof Object.assign && (Object.assign = function(e) {
        "use strict";
        if (null == e)
            throw new TypeError("Cannot convert undefined or null to object");
        for (var t = Object(e), n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            if (null != r)
                for (var o in r)
                    r.hasOwnProperty(o) && (t[o] = r[o])
        }
        return t
    }
    );
    try {
        e.exports = function(e) {
            var t, n, o, i, a, c, s = !e.silentLogs, u = window.WebSocket || window.MozWebSocket, l = !1, f = null, p = !1, d = !1, h = !1, g = 1e3, m = 1e3, v = 6e4, b = [], y = [], _ = !1;
            e = Object.assign({}, {
                url: null,
                connectionTimeout: 1e3,
                idleTimeout: 3e5,
                useQueue: !1,
                useStandBy: !1,
                playDelay: 50,
                resetQueueOnReconnect: !!e.fluid
            }, e);
            var w = r({
                connect: E,
                reconnect: function() {
                    c || (c = !0,
                    w.isConnected() ? (w.one("disconnect", function() {
                        setTimeout(w.connect.bind(null, !0), 0)
                    }),
                    d = !0,
                    w.close()) : w.connect(!0))
                },
                send: function(n) {
                    if (l)
                        !function(e) {
                            if (I(e))
                                return !1;
                            l && (l = !1,
                            E(!0))
                        }(n);
                    else {
                        var r = JSON.stringify(n);
                        b.push(r),
                        k(),
                        e.fluid && void 0 === t && w.emit("fluidNotConnected")
                    }
                },
                close: function() {
                    if (d = !0,
                    C("explicit close requested"),
                    !p)
                        return h = !0;
                    try {
                        t && t.close(),
                        n && (clearTimeout(n),
                        n = null)
                    } catch (e) {
                        x("socket closing bug", e.stack || e)
                    }
                    p = !1,
                    f && clearTimeout(f)
                },
                isConnected: function() {
                    return p
                },
                release: function() {
                    clearTimeout(n)
                },
                toString: function() {
                    return "[object WebSocket]"
                },
                wsPlay: function() {
                    clearTimeout(a),
                    a = setTimeout(function() {
                        _ = !1,
                        P()
                    }, e.playDelay)
                },
                wsPause: function() {
                    clearTimeout(a),
                    _ = !0
                }
            });
            return w;
            function E(n) {
                w.isConnected() || (C("connect to url: " + e.url),
                t = new u(e.url),
                d = !1,
                p = !1,
                t.onopen = function() {
                    g = m,
                    p = !0,
                    h && (h = !1,
                    w.close()),
                    n && e.resetQueueOnReconnect ? b = [] : k(),
                    w.emit("connect"),
                    n && (w.emit("reconnect"),
                    c = !1)
                }
                ,
                t.onmessage = function(t) {
                    s && console.log("%c Received: %s", "color: #46af91;", t.data),
                    S(t.data),
                    function(t) {
                        try {
                            t = JSON.parse(t)
                        } catch (e) {
                            x(e.stack || e, t)
                        }
                        e.useQueue ? (y.push(t),
                        P()) : w.emit("message", t)
                    }(t.data)
                }
                ,
                t.onclose = function(e) {
                    p = !1,
                    w.emit("disconnect", e),
                    d || A("disconnected")
                }
                ,
                t.onerror = A,
                window.app && app.one("offline", function() {
                    p && (w.close(),
                    app.one("online", function() {
                        w.connect()
                    }))
                }))
            }
            function S(t) {
                e.useStandBy && t && !I(t) && (clearTimeout(f),
                f = setTimeout(function() {
                    w.close(),
                    l = !0,
                    f = !1
                }, e.useStandBy))
            }
            function I(e) {
                if (e && "ping" == e)
                    return !0;
                var t, n = !1;
                try {
                    t = JSON.parse(e)
                } catch (e) {}
                return t && ("ping" == t || t.action && "pong" == t.action) && (n = !0),
                n
            }
            function k() {
                if (t)
                    for (; t.readyState == u.OPEN && b.length; )
                        n = b.shift(),
                        s && console.log("%c Sending %s", "color:rgba(10, 10, 10, 0.6); font-size: 10px", n),
                        S(n),
                        t.send(n),
                        o && clearTimeout(o),
                        o = setTimeout(O, e.idleTimeout);
                var n
            }
            function O() {
                o = null,
                w.send("ping")
            }
            function A(e) {
                x("websocket error", e),
                w.emit("error", e),
                e && e.target && [u.CLOSING, u.CLOSED].indexOf(e.target.readyState) > -1 || n || (p && w.close(),
                C("try to reconnect in " + g / 1e3 + "s"),
                n = setTimeout(function() {
                    g = Math.min(v, 1.5 * g),
                    n = null,
                    E(!0)
                }, g))
            }
            function C() {
                s && console.log.apply(console, arguments)
            }
            function x() {
                console.error.apply(console, arguments)
            }
            function P() {
                i || _ || (i = 0 !== y.length ? setTimeout(function() {
                    _ || w.emit("message", y.shift()),
                    i = null,
                    P()
                }, e.useQueue) : null)
            }
        }
    } catch (e) {}
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(4)
      , o = !1;
    !function(e) {
        e.isIncluded = function(e, t, n) {
            var r = Array.isArray(n) ? "(" + n.join("|") + ")$" : "(" + n + ")"
              , o = new RegExp("^" + t + "(_\\w+)?_" + r);
            return e.some(function(e) {
                return o.test(e)
            })
        }
        ,
        e.create = function(t) {
            void 0 === t && (t = []);
            var n = function(n, r) {
                return e.isIncluded(t, n, r)
            };
            return {
                gdprSignupEnabled: t.includes("gdpr_signup_enabled"),
                gButtonAnimation: t.includes("new_gbutton_enabled"),
                emotions: t.includes("emogenie_enabled") || t.includes("emogenie_beta_enabled"),
                emogenieNRPUExperiment: n("emogenie_nrpu_experiment", ["enabled1", "enabled2"]),
                fluidDogfood: o || t.includes("fluid_slack_dogfood"),
                fluidInsider: o || t.includes("fluid_insider_enabled"),
                fluidCanary1pct: t.includes("fluid_canary_1pct_enabled"),
                gdocsPremiumInlineAlerts: t.includes("gdocs_premium_inline_dogfood"),
                fluidGDocs: n("fluid_gdocs", ["internal"]) || n("fluid_gdocs_rollout", ["enabled"]),
                unifiedFunnel: !0,
                inlineAdvancedAlerts: t.includes("extension_outcomes_inline_internal"),
                anonUsersPopupEditor: t.includes("popup_editor_for_anonymous_users_test_1") || t.includes("popup_editor_for_anonymous_users_test_2"),
                sendEmailPremiumPopup: n("send_email_premium_popup", "enabled"),
                freePremiumAlerts: n("show_occasional_free_premium_alerts_new", ["enabled_1", "enabled_2"]) || n("show_occasional_free_premium_alerts_existing", ["enabled_1", "enabled_2"]) || n("show_occasional_free_premium_alerts_internal", "enabled"),
                safariMigrationPopup: t.includes("safari_migration_popup_enabled_enabled"),
                safariMigrationPopupEditorDisabled: t.includes("safari_migration_popup_editor_disabled_enabled"),
                safariMigrationInlineWarning: t.includes("safari_migration_inline_warning_enabled"),
                safariMigrationInlineCritical: t.includes("safari_migration_inline_critical_enabled"),
                safariMigrationInlineDisabled: t.includes("safari_migration_inline_disabled_enabled"),
                safariMigrationBackupNotifFirst: t.includes("safari_migration_backup_notif1_enabled"),
                safariMigrationBackupNotifSecond: t.includes("safari_migration_backup_notif2_enabled"),
                safariMigrationAppExtension: r.isSafariApp() && t.includes("safari_migration_app_extension")
            }
        }
    }(t.UserExperiments || (t.UserExperiments = {}))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.gDocsDocumentUrlRe = /^http(s?)\:\/\/docs\.google\.com\/document/
}
, , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ;
    t.printBuffer = function(e, t) {
        var n = t.logger
          , r = t.actionTransformer
          , o = t.titleFormatter
          , a = void 0 === o ? (d = t,
        h = d.timestamp,
        g = d.duration,
        function(e, t, n) {
            var r = ["action"];
            return r.push("%c" + String(e.type)),
            h && r.push("%c@ " + t),
            g && r.push("%c(in " + n.toFixed(2) + " ms)"),
            r.join(" ")
        }
        ) : o
          , u = t.collapsed
          , l = t.colors
          , f = t.level
          , p = t.diff;
        var d, h, g;
        e.forEach(function(o, d) {
            var h = o.started
              , g = o.startedTime
              , m = o.action
              , v = o.prevState
              , b = o.error
              , y = o.took
              , _ = o.nextState
              , w = e[d + 1];
            w && (_ = w.prevState,
            y = w.started - h);
            var E = r(m)
              , S = "function" == typeof u ? u(function() {
                return _
            }, m, o) : u
              , I = (0,
            i.formatTime)(g)
              , k = l.title ? "color: " + l.title(E) + ";" : ""
              , O = ["color: gray; font-weight: lighter;"];
            O.push(k),
            t.timestamp && O.push("color: gray; font-weight: lighter;"),
            t.duration && O.push("color: gray; font-weight: lighter;");
            var A = a(E, I, y);
            try {
                S ? l.title ? n.groupCollapsed.apply(n, ["%c " + A].concat(O)) : n.groupCollapsed(A) : l.title ? n.group.apply(n, ["%c " + A].concat(O)) : n.group(A)
            } catch (e) {
                n.log(A)
            }
            var C = s(f, E, [v], "prevState")
              , x = s(f, E, [E], "action")
              , P = s(f, E, [b, v], "error")
              , T = s(f, E, [_], "nextState");
            C && (l.prevState ? n[C]("%c prev state", "color: " + l.prevState(v) + "; font-weight: bold", v) : n[C]("prev state", v)),
            x && (l.action ? n[x]("%c action    ", "color: " + l.action(E) + "; font-weight: bold", E) : n[x]("action    ", E)),
            b && P && (l.error ? n[P]("%c error     ", "color: " + l.error(b, v) + "; font-weight: bold;", b) : n[P]("error     ", b)),
            T && (l.nextState ? n[T]("%c next state", "color: " + l.nextState(_) + "; font-weight: bold", _) : n[T]("next state", _)),
            p && (0,
            c.default)(v, _, n, S);
            try {
                n.groupEnd()
            } catch (e) {
                n.log("—— log end ——")
            }
        })
    }
    ;
    var o, i = n(358), a = n(479), c = (o = a) && o.__esModule ? o : {
        default: o
    };
    function s(e, t, n, o) {
        switch (void 0 === e ? "undefined" : r(e)) {
        case "object":
            return "function" == typeof e[o] ? e[o].apply(e, function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++)
                        n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }(n)) : e[o];
        case "function":
            return e(t);
        default:
            return e
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function(e, t, n, r) {
        var o = (0,
        i.default)(e, t);
        try {
            r ? n.groupCollapsed("diff") : n.group("diff")
        } catch (e) {
            n.log("diff")
        }
        o ? o.forEach(function(e) {
            var t, r = e.kind, o = function(e) {
                var t = e.kind
                  , n = e.path
                  , r = e.lhs
                  , o = e.rhs
                  , i = e.index
                  , a = e.item;
                switch (t) {
                case "E":
                    return [n.join("."), r, "→", o];
                case "N":
                    return [n.join("."), o];
                case "D":
                    return [n.join(".")];
                case "A":
                    return [n.join(".") + "[" + i + "]", a];
                default:
                    return []
                }
            }(e);
            n.log.apply(n, ["%c " + a[r].text, (t = r,
            "color: " + a[t].color + "; font-weight: bold")].concat(function(e) {
                {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++)
                            n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }
            }(o)))
        }) : n.log("—— no diff ——");
        try {
            n.groupEnd()
        } catch (e) {
            n.log("—— diff end —— ")
        }
    }
    ;
    var r, o = n(480), i = (r = o) && r.__esModule ? r : {
        default: r
    };
    var a = {
        E: {
            color: "#2196F3",
            text: "CHANGED:"
        },
        N: {
            color: "#4CAF50",
            text: "ADDED:"
        },
        D: {
            color: "#F44336",
            text: "DELETED:"
        },
        A: {
            color: "#2196F3",
            text: "ARRAY:"
        }
    };
    e.exports = t.default
}
, function(e, t, n) {
    (function(n) {
        var r;
        !function(n, o) {
            "use strict";
            void 0 === (r = function() {
                return o()
            }
            .apply(t, [])) || (e.exports = r)
        }(0, function(e) {
            "use strict";
            var t, r, o = [];
            function i(e, t) {
                e.super_ = t,
                e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            }
            function a(e, t) {
                Object.defineProperty(this, "kind", {
                    value: e,
                    enumerable: !0
                }),
                t && t.length && Object.defineProperty(this, "path", {
                    value: t,
                    enumerable: !0
                })
            }
            function c(e, t, n) {
                c.super_.call(this, "E", e),
                Object.defineProperty(this, "lhs", {
                    value: t,
                    enumerable: !0
                }),
                Object.defineProperty(this, "rhs", {
                    value: n,
                    enumerable: !0
                })
            }
            function s(e, t) {
                s.super_.call(this, "N", e),
                Object.defineProperty(this, "rhs", {
                    value: t,
                    enumerable: !0
                })
            }
            function u(e, t) {
                u.super_.call(this, "D", e),
                Object.defineProperty(this, "lhs", {
                    value: t,
                    enumerable: !0
                })
            }
            function l(e, t, n) {
                l.super_.call(this, "A", e),
                Object.defineProperty(this, "index", {
                    value: t,
                    enumerable: !0
                }),
                Object.defineProperty(this, "item", {
                    value: n,
                    enumerable: !0
                })
            }
            function f(e, t, n) {
                var r = e.slice((n || t) + 1 || e.length);
                return e.length = t < 0 ? e.length + t : t,
                e.push.apply(e, r),
                e
            }
            function p(e) {
                var t = typeof e;
                return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : void 0 !== e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object"
            }
            function d(t, n, r, o, i, a, h) {
                var g = (i = i || []).slice(0);
                if (void 0 !== a) {
                    if (o) {
                        if ("function" == typeof o && o(g, a))
                            return;
                        if ("object" == typeof o) {
                            if (o.prefilter && o.prefilter(g, a))
                                return;
                            if (o.normalize) {
                                var m = o.normalize(g, a, t, n);
                                m && (t = m[0],
                                n = m[1])
                            }
                        }
                    }
                    g.push(a)
                }
                "regexp" === p(t) && "regexp" === p(n) && (t = t.toString(),
                n = n.toString());
                var v = typeof t
                  , b = typeof n;
                if ("undefined" === v)
                    "undefined" !== b && r(new s(g,n));
                else if ("undefined" === b)
                    r(new u(g,t));
                else if (p(t) !== p(n))
                    r(new c(g,t,n));
                else if ("[object Date]" === Object.prototype.toString.call(t) && "[object Date]" === Object.prototype.toString.call(n) && t - n != 0)
                    r(new c(g,t,n));
                else if ("object" === v && null !== t && null !== n) {
                    if ((h = h || []).indexOf(t) < 0) {
                        if (h.push(t),
                        Array.isArray(t)) {
                            var y;
                            t.length;
                            for (y = 0; y < t.length; y++)
                                y >= n.length ? r(new l(g,y,new u(e,t[y]))) : d(t[y], n[y], r, o, g, y, h);
                            for (; y < n.length; )
                                r(new l(g,y,new s(e,n[y++])))
                        } else {
                            var _ = Object.keys(t)
                              , w = Object.keys(n);
                            _.forEach(function(i, a) {
                                var c = w.indexOf(i);
                                c >= 0 ? (d(t[i], n[i], r, o, g, i, h),
                                w = f(w, c)) : d(t[i], e, r, o, g, i, h)
                            }),
                            w.forEach(function(t) {
                                d(e, n[t], r, o, g, t, h)
                            })
                        }
                        h.length = h.length - 1
                    }
                } else
                    t !== n && ("number" === v && isNaN(t) && isNaN(n) || r(new c(g,t,n)))
            }
            function h(t, n, r, o) {
                return o = o || [],
                d(t, n, function(e) {
                    e && o.push(e)
                }, r),
                o.length ? o : e
            }
            function g(e, t, n) {
                if (e && t && n && n.kind) {
                    for (var r = e, o = -1, i = n.path ? n.path.length - 1 : 0; ++o < i; )
                        void 0 === r[n.path[o]] && (r[n.path[o]] = "number" == typeof n.path[o] ? [] : {}),
                        r = r[n.path[o]];
                    switch (n.kind) {
                    case "A":
                        !function e(t, n, r) {
                            if (r.path && r.path.length) {
                                var o, i = t[n], a = r.path.length - 1;
                                for (o = 0; o < a; o++)
                                    i = i[r.path[o]];
                                switch (r.kind) {
                                case "A":
                                    e(i[r.path[o]], r.index, r.item);
                                    break;
                                case "D":
                                    delete i[r.path[o]];
                                    break;
                                case "E":
                                case "N":
                                    i[r.path[o]] = r.rhs
                                }
                            } else
                                switch (r.kind) {
                                case "A":
                                    e(t[n], r.index, r.item);
                                    break;
                                case "D":
                                    t = f(t, n);
                                    break;
                                case "E":
                                case "N":
                                    t[n] = r.rhs
                                }
                            return t
                        }(n.path ? r[n.path[o]] : r, n.index, n.item);
                        break;
                    case "D":
                        delete r[n.path[o]];
                        break;
                    case "E":
                    case "N":
                        r[n.path[o]] = n.rhs
                    }
                }
            }
            return t = "object" == typeof n && n ? n : "undefined" != typeof window ? window : {},
            (r = t.DeepDiff) && o.push(function() {
                void 0 !== r && t.DeepDiff === h && (t.DeepDiff = r,
                r = e)
            }),
            i(c, a),
            i(s, a),
            i(u, a),
            i(l, a),
            Object.defineProperties(h, {
                diff: {
                    value: h,
                    enumerable: !0
                },
                observableDiff: {
                    value: d,
                    enumerable: !0
                },
                applyDiff: {
                    value: function(e, t, n) {
                        e && t && d(e, t, function(r) {
                            n && !n(e, t, r) || g(e, t, r)
                        })
                    },
                    enumerable: !0
                },
                applyChange: {
                    value: g,
                    enumerable: !0
                },
                revertChange: {
                    value: function(e, t, n) {
                        if (e && t && n && n.kind) {
                            var r, o, i = e;
                            for (o = n.path.length - 1,
                            r = 0; r < o; r++)
                                void 0 === i[n.path[r]] && (i[n.path[r]] = {}),
                                i = i[n.path[r]];
                            switch (n.kind) {
                            case "A":
                                !function e(t, n, r) {
                                    if (r.path && r.path.length) {
                                        var o, i = t[n], a = r.path.length - 1;
                                        for (o = 0; o < a; o++)
                                            i = i[r.path[o]];
                                        switch (r.kind) {
                                        case "A":
                                            e(i[r.path[o]], r.index, r.item);
                                            break;
                                        case "D":
                                        case "E":
                                            i[r.path[o]] = r.lhs;
                                            break;
                                        case "N":
                                            delete i[r.path[o]]
                                        }
                                    } else
                                        switch (r.kind) {
                                        case "A":
                                            e(t[n], r.index, r.item);
                                            break;
                                        case "D":
                                        case "E":
                                            t[n] = r.lhs;
                                            break;
                                        case "N":
                                            t = f(t, n)
                                        }
                                    return t
                                }(i[n.path[r]], n.index, n.item);
                                break;
                            case "D":
                            case "E":
                                i[n.path[r]] = n.lhs;
                                break;
                            case "N":
                                delete i[n.path[r]]
                            }
                        }
                    },
                    enumerable: !0
                },
                isConflict: {
                    value: function() {
                        return void 0 !== r
                    },
                    enumerable: !0
                },
                noConflict: {
                    value: function() {
                        return o && (o.forEach(function(e) {
                            e()
                        }),
                        o = null),
                        h
                    },
                    enumerable: !0
                }
            }),
            h
        })
    }
    ).call(t, n(33))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = {
        level: "log",
        logger: console,
        logErrors: !0,
        collapsed: void 0,
        predicate: void 0,
        duration: !1,
        timestamp: !0,
        stateTransformer: function(e) {
            return e
        },
        actionTransformer: function(e) {
            return e
        },
        errorTransformer: function(e) {
            return e
        },
        colors: {
            title: function() {
                return "inherit"
            },
            prevState: function() {
                return "#9E9E9E"
            },
            action: function() {
                return "#03A9F4"
            },
            nextState: function() {
                return "#4CAF50"
            },
            error: function() {
                return "#F20404"
            }
        },
        diff: !1,
        diffPredicate: void 0,
        transformer: void 0
    },
    e.exports = t.default
}
, function(e, t, n) {
    "use strict";
    var r = n(361)
      , o = n(485)
      , i = n(486)
      , a = "[object Null]"
      , c = "[object Undefined]"
      , s = r.a ? r.a.toStringTag : void 0;
    t.a = function(e) {
        return null == e ? void 0 === e ? c : a : s && s in Object(e) ? Object(o.a)(e) : Object(i.a)(e)
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(484)
      , o = "object" == typeof self && self && self.Object === Object && self
      , i = r.a || o || Function("return this")();
    t.a = i
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.a = n
    }
    ).call(t, n(33))
}
, function(e, t, n) {
    "use strict";
    var r = n(361)
      , o = Object.prototype
      , i = o.hasOwnProperty
      , a = o.toString
      , c = r.a ? r.a.toStringTag : void 0;
    t.a = function(e) {
        var t = i.call(e, c)
          , n = e[c];
        try {
            e[c] = void 0;
            var r = !0
        } catch (e) {}
        var o = a.call(e);
        return r && (t ? e[c] = n : delete e[c]),
        o
    }
}
, function(e, t, n) {
    "use strict";
    var r = Object.prototype.toString;
    t.a = function(e) {
        return r.call(e)
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(488)
      , o = Object(r.a)(Object.getPrototypeOf, Object);
    t.a = o
}
, function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        return function(n) {
            return e(t(n))
        }
    }
}
, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        return null != e && "object" == typeof e
    }
}
, function(e, t, n) {
    "use strict";
    (function(e, r) {
        var o, i = n(492);
        o = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : r;
        var a = Object(i.a)(o);
        t.a = a
    }
    ).call(t, n(33), n(491)(e))
}
, function(e, t) {
    e.exports = function(e) {
        if (!e.webpackPolyfill) {
            var t = Object.create(e);
            t.children || (t.children = []),
            Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }),
            Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }),
            Object.defineProperty(t, "exports", {
                enumerable: !0
            }),
            t.webpackPolyfill = 1
        }
        return t
    }
}
, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        var t, n = e.Symbol;
        "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"),
        n.observable = t) : t = "@@observable";
        return t
    }
}
, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        for (var t = Object.keys(e), n = {}, o = 0; o < t.length; o++) {
            var i = t[o];
            0,
            "function" == typeof e[i] && (n[i] = e[i])
        }
        var a = Object.keys(n);
        0;
        var c = void 0;
        try {
            s = n,
            Object.keys(s).forEach(function(e) {
                var t = s[e]
                  , n = t(void 0, {
                    type: r.a.INIT
                });
                if (void 0 === n)
                    throw new Error('Reducer "' + e + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                var o = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (void 0 === t(void 0, {
                    type: o
                }))
                    throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + r.a.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
            })
        } catch (e) {
            c = e
        }
        var s;
        return function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments[1];
            if (c)
                throw c;
            for (var r, o, i, s = !1, u = {}, l = 0; l < a.length; l++) {
                var f = a[l]
                  , p = n[f]
                  , d = e[f]
                  , h = p(d, t);
                if (void 0 === h) {
                    var g = (r = f,
                    i = void 0,
                    void 0,
                    i = (o = t) && o.type,
                    "Given action " + (i && '"' + i.toString() + '"' || "an action") + ', reducer "' + r + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.');
                    throw new Error(g)
                }
                u[f] = h,
                s = s || h !== d
            }
            return s ? u : e
        }
    }
    ;
    var r = n(360);
    n(336),
    n(362)
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        return function() {
            return t(e.apply(void 0, arguments))
        }
    }
    t.a = function(e, t) {
        if ("function" == typeof e)
            return r(e, t);
        if ("object" != typeof e || null === e)
            throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        for (var n = Object.keys(e), o = {}, i = 0; i < n.length; i++) {
            var a = n[i]
              , c = e[a];
            "function" == typeof c && (o[a] = r(c, t))
        }
        return o
    }
}
, function(e, t, n) {
    "use strict";
    t.a = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return function(e) {
            return function(n, i, a) {
                var c = e(n, i, a)
                  , s = c.dispatch
                  , u = []
                  , l = {
                    getState: c.getState,
                    dispatch: function(e) {
                        return s(e)
                    }
                };
                return u = t.map(function(e) {
                    return e(l)
                }),
                s = r.a.apply(void 0, u)(c.dispatch),
                o({}, c, {
                    dispatch: s
                })
            }
        }
    }
    ;
    var r = n(363)
      , o = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
      , o = this && this.__read || function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
      , i = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(o(arguments[t]));
        return e
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(381)
      , c = n(359)
      , s = n(364)
      , u = n(502)
      , l = n(503)
      , f = n(504)
      , p = n(383)
      , d = n(505)
      , h = n(17)
      , g = n(367)
      , m = n(367);
    t.pureActions = m.pureActions;
    var v = n(295)
      , b = n(165)
      , y = n(1)
      , _ = n(86)
      , w = function() {
        return function(e, t, n) {
            var r = this;
            this._store = e,
            this._userSagas = t,
            this._cookiesHelper = n,
            this.logout = function() {
                return Promise.race([r._store.runSaga(r._userSagas.logoutUser.bind(r._userSagas)).done, y.SafePromise.delay(10 * _.second).then(function() {
                    var e = new Error("Logout timeout!");
                    throw b.gnar.logoutFormFail(void 0, e.message),
                    e
                })]).catch(function() {
                    return r._cookiesHelper.deleteGrauth()
                }).then(function() {
                    return r.refreshUser(!1, "oauth")
                })
            }
            ,
            this.refreshUser = function() {
                for (var e, t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                return (e = r._store).runSaga.apply(e, i([r._userSagas.externalUpdateUser.bind(r._userSagas)], t)).done
            }
            ,
            this.signin = function(e) {
                var t = e.form
                  , n = {
                    email_login: {
                        email: t.email,
                        password: t.password
                    }
                };
                return r._store.runSaga(r._userSagas.authRequest.bind(r._userSagas), h.URLS.authSignin, n, e.placement, "signin").done
            }
            ,
            this.signup = function(e) {
                var t = e.form
                  , n = {
                    email_signup: {
                        name: t.name,
                        email: t.email,
                        password: t.password
                    },
                    custom_fields: "true" === e.disableMarketingEmails ? {
                        disableMarketingEmails: "true"
                    } : {}
                };
                return r._store.runSaga(r._userSagas.authRequest.bind(r._userSagas), h.URLS.authSignup, n, e.placement, "signup").done
            }
        }
    }();
    t.AuthSagaRunners = w;
    var E = function() {
        return function(e, t) {
            var n = this;
            this._store = e,
            this._tabsSagas = t,
            this.sendStateToTabs = function() {
                return n._store.runSaga(n._tabsSagas.sendStateToTabs.bind(n._tabsSagas))
            }
        }
    }();
    t.TabsSagaRunner = E;
    var S = function() {
        function e(e, t, n, r, o, i) {
            var h = this;
            this._dynamicConfigSagas = e,
            this._userSagas = t,
            this._settingsSagas = n,
            this._tabsSagas = r,
            this._connectionSagas = o,
            this._pageConfig = i;
            var m, v, b, y = s.default(e.start.bind(e), o.start.bind(o), t.start.bind(t), n.start.bind(n));
            this.store = (m = y,
            v = c.combineReducers({
                dynamicConfig: u.dynamicConfigReducer,
                user: p.userReducer,
                tabs: d.tabsReducer,
                settings: f.settingsReducer,
                connection: l.connectionReducer
            }),
            b = a({
                level: "debug",
                colors: {
                    title: function() {
                        return "green"
                    }
                }
            }),
            c.createStore(v, {}, c.applyMiddleware(m, b))),
            this.runSaga = y.run,
            this.initStore = function() {
                return y.run(h._startupFlow.bind(h)).done.then(function() {
                    h.store.subscribe(function() {
                        y.run(r.sendStateToTabs.bind(r)),
                        y.run(n.processEmailConnectednessData.bind(n))
                    })
                })
            }
            ,
            this.actions = c.bindActionCreators(g.pureActions, this.store.dispatch)
        }
        return e.prototype._startupFlow = function() {
            return r(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, [v.fork([this._dynamicConfigSagas, this._dynamicConfigSagas.start]), v.call([this._settingsSagas, this._settingsSagas.setInitialSettings]), v.call([this._pageConfig, this._pageConfig.init]), v.call([this._userSagas, this._userSagas.updateUser], {
                        failoverFromCache: !0
                    })]];
                case 1:
                    return e.sent(),
                    [4, v.fork([this._connectionSagas, this._connectionSagas.monitorIsIncognito])];
                case 2:
                    return e.sent(),
                    [4, v.call([this._tabsSagas, this._tabsSagas.start])];
                case 3:
                    return e.sent(),
                    [2]
                }
            })
        }
        ,
        e
    }();
    t.StoreControllerImpl = S
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.NOT_ITERATOR_ERROR = void 0,
    t.storeIO = function(e) {
        if ((0,
        r.warnDeprecated)("storeIO is deprecated, to run Saga dynamically, use 'run' method of the middleware"),
        e[s])
            return e[s];
        var t = (0,
        i.default)()
          , n = e.dispatch;
        return e.dispatch = function(e) {
            var r = n(e);
            return t.emit(e),
            r
        }
        ,
        e[s] = {
            subscribe: t.subscribe,
            dispatch: e.dispatch,
            getState: e.getState
        },
        e[s]
    }
    ,
    t.runSaga = function(e, t) {
        var n = t.subscribe
          , i = t.dispatch
          , a = t.getState
          , s = arguments.length <= 2 || void 0 === arguments[2] ? r.noop : arguments[2];
        return (0,
        r.check)(e, r.is.iterator, c),
        (0,
        o.default)(e, n, i, a, s)
    }
    ;
    var r = n(61)
      , o = a(n(292))
      , i = a(n(365));
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = t.NOT_ITERATOR_ERROR = "runSaga must be called on an iterator"
      , s = (0,
    r.sym)("IO")
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        return function(e, t) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return function(e, t) {
                    var n = []
                      , r = !0
                      , o = !1
                      , i = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value),
                        !t || n.length !== t); r = !0)
                            ;
                    } catch (e) {
                        o = !0,
                        i = e
                    } finally {
                        try {
                            !r && c.return && c.return()
                        } finally {
                            if (o)
                                throw i
                        }
                    }
                    return n
                }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    t.takeEvery = function(e, t) {
        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o];
        return f({
            take: [{
                done: !1,
                value: (0,
                a.take)(e)
            }, "fork"],
            fork: [function(e) {
                return {
                    done: !1,
                    value: a.fork.apply(void 0, [t].concat(r, [e]))
                }
            }
            , "take"]
        }, "take", "takeEvery(" + e + ", " + t.name + ")")
    }
    ,
    t.takeLatest = function(e, t) {
        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o];
        var i = {
            done: !1,
            value: (0,
            a.take)(e)
        }
          , c = void 0
          , s = void 0;
        return f({
            take: [i, function() {
                return c ? "cancel" : "fork"
            }
            , function(e) {
                return s = e
            }
            ],
            cancel: [function() {
                return {
                    done: !1,
                    value: (0,
                    a.cancel)(c)
                }
            }
            , "fork"],
            fork: [function() {
                return {
                    done: !1,
                    value: a.fork.apply(void 0, [t].concat(r, [s]))
                }
            }
            , "take", function(e) {
                return c = e
            }
            ]
        }, "take", "takeLatest(" + e + ", " + t.name + ")")
    }
    ;
    var o, i = n(61), a = n(163), c = n(164), s = (o = c) && o.__esModule ? o : {
        default: o
    };
    var u = function(e, t) {
        return i.is.func(e) ? e(t) : e
    }
      , l = {
        done: !0
    };
    function f(e, t) {
        var n = arguments.length <= 2 || void 0 === arguments[2] ? "iterator" : arguments[2]
          , o = void 0
          , i = void 0;
        function a(n, a) {
            if (o)
                return l;
            if (a) {
                if (o = !0,
                !(a instanceof s.default))
                    throw a;
                return l
            }
            i && i(n);
            var c = r(e[t], 3)
              , f = c[0]
              , p = c[1]
              , d = c[2];
            return i = d,
            t = u(p, n),
            u(f, n)
        }
        var c = {
            name: n,
            next: a,
            throw: function(e) {
                return a(null, e)
            }
        };
        return "undefined" != typeof Symbol && (c[Symbol.iterator] = function() {
            return c
        }
        ),
        c
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.GET_STATE_DEPRECATED_WARNING = t.RUN_SAGA_DYNAMIC_ERROR = t.sagaArgError = void 0,
    t.default = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        var s = void 0;
        function p(e) {
            var n = e.getState
              , c = e.dispatch
              , u = (0,
            i.default)()
              , l = r.isDev ? function(e) {
                return (0,
                r.asap)(function() {
                    return c(e)
                })
            }
            : void 0
              , p = function() {
                return (0,
                r.warnDeprecated)(f),
                n()
            };
            function d(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                    r[i - 1] = arguments[i];
                return (0,
                o.default)(e.apply(void 0, [p].concat(r)), u.subscribe, c, n, l, 0, e.name)
            }
            return s = d,
            t.forEach(d),
            function(e) {
                return function(t) {
                    var n = e(t);
                    return t[a.MONITOR_ACTION] || u.emit(t),
                    n
                }
            }
        }
        return t.forEach(function(e, t) {
            return (0,
            r.check)(e, r.is.func, u("createSagaMiddleware", t, e))
        }),
        p.run = function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                n[o - 1] = arguments[o];
            if (!s)
                throw new Error(l);
            (0,
            r.check)(e, r.is.func, u("sagaMiddleware.run", 0, e));
            var i = s.apply(void 0, [e].concat(n));
            return i.done.catch(function(e) {
                if (!(e instanceof c.default))
                    throw e
            }),
            i
        }
        ,
        p
    }
    ;
    var r = n(61)
      , o = s(n(292))
      , i = s(n(365))
      , a = n(293)
      , c = s(n(164));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = t.sagaArgError = function(e, t, n) {
        return "\n  " + e + " can only be called on Generator functions\n  Argument " + n + " at position " + t + " is not function!\n"
    }
      , l = t.RUN_SAGA_DYNAMIC_ERROR = "Before running a Saga dynamically using middleware.run, you must mount the Saga middleware on the Store using applyMiddleware"
      , f = t.GET_STATE_DEPRECATED_WARNING = "\n  Using the 'getState' param of Sagas to access the state is deprecated since 0.9.1\n  To access the Store's state use 'yield select()' instead\n  For more infos see http://yelouafi.github.io/redux-saga/docs/api/index.html#selectselector-args\n"
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.monitorActions = t.createMockTask = t.MANUAL_CANCEL = t.PARALLEL_AUTO_CANCEL = t.RACE_AUTO_CANCEL = t.CANCEL = t.asap = t.arrayOfDeffered = t.deferred = t.asEffect = t.is = t.noop = t.TASK = void 0;
    var r = n(61)
      , o = n(163)
      , i = n(292)
      , a = n(501)
      , c = function(e) {
        {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e,
            t
        }
    }(n(293));
    t.TASK = r.TASK,
    t.noop = r.noop,
    t.is = r.is,
    t.asEffect = o.asEffect,
    t.deferred = r.deferred,
    t.arrayOfDeffered = r.arrayOfDeffered,
    t.asap = r.asap,
    t.CANCEL = i.CANCEL,
    t.RACE_AUTO_CANCEL = i.RACE_AUTO_CANCEL,
    t.PARALLEL_AUTO_CANCEL = i.PARALLEL_AUTO_CANCEL,
    t.MANUAL_CANCEL = i.MANUAL_CANCEL,
    t.createMockTask = a.createMockTask,
    t.monitorActions = c
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.createMockTask = function() {
        var e, t = !0, n = void 0, i = void 0;
        return o(e = {}, r.TASK, !0),
        o(e, "isRunning", function() {
            return t
        }),
        o(e, "result", function() {
            return n
        }),
        o(e, "error", function() {
            return i
        }),
        o(e, "setRunning", function(e) {
            return t = e
        }),
        o(e, "setResult", function(e) {
            return n = e
        }),
        o(e, "setError", function(e) {
            return i = e
        }),
        e
    }
    ;
    var r = n(61);
    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(382)
      , o = n(433);
    t.dynamicConfigReducer = function(e, t) {
        void 0 === e && (e = r.DynamicConfig.empty);
        var n = t.type
          , i = t.config;
        switch (n) {
        case o.t.DYNAMIC_CONFIG_INITIAL:
            return "server" === e.source || e.version === i.version ? e : i;
        case o.t.DYNAMIC_CONFIG_UPDATED:
            return e.version === i.version ? e : i;
        default:
            return e
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(194)
      , o = n(4);
    t.defaultConnection = {
        networkOffline: !window.navigator.onLine,
        cookiesDisabled: !1 === navigator.cookieEnabled,
        online: !0,
        dataControl: o.isFF() ? "active" : "inactive"
    },
    t.connectionReducer = function(e, n) {
        void 0 === e && (e = t.defaultConnection);
        var o = n.type
          , i = n.data
          , a = n.online;
        switch (o) {
        case r.t.ONLINE_STATE:
            return Object.assign({}, e, {
                online: a
            });
        case r.t.UPDATE_CONNECTION:
            return Object.assign({}, e, i);
        case r.t.ACTIVATE_DATA_CONTROL:
            return Object.assign({}, e, {
                dataControl: "active"
            });
        case r.t.ACCEPT_DATA_CONTROL:
            return Object.assign({}, e, {
                dataControl: "accepted"
            });
        case r.t.DISABLE_DATA_CONTROL:
            return Object.assign({}, e, {
                dataControl: "inactive"
            });
        default:
            return e
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__assign || function() {
        return (r = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }
      , o = this && this.__read || function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
      , i = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(o(arguments[t]));
        return e
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(434)
      , c = n(10)
      , s = n(294)
      , u = c.getGlobal().appConfig.newsVersion;
    t.settingsReducer = function(e, t) {
        void 0 === e && (e = {});
        var n, o, c, l, f, p, d = t.type, h = t.data, g = void 0 === h ? {} : h, m = t.domain, v = t.enabledDefs, b = t.enabled, y = t.showNews, _ = t.propKey, w = t.loginReminderType, E = t.delightfulMessageId, S = e[m] || {};
        switch (d) {
        case s.t.SETTINGS_INITIAL:
            return Object.assign({}, e, g);
        case s.t.TOGGLE_DEFS:
            return Object.assign({}, e, {
                common: Object.assign({}, e.common, {
                    enabledDefs: v
                })
            });
        case s.t.TOGGLE_SITE:
            return Object.assign({}, e, ((n = {})[m] = Object.assign({}, S, {
                enabled: b,
                disabledDate: !0 === b ? null : Date.now()
            }),
            n));
        case s.t.TOGGLE_FIELD:
            return Object.assign({}, e, ((o = {})[m] = Object.assign({}, e[m], {
                disabledFields: Object.assign({}, S.disabledFields, g)
            }),
            o));
        case s.t.SHOW_NEWS:
            return Object.assign({}, e, {
                common: Object.assign({}, e.common, {
                    showNews: y
                })
            });
        case s.t.SHOW_ONBOARDING:
            return Object.assign({}, e, {
                common: Object.assign({}, e.common, {
                    showOnboarding: !0
                })
            });
        case s.t.SEEN_ONBOARDING:
            return Object.assign({}, e, {
                common: Object.assign({}, e.common, {
                    showOnboarding: !1
                })
            });
        case s.t.SEEN_ADVANCED_INLINE_CARDS_ONBOARDING:
            return Object.assign({}, e, {
                common: Object.assign({}, e.common, {
                    seenAdvancedInlineCardsOnboarding: !0
                })
            });
        case s.t.SEEN_DELIGHTFUL_MESSAGE:
            return Object.assign({}, e, {
                common: Object.assign({}, e.common, {
                    seenDelightfulMessages: i(e.common.seenDelightfulMessages || [], [E])
                })
            });
        case s.t.SEEN_GDOCS_OPT_IN:
            return Object.assign({}, e, {
                common: Object.assign({}, e.common, {
                    seenGdocsOptIn: !0
                })
            });
        case s.t.SEEN_GDOCS_LARGE_DOCUMENT_WARNING:
            return Object.assign({}, e, {
                common: Object.assign({}, e.common, {
                    seenGdocsLargeDocumentWarning: !0
                })
            });
        case s.t.SET_GDOCS_INITIAL_DISABLE:
            return Object.assign({}, e, {
                common: Object.assign({}, e.common, {
                    gdocsWasInitiallyDisabled: !0
                })
            });
        case s.t.HIDE_GDOCS_SIGNIN_POPUP:
            return Object.assign({}, e, {
                common: Object.assign({}, e.common, {
                    hideGdocsSigninPopupTime: Date.now()
                })
            });
        case s.t.SET_GDOCS_ENABLED_SETTING:
            var I = "docs.google.com";
            return !0 === e.common.clickedGdocsAuthentication ? Object.assign({}, e, ((c = {})[I] = Object.assign({}, e[I], {
                enabled: !0,
                disabledDate: null
            }),
            c.common = Object.assign({}, e.common, {
                clickedGdocsAuthentication: !1,
                gdocsWasInitiallyDisabled: !0
            }),
            c)) : e;
        case s.t.CLICK_GDOCS_AUTHENTICATION:
            return Object.assign({}, e, {
                common: Object.assign({}, e.common, {
                    clickedGdocsAuthentication: !0
                })
            });
        case s.t.SEEN_NEWS:
            return Object.assign({}, e, {
                common: Object.assign({}, e.common, {
                    seenNewsVersion: u
                })
            });
        case s.t.SET_DAPI_PROP:
            return Object.assign({}, e, {
                common: Object.assign({}, e.common, (l = {},
                l[_] = g,
                l))
            });
        case s.t.DISABLE_REMINDER_NOTIFICATION:
            return Object.assign({}, e, ((f = {})[m] = Object.assign({}, S, {
                disableReminderNotification: !0
            }),
            f));
        case s.t.SHOW_DISABLE_REMINDER:
            return Object.assign({}, e, ((p = {})[m] = Object.assign({}, S, {
                disabledDate: Date.now()
            }),
            p));
        case s.t.EDGE_POPUP_FROM_GBUTTON:
            return Object.assign({}, e, {
                common: Object.assign({}, e.common, {
                    showEdgePopupFromGButton: !0
                })
            });
        case s.t.SHOW_LOGIN_REMINDER:
            return Object.assign({}, e, {
                common: Object.assign({}, e.common, {
                    loginReminderType: w,
                    showLoginReminder: !0
                })
            });
        case s.t.HIDE_LOGIN_REMINDER:
            return Object.assign({}, e, {
                common: Object.assign({}, e.common, {
                    showLoginReminder: !1
                })
            });
        case s.t.DISABLE_LOGIN_REMINDER:
            return Object.assign({}, e, {
                common: Object.assign({}, e.common, {
                    loginReminderDisabled: !0,
                    showLoginReminder: !1
                })
            });
        case s.t.DISABLE_EMAIL_SUMMARIZATION:
            return Object.assign({}, e, {
                common: Object.assign({}, e.common, {
                    emailSummarizationDisabled: !0
                })
            });
        case s.t.HIDE_EMOTIONS_PROMPT:
            return Object.assign({}, e, {
                common: Object.assign({}, e.common, {
                    emotionsSettings: r({}, e.common.emotionsSettings || {}, {
                        hideEnabledPopup: !0
                    })
                })
            });
        case s.t.SEEN_CLARITY_NOTIFICATION:
            return Object.assign({}, e, {
                common: Object.assign({}, e.common, {
                    seenClarityNotification: !0
                })
            });
        case s.t.SET_SAFARI_MIGRATION_POPUP_SHOWN_TIMESTAMP:
            return Object.assign({}, e, {
                common: Object.assign({}, e.common, {
                    safariMigrationPopupShownTimestamp: Date.now()
                })
            });
        case s.t.SET_SAFARI_MIGRATION_BACKUP_NOTIFY_FIRST_TIMESTAMP:
            return Object.assign({}, e, {
                common: Object.assign({}, e.common, {
                    safariMigrationBackupNotifFirstTimestamp: Date.now()
                })
            });
        case s.t.SET_SAFARI_MIGRATION_BACKUP_NOTIFY_SECOND_TIMESTAMP:
            return Object.assign({}, e, {
                common: Object.assign({}, e.common, {
                    safariMigrationBackupNotifSecondTimestamp: Date.now()
                })
            });
        case s.t.SHOW_GMAIL_SEND_EMAIL_PREMIUM_POPUP:
            var k = e.common.sendEmailPremiumPopupViews
              , O = a(k) ? k + 1 : 1;
            return Object.assign({}, e, {
                common: Object.assign({}, e.common, {
                    sendEmailPremiumPopupViews: O,
                    sendEmailPremiumPopupLastShownTimestamp: Date.now()
                })
            });
        default:
            return e
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(435);
    t.tabsReducer = function(e, t) {
        void 0 === e && (e = {});
        var n = t.type
          , o = t.data;
        switch (n) {
        case r.t.SET_ACTIVE_TAB:
            return Object.assign({}, e, {
                active: o
            });
        default:
            return e
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__assign || Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e
    }
      , o = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    }
      , i = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [0, o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(368)
      , c = n(369)
      , s = n(507);
    t.ValueManager = s.ValueManager,
    t.BaseStorage = s.BaseStorage,
    t.MemoryStorage = s.MemoryStorage,
    t.ContainerIdManager = s.ContainerIdManager,
    t.GAClientIdManager = s.GAClientIdManager,
    t.LocalStorage = s.LocalStorage,
    t.CookieStorage = s.CookieStorage,
    t.ChromeCookieStorage = s.ChromeCookieStorage,
    t.WebExtensionsCookieStorage = s.WebExtensionsCookieStorage,
    t.ReadonlyWebExtensionsCookieStorage = s.ReadonlyWebExtensionsCookieStorage,
    t.BackendStorage = s.BackendStorage;
    var u = n(508);
    t.GoogleAnalyticsClient = u.GoogleAnalyticsClient;
    var l = ["client", "clientVersion", "userId", "isTest", "containerId", "instanceId", "batchId"]
      , f = "gnar_nextPingTimestamp"
      , p = function() {
        function e(e, t, n, r, o, i, c, s) {
            void 0 === i && (i = null),
            void 0 === c && (c = !1),
            this._client = t,
            this._clientVersion = n,
            this._fetch = r,
            this._containerIdManager = o,
            this._logger = i,
            this._storePingTimestamp = c,
            this._gaClientOpt = s,
            this._instanceId = a.alphanumeric(8),
            this._batchId = 0,
            this._isUserReady = !1,
            this._queue = [],
            this._eventsUrl = e + "/events",
            this._liteUrl = e + "/lite",
            this._pingMaybe()
        }
        return e.prototype.track = function(e, t) {
            if (void 0 === t && (t = {
                lite: !1
            }),
            0 !== e.eventName.indexOf(this._client + "/"))
                throw new Error("Event name " + e.eventName + " should start with '" + this._client + "/'");
            return Object.keys(e).forEach(function(e) {
                if (-1 !== l.indexOf(e))
                    throw new Error("Event data should not contain '" + e + "' prop.")
            }),
            this._isUserReady || t.lite && !t.sendUser ? (e.eventName !== this._client + "/ping" && this._pingMaybe(),
            this._send(e, t)) : this._enqueue(e, t)
        }
        ,
        e.prototype.setUser = function(e, t) {
            if (null === e || "" === e)
                throw new Error("Invalid userId: " + e);
            var n = this._userId && this._userId !== e && !(/^-/.test(e) && /^-/.test(this._userId));
            this._isTest = t,
            this._userId = e,
            n && this._pingMaybe(!0),
            this._isUserReady || (this._execQueue(),
            this._isUserReady = !0)
        }
        ,
        e.prototype.getContainerId = function() {
            return this._containerIdManager.getContainerId()
        }
        ,
        e.prototype._setNextPingTimestamp = function() {
            var e = this
              , t = a.getNextPingDate();
            if (this._nextPingTimestamp = t,
            this._storePingTimestamp)
                try {
                    localStorage.setItem(f, t.toString())
                } catch (t) {
                    c.guard(function() {
                        return e._logger && e._logger.nextPingDateWriteError(t)
                    })
                }
        }
        ,
        e.prototype._getNextPingTimestamp = function() {
            var e = this
              , t = this._nextPingTimestamp;
            if (void 0 !== t || !this._storePingTimestamp)
                return t;
            try {
                var n = localStorage.getItem(f);
                t = null === n ? void 0 : parseInt(n, 10)
            } catch (n) {
                t = void 0,
                c.guard(function() {
                    return e._logger && e._logger.nextPingDateReadError(n)
                })
            }
            return t
        }
        ,
        e.prototype._shouldPing = function(e) {
            if (e)
                return !0;
            var t = this._getNextPingTimestamp();
            return void 0 === t || t < Date.now()
        }
        ,
        e.prototype._pingMaybe = function(e) {
            var t = this;
            if (void 0 === e && (e = !1),
            this._shouldPing(e)) {
                this._setNextPingTimestamp();
                var n = {
                    eventName: this._client + "/ping",
                    referrer: document.referrer,
                    url: document.location.href
                };
                this._gaClientOpt ? this._gaClientOpt.getClientId().then(function(e) {
                    return t.track(r({}, n, {
                        gaClientId: e
                    }))
                }, function(e) {
                    return t.track(n)
                }) : this.track(n)
            }
        }
        ,
        e.prototype.pingMaybe = function() {
            this._pingMaybe()
        }
        ,
        e.prototype._enqueue = function(e, t) {
            var n = this;
            return new Promise(function(r, o) {
                n._queue.push([e, t, {
                    resolve: r,
                    reject: o
                }])
            }
            )
        }
        ,
        e.prototype._execQueue = function() {
            var e = this;
            this._queue.forEach(function(t) {
                var n = t[0]
                  , r = t[1]
                  , o = t[2]
                  , i = o.resolve
                  , a = o.reject;
                e._send(n, r).then(function() {
                    return i()
                }).catch(function(e) {
                    return a(e)
                })
            }),
            this._queue = []
        }
        ,
        e.prototype._withClientProps = function(e) {
            return r({}, e, {
                client: this._client,
                clientVersion: this._clientVersion
            })
        }
        ,
        e.prototype._withUserProps = function(e) {
            return o(this, void 0, void 0, function() {
                var t;
                return i(this, function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, this.getContainerId().catch(function() {})];
                    case 1:
                        return t = n.sent(),
                        [2, r({}, e, {
                            containerId: t,
                            userId: this._userId,
                            isTest: this._isTest
                        })]
                    }
                })
            })
        }
        ,
        e.prototype._withBrowserProps = function(e) {
            return r({}, e, {
                userAgent: navigator.userAgent,
                screenWidth: screen.width,
                screenHeight: screen.height
            })
        }
        ,
        e.prototype._withInstanceProps = function(e) {
            var t = this._batchId++;
            return r({}, e, {
                instanceId: this._instanceId,
                batchId: t
            })
        }
        ,
        e.prototype._send = function(e, t) {
            return o(this, void 0, void 0, function() {
                var n, r = this;
                return i(this, function(o) {
                    switch (o.label) {
                    case 0:
                        return o.trys.push([0, 4, , 5]),
                        e = this._withClientProps(e),
                        (!t.lite || t.lite && t.sendInstance) && (e = this._withInstanceProps(e)),
                        !t.lite || t.lite && t.sendUser ? [4, this._withUserProps(e)] : [3, 2];
                    case 1:
                        e = o.sent(),
                        o.label = 2;
                    case 2:
                        return (!t.lite || t.lite && t.sendBrowser) && (e = this._withBrowserProps(e)),
                        [4, this._doSend(t.lite ? this._liteUrl : this._eventsUrl, e)];
                    case 3:
                        return [2, o.sent()];
                    case 4:
                        throw n = o.sent(),
                        c.guard(function() {
                            return r._logger && r._logger.sendError(n)
                        }),
                        n;
                    case 5:
                        return [2]
                    }
                })
            })
        }
        ,
        e.prototype._doSend = function(e, t) {
            return this._fetch(e, {
                mode: "cors",
                credentials: "include",
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    events: [t]
                })
            }).then(function(e) {
                return e.ok ? Promise.resolve() : Promise.reject(new Error(e.statusText))
            })
        }
        ,
        e
    }();
    t.GnarClientImpl = p;
    var d = function() {
        function e() {
            this.history = []
        }
        return e.prototype.track = function(e) {
            return this.history.push(e),
            Promise.resolve()
        }
        ,
        e.prototype.pingMaybe = function() {}
        ,
        e.prototype.setUser = function(e, t) {}
        ,
        e.prototype.getContainerId = function() {
            return Promise.resolve("dummy_container_id")
        }
        ,
        e
    }();
    t.MemoryGnarClient = d;
    var h = function() {
        function e() {}
        return e.prototype.track = function(e) {
            var t = "trackingGnar";
            try {
                var n = JSON.parse(localStorage.getItem(t)) || [];
                n.push(e),
                localStorage.setItem(t, JSON.stringify(n))
            } catch (e) {}
            return Promise.resolve()
        }
        ,
        e.prototype.pingMaybe = function() {}
        ,
        e.prototype.setUser = function(e, t) {}
        ,
        e.prototype.getContainerId = function() {
            return Promise.resolve("dummy_container_id")
        }
        ,
        e
    }();
    t.LocalStorageGnarClient = h
}
, function(e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(e, t) {
        e.__proto__ = t
    }
    || function(e, t) {
        for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n])
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    ), i = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    }
    , a = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [0, o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = n(384)
      , s = n(368)
      , u = n(369)
      , l = function() {
        return (new Date).setFullYear((new Date).getFullYear() + 10)
    }
      , f = function() {
        return (new Date).setMinutes((new Date).getMinutes() + 10)
    }
      , p = /^\.\w+\.\w+/;
    function d(e) {
        return {
            type: "success",
            value: e
        }
    }
    function h(e) {
        return {
            type: "failure",
            error: e
        }
    }
    function g(e) {
        return e.then(d, h)
    }
    function m(e, t, n) {
        var r = n();
        return e > 0 ? r.catch(function(r) {
            return new Promise(function(e, n) {
                return setTimeout(e, t)
            }
            ).then(function(r) {
                return m(e - 1, t, n)
            })
        }) : r
    }
    var v = function() {
        function e(e, t, n, r, o, i) {
            void 0 === t && (t = []),
            void 0 === n && (n = null),
            void 0 === r && (r = 3e5),
            void 0 === o && (o = 0),
            void 0 === i && (i = function() {
                return Date.now()
            }
            ),
            this.primaryStorage = e,
            this.secondaryStorages = t,
            this._logger = n,
            this._cacheSuccessTimeoutMillis = r,
            this._cacheFailureTimeoutMillis = o,
            this._getTime = i,
            this._allStorages = [e].concat(t)
        }
        return e.prototype._expireCache = function(e) {
            0 === e ? this._cacheExpireTimestamp = 0 : e > 0 && (this._cacheExpireTimestamp = this._getTime() + e)
        }
        ,
        e.prototype.getValue = function() {
            var e = this;
            if (void 0 !== this._cache && (void 0 === this._cacheExpireTimestamp || this._getTime() < this._cacheExpireTimestamp))
                return this._cache;
            var t = u.guard(function() {
                return e._logger && e._logger.getValueStart(e.valueLabel())
            })
              , n = this._valueFromStorage();
            return n && (this._cache = n,
            this._cacheExpireTimestamp = void 0,
            n.then(function(t) {
                return e._expireCache(e._cacheSuccessTimeoutMillis)
            }, function(t) {
                return e._expireCache(e._cacheFailureTimeoutMillis)
            })),
            n.then(function(e) {
                t && u.guard(function() {
                    return t.getValueSuccess()
                })
            }, function(e) {
                t && u.guard(function() {
                    return t.getValueFailure(e)
                })
            }),
            n
        }
        ,
        e.prototype._valueFromStorage = function() {
            var e = this;
            return Promise.all(this._allStorages.map(function(t) {
                return g(t.safeGetValue(e.key()))
            })).then(function(t) {
                var n = t[0];
                if ("failure" === n.type)
                    return Promise.reject("getting value from primary storage '" + e.primaryStorage.name + "' has failed: " + n.error);
                var r = t.find(function(e) {
                    return "success" === e.type && void 0 !== e.value
                });
                if (void 0 === r)
                    return Promise.resolve(void 0);
                var o = r.value
                  , i = "success" === n.type && void 0 === n.value && void 0 !== r
                  , a = t.reduce(function(e, t, n) {
                    return "success" === t.type && t.value !== o ? e.concat(n) : e
                }, []);
                return e.setValue(o, i, !1, a)
            })
        }
        ,
        e.prototype.setValue = function(e, t, n, r) {
            var o = this;
            void 0 === t && (t = !1),
            void 0 === n && (n = !1),
            void 0 === r && (r = Array.from(Array(this._allStorages.length).keys()));
            var i = r.map(function(t) {
                return g(o._allStorages[t].safeSetValue(o.key(), e))
            })
              , a = Promise.all(i).then(function(r) {
                if (t || n) {
                    var i = r[0];
                    if ("success" !== i.type)
                        return Promise.reject("setting " + o.valueLabel() + " to primary storage has failed:\n                " + i.error)
                }
                return Promise.resolve(e)
            });
            return a.then(function(e) {
                t ? u.guard(function() {
                    return o._logger && o._logger.valueRecovered()
                }) : n && u.guard(function() {
                    return o._logger && o._logger.valueGenerated()
                })
            }),
            a
        }
        ,
        e
    }();
    t.ValueManager = v;
    var b = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.containerIdLength = 12,
            t.getContainerId = function() {
                return e.prototype.getValue.call(t).then(function(n) {
                    return i(t, void 0, void 0, function() {
                        return a(this, function(t) {
                            switch (t.label) {
                            case 0:
                                return void 0 !== n ? [3, 2] : [4, e.prototype.setValue.call(this, this.generateContainerId(), !1, !0)];
                            case 1:
                                return [2, t.sent()];
                            case 2:
                                return [2, n]
                            }
                        })
                    })
                })
            }
            ,
            t
        }
        return o(t, e),
        t.prototype.key = function() {
            return "gnar_containerId"
        }
        ,
        t.prototype.valueLabel = function() {
            return "ContainerId"
        }
        ,
        t.prototype.generateContainerId = function() {
            return s.alphanumeric(this.containerIdLength)
        }
        ,
        t
    }(v);
    t.ContainerIdManager = b;
    var y = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return o(t, e),
        t.prototype.key = function() {
            return "ga_clientId"
        }
        ,
        t.prototype.valueLabel = function() {
            return "GAClientId"
        }
        ,
        t.prototype.setId = function(t) {
            e.prototype.setValue.call(this, t, !1, !0)
        }
        ,
        t
    }(v);
    t.GAClientIdManager = y;
    var _ = function() {
        function e(e) {
            this.name = e
        }
        return e.prototype.safeSetValue = function(e, t) {
            var n = this;
            return this.ensureAvailable(e).then(function() {
                return n.setValue(e, t)
            })
        }
        ,
        e.prototype.safeGetValue = function(e) {
            var t = this;
            return this.ensureAvailable(e).then(function() {
                return t.getValue(e)
            }).then(function(e) {
                return "" === e ? void 0 : e
            })
        }
        ,
        e
    }();
    t.BaseStorage = _;
    var w = function(e) {
        function t(t, n) {
            var r = e.call(this, "chromeCookie") || this;
            if (r._url = t,
            r._domain = n,
            !p.test(n))
                throw new Error('Incorrect cookie domain provided.\n        Use top-level domain, starting from "."');
            return r
        }
        return o(t, e),
        t.prototype._hasRuntimeError = function() {
            return window.chrome && window.chrome.runtime && window.chrome.runtime.lastError
        }
        ,
        t.prototype.ensureAvailable = function() {
            var e = this;
            return m(2, 1e3, function() {
                return new Promise(function(t, n) {
                    var r = s.alphanumeric(10);
                    try {
                        window.chrome.cookies.set({
                            name: r,
                            value: r,
                            url: e._url,
                            domain: e._domain,
                            expirationDate: f() / 1e3
                        }, function(o) {
                            var i = e._hasRuntimeError();
                            !o && i && n("chrome.cookie.set failed with an error: " + i.message),
                            o && o.value === r ? t() : n(new Error("ChromeCookieStorage is unavailable.\n              Availability test failed.\n              Tried to set " + r + ", the result is " + (o ? o.value : o) + "."))
                        })
                    } catch (e) {
                        n(e)
                    }
                }
                )
            })
        }
        ,
        t.prototype.getValue = function(e) {
            var t = this;
            return new Promise(function(n, r) {
                try {
                    window.chrome.cookies.get({
                        url: t._url,
                        name: e
                    }, function(e) {
                        var o = t._hasRuntimeError();
                        !e && o && r("chrome.cookie.get failed with an error: " + o.message),
                        n(e ? e.value : void 0)
                    })
                } catch (e) {
                    r(e)
                }
            }
            )
        }
        ,
        t.prototype.setValue = function(e, t) {
            var n = this;
            return new Promise(function(r, o) {
                try {
                    window.chrome.cookies.set({
                        name: e,
                        value: t,
                        url: n._url,
                        domain: n._domain,
                        expirationDate: l() / 1e3
                    }, function(i) {
                        var a = n._hasRuntimeError();
                        !i && a && o("chrome.cookie.set failed with an error: " + a.message),
                        i && i.value === t || o(new Error("setValue for " + e + " failed.\n            Tried to set " + t + ", the result is " + (i ? i.value : i) + ".")),
                        r()
                    })
                } catch (e) {
                    o(e)
                }
            }
            )
        }
        ,
        t
    }(_);
    t.ChromeCookieStorage = w;
    var E = function(e) {
        function t(t, n) {
            var r = e.call(this, "webExtensionsCookie") || this;
            if (r._url = t,
            r._domain = n,
            !p.test(n))
                throw new Error('Incorrect cookie domain provided.\n        Use top-level domain, starting from "."');
            return r
        }
        return o(t, e),
        t.prototype.ensureAvailable = function() {
            var e = this;
            return m(2, 1e3, function() {
                return new Promise(function(t, n) {
                    var r = s.alphanumeric(10);
                    window.browser.cookies.set({
                        name: r,
                        value: r,
                        url: e._url,
                        domain: e._domain,
                        expirationDate: f() / 1e3
                    }).then(function() {
                        window.browser.cookies.get({
                            url: e._url,
                            name: r
                        }).then(function(e) {
                            e && e.value === r ? t() : n(new Error("WebExtensionsCookieStorage is unavailable.\n              Availability test failed.\n              Tried to set " + r + ", the result is " + (e ? e.value : e) + "."))
                        }).catch(function(e) {
                            n("browser.cookies.get failed with an error: " + e.message)
                        })
                    }).catch(function(e) {
                        n("browser.cookies.set failed with an error: " + e.message)
                    })
                }
                )
            })
        }
        ,
        t.prototype.getValue = function(e) {
            var t = this;
            return new Promise(function(n, r) {
                window.browser.cookies.get({
                    url: t._url,
                    name: e
                }).then(function(e) {
                    n(e ? e.value : void 0)
                }).catch(function(e) {
                    r("browser.cookies.get failed with an error: " + e.message)
                })
            }
            )
        }
        ,
        t.prototype.setValue = function(e, t) {
            var n = this;
            return new Promise(function(r, o) {
                window.browser.cookies.set({
                    name: e,
                    value: t,
                    url: n._url,
                    domain: n._domain,
                    expirationDate: l() / 1e3
                }).then(function(e) {
                    e && e.value === t || o(new Error("setValue failed.\n          Tried to set " + t + ", the result is " + (e ? e.value : e) + ".")),
                    r()
                }).catch(function(e) {
                    o("browser.cookies.set failed with an error: " + e.message)
                })
            }
            )
        }
        ,
        t
    }(_);
    t.WebExtensionsCookieStorage = E;
    var S = function(e) {
        function t(t, n) {
            var r = e.call(this, "readonlyWebExtensionsCookie") || this;
            if (r._url = t,
            r._domain = n,
            !p.test(n))
                throw new Error('Incorrect cookie domain provided.\n        Use top-level domain, starting from "."');
            return r
        }
        return o(t, e),
        t.prototype.ensureAvailable = function() {
            return Promise.resolve()
        }
        ,
        t.prototype.getValue = function(e) {
            var t = this;
            return new Promise(function(n, r) {
                window.browser.cookies.get({
                    url: t._url,
                    name: e
                }).then(function(e) {
                    n(e ? e.value : void 0)
                }).catch(function(e) {
                    r("browser.cookies.get failed with an error: " + e.message)
                })
            }
            )
        }
        ,
        t.prototype.setValue = function() {
            return Promise.reject("can not set value for the readonly storage")
        }
        ,
        t
    }(_);
    t.ReadonlyWebExtensionsCookieStorage = S;
    var I = function(e) {
        function t() {
            return e.call(this, "localStorage") || this
        }
        return o(t, e),
        t.prototype.ensureAvailable = function(e) {
            var t = e + "_test"
              , n = s.alphanumeric(10);
            return new Promise(function(e, r) {
                localStorage.setItem(t, n),
                localStorage.getItem(t) !== n ? r(new Error("LocalStorage is unavailable.\n          Availability test failed.\n          Tried to set " + n + ",\n          the result is " + localStorage.getItem(t) + ".")) : e(),
                localStorage.removeItem(t)
            }
            )
        }
        ,
        t.prototype.getValue = function(e) {
            var t = localStorage.getItem(e);
            return new Promise(function(e, n) {
                return e(null === t ? void 0 : t)
            }
            )
        }
        ,
        t.prototype.setValue = function(e, t) {
            return new Promise(function(n, r) {
                localStorage.setItem(e, t),
                n()
            }
            )
        }
        ,
        t
    }(_);
    t.LocalStorage = I;
    var k = function(e) {
        function t(t) {
            var n = e.call(this, "cookie") || this;
            if (n._domain = t,
            !p.test(t))
                throw new Error('Incorrect cookie domain provided.\n        Use top-level domain, starting from "."');
            return n
        }
        return o(t, e),
        t.prototype._getCookieOptions = function() {
            return {
                path: "/",
                domain: this._domain,
                expires: new Date(l())
            }
        }
        ,
        t.prototype.ensureAvailable = function() {
            var e = s.alphanumeric(10);
            return new Promise(function(t, n) {
                c.default(e, e),
                c.default(e) !== e ? n(new Error("CookieStorage is unavailable.\n          Availability test failed.\n          Tried to set " + e + ", the result is " + c.default(e) + ".")) : t(),
                c.default(e, null)
            }
            )
        }
        ,
        t.prototype.getValue = function(e) {
            return new Promise(function(t, n) {
                return t(c.default(e))
            }
            )
        }
        ,
        t.prototype.setValue = function(e, t) {
            var n = this;
            return new Promise(function(r, o) {
                c.default(e, t, n._getCookieOptions()),
                r()
            }
            )
        }
        ,
        t
    }(_);
    t.CookieStorage = k;
    var O = function(e) {
        function t(t, n) {
            var r = e.call(this, "backend") || this;
            return r._fetch = t,
            r._url = n,
            r._baseUrl = n + "/cookies",
            r
        }
        return o(t, e),
        t.prototype.ensureAvailable = function(e) {
            var t = this
              , n = e + "_test"
              , r = s.alphanumeric(10)
              , o = (f() - Date.now()) / 1e3
              , i = this._baseUrl + "?name=" + n
              , a = i + "&value=" + r + "&maxAge=" + o;
            return this._doSend(a, "post").then(function(e) {
                if (!e.ok)
                    throw new Error("BackendStorage is unavailable.\n          Availability test failed.\n          Tried to set " + r + ". Request failed.\n        ")
            }).then(function() {
                return t._doSend(i, "get").then(function(e) {
                    if (e.ok)
                        return e.json().then(function(e) {
                            if (e.value !== r)
                                throw new Error("BackendStorage is unavailable.\n                Availability test failed.\n                Tried to get " + n + " from server.\n                Got " + e.value + " instead of " + r + ".")
                        });
                    throw new Error("BackendStorage is unavailable.\n            Availability test failed.\n            Tried to get " + n + " from server. Request failed.")
                })
            })
        }
        ,
        t.prototype._doSend = function(e, t) {
            return this._fetch(e, {
                credentials: "include",
                method: t
            })
        }
        ,
        t.prototype.getValue = function(e) {
            var t = this._baseUrl + "?name=" + e;
            return this._doSend(t, "get").then(function(e) {
                return e.json()
            }).then(function(e) {
                return e.value
            })
        }
        ,
        t.prototype.setValue = function(e, t) {
            var n = (l() - Date.now()) / 1e3
              , r = this._baseUrl + "?name=" + e + "&value=" + t + "&maxAge=" + n;
            return this._doSend(r, "post").then(function() {})
        }
        ,
        t
    }(_);
    t.BackendStorage = O;
    var A = function(e) {
        function t(t) {
            void 0 === t && (t = void 0);
            var n = e.call(this, "memory") || this;
            return n._value = t,
            n
        }
        return o(t, e),
        t.prototype.ensureAvailable = function() {
            return Promise.resolve()
        }
        ,
        t.prototype.getValue = function(e) {
            return Promise.resolve(this._value)
        }
        ,
        t.prototype.setValue = function(e, t) {
            return this._value = t,
            Promise.resolve()
        }
        ,
        t
    }(_);
    t.MemoryStorage = A
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        var e, t, n, r, o, i, a;
        e = window,
        t = document,
        n = "script",
        r = "//www.google-analytics.com/analytics.js",
        o = "ga",
        e.GoogleAnalyticsObject = o,
        e[o] = e[o] || function() {
            (e[o].q = e[o].q || []).push(arguments)
        }
        ,
        e[o].l = (new Date).getTime(),
        i = t.createElement(n),
        a = t.getElementsByTagName(n)[0],
        i.async = 1,
        i.src = r,
        a.parentNode.insertBefore(i, a)
    }
      , o = function() {
        function e(e, t, n) {
            void 0 === n && (n = !0);
            var o = this;
            this._isReady = !1,
            this._gaQueue = [],
            n && r(),
            this._clientId = t.getValue().then(function(n) {
                return n ? (ga("create", e, "auto", {
                    clientId: n
                }),
                n) : (ga("create", e, "auto"),
                new Promise(function(e, n) {
                    return ga(function(r) {
                        if (r) {
                            var o = r.get("clientId");
                            t.setId(o),
                            e(o)
                        } else
                            n(new Error("No default google analytics tracker found after analytics.js was ready"))
                    })
                }
                ))
            }),
            this._clientId.then(function(e) {
                for (; o._gaQueue.length > 0; )
                    ga.apply(null, o._gaQueue.shift());
                o._isReady = !0
            })
        }
        return e.prototype.setUserId = function(e) {
            /^-/.test(e) || this.ga("set", "userId", e)
        }
        ,
        e.prototype.ga = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            this._isReady ? ga.apply(null, arguments) : this._gaQueue.push(arguments)
        }
        ,
        e.prototype.getClientId = function() {
            return this._clientId
        }
        ,
        e
    }();
    t.GoogleAnalyticsClient = o
}
, function(e, t, n) {
    "use strict";
    var r, o = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    }
    , i = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
    , a = this && this.__read || function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = n(436)
      , s = n(127)
      , u = n(148)
      , l = n(165)
      , f = n(195)
      , p = n(149)
      , d = n(437)
      , h = n(56);
    t.on = ((r = {})["daily-ping"] = function(e, t, n) {
        return void 0 === n && (n = c.getNextPingDate),
        o(this, void 0, void 0, function() {
            var r, o, c, u, l, f;
            return i(this, function(i) {
                switch (i.label) {
                case 0:
                    return e ? (s.call("gnar.pingMaybe"),
                    [4, (r = new d.PrefsImpl(h.getBackgoundPageExtensionApi().preferences)).get("pingDate")]) : [2];
                case 1:
                    return "string" != typeof (o = i.sent()) && (o = ""),
                    c = a(o.split("|"), 2),
                    u = c[0],
                    l = c[1],
                    f = t ? "cookiesDisabled" : e,
                    u && u > Date.now() && l === f ? [2] : [4, r.set("pingDate", [n(), f].join("|"))];
                case 2:
                    return i.sent(),
                    [2]
                }
            })
        })
    }
    ,
    r.app_signin_success = function(e) {
        l.gnar.signInFormSuccess(e)
    }
    ,
    r.app_signup_success = function(e) {
        l.gnar.signUpFormSuccess(e)
    }
    ,
    r["signin-error"] = function(e) {
        e.errorType = "Server-Side",
        s.call("gnar.track", "userLoginForm/rejected")
    }
    ,
    r["signup-error"] = function(e) {
        e.errorType = "Server-Side",
        s.call("gnar.track", "userAccountSignupForm/rejected")
    }
    ,
    r["upgrade-after-register"] = function() {
        return o(this, void 0, void 0, function() {
            return i(this, function(e) {
                return s.call("gnar.track", "Account_Type_Selected"),
                [2]
            })
        })
    }
    ,
    r["hook-clicked"] = function(e) {
        s.call("gnar.track", "upgradeHookClicked", {
            placement: e
        }),
        p.felog.userUpgradeClick(e)
    }
    ,
    r["correct-btn-clicked"] = function(e) {
        s.call("gnar.track", "gbuttonClicked", {
            numberOfCriticalAlerts: e
        }),
        p.felog.gButtonClick()
    }
    ,
    r["btn-disable-in-field"] = function(e) {
        s.call("gnar.track", "checkingInFieldToggled", {
            enabled: e
        }),
        p.felog.checkingToggledInField(e)
    }
    ,
    r["button-change-state"] = function() {}
    ,
    r["login-attempt"] = function(e) {
        s.call("gnar.track", "signInClicked", {
            placement: e
        })
    }
    ,
    r["show-dictionary"] = function() {
        s.call("gnar.track", "showDictionary")
    }
    ,
    r["tab-connected"] = function(e, t, n, r, o, i) {
        var a = t.enabled
          , c = n.cookiesDisabled;
        this["daily-ping"](e.id, c),
        a || !0 === i || p.felog.disabledTabLoad(e.type),
        !0 === a && !1 === r && p.felog.disabledTabByUserLoad(e.type)
    }
    ,
    r["text-checked"] = function(e, t) {
        this["daily-ping"](e.id, t)
    }
    ,
    r["session-invalidate"] = function(e, t, n, r, o) {
        var i = e.id
          , a = e.anonymous
          , c = e.isTest;
        i !== t.id && (u.tracker.gnar && s.call("gnar.setUser", i, c),
        u.tracker.ga && u.tracker.ga.setUserId(i),
        this["daily-ping"](i, r)),
        t.email && !t.anonymous && a && p.felog.unexpectedAnonymous({
            tokenEqualsGrauth: t.token === t.grauth,
            cookiesDisabled: r,
            reason: n
        })
    }
    ,
    r["set-dapi-prop"] = function(e, t) {
        if ("dialectWeak" === e) {
            var n = t + "English";
            l.gnar.languageSettingUpdate(n, "capi")
        }
    }
    ,
    r["change-dialect"] = function(e) {
        var t = e.language
          , n = e.dialectWeak
          , r = {
            language: t
        };
        n && (r.sameAsWeak = t === n),
        s.call("gnar.track", "languageStrongPreference", r)
    }
    ,
    r["change-defs"] = function(e) {
        s.call("gnar.track", "definitionsToggled", e),
        p.felog.toggleExtensionDefs(e.enabled)
    }
    ,
    r["checking-toggled"] = function(e) {
        s.call("gnar.track", "checkingToggled", e),
        p.felog.toggleExtension(e.enabled, e.placement)
    }
    ,
    r["disable-until-next-visit"] = function() {
        s.call("gnar.track", "disableUntilNextVisit"),
        l.gnar.disableUntilNextVisitButtonClick("gButton", f.SiteCategory.other),
        p.felog.disableUntilNextVisit()
    }
    ,
    r["disable-button-click"] = function() {
        l.gnar.disableButtonClick("gButton"),
        p.felog.disableButtonClick()
    }
    ,
    r["popup-open"] = function() {
        s.call("gnar.track", "browserToolbarButtonClicked")
    }
    ,
    r["popup-open-on-unsupported"] = function() {
        s.call("gnar.track", "browserToolbarButtonClicked/unsupported")
    }
    ,
    r["cookie-overflow"] = function(e, t) {
        p.felog.cookieOverflow(e, t)
    }
    ,
    r["onboarding-popup-show"] = function() {
        s.call("gnar.track", "onboarding-popup-show"),
        p.felog.onboardingPopupShow()
    }
    ,
    r["onboarding-popup-cancel"] = function() {
        s.call("gnar.track", "onboarding-popup-cancel"),
        p.felog.onboardingPopupCancel()
    }
    ,
    r["onboardingTutorial-popup-show"] = function() {
        s.call("gnar.track", "onboardingTutorial-popup-show"),
        p.felog.onboardingTutorialShow()
    }
    ,
    r["onboardingTutorialNext-button-click"] = function() {
        s.call("gnar.track", "onboardingTutorialNext-button-click")
    }
    ,
    r["onboardingTutorialPersonalize-button-click"] = function() {
        s.call("gnar.track", "onboardingTutorialPersonalize-button-click")
    }
    ,
    r["onboardingTutorialSave-button-click"] = function() {
        s.call("gnar.track", "onboardingTutorialSave-button-click")
    }
    ,
    r["onboardingTutorialLetsWrite-button-click"] = function() {
        s.call("gnar.track", "onboardingTutorialLetsWrite-button-click")
    }
    ,
    r)
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    }
      , o = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(10)
      , a = n(8)
      , c = n(4)
      , s = n(17)
      , u = n(13)
      , l = n(667)
      , f = n(338)
      , p = n(56)
      , d = n(3).Logger.create("lib.request")
      , h = 1e4;
    function g(e, t) {
        return r(this, void 0, void 0, function() {
            var n;
            return o(this, function(r) {
                switch (r.label) {
                case 0:
                    e.headers = e.headers || {},
                    r.label = 1;
                case 1:
                    return r.trys.push([1, 3, , 4]),
                    [4, f.getContainerIdOrUndefined()];
                case 2:
                    return (n = r.sent()) && (e.headers["X-Container-Id"] = n),
                    e.headers["X-Client-Version"] = "" + i.getGlobal().buildInfo.version,
                    e.headers["X-Client-Type"] = "extension-" + i.getGlobal().bundleInfo.browser,
                    [3, 4];
                case 3:
                    return r.sent(),
                    d.error("Error by setting request headers"),
                    [3, 4];
                case 4:
                    return t && (e.headers["X-CSRF-Token"] = t),
                    [2, e]
                }
            })
        })
    }
    function m(e) {
        var t = this;
        return new l.CookiesHelper(p.getBackgoundPageExtensionApi()).getCSRFToken(!!e.csrfMayBeEmpty).then(function(n) {
            return r(t, void 0, void 0, function() {
                return o(this, function(t) {
                    return [2, g(e, n)]
                })
            })
        })
    }
    function v(e) {
        if (e.data && (e.query || "post" !== e.method) && (e.url += "?" + y(e.data)),
        e.data && "post" === e.method && !e.query && !e.body) {
            try {
                e.body = JSON.stringify(e.data)
            } catch (t) {
                e.body = {},
                d.warn("", t)
            }
            e.headers = e.headers || {},
            e.headers["Content-Type"] = e.headers["Content-Type"] || "application/json",
            delete e.data
        }
        return e.credentials = "include",
        e
    }
    function b(e) {
        return r(this, void 0, void 0, function() {
            function t(e) {
                return e.ok ? e[n.isText ? "text" : "json"]() : e.text().then(function(t) {
                    throw {
                        name: "RequestError",
                        body: t,
                        statusCode: e.status,
                        message: e.statusText
                    }
                })
            }
            var n, r;
            return o(this, function(o) {
                switch (o.label) {
                case 0:
                    return [4, m(e)];
                case 1:
                    return n = o.sent(),
                    r = n.url,
                    delete n.url,
                    r ? [2, Promise.race([window.fetch(r, n).then(t).then(function(e) {
                        if ("string" != typeof e && e && e.error)
                            throw new Error(e.error);
                        return e
                    }), c.delay(n.timeout || h).then(function() {
                        throw new Error("Fetch request to " + r + " rejected by timeout")
                    })])] : [2, Promise.reject(new Error("Url is not defined in fetch request"))]
                }
            })
        })
    }
    function y(e) {
        var t = ""
          , n = function(n) {
            if (Array.isArray(e[n])) {
                if (e[n].length) {
                    var r = e[n].map(function(e) {
                        return n + "=" + e
                    }).join("&");
                    t += (t.length ? "&" : "") + r
                }
            } else
                t += (t.length ? "&" : "") + n + "=" + encodeURIComponent(e[n])
        };
        for (var r in e)
            n(r);
        return t
    }
    c.isBg() && u.on("fetch", function(e, t) {
        return b(e).then(t, function(e) {
            return t({
                error: e.message
            })
        })
    }),
    t.setRequestHeaders = g,
    t.updateRequestsHeaders = m,
    t.transformOptions = v,
    t.fetch = function(e, t) {
        return void 0 === t && (t = {}),
        r(this, void 0, void 0, function() {
            var n;
            return o(this, function(r) {
                switch (r.label) {
                case 0:
                    return t.url = e,
                    v(t),
                    c.isBg() || s.isTestsMode() ? [2, b(t)] : [4, u.promiseBackground("fetch", t)];
                case 1:
                    if (n = r.sent(),
                    a(n) && n.error)
                        throw new Error(n.error);
                    return [2, n]
                }
            })
        })
    }
    ,
    t.paramStr = y
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {
    e.exports = function(e, t, n, r) {
        for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
            if (t(e[i], i, e))
                return i;
        return -1
    }
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    }
      , o = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(17)
      , a = n(3)
      , c = n(1)
      , s = a.Logger.create("Cookies")
      , u = function() {
        return function(e) {
            var t = this;
            this._api = e,
            this._rootPath = "/",
            this._grammarlyUrl = "https://" + i.GRAMMARLY_DOMAIN + this._rootPath,
            this._grauthCookieName = "grauth",
            this._csrfTokenCookieName = "csrf-token",
            this._grInstallSourceCookieName = "grInstallSource",
            this._grChromeStoreInstallUtmName = "grChromeStoreInstallUTM",
            this.getToken = function() {
                return t._api.cookies.get({
                    name: t._grauthCookieName,
                    url: t._grammarlyUrl
                }).then(function(e) {
                    return e ? e.value : null
                })
            }
            ,
            this.deleteGrauth = function() {
                return t._api.cookies.remove({
                    name: t._grauthCookieName,
                    url: t._grammarlyUrl
                })
            }
            ,
            this.getCSRFToken = function(e) {
                return r(t, void 0, void 0, function() {
                    var t, n, r, i = this;
                    return o(this, function(o) {
                        switch (o.label) {
                        case 0:
                            return o.trys.push([0, 2, , 3]),
                            [4, c.conditionalRetry(function() {
                                return i._api.cookies.get({
                                    name: i._csrfTokenCookieName,
                                    url: i._grammarlyUrl
                                })
                            }, 5, 20, function(t) {
                                return !!(e || t && t.value)
                            })];
                        case 1:
                            return t = o.sent(),
                            (n = t ? t.value : null) || e || s.error("CRF is null"),
                            [2, n];
                        case 2:
                            return r = o.sent(),
                            s.error("failed to read a CSRFToken cookie", r),
                            [2, null];
                        case 3:
                            return [2]
                        }
                    })
                })
            }
            ,
            this.watchToken = function(e) {
                return t._api.cookies.watch({
                    domain: i.GRAMMARLY_DOMAIN,
                    name: t._grauthCookieName,
                    url: t._grammarlyUrl,
                    path: t._rootPath
                }, e)
            }
            ,
            this.getInstallSource = function() {
                return t._api.cookies.get({
                    name: t._grInstallSourceCookieName,
                    url: t._grammarlyUrl
                })
            }
            ,
            this.getChromeStoreInstallUTM = function() {
                return t._api.cookies.get({
                    name: t._grChromeStoreInstallUtmName,
                    url: t._grammarlyUrl
                })
            }
            ,
            this.getAllGrammarlyCookies = function() {
                return t._api.cookies.getAll({
                    domain: i.GRAMMARLY_DOMAIN,
                    path: t._rootPath
                })
            }
            ,
            this.deleteGnarContainerIdCookie = function() {
                return t._api.cookies.remove({
                    name: "gnar_containerId",
                    url: t._grammarlyUrl
                })
            }
        }
    }();
    t.CookiesHelper = u
}
, , , , , , , , function(e, t, n) {
    var r = n(811);
    e.exports = function(e, t) {
        return !(null == e || !e.length) && r(e, t, 0) > -1
    }
}
, function(e, t) {
    e.exports = function(e, t, n) {
        for (var r = -1, o = null == e ? 0 : e.length; ++r < o; )
            if (n(t, e[r]))
                return !0;
        return !1
    }
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    var r = n(537)
      , o = n(812)
      , i = n(813);
    e.exports = function(e, t, n) {
        return t == t ? i(e, t, n) : r(e, o, n)
    }
}
, function(e, t) {
    e.exports = function(e) {
        return e != e
    }
}
, function(e, t) {
    e.exports = function(e, t, n) {
        for (var r = n - 1, o = e.length; ++r < o; )
            if (e[r] === t)
                return r;
        return -1
    }
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o = n(3).Logger.create("lib.page-config.localforage");
    try {
        (r = n(1291)).config({
            name: "Grammarly",
            version: 1,
            size: 4194304,
            storeName: "configuration"
        })
    } catch (e) {
        o.error("Fallback to memory storage", e);
        var i = {};
        r = {
            getItem: function(e) {
                return Promise.resolve(i[e])
            },
            setItem: function(e, t) {
                return i[e] = t,
                Promise.resolve(t)
            },
            clear: function() {
                i = {},
                Promise.resolve(!0)
            }
        }
    }
    t.localforage = r
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.current = function(e) {
        return e.connection
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    }
      , o = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
      , i = this && this.__read || function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
      , a = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(i(arguments[t]));
        return e
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = n(299)
      , s = n(14)
      , u = n(3).Logger.create("lib.profiler")
      , l = function() {
        function e() {
            var e = this;
            this.timings = {},
            this.track = function(t) {
                for (var n = [], i = 1; i < arguments.length; i++)
                    n[i - 1] = arguments[i];
                return r(e, void 0, void 0, function() {
                    return o(this, function(e) {
                        return [2, this._track.apply(this, a([!1, t], n))]
                    })
                })
            }
            ,
            this.trackAsync = function(t) {
                for (var n = [], i = 1; i < arguments.length; i++)
                    n[i - 1] = arguments[i];
                return r(e, void 0, void 0, function() {
                    return o(this, function(e) {
                        return [2, this._track.apply(this, a([!0, t], n))]
                    })
                })
            }
            ,
            this._track = function(t, n) {
                for (var i = [], s = 2; s < arguments.length; s++)
                    i[s - 2] = arguments[s];
                return r(e, void 0, void 0, function() {
                    var e;
                    return o(this, function(r) {
                        switch (r.label) {
                        case 0:
                            e = n.name + (t ? "__sync" : ""),
                            c.timers.start(e),
                            r.label = 1;
                        case 1:
                            return r.trys.push([1, 5, 6, 7]),
                            t ? [4, n.apply(void 0, a(i))] : [3, 3];
                        case 2:
                            return r.sent(),
                            [3, 4];
                        case 3:
                            n.apply(void 0, a(i)),
                            r.label = 4;
                        case 4:
                            return [3, 7];
                        case 5:
                            throw r.sent();
                        case 6:
                            return this.timings[e] = c.timers.stop(e),
                            [7];
                        case 7:
                            return [2]
                        }
                    })
                })
            }
        }
        return e.start = function(e) {
            c.timers.start(e)
        }
        ,
        e.stop = function(e, t) {
            void 0 === t && (t = 3e4);
            var n = c.timers.stop(e);
            return n > t && (u.warn("profiler_" + e + "_time_exceeded " + n),
            "pageConfig_init" === e && s.felog.tooLongPageConfigInit(n),
            "updateUser" === e && s.felog.tooLongUserUpdateTime(n)),
            n
        }
        ,
        e.prototype.start = function(e) {
            c.timers.start(e)
        }
        ,
        e.prototype.stop = function(e) {
            this.timings[e] = c.timers.stop(e)
        }
        ,
        e
    }();
    t.Profiler = l
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    (t.CsToBgRpcApi || (t.CsToBgRpcApi = {})).rpcLegacyMessageName = "cs-to-bg-rpc-1557421403805"
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(10)
      , i = n(295)
      , a = n(364)
      , c = n(194)
      , s = n(194)
      , u = n(1002)
      , l = n(1045)
      , f = n(294)
      , p = n(337)
      , d = n(383)
      , h = n(1293)
      , g = n(1294)
      , m = n(4)
      , v = n(1003)
      , b = n(454)
      , y = n(165)
      , _ = n(3)
      , w = n(17)
      , E = _.Logger.create("universal.bg.state.user.sagas");
    t.SERIALIZED_USER_INFO_PROP_NAME = "serializedUserInfo";
    var S = function() {
        function e(e, t, n, r, o, i) {
            this._settingsSagas = e,
            this._prefs = t,
            this._telemetry = n,
            this._cookiesHelper = r,
            this._getContainerIdOrUndefined = o,
            this._reconnectAllSockets = i
        }
        return e.prototype.start = function() {
            var e;
            return r(this, function(t) {
                switch (t.label) {
                case 0:
                    return [4, i.select(u.current)];
                case 1:
                    return e = t.sent(),
                    "firefox" !== o.getGlobal().bundleInfo.browser || "active" !== e.dataControl ? [3, 3] : [4, [a.takeLatest(s.t.ACCEPT_DATA_CONTROL, this.start.bind(this)), a.takeLatest(s.t.DISABLE_DATA_CONTROL, this.activateAfterDataControl.bind(this))]];
                case 2:
                    return t.sent(),
                    [3, 7];
                case 3:
                    return m.isEdge() ? [3, 5] : [4, [i.fork([this, this.listenCookieChanges]), a.takeLatest(p.t.SESSION_INVALIDATE, this.updateUser.bind(this)), a.takeLatest(p.t.UPDATE_GROUPS, this.updateGroups.bind(this))]];
                case 4:
                    return t.sent(),
                    [3, 7];
                case 5:
                    return [4, [a.takeLatest(p.t.SESSION_INVALIDATE, this.updateUser.bind(this)), a.takeLatest(p.t.UPDATE_GROUPS, this.updateGroups.bind(this))]];
                case 6:
                    t.sent(),
                    t.label = 7;
                case 7:
                    return [2]
                }
            })
        }
        ,
        e.prototype.activateAfterDataControl = function() {
            return r(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, i.call([this, this.updateUser])];
                case 1:
                    return e.sent(),
                    [4, i.call([this, this.start])];
                case 2:
                    return e.sent(),
                    [2]
                }
            })
        }
        ,
        e.prototype.updateUser = function(e) {
            var t, n, s, m, b, _, w, S, I, k, O, A, C, x, P, T, N, j, R, M = void 0 === e ? {} : e, D = M.lazy, L = M.failoverFromCache, F = M.reason;
            return r(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, i.select(u.current)];
                case 1:
                    return t = e.sent(),
                    "firefox" === o.getGlobal().bundleInfo.browser && "active" === t.dataControl ? [2] : [3, 5];
                case 2:
                    return e.sent() ? [4, i.call(this._prefs.get, "user")] : [3, 5];
                case 3:
                    return R = e.sent(),
                    [4, i.put(p.setUser(R))];
                case 4:
                    return e.sent(),
                    [2, E.info("updateUser: SKIP AUTH")];
                case 5:
                    v.Profiler.start("updateUser"),
                    e.label = 6;
                case 6:
                    return e.trys.push([6, 42, , 49]),
                    D ? [4, i.call(this._prefs.get, "loginDate")] : [3, 8];
                case 7:
                    if (n = e.sent(),
                    !g.isItTimeToRefresh(n))
                        return E.info("AUTH SERVICE | user session still fresh"),
                        v.Profiler.stop("updateUser"),
                        [2];
                    e.label = 8;
                case 8:
                    return [4, i.fork([this, this.trackCookieHeaderSize])];
                case 9:
                    return e.sent(),
                    [4, i.call(this._getContainerIdOrUndefined)];
                case 10:
                    return void 0 === (s = e.sent()) ? [3, 12] : [4, i.call([this._telemetry, this._telemetry.setContainerId], s)];
                case 11:
                    e.sent(),
                    e.label = 12;
                case 12:
                    return [4, i.call(g.fetchUser, s)];
                case 13:
                    return m = e.sent(),
                    [4, i.call([this, this.getMimic], s)];
                case 14:
                    return b = e.sent(),
                    [4, i.call([this, this.getStats])];
                case 15:
                    return _ = e.sent(),
                    [4, i.call([this, this.getGrauthFromCookie])];
                case 16:
                    return w = e.sent(),
                    [4, i.call(g.prepareUser, m, b, _, w)];
                case 17:
                    return S = e.sent(),
                    [4, i.select(h.current)];
                case 18:
                    return I = e.sent(),
                    S.id === I.id ? [3, 20] : [4, i.call([this._telemetry, this._telemetry.setUserId], S.id)];
                case 19:
                    e.sent(),
                    e.label = 20;
                case 20:
                    return [4, i.select(l.getDapiProp, "dialectStrong")];
                case 21:
                    return k = e.sent(),
                    O = !1 === S.anonymous && !0 === I.anonymous && void 0 !== I.grauth && void 0 !== I.email,
                    [4, i.put(p.setUser(S))];
                case 22:
                    return e.sent(),
                    !0 !== O ? [3, 24] : [4, i.call([this._settingsSagas, this._settingsSagas.setAnonymousPropsToDapi])];
                case 23:
                    e.sent(),
                    e.label = 24;
                case 24:
                    return S.id === I.id ? [3, 26] : [4, i.call([this._settingsSagas, this._settingsSagas.initializeDapiProps])];
                case 25:
                    return e.sent(),
                    [3, 28];
                case 26:
                    return [4, i.call([this._settingsSagas, this._settingsSagas.resetStrongDialectFromDapi])];
                case 27:
                    e.sent(),
                    e.label = 28;
                case 28:
                    return [4, i.select(l.getDapiProp, "dialectStrong")];
                case 29:
                    return A = e.sent(),
                    !S.settings.dialectStrong || A ? [3, 31] : [4, i.put(f.setDapiProp("dialectStrong", S.settings.dialectStrong))];
                case 30:
                    e.sent(),
                    A = S.settings.dialectStrong,
                    e.label = 31;
                case 31:
                    return !I.id || S.id === I.id && S.type === I.type && A === k ? [3, 34] : [4, i.select(l.getDapiProp, "dialectWeak")];
                case 32:
                    return C = e.sent(),
                    x = A || k || C,
                    [4, i.call(this._reconnectAllSockets, x)];
                case 33:
                    e.sent(),
                    E.warn("DAPI SERVICE | user changed, reseting capi session witha a dialect: ", x),
                    e.label = 34;
                case 34:
                    return [4, i.call(this._prefs.set, {
                        user: S,
                        loginDate: new Date
                    })];
                case 35:
                    return e.sent(),
                    [4, i.select(u.current)];
                case 36:
                    return P = e.sent(),
                    T = P.authDegradation,
                    N = P.cookiesDisabled,
                    [4, i.call(y.fire, "session-invalidate", S, I, F, N, s)];
                case 37:
                    return e.sent(),
                    T ? [4, i.put(c.updateConnection({
                        authDegradation: !1
                    }))] : [3, 39];
                case 38:
                    e.sent(),
                    e.label = 39;
                case 39:
                    return [4, i.fork([this, this.checkReminderNotification], S, I)];
                case 40:
                    return e.sent(),
                    [4, i.fork([this, this.storeLoginReminderInfo], S)];
                case 41:
                    return e.sent(),
                    [3, 49];
                case 42:
                    return j = e.sent(),
                    a.isCancelError(j) ? (v.Profiler.stop("updateUser"),
                    [2]) : [4, i.call(this._prefs.set, {
                        loginDate: 0
                    })];
                case 43:
                    return e.sent(),
                    [4, i.put(c.updateConnection({
                        authDegradation: !0
                    }))];
                case 44:
                    return e.sent(),
                    [4, i.call(this._telemetry.fetchUserFail, F, j.body, j.statusCode)];
                case 45:
                    return e.sent(),
                    E.warn("Update user failed. Message: ", j),
                    L ? [4, i.call(this._prefs.get, "user")] : [3, 48];
                case 46:
                    return R = e.sent(),
                    [4, i.put(p.setUser(R || d.defaultUser))];
                case 47:
                    e.sent(),
                    e.label = 48;
                case 48:
                    return [3, 49];
                case 49:
                    return v.Profiler.stop("updateUser"),
                    [2]
                }
            })
        }
        ,
        e.prototype.getMimic = function(e) {
            var t;
            return r(this, function(n) {
                switch (n.label) {
                case 0:
                    return n.trys.push([0, 2, , 4]),
                    [4, i.call(g.fetchMimic, e)];
                case 1:
                    return [2, n.sent()];
                case 2:
                    return t = n.sent(),
                    E.warn("DAPI SERVICE | fetch mimic fail. Message: ", t.message),
                    [4, i.call(this._telemetry.fetchMimicFail, t.body, t.statusCode)];
                case 3:
                    return n.sent(),
                    [2, {}];
                case 4:
                    return [2]
                }
            })
        }
        ,
        e.prototype.getStats = function() {
            var e;
            return r(this, function(t) {
                switch (t.label) {
                case 0:
                    return t.trys.push([0, 2, , 4]),
                    [4, i.call(g.fetchStats)];
                case 1:
                    return [2, t.sent()];
                case 2:
                    return e = t.sent(),
                    E.warn("DAPI SERVICE | fetch stats fail. Message: ", e.message),
                    [4, i.call(this._telemetry.fetchStatsFail, e.body, e.statusCode)];
                case 3:
                    return t.sent(),
                    [2, {}];
                case 4:
                    return [2]
                }
            })
        }
        ,
        e.prototype.getGrauthFromCookie = function() {
            var e;
            return r(this, function(t) {
                switch (t.label) {
                case 0:
                    return t.trys.push([0, 2, , 4]),
                    [4, i.call(this._cookiesHelper.getToken)];
                case 1:
                    return [2, t.sent()];
                case 2:
                    return e = t.sent(),
                    E.warn("AUTH SERVICE | fetch cookie fail. Message: ", e.message),
                    [4, i.call(this._telemetry.fetchCookieFail)];
                case 3:
                    return t.sent(),
                    [2, "bad_cookie"];
                case 4:
                    return [2]
                }
            })
        }
        ,
        e.prototype.trackCookieHeaderSize = function() {
            var e, t, n, o, a, c;
            return r(this, function(r) {
                switch (r.label) {
                case 0:
                    return r.trys.push([0, 4, , 5]),
                    [4, i.call(this._cookiesHelper.getAllGrammarlyCookies)];
                case 1:
                    return e = r.sent(),
                    (t = e.reduce(function(e, t) {
                        return e + t.value.length
                    }, 0)) > g.MAX_COOKIE_HEADER_LENGTH ? (n = e.reduce(function(e, t) {
                        return e.value.length > t.value.length ? e : t
                    }, {
                        name: "",
                        value: ""
                    }),
                    o = n.name,
                    a = n.value.length,
                    [4, i.call(y.fire, "cookie-overflow", t, {
                        name: o,
                        length: a
                    })]) : [3, 3];
                case 2:
                    r.sent(),
                    r.label = 3;
                case 3:
                    return [3, 5];
                case 4:
                    return c = r.sent(),
                    E.warn("fetch grammarly cookies fail. Message: ", c.message),
                    [3, 5];
                case 5:
                    return [2]
                }
            })
        }
        ,
        e.prototype.externalUpdateUser = function(e, t, n) {
            return r(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, i.call([this, this.updateUser], {
                        lazy: t,
                        reason: n
                    })];
                case 1:
                    return e.sent(),
                    [2]
                }
            })
        }
        ,
        e.prototype.authRequest = function(e, t, n, o, a) {
            var c, s;
            return r(this, function(e) {
                switch (e.label) {
                case 0:
                    return e.trys.push([0, 4, , 6]),
                    [4, i.call(g.authRequestHelper, t, n)];
                case 1:
                    return c = e.sent(),
                    [4, i.call([this, this.updateUser], {
                        reason: a
                    })];
                case 2:
                    return e.sent(),
                    [4, i.call([y.gnar, "signin" === a ? y.gnar.signInFormSuccess : y.gnar.signUpFormSuccess], o)];
                case 3:
                    return e.sent(),
                    [2, c];
                case 4:
                    return s = e.sent(),
                    E.warn("auth error", s),
                    [4, i.call([y.gnar, "signin" === a ? y.gnar.signInFormFail : y.gnar.signUpFormFail], o)];
                case 5:
                    return e.sent(),
                    [2, {
                        error: s.message || s.body
                    }];
                case 6:
                    return [2]
                }
            })
        }
        ,
        e.prototype.logoutUser = function() {
            var e, t;
            return r(this, function(n) {
                switch (n.label) {
                case 0:
                    return n.trys.push([0, 3, , 5]),
                    [4, i.call(g.authRequestHelper, w.URLS.authLogout)];
                case 1:
                    return e = n.sent(),
                    [4, i.call([y.gnar, y.gnar.logoutFormSuccess])];
                case 2:
                    return n.sent(),
                    [2, e];
                case 3:
                    return t = n.sent(),
                    E.warn("auth error", t),
                    [4, i.call([y.gnar, y.gnar.logoutFormFail])];
                case 4:
                    return n.sent(),
                    [2, {
                        error: t.message || t.body
                    }];
                case 5:
                    return [2]
                }
            })
        }
        ,
        e.prototype.listenCookieChanges = function() {
            var e, t;
            return r(this, function(n) {
                switch (n.label) {
                case 0:
                    return [4, i.call(g.createCookieChannel, this._cookiesHelper.watchToken)];
                case 1:
                    e = n.sent(),
                    n.label = 2;
                case 2:
                    return [4, i.call(e.take)];
                case 3:
                    return n.sent(),
                    t ? [4, i.cancel(t)] : [3, 5];
                case 4:
                    n.sent(),
                    n.label = 5;
                case 5:
                    return [4, i.fork([this, this.cookieChange])];
                case 6:
                    return t = n.sent(),
                    [3, 2];
                case 7:
                    return [2]
                }
            })
        }
        ,
        e.prototype.updateGroups = function() {
            var e, t, n;
            return r(this, function(r) {
                switch (r.label) {
                case 0:
                    return [4, i.call(this._getContainerIdOrUndefined)];
                case 1:
                    return e = r.sent(),
                    [4, i.call([this, this.getMimic], e)];
                case 2:
                    return t = r.sent(),
                    [4, i.call(b.UserExperiments.create, t.groups, o.getGlobal().systemInfo.os)];
                case 3:
                    return n = r.sent(),
                    [4, i.put(p.setGroups({
                        mimic: t,
                        experiments: n
                    }))];
                case 4:
                    return r.sent(),
                    [2]
                }
            })
        }
        ,
        e.prototype.cookieChange = function() {
            var e, t, n;
            return r(this, function(r) {
                switch (r.label) {
                case 0:
                    return r.trys.push([0, 6, , 8]),
                    [4, i.call(m.delay, g.LOGIN_BY_COOKIE_CHANGE_TIMEOUT)];
                case 1:
                    return r.sent(),
                    [4, i.call([this, this.getGrauthFromCookie])];
                case 2:
                    return e = r.sent(),
                    [4, i.select(h.current)];
                case 3:
                    return t = r.sent().grauth,
                    e === t ? [3, 5] : [4, i.put(p.sessionInvalidate("cookieChange"))];
                case 4:
                    r.sent(),
                    r.label = 5;
                case 5:
                    return [3, 8];
                case 6:
                    return n = r.sent(),
                    [4, i.call(this._telemetry.frequentCookieChanges, a.isCancelError(n))];
                case 7:
                    return r.sent(),
                    [3, 8];
                case 8:
                    return [2]
                }
            })
        }
        ,
        e.prototype.storeLoginReminderInfo = function(e) {
            var n, o, a, c;
            return r(this, function(r) {
                switch (r.label) {
                case 0:
                    return [4, i.call(this._prefs.get, t.SERIALIZED_USER_INFO_PROP_NAME)];
                case 1:
                    return n = r.sent(),
                    o = e.type.toLowerCase(),
                    a = !(!n || n.type !== o),
                    !1 !== e.anonymous || !1 !== a ? [3, 3] : (c = {
                        type: o
                    },
                    [4, i.call(this._prefs.set, {
                        serializedUserInfo: c
                    })]);
                case 2:
                    r.sent(),
                    r.label = 3;
                case 3:
                    return [2]
                }
            })
        }
        ,
        e.prototype.checkReminderNotification = function(e) {
            var n, o, a, c, s;
            return r(this, function(r) {
                switch (r.label) {
                case 0:
                    return n = !0 === e.anonymous,
                    [4, i.select(l.getLoginReminderDisabled)];
                case 1:
                    return o = r.sent(),
                    [4, i.select(l.getShowLoginReminder)];
                case 2:
                    return (a = r.sent()) && !1 === n ? [4, i.put(f.hideLoginReminder())] : [3, 4];
                case 3:
                    r.sent(),
                    r.label = 4;
                case 4:
                    return !1 === n || o ? [2] : [4, i.call(this._prefs.get, t.SERIALIZED_USER_INFO_PROP_NAME)];
                case 5:
                    return c = r.sent(),
                    [4, i.select(l.getOnboardingShowed)];
                case 6:
                    return s = r.sent(),
                    !c || !0 !== s || a ? [3, 10] : [4, i.put(f.showLoginReminder(c.type))];
                case 7:
                    return r.sent(),
                    [4, i.call([y.gnar, y.gnar.loginReminderBadgeShow])];
                case 8:
                    return r.sent(),
                    [4, i.call(this._telemetry.loginReminderBadgeShow)];
                case 9:
                    r.sent(),
                    r.label = 10;
                case 10:
                    return [2]
                }
            })
        }
        ,
        e
    }();
    t.UserSagas = S
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.current = function(e) {
        return e.settings
    }
    ,
    t.getUserId = function(e) {
        return e.user.id
    }
    ,
    t.getUserAnonymous = function(e) {
        return e.user.anonymous
    }
    ,
    t.getUserExperiments = function(e) {
        return e.user.experiments
    }
    ,
    t.getDapiProp = function(e, t) {
        return e.settings.common[t]
    }
    ,
    t.getLoginReminderType = function(e) {
        return e.settings.common.loginReminderType
    }
    ,
    t.getShowLoginReminder = function(e) {
        return e.settings.common.showLoginReminder
    }
    ,
    t.getLoginReminderDisabled = function(e) {
        return !0 === e.settings.common.loginReminderDisabled
    }
    ,
    t.getOnboardingShowed = function(e) {
        return !1 === e.settings.common.showOnboarding
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(135);
    t.isValid = function(e) {
        if (e && e.pageConfig && Object.keys(e).length && Object.keys(e.pageConfig).length && (!e.protocolVersion || e.protocolVersion === r.PROTOCOL_VERSION))
            return !0
    }
    ,
    t.getInterval = function(e) {
        return r.PAGE_CONFIG_UPDATE_INTERVALS.includes(e) ? e : r.PAGE_CONFIG_DEFAULT_INTERVAL
    }
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    n(133),
    n(3).LogConfig.configure({
        edge: !1,
        prodCs: !1
    }),
    n(10).initGlobal("chrome", "bg");
    var r = n(318)
      , o = n(56);
    n(275).bgPreload();
    var i = r.createApi();
    o.initBackgroundPageExtensionApi(i);
    var a = n(1285)
      , c = n(1321);
    n(1322),
    a.startBgPage(c.GnarSpec, i)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1286);
    t.startBgPage = r.startBgPage
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    }
      , o = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    n(1287);
    var i = n(10);
    "chrome" === i.getGlobal().bundleInfo.browser && (window.fetch = void 0,
    n(1288));
    var a = n(1289)
      , c = n(4)
      , s = n(14)
      , u = n(165)
      , l = n(338)
      , f = n(17)
      , p = n(1290)
      , d = n(56)
      , h = n(1295)
      , g = n(1296)
      , m = n(1297)
      , v = n(1044)
      , b = n(1299)
      , y = n(437)
      , _ = n(1302)
      , w = n(18)
      , E = n(299)
      , S = n(13)
      , I = n(1003)
      , k = n(667)
      , O = n(510)
      , A = n(436)
      , C = n(496)
      , x = n(1303)
      , P = n(13)
      , T = n(1310)
      , N = n(1311)
      , j = n(49)
      , R = n(3)
      , M = n(165)
      , D = n(1314)
      , L = n(1315)
      , F = n(1317)
      , U = n(0)
      , B = R.Logger.create("lib.bg.bg")
      , G = "bg_start_timer"
      , W = new I.Profiler
      , V = d.getBackgoundPageExtensionApi()
      , H = new k.CookiesHelper(V);
    function z(e) {
        if (w.isFF()) {
            var t = e.preferences;
            return B.trace("Migrating preferences data..."),
            t.ensureMigrationCompleted().then(function(e) {
                B.trace("Preferences data migration successful!"),
                e === d.StorageMigrationResult.success && s.felog.storageMigrationSucceeded()
            }, function(e) {
                B.error("XXX Preferences migration failed"),
                s.felog.storageMigrationFailed(e)
            })
        }
        return Promise.resolve()
    }
    function q(e, t, n, i) {
        return r(this, void 0, void 0, function() {
            var u, l, p;
            return o(this, function(d) {
                switch (d.label) {
                case 0:
                    return u = f.getVersion(),
                    [4, e.get("version")];
                case 1:
                    return l = d.sent(),
                    u === l ? [2] : [4, e.set("version", u)];
                case 2:
                    return d.sent(),
                    [4, e.get("version")];
                case 3:
                    return d.sent() !== u ? [2] : l ? [3, 6] : [4, function(e, t, n) {
                        return r(this, void 0, void 0, function() {
                            var i;
                            return o(this, function(a) {
                                switch (a.label) {
                                case 0:
                                    _.loadContentScripts(V, t),
                                    i = "unknown",
                                    a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]),
                                    [4, function() {
                                        return r(this, void 0, void 0, function() {
                                            var e;
                                            return o(this, function(t) {
                                                switch (t.label) {
                                                case 0:
                                                    return c.isSafari() || c.isEdge() ? [2, "webstore"] : [4, H.getInstallSource()];
                                                case 1:
                                                    return null === (e = t.sent()) ? [2, "webstore"] : "funnel" === e.value ? [2, "funnel"] : "blog" === e.value ? [2, "blog"] : "editor" === e.value ? [2, "editor"] : [2, "webstore"]
                                                }
                                            })
                                        })
                                    }()];
                                case 2:
                                    return i = a.sent(),
                                    [3, 4];
                                case 3:
                                    return a.sent(),
                                    s.felog.cannotGetInstallSource(),
                                    [3, 4];
                                case 4:
                                    return u = i,
                                    s.felog.extensionInstall(i),
                                    M.gnar.install(u),
                                    [4, e.get("enableWelcomePageForQA")];
                                case 5:
                                    return a.sent(),
                                    [4, function(e) {
                                        return r(this, void 0, void 0, function() {
                                            var t, n, r, i;
                                            return o(this, function(o) {
                                                switch (o.label) {
                                                case 0:
                                                    return c.isChrome() && e ? [2] : [4, H.getChromeStoreInstallUTM()];
                                                case 1:
                                                    return t = o.sent(),
                                                    n = !!t && "true" === t.value,
                                                    r = c.isChrome() ? j.getExtensionSuccessURL(n) : j.getAfterInstallURL(e),
                                                    i = V.tabs,
                                                    [2, e ? i.updateCurrent(r) : i.open(r, !0)]
                                                }
                                            })
                                        })
                                    }("funnel" === i)];
                                case 6:
                                    a.sent(),
                                    a.label = 7;
                                case 7:
                                    return n(),
                                    [2]
                                }
                                var u
                            })
                        })
                    }(e, t, i)];
                case 4:
                    return d.sent(),
                    [4, e.set("enabledDefs", !1)];
                case 5:
                    return d.sent(),
                    n(),
                    [3, 10];
                case 6:
                    return s.felog.extensionUpdated(u, l),
                    M.gnar.update(l),
                    [4, e.get("enabledDefs")];
                case 7:
                    return p = d.sent(),
                    a(p) ? [3, 9] : [4, e.set("enabledDefs", !0)];
                case 8:
                    d.sent(),
                    d.label = 9;
                case 9:
                    try {
                        u.split(".")[0] !== l.split(".")[0] && h.update(V, t.toReload)
                    } catch (e) {
                        s.felog.extensionUpdateFail(l)
                    }
                    d.label = 10;
                case 10:
                    return [2]
                }
            })
        })
    }
    t.startBgPage = function(e, t, a) {
        void 0 === a && (a = !1),
        E.timers.start(G);
        var d = t.message;
        if ("background-message-api" !== d.kind)
            throw new Error('Unexpected message API kind "' + d.kind + '"');
        (function(e, t, n) {
            return r(this, void 0, void 0, function() {
                var a, d, h, w, I, k, j, R, M, D, V, Y, K, Z, J, Q, X, $, ee;
                return o(this, function(te) {
                    switch (te.label) {
                    case 0:
                        return te.trys.push([0, 3, , 4]),
                        "firefox" === i.getGlobal().bundleInfo.browser && new Date < new Date(2019,1,11) ? [4, H.deleteGnarContainerIdCookie()] : [3, 2];
                    case 1:
                        te.sent(),
                        te.label = 2;
                    case 2:
                        return [3, 4];
                    case 3:
                        return a = te.sent(),
                        B.warn("failed to delete gnarContainerId cookie", a),
                        [3, 4];
                    case 4:
                        return d = new y.PrefsImpl(t.preferences),
                        h = new T.DapiImpl(O.fetch),
                        w = function() {
                            return W.track(u.initBg, e)
                        }
                        ,
                        I = "firefox" === i.getGlobal().bundleInfo.browser,
                        [4, z(t)];
                    case 5:
                        return te.sent(),
                        k = new g.ConnectionSagas(d,S.emitTabs,s.felog,A.isIncognito,A.getNextPingDate,t.management,w,I),
                        j = function() {
                            return null
                        }
                        ,
                        R = new x.PageConfigImpl(d,function() {
                            return j()
                        }
                        ,function() {
                            return t.fetchBlacklistConfig()
                        }
                        ),
                        D = function(e) {
                            M && M.reconnectAll(e)
                        }
                        ,
                        V = new L.DynamicConfigSagas(d),
                        Y = new m.SettingsSagas(d,h,D,S.emitFocusedTab),
                        K = new b.TabsSagas(k,S.emitTo,S.emitFocusedTab,t,R,n),
                        Z = new v.UserSagas(Y,d,s.felog,H,l.getContainerIdOrUndefined,D),
                        J = new C.StoreControllerImpl(V,Z,Y,K,k,R),
                        j = function() {
                            return J.store.getState().user
                        }
                        ,
                        Q = new C.AuthSagaRunners(J,Z,H),
                        X = new C.TabsSagaRunner(J,K),
                        F.CsToBgRpcServer.create(Q),
                        t.initOAuth && t.initOAuth(function() {
                            Q.refreshUser(!1, "oauth")
                        }),
                        t.initUserInfoReporter && ($ = new U.Observable(function(e) {
                            return J.store.subscribe(function() {
                                e.next(J.store.getState().user)
                            })
                        }
                        ),
                        t.initUserInfoReporter($)),
                        !1 === I && w(),
                        ee = new N.FakeCapi,
                        M = new N.BackgroundSocketManager(s.felog,function() {
                            return J.store.getState().connection
                        }
                        ,J.actions.updateConnection,Q.refreshUser,H.getToken,P,ee),
                        W.track(function() {
                            return p.api(J.store, Q, J.actions, d, M.getLog, ee, t, X)
                        }),
                        [4, W.trackAsync(J.initStore)];
                    case 6:
                        return te.sent(),
                        c.isSafariApp() ? [3, 8] : [4, W.trackAsync(q, d, R, J.actions.seenNews, J.actions.showOnboarding)];
                    case 7:
                        te.sent(),
                        te.label = 8;
                    case 8:
                        return W.track(function() {
                            return _.loadContentScripts(t, R, f.GRAMMARLY_DOMAIN)
                        }),
                        W.track(function() {
                            return _.loadProxy(t, R)
                        }),
                        (ne = E.timers.stop(G)) > 3e4 && s.felog.bgPageInitTimeout(ne),
                        [4, function(e) {
                            return r(this, void 0, void 0, function() {
                                var t;
                                return o(this, function(n) {
                                    switch (n.label) {
                                    case 0:
                                        return [4, e.get("bgInitFail")];
                                    case 1:
                                        return (t = n.sent()) ? (s.felog.bgPageInitFail(t),
                                        [4, e.set("bgInitFail", 0)]) : [2];
                                    case 2:
                                        return n.sent(),
                                        [2]
                                    }
                                })
                            })
                        }(d)];
                    case 9:
                        return te.sent(),
                        [2]
                    }
                    var ne
                })
            })
        }
        )(e, t, a).then(function(e) {
            t.sendReady && t.sendReady()
        }).catch(function(e) {
            s.felog.bgPageStartFail(e && e.message, e && e.stack),
            B.error("bg page start fail", e)
        }),
        _.setupForcedUpdate(),
        "prod" !== i.getGlobal().bundleInfo.env && "qa" === i.getGlobal().bundleInfo.env && n(1320).startSendingBgLogsToActiveTab(),
        D.initIFrameCommunicationProxy(B)
    }
    ,
    t.runPrefsMigrations = z
}
, function(e, t) {
    window.IS_BG = !0
}
, function(e, t) {
    !function() {
        "use strict";
        if (!self.fetch) {
            o.prototype.append = function(e, t) {
                e = n(e),
                t = r(t);
                var o = this.map[e];
                o || (o = [],
                this.map[e] = o),
                o.push(t)
            }
            ,
            o.prototype.delete = function(e) {
                delete this.map[n(e)]
            }
            ,
            o.prototype.get = function(e) {
                var t = this.map[n(e)];
                return t ? t[0] : null
            }
            ,
            o.prototype.getAll = function(e) {
                return this.map[n(e)] || []
            }
            ,
            o.prototype.has = function(e) {
                return this.map.hasOwnProperty(n(e))
            }
            ,
            o.prototype.set = function(e, t) {
                this.map[n(e)] = [r(t)]
            }
            ,
            o.prototype.forEach = function(e, t) {
                Object.getOwnPropertyNames(this.map).forEach(function(n) {
                    this.map[n].forEach(function(r) {
                        e.call(t, r, n, this)
                    }, this)
                }, this)
            }
            ;
            var e = {
                blob: "FileReader"in self && "Blob"in self && function() {
                    try {
                        return new Blob,
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                formData: "FormData"in self
            }
              , t = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            s.call(u.prototype),
            s.call(f.prototype),
            self.Headers = o,
            self.Request = u,
            self.Response = f,
            self.fetch = function(t, n) {
                var r;
                return r = u.prototype.isPrototypeOf(t) && !n ? t : new u(t,n),
                new Promise(function(t, n) {
                    var i = new XMLHttpRequest;
                    i.onload = function() {
                        var e = 1223 === i.status ? 204 : i.status;
                        if (e < 100 || e > 599)
                            n(new TypeError("Network request failed"));
                        else {
                            var r, a, c = {
                                status: e,
                                statusText: i.statusText,
                                headers: (r = i,
                                a = new o,
                                r.getAllResponseHeaders().trim().split("\n").forEach(function(e) {
                                    var t = e.trim().split(":")
                                      , n = t.shift().trim()
                                      , r = t.join(":").trim();
                                    a.append(n, r)
                                }),
                                a),
                                url: "responseURL"in i ? i.responseURL : /^X-Request-URL:/m.test(i.getAllResponseHeaders()) ? i.getResponseHeader("X-Request-URL") : void 0
                            }, s = "response"in i ? i.response : i.responseText;
                            t(new f(s,c))
                        }
                    }
                    ,
                    i.onerror = function() {
                        n(new TypeError("Network request failed"))
                    }
                    ,
                    i.open(r.method, r.url, !0),
                    "include" === r.credentials && (i.withCredentials = !0),
                    "responseType"in i && e.blob && (i.responseType = "blob"),
                    r.headers.forEach(function(e, t) {
                        i.setRequestHeader(t, e)
                    }),
                    i.send(void 0 === r._bodyInit ? null : r._bodyInit)
                }
                )
            }
            ,
            self.fetch.polyfill = !0
        }
        function n(e) {
            if ("string" != typeof e && (e = e.toString()),
            /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))
                throw new TypeError("Invalid character in header field name");
            return e.toLowerCase()
        }
        function r(e) {
            return "string" != typeof e && (e = e.toString()),
            e
        }
        function o(e) {
            this.map = {},
            e instanceof o ? e.forEach(function(e, t) {
                this.append(t, e)
            }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                this.append(t, e[t])
            }, this)
        }
        function i(e) {
            if (e.bodyUsed)
                return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0
        }
        function a(e) {
            return new Promise(function(t, n) {
                e.onload = function() {
                    t(e.result)
                }
                ,
                e.onerror = function() {
                    n(e.error)
                }
            }
            )
        }
        function c(e) {
            var t = new FileReader;
            return t.readAsArrayBuffer(e),
            a(t)
        }
        function s() {
            return this.bodyUsed = !1,
            this._initBody = function(t) {
                if (this._bodyInit = t,
                "string" == typeof t)
                    this._bodyText = t;
                else if (e.blob && Blob.prototype.isPrototypeOf(t))
                    this._bodyBlob = t;
                else if (e.formData && FormData.prototype.isPrototypeOf(t))
                    this._bodyFormData = t;
                else {
                    if (t)
                        throw new Error("unsupported BodyInit type");
                    this._bodyText = ""
                }
            }
            ,
            e.blob ? (this.blob = function() {
                var e = i(this);
                if (e)
                    return e;
                if (this._bodyBlob)
                    return Promise.resolve(this._bodyBlob);
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }
            ,
            this.arrayBuffer = function() {
                return this.blob().then(c)
            }
            ,
            this.text = function() {
                var e, t, n = i(this);
                if (n)
                    return n;
                if (this._bodyBlob)
                    return e = this._bodyBlob,
                    (t = new FileReader).readAsText(e),
                    a(t);
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }
            ) : this.text = function() {
                var e = i(this);
                return e || Promise.resolve(this._bodyText)
            }
            ,
            e.formData && (this.formData = function() {
                return this.text().then(l)
            }
            ),
            this.json = function() {
                return this.text().then(JSON.parse)
            }
            ,
            this
        }
        function u(e, n) {
            var r, i;
            if (n = n || {},
            this.url = e,
            this.credentials = n.credentials || "omit",
            this.headers = new o(n.headers),
            this.method = (r = n.method || "GET",
            i = r.toUpperCase(),
            t.indexOf(i) > -1 ? i : r),
            this.mode = n.mode || null,
            this.referrer = null,
            ("GET" === this.method || "HEAD" === this.method) && n.body)
                throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n.body)
        }
        function l(e) {
            var t = new FormData;
            return e.trim().split("&").forEach(function(e) {
                if (e) {
                    var n = e.split("=")
                      , r = n.shift().replace(/\+/g, " ")
                      , o = n.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(r), decodeURIComponent(o))
                }
            }),
            t
        }
        function f(e, t) {
            t || (t = {}),
            this._initBody(e),
            this.type = "default",
            this.url = null,
            this.status = t.status,
            this.ok = this.status >= 200 && this.status < 300,
            this.statusText = t.statusText,
            this.headers = t.headers instanceof o ? t.headers : new o(t.headers),
            this.url = t.url || ""
        }
    }()
}
, function(e, t, n) {
    var r = n(21)
      , o = n(15)
      , i = "[object Boolean]";
    e.exports = function(e) {
        return !0 === e || !1 === e || o(e) && r(e) == i
    }
}
, function(e, t, n) {
    "use strict";
    this && this.__assign;
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    }
      , o = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    n(295),
    n(1001);
    var i = n(13)
      , a = n(14)
      , c = n(4)
      , s = n(1292)
      , u = n(338)
      , l = (n(383),
    n(24),
    n(1044))
      , f = n(3)
      , p = n(17)
      , d = n(510)
      , h = f.Logger.create("lib.bg.api");
    function g(e, t, n, i, s, f, g, m) {
        var v, b = this, y = g.tabs, _ = (g.management,
        (v = {
            dispatch: e.dispatch,
            signin: function(e, n) {
                return t.signin(e).then(n)
            },
            signup: function(e, n) {
                return t.signup(e).then(n)
            }
        })["create-document"] = function(e) {
            var t = c.getBrowser();
            return d.fetch(p.URLS.docsApi, {
                data: {
                    content: e
                },
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "X-API-Version": "1",
                    "X-Client-Type": "extension_" + t
                }
            }).then(function(e) {
                var t, n = e.id;
                return t = n,
                y.open(p.URLS.docs + "/" + t, !0)
            }).catch(function(e) {
                return h.error("request failed", e)
            })
        }
        ,
        v["get-containerIdOrUndefined"] = function(e, t) {
            u.getContainerIdOrUndefined().then(t)
        }
        ,
        v["content-script-inited"] = function() {
            m.sendStateToTabs()
        }
        ,
        v["external:changed-plan"] = function() {
            a.felog.externalChangePlan(),
            n.sessionInvalidate("changed-plan")
        }
        ,
        v["external:changed-dialect"] = function() {
            a.felog.externalChangeDialect(),
            n.sessionInvalidate("changed-dialect")
        }
        ,
        v["external:changed-user"] = function() {
            a.felog.externalChangeUser(),
            n.sessionInvalidate("changed-user"),
            c.isChrome() && n.setGdocsEnabledSetting()
        }
        ,
        v["external:editor-fix"] = function() {
            n.incFixed()
        }
        ,
        v["external:cleanup"] = function() {
            return r(b, void 0, void 0, function() {
                var e, t;
                return o(this, function(r) {
                    switch (r.label) {
                    case 0:
                        return a.felog.externalLogout(),
                        e = ["extensionSettings", "extensionInstallDate", "version", l.SERIALIZED_USER_INFO_PROP_NAME],
                        [4, i.get(e)];
                    case 1:
                        return t = r.sent(),
                        i.clearAll(),
                        [4, i.set(e.reduce(function(e, n) {
                            var r;
                            return Object.assign({}, e, ((r = {})[n] = t[n],
                            r))
                        }, {
                            enabledDefs: !1
                        }))];
                    case 2:
                        return r.sent(),
                        n.sessionInvalidate("logout"),
                        [2]
                    }
                })
            })
        }
        ,
        v);
        return _
    }
    t.api = function(e, t, n, r, o, a, c, u) {
        var l = g(e, t, n, r, o, a, c, u);
        Object.keys(l).forEach(function(e) {
            return i.on(e, l[e])
        }),
        s.Offline(function() {
            return n.updateConnection({
                networkOffline: !1
            })
        }, function() {
            return n.updateConnection({
                networkOffline: !0
            })
        })
    }
    ,
    t.initAPI = g
}
, function(e, t, n) {
    (function(t) {
        var n, r;
        r = function() {
            return function e(t, r, o) {
                function i(c, s) {
                    if (!r[c]) {
                        if (!t[c]) {
                            if (!s && ("function" == typeof n && n))
                                return n(c, !0);
                            if (a)
                                return a(c, !0);
                            var u = new Error("Cannot find module '" + c + "'");
                            throw u.code = "MODULE_NOT_FOUND",
                            u
                        }
                        var l = r[c] = {
                            exports: {}
                        };
                        t[c][0].call(l.exports, function(e) {
                            var n = t[c][1][e];
                            return i(n || e)
                        }, l, l.exports, e, t, r, o)
                    }
                    return r[c].exports
                }
                for (var a = "function" == typeof n && n, c = 0; c < o.length; c++)
                    i(o[c]);
                return i
            }({
                1: [function(e, n, r) {
                    (function(e) {
                        "use strict";
                        var t, r, o = e.MutationObserver || e.WebKitMutationObserver;
                        if (o) {
                            var i = 0
                              , a = new o(l)
                              , c = e.document.createTextNode("");
                            a.observe(c, {
                                characterData: !0
                            }),
                            t = function() {
                                c.data = i = ++i % 2
                            }
                        } else if (e.setImmediate || void 0 === e.MessageChannel)
                            t = "document"in e && "onreadystatechange"in e.document.createElement("script") ? function() {
                                var t = e.document.createElement("script");
                                t.onreadystatechange = function() {
                                    l(),
                                    t.onreadystatechange = null,
                                    t.parentNode.removeChild(t),
                                    t = null
                                }
                                ,
                                e.document.documentElement.appendChild(t)
                            }
                            : function() {
                                setTimeout(l, 0)
                            }
                            ;
                        else {
                            var s = new e.MessageChannel;
                            s.port1.onmessage = l,
                            t = function() {
                                s.port2.postMessage(0)
                            }
                        }
                        var u = [];
                        function l() {
                            var e, t;
                            r = !0;
                            for (var n = u.length; n; ) {
                                for (t = u,
                                u = [],
                                e = -1; ++e < n; )
                                    t[e]();
                                n = u.length
                            }
                            r = !1
                        }
                        n.exports = function(e) {
                            1 !== u.push(e) || r || t()
                        }
                    }
                    ).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }
                , {}],
                2: [function(e, t, n) {
                    "use strict";
                    var r = e(1);
                    function o() {}
                    var i = {}
                      , a = ["REJECTED"]
                      , c = ["FULFILLED"]
                      , s = ["PENDING"];
                    function u(e) {
                        if ("function" != typeof e)
                            throw new TypeError("resolver must be a function");
                        this.state = s,
                        this.queue = [],
                        this.outcome = void 0,
                        e !== o && d(this, e)
                    }
                    function l(e, t, n) {
                        this.promise = e,
                        "function" == typeof t && (this.onFulfilled = t,
                        this.callFulfilled = this.otherCallFulfilled),
                        "function" == typeof n && (this.onRejected = n,
                        this.callRejected = this.otherCallRejected)
                    }
                    function f(e, t, n) {
                        r(function() {
                            var r;
                            try {
                                r = t(n)
                            } catch (t) {
                                return i.reject(e, t)
                            }
                            r === e ? i.reject(e, new TypeError("Cannot resolve promise with itself")) : i.resolve(e, r)
                        })
                    }
                    function p(e) {
                        var t = e && e.then;
                        if (e && ("object" == typeof e || "function" == typeof e) && "function" == typeof t)
                            return function() {
                                t.apply(e, arguments)
                            }
                    }
                    function d(e, t) {
                        var n = !1;
                        function r(t) {
                            n || (n = !0,
                            i.reject(e, t))
                        }
                        function o(t) {
                            n || (n = !0,
                            i.resolve(e, t))
                        }
                        var a = h(function() {
                            t(o, r)
                        });
                        "error" === a.status && r(a.value)
                    }
                    function h(e, t) {
                        var n = {};
                        try {
                            n.value = e(t),
                            n.status = "success"
                        } catch (e) {
                            n.status = "error",
                            n.value = e
                        }
                        return n
                    }
                    t.exports = u,
                    u.prototype.catch = function(e) {
                        return this.then(null, e)
                    }
                    ,
                    u.prototype.then = function(e, t) {
                        if ("function" != typeof e && this.state === c || "function" != typeof t && this.state === a)
                            return this;
                        var n = new this.constructor(o);
                        this.state !== s ? f(n, this.state === c ? e : t, this.outcome) : this.queue.push(new l(n,e,t));
                        return n
                    }
                    ,
                    l.prototype.callFulfilled = function(e) {
                        i.resolve(this.promise, e)
                    }
                    ,
                    l.prototype.otherCallFulfilled = function(e) {
                        f(this.promise, this.onFulfilled, e)
                    }
                    ,
                    l.prototype.callRejected = function(e) {
                        i.reject(this.promise, e)
                    }
                    ,
                    l.prototype.otherCallRejected = function(e) {
                        f(this.promise, this.onRejected, e)
                    }
                    ,
                    i.resolve = function(e, t) {
                        var n = h(p, t);
                        if ("error" === n.status)
                            return i.reject(e, n.value);
                        var r = n.value;
                        if (r)
                            d(e, r);
                        else {
                            e.state = c,
                            e.outcome = t;
                            for (var o = -1, a = e.queue.length; ++o < a; )
                                e.queue[o].callFulfilled(t)
                        }
                        return e
                    }
                    ,
                    i.reject = function(e, t) {
                        e.state = a,
                        e.outcome = t;
                        for (var n = -1, r = e.queue.length; ++n < r; )
                            e.queue[n].callRejected(t);
                        return e
                    }
                    ,
                    u.resolve = function(e) {
                        if (e instanceof this)
                            return e;
                        return i.resolve(new this(o), e)
                    }
                    ,
                    u.reject = function(e) {
                        var t = new this(o);
                        return i.reject(t, e)
                    }
                    ,
                    u.all = function(e) {
                        var t = this;
                        if ("[object Array]" !== Object.prototype.toString.call(e))
                            return this.reject(new TypeError("must be an array"));
                        var n = e.length
                          , r = !1;
                        if (!n)
                            return this.resolve([]);
                        var a = new Array(n)
                          , c = 0
                          , s = -1
                          , u = new this(o);
                        for (; ++s < n; )
                            l(e[s], s);
                        return u;
                        function l(e, o) {
                            t.resolve(e).then(function(e) {
                                a[o] = e,
                                ++c !== n || r || (r = !0,
                                i.resolve(u, a))
                            }, function(e) {
                                r || (r = !0,
                                i.reject(u, e))
                            })
                        }
                    }
                    ,
                    u.race = function(e) {
                        var t = this;
                        if ("[object Array]" !== Object.prototype.toString.call(e))
                            return this.reject(new TypeError("must be an array"));
                        var n = e.length
                          , r = !1;
                        if (!n)
                            return this.resolve([]);
                        var a = -1
                          , c = new this(o);
                        for (; ++a < n; )
                            s = e[a],
                            t.resolve(s).then(function(e) {
                                r || (r = !0,
                                i.resolve(c, e))
                            }, function(e) {
                                r || (r = !0,
                                i.reject(c, e))
                            });
                        var s;
                        return c
                    }
                }
                , {
                    1: 1
                }],
                3: [function(e, n, r) {
                    (function(t) {
                        "use strict";
                        "function" != typeof t.Promise && (t.Promise = e(2))
                    }
                    ).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }
                , {
                    2: 2
                }],
                4: [function(e, t, n) {
                    "use strict";
                    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                    ;
                    var o = function() {
                        try {
                            if ("undefined" != typeof indexedDB)
                                return indexedDB;
                            if ("undefined" != typeof webkitIndexedDB)
                                return webkitIndexedDB;
                            if ("undefined" != typeof mozIndexedDB)
                                return mozIndexedDB;
                            if ("undefined" != typeof OIndexedDB)
                                return OIndexedDB;
                            if ("undefined" != typeof msIndexedDB)
                                return msIndexedDB
                        } catch (e) {
                            return
                        }
                    }();
                    function i(e, t) {
                        e = e || [],
                        t = t || {};
                        try {
                            return new Blob(e,t)
                        } catch (o) {
                            if ("TypeError" !== o.name)
                                throw o;
                            for (var n = new ("undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder), r = 0; r < e.length; r += 1)
                                n.append(e[r]);
                            return n.getBlob(t.type)
                        }
                    }
                    "undefined" == typeof Promise && e(3);
                    var a = Promise;
                    function c(e, t) {
                        t && e.then(function(e) {
                            t(null, e)
                        }, function(e) {
                            t(e)
                        })
                    }
                    function s(e, t, n) {
                        "function" == typeof t && e.then(t),
                        "function" == typeof n && e.catch(n)
                    }
                    function u(e) {
                        return "string" != typeof e && (console.warn(e + " used as a key, but it is not a string."),
                        e = String(e)),
                        e
                    }
                    var l, f, p = "local-forage-detect-blob-support", d = Object.prototype.toString, h = "readonly", g = "readwrite";
                    function m(e) {
                        return "boolean" == typeof l ? a.resolve(l) : (t = e,
                        new a(function(e) {
                            var n = t.transaction(p, g)
                              , r = i([""]);
                            n.objectStore(p).put(r, "key"),
                            n.onabort = function(t) {
                                t.preventDefault(),
                                t.stopPropagation(),
                                e(!1)
                            }
                            ,
                            n.oncomplete = function() {
                                var t = navigator.userAgent.match(/Chrome\/(\d+)/)
                                  , n = navigator.userAgent.match(/Edge\//);
                                e(n || !t || parseInt(t[1], 10) >= 43)
                            }
                        }
                        ).catch(function() {
                            return !1
                        })).then(function(e) {
                            return l = e
                        });
                        var t
                    }
                    function v(e) {
                        var t = f[e.name]
                          , n = {};
                        n.promise = new a(function(e) {
                            n.resolve = e
                        }
                        ),
                        t.deferredOperations.push(n),
                        t.dbReady ? t.dbReady = t.dbReady.then(function() {
                            return n.promise
                        }) : t.dbReady = n.promise
                    }
                    function b(e, t) {
                        return new a(function(n, r) {
                            if (e.db) {
                                if (!t)
                                    return n(e.db);
                                v(e),
                                e.db.close()
                            }
                            var i = [e.name];
                            t && i.push(e.version);
                            var a = o.open.apply(o, i);
                            t && (a.onupgradeneeded = function(t) {
                                var n = a.result;
                                try {
                                    n.createObjectStore(e.storeName),
                                    t.oldVersion <= 1 && n.createObjectStore(p)
                                } catch (n) {
                                    if ("ConstraintError" !== n.name)
                                        throw n;
                                    console.warn('The database "' + e.name + '" has been upgraded from version ' + t.oldVersion + " to version " + t.newVersion + ', but the storage "' + e.storeName + '" already exists.')
                                }
                            }
                            ),
                            a.onerror = function(e) {
                                e.preventDefault(),
                                r(a.error)
                            }
                            ,
                            a.onsuccess = function() {
                                var t;
                                n(a.result),
                                (t = f[e.name].deferredOperations.pop()) && t.resolve()
                            }
                        }
                        )
                    }
                    function y(e) {
                        return i([function(e) {
                            for (var t = e.length, n = new ArrayBuffer(t), r = new Uint8Array(n), o = 0; o < t; o++)
                                r[o] = e.charCodeAt(o);
                            return n
                        }(atob(e.data))], {
                            type: e.type
                        })
                    }
                    function _(e) {
                        return e && e.__local_forage_encoded_blob
                    }
                    function w(e) {
                        var t = this
                          , n = t._initReady().then(function() {
                            var e = f[t._dbInfo.name];
                            if (e && e.dbReady)
                                return e.dbReady
                        });
                        return s(n, e, e),
                        n
                    }
                    function E(e) {
                        v(e);
                        for (var t = f[e.name].forages, n = 0; n < t.length; n++)
                            t[n]._dbInfo.db && (t[n]._dbInfo.db.close(),
                            t[n]._dbInfo.db = null);
                        return b(e, !1).then(function(e) {
                            for (var n = 0; n < t.length; n++)
                                t[n]._dbInfo.db = e
                        }).catch(function(t) {
                            var n, r;
                            throw n = t,
                            (r = f[e.name].deferredOperations.pop()) && r.reject(n),
                            t
                        })
                    }
                    function S(e, t, n) {
                        try {
                            var r = e.db.transaction(e.storeName, t);
                            n(null, r)
                        } catch (r) {
                            if (!e.db || "InvalidStateError" === r.name)
                                return E(e).then(function() {
                                    var r = e.db.transaction(e.storeName, t);
                                    n(null, r)
                                });
                            n(r)
                        }
                    }
                    var I = {
                        _driver: "asyncStorage",
                        _initStorage: function(e) {
                            var t = this
                              , n = {
                                db: null
                            };
                            if (e)
                                for (var r in e)
                                    n[r] = e[r];
                            f || (f = {});
                            var o = f[n.name];
                            o || (o = {
                                forages: [],
                                db: null,
                                dbReady: null,
                                deferredOperations: []
                            },
                            f[n.name] = o),
                            o.forages.push(t),
                            t._initReady || (t._initReady = t.ready,
                            t.ready = w);
                            var i = [];
                            function c() {
                                return a.resolve()
                            }
                            for (var s = 0; s < o.forages.length; s++) {
                                var u = o.forages[s];
                                u !== t && i.push(u._initReady().catch(c))
                            }
                            var l = o.forages.slice(0);
                            return a.all(i).then(function() {
                                return n.db = o.db,
                                b(n, !1)
                            }).then(function(e) {
                                return n.db = e,
                                function(e, t) {
                                    if (!e.db)
                                        return !0;
                                    var n = !e.db.objectStoreNames.contains(e.storeName)
                                      , r = e.version < e.db.version
                                      , o = e.version > e.db.version;
                                    if (r && (e.version !== t && console.warn('The database "' + e.name + "\" can't be downgraded from version " + e.db.version + " to version " + e.version + "."),
                                    e.version = e.db.version),
                                    o || n) {
                                        if (n) {
                                            var i = e.db.version + 1;
                                            i > e.version && (e.version = i)
                                        }
                                        return !0
                                    }
                                    return !1
                                }(n, t._defaultConfig.version) ? b(n, !0) : e
                            }).then(function(e) {
                                n.db = o.db = e,
                                t._dbInfo = n;
                                for (var r = 0; r < l.length; r++) {
                                    var i = l[r];
                                    i !== t && (i._dbInfo.db = n.db,
                                    i._dbInfo.version = n.version)
                                }
                            })
                        },
                        _support: function() {
                            try {
                                if (!o)
                                    return !1;
                                var e = "undefined" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform)
                                  , t = "function" == typeof fetch && -1 !== fetch.toString().indexOf("[native code");
                                return (!e || t) && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange
                            } catch (e) {
                                return !1
                            }
                        }(),
                        iterate: function(e, t) {
                            var n = this
                              , r = new a(function(t, r) {
                                n.ready().then(function() {
                                    S(n._dbInfo, h, function(o, i) {
                                        if (o)
                                            return r(o);
                                        try {
                                            var a = i.objectStore(n._dbInfo.storeName).openCursor()
                                              , c = 1;
                                            a.onsuccess = function() {
                                                var n = a.result;
                                                if (n) {
                                                    var r = n.value;
                                                    _(r) && (r = y(r));
                                                    var o = e(r, n.key, c++);
                                                    void 0 !== o ? t(o) : n.continue()
                                                } else
                                                    t()
                                            }
                                            ,
                                            a.onerror = function() {
                                                r(a.error)
                                            }
                                        } catch (e) {
                                            r(e)
                                        }
                                    })
                                }).catch(r)
                            }
                            );
                            return c(r, t),
                            r
                        },
                        getItem: function(e, t) {
                            var n = this;
                            e = u(e);
                            var r = new a(function(t, r) {
                                n.ready().then(function() {
                                    S(n._dbInfo, h, function(o, i) {
                                        if (o)
                                            return r(o);
                                        try {
                                            var a = i.objectStore(n._dbInfo.storeName).get(e);
                                            a.onsuccess = function() {
                                                var e = a.result;
                                                void 0 === e && (e = null),
                                                _(e) && (e = y(e)),
                                                t(e)
                                            }
                                            ,
                                            a.onerror = function() {
                                                r(a.error)
                                            }
                                        } catch (e) {
                                            r(e)
                                        }
                                    })
                                }).catch(r)
                            }
                            );
                            return c(r, t),
                            r
                        },
                        setItem: function(e, t, n) {
                            var r = this;
                            e = u(e);
                            var o = new a(function(n, o) {
                                var i;
                                r.ready().then(function() {
                                    return i = r._dbInfo,
                                    "[object Blob]" === d.call(t) ? m(i.db).then(function(e) {
                                        return e ? t : (n = t,
                                        new a(function(e, t) {
                                            var r = new FileReader;
                                            r.onerror = t,
                                            r.onloadend = function(t) {
                                                var r = btoa(t.target.result || "");
                                                e({
                                                    __local_forage_encoded_blob: !0,
                                                    data: r,
                                                    type: n.type
                                                })
                                            }
                                            ,
                                            r.readAsBinaryString(n)
                                        }
                                        ));
                                        var n
                                    }) : t
                                }).then(function(t) {
                                    S(r._dbInfo, g, function(i, a) {
                                        if (i)
                                            return o(i);
                                        try {
                                            var c = a.objectStore(r._dbInfo.storeName);
                                            null === t && (t = void 0);
                                            var s = c.put(t, e);
                                            a.oncomplete = function() {
                                                void 0 === t && (t = null),
                                                n(t)
                                            }
                                            ,
                                            a.onabort = a.onerror = function() {
                                                var e = s.error ? s.error : s.transaction.error;
                                                o(e)
                                            }
                                        } catch (e) {
                                            o(e)
                                        }
                                    })
                                }).catch(o)
                            }
                            );
                            return c(o, n),
                            o
                        },
                        removeItem: function(e, t) {
                            var n = this;
                            e = u(e);
                            var r = new a(function(t, r) {
                                n.ready().then(function() {
                                    S(n._dbInfo, g, function(o, i) {
                                        if (o)
                                            return r(o);
                                        try {
                                            var a = i.objectStore(n._dbInfo.storeName).delete(e);
                                            i.oncomplete = function() {
                                                t()
                                            }
                                            ,
                                            i.onerror = function() {
                                                r(a.error)
                                            }
                                            ,
                                            i.onabort = function() {
                                                var e = a.error ? a.error : a.transaction.error;
                                                r(e)
                                            }
                                        } catch (e) {
                                            r(e)
                                        }
                                    })
                                }).catch(r)
                            }
                            );
                            return c(r, t),
                            r
                        },
                        clear: function(e) {
                            var t = this
                              , n = new a(function(e, n) {
                                t.ready().then(function() {
                                    S(t._dbInfo, g, function(r, o) {
                                        if (r)
                                            return n(r);
                                        try {
                                            var i = o.objectStore(t._dbInfo.storeName).clear();
                                            o.oncomplete = function() {
                                                e()
                                            }
                                            ,
                                            o.onabort = o.onerror = function() {
                                                var e = i.error ? i.error : i.transaction.error;
                                                n(e)
                                            }
                                        } catch (e) {
                                            n(e)
                                        }
                                    })
                                }).catch(n)
                            }
                            );
                            return c(n, e),
                            n
                        },
                        length: function(e) {
                            var t = this
                              , n = new a(function(e, n) {
                                t.ready().then(function() {
                                    S(t._dbInfo, h, function(r, o) {
                                        if (r)
                                            return n(r);
                                        try {
                                            var i = o.objectStore(t._dbInfo.storeName).count();
                                            i.onsuccess = function() {
                                                e(i.result)
                                            }
                                            ,
                                            i.onerror = function() {
                                                n(i.error)
                                            }
                                        } catch (e) {
                                            n(e)
                                        }
                                    })
                                }).catch(n)
                            }
                            );
                            return c(n, e),
                            n
                        },
                        key: function(e, t) {
                            var n = this
                              , r = new a(function(t, r) {
                                e < 0 ? t(null) : n.ready().then(function() {
                                    S(n._dbInfo, h, function(o, i) {
                                        if (o)
                                            return r(o);
                                        try {
                                            var a = i.objectStore(n._dbInfo.storeName)
                                              , c = !1
                                              , s = a.openCursor();
                                            s.onsuccess = function() {
                                                var n = s.result;
                                                n ? 0 === e ? t(n.key) : c ? t(n.key) : (c = !0,
                                                n.advance(e)) : t(null)
                                            }
                                            ,
                                            s.onerror = function() {
                                                r(s.error)
                                            }
                                        } catch (e) {
                                            r(e)
                                        }
                                    })
                                }).catch(r)
                            }
                            );
                            return c(r, t),
                            r
                        },
                        keys: function(e) {
                            var t = this
                              , n = new a(function(e, n) {
                                t.ready().then(function() {
                                    S(t._dbInfo, h, function(r, o) {
                                        if (r)
                                            return n(r);
                                        try {
                                            var i = o.objectStore(t._dbInfo.storeName).openCursor()
                                              , a = [];
                                            i.onsuccess = function() {
                                                var t = i.result;
                                                t ? (a.push(t.key),
                                                t.continue()) : e(a)
                                            }
                                            ,
                                            i.onerror = function() {
                                                n(i.error)
                                            }
                                        } catch (e) {
                                            n(e)
                                        }
                                    })
                                }).catch(n)
                            }
                            );
                            return c(n, e),
                            n
                        }
                    };
                    var k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
                      , O = "~~local_forage_type~"
                      , A = /^~~local_forage_type~([^~]+)~/
                      , C = "__lfsc__:"
                      , x = C.length
                      , P = "arbf"
                      , T = "blob"
                      , N = "si08"
                      , j = "ui08"
                      , R = "uic8"
                      , M = "si16"
                      , D = "si32"
                      , L = "ur16"
                      , F = "ui32"
                      , U = "fl32"
                      , B = "fl64"
                      , G = x + P.length
                      , W = Object.prototype.toString;
                    function V(e) {
                        var t, n, r, o, i, a = .75 * e.length, c = e.length, s = 0;
                        "=" === e[e.length - 1] && (a--,
                        "=" === e[e.length - 2] && a--);
                        var u = new ArrayBuffer(a)
                          , l = new Uint8Array(u);
                        for (t = 0; t < c; t += 4)
                            n = k.indexOf(e[t]),
                            r = k.indexOf(e[t + 1]),
                            o = k.indexOf(e[t + 2]),
                            i = k.indexOf(e[t + 3]),
                            l[s++] = n << 2 | r >> 4,
                            l[s++] = (15 & r) << 4 | o >> 2,
                            l[s++] = (3 & o) << 6 | 63 & i;
                        return u
                    }
                    function H(e) {
                        var t, n = new Uint8Array(e), r = "";
                        for (t = 0; t < n.length; t += 3)
                            r += k[n[t] >> 2],
                            r += k[(3 & n[t]) << 4 | n[t + 1] >> 4],
                            r += k[(15 & n[t + 1]) << 2 | n[t + 2] >> 6],
                            r += k[63 & n[t + 2]];
                        return n.length % 3 == 2 ? r = r.substring(0, r.length - 1) + "=" : n.length % 3 == 1 && (r = r.substring(0, r.length - 2) + "=="),
                        r
                    }
                    var z = {
                        serialize: function(e, t) {
                            var n = "";
                            if (e && (n = W.call(e)),
                            e && ("[object ArrayBuffer]" === n || e.buffer && "[object ArrayBuffer]" === W.call(e.buffer))) {
                                var r, o = C;
                                e instanceof ArrayBuffer ? (r = e,
                                o += P) : (r = e.buffer,
                                "[object Int8Array]" === n ? o += N : "[object Uint8Array]" === n ? o += j : "[object Uint8ClampedArray]" === n ? o += R : "[object Int16Array]" === n ? o += M : "[object Uint16Array]" === n ? o += L : "[object Int32Array]" === n ? o += D : "[object Uint32Array]" === n ? o += F : "[object Float32Array]" === n ? o += U : "[object Float64Array]" === n ? o += B : t(new Error("Failed to get type for BinaryArray"))),
                                t(o + H(r))
                            } else if ("[object Blob]" === n) {
                                var i = new FileReader;
                                i.onload = function() {
                                    var n = O + e.type + "~" + H(this.result);
                                    t(C + T + n)
                                }
                                ,
                                i.readAsArrayBuffer(e)
                            } else
                                try {
                                    t(JSON.stringify(e))
                                } catch (n) {
                                    console.error("Couldn't convert value into a JSON string: ", e),
                                    t(null, n)
                                }
                        },
                        deserialize: function(e) {
                            if (e.substring(0, x) !== C)
                                return JSON.parse(e);
                            var t, n = e.substring(G), r = e.substring(x, G);
                            if (r === T && A.test(n)) {
                                var o = n.match(A);
                                t = o[1],
                                n = n.substring(o[0].length)
                            }
                            var a = V(n);
                            switch (r) {
                            case P:
                                return a;
                            case T:
                                return i([a], {
                                    type: t
                                });
                            case N:
                                return new Int8Array(a);
                            case j:
                                return new Uint8Array(a);
                            case R:
                                return new Uint8ClampedArray(a);
                            case M:
                                return new Int16Array(a);
                            case L:
                                return new Uint16Array(a);
                            case D:
                                return new Int32Array(a);
                            case F:
                                return new Uint32Array(a);
                            case U:
                                return new Float32Array(a);
                            case B:
                                return new Float64Array(a);
                            default:
                                throw new Error("Unkown type: " + r)
                            }
                        },
                        stringToBuffer: V,
                        bufferToString: H
                    };
                    var q = {
                        _driver: "webSQLStorage",
                        _initStorage: function(e) {
                            var t = this
                              , n = {
                                db: null
                            };
                            if (e)
                                for (var r in e)
                                    n[r] = "string" != typeof e[r] ? e[r].toString() : e[r];
                            var o = new a(function(e, r) {
                                try {
                                    n.db = openDatabase(n.name, String(n.version), n.description, n.size)
                                } catch (e) {
                                    return r(e)
                                }
                                n.db.transaction(function(o) {
                                    o.executeSql("CREATE TABLE IF NOT EXISTS " + n.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], function() {
                                        t._dbInfo = n,
                                        e()
                                    }, function(e, t) {
                                        r(t)
                                    })
                                })
                            }
                            );
                            return n.serializer = z,
                            o
                        },
                        _support: "function" == typeof openDatabase,
                        iterate: function(e, t) {
                            var n = this
                              , r = new a(function(t, r) {
                                n.ready().then(function() {
                                    var o = n._dbInfo;
                                    o.db.transaction(function(n) {
                                        n.executeSql("SELECT * FROM " + o.storeName, [], function(n, r) {
                                            for (var i = r.rows, a = i.length, c = 0; c < a; c++) {
                                                var s = i.item(c)
                                                  , u = s.value;
                                                if (u && (u = o.serializer.deserialize(u)),
                                                void 0 !== (u = e(u, s.key, c + 1)))
                                                    return void t(u)
                                            }
                                            t()
                                        }, function(e, t) {
                                            r(t)
                                        })
                                    })
                                }).catch(r)
                            }
                            );
                            return c(r, t),
                            r
                        },
                        getItem: function(e, t) {
                            var n = this;
                            e = u(e);
                            var r = new a(function(t, r) {
                                n.ready().then(function() {
                                    var o = n._dbInfo;
                                    o.db.transaction(function(n) {
                                        n.executeSql("SELECT * FROM " + o.storeName + " WHERE key = ? LIMIT 1", [e], function(e, n) {
                                            var r = n.rows.length ? n.rows.item(0).value : null;
                                            r && (r = o.serializer.deserialize(r)),
                                            t(r)
                                        }, function(e, t) {
                                            r(t)
                                        })
                                    })
                                }).catch(r)
                            }
                            );
                            return c(r, t),
                            r
                        },
                        setItem: function(e, t, n) {
                            return function e(t, n, r, o) {
                                var i = this;
                                t = u(t);
                                var s = new a(function(a, c) {
                                    i.ready().then(function() {
                                        void 0 === n && (n = null);
                                        var s = n
                                          , u = i._dbInfo;
                                        u.serializer.serialize(n, function(n, l) {
                                            l ? c(l) : u.db.transaction(function(e) {
                                                e.executeSql("INSERT OR REPLACE INTO " + u.storeName + " (key, value) VALUES (?, ?)", [t, n], function() {
                                                    a(s)
                                                }, function(e, t) {
                                                    c(t)
                                                })
                                            }, function(n) {
                                                if (n.code === n.QUOTA_ERR) {
                                                    if (o > 0)
                                                        return void a(e.apply(i, [t, s, r, o - 1]));
                                                    c(n)
                                                }
                                            })
                                        })
                                    }).catch(c)
                                }
                                );
                                return c(s, r),
                                s
                            }
                            .apply(this, [e, t, n, 1])
                        },
                        removeItem: function(e, t) {
                            var n = this;
                            e = u(e);
                            var r = new a(function(t, r) {
                                n.ready().then(function() {
                                    var o = n._dbInfo;
                                    o.db.transaction(function(n) {
                                        n.executeSql("DELETE FROM " + o.storeName + " WHERE key = ?", [e], function() {
                                            t()
                                        }, function(e, t) {
                                            r(t)
                                        })
                                    })
                                }).catch(r)
                            }
                            );
                            return c(r, t),
                            r
                        },
                        clear: function(e) {
                            var t = this
                              , n = new a(function(e, n) {
                                t.ready().then(function() {
                                    var r = t._dbInfo;
                                    r.db.transaction(function(t) {
                                        t.executeSql("DELETE FROM " + r.storeName, [], function() {
                                            e()
                                        }, function(e, t) {
                                            n(t)
                                        })
                                    })
                                }).catch(n)
                            }
                            );
                            return c(n, e),
                            n
                        },
                        length: function(e) {
                            var t = this
                              , n = new a(function(e, n) {
                                t.ready().then(function() {
                                    var r = t._dbInfo;
                                    r.db.transaction(function(t) {
                                        t.executeSql("SELECT COUNT(key) as c FROM " + r.storeName, [], function(t, n) {
                                            var r = n.rows.item(0).c;
                                            e(r)
                                        }, function(e, t) {
                                            n(t)
                                        })
                                    })
                                }).catch(n)
                            }
                            );
                            return c(n, e),
                            n
                        },
                        key: function(e, t) {
                            var n = this
                              , r = new a(function(t, r) {
                                n.ready().then(function() {
                                    var o = n._dbInfo;
                                    o.db.transaction(function(n) {
                                        n.executeSql("SELECT key FROM " + o.storeName + " WHERE id = ? LIMIT 1", [e + 1], function(e, n) {
                                            var r = n.rows.length ? n.rows.item(0).key : null;
                                            t(r)
                                        }, function(e, t) {
                                            r(t)
                                        })
                                    })
                                }).catch(r)
                            }
                            );
                            return c(r, t),
                            r
                        },
                        keys: function(e) {
                            var t = this
                              , n = new a(function(e, n) {
                                t.ready().then(function() {
                                    var r = t._dbInfo;
                                    r.db.transaction(function(t) {
                                        t.executeSql("SELECT key FROM " + r.storeName, [], function(t, n) {
                                            for (var r = [], o = 0; o < n.rows.length; o++)
                                                r.push(n.rows.item(o).key);
                                            e(r)
                                        }, function(e, t) {
                                            n(t)
                                        })
                                    })
                                }).catch(n)
                            }
                            );
                            return c(n, e),
                            n
                        }
                    };
                    function Y() {
                        return !function() {
                            var e = "_localforage_support_test";
                            try {
                                return localStorage.setItem(e, !0),
                                localStorage.removeItem(e),
                                !1
                            } catch (e) {
                                return !0
                            }
                        }() || localStorage.length > 0
                    }
                    var K = {
                        _driver: "localStorageWrapper",
                        _initStorage: function(e) {
                            var t = {};
                            if (e)
                                for (var n in e)
                                    t[n] = e[n];
                            return t.keyPrefix = t.name + "/",
                            t.storeName !== this._defaultConfig.storeName && (t.keyPrefix += t.storeName + "/"),
                            Y() ? (this._dbInfo = t,
                            t.serializer = z,
                            a.resolve()) : a.reject()
                        },
                        _support: function() {
                            try {
                                return "undefined" != typeof localStorage && "setItem"in localStorage && "function" == typeof localStorage.setItem
                            } catch (e) {
                                return !1
                            }
                        }(),
                        iterate: function(e, t) {
                            var n = this
                              , r = n.ready().then(function() {
                                for (var t = n._dbInfo, r = t.keyPrefix, o = r.length, i = localStorage.length, a = 1, c = 0; c < i; c++) {
                                    var s = localStorage.key(c);
                                    if (0 === s.indexOf(r)) {
                                        var u = localStorage.getItem(s);
                                        if (u && (u = t.serializer.deserialize(u)),
                                        void 0 !== (u = e(u, s.substring(o), a++)))
                                            return u
                                    }
                                }
                            });
                            return c(r, t),
                            r
                        },
                        getItem: function(e, t) {
                            var n = this;
                            e = u(e);
                            var r = n.ready().then(function() {
                                var t = n._dbInfo
                                  , r = localStorage.getItem(t.keyPrefix + e);
                                return r && (r = t.serializer.deserialize(r)),
                                r
                            });
                            return c(r, t),
                            r
                        },
                        setItem: function(e, t, n) {
                            var r = this;
                            e = u(e);
                            var o = r.ready().then(function() {
                                void 0 === t && (t = null);
                                var n = t;
                                return new a(function(o, i) {
                                    var a = r._dbInfo;
                                    a.serializer.serialize(t, function(t, r) {
                                        if (r)
                                            i(r);
                                        else
                                            try {
                                                localStorage.setItem(a.keyPrefix + e, t),
                                                o(n)
                                            } catch (e) {
                                                "QuotaExceededError" !== e.name && "NS_ERROR_DOM_QUOTA_REACHED" !== e.name || i(e),
                                                i(e)
                                            }
                                    })
                                }
                                )
                            });
                            return c(o, n),
                            o
                        },
                        removeItem: function(e, t) {
                            var n = this;
                            e = u(e);
                            var r = n.ready().then(function() {
                                var t = n._dbInfo;
                                localStorage.removeItem(t.keyPrefix + e)
                            });
                            return c(r, t),
                            r
                        },
                        clear: function(e) {
                            var t = this
                              , n = t.ready().then(function() {
                                for (var e = t._dbInfo.keyPrefix, n = localStorage.length - 1; n >= 0; n--) {
                                    var r = localStorage.key(n);
                                    0 === r.indexOf(e) && localStorage.removeItem(r)
                                }
                            });
                            return c(n, e),
                            n
                        },
                        length: function(e) {
                            var t = this.keys().then(function(e) {
                                return e.length
                            });
                            return c(t, e),
                            t
                        },
                        key: function(e, t) {
                            var n = this
                              , r = n.ready().then(function() {
                                var t, r = n._dbInfo;
                                try {
                                    t = localStorage.key(e)
                                } catch (e) {
                                    t = null
                                }
                                return t && (t = t.substring(r.keyPrefix.length)),
                                t
                            });
                            return c(r, t),
                            r
                        },
                        keys: function(e) {
                            var t = this
                              , n = t.ready().then(function() {
                                for (var e = t._dbInfo, n = localStorage.length, r = [], o = 0; o < n; o++) {
                                    var i = localStorage.key(o);
                                    0 === i.indexOf(e.keyPrefix) && r.push(i.substring(e.keyPrefix.length))
                                }
                                return r
                            });
                            return c(n, e),
                            n
                        }
                    }
                      , Z = Array.isArray || function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    }
                      , J = {}
                      , Q = {}
                      , X = {
                        INDEXEDDB: I,
                        WEBSQL: q,
                        LOCALSTORAGE: K
                    }
                      , $ = [X.INDEXEDDB._driver, X.WEBSQL._driver, X.LOCALSTORAGE._driver]
                      , ee = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"]
                      , te = {
                        description: "",
                        driver: $.slice(),
                        name: "localforage",
                        size: 4980736,
                        storeName: "keyvaluepairs",
                        version: 1
                    };
                    function ne(e, t) {
                        e[t] = function() {
                            var n = arguments;
                            return e.ready().then(function() {
                                return e[t].apply(e, n)
                            })
                        }
                    }
                    function re() {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = arguments[e];
                            if (t)
                                for (var n in t)
                                    t.hasOwnProperty(n) && (Z(t[n]) ? arguments[0][n] = t[n].slice() : arguments[0][n] = t[n])
                        }
                        return arguments[0]
                    }
                    var oe = new (function() {
                        function e(t) {
                            for (var n in function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }(this, e),
                            X)
                                if (X.hasOwnProperty(n)) {
                                    var r = X[n]
                                      , o = r._driver;
                                    this[n] = o,
                                    J[o] || this.defineDriver(r)
                                }
                            this._defaultConfig = re({}, te),
                            this._config = re({}, this._defaultConfig, t),
                            this._driverSet = null,
                            this._initDriver = null,
                            this._ready = !1,
                            this._dbInfo = null,
                            this._wrapLibraryMethodsWithReady(),
                            this.setDriver(this._config.driver).catch(function() {})
                        }
                        return e.prototype.config = function(e) {
                            if ("object" === (void 0 === e ? "undefined" : r(e))) {
                                if (this._ready)
                                    return new Error("Can't call config() after localforage has been used.");
                                for (var t in e) {
                                    if ("storeName" === t && (e[t] = e[t].replace(/\W/g, "_")),
                                    "version" === t && "number" != typeof e[t])
                                        return new Error("Database version must be a number.");
                                    this._config[t] = e[t]
                                }
                                return !("driver"in e && e.driver) || this.setDriver(this._config.driver)
                            }
                            return "string" == typeof e ? this._config[e] : this._config
                        }
                        ,
                        e.prototype.defineDriver = function(e, t, n) {
                            var r = new a(function(t, n) {
                                try {
                                    var r = e._driver
                                      , o = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                                    if (!e._driver)
                                        return void n(o);
                                    for (var i = ee.concat("_initStorage"), a = 0, c = i.length; a < c; a++) {
                                        var s = i[a];
                                        if (!s || !e[s] || "function" != typeof e[s])
                                            return void n(o)
                                    }
                                    var u = function(n) {
                                        J[r] && console.info("Redefining LocalForage driver: " + r),
                                        J[r] = e,
                                        Q[r] = n,
                                        t()
                                    };
                                    "_support"in e ? e._support && "function" == typeof e._support ? e._support().then(u, n) : u(!!e._support) : u(!0)
                                } catch (e) {
                                    n(e)
                                }
                            }
                            );
                            return s(r, t, n),
                            r
                        }
                        ,
                        e.prototype.driver = function() {
                            return this._driver || null
                        }
                        ,
                        e.prototype.getDriver = function(e, t, n) {
                            var r = J[e] ? a.resolve(J[e]) : a.reject(new Error("Driver not found."));
                            return s(r, t, n),
                            r
                        }
                        ,
                        e.prototype.getSerializer = function(e) {
                            var t = a.resolve(z);
                            return s(t, e),
                            t
                        }
                        ,
                        e.prototype.ready = function(e) {
                            var t = this
                              , n = t._driverSet.then(function() {
                                return null === t._ready && (t._ready = t._initDriver()),
                                t._ready
                            });
                            return s(n, e, e),
                            n
                        }
                        ,
                        e.prototype.setDriver = function(e, t, n) {
                            var r = this;
                            Z(e) || (e = [e]);
                            var o = this._getSupportedDrivers(e);
                            function i() {
                                r._config.driver = r.driver()
                            }
                            function c(e) {
                                return r._extend(e),
                                i(),
                                r._ready = r._initStorage(r._config),
                                r._ready
                            }
                            var u = null !== this._driverSet ? this._driverSet.catch(function() {
                                return a.resolve()
                            }) : a.resolve();
                            return this._driverSet = u.then(function() {
                                var e = o[0];
                                return r._dbInfo = null,
                                r._ready = null,
                                r.getDriver(e).then(function(e) {
                                    var t;
                                    r._driver = e._driver,
                                    i(),
                                    r._wrapLibraryMethodsWithReady(),
                                    r._initDriver = (t = o,
                                    function() {
                                        var e = 0;
                                        return function n() {
                                            for (; e < t.length; ) {
                                                var o = t[e];
                                                return e++,
                                                r._dbInfo = null,
                                                r._ready = null,
                                                r.getDriver(o).then(c).catch(n)
                                            }
                                            i();
                                            var s = new Error("No available storage method found.");
                                            return r._driverSet = a.reject(s),
                                            r._driverSet
                                        }()
                                    }
                                    )
                                })
                            }).catch(function() {
                                i();
                                var e = new Error("No available storage method found.");
                                return r._driverSet = a.reject(e),
                                r._driverSet
                            }),
                            s(this._driverSet, t, n),
                            this._driverSet
                        }
                        ,
                        e.prototype.supports = function(e) {
                            return !!Q[e]
                        }
                        ,
                        e.prototype._extend = function(e) {
                            re(this, e)
                        }
                        ,
                        e.prototype._getSupportedDrivers = function(e) {
                            for (var t = [], n = 0, r = e.length; n < r; n++) {
                                var o = e[n];
                                this.supports(o) && t.push(o)
                            }
                            return t
                        }
                        ,
                        e.prototype._wrapLibraryMethodsWithReady = function() {
                            for (var e = 0, t = ee.length; e < t; e++)
                                ne(this, ee[e])
                        }
                        ,
                        e.prototype.createInstance = function(t) {
                            return new e(t)
                        }
                        ,
                        e
                    }());
                    t.exports = oe
                }
                , {
                    3: 3
                }]
            }, {}, [4])(4)
        }
        ,
        e.exports = r()
    }
    ).call(t, n(33))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(162);
    t.Offline = function(e, t, n) {
        return void 0 === n && (n = window),
        r.listen(n, {
            online: e,
            offline: t
        }),
        {
            stop: function() {
                return r.unlisten(n, {
                    online: e,
                    offline: t
                })
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.current = function(e) {
        return e.user
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__assign || function() {
        return (r = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(510)
      , i = n(454)
      , a = n(17)
      , c = n(4)
      , s = 30 * c.MINUTE;
    t.LOGIN_BY_COOKIE_CHANGE_TIMEOUT = 20 * c.SECOND,
    t.MAX_COOKIE_HEADER_LENGTH = 7168,
    t.fetchUser = function(e) {
        var t = {
            method: "post",
            query: !0,
            data: Object.assign({
                app: c.getBrowser() + "Ext"
            }, e ? {
                containerId: e
            } : {}),
            csrfMayBeEmpty: !0
        };
        return o.fetch(a.URLS.userOrAnonymous, t)
    }
    ,
    t.isItTimeToRefresh = function(e) {
        return !e || Date.now() - new Date(e).getTime() > s
    }
    ,
    t.fetchMimic = function(e) {
        var t = {
            data: r({
                originalUri: "",
                newUser: !1
            }, e ? {
                containerId: e
            } : {}),
            method: "post",
            headers: {
                "Content-Type": "application/json"
            }
        };
        return o.fetch(a.URLS.dapiMimic, t)
    }
    ,
    t.fetchStats = function() {
        return o.fetch(a.URLS.dapiFindProps, {
            data: {
                regex: "STAT:.*"
            },
            method: "post",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    ,
    t.prepareUser = function(e, t, n, r) {
        void 0 === e && (e = {}),
        void 0 === t && (t = {}),
        void 0 === n && (n = {}),
        r = r || "empty";
        var o = t.groups || []
          , c = t.settings || {};
        e.token = e.grauth,
        e.premium = "Premium" === e.type,
        e.experiments = i.UserExperiments.create(o);
        var s = parseInt(n["STAT:feedback_ACCEPT"], 10) || 0;
        return e.fixed_errors = isNaN(s) ? 0 : s,
        a.userFields.reduce(function(t, n) {
            var r, o = e[n];
            return void 0 !== o && Object.assign(t, ((r = {})[n] = o,
            r)),
            t
        }, {
            mimic: o,
            settings: c,
            grauth: r
        })
    }
    ,
    t.authRequestHelper = function(e, t) {
        return o.fetch(e, {
            body: JSON.stringify(t),
            headers: {
                "Content-Type": "application/json"
            },
            method: "post"
        })
    }
    ,
    t.createCookieChannel = function(e) {
        var t = c.createChannel();
        return e(t.put),
        t
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    }
      , o = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(14)
      , a = n(139);
    t.update = function(e, t) {
        return r(this, void 0, void 0, function() {
            var n, c, s, u, l, f = this;
            return o(this, function(p) {
                switch (p.label) {
                case 0:
                    switch (n = e.notification,
                    c = e.tabs,
                    n.kind) {
                    case "web-extension":
                        return [3, 1];
                    case "safari":
                        return [3, 3]
                    }
                    return [3, 4];
                case 1:
                    if ("web-extension" !== c.kind)
                        throw new Error('Unexpected tabs kind "' + c.kind + '"');
                    return [4, c.getAllTabs()];
                case 2:
                    return s = p.sent(),
                    (u = s.filter(function(e) {
                        var n = e.id
                          , r = e.url;
                        return r && t(r) && (!n || n.toString() !== a.SETTINGS_TAB_ID)
                    })).length ? (l = function() {
                        return r(f, void 0, void 0, function() {
                            return o(this, function(e) {
                                return i.felog.reloadNotificationClick(),
                                u.forEach(function(e) {
                                    var t = e.id;
                                    return c.reload(t)
                                }),
                                [2]
                            })
                        })
                    }
                    ,
                    n.create({
                        title: "Grammarly needs to be reloaded",
                        message: "While you were working, we updated Grammarly. To take advantage of these improvements, please save the text you are working on, and click here.",
                        iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAIAAAAErfB6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTgzMjhCMkQ1NjBGMTFFNDg0NjBEMENBNkVFNzA3RDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTgzMjhCMkU1NjBGMTFFNDg0NjBEMENBNkVFNzA3RDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxODMyOEIyQjU2MEYxMUU0ODQ2MEQwQ0E2RUU3MDdEOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxODMyOEIyQzU2MEYxMUU0ODQ2MEQwQ0E2RUU3MDdEOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg1zYWQAAA/kSURBVHja7J15dFNVHsfz0nRJ06ZN932FbtBSoK2AlM2hVhYZAetURWhZnBEQBIvjMIvjco6WEQVZBBmqIiCoqFSQw14KCHSl1G50pUuabiFJmzTdMr9DHY/CS0iT+5Yk93v4Q5P0vnd/n/fu/f3uvb97CY1Gw8EyX3GxCTBgLAwYCwPGwoCxMGAsDBgLA8aAsTBgLAwYCwPGwoCxMGAsDBgDxsKAsTBgLAwYCwPGwoCxMGAsDBgDxsKAsTBgLAwYCwPGwoCxMGAMGAsDxsKAsTBgLAwYCwPG0imeBda5d7C/uru1Ui5uUnY1q7paVFJpX4+sTykfUPUPDf76M2uulZDHd7KxF9kIfPgiX76Ln71LuNB7lIOXnZW1qVSWsJBddtp65T91VBVK6wu66up62oaMqDWXIIIFHhNdgieIgia7hXnYCTFgxlSlEJ9sKc5pK6+Qt1B0iQihz3SPyDk+sWGO3hgwTWpXy4815n3flF/X007bRYMF7gv84hb6x7vbCjFgqgSNcFbtxQuSskHNECM3YEVwZ3pGpYXMgAYcA0ap3PaKHVWnS+7eYcn9xDgHrAlLSnSPwICN1Y3OmvcrTrAH7X2YN0bMTXANxYANEcQ5meXZZ1pvsfw+Z3tFb4qcD1EWBqyvoIvNqs3Zefs0BLUmccMQOq8enZQWMh06aQz4IarplmQUHSqXN5vcnUcKfbeMfzbUwRMDJpeGoznccDWzLFs9NGCi3Yotl7cpan5q4BSCQ2DAv5NyQL255Ogp8U0z8PmTvce9E5Niz7PFgH/RHWXnS3n7oXE2m5AdGupd8ekB9q4YMKdIWr86P0va18MxL4lsBDvj0sZTOSRiAoDPS37eUHjAdDvdh3bJWycsmeU5xkIBn2wpfq348IBmkGO+4hFW78WmzvGJtTjAQDej+OCQBUxocgliS+xzVDBm74oOaJnh3R2yjOlqqCZUFqpsKYDBq4J+17xb5vsElYUqQ8XNHzBEROAzm6tXpUNQZag4VN+cASsH1BDvml9EpKeg4lB9MIJ5AtZwNJtLjprTaIYBguqDEcAUaFx0VtXtcMNVRkYirblW3nbOnnxnoTWfR3C5BLdvaEDRr+pQK8Squ6rBPprvB4wQ3xDybOCjZhUmwZO7KPcDerpegkNEOflOch011tk/xjnAhy/S8WNgXKUQF3TVFUrriqUN9CwGsuXyvkl8xfh5J7YABqs9fXkbDTOAgPOPfnGzPMd42jkZ8OeyfuXZ1tLjzQV5nbWoWlFtihT6fjV1nZHzx2wBvK/mwvsVJ6grH8w0z3fCkqCpY5z8ULn6n9bmfNuUR+mKg40Rc1eEzjR5wE3KrvmXtlBkKS5BJHuPWxeWHCBwQ144dNK7bp85eucaRe22nZV19rQMY9b6sALwywWfUbSuCvqwt2KeHk/xClbwHv5162vopKkofLZX9PaJS00Y8I3OmqXXdlPx4q4MnbV6dBJ4yPQEeAfqLkMv00eBk/jZpL8YvC6T+TiYiq7Xydp+T/yK9eFP0EN32C1/ITjx8JS1VCydNMZEDL/Bue0Vq27sQ1tmsMB93yOrdEc+v0rSK8vvqi25e6daIRGrpJ193T0DaqAl4Nm62ToCrdGOXrGiIHiBHHl2+hQo7etZk59ViHpIeW/CCsPW0DMM+Jkr29EuWAcn+ZOElSIbge6fAcjvGvNOiovLZHoFZjzCarLb6Cf9JiZ5RdtwHzI6BN7ihqIDFyRlaKO7I4++bGKA4TF/7uoOhAWOdfLPmvSig85XDcKbPdVns5sLf5sKrL9cbRyeD566NHga38pGx88GNINr8z+72IaS8cEpawzId2IS8NqCT8+2lqIqLVDgBl2gjncX2t7tVacO1V81fhYSMK+PeGKx/yO63+P063sQTv/9wWvsRxOXmQzgdrV85rm3UYWP4FV9k7jel6/VwbneWf36zS/FqrsIqxDnEvJu7J90XFTWr1yU+2GzqgvVWM2Fx/4+0txUxrzoY415qOiCT/RebKoOQ++pPrf8+l60dEHgnT11aes57csw4LGDENaWi2ZGB8wFRjOZMOn7pnxURS0PnTHdI5L0qyGNBl7cDyt/pGikSTHQuzb/073V57X9IMrJ95WIOQwajRnAVQoxqtz7IIH72rDHtdHNKD74HbonSdsQxweVJ98tO67tBxAfgw+M5FpgNDCdCQA+2VKMqnF+I3qRtrjljdKvUV3o4YNNdZe2lP+g7SZTAiYxZTpmAOe0lSMp53HvmEdcR5F+9Xld7ld3rtNZqf21F+GipF8hHN4aqekYANzWK0ey5w2XINaEJZF+VSpr/E/FD/RXLbM8+1pn9YOf13a3oboEmA4MyGrAP3VUISkn2Xsc6YKH/qHBv908Ytg4hvGObkbRQUW/6r6A+ICWN5sGAzIAGNU47ZKgRC2N86XbilamooMOteKFa7tv3W0c/t+absmKG3vR7uY0IgMysOgOybxpmKN3rCiQNG7ZU3Oew6igFU25sk1kI+ARVu1qObMGpBswtFd1PQg6pIX+8aSfQ2N4XwvJlKhb2g0GBDPquV8m3U10dXcrknQj0nzLAc3goforHHMXGBDMyNI+uFIuNr4Q8K38yRLjL0rKO/u6ORYg/c1IN+AmJYKR98luo0k//1FczLEM6W9GugEjmVqJdvYnbbgut1daCGD9zUg34BaV1PhCSNc2VynEcna4V6wyI92AjfctuQQRJHB/8PNSWSPHYqS/GekGLOtTGlmCq40jaTZHDbrhQPZLfzPSDVg+YGwrqi2nSIJ6Pp/N0t+MdAM2fojYnke+2q3LknLG9Tej+RyrQ38Wr0nIfADTvE0vBky3TOgsI3MGbHyykLZg18XGwXKw6W9GugELeXwjS2hXK0g/97UXWQ5g/c1IN2AnG3sjS+hSd5OugQ0WeFgOYP3NSDfgh6aFPVQajqaebIEE6QC1uUp/M9INWM+sTt26KSVJSAxx8DD+6TEV6W9Guld06Egw0V+lssYHV3QQHGKKW9iJliLqbh4uMctrzHjnQGsjslF23T4j61fSZka6ASNZIZzfVUv6eZJ3NHWAbbm8XfHp8AwZWc7ndbnGA9bfjHQ30eFCBEd03la03unpePDz6R5RjtZ8iu58eehM4+nSb0a6AY9y8OISCI6TId2VB16yhX7xFN15svc4toxdEASYkaWA7ayskcQzJ7Sk6CwLnkbRxivaJjnoFxhQ/2E7BoYqJ7oEG19IubyZdHmwF9/5mYDJVNx2iZQth1+OyIAMAEZ1sK62TK+Xwx53pWDYclvVKZbsYj0iAzIAeDIiV+WcpJR0xAP8rH9HL0Z+2w09HSlXth1vLmjtlSkGeu/7V9fTfqmtHL5lmwEZSF3xsBNGCH2MTzAc1Axllmfvikt/8KvHvMY+HzT1i/rLaO+8Sdn1WvFhHVHyzrg0qq0HpgMDsvoNvhfPRCIp54KkjDRdE/TXqCenuofTWal14ckzPaPYZjpmACM8IOit0mOk20NaEdztE5cicej0UWrglBdHPcZC0zEDOMzRO5hs6asBqu1u21Z5ivQrvpXNvoRV0wzaAXBkYyAhM/45diEtAZI7mM4EAIMW+MWhKiqrNudSe4W2sHt3/PL0kBkUHdZry+W9HZPyauQ81hqNMcAL/eNRraLScDQZRQfrtSRZcwkiI3LexwnLIURG7u8ceXTdIv8EeiwG5tKWNMtGwO62QoQuibxf9WLef3WkFkJD/cO0jFWjZiFZuiWyEbweteDrqet1jAmDy4126zUw10i3ueMwu+guLWQGwtLu9HSkX9ujYyxCwLN9JXzOmZl/A2/I4JEQP3uX1yLnn5u1+YXgRB0tkKRXtvLGJ2jnpw0zF5PnJk0QBcU4ByDcTrhKIV527eNPElbqiBTdbB3Xhz+xJizpcnvlmdZb1zqq9UnkCnXwfNQ9LMkrRh+3vFnVlX59L4F0oScYyrARQIYPxgJDo90QHBinXv1od3y6bm+TR1jN8IiCf/DfnWpFpULcqOxsVcmgqR9eQA9snKztffiiAIFrpNBXqPcsZKms8c95+6HM2V7RaA1l2B8yDDjRPQLtS8y5l1qZenXHm9GL5/qM1+f3rraOU2wdkVz6WGPem6XfDJ/t5aDfDvF6vr6JhgZ7zC983xgxF3mZygH1q0UHX7/5pWKgl55ayPqVG4u+2FxyhIqT24wxEfOAE1xD0bZmv+q7pvx5OZmUrtIaVnZz4dyLmRTtiwnGMfjIFQ5LUlc2Rc6nKPGkrVcOr/Liyx+eo+BwbRB4ailXtm0qPqT/5i8jOhAPzALGMeYOWXH6KMQeq0cnUXe03c+ypjX5WeArLQuZBp6w8Q9T/9Dg6daSz+tydXgP4t67pH/YqSUzg1RgFiOXKVrc4ZQQDSd7jxtu93QfrEGK50ZnzVnJLWiNH7ofCETJJ6ZvCvz9eXrHmwt0TDjeJ7M6nJJD7/GywwBiRYHjRUEQ44Y4eATYuzk/kA8CPlqzsqu+p71SLr55t6FIWj+iAxYhVNuTsMLr/1sSwMMBDYmefp+5HS87rEMNV94q/ZbBG4DYxp5nY03wlIPqngG18efUQXcAEY67rXD4BGL9O+B/jH3K3A6IHnZANhR+wcgh4KwSdCJbJzyPZAaMXQngUKV3YlKMb5dMWlB9MAKq+U3WZfjb82x3xadbThrZfYKKQ/XBCKgKZOMWDgH2rjvj0lAdN2RCgipDxQPI9lk1K8AgcG63TljCI6wshy5UFqqM/Cxr9m7CMstzzHuxqUgSmdgvqCZUlnQTbLMFzLm3gnBL7HNm/x5DBaGaCFeasjdMItV5yc8bCg/QNgBCf78LLTMV767JAAYVSetX52dJzW6zQvCZwatC3u+aHmDOvYOdX8rbX9MtMad4FyIitD6zCQPm3JvG31xy1DzGuZK9x70Tk4Iw3jUHwJx7Y5mHG65mlmWbbpcMne6mqPmpgVMoWotv2oCHBQ11RtEhGuYWkStS6Ltl/LN0jsWaJGDOvfnjrNqcnbdPj2j+jkHZWVmvHp2UFjKd5l1xTRXwsJqUXZnl2aQbsrBKs72iN0XOR3jIrKUAHtaNzpr3K06gXXuLSjHOARsj5hqzag4D/kW57RU7qk6zBzOgXROWlEh98qqlAB5WobQ+q/biBUkZ6Y60NAi62JmeUWkhMyZQOXxhuYCH1a6WH2vM+74pH+3BvboVLHBf4Be30D/egBxADNhAVSnEJ1uKc9rKkRwqT6oIoc90j8g5PrEjzb3HgFGqrVf+U0cVNOAFXXV1PW3GHHHLJYhggcdEl2BohCe7hY1ozxsMmA5B6Fzd3VopF0OU1azqalFJpX09sj6lfED12/OIrLlWQh7fycZeZCPw4Yt8+S4Q54QLvUc5eJnQASCWCNiihM8awoCxMGAsDBgLA8bCgLEwYCwMGAPGwoCxMGAsDBiLav1PgAEASePGMkSWuH0AAAAASUVORK5CYII=",
                        buttons: [{
                            title: "Reload",
                            iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowZDJiMWMzMi1mODMzLTQxOTgtOGVlMy05YWY1OGVmOGUzNzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjFBODMzNzYxQkREMTFFNDk0ODFGNTFFRDg1MkEzMjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkY1RjA5NjYxQkREMTFFNDk0ODFGNTFFRDg1MkEzMjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N2FmMWVkMGUtZjZkZC00YmYwLWE2MjctNTBkMjA4MjRiZDViIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBkMmIxYzMyLWY4MzMtNDE5OC04ZWUzLTlhZjU4ZWY4ZTM3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuUD9ZcAAAM8SURBVHjatJbbS1RRFIePOjqG99LSLFMzoazMFLsHQQVFl8fee+qhP6cX3+sxiG6QFV0MNCjNjAyx1MoumpmXsRnz0m/Bd2A3TNocpw0fw5lz9v7tddlr7bSWlhYvwNgqzosMcVl0JrtAyAs2FkSeKBQ7xKT4Kqb+t/CcqBD1olpsEDdFdyqF00Q+FtpvWDSLWrEeMsUqPPBRjIifbDCwcBiROrFLrBU1Yp3zzWZxju/axCMxsJTr/yacLopwZw0WWix3i5IE3+eBbSYiXovhIK42KxvESaw0i9aIHC9FI5TguRDLToszWG1jXnwQ4yKb/7N5N01Wd8KomE1GOFc0irPioCh33r0Q98Rz3H/B2ZTF84ZojUuuZYXToEocEydEJe/MymeiQ9wVXaJJHCeT7f01jlNXsq5Ow23VxLaM/79gyXUxJD7x/y/eRcVV8RArk45xLgm0X+wkuSax0iy5EzdvTNyngpm134MmVz5VyEQLREz0inbiFz++sZlFNuitRLiBs5qJG5+KB+J9gnlRYht4pDvntoSiYeOH6BP9WJ/y4VucRSnM4tlK3TvO7EqGVbNNeNRfd9B+feEMpxj4xWImBYaZ6EVCaOOVuCR6QnFdKNXDCtBRToxHVbzixng+rtKEUlSXQ3GeG/FLqS88S62NObGxKraaMCQ7MkjUSidvYpTTqCscQ9gvBHaWt1DJwgGEw9TzWtbyWHvEN86P8QRNwJp9MbttZofWed4kKWzN44jYw1pWYnu4Gk26FtvDS15OsOM6SmhVAIttzl5uo2HW7EFjyrU4QsFop/Ef4OztE5+pyUNUtAgWuCOTZCzlCJ1ibj4x7WbtPj/GvvAivn9LI6/kCJRyIShjYhvfjMYJF/L9IQSbmOtxBepkXgytP4TnaQit9NnDYpvYCBXcKPv5LsLcHFxbg3CjcwW2u9dj1hxAI+ENJEIzT8e9BbjOIwSlxGjaubqGaKt5jpW+pdanb7FmZKmrzxy99gm7m6NdVpGd5csk1TgMENfbhGjmX2+ZUY7XGHGtJ0O308WKnROxQH8epRb3IjpI64wmc71dQHSMLjVDHhRR08NOU4kiPExMO2DJC8JvAQYA0OLb9zl5D+gAAAAASUVORK5CYII="
                        }]
                    }).then(function(e) {
                        e.buttonClick.subscribe(l)
                    }),
                    [3, 5]) : [2];
                case 3:
                    return n.create({
                        title: "Grammarly needs to be reloaded",
                        message: "While you were working, we updated Grammarly. To take advantage of these improvements, please save the text you are working on, and click here."
                    }),
                    [3, 5];
                case 4:
                    throw new Error('Unsupported notification kind "${notification.kind}"');
                case 5:
                    return i.felog.reloadNotificationShow(),
                    [2]
                }
            })
        })
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
      , o = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && e[Symbol.iterator]
          , n = 0;
        return t ? t.call(e) : {
            next: function() {
                return e && n >= e.length && (e = void 0),
                {
                    value: e && e[n++],
                    done: !e
                }
            }
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(364)
      , a = n(295)
      , c = n(194)
      , s = n(1002)
      , u = n(3)
      , l = n(1)
      , f = u.Logger.create("universal.bg.state.connection.sagas")
      , p = "dataControlActive"
      , d = "dataControlAllowed"
      , h = function() {
        function e(e, t, n, r, o, i, a, c) {
            void 0 === c && (c = !1),
            this._prefs = e,
            this._emitTabs = t,
            this._telemetry = n,
            this._isIncognito = r,
            this._getNextPingDate = o,
            this._managementApi = i,
            this._initGnarClient = a,
            this._isDataControlCheckEnabled = c
        }
        return e.prototype.start = function() {
            var e;
            return r(this, function(t) {
                switch (t.label) {
                case 0:
                    return [4, a.select(s.current)];
                case 1:
                    return e = t.sent(),
                    this._isDataControlCheckEnabled && "active" === e.dataControl ? [5, o(this.checkDataControl())] : [3, 4];
                case 2:
                    return t.sent(),
                    [4, [i.takeLatest(c.t.ACCEPT_DATA_CONTROL, this.acceptDataControl.bind(this)), i.takeLatest(c.t.UNINSTALL_EXTENSION, this.uninstallExtension.bind(this))]];
                case 3:
                    return t.sent(),
                    [3, 6];
                case 4:
                    return [5, o(i.takeLatest(c.t.UPDATE_CONNECTION, this.checkOnline.bind(this)))];
                case 5:
                    t.sent(),
                    t.label = 6;
                case 6:
                    return [2]
                }
            })
        }
        ,
        e.prototype.checkDataControl = function() {
            var e, t, n;
            return r(this, function(r) {
                switch (r.label) {
                case 0:
                    return [4, a.call(this._prefs.get, p)];
                case 1:
                    return e = r.sent(),
                    [4, a.call(this._prefs.get, d)];
                case 2:
                    return t = r.sent(),
                    [4, a.call(this._prefs.get, "version")];
                case 3:
                    return n = r.sent(),
                    e && !0 !== t || !n ? [4, a.call(this._prefs.set, p, !0)] : [3, 6];
                case 4:
                    return r.sent(),
                    [4, a.put(c.activateDataControl())];
                case 5:
                    return r.sent(),
                    [3, 11];
                case 6:
                    return [4, a.call(this._initGnarClient)];
                case 7:
                    return r.sent(),
                    [4, a.call([this._telemetry, this._telemetry.enableEventsSending])];
                case 8:
                    return r.sent(),
                    [4, a.put(c.disableDataControl())];
                case 9:
                    return r.sent(),
                    [4, a.call([this, this.start])];
                case 10:
                    r.sent(),
                    r.label = 11;
                case 11:
                    return [2]
                }
            })
        }
        ,
        e.prototype.acceptDataControl = function() {
            return r(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, a.call(this._prefs.set, d, !0)];
                case 1:
                    return e.sent(),
                    [4, a.call(this._initGnarClient)];
                case 2:
                    return e.sent(),
                    [4, a.call([this._telemetry, this._telemetry.enableEventsSending])];
                case 3:
                    return e.sent(),
                    [4, a.call([this._telemetry, this._telemetry.acceptDataControl])];
                case 4:
                    return e.sent(),
                    [2]
                }
            })
        }
        ,
        e.prototype.uninstallExtension = function() {
            return r(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, a.call(this._managementApi.uninstallSelf)];
                case 1:
                    return e.sent(),
                    [2]
                }
            })
        }
        ,
        e.prototype.checkOnline = function() {
            var e, t, n, o, u;
            return r(this, function(r) {
                switch (r.label) {
                case 0:
                    return r.trys.push([0, 7, , 8]),
                    [4, a.select(s.current)];
                case 1:
                    return e = r.sent(),
                    t = e.online,
                    e.cookiesDisabled ? [4, a.fork([this, this.monitorCookiesDisable])] : [3, 3];
                case 2:
                    r.sent(),
                    r.label = 3;
                case 3:
                    return n = l.Obj.pluck(e, ["networkOffline", "bgNotConnected", "authToCapiDegradation"]),
                    o = n.every(function(e) {
                        return !e
                    }),
                    t === o ? [2] : [4, a.put(c.onlineConnection(o))];
                case 4:
                    return r.sent(),
                    o ? (f.trace("ONLINE SERVICE| reseting capi connections after offline"),
                    [4, a.call(this._emitTabs, "reset")]) : [3, 6];
                case 5:
                    r.sent(),
                    r.label = 6;
                case 6:
                    return [3, 8];
                case 7:
                    return u = r.sent(),
                    i.isCancelError(u) ? [2] : [3, 8];
                case 8:
                    return [2]
                }
            })
        }
        ,
        e.prototype.monitorIsIncognito = function() {
            return r(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, a.call(this._isIncognito)];
                case 1:
                    return e.sent() ? [4, a.call([this, this.callDaily], this._telemetry.incognitoInit)] : [3, 3];
                case 2:
                    e.sent(),
                    e.label = 3;
                case 3:
                    return [2]
                }
            })
        }
        ,
        e.prototype.monitorCookiesDisable = function() {
            return r(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, a.call([this, this.callDaily], this._telemetry.disabledCookiesInit)];
                case 1:
                    return e.sent(),
                    [2]
                }
            })
        }
        ,
        e.prototype.callDaily = function(e, t, n) {
            var o, i;
            return r(this, function(r) {
                switch (r.label) {
                case 0:
                    return [4, a.call(this._prefs.get, n)];
                case 1:
                    return !(o = r.sent()) || o < Date.now() ? [4, a.call(e, t, n)] : [3, 5];
                case 2:
                    return r.sent(),
                    [4, a.call(this._getNextPingDate)];
                case 3:
                    return i = r.sent(),
                    [4, a.call(this._prefs.set, n, i)];
                case 4:
                    r.sent(),
                    r.label = 5;
                case 5:
                    return [2]
                }
            })
        }
        ,
        e
    }();
    t.ConnectionSagas = h
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
      , o = this && this.__read || function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(364)
      , a = n(295)
      , c = n(14)
      , s = n(1)
      , u = n(4)
      , l = n(165)
      , f = n(1298)
      , p = n(294)
      , d = n(1045)
      , h = n(194)
      , g = n(1002)
      , m = n(10).getGlobal()
      , v = m.appConfig.newsVersion
      , b = m.bundleInfo.browser
      , y = function() {
        function e(e, t, n, r) {
            this._prefs = e,
            this._dapi = t,
            this._reconnectAllSockets = n,
            this._emitFocusedTab = r
        }
        return e.prototype.start = function() {
            var e;
            return r(this, function(t) {
                switch (t.label) {
                case 0:
                    return [4, a.select(g.current)];
                case 1:
                    return e = t.sent(),
                    "firefox" !== b || "active" !== e.dataControl ? [3, 3] : [4, [i.takeLatest(h.t.ACCEPT_DATA_CONTROL, this.start.bind(this)), i.takeLatest(h.t.DISABLE_DATA_CONTROL, this.start.bind(this))]];
                case 2:
                    return t.sent(),
                    [3, 5];
                case 3:
                    return [4, [i.takeEvery(p.DAPI_ACTIONS, this.saveToDapi.bind(this)), i.takeEvery(p.CACHED_ACTIONS, this.cacheSettings.bind(this)), i.takeLatest(p.t.SAVE_ANONYMOUS_PROPERTIES, this.saveAnonymousDapiProps.bind(this)), i.takeLatest(p.t.DISABLE_ON_TAB, this.disableOnTab.bind(this)), i.takeLatest(p.t.SAVE_EMAIL_CONNECTEDNESS_DATA, this.saveEmailConnectednessData.bind(this))]];
                case 4:
                    t.sent(),
                    t.label = 5;
                case 5:
                    return [2]
                }
            })
        }
        ,
        e.prototype.initializeDapiProps = function() {
            var e, t, n, o;
            return r(this, function(r) {
                switch (r.label) {
                case 0:
                    for (t in e = [],
                    f.dapiPropsMap)
                        e.push(t);
                    n = 0,
                    r.label = 1;
                case 1:
                    return n < e.length ? (o = e[n],
                    [4, a.call([this, this.initializeDapiProp], f.dapiPropsMap[o])]) : [3, 4];
                case 2:
                    r.sent(),
                    r.label = 3;
                case 3:
                    return n++,
                    [3, 1];
                case 4:
                    return [2]
                }
            })
        }
        ,
        e.prototype.initializeDapiProp = function(e, t) {
            var n, o, i, s, u, l;
            return void 0 === t && (t = !1),
            r(this, function(r) {
                switch (r.label) {
                case 0:
                    if (void 0 === e)
                        throw new Error("Incorrect DAPI property name");
                    return [4, a.call([this, this.getDapiPropsPrefsKey])];
                case 1:
                    return i = r.sent(),
                    [4, a.call(this._prefs.get, i)];
                case 2:
                    return (s = r.sent()) && s[e] && !t ? [4, a.put(p.setDapiProp(e, s[e]))] : [3, 4];
                case 3:
                    return r.sent(),
                    [3, 11];
                case 4:
                    return r.trys.push([4, 10, , 11]),
                    [4, a.call(c.felog.initializePropFromDapi, e)];
                case 5:
                    return r.sent(),
                    [4, a.call(this._dapi.common[e])];
                case 6:
                    return null === (u = r.sent()) ? [3, 9] : [4, a.put(p.setDapiProp(e, u))];
                case 7:
                    return r.sent(),
                    l = Object.assign({}, s, ((n = {})[e] = u,
                    n)),
                    [4, a.call(this._prefs.set, (o = {},
                    o[i] = l,
                    o))];
                case 8:
                    r.sent(),
                    r.label = 9;
                case 9:
                    return [3, 11];
                case 10:
                    return r.sent(),
                    [3, 11];
                case 11:
                    return [2]
                }
            })
        }
        ,
        e.prototype.resetStrongDialectFromDapi = function() {
            var e;
            return r(this, function(t) {
                switch (t.label) {
                case 0:
                    return e = f.dapiPropsMap[p.t.CHANGE_STRONG_DIALECT],
                    [4, a.call([this, this.initializeDapiProp], e, !0)];
                case 1:
                    return t.sent(),
                    [2]
                }
            })
        }
        ,
        e.prototype.saveToDapi = function(e) {
            var t, n, o, i, c, s, u, h = e.type, g = e.data;
            return r(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, a.select(d.getDapiProp, h)];
                case 1:
                    return e.sent() === g ? [2] : (o = f.dapiPropsMap[h],
                    [4, a.call([this, this.getDapiPropsPrefsKey])]);
                case 2:
                    i = e.sent(),
                    e.label = 3;
                case 3:
                    return e.trys.push([3, 5, , 6]),
                    [4, a.call(f.dapiPropsSetter[o], this._dapi, g)];
                case 4:
                    return e.sent(),
                    [3, 6];
                case 5:
                    return e.sent(),
                    [3, 6];
                case 6:
                    return [4, a.call(this._prefs.get, i)];
                case 7:
                    return c = e.sent(),
                    s = Object.assign({}, c, ((t = {})[o] = g,
                    t)),
                    [4, a.call(this._prefs.set, (n = {},
                    n[i] = s,
                    n))];
                case 8:
                    return e.sent(),
                    u = f.dapiPropsMap[p.t.CHANGE_STRONG_DIALECT],
                    o !== u ? [3, 10] : [4, a.call(this._reconnectAllSockets, g)];
                case 9:
                    e.sent(),
                    e.label = 10;
                case 10:
                    return [4, a.put(p.setDapiProp(o, g))];
                case 11:
                    return e.sent(),
                    [4, a.call(l.fire, "set-dapi-prop", o, g)];
                case 12:
                    return e.sent(),
                    [2]
                }
            })
        }
        ,
        e.prototype.setInitialSettings = function() {
            var e;
            return r(this, function(t) {
                switch (t.label) {
                case 0:
                    return [4, a.call([this, this.getSettings])];
                case 1:
                    return e = t.sent(),
                    [4, a.put(p.initialSettings(e))];
                case 2:
                    return t.sent(),
                    [4, a.call([this, this.setShowNews])];
                case 3:
                    return t.sent(),
                    [2]
                }
            })
        }
        ,
        e.prototype.cacheSettings = function() {
            var e;
            return r(this, function(t) {
                switch (t.label) {
                case 0:
                    return [4, a.select(d.current)];
                case 1:
                    return e = t.sent(),
                    [4, a.call(this._prefs.set, {
                        extensionSettings: e
                    })];
                case 2:
                    return t.sent(),
                    [2]
                }
            })
        }
        ,
        e.prototype.getDapiPropsPrefsKey = function() {
            return r(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, a.select(d.getUserId)];
                case 1:
                    return [2, "dapiProps_" + e.sent()]
                }
            })
        }
        ,
        e.prototype.setShowNews = function() {
            var e, t, n;
            return r(this, function(r) {
                switch (r.label) {
                case 0:
                    return [4, a.select(d.current)];
                case 1:
                    return e = r.sent().common,
                    t = e && Number.isInteger(e.seenNewsVersion) && parseInt(e.seenNewsVersion, 10),
                    n = v !== t && v > 0,
                    [4, a.put(p.showNews(n))];
                case 2:
                    return r.sent(),
                    [2]
                }
            })
        }
        ,
        e.prototype.getSettings = function() {
            var e, t, n;
            return r(this, function(r) {
                switch (r.label) {
                case 0:
                    return [4, a.call(this._prefs.get, "extensionSettings")];
                case 1:
                    return (e = r.sent()) ? [2, e] : [4, a.call(this._prefs.get, f.oldSettingsFields)];
                case 2:
                    return t = r.sent(),
                    [4, a.call(f.migrateSettings, t)];
                case 3:
                    return n = r.sent(),
                    [4, a.call(this._prefs.set, {
                        extensionSettings: n
                    })];
                case 4:
                    return r.sent(),
                    [2, n]
                }
            })
        }
        ,
        e.prototype.saveAnonymousDapiProps = function(e) {
            var t = e.props;
            return r(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, a.call(this._prefs.set, f.anonymousDapiPropsKey, t)];
                case 1:
                    return e.sent(),
                    [4, a.select(d.getUserAnonymous)];
                case 2:
                    return !1 !== e.sent() ? [3, 4] : [4, a.call([this, this.setAnonymousPropsToDapi])];
                case 3:
                    e.sent(),
                    e.label = 4;
                case 4:
                    return [2]
                }
            })
        }
        ,
        e.prototype.setAnonymousPropsToDapi = function() {
            var e, t, n, o, i;
            return r(this, function(r) {
                switch (r.label) {
                case 0:
                    return [4, a.call(this._prefs.get, f.anonymousDapiPropsKey)];
                case 1:
                    if (null == (e = r.sent()))
                        return [3, 10];
                    for (n in t = [],
                    e)
                        t.push(n);
                    o = 0,
                    r.label = 2;
                case 2:
                    if (!(o < t.length))
                        return [3, 7];
                    i = t[o],
                    r.label = 3;
                case 3:
                    return r.trys.push([3, 5, , 6]),
                    [4, a.call(f.dapiPropsSetter[i], this._dapi, e[i])];
                case 4:
                    return r.sent(),
                    [3, 6];
                case 5:
                    return r.sent(),
                    [3, 6];
                case 6:
                    return o++,
                    [3, 2];
                case 7:
                    return [4, a.call(this._prefs.remove, f.anonymousDapiPropsKey)];
                case 8:
                    return r.sent(),
                    [4, a.call([this, this.resetStrongDialectFromDapi])];
                case 9:
                    r.sent(),
                    r.label = 10;
                case 10:
                    return [2]
                }
            })
        }
        ,
        e.prototype.disableOnTab = function() {
            return r(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, a.call(this._emitFocusedTab, "disable-on-tab")];
                case 1:
                    return e.sent(),
                    [2]
                }
            })
        }
        ,
        e.prototype.saveEmailConnectednessData = function(e) {
            var t, n, o, i, c, s, l, p, d, h, g = e.emailConnectednessData;
            return r(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, a.call(this._prefs.get, f.emailConnectednessDataPropsKey)];
                case 1:
                    return t = e.sent(),
                    n = null !== t ? t : [],
                    o = g.sender,
                    i = g.recipiants,
                    c = g.timestamp,
                    s = g.timezoneOffset,
                    o ? [4, a.call(f.getEmailType, o)] : [3, 3];
                case 2:
                    return p = e.sent(),
                    [3, 4];
                case 3:
                    p = "personal",
                    e.label = 4;
                case 4:
                    return l = p,
                    d = u.normalizedHashCode(o, 1e9),
                    h = i.map(function(e) {
                        return u.normalizedHashCode(e, 1e9)
                    }),
                    n.push({
                        hashedS: d,
                        hashedR: h,
                        timestamp: c,
                        timezoneOffset: s,
                        emailType: l
                    }),
                    [4, a.call(this._prefs.set, f.emailConnectednessDataPropsKey, n)];
                case 5:
                    return e.sent(),
                    [2]
                }
            })
        }
        ,
        e.prototype.processEmailConnectednessData = function() {
            var e, t, n, i, c, p, h, g, m, v, b, y, _, w, E, S, I, k, O;
            return r(this, function(r) {
                switch (r.label) {
                case 0:
                    return [4, a.select(d.getUserExperiments)];
                case 1:
                    return (e = r.sent()) && e.connectednessData ? [4, a.call(this._prefs.get, f.emailConnectednessDataNextSyncDate)] : [2];
                case 2:
                    return null === (t = r.sent()) || Date.now() > parseInt(t, 10) ? (n = Date.now() + s.Ms.week,
                    [4, a.call(this._prefs.set, f.emailConnectednessDataNextSyncDate, n)]) : [3, 8];
                case 3:
                    return r.sent(),
                    [4, a.call(this._prefs.get, f.emailConnectednessDataPropsKey)];
                case 4:
                    return null !== (i = r.sent()) && i.length > 0 ? (c = i.length,
                    p = o(i.reduce(function(e, t) {
                        return "presonal" === t.emailType ? e[0].push(t) : e[1].push(t),
                        e
                    }, [[], []]), 2),
                    h = p[0],
                    g = p[1],
                    m = i[0].timestamp,
                    [4, a.select(d.getUserId)]) : [3, 8];
                case 5:
                    return v = r.sent(),
                    b = u.normalizedHashCode(v, 1e9),
                    y = h.length,
                    _ = g.length,
                    w = f.getHistogramByRecipients(i),
                    E = f.getHistogramByRecipients(h),
                    S = f.getHistogramByRecipients(g),
                    I = f.getHistogramByRecipientsCount(i),
                    k = f.getHistogramByRecipientsCount(h),
                    O = f.getHistogramByRecipientsCount(g),
                    [4, a.call([l.gnar, l.gnar.connectednessDataEmail], _, O, S, b, I, w, y, k, E, m, c)];
                case 6:
                    return r.sent(),
                    [4, a.call(this._prefs.set, f.emailConnectednessDataPropsKey, [])];
                case 7:
                    r.sent(),
                    r.label = 8;
                case 8:
                    return [2]
                }
            })
        }
        ,
        e
    }();
    t.SettingsSagas = y
}
, function(e, t, n) {
    "use strict";
    var r, o = this && this.__read || function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(294)
      , a = n(3)
      , c = n(10).getGlobal().appConfig.newsVersion
      , s = a.Logger.create("universal.bg.state.settings");
    t.anonymousDapiPropsKey = "anonymousDapiProps",
    t.oldSettingsFields = ["enabled_db", "enabledDefs", "disabledFields", "seenNewsVersion"],
    t.emailConnectednessDataPropsKey = "connectednessProps",
    t.emailConnectednessDataNextSyncDate = "connectednessDataNextSyncDate";
    var u = ["aol.com", "att.net", "comcast.net", "facebook.com", "gmail.com", "gmx.com", "googlemail.com", "hotmail.com", "hotmail.co.uk", "mac.com", "me.com", "mail.com", "msn.com", "live.com", "sbcglobal.net", "verizon.net", "yahoo.com", "yahoo.co.uk"];
    t.dapiPropsMap = ((r = {})[i.t.CHANGE_WEAK_DIALECT] = "dialectWeak",
    r[i.t.CHANGE_STRONG_DIALECT] = "dialectStrong",
    r[i.t.CHANGE_EMOTIONS_FEATURE] = "emotionsFeature",
    r[i.t.SET_EMOTIONS_EMOJI_STATE] = "emotionsEmojiState",
    r),
    t.dapiPropsSetter = {
        dialectWeak: function(e, t) {
            return e.common.setDialectWeak.call(e, t)
        },
        dialectStrong: function(e, t) {
            return e.common.setDialectStrong.call(e, t)
        },
        writingType: function(e, t) {
            return e.common.setWrittingType.call(e, t)
        },
        primaryLanguage: function(e, t) {
            return e.common.setPrimaryLanguage.call(e, t)
        },
        grammarSkills: function(e, t) {
            return e.common.setGrammarSkills.call(e, t)
        },
        emotionsFeature: function(e, t) {
            return e.common.setEmotionsFeature.call(e, t)
        },
        emotionsEmojiState: function(e, t) {
            return e.common.setEmotionsEmojiState.call(e, t)
        }
    },
    t.getEmailType = function(e) {
        var t = o(e.split("@").map(function(e) {
            return e.toLowerCase()
        }), 2)
          , n = (t[0],
        t[1]);
        return !0 === u.includes(n) ? "presonal" : "business"
    }
    ,
    t.getHistogramByRecipients = function(e) {
        var t = e.reduce(function(e, t) {
            return t.hashedR.forEach(function(t) {
                e[t] = e[t] ? e[t] + 1 : 1
            }),
            e
        }, {})
          , n = Object.keys(t).reduce(function(e, n) {
            var r = t[n];
            return e[r] = e[r] ? e[r] + 1 : 1,
            e
        }, {});
        return Object.keys(n).reduce(function(e, t) {
            return e.push({
                key: parseInt(t, 10),
                value: n[t]
            }),
            e
        }, [])
    }
    ,
    t.getHistogramByRecipientsCount = function(e) {
        var t = e.reduce(function(e, t) {
            var n = t.hashedR.length;
            return e[n] = e[n] ? e[n] + 1 : 1,
            e
        }, {});
        return Object.keys(t).reduce(function(e, n) {
            return e.push({
                key: parseInt(n, 10),
                value: t[n]
            }),
            e
        }, [])
    }
    ,
    t.migrateSettings = function(e) {
        var t = e.enabled_db
          , n = e.enabledDefs
          , r = e.disabledFields
          , o = e.seenNewsVersion
          , i = {};
        try {
            var a = JSON.parse(t);
            a && (delete a.lastChange,
            i = a)
        } catch (e) {
            s.error("error in parse enabled_db", e)
        }
        if (i.common = {
            enabledDefs: Boolean(n),
            seenNewsVersion: o || c
        },
        !r)
            return i;
        var u = Object.keys(r);
        return u.length ? u.filter(function(e) {
            return r[e]
        }).reduce(function(e, t) {
            var n, r = t.indexOf(":"), o = t.substr(0, r), i = t.substr(r + 1), a = e[o] || {
                enabled: !0
            };
            return a.disabledFields = Object.assign({}, a.disabledFields || {}, ((n = {})[i] = !0,
            n)),
            e[o] = a,
            e
        }, i) : i
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(295)
      , i = n(1300)
      , a = n(24)
      , c = n(18)
      , s = n(165)
      , u = n(435)
      , l = n(1301)
      , f = n(455)
      , p = function() {
        function e(e, t, n, r, o, i) {
            this._connectionSagas = e,
            this._emitTo = t,
            this._emitFocusedTab = n,
            this._api = r,
            this._pageConfig = o,
            this._skipWaitingActiveTabOnStart = i
        }
        return e.prototype.start = function() {
            return r(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, o.fork([this, this.listenActiveTabChange])];
                case 1:
                    return e.sent(),
                    this._skipWaitingActiveTabOnStart ? [3, 4] : [4, o.select(l.getActiveTab)];
                case 2:
                    return e.sent() ? [3, 4] : [4, o.take(u.t.SET_ACTIVE_TAB)];
                case 3:
                    e.sent(),
                    e.label = 4;
                case 4:
                    return [4, o.fork([this, this.listenNewTabsConnections])];
                case 5:
                    return e.sent(),
                    [2]
                }
            })
        }
        ,
        e.prototype.listenNewTabsConnections = function() {
            var e, t, n, a, c, u;
            return r(this, function(r) {
                switch (r.label) {
                case 0:
                    return [4, o.call(i.createNewTabsChannel)];
                case 1:
                    e = r.sent(),
                    r.label = 2;
                case 2:
                    return [4, o.call(e.take)];
                case 3:
                    return t = r.sent(),
                    n = t.tab,
                    a = t.url,
                    [4, o.call(this._pageConfig.invalidateMemoized)];
                case 4:
                    return r.sent(),
                    [4, o.select(l.stateByUrl, this._pageConfig, a)];
                case 5:
                    return (c = r.sent()).connection.cookiesDisabled || !1 === navigator.cookieEnabled ? [4, o.fork([this._connectionSagas, this._connectionSagas.monitorCookiesDisable])] : [3, 7];
                case 6:
                    r.sent(),
                    r.label = 7;
                case 7:
                    return "popup" !== n ? [3, 9] : [4, o.call(this._emitTo, "popup", "state", c)];
                case 8:
                    return r.sent(),
                    [3, 12];
                case 9:
                    return u = l.stateForTab(c),
                    [4, o.call(s.fire, "tab-connected", c.user, c.config, c.connection, c.settings.enabled, u.page.domain, u.page.grammarlyEditor)];
                case 10:
                    return r.sent(),
                    [4, o.call(this._emitTo, n, "state", u)];
                case 11:
                    r.sent(),
                    r.label = 12;
                case 12:
                    return [3, 2];
                case 13:
                    return [2]
                }
            })
        }
        ,
        e.prototype.sendStateToTabs = function() {
            var e, t, n;
            return r(this, function(r) {
                switch (r.label) {
                case 0:
                    return [4, o.select(l.stateByActiveTab, this._pageConfig)];
                case 1:
                    return e = r.sent(),
                    [4, o.select(l.getActiveTab)];
                case 2:
                    return t = r.sent(),
                    window.__disableSendStateToTabs ? [2] : [4, o.call([this, this.renderBadge], e)];
                case 3:
                    return r.sent(),
                    [4, o.call(this._emitTo, "popup", "state", e)];
                case 4:
                    return r.sent(),
                    window.__popupState = e,
                    n = l.stateForTab(e),
                    t && t.id ? [4, o.call(this._emitTo, t.id, "state", n)] : [3, 6];
                case 5:
                    r.sent(),
                    r.label = 6;
                case 6:
                    return [4, o.call(this._emitFocusedTab, "state", n)];
                case 7:
                    return r.sent(),
                    [2]
                }
            })
        }
        ,
        e.prototype.listenActiveTabChange = function() {
            var e, t, n, c;
            return r(this, function(r) {
                switch (r.label) {
                case 0:
                    return [4, o.call(i.createActiveTabsChannel, this._api)];
                case 1:
                    e = r.sent(),
                    r.label = 2;
                case 2:
                    return [4, o.call(e.take)];
                case 3:
                    return t = r.sent(),
                    [4, o.select(l.getActiveTab)];
                case 4:
                    return n = r.sent(),
                    c = a.domainFromUrl(t.url),
                    n && n.id === t.id && n.url === t.url ? [3, 7] : [4, o.put(u.setActiveTab(t))];
                case 5:
                    return r.sent(),
                    [4, o.call(i.setUninstallURL, c)];
                case 6:
                    r.sent(),
                    r.label = 7;
                case 7:
                    return [3, 2];
                case 8:
                    return [2]
                }
            })
        }
        ,
        e.prototype.renderBadge = function(e) {
            var t, n, a, s, u, l;
            return r(this, function(r) {
                switch (r.label) {
                case 0:
                    return t = e.activeTab,
                    n = e.user,
                    a = e.config,
                    s = e.settings,
                    u = t && f.gDocsDocumentUrlRe.test(t.url),
                    !n.anonymous && u && c.isChrome() ? [4, o.call(i.setBadgeText, this._api, "BETA", i.BETA_BADGE_COLOR)] : [3, 2];
                case 1:
                    return r.sent(),
                    [3, 9];
                case 2:
                    return n.anonymous || a.grammarlyEditor || a.dontShowDisabledBadge ? [4, o.call(i.setBadgeText, this._api, "")] : [3, 4];
                case 3:
                    return r.sent(),
                    [3, 9];
                case 4:
                    return a.enabled || a.servicePage ? [3, 6] : [4, o.call(i.setBadgeIcon, this._api, "bang")];
                case 5:
                    return r.sent(),
                    [3, 9];
                case 6:
                    return [4, o.call(i.getBadgeText, {
                        user: n,
                        settings: s
                    })];
                case 7:
                    return l = r.sent(),
                    [4, o.call(i.setBadgeText, this._api, l)];
                case 8:
                    r.sent(),
                    r.label = 9;
                case 9:
                    return [2]
                }
            })
        }
        ,
        e
    }();
    t.TabsSagas = p
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    }
      , o = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(10)
      , a = n(49)
      , c = n(13)
      , s = n(4)
      , u = n(165)
      , l = n(71)
      , f = n(3)
      , p = n(86)
      , d = f.Logger.create("universal.bg.state.tabs")
      , h = i.getGlobal().appConfig.newsVersion;
    t.createNewTabsChannel = function() {
        var e = s.createChannel();
        return c.on("tab-connected", function(t) {
            var n = t.tab
              , r = t.url;
            return e.put({
                tab: n,
                url: r
            })
        }),
        e
    }
    ,
    t.createActiveTabsChannel = function(e) {
        var t = s.createChannel({
            buffered: !1
        });
        return e.tabs.onActiveTabChange(function(e) {
            var n = e.url
              , r = e.id;
            return t.put({
                url: n,
                id: r
            })
        }, function(e) {
            return d.error("runtime error by changing active tab", e)
        }),
        t
    }
    ,
    t.DEFAULT_BADGE_COLOR = "#e75146",
    t.BETA_BADGE_COLOR = "#555A70",
    t.setBadgeIcon = function(e, t) {
        s.isSafari() || e.button.setBadge(""),
        e.button.setIconByName(t)
    }
    ,
    t.setBadgeText = function(e, n, r) {
        var o = e.button;
        switch (void 0 === r && (r = t.DEFAULT_BADGE_COLOR),
        o.kind) {
        case "web-extension":
            o.setBadgeBackgroundColor(r),
            o.setIconByName("");
            break;
        case "fallback":
            break;
        default:
            throw new Error("Unsupported browser button action")
        }
        o.setBadge(n)
    }
    ,
    t.getBadgeText = function(e) {
        e.user;
        var t = e.settings
          , n = t.seenNewsVersion
          , r = t.enabled;
        return h > 0 && n !== h ? "NEW" : r ? "" : "off"
    }
    ,
    t.setUninstallURL = function(e) {
        if (s.isChrome() || s.isFF()) {
            var t = a.getUninstallURL(e);
            window.chrome.runtime.setUninstallURL && window.chrome.runtime.setUninstallURL(t)
        }
    }
    ;
    var g = new Set;
    t.trackDisabledTab = function(e, t, n) {
        return r(this, void 0, void 0, function() {
            var r, i, a;
            return o(this, function(o) {
                switch (o.label) {
                case 0:
                    return "background-message-api" === e.message.kind && s.isChrome() ? [4, l.SafePromise.delay(p.second)] : [3, 2];
                case 1:
                    o.sent(),
                    r = e.message.getPortExists(t),
                    i = g.has(t),
                    a = n.includes("chrome://"),
                    r || i || a || (u.gnar.siteIsBrowserDisabled(),
                    g.add(t)),
                    o.label = 2;
                case 2:
                    return [2]
                }
            })
        })
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(24);
    function o(e, t, n) {
        var o = r.domainFromUrl(n)
          , a = t.get(o, n)
          , c = i(e.settings, o);
        return Object.assign({}, e, {
            config: Object.assign({}, a, {
                domain: o
            })
        }, {
            settings: c,
            activeTab: e.tabs && e.tabs.active
        })
    }
    function i(e, t) {
        var n = e[t]
          , r = !n || void 0 === n.enabled || n.enabled;
        return Object.assign({}, e.common, n, {
            enabled: r
        })
    }
    t.stateByUrl = o,
    t.stateByActiveTab = function(e, t) {
        return o(e, t, e.tabs && e.tabs.active && e.tabs.active.url)
    }
    ,
    t.getTabSettings = i,
    t.stateForTab = function(e) {
        var t = e.dynamicConfig
          , n = e.user
          , r = e.connection
          , o = e.config
          , i = e.settings;
        return {
            dynamicConfig: t,
            user: n,
            connection: r,
            page: Object.assign({}, i, o, {
                enabled: i.enabled && o.enabled
            })
        }
    }
    ,
    t.getActiveTab = function(e) {
        return e.tabs.active
    }
    ,
    t.getAll = function(e) {
        return e
    }
    ,
    t.getUserGroups = function(e) {
        return e.user.groups
    }
    ,
    t.getExperiments = function(e) {
        return e.user.experiments
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    }
      , o = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(14)
      , a = n(24)
      , c = n(4)
      , s = n(3).Logger.create("lib.bg.chrome")
      , u = 20
      , l = window.chrome
      , f = !1;
    function p() {
        l.runtime.requestUpdateCheck && l.runtime.requestUpdateCheck(function(e) {
            return "update_available" === e ? s.info("update pending...") : "no_update" === e ? s.info("no update found") : "throttled" === e ? s.info("Oops, I'm asking too frequently - I need to back off.") : void 0
        }),
        setTimeout(p, 72e5)
    }
    function d(e, t, n) {
        return void 0 === n && (n = {}),
        e ? new Promise(function(r, o) {
            return l.tabs.executeScript(e, Object.assign({
                file: t
            }, n), function() {
                return c.chromeBgError() ? o(c.chromeBgError()) : r()
            })
        }
        ) : Promise.reject(c.chromeBgError())
    }
    function h(e) {
        return r(this, void 0, void 0, function() {
            return o(this, function(t) {
                switch (t.label) {
                case 0:
                    return [4, new Promise(function(t) {
                        return e.id && l.tabs.executeScript(e.id, {
                            code: "document.body.dataset.grCSLoaded"
                        }, function(e) {
                            return t(e && e.pop())
                        })
                    }
                    )];
                case 1:
                    return [2, !t.sent() && e || void 0]
                }
            })
        })
    }
    function g(e, t, n, i) {
        return r(this, void 0, void 0, function() {
            var r, c, s, u, l;
            return o(this, function(o) {
                switch (o.label) {
                case 0:
                    if ("web-extension" !== (r = e.tabs).kind)
                        throw new Error('Unexpected tabs kind "' + r.kind + '"');
                    return [4, r.getAllTabs()];
                case 1:
                    return c = o.sent(),
                    [4, r.getActiveTabUrl()];
                case 2:
                    return s = o.sent(),
                    u = i ? function(e) {
                        return e.url && e.url.includes(i)
                    }
                    : function(e) {
                        var n = e.url;
                        if (n && 0 === n.indexOf("http"))
                            return !!n.includes("grammarly") || t.get(a.domainFromUrl(n)).enabled
                    }
                    ,
                    l = c.filter(u),
                    [4, Promise.all(l.map(n ? h : function(e) {
                        return Promise.resolve(e)
                    }
                    ))];
                case 3:
                    return [2, o.sent().filter(function(e) {
                        return !!e
                    }).sort(function(e) {
                        return e.url === s ? -1 : 1
                    })]
                }
            })
        })
    }
    t.setupForcedUpdate = function() {
        !c.isChrome() && !c.isFF() || f || (l.runtime.onUpdateAvailable && l.runtime.onUpdateAvailable.addListener(function(e) {
            s.info("Detected the next extension version " + e.version),
            f = !0;
            var t = c.getRandomIntInclusive(1, u);
            s.info("Going to update in minutes: " + t),
            setTimeout(l.runtime.reload, 60 * t * 1e3)
        }),
        p())
    }
    ,
    t.loadContentScripts = function(e, t, n) {
        return r(this, void 0, void 0, function() {
            var r, a, u, f, p, h, m, v, b;
            return o(this, function(o) {
                switch (o.label) {
                case 0:
                    return (c.isChrome() || c.isFF()) && (r = l.runtime.getManifest()) && (a = r.content_scripts) && (u = a.pop()) ? (f = u.js,
                    p = u.css,
                    f && p ? [4, g(e, t, !0, n)] : [2]) : [2];
                case 1:
                    return (h = o.sent()).length ? (s.info("Load content scripts to", h),
                    m = function(e, t) {
                        i.felog.chromeContentScriptLoadError(e && e.message, t),
                        s.error("cs " + t + " loaded with error: " + e.message)
                    }
                    ,
                    v = performance.now(),
                    [4, Promise.all(h.map(function(e) {
                        var t = e.id;
                        return Promise.all([f.reduce(function(e, n) {
                            return e.then(function() {
                                return d(t, n, {
                                    runAt: "document_idle"
                                })
                            })
                        }, Promise.resolve()).then(function() {
                            return s.info("scripts loaded")
                        }).catch(function(e) {
                            return m(e, "js")
                        }), p.reduce(function(e, n) {
                            return e.then(function() {
                                return r = n,
                                void 0 === (o = {
                                    runAt: "document_idle"
                                }) && (o = {}),
                                (e = t) ? new Promise(function(t, n) {
                                    return l.tabs.insertCSS(e, Object.assign({
                                        file: r
                                    }, o), function() {
                                        return c.chromeBgError() ? n(c.chromeBgError()) : t()
                                    })
                                }
                                ) : Promise.reject(c.chromeBgError());
                                var e, r, o
                            })
                        }, Promise.resolve()).then(function() {
                            return s.info("css loaded")
                        }).catch(function(e) {
                            return m(e, "css")
                        })])
                    }))]) : [2];
                case 2:
                    return o.sent(),
                    b = performance.now(),
                    s.trace("Content scripts load time: " + (b - v) + " ms"),
                    [2]
                }
            })
        })
    }
    ,
    t.loadProxy = function(e, t) {
        return r(this, void 0, void 0, function() {
            var n, r, i;
            return o(this, function(o) {
                switch (o.label) {
                case 0:
                    if (!c.isChrome())
                        return [2];
                    o.label = 1;
                case 1:
                    return o.trys.push([1, 4, , 5]),
                    [4, g(e, t)];
                case 2:
                    return n = o.sent(),
                    [4, Promise.all(n.map(function(e) {
                        return d(e.id, "src/js/Grammarly-proxy.js")
                    }))];
                case 3:
                    return o.sent(),
                    s.info("proxy loaded on", n.map(function(e) {
                        return e.url
                    })),
                    [3, 5];
                case 4:
                    return r = o.sent(),
                    i = r && r.message || r,
                    s.error("proxy loaded with error: ", i),
                    [3, 5];
                case 5:
                    return [2]
                }
            })
        })
    }
    ,
    t.filteredTabs = g
}
, function(e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    );
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(4)
      , a = n(135)
      , c = n(24)
      , s = n(1304)
      , u = n(1307)
      , l = function(e) {
        function t(t, n, r) {
            var o = e.call(this, t, r) || this;
            return o._userStateOrNull = n,
            o._invalidate = function() {
                return o.load()
            }
            ,
            o.invalidateMemoized = i.memoize(o._invalidate, void 0, 1e4),
            o.getByPage = function(e, t) {
                if (void 0 === t && (t = c.getUrl()),
                e) {
                    var n = Object.keys(e).find(function(e) {
                        return new RegExp(e).test(t)
                    });
                    return n ? e[n] : void 0
                }
            }
            ,
            o
        }
        return o(t, e),
        t.prototype._transformConfig = function(e, t) {
            var n = this._userStateOrNull();
            return !(n && n.mimic && e && e.enabledForGroups && u(e.enabledForGroups, n.mimic).length) || e.disabledBrowsers && e.disabledBrowsers.includes(i.getBrowser()) || (e.enabled = !0),
            e
        }
        ,
        t.prototype.get = function(e, t) {
            var n = this.config.pageConfig[e] || this.config.subdomains.find(function(t) {
                return new RegExp("\\." + i.escapeRegExp(t.domain) + "$").test(e)
            }) || this.config.partials.find(function(t) {
                return e.includes(t.domain)
            })
              , r = this._transformConfig(n, e);
            if (r && !1 === r.enabled)
                return r;
            var o = this.getByPage(r && r.pages, t) || r || {};
            return o.enabled = !1 !== o.enabled,
            o
        }
        ,
        t.prototype.toReload = function(e) {
            return 0 === e.indexOf("http") && a.SITES_TO_RELOAD.some(function(t) {
                return e.includes(t)
            })
        }
        ,
        t
    }(s.ConfigLoader);
    t.PageConfigImpl = l
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    }
      , o = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(1001)
      , a = n(14)
      , c = n(1305)
      , s = n(1046)
      , u = n(1306)
      , l = n(1003)
      , f = n(3)
      , p = n(71)
      , d = f.Logger.create("lib.page-config.config-loader")
      , h = "Config missed"
      , g = "Config malformed"
      , m = function() {
        function e(e, t) {
            this._prefs = e,
            this._fetchBlacklistConfig = t
        }
        return e.prototype.init = function() {
            return r(this, void 0, void 0, function() {
                var e, t;
                return o(this, function(n) {
                    switch (n.label) {
                    case 0:
                        return l.Profiler.start("pageConfig_init"),
                        [4, this.isSkipConfig()];
                    case 1:
                        return n.sent() ? (d.warn("Config: use default config in DEBUG mode (skipConfig=true)"),
                        [3, 4]) : [3, 2];
                    case 2:
                        return [4, this.loadFromStorage()];
                    case 3:
                        e = n.sent(),
                        n.label = 4;
                    case 4:
                        return this.config = e || {},
                        t = this,
                        [4, (new c.Meta).load()];
                    case 5:
                        return t.meta = n.sent(),
                        l.Profiler.stop("pageConfig_init"),
                        [2, this]
                    }
                })
            })
        }
        ,
        e.prototype.isSkipConfig = function() {
            return r(this, void 0, void 0, function() {
                var e;
                return o(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return (e = !1) ? [4, this._prefs.get("skipConfig")] : [3, 2];
                    case 1:
                        e = t.sent(),
                        t.label = 2;
                    case 2:
                        return [2, e]
                    }
                })
            })
        }
        ,
        Object.defineProperty(e.prototype, "config", {
            get: function() {
                return this._config
            },
            set: function(e) {
                e = e || {},
                this._config = u.decorateConfig(e)
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.load = function() {
            return r(this, void 0, void 0, function() {
                var e, t, n, r;
                return o(this, function(o) {
                    return e = this.meta.config,
                    t = e.date,
                    n = e.interval,
                    t + n > Date.now() ? (r = (t + n - Date.now()) / 1e3 / 60,
                    d.info("Config: next update in " + r.toFixed(2) + " m"),
                    [2]) : (d.info("Config: going to update config from CDN..."),
                    [2, this.updateFromCDN()])
                })
            })
        }
        ,
        e.prototype.updateFromCDN = function() {
            return r(this, void 0, void 0, function() {
                var e, t, n;
                return o(this, function(r) {
                    switch (r.label) {
                    case 0:
                        return r.trys.push([0, 2, , 3]),
                        [4, Promise.race([this._fetchBlacklistConfig(), p.SafePromise.delay(6e4).then(function() {
                            throw new Error("Fail to load config from extension api!")
                        })])];
                    case 1:
                        if (e = r.sent(),
                        !s.isValid(e))
                            throw new Error(g);
                        return this.config = e,
                        this.save(e),
                        [3, 3];
                    case 2:
                        return t = r.sent(),
                        a.felog.pageConfigCDNError(t.message),
                        n = "Config: can't get valid config - " + t.message,
                        d.warn(n),
                        this.saveOnError(n),
                        [3, 3];
                    case 3:
                        return [2]
                    }
                })
            })
        }
        ,
        e.prototype.loadFromStorage = function() {
            return r(this, void 0, void 0, function() {
                var e, t;
                return o(this, function(n) {
                    switch (n.label) {
                    case 0:
                        return n.trys.push([0, 2, , 3]),
                        [4, i.localforage.getItem("config")];
                    case 1:
                        if (!(e = n.sent()))
                            throw new Error(h);
                        if (!s.isValid(e))
                            throw new Error(g);
                        return d.info("Config: loaded from local storage successfully"),
                        [2, e];
                    case 2:
                        return t = n.sent(),
                        h === t.message || a.felog.pageConfigLocalStorageError(t.message, t.name),
                        d.warn("Config: cannot get valid config from storage: " + t),
                        [2, void 0];
                    case 3:
                        return [2]
                    }
                })
            })
        }
        ,
        e.prototype.save = function(e) {
            var t = e.interval
              , n = e.protocolVersion
              , r = e.version;
            i.localforage.setItem("config", e),
            this.fireVersionUpdate(r, this.meta.config.version),
            this.meta.set({
                date: this.getCurrentTimestamp(),
                status: "success",
                interval: t,
                protocolVersion: n,
                version: r
            }),
            d.info("Config: new config saved to local storage successfully: " + e.version, e)
        }
        ,
        e.prototype.saveOnError = function(e) {
            var t = this.meta.config
              , n = t.interval
              , r = t.protocolVersion
              , o = t.version;
            this.meta.set({
                date: this.getCurrentTimestamp(),
                status: "failed",
                interval: n,
                protocolVersion: r,
                version: o,
                info: e
            })
        }
        ,
        e.prototype.fireVersionUpdate = function(e, t) {
            e && t !== e && a.felog.pageConfigUpdated(t, e)
        }
        ,
        e.prototype.getCurrentTimestamp = function() {
            return Date.now()
        }
        ,
        e
    }();
    t.ConfigLoader = m
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    }
      , o = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(1001)
      , a = n(1046)
      , c = "lastConfigUpdate"
      , s = function() {
        function e() {}
        return e.prototype.load = function() {
            return r(this, void 0, void 0, function() {
                var e;
                return o(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, i.localforage.getItem(c)];
                    case 1:
                        return e = t.sent(),
                        this.set(e),
                        [2, this]
                    }
                })
            })
        }
        ,
        e.prototype.set = function(e) {
            var t = e || {}
              , n = t.protocolVersion
              , r = t.version
              , o = t.status
              , s = t.info
              , u = t.date
              , l = t.interval;
            return this._meta = {
                date: Number(u) || 0,
                interval: a.getInterval(Number(l)),
                protocolVersion: n,
                version: r,
                status: o,
                info: s
            },
            i.localforage.setItem(c, this._meta)
        }
        ,
        Object.defineProperty(e.prototype, "config", {
            get: function() {
                return this._meta
            },
            enumerable: !0,
            configurable: !0
        }),
        e
    }();
    t.Meta = s
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(17)
      , o = n(135)
      , i = n(4)
      , a = n(175)
      , c = n(3).Logger.create("lib.page-config.decorator");
    function s(e) {
        var t = a({
            pageConfig: {}
        }, e);
        return t.pageConfig || (t.pageConfig = {}),
        t
    }
    t.deepCopyWithDefault = s;
    var u = function() {
        function e() {}
        return e.decorate = function(e) {
            return e = e || {},
            e = this.filterByVersion(e),
            e = this.withDefault(e),
            e = this.parseBooleans(e),
            e = this.parseBrowserValues(e),
            e = this.filterInvalidPageRegexp(e),
            e = this.collectSubdomains(e),
            e = this.collectPartials(e)
        }
        ,
        e.withDefault = function(e) {
            e = s(e);
            var t = o.PAGE_CONFIG && o.PAGE_CONFIG.pageConfig || {};
            o.OVERRIDE_PAGE_CONFIG;
            return e.pageConfig = a({}, t, e.pageConfig),
            e
        }
        ,
        e.filterByVersion = function(e, t) {
            void 0 === t && (t = r.getVersion());
            var n = (e = s(e)).pageConfig;
            return e.pageConfig = Object.keys(n || {}).filter(function(e) {
                var r = n[e].version;
                return !r || "*" === r || 1 !== i.versionComparator(t, r)
            }).reduce(function(t, n) {
                var r;
                return Object.assign({}, t, ((r = {})[n] = e.pageConfig[n],
                r))
            }, {}),
            e
        }
        ,
        e.parseBooleans = function(e) {
            function t(e) {
                return !(!1 === e || "false" === e)
            }
            function n(e) {
                return !!e && t(e)
            }
            var r = (e = s(e)).pageConfig;
            return Object.keys(r || {}).forEach(function(e) {
                r[e] || (r[e] = {});
                var o = r[e];
                o.enabled = t(o.enabled),
                o.matchInclusions = n(o.matchInclusions),
                o.matchSubdomains = n(o.matchSubdomains),
                o.pages && Object.keys(o.pages).forEach(function(e) {
                    o.pages[e].enabled = t(o.pages[e].enabled)
                })
            }),
            e
        }
        ,
        e.parseBrowserValues = function(e, t) {
            void 0 === t && (t = i.getBrowser());
            var n = (e = s(e)).pageConfig;
            return Object.keys(n || {}).map(function(e) {
                var r = n[e] && n[e].disabledBrowsers;
                r && r.includes(t) && (n[e].enabled = !1)
            }),
            e
        }
        ,
        e.filterInvalidPageRegexp = function(e) {
            var t = (e = s(e)).pageConfig;
            return Object.keys(t || {}).forEach(function(e) {
                var n = t[e];
                n.pages && (n.pages = Object.keys(n.pages).filter(function(e) {
                    try {
                        return new RegExp(e)
                    } catch (e) {
                        return !1
                    }
                }).reduce(function(e, t) {
                    var r;
                    return Object.assign({}, e, ((r = {})[t] = n.pages[t],
                    r))
                }, {}))
            }),
            e
        }
        ,
        e.collectSubdomains = function(e) {
            var t = (e = s(e)).pageConfig;
            e.subdomains = [];
            try {
                e.subdomains = Object.keys(t || {}).filter(function(e) {
                    return t[e].matchSubdomains
                }).map(function(e) {
                    return Object.assign({
                        domain: e
                    }, t[e])
                })
            } catch (e) {
                c.warn("Cannot collect subdomains from config")
            }
            return e
        }
        ,
        e.collectPartials = function(e) {
            var t = (e = s(e)).pageConfig;
            e.partials = [];
            try {
                e.partials = Object.keys(t || {}).filter(function(e) {
                    return t[e].matchInclusions
                }).map(function(e) {
                    return Object.assign({
                        domain: e
                    }, t[e])
                })
            } catch (e) {
                c.warn("Cannot collect partials from config")
            }
            return e
        }
        ,
        e
    }();
    t.RawConfigDecorator = u,
    t.decorateConfig = function(e) {
        return u.decorate(e)
    }
}
, function(e, t, n) {
    var r = n(121)
      , o = n(1308)
      , i = n(136)
      , a = n(1309)
      , c = i(function(e) {
        var t = r(e, a);
        return t.length && t[0] === e[0] ? o(t) : []
    });
    e.exports = c
}
, function(e, t, n) {
    var r = n(157)
      , o = n(675)
      , i = n(676)
      , a = n(121)
      , c = n(114)
      , s = n(158)
      , u = Math.min;
    e.exports = function(e, t, n) {
        for (var l = n ? i : o, f = e[0].length, p = e.length, d = p, h = Array(p), g = 1 / 0, m = []; d--; ) {
            var v = e[d];
            d && t && (v = a(v, c(t))),
            g = u(v.length, g),
            h[d] = !n && (t || f >= 120 && v.length >= 120) ? new r(d && v) : void 0
        }
        v = e[0];
        var b = -1
          , y = h[0];
        e: for (; ++b < f && m.length < g; ) {
            var _ = v[b]
              , w = t ? t(_) : _;
            if (_ = n || 0 !== _ ? _ : 0,
            !(y ? s(y, w) : l(m, w, n))) {
                for (d = p; --d; ) {
                    var E = h[d];
                    if (!(E ? s(E, w) : l(e[d], w, n)))
                        continue e
                }
                y && y.push(w),
                m.push(_)
            }
        }
        return m
    }
}
, function(e, t, n) {
    var r = n(145);
    e.exports = function(e) {
        return r(e) ? e : []
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    }
      , o = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(17)
      , a = n(14)
      , c = n(3).Logger.create("lib.bg.dapi")
      , s = ["british", "american", "australian", "canadian"]
      , u = ["work", "school", "otherProjects"]
      , l = ["english", "notEnglish"]
      , f = ["beginner", "intermediate", "advanced"]
      , p = ["enable", "disable"]
      , d = ["hide", "show"]
      , h = function(e, t) {
        return null != t && e.includes(t) ? t : null
    };
    function g(e) {
        return h(s, e)
    }
    function m(e) {
        return h(u, e)
    }
    function v(e) {
        return h(l, e)
    }
    function b(e) {
        return h(f, e)
    }
    function y(e) {
        return h(p, e)
    }
    function _(e) {
        return h(d, e)
    }
    t.parseDialect = g,
    t.parseWritingType = m,
    t.parsePrimaryLanguage = v,
    t.parseGrammarSkills = b,
    t.parseEmotionsFeature = y,
    t.parseEmotionsEmojiState = _;
    var w = function() {
        function e(e, t, n) {
            this._key = e,
            this._parser = t,
            this._fetch = n
        }
        return e.prototype.get = function() {
            return r(this, void 0, void 0, function() {
                var e, t, n;
                return o(this, function(r) {
                    switch (r.label) {
                    case 0:
                        return r.trys.push([0, 2, , 3]),
                        e = i.URLS.dapiProps + "/" + this._key,
                        [4, this._fetch(e, {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })];
                    case 1:
                        return [2, (t = r.sent()) && t[this._key] ? this._parser(t[this._key]) : null];
                    case 2:
                        throw n = r.sent(),
                        c.error("Error by getting prop " + this._key + " from dapi", n),
                        a.felog.getDapiPropError(n && n.statusCode),
                        n;
                    case 3:
                        return [2]
                    }
                })
            })
        }
        ,
        e.prototype.set = function(e) {
            return r(this, void 0, void 0, function() {
                var t, n, r;
                return o(this, function(o) {
                    switch (o.label) {
                    case 0:
                        return o.trys.push([0, 2, , 3]),
                        n = "" + i.URLS.dapiProps,
                        [4, this._fetch(n, {
                            method: "post",
                            isText: !0,
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify((t = {},
                            t[this._key] = e,
                            t))
                        })];
                    case 1:
                        return [2, o.sent()];
                    case 2:
                        throw r = o.sent(),
                        c.error("Error by setting prop " + this._key + " to dapi", r),
                        a.felog.setDapiPropError(r && r.statusCode),
                        r;
                    case 3:
                        return [2]
                    }
                })
            })
        }
        ,
        e
    }();
    t.Property = w;
    var E = function() {
        return function(e) {
            var t = this;
            this.dialectStrong = function() {
                return t._dialectStrong.get()
            }
            ,
            this.dialectWeak = function() {
                return t._dialectWeak.get()
            }
            ,
            this.writingType = function() {
                return t._writingType.get()
            }
            ,
            this.primaryLanguage = function() {
                return t._primaryLanguage.get()
            }
            ,
            this.grammarSkills = function() {
                return t._grammarSkills.get()
            }
            ,
            this.emotionsFeature = function() {
                return t._emotionsFeature.get()
            }
            ,
            this.emotionsEmojiState = function() {
                return t._emotionsEmojiState.get()
            }
            ,
            this.setDialectWeak = function(e) {
                return t._dialectWeak.set(e)
            }
            ,
            this.setDialectStrong = function(e) {
                return t._dialectStrong.set(e)
            }
            ,
            this.setWrittingType = function(e) {
                return t._writingType.set(e)
            }
            ,
            this.setPrimaryLanguage = function(e) {
                return t._primaryLanguage.set(e)
            }
            ,
            this.setGrammarSkills = function(e) {
                return t._grammarSkills.set(e)
            }
            ,
            this.setEmotionsFeature = function(e) {
                return t._emotionsFeature.set(e)
            }
            ,
            this.setEmotionsEmojiState = function(e) {
                return t._emotionsEmojiState.set(e)
            }
            ,
            this._dialectStrong = new w("dialectStrong",g,e),
            this._dialectWeak = new w("dialectWeak",g,e),
            this._writingType = new w("writingType",m,e),
            this._primaryLanguage = new w("primaryLanguage",v,e),
            this._grammarSkills = new w("grammarSkills",b,e),
            this._emotionsFeature = new w("emotionsFeature",y,e),
            this._emotionsEmojiState = new w("emotionsEmojiState",_,e)
        }
    }()
      , S = function() {
        return function(e) {
            this.common = new E(e)
        }
    }();
    t.DapiImpl = S
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__assign || function() {
        return (r = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }
      , o = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    }
      , i = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(1)
      , c = n(453)
      , s = n(4)
      , u = n(17)
      , l = n(397)
      , f = n(1312);
    t.FakeCapi = f.FakeCapi;
    var p = n(1313)
      , d = n(3)
      , h = n(10)
      , g = d.Logger.create("universal.bg.socket")
      , m = function() {
        return function(e, t, n, f, d, m, v, b) {
            void 0 === b && (b = [h.getGlobal().appConfig.url.capi, h.getGlobal().appConfig.url.capiGDocs]);
            var y = this;
            this._telemetry = e,
            this._getConnectionState = t,
            this._updateConnectionState = n,
            this._refreshUser = f,
            this._getTokenCookie = d,
            this._message = m,
            this._fakeCapi = v,
            this._wsUrlWhitelist = b,
            this._sockets = {},
            this._releaseTimeout = 5e3,
            this._maxReconnectTime = 12e4,
            this._log = [],
            this.reconnectAll = function(e) {
                y._dialect = e,
                Object.keys(y._sockets).forEach(function(e) {
                    return y._sockets[e].reconnect()
                })
            }
            ,
            this.getLog = function() {
                var e = y._log.slice(0);
                return y._log = [],
                e
            }
            ,
            this._setMessageType = function(e) {
                var t = e.id
                  , n = e.iframeMode;
                g.trace("IFRAME MODE " + t, y._sockets);
                var r = y._sockets[t];
                r && r.setMessageType(n ? l.MessageTypes.serverIframe : l.MessageTypes.server)
            }
            ,
            this._onBackgroundSocketEmit = function(e, t, n) {
                var o = e.event
                  , i = e.socketId
                  , a = e.msg;
                if (g.trace("from ws " + o + " " + i, {
                    msg: a,
                    messageType: t
                }),
                a && a.error && "not_authorized" === a.error)
                    return y._tryToFixSession();
                var c = setTimeout(function() {
                    var e = y._sockets[i];
                    e && (e.release(),
                    e.overrideEmitToNoOp(),
                    delete y._sockets[i])
                }, y._releaseTimeout);
                y._message.emitTo(n, t, r({}, e, {
                    id: s.guid()
                }), function(e) {
                    return e && clearTimeout(c)
                })
            }
            ,
            this._onContentScriptSocketMessage = function(e, t, n) {
                if (e && !y._getConnectionState().authToCapiDegradation) {
                    var r = e.socketId
                      , o = e.method
                      , i = "close" === o
                      , a = y._sockets[r];
                    if (a || !i) {
                        if (!a) {
                            if (!y._wsUrlWhitelist.includes(e.url))
                                return void g.error("disallowed websocket url " + e.url, e);
                            a = new p.BackgroundSocket(e,n,y._onBackgroundSocketEmit,y._fakeCapi),
                            y._sockets[r] = a
                        }
                        switch ("connect" !== o && delete e.url,
                        e.arg && "start" === e.arg.action && y._dialect && (e.arg.dialect = y._dialect),
                        o) {
                        case "connect":
                            y._refreshUser(!0, "onSessionStart").then(function() {
                                return a.connect(e.arg)
                            });
                            break;
                        case "send":
                            a.send(e.arg);
                            break;
                        case "reconnect":
                            a.reconnect();
                            break;
                        case "release":
                            a.release();
                            break;
                        case "close":
                            a.close();
                            break;
                        case "wsPlay":
                            a.wsPlay();
                            break;
                        case "wsPause":
                            a.wsPause();
                            break;
                        default:
                            g.error("Unknown method", o)
                        }
                        i && (a.close(),
                        a.overrideEmitToNoOp(),
                        delete y._sockets[r])
                    }
                }
            }
            ,
            this._tryToFixSession = function() {
                var e = y._getConnectionState()
                  , t = e.authToCapiDegradation
                  , n = e.authDegradation
                  , r = e.cookiesDisabled;
                if (t)
                    return y._telemetry.capiNotAuthorizedLoop(!!n, !!r),
                    void g.error("User not authorized... Recovery fail =(");
                r && (y._telemetry.socketDisabledCookie(),
                g.error("User disabled cookies... =(")),
                g.warn("User not authorized... Try to recover"),
                y._updateConnectionState({
                    authToCapiDegradation: !0
                }),
                y._connectionFixer()
            }
            ,
            this._connectionFixer = function() {
                return o(y, void 0, void 0, function() {
                    var e, t = this;
                    return i(this, function(n) {
                        switch (n.label) {
                        case 0:
                            return Object.keys(this._sockets).forEach(function(e) {
                                return t._sockets[e].release()
                            }),
                            [4, new Promise(function(e) {
                                return t._tryToConnect(e)
                            }
                            )];
                        case 1:
                            return e = n.sent(),
                            this._updateConnectionState({
                                authToCapiDegradation: !1
                            }),
                            Object.keys(this._sockets).forEach(function(e) {
                                return t._sockets[e].reconnect()
                            }),
                            this._telemetry.socketBgRestored(e),
                            [2]
                        }
                    })
                })
            }
            ,
            this._tryToConnect = function(e, t, n) {
                return void 0 === t && (t = 1e4),
                void 0 === n && (n = 1),
                o(y, void 0, void 0, function() {
                    var r, o, l, f, p, d = this;
                    return i(this, function(i) {
                        switch (i.label) {
                        case 0:
                            return g.warn("Fixer inited, will try to connect in " + t / 1e3 + "s., count:" + n),
                            [4, s.delay(t)];
                        case 1:
                            return i.sent(),
                            [4, this._refreshUser(!1, "recover_after_capi_error")];
                        case 2:
                            return i.sent(),
                            r = c({
                                url: u.URLS.capi
                            }),
                            o = s.getBrowser(),
                            l = "chrome" === o ? "extension_chrome" : "firefox" === o ? "extension_firefox" : "safari" === o ? "extension_safari" : "edge" === o ? "extension_edge" : a.try_(function() {
                                return a.assertNever(o)
                            }, function(e) {
                                return "extension"
                            }),
                            f = {
                                docid: s.guid(),
                                client: l,
                                protocolVersion: "1.0",
                                action: "start",
                                id: 0
                            },
                            p = function() {
                                r && (r.close(),
                                r.release(),
                                r.emit = s._f),
                                r = null
                            }
                            ,
                            r && (r.emit = function(o, i) {
                                return void 0 === i && (i = {}),
                                "connect" === o ? r && r.send(f) : i.action && "start" === i.action ? (p(),
                                g.warn("yay, we fixed capi connection!"),
                                e(n)) : void ((i.error || "error" === o) && (p(),
                                n % 10 == 0 && d._logFailedReconnect({
                                    count: n,
                                    error: i.error
                                }),
                                g.warn("still on error( " + o, i),
                                d._tryToConnect(e, Math.min(d._maxReconnectTime, 2 * t), n + 1)))
                            }
                            ),
                            r && r.connect(),
                            [2]
                        }
                    })
                })
            }
            ,
            this._logFailedReconnect = function(e) {
                var t = e.count
                  , n = e.error;
                return o(y, void 0, void 0, function() {
                    var e;
                    return i(this, function(r) {
                        switch (r.label) {
                        case 0:
                            e = "exception",
                            r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]),
                            [4, this._getTokenCookie()];
                        case 2:
                            return e = r.sent(),
                            [3, 4];
                        case 3:
                            return r.sent(),
                            [3, 4];
                        case 4:
                            return g.warn("log failed reconnect " + t, n),
                            this._telemetry.socketBgReconnectFail(e || "", t),
                            [2]
                        }
                    })
                })
            }
            ,
            m.on(l.MessageTypes.iframeMode, this._setMessageType),
            m.on(l.MessageTypes.client, this._onContentScriptSocketMessage)
        }
    }();
    t.BackgroundSocketManager = m
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__assign || function() {
        return (r = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(25)
      , i = n(4)
      , a = n(99)
      , c = function() {
        return function() {
            var e = this;
            this._fakeWebsocketData = [],
            this._isAutorun = !1,
            this._latestRevision = 0,
            this.isOn = function() {
                return e._fakeWebsocketData && e._fakeWebsocketData.length > 0
            }
            ,
            this.getSocket = function() {
                return e._socket
            }
            ,
            this.run = function() {
                if (e._fakeWebsocketData.length > 0) {
                    var t = e._fakeWebsocketData.shift();
                    t.rev = e._latestRevision,
                    "synonyms" === t.action ? e._socket.emit("message", t) : e._socket.emit(t.event, t),
                    setTimeout(e.run, 0)
                } else
                    e._latestRevision = 0,
                    e._isAutorun = !1
            }
            ,
            this.setData = function(t) {
                e._fakeWebsocketData = t.value,
                e._isAutorun = t.autorun,
                e._debouncedRunFakeCapi.cancel()
            }
            ,
            this._fakeWebsocket = function() {
                var t = r({}, o({}), {
                    send: function(n) {
                        "start" === n.action && t.emit("start", {
                            event: "message",
                            action: "start"
                        }),
                        "submit_ot" === n.action && (e._latestRevision = n.rev,
                        e._isAutorun && e._debouncedRunFakeCapi())
                    },
                    close: i._f,
                    connect: function() {
                        t.emit("connect", {
                            event: "connect"
                        })
                    },
                    reconnect: function() {
                        return t.connect()
                    },
                    isConnected: i._F,
                    release: i._f,
                    toString: function() {
                        return "Fake socket"
                    },
                    wsPlay: i._f,
                    wsPause: i._f
                });
                return t
            }
            ,
            this._socket = this._fakeWebsocket(),
            this._debouncedRunFakeCapi = a(this.run, 3e3)
        }
    }();
    t.FakeCapi = c
}
, function(e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    );
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(453)
      , a = n(3)
      , c = n(447)
      , s = a.Logger.create("universal.bg.socket")
      , u = function(e) {
        function t(t, n, r, o) {
            var a = e.call(this) || this;
            return a._sender = n,
            a._onInternalSocketEmit = r,
            a._fakeCapi = o,
            a._messageType = "socket-server",
            a._closedByMe = !1,
            a.connect = function(e) {
                return a._internalSocket.connect(e)
            }
            ,
            a.send = function(e) {
                return a._internalSocket.send(e)
            }
            ,
            a.close = function() {
                return a._internalSocket.close()
            }
            ,
            a.wsPlay = function() {
                return a._internalSocket.wsPlay()
            }
            ,
            a.wsPause = function() {
                return a._internalSocket.wsPause()
            }
            ,
            a.isConnected = function() {
                return a._internalSocket.isConnected()
            }
            ,
            a.socketId = "0",
            a.reconnect = function() {
                a._reconnectInProgress || (a._reconnectInProgress = !0,
                a._reconnectFn().then(function() {
                    return a._reconnectInProgress = !1
                }))
            }
            ,
            a.release = function() {
                s.trace("CLOSE SOCKET"),
                a._internalSocket.close(),
                a._internalSocket.release()
            }
            ,
            a.overrideEmitToNoOp = function() {
                return a._internalSocket.emit = function() {}
            }
            ,
            a.setMessageType = function(e) {
                s.trace("USE EXT SOCKET", e),
                a._messageType = e
            }
            ,
            a._getEnhancedSocket = function(e) {
                var t = a._fakeCapi.isOn() ? a._fakeCapi.getSocket() : i(e)
                  , n = t.emit;
                return Object.assign(t, {
                    emit: function(e, t) {
                        n(e, t),
                        a._emit(e, t)
                    },
                    reconnect: a.reconnect,
                    toString: function() {
                        return "[object BackgroundSocket]"
                    }
                })
            }
            ,
            a._emit = function(e, t) {
                "disconnect" === e && a._closedByMe ? a._closedByMe = !1 : a._onInternalSocketEmit({
                    event: e,
                    socketId: a._socketId,
                    msg: t
                }, a._messageType, a._sender)
            }
            ,
            a._reconnectFn = function() {
                var e = function() {}
                  , t = new Promise(function(t) {
                    return e = t
                }
                );
                return a._internalSocket.one("connect", e),
                a._internalSocket.isConnected() ? (a._internalSocket.one("disconnect", function() {
                    return setTimeout(function() {
                        return a._internalSocket.connect(!0)
                    }, 0)
                }),
                a._closedByMe = !0,
                a._internalSocket.close()) : a._internalSocket.connect(!0),
                t
            }
            ,
            a._internalSocket = a._getEnhancedSocket(t),
            a._socketId = t.socketId,
            a
        }
        return o(t, e),
        t
    }(c.Emitter);
    t.BackgroundSocket = u
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(13)
      , o = n(3)
      , i = n(1)
      , a = n(200)
      , c = n(56);
    var s, u, l = "src/popupEditorIFrame.html", f = c.getBackgoundPageExtensionApi();
    function p(e, t, n, o) {
        r.on(t, function(a, c, u) {
            e.debug("received '" + t + "' from tab #" + u),
            r.emitTo(u, n, a, function() {
                return c("success")
            }, function() {
                return c("addressee-is-disconnected-from-bg")
            }, function(e) {
                switch (e) {
                case s.toPopupEditor:
                    return function(e) {
                        return e && f.isExtensionUrl(l, e) || !1
                    }
                    ;
                case s.toContentScript:
                    return function(e) {
                        return e && !f.isExtensionUrl(l, e) || !1
                    }
                    ;
                default:
                    return void i.assertNever(e)
                }
            }(o))
        })
    }
    (u = s || (s = {})).toPopupEditor = "toPopupEditor",
    u.toContentScript = "toContentScript",
    t.initIFrameCommunicationProxy = function(e) {
        var t, n, i;
        void 0 === e && (e = o.Logger.create("bg/iframeMessagingProxy")),
        p(e, a.PopupEditorIFrameMessages.bgPopupEditorIFrameToPopupEditor, a.PopupEditorIFrameMessages.popupEditorIFrame, s.toPopupEditor),
        p(e, a.PopupEditorIFrameMessages.bgPopupEditorIFrameFromPopupEditor, a.PopupEditorIFrameMessages.popupEditorIFrame, s.toContentScript),
        t = e,
        n = a.SignInIframeMessages.bgSignInIFrame,
        i = a.SignInIframeMessages.signInIFrame,
        r.on(n, function(e, o, a) {
            t.debug("received '" + n + "' from tab #" + a),
            r.emitTo(a, i, e)
        }),
        e.debug("IFrame messaging initialized")
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(295)
      , i = n(4)
      , a = n(86)
      , c = n(1316)
      , s = n(433)
      , u = function() {
        function e(e) {
            this._prefs = e
        }
        return e.prototype.start = function() {
            var e, t;
            return r(this, function(n) {
                switch (n.label) {
                case 0:
                    return [4, o.call(c.getInitial, this._prefs)];
                case 1:
                    return e = n.sent(),
                    [4, o.put(s.initialDynamicConfig(e))];
                case 2:
                    n.sent(),
                    n.label = 3;
                case 3:
                    return [4, o.call(c.load, this._prefs)];
                case 4:
                    return (t = n.sent()) ? [4, o.put(s.dynamicConfig(t))] : [3, 6];
                case 5:
                    n.sent(),
                    n.label = 6;
                case 6:
                    return [4, o.call(i.delay, 5 * a.minute)];
                case 7:
                    return n.sent(),
                    [3, 3];
                case 8:
                    return [2]
                }
            })
        }
        ,
        e
    }();
    t.DynamicConfigSagas = u
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    }
      , o = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(10)
      , a = n(14)
      , c = n(432)
      , s = n(3)
      , u = n(71)
      , l = n(86)
      , f = n(382)
      , p = s.Logger.create("universal/bg/state/dynamicConfig")
      , d = "dynamicConfig";
    function h(e, t) {
        return c.parse(f.DynamicConfig.parse(e))(t)
    }
    t.getInitial = function(e) {
        return r(this, void 0, void 0, function() {
            var t, n;
            return o(this, function(r) {
                switch (r.label) {
                case 0:
                    return r.trys.push([0, 2, , 3]),
                    [4, e.get(d)];
                case 1:
                    return (t = r.sent()) ? [2, h("local", t)] : [2, f.DynamicConfig.empty];
                case 2:
                    return n = r.sent(),
                    a.felog.dynamicConfigLoadFromPrefsError(n.message),
                    p.error("Error getting DynamicConfig from prefs: " + n.message),
                    [3, 3];
                case 3:
                    return [2, f.DynamicConfig.empty]
                }
            })
        })
    }
    ,
    t.load = function(e) {
        return r(this, void 0, void 0, function() {
            var t, n, r, c, s;
            return o(this, function(o) {
                switch (o.label) {
                case 0:
                    return o.trys.push([0, 5, , 6]),
                    [4, Promise.race([fetch(i.getGlobal().appConfig.url.dynamicConfigUrl), u.SafePromise.delay(60 * l.second).then(function() {
                        throw new Error("Timeout")
                    })])];
                case 1:
                    return (t = o.sent()).ok ? [3, 3] : [4, t.text()];
                case 2:
                    throw n = o.sent(),
                    new Error("Request error: " + t.status + " " + n);
                case 3:
                    return [4, t.json()];
                case 4:
                    return r = o.sent(),
                    c = h("server", r),
                    e.set(d, r).catch(function(e) {
                        a.felog.dynamicConfigSaveToPrefsError(e.message),
                        p.error("Error caching DynamicConfig: " + e.message)
                    }),
                    [2, c];
                case 5:
                    return s = o.sent(),
                    a.felog.dynamicConfigLoadFromServerError(s.message),
                    p.error("Error getting DynamicConfig from server: " + s.message),
                    [3, 6];
                case 6:
                    return [2, null]
                }
            })
        })
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1318)
      , o = n(1004)
      , i = n(1319)
      , a = n(3)
      , c = function() {
        return function e(t, n) {
            void 0 === n && (n = a.Logger.create(e.name));
            var r = this;
            this._authSagaRunners = t,
            this._log = n,
            this.publicApi = {
                log: function(e) {
                    r._log.debug("📡 log via CS-BG rpc: " + e)
                },
                getTime: function() {
                    return Date.now()
                },
                logout: function() {
                    r._authSagaRunners.logout()
                }
            }
        }
    }();
    t.CsToBgRpcApiImpl = c,
    (t.CsToBgRpcServer || (t.CsToBgRpcServer = {})).create = function(e) {
        var t = new c(e).publicApi;
        return new r.GenericRpcServer(new i.LegacyBasedBgRpcTransport(o.CsToBgRpcApi.rpcLegacyMessageName),t)
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    }
      , o = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
      , i = this && this.__read || function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
      , a = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(i(arguments[t]));
        return e
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = function() {
        function e(e, t) {
            var n = this;
            this._transport = e,
            this._api = t,
            this._sub = this._transport.inbound.subscribe(function(e) {
                return r(n, void 0, void 0, function() {
                    var t, n, r;
                    return o(this, function(o) {
                        switch (o.label) {
                        case 0:
                            return o.trys.push([0, 4, , 5]),
                            "function" != typeof (t = this._api[e.data.method]) ? [3, 2] : [4, t.call.apply(t, a([this._api], e.data.args))];
                        case 1:
                            return n = o.sent(),
                            this._transport.outbound({
                                clientId: e.clientId,
                                data: {
                                    id: e.data.id,
                                    res: n
                                }
                            }),
                            [3, 3];
                        case 2:
                            throw {
                                message: "invalid method name " + e.data.method
                            };
                        case 3:
                            return [3, 5];
                        case 4:
                            return r = o.sent(),
                            this._transport.outbound({
                                clientId: e.clientId,
                                data: {
                                    id: e.data.id,
                                    err: r
                                }
                            }),
                            [3, 5];
                        case 5:
                            return [2]
                        }
                    })
                })
            })
        }
        return e.prototype.dispose = function() {
            this._sub.unsubscribe()
        }
        ,
        e
    }();
    t.GenericRpcServer = c
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0)
      , o = function() {
        return function(e, t) {
            void 0 === t && (t = n(13));
            var o = this;
            this._rpcMessageName = e,
            this._message = t,
            this.inbound = new r.Observable(function(e) {
                var t = function(t, n, r) {
                    var o = t;
                    e.next({
                        clientId: r,
                        data: o
                    })
                };
                return o._message.on(o._rpcMessageName, t),
                function() {
                    return o._message.off(o._rpcMessageName, t)
                }
            }
            ),
            this.outbound = function(e) {
                o._message.emitTo(e.clientId, o._rpcMessageName, e.data)
            }
        }
    }();
    t.LegacyBasedBgRpcTransport = o
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__read || function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
      , o = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(r(arguments[t]));
        return e
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(13)
      , a = ["log", "info", "warn", "error", "time", "timeEnd", "debug"]
      , c = window
      , s = console;
    t.startSendingBgLogsToActiveTab = function() {
        var e = {};
        a.forEach(function(t) {
            e[t] = function() {
                for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                if ("toFocussed not allowed for popup when it open like regular tab" !== e[0])
                    try {
                        i.emitFocusedTab("bg-log", {
                            method: t,
                            args: e
                        })
                    } catch (e) {}
                s[t].apply(s, o(e))
            }
        }),
        c.console = e
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e) {
            this.gnar = e
        }
        return e.prototype.acceptedAlert = function(e, t, n) {
            return this.gnar.track({
                eventName: "chromeExt/accepted-alert",
                object: "alert",
                objectId: "accepted",
                experiment: e,
                sessionId: t,
                url: n
            }, {
                lite: !0,
                sendInstance: !1,
                sendBrowser: !1,
                sendUser: !1
            })
        }
        ,
        e.prototype.appStart = function() {
            return this.gnar.track({
                action: "start",
                component: "companion",
                eventName: "chromeExt/companion/app-start",
                object: "app"
            })
        }
        ,
        e.prototype.capturedException = function(e, t, n) {
            return this.gnar.track({
                eventName: "chromeExt/captured-exception",
                object: "exception",
                objectId: "captured",
                experiment: e,
                sessionId: t,
                url: n
            }, {
                lite: !0,
                sendInstance: !1,
                sendBrowser: !1,
                sendUser: !1
            })
        }
        ,
        e.prototype.checkingToggleClick = function(e, t, n) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/checking-toggle-click",
                object: "toggle",
                objectId: "checking",
                placement: e,
                siteCategory: t,
                state: n
            })
        }
        ,
        e.prototype.connectednessDataEmail = function(e, t, n, r, o, i, a, c, s, u, l) {
            return this.gnar.track({
                eventName: "chromeExt/connectednessData-email",
                object: "email",
                objectId: "connectednessData",
                businessCount: e,
                businessHistogramByRCount: t,
                businessHistogramByRecipients: n,
                hashedUserId: r,
                histogramByRCount: o,
                histogramByRecipients: i,
                personalCount: a,
                personalHistogramByRCount: c,
                personalHistogramByRecipients: s,
                startDateTime: u,
                totalCount: l
            }, {
                lite: !0,
                sendInstance: !1,
                sendBrowser: !1,
                sendUser: !1
            })
        }
        ,
        e.prototype.declineBetaButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/declineBeta-button-click",
                object: "button",
                objectId: "declineBeta",
                placement: e
            })
        }
        ,
        e.prototype.definitionPopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/definition-popup-show",
                object: "popup",
                objectId: "definition"
            })
        }
        ,
        e.prototype.definitionToggleClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/definition-toggle-click",
                object: "toggle",
                objectId: "definition",
                state: e
            })
        }
        ,
        e.prototype.delightfulMessagePopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/delightfulMessage-popup-show",
                object: "popup",
                objectId: "delightfulMessage"
            })
        }
        ,
        e.prototype.disableButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/disable-button-click",
                object: "button",
                objectId: "disable",
                placement: e
            })
        }
        ,
        e.prototype.disableReminderDoNotShowAgainButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/disableReminderDoNotShowAgain-button-click",
                object: "button",
                objectId: "disableReminderDoNotShowAgain",
                placement: e
            })
        }
        ,
        e.prototype.disableReminderNotificationShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/disableReminder-notification-show",
                object: "notification",
                objectId: "disableReminder"
            })
        }
        ,
        e.prototype.disableUntilNextVisitButtonClick = function(e, t) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/disableUntilNextVisit-button-click",
                object: "button",
                objectId: "disableUntilNextVisit",
                placement: e,
                siteCategory: t
            })
        }
        ,
        e.prototype.documentGenreButtonClick = function(e, t) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/documentGenre-button-click",
                object: "button",
                objectId: "documentGenre",
                documentGenre: e,
                placement: t
            })
        }
        ,
        e.prototype.editorInit = function(e, t, n, r) {
            return this.gnar.track({
                action: "init",
                eventName: "chromeExt/editor-init",
                object: "editor",
                docId: e,
                mode: t,
                cssBundle: n,
                jsBundle: r
            })
        }
        ,
        e.prototype.emailSummarizationAcceptButtonClick = function(e, t) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/emailSummarizationAccept-button-click",
                object: "button",
                objectId: "emailSummarizationAccept",
                docId: e,
                placement: t
            })
        }
        ,
        e.prototype.emailSummarizationBadgeShow = function(e) {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/emailSummarization-badge-show",
                object: "badge",
                objectId: "emailSummarization",
                docId: e
            })
        }
        ,
        e.prototype.emailSummarizationDisableButtonClick = function(e, t) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/emailSummarizationDisable-button-click",
                object: "button",
                objectId: "emailSummarizationDisable",
                docId: e,
                placement: t
            })
        }
        ,
        e.prototype.emailSummarizationExpandButtonClick = function(e, t) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/emailSummarizationExpand-button-click",
                object: "button",
                objectId: "emailSummarizationExpand",
                docId: e,
                placement: t
            })
        }
        ,
        e.prototype.emailSummarizationIgnoreButtonClick = function(e, t) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/emailSummarizationIgnore-button-click",
                object: "button",
                objectId: "emailSummarizationIgnore",
                docId: e,
                placement: t
            })
        }
        ,
        e.prototype.emailSummarizationPopupShow = function(e) {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/emailSummarization-popup-show",
                object: "popup",
                objectId: "emailSummarization",
                docId: e
            })
        }
        ,
        e.prototype.emogenieBetaDeclineBetaButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/emogenieBeta/declineBeta-button-click",
                feature: "emogenieBeta",
                object: "button",
                objectId: "declineBeta",
                placement: e
            })
        }
        ,
        e.prototype.emogenieBetaEnableButtonClick = function(e, t) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/emogenieBeta/enable-button-click",
                feature: "emogenieBeta",
                object: "button",
                objectId: "enable",
                pageId: e,
                placement: t
            })
        }
        ,
        e.prototype.emogenieBetaEnablePopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/emogenieBeta/enable-popup-show",
                feature: "emogenieBeta",
                object: "popup",
                objectId: "enable"
            })
        }
        ,
        e.prototype.emogenieBetaInvitePopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/emogenieBeta/invite-popup-show",
                feature: "emogenieBeta",
                object: "popup",
                objectId: "invite"
            })
        }
        ,
        e.prototype.emogenieBetaLearnMoreButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/emogenieBeta/learnMore-button-click",
                feature: "emogenieBeta",
                object: "button",
                objectId: "learnMore",
                placement: e
            })
        }
        ,
        e.prototype.emogenieBetaLeaveBetaButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/emogenieBeta/leaveBeta-button-click",
                feature: "emogenieBeta",
                object: "button",
                objectId: "leaveBeta",
                placement: e
            })
        }
        ,
        e.prototype.emogenieBetaLeaveBetaPopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/emogenieBeta/leaveBeta-popup-show",
                feature: "emogenieBeta",
                object: "popup",
                objectId: "leaveBeta"
            })
        }
        ,
        e.prototype.emogenieBetaSettingsButtonClick = function(e, t) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/emogenieBeta/settings-button-click",
                feature: "emogenieBeta",
                object: "button",
                objectId: "settings",
                pageId: e,
                placement: t
            })
        }
        ,
        e.prototype.emogenieBetaSettingsPopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/emogenieBeta/settings-popup-show",
                feature: "emogenieBeta",
                object: "popup",
                objectId: "settings"
            })
        }
        ,
        e.prototype.emogenieBetaShareFeedbackButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/emogenieBeta/shareFeedback-button-click",
                feature: "emogenieBeta",
                object: "button",
                objectId: "shareFeedback",
                placement: e
            })
        }
        ,
        e.prototype.emogenieBetaShowEmogenieToggleClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/emogenieBeta/showEmogenie-toggle-click",
                feature: "emogenieBeta",
                object: "toggle",
                objectId: "showEmogenie",
                state: e
            })
        }
        ,
        e.prototype.emogenieBetaThumbsDownButtonClick = function(e, t, n) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/emogenieBeta/thumbsDown-button-click",
                feature: "emogenieBeta",
                object: "button",
                objectId: "thumbsDown",
                docId: e,
                emotionName: t,
                placement: n
            })
        }
        ,
        e.prototype.emogenieBetaThumbsUpButtonClick = function(e, t, n) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/emogenieBeta/thumbsUp-button-click",
                feature: "emogenieBeta",
                object: "button",
                objectId: "thumbsUp",
                docId: e,
                emotionName: t,
                placement: n
            })
        }
        ,
        e.prototype.emogenieBetaTryNowButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/emogenieBeta/tryNow-button-click",
                feature: "emogenieBeta",
                object: "button",
                objectId: "tryNow",
                placement: e
            })
        }
        ,
        e.prototype.emogenieBetaWelcomePopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/emogenieBeta/welcome-popup-show",
                feature: "emogenieBeta",
                object: "popup",
                objectId: "welcome"
            })
        }
        ,
        e.prototype.emogeniePopupShow = function(e, t, n) {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/emogenie-popup-show",
                object: "popup",
                objectId: "emogenie",
                docId: e,
                emotions: t,
                numberEmotionsShown: n
            })
        }
        ,
        e.prototype.emogenieShow = function(e, t, n) {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/emogenie-show",
                object: "emogenie",
                docId: e,
                emotions: t,
                numberEmotionsShown: n
            })
        }
        ,
        e.prototype.enableButtonClick = function(e, t) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/enable-button-click",
                object: "button",
                objectId: "enable",
                pageId: e,
                placement: t
            })
        }
        ,
        e.prototype.enablePopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/enable-popup-show",
                object: "popup",
                objectId: "enable"
            })
        }
        ,
        e.prototype.facebookSignInButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/facebookSignIn-button-click",
                object: "button",
                objectId: "facebookSignIn",
                placement: e
            })
        }
        ,
        e.prototype.facebookSignUpButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/facebookSignUp-button-click",
                object: "button",
                objectId: "facebookSignUp",
                placement: e
            })
        }
        ,
        e.prototype.featuresUnavailablePopupDisableButtonClick = function() {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/featuresUnavailablePopupDisable-button-click",
                object: "button",
                objectId: "featuresUnavailablePopupDisable",
                placement: "featuresUnavailablePopup"
            })
        }
        ,
        e.prototype.featuresUnavailablePopupDismissButtonClick = function() {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/featuresUnavailablePopupDismiss-button-click",
                object: "button",
                objectId: "featuresUnavailablePopupDismiss",
                placement: "featuresUnavailablePopup"
            })
        }
        ,
        e.prototype.featuresUnavailablePopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/featuresUnavailable-popup-show",
                object: "popup",
                objectId: "featuresUnavailable"
            })
        }
        ,
        e.prototype.feedbackPopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/feedback-popup-show",
                object: "popup",
                objectId: "feedback",
                placement: "gdocs"
            })
        }
        ,
        e.prototype.feedbackSentButtonClick = function(e, t, n) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/feedbackSent-button-click",
                object: "button",
                objectId: "feedbackSent",
                feedback: e,
                placement: t,
                score: n
            })
        }
        ,
        e.prototype.gButtonClick = function(e, t, n, r) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/g-button-click",
                object: "button",
                objectId: "g",
                docId: e,
                numberOfAdvancedAlerts: t,
                numberOfCriticalAlerts: n,
                placement: r
            })
        }
        ,
        e.prototype.gdocsEditorInit = function(e, t, n, r) {
            return this.gnar.track({
                action: "init",
                eventName: "chromeExt/gdocs/editor-init",
                feature: "gdocs",
                object: "editor",
                docId: e,
                mode: t,
                cssBundle: n,
                jsBundle: r
            })
        }
        ,
        e.prototype.gdocsFeaturesUnavailablePopupDisableButtonClick = function() {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/gdocs/featuresUnavailablePopupDisable-button-click",
                feature: "gdocs",
                object: "button",
                objectId: "featuresUnavailablePopupDisable",
                placement: "featuresUnavailablePopup"
            })
        }
        ,
        e.prototype.gdocsFeaturesUnavailablePopupDismissButtonClick = function() {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/gdocs/featuresUnavailablePopupDismiss-button-click",
                feature: "gdocs",
                object: "button",
                objectId: "featuresUnavailablePopupDismiss",
                placement: "featuresUnavailablePopup"
            })
        }
        ,
        e.prototype.gdocsFeaturesUnavailablePopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/gdocs/featuresUnavailable-popup-show",
                feature: "gdocs",
                object: "popup",
                objectId: "featuresUnavailable"
            })
        }
        ,
        e.prototype.gdocsLargeDocumentButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/gdocs/largeDocument-button-click",
                feature: "gdocs",
                object: "button",
                objectId: "largeDocument",
                placement: e
            })
        }
        ,
        e.prototype.gdocsLargeDocumentPopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/gdocs/largeDocument-popup-show",
                feature: "gdocs",
                object: "popup",
                objectId: "largeDocument"
            })
        }
        ,
        e.prototype.gdocsOfflinePageReloadButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/gdocs/offlinePageReload-button-click",
                feature: "gdocs",
                object: "button",
                objectId: "offlinePageReload",
                placement: e
            })
        }
        ,
        e.prototype.gdocsOfflinePopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/gdocs/offline-popup-show",
                feature: "gdocs",
                object: "popup",
                objectId: "offline"
            })
        }
        ,
        e.prototype.gdocsOpenEditorButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/gdocs/openEditor-button-click",
                feature: "gdocs",
                object: "button",
                objectId: "openEditor",
                placement: e
            })
        }
        ,
        e.prototype.gdocsOptInPopupCloseButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/gdocs/optInPopupClose-button-click",
                feature: "gdocs",
                object: "button",
                objectId: "optInPopupClose",
                placement: e
            })
        }
        ,
        e.prototype.gdocsOptInPopupEnableButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/gdocs/optInPopupEnable-button-click",
                feature: "gdocs",
                object: "button",
                objectId: "optInPopupEnable",
                placement: e
            })
        }
        ,
        e.prototype.gdocsOptInPopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/gdocs/optIn-popup-show",
                feature: "gdocs",
                object: "popup",
                objectId: "optIn"
            })
        }
        ,
        e.prototype.gdocsRegisterPromptButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/gdocs/registerPrompt-button-click",
                feature: "gdocs",
                object: "button",
                objectId: "registerPrompt",
                placement: e
            })
        }
        ,
        e.prototype.gdocsRegisterPromptPopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/gdocs/registerPrompt-popup-show",
                feature: "gdocs",
                object: "popup",
                objectId: "registerPrompt"
            })
        }
        ,
        e.prototype.getPremiumButtonClick = function(e, t, n) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/getPremium-button-click",
                object: "button",
                objectId: "getPremium",
                placement: e,
                numberOfAdvancedAlerts: t,
                numberOfCriticalAlerts: n
            })
        }
        ,
        e.prototype.gmailPopupGmailPremiumNotificationClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/gmailPopup/gmailPremium-notification-click",
                feature: "gmailPopup",
                object: "notification",
                objectId: "gmailPremium",
                location: e
            })
        }
        ,
        e.prototype.gmailPopupGmailPremiumNotificationShow = function(e, t) {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/gmailPopup/gmailPremium-notification-show",
                feature: "gmailPopup",
                object: "notification",
                objectId: "gmailPremium",
                characters: e,
                premiumAlerts: t
            })
        }
        ,
        e.prototype.gmailPopupGmailPremiumPopupClose = function(e) {
            return this.gnar.track({
                action: "close",
                eventName: "chromeExt/gmailPopup/gmailPremium-popup-close",
                feature: "gmailPopup",
                object: "popup",
                objectId: "gmailPremium",
                reason: e
            })
        }
        ,
        e.prototype.gmailPopupGmailPremiumPopupLearnMoreButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/gmailPopup/gmailPremiumPopupLearnMore-button-click",
                feature: "gmailPopup",
                object: "button",
                objectId: "gmailPremiumPopupLearnMore",
                placement: e
            })
        }
        ,
        e.prototype.gmailPopupGmailPremiumPopupShow = function(e, t) {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/gmailPopup/gmailPremium-popup-show",
                feature: "gmailPopup",
                object: "popup",
                objectId: "gmailPremium",
                characters: e,
                premiumAlerts: t
            })
        }
        ,
        e.prototype.gmailPremiumNotificationClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/gmailPremium-notification-click",
                object: "notification",
                objectId: "gmailPremium",
                location: e
            })
        }
        ,
        e.prototype.gmailPremiumNotificationShow = function(e, t) {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/gmailPremium-notification-show",
                object: "notification",
                objectId: "gmailPremium",
                characters: e,
                premiumAlerts: t
            })
        }
        ,
        e.prototype.gmailPremiumPopupClose = function(e) {
            return this.gnar.track({
                action: "close",
                eventName: "chromeExt/gmailPremium-popup-close",
                object: "popup",
                objectId: "gmailPremium",
                reason: e
            })
        }
        ,
        e.prototype.gmailPremiumPopupLearnMoreButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/gmailPremiumPopupLearnMore-button-click",
                object: "button",
                objectId: "gmailPremiumPopupLearnMore",
                placement: e
            })
        }
        ,
        e.prototype.gmailPremiumPopupShow = function(e, t) {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/gmailPremium-popup-show",
                object: "popup",
                objectId: "gmailPremium",
                characters: e,
                premiumAlerts: t
            })
        }
        ,
        e.prototype.googleSignInButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/googleSignIn-button-click",
                object: "button",
                objectId: "googleSignIn",
                placement: e
            })
        }
        ,
        e.prototype.googleSignUpButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/googleSignUp-button-click",
                object: "button",
                objectId: "googleSignUp",
                placement: e
            })
        }
        ,
        e.prototype.initializedExtension = function(e, t, n) {
            return this.gnar.track({
                eventName: "chromeExt/initialized-extension",
                object: "extension",
                objectId: "initialized",
                experiment: e,
                sessionId: t,
                url: n
            }, {
                lite: !0,
                sendInstance: !1,
                sendBrowser: !1,
                sendUser: !1
            })
        }
        ,
        e.prototype.install = function(e) {
            return this.gnar.track({
                action: "install",
                eventName: "chromeExt/install",
                installSource: e
            })
        }
        ,
        e.prototype.invitePopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/invite-popup-show",
                object: "popup",
                objectId: "invite"
            })
        }
        ,
        e.prototype.languageSettingUpdate = function(e, t, n) {
            return this.gnar.track({
                action: "update",
                eventName: "chromeExt/language-setting-update",
                object: "setting",
                objectId: "language",
                language: e,
                languageSource: t,
                isLikeCapi: n
            })
        }
        ,
        e.prototype.largeDocumentButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/largeDocument-button-click",
                object: "button",
                objectId: "largeDocument",
                placement: e
            })
        }
        ,
        e.prototype.largeDocumentPopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/largeDocument-popup-show",
                object: "popup",
                objectId: "largeDocument"
            })
        }
        ,
        e.prototype.launchTime = function(e, t, n) {
            return this.gnar.track({
                action: "launchTime",
                eventName: "chromeExt/launchTime",
                isFirstLoad: e,
                popupEditorType: t,
                time: n
            })
        }
        ,
        e.prototype.learnMoreButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/learnMore-button-click",
                object: "button",
                objectId: "learnMore",
                placement: e
            })
        }
        ,
        e.prototype.leaveBetaButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/leaveBeta-button-click",
                object: "button",
                objectId: "leaveBeta",
                placement: e
            })
        }
        ,
        e.prototype.leaveBetaPopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/leaveBeta-popup-show",
                object: "popup",
                objectId: "leaveBeta"
            })
        }
        ,
        e.prototype.loginReminderBadgeShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/loginReminder-badge-show",
                object: "badge",
                objectId: "loginReminder"
            })
        }
        ,
        e.prototype.loginReminderCloseButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/loginReminderClose-button-click",
                object: "button",
                objectId: "loginReminderClose",
                placement: e
            })
        }
        ,
        e.prototype.loginReminderDoNotShowThisAgainButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/loginReminderDoNotShowThisAgain-button-click",
                object: "button",
                objectId: "loginReminderDoNotShowThisAgain",
                placement: e
            })
        }
        ,
        e.prototype.loginReminderPopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/loginReminder-popup-show",
                object: "popup",
                objectId: "loginReminder"
            })
        }
        ,
        e.prototype.logoutFormFail = function(e, t) {
            return this.gnar.track({
                action: "fail",
                eventName: "chromeExt/logout-form-fail",
                object: "form",
                objectId: "logout",
                fieldErrors: e,
                formErrorMessage: t
            })
        }
        ,
        e.prototype.logoutFormSuccess = function() {
            return this.gnar.track({
                action: "success",
                eventName: "chromeExt/logout-form-success",
                object: "form",
                objectId: "logout"
            })
        }
        ,
        e.prototype.myGrammarlyButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/myGrammarly-button-click",
                object: "button",
                objectId: "myGrammarly",
                placement: e
            })
        }
        ,
        e.prototype.newBadgeButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/newBadge-button-click",
                object: "button",
                objectId: "newBadge",
                placement: e
            })
        }
        ,
        e.prototype.newDocumentButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/newDocument-button-click",
                object: "button",
                objectId: "newDocument",
                placement: e
            })
        }
        ,
        e.prototype.offlinePageReloadButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/offlinePageReload-button-click",
                object: "button",
                objectId: "offlinePageReload",
                placement: e
            })
        }
        ,
        e.prototype.offlinePopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/offline-popup-show",
                object: "popup",
                objectId: "offline"
            })
        }
        ,
        e.prototype.onboardingOverlayCloseButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/onboarding/overlayClose-button-click",
                feature: "onboarding",
                object: "button",
                objectId: "overlayClose",
                placement: e
            })
        }
        ,
        e.prototype.onboardingOverlayLetsWriteButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/onboarding/overlayLetsWrite-button-click",
                feature: "onboarding",
                object: "button",
                objectId: "overlayLetsWrite",
                placement: e
            })
        }
        ,
        e.prototype.onboardingOverlayNextButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/onboarding/overlayNext-button-click",
                feature: "onboarding",
                object: "button",
                objectId: "overlayNext",
                placement: e
            })
        }
        ,
        e.prototype.onboardingOverlayPersonalizeButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/onboarding/overlayPersonalize-button-click",
                feature: "onboarding",
                object: "button",
                objectId: "overlayPersonalize",
                placement: e
            })
        }
        ,
        e.prototype.onboardingOverlaySaveButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/onboarding/overlaySave-button-click",
                feature: "onboarding",
                object: "button",
                objectId: "overlaySave",
                placement: e
            })
        }
        ,
        e.prototype.onboardingOverlayShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/onboarding/overlay-show",
                feature: "onboarding",
                object: "overlay"
            })
        }
        ,
        e.prototype.onboardingPopupCloseButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/onboarding/popupClose-button-click",
                feature: "onboarding",
                object: "button",
                objectId: "popupClose",
                placement: e
            })
        }
        ,
        e.prototype.onboardingPopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/onboarding/popup-show",
                feature: "onboarding",
                object: "popup"
            })
        }
        ,
        e.prototype.openEditorButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/openEditor-button-click",
                object: "button",
                objectId: "openEditor",
                placement: e
            })
        }
        ,
        e.prototype.optInPopupCloseButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/optInPopupClose-button-click",
                object: "button",
                objectId: "optInPopupClose",
                placement: e
            })
        }
        ,
        e.prototype.optInPopupEnableButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/optInPopupEnable-button-click",
                object: "button",
                objectId: "optInPopupEnable",
                placement: e
            })
        }
        ,
        e.prototype.optInPopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/optIn-popup-show",
                object: "popup",
                objectId: "optIn"
            })
        }
        ,
        e.prototype.overlayCloseButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/overlayClose-button-click",
                object: "button",
                objectId: "overlayClose",
                placement: e
            })
        }
        ,
        e.prototype.overlayLetsWriteButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/overlayLetsWrite-button-click",
                object: "button",
                objectId: "overlayLetsWrite",
                placement: e
            })
        }
        ,
        e.prototype.overlayNextButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/overlayNext-button-click",
                object: "button",
                objectId: "overlayNext",
                placement: e
            })
        }
        ,
        e.prototype.overlayPersonalizeButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/overlayPersonalize-button-click",
                object: "button",
                objectId: "overlayPersonalize",
                placement: e
            })
        }
        ,
        e.prototype.overlaySaveButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/overlaySave-button-click",
                object: "button",
                objectId: "overlaySave",
                placement: e
            })
        }
        ,
        e.prototype.overlayShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/overlay-show",
                object: "overlay"
            })
        }
        ,
        e.prototype.popupCloseButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/popupClose-button-click",
                object: "button",
                objectId: "popupClose",
                placement: e
            })
        }
        ,
        e.prototype.popupEditorDocumentGenreButtonClick = function(e, t) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/popupEditor/documentGenre-button-click",
                feature: "popupEditor",
                object: "button",
                objectId: "documentGenre",
                documentGenre: e,
                placement: t
            })
        }
        ,
        e.prototype.popupEditorLaunchTime = function(e, t, n) {
            return this.gnar.track({
                action: "launchTime",
                eventName: "chromeExt/popupEditor/launchTime",
                feature: "popupEditor",
                isFirstLoad: e,
                popupEditorType: t,
                time: n
            })
        }
        ,
        e.prototype.popupEditorSettingToggleClick = function(e, t) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/popupEditor/setting-toggle-click",
                feature: "popupEditor",
                object: "toggle",
                objectId: "setting",
                settingName: e,
                state: t
            })
        }
        ,
        e.prototype.popupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/popup-show",
                object: "popup"
            })
        }
        ,
        e.prototype.premiumPreviewCardShow = function(e) {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/premiumPreview-card-show",
                object: "card",
                objectId: "premiumPreview",
                lens: e
            })
        }
        ,
        e.prototype.premiumPreviewLearnMoreClick = function() {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/premiumPreview-learnMore-click",
                object: "learnMore",
                objectId: "premiumPreview"
            })
        }
        ,
        e.prototype.premiumPreviewNotificationClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/premiumPreview-notification-click",
                object: "notification",
                objectId: "premiumPreview",
                location: e
            })
        }
        ,
        e.prototype.premiumPreviewNotificationShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/premiumPreview-notification-show",
                object: "notification",
                objectId: "premiumPreview"
            })
        }
        ,
        e.prototype.premiumPreviewPremiumPreviewCardShow = function(e) {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/premiumPreview/premiumPreview-card-show",
                feature: "premiumPreview",
                object: "card",
                objectId: "premiumPreview",
                lens: e
            })
        }
        ,
        e.prototype.premiumPreviewPremiumPreviewLearnMoreClick = function() {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/premiumPreview/premiumPreview-learnMore-click",
                feature: "premiumPreview",
                object: "learnMore",
                objectId: "premiumPreview"
            })
        }
        ,
        e.prototype.premiumPreviewPremiumPreviewNotificationClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/premiumPreview/premiumPreview-notification-click",
                feature: "premiumPreview",
                object: "notification",
                objectId: "premiumPreview",
                location: e
            })
        }
        ,
        e.prototype.premiumPreviewPremiumPreviewNotificationShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/premiumPreview/premiumPreview-notification-show",
                feature: "premiumPreview",
                object: "notification",
                objectId: "premiumPreview"
            })
        }
        ,
        e.prototype.premiumPreviewPremiumPreviewTransformClick = function() {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/premiumPreview/premiumPreview-transform-click",
                feature: "premiumPreview",
                object: "transform",
                objectId: "premiumPreview"
            })
        }
        ,
        e.prototype.premiumPreviewTransformClick = function() {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/premiumPreview-transform-click",
                object: "transform",
                objectId: "premiumPreview"
            })
        }
        ,
        e.prototype.registerPromptButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/registerPrompt-button-click",
                object: "button",
                objectId: "registerPrompt",
                placement: e
            })
        }
        ,
        e.prototype.registerPromptPopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/registerPrompt-popup-show",
                object: "popup",
                objectId: "registerPrompt"
            })
        }
        ,
        e.prototype.safariMigrationInlineCardClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/safariMigration-inlineCard-click",
                object: "inlineCard",
                objectId: "safariMigration",
                migrationRequestType: e
            })
        }
        ,
        e.prototype.safariMigrationInlineCardShow = function(e) {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/safariMigration-inlineCard-show",
                object: "inlineCard",
                objectId: "safariMigration",
                migrationRequestType: e
            })
        }
        ,
        e.prototype.safariMigrationPopupButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/safariMigrationPopup-button-click",
                object: "button",
                objectId: "safariMigrationPopup",
                placement: e
            })
        }
        ,
        e.prototype.safariMigrationPopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/safariMigration-popup-show",
                object: "popup",
                objectId: "safariMigration"
            })
        }
        ,
        e.prototype.settingToggleClick = function(e, t) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/setting-toggle-click",
                object: "toggle",
                objectId: "setting",
                settingName: e,
                state: t
            })
        }
        ,
        e.prototype.settingsButtonClick = function(e, t) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/settings-button-click",
                object: "button",
                objectId: "settings",
                pageId: e,
                placement: t
            })
        }
        ,
        e.prototype.settingsPopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/settings-popup-show",
                object: "popup",
                objectId: "settings"
            })
        }
        ,
        e.prototype.shareFeedbackButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/shareFeedback-button-click",
                object: "button",
                objectId: "shareFeedback",
                placement: e
            })
        }
        ,
        e.prototype.showEmogenieToggleClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/showEmogenie-toggle-click",
                object: "toggle",
                objectId: "showEmogenie",
                state: e
            })
        }
        ,
        e.prototype.signInButtonClick = function() {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/signIn-button-click",
                object: "button",
                objectId: "signIn",
                placement: "settingsToolbar"
            })
        }
        ,
        e.prototype.signInFormFail = function(e, t, n) {
            return this.gnar.track({
                action: "fail",
                eventName: "chromeExt/signIn-form-fail",
                object: "form",
                objectId: "signIn",
                placement: e,
                fieldErrors: t,
                formErrorMessage: n
            })
        }
        ,
        e.prototype.signInFormSuccess = function(e) {
            return this.gnar.track({
                action: "success",
                eventName: "chromeExt/signIn-form-success",
                object: "form",
                objectId: "signIn",
                placement: e
            })
        }
        ,
        e.prototype.signInOverlayShow = function(e) {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/signIn-overlay-show",
                object: "overlay",
                objectId: "signIn",
                placement: e
            })
        }
        ,
        e.prototype.signUpButtonClick = function() {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/signUp-button-click",
                object: "button",
                objectId: "signUp",
                placement: "settingsToolbar"
            })
        }
        ,
        e.prototype.signUpFormFail = function(e, t, n) {
            return this.gnar.track({
                action: "fail",
                eventName: "chromeExt/signUp-form-fail",
                object: "form",
                objectId: "signUp",
                placement: e,
                fieldErrors: t,
                formErrorMessage: n
            })
        }
        ,
        e.prototype.signUpFormSuccess = function(e) {
            return this.gnar.track({
                action: "success",
                eventName: "chromeExt/signUp-form-success",
                object: "form",
                objectId: "signUp",
                placement: e
            })
        }
        ,
        e.prototype.signUpOverlayShow = function(e) {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/signUp-overlay-show",
                object: "overlay",
                objectId: "signUp",
                placement: e
            })
        }
        ,
        e.prototype.siteIsBrowserDisabled = function() {
            return this.gnar.track({
                action: "siteIsBrowserDisabled",
                eventName: "chromeExt/siteIsBrowserDisabled"
            })
        }
        ,
        e.prototype.synonymAcceptButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/synonymAccept-button-click",
                object: "button",
                objectId: "synonymAccept",
                placement: e
            })
        }
        ,
        e.prototype.synonymsPopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/synonyms-popup-show",
                object: "popup",
                objectId: "synonyms"
            })
        }
        ,
        e.prototype.thumbsDownButtonClick = function(e, t, n) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/thumbsDown-button-click",
                object: "button",
                objectId: "thumbsDown",
                docId: e,
                emotionName: t,
                placement: n
            })
        }
        ,
        e.prototype.thumbsUpButtonClick = function(e, t, n) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/thumbsUp-button-click",
                object: "button",
                objectId: "thumbsUp",
                docId: e,
                emotionName: t,
                placement: n
            })
        }
        ,
        e.prototype.toolbarButtonClick = function(e, t) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/toolbar-button-click",
                object: "button",
                objectId: "toolbar",
                placement: e,
                type: t
            })
        }
        ,
        e.prototype.tryNowButtonClick = function(e) {
            return this.gnar.track({
                action: "click",
                eventName: "chromeExt/tryNow-button-click",
                object: "button",
                objectId: "tryNow",
                placement: e
            })
        }
        ,
        e.prototype.update = function(e) {
            return this.gnar.track({
                action: "update",
                eventName: "chromeExt/update",
                oldVersion: e
            })
        }
        ,
        e.prototype.welcomePopupShow = function() {
            return this.gnar.track({
                action: "show",
                eventName: "chromeExt/welcome-popup-show",
                object: "popup",
                objectId: "welcome"
            })
        }
        ,
        e
    }();
    t.GnarSpec = r
}
, function(e, t) {
    !function() {
        var e = function(e) {
            this.w = e || []
        };
        e.prototype.set = function(e) {
            this.w[e] = !0
        }
        ,
        e.prototype.encode = function() {
            for (var e = [], t = 0; t < this.w.length; t++)
                this.w[t] && (e[Math.floor(t / 6)] ^= 1 << t % 6);
            for (t = 0; t < e.length; t++)
                e[t] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(e[t] || 0);
            return e.join("") + "~"
        }
        ;
        var t = new e;
        function n(e) {
            t.set(e)
        }
        var r = function(n) {
            n = o(n),
            n = new e(n);
            for (var r = t.w.slice(), i = 0; i < n.w.length; i++)
                r[i] = r[i] || n.w[i];
            return new e(r).encode()
        }
          , o = function(e) {
            return e = e.get(Ot),
            a(e) || (e = []),
            e
        }
          , i = function(e) {
            return "function" == typeof e
        }
          , a = function(e) {
            return "[object Array]" == Object.prototype.toString.call(Object(e))
        }
          , c = function(e) {
            return null != e && -1 < (e.constructor + "").indexOf("String")
        }
          , s = function(e, t) {
            return 0 == e.indexOf(t)
        }
          , u = function(e) {
            return e ? e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
        }
          , l = function() {
            for (var e = C.navigator.userAgent + (x.cookie ? x.cookie : "") + (x.referrer ? x.referrer : ""), t = e.length, n = C.history.length; 0 < n; )
                e += n-- ^ t++;
            return [de() ^ 2147483647 & Lr(e), Math.round((new Date).getTime() / 1e3)].join(".")
        }
          , f = function(e) {
            var t = x.createElement("img");
            return t.width = 1,
            t.height = 1,
            t.src = e,
            t
        }
          , p = function() {}
          , d = function(e) {
            return encodeURIComponent instanceof Function ? encodeURIComponent(e) : (n(28),
            e)
        }
          , h = function(e, t, r, o) {
            try {
                e.addEventListener ? e.addEventListener(t, r, !!o) : e.attachEvent && e.attachEvent("on" + t, r)
            } catch (e) {
                n(27)
            }
        }
          , g = /^[\w\-:/.?=&%!]+$/
          , m = function(e, t, n) {
            e && (n ? (n = "",
            t && g.test(t) && (n = ' id="' + t + '"'),
            g.test(e) && x.write("<script" + n + ' src="' + e + '"><\/script>')) : ((n = x.createElement("script")).type = "text/javascript",
            n.async = !0,
            n.src = e,
            t && (n.id = t),
            (e = x.getElementsByTagName("script")[0]).parentNode.insertBefore(n, e)))
        }
          , v = function(e, t) {
            return b(x.location[t ? "href" : "search"], e)
        }
          , b = function(e, t) {
            return (e = e.match("(?:&|#|\\?)" + d(t).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)")) && 2 == e.length ? e[1] : ""
        }
          , y = function() {
            var e = "" + x.location.hostname;
            return 0 == e.indexOf("www.") ? e.substring(4) : e
        }
          , _ = function(e, t) {
            var n = e.indexOf(t);
            return (5 == n || 6 == n) && ("/" == (e = e.charAt(n + t.length)) || "?" == e || "" == e || ":" == e)
        }
          , w = function(e, t) {
            if (1 == t.length && null != t[0] && "object" == typeof t[0])
                return t[0];
            for (var n = {}, r = Math.min(e.length + 1, t.length), o = 0; o < r; o++) {
                if ("object" == typeof t[o]) {
                    for (var i in t[o])
                        t[o].hasOwnProperty(i) && (n[i] = t[o][i]);
                    break
                }
                o < e.length && (n[e[o]] = t[o])
            }
            return n
        }
          , E = function() {
            this.keys = [],
            this.values = {},
            this.m = {}
        };
        E.prototype.set = function(e, t, n) {
            this.keys.push(e),
            n ? this.m[":" + e] = t : this.values[":" + e] = t
        }
        ,
        E.prototype.get = function(e) {
            return this.m.hasOwnProperty(":" + e) ? this.m[":" + e] : this.values[":" + e]
        }
        ,
        E.prototype.map = function(e) {
            for (var t = 0; t < this.keys.length; t++) {
                var n = this.keys[t]
                  , r = this.get(n);
                r && e(n, r)
            }
        }
        ;
        var S, I, k, O, A, C = window, x = document, P = function(e, t) {
            return setTimeout(e, t)
        }, T = window, N = document, j = function(e) {
            var t = T._gaUserPrefs;
            if (t && t.ioo && t.ioo() || e && !0 === T["ga-disable-" + e])
                return !0;
            try {
                var n = T.external;
                if (n && n._gaUserPrefs && "oo" == n._gaUserPrefs)
                    return !0
            } catch (e) {}
            e = [],
            t = N.cookie.split(";"),
            n = /^\s*AMP_TOKEN=\s*(.*?)\s*$/;
            for (var r = 0; r < t.length; r++) {
                var o = t[r].match(n);
                o && e.push(o[1])
            }
            for (t = 0; t < e.length; t++)
                if ("$OPT_OUT" == decodeURIComponent(e[t]))
                    return !0;
            return !1
        }, R = function(e) {
            var t = []
              , n = x.cookie.split(";");
            e = new RegExp("^\\s*" + e + "=\\s*(.*?)\\s*$");
            for (var r = 0; r < n.length; r++) {
                var o = n[r].match(e);
                o && t.push(o[1])
            }
            return t
        }, M = function(e, t, n, r, o, i) {
            if (!(o = !j(o) && !(F.test(x.location.hostname) || "/" == n && L.test(r))))
                return !1;
            if (t && 1200 < t.length && (t = t.substring(0, 1200)),
            n = e + "=" + t + "; path=" + n + "; ",
            i && (n += "expires=" + new Date((new Date).getTime() + i).toGMTString() + "; "),
            r && "none" !== r && (n += "domain=" + r + ";"),
            r = x.cookie,
            x.cookie = n,
            !(r = r != x.cookie))
                e: {
                    for (e = R(e),
                    r = 0; r < e.length; r++)
                        if (t == e[r]) {
                            r = !0;
                            break e
                        }
                    r = !1
                }
            return r
        }, D = function(e) {
            return encodeURIComponent ? encodeURIComponent(e).replace(/\(/g, "%28").replace(/\)/g, "%29") : e
        }, L = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, F = /(^|\.)doubleclick\.net$/i, U = /^.*Version\/?(\d+)[^\d].*$/i, B = function() {
            if (void 0 !== C.__ga4__)
                return C.__ga4__;
            if (void 0 === S) {
                var e = C.navigator.userAgent;
                if (e) {
                    var t = e;
                    try {
                        t = decodeURIComponent(e)
                    } catch (e) {}
                    (e = !(0 <= t.indexOf("Chrome") || 0 <= t.indexOf("CriOS") || !(0 <= t.indexOf("Safari/") || 0 <= t.indexOf("Safari,")))) && (e = 11 <= ((t = U.exec(t)) ? Number(t[1]) : -1)),
                    S = e
                } else
                    S = !1
            }
            return S
        }, G = /^https?:\/\/[^/]*cdn\.ampproject\.org\//, W = [], V = function() {
            Nr.D([p])
        }, H = function(e, t) {
            var r = R("AMP_TOKEN");
            return 1 < r.length ? (n(55),
            !1) : "$OPT_OUT" == (r = decodeURIComponent(r[0] || "")) || "$ERROR" == r || j(t) ? (n(62),
            !1) : G.test(x.referrer) || "$NOT_FOUND" != r ? void 0 !== A ? (n(56),
            P(function() {
                e(A)
            }, 0),
            !0) : I ? (W.push(e),
            !0) : "$RETRIEVING" == r ? (n(57),
            P(function() {
                H(e, t)
            }, 1e4),
            !0) : (I = !0,
            r && "$" != r[0] || (Y("$RETRIEVING", 3e4),
            setTimeout(q, 3e4),
            r = ""),
            !!z(r, t) && (W.push(e),
            !0)) : (n(68),
            !1)
        }, z = function(e, t, r) {
            if (!window.JSON)
                return n(58),
                !1;
            var o = C.XMLHttpRequest;
            if (!o)
                return n(59),
                !1;
            var i = new o;
            return "withCredentials"in i ? (i.open("POST", (r || "https://ampcid.google.com/v1/publisher:getClientId") + "?key=AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM", !0),
            i.withCredentials = !0,
            i.setRequestHeader("Content-Type", "text/plain"),
            i.onload = function() {
                if (I = !1,
                4 == i.readyState) {
                    try {
                        200 != i.status && (n(61),
                        K("", "$ERROR", 3e4));
                        var o = JSON.parse(i.responseText);
                        o.optOut ? (n(63),
                        K("", "$OPT_OUT", 31536e6)) : o.clientId ? K(o.clientId, o.securityToken, 31536e6) : !r && o.alternateUrl ? (k && clearTimeout(k),
                        I = !0,
                        z(e, t, o.alternateUrl)) : (n(64),
                        K("", "$NOT_FOUND", 36e5))
                    } catch (e) {
                        n(65),
                        K("", "$ERROR", 3e4)
                    }
                    i = null
                }
            }
            ,
            o = {
                originScope: "AMP_ECID_GOOGLE"
            },
            e && (o.securityToken = e),
            i.send(JSON.stringify(o)),
            k = P(function() {
                n(66),
                K("", "$ERROR", 3e4)
            }, 1e4),
            !0) : (n(60),
            !1)
        }, q = function() {
            I = !1
        }, Y = function(e, t) {
            if (void 0 === O) {
                O = "";
                for (var n = Ln(), r = 0; r < n.length; r++) {
                    var o = n[r];
                    if (M("AMP_TOKEN", encodeURIComponent(e), "/", o, "", t))
                        return void (O = o)
                }
            }
            M("AMP_TOKEN", encodeURIComponent(e), "/", O, "", t)
        }, K = function(e, t, n) {
            for (k && clearTimeout(k),
            t && Y(t, n),
            A = e,
            t = W,
            W = [],
            n = 0; n < t.length; n++)
                t[n](e)
        }, Z = function() {
            return (Te || "https:" == x.location.protocol ? "https:" : "http:") + "//www.google-analytics.com"
        }, J = function(e, t, n) {
            if (n = n || p,
            2036 >= t.length)
                X(e, t, n);
            else {
                if (!(8192 >= t.length))
                    throw te("len", t.length),
                    new function(e) {
                        this.name = "len",
                        this.message = e + "-8192"
                    }
                    (t.length);
                ee(e, t, n) || $(e, t, n) || X(e, t, n)
            }
        }, Q = function(e, t, n, r) {
            $(e + "?" + t, "", r = r || p, n)
        }, X = function(e, t, n) {
            var r = f(e + "?" + t);
            r.onload = r.onerror = function() {
                r.onload = null,
                r.onerror = null,
                n()
            }
        }, $ = function(e, t, n, r) {
            var o = C.XMLHttpRequest;
            if (!o)
                return !1;
            var i = new o;
            return "withCredentials"in i && (e = e.replace(/^http:/, "https:"),
            i.open("POST", e, !0),
            i.withCredentials = !0,
            i.setRequestHeader("Content-Type", "text/plain"),
            i.onreadystatechange = function() {
                if (4 == i.readyState) {
                    if (r)
                        try {
                            var e = i.responseText;
                            if (1 > e.length)
                                te("xhr", "ver", "0"),
                                n();
                            else if ("1" != e.charAt(0))
                                te("xhr", "ver", String(e.length)),
                                n();
                            else if (3 < r.count++)
                                te("xhr", "tmr", "" + r.count),
                                n();
                            else if (1 == e.length)
                                n();
                            else {
                                var t = e.charAt(1);
                                if ("d" == t)
                                    Q("https://stats.g.doubleclick.net/j/collect", r.U, r, n);
                                else if ("g" == t) {
                                    var o = "https://www.google.%/ads/ga-audiences".replace("%", "com");
                                    X(o, r.google, n);
                                    var a = e.substring(2);
                                    if (a)
                                        if (/^[a-z.]{1,6}$/.test(a)) {
                                            var c = "https://www.google.%/ads/ga-audiences".replace("%", a);
                                            X(c, r.google, p)
                                        } else
                                            te("tld", "bcc", a)
                                } else
                                    te("xhr", "brc", t),
                                    n()
                            }
                        } catch (e) {
                            te("xhr", "rsp"),
                            n()
                        }
                    else
                        n();
                    i = null
                }
            }
            ,
            i.send(t),
            !0)
        }, ee = function(e, t, n) {
            return !!C.navigator.sendBeacon && (!!C.navigator.sendBeacon(e, t) && (n(),
            !0))
        }, te = function(e, t, n) {
            1 <= 100 * Math.random() || j("?") || (e = ["t=error", "_e=" + e, "_v=j67", "sr=1"],
            t && e.push("_f=" + t),
            n && e.push("_m=" + d(n.substring(0, 100))),
            e.push("aip=1"),
            e.push("z=" + de()),
            X("https://www.google-analytics.com/u/d", e.join("&"), p))
        }, ne = function(e) {
            var t = C.gaData = C.gaData || {};
            return t[e] = t[e] || {}
        }, re = function() {
            this.M = []
        };
        function oe(e) {
            if (100 != e.get(cn) && Lr(ye(e, zt)) % 1e4 >= 100 * _e(e, cn))
                throw "abort"
        }
        function ie(e) {
            if (j(ye(e, Zt)))
                throw "abort"
        }
        function ae() {
            var e = x.location.protocol;
            if ("http:" != e && "https:" != e)
                throw "abort"
        }
        function ce(e) {
            try {
                C.navigator.sendBeacon ? n(42) : C.XMLHttpRequest && "withCredentials"in new C.XMLHttpRequest && n(40)
            } catch (e) {}
            e.set(kt, r(e), !0),
            e.set(Be, _e(e, Be) + 1);
            var t = [];
            ve.map(function(n, r) {
                r.F && (null != (n = e.get(n)) && n != r.defaultValue && ("boolean" == typeof n && (n *= 1),
                t.push(r.F + "=" + d("" + n))))
            }),
            t.push("z=" + he()),
            e.set(Le, t.join("&"), !0)
        }
        function se(e) {
            var t = ye(e, bn) || Z() + "/collect"
              , n = e.get(_n)
              , r = ye(e, Ue);
            if (!r && e.get(Fe) && (r = "beacon"),
            n)
                Q(t, ye(e, Le), n, e.get(De));
            else if (r) {
                n = r,
                r = ye(e, Le);
                var o = e.get(De);
                o = o || p,
                "image" == n ? X(t, r, o) : "xhr" == n && $(t, r, o) || "beacon" == n && ee(t, r, o) || J(t, r, o)
            } else
                J(t, ye(e, Le), e.get(De));
            t = e.get(Zt),
            n = (t = ne(t)).hitcount,
            t.hitcount = n ? n + 1 : 1,
            t = e.get(Zt),
            delete ne(t).pending_experiments,
            e.set(De, p, !0)
        }
        function ue(e) {
            (C.gaData = C.gaData || {}).expId && e.set(mt, (C.gaData = C.gaData || {}).expId),
            (C.gaData = C.gaData || {}).expVar && e.set(vt, (C.gaData = C.gaData || {}).expVar);
            var t = e.get(Zt);
            if (t = ne(t).pending_experiments) {
                var n = [];
                for (r in t)
                    t.hasOwnProperty(r) && t[r] && n.push(encodeURIComponent(r) + "." + encodeURIComponent(t[r]));
                var r = n.join("!")
            } else
                r = void 0;
            r && e.set(bt, r, !0)
        }
        function le() {
            if (C.navigator && "preview" == C.navigator.loadPurpose)
                throw "abort"
        }
        function fe(e) {
            var t = C.gaDevIds;
            a(t) && 0 != t.length && e.set("&did", t.join(","), !0)
        }
        function pe(e) {
            if (!e.get(Zt))
                throw "abort"
        }
        re.prototype.add = function(e) {
            this.M.push(e)
        }
        ,
        re.prototype.D = function(e) {
            try {
                for (var t = 0; t < this.M.length; t++) {
                    var n = e.get(this.M[t]);
                    n && i(n) && n.call(C, e)
                }
            } catch (e) {}
            (t = e.get(De)) != p && i(t) && (e.set(De, p, !0),
            setTimeout(t, 10))
        }
        ;
        var de = function() {
            return Math.round(2147483647 * Math.random())
        }
          , he = function() {
            try {
                var e = new Uint32Array(1);
                return C.crypto.getRandomValues(e),
                2147483647 & e[0]
            } catch (e) {
                return de()
            }
        };
        function ge(e) {
            var t = _e(e, Et);
            500 <= t && n(15);
            var r = ye(e, Me);
            if ("transaction" != r && "item" != r) {
                r = _e(e, It);
                var o = (new Date).getTime()
                  , i = _e(e, St);
                if (0 == i && e.set(St, o),
                0 < (i = Math.round(2 * (o - i) / 1e3)) && (r = Math.min(r + i, 20),
                e.set(St, o)),
                0 >= r)
                    throw "abort";
                e.set(It, --r)
            }
            e.set(Et, ++t)
        }
        var me = function() {
            this.data = new E
        }
          , ve = new E
          , be = [];
        me.prototype.get = function(e) {
            var t = Se(e)
              , n = this.data.get(e);
            return t && null == n && (n = i(t.defaultValue) ? t.defaultValue() : t.defaultValue),
            t && t.Z ? t.Z(this, e, n) : n
        }
        ;
        var ye = function(e, t) {
            return null == (e = e.get(t)) ? "" : "" + e
        }
          , _e = function(e, t) {
            return null == (e = e.get(t)) || "" === e ? 0 : 1 * e
        };
        me.prototype.set = function(e, t, n) {
            if (e)
                if ("object" == typeof e)
                    for (var r in e)
                        e.hasOwnProperty(r) && we(this, r, e[r], n);
                else
                    we(this, e, t, n)
        }
        ;
        var we = function(e, t, n, r) {
            if (null != n)
                switch (t) {
                case Zt:
                    pr.test(n)
                }
            var o = Se(t);
            o && o.o ? o.o(e, t, n, r) : e.data.set(t, n, r)
        }
          , Ee = function(e, t, n, r, o) {
            this.name = e,
            this.F = t,
            this.Z = r,
            this.o = o,
            this.defaultValue = n
        }
          , Se = function(e) {
            var t = ve.get(e);
            if (!t)
                for (var n = 0; n < be.length; n++) {
                    var r = be[n]
                      , o = r[0].exec(e);
                    if (o) {
                        t = r[1](o),
                        ve.set(t.name, t);
                        break
                    }
                }
            return t
        }
          , Ie = function(e, t, n, r, o) {
            return e = new Ee(e,t,n,r,o),
            ve.set(e.name, e),
            e.name
        }
          , ke = function(e, t) {
            be.push([new RegExp("^" + e + "$"), t])
        }
          , Oe = function(e, t, n) {
            return Ie(e, t, n, void 0, Ae)
        }
          , Ae = function() {}
          , Ce = c(window.GoogleAnalyticsObject) && u(window.GoogleAnalyticsObject) || "ga"
          , xe = /^(?:utma\.)?\d+\.\d+$/
          , Pe = /^amp-[\w.-]{22,64}$/
          , Te = !1
          , Ne = Oe("apiVersion", "v")
          , je = Oe("clientVersion", "_v");
        Ie("anonymizeIp", "aip");
        var Re = Ie("adSenseId", "a")
          , Me = Ie("hitType", "t")
          , De = Ie("hitCallback")
          , Le = Ie("hitPayload");
        Ie("nonInteraction", "ni"),
        Ie("currencyCode", "cu"),
        Ie("dataSource", "ds");
        var Fe = Ie("useBeacon", void 0, !1)
          , Ue = Ie("transport");
        Ie("sessionControl", "sc", ""),
        Ie("sessionGroup", "sg"),
        Ie("queueTime", "qt");
        var Be = Ie("_s", "_s");
        Ie("screenName", "cd");
        var Ge = Ie("location", "dl", "")
          , We = Ie("referrer", "dr")
          , Ve = Ie("page", "dp", "");
        Ie("hostname", "dh");
        var He = Ie("language", "ul")
          , ze = Ie("encoding", "de");
        Ie("title", "dt", function() {
            return x.title || void 0
        }),
        ke("contentGroup([0-9]+)", function(e) {
            return new Ee(e[0],"cg" + e[1])
        });
        var qe = Ie("screenColors", "sd")
          , Ye = Ie("screenResolution", "sr")
          , Ke = Ie("viewportSize", "vp")
          , Ze = Ie("javaEnabled", "je")
          , Je = Ie("flashVersion", "fl");
        Ie("campaignId", "ci"),
        Ie("campaignName", "cn"),
        Ie("campaignSource", "cs"),
        Ie("campaignMedium", "cm"),
        Ie("campaignKeyword", "ck"),
        Ie("campaignContent", "cc");
        var Qe = Ie("eventCategory", "ec")
          , Xe = Ie("eventAction", "ea")
          , $e = Ie("eventLabel", "el")
          , et = Ie("eventValue", "ev")
          , tt = Ie("socialNetwork", "sn")
          , nt = Ie("socialAction", "sa")
          , rt = Ie("socialTarget", "st")
          , ot = Ie("l1", "plt")
          , it = Ie("l2", "pdt")
          , at = Ie("l3", "dns")
          , ct = Ie("l4", "rrt")
          , st = Ie("l5", "srt")
          , ut = Ie("l6", "tcp")
          , lt = Ie("l7", "dit")
          , ft = Ie("l8", "clt")
          , pt = Ie("timingCategory", "utc")
          , dt = Ie("timingVar", "utv")
          , ht = Ie("timingLabel", "utl")
          , gt = Ie("timingValue", "utt");
        Ie("appName", "an"),
        Ie("appVersion", "av", ""),
        Ie("appId", "aid", ""),
        Ie("appInstallerId", "aiid", ""),
        Ie("exDescription", "exd"),
        Ie("exFatal", "exf");
        var mt = Ie("expId", "xid")
          , vt = Ie("expVar", "xvar")
          , bt = Ie("exp", "exp")
          , yt = Ie("_utma", "_utma")
          , _t = Ie("_utmz", "_utmz")
          , wt = Ie("_utmht", "_utmht")
          , Et = Ie("_hc", void 0, 0)
          , St = Ie("_ti", void 0, 0)
          , It = Ie("_to", void 0, 20);
        ke("dimension([0-9]+)", function(e) {
            return new Ee(e[0],"cd" + e[1])
        }),
        ke("metric([0-9]+)", function(e) {
            return new Ee(e[0],"cm" + e[1])
        }),
        Ie("linkerParam", void 0, void 0, function(e) {
            var t = e.get(zt)
              , r = e.get(ln) || "";
            if (t = "_ga=2." + d(Yn(r + t, 0) + "." + r + "-" + t),
            (r = e.get(dn)) && e.get(vn)) {
                var o = _e(e, hn);
                1e3 * o + _e(e, gn) <= (new Date).getTime() ? (n(76),
                e = "") : (n(44),
                e = "&_gac=1." + d([Yn(r, 0), o, r].join(".")))
            } else
                e = "";
            return t + e
        }, Ae);
        var kt = Ie("usage", "_u")
          , Ot = Ie("_um");
        Ie("forceSSL", void 0, void 0, function() {
            return Te
        }, function(e, t, r) {
            n(34),
            Te = !!r
        });
        var At = Ie("_j1", "jid")
          , Ct = Ie("_j2", "gjid");
        ke("\\&(.*)", function(e) {
            var t, n, r = new Ee(e[0],e[1]), o = (t = e[0].substring(1),
            ve.map(function(e, r) {
                r.F == t && (n = r)
            }),
            n && n.name);
            return o && (r.Z = function(e) {
                return e.get(o)
            }
            ,
            r.o = function(e, t, n, r) {
                e.set(o, n, r)
            }
            ,
            r.F = void 0),
            r
        });
        var xt = Oe("_oot")
          , Pt = Ie("previewTask")
          , Tt = Ie("checkProtocolTask")
          , Nt = Ie("validationTask")
          , jt = Ie("checkStorageTask")
          , Rt = Ie("historyImportTask")
          , Mt = Ie("samplerTask")
          , Dt = Ie("_rlt")
          , Lt = Ie("buildHitTask")
          , Ft = Ie("sendHitTask")
          , Ut = Ie("ceTask")
          , Bt = Ie("devIdTask")
          , Gt = Ie("timingTask")
          , Wt = Ie("displayFeaturesTask")
          , Vt = Ie("customTask")
          , Ht = Oe("name")
          , zt = Oe("clientId", "cid")
          , qt = Oe("clientIdTime")
          , Yt = Oe("storedClientId")
          , Kt = Ie("userId", "uid")
          , Zt = Oe("trackingId", "tid")
          , Jt = Oe("cookieName", void 0, "_ga")
          , Qt = Oe("cookieDomain")
          , Xt = Oe("cookiePath", void 0, "/")
          , $t = Oe("cookieExpires", void 0, 63072e3)
          , en = Oe("cookieUpdate", void 0, !0)
          , tn = Oe("legacyCookieDomain")
          , nn = Oe("legacyHistoryImport", void 0, !0)
          , rn = Oe("storage", void 0, "cookie")
          , on = Oe("allowLinker", void 0, !1)
          , an = Oe("allowAnchor", void 0, !0)
          , cn = Oe("sampleRate", "sf", 100)
          , sn = Oe("siteSpeedSampleRate", void 0, 1)
          , un = Oe("alwaysSendReferrer", void 0, !1)
          , ln = Oe("_gid", "_gid")
          , fn = Oe("_gcn")
          , pn = Oe("useAmpClientId")
          , dn = Oe("_gclid")
          , hn = Oe("_gt")
          , gn = Oe("_ge", void 0, 7776e6)
          , mn = Oe("_gclsrc")
          , vn = Oe("storeGac", void 0, !0)
          , bn = Ie("transportUrl")
          , yn = Ie("_r", "_r")
          , _n = Ie("_dp");
        function wn(e, t, r, o) {
            t[e] = function() {
                try {
                    return o && n(o),
                    r.apply(this, arguments)
                } catch (t) {
                    throw te("exc", e, t && t.name),
                    t
                }
            }
        }
        var En = function(e) {
            var t = {};
            if (Sn(t) || In(t)) {
                var n = t[ot];
                null == n || 1 / 0 == n || isNaN(n) || (0 < n ? (kn(t, at),
                kn(t, ut),
                kn(t, st),
                kn(t, it),
                kn(t, ct),
                kn(t, lt),
                kn(t, ft),
                P(function() {
                    e(t)
                }, 10)) : h(C, "load", function() {
                    En(e)
                }, !1))
            }
        }
          , Sn = function(e) {
            var t = C.performance || C.webkitPerformance;
            if (!(t = t && t.timing))
                return !1;
            var n = t.navigationStart;
            return 0 != n && (e[ot] = t.loadEventStart - n,
            e[at] = t.domainLookupEnd - t.domainLookupStart,
            e[ut] = t.connectEnd - t.connectStart,
            e[st] = t.responseStart - t.requestStart,
            e[it] = t.responseEnd - t.responseStart,
            e[ct] = t.fetchStart - n,
            e[lt] = t.domInteractive - n,
            e[ft] = t.domContentLoadedEventStart - n,
            !0)
        }
          , In = function(e) {
            if (C.top != C)
                return !1;
            var t = C.external
              , n = t && t.onloadT;
            return t && !t.isValidLoadTime && (n = void 0),
            2147483648 < n && (n = void 0),
            0 < n && t.setPageReadyTime(),
            null != n && (e[ot] = n,
            !0)
        }
          , kn = function(e, t) {
            var n = e[t];
            (isNaN(n) || 1 / 0 == n || 0 > n) && (e[t] = void 0)
        }
          , On = function(e) {
            return function(t) {
                if ("pageview" == t.get(Me) && !e.I) {
                    e.I = !0;
                    var n = (o = t,
                    i = Math.min(_e(o, sn), 100),
                    !(Lr(ye(o, zt)) % 100 >= i))
                      , r = 0 < b(t.get(Ge), "gclid").length;
                    (n || r) && En(function(t) {
                        n && e.send("timing", t),
                        r && e.send("adtiming", t)
                    })
                }
                var o, i
            }
        }
          , An = !1
          , Cn = function(e) {
            if ("cookie" == ye(e, rn)) {
                if (e.get(en) || ye(e, Yt) != ye(e, zt)) {
                    var t = 1e3 * _e(e, $t);
                    xn(e, zt, Jt, t)
                }
                if (xn(e, ln, fn, 864e5),
                e.get(vn)) {
                    var r = e.get(dn);
                    if (r) {
                        var o = Math.min(_e(e, gn), 1e3 * _e(e, $t));
                        o = Math.min(o, 1e3 * _e(e, hn) + o - (new Date).getTime()),
                        e.data.set(gn, o),
                        t = {};
                        var i = e.get(hn)
                          , a = e.get(mn)
                          , c = Fn(ye(e, Xt))
                          , s = Dn(ye(e, Qt))
                          , u = ye(e, Zt);
                        a && "aw.ds" != a ? t && (t.ua = !0) : (r = ["1", i, D(r)].join("."),
                        0 < o && (t && (t.ta = !0),
                        M("_gac_" + D(u), r, c, s, u, o))),
                        Bn(t)
                    }
                } else
                    n(75);
                (e = "none" === Dn(ye(e, Qt))) && (e = x.location.hostname,
                e = F.test(e) || L.test(e)),
                e && n(30)
            }
        }
          , xn = function(e, t, r, o) {
            var i = Nn(e, t);
            if (i) {
                r = ye(e, r);
                var a = Fn(ye(e, Xt))
                  , c = Dn(ye(e, Qt))
                  , s = ye(e, Zt);
                if ("auto" != c)
                    M(r, i, a, c, s, o) && (An = !0);
                else {
                    n(32);
                    for (var u = Ln(), l = 0; l < u.length; l++)
                        if (c = u[l],
                        e.data.set(Qt, c),
                        i = Nn(e, t),
                        M(r, i, a, c, s, o))
                            return void (An = !0);
                    e.data.set(Qt, "auto")
                }
            }
        }
          , Pn = function(e) {
            if ("cookie" == ye(e, rn) && !An && (Cn(e),
            !An))
                throw "abort"
        }
          , Tn = function(e) {
            if (e.get(nn)) {
                var t = ye(e, Qt)
                  , r = ye(e, tn) || y()
                  , o = Gn("__utma", r, t);
                o && (n(19),
                e.set(wt, (new Date).getTime(), !0),
                e.set(yt, o.R),
                (t = Gn("__utmz", r, t)) && o.hash == t.hash && e.set(_t, t.R))
            }
        }
          , Nn = function(e, t) {
            t = D(ye(e, t));
            var n = Dn(ye(e, Qt)).split(".").length;
            return 1 < (e = Un(ye(e, Xt))) && (n += "-" + e),
            t ? ["GA1", n, t].join(".") : ""
        }
          , jn = function(e, t) {
            return Rn(t, ye(e, Qt), ye(e, Xt))
        }
          , Rn = function(e, t, r) {
            if (!e || 1 > e.length)
                n(12);
            else {
                for (var o = [], i = 0; i < e.length; i++) {
                    var a = e[i]
                      , c = a.split(".")
                      , s = c.shift();
                    ("GA1" == s || "1" == s) && 1 < c.length ? (1 == (a = c.shift().split("-")).length && (a[1] = "1"),
                    a[0] *= 1,
                    a[1] *= 1,
                    c = {
                        H: a,
                        s: c.join(".")
                    }) : c = Pe.test(a) ? {
                        H: [0, 0],
                        s: a
                    } : void 0,
                    c && o.push(c)
                }
                if (1 == o.length)
                    return n(13),
                    o[0].s;
                if (0 != o.length)
                    return n(14),
                    1 == (o = Mn(o, Dn(t).split(".").length, 0)).length ? o[0].s : (1 < (o = Mn(o, Un(r), 1)).length && n(41),
                    o[0] && o[0].s);
                n(12)
            }
        }
          , Mn = function(e, t, n) {
            for (var r, o = [], i = [], a = 0; a < e.length; a++) {
                var c = e[a];
                c.H[n] == t ? o.push(c) : null == r || c.H[n] < r ? (i = [c],
                r = c.H[n]) : c.H[n] == r && i.push(c)
            }
            return 0 < o.length ? o : i
        }
          , Dn = function(e) {
            return 0 == e.indexOf(".") ? e.substr(1) : e
        }
          , Ln = function() {
            var e = []
              , t = y().split(".");
            if (4 == t.length) {
                var n = t[t.length - 1];
                if (parseInt(n, 10) == n)
                    return ["none"]
            }
            for (n = t.length - 2; 0 <= n; n--)
                e.push(t.slice(n).join("."));
            return e.push("none"),
            e
        }
          , Fn = function(e) {
            return e ? (1 < e.length && e.lastIndexOf("/") == e.length - 1 && (e = e.substr(0, e.length - 1)),
            0 != e.indexOf("/") && (e = "/" + e),
            e) : "/"
        }
          , Un = function(e) {
            return "/" == (e = Fn(e)) ? 1 : e.split("/").length
        }
          , Bn = function(e) {
            e.ta && n(77),
            e.na && n(74),
            e.pa && n(73),
            e.ua && n(69)
        };
        function Gn(e, t, n) {
            "none" == t && (t = "");
            var r = []
              , o = R(e);
            e = "__utma" == e ? 6 : 2;
            for (var i = 0; i < o.length; i++) {
                var a = ("" + o[i]).split(".");
                a.length >= e && r.push({
                    hash: a[0],
                    R: o[i],
                    O: a
                })
            }
            if (0 != r.length)
                return 1 == r.length ? r[0] : Wn(t, r) || Wn(n, r) || Wn(null, r) || r[0]
        }
        function Wn(e, t) {
            if (null == e)
                var n = e = 1;
            else
                n = Lr(e),
                e = Lr(s(e, ".") ? e.substring(1) : "." + e);
            for (var r = 0; r < t.length; r++)
                if (t[r].hash == n || t[r].hash == e)
                    return t[r]
        }
        var Vn = new RegExp(/^https?:\/\/([^\/:]+)/)
          , Hn = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/
          , zn = /(.*)([?&#])(?:_gac=[^&#]*)(?:&?)(.*)/;
        function qn(e, t) {
            var n = new Date
              , r = C.navigator
              , o = r.plugins || [];
            for (e = [e, r.userAgent, n.getTimezoneOffset(), n.getYear(), n.getDate(), n.getHours(), n.getMinutes() + t],
            t = 0; t < o.length; ++t)
                e.push(o[t].description);
            return Lr(e.join("."))
        }
        function Yn(e, t) {
            var n = new Date
              , r = C.navigator
              , o = n.getHours() + Math.floor((n.getMinutes() + t) / 60);
            return Lr([e, r.userAgent, r.language || "", n.getTimezoneOffset(), n.getYear(), n.getDate() + Math.floor(o / 24), (24 + o) % 24, (60 + n.getMinutes() + t) % 60].join("."))
        }
        var Kn = function(e) {
            n(48),
            this.target = e,
            this.T = !1
        };
        Kn.prototype.ca = function(e, t) {
            if (e.tagName) {
                if ("a" == e.tagName.toLowerCase())
                    return void (e.href && (e.href = Zn(this, e.href, t)));
                if ("form" == e.tagName.toLowerCase())
                    return Jn(this, e)
            }
            if ("string" == typeof e)
                return Zn(this, e, t)
        }
        ;
        var Zn = function(e, t, n) {
            var r = Hn.exec(t);
            r && 3 <= r.length && (t = r[1] + (r[3] ? r[2] + r[3] : "")),
            (r = zn.exec(t)) && 3 <= r.length && (t = r[1] + (r[3] ? r[2] + r[3] : "")),
            e = e.target.get("linkerParam");
            var o = t.indexOf("?");
            return r = t.indexOf("#"),
            n ? t += (-1 == r ? "#" : "&") + e : (n = -1 == o ? "?" : "&",
            t = -1 == r ? t + (n + e) : t.substring(0, r) + n + e + t.substring(r)),
            (t = t.replace(/&+_ga=/, "&_ga=")).replace(/&+_gac=/, "&_gac=")
        }
          , Jn = function(e, t) {
            if (t && t.action)
                if ("get" == t.method.toLowerCase()) {
                    e = e.target.get("linkerParam").split("&");
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n].split("=")
                          , o = r[1];
                        r = r[0];
                        for (var i = t.childNodes || [], a = !1, c = 0; c < i.length; c++)
                            if (i[c].name == r) {
                                i[c].setAttribute("value", o),
                                a = !0;
                                break
                            }
                        a || ((i = x.createElement("input")).setAttribute("type", "hidden"),
                        i.setAttribute("name", r),
                        i.setAttribute("value", o),
                        t.appendChild(i))
                    }
                } else
                    "post" == t.method.toLowerCase() && (t.action = Zn(e, t.action))
        };
        function Qn(e, t) {
            if (t == x.location.hostname)
                return !1;
            for (var n = 0; n < e.length; n++)
                if (e[n]instanceof RegExp) {
                    if (e[n].test(t))
                        return !0
                } else if (0 <= t.indexOf(e[n]))
                    return !0;
            return !1
        }
        function Xn(e, t) {
            return t != qn(e, 0) && t != qn(e, -1) && t != qn(e, -2) && t != Yn(e, 0) && t != Yn(e, -1) && t != Yn(e, -2)
        }
        Kn.prototype.S = function(e, t, r) {
            function o(r) {
                try {
                    r = r || C.event;
                    e: {
                        var o = r.target || r.srcElement;
                        for (r = 100; o && 0 < r; ) {
                            if (o.href && o.nodeName.match(/^a(?:rea)?$/i)) {
                                var a = o;
                                break e
                            }
                            o = o.parentNode,
                            r--
                        }
                        a = {}
                    }
                    ("http:" == a.protocol || "https:" == a.protocol) && Qn(e, a.hostname || "") && a.href && (a.href = Zn(i, a.href, t))
                } catch (e) {
                    n(26)
                }
            }
            var i = this;
            this.T || (this.T = !0,
            h(x, "mousedown", o, !1),
            h(x, "keyup", o, !1)),
            r && h(x, "submit", function(t) {
                if ((t = (t = t || C.event).target || t.srcElement) && t.action) {
                    var n = t.action.match(Vn);
                    n && Qn(e, n[1]) && Jn(i, t)
                }
            })
        }
        ;
        var $n, er = /^(GTM|OPT)-[A-Z0-9]+$/, tr = /;_gaexp=[^;]*/g, nr = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g, rr = /^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/, or = function(e, t, n) {
            this.aa = t,
            (t = n) || (t = (t = ye(e, Ht)) && "t0" != t ? ur.test(t) ? "_gat_" + D(ye(e, Zt)) : "_gat_" + D(t) : "_gat"),
            this.Y = t,
            this.ra = null
        }, ir = function(e, t, n) {
            t.get(n) || ("1" == R(e.Y)[0] ? t.set(n, "", !0) : t.set(n, "" + de(), !0))
        }, ar = function(e, t) {
            t.get(At) && M(e.Y, "1", t.get(Xt), t.get(Qt), t.get(Zt), 6e4)
        }, cr = function(e, t, n) {
            var o = new E
              , i = function(e) {
                Se(e).F && o.set(Se(e).F, t.get(e))
            };
            i(Ne),
            i(je),
            i(Zt),
            i(zt),
            i(At),
            0 != n && 1 != n || (i(Kt),
            i(Ct),
            i(ln)),
            o.set(Se(kt).F, r(t));
            var a = "";
            return o.map(function(e, t) {
                a += d(e) + "=",
                a += d("" + t) + "&"
            }),
            a += "z=" + de(),
            0 == n ? a = e.aa + a : 1 == n ? a = "t=dc&aip=1&_r=3&" + a : 2 == n && (a = "t=sr&aip=1&_r=4&slf_rd=1&" + a),
            a
        }, sr = function(e, t) {
            return null === e.ra && (e.ra = 1 === function(e) {
                var t, n = new function() {
                    this.V = 100,
                    this.$ = this.fa = !1,
                    this.oa = "detourexp",
                    this.ea = 1
                }
                ;
                if (n.fa && n.$)
                    return 0;
                if (n.$ = !0,
                e) {
                    if (n.oa && void 0 !== e.get(n.oa))
                        return _e(e, n.oa);
                    if (0 == e.get(sn))
                        return 0
                }
                return 0 == n.V ? 0 : (void 0 === t && (t = he()),
                0 == t % n.V ? Math.floor(t / n.V) % n.ea + 1 : 0)
            }(t),
            e.ra && n(33)),
            e.ra
        }, ur = /^gtm\d+$/, lr = function(t, r) {
            if (!(t = t.b).get("dcLoaded")) {
                var i, a = new e(o(t));
                a.set(29),
                t.set(Ot, a.w),
                (r = r || {})[Jt] && (i = D(r[Jt])),
                function(e, t) {
                    var r = t.get(Lt);
                    t.set(Lt, function(t) {
                        ir(e, t, At),
                        ir(e, t, Ct);
                        var n = r(t);
                        return ar(e, t),
                        n
                    });
                    var o = t.get(Ft);
                    t.set(Ft, function(t) {
                        var r = o(t);
                        if (t.get(At)) {
                            if (B() !== sr(e, t)) {
                                n(80);
                                var i = {
                                    U: cr(e, t, 1),
                                    google: cr(e, t, 2),
                                    count: 0
                                };
                                Q("https://stats.g.doubleclick.net/j/collect", i.U, i)
                            } else
                                f(cr(e, t, 0));
                            t.set(At, "", !0)
                        }
                        return r
                    })
                }(r = new or(t,"https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&",i), t),
                t.set("dcLoaded", !0)
            }
        }, fr = function(e) {
            if (!e.get("dcLoaded") && "cookie" == e.get(rn)) {
                var t = new or(e);
                if (ir(t, e, At),
                ir(t, e, Ct),
                ar(t, e),
                e.get(At)) {
                    var r = B() !== sr(t, e);
                    e.set(yn, 1, !0),
                    r ? (n(79),
                    e.set(bn, Z() + "/j/collect", !0),
                    e.set(_n, {
                        U: cr(t, e, 1),
                        google: cr(t, e, 2),
                        count: 0
                    }, !0)) : e.set(bn, Z() + "/r/collect", !0)
                }
            }
        }, pr = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/, dr = function(e) {
            function t(e, t) {
                o.b.data.set(e, t)
            }
            function n(e, n) {
                t(e, n),
                o.filters.add(e)
            }
            var r, o = this;
            this.b = new me,
            this.filters = new re,
            t(Ht, e[Ht]),
            t(Zt, u(e[Zt])),
            t(Jt, e[Jt]),
            t(Qt, e[Qt] || y()),
            t(Xt, e[Xt]),
            t($t, e[$t]),
            t(en, e[en]),
            t(tn, e[tn]),
            t(nn, e[nn]),
            t(on, e[on]),
            t(an, e[an]),
            t(cn, e[cn]),
            t(sn, e[sn]),
            t(un, e[un]),
            t(rn, e[rn]),
            t(Kt, e[Kt]),
            t(qt, e[qt]),
            t(pn, e[pn]),
            t(vn, e[vn]),
            t(Ne, 1),
            t(je, "j67"),
            n(xt, ie),
            n(Vt, p),
            n(Pt, le),
            n(Tt, ae),
            n(Nt, pe),
            n(jt, Pn),
            n(Rt, Tn),
            n(Mt, oe),
            n(Dt, ge),
            n(Ut, ue),
            n(Bt, fe),
            n(Wt, fr),
            n(Lt, ce),
            n(Ft, se),
            n(Gt, On(this)),
            gr(this.b),
            hr(this.b, e[zt]),
            this.b.set(Re, (r = C.gaGlobal = C.gaGlobal || {}).hid = r.hid || de()),
            function(e, t, n) {
                if (!$n) {
                    var r = x.location.hash
                      , o = C.name
                      , i = /^#?gaso=([^&]*)/;
                    (o = (r = (r = r && r.match(i) || o && o.match(i)) ? r[1] : R("GASO")[0] || "") && r.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) && (M("GASO", "" + r, n, t, e, 0),
                    window._udo || (window._udo = t),
                    window._utcp || (window._utcp = n),
                    e = o[1],
                    m("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (e ? "prefix=" + e + "&" : "") + de(), "_gasojs")),
                    $n = !0
                }
            }(this.b.get(Zt), this.b.get(Qt), this.b.get(Xt))
        }, hr = function(e, t) {
            var r = ye(e, Jt);
            if (e.data.set(fn, "_ga" == r ? "_gid" : r + "_gid"),
            "cookie" == ye(e, rn)) {
                if (An = !1,
                r = R(ye(e, Jt)),
                !(r = jn(e, r))) {
                    r = ye(e, Qt);
                    var o = ye(e, tn) || y();
                    null != (r = Gn("__utma", o, r)) ? (n(10),
                    r = r.O[1] + "." + r.O[2]) : r = void 0
                }
                if (r && (An = !0),
                o = r && !e.get(en))
                    if (2 != (o = r.split(".")).length)
                        o = !1;
                    else if (o = Number(o[1])) {
                        var i = _e(e, $t);
                        o = o + i < (new Date).getTime() / 1e3
                    } else
                        o = !1;
                if (o && (r = void 0),
                r && (e.data.set(Yt, r),
                e.data.set(zt, r),
                r = R(ye(e, fn)),
                (r = jn(e, r)) && e.data.set(ln, r)),
                e.get(vn) && (r = e.get(dn),
                o = e.get(mn),
                !r || o && "aw.ds" != o)) {
                    if (r = {},
                    x) {
                        o = [],
                        i = x.cookie.split(";");
                        for (var a = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, c = 0; c < i.length; c++) {
                            var s = i[c].match(a);
                            s && o.push({
                                ja: s[1],
                                value: s[2]
                            })
                        }
                        if (i = {},
                        o && o.length)
                            for (a = 0; a < o.length; a++)
                                "1" != (c = o[a].value.split("."))[0] || 3 != c.length ? r && (r.na = !0) : c[1] && (i[o[a].ja] ? r && (r.pa = !0) : i[o[a].ja] = [],
                                i[o[a].ja].push({
                                    timestamp: c[1],
                                    qa: c[2]
                                }));
                        o = i
                    } else
                        o = {};
                    o = o[ye(e, Zt)],
                    Bn(r),
                    o && 0 != o.length && (r = o[0],
                    e.data.set(hn, r.timestamp),
                    e.data.set(dn, r.qa))
                }
            }
            if (e.get(en))
                e: if (o = v("_ga", e.get(an)))
                    if (e.get(on))
                        if (r = o.indexOf("."),
                        -1 == r)
                            n(22);
                        else {
                            if (i = o.substring(0, r),
                            r = (a = o.substring(r + 1)).indexOf("."),
                            o = a.substring(0, r),
                            a = a.substring(r + 1),
                            "1" == i) {
                                if (Xn(r = a, o)) {
                                    n(23);
                                    break e
                                }
                            } else {
                                if ("2" != i) {
                                    n(22);
                                    break e
                                }
                                if (i = "",
                                0 < (r = a.indexOf("-")) ? (i = a.substring(0, r),
                                r = a.substring(r + 1)) : r = a.substring(1),
                                Xn(i + r, o)) {
                                    n(53);
                                    break e
                                }
                                i && (n(2),
                                e.data.set(ln, i))
                            }
                            n(11),
                            e.data.set(zt, r),
                            (r = v("_gac", e.get(an))) && ("1" != (r = r.split("."))[0] || 4 != r.length ? n(72) : Xn(r[3], r[1]) ? n(71) : (e.data.set(dn, r[3]),
                            e.data.set(hn, r[2]),
                            n(70)))
                        }
                    else
                        n(21);
            t && (n(9),
            e.data.set(zt, d(t))),
            e.get(zt) || ((t = (t = C.gaGlobal && C.gaGlobal.vid) && -1 != t.search(xe) ? t : void 0) ? (n(17),
            e.data.set(zt, t)) : (n(8),
            e.data.set(zt, l()))),
            e.get(ln) || (n(3),
            e.data.set(ln, l())),
            Cn(e)
        }, gr = function(e) {
            var t = C.navigator
              , r = C.screen
              , o = x.location;
            if (e.set(We, function(e, t) {
                var n = x.referrer;
                if (/^(https?|android-app):\/\//i.test(n)) {
                    if (e)
                        return n;
                    if (e = "//" + x.location.hostname,
                    !_(n, e))
                        return t && (t = e.replace(/\./g, "-") + ".cdn.ampproject.org",
                        _(n, t)) ? void 0 : n
                }
            }(e.get(un), e.get(pn))),
            o) {
                var i = o.pathname || "";
                "/" != i.charAt(0) && (n(31),
                i = "/" + i),
                e.set(Ge, o.protocol + "//" + o.hostname + i + o.search)
            }
            r && e.set(Ye, r.width + "x" + r.height),
            r && e.set(qe, r.colorDepth + "-bit"),
            r = x.documentElement;
            var a = (i = x.body) && i.clientWidth && i.clientHeight
              , c = [];
            if (r && r.clientWidth && r.clientHeight && ("CSS1Compat" === x.compatMode || !a) ? c = [r.clientWidth, r.clientHeight] : a && (c = [i.clientWidth, i.clientHeight]),
            r = 0 >= c[0] || 0 >= c[1] ? "" : c.join("x"),
            e.set(Ke, r),
            e.set(Je, function() {
                var e, t;
                if ((t = (t = C.navigator) ? t.plugins : null) && t.length)
                    for (var n = 0; n < t.length && !e; n++) {
                        var r = t[n];
                        -1 < r.name.indexOf("Shockwave Flash") && (e = r.description)
                    }
                if (!e)
                    try {
                        var o = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                        e = o.GetVariable("$version")
                    } catch (e) {}
                if (!e)
                    try {
                        o = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),
                        e = "WIN 6,0,21,0",
                        o.AllowScriptAccess = "always",
                        e = o.GetVariable("$version")
                    } catch (e) {}
                if (!e)
                    try {
                        e = (o = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")
                    } catch (e) {}
                return e && (o = e.match(/[\d]+/g)) && 3 <= o.length && (e = o[0] + "." + o[1] + " r" + o[2]),
                e || void 0
            }()),
            e.set(ze, x.characterSet || x.charset),
            e.set(Ze, t && "function" == typeof t.javaEnabled && t.javaEnabled() || !1),
            e.set(He, (t && (t.language || t.browserLanguage) || "").toLowerCase()),
            e.data.set(dn, v("gclid", !0)),
            e.data.set(mn, v("gclsrc", !0)),
            e.data.set(hn, Math.round((new Date).getTime() / 1e3)),
            o && e.get(an) && (t = x.location.hash)) {
                for (t = t.split(/[?&#]+/),
                o = [],
                r = 0; r < t.length; ++r)
                    (s(t[r], "utm_id") || s(t[r], "utm_campaign") || s(t[r], "utm_source") || s(t[r], "utm_medium") || s(t[r], "utm_term") || s(t[r], "utm_content") || s(t[r], "gclid") || s(t[r], "dclid") || s(t[r], "gclsrc")) && o.push(t[r]);
                0 < o.length && (t = "#" + o.join("&"),
                e.set(Ge, e.get(Ge) + t))
            }
        };
        dr.prototype.get = function(e) {
            return this.b.get(e)
        }
        ,
        dr.prototype.set = function(e, t) {
            this.b.set(e, t)
        }
        ;
        var mr = {
            pageview: [Ve],
            event: [Qe, Xe, $e, et],
            social: [tt, nt, rt],
            timing: [pt, dt, gt, ht]
        };
        dr.prototype.send = function(e) {
            if (!(1 > arguments.length)) {
                if ("string" == typeof arguments[0])
                    var t = arguments[0]
                      , n = [].slice.call(arguments, 1);
                else
                    t = arguments[0] && arguments[0][Me],
                    n = arguments;
                t && ((n = w(mr[t] || [], n))[Me] = t,
                this.b.set(n, void 0, !0),
                this.filters.D(this.b),
                this.b.data.m = {})
            }
        }
        ,
        dr.prototype.ma = function(e, t) {
            var n = this;
            Or(e, n, t) || (Cr(e, function() {
                Or(e, n, t)
            }),
            Ar(String(n.get(Ht)), e, void 0, t, !0))
        }
        ;
        var vr, br, yr, _r, wr = function(e) {
            return "prerender" != x.visibilityState && (e(),
            !0)
        }, Er = function(e) {
            if (!wr(e)) {
                n(16);
                var t = !1
                  , r = function() {
                    if (!t && wr(e)) {
                        t = !0;
                        var n = r
                          , o = x;
                        o.removeEventListener ? o.removeEventListener("visibilitychange", n, !1) : o.detachEvent && o.detachEvent("onvisibilitychange", n)
                    }
                };
                h(x, "visibilitychange", r)
            }
        }, Sr = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/, Ir = function(e) {
            if (i(e[0]))
                this.u = e[0];
            else {
                var t = Sr.exec(e[0]);
                if (null != t && 4 == t.length && (this.c = t[1] || "t0",
                this.K = t[2] || "",
                this.C = t[3],
                this.a = [].slice.call(e, 1),
                this.K || (this.A = "create" == this.C,
                this.i = "require" == this.C,
                this.g = "provide" == this.C,
                this.ba = "remove" == this.C),
                this.i && (3 <= this.a.length ? (this.X = this.a[1],
                this.W = this.a[2]) : this.a[1] && (c(this.a[1]) ? this.X = this.a[1] : this.W = this.a[1]))),
                t = e[1],
                e = e[2],
                !this.C)
                    throw "abort";
                if (this.i && (!c(t) || "" == t))
                    throw "abort";
                if (this.g && (!c(t) || "" == t || !i(e)))
                    throw "abort";
                if (kr(this.c) || kr(this.K))
                    throw "abort";
                if (this.g && "t0" != this.c)
                    throw "abort"
            }
        };
        function kr(e) {
            return 0 <= e.indexOf(".") || 0 <= e.indexOf(":")
        }
        vr = new E,
        yr = new E,
        _r = new E,
        br = {
            ec: 45,
            ecommerce: 46,
            linkid: 47
        };
        var Or = function(e, t, n) {
            t == jr || t.get(Ht);
            var r = vr.get(e);
            return !!i(r) && (t.plugins_ = t.plugins_ || new E,
            !!t.plugins_.get(e) || (t.plugins_.set(e, new r(t,n || {})),
            !0))
        }
          , Ar = function(e, t, r, o, a) {
            if (!i(vr.get(t)) && !yr.get(t)) {
                if (br.hasOwnProperty(t) && n(br[t]),
                er.test(t)) {
                    if (n(52),
                    !(e = jr.j(e)))
                        return !0;
                    o = {
                        id: t,
                        B: (r = o || {}).dataLayer || "dataLayer",
                        ia: !!e.get("anonymizeIp"),
                        sync: a,
                        G: !1
                    },
                    e.get("&gtm") == t && (o.G = !0);
                    var c = String(e.get("name"));
                    "t0" != c && (o.target = c),
                    j(String(e.get("trackingId"))) || (o.clientId = String(e.get(zt)),
                    o.ka = Number(e.get(qt)),
                    r = r.palindrome ? nr : tr,
                    r = (r = x.cookie.replace(/^|(; +)/g, ";").match(r)) ? r.sort().join("").substring(1) : void 0,
                    o.la = r,
                    o.qa = b(e.b.get(Ge) || "", "gclid")),
                    e = o.B,
                    r = (new Date).getTime(),
                    C[e] = C[e] || [],
                    r = {
                        "gtm.start": r
                    },
                    a || (r.event = "gtm.js"),
                    C[e].push(r),
                    r = function(e) {
                        function t(e, t) {
                            t && (n += "&" + e + "=" + d(t))
                        }
                        var n = "https://www.google-analytics.com/gtm/js?id=" + d(e.id);
                        return "dataLayer" != e.B && t("l", e.B),
                        t("t", e.target),
                        t("cid", e.clientId),
                        t("cidt", e.ka),
                        t("gac", e.la),
                        t("aip", e.ia),
                        e.sync && t("m", "sync"),
                        t("cycle", e.G),
                        e.qa && t("gclid", e.qa),
                        rr.test(x.referrer) && t("cb", String(de())),
                        n
                    }(o)
                }
                !r && br.hasOwnProperty(t) ? (n(39),
                r = t + ".js") : n(43),
                r && (r && 0 <= r.indexOf("/") || (r = (Te || "https:" == x.location.protocol ? "https:" : "http:") + "//www.google-analytics.com/plugins/ua/" + r),
                e = (o = Tr(r)).protocol,
                r = x.location.protocol,
                ("https:" == e || e == r || "http:" == e && "http:" == r) && Pr(o) && (m(o.url, void 0, a),
                yr.set(t, !0)))
            }
        }
          , Cr = function(e, t) {
            var n = _r.get(e) || [];
            n.push(t),
            _r.set(e, n)
        }
          , xr = function(e, t) {
            vr.set(e, t),
            t = _r.get(e) || [];
            for (var n = 0; n < t.length; n++)
                t[n]();
            _r.set(e, [])
        }
          , Pr = function(e) {
            var t = Tr(x.location.href);
            return !!s(e.url, "https://www.google-analytics.com/gtm/js?id=") || !(e.query || 0 <= e.url.indexOf("?") || 0 <= e.path.indexOf("://")) && (e.host == t.host && e.port == t.port || (t = "http:" == e.protocol ? 80 : 443,
            !("www.google-analytics.com" != e.host || (e.port || t) != t || !s(e.path, "/plugins/"))))
        }
          , Tr = function(e) {
            function t(e) {
                var t = (e.hostname || "").split(":")[0].toLowerCase()
                  , n = (e.protocol || "").toLowerCase();
                return n = 1 * e.port || ("http:" == n ? 80 : "https:" == n ? 443 : ""),
                e = e.pathname || "",
                s(e, "/") || (e = "/" + e),
                [t, "" + n, e]
            }
            var n = x.createElement("a");
            n.href = x.location.href;
            var r = (n.protocol || "").toLowerCase()
              , o = t(n)
              , i = n.search || ""
              , a = r + "//" + o[0] + (o[1] ? ":" + o[1] : "");
            return s(e, "//") ? e = r + e : s(e, "/") ? e = a + e : !e || s(e, "?") ? e = a + o[2] + (e || i) : 0 > e.split("/")[0].indexOf(":") && (e = a + o[2].substring(0, o[2].lastIndexOf("/")) + "/" + e),
            n.href = e,
            r = t(n),
            {
                protocol: (n.protocol || "").toLowerCase(),
                host: r[0],
                port: r[1],
                path: r[2],
                query: n.search || "",
                url: e || ""
            }
        }
          , Nr = {
            ga: function() {
                Nr.f = []
            }
        };
        Nr.ga(),
        Nr.D = function(e) {
            var t = Nr.J.apply(Nr, arguments);
            for (t = Nr.f.concat(t),
            Nr.f = []; 0 < t.length && !Nr.v(t[0]) && (t.shift(),
            !(0 < Nr.f.length)); )
                ;
            Nr.f = Nr.f.concat(t)
        }
        ,
        Nr.J = function(e) {
            for (var t = [], n = 0; n < arguments.length; n++)
                try {
                    var r = new Ir(arguments[n]);
                    r.g ? xr(r.a[0], r.a[1]) : (r.i && (r.ha = Ar(r.c, r.a[0], r.X, r.W)),
                    t.push(r))
                } catch (e) {}
            return t
        }
        ,
        Nr.v = function(e) {
            try {
                if (e.u)
                    e.u.call(C, jr.j("t0"));
                else {
                    var t = e.c == Ce ? jr : jr.j(e.c);
                    if (e.A) {
                        if ("t0" == e.c && null === (t = jr.create.apply(jr, e.a)))
                            return !0
                    } else if (e.ba)
                        jr.remove(e.c);
                    else if (t)
                        if (e.i) {
                            if (e.ha && (e.ha = Ar(e.c, e.a[0], e.X, e.W)),
                            !Or(e.a[0], t, e.W))
                                return !0
                        } else if (e.K) {
                            var n = e.C
                              , r = e.a
                              , o = t.plugins_.get(e.K);
                            o[n].apply(o, r)
                        } else
                            t[e.C].apply(t, e.a)
                }
            } catch (e) {}
        }
        ;
        var jr = function(e) {
            n(1),
            Nr.D.apply(Nr, [arguments])
        };
        jr.h = {},
        jr.P = [],
        jr.L = 0,
        jr.answer = 42;
        var Rr = [Zt, Qt, Ht];
        jr.create = function(e) {
            var t = w(Rr, [].slice.call(arguments));
            t[Ht] || (t[Ht] = "t0");
            var r = "" + t[Ht];
            if (jr.h[r])
                return jr.h[r];
            e: {
                if (t[pn]) {
                    if (n(67),
                    t[rn] && "cookie" != t[rn]) {
                        var o = !1;
                        break e
                    }
                    if (void 0 !== A)
                        t[zt] || (t[zt] = A);
                    else {
                        t: {
                            o = String(t[Qt] || y());
                            var i = String(t[Xt] || "/")
                              , a = R(String(t[Jt] || "_ga"));
                            if (!(o = Rn(a, o, i)) || xe.test(o))
                                o = !0;
                            else if (0 == (o = R("AMP_TOKEN")).length)
                                o = !0;
                            else {
                                if (1 == o.length && ("$RETRIEVING" == (o = decodeURIComponent(o[0])) || "$OPT_OUT" == o || "$ERROR" == o || "$NOT_FOUND" == o)) {
                                    o = !0;
                                    break t
                                }
                                o = !1
                            }
                        }
                        if (o && H(V, String(t[Zt]))) {
                            o = !0;
                            break e
                        }
                    }
                }
                o = !1
            }
            return o ? null : (t = new dr(t),
            jr.h[r] = t,
            jr.P.push(t),
            t)
        }
        ,
        jr.remove = function(e) {
            for (var t = 0; t < jr.P.length; t++)
                if (jr.P[t].get(Ht) == e) {
                    jr.P.splice(t, 1),
                    jr.h[e] = null;
                    break
                }
        }
        ,
        jr.j = function(e) {
            return jr.h[e]
        }
        ,
        jr.getAll = function() {
            return jr.P.slice(0)
        }
        ,
        jr.N = function() {
            "ga" != Ce && n(49);
            var e = C[Ce];
            if (!e || 42 != e.answer) {
                jr.L = e && e.l,
                jr.loaded = !0;
                var t = C[Ce] = jr;
                if (wn("create", t, t.create),
                wn("remove", t, t.remove),
                wn("getByName", t, t.j, 5),
                wn("getAll", t, t.getAll, 6),
                wn("get", t = dr.prototype, t.get, 7),
                wn("set", t, t.set, 4),
                wn("send", t, t.send),
                wn("requireSync", t, t.ma),
                wn("get", t = me.prototype, t.get),
                wn("set", t, t.set),
                "https:" != x.location.protocol && !Te) {
                    e: {
                        t = x.getElementsByTagName("script");
                        for (var r = 0; r < t.length && 100 > r; r++) {
                            var o = t[r].src;
                            if (o && 0 == o.indexOf("https://www.google-analytics.com/analytics")) {
                                t = !0;
                                break e
                            }
                        }
                        t = !1
                    }
                    t && (Te = !0)
                }
                (C.gaplugins = C.gaplugins || {}).Linker = Kn,
                t = Kn.prototype,
                xr("linker", Kn),
                wn("decorate", t, t.ca, 20),
                wn("autoLink", t, t.S, 25),
                xr("displayfeatures", lr),
                xr("adfeatures", lr),
                e = e && e.q,
                a(e) ? Nr.D.apply(jr, e) : n(50)
            }
        }
        ,
        jr.da = function() {
            for (var e = jr.getAll(), t = 0; t < e.length; t++)
                e[t].get(Ht)
        }
        ;
        var Mr = jr.N
          , Dr = C[Ce];
        function Lr(e) {
            var t, n = 1;
            if (e)
                for (n = 0,
                t = e.length - 1; 0 <= t; t--) {
                    var r = e.charCodeAt(t);
                    n = 0 != (r = 266338304 & (n = (n << 6 & 268435455) + r + (r << 14))) ? n ^ r >> 21 : n
                }
            return n
        }
        Dr && Dr.r ? Mr() : Er(Mr),
        Er(function() {
            Nr.D(["provide", "render", p])
        })
    }(window)
}
]);
