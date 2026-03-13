import Lt, { useRef as Ut, useEffect as Tt } from "react";
import { css as Nt, LitElement as Ft, html as Q } from "lit";
const Qt = (x) => (d, u) => {
  u !== void 0 ? u.addInitializer((() => {
    customElements.define(x, d);
  })) : customElements.define(x, d);
};
const Ct = globalThis, Dt = Ct.ShadowRoot && (Ct.ShadyCSS === void 0 || Ct.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, jt = /* @__PURE__ */ Symbol(), zt = /* @__PURE__ */ new WeakMap();
let Wt = class {
  constructor(d, u, v) {
    if (this._$cssResult$ = !0, v !== jt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = d, this.t = u;
  }
  get styleSheet() {
    let d = this.o;
    const u = this.t;
    if (Dt && d === void 0) {
      const v = u !== void 0 && u.length === 1;
      v && (d = zt.get(u)), d === void 0 && ((this.o = d = new CSSStyleSheet()).replaceSync(this.cssText), v && zt.set(u, d));
    }
    return d;
  }
  toString() {
    return this.cssText;
  }
};
const Ht = (x) => new Wt(typeof x == "string" ? x : x + "", void 0, jt), Yt = (x, d) => {
  if (Dt) x.adoptedStyleSheets = d.map(((u) => u instanceof CSSStyleSheet ? u : u.styleSheet));
  else for (const u of d) {
    const v = document.createElement("style"), _ = Ct.litNonce;
    _ !== void 0 && v.setAttribute("nonce", _), v.textContent = u.cssText, x.appendChild(v);
  }
}, qt = Dt ? (x) => x : (x) => x instanceof CSSStyleSheet ? ((d) => {
  let u = "";
  for (const v of d.cssRules) u += v.cssText;
  return Ht(u);
})(x) : x;
const { is: Gt, defineProperty: Xt, getOwnPropertyDescriptor: Kt, getOwnPropertyNames: Jt, getOwnPropertySymbols: Zt, getPrototypeOf: Vt } = Object, Ot = globalThis, It = Ot.trustedTypes, te = It ? It.emptyScript : "", ee = Ot.reactiveElementPolyfillSupport, wt = (x, d) => x, kt = { toAttribute(x, d) {
  switch (d) {
    case Boolean:
      x = x ? te : null;
      break;
    case Object:
    case Array:
      x = x == null ? x : JSON.stringify(x);
  }
  return x;
}, fromAttribute(x, d) {
  let u = x;
  switch (d) {
    case Boolean:
      u = x !== null;
      break;
    case Number:
      u = x === null ? null : Number(x);
      break;
    case Object:
    case Array:
      try {
        u = JSON.parse(x);
      } catch {
        u = null;
      }
  }
  return u;
} }, Pt = (x, d) => !Gt(x, d), Bt = { attribute: !0, type: String, converter: kt, reflect: !1, hasChanged: Pt };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), Ot.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
class pt extends HTMLElement {
  static addInitializer(d) {
    this._$Ei(), (this.l ??= []).push(d);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(d, u = Bt) {
    if (u.state && (u.attribute = !1), this._$Ei(), this.elementProperties.set(d, u), !u.noAccessor) {
      const v = /* @__PURE__ */ Symbol(), _ = this.getPropertyDescriptor(d, v, u);
      _ !== void 0 && Xt(this.prototype, d, _);
    }
  }
  static getPropertyDescriptor(d, u, v) {
    const { get: _, set: E } = Kt(this.prototype, d) ?? { get() {
      return this[u];
    }, set(k) {
      this[u] = k;
    } };
    return { get() {
      return _?.call(this);
    }, set(k) {
      const I = _?.call(this);
      E.call(this, k), this.requestUpdate(d, I, v);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(d) {
    return this.elementProperties.get(d) ?? Bt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(wt("elementProperties"))) return;
    const d = Vt(this);
    d.finalize(), d.l !== void 0 && (this.l = [...d.l]), this.elementProperties = new Map(d.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(wt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(wt("properties"))) {
      const u = this.properties, v = [...Jt(u), ...Zt(u)];
      for (const _ of v) this.createProperty(_, u[_]);
    }
    const d = this[Symbol.metadata];
    if (d !== null) {
      const u = litPropertyMetadata.get(d);
      if (u !== void 0) for (const [v, _] of u) this.elementProperties.set(v, _);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [u, v] of this.elementProperties) {
      const _ = this._$Eu(u, v);
      _ !== void 0 && this._$Eh.set(_, u);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(d) {
    const u = [];
    if (Array.isArray(d)) {
      const v = new Set(d.flat(1 / 0).reverse());
      for (const _ of v) u.unshift(qt(_));
    } else d !== void 0 && u.push(qt(d));
    return u;
  }
  static _$Eu(d, u) {
    const v = u.attribute;
    return v === !1 ? void 0 : typeof v == "string" ? v : typeof d == "string" ? d.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise(((d) => this.enableUpdating = d)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(((d) => d(this)));
  }
  addController(d) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(d), this.renderRoot !== void 0 && this.isConnected && d.hostConnected?.();
  }
  removeController(d) {
    this._$EO?.delete(d);
  }
  _$E_() {
    const d = /* @__PURE__ */ new Map(), u = this.constructor.elementProperties;
    for (const v of u.keys()) this.hasOwnProperty(v) && (d.set(v, this[v]), delete this[v]);
    d.size > 0 && (this._$Ep = d);
  }
  createRenderRoot() {
    const d = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Yt(d, this.constructor.elementStyles), d;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((d) => d.hostConnected?.()));
  }
  enableUpdating(d) {
  }
  disconnectedCallback() {
    this._$EO?.forEach(((d) => d.hostDisconnected?.()));
  }
  attributeChangedCallback(d, u, v) {
    this._$AK(d, v);
  }
  _$EC(d, u) {
    const v = this.constructor.elementProperties.get(d), _ = this.constructor._$Eu(d, v);
    if (_ !== void 0 && v.reflect === !0) {
      const E = (v.converter?.toAttribute !== void 0 ? v.converter : kt).toAttribute(u, v.type);
      this._$Em = d, E == null ? this.removeAttribute(_) : this.setAttribute(_, E), this._$Em = null;
    }
  }
  _$AK(d, u) {
    const v = this.constructor, _ = v._$Eh.get(d);
    if (_ !== void 0 && this._$Em !== _) {
      const E = v.getPropertyOptions(_), k = typeof E.converter == "function" ? { fromAttribute: E.converter } : E.converter?.fromAttribute !== void 0 ? E.converter : kt;
      this._$Em = _, this[_] = k.fromAttribute(u, E.type), this._$Em = null;
    }
  }
  requestUpdate(d, u, v) {
    if (d !== void 0) {
      if (v ??= this.constructor.getPropertyOptions(d), !(v.hasChanged ?? Pt)(this[d], u)) return;
      this.P(d, u, v);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(d, u, v) {
    this._$AL.has(d) || this._$AL.set(d, u), v.reflect === !0 && this._$Em !== d && (this._$Ej ??= /* @__PURE__ */ new Set()).add(d);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (u) {
      Promise.reject(u);
    }
    const d = this.scheduleUpdate();
    return d != null && await d, !this.isUpdatePending;
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
    let d = !1;
    const u = this._$AL;
    try {
      d = this.shouldUpdate(u), d ? (this.willUpdate(u), this._$EO?.forEach(((v) => v.hostUpdate?.())), this.update(u)) : this._$EU();
    } catch (v) {
      throw d = !1, this._$EU(), v;
    }
    d && this._$AE(u);
  }
  willUpdate(d) {
  }
  _$AE(d) {
    this._$EO?.forEach(((u) => u.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(d)), this.updated(d);
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
  shouldUpdate(d) {
    return !0;
  }
  update(d) {
    this._$Ej &&= this._$Ej.forEach(((u) => this._$EC(u, this[u]))), this._$EU();
  }
  updated(d) {
  }
  firstUpdated(d) {
  }
}
pt.elementStyles = [], pt.shadowRootOptions = { mode: "open" }, pt[wt("elementProperties")] = /* @__PURE__ */ new Map(), pt[wt("finalized")] = /* @__PURE__ */ new Map(), ee?.({ ReactiveElement: pt }), (Ot.reactiveElementVersions ??= []).push("2.0.4");
const ie = { attribute: !0, type: String, converter: kt, reflect: !1, hasChanged: Pt }, re = (x = ie, d, u) => {
  const { kind: v, metadata: _ } = u;
  let E = globalThis.litPropertyMetadata.get(_);
  if (E === void 0 && globalThis.litPropertyMetadata.set(_, E = /* @__PURE__ */ new Map()), E.set(u.name, x), v === "accessor") {
    const { name: k } = u;
    return { set(I) {
      const W = d.get.call(this);
      d.set.call(this, I), this.requestUpdate(k, W, x);
    }, init(I) {
      return I !== void 0 && this.P(k, void 0, x), I;
    } };
  }
  if (v === "setter") {
    const { name: k } = u;
    return function(I) {
      const W = this[k];
      d.call(this, I), this.requestUpdate(k, W, x);
    };
  }
  throw Error("Unsupported decorator location: " + v);
};
function At(x) {
  return (d, u) => typeof u == "object" ? re(x, d, u) : ((v, _, E) => {
    const k = _.hasOwnProperty(E);
    return _.constructor.createProperty(E, k ? { ...v, wrapped: !0 } : v), k ? Object.getOwnPropertyDescriptor(_, E) : void 0;
  })(x, d, u);
}
function dt(x) {
  return At({ ...x, state: !0, attribute: !1 });
}
function oe(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
var $t = { exports: {} }, ne = $t.exports, Rt;
function se() {
  return Rt || (Rt = 1, (function(x, d) {
    (function(u, v) {
      x.exports = v();
    })(ne, (() => (() => {
      var u = { 873: (k, I) => {
        var W, mt, lt = (function() {
          var it = function(p, g) {
            var h = p, e = st[g], t = null, r = 0, o = null, i = [], a = {}, m = function(n, l) {
              t = (function(s) {
                for (var c = new Array(s), f = 0; f < s; f += 1) {
                  c[f] = new Array(s);
                  for (var $ = 0; $ < s; $ += 1) c[f][$] = null;
                }
                return c;
              })(r = 4 * h + 17), w(0, 0), w(r - 7, 0), w(0, r - 7), b(), S(), y(n, l), h >= 7 && C(n), o == null && (o = q(h, e, i)), O(o, l);
            }, w = function(n, l) {
              for (var s = -1; s <= 7; s += 1) if (!(n + s <= -1 || r <= n + s)) for (var c = -1; c <= 7; c += 1) l + c <= -1 || r <= l + c || (t[n + s][l + c] = 0 <= s && s <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (s == 0 || s == 6) || 2 <= s && s <= 4 && 2 <= c && c <= 4);
            }, S = function() {
              for (var n = 8; n < r - 8; n += 1) t[n][6] == null && (t[n][6] = n % 2 == 0);
              for (var l = 8; l < r - 8; l += 1) t[6][l] == null && (t[6][l] = l % 2 == 0);
            }, b = function() {
              for (var n = G.getPatternPosition(h), l = 0; l < n.length; l += 1) for (var s = 0; s < n.length; s += 1) {
                var c = n[l], f = n[s];
                if (t[c][f] == null) for (var $ = -2; $ <= 2; $ += 1) for (var D = -2; D <= 2; D += 1) t[c + $][f + D] = $ == -2 || $ == 2 || D == -2 || D == 2 || $ == 0 && D == 0;
              }
            }, C = function(n) {
              for (var l = G.getBCHTypeNumber(h), s = 0; s < 18; s += 1) {
                var c = !n && (l >> s & 1) == 1;
                t[Math.floor(s / 3)][s % 3 + r - 8 - 3] = c;
              }
              for (s = 0; s < 18; s += 1) c = !n && (l >> s & 1) == 1, t[s % 3 + r - 8 - 3][Math.floor(s / 3)] = c;
            }, y = function(n, l) {
              for (var s = e << 3 | l, c = G.getBCHTypeInfo(s), f = 0; f < 15; f += 1) {
                var $ = !n && (c >> f & 1) == 1;
                f < 6 ? t[f][8] = $ : f < 8 ? t[f + 1][8] = $ : t[r - 15 + f][8] = $;
              }
              for (f = 0; f < 15; f += 1) $ = !n && (c >> f & 1) == 1, f < 8 ? t[8][r - f - 1] = $ : f < 9 ? t[8][15 - f - 1 + 1] = $ : t[8][15 - f - 1] = $;
              t[r - 8][8] = !n;
            }, O = function(n, l) {
              for (var s = -1, c = r - 1, f = 7, $ = 0, D = G.getMaskFunction(l), z = r - 1; z > 0; z -= 2) for (z == 6 && (z -= 1); ; ) {
                for (var B = 0; B < 2; B += 1) if (t[c][z - B] == null) {
                  var R = !1;
                  $ < n.length && (R = (n[$] >>> f & 1) == 1), D(c, z - B) && (R = !R), t[c][z - B] = R, (f -= 1) == -1 && ($ += 1, f = 7);
                }
                if ((c += s) < 0 || r <= c) {
                  c -= s, s = -s;
                  break;
                }
              }
            }, q = function(n, l, s) {
              for (var c = vt.getRSBlocks(n, l), f = ct(), $ = 0; $ < s.length; $ += 1) {
                var D = s[$];
                f.put(D.getMode(), 4), f.put(D.getLength(), G.getLengthInBits(D.getMode(), n)), D.write(f);
              }
              var z = 0;
              for ($ = 0; $ < c.length; $ += 1) z += c[$].dataCount;
              if (f.getLengthInBits() > 8 * z) throw "code length overflow. (" + f.getLengthInBits() + ">" + 8 * z + ")";
              for (f.getLengthInBits() + 4 <= 8 * z && f.put(0, 4); f.getLengthInBits() % 8 != 0; ) f.putBit(!1);
              for (; !(f.getLengthInBits() >= 8 * z || (f.put(236, 8), f.getLengthInBits() >= 8 * z)); ) f.put(17, 8);
              return (function(B, R) {
                for (var U = 0, Y = 0, F = 0, T = new Array(R.length), j = new Array(R.length), A = 0; A < R.length; A += 1) {
                  var N = R[A].dataCount, H = R[A].totalCount - N;
                  Y = Math.max(Y, N), F = Math.max(F, H), T[A] = new Array(N);
                  for (var P = 0; P < T[A].length; P += 1) T[A][P] = 255 & B.getBuffer()[P + U];
                  U += N;
                  var V = G.getErrorCorrectPolynomial(H), Z = at(T[A], V.getLength() - 1).mod(V);
                  for (j[A] = new Array(V.getLength() - 1), P = 0; P < j[A].length; P += 1) {
                    var K = P + Z.getLength() - j[A].length;
                    j[A][P] = K >= 0 ? Z.getAt(K) : 0;
                  }
                }
                var St = 0;
                for (P = 0; P < R.length; P += 1) St += R[P].totalCount;
                var ft = new Array(St), nt = 0;
                for (P = 0; P < Y; P += 1) for (A = 0; A < R.length; A += 1) P < T[A].length && (ft[nt] = T[A][P], nt += 1);
                for (P = 0; P < F; P += 1) for (A = 0; A < R.length; A += 1) P < j[A].length && (ft[nt] = j[A][P], nt += 1);
                return ft;
              })(f, c);
            };
            a.addData = function(n, l) {
              var s = null;
              switch (l = l || "Byte") {
                case "Numeric":
                  s = bt(n);
                  break;
                case "Alphanumeric":
                  s = yt(n);
                  break;
                case "Byte":
                  s = ut(n);
                  break;
                case "Kanji":
                  s = _t(n);
                  break;
                default:
                  throw "mode:" + l;
              }
              i.push(s), o = null;
            }, a.isDark = function(n, l) {
              if (n < 0 || r <= n || l < 0 || r <= l) throw n + "," + l;
              return t[n][l];
            }, a.getModuleCount = function() {
              return r;
            }, a.make = function() {
              if (h < 1) {
                for (var n = 1; n < 40; n++) {
                  for (var l = vt.getRSBlocks(n, e), s = ct(), c = 0; c < i.length; c++) {
                    var f = i[c];
                    s.put(f.getMode(), 4), s.put(f.getLength(), G.getLengthInBits(f.getMode(), n)), f.write(s);
                  }
                  var $ = 0;
                  for (c = 0; c < l.length; c++) $ += l[c].dataCount;
                  if (s.getLengthInBits() <= 8 * $) break;
                }
                h = n;
              }
              m(!1, (function() {
                for (var D = 0, z = 0, B = 0; B < 8; B += 1) {
                  m(!0, B);
                  var R = G.getLostPoint(a);
                  (B == 0 || D > R) && (D = R, z = B);
                }
                return z;
              })());
            }, a.createTableTag = function(n, l) {
              n = n || 2;
              var s = "";
              s += '<table style="', s += " border-width: 0px; border-style: none;", s += " border-collapse: collapse;", s += " padding: 0px; margin: " + (l = l === void 0 ? 4 * n : l) + "px;", s += '">', s += "<tbody>";
              for (var c = 0; c < a.getModuleCount(); c += 1) {
                s += "<tr>";
                for (var f = 0; f < a.getModuleCount(); f += 1) s += '<td style="', s += " border-width: 0px; border-style: none;", s += " border-collapse: collapse;", s += " padding: 0px; margin: 0px;", s += " width: " + n + "px;", s += " height: " + n + "px;", s += " background-color: ", s += a.isDark(c, f) ? "#000000" : "#ffffff", s += ";", s += '"/>';
                s += "</tr>";
              }
              return (s += "</tbody>") + "</table>";
            }, a.createSvgTag = function(n, l, s, c) {
              var f = {};
              typeof arguments[0] == "object" && (n = (f = arguments[0]).cellSize, l = f.margin, s = f.alt, c = f.title), n = n || 2, l = l === void 0 ? 4 * n : l, (s = typeof s == "string" ? { text: s } : s || {}).text = s.text || null, s.id = s.text ? s.id || "qrcode-description" : null, (c = typeof c == "string" ? { text: c } : c || {}).text = c.text || null, c.id = c.text ? c.id || "qrcode-title" : null;
              var $, D, z, B, R = a.getModuleCount() * n + 2 * l, U = "";
              for (B = "l" + n + ",0 0," + n + " -" + n + ",0 0,-" + n + "z ", U += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', U += f.scalable ? "" : ' width="' + R + 'px" height="' + R + 'px"', U += ' viewBox="0 0 ' + R + " " + R + '" ', U += ' preserveAspectRatio="xMinYMin meet"', U += c.text || s.text ? ' role="img" aria-labelledby="' + M([c.id, s.id].join(" ").trim()) + '"' : "", U += ">", U += c.text ? '<title id="' + M(c.id) + '">' + M(c.text) + "</title>" : "", U += s.text ? '<description id="' + M(s.id) + '">' + M(s.text) + "</description>" : "", U += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', U += '<path d="', D = 0; D < a.getModuleCount(); D += 1) for (z = D * n + l, $ = 0; $ < a.getModuleCount(); $ += 1) a.isDark(D, $) && (U += "M" + ($ * n + l) + "," + z + B);
              return (U += '" stroke="transparent" fill="black"/>') + "</svg>";
            }, a.createDataURL = function(n, l) {
              n = n || 2, l = l === void 0 ? 4 * n : l;
              var s = a.getModuleCount() * n + 2 * l, c = l, f = s - l;
              return gt(s, s, (function($, D) {
                if (c <= $ && $ < f && c <= D && D < f) {
                  var z = Math.floor(($ - c) / n), B = Math.floor((D - c) / n);
                  return a.isDark(B, z) ? 0 : 1;
                }
                return 1;
              }));
            }, a.createImgTag = function(n, l, s) {
              n = n || 2, l = l === void 0 ? 4 * n : l;
              var c = a.getModuleCount() * n + 2 * l, f = "";
              return f += "<img", f += ' src="', f += a.createDataURL(n, l), f += '"', f += ' width="', f += c, f += '"', f += ' height="', f += c, f += '"', s && (f += ' alt="', f += M(s), f += '"'), f + "/>";
            };
            var M = function(n) {
              for (var l = "", s = 0; s < n.length; s += 1) {
                var c = n.charAt(s);
                switch (c) {
                  case "<":
                    l += "&lt;";
                    break;
                  case ">":
                    l += "&gt;";
                    break;
                  case "&":
                    l += "&amp;";
                    break;
                  case '"':
                    l += "&quot;";
                    break;
                  default:
                    l += c;
                }
              }
              return l;
            };
            return a.createASCII = function(n, l) {
              if ((n = n || 1) < 2) return (function(T) {
                T = T === void 0 ? 2 : T;
                var j, A, N, H, P, V = 1 * a.getModuleCount() + 2 * T, Z = T, K = V - T, St = { "██": "█", "█ ": "▀", " █": "▄", "  ": " " }, ft = { "██": "▀", "█ ": "▀", " █": " ", "  ": " " }, nt = "";
                for (j = 0; j < V; j += 2) {
                  for (N = Math.floor((j - Z) / 1), H = Math.floor((j + 1 - Z) / 1), A = 0; A < V; A += 1) P = "█", Z <= A && A < K && Z <= j && j < K && a.isDark(N, Math.floor((A - Z) / 1)) && (P = " "), Z <= A && A < K && Z <= j + 1 && j + 1 < K && a.isDark(H, Math.floor((A - Z) / 1)) ? P += " " : P += "█", nt += T < 1 && j + 1 >= K ? ft[P] : St[P];
                  nt += `
`;
                }
                return V % 2 && T > 0 ? nt.substring(0, nt.length - V - 1) + Array(V + 1).join("▀") : nt.substring(0, nt.length - 1);
              })(l);
              n -= 1, l = l === void 0 ? 2 * n : l;
              var s, c, f, $, D = a.getModuleCount() * n + 2 * l, z = l, B = D - l, R = Array(n + 1).join("██"), U = Array(n + 1).join("  "), Y = "", F = "";
              for (s = 0; s < D; s += 1) {
                for (f = Math.floor((s - z) / n), F = "", c = 0; c < D; c += 1) $ = 1, z <= c && c < B && z <= s && s < B && a.isDark(f, Math.floor((c - z) / n)) && ($ = 0), F += $ ? R : U;
                for (f = 0; f < n; f += 1) Y += F + `
`;
              }
              return Y.substring(0, Y.length - 1);
            }, a.renderTo2dContext = function(n, l) {
              l = l || 2;
              for (var s = a.getModuleCount(), c = 0; c < s; c++) for (var f = 0; f < s; f++) n.fillStyle = a.isDark(c, f) ? "black" : "white", n.fillRect(c * l, f * l, l, l);
            }, a;
          };
          it.stringToBytes = (it.stringToBytesFuncs = { default: function(p) {
            for (var g = [], h = 0; h < p.length; h += 1) {
              var e = p.charCodeAt(h);
              g.push(255 & e);
            }
            return g;
          } }).default, it.createStringToBytes = function(p, g) {
            var h = (function() {
              for (var t = Et(p), r = function() {
                var S = t.read();
                if (S == -1) throw "eof";
                return S;
              }, o = 0, i = {}; ; ) {
                var a = t.read();
                if (a == -1) break;
                var m = r(), w = r() << 8 | r();
                i[String.fromCharCode(a << 8 | m)] = w, o += 1;
              }
              if (o != g) throw o + " != " + g;
              return i;
            })(), e = 63;
            return function(t) {
              for (var r = [], o = 0; o < t.length; o += 1) {
                var i = t.charCodeAt(o);
                if (i < 128) r.push(i);
                else {
                  var a = h[t.charAt(o)];
                  typeof a == "number" ? (255 & a) == a ? r.push(a) : (r.push(a >>> 8), r.push(255 & a)) : r.push(e);
                }
              }
              return r;
            };
          };
          var ht, rt, et, L, ot, st = { L: 1, M: 0, Q: 3, H: 2 }, G = (ht = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], rt = 1335, et = 7973, ot = function(p) {
            for (var g = 0; p != 0; ) g += 1, p >>>= 1;
            return g;
          }, (L = {}).getBCHTypeInfo = function(p) {
            for (var g = p << 10; ot(g) - ot(rt) >= 0; ) g ^= rt << ot(g) - ot(rt);
            return 21522 ^ (p << 10 | g);
          }, L.getBCHTypeNumber = function(p) {
            for (var g = p << 12; ot(g) - ot(et) >= 0; ) g ^= et << ot(g) - ot(et);
            return p << 12 | g;
          }, L.getPatternPosition = function(p) {
            return ht[p - 1];
          }, L.getMaskFunction = function(p) {
            switch (p) {
              case 0:
                return function(g, h) {
                  return (g + h) % 2 == 0;
                };
              case 1:
                return function(g, h) {
                  return g % 2 == 0;
                };
              case 2:
                return function(g, h) {
                  return h % 3 == 0;
                };
              case 3:
                return function(g, h) {
                  return (g + h) % 3 == 0;
                };
              case 4:
                return function(g, h) {
                  return (Math.floor(g / 2) + Math.floor(h / 3)) % 2 == 0;
                };
              case 5:
                return function(g, h) {
                  return g * h % 2 + g * h % 3 == 0;
                };
              case 6:
                return function(g, h) {
                  return (g * h % 2 + g * h % 3) % 2 == 0;
                };
              case 7:
                return function(g, h) {
                  return (g * h % 3 + (g + h) % 2) % 2 == 0;
                };
              default:
                throw "bad maskPattern:" + p;
            }
          }, L.getErrorCorrectPolynomial = function(p) {
            for (var g = at([1], 0), h = 0; h < p; h += 1) g = g.multiply(at([1, X.gexp(h)], 0));
            return g;
          }, L.getLengthInBits = function(p, g) {
            if (1 <= g && g < 10) switch (p) {
              case 1:
                return 10;
              case 2:
                return 9;
              case 4:
              case 8:
                return 8;
              default:
                throw "mode:" + p;
            }
            else if (g < 27) switch (p) {
              case 1:
                return 12;
              case 2:
                return 11;
              case 4:
                return 16;
              case 8:
                return 10;
              default:
                throw "mode:" + p;
            }
            else {
              if (!(g < 41)) throw "type:" + g;
              switch (p) {
                case 1:
                  return 14;
                case 2:
                  return 13;
                case 4:
                  return 16;
                case 8:
                  return 12;
                default:
                  throw "mode:" + p;
              }
            }
          }, L.getLostPoint = function(p) {
            for (var g = p.getModuleCount(), h = 0, e = 0; e < g; e += 1) for (var t = 0; t < g; t += 1) {
              for (var r = 0, o = p.isDark(e, t), i = -1; i <= 1; i += 1) if (!(e + i < 0 || g <= e + i)) for (var a = -1; a <= 1; a += 1) t + a < 0 || g <= t + a || i == 0 && a == 0 || o == p.isDark(e + i, t + a) && (r += 1);
              r > 5 && (h += 3 + r - 5);
            }
            for (e = 0; e < g - 1; e += 1) for (t = 0; t < g - 1; t += 1) {
              var m = 0;
              p.isDark(e, t) && (m += 1), p.isDark(e + 1, t) && (m += 1), p.isDark(e, t + 1) && (m += 1), p.isDark(e + 1, t + 1) && (m += 1), m != 0 && m != 4 || (h += 3);
            }
            for (e = 0; e < g; e += 1) for (t = 0; t < g - 6; t += 1) p.isDark(e, t) && !p.isDark(e, t + 1) && p.isDark(e, t + 2) && p.isDark(e, t + 3) && p.isDark(e, t + 4) && !p.isDark(e, t + 5) && p.isDark(e, t + 6) && (h += 40);
            for (t = 0; t < g; t += 1) for (e = 0; e < g - 6; e += 1) p.isDark(e, t) && !p.isDark(e + 1, t) && p.isDark(e + 2, t) && p.isDark(e + 3, t) && p.isDark(e + 4, t) && !p.isDark(e + 5, t) && p.isDark(e + 6, t) && (h += 40);
            var w = 0;
            for (t = 0; t < g; t += 1) for (e = 0; e < g; e += 1) p.isDark(e, t) && (w += 1);
            return h + Math.abs(100 * w / g / g - 50) / 5 * 10;
          }, L), X = (function() {
            for (var p = new Array(256), g = new Array(256), h = 0; h < 8; h += 1) p[h] = 1 << h;
            for (h = 8; h < 256; h += 1) p[h] = p[h - 4] ^ p[h - 5] ^ p[h - 6] ^ p[h - 8];
            for (h = 0; h < 255; h += 1) g[p[h]] = h;
            return { glog: function(e) {
              if (e < 1) throw "glog(" + e + ")";
              return g[e];
            }, gexp: function(e) {
              for (; e < 0; ) e += 255;
              for (; e >= 256; ) e -= 255;
              return p[e];
            } };
          })();
          function at(p, g) {
            if (p.length === void 0) throw p.length + "/" + g;
            var h = (function() {
              for (var t = 0; t < p.length && p[t] == 0; ) t += 1;
              for (var r = new Array(p.length - t + g), o = 0; o < p.length - t; o += 1) r[o] = p[o + t];
              return r;
            })(), e = { getAt: function(t) {
              return h[t];
            }, getLength: function() {
              return h.length;
            }, multiply: function(t) {
              for (var r = new Array(e.getLength() + t.getLength() - 1), o = 0; o < e.getLength(); o += 1) for (var i = 0; i < t.getLength(); i += 1) r[o + i] ^= X.gexp(X.glog(e.getAt(o)) + X.glog(t.getAt(i)));
              return at(r, 0);
            }, mod: function(t) {
              if (e.getLength() - t.getLength() < 0) return e;
              for (var r = X.glog(e.getAt(0)) - X.glog(t.getAt(0)), o = new Array(e.getLength()), i = 0; i < e.getLength(); i += 1) o[i] = e.getAt(i);
              for (i = 0; i < t.getLength(); i += 1) o[i] ^= X.gexp(X.glog(t.getAt(i)) + r);
              return at(o, 0).mod(t);
            } };
            return e;
          }
          var vt = /* @__PURE__ */ (function() {
            var p = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], g = function(e, t) {
              var r = {};
              return r.totalCount = e, r.dataCount = t, r;
            }, h = { getRSBlocks: function(e, t) {
              var r = (function(C, y) {
                switch (y) {
                  case st.L:
                    return p[4 * (C - 1) + 0];
                  case st.M:
                    return p[4 * (C - 1) + 1];
                  case st.Q:
                    return p[4 * (C - 1) + 2];
                  case st.H:
                    return p[4 * (C - 1) + 3];
                  default:
                    return;
                }
              })(e, t);
              if (r === void 0) throw "bad rs block @ typeNumber:" + e + "/errorCorrectionLevel:" + t;
              for (var o = r.length / 3, i = [], a = 0; a < o; a += 1) for (var m = r[3 * a + 0], w = r[3 * a + 1], S = r[3 * a + 2], b = 0; b < m; b += 1) i.push(g(w, S));
              return i;
            } };
            return h;
          })(), ct = function() {
            var p = [], g = 0, h = { getBuffer: function() {
              return p;
            }, getAt: function(e) {
              var t = Math.floor(e / 8);
              return (p[t] >>> 7 - e % 8 & 1) == 1;
            }, put: function(e, t) {
              for (var r = 0; r < t; r += 1) h.putBit((e >>> t - r - 1 & 1) == 1);
            }, getLengthInBits: function() {
              return g;
            }, putBit: function(e) {
              var t = Math.floor(g / 8);
              p.length <= t && p.push(0), e && (p[t] |= 128 >>> g % 8), g += 1;
            } };
            return h;
          }, bt = function(p) {
            var g = p, h = { getMode: function() {
              return 1;
            }, getLength: function(r) {
              return g.length;
            }, write: function(r) {
              for (var o = g, i = 0; i + 2 < o.length; ) r.put(e(o.substring(i, i + 3)), 10), i += 3;
              i < o.length && (o.length - i == 1 ? r.put(e(o.substring(i, i + 1)), 4) : o.length - i == 2 && r.put(e(o.substring(i, i + 2)), 7));
            } }, e = function(r) {
              for (var o = 0, i = 0; i < r.length; i += 1) o = 10 * o + t(r.charAt(i));
              return o;
            }, t = function(r) {
              if ("0" <= r && r <= "9") return r.charCodeAt(0) - 48;
              throw "illegal char :" + r;
            };
            return h;
          }, yt = function(p) {
            var g = p, h = { getMode: function() {
              return 2;
            }, getLength: function(t) {
              return g.length;
            }, write: function(t) {
              for (var r = g, o = 0; o + 1 < r.length; ) t.put(45 * e(r.charAt(o)) + e(r.charAt(o + 1)), 11), o += 2;
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
            return h;
          }, ut = function(p) {
            var g = it.stringToBytes(p);
            return { getMode: function() {
              return 4;
            }, getLength: function(h) {
              return g.length;
            }, write: function(h) {
              for (var e = 0; e < g.length; e += 1) h.put(g[e], 8);
            } };
          }, _t = function(p) {
            var g = it.stringToBytesFuncs.SJIS;
            if (!g) throw "sjis not supported.";
            (function() {
              var t = g("友");
              if (t.length != 2 || (t[0] << 8 | t[1]) != 38726) throw "sjis not supported.";
            })();
            var h = g(p), e = { getMode: function() {
              return 8;
            }, getLength: function(t) {
              return ~~(h.length / 2);
            }, write: function(t) {
              for (var r = h, o = 0; o + 1 < r.length; ) {
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
            var p = [], g = { writeByte: function(h) {
              p.push(255 & h);
            }, writeShort: function(h) {
              g.writeByte(h), g.writeByte(h >>> 8);
            }, writeBytes: function(h, e, t) {
              e = e || 0, t = t || h.length;
              for (var r = 0; r < t; r += 1) g.writeByte(h[r + e]);
            }, writeString: function(h) {
              for (var e = 0; e < h.length; e += 1) g.writeByte(h.charCodeAt(e));
            }, toByteArray: function() {
              return p;
            }, toString: function() {
              var h = "";
              h += "[";
              for (var e = 0; e < p.length; e += 1) e > 0 && (h += ","), h += p[e];
              return h + "]";
            } };
            return g;
          }, Et = function(p) {
            var g = p, h = 0, e = 0, t = 0, r = { read: function() {
              for (; t < 8; ) {
                if (h >= g.length) {
                  if (t == 0) return -1;
                  throw "unexpected end of file./" + t;
                }
                var i = g.charAt(h);
                if (h += 1, i == "=") return t = 0, -1;
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
          }, gt = function(p, g, h) {
            for (var e = (function(w, S) {
              var b = w, C = S, y = new Array(w * S), O = { setPixel: function(n, l, s) {
                y[l * b + n] = s;
              }, write: function(n) {
                n.writeString("GIF87a"), n.writeShort(b), n.writeShort(C), n.writeByte(128), n.writeByte(0), n.writeByte(0), n.writeByte(0), n.writeByte(0), n.writeByte(0), n.writeByte(255), n.writeByte(255), n.writeByte(255), n.writeString(","), n.writeShort(0), n.writeShort(0), n.writeShort(b), n.writeShort(C), n.writeByte(0);
                var l = q(2);
                n.writeByte(2);
                for (var s = 0; l.length - s > 255; ) n.writeByte(255), n.writeBytes(l, s, 255), s += 255;
                n.writeByte(l.length - s), n.writeBytes(l, s, l.length - s), n.writeByte(0), n.writeString(";");
              } }, q = function(n) {
                for (var l = 1 << n, s = 1 + (1 << n), c = n + 1, f = M(), $ = 0; $ < l; $ += 1) f.add(String.fromCharCode($));
                f.add(String.fromCharCode(l)), f.add(String.fromCharCode(s));
                var D, z, B, R = xt(), U = (D = R, z = 0, B = 0, { write: function(j, A) {
                  if (j >>> A) throw "length over";
                  for (; z + A >= 8; ) D.writeByte(255 & (j << z | B)), A -= 8 - z, j >>>= 8 - z, B = 0, z = 0;
                  B |= j << z, z += A;
                }, flush: function() {
                  z > 0 && D.writeByte(B);
                } });
                U.write(l, c);
                var Y = 0, F = String.fromCharCode(y[Y]);
                for (Y += 1; Y < y.length; ) {
                  var T = String.fromCharCode(y[Y]);
                  Y += 1, f.contains(F + T) ? F += T : (U.write(f.indexOf(F), c), f.size() < 4095 && (f.size() == 1 << c && (c += 1), f.add(F + T)), F = T);
                }
                return U.write(f.indexOf(F), c), U.write(s, c), U.flush(), R.toByteArray();
              }, M = function() {
                var n = {}, l = 0, s = { add: function(c) {
                  if (s.contains(c)) throw "dup key:" + c;
                  n[c] = l, l += 1;
                }, size: function() {
                  return l;
                }, indexOf: function(c) {
                  return n[c];
                }, contains: function(c) {
                  return n[c] !== void 0;
                } };
                return s;
              };
              return O;
            })(p, g), t = 0; t < g; t += 1) for (var r = 0; r < p; r += 1) e.setPixel(r, t, h(r, t));
            var o = xt();
            e.write(o);
            for (var i = (function() {
              var w = 0, S = 0, b = 0, C = "", y = {}, O = function(M) {
                C += String.fromCharCode(q(63 & M));
              }, q = function(M) {
                if (!(M < 0)) {
                  if (M < 26) return 65 + M;
                  if (M < 52) return M - 26 + 97;
                  if (M < 62) return M - 52 + 48;
                  if (M == 62) return 43;
                  if (M == 63) return 47;
                }
                throw "n:" + M;
              };
              return y.writeByte = function(M) {
                for (w = w << 8 | 255 & M, S += 8, b += 1; S >= 6; ) O(w >>> S - 6), S -= 6;
              }, y.flush = function() {
                if (S > 0 && (O(w << 6 - S), w = 0, S = 0), b % 3 != 0) for (var M = 3 - b % 3, n = 0; n < M; n += 1) C += "=";
              }, y.toString = function() {
                return C;
              }, y;
            })(), a = o.toByteArray(), m = 0; m < a.length; m += 1) i.writeByte(a[m]);
            return i.flush(), "data:image/gif;base64," + i;
          };
          return it;
        })();
        lt.stringToBytesFuncs["UTF-8"] = function(it) {
          return (function(ht) {
            for (var rt = [], et = 0; et < ht.length; et++) {
              var L = ht.charCodeAt(et);
              L < 128 ? rt.push(L) : L < 2048 ? rt.push(192 | L >> 6, 128 | 63 & L) : L < 55296 || L >= 57344 ? rt.push(224 | L >> 12, 128 | L >> 6 & 63, 128 | 63 & L) : (et++, L = 65536 + ((1023 & L) << 10 | 1023 & ht.charCodeAt(et)), rt.push(240 | L >> 18, 128 | L >> 12 & 63, 128 | L >> 6 & 63, 128 | 63 & L));
            }
            return rt;
          })(it);
        }, (mt = typeof (W = function() {
          return lt;
        }) == "function" ? W.apply(I, []) : W) === void 0 || (k.exports = mt);
      } }, v = {};
      function _(k) {
        var I = v[k];
        if (I !== void 0) return I.exports;
        var W = v[k] = { exports: {} };
        return u[k](W, W.exports, _), W.exports;
      }
      _.n = (k) => {
        var I = k && k.__esModule ? () => k.default : () => k;
        return _.d(I, { a: I }), I;
      }, _.d = (k, I) => {
        for (var W in I) _.o(I, W) && !_.o(k, W) && Object.defineProperty(k, W, { enumerable: !0, get: I[W] });
      }, _.o = (k, I) => Object.prototype.hasOwnProperty.call(k, I);
      var E = {};
      return (() => {
        _.d(E, { default: () => g });
        const k = (h) => !!h && typeof h == "object" && !Array.isArray(h);
        function I(h, ...e) {
          if (!e.length) return h;
          const t = e.shift();
          return t !== void 0 && k(h) && k(t) ? (h = Object.assign({}, h), Object.keys(t).forEach(((r) => {
            const o = h[r], i = t[r];
            Array.isArray(o) && Array.isArray(i) ? h[r] = i : k(o) && k(i) ? h[r] = I(Object.assign({}, o), i) : h[r] = i;
          })), I(h, ...e)) : h;
        }
        function W(h, e) {
          const t = document.createElement("a");
          t.download = e, t.href = h, document.body.appendChild(t), t.click(), document.body.removeChild(t);
        }
        const mt = { L: 0.07, M: 0.15, Q: 0.25, H: 0.3 };
        class lt {
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
                let b = 0;
                return i && m ? b = Math.PI / 2 : m && a ? b = Math.PI : a && w && (b = -Math.PI / 2), void this._basicCornerRounded({ x: e, y: t, size: r, rotation: b });
              }
              if (S === 1) {
                let b = 0;
                return m ? b = Math.PI / 2 : a ? b = Math.PI : w && (b = -Math.PI / 2), void this._basicSideRounded({ x: e, y: t, size: r, rotation: b });
              }
            }
            else this._basicDot({ x: e, y: t, size: r, rotation: 0 });
          }
          _drawExtraRounded({ x: e, y: t, size: r, getNeighbor: o }) {
            const i = o ? +o(-1, 0) : 0, a = o ? +o(1, 0) : 0, m = o ? +o(0, -1) : 0, w = o ? +o(0, 1) : 0, S = i + a + m + w;
            if (S !== 0) if (S > 2 || i && a || m && w) this._basicSquare({ x: e, y: t, size: r, rotation: 0 });
            else {
              if (S === 2) {
                let b = 0;
                return i && m ? b = Math.PI / 2 : m && a ? b = Math.PI : a && w && (b = -Math.PI / 2), void this._basicCornerExtraRounded({ x: e, y: t, size: r, rotation: b });
              }
              if (S === 1) {
                let b = 0;
                return m ? b = Math.PI / 2 : a ? b = Math.PI : w && (b = -Math.PI / 2), void this._basicSideRounded({ x: e, y: t, size: r, rotation: b });
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
        const it = { dot: "dot", square: "square", extraRounded: "extra-rounded" }, ht = Object.values(it);
        class rt {
          constructor({ svg: e, type: t, window: r }) {
            this._svg = e, this._type = t, this._window = r;
          }
          draw(e, t, r, o) {
            let i;
            switch (this._type) {
              case it.square:
                i = this._drawSquare;
                break;
              case it.extraRounded:
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
        const et = { dot: "dot", square: "square" }, L = Object.values(et);
        class ot {
          constructor({ svg: e, type: t, window: r }) {
            this._svg = e, this._type = t, this._window = r;
          }
          draw(e, t, r, o) {
            let i;
            i = this._type === et.square ? this._drawSquare : this._drawDot, i.call(this, { x: e, y: t, size: r, rotation: o });
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
        const st = "circle", G = [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1]], X = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
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
              const { imageOptions: m, qrOptions: w } = this._options, S = m.imageSize * mt[w.errorCorrectionLevel], b = Math.floor(S * t * t);
              a = (function({ originalHeight: C, originalWidth: y, maxHiddenDots: O, maxHiddenAxisDots: q, dotSize: M }) {
                const n = { x: 0, y: 0 }, l = { x: 0, y: 0 };
                if (C <= 0 || y <= 0 || O <= 0 || M <= 0) return { height: 0, width: 0, hideYDots: 0, hideXDots: 0 };
                const s = C / y;
                return n.x = Math.floor(Math.sqrt(O / s)), n.x <= 0 && (n.x = 1), q && q < n.x && (n.x = q), n.x % 2 == 0 && n.x--, l.x = n.x * M, n.y = 1 + 2 * Math.ceil((n.x * s - 1) / 2), l.y = Math.round(l.x * s), (n.y * n.x > O || q && q < n.y) && (q && q < n.y ? (n.y = q, n.y % 2 == 0 && n.x--) : n.y -= 2, l.y = n.y * M, n.x = 1 + 2 * Math.ceil((n.y / s - 1) / 2), l.x = Math.round(l.y / s)), { height: l.y, width: l.x, hideYDots: n.y, hideXDots: n.x };
              })({ originalWidth: this._image.width, originalHeight: this._image.height, maxHiddenDots: b, maxHiddenAxisDots: t - 14, dotSize: i });
            }
            this.drawBackground(), this.drawDots(((m, w) => {
              var S, b, C, y, O, q;
              return !(this._options.imageOptions.hideBackgroundDots && m >= (t - a.hideYDots) / 2 && m < (t + a.hideYDots) / 2 && w >= (t - a.hideXDots) / 2 && w < (t + a.hideXDots) / 2 || !((S = G[m]) === null || S === void 0) && S[w] || !((b = G[m - t + 7]) === null || b === void 0) && b[w] || !((C = G[m]) === null || C === void 0) && C[w - t + 7] || !((y = X[m]) === null || y === void 0) && y[w] || !((O = X[m - t + 7]) === null || O === void 0) && O[w] || !((q = X[m]) === null || q === void 0) && q[w - t + 7]);
            })), this.drawCorners(), this._options.image && await this.drawImage({ width: a.width, height: a.height, count: t, dotSize: i });
          }
          drawBackground() {
            var e, t, r;
            const o = this._element, i = this._options;
            if (o) {
              const a = (e = i.backgroundOptions) === null || e === void 0 ? void 0 : e.gradient, m = (t = i.backgroundOptions) === null || t === void 0 ? void 0 : t.color;
              let w = i.height, S = i.width;
              if (a || m) {
                const b = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect");
                this._backgroundClipPath = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._backgroundClipPath.setAttribute("id", `clip-path-background-color-${this._instanceId}`), this._defs.appendChild(this._backgroundClipPath), !((r = i.backgroundOptions) === null || r === void 0) && r.round && (w = S = Math.min(i.width, i.height), b.setAttribute("rx", String(w / 2 * i.backgroundOptions.round))), b.setAttribute("x", String(this._roundSize((i.width - S) / 2))), b.setAttribute("y", String(this._roundSize((i.height - w) / 2))), b.setAttribute("width", String(S)), b.setAttribute("height", String(w)), this._backgroundClipPath.appendChild(b), this._createColor({ options: a, color: m, additionalRotation: 0, x: 0, y: 0, height: i.height, width: i.width, name: `background-color-${this._instanceId}` });
              }
            }
          }
          drawDots(e) {
            var t, r;
            if (!this._qr) throw "QR code is not defined";
            const o = this._options, i = this._qr.getModuleCount();
            if (i > o.width || i > o.height) throw "The canvas is too small.";
            const a = Math.min(o.width, o.height) - 2 * o.margin, m = o.shape === st ? a / Math.sqrt(2) : a, w = this._roundSize(m / i), S = this._roundSize((o.width - i * w) / 2), b = this._roundSize((o.height - i * w) / 2), C = new lt({ svg: this._element, type: o.dotsOptions.type, window: this._window });
            this._dotsClipPath = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._dotsClipPath.setAttribute("id", `clip-path-dot-color-${this._instanceId}`), this._defs.appendChild(this._dotsClipPath), this._createColor({ options: (t = o.dotsOptions) === null || t === void 0 ? void 0 : t.gradient, color: o.dotsOptions.color, additionalRotation: 0, x: 0, y: 0, height: o.height, width: o.width, name: `dot-color-${this._instanceId}` });
            for (let y = 0; y < i; y++) for (let O = 0; O < i; O++) e && !e(y, O) || !((r = this._qr) === null || r === void 0) && r.isDark(y, O) && (C.draw(S + O * w, b + y * w, w, ((q, M) => !(O + q < 0 || y + M < 0 || O + q >= i || y + M >= i) && !(e && !e(y + M, O + q)) && !!this._qr && this._qr.isDark(y + M, O + q))), C._element && this._dotsClipPath && this._dotsClipPath.appendChild(C._element));
            if (o.shape === st) {
              const y = this._roundSize((a / w - i) / 2), O = i + 2 * y, q = S - y * w, M = b - y * w, n = [], l = this._roundSize(O / 2);
              for (let s = 0; s < O; s++) {
                n[s] = [];
                for (let c = 0; c < O; c++) s >= y - 1 && s <= O - y && c >= y - 1 && c <= O - y || Math.sqrt((s - l) * (s - l) + (c - l) * (c - l)) > l ? n[s][c] = 0 : n[s][c] = this._qr.isDark(c - 2 * y < 0 ? c : c >= i ? c - 2 * y : c - y, s - 2 * y < 0 ? s : s >= i ? s - 2 * y : s - y) ? 1 : 0;
              }
              for (let s = 0; s < O; s++) for (let c = 0; c < O; c++) n[s][c] && (C.draw(q + c * w, M + s * w, w, ((f, $) => {
                var D;
                return !!(!((D = n[s + $]) === null || D === void 0) && D[c + f]);
              })), C._element && this._dotsClipPath && this._dotsClipPath.appendChild(C._element));
            }
          }
          drawCorners() {
            if (!this._qr) throw "QR code is not defined";
            const e = this._element, t = this._options;
            if (!e) throw "Element code is not defined";
            const r = this._qr.getModuleCount(), o = Math.min(t.width, t.height) - 2 * t.margin, i = t.shape === st ? o / Math.sqrt(2) : o, a = this._roundSize(i / r), m = 7 * a, w = 3 * a, S = this._roundSize((t.width - r * a) / 2), b = this._roundSize((t.height - r * a) / 2);
            [[0, 0, 0], [1, 0, Math.PI / 2], [0, 1, -Math.PI / 2]].forEach((([C, y, O]) => {
              var q, M, n, l, s, c, f, $, D, z, B, R, U, Y;
              const F = S + C * a * (r - 7), T = b + y * a * (r - 7);
              let j = this._dotsClipPath, A = this._dotsClipPath;
              if ((!((q = t.cornersSquareOptions) === null || q === void 0) && q.gradient || !((M = t.cornersSquareOptions) === null || M === void 0) && M.color) && (j = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), j.setAttribute("id", `clip-path-corners-square-color-${C}-${y}-${this._instanceId}`), this._defs.appendChild(j), this._cornersSquareClipPath = this._cornersDotClipPath = A = j, this._createColor({ options: (n = t.cornersSquareOptions) === null || n === void 0 ? void 0 : n.gradient, color: (l = t.cornersSquareOptions) === null || l === void 0 ? void 0 : l.color, additionalRotation: O, x: F, y: T, height: m, width: m, name: `corners-square-color-${C}-${y}-${this._instanceId}` })), ((s = t.cornersSquareOptions) === null || s === void 0 ? void 0 : s.type) && ht.includes(t.cornersSquareOptions.type)) {
                const N = new rt({ svg: this._element, type: t.cornersSquareOptions.type, window: this._window });
                N.draw(F, T, m, O), N._element && j && j.appendChild(N._element);
              } else {
                const N = new lt({ svg: this._element, type: ((c = t.cornersSquareOptions) === null || c === void 0 ? void 0 : c.type) || t.dotsOptions.type, window: this._window });
                for (let H = 0; H < G.length; H++) for (let P = 0; P < G[H].length; P++) !((f = G[H]) === null || f === void 0) && f[P] && (N.draw(F + P * a, T + H * a, a, ((V, Z) => {
                  var K;
                  return !!(!((K = G[H + Z]) === null || K === void 0) && K[P + V]);
                })), N._element && j && j.appendChild(N._element));
              }
              if ((!(($ = t.cornersDotOptions) === null || $ === void 0) && $.gradient || !((D = t.cornersDotOptions) === null || D === void 0) && D.color) && (A = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), A.setAttribute("id", `clip-path-corners-dot-color-${C}-${y}-${this._instanceId}`), this._defs.appendChild(A), this._cornersDotClipPath = A, this._createColor({ options: (z = t.cornersDotOptions) === null || z === void 0 ? void 0 : z.gradient, color: (B = t.cornersDotOptions) === null || B === void 0 ? void 0 : B.color, additionalRotation: O, x: F + 2 * a, y: T + 2 * a, height: w, width: w, name: `corners-dot-color-${C}-${y}-${this._instanceId}` })), ((R = t.cornersDotOptions) === null || R === void 0 ? void 0 : R.type) && L.includes(t.cornersDotOptions.type)) {
                const N = new ot({ svg: this._element, type: t.cornersDotOptions.type, window: this._window });
                N.draw(F + 2 * a, T + 2 * a, w, O), N._element && A && A.appendChild(N._element);
              } else {
                const N = new lt({ svg: this._element, type: ((U = t.cornersDotOptions) === null || U === void 0 ? void 0 : U.type) || t.dotsOptions.type, window: this._window });
                for (let H = 0; H < X.length; H++) for (let P = 0; P < X[H].length; P++) !((Y = X[H]) === null || Y === void 0) && Y[P] && (N.draw(F + P * a, T + H * a, a, ((V, Z) => {
                  var K;
                  return !!(!((K = X[H + Z]) === null || K === void 0) && K[P + V]);
                })), N._element && A && A.appendChild(N._element));
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
                        const b = new m.FileReader();
                        b.onloadend = function() {
                          w(b.result);
                        }, b.readAsDataURL(S.response);
                      }, S.open("GET", a), S.responseType = "blob", S.send();
                    }));
                  })(o.image || "", this._window)), e();
                }, i.src = o.image;
              }
            }));
          }
          async drawImage({ width: e, height: t, count: r, dotSize: o }) {
            const i = this._options, a = this._roundSize((i.width - r * o) / 2), m = this._roundSize((i.height - r * o) / 2), w = a + this._roundSize(i.imageOptions.margin + (r * o - e) / 2), S = m + this._roundSize(i.imageOptions.margin + (r * o - t) / 2), b = e - 2 * i.imageOptions.margin, C = t - 2 * i.imageOptions.margin, y = this._window.document.createElementNS("http://www.w3.org/2000/svg", "image");
            y.setAttribute("href", this._imageUri || ""), y.setAttribute("xlink:href", this._imageUri || ""), y.setAttribute("x", String(w)), y.setAttribute("y", String(S)), y.setAttribute("width", `${b}px`), y.setAttribute("height", `${C}px`), this._element.appendChild(y);
          }
          _createColor({ options: e, color: t, additionalRotation: r, x: o, y: i, height: a, width: m, name: w }) {
            const S = m > a ? m : a, b = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect");
            if (b.setAttribute("x", String(o)), b.setAttribute("y", String(i)), b.setAttribute("height", String(a)), b.setAttribute("width", String(m)), b.setAttribute("clip-path", `url('#clip-path-${w}')`), e) {
              let C;
              if (e.type === "radial") C = this._window.document.createElementNS("http://www.w3.org/2000/svg", "radialGradient"), C.setAttribute("id", w), C.setAttribute("gradientUnits", "userSpaceOnUse"), C.setAttribute("fx", String(o + m / 2)), C.setAttribute("fy", String(i + a / 2)), C.setAttribute("cx", String(o + m / 2)), C.setAttribute("cy", String(i + a / 2)), C.setAttribute("r", String(S / 2));
              else {
                const y = ((e.rotation || 0) + r) % (2 * Math.PI), O = (y + 2 * Math.PI) % (2 * Math.PI);
                let q = o + m / 2, M = i + a / 2, n = o + m / 2, l = i + a / 2;
                O >= 0 && O <= 0.25 * Math.PI || O > 1.75 * Math.PI && O <= 2 * Math.PI ? (q -= m / 2, M -= a / 2 * Math.tan(y), n += m / 2, l += a / 2 * Math.tan(y)) : O > 0.25 * Math.PI && O <= 0.75 * Math.PI ? (M -= a / 2, q -= m / 2 / Math.tan(y), l += a / 2, n += m / 2 / Math.tan(y)) : O > 0.75 * Math.PI && O <= 1.25 * Math.PI ? (q += m / 2, M += a / 2 * Math.tan(y), n -= m / 2, l -= a / 2 * Math.tan(y)) : O > 1.25 * Math.PI && O <= 1.75 * Math.PI && (M += a / 2, q += m / 2 / Math.tan(y), l -= a / 2, n -= m / 2 / Math.tan(y)), C = this._window.document.createElementNS("http://www.w3.org/2000/svg", "linearGradient"), C.setAttribute("id", w), C.setAttribute("gradientUnits", "userSpaceOnUse"), C.setAttribute("x1", String(Math.round(q))), C.setAttribute("y1", String(Math.round(M))), C.setAttribute("x2", String(Math.round(n))), C.setAttribute("y2", String(Math.round(l)));
              }
              e.colorStops.forEach((({ offset: y, color: O }) => {
                const q = this._window.document.createElementNS("http://www.w3.org/2000/svg", "stop");
                q.setAttribute("offset", 100 * y + "%"), q.setAttribute("stop-color", O), C.appendChild(q);
              })), b.setAttribute("fill", `url('#${w}')`), this._defs.appendChild(C);
            } else t && b.setAttribute("fill", t);
            this._element.appendChild(b);
          }
        }
        at.instanceCount = 0;
        const vt = at, ct = "canvas", bt = {};
        for (let h = 0; h <= 40; h++) bt[h] = h;
        const yt = { type: ct, shape: "square", width: 300, height: 300, data: "", margin: 0, qrOptions: { typeNumber: bt[0], mode: void 0, errorCorrectionLevel: "Q" }, imageOptions: { saveAsBlob: !0, hideBackgroundDots: !0, imageSize: 0.4, crossOrigin: void 0, margin: 0 }, dotsOptions: { type: "square", color: "#000", roundSize: !0 }, backgroundOptions: { round: 0, color: "#fff" } };
        function ut(h) {
          const e = Object.assign({}, h);
          if (!e.colorStops || !e.colorStops.length) throw "Field 'colorStops' is required in gradient";
          return e.rotation ? e.rotation = Number(e.rotation) : e.rotation = 0, e.colorStops = e.colorStops.map(((t) => Object.assign(Object.assign({}, t), { offset: Number(t.offset) }))), e;
        }
        function _t(h) {
          const e = Object.assign({}, h);
          return e.width = Number(e.width), e.height = Number(e.height), e.margin = Number(e.margin), e.imageOptions = Object.assign(Object.assign({}, e.imageOptions), { hideBackgroundDots: !!e.imageOptions.hideBackgroundDots, imageSize: Number(e.imageOptions.imageSize), margin: Number(e.imageOptions.margin) }), e.margin > Math.min(e.width, e.height) && (e.margin = Math.min(e.width, e.height)), e.dotsOptions = Object.assign({}, e.dotsOptions), e.dotsOptions.gradient && (e.dotsOptions.gradient = ut(e.dotsOptions.gradient)), e.cornersSquareOptions && (e.cornersSquareOptions = Object.assign({}, e.cornersSquareOptions), e.cornersSquareOptions.gradient && (e.cornersSquareOptions.gradient = ut(e.cornersSquareOptions.gradient))), e.cornersDotOptions && (e.cornersDotOptions = Object.assign({}, e.cornersDotOptions), e.cornersDotOptions.gradient && (e.cornersDotOptions.gradient = ut(e.cornersDotOptions.gradient))), e.backgroundOptions && (e.backgroundOptions = Object.assign({}, e.backgroundOptions), e.backgroundOptions.gradient && (e.backgroundOptions.gradient = ut(e.backgroundOptions.gradient))), e;
        }
        var xt = _(873), Et = _.n(xt);
        function gt(h) {
          if (!h) throw new Error("Extension must be defined");
          h[0] === "." && (h = h.substring(1));
          const e = { bmp: "image/bmp", gif: "image/gif", ico: "image/vnd.microsoft.icon", jpeg: "image/jpeg", jpg: "image/jpeg", png: "image/png", svg: "image/svg+xml", tif: "image/tiff", tiff: "image/tiff", webp: "image/webp", pdf: "application/pdf" }[h.toLowerCase()];
          if (!e) throw new Error(`Extension "${h}" is not supported`);
          return e;
        }
        class p {
          constructor(e) {
            e?.jsdom ? this._window = new e.jsdom("", { resources: "usable" }).window : this._window = window, this._options = e ? _t(I(yt, e)) : yt, this.update();
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
                var S, b;
                w.width = this._options.width, w.height = this._options.height, (b = (S = this._nodeCanvas) === null || S === void 0 ? void 0 : S.getContext("2d")) === null || b === void 0 || b.drawImage(w, 0, 0);
              }));
              {
                const w = new this._window.Image();
                return new Promise(((S) => {
                  w.onload = () => {
                    var b, C;
                    (C = (b = this._domCanvas) === null || b === void 0 ? void 0 : b.getContext("2d")) === null || C === void 0 || C.drawImage(w, 0, 0), S();
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
            p._clearContainer(this._container), this._options = e ? _t(I(this._options, e)) : this._options, this._options.data && (this._qr = Et()(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || (function(t) {
              switch (!0) {
                case /^[0-9]*$/.test(t):
                  return "Numeric";
                case /^[0-9A-Z $%*+\-./:]*$/.test(t):
                  return "Alphanumeric";
                default:
                  return "Byte";
              }
            })(this._options.data)), this._qr.make(), this._options.type === ct ? this._setupCanvas() : this._setupSvg(), this.append(this._container));
          }
          append(e) {
            if (e) {
              if (typeof e.appendChild != "function") throw "Container should be a single DOM node";
              this._options.type === ct ? this._domCanvas && e.appendChild(this._domCanvas) : this._svg && e.appendChild(this._svg), this._container = e;
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
` + i, W(`data:${gt(t)};charset=utf-8,${encodeURIComponent(i)}`, `${r}.svg`);
            } else W(o.toDataURL(gt(t)), `${r}.${t}`);
          }
        }
        const g = p;
      })(), E.default;
    })()));
  })($t)), $t.exports;
}
var ae = se();
const de = /* @__PURE__ */ oe(ae), Mt = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='378'%20height='352'%20fill='none'%20viewBox='0%200%20378%20352'%3e%3crect%20width='164'%20height='129'%20fill='url(%23a)'%20rx='8'/%3e%3crect%20width='164'%20height='129'%20x='214'%20y='117'%20fill='url(%23b)'%20rx='8'/%3e%3crect%20width='164'%20height='129'%20y='223'%20fill='url(%23c)'%20rx='4'/%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='-2.497'%20x2='226.093'%20y1='10.071'%20y2='107.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23a076d4'/%3e%3cstop%20offset='1'%20stop-color='%2358cfbd'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='211.503'%20x2='440.093'%20y1='127.071'%20y2='224.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23a076d4'/%3e%3cstop%20offset='1'%20stop-color='%2358cfbd'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='-2.497'%20x2='226.093'%20y1='233.071'%20y2='330.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23a076d4'/%3e%3cstop%20offset='1'%20stop-color='%2358cfbd'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
var he = Object.defineProperty, le = Object.getOwnPropertyDescriptor, tt = (x, d, u, v) => {
  for (var _ = v > 1 ? void 0 : v ? le(d, u) : d, E = x.length - 1, k; E >= 0; E--)
    (k = x[E]) && (_ = (v ? k(d, u, _) : k(_)) || _);
  return v && _ && he(d, u, _), _;
};
let J = class extends Ft {
  constructor() {
    super(...arguments), this.wallet = "", this.amount = 0, this.useDialog = !0, this.qrCodeData = "", this.qrUrl = "", this.yid = "", this.confirmed = !1, this.isMobile = !1, this.connected = !1, this.amountError = "", this.dialogOpen = !1, this.isConfirming = !1, this.confirmingError = "", this.hasInitialized = !1, this.wsConnection = null, this.confirmingTimeoutId = null, this.handleKeyDown = (d) => {
      d.key === "Escape" && this.dialogOpen && (this.dialogOpen = !1);
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
    await this.generateQRCode(), this.hasInitialized = !0, !this.useDialog && !this.isMobile && this.startWebSocketConnection(), document.addEventListener("keydown", this.handleKeyDown);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("keydown", this.handleKeyDown), this.wsConnection && (this.wsConnection.close(), this.wsConnection = null);
  }
  // Watch for amount changes AFTER initial render
  updated(d) {
    this.hasInitialized && d.has("amount") && (this.validateAmount() ? this.amountError === "" && this.generateQRCode() : (this.connected = !1, this.confirmed = !1)), d.has("dialogOpen") && this.dialogOpen && !this.isMobile && this.startWebSocketConnection(), d.has("useDialog") && !this.useDialog && !this.isMobile && this.hasInitialized && this.startWebSocketConnection();
  }
  async generateQRCode() {
    const d = () => {
      const k = Date.now().toString().slice(-4), I = Math.random().toString(36).substring(2, 6);
      return `${k}${I}`;
    };
    this.yid = d(), console.log("YATORI YID CREATED");
    const u = {
      token: "usdcBasic",
      to: this.wallet,
      amount: this.amount,
      yid: this.yid
    };
    this.qrUrl = `https://yatori.io/mobile/yatoriRequest?token=${u.token}&to=${u.to}&amount=${u.amount}&yid=${u.yid}`;
    const v = {
      width: 250,
      height: 250,
      data: this.qrUrl,
      margin: 0,
      image: Mt,
      dotsOptions: {
        color: "#000000",
        type: "dots"
      },
      backgroundOptions: {
        color: "#ffffff"
      },
      imageOptions: {
        margin: 3,
        imageSize: 0.17,
        hideBackgroundDots: !0
      },
      cornersSquareOptions: {
        type: "extra-rounded"
      },
      cornersDotOptions: {
        type: "rounded"
      }
    }, E = await new de(v).getRawData("png");
    if (E) {
      const k = new FileReader();
      k.onloadend = () => {
        this.qrCodeData = k.result;
      }, k.readAsDataURL(E);
    }
  }
  startWebSocketConnection() {
    if (this.wsConnection) {
      const d = this.wsConnection.readyState;
      if (d === WebSocket.OPEN || d === WebSocket.CONNECTING)
        return;
    }
    this.yid && this.setupYatoriWebSocket(this.wallet, this.yid, this.amount);
  }
  setupYatoriWebSocket(d, u, v) {
    if (this.wsConnection) {
      const k = this.wsConnection.readyState;
      if (k !== WebSocket.OPEN && k !== WebSocket.CONNECTING)
        this.wsConnection.close();
      else
        return;
    }
    const _ = "wss://zanshin.fly.dev/confirmed", E = new WebSocket(_);
    this.wsConnection = E, E.addEventListener("open", () => {
      this.connected = !0;
      const k = { address: d, yid: u, amount: String(v) };
      E.send(JSON.stringify(k));
    }), E.addEventListener("message", (k) => {
      const I = JSON.parse(k.data);
      I.status === "confirming" && (this.confirmingTimeoutId && (clearTimeout(this.confirmingTimeoutId), this.confirmingTimeoutId = null), this.confirmingError = "", this.isConfirming = !0, this.confirmingTimeoutId = setTimeout(() => {
        this.confirmingTimeoutId = null, this.isConfirming = !1, this.confirmingError = "There was an error - check your transaction history";
      }, 6e4)), I.status === "confirmed" && (this.confirmingTimeoutId && (clearTimeout(this.confirmingTimeoutId), this.confirmingTimeoutId = null), this.confirmingError = "", this.isConfirming = !1, this.confirmed = !0, this.dialogOpen = !1, this.dispatchEvent(
        new CustomEvent("yatori-confirmed", {
          detail: {
            signature: I.signature,
            status: I.status
          },
          bubbles: !0,
          composed: !0
        })
      ), setTimeout(() => {
        this.dispatchEvent(
          new CustomEvent("yatori-animation-complete", {
            detail: {
              signature: I.signature,
              status: I.status
            },
            bubbles: !0,
            composed: !0
          })
        );
      }, 1400));
    }), E.addEventListener("error", (k) => {
      console.error("WebSocket error:", k), this.connected = !1, this.isConfirming = !1, this.confirmingError = "", this.confirmingTimeoutId && (clearTimeout(this.confirmingTimeoutId), this.confirmingTimeoutId = null);
    }), E.addEventListener("close", () => {
      console.log("Disconnected from proxy"), this.connected = !1, this.isConfirming = !1, this.confirmingError = "", this.confirmingTimeoutId && (clearTimeout(this.confirmingTimeoutId), this.confirmingTimeoutId = null), this.wsConnection = null;
    });
  }
  render() {
    if (this.amountError)
      return Q`
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
      `;
    const d = !this.useDialog && !this.connected && !this.confirmed && !this.qrCodeData;
    return Q`
      ${d ? Q`<div class="spinner"></div>` : this.confirmed && !this.useDialog ? Q`
            <div class="flat-qr flat-confirmed">
              <div class="dialog-amount">Payment Complete</div>
              <div class="dialog-qr-row">
                <div class="dialog-wallet-vertical">${this.wallet.slice(0, 4)}...${this.wallet.slice(-4)}</div>
                <div class="flat-confirmed-inner">
                  <svg viewBox="0 0 100 100" style="shape-rendering: geometricPrecision;">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#646CFF" stroke-width="6" class="animate-draw-circle"/>
                    <path d="M 30 50 L 45 65 L 75 30" fill="none" stroke="#646CFF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" class="checkmark-path" style="stroke-dasharray: 55; stroke-dashoffset: 55;"/>
                  </svg>
                </div>
                <div class="dialog-wallet-vertical-right">${this.wallet.slice(0, 4)}...${this.wallet.slice(-4)}</div>
              </div>
              <div class="dialog-wallet-bottom">${this.wallet.slice(0, 4)}...${this.wallet.slice(-4)}</div>
            </div>
          ` : Q`
            ${this.isMobile ? Q`
                  <button
                    class="deeplink-btn"
                    @click=${() => {
      this.startWebSocketConnection(), window.location.href = this.qrUrl;
    }}
                  >
                    <img src="${Mt}" alt="Yatori Logo" />
                    YATORI PAY
                  </button>
                ` : this.useDialog ? Q`
                    <button
                      class="deeplink-btn"
                      ?disabled=${this.confirmed}
                      @click=${() => {
      this.confirmed || (this.dialogOpen = !0);
    }}
                    >
                      ${this.confirmed ? Q`
                            <svg viewBox="0 0 100 100" style="width: 24px; height: 24px; shape-rendering: geometricPrecision;">
                              <circle cx="50" cy="50" r="40" fill="none" stroke="#646CFF" stroke-width="6" class="animate-draw-circle"/>
                              <path d="M 30 50 L 45 65 L 75 30" fill="none" stroke="#646CFF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" class="checkmark-path" style="stroke-dasharray: 55; stroke-dashoffset: 55;"/>
                            </svg>
                          ` : Q`
                            <img src="${Mt}" alt="Yatori Logo" />
                            YATORI PAY
                          `}
                    </button>
                    ${this.dialogOpen ? Q`
                      <div class="dialog-overlay" @click=${(u) => {
      u.target === u.currentTarget && (this.dialogOpen = !1);
    }}>
                        <div class="dialog-content">
                          <div class="dialog-amount">$${this.amount} USDC</div>
                          <div class="dialog-qr-row">
                            <div class="dialog-wallet-vertical">${this.wallet.slice(0, 4)}...${this.wallet.slice(-4)}</div>
                            ${this.isConfirming || this.confirmingError ? this.confirmingError ? Q`<div class="confirming-spinner-wrapper"><div class="confirming-error">${this.confirmingError}</div></div>` : Q`<div class="confirming-spinner-wrapper"><div class="confirming-spinner"></div></div>` : Q`
                            <div class="qr-wrapper">
                              ${this.qrCodeData ? Q`<img src="${this.qrCodeData}" alt="Yatori QR Code" />` : Q`<p>Loading QR…</p>`}
                            </div>`}
                            <div class="dialog-wallet-vertical-right">${this.wallet.slice(0, 4)}...${this.wallet.slice(-4)}</div>
                          </div>
                          <div class="dialog-wallet-bottom">${this.wallet.slice(0, 4)}...${this.wallet.slice(-4)}</div>
                          <button
                            class="dialog-close-btn"
                            @click=${() => this.dialogOpen = !1}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    ` : ""}
                  ` : Q`
                  <div class="flat-qr">
                    <div class="dialog-amount">$${this.amount} USDC</div>
                    <div class="dialog-qr-row">
                      <div class="dialog-wallet-vertical">${this.wallet.slice(0, 4)}...${this.wallet.slice(-4)}</div>
                      ${this.isConfirming || this.confirmingError ? this.confirmingError ? Q`<div class="confirming-spinner-wrapper"><div class="confirming-error">${this.confirmingError}</div></div>` : Q`<div class="confirming-spinner-wrapper"><div class="confirming-spinner"></div></div>` : Q`
                      <div class="qr-wrapper">
                        ${this.qrCodeData ? Q`<img src="${this.qrCodeData}" alt="Yatori QR Code" />` : Q`<p>Loading QR…</p>`}
                      </div>`}
                      <div class="dialog-wallet-vertical-right">${this.wallet.slice(0, 4)}...${this.wallet.slice(-4)}</div>
                    </div>
                    <div class="dialog-wallet-bottom">${this.wallet.slice(0, 4)}...${this.wallet.slice(-4)}</div>
                  </div>
                `}
          `}
    `;
  }
};
J.styles = Nt`
  :host {
    display: block;
    width: 100%;
    min-height: var(--yp-button-height, 48px);
    padding: 0;
    text-align: center;
    font-family: sans-serif;
    box-sizing: border-box;
    color: inherit;
  }

  :host > div {
    color: inherit;
    width: 100%;
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
    margin: 0 auto;
    display: block;
  }

  .qr-wrapper.fade-out {
    opacity: 0;
  }

  .flat-qr {
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-radius: 20px;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  }

  .flat-qr .qr-wrapper {
    background: #ffffff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .flat-qr .dialog-amount {
    color: #e8e8e8;
    transition: color 0.7s ease;
  }

  .flat-qr .dialog-wallet-vertical,
  .flat-qr .dialog-wallet-vertical-right,
  .flat-qr .dialog-wallet-bottom {
    color: #d4d4d4;
    transition: color 0.7s ease;
  }

  /* Wave: starts later, slower; bottom → left → right → top */
  .flat-qr.flat-confirmed .dialog-wallet-bottom {
    color: #646CFF;
    transition-delay: 0.4s;
  }
  .flat-qr.flat-confirmed .dialog-wallet-vertical {
    color: #646CFF;
    transition-delay: 0.55s;
  }
  .flat-qr.flat-confirmed .dialog-wallet-vertical-right {
    color: #646CFF;
    transition-delay: 0.7s;
  }
  .flat-qr.flat-confirmed .dialog-amount {
    color: #646CFF;
    transition-delay: 0.85s;
  }

  .dialog-amount {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #1c1c1c;
    margin-bottom: 12px;
  }

  .dialog-qr-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .dialog-wallet-vertical {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    font-family: ui-monospace, 'SF Mono', 'Cascadia Code', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    color: #4a5568;
    user-select: none;
  }

  .dialog-wallet-vertical-right {
    writing-mode: vertical-lr;
    text-orientation: mixed;
    font-family: ui-monospace, 'SF Mono', 'Cascadia Code', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    color: #4a5568;
    user-select: none;
  }

  .dialog-wallet-bottom {
    text-align: center;
    margin-top: 12px;
    transform: rotate(180deg);
    font-family: ui-monospace, 'SF Mono', 'Cascadia Code', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    color: #4a5568;
    user-select: none;
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

  .flat-confirmed-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 262px;
    height: 262px;
    flex-shrink: 0;
    box-sizing: border-box;
  }

  .flat-confirmed-inner svg {
    width: 48px;
    height: 48px;
  }

  .confirmed svg {
    width: 48px;
    height: 48px;
  }

  .confirmed-text {
    font-size: 12px;
    color: #646CFF;
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

  .confirming-spinner-wrapper {
    width: 262px;
    height: 262px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-sizing: border-box;
  }

  .confirming-spinner {
    width: 48px;
    height: 48px;
    border: 4px solid rgba(100, 108, 255, 0.25);
    border-top-color: #646CFF;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  .confirming-error {
    width: 262px;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 16px;
    box-sizing: border-box;
    color: #646CFF;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
  }

.deeplink-btn {
  background: white;
  color: #1c1c1c;
  border: var(--yp-button-border-width, 1px) solid var(--yp-button-border-color, black);
  border-radius: var(--yp-button-border-radius, 0px);
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  letter-spacing: 0.15em;
  padding: 10px 20px;
  width: max(var(--yp-button-width, 100%), 200px);
  min-width: 200px;
  height: max(var(--yp-button-height, 48px), 44px);
  min-height: 44px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;
  margin: 0;
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
  display: block;
  flex-shrink: 0;
}

.deeplink-btn:hover:not(:disabled) {
  background: #f5f5f5;
}

.deeplink-btn:active:not(:disabled) {
  background: white;
}

.deeplink-btn:disabled {
  cursor: not-allowed;
  opacity: 1;
}

.deeplink-btn svg {
  display: block;
  flex-shrink: 0;
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
tt([
  At({ type: String })
], J.prototype, "wallet", 2);
tt([
  At({ type: Number })
], J.prototype, "amount", 2);
tt([
  At({
    type: Boolean,
    converter: { fromAttribute: (x) => x === null ? !0 : x !== "false" }
  })
], J.prototype, "useDialog", 2);
tt([
  dt()
], J.prototype, "qrCodeData", 2);
tt([
  dt()
], J.prototype, "qrUrl", 2);
tt([
  dt()
], J.prototype, "yid", 2);
tt([
  dt()
], J.prototype, "confirmed", 2);
tt([
  dt()
], J.prototype, "isMobile", 2);
tt([
  dt()
], J.prototype, "connected", 2);
tt([
  dt()
], J.prototype, "amountError", 2);
tt([
  dt()
], J.prototype, "dialogOpen", 2);
tt([
  dt()
], J.prototype, "isConfirming", 2);
tt([
  dt()
], J.prototype, "confirmingError", 2);
J = tt([
  Qt("yatori-checkout")
], J);
const pe = ({
  wallet: x,
  amount: d,
  onYatoriConfirmed: u,
  onYatoriAnimationComplete: v
}) => {
  const _ = Ut(null);
  return Tt(() => {
    const E = _.current;
    if (E)
      return u && E.addEventListener("yatori-confirmed", u), v && E.addEventListener("yatori-animation-complete", v), () => {
        u && E.removeEventListener("yatori-confirmed", u), v && E.removeEventListener("yatori-animation-complete", v);
      };
  }, [u, v]), Lt.createElement("yatori-checkout", {
    ref: _,
    wallet: x,
    amount: d
  });
};
export {
  pe as YatoriCheckout
};
