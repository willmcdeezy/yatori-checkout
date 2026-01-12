import { css as $t, LitElement as jt, html as at } from "lit";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Nt = (_) => (d, l) => {
  l !== void 0 ? l.addInitializer(() => {
    customElements.define(_, d);
  }) : customElements.define(_, d);
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const xt = globalThis, Et = xt.ShadowRoot && (xt.ShadyCSS === void 0 || xt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ut = Symbol(), zt = /* @__PURE__ */ new WeakMap();
let Qt = class {
  constructor(d, l, v) {
    if (this._$cssResult$ = !0, v !== Ut) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = d, this.t = l;
  }
  get styleSheet() {
    let d = this.o;
    const l = this.t;
    if (Et && d === void 0) {
      const v = l !== void 0 && l.length === 1;
      v && (d = zt.get(l)), d === void 0 && ((this.o = d = new CSSStyleSheet()).replaceSync(this.cssText), v && zt.set(l, d));
    }
    return d;
  }
  toString() {
    return this.cssText;
  }
};
const Ft = (_) => new Qt(typeof _ == "string" ? _ : _ + "", void 0, Ut), Tt = (_, d) => {
  if (Et) _.adoptedStyleSheets = d.map((l) => l instanceof CSSStyleSheet ? l : l.styleSheet);
  else for (const l of d) {
    const v = document.createElement("style"), y = xt.litNonce;
    y !== void 0 && v.setAttribute("nonce", y), v.textContent = l.cssText, _.appendChild(v);
  }
}, It = Et ? (_) => _ : (_) => _ instanceof CSSStyleSheet ? ((d) => {
  let l = "";
  for (const v of d.cssRules) l += v.cssText;
  return Ft(l);
})(_) : _;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ht, defineProperty: Gt, getOwnPropertyDescriptor: Xt, getOwnPropertyNames: Yt, getOwnPropertySymbols: Wt, getPrototypeOf: Zt } = Object, dt = globalThis, qt = dt.trustedTypes, Vt = qt ? qt.emptyScript : "", Dt = dt.reactiveElementPolyfillSupport, mt = (_, d) => _, kt = { toAttribute(_, d) {
  switch (d) {
    case Boolean:
      _ = _ ? Vt : null;
      break;
    case Object:
    case Array:
      _ = _ == null ? _ : JSON.stringify(_);
  }
  return _;
}, fromAttribute(_, d) {
  let l = _;
  switch (d) {
    case Boolean:
      l = _ !== null;
      break;
    case Number:
      l = _ === null ? null : Number(_);
      break;
    case Object:
    case Array:
      try {
        l = JSON.parse(_);
      } catch {
        l = null;
      }
  }
  return l;
} }, Bt = (_, d) => !Ht(_, d), Rt = { attribute: !0, type: String, converter: kt, reflect: !1, hasChanged: Bt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), dt.litPropertyMetadata ?? (dt.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class wt extends HTMLElement {
  static addInitializer(d) {
    this._$Ei(), (this.l ?? (this.l = [])).push(d);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(d, l = Rt) {
    if (l.state && (l.attribute = !1), this._$Ei(), this.elementProperties.set(d, l), !l.noAccessor) {
      const v = Symbol(), y = this.getPropertyDescriptor(d, v, l);
      y !== void 0 && Gt(this.prototype, d, y);
    }
  }
  static getPropertyDescriptor(d, l, v) {
    const { get: y, set: E } = Xt(this.prototype, d) ?? { get() {
      return this[l];
    }, set(O) {
      this[l] = O;
    } };
    return { get() {
      return y == null ? void 0 : y.call(this);
    }, set(O) {
      const U = y == null ? void 0 : y.call(this);
      E.call(this, O), this.requestUpdate(d, U, v);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(d) {
    return this.elementProperties.get(d) ?? Rt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(mt("elementProperties"))) return;
    const d = Zt(this);
    d.finalize(), d.l !== void 0 && (this.l = [...d.l]), this.elementProperties = new Map(d.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(mt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(mt("properties"))) {
      const l = this.properties, v = [...Yt(l), ...Wt(l)];
      for (const y of v) this.createProperty(y, l[y]);
    }
    const d = this[Symbol.metadata];
    if (d !== null) {
      const l = litPropertyMetadata.get(d);
      if (l !== void 0) for (const [v, y] of l) this.elementProperties.set(v, y);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [l, v] of this.elementProperties) {
      const y = this._$Eu(l, v);
      y !== void 0 && this._$Eh.set(y, l);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(d) {
    const l = [];
    if (Array.isArray(d)) {
      const v = new Set(d.flat(1 / 0).reverse());
      for (const y of v) l.unshift(It(y));
    } else d !== void 0 && l.push(It(d));
    return l;
  }
  static _$Eu(d, l) {
    const v = l.attribute;
    return v === !1 ? void 0 : typeof v == "string" ? v : typeof d == "string" ? d.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var d;
    this._$ES = new Promise((l) => this.enableUpdating = l), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (d = this.constructor.l) == null || d.forEach((l) => l(this));
  }
  addController(d) {
    var l;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(d), this.renderRoot !== void 0 && this.isConnected && ((l = d.hostConnected) == null || l.call(d));
  }
  removeController(d) {
    var l;
    (l = this._$EO) == null || l.delete(d);
  }
  _$E_() {
    const d = /* @__PURE__ */ new Map(), l = this.constructor.elementProperties;
    for (const v of l.keys()) this.hasOwnProperty(v) && (d.set(v, this[v]), delete this[v]);
    d.size > 0 && (this._$Ep = d);
  }
  createRenderRoot() {
    const d = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Tt(d, this.constructor.elementStyles), d;
  }
  connectedCallback() {
    var d;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (d = this._$EO) == null || d.forEach((l) => {
      var v;
      return (v = l.hostConnected) == null ? void 0 : v.call(l);
    });
  }
  enableUpdating(d) {
  }
  disconnectedCallback() {
    var d;
    (d = this._$EO) == null || d.forEach((l) => {
      var v;
      return (v = l.hostDisconnected) == null ? void 0 : v.call(l);
    });
  }
  attributeChangedCallback(d, l, v) {
    this._$AK(d, v);
  }
  _$EC(d, l) {
    var E;
    const v = this.constructor.elementProperties.get(d), y = this.constructor._$Eu(d, v);
    if (y !== void 0 && v.reflect === !0) {
      const O = (((E = v.converter) == null ? void 0 : E.toAttribute) !== void 0 ? v.converter : kt).toAttribute(l, v.type);
      this._$Em = d, O == null ? this.removeAttribute(y) : this.setAttribute(y, O), this._$Em = null;
    }
  }
  _$AK(d, l) {
    var E;
    const v = this.constructor, y = v._$Eh.get(d);
    if (y !== void 0 && this._$Em !== y) {
      const O = v.getPropertyOptions(y), U = typeof O.converter == "function" ? { fromAttribute: O.converter } : ((E = O.converter) == null ? void 0 : E.fromAttribute) !== void 0 ? O.converter : kt;
      this._$Em = y, this[y] = U.fromAttribute(l, O.type), this._$Em = null;
    }
  }
  requestUpdate(d, l, v) {
    if (d !== void 0) {
      if (v ?? (v = this.constructor.getPropertyOptions(d)), !(v.hasChanged ?? Bt)(this[d], l)) return;
      this.P(d, l, v);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(d, l, v) {
    this._$AL.has(d) || this._$AL.set(d, l), v.reflect === !0 && this._$Em !== d && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(d);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (l) {
      Promise.reject(l);
    }
    const d = this.scheduleUpdate();
    return d != null && await d, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var v;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [E, O] of this._$Ep) this[E] = O;
        this._$Ep = void 0;
      }
      const y = this.constructor.elementProperties;
      if (y.size > 0) for (const [E, O] of y) O.wrapped !== !0 || this._$AL.has(E) || this[E] === void 0 || this.P(E, this[E], O);
    }
    let d = !1;
    const l = this._$AL;
    try {
      d = this.shouldUpdate(l), d ? (this.willUpdate(l), (v = this._$EO) == null || v.forEach((y) => {
        var E;
        return (E = y.hostUpdate) == null ? void 0 : E.call(y);
      }), this.update(l)) : this._$EU();
    } catch (y) {
      throw d = !1, this._$EU(), y;
    }
    d && this._$AE(l);
  }
  willUpdate(d) {
  }
  _$AE(d) {
    var l;
    (l = this._$EO) == null || l.forEach((v) => {
      var y;
      return (y = v.hostUpdated) == null ? void 0 : y.call(v);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(d)), this.updated(d);
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
    this._$Ej && (this._$Ej = this._$Ej.forEach((l) => this._$EC(l, this[l]))), this._$EU();
  }
  updated(d) {
  }
  firstUpdated(d) {
  }
}
wt.elementStyles = [], wt.shadowRootOptions = { mode: "open" }, wt[mt("elementProperties")] = /* @__PURE__ */ new Map(), wt[mt("finalized")] = /* @__PURE__ */ new Map(), Dt == null || Dt({ ReactiveElement: wt }), (dt.reactiveElementVersions ?? (dt.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Kt = { attribute: !0, type: String, converter: kt, reflect: !1, hasChanged: Bt }, Jt = (_ = Kt, d, l) => {
  const { kind: v, metadata: y } = l;
  let E = globalThis.litPropertyMetadata.get(y);
  if (E === void 0 && globalThis.litPropertyMetadata.set(y, E = /* @__PURE__ */ new Map()), E.set(l.name, _), v === "accessor") {
    const { name: O } = l;
    return { set(U) {
      const T = d.get.call(this);
      d.set.call(this, U), this.requestUpdate(O, T, _);
    }, init(U) {
      return U !== void 0 && this.P(O, void 0, _), U;
    } };
  }
  if (v === "setter") {
    const { name: O } = l;
    return function(U) {
      const T = this[O];
      d.call(this, U), this.requestUpdate(O, T, _);
    };
  }
  throw Error("Unsupported decorator location: " + v);
};
function Pt(_) {
  return (d, l) => typeof l == "object" ? Jt(_, d, l) : ((v, y, E) => {
    const O = y.hasOwnProperty(E);
    return y.constructor.createProperty(E, O ? { ...v, wrapped: !0 } : v), O ? Object.getOwnPropertyDescriptor(y, E) : void 0;
  })(_, d, l);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ct(_) {
  return Pt({ ..._, state: !0, attribute: !1 });
}
function te(_) {
  return _ && _.__esModule && Object.prototype.hasOwnProperty.call(_, "default") ? _.default : _;
}
var Ot = { exports: {} }, ee = Ot.exports, Lt;
function ie() {
  return Lt || (Lt = 1, function(_, d) {
    (function(l, v) {
      _.exports = v();
    })(ee, () => (() => {
      var l = { 873: (O, U) => {
        var T, vt, ut = function() {
          var J = function(f, g) {
            var h = f, e = ot[g], t = null, r = 0, o = null, i = [], a = {}, m = function(n, c) {
              t = function(s) {
                for (var u = new Array(s), p = 0; p < s; p += 1) {
                  u[p] = new Array(s);
                  for (var x = 0; x < s; x += 1) u[p][x] = null;
                }
                return u;
              }(r = 4 * h + 17), w(0, 0), w(r - 7, 0), w(0, r - 7), b(), C(), A(n, c), h >= 7 && S(n), o == null && (o = I(h, e, i)), k(o, c);
            }, w = function(n, c) {
              for (var s = -1; s <= 7; s += 1) if (!(n + s <= -1 || r <= n + s)) for (var u = -1; u <= 7; u += 1) c + u <= -1 || r <= c + u || (t[n + s][c + u] = 0 <= s && s <= 6 && (u == 0 || u == 6) || 0 <= u && u <= 6 && (s == 0 || s == 6) || 2 <= s && s <= 4 && 2 <= u && u <= 4);
            }, C = function() {
              for (var n = 8; n < r - 8; n += 1) t[n][6] == null && (t[n][6] = n % 2 == 0);
              for (var c = 8; c < r - 8; c += 1) t[6][c] == null && (t[6][c] = c % 2 == 0);
            }, b = function() {
              for (var n = X.getPatternPosition(h), c = 0; c < n.length; c += 1) for (var s = 0; s < n.length; s += 1) {
                var u = n[c], p = n[s];
                if (t[u][p] == null) for (var x = -2; x <= 2; x += 1) for (var B = -2; B <= 2; B += 1) t[u + x][p + B] = x == -2 || x == 2 || B == -2 || B == 2 || x == 0 && B == 0;
              }
            }, S = function(n) {
              for (var c = X.getBCHTypeNumber(h), s = 0; s < 18; s += 1) {
                var u = !n && (c >> s & 1) == 1;
                t[Math.floor(s / 3)][s % 3 + r - 8 - 3] = u;
              }
              for (s = 0; s < 18; s += 1) u = !n && (c >> s & 1) == 1, t[s % 3 + r - 8 - 3][Math.floor(s / 3)] = u;
            }, A = function(n, c) {
              for (var s = e << 3 | c, u = X.getBCHTypeInfo(s), p = 0; p < 15; p += 1) {
                var x = !n && (u >> p & 1) == 1;
                p < 6 ? t[p][8] = x : p < 8 ? t[p + 1][8] = x : t[r - 15 + p][8] = x;
              }
              for (p = 0; p < 15; p += 1) x = !n && (u >> p & 1) == 1, p < 8 ? t[8][r - p - 1] = x : p < 9 ? t[8][15 - p - 1 + 1] = x : t[8][15 - p - 1] = x;
              t[r - 8][8] = !n;
            }, k = function(n, c) {
              for (var s = -1, u = r - 1, p = 7, x = 0, B = X.getMaskFunction(c), z = r - 1; z > 0; z -= 2) for (z == 6 && (z -= 1); ; ) {
                for (var q = 0; q < 2; q += 1) if (t[u][z - q] == null) {
                  var R = !1;
                  x < n.length && (R = (n[x] >>> p & 1) == 1), B(u, z - q) && (R = !R), t[u][z - q] = R, (p -= 1) == -1 && (x += 1, p = 7);
                }
                if ((u += s) < 0 || r <= u) {
                  u -= s, s = -s;
                  break;
                }
              }
            }, I = function(n, c, s) {
              for (var u = yt.getRSBlocks(n, c), p = lt(), x = 0; x < s.length; x += 1) {
                var B = s[x];
                p.put(B.getMode(), 4), p.put(B.getLength(), X.getLengthInBits(B.getMode(), n)), B.write(p);
              }
              var z = 0;
              for (x = 0; x < u.length; x += 1) z += u[x].dataCount;
              if (p.getLengthInBits() > 8 * z) throw "code length overflow. (" + p.getLengthInBits() + ">" + 8 * z + ")";
              for (p.getLengthInBits() + 4 <= 8 * z && p.put(0, 4); p.getLengthInBits() % 8 != 0; ) p.putBit(!1);
              for (; !(p.getLengthInBits() >= 8 * z || (p.put(236, 8), p.getLengthInBits() >= 8 * z)); ) p.put(17, 8);
              return function(q, R) {
                for (var j = 0, G = 0, F = 0, N = new Array(R.length), L = new Array(R.length), M = 0; M < R.length; M += 1) {
                  var Q = R[M].dataCount, H = R[M].totalCount - Q;
                  G = Math.max(G, Q), F = Math.max(F, H), N[M] = new Array(Q);
                  for (var P = 0; P < N[M].length; P += 1) N[M][P] = 255 & q.getBuffer()[P + j];
                  j += Q;
                  var V = X.getErrorCorrectPolynomial(H), Z = nt(N[M], V.getLength() - 1).mod(V);
                  for (L[M] = new Array(V.getLength() - 1), P = 0; P < L[M].length; P += 1) {
                    var W = P + Z.getLength() - L[M].length;
                    L[M][P] = W >= 0 ? Z.getAt(W) : 0;
                  }
                }
                var St = 0;
                for (P = 0; P < R.length; P += 1) St += R[P].totalCount;
                var ft = new Array(St), rt = 0;
                for (P = 0; P < G; P += 1) for (M = 0; M < R.length; M += 1) P < N[M].length && (ft[rt] = N[M][P], rt += 1);
                for (P = 0; P < F; P += 1) for (M = 0; M < R.length; M += 1) P < L[M].length && (ft[rt] = L[M][P], rt += 1);
                return ft;
              }(p, u);
            };
            a.addData = function(n, c) {
              var s = null;
              switch (c = c || "Byte") {
                case "Numeric":
                  s = bt(n);
                  break;
                case "Alphanumeric":
                  s = At(n);
                  break;
                case "Byte":
                  s = gt(n);
                  break;
                case "Kanji":
                  s = _t(n);
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
              if (h < 1) {
                for (var n = 1; n < 40; n++) {
                  for (var c = yt.getRSBlocks(n, e), s = lt(), u = 0; u < i.length; u++) {
                    var p = i[u];
                    s.put(p.getMode(), 4), s.put(p.getLength(), X.getLengthInBits(p.getMode(), n)), p.write(s);
                  }
                  var x = 0;
                  for (u = 0; u < c.length; u++) x += c[u].dataCount;
                  if (s.getLengthInBits() <= 8 * x) break;
                }
                h = n;
              }
              m(!1, function() {
                for (var B = 0, z = 0, q = 0; q < 8; q += 1) {
                  m(!0, q);
                  var R = X.getLostPoint(a);
                  (q == 0 || B > R) && (B = R, z = q);
                }
                return z;
              }());
            }, a.createTableTag = function(n, c) {
              n = n || 2;
              var s = "";
              s += '<table style="', s += " border-width: 0px; border-style: none;", s += " border-collapse: collapse;", s += " padding: 0px; margin: " + (c = c === void 0 ? 4 * n : c) + "px;", s += '">', s += "<tbody>";
              for (var u = 0; u < a.getModuleCount(); u += 1) {
                s += "<tr>";
                for (var p = 0; p < a.getModuleCount(); p += 1) s += '<td style="', s += " border-width: 0px; border-style: none;", s += " border-collapse: collapse;", s += " padding: 0px; margin: 0px;", s += " width: " + n + "px;", s += " height: " + n + "px;", s += " background-color: ", s += a.isDark(u, p) ? "#000000" : "#ffffff", s += ";", s += '"/>';
                s += "</tr>";
              }
              return (s += "</tbody>") + "</table>";
            }, a.createSvgTag = function(n, c, s, u) {
              var p = {};
              typeof arguments[0] == "object" && (n = (p = arguments[0]).cellSize, c = p.margin, s = p.alt, u = p.title), n = n || 2, c = c === void 0 ? 4 * n : c, (s = typeof s == "string" ? { text: s } : s || {}).text = s.text || null, s.id = s.text ? s.id || "qrcode-description" : null, (u = typeof u == "string" ? { text: u } : u || {}).text = u.text || null, u.id = u.text ? u.id || "qrcode-title" : null;
              var x, B, z, q, R = a.getModuleCount() * n + 2 * c, j = "";
              for (q = "l" + n + ",0 0," + n + " -" + n + ",0 0,-" + n + "z ", j += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', j += p.scalable ? "" : ' width="' + R + 'px" height="' + R + 'px"', j += ' viewBox="0 0 ' + R + " " + R + '" ', j += ' preserveAspectRatio="xMinYMin meet"', j += u.text || s.text ? ' role="img" aria-labelledby="' + D([u.id, s.id].join(" ").trim()) + '"' : "", j += ">", j += u.text ? '<title id="' + D(u.id) + '">' + D(u.text) + "</title>" : "", j += s.text ? '<description id="' + D(s.id) + '">' + D(s.text) + "</description>" : "", j += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', j += '<path d="', B = 0; B < a.getModuleCount(); B += 1) for (z = B * n + c, x = 0; x < a.getModuleCount(); x += 1) a.isDark(B, x) && (j += "M" + (x * n + c) + "," + z + q);
              return (j += '" stroke="transparent" fill="black"/>') + "</svg>";
            }, a.createDataURL = function(n, c) {
              n = n || 2, c = c === void 0 ? 4 * n : c;
              var s = a.getModuleCount() * n + 2 * c, u = c, p = s - c;
              return pt(s, s, function(x, B) {
                if (u <= x && x < p && u <= B && B < p) {
                  var z = Math.floor((x - u) / n), q = Math.floor((B - u) / n);
                  return a.isDark(q, z) ? 0 : 1;
                }
                return 1;
              });
            }, a.createImgTag = function(n, c, s) {
              n = n || 2, c = c === void 0 ? 4 * n : c;
              var u = a.getModuleCount() * n + 2 * c, p = "";
              return p += "<img", p += ' src="', p += a.createDataURL(n, c), p += '"', p += ' width="', p += u, p += '"', p += ' height="', p += u, p += '"', s && (p += ' alt="', p += D(s), p += '"'), p + "/>";
            };
            var D = function(n) {
              for (var c = "", s = 0; s < n.length; s += 1) {
                var u = n.charAt(s);
                switch (u) {
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
                    c += u;
                }
              }
              return c;
            };
            return a.createASCII = function(n, c) {
              if ((n = n || 1) < 2) return function(N) {
                N = N === void 0 ? 2 : N;
                var L, M, Q, H, P, V = 1 * a.getModuleCount() + 2 * N, Z = N, W = V - N, St = { "██": "█", "█ ": "▀", " █": "▄", "  ": " " }, ft = { "██": "▀", "█ ": "▀", " █": " ", "  ": " " }, rt = "";
                for (L = 0; L < V; L += 2) {
                  for (Q = Math.floor((L - Z) / 1), H = Math.floor((L + 1 - Z) / 1), M = 0; M < V; M += 1) P = "█", Z <= M && M < W && Z <= L && L < W && a.isDark(Q, Math.floor((M - Z) / 1)) && (P = " "), Z <= M && M < W && Z <= L + 1 && L + 1 < W && a.isDark(H, Math.floor((M - Z) / 1)) ? P += " " : P += "█", rt += N < 1 && L + 1 >= W ? ft[P] : St[P];
                  rt += `
`;
                }
                return V % 2 && N > 0 ? rt.substring(0, rt.length - V - 1) + Array(V + 1).join("▀") : rt.substring(0, rt.length - 1);
              }(c);
              n -= 1, c = c === void 0 ? 2 * n : c;
              var s, u, p, x, B = a.getModuleCount() * n + 2 * c, z = c, q = B - c, R = Array(n + 1).join("██"), j = Array(n + 1).join("  "), G = "", F = "";
              for (s = 0; s < B; s += 1) {
                for (p = Math.floor((s - z) / n), F = "", u = 0; u < B; u += 1) x = 1, z <= u && u < q && z <= s && s < q && a.isDark(p, Math.floor((u - z) / n)) && (x = 0), F += x ? R : j;
                for (p = 0; p < n; p += 1) G += F + `
`;
              }
              return G.substring(0, G.length - 1);
            }, a.renderTo2dContext = function(n, c) {
              c = c || 2;
              for (var s = a.getModuleCount(), u = 0; u < s; u++) for (var p = 0; p < s; p++) n.fillStyle = a.isDark(u, p) ? "black" : "white", n.fillRect(u * c, p * c, c, c);
            }, a;
          };
          J.stringToBytes = (J.stringToBytesFuncs = { default: function(f) {
            for (var g = [], h = 0; h < f.length; h += 1) {
              var e = f.charCodeAt(h);
              g.push(255 & e);
            }
            return g;
          } }).default, J.createStringToBytes = function(f, g) {
            var h = function() {
              for (var t = Mt(f), r = function() {
                var C = t.read();
                if (C == -1) throw "eof";
                return C;
              }, o = 0, i = {}; ; ) {
                var a = t.read();
                if (a == -1) break;
                var m = r(), w = r() << 8 | r();
                i[String.fromCharCode(a << 8 | m)] = w, o += 1;
              }
              if (o != g) throw o + " != " + g;
              return i;
            }(), e = 63;
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
          var ht, tt, K, $, it, ot = { L: 1, M: 0, Q: 3, H: 2 }, X = (ht = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], tt = 1335, K = 7973, it = function(f) {
            for (var g = 0; f != 0; ) g += 1, f >>>= 1;
            return g;
          }, ($ = {}).getBCHTypeInfo = function(f) {
            for (var g = f << 10; it(g) - it(tt) >= 0; ) g ^= tt << it(g) - it(tt);
            return 21522 ^ (f << 10 | g);
          }, $.getBCHTypeNumber = function(f) {
            for (var g = f << 12; it(g) - it(K) >= 0; ) g ^= K << it(g) - it(K);
            return f << 12 | g;
          }, $.getPatternPosition = function(f) {
            return ht[f - 1];
          }, $.getMaskFunction = function(f) {
            switch (f) {
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
                throw "bad maskPattern:" + f;
            }
          }, $.getErrorCorrectPolynomial = function(f) {
            for (var g = nt([1], 0), h = 0; h < f; h += 1) g = g.multiply(nt([1, Y.gexp(h)], 0));
            return g;
          }, $.getLengthInBits = function(f, g) {
            if (1 <= g && g < 10) switch (f) {
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
            else if (g < 27) switch (f) {
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
              if (!(g < 41)) throw "type:" + g;
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
          }, $.getLostPoint = function(f) {
            for (var g = f.getModuleCount(), h = 0, e = 0; e < g; e += 1) for (var t = 0; t < g; t += 1) {
              for (var r = 0, o = f.isDark(e, t), i = -1; i <= 1; i += 1) if (!(e + i < 0 || g <= e + i)) for (var a = -1; a <= 1; a += 1) t + a < 0 || g <= t + a || i == 0 && a == 0 || o == f.isDark(e + i, t + a) && (r += 1);
              r > 5 && (h += 3 + r - 5);
            }
            for (e = 0; e < g - 1; e += 1) for (t = 0; t < g - 1; t += 1) {
              var m = 0;
              f.isDark(e, t) && (m += 1), f.isDark(e + 1, t) && (m += 1), f.isDark(e, t + 1) && (m += 1), f.isDark(e + 1, t + 1) && (m += 1), m != 0 && m != 4 || (h += 3);
            }
            for (e = 0; e < g; e += 1) for (t = 0; t < g - 6; t += 1) f.isDark(e, t) && !f.isDark(e, t + 1) && f.isDark(e, t + 2) && f.isDark(e, t + 3) && f.isDark(e, t + 4) && !f.isDark(e, t + 5) && f.isDark(e, t + 6) && (h += 40);
            for (t = 0; t < g; t += 1) for (e = 0; e < g - 6; e += 1) f.isDark(e, t) && !f.isDark(e + 1, t) && f.isDark(e + 2, t) && f.isDark(e + 3, t) && f.isDark(e + 4, t) && !f.isDark(e + 5, t) && f.isDark(e + 6, t) && (h += 40);
            var w = 0;
            for (t = 0; t < g; t += 1) for (e = 0; e < g; e += 1) f.isDark(e, t) && (w += 1);
            return h + Math.abs(100 * w / g / g - 50) / 5 * 10;
          }, $), Y = function() {
            for (var f = new Array(256), g = new Array(256), h = 0; h < 8; h += 1) f[h] = 1 << h;
            for (h = 8; h < 256; h += 1) f[h] = f[h - 4] ^ f[h - 5] ^ f[h - 6] ^ f[h - 8];
            for (h = 0; h < 255; h += 1) g[f[h]] = h;
            return { glog: function(e) {
              if (e < 1) throw "glog(" + e + ")";
              return g[e];
            }, gexp: function(e) {
              for (; e < 0; ) e += 255;
              for (; e >= 256; ) e -= 255;
              return f[e];
            } };
          }();
          function nt(f, g) {
            if (f.length === void 0) throw f.length + "/" + g;
            var h = function() {
              for (var t = 0; t < f.length && f[t] == 0; ) t += 1;
              for (var r = new Array(f.length - t + g), o = 0; o < f.length - t; o += 1) r[o] = f[o + t];
              return r;
            }(), e = { getAt: function(t) {
              return h[t];
            }, getLength: function() {
              return h.length;
            }, multiply: function(t) {
              for (var r = new Array(e.getLength() + t.getLength() - 1), o = 0; o < e.getLength(); o += 1) for (var i = 0; i < t.getLength(); i += 1) r[o + i] ^= Y.gexp(Y.glog(e.getAt(o)) + Y.glog(t.getAt(i)));
              return nt(r, 0);
            }, mod: function(t) {
              if (e.getLength() - t.getLength() < 0) return e;
              for (var r = Y.glog(e.getAt(0)) - Y.glog(t.getAt(0)), o = new Array(e.getLength()), i = 0; i < e.getLength(); i += 1) o[i] = e.getAt(i);
              for (i = 0; i < t.getLength(); i += 1) o[i] ^= Y.gexp(Y.glog(t.getAt(i)) + r);
              return nt(o, 0).mod(t);
            } };
            return e;
          }
          var yt = /* @__PURE__ */ function() {
            var f = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], g = function(e, t) {
              var r = {};
              return r.totalCount = e, r.dataCount = t, r;
            }, h = { getRSBlocks: function(e, t) {
              var r = function(S, A) {
                switch (A) {
                  case ot.L:
                    return f[4 * (S - 1) + 0];
                  case ot.M:
                    return f[4 * (S - 1) + 1];
                  case ot.Q:
                    return f[4 * (S - 1) + 2];
                  case ot.H:
                    return f[4 * (S - 1) + 3];
                  default:
                    return;
                }
              }(e, t);
              if (r === void 0) throw "bad rs block @ typeNumber:" + e + "/errorCorrectionLevel:" + t;
              for (var o = r.length / 3, i = [], a = 0; a < o; a += 1) for (var m = r[3 * a + 0], w = r[3 * a + 1], C = r[3 * a + 2], b = 0; b < m; b += 1) i.push(g(w, C));
              return i;
            } };
            return h;
          }(), lt = function() {
            var f = [], g = 0, h = { getBuffer: function() {
              return f;
            }, getAt: function(e) {
              var t = Math.floor(e / 8);
              return (f[t] >>> 7 - e % 8 & 1) == 1;
            }, put: function(e, t) {
              for (var r = 0; r < t; r += 1) h.putBit((e >>> t - r - 1 & 1) == 1);
            }, getLengthInBits: function() {
              return g;
            }, putBit: function(e) {
              var t = Math.floor(g / 8);
              f.length <= t && f.push(0), e && (f[t] |= 128 >>> g % 8), g += 1;
            } };
            return h;
          }, bt = function(f) {
            var g = f, h = { getMode: function() {
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
          }, At = function(f) {
            var g = f, h = { getMode: function() {
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
          }, gt = function(f) {
            var g = J.stringToBytes(f);
            return { getMode: function() {
              return 4;
            }, getLength: function(h) {
              return g.length;
            }, write: function(h) {
              for (var e = 0; e < g.length; e += 1) h.put(g[e], 8);
            } };
          }, _t = function(f) {
            var g = J.stringToBytesFuncs.SJIS;
            if (!g) throw "sjis not supported.";
            (function() {
              var t = g("友");
              if (t.length != 2 || (t[0] << 8 | t[1]) != 38726) throw "sjis not supported.";
            })();
            var h = g(f), e = { getMode: function() {
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
          }, Ct = function() {
            var f = [], g = { writeByte: function(h) {
              f.push(255 & h);
            }, writeShort: function(h) {
              g.writeByte(h), g.writeByte(h >>> 8);
            }, writeBytes: function(h, e, t) {
              e = e || 0, t = t || h.length;
              for (var r = 0; r < t; r += 1) g.writeByte(h[r + e]);
            }, writeString: function(h) {
              for (var e = 0; e < h.length; e += 1) g.writeByte(h.charCodeAt(e));
            }, toByteArray: function() {
              return f;
            }, toString: function() {
              var h = "";
              h += "[";
              for (var e = 0; e < f.length; e += 1) e > 0 && (h += ","), h += f[e];
              return h + "]";
            } };
            return g;
          }, Mt = function(f) {
            var g = f, h = 0, e = 0, t = 0, r = { read: function() {
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
          }, pt = function(f, g, h) {
            for (var e = function(w, C) {
              var b = w, S = C, A = new Array(w * C), k = { setPixel: function(n, c, s) {
                A[c * b + n] = s;
              }, write: function(n) {
                n.writeString("GIF87a"), n.writeShort(b), n.writeShort(S), n.writeByte(128), n.writeByte(0), n.writeByte(0), n.writeByte(0), n.writeByte(0), n.writeByte(0), n.writeByte(255), n.writeByte(255), n.writeByte(255), n.writeString(","), n.writeShort(0), n.writeShort(0), n.writeShort(b), n.writeShort(S), n.writeByte(0);
                var c = I(2);
                n.writeByte(2);
                for (var s = 0; c.length - s > 255; ) n.writeByte(255), n.writeBytes(c, s, 255), s += 255;
                n.writeByte(c.length - s), n.writeBytes(c, s, c.length - s), n.writeByte(0), n.writeString(";");
              } }, I = function(n) {
                for (var c = 1 << n, s = 1 + (1 << n), u = n + 1, p = D(), x = 0; x < c; x += 1) p.add(String.fromCharCode(x));
                p.add(String.fromCharCode(c)), p.add(String.fromCharCode(s));
                var B, z, q, R = Ct(), j = (B = R, z = 0, q = 0, { write: function(L, M) {
                  if (L >>> M) throw "length over";
                  for (; z + M >= 8; ) B.writeByte(255 & (L << z | q)), M -= 8 - z, L >>>= 8 - z, q = 0, z = 0;
                  q |= L << z, z += M;
                }, flush: function() {
                  z > 0 && B.writeByte(q);
                } });
                j.write(c, u);
                var G = 0, F = String.fromCharCode(A[G]);
                for (G += 1; G < A.length; ) {
                  var N = String.fromCharCode(A[G]);
                  G += 1, p.contains(F + N) ? F += N : (j.write(p.indexOf(F), u), p.size() < 4095 && (p.size() == 1 << u && (u += 1), p.add(F + N)), F = N);
                }
                return j.write(p.indexOf(F), u), j.write(s, u), j.flush(), R.toByteArray();
              }, D = function() {
                var n = {}, c = 0, s = { add: function(u) {
                  if (s.contains(u)) throw "dup key:" + u;
                  n[u] = c, c += 1;
                }, size: function() {
                  return c;
                }, indexOf: function(u) {
                  return n[u];
                }, contains: function(u) {
                  return n[u] !== void 0;
                } };
                return s;
              };
              return k;
            }(f, g), t = 0; t < g; t += 1) for (var r = 0; r < f; r += 1) e.setPixel(r, t, h(r, t));
            var o = Ct();
            e.write(o);
            for (var i = function() {
              var w = 0, C = 0, b = 0, S = "", A = {}, k = function(D) {
                S += String.fromCharCode(I(63 & D));
              }, I = function(D) {
                if (!(D < 0)) {
                  if (D < 26) return 65 + D;
                  if (D < 52) return D - 26 + 97;
                  if (D < 62) return D - 52 + 48;
                  if (D == 62) return 43;
                  if (D == 63) return 47;
                }
                throw "n:" + D;
              };
              return A.writeByte = function(D) {
                for (w = w << 8 | 255 & D, C += 8, b += 1; C >= 6; ) k(w >>> C - 6), C -= 6;
              }, A.flush = function() {
                if (C > 0 && (k(w << 6 - C), w = 0, C = 0), b % 3 != 0) for (var D = 3 - b % 3, n = 0; n < D; n += 1) S += "=";
              }, A.toString = function() {
                return S;
              }, A;
            }(), a = o.toByteArray(), m = 0; m < a.length; m += 1) i.writeByte(a[m]);
            return i.flush(), "data:image/gif;base64," + i;
          };
          return J;
        }();
        ut.stringToBytesFuncs["UTF-8"] = function(J) {
          return function(ht) {
            for (var tt = [], K = 0; K < ht.length; K++) {
              var $ = ht.charCodeAt(K);
              $ < 128 ? tt.push($) : $ < 2048 ? tt.push(192 | $ >> 6, 128 | 63 & $) : $ < 55296 || $ >= 57344 ? tt.push(224 | $ >> 12, 128 | $ >> 6 & 63, 128 | 63 & $) : (K++, $ = 65536 + ((1023 & $) << 10 | 1023 & ht.charCodeAt(K)), tt.push(240 | $ >> 18, 128 | $ >> 12 & 63, 128 | $ >> 6 & 63, 128 | 63 & $));
            }
            return tt;
          }(J);
        }, (vt = typeof (T = function() {
          return ut;
        }) == "function" ? T.apply(U, []) : T) === void 0 || (O.exports = vt);
      } }, v = {};
      function y(O) {
        var U = v[O];
        if (U !== void 0) return U.exports;
        var T = v[O] = { exports: {} };
        return l[O](T, T.exports, y), T.exports;
      }
      y.n = (O) => {
        var U = O && O.__esModule ? () => O.default : () => O;
        return y.d(U, { a: U }), U;
      }, y.d = (O, U) => {
        for (var T in U) y.o(U, T) && !y.o(O, T) && Object.defineProperty(O, T, { enumerable: !0, get: U[T] });
      }, y.o = (O, U) => Object.prototype.hasOwnProperty.call(O, U);
      var E = {};
      return (() => {
        y.d(E, { default: () => g });
        const O = (h) => !!h && typeof h == "object" && !Array.isArray(h);
        function U(h, ...e) {
          if (!e.length) return h;
          const t = e.shift();
          return t !== void 0 && O(h) && O(t) ? (h = Object.assign({}, h), Object.keys(t).forEach((r) => {
            const o = h[r], i = t[r];
            Array.isArray(o) && Array.isArray(i) ? h[r] = i : O(o) && O(i) ? h[r] = U(Object.assign({}, o), i) : h[r] = i;
          }), U(h, ...e)) : h;
        }
        function T(h, e) {
          const t = document.createElement("a");
          t.download = e, t.href = h, document.body.appendChild(t), t.click(), document.body.removeChild(t);
        }
        const vt = { L: 0.07, M: 0.15, Q: 0.25, H: 0.3 };
        class ut {
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
            const i = o ? +o(-1, 0) : 0, a = o ? +o(1, 0) : 0, m = o ? +o(0, -1) : 0, w = o ? +o(0, 1) : 0, C = i + a + m + w;
            if (C !== 0) if (C > 2 || i && a || m && w) this._basicSquare({ x: e, y: t, size: r, rotation: 0 });
            else {
              if (C === 2) {
                let b = 0;
                return i && m ? b = Math.PI / 2 : m && a ? b = Math.PI : a && w && (b = -Math.PI / 2), void this._basicCornerRounded({ x: e, y: t, size: r, rotation: b });
              }
              if (C === 1) {
                let b = 0;
                return m ? b = Math.PI / 2 : a ? b = Math.PI : w && (b = -Math.PI / 2), void this._basicSideRounded({ x: e, y: t, size: r, rotation: b });
              }
            }
            else this._basicDot({ x: e, y: t, size: r, rotation: 0 });
          }
          _drawExtraRounded({ x: e, y: t, size: r, getNeighbor: o }) {
            const i = o ? +o(-1, 0) : 0, a = o ? +o(1, 0) : 0, m = o ? +o(0, -1) : 0, w = o ? +o(0, 1) : 0, C = i + a + m + w;
            if (C !== 0) if (C > 2 || i && a || m && w) this._basicSquare({ x: e, y: t, size: r, rotation: 0 });
            else {
              if (C === 2) {
                let b = 0;
                return i && m ? b = Math.PI / 2 : m && a ? b = Math.PI : a && w && (b = -Math.PI / 2), void this._basicCornerExtraRounded({ x: e, y: t, size: r, rotation: b });
              }
              if (C === 1) {
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
        const J = { dot: "dot", square: "square", extraRounded: "extra-rounded" }, ht = Object.values(J);
        class tt {
          constructor({ svg: e, type: t, window: r }) {
            this._svg = e, this._type = t, this._window = r;
          }
          draw(e, t, r, o) {
            let i;
            switch (this._type) {
              case J.square:
                i = this._drawSquare;
                break;
              case J.extraRounded:
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
        const K = { dot: "dot", square: "square" }, $ = Object.values(K);
        class it {
          constructor({ svg: e, type: t, window: r }) {
            this._svg = e, this._type = t, this._window = r;
          }
          draw(e, t, r, o) {
            let i;
            i = this._type === K.square ? this._drawSquare : this._drawDot, i.call(this, { x: e, y: t, size: r, rotation: o });
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
        const ot = "circle", X = [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1]], Y = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
        class nt {
          constructor(e, t) {
            this._roundSize = (r) => this._options.dotsOptions.roundSize ? Math.floor(r) : r, this._window = t, this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "svg"), this._element.setAttribute("width", String(e.width)), this._element.setAttribute("height", String(e.height)), this._element.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), e.dotsOptions.roundSize || this._element.setAttribute("shape-rendering", "crispEdges"), this._element.setAttribute("viewBox", `0 0 ${e.width} ${e.height}`), this._defs = this._window.document.createElementNS("http://www.w3.org/2000/svg", "defs"), this._element.appendChild(this._defs), this._imageUri = e.image, this._instanceId = nt.instanceCount++, this._options = e;
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
            const t = e.getModuleCount(), r = Math.min(this._options.width, this._options.height) - 2 * this._options.margin, o = this._options.shape === ot ? r / Math.sqrt(2) : r, i = this._roundSize(o / t);
            let a = { hideXDots: 0, hideYDots: 0, width: 0, height: 0 };
            if (this._qr = e, this._options.image) {
              if (await this.loadImage(), !this._image) return;
              const { imageOptions: m, qrOptions: w } = this._options, C = m.imageSize * vt[w.errorCorrectionLevel], b = Math.floor(C * t * t);
              a = function({ originalHeight: S, originalWidth: A, maxHiddenDots: k, maxHiddenAxisDots: I, dotSize: D }) {
                const n = { x: 0, y: 0 }, c = { x: 0, y: 0 };
                if (S <= 0 || A <= 0 || k <= 0 || D <= 0) return { height: 0, width: 0, hideYDots: 0, hideXDots: 0 };
                const s = S / A;
                return n.x = Math.floor(Math.sqrt(k / s)), n.x <= 0 && (n.x = 1), I && I < n.x && (n.x = I), n.x % 2 == 0 && n.x--, c.x = n.x * D, n.y = 1 + 2 * Math.ceil((n.x * s - 1) / 2), c.y = Math.round(c.x * s), (n.y * n.x > k || I && I < n.y) && (I && I < n.y ? (n.y = I, n.y % 2 == 0 && n.x--) : n.y -= 2, c.y = n.y * D, n.x = 1 + 2 * Math.ceil((n.y / s - 1) / 2), c.x = Math.round(c.y / s)), { height: c.y, width: c.x, hideYDots: n.y, hideXDots: n.x };
              }({ originalWidth: this._image.width, originalHeight: this._image.height, maxHiddenDots: b, maxHiddenAxisDots: t - 14, dotSize: i });
            }
            this.drawBackground(), this.drawDots((m, w) => {
              var C, b, S, A, k, I;
              return !(this._options.imageOptions.hideBackgroundDots && m >= (t - a.hideYDots) / 2 && m < (t + a.hideYDots) / 2 && w >= (t - a.hideXDots) / 2 && w < (t + a.hideXDots) / 2 || !((C = X[m]) === null || C === void 0) && C[w] || !((b = X[m - t + 7]) === null || b === void 0) && b[w] || !((S = X[m]) === null || S === void 0) && S[w - t + 7] || !((A = Y[m]) === null || A === void 0) && A[w] || !((k = Y[m - t + 7]) === null || k === void 0) && k[w] || !((I = Y[m]) === null || I === void 0) && I[w - t + 7]);
            }), this.drawCorners(), this._options.image && await this.drawImage({ width: a.width, height: a.height, count: t, dotSize: i });
          }
          drawBackground() {
            var e, t, r;
            const o = this._element, i = this._options;
            if (o) {
              const a = (e = i.backgroundOptions) === null || e === void 0 ? void 0 : e.gradient, m = (t = i.backgroundOptions) === null || t === void 0 ? void 0 : t.color;
              let w = i.height, C = i.width;
              if (a || m) {
                const b = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect");
                this._backgroundClipPath = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._backgroundClipPath.setAttribute("id", `clip-path-background-color-${this._instanceId}`), this._defs.appendChild(this._backgroundClipPath), !((r = i.backgroundOptions) === null || r === void 0) && r.round && (w = C = Math.min(i.width, i.height), b.setAttribute("rx", String(w / 2 * i.backgroundOptions.round))), b.setAttribute("x", String(this._roundSize((i.width - C) / 2))), b.setAttribute("y", String(this._roundSize((i.height - w) / 2))), b.setAttribute("width", String(C)), b.setAttribute("height", String(w)), this._backgroundClipPath.appendChild(b), this._createColor({ options: a, color: m, additionalRotation: 0, x: 0, y: 0, height: i.height, width: i.width, name: `background-color-${this._instanceId}` });
              }
            }
          }
          drawDots(e) {
            var t, r;
            if (!this._qr) throw "QR code is not defined";
            const o = this._options, i = this._qr.getModuleCount();
            if (i > o.width || i > o.height) throw "The canvas is too small.";
            const a = Math.min(o.width, o.height) - 2 * o.margin, m = o.shape === ot ? a / Math.sqrt(2) : a, w = this._roundSize(m / i), C = this._roundSize((o.width - i * w) / 2), b = this._roundSize((o.height - i * w) / 2), S = new ut({ svg: this._element, type: o.dotsOptions.type, window: this._window });
            this._dotsClipPath = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._dotsClipPath.setAttribute("id", `clip-path-dot-color-${this._instanceId}`), this._defs.appendChild(this._dotsClipPath), this._createColor({ options: (t = o.dotsOptions) === null || t === void 0 ? void 0 : t.gradient, color: o.dotsOptions.color, additionalRotation: 0, x: 0, y: 0, height: o.height, width: o.width, name: `dot-color-${this._instanceId}` });
            for (let A = 0; A < i; A++) for (let k = 0; k < i; k++) e && !e(A, k) || !((r = this._qr) === null || r === void 0) && r.isDark(A, k) && (S.draw(C + k * w, b + A * w, w, (I, D) => !(k + I < 0 || A + D < 0 || k + I >= i || A + D >= i) && !(e && !e(A + D, k + I)) && !!this._qr && this._qr.isDark(A + D, k + I)), S._element && this._dotsClipPath && this._dotsClipPath.appendChild(S._element));
            if (o.shape === ot) {
              const A = this._roundSize((a / w - i) / 2), k = i + 2 * A, I = C - A * w, D = b - A * w, n = [], c = this._roundSize(k / 2);
              for (let s = 0; s < k; s++) {
                n[s] = [];
                for (let u = 0; u < k; u++) s >= A - 1 && s <= k - A && u >= A - 1 && u <= k - A || Math.sqrt((s - c) * (s - c) + (u - c) * (u - c)) > c ? n[s][u] = 0 : n[s][u] = this._qr.isDark(u - 2 * A < 0 ? u : u >= i ? u - 2 * A : u - A, s - 2 * A < 0 ? s : s >= i ? s - 2 * A : s - A) ? 1 : 0;
              }
              for (let s = 0; s < k; s++) for (let u = 0; u < k; u++) n[s][u] && (S.draw(I + u * w, D + s * w, w, (p, x) => {
                var B;
                return !!(!((B = n[s + x]) === null || B === void 0) && B[u + p]);
              }), S._element && this._dotsClipPath && this._dotsClipPath.appendChild(S._element));
            }
          }
          drawCorners() {
            if (!this._qr) throw "QR code is not defined";
            const e = this._element, t = this._options;
            if (!e) throw "Element code is not defined";
            const r = this._qr.getModuleCount(), o = Math.min(t.width, t.height) - 2 * t.margin, i = t.shape === ot ? o / Math.sqrt(2) : o, a = this._roundSize(i / r), m = 7 * a, w = 3 * a, C = this._roundSize((t.width - r * a) / 2), b = this._roundSize((t.height - r * a) / 2);
            [[0, 0, 0], [1, 0, Math.PI / 2], [0, 1, -Math.PI / 2]].forEach(([S, A, k]) => {
              var I, D, n, c, s, u, p, x, B, z, q, R, j, G;
              const F = C + S * a * (r - 7), N = b + A * a * (r - 7);
              let L = this._dotsClipPath, M = this._dotsClipPath;
              if ((!((I = t.cornersSquareOptions) === null || I === void 0) && I.gradient || !((D = t.cornersSquareOptions) === null || D === void 0) && D.color) && (L = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), L.setAttribute("id", `clip-path-corners-square-color-${S}-${A}-${this._instanceId}`), this._defs.appendChild(L), this._cornersSquareClipPath = this._cornersDotClipPath = M = L, this._createColor({ options: (n = t.cornersSquareOptions) === null || n === void 0 ? void 0 : n.gradient, color: (c = t.cornersSquareOptions) === null || c === void 0 ? void 0 : c.color, additionalRotation: k, x: F, y: N, height: m, width: m, name: `corners-square-color-${S}-${A}-${this._instanceId}` })), ((s = t.cornersSquareOptions) === null || s === void 0 ? void 0 : s.type) && ht.includes(t.cornersSquareOptions.type)) {
                const Q = new tt({ svg: this._element, type: t.cornersSquareOptions.type, window: this._window });
                Q.draw(F, N, m, k), Q._element && L && L.appendChild(Q._element);
              } else {
                const Q = new ut({ svg: this._element, type: ((u = t.cornersSquareOptions) === null || u === void 0 ? void 0 : u.type) || t.dotsOptions.type, window: this._window });
                for (let H = 0; H < X.length; H++) for (let P = 0; P < X[H].length; P++) !((p = X[H]) === null || p === void 0) && p[P] && (Q.draw(F + P * a, N + H * a, a, (V, Z) => {
                  var W;
                  return !!(!((W = X[H + Z]) === null || W === void 0) && W[P + V]);
                }), Q._element && L && L.appendChild(Q._element));
              }
              if ((!((x = t.cornersDotOptions) === null || x === void 0) && x.gradient || !((B = t.cornersDotOptions) === null || B === void 0) && B.color) && (M = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), M.setAttribute("id", `clip-path-corners-dot-color-${S}-${A}-${this._instanceId}`), this._defs.appendChild(M), this._cornersDotClipPath = M, this._createColor({ options: (z = t.cornersDotOptions) === null || z === void 0 ? void 0 : z.gradient, color: (q = t.cornersDotOptions) === null || q === void 0 ? void 0 : q.color, additionalRotation: k, x: F + 2 * a, y: N + 2 * a, height: w, width: w, name: `corners-dot-color-${S}-${A}-${this._instanceId}` })), ((R = t.cornersDotOptions) === null || R === void 0 ? void 0 : R.type) && $.includes(t.cornersDotOptions.type)) {
                const Q = new it({ svg: this._element, type: t.cornersDotOptions.type, window: this._window });
                Q.draw(F + 2 * a, N + 2 * a, w, k), Q._element && M && M.appendChild(Q._element);
              } else {
                const Q = new ut({ svg: this._element, type: ((j = t.cornersDotOptions) === null || j === void 0 ? void 0 : j.type) || t.dotsOptions.type, window: this._window });
                for (let H = 0; H < Y.length; H++) for (let P = 0; P < Y[H].length; P++) !((G = Y[H]) === null || G === void 0) && G[P] && (Q.draw(F + P * a, N + H * a, a, (V, Z) => {
                  var W;
                  return !!(!((W = Y[H + Z]) === null || W === void 0) && W[P + V]);
                }), Q._element && M && M.appendChild(Q._element));
              }
            });
          }
          loadImage() {
            return new Promise((e, t) => {
              var r;
              const o = this._options;
              if (!o.image) return t("Image is not defined");
              if (!((r = o.nodeCanvas) === null || r === void 0) && r.loadImage) o.nodeCanvas.loadImage(o.image).then((i) => {
                var a, m;
                if (this._image = i, this._options.imageOptions.saveAsBlob) {
                  const w = (a = o.nodeCanvas) === null || a === void 0 ? void 0 : a.createCanvas(this._image.width, this._image.height);
                  (m = w == null ? void 0 : w.getContext("2d")) === null || m === void 0 || m.drawImage(i, 0, 0), this._imageUri = w == null ? void 0 : w.toDataURL();
                }
                e();
              }).catch(t);
              else {
                const i = new this._window.Image();
                typeof o.imageOptions.crossOrigin == "string" && (i.crossOrigin = o.imageOptions.crossOrigin), this._image = i, i.onload = async () => {
                  this._options.imageOptions.saveAsBlob && (this._imageUri = await async function(a, m) {
                    return new Promise((w) => {
                      const C = new m.XMLHttpRequest();
                      C.onload = function() {
                        const b = new m.FileReader();
                        b.onloadend = function() {
                          w(b.result);
                        }, b.readAsDataURL(C.response);
                      }, C.open("GET", a), C.responseType = "blob", C.send();
                    });
                  }(o.image || "", this._window)), e();
                }, i.src = o.image;
              }
            });
          }
          async drawImage({ width: e, height: t, count: r, dotSize: o }) {
            const i = this._options, a = this._roundSize((i.width - r * o) / 2), m = this._roundSize((i.height - r * o) / 2), w = a + this._roundSize(i.imageOptions.margin + (r * o - e) / 2), C = m + this._roundSize(i.imageOptions.margin + (r * o - t) / 2), b = e - 2 * i.imageOptions.margin, S = t - 2 * i.imageOptions.margin, A = this._window.document.createElementNS("http://www.w3.org/2000/svg", "image");
            A.setAttribute("href", this._imageUri || ""), A.setAttribute("xlink:href", this._imageUri || ""), A.setAttribute("x", String(w)), A.setAttribute("y", String(C)), A.setAttribute("width", `${b}px`), A.setAttribute("height", `${S}px`), this._element.appendChild(A);
          }
          _createColor({ options: e, color: t, additionalRotation: r, x: o, y: i, height: a, width: m, name: w }) {
            const C = m > a ? m : a, b = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect");
            if (b.setAttribute("x", String(o)), b.setAttribute("y", String(i)), b.setAttribute("height", String(a)), b.setAttribute("width", String(m)), b.setAttribute("clip-path", `url('#clip-path-${w}')`), e) {
              let S;
              if (e.type === "radial") S = this._window.document.createElementNS("http://www.w3.org/2000/svg", "radialGradient"), S.setAttribute("id", w), S.setAttribute("gradientUnits", "userSpaceOnUse"), S.setAttribute("fx", String(o + m / 2)), S.setAttribute("fy", String(i + a / 2)), S.setAttribute("cx", String(o + m / 2)), S.setAttribute("cy", String(i + a / 2)), S.setAttribute("r", String(C / 2));
              else {
                const A = ((e.rotation || 0) + r) % (2 * Math.PI), k = (A + 2 * Math.PI) % (2 * Math.PI);
                let I = o + m / 2, D = i + a / 2, n = o + m / 2, c = i + a / 2;
                k >= 0 && k <= 0.25 * Math.PI || k > 1.75 * Math.PI && k <= 2 * Math.PI ? (I -= m / 2, D -= a / 2 * Math.tan(A), n += m / 2, c += a / 2 * Math.tan(A)) : k > 0.25 * Math.PI && k <= 0.75 * Math.PI ? (D -= a / 2, I -= m / 2 / Math.tan(A), c += a / 2, n += m / 2 / Math.tan(A)) : k > 0.75 * Math.PI && k <= 1.25 * Math.PI ? (I += m / 2, D += a / 2 * Math.tan(A), n -= m / 2, c -= a / 2 * Math.tan(A)) : k > 1.25 * Math.PI && k <= 1.75 * Math.PI && (D += a / 2, I += m / 2 / Math.tan(A), c -= a / 2, n -= m / 2 / Math.tan(A)), S = this._window.document.createElementNS("http://www.w3.org/2000/svg", "linearGradient"), S.setAttribute("id", w), S.setAttribute("gradientUnits", "userSpaceOnUse"), S.setAttribute("x1", String(Math.round(I))), S.setAttribute("y1", String(Math.round(D))), S.setAttribute("x2", String(Math.round(n))), S.setAttribute("y2", String(Math.round(c)));
              }
              e.colorStops.forEach(({ offset: A, color: k }) => {
                const I = this._window.document.createElementNS("http://www.w3.org/2000/svg", "stop");
                I.setAttribute("offset", 100 * A + "%"), I.setAttribute("stop-color", k), S.appendChild(I);
              }), b.setAttribute("fill", `url('#${w}')`), this._defs.appendChild(S);
            } else t && b.setAttribute("fill", t);
            this._element.appendChild(b);
          }
        }
        nt.instanceCount = 0;
        const yt = nt, lt = "canvas", bt = {};
        for (let h = 0; h <= 40; h++) bt[h] = h;
        const At = { type: lt, shape: "square", width: 300, height: 300, data: "", margin: 0, qrOptions: { typeNumber: bt[0], mode: void 0, errorCorrectionLevel: "Q" }, imageOptions: { saveAsBlob: !0, hideBackgroundDots: !0, imageSize: 0.4, crossOrigin: void 0, margin: 0 }, dotsOptions: { type: "square", color: "#000", roundSize: !0 }, backgroundOptions: { round: 0, color: "#fff" } };
        function gt(h) {
          const e = Object.assign({}, h);
          if (!e.colorStops || !e.colorStops.length) throw "Field 'colorStops' is required in gradient";
          return e.rotation ? e.rotation = Number(e.rotation) : e.rotation = 0, e.colorStops = e.colorStops.map((t) => Object.assign(Object.assign({}, t), { offset: Number(t.offset) })), e;
        }
        function _t(h) {
          const e = Object.assign({}, h);
          return e.width = Number(e.width), e.height = Number(e.height), e.margin = Number(e.margin), e.imageOptions = Object.assign(Object.assign({}, e.imageOptions), { hideBackgroundDots: !!e.imageOptions.hideBackgroundDots, imageSize: Number(e.imageOptions.imageSize), margin: Number(e.imageOptions.margin) }), e.margin > Math.min(e.width, e.height) && (e.margin = Math.min(e.width, e.height)), e.dotsOptions = Object.assign({}, e.dotsOptions), e.dotsOptions.gradient && (e.dotsOptions.gradient = gt(e.dotsOptions.gradient)), e.cornersSquareOptions && (e.cornersSquareOptions = Object.assign({}, e.cornersSquareOptions), e.cornersSquareOptions.gradient && (e.cornersSquareOptions.gradient = gt(e.cornersSquareOptions.gradient))), e.cornersDotOptions && (e.cornersDotOptions = Object.assign({}, e.cornersDotOptions), e.cornersDotOptions.gradient && (e.cornersDotOptions.gradient = gt(e.cornersDotOptions.gradient))), e.backgroundOptions && (e.backgroundOptions = Object.assign({}, e.backgroundOptions), e.backgroundOptions.gradient && (e.backgroundOptions.gradient = gt(e.backgroundOptions.gradient))), e;
        }
        var Ct = y(873), Mt = y.n(Ct);
        function pt(h) {
          if (!h) throw new Error("Extension must be defined");
          h[0] === "." && (h = h.substring(1));
          const e = { bmp: "image/bmp", gif: "image/gif", ico: "image/vnd.microsoft.icon", jpeg: "image/jpeg", jpg: "image/jpeg", png: "image/png", svg: "image/svg+xml", tif: "image/tiff", tiff: "image/tiff", webp: "image/webp", pdf: "application/pdf" }[h.toLowerCase()];
          if (!e) throw new Error(`Extension "${h}" is not supported`);
          return e;
        }
        class f {
          constructor(e) {
            e != null && e.jsdom ? this._window = new e.jsdom("", { resources: "usable" }).window : this._window = window, this._options = e ? _t(U(At, e)) : At, this.update();
          }
          static _clearContainer(e) {
            e && (e.innerHTML = "");
          }
          _setupSvg() {
            if (!this._qr) return;
            const e = new yt(this._options, this._window);
            this._svg = e.getElement(), this._svgDrawingPromise = e.drawQR(this._qr).then(() => {
              var t;
              this._svg && ((t = this._extension) === null || t === void 0 || t.call(this, e.getElement(), this._options));
            });
          }
          _setupCanvas() {
            var e, t;
            this._qr && (!((e = this._options.nodeCanvas) === null || e === void 0) && e.createCanvas ? (this._nodeCanvas = this._options.nodeCanvas.createCanvas(this._options.width, this._options.height), this._nodeCanvas.width = this._options.width, this._nodeCanvas.height = this._options.height) : (this._domCanvas = document.createElement("canvas"), this._domCanvas.width = this._options.width, this._domCanvas.height = this._options.height), this._setupSvg(), this._canvasDrawingPromise = (t = this._svgDrawingPromise) === null || t === void 0 ? void 0 : t.then(() => {
              var r;
              if (!this._svg) return;
              const o = this._svg, i = new this._window.XMLSerializer().serializeToString(o), a = btoa(i), m = `data:${pt("svg")};base64,${a}`;
              if (!((r = this._options.nodeCanvas) === null || r === void 0) && r.loadImage) return this._options.nodeCanvas.loadImage(m).then((w) => {
                var C, b;
                w.width = this._options.width, w.height = this._options.height, (b = (C = this._nodeCanvas) === null || C === void 0 ? void 0 : C.getContext("2d")) === null || b === void 0 || b.drawImage(w, 0, 0);
              });
              {
                const w = new this._window.Image();
                return new Promise((C) => {
                  w.onload = () => {
                    var b, S;
                    (S = (b = this._domCanvas) === null || b === void 0 ? void 0 : b.getContext("2d")) === null || S === void 0 || S.drawImage(w, 0, 0), C();
                  }, w.src = m;
                });
              }
            }));
          }
          async _getElement(e = "png") {
            if (!this._qr) throw "QR code is empty";
            return e.toLowerCase() === "svg" ? (this._svg && this._svgDrawingPromise || this._setupSvg(), await this._svgDrawingPromise, this._svg) : ((this._domCanvas || this._nodeCanvas) && this._canvasDrawingPromise || this._setupCanvas(), await this._canvasDrawingPromise, this._domCanvas || this._nodeCanvas);
          }
          update(e) {
            f._clearContainer(this._container), this._options = e ? _t(U(this._options, e)) : this._options, this._options.data && (this._qr = Mt()(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || function(t) {
              switch (!0) {
                case /^[0-9]*$/.test(t):
                  return "Numeric";
                case /^[0-9A-Z $%*+\-./:]*$/.test(t):
                  return "Alphanumeric";
                default:
                  return "Byte";
              }
            }(this._options.data)), this._qr.make(), this._options.type === lt ? this._setupCanvas() : this._setupSvg(), this.append(this._container));
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
            const t = await this._getElement(e), r = pt(e);
            if (!t) return null;
            if (e.toLowerCase() === "svg") {
              const o = `<?xml version="1.0" standalone="no"?>\r
${new this._window.XMLSerializer().serializeToString(t)}`;
              return typeof Blob > "u" || this._options.jsdom ? Buffer.from(o) : new Blob([o], { type: r });
            }
            return new Promise((o) => {
              const i = t;
              if ("toBuffer" in i) if (r === "image/png") o(i.toBuffer(r));
              else if (r === "image/jpeg") o(i.toBuffer(r));
              else {
                if (r !== "application/pdf") throw Error("Unsupported extension");
                o(i.toBuffer(r));
              }
              else "toBlob" in i && i.toBlob(o, r, 1);
            });
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
` + i, T(`data:${pt(t)};charset=utf-8,${encodeURIComponent(i)}`, `${r}.svg`);
            } else T(o.toDataURL(pt(t)), `${r}.${t}`);
          }
        }
        const g = f;
      })(), E.default;
    })());
  }(Ot)), Ot.exports;
}
var re = ie();
const oe = /* @__PURE__ */ te(re), ne = "data:image/png;base64,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";
var se = Object.defineProperty, ae = Object.getOwnPropertyDescriptor, st = (_, d, l, v) => {
  for (var y = v > 1 ? void 0 : v ? ae(d, l) : d, E = _.length - 1, O; E >= 0; E--)
    (O = _[E]) && (y = (v ? O(d, l, y) : O(y)) || y);
  return v && y && se(d, l, y), y;
};
let et = class extends jt {
  constructor() {
    super(...arguments), this.wallet = "", this.amount = 0, this.qrCodeData = "", this.qrUrl = "", this.yid = "", this.confirmed = !1, this.isMobile = !1, this.connected = !1, this.amountError = "", this.hasInitialized = !1;
  }
  isMobileDevice() {
    return /android|iphone|ipad|ipod/i.test(navigator.userAgent);
  }
  validateAmount() {
    return this.amount > 9999.99 ? (this.amountError = "Amount cannot exceed $9,999.99", !1) : this.amount <= 0 ? (this.amountError = "Amount must be greater than $0", !1) : (this.amountError = "", !0);
  }
  async firstUpdated() {
    this.isMobile = this.isMobileDevice(), this.validateAmount() && (await this.generateQRCode(), this.hasInitialized = !0);
  }
  // Watch for amount changes AFTER initial render
  updated(_) {
    this.hasInitialized && _.has("amount") && (this.validateAmount() ? this.amountError === "" && this.generateQRCode() : (this.connected = !1, this.confirmed = !1));
  }
  async generateQRCode() {
    const _ = () => {
      const E = Date.now().toString().slice(-4), O = Math.random().toString(36).substring(2, 6);
      return `${E}${O}`;
    };
    this.yid = _(), console.log("YID:", this.yid);
    const d = {
      token: "usdcBasic",
      to: this.wallet,
      amount: this.amount,
      yid: this.yid
    };
    this.qrUrl = `https://yatori.io/mobile/yatoriRequest?token=${d.token}&to=${d.to}&amount=${d.amount}&yid=${d.yid}`;
    const l = {
      width: 200,
      height: 200,
      data: this.qrUrl,
      image: ne,
      // USDC logo bundled inline (not tamperable)
      dotsOptions: {
        color: "#000000",
        type: "dots"
      },
      backgroundOptions: {
        color: "#ffffff"
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 5
      },
      cornersSquareOptions: {
        type: "extra-rounded"
      },
      cornersDotOptions: {
        type: "rounded"
      }
    }, y = await new oe(l).getRawData("png");
    if (y) {
      const E = new FileReader();
      E.onloadend = () => {
        this.qrCodeData = E.result;
      }, E.readAsDataURL(y);
    }
    this.setupYatoriWebSocket(this.wallet, this.yid);
  }
  setupYatoriWebSocket(_, d) {
    const l = "wss://zanshin.fly.dev/confirmed", v = new WebSocket(l);
    v.addEventListener("open", () => {
      this.connected = !0;
      const y = { address: _, yid: d };
      v.send(JSON.stringify(y));
    }), v.addEventListener("message", (y) => {
      const E = JSON.parse(y.data);
      if (E.status === "confirmed") {
        this.dispatchEvent(
          new CustomEvent("yatori-confirmed", {
            detail: {
              signature: E.signature,
              status: E.status,
              confirmed: !0
            },
            bubbles: !0,
            composed: !0
          })
        );
        const O = this.renderRoot.querySelector(".qr-wrapper");
        O && O.classList.add("fade-out"), setTimeout(() => {
          this.confirmed = !0;
        }, 500);
      }
    }), v.addEventListener("error", (y) => {
      console.error("WebSocket error:", y), this.connected = !1;
    }), v.addEventListener("close", () => {
      console.log("Disconnected from proxy"), this.connected = !1;
    });
  }
  render() {
    return this.amountError ? at`
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
      ` : at`
      ${!this.connected && !this.confirmed ? at`<div class="spinner"></div>` : this.confirmed ? at`
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
          ` : at`
            ${this.isMobile ? at`
                  <button
                    class="deeplink-btn"
                    @click=${() => window.location.href = this.qrUrl}
                  >
                    Yatori Pay
                  </button>
                ` : at`
                <div class="qr-wrapper">
                    ${this.qrCodeData ? at`<img src="${this.qrCodeData}" alt="Yatori QR Code" />` : at`<p>Loading QR…</p>`}
                  </div>

                `}
          `}
    `;
  }
};
et.styles = $t`
  :host {
    display: flex-column;
    min-width: 280px;
    padding: 16px;
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
    background-color: #ffffff;
    border-radius: 30px;
    padding: 12px 12px;
    display: inline-block;
    margin-top: 16px;
  }

  .qr-wrapper img {
    margin: 0;
    display: block;
  }

  .qr-wrapper.fade-out {
    opacity: 0;
  }

  .confirmed {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 24px auto;
    gap: 16px;
  }

  .confirmed svg {
    width: 56px;
    height: 56px;
  }

  .confirmed-text {
    font-size: 18px;
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
  background: linear-gradient(to bottom right, #977DCD, #7DB6C1);
  color: white;
  border: none;
  border-radius: 9999px;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  padding: 12px 24px;
  cursor: pointer;
  transition: all 0.25s ease;
  margin-top: 16px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.4);
}

.deeplink-btn:hover {
  opacity: 0.9;
}

.deeplink-btn:active {
  background: linear-gradient(to bottom right, #977DCD, #7DB6C1);
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
st([
  Pt({ type: String })
], et.prototype, "wallet", 2);
st([
  Pt({ type: Number })
], et.prototype, "amount", 2);
st([
  ct()
], et.prototype, "qrCodeData", 2);
st([
  ct()
], et.prototype, "qrUrl", 2);
st([
  ct()
], et.prototype, "yid", 2);
st([
  ct()
], et.prototype, "confirmed", 2);
st([
  ct()
], et.prototype, "isMobile", 2);
st([
  ct()
], et.prototype, "connected", 2);
st([
  ct()
], et.prototype, "amountError", 2);
et = st([
  Nt("yatori-checkout")
], et);
