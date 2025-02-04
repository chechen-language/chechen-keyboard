/*! @sentry/browser 5.30.0 (6de2dd4) | https://github.com/getsentry/sentry-javascript */
var Sentry = function (t) { var n = function (t, r) { return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, n) { t.__proto__ = n; } || function (t, n) { for (var r in n)
    n.hasOwnProperty(r) && (t[r] = n[r]); })(t, r); }; function r(t, r) { function e() { this.constructor = t; } n(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e); } var e, i, o, u, s, c = function () { return (c = Object.assign || function (t) { for (var n, r = 1, e = arguments.length; r < e; r++)
    for (var i in n = arguments[r])
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]); return t; }).apply(this, arguments); }; function a(t) { var n = "function" == typeof Symbol && t[Symbol.iterator], r = 0; return n ? n.call(t) : { next: function () { return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t }; } }; } function f(t, n) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r)
    return t; var e, i, o = r.call(t), u = []; try {
    for (; (void 0 === n || n-- > 0) && !(e = o.next()).done;)
        u.push(e.value);
}
catch (t) {
    i = { error: t };
}
finally {
    try {
        e && !e.done && (r = o.return) && r.call(o);
    }
    finally {
        if (i)
            throw i.error;
    }
} return u; } function h() { for (var t = [], n = 0; n < arguments.length; n++)
    t = t.concat(f(arguments[n])); return t; } function v(t) { switch (Object.prototype.toString.call(t)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]": return !0;
    default: return E(t, Error);
} } function l(t) { return "[object ErrorEvent]" === Object.prototype.toString.call(t); } function d(t) { return "[object DOMError]" === Object.prototype.toString.call(t); } function p(t) { return "[object String]" === Object.prototype.toString.call(t); } function y(t) { return null === t || "object" != typeof t && "function" != typeof t; } function m(t) { return "[object Object]" === Object.prototype.toString.call(t); } function b(t) { return "undefined" != typeof Event && E(t, Event); } function w(t) { return "undefined" != typeof Element && E(t, Element); } function g(t) { return Boolean(t && t.then && "function" == typeof t.then); } function E(t, n) { try {
    return t instanceof n;
}
catch (t) {
    return !1;
} } function x(t) { try {
    for (var n = t, r = [], e = 0, i = 0, o = " > ".length, u = void 0; n && e++ < 5 && !("html" === (u = j(n)) || e > 1 && i + r.length * o + u.length >= 80);)
        r.push(u), i += u.length, n = n.parentNode;
    return r.reverse().join(" > ");
}
catch (t) {
    return "<unknown>";
} } function j(t) { var n, r, e, i, o, u = t, s = []; if (!u || !u.tagName)
    return ""; if (s.push(u.tagName.toLowerCase()), u.id && s.push("#" + u.id), (n = u.className) && p(n))
    for (r = n.split(/\s+/), o = 0; o < r.length; o++)
        s.push("." + r[o]); var c = ["type", "name", "title", "alt"]; for (o = 0; o < c.length; o++)
    e = c[o], (i = u.getAttribute(e)) && s.push("[" + e + '="' + i + '"]'); return s.join(""); } !function (t) { t[t.None = 0] = "None", t[t.Error = 1] = "Error", t[t.Debug = 2] = "Debug", t[t.Verbose = 3] = "Verbose"; }(e || (e = {})), function (t) { t.Ok = "ok", t.Exited = "exited", t.Crashed = "crashed", t.Abnormal = "abnormal"; }(i || (i = {})), (o = t.Severity || (t.Severity = {})).Fatal = "fatal", o.Error = "error", o.Warning = "warning", o.Log = "log", o.Info = "info", o.Debug = "debug", o.Critical = "critical", function (t) { t.fromString = function (n) { switch (n) {
    case "debug": return t.Debug;
    case "info": return t.Info;
    case "warn":
    case "warning": return t.Warning;
    case "error": return t.Error;
    case "fatal": return t.Fatal;
    case "critical": return t.Critical;
    case "log":
    default: return t.Log;
} }; }(t.Severity || (t.Severity = {})), (u = t.Status || (t.Status = {})).Unknown = "unknown", u.Skipped = "skipped", u.Success = "success", u.RateLimit = "rate_limit", u.Invalid = "invalid", u.Failed = "failed", function (t) { t.fromHttpCode = function (n) { return n >= 200 && n < 300 ? t.Success : 429 === n ? t.RateLimit : n >= 400 && n < 500 ? t.Invalid : n >= 500 ? t.Failed : t.Unknown; }; }(t.Status || (t.Status = {})), function (t) { t.Explicit = "explicitly_set", t.Sampler = "client_sampler", t.Rate = "client_rate", t.Inheritance = "inheritance"; }(s || (s = {})); var _ = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function (t, n) { return t.__proto__ = n, t; } : function (t, n) { for (var r in n)
    t.hasOwnProperty(r) || (t[r] = n[r]); return t; }); var k = function (t) { function n(n) { var r = this.constructor, e = t.call(this, n) || this; return e.message = n, e.name = r.prototype.constructor.name, _(e, r.prototype), e; } return r(n, t), n; }(Error), S = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/, O = function () { function t(t) { "string" == typeof t ? this.t(t) : this.i(t), this.o(); } return t.prototype.toString = function (t) { void 0 === t && (t = !1); var n = this, r = n.host, e = n.path, i = n.pass, o = n.port, u = n.projectId; return n.protocol + "://" + n.user + (t && i ? ":" + i : "") + "@" + r + (o ? ":" + o : "") + "/" + (e ? e + "/" : e) + u; }, t.prototype.t = function (t) { var n = S.exec(t); if (!n)
    throw new k("Invalid Dsn"); var r = f(n.slice(1), 6), e = r[0], i = r[1], o = r[2], u = void 0 === o ? "" : o, s = r[3], c = r[4], a = void 0 === c ? "" : c, h = "", v = r[5], l = v.split("/"); if (l.length > 1 && (h = l.slice(0, -1).join("/"), v = l.pop()), v) {
    var d = v.match(/^\d+/);
    d && (v = d[0]);
} this.i({ host: s, pass: u, path: h, projectId: v, port: a, protocol: e, user: i }); }, t.prototype.i = function (t) { this.protocol = t.protocol, this.user = t.user, this.pass = t.pass || "", this.host = t.host, this.port = t.port || "", this.path = t.path || "", this.projectId = t.projectId; }, t.prototype.o = function () { var t = this; if (["protocol", "user", "host", "projectId"].forEach(function (n) { if (!t[n])
    throw new k("Invalid Dsn: " + n + " missing"); }), !this.projectId.match(/^\d+$/))
    throw new k("Invalid Dsn: Invalid projectId " + this.projectId); if ("http" !== this.protocol && "https" !== this.protocol)
    throw new k("Invalid Dsn: Invalid protocol " + this.protocol); if (this.port && isNaN(parseInt(this.port, 10)))
    throw new k("Invalid Dsn: Invalid port " + this.port); }, t; }(), T = function () { function t() { this.u = "function" == typeof WeakSet, this.s = this.u ? new WeakSet : []; } return t.prototype.memoize = function (t) { if (this.u)
    return !!this.s.has(t) || (this.s.add(t), !1); for (var n = 0; n < this.s.length; n++) {
    if (this.s[n] === t)
        return !0;
} return this.s.push(t), !1; }, t.prototype.unmemoize = function (t) { if (this.u)
    this.s.delete(t);
else
    for (var n = 0; n < this.s.length; n++)
        if (this.s[n] === t) {
            this.s.splice(n, 1);
            break;
        } }, t; }(), D = "<anonymous>"; function R(t) { try {
    return t && "function" == typeof t && t.name || D;
}
catch (t) {
    return D;
} } function I(t, n) { return void 0 === n && (n = 0), "string" != typeof t || 0 === n ? t : t.length <= n ? t : t.substr(0, n) + "..."; } function N(t, n) { if (!Array.isArray(t))
    return ""; for (var r = [], e = 0; e < t.length; e++) {
    var i = t[e];
    try {
        r.push(String(i));
    }
    catch (t) {
        r.push("[value cannot be serialized]");
    }
} return r.join(n); } function M(t, n) { return !!p(t) && (r = n, "[object RegExp]" === Object.prototype.toString.call(r) ? n.test(t) : "string" == typeof n && -1 !== t.indexOf(n)); var r; } function A(t, n, r) { if (n in t) {
    var e = t[n], i_1 = r(e);
    if ("function" == typeof i_1)
        try {
            i_1.prototype = i_1.prototype || {}, Object.defineProperties(i_1, { __sentry_original__: { enumerable: !1, value: e } });
        }
        catch (t) { }
    t[n] = i_1;
} } function C(t) { if (v(t)) {
    var n = t, r = { message: n.message, name: n.name, stack: n.stack };
    for (var e in n)
        Object.prototype.hasOwnProperty.call(n, e) && (r[e] = n[e]);
    return r;
} if (b(t)) {
    var i = t, o = {};
    o.type = i.type;
    try {
        o.target = w(i.target) ? x(i.target) : Object.prototype.toString.call(i.target);
    }
    catch (t) {
        o.target = "<unknown>";
    }
    try {
        o.currentTarget = w(i.currentTarget) ? x(i.currentTarget) : Object.prototype.toString.call(i.currentTarget);
    }
    catch (t) {
        o.currentTarget = "<unknown>";
    }
    for (var e in "undefined" != typeof CustomEvent && E(t, CustomEvent) && (o.detail = i.detail), i)
        Object.prototype.hasOwnProperty.call(i, e) && (o[e] = i);
    return o;
} return t; } function q(t) { return function (t) { return ~-encodeURI(t).split(/%..|./).length; }(JSON.stringify(t)); } function L(t, n, r) { void 0 === n && (n = 3), void 0 === r && (r = 102400); var e = P(t, n); return q(e) > r ? L(t, n - 1, r) : e; } function U(t, n) { return "domain" === n && t && "object" == typeof t && t.h ? "[Domain]" : "domainEmitter" === n ? "[DomainEmitter]" : "undefined" != typeof global && t === global ? "[Global]" : "undefined" != typeof window && t === window ? "[Window]" : "undefined" != typeof document && t === document ? "[Document]" : m(r = t) && "nativeEvent" in r && "preventDefault" in r && "stopPropagation" in r ? "[SyntheticEvent]" : "number" == typeof t && t != t ? "[NaN]" : void 0 === t ? "[undefined]" : "function" == typeof t ? "[Function: " + R(t) + "]" : "symbol" == typeof t ? "[" + String(t) + "]" : "bigint" == typeof t ? "[BigInt: " + String(t) + "]" : t; var r; } function H(t, n, r, e) { if (void 0 === r && (r = 1 / 0), void 0 === e && (e = new T), 0 === r)
    return function (t) { var n = Object.prototype.toString.call(t); if ("string" == typeof t)
        return t; if ("[object Object]" === n)
        return "[Object]"; if ("[object Array]" === n)
        return "[Array]"; var r = U(t); return y(r) ? r : n; }(n); if (null != n && "function" == typeof n.toJSON)
    return n.toJSON(); var i = U(n, t); if (y(i))
    return i; var o = C(n), u = Array.isArray(n) ? [] : {}; if (e.memoize(n))
    return "[Circular ~]"; for (var s in o)
    Object.prototype.hasOwnProperty.call(o, s) && (u[s] = H(s, o[s], r - 1, e)); return e.unmemoize(n), u; } function P(t, n) { try {
    return JSON.parse(JSON.stringify(t, function (t, r) { return H(t, r, n); }));
}
catch (t) {
    return "**non-serializable**";
} } function F(t, n) { void 0 === n && (n = 40); var r = Object.keys(C(t)); if (r.sort(), !r.length)
    return "[object has no keys]"; if (r[0].length >= n)
    return I(r[0], n); for (var e = r.length; e > 0; e--) {
    var i = r.slice(0, e).join(", ");
    if (!(i.length > n))
        return e === r.length ? i : I(i, n);
} return ""; } function X(t) { var n, r; if (m(t)) {
    var e = t, i = {};
    try {
        for (var o = a(Object.keys(e)), u = o.next(); !u.done; u = o.next()) {
            var s = u.value;
            void 0 !== e[s] && (i[s] = X(e[s]));
        }
    }
    catch (t) {
        n = { error: t };
    }
    finally {
        try {
            u && !u.done && (r = o.return) && r.call(o);
        }
        finally {
            if (n)
                throw n.error;
        }
    }
    return i;
} return Array.isArray(t) ? t.map(X) : t; } function B() { return "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0); } var J = {}; function W() { return B() ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : J; } function $() { var t = W(), n = t.crypto || t.msCrypto; if (void 0 !== n && n.getRandomValues) {
    var r = new Uint16Array(8);
    n.getRandomValues(r), r[3] = 4095 & r[3] | 16384, r[4] = 16383 & r[4] | 32768;
    var e = function (t) { for (var n = t.toString(16); n.length < 4;)
        n = "0" + n; return n; };
    return e(r[0]) + e(r[1]) + e(r[2]) + e(r[3]) + e(r[4]) + e(r[5]) + e(r[6]) + e(r[7]);
} return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (t) { var n = 16 * Math.random() | 0; return ("x" === t ? n : 3 & n | 8).toString(16); }); } function G(t) { if (!t)
    return {}; var n = t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/); if (!n)
    return {}; var r = n[6] || "", e = n[8] || ""; return { host: n[4], path: n[5], protocol: n[2], relative: n[5] + r + e }; } function z(t) { if (t.message)
    return t.message; if (t.exception && t.exception.values && t.exception.values[0]) {
    var n = t.exception.values[0];
    return n.type && n.value ? n.type + ": " + n.value : n.type || n.value || t.event_id || "<unknown>";
} return t.event_id || "<unknown>"; } function V(t) { var n = W(); if (!("console" in n))
    return t(); var r = n.console, e = {}; ["debug", "info", "warn", "error", "log", "assert"].forEach(function (t) { t in n.console && r[t].__sentry_original__ && (e[t] = r[t], r[t] = r[t].__sentry_original__); }); var i = t(); return Object.keys(e).forEach(function (t) { r[t] = e[t]; }), i; } function K(t, n, r) { t.exception = t.exception || {}, t.exception.values = t.exception.values || [], t.exception.values[0] = t.exception.values[0] || {}, t.exception.values[0].value = t.exception.values[0].value || n || "", t.exception.values[0].type = t.exception.values[0].type || r || "Error"; } function Q(t, n) { void 0 === n && (n = {}); try {
    t.exception.values[0].mechanism = t.exception.values[0].mechanism || {}, Object.keys(n).forEach(function (r) { t.exception.values[0].mechanism[r] = n[r]; });
}
catch (t) { } } var Y = 6e4; var Z = W(), tt = "Sentry Logger ", nt = function () { function t() { this.v = !1; } return t.prototype.disable = function () { this.v = !1; }, t.prototype.enable = function () { this.v = !0; }, t.prototype.log = function () { for (var t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n]; this.v && V(function () { Z.console.log(tt + "[Log]: " + t.join(" ")); }); }, t.prototype.warn = function () { for (var t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n]; this.v && V(function () { Z.console.warn(tt + "[Warn]: " + t.join(" ")); }); }, t.prototype.error = function () { for (var t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n]; this.v && V(function () { Z.console.error(tt + "[Error]: " + t.join(" ")); }); }, t; }(); Z.__SENTRY__ = Z.__SENTRY__ || {}; var rt = Z.__SENTRY__.logger || (Z.__SENTRY__.logger = new nt); function et() { if (!("fetch" in W()))
    return !1; try {
    return new Headers, new Request(""), new Response, !0;
}
catch (t) {
    return !1;
} } function it(t) { return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString()); } function ot() { if (!et())
    return !1; try {
    return new Request("_", { referrerPolicy: "origin" }), !0;
}
catch (t) {
    return !1;
} } var ut, st = W(), ct = {}, at = {}; function ft(t) { if (!at[t])
    switch (at[t] = !0, t) {
        case "console":
            !function () { if (!("console" in st))
                return; ["debug", "info", "warn", "error", "log", "assert"].forEach(function (t) { t in st.console && A(st.console, t, function (n) { return function () { for (var r = [], e = 0; e < arguments.length; e++)
                r[e] = arguments[e]; vt("console", { args: r, level: t }), n && Function.prototype.apply.call(n, st.console, r); }; }); }); }();
            break;
        case "dom":
            !function () { if (!("document" in st))
                return; st.document.addEventListener("click", wt("click", vt.bind(null, "dom")), !1), st.document.addEventListener("keypress", gt(vt.bind(null, "dom")), !1), ["EventTarget", "Node"].forEach(function (t) { var n = st[t] && st[t].prototype; n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (A(n, "addEventListener", function (t) { return function (n, r, e) { return r && r.handleEvent ? ("click" === n && A(r, "handleEvent", function (t) { return function (n) { return wt("click", vt.bind(null, "dom"))(n), t.call(this, n); }; }), "keypress" === n && A(r, "handleEvent", function (t) { return function (n) { return gt(vt.bind(null, "dom"))(n), t.call(this, n); }; })) : ("click" === n && wt("click", vt.bind(null, "dom"), !0)(this), "keypress" === n && gt(vt.bind(null, "dom"))(this)), t.call(this, n, r, e); }; }), A(n, "removeEventListener", function (t) { return function (n, r, e) { try {
                t.call(this, n, r.__sentry_wrapped__, e);
            }
            catch (t) { } return t.call(this, n, r, e); }; })); }); }();
            break;
        case "xhr":
            !function () { if (!("XMLHttpRequest" in st))
                return; var t = [], n = [], r = XMLHttpRequest.prototype; A(r, "open", function (r) { return function () { for (var e = [], i = 0; i < arguments.length; i++)
                e[i] = arguments[i]; var o = this, u = e[1]; o.__sentry_xhr__ = { method: p(e[0]) ? e[0].toUpperCase() : e[0], url: e[1] }, p(u) && "POST" === o.__sentry_xhr__.method && u.match(/sentry_key/) && (o.__sentry_own_request__ = !0); var s = function () { if (4 === o.readyState) {
                try {
                    o.__sentry_xhr__ && (o.__sentry_xhr__.status_code = o.status);
                }
                catch (t) { }
                try {
                    var r = t.indexOf(o);
                    if (-1 !== r) {
                        t.splice(r);
                        var i = n.splice(r)[0];
                        o.__sentry_xhr__ && void 0 !== i[0] && (o.__sentry_xhr__.body = i[0]);
                    }
                }
                catch (t) { }
                vt("xhr", { args: e, endTimestamp: Date.now(), startTimestamp: Date.now(), xhr: o });
            } }; return "onreadystatechange" in o && "function" == typeof o.onreadystatechange ? A(o, "onreadystatechange", function (t) { return function () { for (var n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r]; return s(), t.apply(o, n); }; }) : o.addEventListener("readystatechange", s), r.apply(o, e); }; }), A(r, "send", function (r) { return function () { for (var e = [], i = 0; i < arguments.length; i++)
                e[i] = arguments[i]; return t.push(this), n.push(e), vt("xhr", { args: e, startTimestamp: Date.now(), xhr: this }), r.apply(this, e); }; }); }();
            break;
        case "fetch":
            !function () { if (!function () { if (!et())
                return !1; var t = W(); if (it(t.fetch))
                return !0; var n = !1, r = t.document; if (r && "function" == typeof r.createElement)
                try {
                    var e = r.createElement("iframe");
                    e.hidden = !0, r.head.appendChild(e), e.contentWindow && e.contentWindow.fetch && (n = it(e.contentWindow.fetch)), r.head.removeChild(e);
                }
                catch (t) {
                    rt.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t);
                } return n; }())
                return; A(st, "fetch", function (t) { return function () { for (var n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r]; var e = { args: n, fetchData: { method: lt(n), url: dt(n) }, startTimestamp: Date.now() }; return vt("fetch", c({}, e)), t.apply(st, n).then(function (t) { return vt("fetch", c(c({}, e), { endTimestamp: Date.now(), response: t })), t; }, function (t) { throw vt("fetch", c(c({}, e), { endTimestamp: Date.now(), error: t })), t; }); }; }); }();
            break;
        case "history":
            !function () { if (t = W(), n = t.chrome, r = n && n.app && n.app.runtime, e = "history" in t && !!t.history.pushState && !!t.history.replaceState, r || !e)
                return; var t, n, r, e; var i = st.onpopstate; function o(t) { return function () { for (var n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r]; var e = n.length > 2 ? n[2] : void 0; if (e) {
                var i = ut, o = String(e);
                ut = o, vt("history", { from: i, to: o });
            } return t.apply(this, n); }; } st.onpopstate = function () { for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n]; var r = st.location.href, e = ut; if (ut = r, vt("history", { from: e, to: r }), i)
                return i.apply(this, t); }, A(st.history, "pushState", o), A(st.history, "replaceState", o); }();
            break;
        case "error":
            Et = st.onerror, st.onerror = function (t, n, r, e, i) { return vt("error", { column: e, error: i, line: r, msg: t, url: n }), !!Et && Et.apply(this, arguments); };
            break;
        case "unhandledrejection":
            jt = st.onunhandledrejection, st.onunhandledrejection = function (t) { return vt("unhandledrejection", t), !jt || jt.apply(this, arguments); };
            break;
        default: rt.warn("unknown instrumentation type:", t);
    } } function ht(t) { t && "string" == typeof t.type && "function" == typeof t.callback && (ct[t.type] = ct[t.type] || [], ct[t.type].push(t.callback), ft(t.type)); } function vt(t, n) { var r, e; if (t && ct[t])
    try {
        for (var i = a(ct[t] || []), o = i.next(); !o.done; o = i.next()) {
            var u = o.value;
            try {
                u(n);
            }
            catch (n) {
                rt.error("Error while triggering instrumentation handler.\nType: " + t + "\nName: " + R(u) + "\nError: " + n);
            }
        }
    }
    catch (t) {
        r = { error: t };
    }
    finally {
        try {
            o && !o.done && (e = i.return) && e.call(i);
        }
        finally {
            if (r)
                throw r.error;
        }
    } } function lt(t) { return void 0 === t && (t = []), "Request" in st && E(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"; } function dt(t) { return void 0 === t && (t = []), "string" == typeof t[0] ? t[0] : "Request" in st && E(t[0], Request) ? t[0].url : String(t[0]); } var pt, yt, mt = 1e3, bt = 0; function wt(t, n, r) { return void 0 === r && (r = !1), function (e) { pt = void 0, e && yt !== e && (yt = e, bt && clearTimeout(bt), r ? bt = setTimeout(function () { n({ event: e, name: t }); }) : n({ event: e, name: t })); }; } function gt(t) { return function (n) { var r; try {
    r = n.target;
}
catch (t) {
    return;
} var e = r && r.tagName; e && ("INPUT" === e || "TEXTAREA" === e || r.isContentEditable) && (pt || wt("input", t)(n), clearTimeout(pt), pt = setTimeout(function () { pt = void 0; }, mt)); }; } var Et = null; var xt, jt = null; !function (t) { t.PENDING = "PENDING", t.RESOLVED = "RESOLVED", t.REJECTED = "REJECTED"; }(xt || (xt = {})); var _t = function () { function t(t) { var n = this; this.l = xt.PENDING, this.p = [], this.m = function (t) { n.g(xt.RESOLVED, t); }, this.j = function (t) { n.g(xt.REJECTED, t); }, this.g = function (t, r) { n.l === xt.PENDING && (g(r) ? r.then(n.m, n.j) : (n.l = t, n._ = r, n.k())); }, this.S = function (t) { n.p = n.p.concat(t), n.k(); }, this.k = function () { if (n.l !== xt.PENDING) {
    var t = n.p.slice();
    n.p = [], t.forEach(function (t) { t.done || (n.l === xt.RESOLVED && t.onfulfilled && t.onfulfilled(n._), n.l === xt.REJECTED && t.onrejected && t.onrejected(n._), t.done = !0); });
} }; try {
    t(this.m, this.j);
}
catch (t) {
    this.j(t);
} } return t.resolve = function (n) { return new t(function (t) { t(n); }); }, t.reject = function (n) { return new t(function (t, r) { r(n); }); }, t.all = function (n) { return new t(function (r, e) { if (Array.isArray(n))
    if (0 !== n.length) {
        var i = n.length, o = [];
        n.forEach(function (n, u) { t.resolve(n).then(function (t) { o[u] = t, 0 === (i -= 1) && r(o); }).then(null, e); });
    }
    else
        r([]);
else
    e(new TypeError("Promise.all requires an array as input.")); }); }, t.prototype.then = function (n, r) { var e = this; return new t(function (t, i) { e.S({ done: !1, onfulfilled: function (r) { if (n)
        try {
            return void t(n(r));
        }
        catch (t) {
            return void i(t);
        }
    else
        t(r); }, onrejected: function (n) { if (r)
        try {
            return void t(r(n));
        }
        catch (t) {
            return void i(t);
        }
    else
        i(n); } }); }); }, t.prototype.catch = function (t) { return this.then(function (t) { return t; }, t); }, t.prototype.finally = function (n) { var r = this; return new t(function (t, e) { var i, o; return r.then(function (t) { o = !1, i = t, n && n(); }, function (t) { o = !0, i = t, n && n(); }).then(function () { o ? e(i) : t(i); }); }); }, t.prototype.toString = function () { return "[object SyncPromise]"; }, t; }(), kt = function () { function t(t) { this.O = t, this.T = []; } return t.prototype.isReady = function () { return void 0 === this.O || this.length() < this.O; }, t.prototype.add = function (t) { var n = this; return this.isReady() ? (-1 === this.T.indexOf(t) && this.T.push(t), t.then(function () { return n.remove(t); }).then(null, function () { return n.remove(t).then(null, function () { }); }), t) : _t.reject(new k("Not adding Promise due to buffer limit reached.")); }, t.prototype.remove = function (t) { return this.T.splice(this.T.indexOf(t), 1)[0]; }, t.prototype.length = function () { return this.T.length; }, t.prototype.drain = function (t) { var n = this; return new _t(function (r) { var e = setTimeout(function () { t && t > 0 && r(!1); }, t); _t.all(n.T).then(function () { clearTimeout(e), r(!0); }).then(null, function () { r(!0); }); }); }, t; }(), St = { nowSeconds: function () { return Date.now() / 1e3; } }; var Ot = B() ? function () { try {
    return (t = module, n = "perf_hooks", t.require(n)).performance;
}
catch (t) {
    return;
} var t, n; }() : function () { var t = W().performance; if (t && t.now)
    return { now: function () { return t.now(); }, timeOrigin: Date.now() - t.now() }; }(), Tt = void 0 === Ot ? St : { nowSeconds: function () { return (Ot.timeOrigin + Ot.now()) / 1e3; } }, Dt = St.nowSeconds.bind(St), Rt = (Tt.nowSeconds.bind(Tt), function () { var t = W().performance; if (t)
    t.timeOrigin ? t.timeOrigin : t.timing && t.timing.navigationStart || Date.now(); }(), function () { function t() { this.D = !1, this.R = [], this.I = [], this.N = [], this.M = {}, this.A = {}, this.C = {}, this.q = {}; } return t.clone = function (n) { var r = new t; return n && (r.N = h(n.N), r.A = c({}, n.A), r.C = c({}, n.C), r.q = c({}, n.q), r.M = n.M, r.L = n.L, r.U = n.U, r.H = n.H, r.P = n.P, r.F = n.F, r.I = h(n.I)), r; }, t.prototype.addScopeListener = function (t) { this.R.push(t); }, t.prototype.addEventProcessor = function (t) { return this.I.push(t), this; }, t.prototype.setUser = function (t) { return this.M = t || {}, this.H && this.H.update({ user: t }), this.X(), this; }, t.prototype.getUser = function () { return this.M; }, t.prototype.setTags = function (t) { return this.A = c(c({}, this.A), t), this.X(), this; }, t.prototype.setTag = function (t, n) { var r; return this.A = c(c({}, this.A), ((r = {})[t] = n, r)), this.X(), this; }, t.prototype.setExtras = function (t) { return this.C = c(c({}, this.C), t), this.X(), this; }, t.prototype.setExtra = function (t, n) { var r; return this.C = c(c({}, this.C), ((r = {})[t] = n, r)), this.X(), this; }, t.prototype.setFingerprint = function (t) { return this.F = t, this.X(), this; }, t.prototype.setLevel = function (t) { return this.L = t, this.X(), this; }, t.prototype.setTransactionName = function (t) { return this.P = t, this.X(), this; }, t.prototype.setTransaction = function (t) { return this.setTransactionName(t); }, t.prototype.setContext = function (t, n) { var r; return null === n ? delete this.q[t] : this.q = c(c({}, this.q), ((r = {})[t] = n, r)), this.X(), this; }, t.prototype.setSpan = function (t) { return this.U = t, this.X(), this; }, t.prototype.getSpan = function () { return this.U; }, t.prototype.getTransaction = function () { var t, n, r, e, i = this.getSpan(); return (null === (t = i) || void 0 === t ? void 0 : t.transaction) ? null === (n = i) || void 0 === n ? void 0 : n.transaction : (null === (e = null === (r = i) || void 0 === r ? void 0 : r.spanRecorder) || void 0 === e ? void 0 : e.spans[0]) ? i.spanRecorder.spans[0] : void 0; }, t.prototype.setSession = function (t) { return t ? this.H = t : delete this.H, this.X(), this; }, t.prototype.getSession = function () { return this.H; }, t.prototype.update = function (n) { if (!n)
    return this; if ("function" == typeof n) {
    var r = n(this);
    return r instanceof t ? r : this;
} return n instanceof t ? (this.A = c(c({}, this.A), n.A), this.C = c(c({}, this.C), n.C), this.q = c(c({}, this.q), n.q), n.M && Object.keys(n.M).length && (this.M = n.M), n.L && (this.L = n.L), n.F && (this.F = n.F)) : m(n) && (n = n, this.A = c(c({}, this.A), n.tags), this.C = c(c({}, this.C), n.extra), this.q = c(c({}, this.q), n.contexts), n.user && (this.M = n.user), n.level && (this.L = n.level), n.fingerprint && (this.F = n.fingerprint)), this; }, t.prototype.clear = function () { return this.N = [], this.A = {}, this.C = {}, this.M = {}, this.q = {}, this.L = void 0, this.P = void 0, this.F = void 0, this.U = void 0, this.H = void 0, this.X(), this; }, t.prototype.addBreadcrumb = function (t, n) { var r = c({ timestamp: Dt() }, t); return this.N = void 0 !== n && n >= 0 ? h(this.N, [r]).slice(-n) : h(this.N, [r]), this.X(), this; }, t.prototype.clearBreadcrumbs = function () { return this.N = [], this.X(), this; }, t.prototype.applyToEvent = function (t, n) { var r; if (this.C && Object.keys(this.C).length && (t.extra = c(c({}, this.C), t.extra)), this.A && Object.keys(this.A).length && (t.tags = c(c({}, this.A), t.tags)), this.M && Object.keys(this.M).length && (t.user = c(c({}, this.M), t.user)), this.q && Object.keys(this.q).length && (t.contexts = c(c({}, this.q), t.contexts)), this.L && (t.level = this.L), this.P && (t.transaction = this.P), this.U) {
    t.contexts = c({ trace: this.U.getTraceContext() }, t.contexts);
    var e = null === (r = this.U.transaction) || void 0 === r ? void 0 : r.name;
    e && (t.tags = c({ transaction: e }, t.tags));
} return this.B(t), t.breadcrumbs = h(t.breadcrumbs || [], this.N), t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, this.J(h(It(), this.I), t, n); }, t.prototype.J = function (t, n, r, e) { var i = this; return void 0 === e && (e = 0), new _t(function (o, u) { var s = t[e]; if (null === n || "function" != typeof s)
    o(n);
else {
    var a = s(c({}, n), r);
    g(a) ? a.then(function (n) { return i.J(t, n, r, e + 1).then(o); }).then(null, u) : i.J(t, a, r, e + 1).then(o).then(null, u);
} }); }, t.prototype.X = function () { var t = this; this.D || (this.D = !0, this.R.forEach(function (n) { n(t); }), this.D = !1); }, t.prototype.B = function (t) { t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], this.F && (t.fingerprint = t.fingerprint.concat(this.F)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint; }, t; }()); function It() { var t = W(); return t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.globalEventProcessors = t.__SENTRY__.globalEventProcessors || [], t.__SENTRY__.globalEventProcessors; } function Nt(t) { It().push(t); } var Mt = function () { function t(t) { this.errors = 0, this.sid = $(), this.timestamp = Date.now(), this.started = Date.now(), this.duration = 0, this.status = i.Ok, t && this.update(t); } return t.prototype.update = function (t) { void 0 === t && (t = {}), t.user && (t.user.ip_address && (this.ipAddress = t.user.ip_address), t.did || (this.did = t.user.id || t.user.email || t.user.username)), this.timestamp = t.timestamp || Date.now(), t.sid && (this.sid = 32 === t.sid.length ? t.sid : $()), t.did && (this.did = "" + t.did), "number" == typeof t.started && (this.started = t.started), "number" == typeof t.duration ? this.duration = t.duration : this.duration = this.timestamp - this.started, t.release && (this.release = t.release), t.environment && (this.environment = t.environment), t.ipAddress && (this.ipAddress = t.ipAddress), t.userAgent && (this.userAgent = t.userAgent), "number" == typeof t.errors && (this.errors = t.errors), t.status && (this.status = t.status); }, t.prototype.close = function (t) { t ? this.update({ status: t }) : this.status === i.Ok ? this.update({ status: i.Exited }) : this.update(); }, t.prototype.toJSON = function () { return X({ sid: "" + this.sid, init: !0, started: new Date(this.started).toISOString(), timestamp: new Date(this.timestamp).toISOString(), status: this.status, errors: this.errors, did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0, duration: this.duration, attrs: X({ release: this.release, environment: this.environment, ip_address: this.ipAddress, user_agent: this.userAgent }) }); }, t; }(), At = 3, Ct = function () { function t(t, n, r) { void 0 === n && (n = new Rt), void 0 === r && (r = At), this.W = r, this.$ = [{}], this.getStackTop().scope = n, this.bindClient(t); } return t.prototype.isOlderThan = function (t) { return this.W < t; }, t.prototype.bindClient = function (t) { this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations(); }, t.prototype.pushScope = function () { var t = Rt.clone(this.getScope()); return this.getStack().push({ client: this.getClient(), scope: t }), t; }, t.prototype.popScope = function () { return !(this.getStack().length <= 1) && !!this.getStack().pop(); }, t.prototype.withScope = function (t) { var n = this.pushScope(); try {
    t(n);
}
finally {
    this.popScope();
} }, t.prototype.getClient = function () { return this.getStackTop().client; }, t.prototype.getScope = function () { return this.getStackTop().scope; }, t.prototype.getStack = function () { return this.$; }, t.prototype.getStackTop = function () { return this.$[this.$.length - 1]; }, t.prototype.captureException = function (t, n) { var r = this.G = $(), e = n; if (!n) {
    var i = void 0;
    try {
        throw new Error("Sentry syntheticException");
    }
    catch (t) {
        i = t;
    }
    e = { originalException: t, syntheticException: i };
} return this.V("captureException", t, c(c({}, e), { event_id: r })), r; }, t.prototype.captureMessage = function (t, n, r) { var e = this.G = $(), i = r; if (!r) {
    var o = void 0;
    try {
        throw new Error(t);
    }
    catch (t) {
        o = t;
    }
    i = { originalException: t, syntheticException: o };
} return this.V("captureMessage", t, n, c(c({}, i), { event_id: e })), e; }, t.prototype.captureEvent = function (t, n) { var r = this.G = $(); return this.V("captureEvent", t, c(c({}, n), { event_id: r })), r; }, t.prototype.lastEventId = function () { return this.G; }, t.prototype.addBreadcrumb = function (t, n) { var r = this.getStackTop(), e = r.scope, i = r.client; if (e && i) {
    var o = i.getOptions && i.getOptions() || {}, u = o.beforeBreadcrumb, s = void 0 === u ? null : u, a = o.maxBreadcrumbs, f = void 0 === a ? 100 : a;
    if (!(f <= 0)) {
        var h = Dt(), v = c({ timestamp: h }, t), l = s ? V(function () { return s(v, n); }) : v;
        null !== l && e.addBreadcrumb(l, Math.min(f, 100));
    }
} }, t.prototype.setUser = function (t) { var n = this.getScope(); n && n.setUser(t); }, t.prototype.setTags = function (t) { var n = this.getScope(); n && n.setTags(t); }, t.prototype.setExtras = function (t) { var n = this.getScope(); n && n.setExtras(t); }, t.prototype.setTag = function (t, n) { var r = this.getScope(); r && r.setTag(t, n); }, t.prototype.setExtra = function (t, n) { var r = this.getScope(); r && r.setExtra(t, n); }, t.prototype.setContext = function (t, n) { var r = this.getScope(); r && r.setContext(t, n); }, t.prototype.configureScope = function (t) { var n = this.getStackTop(), r = n.scope, e = n.client; r && e && t(r); }, t.prototype.run = function (t) { var n = Lt(this); try {
    t(this);
}
finally {
    Lt(n);
} }, t.prototype.getIntegration = function (t) { var n = this.getClient(); if (!n)
    return null; try {
    return n.getIntegration(t);
}
catch (n) {
    return rt.warn("Cannot retrieve integration " + t.id + " from the current Hub"), null;
} }, t.prototype.startSpan = function (t) { return this.K("startSpan", t); }, t.prototype.startTransaction = function (t, n) { return this.K("startTransaction", t, n); }, t.prototype.traceHeaders = function () { return this.K("traceHeaders"); }, t.prototype.startSession = function (t) { this.endSession(); var n = this.getStackTop(), r = n.scope, e = n.client, i = e && e.getOptions() || {}, o = i.release, u = i.environment, s = new Mt(c(c({ release: o, environment: u }, r && { user: r.getUser() }), t)); return r && r.setSession(s), s; }, t.prototype.endSession = function () { var t = this.getStackTop(), n = t.scope, r = t.client; if (n) {
    var e = n.getSession && n.getSession();
    e && (e.close(), r && r.captureSession && r.captureSession(e), n.setSession());
} }, t.prototype.V = function (t) { for (var n, r = [], e = 1; e < arguments.length; e++)
    r[e - 1] = arguments[e]; var i = this.getStackTop(), o = i.scope, u = i.client; u && u[t] && (n = u)[t].apply(n, h(r, [o])); }, t.prototype.K = function (t) { for (var n = [], r = 1; r < arguments.length; r++)
    n[r - 1] = arguments[r]; var e = qt().__SENTRY__; if (e && e.extensions && "function" == typeof e.extensions[t])
    return e.extensions[t].apply(this, n); rt.warn("Extension method " + t + " couldn't be found, doing nothing."); }, t; }(); function qt() { var t = W(); return t.__SENTRY__ = t.__SENTRY__ || { extensions: {}, hub: void 0 }, t; } function Lt(t) { var n = qt(), r = Pt(n); return Ft(n, t), r; } function Ut() { var t = qt(); return Ht(t) && !Pt(t).isOlderThan(At) || Ft(t, new Ct), B() ? function (t) { try {
    var n = (e = qt().__SENTRY__) && e.extensions && e.extensions.domain && e.extensions.domain.active;
    if (!n)
        return Pt(t);
    if (!Ht(n) || Pt(n).isOlderThan(At)) {
        var r = Pt(t).getStackTop();
        Ft(n, new Ct(r.client, Rt.clone(r.scope)));
    }
    return Pt(n);
}
catch (n) {
    return Pt(t);
} var e; }(t) : Pt(t); } function Ht(t) { return !!(t && t.__SENTRY__ && t.__SENTRY__.hub); } function Pt(t) { return t && t.__SENTRY__ && t.__SENTRY__.hub ? t.__SENTRY__.hub : (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = new Ct, t.__SENTRY__.hub); } function Ft(t, n) { return !!t && (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = n, !0); } function Xt(t) { for (var n = [], r = 1; r < arguments.length; r++)
    n[r - 1] = arguments[r]; var e = Ut(); if (e && e[t])
    return e[t].apply(e, h(n)); throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report."); } function captureException(t, n) { var r; try {
    throw new Error("Sentry syntheticException");
}
catch (t) {
    r = t;
} return Xt("captureException", t, { captureContext: n, originalException: t, syntheticException: r }); } function Bt(t) { Xt("withScope", t); } var Jt = function () { function t(t) { this.dsn = t, this.Y = new O(t); } return t.prototype.getDsn = function () { return this.Y; }, t.prototype.getBaseApiEndpoint = function () { var t = this.Y, n = t.protocol ? t.protocol + ":" : "", r = t.port ? ":" + t.port : ""; return n + "//" + t.host + r + (t.path ? "/" + t.path : "") + "/api/"; }, t.prototype.getStoreEndpoint = function () { return this.Z("store"); }, t.prototype.getStoreEndpointWithUrlEncodedAuth = function () { return this.getStoreEndpoint() + "?" + this.tt(); }, t.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () { return this.nt() + "?" + this.tt(); }, t.prototype.getStoreEndpointPath = function () { var t = this.Y; return (t.path ? "/" + t.path : "") + "/api/" + t.projectId + "/store/"; }, t.prototype.getRequestHeaders = function (t, n) { var r = this.Y, e = ["Sentry sentry_version=7"]; return e.push("sentry_client=" + t + "/" + n), e.push("sentry_key=" + r.user), r.pass && e.push("sentry_secret=" + r.pass), { "Content-Type": "application/json", "X-Sentry-Auth": e.join(", ") }; }, t.prototype.getReportDialogEndpoint = function (t) { void 0 === t && (t = {}); var n = this.Y, r = this.getBaseApiEndpoint() + "embed/error-page/", e = []; for (var i in e.push("dsn=" + n.toString()), t)
    if ("dsn" !== i)
        if ("user" === i) {
            if (!t.user)
                continue;
            t.user.name && e.push("name=" + encodeURIComponent(t.user.name)), t.user.email && e.push("email=" + encodeURIComponent(t.user.email));
        }
        else
            e.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i])); return e.length ? r + "?" + e.join("&") : r; }, t.prototype.nt = function () { return this.Z("envelope"); }, t.prototype.Z = function (t) { return "" + this.getBaseApiEndpoint() + this.Y.projectId + "/" + t + "/"; }, t.prototype.tt = function () { var t, n = { sentry_key: this.Y.user, sentry_version: "7" }; return t = n, Object.keys(t).map(function (n) { return encodeURIComponent(n) + "=" + encodeURIComponent(t[n]); }).join("&"); }, t; }(), Wt = []; function $t(t) { var n = {}; return function (t) { var n = t.defaultIntegrations && h(t.defaultIntegrations) || [], r = t.integrations, e = []; if (Array.isArray(r)) {
    var i = r.map(function (t) { return t.name; }), o = [];
    n.forEach(function (t) { -1 === i.indexOf(t.name) && -1 === o.indexOf(t.name) && (e.push(t), o.push(t.name)); }), r.forEach(function (t) { -1 === o.indexOf(t.name) && (e.push(t), o.push(t.name)); });
}
else
    "function" == typeof r ? (e = r(n), e = Array.isArray(e) ? e : [e]) : e = h(n); var u = e.map(function (t) { return t.name; }); return -1 !== u.indexOf("Debug") && e.push.apply(e, h(e.splice(u.indexOf("Debug"), 1))), e; }(t).forEach(function (t) { n[t.name] = t, function (t) { -1 === Wt.indexOf(t.name) && (t.setupOnce(Nt, Ut), Wt.push(t.name), rt.log("Integration installed: " + t.name)); }(t); }), n; } var Gt, zt = function () { function t(t, n) { this.rt = {}, this.et = 0, this.it = new t(n), this.ot = n, n.dsn && (this.ut = new O(n.dsn)); } return t.prototype.captureException = function (t, n, r) { var e = this, i = n && n.event_id; return this.st(this.ct().eventFromException(t, n).then(function (t) { return e.at(t, n, r); }).then(function (t) { i = t; })), i; }, t.prototype.captureMessage = function (t, n, r, e) { var i = this, o = r && r.event_id, u = y(t) ? this.ct().eventFromMessage(String(t), n, r) : this.ct().eventFromException(t, r); return this.st(u.then(function (t) { return i.at(t, r, e); }).then(function (t) { o = t; })), o; }, t.prototype.captureEvent = function (t, n, r) { var e = n && n.event_id; return this.st(this.at(t, n, r).then(function (t) { e = t; })), e; }, t.prototype.captureSession = function (t) { t.release ? this.ft(t) : rt.warn("Discarded session because of missing release"); }, t.prototype.getDsn = function () { return this.ut; }, t.prototype.getOptions = function () { return this.ot; }, t.prototype.flush = function (t) { var n = this; return this.ht(t).then(function (r) { return n.ct().getTransport().close(t).then(function (t) { return r && t; }); }); }, t.prototype.close = function (t) { var n = this; return this.flush(t).then(function (t) { return n.getOptions().enabled = !1, t; }); }, t.prototype.setupIntegrations = function () { this.vt() && (this.rt = $t(this.ot)); }, t.prototype.getIntegration = function (t) { try {
    return this.rt[t.id] || null;
}
catch (n) {
    return rt.warn("Cannot retrieve integration " + t.id + " from the current Client"), null;
} }, t.prototype.lt = function (t, n) { var r, e, o, u = !1, s = !1, f = n.exception && n.exception.values; if (f) {
    s = !0;
    try {
        for (var h = a(f), v = h.next(); !v.done; v = h.next()) {
            var l = v.value.mechanism;
            if (l && !1 === l.handled) {
                u = !0;
                break;
            }
        }
    }
    catch (t) {
        r = { error: t };
    }
    finally {
        try {
            v && !v.done && (e = h.return) && e.call(h);
        }
        finally {
            if (r)
                throw r.error;
        }
    }
} var d = n.user; if (!t.userAgent) {
    var p = n.request ? n.request.headers : {};
    for (var y in p)
        if ("user-agent" === y.toLowerCase()) {
            o = p[y];
            break;
        }
} t.update(c(c({}, u && { status: i.Crashed }), { user: d, userAgent: o, errors: t.errors + Number(s || u) })); }, t.prototype.ft = function (t) { this.ct().sendSession(t); }, t.prototype.ht = function (t) { var n = this; return new _t(function (r) { var e = 0, i = setInterval(function () { 0 == n.et ? (clearInterval(i), r(!0)) : (e += 1, t && e >= t && (clearInterval(i), r(!1))); }, 1); }); }, t.prototype.ct = function () { return this.it; }, t.prototype.vt = function () { return !1 !== this.getOptions().enabled && void 0 !== this.ut; }, t.prototype.dt = function (t, n, r) { var e = this, i = this.getOptions().normalizeDepth, o = void 0 === i ? 3 : i, u = c(c({}, t), { event_id: t.event_id || (r && r.event_id ? r.event_id : $()), timestamp: t.timestamp || Dt() }); this.pt(u), this.yt(u); var s = n; r && r.captureContext && (s = Rt.clone(s).update(r.captureContext)); var a = _t.resolve(u); return s && (a = s.applyToEvent(u, r)), a.then(function (t) { return "number" == typeof o && o > 0 ? e.bt(t, o) : t; }); }, t.prototype.bt = function (t, n) { if (!t)
    return null; var r = c(c(c(c(c({}, t), t.breadcrumbs && { breadcrumbs: t.breadcrumbs.map(function (t) { return c(c({}, t), t.data && { data: P(t.data, n) }); }) }), t.user && { user: P(t.user, n) }), t.contexts && { contexts: P(t.contexts, n) }), t.extra && { extra: P(t.extra, n) }); return t.contexts && t.contexts.trace && (r.contexts.trace = t.contexts.trace), r; }, t.prototype.pt = function (t) { var n = this.getOptions(), r = n.environment, e = n.release, i = n.dist, o = n.maxValueLength, u = void 0 === o ? 250 : o; "environment" in t || (t.environment = "environment" in n ? r : "production"), void 0 === t.release && void 0 !== e && (t.release = e), void 0 === t.dist && void 0 !== i && (t.dist = i), t.message && (t.message = I(t.message, u)); var s = t.exception && t.exception.values && t.exception.values[0]; s && s.value && (s.value = I(s.value, u)); var c = t.request; c && c.url && (c.url = I(c.url, u)); }, t.prototype.yt = function (t) { var n = t.sdk, r = Object.keys(this.rt); n && r.length > 0 && (n.integrations = r); }, t.prototype.wt = function (t) { this.ct().sendEvent(t); }, t.prototype.at = function (t, n, r) { return this.gt(t, n, r).then(function (t) { return t.event_id; }, function (t) { rt.error(t); }); }, t.prototype.gt = function (t, n, r) { var e = this, i = this.getOptions(), o = i.beforeSend, u = i.sampleRate; if (!this.vt())
    return _t.reject(new k("SDK not enabled, will not send event.")); var s = "transaction" === t.type; return !s && "number" == typeof u && Math.random() > u ? _t.reject(new k("Discarding event because it's not included in the random sample (sampling rate = " + u + ")")) : this.dt(t, r, n).then(function (t) { if (null === t)
    throw new k("An event processor returned null, will not send event."); if (n && n.data && !0 === n.data.__sentry__ || s || !o)
    return t; var r = o(t, n); if (void 0 === r)
    throw new k("`beforeSend` method has to return `null` or a valid event."); return g(r) ? r.then(function (t) { return t; }, function (t) { throw new k("beforeSend rejected with " + t); }) : r; }).then(function (t) { if (null === t)
    throw new k("`beforeSend` returned `null`, will not send event."); var n = r && r.getSession && r.getSession(); return !s && n && e.lt(n, t), e.wt(t), t; }).then(null, function (t) { if (t instanceof k)
    throw t; throw e.captureException(t, { data: { __sentry__: !0 }, originalException: t }), new k("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + t); }); }, t.prototype.st = function (t) { var n = this; this.et += 1, t.then(function (t) { return n.et -= 1, t; }, function (t) { return n.et -= 1, t; }); }, t; }(), Vt = function () { function n() { } return n.prototype.sendEvent = function (n) { return _t.resolve({ reason: "NoopTransport: Event has been skipped because no Dsn is configured.", status: t.Status.Skipped }); }, n.prototype.close = function (t) { return _t.resolve(!0); }, n; }(), Kt = function () { function t(t) { this.ot = t, this.ot.dsn || rt.warn("No DSN provided, backend will not do anything."), this.Et = this.xt(); } return t.prototype.eventFromException = function (t, n) { throw new k("Backend has to implement `eventFromException` method"); }, t.prototype.eventFromMessage = function (t, n, r) { throw new k("Backend has to implement `eventFromMessage` method"); }, t.prototype.sendEvent = function (t) { this.Et.sendEvent(t).then(null, function (t) { rt.error("Error while sending event: " + t); }); }, t.prototype.sendSession = function (t) { this.Et.sendSession ? this.Et.sendSession(t).then(null, function (t) { rt.error("Error while sending session: " + t); }) : rt.warn("Dropping session because custom transport doesn't implement sendSession"); }, t.prototype.getTransport = function () { return this.Et; }, t.prototype.xt = function () { return new Vt; }, t; }(); function Qt(t, n) { return { body: JSON.stringify({ sent_at: (new Date).toISOString() }) + "\n" + JSON.stringify({ type: "session" }) + "\n" + JSON.stringify(t), type: "session", url: n.getEnvelopeEndpointWithUrlEncodedAuth() }; } function Yt(t, n) { var r = t.tags || {}, e = r.__sentry_samplingMethod, i = r.__sentry_sampleRate, o = function (t, n) { var r = {}; for (var e in t)
    Object.prototype.hasOwnProperty.call(t, e) && n.indexOf(e) < 0 && (r[e] = t[e]); if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
    var i = 0;
    for (e = Object.getOwnPropertySymbols(t); i < e.length; i++)
        n.indexOf(e[i]) < 0 && (r[e[i]] = t[e[i]]);
} return r; }(r, ["__sentry_samplingMethod", "__sentry_sampleRate"]); t.tags = o; var u = "transaction" === t.type, s = { body: JSON.stringify(t), type: t.type || "event", url: u ? n.getEnvelopeEndpointWithUrlEncodedAuth() : n.getStoreEndpointWithUrlEncodedAuth() }; if (u) {
    var c = JSON.stringify({ event_id: t.event_id, sent_at: (new Date).toISOString() }) + "\n" + JSON.stringify({ type: t.type, sample_rates: [{ id: e, rate: i }] }) + "\n" + s.body;
    s.body = c;
} return s; } var Zt = function () { function t() { this.name = t.id; } return t.prototype.setupOnce = function () { Gt = Function.prototype.toString, Function.prototype.toString = function () { for (var t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n]; var r = this.__sentry_original__ || this; return Gt.apply(r, t); }; }, t.id = "FunctionToString", t; }(), tn = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/], nn = function () { function t(n) { void 0 === n && (n = {}), this.ot = n, this.name = t.id; } return t.prototype.setupOnce = function () { Nt(function (n) { var r = Ut(); if (!r)
    return n; var e = r.getIntegration(t); if (e) {
    var i = r.getClient(), o = i ? i.getOptions() : {}, u = e.jt(o);
    if (e._t(n, u))
        return null;
} return n; }); }, t.prototype._t = function (t, n) { return this.kt(t, n) ? (rt.warn("Event dropped due to being internal Sentry Error.\nEvent: " + z(t)), !0) : this.St(t, n) ? (rt.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + z(t)), !0) : this.Ot(t, n) ? (rt.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + z(t) + ".\nUrl: " + this.Tt(t)), !0) : !this.Dt(t, n) && (rt.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + z(t) + ".\nUrl: " + this.Tt(t)), !0); }, t.prototype.kt = function (t, n) { if (!n.ignoreInternal)
    return !1; try {
    return t && t.exception && t.exception.values && t.exception.values[0] && "SentryError" === t.exception.values[0].type || !1;
}
catch (t) {
    return !1;
} }, t.prototype.St = function (t, n) { return !(!n.ignoreErrors || !n.ignoreErrors.length) && this.Rt(t).some(function (t) { return n.ignoreErrors.some(function (n) { return M(t, n); }); }); }, t.prototype.Ot = function (t, n) { if (!n.denyUrls || !n.denyUrls.length)
    return !1; var r = this.Tt(t); return !!r && n.denyUrls.some(function (t) { return M(r, t); }); }, t.prototype.Dt = function (t, n) { if (!n.allowUrls || !n.allowUrls.length)
    return !0; var r = this.Tt(t); return !r || n.allowUrls.some(function (t) { return M(r, t); }); }, t.prototype.jt = function (t) { return void 0 === t && (t = {}), { allowUrls: h(this.ot.whitelistUrls || [], this.ot.allowUrls || [], t.whitelistUrls || [], t.allowUrls || []), denyUrls: h(this.ot.blacklistUrls || [], this.ot.denyUrls || [], t.blacklistUrls || [], t.denyUrls || []), ignoreErrors: h(this.ot.ignoreErrors || [], t.ignoreErrors || [], tn), ignoreInternal: void 0 === this.ot.ignoreInternal || this.ot.ignoreInternal }; }, t.prototype.Rt = function (t) { if (t.message)
    return [t.message]; if (t.exception)
    try {
        var n = t.exception.values && t.exception.values[0] || {}, r = n.type, e = void 0 === r ? "" : r, i = n.value, o = void 0 === i ? "" : i;
        return ["" + o, e + ": " + o];
    }
    catch (n) {
        return rt.error("Cannot extract message for event " + z(t)), [];
    } return []; }, t.prototype.Tt = function (t) { try {
    if (t.stacktrace) {
        var n = t.stacktrace.frames;
        return n && n[n.length - 1].filename || null;
    }
    if (t.exception) {
        var r = t.exception.values && t.exception.values[0].stacktrace && t.exception.values[0].stacktrace.frames;
        return r && r[r.length - 1].filename || null;
    }
    return null;
}
catch (n) {
    return rt.error("Cannot extract url for event " + z(t)), null;
} }, t.id = "InboundFilters", t; }(), rn = Object.freeze({ __proto__: null, FunctionToString: Zt, InboundFilters: nn }), en = "?", on = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, un = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. \/=]+)(?::(\d+))?(?::(\d+))?\s*$/i, sn = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, cn = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, an = /\((\S*)(?::(\d+))(?::(\d+))\)/, fn = /Minified React error #\d+;/i; function hn(t) { var n = null, r = 0; t && ("number" == typeof t.framesToPop ? r = t.framesToPop : fn.test(t.message) && (r = 1)); try {
    if (n = function (t) { if (!t || !t.stacktrace)
        return null; for (var n, r = t.stacktrace, e = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, i = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, o = r.split("\n"), u = [], s = 0; s < o.length; s += 2) {
        var c = null;
        (n = e.exec(o[s])) ? c = { url: n[2], func: n[3], args: [], line: +n[1], column: null } : (n = i.exec(o[s])) && (c = { url: n[6], func: n[3] || n[4], args: n[5] ? n[5].split(",") : [], line: +n[1], column: +n[2] }), c && (!c.func && c.line && (c.func = en), u.push(c));
    } if (!u.length)
        return null; return { message: ln(t), name: t.name, stack: u }; }(t))
        return vn(n, r);
}
catch (t) { } try {
    if (n = function (t) { if (!t || !t.stack)
        return null; for (var n, r, e, i = [], o = t.stack.split("\n"), u = 0; u < o.length; ++u) {
        if (r = on.exec(o[u])) {
            var s = r[2] && 0 === r[2].indexOf("native");
            r[2] && 0 === r[2].indexOf("eval") && (n = an.exec(r[2])) && (r[2] = n[1], r[3] = n[2], r[4] = n[3]), e = { url: r[2] && 0 === r[2].indexOf("address at ") ? r[2].substr("address at ".length) : r[2], func: r[1] || en, args: s ? [r[2]] : [], line: r[3] ? +r[3] : null, column: r[4] ? +r[4] : null };
        }
        else if (r = sn.exec(o[u]))
            e = { url: r[2], func: r[1] || en, args: [], line: +r[3], column: r[4] ? +r[4] : null };
        else {
            if (!(r = un.exec(o[u])))
                continue;
            r[3] && r[3].indexOf(" > eval") > -1 && (n = cn.exec(r[3])) ? (r[1] = r[1] || "eval", r[3] = n[1], r[4] = n[2], r[5] = "") : 0 !== u || r[5] || void 0 === t.columnNumber || (i[0].column = t.columnNumber + 1), e = { url: r[3], func: r[1] || en, args: r[2] ? r[2].split(",") : [], line: r[4] ? +r[4] : null, column: r[5] ? +r[5] : null };
        }
        !e.func && e.line && (e.func = en), i.push(e);
    } if (!i.length)
        return null; return { message: ln(t), name: t.name, stack: i }; }(t))
        return vn(n, r);
}
catch (t) { } return { message: ln(t), name: t && t.name, stack: [], failed: !0 }; } function vn(t, n) { try {
    return c(c({}, t), { stack: t.stack.slice(n) });
}
catch (n) {
    return t;
} } function ln(t) { var n = t && t.message; return n ? n.error && "string" == typeof n.error.message ? n.error.message : n : "No error message"; } var dn = 50; function pn(t) { var n = mn(t.stack), r = { type: t.name, value: t.message }; return n && n.length && (r.stacktrace = { frames: n }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r; } function yn(t) { return { exception: { values: [pn(t)] } }; } function mn(t) { if (!t || !t.length)
    return []; var n = t, r = n[0].func || "", e = n[n.length - 1].func || ""; return -1 === r.indexOf("captureMessage") && -1 === r.indexOf("captureException") || (n = n.slice(1)), -1 !== e.indexOf("sentryWrapped") && (n = n.slice(0, -1)), n.slice(0, dn).map(function (t) { return { colno: null === t.column ? void 0 : t.column, filename: t.url || n[0].url, function: t.func || "?", in_app: !0, lineno: null === t.line ? void 0 : t.line }; }).reverse(); } function bn(n, r, e) { var i = gn(r, e && e.syntheticException || void 0, { attachStacktrace: n.attachStacktrace }); return Q(i, { handled: !0, type: "generic" }), i.level = t.Severity.Error, e && e.event_id && (i.event_id = e.event_id), _t.resolve(i); } function wn(n, r, e, i) { void 0 === e && (e = t.Severity.Info); var o = En(r, i && i.syntheticException || void 0, { attachStacktrace: n.attachStacktrace }); return o.level = e, i && i.event_id && (o.event_id = i.event_id), _t.resolve(o); } function gn(t, n, r) { var e, i; if (void 0 === r && (r = {}), l(t) && t.error)
    return e = yn(hn(t = t.error)); if (d(t) || (i = t, "[object DOMException]" === Object.prototype.toString.call(i))) {
    var o = t, u = o.name || (d(o) ? "DOMError" : "DOMException"), s = o.message ? u + ": " + o.message : u;
    return K(e = En(s, n, r), s), "code" in o && (e.tags = c(c({}, e.tags), { "DOMException.code": "" + o.code })), e;
} return v(t) ? e = yn(hn(t)) : m(t) || b(t) ? (Q(e = function (t, n, r) { var e = { exception: { values: [{ type: b(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error", value: "Non-Error " + (r ? "promise rejection" : "exception") + " captured with keys: " + F(t) }] }, extra: { __serialized__: L(t) } }; if (n) {
    var i = mn(hn(n).stack);
    e.stacktrace = { frames: i };
} return e; }(t, n, r.rejection), { synthetic: !0 }), e) : (K(e = En(t, n, r), "" + t, void 0), Q(e, { synthetic: !0 }), e); } function En(t, n, r) { void 0 === r && (r = {}); var e = { message: t }; if (r.attachStacktrace && n) {
    var i = mn(hn(n).stack);
    e.stacktrace = { frames: i };
} return e; } var xn = function () { function n(t) { this.options = t, this.T = new kt(30), this.It = {}, this.Nt = new Jt(this.options.dsn), this.url = this.Nt.getStoreEndpointWithUrlEncodedAuth(); } return n.prototype.sendEvent = function (t) { throw new k("Transport Class has to implement `sendEvent` method"); }, n.prototype.close = function (t) { return this.T.drain(t); }, n.prototype.Mt = function (n) { var r = n.requestType, e = n.response, i = n.headers, o = n.resolve, u = n.reject, s = t.Status.fromHttpCode(e.status); this.At(i) && rt.warn("Too many requests, backing off until: " + this.Ct(r)), s !== t.Status.Success ? u(e) : o({ status: s }); }, n.prototype.Ct = function (t) { return this.It[t] || this.It.all; }, n.prototype.qt = function (t) { return this.Ct(t) > new Date(Date.now()); }, n.prototype.At = function (t) { var n, r, e, i, o = Date.now(), u = t["x-sentry-rate-limits"], s = t["retry-after"]; if (u) {
    try {
        for (var c = a(u.trim().split(",")), f = c.next(); !f.done; f = c.next()) {
            var h = f.value.split(":", 2), v = parseInt(h[0], 10), l = 1e3 * (isNaN(v) ? 60 : v);
            try {
                for (var d = (e = void 0, a(h[1].split(";"))), p = d.next(); !p.done; p = d.next()) {
                    var y = p.value;
                    this.It[y || "all"] = new Date(o + l);
                }
            }
            catch (t) {
                e = { error: t };
            }
            finally {
                try {
                    p && !p.done && (i = d.return) && i.call(d);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
        }
    }
    catch (t) {
        n = { error: t };
    }
    finally {
        try {
            f && !f.done && (r = c.return) && r.call(c);
        }
        finally {
            if (n)
                throw n.error;
        }
    }
    return !0;
} return !!s && (this.It.all = new Date(o + function (t, n) { if (!n)
    return Y; var r = parseInt("" + n, 10); if (!isNaN(r))
    return 1e3 * r; var e = Date.parse("" + n); return isNaN(e) ? Y : e - t; }(o, s)), !0); }, n; }(), jn = W(), _n = function (t) { function n() { return null !== t && t.apply(this, arguments) || this; } return r(n, t), n.prototype.sendEvent = function (t) { return this.Lt(Yt(t, this.Nt), t); }, n.prototype.sendSession = function (t) { return this.Lt(Qt(t, this.Nt), t); }, n.prototype.Lt = function (t, n) { var r = this; if (this.qt(t.type))
    return Promise.reject({ event: n, type: t.type, reason: "Transport locked till " + this.Ct(t.type) + " due to too many requests.", status: 429 }); var e = { body: t.body, method: "POST", referrerPolicy: ot() ? "origin" : "" }; return void 0 !== this.options.fetchParameters && Object.assign(e, this.options.fetchParameters), void 0 !== this.options.headers && (e.headers = this.options.headers), this.T.add(new _t(function (n, i) { jn.fetch(t.url, e).then(function (e) { var o = { "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"), "retry-after": e.headers.get("Retry-After") }; r.Mt({ requestType: t.type, response: e, headers: o, resolve: n, reject: i }); }).catch(i); })); }, n; }(xn), kn = function (t) { function n() { return null !== t && t.apply(this, arguments) || this; } return r(n, t), n.prototype.sendEvent = function (t) { return this.Lt(Yt(t, this.Nt), t); }, n.prototype.sendSession = function (t) { return this.Lt(Qt(t, this.Nt), t); }, n.prototype.Lt = function (t, n) { var r = this; return this.qt(t.type) ? Promise.reject({ event: n, type: t.type, reason: "Transport locked till " + this.Ct(t.type) + " due to too many requests.", status: 429 }) : this.T.add(new _t(function (n, e) { var i = new XMLHttpRequest; for (var o in i.onreadystatechange = function () { if (4 === i.readyState) {
    var o = { "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"), "retry-after": i.getResponseHeader("Retry-After") };
    r.Mt({ requestType: t.type, response: i, headers: o, resolve: n, reject: e });
} }, i.open("POST", t.url), r.options.headers)
    r.options.headers.hasOwnProperty(o) && i.setRequestHeader(o, r.options.headers[o]); i.send(t.body); })); }, n; }(xn), Sn = Object.freeze({ __proto__: null, BaseTransport: xn, FetchTransport: _n, XHRTransport: kn }), On = function (n) { function e() { return null !== n && n.apply(this, arguments) || this; } return r(e, n), e.prototype.eventFromException = function (t, n) { return bn(this.ot, t, n); }, e.prototype.eventFromMessage = function (n, r, e) { return void 0 === r && (r = t.Severity.Info), wn(this.ot, n, r, e); }, e.prototype.xt = function () { if (!this.ot.dsn)
    return n.prototype.xt.call(this); var t = c(c({}, this.ot.transportOptions), { dsn: this.ot.dsn }); return this.ot.transport ? new this.ot.transport(t) : et() ? new _n(t) : new kn(t); }, e; }(Kt), Tn = 0; function Dn() { return Tn > 0; } function Rn(t, n, r) { if (void 0 === n && (n = {}), "function" != typeof t)
    return t; try {
    if (t.__sentry__)
        return t;
    if (t.__sentry_wrapped__)
        return t.__sentry_wrapped__;
}
catch (n) {
    return t;
} var sentryWrapped = function () { var e = Array.prototype.slice.call(arguments); try {
    r && "function" == typeof r && r.apply(this, arguments);
    var i = e.map(function (t) { return Rn(t, n); });
    return t.handleEvent ? t.handleEvent.apply(this, i) : t.apply(this, i);
}
catch (t) {
    throw Tn += 1, setTimeout(function () { Tn -= 1; }), Bt(function (r) { r.addEventProcessor(function (t) { var r = c({}, t); return n.mechanism && (K(r, void 0, void 0), Q(r, n.mechanism)), r.extra = c(c({}, r.extra), { arguments: e }), r; }), captureException(t); }), t;
} }; try {
    for (var e in t)
        Object.prototype.hasOwnProperty.call(t, e) && (sentryWrapped[e] = t[e]);
}
catch (t) { } t.prototype = t.prototype || {}, sentryWrapped.prototype = t.prototype, Object.defineProperty(t, "__sentry_wrapped__", { enumerable: !1, value: sentryWrapped }), Object.defineProperties(sentryWrapped, { __sentry__: { enumerable: !1, value: !0 }, __sentry_original__: { enumerable: !1, value: t } }); try {
    Object.getOwnPropertyDescriptor(sentryWrapped, "name").configurable && Object.defineProperty(sentryWrapped, "name", { get: function () { return t.name; } });
}
catch (t) { } return sentryWrapped; } function In(t) { if (void 0 === t && (t = {}), t.eventId)
    if (t.dsn) {
        var n = document.createElement("script");
        n.async = !0, n.src = new Jt(t.dsn).getReportDialogEndpoint(t), t.onLoad && (n.onload = t.onLoad), (document.head || document.body).appendChild(n);
    }
    else
        rt.error("Missing dsn option in showReportDialog call");
else
    rt.error("Missing eventId option in showReportDialog call"); } var Nn = function () { function n(t) { this.name = n.id, this.Ut = !1, this.Ht = !1, this.ot = c({ onerror: !0, onunhandledrejection: !0 }, t); } return n.prototype.setupOnce = function () { Error.stackTraceLimit = 50, this.ot.onerror && (rt.log("Global Handler attached: onerror"), this.Pt()), this.ot.onunhandledrejection && (rt.log("Global Handler attached: onunhandledrejection"), this.Ft()); }, n.prototype.Pt = function () { var t = this; this.Ut || (ht({ callback: function (r) { var e = r.error, i = Ut(), o = i.getIntegration(n), u = e && !0 === e.__sentry_own_request__; if (o && !Dn() && !u) {
        var s = i.getClient(), c = y(e) ? t.Xt(r.msg, r.url, r.line, r.column) : t.Bt(gn(e, void 0, { attachStacktrace: s && s.getOptions().attachStacktrace, rejection: !1 }), r.url, r.line, r.column);
        Q(c, { handled: !1, type: "onerror" }), i.captureEvent(c, { originalException: e });
    } }, type: "error" }), this.Ut = !0); }, n.prototype.Ft = function () { var r = this; this.Ht || (ht({ callback: function (e) { var i = e; try {
        "reason" in e ? i = e.reason : "detail" in e && "reason" in e.detail && (i = e.detail.reason);
    }
    catch (t) { } var o = Ut(), u = o.getIntegration(n), s = i && !0 === i.__sentry_own_request__; if (!u || Dn() || s)
        return !0; var c = o.getClient(), a = y(i) ? r.Jt(i) : gn(i, void 0, { attachStacktrace: c && c.getOptions().attachStacktrace, rejection: !0 }); a.level = t.Severity.Error, Q(a, { handled: !1, type: "onunhandledrejection" }), o.captureEvent(a, { originalException: i }); }, type: "unhandledrejection" }), this.Ht = !0); }, n.prototype.Xt = function (t, n, r, e) { var i, o = l(t) ? t.message : t; if (p(o)) {
    var u = o.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
    u && (i = u[1], o = u[2]);
} var s = { exception: { values: [{ type: i || "Error", value: o }] } }; return this.Bt(s, n, r, e); }, n.prototype.Jt = function (t) { return { exception: { values: [{ type: "UnhandledRejection", value: "Non-Error promise rejection captured with value: " + String(t) }] } }; }, n.prototype.Bt = function (t, n, r, e) { t.exception = t.exception || {}, t.exception.values = t.exception.values || [], t.exception.values[0] = t.exception.values[0] || {}, t.exception.values[0].stacktrace = t.exception.values[0].stacktrace || {}, t.exception.values[0].stacktrace.frames = t.exception.values[0].stacktrace.frames || []; var i = isNaN(parseInt(e, 10)) ? void 0 : e, o = isNaN(parseInt(r, 10)) ? void 0 : r, u = p(n) && n.length > 0 ? n : function () { try {
    return document.location.href;
}
catch (t) {
    return "";
} }(); return 0 === t.exception.values[0].stacktrace.frames.length && t.exception.values[0].stacktrace.frames.push({ colno: i, filename: u, function: "?", in_app: !0, lineno: o }), t; }, n.id = "GlobalHandlers", n; }(), Mn = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], An = function () { function t(n) { this.name = t.id, this.ot = c({ XMLHttpRequest: !0, eventTarget: !0, requestAnimationFrame: !0, setInterval: !0, setTimeout: !0 }, n); } return t.prototype.setupOnce = function () { var t = W(); (this.ot.setTimeout && A(t, "setTimeout", this.Wt.bind(this)), this.ot.setInterval && A(t, "setInterval", this.Wt.bind(this)), this.ot.requestAnimationFrame && A(t, "requestAnimationFrame", this.$t.bind(this)), this.ot.XMLHttpRequest && "XMLHttpRequest" in t && A(XMLHttpRequest.prototype, "send", this.Gt.bind(this)), this.ot.eventTarget) && (Array.isArray(this.ot.eventTarget) ? this.ot.eventTarget : Mn).forEach(this.zt.bind(this)); }, t.prototype.Wt = function (t) { return function () { for (var n = [], r = 0; r < arguments.length; r++)
    n[r] = arguments[r]; var e = n[0]; return n[0] = Rn(e, { mechanism: { data: { function: R(t) }, handled: !0, type: "instrument" } }), t.apply(this, n); }; }, t.prototype.$t = function (t) { return function (n) { return t.call(this, Rn(n, { mechanism: { data: { function: "requestAnimationFrame", handler: R(t) }, handled: !0, type: "instrument" } })); }; }, t.prototype.zt = function (t) { var n = W(), r = n[t] && n[t].prototype; r && r.hasOwnProperty && r.hasOwnProperty("addEventListener") && (A(r, "addEventListener", function (n) { return function (r, e, i) { try {
    "function" == typeof e.handleEvent && (e.handleEvent = Rn(e.handleEvent.bind(e), { mechanism: { data: { function: "handleEvent", handler: R(e), target: t }, handled: !0, type: "instrument" } }));
}
catch (t) { } return n.call(this, r, Rn(e, { mechanism: { data: { function: "addEventListener", handler: R(e), target: t }, handled: !0, type: "instrument" } }), i); }; }), A(r, "removeEventListener", function (t) { return function (n, r, e) { var i, o = r; try {
    var u = null === (i = o) || void 0 === i ? void 0 : i.__sentry_wrapped__;
    u && t.call(this, n, u, e);
}
catch (t) { } return t.call(this, n, o, e); }; })); }, t.prototype.Gt = function (t) { return function () { for (var n = [], r = 0; r < arguments.length; r++)
    n[r] = arguments[r]; var e = this; return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(function (t) { t in e && "function" == typeof e[t] && A(e, t, function (n) { var r = { mechanism: { data: { function: t, handler: R(n) }, handled: !0, type: "instrument" } }; return n.__sentry_original__ && (r.mechanism.data.handler = R(n.__sentry_original__)), Rn(n, r); }); }), t.apply(this, n); }; }, t.id = "TryCatch", t; }(), Cn = function () { function n(t) { this.name = n.id, this.ot = c({ console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0 }, t); } return n.prototype.addSentryBreadcrumb = function (t) { this.ot.sentry && Ut().addBreadcrumb({ category: "sentry." + ("transaction" === t.type ? "transaction" : "event"), event_id: t.event_id, level: t.level, message: z(t) }, { event: t }); }, n.prototype.setupOnce = function () { var t = this; this.ot.console && ht({ callback: function () { for (var n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r]; t.Vt.apply(t, h(n)); }, type: "console" }), this.ot.dom && ht({ callback: function () { for (var n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r]; t.Kt.apply(t, h(n)); }, type: "dom" }), this.ot.xhr && ht({ callback: function () { for (var n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r]; t.Qt.apply(t, h(n)); }, type: "xhr" }), this.ot.fetch && ht({ callback: function () { for (var n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r]; t.Yt.apply(t, h(n)); }, type: "fetch" }), this.ot.history && ht({ callback: function () { for (var n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r]; t.Zt.apply(t, h(n)); }, type: "history" }); }, n.prototype.Vt = function (n) { var r = { category: "console", data: { arguments: n.args, logger: "console" }, level: t.Severity.fromString(n.level), message: N(n.args, " ") }; if ("assert" === n.level) {
    if (!1 !== n.args[0])
        return;
    r.message = "Assertion failed: " + (N(n.args.slice(1), " ") || "console.assert"), r.data.arguments = n.args.slice(1);
} Ut().addBreadcrumb(r, { input: n.args, level: n.level }); }, n.prototype.Kt = function (t) { var n; try {
    n = t.event.target ? x(t.event.target) : x(t.event);
}
catch (t) {
    n = "<unknown>";
} 0 !== n.length && Ut().addBreadcrumb({ category: "ui." + t.name, message: n }, { event: t.event, name: t.name }); }, n.prototype.Qt = function (t) { if (t.endTimestamp) {
    if (t.xhr.__sentry_own_request__)
        return;
    var n = t.xhr.__sentry_xhr__ || {}, r = n.method, e = n.url, i = n.status_code, o = n.body;
    Ut().addBreadcrumb({ category: "xhr", data: { method: r, url: e, status_code: i }, type: "http" }, { xhr: t.xhr, input: o });
}
else
    ; }, n.prototype.Yt = function (n) { n.endTimestamp && (n.fetchData.url.match(/sentry_key/) && "POST" === n.fetchData.method || (n.error ? Ut().addBreadcrumb({ category: "fetch", data: n.fetchData, level: t.Severity.Error, type: "http" }, { data: n.error, input: n.args }) : Ut().addBreadcrumb({ category: "fetch", data: c(c({}, n.fetchData), { status_code: n.response.status }), type: "http" }, { input: n.args, response: n.response }))); }, n.prototype.Zt = function (t) { var n = W(), r = t.from, e = t.to, i = G(n.location.href), o = G(r), u = G(e); o.path || (o = i), i.protocol === u.protocol && i.host === u.host && (e = u.relative), i.protocol === o.protocol && i.host === o.host && (r = o.relative), Ut().addBreadcrumb({ category: "navigation", data: { from: r, to: e } }); }, n.id = "Breadcrumbs", n; }(), qn = "cause", Ln = 5, Un = function () { function t(n) { void 0 === n && (n = {}), this.name = t.id, this.tn = n.key || qn, this.O = n.limit || Ln; } return t.prototype.setupOnce = function () { Nt(function (n, r) { var e = Ut().getIntegration(t); return e ? e.nn(n, r) : n; }); }, t.prototype.nn = function (t, n) { if (!(t.exception && t.exception.values && n && E(n.originalException, Error)))
    return t; var r = this.rn(n.originalException, this.tn); return t.exception.values = h(r, t.exception.values), t; }, t.prototype.rn = function (t, n, r) { if (void 0 === r && (r = []), !E(t[n], Error) || r.length + 1 >= this.O)
    return r; var e = pn(hn(t[n])); return this.rn(t[n], n, h([e], r)); }, t.id = "LinkedErrors", t; }(), Hn = W(), Pn = function () { function t() { this.name = t.id; } return t.prototype.setupOnce = function () { Nt(function (n) { var r, e, i; if (Ut().getIntegration(t)) {
    if (!Hn.navigator && !Hn.location && !Hn.document)
        return n;
    var o = (null === (r = n.request) || void 0 === r ? void 0 : r.url) || (null === (e = Hn.location) || void 0 === e ? void 0 : e.href), u = (Hn.document || {}).referrer, s = (Hn.navigator || {}).userAgent, a = c(c(c({}, null === (i = n.request) || void 0 === i ? void 0 : i.headers), u && { Referer: u }), s && { "User-Agent": s }), f = c(c({}, o && { url: o }), { headers: a });
    return c(c({}, n), { request: f });
} return n; }); }, t.id = "UserAgent", t; }(), Fn = Object.freeze({ __proto__: null, GlobalHandlers: Nn, TryCatch: An, Breadcrumbs: Cn, LinkedErrors: Un, UserAgent: Pn }), Xn = "sentry.javascript.browser", Bn = function (t) { function n(n) { return void 0 === n && (n = {}), t.call(this, On, n) || this; } return r(n, t), n.prototype.showReportDialog = function (t) { void 0 === t && (t = {}), W().document && (this.vt() ? In(c(c({}, t), { dsn: t.dsn || this.getDsn() })) : rt.error("Trying to call showReportDialog with Sentry Client disabled")); }, n.prototype.dt = function (n, r, e) { return n.platform = n.platform || "javascript", n.sdk = c(c({}, n.sdk), { name: Xn, packages: h(n.sdk && n.sdk.packages || [], [{ name: "npm:@sentry/browser", version: "5.30.0" }]), version: "5.30.0" }), t.prototype.dt.call(this, n, r, e); }, n.prototype.wt = function (n) { var r = this.getIntegration(Cn); r && r.addSentryBreadcrumb(n), t.prototype.wt.call(this, n); }, n; }(zt), Jn = [new nn, new Zt, new An, new Cn, new Nn, new Un, new Pn]; var Wn = {}, $n = W(); $n.Sentry && $n.Sentry.Integrations && (Wn = $n.Sentry.Integrations); var Gn = c(c(c({}, Wn), rn), Fn); return t.BrowserClient = Bn, t.Hub = Ct, t.Integrations = Gn, t.SDK_NAME = Xn, t.SDK_VERSION = "5.30.0", t.Scope = Rt, t.Transports = Sn, t.addBreadcrumb = function (t) { Xt("addBreadcrumb", t); }, t.addGlobalEventProcessor = Nt, t.captureEvent = function (t) { return Xt("captureEvent", t); }, t.captureException = captureException, t.captureMessage = function (t, n) { var r; try {
    throw new Error(t);
}
catch (t) {
    r = t;
} return Xt("captureMessage", t, "string" == typeof n ? n : void 0, c({ originalException: t, syntheticException: r }, "string" != typeof n ? { captureContext: n } : void 0)); }, t.close = function (t) { var n = Ut().getClient(); return n ? n.close(t) : _t.reject(!1); }, t.configureScope = function (t) { Xt("configureScope", t); }, t.defaultIntegrations = Jn, t.eventFromException = bn, t.eventFromMessage = wn, t.flush = function (t) { var n = Ut().getClient(); return n ? n.flush(t) : _t.reject(!1); }, t.forceLoad = function () { }, t.getCurrentHub = Ut, t.getHubFromCarrier = Pt, t.init = function (t) { if (void 0 === t && (t = {}), void 0 === t.defaultIntegrations && (t.defaultIntegrations = Jn), void 0 === t.release) {
    var n = W();
    n.SENTRY_RELEASE && n.SENTRY_RELEASE.id && (t.release = n.SENTRY_RELEASE.id);
} void 0 === t.autoSessionTracking && (t.autoSessionTracking = !1), function (t, n) { !0 === n.debug && rt.enable(); var r = Ut(), e = new t(n); r.bindClient(e); }(Bn, t), t.autoSessionTracking && function () { var t = W(), n = Ut(), r = "complete" === document.readyState, e = !1, i = function () { e && r && n.endSession(); }, o = function () { r = !0, i(), t.removeEventListener("load", o); }; n.startSession(), r || t.addEventListener("load", o); try {
    var u = new PerformanceObserver(function (t, n) { t.getEntries().forEach(function (t) { "first-contentful-paint" === t.name && t.startTime < s && (n.disconnect(), e = !0, i()); }); }), s = "hidden" === document.visibilityState ? 0 : 1 / 0;
    document.addEventListener("visibilitychange", function (t) { s = Math.min(s, t.timeStamp); }, { once: !0 }), u.observe({ type: "paint", buffered: !0 });
}
catch (t) {
    e = !0, i();
} }(); }, t.injectReportDialog = In, t.lastEventId = function () { return Ut().lastEventId(); }, t.makeMain = Lt, t.onLoad = function (t) { t(); }, t.setContext = function (t, n) { Xt("setContext", t, n); }, t.setExtra = function (t, n) { Xt("setExtra", t, n); }, t.setExtras = function (t) { Xt("setExtras", t); }, t.setTag = function (t, n) { Xt("setTag", t, n); }, t.setTags = function (t) { Xt("setTags", t); }, t.setUser = function (t) { Xt("setUser", t); }, t.showReportDialog = function (t) { void 0 === t && (t = {}), t.eventId || (t.eventId = Ut().lastEventId()); var n = Ut().getClient(); n && n.showReportDialog(t); }, t.startTransaction = function (t, n) { return Xt("startTransaction", c({}, t), n); }, t.withScope = Bt, t.wrap = function (t) { return Rn(t)(); }, t; }({});
//# sourceMappingURL=bundle.min.js.map
///<reference path="../../../../node_modules/@sentry/browser/build/bundle.min.js" />
var com;
(function (com) {
    var keyman;
    (function (keyman) {
        /**
         * Controls whether or not the generated Sentry event is logged to the console (true)
         * or sent to our Sentry server (false).
         */
        var DEBUG = false;
        var KeymanSentryManager = /** @class */ (function () {
            function KeymanSentryManager(options) {
                if (options === void 0) { options = KeymanSentryManager.DEFAULT_OPTIONS; }
                this._enabled = true;
                this.keymanPlatform = options.hostPlatform;
            }
            // If we've recognized one of our source files,
            KeymanSentryManager.prototype.aliasFilename = function (filename) {
                if (!this.mayAlias(filename)) {
                    return null;
                }
                filename = KeymanSentryManager.STANDARD_ALIASABLE_FILES[filename];
                switch (location.protocol) {
                    case 'http:':
                        return 'http://' + location.host + '/' + filename;
                    case 'file:':
                        return 'file:///' + filename;
                    default:
                        return null;
                }
            };
            KeymanSentryManager.prototype.mayAlias = function (filename) {
                return !!KeymanSentryManager.STANDARD_ALIASABLE_FILES[filename];
            };
            // Filters all expected but unnecessary path prefixes, affixes, and suffixes reported by Sentry from our products.
            // This allows us to mask all different sorts of installations with a single uploaded path.
            // Modifies original object.
            KeymanSentryManager.prototype.pathFilter = function (event) {
                // Get the underlying JS error.
                var exception = event.exception;
                if (!exception) {
                    // events are not required to have an exception property
                    // e.g. console.log-type events
                    return;
                }
                // Iterate through all wrapped exceptions.
                for (var _i = 0, _a = exception.values; _i < _a.length; _i++) {
                    var e = _a[_i];
                    // If Sentry was unable to generate a stacktrace, there's no path filtering to
                    // perform on its stack frames.
                    if (!e.stacktrace) {
                        continue;
                    }
                    for (var _b = 0, _c = e.stacktrace.frames; _b < _c.length; _b++) {
                        var frame = _c[_b];
                        var URL_1 = frame.filename;
                        var filename = '';
                        try {
                            filename = URL_1.substr(URL_1.lastIndexOf('/') + 1);
                            if (this.mayAlias(filename)) {
                                // Make the file look like it's at the host's root so that the Sentry server will recognize it
                                // regardless of actual filepath position.
                                frame.filename = this.aliasFilename(filename) || frame.filename;
                            }
                        }
                        catch (_d) {
                            // not sure what to do yet, but... don't make more errors in the error handler.  That's a bad idea.
                        }
                    }
                }
            };
            // Attaches some useful debugging information to the specified object, pass-by-reference style.
            KeymanSentryManager.prototype.attachEventMetadata = function (event) {
                // Ensure that the 'extra' object exists.  (May not exist for synthetic/custom Errors.)
                event.extra = event.extra || {};
                event.extra.keymanState = window['keyman']['getDebugInfo']();
                event.extra.keymanHostPlatform = this.keymanPlatform;
            };
            // Sanitizes the event object (in-place) to remove sensitive information
            // from the breadcrumbs and url (for embedded KeymanWeb)
            KeymanSentryManager.prototype.sanitizeEvent = function (event) {
                if (event && event.breadcrumbs) {
                    event.breadcrumbs.forEach(function (b) {
                        if (b.category == 'navigation') {
                            var NAVIGATION_PATTERN = /(.*)?(keyboard\.html#[^-]+)-.*/;
                            b.data.from = b.data.from.replace(NAVIGATION_PATTERN, '$1$2');
                            b.data.to = b.data.to.replace(NAVIGATION_PATTERN, '$1$2');
                        }
                    });
                }
                if (event && event.request && event.request.url) {
                    var URL_PATTERN = /#.*$/;
                    event.request.url = event.request.url.replace(URL_PATTERN, '');
                }
            };
            /**
             * Pre-processes a Sentry event object (in-place) to provide more metadata and enhance
             * the Sentry server's ability to match the error against release artifacts.
             * Also will sanitize the Sentry event.
             * @param event A Sentry-generated event
             */
            KeymanSentryManager.prototype.prepareEvent = function (event) {
                this.pathFilter(event);
                this.attachEventMetadata(event);
                this.sanitizeEvent(event);
                if (DEBUG) {
                    console.log("DEBUG:  event object for Sentry");
                    console.log(event);
                    return false; //event
                }
                else if (!this._enabled) {
                    console.error(event);
                    return false;
                }
                else {
                    return true;
                }
            };
            /**
             * Allows debugging our custom event preparation code without bombarding Sentry with errors
             * during development.
             *
             * Note that Sentry expects us either to return the event object to be sent or to return `null`
             * if we want to prevent the event from being sent to the server.
             * @param event
             */
            KeymanSentryManager.prototype.prepareEventDebugWrapper = function (event) {
                if (DEBUG) {
                    try {
                        if (this.prepareEvent(event)) {
                            return event;
                        }
                        else {
                            return null;
                        }
                    }
                    catch (err) {
                        console.log(err);
                    }
                }
                else {
                    // If not in DEBUG mode, simply forward to the actual preparer; we should be notified
                    // of any event-prep errors that may occur.
                    if (this.prepareEvent(event)) {
                        return event;
                    }
                    else {
                        return null;
                    }
                }
            };
            /**
             * Capture errors and warnings logged to Console in order to get
             * stack traces. We can't use CaptureConsole integration until we
             * upgrade to a newer version of Sentry, which has a bit of a cascade
             * of changes required, in particular a change of module type and
             * transpiling down to ES5.
             *
             * https://stackoverflow.com/a/53214615/1836776
             */
            KeymanSentryManager.prototype.initConsole = function () {
                // creating function declarations for better stacktraces (otherwise they'd be anonymous function expressions)
                var oldConsoleError = console.error;
                var _this = this;
                // Note that Sentry may have overridden console.error so we are re-overriding it here post-init.
                console.error = reportingConsoleError; // defined via function hoisting
                function reportingConsoleError() {
                    var args = Array.prototype.slice.call(arguments);
                    if (_this._enabled) {
                        Sentry.captureException(reduceConsoleArgs(args), { level: 'error' });
                    }
                    return oldConsoleError.apply(console, args);
                }
                ;
                var oldConsoleWarn = console.warn;
                console.warn = reportingConsoleWarn; // defined via function hoisting
                function reportingConsoleWarn() {
                    var args = Array.prototype.slice.call(arguments);
                    if (_this._enabled) {
                        Sentry.captureMessage(reduceConsoleArgs(args), { level: 'warning' });
                    }
                    return oldConsoleWarn.apply(console, args);
                }
                function reduceConsoleArgs(args) {
                    var errorMsg = args[0];
                    // Make sure errorMsg is either an error or string.
                    // It's therefore best to pass in new Error('msg') instead of just 'msg' since
                    // that'll give you a stack trace leading up to the creation of that new Error
                    // whereas if you just pass in a plain string 'msg', the stack trace will include
                    // reportingConsoleError and reportingConsoleCall
                    if (!(errorMsg instanceof Error)) {
                        // stringify all args as a new Error (which creates a stack trace)
                        errorMsg = new Error(args.reduce(function (accumulator, currentValue) {
                            return accumulator.toString() + ' ' + currentValue.toString();
                        }, ''));
                    }
                    return errorMsg;
                }
            };
            KeymanSentryManager.prototype.init = function () {
                // Do the actual Sentry initialization.
                //@ts-ignore
                Sentry.init({
                    beforeSend: this.prepareEventDebugWrapper.bind(this),
                    // Not using beforeBreadcrumb because that caused breadcrumbs to get lost in Sentry
                    debug: DEBUG,
                    dsn: 'https://cf96f32d107c4286ab2fd82af49c4d3b@o1005580.ingest.sentry.io/5983524',
                    release: com.keyman.KEYMAN_VERSION.SENTRY_RELEASE,
                    environment: com.keyman.KEYMAN_VERSION.VERSION_ENVIRONMENT,
                });
                this.initConsole();
            };
            Object.defineProperty(KeymanSentryManager.prototype, "enabled", {
                get: function () {
                    return this._enabled;
                },
                set: function (value) {
                    this._enabled = value;
                },
                enumerable: false,
                configurable: true
            });
            KeymanSentryManager.STANDARD_ALIASABLE_FILES = {
                'keymanweb.js': 'keymanweb.js',
                'keymanandroid.js': 'keyman.js',
                'keymanios.js': 'keyman.js',
                'kmwuibutton.js': 'kmwuibutton.js',
                'kmwuifloat.js': 'kmwuifloat.js',
                'kmwuitoggle.js': 'kmwuitoggle.js',
                'kmwuitoolbar.js': 'kmwuitoolbar.js'
                // Also add entries for the naming system used by Android and iOS - and map them to the EMBEDDED upload, not the std 'native' one.
            };
            KeymanSentryManager.DEFAULT_OPTIONS = {
                hostPlatform: "native-web"
            };
            return KeymanSentryManager;
        }());
        keyman.KeymanSentryManager = KeymanSentryManager;
    })(keyman = com.keyman || (com.keyman = {}));
})(com || (com = {}));
//# sourceMappingURL=index.js.map