import Ut, { useRef as Nt, useEffect as Tt } from "react";
import { css as Ft, LitElement as Qt, html as tt } from "lit";
const Yt = (x) => (h, p) => {
  p !== void 0 ? p.addInitializer((() => {
    customElements.define(x, h);
  })) : customElements.define(x, h);
};
const $t = globalThis, Dt = $t.ShadowRoot && ($t.ShadyCSS === void 0 || $t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, jt = /* @__PURE__ */ Symbol(), qt = /* @__PURE__ */ new WeakMap();
let Ht = class {
  constructor(h, p, v) {
    if (this._$cssResult$ = !0, v !== jt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = h, this.t = p;
  }
  get styleSheet() {
    let h = this.o;
    const p = this.t;
    if (Dt && h === void 0) {
      const v = p !== void 0 && p.length === 1;
      v && (h = qt.get(p)), h === void 0 && ((this.o = h = new CSSStyleSheet()).replaceSync(this.cssText), v && qt.set(p, h));
    }
    return h;
  }
  toString() {
    return this.cssText;
  }
};
const Gt = (x) => new Ht(typeof x == "string" ? x : x + "", void 0, jt), Vt = (x, h) => {
  if (Dt) x.adoptedStyleSheets = h.map(((p) => p instanceof CSSStyleSheet ? p : p.styleSheet));
  else for (const p of h) {
    const v = document.createElement("style"), _ = $t.litNonce;
    _ !== void 0 && v.setAttribute("nonce", _), v.textContent = p.cssText, x.appendChild(v);
  }
}, zt = Dt ? (x) => x : (x) => x instanceof CSSStyleSheet ? ((h) => {
  let p = "";
  for (const v of h.cssRules) p += v.cssText;
  return Gt(p);
})(x) : x;
const { is: Xt, defineProperty: Wt, getOwnPropertyDescriptor: Zt, getOwnPropertyNames: Kt, getOwnPropertySymbols: Jt, getPrototypeOf: te } = Object, At = globalThis, Bt = At.trustedTypes, ee = Bt ? Bt.emptyScript : "", ie = At.reactiveElementPolyfillSupport, wt = (x, h) => x, Ot = { toAttribute(x, h) {
  switch (h) {
    case Boolean:
      x = x ? ee : null;
      break;
    case Object:
    case Array:
      x = x == null ? x : JSON.stringify(x);
  }
  return x;
}, fromAttribute(x, h) {
  let p = x;
  switch (h) {
    case Boolean:
      p = x !== null;
      break;
    case Number:
      p = x === null ? null : Number(x);
      break;
    case Object:
    case Array:
      try {
        p = JSON.parse(x);
      } catch {
        p = null;
      }
  }
  return p;
} }, Pt = (x, h) => !Xt(x, h), Rt = { attribute: !0, type: String, converter: Ot, reflect: !1, hasChanged: Pt };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), At.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
class ft extends HTMLElement {
  static addInitializer(h) {
    this._$Ei(), (this.l ??= []).push(h);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(h, p = Rt) {
    if (p.state && (p.attribute = !1), this._$Ei(), this.elementProperties.set(h, p), !p.noAccessor) {
      const v = /* @__PURE__ */ Symbol(), _ = this.getPropertyDescriptor(h, v, p);
      _ !== void 0 && Wt(this.prototype, h, _);
    }
  }
  static getPropertyDescriptor(h, p, v) {
    const { get: _, set: E } = Zt(this.prototype, h) ?? { get() {
      return this[p];
    }, set(k) {
      this[p] = k;
    } };
    return { get() {
      return _?.call(this);
    }, set(k) {
      const B = _?.call(this);
      E.call(this, k), this.requestUpdate(h, B, v);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(h) {
    return this.elementProperties.get(h) ?? Rt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(wt("elementProperties"))) return;
    const h = te(this);
    h.finalize(), h.l !== void 0 && (this.l = [...h.l]), this.elementProperties = new Map(h.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(wt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(wt("properties"))) {
      const p = this.properties, v = [...Kt(p), ...Jt(p)];
      for (const _ of v) this.createProperty(_, p[_]);
    }
    const h = this[Symbol.metadata];
    if (h !== null) {
      const p = litPropertyMetadata.get(h);
      if (p !== void 0) for (const [v, _] of p) this.elementProperties.set(v, _);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [p, v] of this.elementProperties) {
      const _ = this._$Eu(p, v);
      _ !== void 0 && this._$Eh.set(_, p);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(h) {
    const p = [];
    if (Array.isArray(h)) {
      const v = new Set(h.flat(1 / 0).reverse());
      for (const _ of v) p.unshift(zt(_));
    } else h !== void 0 && p.push(zt(h));
    return p;
  }
  static _$Eu(h, p) {
    const v = p.attribute;
    return v === !1 ? void 0 : typeof v == "string" ? v : typeof h == "string" ? h.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise(((h) => this.enableUpdating = h)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(((h) => h(this)));
  }
  addController(h) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(h), this.renderRoot !== void 0 && this.isConnected && h.hostConnected?.();
  }
  removeController(h) {
    this._$EO?.delete(h);
  }
  _$E_() {
    const h = /* @__PURE__ */ new Map(), p = this.constructor.elementProperties;
    for (const v of p.keys()) this.hasOwnProperty(v) && (h.set(v, this[v]), delete this[v]);
    h.size > 0 && (this._$Ep = h);
  }
  createRenderRoot() {
    const h = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Vt(h, this.constructor.elementStyles), h;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((h) => h.hostConnected?.()));
  }
  enableUpdating(h) {
  }
  disconnectedCallback() {
    this._$EO?.forEach(((h) => h.hostDisconnected?.()));
  }
  attributeChangedCallback(h, p, v) {
    this._$AK(h, v);
  }
  _$EC(h, p) {
    const v = this.constructor.elementProperties.get(h), _ = this.constructor._$Eu(h, v);
    if (_ !== void 0 && v.reflect === !0) {
      const E = (v.converter?.toAttribute !== void 0 ? v.converter : Ot).toAttribute(p, v.type);
      this._$Em = h, E == null ? this.removeAttribute(_) : this.setAttribute(_, E), this._$Em = null;
    }
  }
  _$AK(h, p) {
    const v = this.constructor, _ = v._$Eh.get(h);
    if (_ !== void 0 && this._$Em !== _) {
      const E = v.getPropertyOptions(_), k = typeof E.converter == "function" ? { fromAttribute: E.converter } : E.converter?.fromAttribute !== void 0 ? E.converter : Ot;
      this._$Em = _, this[_] = k.fromAttribute(p, E.type), this._$Em = null;
    }
  }
  requestUpdate(h, p, v) {
    if (h !== void 0) {
      if (v ??= this.constructor.getPropertyOptions(h), !(v.hasChanged ?? Pt)(this[h], p)) return;
      this.P(h, p, v);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(h, p, v) {
    this._$AL.has(h) || this._$AL.set(h, p), v.reflect === !0 && this._$Em !== h && (this._$Ej ??= /* @__PURE__ */ new Set()).add(h);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (p) {
      Promise.reject(p);
    }
    const h = this.scheduleUpdate();
    return h != null && await h, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [_, E] of this._$Ep) this[_] = E;
        this._$Ep = void 0;
      }
      const v = this.constructor.elementProperties;
      if (v.size > 0) for (const [_, E] of v) E.wrapped !== !0 || this._$AL.has(_) || this[_] === void 0 || this.P(_, this[_], E);
    }
    let h = !1;
    const p = this._$AL;
    try {
      h = this.shouldUpdate(p), h ? (this.willUpdate(p), this._$EO?.forEach(((v) => v.hostUpdate?.())), this.update(p)) : this._$EU();
    } catch (v) {
      throw h = !1, this._$EU(), v;
    }
    h && this._$AE(p);
  }
  willUpdate(h) {
  }
  _$AE(h) {
    this._$EO?.forEach(((p) => p.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(h)), this.updated(h);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(h) {
    return !0;
  }
  update(h) {
    this._$Ej &&= this._$Ej.forEach(((p) => this._$EC(p, this[p]))), this._$EU();
  }
  updated(h) {
  }
  firstUpdated(h) {
  }
}
ft.elementStyles = [], ft.shadowRootOptions = { mode: "open" }, ft[wt("elementProperties")] = /* @__PURE__ */ new Map(), ft[wt("finalized")] = /* @__PURE__ */ new Map(), ie?.({ ReactiveElement: ft }), (At.reactiveElementVersions ??= []).push("2.0.4");
const re = { attribute: !0, type: String, converter: Ot, reflect: !1, hasChanged: Pt }, oe = (x = re, h, p) => {
  const { kind: v, metadata: _ } = p;
  let E = globalThis.litPropertyMetadata.get(_);
  if (E === void 0 && globalThis.litPropertyMetadata.set(_, E = /* @__PURE__ */ new Map()), E.set(p.name, x), v === "accessor") {
    const { name: k } = p;
    return { set(B) {
      const Q = h.get.call(this);
      h.set.call(this, B), this.requestUpdate(k, Q, x);
    }, init(B) {
      return B !== void 0 && this.P(k, void 0, x), B;
    } };
  }
  if (v === "setter") {
    const { name: k } = p;
    return function(B) {
      const Q = this[k];
      h.call(this, B), this.requestUpdate(k, Q, x);
    };
  }
  throw Error("Unsupported decorator location: " + v);
};
function Mt(x) {
  return (h, p) => typeof p == "object" ? oe(x, h, p) : ((v, _, E) => {
    const k = _.hasOwnProperty(E);
    return _.constructor.createProperty(E, k ? { ...v, wrapped: !0 } : v), k ? Object.getOwnPropertyDescriptor(_, E) : void 0;
  })(x, h, p);
}
function ht(x) {
  return Mt({ ...x, state: !0, attribute: !1 });
}
function ne(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
var kt = { exports: {} }, se = kt.exports, It;
function ae() {
  return It || (It = 1, (function(x, h) {
    (function(p, v) {
      x.exports = v();
    })(se, (() => (() => {
      var p = { 873: (k, B) => {
        var Q, mt, ct = (function() {
          var et = function(f, u) {
            var d = f, e = st[u], t = null, r = 0, o = null, i = [], a = {}, m = function(n, c) {
              t = (function(s) {
                for (var l = new Array(s), g = 0; g < s; g += 1) {
                  l[g] = new Array(s);
                  for (var $ = 0; $ < s; $ += 1) l[g][$] = null;
                }
                return l;
              })(r = 4 * d + 17), w(0, 0), w(r - 7, 0), w(0, r - 7), y(), S(), b(n, c), d >= 7 && C(n), o == null && (o = z(d, e, i)), O(o, c);
            }, w = function(n, c) {
              for (var s = -1; s <= 7; s += 1) if (!(n + s <= -1 || r <= n + s)) for (var l = -1; l <= 7; l += 1) c + l <= -1 || r <= c + l || (t[n + s][c + l] = 0 <= s && s <= 6 && (l == 0 || l == 6) || 0 <= l && l <= 6 && (s == 0 || s == 6) || 2 <= s && s <= 4 && 2 <= l && l <= 4);
            }, S = function() {
              for (var n = 8; n < r - 8; n += 1) t[n][6] == null && (t[n][6] = n % 2 == 0);
              for (var c = 8; c < r - 8; c += 1) t[6][c] == null && (t[6][c] = c % 2 == 0);
            }, y = function() {
              for (var n = G.getPatternPosition(d), c = 0; c < n.length; c += 1) for (var s = 0; s < n.length; s += 1) {
                var l = n[c], g = n[s];
                if (t[l][g] == null) for (var $ = -2; $ <= 2; $ += 1) for (var D = -2; D <= 2; D += 1) t[l + $][g + D] = $ == -2 || $ == 2 || D == -2 || D == 2 || $ == 0 && D == 0;
              }
            }, C = function(n) {
              for (var c = G.getBCHTypeNumber(d), s = 0; s < 18; s += 1) {
                var l = !n && (c >> s & 1) == 1;
                t[Math.floor(s / 3)][s % 3 + r - 8 - 3] = l;
              }
              for (s = 0; s < 18; s += 1) l = !n && (c >> s & 1) == 1, t[s % 3 + r - 8 - 3][Math.floor(s / 3)] = l;
            }, b = function(n, c) {
              for (var s = e << 3 | c, l = G.getBCHTypeInfo(s), g = 0; g < 15; g += 1) {
                var $ = !n && (l >> g & 1) == 1;
                g < 6 ? t[g][8] = $ : g < 8 ? t[g + 1][8] = $ : t[r - 15 + g][8] = $;
              }
              for (g = 0; g < 15; g += 1) $ = !n && (l >> g & 1) == 1, g < 8 ? t[8][r - g - 1] = $ : g < 9 ? t[8][15 - g - 1 + 1] = $ : t[8][15 - g - 1] = $;
              t[r - 8][8] = !n;
            }, O = function(n, c) {
              for (var s = -1, l = r - 1, g = 7, $ = 0, D = G.getMaskFunction(c), q = r - 1; q > 0; q -= 2) for (q == 6 && (q -= 1); ; ) {
                for (var R = 0; R < 2; R += 1) if (t[l][q - R] == null) {
                  var I = !1;
                  $ < n.length && (I = (n[$] >>> g & 1) == 1), D(l, q - R) && (I = !I), t[l][q - R] = I, (g -= 1) == -1 && ($ += 1, g = 7);
                }
                if ((l += s) < 0 || r <= l) {
                  l -= s, s = -s;
                  break;
                }
              }
            }, z = function(n, c, s) {
              for (var l = vt.getRSBlocks(n, c), g = lt(), $ = 0; $ < s.length; $ += 1) {
                var D = s[$];
                g.put(D.getMode(), 4), g.put(D.getLength(), G.getLengthInBits(D.getMode(), n)), D.write(g);
              }
              var q = 0;
              for ($ = 0; $ < l.length; $ += 1) q += l[$].dataCount;
              if (g.getLengthInBits() > 8 * q) throw "code length overflow. (" + g.getLengthInBits() + ">" + 8 * q + ")";
              for (g.getLengthInBits() + 4 <= 8 * q && g.put(0, 4); g.getLengthInBits() % 8 != 0; ) g.putBit(!1);
              for (; !(g.getLengthInBits() >= 8 * q || (g.put(236, 8), g.getLengthInBits() >= 8 * q)); ) g.put(17, 8);
              return (function(R, I) {
                for (var U = 0, H = 0, F = 0, N = new Array(I.length), L = new Array(I.length), A = 0; A < I.length; A += 1) {
                  var T = I[A].dataCount, Y = I[A].totalCount - T;
                  H = Math.max(H, T), F = Math.max(F, Y), N[A] = new Array(T);
                  for (var P = 0; P < N[A].length; P += 1) N[A][P] = 255 & R.getBuffer()[P + U];
                  U += T;
                  var Z = G.getErrorCorrectPolynomial(Y), W = at(N[A], Z.getLength() - 1).mod(Z);
                  for (L[A] = new Array(Z.getLength() - 1), P = 0; P < L[A].length; P += 1) {
                    var X = P + W.getLength() - L[A].length;
                    L[A][P] = X >= 0 ? W.getAt(X) : 0;
                  }
                }
                var St = 0;
                for (P = 0; P < I.length; P += 1) St += I[P].totalCount;
                var pt = new Array(St), nt = 0;
                for (P = 0; P < H; P += 1) for (A = 0; A < I.length; A += 1) P < N[A].length && (pt[nt] = N[A][P], nt += 1);
                for (P = 0; P < F; P += 1) for (A = 0; A < I.length; A += 1) P < L[A].length && (pt[nt] = L[A][P], nt += 1);
                return pt;
              })(g, l);
            };
            a.addData = function(n, c) {
              var s = null;
              switch (c = c || "Byte") {
                case "Numeric":
                  s = yt(n);
                  break;
                case "Alphanumeric":
                  s = _t(n);
                  break;
                case "Byte":
                  s = ut(n);
                  break;
                case "Kanji":
                  s = bt(n);
                  break;
                default:
                  throw "mode:" + c;
              }
              i.push(s), o = null;
            }, a.isDark = function(n, c) {
              if (n < 0 || r <= n || c < 0 || r <= c) throw n + "," + c;
              return t[n][c];
            }, a.getModuleCount = function() {
              return r;
            }, a.make = function() {
              if (d < 1) {
                for (var n = 1; n < 40; n++) {
                  for (var c = vt.getRSBlocks(n, e), s = lt(), l = 0; l < i.length; l++) {
                    var g = i[l];
                    s.put(g.getMode(), 4), s.put(g.getLength(), G.getLengthInBits(g.getMode(), n)), g.write(s);
                  }
                  var $ = 0;
                  for (l = 0; l < c.length; l++) $ += c[l].dataCount;
                  if (s.getLengthInBits() <= 8 * $) break;
                }
                d = n;
              }
              m(!1, (function() {
                for (var D = 0, q = 0, R = 0; R < 8; R += 1) {
                  m(!0, R);
                  var I = G.getLostPoint(a);
                  (R == 0 || D > I) && (D = I, q = R);
                }
                return q;
              })());
            }, a.createTableTag = function(n, c) {
              n = n || 2;
              var s = "";
              s += '<table style="', s += " border-width: 0px; border-style: none;", s += " border-collapse: collapse;", s += " padding: 0px; margin: " + (c = c === void 0 ? 4 * n : c) + "px;", s += '">', s += "<tbody>";
              for (var l = 0; l < a.getModuleCount(); l += 1) {
                s += "<tr>";
                for (var g = 0; g < a.getModuleCount(); g += 1) s += '<td style="', s += " border-width: 0px; border-style: none;", s += " border-collapse: collapse;", s += " padding: 0px; margin: 0px;", s += " width: " + n + "px;", s += " height: " + n + "px;", s += " background-color: ", s += a.isDark(l, g) ? "#000000" : "#ffffff", s += ";", s += '"/>';
                s += "</tr>";
              }
              return (s += "</tbody>") + "</table>";
            }, a.createSvgTag = function(n, c, s, l) {
              var g = {};
              typeof arguments[0] == "object" && (n = (g = arguments[0]).cellSize, c = g.margin, s = g.alt, l = g.title), n = n || 2, c = c === void 0 ? 4 * n : c, (s = typeof s == "string" ? { text: s } : s || {}).text = s.text || null, s.id = s.text ? s.id || "qrcode-description" : null, (l = typeof l == "string" ? { text: l } : l || {}).text = l.text || null, l.id = l.text ? l.id || "qrcode-title" : null;
              var $, D, q, R, I = a.getModuleCount() * n + 2 * c, U = "";
              for (R = "l" + n + ",0 0," + n + " -" + n + ",0 0,-" + n + "z ", U += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', U += g.scalable ? "" : ' width="' + I + 'px" height="' + I + 'px"', U += ' viewBox="0 0 ' + I + " " + I + '" ', U += ' preserveAspectRatio="xMinYMin meet"', U += l.text || s.text ? ' role="img" aria-labelledby="' + M([l.id, s.id].join(" ").trim()) + '"' : "", U += ">", U += l.text ? '<title id="' + M(l.id) + '">' + M(l.text) + "</title>" : "", U += s.text ? '<description id="' + M(s.id) + '">' + M(s.text) + "</description>" : "", U += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', U += '<path d="', D = 0; D < a.getModuleCount(); D += 1) for (q = D * n + c, $ = 0; $ < a.getModuleCount(); $ += 1) a.isDark(D, $) && (U += "M" + ($ * n + c) + "," + q + R);
              return (U += '" stroke="transparent" fill="black"/>') + "</svg>";
            }, a.createDataURL = function(n, c) {
              n = n || 2, c = c === void 0 ? 4 * n : c;
              var s = a.getModuleCount() * n + 2 * c, l = c, g = s - c;
              return gt(s, s, (function($, D) {
                if (l <= $ && $ < g && l <= D && D < g) {
                  var q = Math.floor(($ - l) / n), R = Math.floor((D - l) / n);
                  return a.isDark(R, q) ? 0 : 1;
                }
                return 1;
              }));
            }, a.createImgTag = function(n, c, s) {
              n = n || 2, c = c === void 0 ? 4 * n : c;
              var l = a.getModuleCount() * n + 2 * c, g = "";
              return g += "<img", g += ' src="', g += a.createDataURL(n, c), g += '"', g += ' width="', g += l, g += '"', g += ' height="', g += l, g += '"', s && (g += ' alt="', g += M(s), g += '"'), g + "/>";
            };
            var M = function(n) {
              for (var c = "", s = 0; s < n.length; s += 1) {
                var l = n.charAt(s);
                switch (l) {
                  case "<":
                    c += "&lt;";
                    break;
                  case ">":
                    c += "&gt;";
                    break;
                  case "&":
                    c += "&amp;";
                    break;
                  case '"':
                    c += "&quot;";
                    break;
                  default:
                    c += l;
                }
              }
              return c;
            };
            return a.createASCII = function(n, c) {
              if ((n = n || 1) < 2) return (function(N) {
                N = N === void 0 ? 2 : N;
                var L, A, T, Y, P, Z = 1 * a.getModuleCount() + 2 * N, W = N, X = Z - N, St = { "██": "█", "█ ": "▀", " █": "▄", "  ": " " }, pt = { "██": "▀", "█ ": "▀", " █": " ", "  ": " " }, nt = "";
                for (L = 0; L < Z; L += 2) {
                  for (T = Math.floor((L - W) / 1), Y = Math.floor((L + 1 - W) / 1), A = 0; A < Z; A += 1) P = "█", W <= A && A < X && W <= L && L < X && a.isDark(T, Math.floor((A - W) / 1)) && (P = " "), W <= A && A < X && W <= L + 1 && L + 1 < X && a.isDark(Y, Math.floor((A - W) / 1)) ? P += " " : P += "█", nt += N < 1 && L + 1 >= X ? pt[P] : St[P];
                  nt += `
`;
                }
                return Z % 2 && N > 0 ? nt.substring(0, nt.length - Z - 1) + Array(Z + 1).join("▀") : nt.substring(0, nt.length - 1);
              })(c);
              n -= 1, c = c === void 0 ? 2 * n : c;
              var s, l, g, $, D = a.getModuleCount() * n + 2 * c, q = c, R = D - c, I = Array(n + 1).join("██"), U = Array(n + 1).join("  "), H = "", F = "";
              for (s = 0; s < D; s += 1) {
                for (g = Math.floor((s - q) / n), F = "", l = 0; l < D; l += 1) $ = 1, q <= l && l < R && q <= s && s < R && a.isDark(g, Math.floor((l - q) / n)) && ($ = 0), F += $ ? I : U;
                for (g = 0; g < n; g += 1) H += F + `
`;
              }
              return H.substring(0, H.length - 1);
            }, a.renderTo2dContext = function(n, c) {
              c = c || 2;
              for (var s = a.getModuleCount(), l = 0; l < s; l++) for (var g = 0; g < s; g++) n.fillStyle = a.isDark(l, g) ? "black" : "white", n.fillRect(l * c, g * c, c, c);
            }, a;
          };
          et.stringToBytes = (et.stringToBytesFuncs = { default: function(f) {
            for (var u = [], d = 0; d < f.length; d += 1) {
              var e = f.charCodeAt(d);
              u.push(255 & e);
            }
            return u;
          } }).default, et.createStringToBytes = function(f, u) {
            var d = (function() {
              for (var t = Et(f), r = function() {
                var S = t.read();
                if (S == -1) throw "eof";
                return S;
              }, o = 0, i = {}; ; ) {
                var a = t.read();
                if (a == -1) break;
                var m = r(), w = r() << 8 | r();
                i[String.fromCharCode(a << 8 | m)] = w, o += 1;
              }
              if (o != u) throw o + " != " + u;
              return i;
            })(), e = 63;
            return function(t) {
              for (var r = [], o = 0; o < t.length; o += 1) {
                var i = t.charCodeAt(o);
                if (i < 128) r.push(i);
                else {
                  var a = d[t.charAt(o)];
                  typeof a == "number" ? (255 & a) == a ? r.push(a) : (r.push(a >>> 8), r.push(255 & a)) : r.push(e);
                }
              }
              return r;
            };
          };
          var dt, it, J, j, ot, st = { L: 1, M: 0, Q: 3, H: 2 }, G = (dt = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], it = 1335, J = 7973, ot = function(f) {
            for (var u = 0; f != 0; ) u += 1, f >>>= 1;
            return u;
          }, (j = {}).getBCHTypeInfo = function(f) {
            for (var u = f << 10; ot(u) - ot(it) >= 0; ) u ^= it << ot(u) - ot(it);
            return 21522 ^ (f << 10 | u);
          }, j.getBCHTypeNumber = function(f) {
            for (var u = f << 12; ot(u) - ot(J) >= 0; ) u ^= J << ot(u) - ot(J);
            return f << 12 | u;
          }, j.getPatternPosition = function(f) {
            return dt[f - 1];
          }, j.getMaskFunction = function(f) {
            switch (f) {
              case 0:
                return function(u, d) {
                  return (u + d) % 2 == 0;
                };
              case 1:
                return function(u, d) {
                  return u % 2 == 0;
                };
              case 2:
                return function(u, d) {
                  return d % 3 == 0;
                };
              case 3:
                return function(u, d) {
                  return (u + d) % 3 == 0;
                };
              case 4:
                return function(u, d) {
                  return (Math.floor(u / 2) + Math.floor(d / 3)) % 2 == 0;
                };
              case 5:
                return function(u, d) {
                  return u * d % 2 + u * d % 3 == 0;
                };
              case 6:
                return function(u, d) {
                  return (u * d % 2 + u * d % 3) % 2 == 0;
                };
              case 7:
                return function(u, d) {
                  return (u * d % 3 + (u + d) % 2) % 2 == 0;
                };
              default:
                throw "bad maskPattern:" + f;
            }
          }, j.getErrorCorrectPolynomial = function(f) {
            for (var u = at([1], 0), d = 0; d < f; d += 1) u = u.multiply(at([1, V.gexp(d)], 0));
            return u;
          }, j.getLengthInBits = function(f, u) {
            if (1 <= u && u < 10) switch (f) {
              case 1:
                return 10;
              case 2:
                return 9;
              case 4:
              case 8:
                return 8;
              default:
                throw "mode:" + f;
            }
            else if (u < 27) switch (f) {
              case 1:
                return 12;
              case 2:
                return 11;
              case 4:
                return 16;
              case 8:
                return 10;
              default:
                throw "mode:" + f;
            }
            else {
              if (!(u < 41)) throw "type:" + u;
              switch (f) {
                case 1:
                  return 14;
                case 2:
                  return 13;
                case 4:
                  return 16;
                case 8:
                  return 12;
                default:
                  throw "mode:" + f;
              }
            }
          }, j.getLostPoint = function(f) {
            for (var u = f.getModuleCount(), d = 0, e = 0; e < u; e += 1) for (var t = 0; t < u; t += 1) {
              for (var r = 0, o = f.isDark(e, t), i = -1; i <= 1; i += 1) if (!(e + i < 0 || u <= e + i)) for (var a = -1; a <= 1; a += 1) t + a < 0 || u <= t + a || i == 0 && a == 0 || o == f.isDark(e + i, t + a) && (r += 1);
              r > 5 && (d += 3 + r - 5);
            }
            for (e = 0; e < u - 1; e += 1) for (t = 0; t < u - 1; t += 1) {
              var m = 0;
              f.isDark(e, t) && (m += 1), f.isDark(e + 1, t) && (m += 1), f.isDark(e, t + 1) && (m += 1), f.isDark(e + 1, t + 1) && (m += 1), m != 0 && m != 4 || (d += 3);
            }
            for (e = 0; e < u; e += 1) for (t = 0; t < u - 6; t += 1) f.isDark(e, t) && !f.isDark(e, t + 1) && f.isDark(e, t + 2) && f.isDark(e, t + 3) && f.isDark(e, t + 4) && !f.isDark(e, t + 5) && f.isDark(e, t + 6) && (d += 40);
            for (t = 0; t < u; t += 1) for (e = 0; e < u - 6; e += 1) f.isDark(e, t) && !f.isDark(e + 1, t) && f.isDark(e + 2, t) && f.isDark(e + 3, t) && f.isDark(e + 4, t) && !f.isDark(e + 5, t) && f.isDark(e + 6, t) && (d += 40);
            var w = 0;
            for (t = 0; t < u; t += 1) for (e = 0; e < u; e += 1) f.isDark(e, t) && (w += 1);
            return d + Math.abs(100 * w / u / u - 50) / 5 * 10;
          }, j), V = (function() {
            for (var f = new Array(256), u = new Array(256), d = 0; d < 8; d += 1) f[d] = 1 << d;
            for (d = 8; d < 256; d += 1) f[d] = f[d - 4] ^ f[d - 5] ^ f[d - 6] ^ f[d - 8];
            for (d = 0; d < 255; d += 1) u[f[d]] = d;
            return { glog: function(e) {
              if (e < 1) throw "glog(" + e + ")";
              return u[e];
            }, gexp: function(e) {
              for (; e < 0; ) e += 255;
              for (; e >= 256; ) e -= 255;
              return f[e];
            } };
          })();
          function at(f, u) {
            if (f.length === void 0) throw f.length + "/" + u;
            var d = (function() {
              for (var t = 0; t < f.length && f[t] == 0; ) t += 1;
              for (var r = new Array(f.length - t + u), o = 0; o < f.length - t; o += 1) r[o] = f[o + t];
              return r;
            })(), e = { getAt: function(t) {
              return d[t];
            }, getLength: function() {
              return d.length;
            }, multiply: function(t) {
              for (var r = new Array(e.getLength() + t.getLength() - 1), o = 0; o < e.getLength(); o += 1) for (var i = 0; i < t.getLength(); i += 1) r[o + i] ^= V.gexp(V.glog(e.getAt(o)) + V.glog(t.getAt(i)));
              return at(r, 0);
            }, mod: function(t) {
              if (e.getLength() - t.getLength() < 0) return e;
              for (var r = V.glog(e.getAt(0)) - V.glog(t.getAt(0)), o = new Array(e.getLength()), i = 0; i < e.getLength(); i += 1) o[i] = e.getAt(i);
              for (i = 0; i < t.getLength(); i += 1) o[i] ^= V.gexp(V.glog(t.getAt(i)) + r);
              return at(o, 0).mod(t);
            } };
            return e;
          }
          var vt = /* @__PURE__ */ (function() {
            var f = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], u = function(e, t) {
              var r = {};
              return r.totalCount = e, r.dataCount = t, r;
            }, d = { getRSBlocks: function(e, t) {
              var r = (function(C, b) {
                switch (b) {
                  case st.L:
                    return f[4 * (C - 1) + 0];
                  case st.M:
                    return f[4 * (C - 1) + 1];
                  case st.Q:
                    return f[4 * (C - 1) + 2];
                  case st.H:
                    return f[4 * (C - 1) + 3];
                  default:
                    return;
                }
              })(e, t);
              if (r === void 0) throw "bad rs block @ typeNumber:" + e + "/errorCorrectionLevel:" + t;
              for (var o = r.length / 3, i = [], a = 0; a < o; a += 1) for (var m = r[3 * a + 0], w = r[3 * a + 1], S = r[3 * a + 2], y = 0; y < m; y += 1) i.push(u(w, S));
              return i;
            } };
            return d;
          })(), lt = function() {
            var f = [], u = 0, d = { getBuffer: function() {
              return f;
            }, getAt: function(e) {
              var t = Math.floor(e / 8);
              return (f[t] >>> 7 - e % 8 & 1) == 1;
            }, put: function(e, t) {
              for (var r = 0; r < t; r += 1) d.putBit((e >>> t - r - 1 & 1) == 1);
            }, getLengthInBits: function() {
              return u;
            }, putBit: function(e) {
              var t = Math.floor(u / 8);
              f.length <= t && f.push(0), e && (f[t] |= 128 >>> u % 8), u += 1;
            } };
            return d;
          }, yt = function(f) {
            var u = f, d = { getMode: function() {
              return 1;
            }, getLength: function(r) {
              return u.length;
            }, write: function(r) {
              for (var o = u, i = 0; i + 2 < o.length; ) r.put(e(o.substring(i, i + 3)), 10), i += 3;
              i < o.length && (o.length - i == 1 ? r.put(e(o.substring(i, i + 1)), 4) : o.length - i == 2 && r.put(e(o.substring(i, i + 2)), 7));
            } }, e = function(r) {
              for (var o = 0, i = 0; i < r.length; i += 1) o = 10 * o + t(r.charAt(i));
              return o;
            }, t = function(r) {
              if ("0" <= r && r <= "9") return r.charCodeAt(0) - 48;
              throw "illegal char :" + r;
            };
            return d;
          }, _t = function(f) {
            var u = f, d = { getMode: function() {
              return 2;
            }, getLength: function(t) {
              return u.length;
            }, write: function(t) {
              for (var r = u, o = 0; o + 1 < r.length; ) t.put(45 * e(r.charAt(o)) + e(r.charAt(o + 1)), 11), o += 2;
              o < r.length && t.put(e(r.charAt(o)), 6);
            } }, e = function(t) {
              if ("0" <= t && t <= "9") return t.charCodeAt(0) - 48;
              if ("A" <= t && t <= "Z") return t.charCodeAt(0) - 65 + 10;
              switch (t) {
                case " ":
                  return 36;
                case "$":
                  return 37;
                case "%":
                  return 38;
                case "*":
                  return 39;
                case "+":
                  return 40;
                case "-":
                  return 41;
                case ".":
                  return 42;
                case "/":
                  return 43;
                case ":":
                  return 44;
                default:
                  throw "illegal char :" + t;
              }
            };
            return d;
          }, ut = function(f) {
            var u = et.stringToBytes(f);
            return { getMode: function() {
              return 4;
            }, getLength: function(d) {
              return u.length;
            }, write: function(d) {
              for (var e = 0; e < u.length; e += 1) d.put(u[e], 8);
            } };
          }, bt = function(f) {
            var u = et.stringToBytesFuncs.SJIS;
            if (!u) throw "sjis not supported.";
            (function() {
              var t = u("友");
              if (t.length != 2 || (t[0] << 8 | t[1]) != 38726) throw "sjis not supported.";
            })();
            var d = u(f), e = { getMode: function() {
              return 8;
            }, getLength: function(t) {
              return ~~(d.length / 2);
            }, write: function(t) {
              for (var r = d, o = 0; o + 1 < r.length; ) {
                var i = (255 & r[o]) << 8 | 255 & r[o + 1];
                if (33088 <= i && i <= 40956) i -= 33088;
                else {
                  if (!(57408 <= i && i <= 60351)) throw "illegal char at " + (o + 1) + "/" + i;
                  i -= 49472;
                }
                i = 192 * (i >>> 8 & 255) + (255 & i), t.put(i, 13), o += 2;
              }
              if (o < r.length) throw "illegal char at " + (o + 1);
            } };
            return e;
          }, xt = function() {
            var f = [], u = { writeByte: function(d) {
              f.push(255 & d);
            }, writeShort: function(d) {
              u.writeByte(d), u.writeByte(d >>> 8);
            }, writeBytes: function(d, e, t) {
              e = e || 0, t = t || d.length;
              for (var r = 0; r < t; r += 1) u.writeByte(d[r + e]);
            }, writeString: function(d) {
              for (var e = 0; e < d.length; e += 1) u.writeByte(d.charCodeAt(e));
            }, toByteArray: function() {
              return f;
            }, toString: function() {
              var d = "";
              d += "[";
              for (var e = 0; e < f.length; e += 1) e > 0 && (d += ","), d += f[e];
              return d + "]";
            } };
            return u;
          }, Et = function(f) {
            var u = f, d = 0, e = 0, t = 0, r = { read: function() {
              for (; t < 8; ) {
                if (d >= u.length) {
                  if (t == 0) return -1;
                  throw "unexpected end of file./" + t;
                }
                var i = u.charAt(d);
                if (d += 1, i == "=") return t = 0, -1;
                i.match(/^\s$/) || (e = e << 6 | o(i.charCodeAt(0)), t += 6);
              }
              var a = e >>> t - 8 & 255;
              return t -= 8, a;
            } }, o = function(i) {
              if (65 <= i && i <= 90) return i - 65;
              if (97 <= i && i <= 122) return i - 97 + 26;
              if (48 <= i && i <= 57) return i - 48 + 52;
              if (i == 43) return 62;
              if (i == 47) return 63;
              throw "c:" + i;
            };
            return r;
          }, gt = function(f, u, d) {
            for (var e = (function(w, S) {
              var y = w, C = S, b = new Array(w * S), O = { setPixel: function(n, c, s) {
                b[c * y + n] = s;
              }, write: function(n) {
                n.writeString("GIF87a"), n.writeShort(y), n.writeShort(C), n.writeByte(128), n.writeByte(0), n.writeByte(0), n.writeByte(0), n.writeByte(0), n.writeByte(0), n.writeByte(255), n.writeByte(255), n.writeByte(255), n.writeString(","), n.writeShort(0), n.writeShort(0), n.writeShort(y), n.writeShort(C), n.writeByte(0);
                var c = z(2);
                n.writeByte(2);
                for (var s = 0; c.length - s > 255; ) n.writeByte(255), n.writeBytes(c, s, 255), s += 255;
                n.writeByte(c.length - s), n.writeBytes(c, s, c.length - s), n.writeByte(0), n.writeString(";");
              } }, z = function(n) {
                for (var c = 1 << n, s = 1 + (1 << n), l = n + 1, g = M(), $ = 0; $ < c; $ += 1) g.add(String.fromCharCode($));
                g.add(String.fromCharCode(c)), g.add(String.fromCharCode(s));
                var D, q, R, I = xt(), U = (D = I, q = 0, R = 0, { write: function(L, A) {
                  if (L >>> A) throw "length over";
                  for (; q + A >= 8; ) D.writeByte(255 & (L << q | R)), A -= 8 - q, L >>>= 8 - q, R = 0, q = 0;
                  R |= L << q, q += A;
                }, flush: function() {
                  q > 0 && D.writeByte(R);
                } });
                U.write(c, l);
                var H = 0, F = String.fromCharCode(b[H]);
                for (H += 1; H < b.length; ) {
                  var N = String.fromCharCode(b[H]);
                  H += 1, g.contains(F + N) ? F += N : (U.write(g.indexOf(F), l), g.size() < 4095 && (g.size() == 1 << l && (l += 1), g.add(F + N)), F = N);
                }
                return U.write(g.indexOf(F), l), U.write(s, l), U.flush(), I.toByteArray();
              }, M = function() {
                var n = {}, c = 0, s = { add: function(l) {
                  if (s.contains(l)) throw "dup key:" + l;
                  n[l] = c, c += 1;
                }, size: function() {
                  return c;
                }, indexOf: function(l) {
                  return n[l];
                }, contains: function(l) {
                  return n[l] !== void 0;
                } };
                return s;
              };
              return O;
            })(f, u), t = 0; t < u; t += 1) for (var r = 0; r < f; r += 1) e.setPixel(r, t, d(r, t));
            var o = xt();
            e.write(o);
            for (var i = (function() {
              var w = 0, S = 0, y = 0, C = "", b = {}, O = function(M) {
                C += String.fromCharCode(z(63 & M));
              }, z = function(M) {
                if (!(M < 0)) {
                  if (M < 26) return 65 + M;
                  if (M < 52) return M - 26 + 97;
                  if (M < 62) return M - 52 + 48;
                  if (M == 62) return 43;
                  if (M == 63) return 47;
                }
                throw "n:" + M;
              };
              return b.writeByte = function(M) {
                for (w = w << 8 | 255 & M, S += 8, y += 1; S >= 6; ) O(w >>> S - 6), S -= 6;
              }, b.flush = function() {
                if (S > 0 && (O(w << 6 - S), w = 0, S = 0), y % 3 != 0) for (var M = 3 - y % 3, n = 0; n < M; n += 1) C += "=";
              }, b.toString = function() {
                return C;
              }, b;
            })(), a = o.toByteArray(), m = 0; m < a.length; m += 1) i.writeByte(a[m]);
            return i.flush(), "data:image/gif;base64," + i;
          };
          return et;
        })();
        ct.stringToBytesFuncs["UTF-8"] = function(et) {
          return (function(dt) {
            for (var it = [], J = 0; J < dt.length; J++) {
              var j = dt.charCodeAt(J);
              j < 128 ? it.push(j) : j < 2048 ? it.push(192 | j >> 6, 128 | 63 & j) : j < 55296 || j >= 57344 ? it.push(224 | j >> 12, 128 | j >> 6 & 63, 128 | 63 & j) : (J++, j = 65536 + ((1023 & j) << 10 | 1023 & dt.charCodeAt(J)), it.push(240 | j >> 18, 128 | j >> 12 & 63, 128 | j >> 6 & 63, 128 | 63 & j));
            }
            return it;
          })(et);
        }, (mt = typeof (Q = function() {
          return ct;
        }) == "function" ? Q.apply(B, []) : Q) === void 0 || (k.exports = mt);
      } }, v = {};
      function _(k) {
        var B = v[k];
        if (B !== void 0) return B.exports;
        var Q = v[k] = { exports: {} };
        return p[k](Q, Q.exports, _), Q.exports;
      }
      _.n = (k) => {
        var B = k && k.__esModule ? () => k.default : () => k;
        return _.d(B, { a: B }), B;
      }, _.d = (k, B) => {
        for (var Q in B) _.o(B, Q) && !_.o(k, Q) && Object.defineProperty(k, Q, { enumerable: !0, get: B[Q] });
      }, _.o = (k, B) => Object.prototype.hasOwnProperty.call(k, B);
      var E = {};
      return (() => {
        _.d(E, { default: () => u });
        const k = (d) => !!d && typeof d == "object" && !Array.isArray(d);
        function B(d, ...e) {
          if (!e.length) return d;
          const t = e.shift();
          return t !== void 0 && k(d) && k(t) ? (d = Object.assign({}, d), Object.keys(t).forEach(((r) => {
            const o = d[r], i = t[r];
            Array.isArray(o) && Array.isArray(i) ? d[r] = i : k(o) && k(i) ? d[r] = B(Object.assign({}, o), i) : d[r] = i;
          })), B(d, ...e)) : d;
        }
        function Q(d, e) {
          const t = document.createElement("a");
          t.download = e, t.href = d, document.body.appendChild(t), t.click(), document.body.removeChild(t);
        }
        const mt = { L: 0.07, M: 0.15, Q: 0.25, H: 0.3 };
        class ct {
          constructor({ svg: e, type: t, window: r }) {
            this._svg = e, this._type = t, this._window = r;
          }
          draw(e, t, r, o) {
            let i;
            switch (this._type) {
              case "dots":
                i = this._drawDot;
                break;
              case "classy":
                i = this._drawClassy;
                break;
              case "classy-rounded":
                i = this._drawClassyRounded;
                break;
              case "rounded":
                i = this._drawRounded;
                break;
              case "extra-rounded":
                i = this._drawExtraRounded;
                break;
              default:
                i = this._drawSquare;
            }
            i.call(this, { x: e, y: t, size: r, getNeighbor: o });
          }
          _rotateFigure({ x: e, y: t, size: r, rotation: o = 0, draw: i }) {
            var a;
            const m = e + r / 2, w = t + r / 2;
            i(), (a = this._element) === null || a === void 0 || a.setAttribute("transform", `rotate(${180 * o / Math.PI},${m},${w})`);
          }
          _basicDot(e) {
            const { size: t, x: r, y: o } = e;
            this._rotateFigure(Object.assign(Object.assign({}, e), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "circle"), this._element.setAttribute("cx", String(r + t / 2)), this._element.setAttribute("cy", String(o + t / 2)), this._element.setAttribute("r", String(t / 2));
            } }));
          }
          _basicSquare(e) {
            const { size: t, x: r, y: o } = e;
            this._rotateFigure(Object.assign(Object.assign({}, e), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect"), this._element.setAttribute("x", String(r)), this._element.setAttribute("y", String(o)), this._element.setAttribute("width", String(t)), this._element.setAttribute("height", String(t));
            } }));
          }
          _basicSideRounded(e) {
            const { size: t, x: r, y: o } = e;
            this._rotateFigure(Object.assign(Object.assign({}, e), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("d", `M ${r} ${o}v ${t}h ` + t / 2 + `a ${t / 2} ${t / 2}, 0, 0, 0, 0 ${-t}`);
            } }));
          }
          _basicCornerRounded(e) {
            const { size: t, x: r, y: o } = e;
            this._rotateFigure(Object.assign(Object.assign({}, e), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("d", `M ${r} ${o}v ${t}h ${t}v ` + -t / 2 + `a ${t / 2} ${t / 2}, 0, 0, 0, ${-t / 2} ${-t / 2}`);
            } }));
          }
          _basicCornerExtraRounded(e) {
            const { size: t, x: r, y: o } = e;
            this._rotateFigure(Object.assign(Object.assign({}, e), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("d", `M ${r} ${o}v ${t}h ${t}a ${t} ${t}, 0, 0, 0, ${-t} ${-t}`);
            } }));
          }
          _basicCornersRounded(e) {
            const { size: t, x: r, y: o } = e;
            this._rotateFigure(Object.assign(Object.assign({}, e), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("d", `M ${r} ${o}v ` + t / 2 + `a ${t / 2} ${t / 2}, 0, 0, 0, ${t / 2} ${t / 2}h ` + t / 2 + "v " + -t / 2 + `a ${t / 2} ${t / 2}, 0, 0, 0, ${-t / 2} ${-t / 2}`);
            } }));
          }
          _drawDot({ x: e, y: t, size: r }) {
            this._basicDot({ x: e, y: t, size: r, rotation: 0 });
          }
          _drawSquare({ x: e, y: t, size: r }) {
            this._basicSquare({ x: e, y: t, size: r, rotation: 0 });
          }
          _drawRounded({ x: e, y: t, size: r, getNeighbor: o }) {
            const i = o ? +o(-1, 0) : 0, a = o ? +o(1, 0) : 0, m = o ? +o(0, -1) : 0, w = o ? +o(0, 1) : 0, S = i + a + m + w;
            if (S !== 0) if (S > 2 || i && a || m && w) this._basicSquare({ x: e, y: t, size: r, rotation: 0 });
            else {
              if (S === 2) {
                let y = 0;
                return i && m ? y = Math.PI / 2 : m && a ? y = Math.PI : a && w && (y = -Math.PI / 2), void this._basicCornerRounded({ x: e, y: t, size: r, rotation: y });
              }
              if (S === 1) {
                let y = 0;
                return m ? y = Math.PI / 2 : a ? y = Math.PI : w && (y = -Math.PI / 2), void this._basicSideRounded({ x: e, y: t, size: r, rotation: y });
              }
            }
            else this._basicDot({ x: e, y: t, size: r, rotation: 0 });
          }
          _drawExtraRounded({ x: e, y: t, size: r, getNeighbor: o }) {
            const i = o ? +o(-1, 0) : 0, a = o ? +o(1, 0) : 0, m = o ? +o(0, -1) : 0, w = o ? +o(0, 1) : 0, S = i + a + m + w;
            if (S !== 0) if (S > 2 || i && a || m && w) this._basicSquare({ x: e, y: t, size: r, rotation: 0 });
            else {
              if (S === 2) {
                let y = 0;
                return i && m ? y = Math.PI / 2 : m && a ? y = Math.PI : a && w && (y = -Math.PI / 2), void this._basicCornerExtraRounded({ x: e, y: t, size: r, rotation: y });
              }
              if (S === 1) {
                let y = 0;
                return m ? y = Math.PI / 2 : a ? y = Math.PI : w && (y = -Math.PI / 2), void this._basicSideRounded({ x: e, y: t, size: r, rotation: y });
              }
            }
            else this._basicDot({ x: e, y: t, size: r, rotation: 0 });
          }
          _drawClassy({ x: e, y: t, size: r, getNeighbor: o }) {
            const i = o ? +o(-1, 0) : 0, a = o ? +o(1, 0) : 0, m = o ? +o(0, -1) : 0, w = o ? +o(0, 1) : 0;
            i + a + m + w !== 0 ? i || m ? a || w ? this._basicSquare({ x: e, y: t, size: r, rotation: 0 }) : this._basicCornerRounded({ x: e, y: t, size: r, rotation: Math.PI / 2 }) : this._basicCornerRounded({ x: e, y: t, size: r, rotation: -Math.PI / 2 }) : this._basicCornersRounded({ x: e, y: t, size: r, rotation: Math.PI / 2 });
          }
          _drawClassyRounded({ x: e, y: t, size: r, getNeighbor: o }) {
            const i = o ? +o(-1, 0) : 0, a = o ? +o(1, 0) : 0, m = o ? +o(0, -1) : 0, w = o ? +o(0, 1) : 0;
            i + a + m + w !== 0 ? i || m ? a || w ? this._basicSquare({ x: e, y: t, size: r, rotation: 0 }) : this._basicCornerExtraRounded({ x: e, y: t, size: r, rotation: Math.PI / 2 }) : this._basicCornerExtraRounded({ x: e, y: t, size: r, rotation: -Math.PI / 2 }) : this._basicCornersRounded({ x: e, y: t, size: r, rotation: Math.PI / 2 });
          }
        }
        const et = { dot: "dot", square: "square", extraRounded: "extra-rounded" }, dt = Object.values(et);
        class it {
          constructor({ svg: e, type: t, window: r }) {
            this._svg = e, this._type = t, this._window = r;
          }
          draw(e, t, r, o) {
            let i;
            switch (this._type) {
              case et.square:
                i = this._drawSquare;
                break;
              case et.extraRounded:
                i = this._drawExtraRounded;
                break;
              default:
                i = this._drawDot;
            }
            i.call(this, { x: e, y: t, size: r, rotation: o });
          }
          _rotateFigure({ x: e, y: t, size: r, rotation: o = 0, draw: i }) {
            var a;
            const m = e + r / 2, w = t + r / 2;
            i(), (a = this._element) === null || a === void 0 || a.setAttribute("transform", `rotate(${180 * o / Math.PI},${m},${w})`);
          }
          _basicDot(e) {
            const { size: t, x: r, y: o } = e, i = t / 7;
            this._rotateFigure(Object.assign(Object.assign({}, e), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("clip-rule", "evenodd"), this._element.setAttribute("d", `M ${r + t / 2} ${o}a ${t / 2} ${t / 2} 0 1 0 0.1 0zm 0 ${i}a ${t / 2 - i} ${t / 2 - i} 0 1 1 -0.1 0Z`);
            } }));
          }
          _basicSquare(e) {
            const { size: t, x: r, y: o } = e, i = t / 7;
            this._rotateFigure(Object.assign(Object.assign({}, e), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("clip-rule", "evenodd"), this._element.setAttribute("d", `M ${r} ${o}v ${t}h ${t}v ` + -t + `zM ${r + i} ${o + i}h ` + (t - 2 * i) + "v " + (t - 2 * i) + "h " + (2 * i - t) + "z");
            } }));
          }
          _basicExtraRounded(e) {
            const { size: t, x: r, y: o } = e, i = t / 7;
            this._rotateFigure(Object.assign(Object.assign({}, e), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("clip-rule", "evenodd"), this._element.setAttribute("d", `M ${r} ${o + 2.5 * i}v ` + 2 * i + `a ${2.5 * i} ${2.5 * i}, 0, 0, 0, ${2.5 * i} ${2.5 * i}h ` + 2 * i + `a ${2.5 * i} ${2.5 * i}, 0, 0, 0, ${2.5 * i} ${2.5 * -i}v ` + -2 * i + `a ${2.5 * i} ${2.5 * i}, 0, 0, 0, ${2.5 * -i} ${2.5 * -i}h ` + -2 * i + `a ${2.5 * i} ${2.5 * i}, 0, 0, 0, ${2.5 * -i} ${2.5 * i}M ${r + 2.5 * i} ${o + i}h ` + 2 * i + `a ${1.5 * i} ${1.5 * i}, 0, 0, 1, ${1.5 * i} ${1.5 * i}v ` + 2 * i + `a ${1.5 * i} ${1.5 * i}, 0, 0, 1, ${1.5 * -i} ${1.5 * i}h ` + -2 * i + `a ${1.5 * i} ${1.5 * i}, 0, 0, 1, ${1.5 * -i} ${1.5 * -i}v ` + -2 * i + `a ${1.5 * i} ${1.5 * i}, 0, 0, 1, ${1.5 * i} ${1.5 * -i}`);
            } }));
          }
          _drawDot({ x: e, y: t, size: r, rotation: o }) {
            this._basicDot({ x: e, y: t, size: r, rotation: o });
          }
          _drawSquare({ x: e, y: t, size: r, rotation: o }) {
            this._basicSquare({ x: e, y: t, size: r, rotation: o });
          }
          _drawExtraRounded({ x: e, y: t, size: r, rotation: o }) {
            this._basicExtraRounded({ x: e, y: t, size: r, rotation: o });
          }
        }
        const J = { dot: "dot", square: "square" }, j = Object.values(J);
        class ot {
          constructor({ svg: e, type: t, window: r }) {
            this._svg = e, this._type = t, this._window = r;
          }
          draw(e, t, r, o) {
            let i;
            i = this._type === J.square ? this._drawSquare : this._drawDot, i.call(this, { x: e, y: t, size: r, rotation: o });
          }
          _rotateFigure({ x: e, y: t, size: r, rotation: o = 0, draw: i }) {
            var a;
            const m = e + r / 2, w = t + r / 2;
            i(), (a = this._element) === null || a === void 0 || a.setAttribute("transform", `rotate(${180 * o / Math.PI},${m},${w})`);
          }
          _basicDot(e) {
            const { size: t, x: r, y: o } = e;
            this._rotateFigure(Object.assign(Object.assign({}, e), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "circle"), this._element.setAttribute("cx", String(r + t / 2)), this._element.setAttribute("cy", String(o + t / 2)), this._element.setAttribute("r", String(t / 2));
            } }));
          }
          _basicSquare(e) {
            const { size: t, x: r, y: o } = e;
            this._rotateFigure(Object.assign(Object.assign({}, e), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect"), this._element.setAttribute("x", String(r)), this._element.setAttribute("y", String(o)), this._element.setAttribute("width", String(t)), this._element.setAttribute("height", String(t));
            } }));
          }
          _drawDot({ x: e, y: t, size: r, rotation: o }) {
            this._basicDot({ x: e, y: t, size: r, rotation: o });
          }
          _drawSquare({ x: e, y: t, size: r, rotation: o }) {
            this._basicSquare({ x: e, y: t, size: r, rotation: o });
          }
        }
        const st = "circle", G = [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1]], V = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
        class at {
          constructor(e, t) {
            this._roundSize = (r) => this._options.dotsOptions.roundSize ? Math.floor(r) : r, this._window = t, this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "svg"), this._element.setAttribute("width", String(e.width)), this._element.setAttribute("height", String(e.height)), this._element.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), e.dotsOptions.roundSize || this._element.setAttribute("shape-rendering", "crispEdges"), this._element.setAttribute("viewBox", `0 0 ${e.width} ${e.height}`), this._defs = this._window.document.createElementNS("http://www.w3.org/2000/svg", "defs"), this._element.appendChild(this._defs), this._imageUri = e.image, this._instanceId = at.instanceCount++, this._options = e;
          }
          get width() {
            return this._options.width;
          }
          get height() {
            return this._options.height;
          }
          getElement() {
            return this._element;
          }
          async drawQR(e) {
            const t = e.getModuleCount(), r = Math.min(this._options.width, this._options.height) - 2 * this._options.margin, o = this._options.shape === st ? r / Math.sqrt(2) : r, i = this._roundSize(o / t);
            let a = { hideXDots: 0, hideYDots: 0, width: 0, height: 0 };
            if (this._qr = e, this._options.image) {
              if (await this.loadImage(), !this._image) return;
              const { imageOptions: m, qrOptions: w } = this._options, S = m.imageSize * mt[w.errorCorrectionLevel], y = Math.floor(S * t * t);
              a = (function({ originalHeight: C, originalWidth: b, maxHiddenDots: O, maxHiddenAxisDots: z, dotSize: M }) {
                const n = { x: 0, y: 0 }, c = { x: 0, y: 0 };
                if (C <= 0 || b <= 0 || O <= 0 || M <= 0) return { height: 0, width: 0, hideYDots: 0, hideXDots: 0 };
                const s = C / b;
                return n.x = Math.floor(Math.sqrt(O / s)), n.x <= 0 && (n.x = 1), z && z < n.x && (n.x = z), n.x % 2 == 0 && n.x--, c.x = n.x * M, n.y = 1 + 2 * Math.ceil((n.x * s - 1) / 2), c.y = Math.round(c.x * s), (n.y * n.x > O || z && z < n.y) && (z && z < n.y ? (n.y = z, n.y % 2 == 0 && n.x--) : n.y -= 2, c.y = n.y * M, n.x = 1 + 2 * Math.ceil((n.y / s - 1) / 2), c.x = Math.round(c.y / s)), { height: c.y, width: c.x, hideYDots: n.y, hideXDots: n.x };
              })({ originalWidth: this._image.width, originalHeight: this._image.height, maxHiddenDots: y, maxHiddenAxisDots: t - 14, dotSize: i });
            }
            this.drawBackground(), this.drawDots(((m, w) => {
              var S, y, C, b, O, z;
              return !(this._options.imageOptions.hideBackgroundDots && m >= (t - a.hideYDots) / 2 && m < (t + a.hideYDots) / 2 && w >= (t - a.hideXDots) / 2 && w < (t + a.hideXDots) / 2 || !((S = G[m]) === null || S === void 0) && S[w] || !((y = G[m - t + 7]) === null || y === void 0) && y[w] || !((C = G[m]) === null || C === void 0) && C[w - t + 7] || !((b = V[m]) === null || b === void 0) && b[w] || !((O = V[m - t + 7]) === null || O === void 0) && O[w] || !((z = V[m]) === null || z === void 0) && z[w - t + 7]);
            })), this.drawCorners(), this._options.image && await this.drawImage({ width: a.width, height: a.height, count: t, dotSize: i });
          }
          drawBackground() {
            var e, t, r;
            const o = this._element, i = this._options;
            if (o) {
              const a = (e = i.backgroundOptions) === null || e === void 0 ? void 0 : e.gradient, m = (t = i.backgroundOptions) === null || t === void 0 ? void 0 : t.color;
              let w = i.height, S = i.width;
              if (a || m) {
                const y = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect");
                this._backgroundClipPath = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._backgroundClipPath.setAttribute("id", `clip-path-background-color-${this._instanceId}`), this._defs.appendChild(this._backgroundClipPath), !((r = i.backgroundOptions) === null || r === void 0) && r.round && (w = S = Math.min(i.width, i.height), y.setAttribute("rx", String(w / 2 * i.backgroundOptions.round))), y.setAttribute("x", String(this._roundSize((i.width - S) / 2))), y.setAttribute("y", String(this._roundSize((i.height - w) / 2))), y.setAttribute("width", String(S)), y.setAttribute("height", String(w)), this._backgroundClipPath.appendChild(y), this._createColor({ options: a, color: m, additionalRotation: 0, x: 0, y: 0, height: i.height, width: i.width, name: `background-color-${this._instanceId}` });
              }
            }
          }
          drawDots(e) {
            var t, r;
            if (!this._qr) throw "QR code is not defined";
            const o = this._options, i = this._qr.getModuleCount();
            if (i > o.width || i > o.height) throw "The canvas is too small.";
            const a = Math.min(o.width, o.height) - 2 * o.margin, m = o.shape === st ? a / Math.sqrt(2) : a, w = this._roundSize(m / i), S = this._roundSize((o.width - i * w) / 2), y = this._roundSize((o.height - i * w) / 2), C = new ct({ svg: this._element, type: o.dotsOptions.type, window: this._window });
            this._dotsClipPath = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._dotsClipPath.setAttribute("id", `clip-path-dot-color-${this._instanceId}`), this._defs.appendChild(this._dotsClipPath), this._createColor({ options: (t = o.dotsOptions) === null || t === void 0 ? void 0 : t.gradient, color: o.dotsOptions.color, additionalRotation: 0, x: 0, y: 0, height: o.height, width: o.width, name: `dot-color-${this._instanceId}` });
            for (let b = 0; b < i; b++) for (let O = 0; O < i; O++) e && !e(b, O) || !((r = this._qr) === null || r === void 0) && r.isDark(b, O) && (C.draw(S + O * w, y + b * w, w, ((z, M) => !(O + z < 0 || b + M < 0 || O + z >= i || b + M >= i) && !(e && !e(b + M, O + z)) && !!this._qr && this._qr.isDark(b + M, O + z))), C._element && this._dotsClipPath && this._dotsClipPath.appendChild(C._element));
            if (o.shape === st) {
              const b = this._roundSize((a / w - i) / 2), O = i + 2 * b, z = S - b * w, M = y - b * w, n = [], c = this._roundSize(O / 2);
              for (let s = 0; s < O; s++) {
                n[s] = [];
                for (let l = 0; l < O; l++) s >= b - 1 && s <= O - b && l >= b - 1 && l <= O - b || Math.sqrt((s - c) * (s - c) + (l - c) * (l - c)) > c ? n[s][l] = 0 : n[s][l] = this._qr.isDark(l - 2 * b < 0 ? l : l >= i ? l - 2 * b : l - b, s - 2 * b < 0 ? s : s >= i ? s - 2 * b : s - b) ? 1 : 0;
              }
              for (let s = 0; s < O; s++) for (let l = 0; l < O; l++) n[s][l] && (C.draw(z + l * w, M + s * w, w, ((g, $) => {
                var D;
                return !!(!((D = n[s + $]) === null || D === void 0) && D[l + g]);
              })), C._element && this._dotsClipPath && this._dotsClipPath.appendChild(C._element));
            }
          }
          drawCorners() {
            if (!this._qr) throw "QR code is not defined";
            const e = this._element, t = this._options;
            if (!e) throw "Element code is not defined";
            const r = this._qr.getModuleCount(), o = Math.min(t.width, t.height) - 2 * t.margin, i = t.shape === st ? o / Math.sqrt(2) : o, a = this._roundSize(i / r), m = 7 * a, w = 3 * a, S = this._roundSize((t.width - r * a) / 2), y = this._roundSize((t.height - r * a) / 2);
            [[0, 0, 0], [1, 0, Math.PI / 2], [0, 1, -Math.PI / 2]].forEach((([C, b, O]) => {
              var z, M, n, c, s, l, g, $, D, q, R, I, U, H;
              const F = S + C * a * (r - 7), N = y + b * a * (r - 7);
              let L = this._dotsClipPath, A = this._dotsClipPath;
              if ((!((z = t.cornersSquareOptions) === null || z === void 0) && z.gradient || !((M = t.cornersSquareOptions) === null || M === void 0) && M.color) && (L = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), L.setAttribute("id", `clip-path-corners-square-color-${C}-${b}-${this._instanceId}`), this._defs.appendChild(L), this._cornersSquareClipPath = this._cornersDotClipPath = A = L, this._createColor({ options: (n = t.cornersSquareOptions) === null || n === void 0 ? void 0 : n.gradient, color: (c = t.cornersSquareOptions) === null || c === void 0 ? void 0 : c.color, additionalRotation: O, x: F, y: N, height: m, width: m, name: `corners-square-color-${C}-${b}-${this._instanceId}` })), ((s = t.cornersSquareOptions) === null || s === void 0 ? void 0 : s.type) && dt.includes(t.cornersSquareOptions.type)) {
                const T = new it({ svg: this._element, type: t.cornersSquareOptions.type, window: this._window });
                T.draw(F, N, m, O), T._element && L && L.appendChild(T._element);
              } else {
                const T = new ct({ svg: this._element, type: ((l = t.cornersSquareOptions) === null || l === void 0 ? void 0 : l.type) || t.dotsOptions.type, window: this._window });
                for (let Y = 0; Y < G.length; Y++) for (let P = 0; P < G[Y].length; P++) !((g = G[Y]) === null || g === void 0) && g[P] && (T.draw(F + P * a, N + Y * a, a, ((Z, W) => {
                  var X;
                  return !!(!((X = G[Y + W]) === null || X === void 0) && X[P + Z]);
                })), T._element && L && L.appendChild(T._element));
              }
              if ((!(($ = t.cornersDotOptions) === null || $ === void 0) && $.gradient || !((D = t.cornersDotOptions) === null || D === void 0) && D.color) && (A = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), A.setAttribute("id", `clip-path-corners-dot-color-${C}-${b}-${this._instanceId}`), this._defs.appendChild(A), this._cornersDotClipPath = A, this._createColor({ options: (q = t.cornersDotOptions) === null || q === void 0 ? void 0 : q.gradient, color: (R = t.cornersDotOptions) === null || R === void 0 ? void 0 : R.color, additionalRotation: O, x: F + 2 * a, y: N + 2 * a, height: w, width: w, name: `corners-dot-color-${C}-${b}-${this._instanceId}` })), ((I = t.cornersDotOptions) === null || I === void 0 ? void 0 : I.type) && j.includes(t.cornersDotOptions.type)) {
                const T = new ot({ svg: this._element, type: t.cornersDotOptions.type, window: this._window });
                T.draw(F + 2 * a, N + 2 * a, w, O), T._element && A && A.appendChild(T._element);
              } else {
                const T = new ct({ svg: this._element, type: ((U = t.cornersDotOptions) === null || U === void 0 ? void 0 : U.type) || t.dotsOptions.type, window: this._window });
                for (let Y = 0; Y < V.length; Y++) for (let P = 0; P < V[Y].length; P++) !((H = V[Y]) === null || H === void 0) && H[P] && (T.draw(F + P * a, N + Y * a, a, ((Z, W) => {
                  var X;
                  return !!(!((X = V[Y + W]) === null || X === void 0) && X[P + Z]);
                })), T._element && A && A.appendChild(T._element));
              }
            }));
          }
          loadImage() {
            return new Promise(((e, t) => {
              var r;
              const o = this._options;
              if (!o.image) return t("Image is not defined");
              if (!((r = o.nodeCanvas) === null || r === void 0) && r.loadImage) o.nodeCanvas.loadImage(o.image).then(((i) => {
                var a, m;
                if (this._image = i, this._options.imageOptions.saveAsBlob) {
                  const w = (a = o.nodeCanvas) === null || a === void 0 ? void 0 : a.createCanvas(this._image.width, this._image.height);
                  (m = w?.getContext("2d")) === null || m === void 0 || m.drawImage(i, 0, 0), this._imageUri = w?.toDataURL();
                }
                e();
              })).catch(t);
              else {
                const i = new this._window.Image();
                typeof o.imageOptions.crossOrigin == "string" && (i.crossOrigin = o.imageOptions.crossOrigin), this._image = i, i.onload = async () => {
                  this._options.imageOptions.saveAsBlob && (this._imageUri = await (async function(a, m) {
                    return new Promise(((w) => {
                      const S = new m.XMLHttpRequest();
                      S.onload = function() {
                        const y = new m.FileReader();
                        y.onloadend = function() {
                          w(y.result);
                        }, y.readAsDataURL(S.response);
                      }, S.open("GET", a), S.responseType = "blob", S.send();
                    }));
                  })(o.image || "", this._window)), e();
                }, i.src = o.image;
              }
            }));
          }
          async drawImage({ width: e, height: t, count: r, dotSize: o }) {
            const i = this._options, a = this._roundSize((i.width - r * o) / 2), m = this._roundSize((i.height - r * o) / 2), w = a + this._roundSize(i.imageOptions.margin + (r * o - e) / 2), S = m + this._roundSize(i.imageOptions.margin + (r * o - t) / 2), y = e - 2 * i.imageOptions.margin, C = t - 2 * i.imageOptions.margin, b = this._window.document.createElementNS("http://www.w3.org/2000/svg", "image");
            b.setAttribute("href", this._imageUri || ""), b.setAttribute("xlink:href", this._imageUri || ""), b.setAttribute("x", String(w)), b.setAttribute("y", String(S)), b.setAttribute("width", `${y}px`), b.setAttribute("height", `${C}px`), this._element.appendChild(b);
          }
          _createColor({ options: e, color: t, additionalRotation: r, x: o, y: i, height: a, width: m, name: w }) {
            const S = m > a ? m : a, y = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect");
            if (y.setAttribute("x", String(o)), y.setAttribute("y", String(i)), y.setAttribute("height", String(a)), y.setAttribute("width", String(m)), y.setAttribute("clip-path", `url('#clip-path-${w}')`), e) {
              let C;
              if (e.type === "radial") C = this._window.document.createElementNS("http://www.w3.org/2000/svg", "radialGradient"), C.setAttribute("id", w), C.setAttribute("gradientUnits", "userSpaceOnUse"), C.setAttribute("fx", String(o + m / 2)), C.setAttribute("fy", String(i + a / 2)), C.setAttribute("cx", String(o + m / 2)), C.setAttribute("cy", String(i + a / 2)), C.setAttribute("r", String(S / 2));
              else {
                const b = ((e.rotation || 0) + r) % (2 * Math.PI), O = (b + 2 * Math.PI) % (2 * Math.PI);
                let z = o + m / 2, M = i + a / 2, n = o + m / 2, c = i + a / 2;
                O >= 0 && O <= 0.25 * Math.PI || O > 1.75 * Math.PI && O <= 2 * Math.PI ? (z -= m / 2, M -= a / 2 * Math.tan(b), n += m / 2, c += a / 2 * Math.tan(b)) : O > 0.25 * Math.PI && O <= 0.75 * Math.PI ? (M -= a / 2, z -= m / 2 / Math.tan(b), c += a / 2, n += m / 2 / Math.tan(b)) : O > 0.75 * Math.PI && O <= 1.25 * Math.PI ? (z += m / 2, M += a / 2 * Math.tan(b), n -= m / 2, c -= a / 2 * Math.tan(b)) : O > 1.25 * Math.PI && O <= 1.75 * Math.PI && (M += a / 2, z += m / 2 / Math.tan(b), c -= a / 2, n -= m / 2 / Math.tan(b)), C = this._window.document.createElementNS("http://www.w3.org/2000/svg", "linearGradient"), C.setAttribute("id", w), C.setAttribute("gradientUnits", "userSpaceOnUse"), C.setAttribute("x1", String(Math.round(z))), C.setAttribute("y1", String(Math.round(M))), C.setAttribute("x2", String(Math.round(n))), C.setAttribute("y2", String(Math.round(c)));
              }
              e.colorStops.forEach((({ offset: b, color: O }) => {
                const z = this._window.document.createElementNS("http://www.w3.org/2000/svg", "stop");
                z.setAttribute("offset", 100 * b + "%"), z.setAttribute("stop-color", O), C.appendChild(z);
              })), y.setAttribute("fill", `url('#${w}')`), this._defs.appendChild(C);
            } else t && y.setAttribute("fill", t);
            this._element.appendChild(y);
          }
        }
        at.instanceCount = 0;
        const vt = at, lt = "canvas", yt = {};
        for (let d = 0; d <= 40; d++) yt[d] = d;
        const _t = { type: lt, shape: "square", width: 300, height: 300, data: "", margin: 0, qrOptions: { typeNumber: yt[0], mode: void 0, errorCorrectionLevel: "Q" }, imageOptions: { saveAsBlob: !0, hideBackgroundDots: !0, imageSize: 0.4, crossOrigin: void 0, margin: 0 }, dotsOptions: { type: "square", color: "#000", roundSize: !0 }, backgroundOptions: { round: 0, color: "#fff" } };
        function ut(d) {
          const e = Object.assign({}, d);
          if (!e.colorStops || !e.colorStops.length) throw "Field 'colorStops' is required in gradient";
          return e.rotation ? e.rotation = Number(e.rotation) : e.rotation = 0, e.colorStops = e.colorStops.map(((t) => Object.assign(Object.assign({}, t), { offset: Number(t.offset) }))), e;
        }
        function bt(d) {
          const e = Object.assign({}, d);
          return e.width = Number(e.width), e.height = Number(e.height), e.margin = Number(e.margin), e.imageOptions = Object.assign(Object.assign({}, e.imageOptions), { hideBackgroundDots: !!e.imageOptions.hideBackgroundDots, imageSize: Number(e.imageOptions.imageSize), margin: Number(e.imageOptions.margin) }), e.margin > Math.min(e.width, e.height) && (e.margin = Math.min(e.width, e.height)), e.dotsOptions = Object.assign({}, e.dotsOptions), e.dotsOptions.gradient && (e.dotsOptions.gradient = ut(e.dotsOptions.gradient)), e.cornersSquareOptions && (e.cornersSquareOptions = Object.assign({}, e.cornersSquareOptions), e.cornersSquareOptions.gradient && (e.cornersSquareOptions.gradient = ut(e.cornersSquareOptions.gradient))), e.cornersDotOptions && (e.cornersDotOptions = Object.assign({}, e.cornersDotOptions), e.cornersDotOptions.gradient && (e.cornersDotOptions.gradient = ut(e.cornersDotOptions.gradient))), e.backgroundOptions && (e.backgroundOptions = Object.assign({}, e.backgroundOptions), e.backgroundOptions.gradient && (e.backgroundOptions.gradient = ut(e.backgroundOptions.gradient))), e;
        }
        var xt = _(873), Et = _.n(xt);
        function gt(d) {
          if (!d) throw new Error("Extension must be defined");
          d[0] === "." && (d = d.substring(1));
          const e = { bmp: "image/bmp", gif: "image/gif", ico: "image/vnd.microsoft.icon", jpeg: "image/jpeg", jpg: "image/jpeg", png: "image/png", svg: "image/svg+xml", tif: "image/tiff", tiff: "image/tiff", webp: "image/webp", pdf: "application/pdf" }[d.toLowerCase()];
          if (!e) throw new Error(`Extension "${d}" is not supported`);
          return e;
        }
        class f {
          constructor(e) {
            e?.jsdom ? this._window = new e.jsdom("", { resources: "usable" }).window : this._window = window, this._options = e ? bt(B(_t, e)) : _t, this.update();
          }
          static _clearContainer(e) {
            e && (e.innerHTML = "");
          }
          _setupSvg() {
            if (!this._qr) return;
            const e = new vt(this._options, this._window);
            this._svg = e.getElement(), this._svgDrawingPromise = e.drawQR(this._qr).then((() => {
              var t;
              this._svg && ((t = this._extension) === null || t === void 0 || t.call(this, e.getElement(), this._options));
            }));
          }
          _setupCanvas() {
            var e, t;
            this._qr && (!((e = this._options.nodeCanvas) === null || e === void 0) && e.createCanvas ? (this._nodeCanvas = this._options.nodeCanvas.createCanvas(this._options.width, this._options.height), this._nodeCanvas.width = this._options.width, this._nodeCanvas.height = this._options.height) : (this._domCanvas = document.createElement("canvas"), this._domCanvas.width = this._options.width, this._domCanvas.height = this._options.height), this._setupSvg(), this._canvasDrawingPromise = (t = this._svgDrawingPromise) === null || t === void 0 ? void 0 : t.then((() => {
              var r;
              if (!this._svg) return;
              const o = this._svg, i = new this._window.XMLSerializer().serializeToString(o), a = btoa(i), m = `data:${gt("svg")};base64,${a}`;
              if (!((r = this._options.nodeCanvas) === null || r === void 0) && r.loadImage) return this._options.nodeCanvas.loadImage(m).then(((w) => {
                var S, y;
                w.width = this._options.width, w.height = this._options.height, (y = (S = this._nodeCanvas) === null || S === void 0 ? void 0 : S.getContext("2d")) === null || y === void 0 || y.drawImage(w, 0, 0);
              }));
              {
                const w = new this._window.Image();
                return new Promise(((S) => {
                  w.onload = () => {
                    var y, C;
                    (C = (y = this._domCanvas) === null || y === void 0 ? void 0 : y.getContext("2d")) === null || C === void 0 || C.drawImage(w, 0, 0), S();
                  }, w.src = m;
                }));
              }
            })));
          }
          async _getElement(e = "png") {
            if (!this._qr) throw "QR code is empty";
            return e.toLowerCase() === "svg" ? (this._svg && this._svgDrawingPromise || this._setupSvg(), await this._svgDrawingPromise, this._svg) : ((this._domCanvas || this._nodeCanvas) && this._canvasDrawingPromise || this._setupCanvas(), await this._canvasDrawingPromise, this._domCanvas || this._nodeCanvas);
          }
          update(e) {
            f._clearContainer(this._container), this._options = e ? bt(B(this._options, e)) : this._options, this._options.data && (this._qr = Et()(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || (function(t) {
              switch (!0) {
                case /^[0-9]*$/.test(t):
                  return "Numeric";
                case /^[0-9A-Z $%*+\-./:]*$/.test(t):
                  return "Alphanumeric";
                default:
                  return "Byte";
              }
            })(this._options.data)), this._qr.make(), this._options.type === lt ? this._setupCanvas() : this._setupSvg(), this.append(this._container));
          }
          append(e) {
            if (e) {
              if (typeof e.appendChild != "function") throw "Container should be a single DOM node";
              this._options.type === lt ? this._domCanvas && e.appendChild(this._domCanvas) : this._svg && e.appendChild(this._svg), this._container = e;
            }
          }
          applyExtension(e) {
            if (!e) throw "Extension function should be defined.";
            this._extension = e, this.update();
          }
          deleteExtension() {
            this._extension = void 0, this.update();
          }
          async getRawData(e = "png") {
            if (!this._qr) throw "QR code is empty";
            const t = await this._getElement(e), r = gt(e);
            if (!t) return null;
            if (e.toLowerCase() === "svg") {
              const o = `<?xml version="1.0" standalone="no"?>\r
${new this._window.XMLSerializer().serializeToString(t)}`;
              return typeof Blob > "u" || this._options.jsdom ? Buffer.from(o) : new Blob([o], { type: r });
            }
            return new Promise(((o) => {
              const i = t;
              if ("toBuffer" in i) if (r === "image/png") o(i.toBuffer(r));
              else if (r === "image/jpeg") o(i.toBuffer(r));
              else {
                if (r !== "application/pdf") throw Error("Unsupported extension");
                o(i.toBuffer(r));
              }
              else "toBlob" in i && i.toBlob(o, r, 1);
            }));
          }
          async download(e) {
            if (!this._qr) throw "QR code is empty";
            if (typeof Blob > "u") throw "Cannot download in Node.js, call getRawData instead.";
            let t = "png", r = "qr";
            typeof e == "string" ? (t = e, console.warn("Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument")) : typeof e == "object" && e !== null && (e.name && (r = e.name), e.extension && (t = e.extension));
            const o = await this._getElement(t);
            if (o) if (t.toLowerCase() === "svg") {
              let i = new XMLSerializer().serializeToString(o);
              i = `<?xml version="1.0" standalone="no"?>\r
` + i, Q(`data:${gt(t)};charset=utf-8,${encodeURIComponent(i)}`, `${r}.svg`);
            } else Q(o.toDataURL(gt(t)), `${r}.${t}`);
          }
        }
        const u = f;
      })(), E.default;
    })()));
  })(kt)), kt.exports;
}
var de = ae();
const he = /* @__PURE__ */ ne(de), Ct = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='378'%20height='352'%20fill='none'%20viewBox='0%200%20378%20352'%3e%3crect%20width='164'%20height='129'%20fill='url(%23a)'%20rx='8'/%3e%3crect%20width='164'%20height='129'%20x='214'%20y='117'%20fill='url(%23b)'%20rx='8'/%3e%3crect%20width='164'%20height='129'%20y='223'%20fill='url(%23c)'%20rx='4'/%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='-2.497'%20x2='226.093'%20y1='10.071'%20y2='107.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23a076d4'/%3e%3cstop%20offset='1'%20stop-color='%2358cfbd'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='211.503'%20x2='440.093'%20y1='127.071'%20y2='224.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23a076d4'/%3e%3cstop%20offset='1'%20stop-color='%2358cfbd'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='-2.497'%20x2='226.093'%20y1='233.071'%20y2='330.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23a076d4'/%3e%3cstop%20offset='1'%20stop-color='%2358cfbd'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", Lt = "data:image/svg+xml,%3csvg%20width='96'%20height='96'%20viewBox='0%200%2096%2096'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M48%2095C73.9574%2095%2095%2073.9574%2095%2048C95%2022.0426%2073.9574%201%2048%201C22.0426%201%201%2022.0426%201%2048C1%2073.9574%2022.0426%2095%2048%2095Z'%20fill='%230B53BF'/%3e%3cpath%20d='M56.4609%2013.7778V19.8291C68.5341%2023.4716%2077.3759%2034.6928%2077.3759%2047.9997C77.3759%2061.3066%2068.5341%2072.5278%2056.4609%2076.1703V82.2216C71.8534%2078.4616%2083.2509%2064.5672%2083.2509%2047.9997C83.2509%2031.4322%2071.8534%2017.5378%2056.4609%2013.7778Z'%20fill='white'/%3e%3cpath%20d='M18.625%2047.9997C18.625%2034.6928%2027.4669%2023.4716%2039.54%2019.8291V13.7778C24.1475%2017.5378%2012.75%2031.4322%2012.75%2047.9997C12.75%2064.5672%2024.1475%2078.4616%2039.54%2082.2216V76.1703C27.4669%2072.5572%2018.625%2061.3066%2018.625%2047.9997Z'%20fill='white'/%3e%3cpath%20d='M60.6319%2054.5506C60.6319%2042.5362%2041.8025%2047.4713%2041.8025%2040.8325C41.8025%2038.4531%2043.7119%2036.9256%2047.3544%2036.9256C51.7019%2036.9256%2053.2%2039.0406%2053.67%2041.89H59.6625C59.1279%2036.5426%2056.0588%2033.1662%2050.9382%2032.1604V27.4375H45.0632V31.9918C39.4534%2032.7062%2035.9275%2035.973%2035.9275%2040.8325C35.9275%2052.9056%2054.7863%2048.3819%2054.7863%2054.9031C54.7863%2057.3706%2052.4069%2059.0156%2048.3825%2059.0156C43.1244%2059.0156%2041.3913%2056.695%2040.745%2053.4931H34.8994C35.2781%2059.3502%2038.8897%2063.0159%2045.0632%2063.9307V68.5625H50.9382V63.9923C56.9633%2063.2139%2060.6319%2059.7089%2060.6319%2054.5506Z'%20fill='white'/%3e%3c/svg%3e";
var ce = Object.defineProperty, le = Object.getOwnPropertyDescriptor, rt = (x, h, p, v) => {
  for (var _ = v > 1 ? void 0 : v ? le(h, p) : h, E = x.length - 1, k; E >= 0; E--)
    (k = x[E]) && (_ = (v ? k(h, p, _) : k(_)) || _);
  return v && _ && ce(h, p, _), _;
};
let K = class extends Qt {
  constructor() {
    super(...arguments), this.wallet = "", this.amount = 0, this.useDialog = !0, this.qrCodeData = "", this.qrUrl = "", this.yid = "", this.confirmed = !1, this.isMobile = !1, this.connected = !1, this.amountError = "", this.dialogOpen = !1, this.hasInitialized = !1, this.handleKeyDown = (h) => {
      h.key === "Escape" && this.dialogOpen && (this.dialogOpen = !1);
    };
  }
  isMobileDevice() {
    return /android|iphone|ipad|ipod/i.test(navigator.userAgent);
  }
  validateAmount() {
    return /^\d+(\.\d{1,2})?$/.test(this.amount.toString()) ? this.amount > 9999.99 ? (this.amountError = "Amount cannot exceed $9,999.99", !1) : this.amount < 0.01 ? (this.amountError = "Amount must at least $0.01", !1) : (this.amountError = "", !0) : (this.amountError = "Amount must have no more than two decimal places", !1);
  }
  async firstUpdated() {
    if (this.isMobile = this.isMobileDevice(), !this.validateAmount()) {
      console.error("yatori-checkout --> Amount must be between 9999.99 and 0.01 & must only have two decimal places for USD format!");
      return;
    }
    await this.generateQRCode(), this.hasInitialized = !0, document.addEventListener("keydown", this.handleKeyDown);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("keydown", this.handleKeyDown);
  }
  // Watch for amount changes AFTER initial render
  updated(h) {
    this.hasInitialized && h.has("amount") && (this.validateAmount() ? this.amountError === "" && this.generateQRCode() : (this.connected = !1, this.confirmed = !1));
  }
  async generateQRCode() {
    const h = () => {
      const k = Date.now().toString().slice(-4), B = Math.random().toString(36).substring(2, 6);
      return `${k}${B}`;
    };
    this.yid = h(), console.log("YID:", this.yid);
    const p = {
      token: "usdcBasic",
      to: this.wallet,
      amount: this.amount,
      yid: this.yid
    };
    this.qrUrl = `https://yatori.io/mobile/yatoriRequest?token=${p.token}&to=${p.to}&amount=${p.amount}&yid=${p.yid}`;
    const v = {
      width: 140,
      height: 140,
      data: this.qrUrl,
      margin: 0,
      dotsOptions: {
        color: "#000000",
        type: "dots"
      },
      backgroundOptions: {
        color: "#ffffff"
      },
      imageOptions: {
        margin: 0
      },
      cornersSquareOptions: {
        type: "extra-rounded"
      },
      cornersDotOptions: {
        type: "rounded"
      }
    }, E = await new he(v).getRawData("png");
    if (E) {
      const k = new FileReader();
      k.onloadend = () => {
        this.qrCodeData = k.result;
      }, k.readAsDataURL(E);
    }
    this.setupYatoriWebSocket(this.wallet, this.yid);
  }
  setupYatoriWebSocket(h, p) {
    const v = "wss://zanshin.fly.dev/confirmed", _ = new WebSocket(v);
    _.addEventListener("open", () => {
      this.connected = !0;
      const E = { address: h, yid: p };
      _.send(JSON.stringify(E));
    }), _.addEventListener("message", (E) => {
      const k = JSON.parse(E.data);
      if (k.status === "confirmed") {
        this.dispatchEvent(
          new CustomEvent("yatori-confirmed", {
            detail: {
              signature: k.signature,
              status: k.status,
              confirmed: !0
            },
            bubbles: !0,
            composed: !0
          })
        );
        const B = this.renderRoot.querySelector(".qr-wrapper");
        B && B.classList.add("fade-out"), setTimeout(() => {
          this.confirmed = !0, this.dialogOpen && (this.dialogOpen = !1), setTimeout(() => {
            this.dispatchEvent(
              new CustomEvent("yatori-animation-complete", {
                detail: {
                  signature: k.signature,
                  status: k.status
                },
                bubbles: !0,
                composed: !0
              })
            );
          }, 5e3);
        }, 500);
      }
    }), _.addEventListener("error", (E) => {
      console.error("WebSocket error:", E), this.connected = !1;
    }), _.addEventListener("close", () => {
      console.log("Disconnected from proxy"), this.connected = !1;
    });
  }
  render() {
    return this.amountError ? tt`
        <div class="error-container">
          <svg class="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <circle cx="12" cy="16" r="0.5" fill="currentColor"></circle>
          </svg>
          <div class="error-message">${this.amountError}</div>
          <div class="error-details">
            Please adjust the payment amount to continue.
          </div>
        </div>
      ` : tt`
      ${!this.connected && !this.confirmed ? tt`<div class="spinner"></div>` : this.confirmed ? tt`
            <div class="confirmed">
              <svg viewBox="0 0 100 100" style="shape-rendering: geometricPrecision;">
                <defs>
                  <linearGradient id="checkmark-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#977DCD;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#7DB6C1;stop-opacity:1" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="40" fill="none" stroke="url(#checkmark-gradient)" stroke-width="4.5" class="animate-draw-circle"/>
                <path d="M 30 50 L 45 65 L 75 30" fill="none" stroke="url(#checkmark-gradient)" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" class="checkmark-path" style="stroke-dasharray: 55; stroke-dashoffset: 55;"/>
              </svg>
              <div class="confirmed-text">Payment Complete</div>
            </div>
          ` : tt`
            ${this.isMobile ? tt`
                  <button
                    class="deeplink-btn"
                    @click=${() => window.location.href = this.qrUrl}
                  >
                    <img src="${Ct}" alt="Yatori Logo" />
                    YATORI PAY
                  </button>
                ` : this.useDialog ? tt`
                    <button
                      class="deeplink-btn"
                      @click=${() => this.dialogOpen = !0}
                    >
                      <img src="${Ct}" alt="Yatori Logo" />
                      YATORI PAY
                    </button>
                    ${this.dialogOpen ? tt`
                      <div class="dialog-overlay" @click=${(h) => {
      h.target === h.currentTarget && (this.dialogOpen = !1);
    }}>
                        <div class="dialog-content">
                          <div class="qr-wrapper">
                            <div class="qr-header">
                              <img src="${Ct}" alt="Yatori Logo" />
                              YATORI PAY
                            </div>
                            ${this.qrCodeData ? tt`<img src="${this.qrCodeData}" alt="Yatori QR Code" />` : tt`<p>Loading QR…</p>`}
                            <div class="qr-details">
                              <div class="qr-amount">
                                $${this.amount}
                                <img src="${Lt}" alt="USDC" />
                              </div>
                              <div class="qr-wallet">${this.wallet.slice(0, 4)}...${this.wallet.slice(-4)}</div>
                            </div>
                          </div>
                          <button
                            class="dialog-close-btn"
                            @click=${() => this.dialogOpen = !1}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    ` : ""}
                  ` : tt`
                  <div class="qr-wrapper">
                    <div class="qr-header">
                      <img src="${Ct}" alt="Yatori Logo" />
                      YATORI PAY
                    </div>
                    ${this.qrCodeData ? tt`<img src="${this.qrCodeData}" alt="Yatori QR Code" />` : tt`<p>Loading QR…</p>`}
                    <div class="qr-details">
                      <div class="qr-amount">
                        $${this.amount}
                        <img src="${Lt}" alt="USDC" />
                      </div>
                      <div class="qr-wallet">${this.wallet.slice(0, 4)}...${this.wallet.slice(-4)}</div>
                    </div>
                  </div>
                `}
          `}
    `;
  }
};
K.styles = Ft`
  :host {
    display: flex-column;
    padding: 0;
    text-align: center;
    font-family: sans-serif;
    box-sizing: border-box;
    color: inherit;
  }

  :host > div {
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 12px auto;
  }

  .qr-wrapper {
    opacity: 1;
    transition: opacity 0.5s ease;
    background: #ffffff;
    border-radius: 16px;
    padding: 10px;
    display: inline-block;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
  }

  .qr-wrapper img {
    margin: 0;
    display: block;
  }

  .qr-header {
    font-weight: bold;
    letter-spacing: 0.15em;
    font-size: 10px;
    color: #1c1c1c;
    margin-bottom: 6px;
    margin-top: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    background: #ffffff;
  }

  .qr-header img {
    width: 14px;
    height: 14px;
    margin: 0;
  }

  .qr-details {
    margin-top: 6px;
    margin-bottom: 0;
    font-size: 9px;
    color: #4a5568;
    text-align: center;
    line-height: 1.3;
    background: #ffffff;
  }

  .qr-amount {
    font-weight: 600;
    color: #1c1c1c;
    margin-bottom: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    line-height: 1;
  }

  .qr-amount img {
    width: 12px;
    height: 12px;
    margin: 0;
    display: block;
    flex-shrink: 0;
  }

  .qr-wallet {
    font-size: 8px;
    color:rgb(91, 93, 97);
  }

  .qr-wrapper.fade-out {
    opacity: 0;
  }

  .confirmed {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border-radius: 16px;
    padding: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    min-width: 160px;
    min-height: 180px;
    gap: 12px;
  }

  .confirmed svg {
    width: 48px;
    height: 48px;
  }

  .confirmed-text {
    font-size: 12px;
    background: linear-gradient(to bottom right, #977DCD, #7DB6C1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 600;
  }

  @keyframes draw-circle {
    0% {
      stroke-dasharray: 251 251;
      stroke-dashoffset: 251;
      opacity: 1;
    }
    100% {
      stroke-dasharray: 251 251;
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }

  @keyframes draw-check {
    0% {
      stroke-dashoffset: 55;
      opacity: 0;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }

  .animate-draw-circle {
    stroke-dasharray: 251 251;
    stroke-dashoffset: 251;
    animation: draw-circle 0.8s ease-out forwards;
    transform-origin: center;
    will-change: stroke-dashoffset;
  }

  .checkmark-path {
    stroke-dasharray: 55;
    stroke-dashoffset: 55;
    opacity: 0;
    animation: draw-check 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards;
    transform-origin: center;
    will-change: stroke-dashoffset, opacity;
  }

  .spinner {
    margin: 24px auto;
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

.deeplink-btn {
  background: white;
  color: #1c1c1c;
  border: 1px solid #000000;
  border-radius: 9999px;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  letter-spacing: 0.15em;
  padding: 12px 20px;
  min-width: 200px;
  width: auto;
  cursor: pointer;
  transition: all 0.25s ease;
  margin-top: 16px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: nowrap;
  white-space: nowrap;
}

.deeplink-btn img {
  width: 18px;
  height: 18px;
  margin: 0;
}

.deeplink-btn:hover {
  opacity: 0.9;
}

.deeplink-btn:active {
  background: white;
}

.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.dialog-content {
  background: white;
  border-radius: 20px;
  padding: 24px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
  position: relative;
  animation: slideUp 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.dialog-close-btn {
  background: #1c1c1c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 24px;
  cursor: pointer;
  margin-top: 16px;
  width: 100%;
  transition: background 0.2s ease;
}

.dialog-close-btn:hover {
  background: #333333;
}

.dialog-close-btn:active {
  background: #1c1c1c;
}

.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 12px;
}

.error-icon {
  width: 48px;
  height: 48px;
  color: #ef4444;
}

.error-message {
  color: #ef4444;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}

.error-details {
  color: #6b7280;
  font-size: 14px;
  text-align: center;
  max-width: 280px;
}
  `;
rt([
  Mt({ type: String })
], K.prototype, "wallet", 2);
rt([
  Mt({ type: Number })
], K.prototype, "amount", 2);
rt([
  Mt({ type: Boolean })
], K.prototype, "useDialog", 2);
rt([
  ht()
], K.prototype, "qrCodeData", 2);
rt([
  ht()
], K.prototype, "qrUrl", 2);
rt([
  ht()
], K.prototype, "yid", 2);
rt([
  ht()
], K.prototype, "confirmed", 2);
rt([
  ht()
], K.prototype, "isMobile", 2);
rt([
  ht()
], K.prototype, "connected", 2);
rt([
  ht()
], K.prototype, "amountError", 2);
rt([
  ht()
], K.prototype, "dialogOpen", 2);
K = rt([
  Yt("yatori-checkout")
], K);
const we = ({
  wallet: x,
  amount: h,
  onYatoriConfirmed: p,
  onYatoriAnimationComplete: v
}) => {
  const _ = Nt(null);
  return Tt(() => {
    const E = _.current;
    if (E)
      return p && E.addEventListener("yatori-confirmed", p), v && E.addEventListener("yatori-animation-complete", v), () => {
        p && E.removeEventListener("yatori-confirmed", p), v && E.removeEventListener("yatori-animation-complete", v);
      };
  }, [p, v]), Ut.createElement("yatori-checkout", {
    ref: _,
    wallet: x,
    amount: h
  });
};
export {
  we as YatoriCheckout
};
