(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.15 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-color-black:#000;--tw-color-white:#fff;--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:border-1{border-style:var(--tw-border-style);border-width:1px}.tw\\:bg-white{background-color:var(--tw-color-white)}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}.tw\\:text-black{color:var(--tw-color-black)}@media(min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}@media(prefers-color-scheme:dark){.tw\\:dark\\:border-white{border-color:var(--tw-color-white)}.tw\\:dark\\:bg-black{background-color:var(--tw-color-black)}.tw\\:dark\\:text-white{color:var(--tw-color-white)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}._displayPanel_cwpad_1,._controlPanel_cwpad_8{display:block;line-height:0;box-sizing:border-box}._displayPanel_cwpad_1>canvas,._displayPanel_cwpad_1>svg,._controlPanel_cwpad_8>svg,._controlPanel_cwpad_8>canvas{display:block;box-sizing:border-box}._leg_cwpad_24{stroke:#000;stroke-linecap:round}._leg_inset_cwpad_33{stroke:#c8c8c8;stroke-linecap:round}._trace_cwpad_38{stroke-width:3;stroke:#8b0000;stroke-linecap:round;fill:none}._trace_ghost_cwpad_45{stroke-width:3;stroke:#00f;stroke-linecap:round;fill:none}._trajectory_cwpad_53{stroke-width:1;stroke:red;stroke-linecap:round;fill:none}._trajectory_ghost_cwpad_60{stroke-width:1;stroke:#add8e6;stroke-linecap:round;fill:none}@media(prefers-color-scheme:dark){._leg_cwpad_24{stroke:#fff}._joint_cwpad_29{stroke:#fff;fill:#fff}._leg_inset_cwpad_33{stroke:#646464}._trace_cwpad_38{stroke:#f08080}._trace_ghost_cwpad_45{stroke:#add8e6}._trajectory_cwpad_53{stroke:red}._trajectory_ghost_cwpad_60{stroke:#add8e6}}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Uu = {
  display_type: "svg",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 500, height: 500 },
  controls_size: { width: 480, height: 480 },
  display_class: "tw:border-1 tw-border-black tw:dark:border-white tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function ae(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Yu(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function zo(t) {
  let n, e, r;
  t.length !== 2 ? (n = ae, e = (s, l) => ae(t(s), l), r = (s, l) => t(s) - l) : (n = t === ae || t === Yu ? t : Gu, e = t, r = t);
  function i(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        e(s[h], l) < 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function a(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        e(s[h], l) <= 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function o(s, l, u = 0, c = s.length) {
    const h = i(s, l, u, c - 1);
    return h > u && r(s[h - 1], l) > -r(s[h], l) ? h - 1 : h;
  }
  return { left: i, center: o, right: a };
}
function Gu() {
  return 0;
}
function Vu(t) {
  return t === null ? NaN : +t;
}
const Ku = zo(ae), Zu = Ku.right;
zo(Vu).center;
const Wu = Math.sqrt(50), Ju = Math.sqrt(10), Qu = Math.sqrt(2);
function _e(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= Wu ? 10 : a >= Ju ? 5 : a >= Qu ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? _e(t, n, e * 2) : [s, l, u];
}
function tl(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, a, o] = r ? _e(n, t, e) : _e(t, n, e);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) l[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) l[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * o;
  return l;
}
function Mr(t, n, e) {
  return n = +n, t = +t, e = +e, _e(t, n, e)[2];
}
function nl(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Mr(n, t, e) : Mr(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
var el = { value: () => {
} };
function Co() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new oe(e);
}
function oe(t) {
  this._ = t;
}
function rl(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
oe.prototype = Co.prototype = {
  constructor: oe,
  on: function(t, n) {
    var e = this._, r = rl(t + "", e), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = il(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++a < o; )
      if (i = (t = r[a]).type) e[i] = Bi(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Bi(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new oe(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, a; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(n, e);
  }
};
function il(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Bi(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = el, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Ar = "http://www.w3.org/1999/xhtml";
const Hi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ar,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Le(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Hi.hasOwnProperty(n) ? { space: Hi[n], local: t } : t;
}
function al(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Ar && n.documentElement.namespaceURI === Ar ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function ol(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function jo(t) {
  var n = Le(t);
  return (n.local ? ol : al)(n);
}
function sl() {
}
function ii(t) {
  return t == null ? sl : function() {
    return this.querySelector(t);
  };
}
function ul(t) {
  typeof t != "function" && (t = ii(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = new Array(o), l, u, c = 0; c < o; ++c)
      (l = a[c]) && (u = t.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new G(r, this._parents);
}
function ll(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function cl() {
  return [];
}
function Ro(t) {
  return t == null ? cl : function() {
    return this.querySelectorAll(t);
  };
}
function fl(t) {
  return function() {
    return ll(t.apply(this, arguments));
  };
}
function hl(t) {
  typeof t == "function" ? t = fl(t) : t = Ro(t);
  for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
    for (var o = n[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && (r.push(t.call(l, l.__data__, u, o)), i.push(l));
  return new G(r, i);
}
function Lo(t) {
  return function() {
    return this.matches(t);
  };
}
function Fo(t) {
  return function(n) {
    return n.matches(t);
  };
}
var pl = Array.prototype.find;
function dl(t) {
  return function() {
    return pl.call(this.children, t);
  };
}
function gl() {
  return this.firstElementChild;
}
function yl(t) {
  return this.select(t == null ? gl : dl(typeof t == "function" ? t : Fo(t)));
}
var _l = Array.prototype.filter;
function vl() {
  return Array.from(this.children);
}
function ml(t) {
  return function() {
    return _l.call(this.children, t);
  };
}
function wl(t) {
  return this.selectAll(t == null ? vl : ml(typeof t == "function" ? t : Fo(t)));
}
function bl(t) {
  typeof t != "function" && (t = Lo(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new G(r, this._parents);
}
function Do(t) {
  return new Array(t.length);
}
function xl() {
  return new G(this._enter || this._groups.map(Do), this._parents);
}
function ve(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
ve.prototype = {
  constructor: ve,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Ml(t) {
  return function() {
    return t;
  };
}
function Al(t, n, e, r, i, a) {
  for (var o = 0, s, l = n.length, u = a.length; o < u; ++o)
    (s = n[o]) ? (s.__data__ = a[o], r[o] = s) : e[o] = new ve(t, a[o]);
  for (; o < l; ++o)
    (s = n[o]) && (i[o] = s);
}
function $l(t, n, e, r, i, a, o) {
  var s, l, u = /* @__PURE__ */ new Map(), c = n.length, h = a.length, f = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = n[s]) && (f[s] = p = o.call(l, l.__data__, s, n) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < h; ++s)
    p = o.call(t, a[s], s, a) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = a[s], u.delete(p)) : e[s] = new ve(t, a[s]);
  for (s = 0; s < c; ++s)
    (l = n[s]) && u.get(f[s]) === l && (i[s] = l);
}
function Pl(t) {
  return t.__data__;
}
function Tl(t, n) {
  if (!arguments.length) return Array.from(this, Pl);
  var e = n ? $l : Al, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Ml(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], h = i[u], f = h.length, p = Nl(t.call(c, c && c.__data__, u, r)), g = p.length, _ = s[u] = new Array(g), w = o[u] = new Array(g), b = l[u] = new Array(f);
    e(c, h, _, w, b, p, n);
    for (var d = 0, M = 0, y, m; d < g; ++d)
      if (y = _[d]) {
        for (d >= M && (M = d + 1); !(m = w[M]) && ++M < g; ) ;
        y._next = m || null;
      }
  }
  return o = new G(o, r), o._enter = s, o._exit = l, o;
}
function Nl(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function kl() {
  return new G(this._exit || this._groups.map(Do), this._parents);
}
function Sl(t, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function El(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), s = new Array(i), l = 0; l < o; ++l)
    for (var u = e[l], c = r[l], h = u.length, f = s[l] = new Array(h), p, g = 0; g < h; ++g)
      (p = u[g] || c[g]) && (f[g] = p);
  for (; l < i; ++l)
    s[l] = e[l];
  return new G(s, this._parents);
}
function Ol() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Il(t) {
  t || (t = zl);
  function n(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = e[a], s = o.length, l = i[a] = new Array(s), u, c = 0; c < s; ++c)
      (u = o[c]) && (l[c] = u);
    l.sort(n);
  }
  return new G(i, this._parents).order();
}
function zl(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Cl() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function jl() {
  return Array.from(this);
}
function Rl() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function Ll() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Fl() {
  return !this.node();
}
function Dl(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function ql(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Xl(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Bl(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Hl(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Ul(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Yl(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Gl(t, n) {
  var e = Le(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Xl : ql : typeof n == "function" ? e.local ? Yl : Ul : e.local ? Hl : Bl)(e, n));
}
function qo(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Vl(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Kl(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Zl(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Wl(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Vl : typeof n == "function" ? Zl : Kl)(t, n, e ?? "")) : rn(this.node(), t);
}
function rn(t, n) {
  return t.style.getPropertyValue(n) || qo(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Jl(t) {
  return function() {
    delete this[t];
  };
}
function Ql(t, n) {
  return function() {
    this[t] = n;
  };
}
function tc(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function nc(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Jl : typeof n == "function" ? tc : Ql)(t, n)) : this.node()[t];
}
function Xo(t) {
  return t.trim().split(/^|\s+/);
}
function ai(t) {
  return t.classList || new Bo(t);
}
function Bo(t) {
  this._node = t, this._names = Xo(t.getAttribute("class") || "");
}
Bo.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Ho(t, n) {
  for (var e = ai(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Uo(t, n) {
  for (var e = ai(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function ec(t) {
  return function() {
    Ho(this, t);
  };
}
function rc(t) {
  return function() {
    Uo(this, t);
  };
}
function ic(t, n) {
  return function() {
    (n.apply(this, arguments) ? Ho : Uo)(this, t);
  };
}
function ac(t, n) {
  var e = Xo(t + "");
  if (arguments.length < 2) {
    for (var r = ai(this.node()), i = -1, a = e.length; ++i < a; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? ic : n ? ec : rc)(e, n));
}
function oc() {
  this.textContent = "";
}
function sc(t) {
  return function() {
    this.textContent = t;
  };
}
function uc(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function lc(t) {
  return arguments.length ? this.each(t == null ? oc : (typeof t == "function" ? uc : sc)(t)) : this.node().textContent;
}
function cc() {
  this.innerHTML = "";
}
function fc(t) {
  return function() {
    this.innerHTML = t;
  };
}
function hc(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function pc(t) {
  return arguments.length ? this.each(t == null ? cc : (typeof t == "function" ? hc : fc)(t)) : this.node().innerHTML;
}
function dc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function gc() {
  return this.each(dc);
}
function yc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function _c() {
  return this.each(yc);
}
function vc(t) {
  var n = typeof t == "function" ? t : jo(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function mc() {
  return null;
}
function wc(t, n) {
  var e = typeof t == "function" ? t : jo(t), r = n == null ? mc : typeof n == "function" ? n : ii(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function bc() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function xc() {
  return this.each(bc);
}
function Mc() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Ac() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function $c(t) {
  return this.select(t ? Ac : Mc);
}
function Pc(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Tc(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Nc(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function kc(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, a; e < i; ++e)
        a = n[e], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++r] = a;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Sc(t, n, e) {
  return function() {
    var r = this.__on, i, a = Tc(n);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, a, e), i = { type: t.type, name: t.name, value: n, listener: a, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Ec(t, n, e) {
  var r = Nc(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, c; l < u; ++l)
        for (i = 0, c = s[l]; i < a; ++i)
          if ((o = r[i]).type === c.type && o.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = n ? Sc : kc, i = 0; i < a; ++i) this.each(s(r[i], n, e));
  return this;
}
function Yo(t, n, e) {
  var r = qo(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Oc(t, n) {
  return function() {
    return Yo(this, t, n);
  };
}
function Ic(t, n) {
  return function() {
    return Yo(this, t, n.apply(this, arguments));
  };
}
function zc(t, n) {
  return this.each((typeof n == "function" ? Ic : Oc)(t, n));
}
function* Cc() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var Go = [null];
function G(t, n) {
  this._groups = t, this._parents = n;
}
function Fn() {
  return new G([[document.documentElement]], Go);
}
function jc() {
  return this;
}
G.prototype = Fn.prototype = {
  constructor: G,
  select: ul,
  selectAll: hl,
  selectChild: yl,
  selectChildren: wl,
  filter: bl,
  data: Tl,
  enter: xl,
  exit: kl,
  join: Sl,
  merge: El,
  selection: jc,
  order: Ol,
  sort: Il,
  call: Cl,
  nodes: jl,
  node: Rl,
  size: Ll,
  empty: Fl,
  each: Dl,
  attr: Gl,
  style: Wl,
  property: nc,
  classed: ac,
  text: lc,
  html: pc,
  raise: gc,
  lower: _c,
  append: vc,
  insert: wc,
  remove: xc,
  clone: $c,
  datum: Pc,
  on: Ec,
  dispatch: zc,
  [Symbol.iterator]: Cc
};
function Rc(t) {
  return typeof t == "string" ? new G([[document.querySelector(t)]], [document.documentElement]) : new G([[t]], Go);
}
function oi(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Vo(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Dn() {
}
var Tn = 0.7, me = 1 / Tn, tn = "\\s*([+-]?\\d+)\\s*", Nn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", lt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Lc = /^#([0-9a-f]{3,8})$/, Fc = new RegExp(`^rgb\\(${tn},${tn},${tn}\\)$`), Dc = new RegExp(`^rgb\\(${lt},${lt},${lt}\\)$`), qc = new RegExp(`^rgba\\(${tn},${tn},${tn},${Nn}\\)$`), Xc = new RegExp(`^rgba\\(${lt},${lt},${lt},${Nn}\\)$`), Bc = new RegExp(`^hsl\\(${Nn},${lt},${lt}\\)$`), Hc = new RegExp(`^hsla\\(${Nn},${lt},${lt},${Nn}\\)$`), Ui = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
oi(Dn, Dt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Yi,
  // Deprecated! Use color.formatHex.
  formatHex: Yi,
  formatHex8: Uc,
  formatHsl: Yc,
  formatRgb: Gi,
  toString: Gi
});
function Yi() {
  return this.rgb().formatHex();
}
function Uc() {
  return this.rgb().formatHex8();
}
function Yc() {
  return Ko(this).formatHsl();
}
function Gi() {
  return this.rgb().formatRgb();
}
function Dt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Lc.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Vi(n) : e === 3 ? new X(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Gn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Gn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Fc.exec(t)) ? new X(n[1], n[2], n[3], 1) : (n = Dc.exec(t)) ? new X(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = qc.exec(t)) ? Gn(n[1], n[2], n[3], n[4]) : (n = Xc.exec(t)) ? Gn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Bc.exec(t)) ? Wi(n[1], n[2] / 100, n[3] / 100, 1) : (n = Hc.exec(t)) ? Wi(n[1], n[2] / 100, n[3] / 100, n[4]) : Ui.hasOwnProperty(t) ? Vi(Ui[t]) : t === "transparent" ? new X(NaN, NaN, NaN, 0) : null;
}
function Vi(t) {
  return new X(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Gn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new X(t, n, e, r);
}
function Gc(t) {
  return t instanceof Dn || (t = Dt(t)), t ? (t = t.rgb(), new X(t.r, t.g, t.b, t.opacity)) : new X();
}
function $r(t, n, e, r) {
  return arguments.length === 1 ? Gc(t) : new X(t, n, e, r ?? 1);
}
function X(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
oi(X, $r, Vo(Dn, {
  brighter(t) {
    return t = t == null ? me : Math.pow(me, t), new X(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Tn : Math.pow(Tn, t), new X(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new X(Lt(this.r), Lt(this.g), Lt(this.b), we(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ki,
  // Deprecated! Use color.formatHex.
  formatHex: Ki,
  formatHex8: Vc,
  formatRgb: Zi,
  toString: Zi
}));
function Ki() {
  return `#${jt(this.r)}${jt(this.g)}${jt(this.b)}`;
}
function Vc() {
  return `#${jt(this.r)}${jt(this.g)}${jt(this.b)}${jt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Zi() {
  const t = we(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Lt(this.r)}, ${Lt(this.g)}, ${Lt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function we(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Lt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function jt(t) {
  return t = Lt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Wi(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new et(t, n, e, r);
}
function Ko(t) {
  if (t instanceof et) return new et(t.h, t.s, t.l, t.opacity);
  if (t instanceof Dn || (t = Dt(t)), !t) return new et();
  if (t instanceof et) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, s = a - i, l = (a + i) / 2;
  return s ? (n === a ? o = (e - r) / s + (e < r) * 6 : e === a ? o = (r - n) / s + 2 : o = (n - e) / s + 4, s /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new et(o, s, l, t.opacity);
}
function Kc(t, n, e, r) {
  return arguments.length === 1 ? Ko(t) : new et(t, n, e, r ?? 1);
}
function et(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
oi(et, Kc, Vo(Dn, {
  brighter(t) {
    return t = t == null ? me : Math.pow(me, t), new et(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Tn : Math.pow(Tn, t), new et(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new X(
      cr(t >= 240 ? t - 240 : t + 120, i, r),
      cr(t, i, r),
      cr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new et(Ji(this.h), Vn(this.s), Vn(this.l), we(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = we(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ji(this.h)}, ${Vn(this.s) * 100}%, ${Vn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ji(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Vn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function cr(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const si = (t) => () => t;
function Zc(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Wc(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Jc(t) {
  return (t = +t) == 1 ? Zo : function(n, e) {
    return e - n ? Wc(n, e, t) : si(isNaN(n) ? e : n);
  };
}
function Zo(t, n) {
  var e = n - t;
  return e ? Zc(t, e) : si(isNaN(t) ? n : t);
}
const be = (function t(n) {
  var e = Jc(n);
  function r(i, a) {
    var o = e((i = $r(i)).r, (a = $r(a)).r), s = e(i.g, a.g), l = e(i.b, a.b), u = Zo(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = s(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function Qc(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(a) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - a) + n[i] * a;
    return r;
  };
}
function tf(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function nf(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), a = new Array(e), o;
  for (o = 0; o < r; ++o) i[o] = ui(t[o], n[o]);
  for (; o < e; ++o) a[o] = n[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function ef(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function tt(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function rf(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = ui(t[i], n[i]) : r[i] = n[i];
  return function(a) {
    for (i in e) r[i] = e[i](a);
    return r;
  };
}
var Pr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, fr = new RegExp(Pr.source, "g");
function af(t) {
  return function() {
    return t;
  };
}
function of(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Wo(t, n) {
  var e = Pr.lastIndex = fr.lastIndex = 0, r, i, a, o = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = Pr.exec(t)) && (i = fr.exec(n)); )
    (a = i.index) > e && (a = n.slice(e, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, l.push({ i: o, x: tt(r, i) })), e = fr.lastIndex;
  return e < n.length && (a = n.slice(e), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? l[0] ? of(l[0].x) : af(n) : (n = l.length, function(u) {
    for (var c = 0, h; c < n; ++c) s[(h = l[c]).i] = h.x(u);
    return s.join("");
  });
}
function ui(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? si(n) : (e === "number" ? tt : e === "string" ? (r = Dt(n)) ? (n = r, be) : Wo : n instanceof Dt ? be : n instanceof Date ? ef : tf(n) ? Qc : Array.isArray(n) ? nf : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? rf : tt)(t, n);
}
function sf(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Qi = 180 / Math.PI, Tr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Jo(t, n, e, r, i, a) {
  var o, s, l;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(n, t) * Qi,
    skewX: Math.atan(l) * Qi,
    scaleX: o,
    scaleY: s
  };
}
var Kn;
function uf(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Tr : Jo(n.a, n.b, n.c, n.d, n.e, n.f);
}
function lf(t) {
  return t == null || (Kn || (Kn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Kn.setAttribute("transform", t), !(t = Kn.transform.baseVal.consolidate())) ? Tr : (t = t.matrix, Jo(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Qo(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, h, f, p, g) {
    if (u !== h || c !== f) {
      var _ = p.push("translate(", null, n, null, e);
      g.push({ i: _ - 4, x: tt(u, h) }, { i: _ - 2, x: tt(c, f) });
    } else (h || f) && p.push("translate(" + h + n + f + e);
  }
  function o(u, c, h, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: tt(u, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function s(u, c, h, f) {
    u !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: tt(u, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function l(u, c, h, f, p, g) {
    if (u !== h || c !== f) {
      var _ = p.push(i(p) + "scale(", null, ",", null, ")");
      g.push({ i: _ - 4, x: tt(u, h) }, { i: _ - 2, x: tt(c, f) });
    } else (h !== 1 || f !== 1) && p.push(i(p) + "scale(" + h + "," + f + ")");
  }
  return function(u, c) {
    var h = [], f = [];
    return u = t(u), c = t(c), a(u.translateX, u.translateY, c.translateX, c.translateY, h, f), o(u.rotate, c.rotate, h, f), s(u.skewX, c.skewX, h, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, h, f), u = c = null, function(p) {
      for (var g = -1, _ = f.length, w; ++g < _; ) h[(w = f[g]).i] = w.x(p);
      return h.join("");
    };
  };
}
var cf = Qo(uf, "px, ", "px)", "deg)"), ff = Qo(lf, ", ", ")", ")"), an = 0, mn = 0, gn = 0, ts = 1e3, xe, wn, Me = 0, qt = 0, Fe = 0, kn = typeof performance == "object" && performance.now ? performance : Date, ns = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function De() {
  return qt || (ns(hf), qt = kn.now() + Fe);
}
function hf() {
  qt = 0;
}
function Sn() {
  this._call = this._time = this._next = null;
}
Sn.prototype = es.prototype = {
  constructor: Sn,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? De() : +e) + (n == null ? 0 : +n), !this._next && wn !== this && (wn ? wn._next = this : xe = this, wn = this), this._call = t, this._time = e, Nr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Nr());
  }
};
function es(t, n, e) {
  var r = new Sn();
  return r.restart(t, n, e), r;
}
function pf() {
  De(), ++an;
  for (var t = xe, n; t; )
    (n = qt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --an;
}
function ta() {
  qt = (Me = kn.now()) + Fe, an = mn = 0;
  try {
    pf();
  } finally {
    an = 0, gf(), qt = 0;
  }
}
function df() {
  var t = kn.now(), n = t - Me;
  n > ts && (Fe -= n, Me = t);
}
function gf() {
  for (var t, n = xe, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : xe = e);
  wn = t, Nr(r);
}
function Nr(t) {
  if (!an) {
    mn && (mn = clearTimeout(mn));
    var n = t - qt;
    n > 24 ? (t < 1 / 0 && (mn = setTimeout(ta, t - kn.now() - Fe)), gn && (gn = clearInterval(gn))) : (gn || (Me = kn.now(), gn = setInterval(df, ts)), an = 1, ns(ta));
  }
}
function na(t, n, e) {
  var r = new Sn();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function yf(t, n, e) {
  var r = new Sn(), i = n;
  return r._restart = r.restart, r.restart = function(a, o, s) {
    o = +o, s = s == null ? De() : +s, r._restart(function l(u) {
      u += i, r._restart(l, i += o, s), a(u);
    }, o, s);
  }, r.restart(t, n, e), r;
}
var _f = Co("start", "end", "cancel", "interrupt"), vf = [], rs = 0, ea = 1, kr = 2, se = 3, ra = 4, Sr = 5, ue = 6;
function qe(t, n, e, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (e in o) return;
  mf(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: _f,
    tween: vf,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: rs
  });
}
function li(t, n) {
  var e = ot(t, n);
  if (e.state > rs) throw new Error("too late; already scheduled");
  return e;
}
function ht(t, n) {
  var e = ot(t, n);
  if (e.state > se) throw new Error("too late; already running");
  return e;
}
function ot(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function mf(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = es(a, 0, e.time);
  function a(u) {
    e.state = ea, e.timer.restart(o, e.delay, e.time), e.delay <= u && o(u - e.delay);
  }
  function o(u) {
    var c, h, f, p;
    if (e.state !== ea) return l();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === se) return na(o);
        p.state === ra ? (p.state = ue, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = ue, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (na(function() {
      e.state === se && (e.state = ra, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = kr, e.on.call("start", t, t.__data__, e.index, e.group), e.state === kr) {
      for (e.state = se, i = new Array(f = e.tween.length), c = 0, h = -1; c < f; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var c = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = Sr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    e.state === Sr && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = ue, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function wf(t, n) {
  var e = t.__transition, r, i, a = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        a = !1;
        continue;
      }
      i = r.state > kr && r.state < Sr, r.state = ue, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    a && delete t.__transition;
  }
}
function bf(t) {
  return this.each(function() {
    wf(this, t);
  });
}
function xf(t, n) {
  var e, r;
  return function() {
    var i = ht(this, t), a = i.tween;
    if (a !== e) {
      r = e = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === n) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Mf(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var a = ht(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: n, value: e }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === n) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    a.tween = i;
  };
}
function Af(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = ot(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? xf : Mf)(e, t, n));
}
function ci(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = ht(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return ot(i, r).value[n];
  };
}
function is(t, n) {
  var e;
  return (typeof n == "number" ? tt : n instanceof Dt ? be : (e = Dt(n)) ? (n = e, be) : Wo)(t, n);
}
function $f(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Pf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Tf(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Nf(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function kf(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function Sf(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function Ef(t, n) {
  var e = Le(t), r = e === "transform" ? ff : is;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Sf : kf)(e, r, ci(this, "attr." + t, n)) : n == null ? (e.local ? Pf : $f)(e) : (e.local ? Nf : Tf)(e, r, n));
}
function Of(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function If(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function zf(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && If(t, a)), e;
  }
  return i._value = n, i;
}
function Cf(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && Of(t, a)), e;
  }
  return i._value = n, i;
}
function jf(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Le(t);
  return this.tween(e, (r.local ? zf : Cf)(r, n));
}
function Rf(t, n) {
  return function() {
    li(this, t).delay = +n.apply(this, arguments);
  };
}
function Lf(t, n) {
  return n = +n, function() {
    li(this, t).delay = n;
  };
}
function Ff(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Rf : Lf)(n, t)) : ot(this.node(), n).delay;
}
function Df(t, n) {
  return function() {
    ht(this, t).duration = +n.apply(this, arguments);
  };
}
function qf(t, n) {
  return n = +n, function() {
    ht(this, t).duration = n;
  };
}
function Xf(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Df : qf)(n, t)) : ot(this.node(), n).duration;
}
function Bf(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    ht(this, t).ease = n;
  };
}
function Hf(t) {
  var n = this._id;
  return arguments.length ? this.each(Bf(n, t)) : ot(this.node(), n).ease;
}
function Uf(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    ht(this, t).ease = e;
  };
}
function Yf(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Uf(this._id, t));
}
function Gf(t) {
  typeof t != "function" && (t = Lo(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new mt(r, this._parents, this._name, this._id);
}
function Vf(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var l = n[s], u = e[s], c = l.length, h = o[s] = new Array(c), f, p = 0; p < c; ++p)
      (f = l[p] || u[p]) && (h[p] = f);
  for (; s < r; ++s)
    o[s] = n[s];
  return new mt(o, this._parents, this._name, this._id);
}
function Kf(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Zf(t, n, e) {
  var r, i, a = Kf(n) ? li : ht;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(n, e), o.on = i;
  };
}
function Wf(t, n) {
  var e = this._id;
  return arguments.length < 2 ? ot(this.node(), e).on.on(t) : this.each(Zf(e, t, n));
}
function Jf(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function Qf() {
  return this.on("end.remove", Jf(this._id));
}
function th(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ii(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], l = s.length, u = a[o] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = s[f]) && (h = t.call(c, c.__data__, f, s)) && ("__data__" in c && (h.__data__ = c.__data__), u[f] = h, qe(u[f], n, e, f, u, ot(c, e)));
  return new mt(a, this._parents, n, e);
}
function nh(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Ro(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, c, h = 0; h < u; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), p, g = ot(c, e), _ = 0, w = f.length; _ < w; ++_)
          (p = f[_]) && qe(p, n, e, _, f, g);
        a.push(f), o.push(c);
      }
  return new mt(a, o, n, e);
}
var eh = Fn.prototype.constructor;
function rh() {
  return new eh(this._groups, this._parents);
}
function ih(t, n) {
  var e, r, i;
  return function() {
    var a = rn(this, t), o = (this.style.removeProperty(t), rn(this, t));
    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o);
  };
}
function as(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ah(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = rn(this, t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function oh(t, n, e) {
  var r, i, a;
  return function() {
    var o = rn(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), rn(this, t))), o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s));
  };
}
function sh(t, n) {
  var e, r, i, a = "style." + n, o = "end." + a, s;
  return function() {
    var l = ht(this, t), u = l.on, c = l.value[a] == null ? s || (s = as(n)) : void 0;
    (u !== e || i !== c) && (r = (e = u).copy()).on(o, i = c), l.on = r;
  };
}
function uh(t, n, e) {
  var r = (t += "") == "transform" ? cf : is;
  return n == null ? this.styleTween(t, ih(t, r)).on("end.style." + t, as(t)) : typeof n == "function" ? this.styleTween(t, oh(t, r, ci(this, "style." + t, n))).each(sh(this._id, t)) : this.styleTween(t, ah(t, r, n), e).on("end.style." + t, null);
}
function lh(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function ch(t, n, e) {
  var r, i;
  function a() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && lh(t, o, e)), r;
  }
  return a._value = n, a;
}
function fh(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, ch(t, n, e ?? ""));
}
function hh(t) {
  return function() {
    this.textContent = t;
  };
}
function ph(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function dh(t) {
  return this.tween("text", typeof t == "function" ? ph(ci(this, "text", t)) : hh(t == null ? "" : t + ""));
}
function gh(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function yh(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && gh(i)), n;
  }
  return r._value = t, r;
}
function _h(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, yh(t));
}
function vh() {
  for (var t = this._name, n = this._id, e = os(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      if (l = o[u]) {
        var c = ot(l, n);
        qe(l, t, e, u, o, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new mt(r, this._parents, t, e);
}
function mh() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(a, o) {
    var s = { value: o }, l = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var u = ht(this, r), c = u.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && a();
  });
}
var wh = 0;
function mt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function os() {
  return ++wh;
}
var dt = Fn.prototype;
mt.prototype = {
  constructor: mt,
  select: th,
  selectAll: nh,
  selectChild: dt.selectChild,
  selectChildren: dt.selectChildren,
  filter: Gf,
  merge: Vf,
  selection: rh,
  transition: vh,
  call: dt.call,
  nodes: dt.nodes,
  node: dt.node,
  size: dt.size,
  empty: dt.empty,
  each: dt.each,
  on: Wf,
  attr: Ef,
  attrTween: jf,
  style: uh,
  styleTween: fh,
  text: dh,
  textTween: _h,
  remove: Qf,
  tween: Af,
  delay: Ff,
  duration: Xf,
  ease: Hf,
  easeVarying: Yf,
  end: mh,
  [Symbol.iterator]: dt[Symbol.iterator]
};
function bh(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var xh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: bh
};
function Mh(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Ah(t) {
  var n, e;
  t instanceof mt ? (n = t._id, t = t._name) : (n = os(), (e = xh).time = De(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && qe(l, t, n, u, o, e || Mh(l, n));
  return new mt(r, this._parents, t, n);
}
Fn.prototype.interrupt = bf;
Fn.prototype.transition = Ah;
const Er = Math.PI, Or = 2 * Er, zt = 1e-6, $h = Or - zt;
function ss(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Ph(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return ss;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Th {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? ss : Ph(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, a, o) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(n, e, r, i, a) {
    if (n = +n, e = +e, r = +r, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, l = r - n, u = i - e, c = o - n, h = s - e, f = c * c + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (f > zt) if (!(Math.abs(h * l - u * c) > zt) || !a)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - o, g = i - s, _ = l * l + u * u, w = p * p + g * g, b = Math.sqrt(_), d = Math.sqrt(f), M = a * Math.tan((Er - Math.acos((_ + f - w) / (2 * b * d))) / 2), y = M / d, m = M / b;
      Math.abs(y - 1) > zt && this._append`L${n + y * c},${e + y * h}`, this._append`A${a},${a},0,0,${+(h * p > c * g)},${this._x1 = n + m * l},${this._y1 = e + m * u}`;
    }
  }
  arc(n, e, r, i, a, o) {
    if (n = +n, e = +e, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = n + s, c = e + l, h = 1 ^ o, f = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > zt || Math.abs(this._y1 - c) > zt) && this._append`L${u},${c}`, r && (f < 0 && (f = f % Or + Or), f > $h ? this._append`A${r},${r},0,1,${h},${n - s},${e - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = c}` : f > zt && this._append`A${r},${r},0,${+(f >= Er)},${h},${this._x1 = n + r * Math.cos(a)},${this._y1 = e + r * Math.sin(a)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Nh(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Ae(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function on(t) {
  return t = Ae(Math.abs(t)), t ? t[1] : NaN;
}
function kh(t, n) {
  return function(e, r) {
    for (var i = e.length, a = [], o = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), a.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(n);
  };
}
function Sh(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Eh = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function $e(t) {
  if (!(n = Eh.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new fi({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
$e.prototype = fi.prototype;
function fi(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
fi.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Oh(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var us;
function Ih(t, n) {
  var e = Ae(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], a = i - (us = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Ae(t, Math.max(0, n + a - 1))[0];
}
function ia(t, n) {
  var e = Ae(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const aa = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Nh,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => ia(t * 100, n),
  r: ia,
  s: Ih,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function oa(t) {
  return t;
}
var sa = Array.prototype.map, ua = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function zh(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? oa : kh(sa.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? oa : Sh(sa.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = $e(h);
    var f = h.fill, p = h.align, g = h.sign, _ = h.symbol, w = h.zero, b = h.width, d = h.comma, M = h.precision, y = h.trim, m = h.type;
    m === "n" ? (d = !0, m = "g") : aa[m] || (M === void 0 && (M = 12), y = !0, m = "g"), (w || f === "0" && p === "=") && (w = !0, f = "0", p = "=");
    var I = _ === "$" ? e : _ === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", z = _ === "$" ? r : /[%p]/.test(m) ? o : "", F = aa[m], K = /[defgprs%]/.test(m);
    M = M === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function Z(v) {
      var D = I, N = z, q, It, H;
      if (m === "c")
        N = F(v) + N, v = "";
      else {
        v = +v;
        var W = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? l : F(Math.abs(v), M), y && (v = Oh(v)), W && +v == 0 && g !== "+" && (W = !1), D = (W ? g === "(" ? g : s : g === "-" || g === "(" ? "" : g) + D, N = (m === "s" ? ua[8 + us / 3] : "") + N + (W && g === "(" ? ")" : ""), K) {
          for (q = -1, It = v.length; ++q < It; )
            if (H = v.charCodeAt(q), 48 > H || H > 57) {
              N = (H === 46 ? i + v.slice(q + 1) : v.slice(q)) + N, v = v.slice(0, q);
              break;
            }
        }
      }
      d && !w && (v = n(v, 1 / 0));
      var Q = D.length + v.length + N.length, C = Q < b ? new Array(b - Q + 1).join(f) : "";
      switch (d && w && (v = n(C + v, C.length ? b - N.length : 1 / 0), C = ""), p) {
        case "<":
          v = D + v + N + C;
          break;
        case "=":
          v = D + C + v + N;
          break;
        case "^":
          v = C.slice(0, Q = C.length >> 1) + D + v + N + C.slice(Q);
          break;
        default:
          v = C + D + v + N;
          break;
      }
      return a(v);
    }
    return Z.toString = function() {
      return h + "";
    }, Z;
  }
  function c(h, f) {
    var p = u((h = $e(h), h.type = "f", h)), g = Math.max(-8, Math.min(8, Math.floor(on(f) / 3))) * 3, _ = Math.pow(10, -g), w = ua[8 + g / 3];
    return function(b) {
      return p(_ * b) + w;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var Zn, ls, cs;
Ch({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ch(t) {
  return Zn = zh(t), ls = Zn.format, cs = Zn.formatPrefix, Zn;
}
function jh(t) {
  return Math.max(0, -on(Math.abs(t)));
}
function Rh(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(on(n) / 3))) * 3 - on(Math.abs(t)));
}
function Lh(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, on(n) - on(t)) + 1;
}
function Fh(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function Dh(t) {
  return function() {
    return t;
  };
}
function qh(t) {
  return +t;
}
var la = [0, 1];
function Jt(t) {
  return t;
}
function Ir(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Dh(isNaN(n) ? NaN : 0.5);
}
function Xh(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Bh(t, n, e) {
  var r = t[0], i = t[1], a = n[0], o = n[1];
  return i < r ? (r = Ir(i, r), a = e(o, a)) : (r = Ir(r, i), a = e(a, o)), function(s) {
    return a(r(s));
  };
}
function Hh(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < r; )
    i[o] = Ir(t[o], t[o + 1]), a[o] = e(n[o], n[o + 1]);
  return function(s) {
    var l = Zu(t, s, 1, r) - 1;
    return a[l](i[l](s));
  };
}
function Uh(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Yh() {
  var t = la, n = la, e = ui, r, i, a, o = Jt, s, l, u;
  function c() {
    var f = Math.min(t.length, n.length);
    return o !== Jt && (o = Xh(t[0], t[f - 1])), s = f > 2 ? Hh : Bh, l = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? a : (l || (l = s(t.map(r), n, e)))(r(o(f)));
  }
  return h.invert = function(f) {
    return o(i((u || (u = s(n, t.map(r), tt)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, qh), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), c()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = sf, c();
  }, h.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : Jt, c()) : o !== Jt;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, c()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (a = f, h) : a;
  }, function(f, p) {
    return r = f, i = p, c();
  };
}
function Gh() {
  return Yh()(Jt, Jt);
}
function Vh(t, n, e, r) {
  var i = nl(t, n, e), a;
  switch (r = $e(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(a = Rh(i, o)) && (r.precision = a), cs(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = Lh(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = jh(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return ls(r);
}
function Kh(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return tl(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Vh(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, a = r.length - 1, o = r[i], s = r[a], l, u, c = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); c-- > 0; ) {
      if (u = Mr(o, s, e), u === l)
        return r[i] = o, r[a] = s, n(r);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      l = u;
    }
    return t;
  }, t;
}
function qn() {
  var t = Gh();
  return t.copy = function() {
    return Uh(t, qn());
  }, Fh.apply(t, arguments), Kh(t);
}
function Wt(t) {
  return function() {
    return t;
  };
}
function Zh(t) {
  let n = 3;
  return t.digits = function(e) {
    if (!arguments.length) return n;
    if (e == null)
      n = null;
    else {
      const r = Math.floor(e);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${e}`);
      n = r;
    }
    return t;
  }, () => new Th(n);
}
function Wh(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function fs(t) {
  this._context = t;
}
fs.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(t, n);
        break;
    }
  }
};
function Jh(t) {
  return new fs(t);
}
function Qh(t) {
  return t[0];
}
function tp(t) {
  return t[1];
}
function np(t, n) {
  var e = Wt(!0), r = null, i = Jh, a = null, o = Zh(s);
  t = typeof t == "function" ? t : t === void 0 ? Qh : Wt(t), n = typeof n == "function" ? n : n === void 0 ? tp : Wt(n);
  function s(l) {
    var u, c = (l = Wh(l)).length, h, f = !1, p;
    for (r == null && (a = i(p = o())), u = 0; u <= c; ++u)
      !(u < c && e(h = l[u], u, l)) === f && ((f = !f) ? a.lineStart() : a.lineEnd()), f && a.point(+t(h, u, l), +n(h, u, l));
    if (p) return a = null, p + "" || null;
  }
  return s.x = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Wt(+l), s) : t;
  }, s.y = function(l) {
    return arguments.length ? (n = typeof l == "function" ? l : Wt(+l), s) : n;
  }, s.defined = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Wt(!!l), s) : e;
  }, s.curve = function(l) {
    return arguments.length ? (i = l, r != null && (a = i(r)), s) : i;
  }, s.context = function(l) {
    return arguments.length ? (l == null ? r = a = null : a = i(r = l), s) : r;
  }, s;
}
function bn(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
bn.prototype = {
  constructor: bn,
  scale: function(t) {
    return t === 1 ? this : new bn(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new bn(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
bn.prototype;
(function() {
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode(".d3-widgets{--color-border: rgb(150, 150, 150);--color-background: #ccc;--color-text: #000;--color-symbol: #fff;--color-lit: #eee;--color-lit-symbol: #bbb;--color-selected: #000;--color-handle: #fff;--dw-font-size: 16px;--dw-line-height: 1.25;font-size:var(--dw-font-size);line-height:var(--dw-line-height);font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-weight:400}@media (prefers-color-scheme: dark){.d3-widgets{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}}.d3-widgets.dark-mode{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}._widget_9wct0_49{stroke:var(--color-border);stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:var(--color-background);font-size:1em}._widget_9wct0_49 ._title_9wct0_61{font-size:1.25em;fill:var(--color-text);stroke:none;text-anchor:middle}._widget_9wct0_49 ._label_9wct0_69{fill:var(--color-text);stroke:none}._widget_9wct0_49 ._lit_9wct0_74{fill:var(--color-lit)}._button_9wct0_78>._symbol_9wct0_78,._radio_9wct0_79>._radiobutton_9wct0_79>._symbol_9wct0_78{fill:var(--color-symbol);fill-rule:nonzero;pointer-events:none}._widget_9wct0_49 ._symbol_9wct0_78._selected_9wct0_85,._toggle_9wct0_86._selected_9wct0_85,._widget_9wct0_49 ._symbol_9wct0_78._selected_9wct0_85._lit_9wct0_74{fill:var(--color-selected)}._widget_9wct0_49 ._symbol_9wct0_78._lit_9wct0_74{fill:var(--color-lit-symbol)}._slider_9wct0_95>._track_9wct0_95,._toggle_9wct0_86>._track_9wct0_95{pointer-events:none}._slider_9wct0_95>._track_overlay_9wct0_100,._toggle_9wct0_86>._track_overlay_9wct0_100{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_9wct0_95>._handle_9wct0_108,._toggle_9wct0_86>._handle_9wct0_108{fill:var(--color-handle)}")), document.head.appendChild(t);
    }
  } catch (n) {
    console.error("vite-plugin-css-injected-by-js", n);
  }
})();
function le(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function ep(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function hs(t) {
  let n, e, r;
  t.length !== 2 ? (n = le, e = (s, l) => le(t(s), l), r = (s, l) => t(s) - l) : (n = t === le || t === ep ? t : rp, e = t, r = t);
  function i(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        e(s[h], l) < 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function a(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        e(s[h], l) <= 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function o(s, l, u = 0, c = s.length) {
    const h = i(s, l, u, c - 1);
    return h > u && r(s[h - 1], l) > -r(s[h], l) ? h - 1 : h;
  }
  return { left: i, center: o, right: a };
}
function rp() {
  return 0;
}
function ip(t) {
  return t === null ? NaN : +t;
}
const ap = hs(le), op = ap.right;
hs(ip).center;
const sp = Math.sqrt(50), up = Math.sqrt(10), lp = Math.sqrt(2);
function Pe(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= sp ? 10 : a >= up ? 5 : a >= lp ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? Pe(t, n, e * 2) : [s, l, u];
}
function cp(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, a, o] = r ? Pe(n, t, e) : Pe(t, n, e);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) l[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) l[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * o;
  return l;
}
function zr(t, n, e) {
  return n = +n, t = +t, e = +e, Pe(t, n, e)[2];
}
function fp(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? zr(n, t, e) : zr(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Wn(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function hp(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * e;
  return a;
}
var pp = { value: () => {
} };
function hi() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new ce(e);
}
function ce(t) {
  this._ = t;
}
function dp(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
ce.prototype = hi.prototype = {
  constructor: ce,
  on: function(t, n) {
    var e = this._, r = dp(t + "", e), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = gp(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++a < o; )
      if (i = (t = r[a]).type) e[i] = ca(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = ca(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new ce(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, a; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(n, e);
  }
};
function gp(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function ca(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = pp, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Cr = "http://www.w3.org/1999/xhtml";
const fa = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Cr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Xe(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), fa.hasOwnProperty(n) ? { space: fa[n], local: t } : t;
}
function yp(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Cr && n.documentElement.namespaceURI === Cr ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function _p(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ps(t) {
  var n = Xe(t);
  return (n.local ? _p : yp)(n);
}
function vp() {
}
function pi(t) {
  return t == null ? vp : function() {
    return this.querySelector(t);
  };
}
function mp(t) {
  typeof t != "function" && (t = pi(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = new Array(o), l, u, c = 0; c < o; ++c)
      (l = a[c]) && (u = t.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new V(r, this._parents);
}
function wp(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function bp() {
  return [];
}
function ds(t) {
  return t == null ? bp : function() {
    return this.querySelectorAll(t);
  };
}
function xp(t) {
  return function() {
    return wp(t.apply(this, arguments));
  };
}
function Mp(t) {
  typeof t == "function" ? t = xp(t) : t = ds(t);
  for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
    for (var o = n[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && (r.push(t.call(l, l.__data__, u, o)), i.push(l));
  return new V(r, i);
}
function gs(t) {
  return function() {
    return this.matches(t);
  };
}
function ys(t) {
  return function(n) {
    return n.matches(t);
  };
}
var Ap = Array.prototype.find;
function $p(t) {
  return function() {
    return Ap.call(this.children, t);
  };
}
function Pp() {
  return this.firstElementChild;
}
function Tp(t) {
  return this.select(t == null ? Pp : $p(typeof t == "function" ? t : ys(t)));
}
var Np = Array.prototype.filter;
function kp() {
  return Array.from(this.children);
}
function Sp(t) {
  return function() {
    return Np.call(this.children, t);
  };
}
function Ep(t) {
  return this.selectAll(t == null ? kp : Sp(typeof t == "function" ? t : ys(t)));
}
function Op(t) {
  typeof t != "function" && (t = gs(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new V(r, this._parents);
}
function _s(t) {
  return new Array(t.length);
}
function Ip() {
  return new V(this._enter || this._groups.map(_s), this._parents);
}
function Te(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
Te.prototype = {
  constructor: Te,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function zp(t) {
  return function() {
    return t;
  };
}
function Cp(t, n, e, r, i, a) {
  for (var o = 0, s, l = n.length, u = a.length; o < u; ++o)
    (s = n[o]) ? (s.__data__ = a[o], r[o] = s) : e[o] = new Te(t, a[o]);
  for (; o < l; ++o)
    (s = n[o]) && (i[o] = s);
}
function jp(t, n, e, r, i, a, o) {
  var s, l, u = /* @__PURE__ */ new Map(), c = n.length, h = a.length, f = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = n[s]) && (f[s] = p = o.call(l, l.__data__, s, n) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < h; ++s)
    p = o.call(t, a[s], s, a) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = a[s], u.delete(p)) : e[s] = new Te(t, a[s]);
  for (s = 0; s < c; ++s)
    (l = n[s]) && u.get(f[s]) === l && (i[s] = l);
}
function Rp(t) {
  return t.__data__;
}
function Lp(t, n) {
  if (!arguments.length) return Array.from(this, Rp);
  var e = n ? jp : Cp, r = this._parents, i = this._groups;
  typeof t != "function" && (t = zp(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], h = i[u], f = h.length, p = Fp(t.call(c, c && c.__data__, u, r)), g = p.length, _ = s[u] = new Array(g), w = o[u] = new Array(g), b = l[u] = new Array(f);
    e(c, h, _, w, b, p, n);
    for (var d = 0, M = 0, y, m; d < g; ++d)
      if (y = _[d]) {
        for (d >= M && (M = d + 1); !(m = w[M]) && ++M < g; ) ;
        y._next = m || null;
      }
  }
  return o = new V(o, r), o._enter = s, o._exit = l, o;
}
function Fp(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Dp() {
  return new V(this._exit || this._groups.map(_s), this._parents);
}
function qp(t, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function Xp(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), s = new Array(i), l = 0; l < o; ++l)
    for (var u = e[l], c = r[l], h = u.length, f = s[l] = new Array(h), p, g = 0; g < h; ++g)
      (p = u[g] || c[g]) && (f[g] = p);
  for (; l < i; ++l)
    s[l] = e[l];
  return new V(s, this._parents);
}
function Bp() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Hp(t) {
  t || (t = Up);
  function n(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = e[a], s = o.length, l = i[a] = new Array(s), u, c = 0; c < s; ++c)
      (u = o[c]) && (l[c] = u);
    l.sort(n);
  }
  return new V(i, this._parents).order();
}
function Up(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Yp() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Gp() {
  return Array.from(this);
}
function Vp() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function Kp() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Zp() {
  return !this.node();
}
function Wp(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function Jp(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Qp(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function td(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function nd(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function ed(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function rd(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function id(t, n) {
  var e = Xe(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Qp : Jp : typeof n == "function" ? e.local ? rd : ed : e.local ? nd : td)(e, n));
}
function vs(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function ad(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function od(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function sd(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function ud(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? ad : typeof n == "function" ? sd : od)(t, n, e ?? "")) : sn(this.node(), t);
}
function sn(t, n) {
  return t.style.getPropertyValue(n) || vs(t).getComputedStyle(t, null).getPropertyValue(n);
}
function ld(t) {
  return function() {
    delete this[t];
  };
}
function cd(t, n) {
  return function() {
    this[t] = n;
  };
}
function fd(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function hd(t, n) {
  return arguments.length > 1 ? this.each((n == null ? ld : typeof n == "function" ? fd : cd)(t, n)) : this.node()[t];
}
function ms(t) {
  return t.trim().split(/^|\s+/);
}
function di(t) {
  return t.classList || new ws(t);
}
function ws(t) {
  this._node = t, this._names = ms(t.getAttribute("class") || "");
}
ws.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function bs(t, n) {
  for (var e = di(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function xs(t, n) {
  for (var e = di(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function pd(t) {
  return function() {
    bs(this, t);
  };
}
function dd(t) {
  return function() {
    xs(this, t);
  };
}
function gd(t, n) {
  return function() {
    (n.apply(this, arguments) ? bs : xs)(this, t);
  };
}
function yd(t, n) {
  var e = ms(t + "");
  if (arguments.length < 2) {
    for (var r = di(this.node()), i = -1, a = e.length; ++i < a; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? gd : n ? pd : dd)(e, n));
}
function _d() {
  this.textContent = "";
}
function vd(t) {
  return function() {
    this.textContent = t;
  };
}
function md(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function wd(t) {
  return arguments.length ? this.each(t == null ? _d : (typeof t == "function" ? md : vd)(t)) : this.node().textContent;
}
function bd() {
  this.innerHTML = "";
}
function xd(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Md(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function Ad(t) {
  return arguments.length ? this.each(t == null ? bd : (typeof t == "function" ? Md : xd)(t)) : this.node().innerHTML;
}
function $d() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Pd() {
  return this.each($d);
}
function Td() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Nd() {
  return this.each(Td);
}
function kd(t) {
  var n = typeof t == "function" ? t : ps(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Sd() {
  return null;
}
function Ed(t, n) {
  var e = typeof t == "function" ? t : ps(t), r = n == null ? Sd : typeof n == "function" ? n : pi(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Od() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Id() {
  return this.each(Od);
}
function zd() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Cd() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function jd(t) {
  return this.select(t ? Cd : zd);
}
function Rd(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Ld(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Fd(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Dd(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, a; e < i; ++e)
        a = n[e], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++r] = a;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function qd(t, n, e) {
  return function() {
    var r = this.__on, i, a = Ld(n);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, a, e), i = { type: t.type, name: t.name, value: n, listener: a, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Xd(t, n, e) {
  var r = Fd(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, c; l < u; ++l)
        for (i = 0, c = s[l]; i < a; ++i)
          if ((o = r[i]).type === c.type && o.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = n ? qd : Dd, i = 0; i < a; ++i) this.each(s(r[i], n, e));
  return this;
}
function Ms(t, n, e) {
  var r = vs(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Bd(t, n) {
  return function() {
    return Ms(this, t, n);
  };
}
function Hd(t, n) {
  return function() {
    return Ms(this, t, n.apply(this, arguments));
  };
}
function Ud(t, n) {
  return this.each((typeof n == "function" ? Hd : Bd)(t, n));
}
function* Yd() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var As = [null];
function V(t, n) {
  this._groups = t, this._parents = n;
}
function Xn() {
  return new V([[document.documentElement]], As);
}
function Gd() {
  return this;
}
V.prototype = Xn.prototype = {
  constructor: V,
  select: mp,
  selectAll: Mp,
  selectChild: Tp,
  selectChildren: Ep,
  filter: Op,
  data: Lp,
  enter: Ip,
  exit: Dp,
  join: qp,
  merge: Xp,
  selection: Gd,
  order: Bp,
  sort: Hp,
  call: Yp,
  nodes: Gp,
  node: Vp,
  size: Kp,
  empty: Zp,
  each: Wp,
  attr: id,
  style: ud,
  property: hd,
  classed: yd,
  text: wd,
  html: Ad,
  raise: Pd,
  lower: Nd,
  append: kd,
  insert: Ed,
  remove: Id,
  clone: jd,
  datum: Rd,
  on: Xd,
  dispatch: Ud,
  [Symbol.iterator]: Yd
};
function L(t) {
  return typeof t == "string" ? new V([[document.querySelector(t)]], [document.documentElement]) : new V([[t]], As);
}
function Vd(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function ha(t, n) {
  if (t = Vd(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Kd = { passive: !1 }, En = { capture: !0, passive: !1 };
function hr(t) {
  t.stopImmediatePropagation();
}
function nn(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Zd(t) {
  var n = t.document.documentElement, e = L(t).on("dragstart.drag", nn, En);
  "onselectstart" in n ? e.on("selectstart.drag", nn, En) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Wd(t, n) {
  var e = t.document.documentElement, r = L(t).on("dragstart.drag", null);
  n && (r.on("click.drag", nn, En), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const Jn = (t) => () => t;
function jr(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: a,
  x: o,
  y: s,
  dx: l,
  dy: u,
  dispatch: c
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: o, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
jr.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Jd(t) {
  return !t.ctrlKey && !t.button;
}
function Qd() {
  return this.parentNode;
}
function t0(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function n0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function e0() {
  var t = Jd, n = Qd, e = t0, r = n0, i = {}, a = hi("start", "drag", "end"), o = 0, s, l, u, c, h = 0;
  function f(y) {
    y.on("mousedown.drag", p).filter(r).on("touchstart.drag", w).on("touchmove.drag", b, Kd).on("touchend.drag touchcancel.drag", d).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(y, m) {
    if (!(c || !t.call(this, y, m))) {
      var I = M(this, n.call(this, y, m), y, m, "mouse");
      I && (L(y.view).on("mousemove.drag", g, En).on("mouseup.drag", _, En), Zd(y.view), hr(y), u = !1, s = y.clientX, l = y.clientY, I("start", y));
    }
  }
  function g(y) {
    if (nn(y), !u) {
      var m = y.clientX - s, I = y.clientY - l;
      u = m * m + I * I > h;
    }
    i.mouse("drag", y);
  }
  function _(y) {
    L(y.view).on("mousemove.drag mouseup.drag", null), Wd(y.view, u), nn(y), i.mouse("end", y);
  }
  function w(y, m) {
    if (t.call(this, y, m)) {
      var I = y.changedTouches, z = n.call(this, y, m), F = I.length, K, Z;
      for (K = 0; K < F; ++K)
        (Z = M(this, z, y, m, I[K].identifier, I[K])) && (hr(y), Z("start", y, I[K]));
    }
  }
  function b(y) {
    var m = y.changedTouches, I = m.length, z, F;
    for (z = 0; z < I; ++z)
      (F = i[m[z].identifier]) && (nn(y), F("drag", y, m[z]));
  }
  function d(y) {
    var m = y.changedTouches, I = m.length, z, F;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), z = 0; z < I; ++z)
      (F = i[m[z].identifier]) && (hr(y), F("end", y, m[z]));
  }
  function M(y, m, I, z, F, K) {
    var Z = a.copy(), v = ha(K || I, m), D, N, q;
    if ((q = e.call(y, new jr("beforestart", {
      sourceEvent: I,
      target: f,
      identifier: F,
      active: o,
      x: v[0],
      y: v[1],
      dx: 0,
      dy: 0,
      dispatch: Z
    }), z)) != null)
      return D = q.x - v[0] || 0, N = q.y - v[1] || 0, function It(H, W, Q) {
        var C = v, lr;
        switch (H) {
          case "start":
            i[F] = It, lr = o++;
            break;
          case "end":
            delete i[F], --o;
          // falls through
          case "drag":
            v = ha(Q || W, m), lr = o;
            break;
        }
        Z.call(
          H,
          y,
          new jr(H, {
            sourceEvent: W,
            subject: q,
            target: f,
            identifier: F,
            active: lr,
            x: v[0] + D,
            y: v[1] + N,
            dx: v[0] - C[0],
            dy: v[1] - C[1],
            dispatch: Z
          }),
          z
        );
      };
  }
  return f.filter = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : Jn(!!y), f) : t;
  }, f.container = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : Jn(y), f) : n;
  }, f.subject = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : Jn(y), f) : e;
  }, f.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : Jn(!!y), f) : r;
  }, f.on = function() {
    var y = a.on.apply(a, arguments);
    return y === a ? f : y;
  }, f.clickDistance = function(y) {
    return arguments.length ? (h = (y = +y) * y, f) : Math.sqrt(h);
  }, f;
}
function gi(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function $s(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Bn() {
}
var On = 0.7, Ne = 1 / On, en = "\\s*([+-]?\\d+)\\s*", In = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ct = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", r0 = /^#([0-9a-f]{3,8})$/, i0 = new RegExp(`^rgb\\(${en},${en},${en}\\)$`), a0 = new RegExp(`^rgb\\(${ct},${ct},${ct}\\)$`), o0 = new RegExp(`^rgba\\(${en},${en},${en},${In}\\)$`), s0 = new RegExp(`^rgba\\(${ct},${ct},${ct},${In}\\)$`), u0 = new RegExp(`^hsl\\(${In},${ct},${ct}\\)$`), l0 = new RegExp(`^hsla\\(${In},${ct},${ct},${In}\\)$`), pa = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
gi(Bn, Xt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: da,
  // Deprecated! Use color.formatHex.
  formatHex: da,
  formatHex8: c0,
  formatHsl: f0,
  formatRgb: ga,
  toString: ga
});
function da() {
  return this.rgb().formatHex();
}
function c0() {
  return this.rgb().formatHex8();
}
function f0() {
  return Ps(this).formatHsl();
}
function ga() {
  return this.rgb().formatRgb();
}
function Xt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = r0.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? ya(n) : e === 3 ? new B(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Qn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Qn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = i0.exec(t)) ? new B(n[1], n[2], n[3], 1) : (n = a0.exec(t)) ? new B(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = o0.exec(t)) ? Qn(n[1], n[2], n[3], n[4]) : (n = s0.exec(t)) ? Qn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = u0.exec(t)) ? ma(n[1], n[2] / 100, n[3] / 100, 1) : (n = l0.exec(t)) ? ma(n[1], n[2] / 100, n[3] / 100, n[4]) : pa.hasOwnProperty(t) ? ya(pa[t]) : t === "transparent" ? new B(NaN, NaN, NaN, 0) : null;
}
function ya(t) {
  return new B(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Qn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new B(t, n, e, r);
}
function h0(t) {
  return t instanceof Bn || (t = Xt(t)), t ? (t = t.rgb(), new B(t.r, t.g, t.b, t.opacity)) : new B();
}
function Rr(t, n, e, r) {
  return arguments.length === 1 ? h0(t) : new B(t, n, e, r ?? 1);
}
function B(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
gi(B, Rr, $s(Bn, {
  brighter(t) {
    return t = t == null ? Ne : Math.pow(Ne, t), new B(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? On : Math.pow(On, t), new B(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new B(Ft(this.r), Ft(this.g), Ft(this.b), ke(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: _a,
  // Deprecated! Use color.formatHex.
  formatHex: _a,
  formatHex8: p0,
  formatRgb: va,
  toString: va
}));
function _a() {
  return `#${Rt(this.r)}${Rt(this.g)}${Rt(this.b)}`;
}
function p0() {
  return `#${Rt(this.r)}${Rt(this.g)}${Rt(this.b)}${Rt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function va() {
  const t = ke(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Ft(this.r)}, ${Ft(this.g)}, ${Ft(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function ke(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Ft(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Rt(t) {
  return t = Ft(t), (t < 16 ? "0" : "") + t.toString(16);
}
function ma(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new rt(t, n, e, r);
}
function Ps(t) {
  if (t instanceof rt) return new rt(t.h, t.s, t.l, t.opacity);
  if (t instanceof Bn || (t = Xt(t)), !t) return new rt();
  if (t instanceof rt) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, s = a - i, l = (a + i) / 2;
  return s ? (n === a ? o = (e - r) / s + (e < r) * 6 : e === a ? o = (r - n) / s + 2 : o = (n - e) / s + 4, s /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new rt(o, s, l, t.opacity);
}
function d0(t, n, e, r) {
  return arguments.length === 1 ? Ps(t) : new rt(t, n, e, r ?? 1);
}
function rt(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
gi(rt, d0, $s(Bn, {
  brighter(t) {
    return t = t == null ? Ne : Math.pow(Ne, t), new rt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? On : Math.pow(On, t), new rt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new B(
      pr(t >= 240 ? t - 240 : t + 120, i, r),
      pr(t, i, r),
      pr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new rt(wa(this.h), te(this.s), te(this.l), ke(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = ke(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${wa(this.h)}, ${te(this.s) * 100}%, ${te(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function wa(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function te(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function pr(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const yi = (t) => () => t;
function g0(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function y0(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function _0(t) {
  return (t = +t) == 1 ? Ts : function(n, e) {
    return e - n ? y0(n, e, t) : yi(isNaN(n) ? e : n);
  };
}
function Ts(t, n) {
  var e = n - t;
  return e ? g0(t, e) : yi(isNaN(t) ? n : t);
}
const Se = (function t(n) {
  var e = _0(n);
  function r(i, a) {
    var o = e((i = Rr(i)).r, (a = Rr(a)).r), s = e(i.g, a.g), l = e(i.b, a.b), u = Ts(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = s(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function v0(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(a) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - a) + n[i] * a;
    return r;
  };
}
function m0(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function w0(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), a = new Array(e), o;
  for (o = 0; o < r; ++o) i[o] = _i(t[o], n[o]);
  for (; o < e; ++o) a[o] = n[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function b0(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function nt(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function x0(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = _i(t[i], n[i]) : r[i] = n[i];
  return function(a) {
    for (i in e) r[i] = e[i](a);
    return r;
  };
}
var Lr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, dr = new RegExp(Lr.source, "g");
function M0(t) {
  return function() {
    return t;
  };
}
function A0(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Ns(t, n) {
  var e = Lr.lastIndex = dr.lastIndex = 0, r, i, a, o = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = Lr.exec(t)) && (i = dr.exec(n)); )
    (a = i.index) > e && (a = n.slice(e, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, l.push({ i: o, x: nt(r, i) })), e = dr.lastIndex;
  return e < n.length && (a = n.slice(e), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? l[0] ? A0(l[0].x) : M0(n) : (n = l.length, function(u) {
    for (var c = 0, h; c < n; ++c) s[(h = l[c]).i] = h.x(u);
    return s.join("");
  });
}
function _i(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? yi(n) : (e === "number" ? nt : e === "string" ? (r = Xt(n)) ? (n = r, Se) : Ns : n instanceof Xt ? Se : n instanceof Date ? b0 : m0(n) ? v0 : Array.isArray(n) ? w0 : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? x0 : nt)(t, n);
}
function $0(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var ba = 180 / Math.PI, ks = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ss(t, n, e, r, i, a) {
  var o, s, l;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(n, t) * ba,
    skewX: Math.atan(l) * ba,
    scaleX: o,
    scaleY: s
  };
}
var ne;
function P0(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? ks : Ss(n.a, n.b, n.c, n.d, n.e, n.f);
}
function T0(t) {
  return t == null || (ne || (ne = document.createElementNS("http://www.w3.org/2000/svg", "g")), ne.setAttribute("transform", t), !(t = ne.transform.baseVal.consolidate())) ? ks : (t = t.matrix, Ss(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Es(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, h, f, p, g) {
    if (u !== h || c !== f) {
      var _ = p.push("translate(", null, n, null, e);
      g.push({ i: _ - 4, x: nt(u, h) }, { i: _ - 2, x: nt(c, f) });
    } else (h || f) && p.push("translate(" + h + n + f + e);
  }
  function o(u, c, h, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: nt(u, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function s(u, c, h, f) {
    u !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: nt(u, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function l(u, c, h, f, p, g) {
    if (u !== h || c !== f) {
      var _ = p.push(i(p) + "scale(", null, ",", null, ")");
      g.push({ i: _ - 4, x: nt(u, h) }, { i: _ - 2, x: nt(c, f) });
    } else (h !== 1 || f !== 1) && p.push(i(p) + "scale(" + h + "," + f + ")");
  }
  return function(u, c) {
    var h = [], f = [];
    return u = t(u), c = t(c), a(u.translateX, u.translateY, c.translateX, c.translateY, h, f), o(u.rotate, c.rotate, h, f), s(u.skewX, c.skewX, h, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, h, f), u = c = null, function(p) {
      for (var g = -1, _ = f.length, w; ++g < _; ) h[(w = f[g]).i] = w.x(p);
      return h.join("");
    };
  };
}
var N0 = Es(P0, "px, ", "px)", "deg)"), k0 = Es(T0, ", ", ")", ")"), un = 0, xn = 0, yn = 0, Os = 1e3, Ee, Mn, Oe = 0, Bt = 0, Be = 0, zn = typeof performance == "object" && performance.now ? performance : Date, Is = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function vi() {
  return Bt || (Is(S0), Bt = zn.now() + Be);
}
function S0() {
  Bt = 0;
}
function Ie() {
  this._call = this._time = this._next = null;
}
Ie.prototype = zs.prototype = {
  constructor: Ie,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? vi() : +e) + (n == null ? 0 : +n), !this._next && Mn !== this && (Mn ? Mn._next = this : Ee = this, Mn = this), this._call = t, this._time = e, Fr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Fr());
  }
};
function zs(t, n, e) {
  var r = new Ie();
  return r.restart(t, n, e), r;
}
function E0() {
  vi(), ++un;
  for (var t = Ee, n; t; )
    (n = Bt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --un;
}
function xa() {
  Bt = (Oe = zn.now()) + Be, un = xn = 0;
  try {
    E0();
  } finally {
    un = 0, I0(), Bt = 0;
  }
}
function O0() {
  var t = zn.now(), n = t - Oe;
  n > Os && (Be -= n, Oe = t);
}
function I0() {
  for (var t, n = Ee, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : Ee = e);
  Mn = t, Fr(r);
}
function Fr(t) {
  if (!un) {
    xn && (xn = clearTimeout(xn));
    var n = t - Bt;
    n > 24 ? (t < 1 / 0 && (xn = setTimeout(xa, t - zn.now() - Be)), yn && (yn = clearInterval(yn))) : (yn || (Oe = zn.now(), yn = setInterval(O0, Os)), un = 1, Is(xa));
  }
}
function Ma(t, n, e) {
  var r = new Ie();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var z0 = hi("start", "end", "cancel", "interrupt"), C0 = [], Cs = 0, Aa = 1, Dr = 2, fe = 3, $a = 4, qr = 5, he = 6;
function He(t, n, e, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (e in o) return;
  j0(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: z0,
    tween: C0,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Cs
  });
}
function mi(t, n) {
  var e = st(t, n);
  if (e.state > Cs) throw new Error("too late; already scheduled");
  return e;
}
function pt(t, n) {
  var e = st(t, n);
  if (e.state > fe) throw new Error("too late; already running");
  return e;
}
function st(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function j0(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = zs(a, 0, e.time);
  function a(u) {
    e.state = Aa, e.timer.restart(o, e.delay, e.time), e.delay <= u && o(u - e.delay);
  }
  function o(u) {
    var c, h, f, p;
    if (e.state !== Aa) return l();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === fe) return Ma(o);
        p.state === $a ? (p.state = he, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = he, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (Ma(function() {
      e.state === fe && (e.state = $a, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = Dr, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Dr) {
      for (e.state = fe, i = new Array(f = e.tween.length), c = 0, h = -1; c < f; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var c = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = qr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    e.state === qr && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = he, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function R0(t, n) {
  var e = t.__transition, r, i, a = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        a = !1;
        continue;
      }
      i = r.state > Dr && r.state < qr, r.state = he, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    a && delete t.__transition;
  }
}
function L0(t) {
  return this.each(function() {
    R0(this, t);
  });
}
function F0(t, n) {
  var e, r;
  return function() {
    var i = pt(this, t), a = i.tween;
    if (a !== e) {
      r = e = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === n) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function D0(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var a = pt(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: n, value: e }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === n) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    a.tween = i;
  };
}
function q0(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = st(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? F0 : D0)(e, t, n));
}
function wi(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = pt(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return st(i, r).value[n];
  };
}
function js(t, n) {
  var e;
  return (typeof n == "number" ? nt : n instanceof Xt ? Se : (e = Xt(n)) ? (n = e, Se) : Ns)(t, n);
}
function X0(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function B0(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function H0(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function U0(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Y0(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function G0(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function V0(t, n) {
  var e = Xe(t), r = e === "transform" ? k0 : js;
  return this.attrTween(t, typeof n == "function" ? (e.local ? G0 : Y0)(e, r, wi(this, "attr." + t, n)) : n == null ? (e.local ? B0 : X0)(e) : (e.local ? U0 : H0)(e, r, n));
}
function K0(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Z0(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function W0(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && Z0(t, a)), e;
  }
  return i._value = n, i;
}
function J0(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && K0(t, a)), e;
  }
  return i._value = n, i;
}
function Q0(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Xe(t);
  return this.tween(e, (r.local ? W0 : J0)(r, n));
}
function tg(t, n) {
  return function() {
    mi(this, t).delay = +n.apply(this, arguments);
  };
}
function ng(t, n) {
  return n = +n, function() {
    mi(this, t).delay = n;
  };
}
function eg(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? tg : ng)(n, t)) : st(this.node(), n).delay;
}
function rg(t, n) {
  return function() {
    pt(this, t).duration = +n.apply(this, arguments);
  };
}
function ig(t, n) {
  return n = +n, function() {
    pt(this, t).duration = n;
  };
}
function ag(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? rg : ig)(n, t)) : st(this.node(), n).duration;
}
function og(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    pt(this, t).ease = n;
  };
}
function sg(t) {
  var n = this._id;
  return arguments.length ? this.each(og(n, t)) : st(this.node(), n).ease;
}
function ug(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    pt(this, t).ease = e;
  };
}
function lg(t) {
  if (typeof t != "function") throw new Error();
  return this.each(ug(this._id, t));
}
function cg(t) {
  typeof t != "function" && (t = gs(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new wt(r, this._parents, this._name, this._id);
}
function fg(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var l = n[s], u = e[s], c = l.length, h = o[s] = new Array(c), f, p = 0; p < c; ++p)
      (f = l[p] || u[p]) && (h[p] = f);
  for (; s < r; ++s)
    o[s] = n[s];
  return new wt(o, this._parents, this._name, this._id);
}
function hg(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function pg(t, n, e) {
  var r, i, a = hg(n) ? mi : pt;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(n, e), o.on = i;
  };
}
function dg(t, n) {
  var e = this._id;
  return arguments.length < 2 ? st(this.node(), e).on.on(t) : this.each(pg(e, t, n));
}
function gg(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function yg() {
  return this.on("end.remove", gg(this._id));
}
function _g(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = pi(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], l = s.length, u = a[o] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = s[f]) && (h = t.call(c, c.__data__, f, s)) && ("__data__" in c && (h.__data__ = c.__data__), u[f] = h, He(u[f], n, e, f, u, st(c, e)));
  return new wt(a, this._parents, n, e);
}
function vg(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ds(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, c, h = 0; h < u; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), p, g = st(c, e), _ = 0, w = f.length; _ < w; ++_)
          (p = f[_]) && He(p, n, e, _, f, g);
        a.push(f), o.push(c);
      }
  return new wt(a, o, n, e);
}
var mg = Xn.prototype.constructor;
function wg() {
  return new mg(this._groups, this._parents);
}
function bg(t, n) {
  var e, r, i;
  return function() {
    var a = sn(this, t), o = (this.style.removeProperty(t), sn(this, t));
    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o);
  };
}
function Rs(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function xg(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = sn(this, t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Mg(t, n, e) {
  var r, i, a;
  return function() {
    var o = sn(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), sn(this, t))), o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s));
  };
}
function Ag(t, n) {
  var e, r, i, a = "style." + n, o = "end." + a, s;
  return function() {
    var l = pt(this, t), u = l.on, c = l.value[a] == null ? s || (s = Rs(n)) : void 0;
    (u !== e || i !== c) && (r = (e = u).copy()).on(o, i = c), l.on = r;
  };
}
function $g(t, n, e) {
  var r = (t += "") == "transform" ? N0 : js;
  return n == null ? this.styleTween(t, bg(t, r)).on("end.style." + t, Rs(t)) : typeof n == "function" ? this.styleTween(t, Mg(t, r, wi(this, "style." + t, n))).each(Ag(this._id, t)) : this.styleTween(t, xg(t, r, n), e).on("end.style." + t, null);
}
function Pg(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Tg(t, n, e) {
  var r, i;
  function a() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && Pg(t, o, e)), r;
  }
  return a._value = n, a;
}
function Ng(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, Tg(t, n, e ?? ""));
}
function kg(t) {
  return function() {
    this.textContent = t;
  };
}
function Sg(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Eg(t) {
  return this.tween("text", typeof t == "function" ? Sg(wi(this, "text", t)) : kg(t == null ? "" : t + ""));
}
function Og(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Ig(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Og(i)), n;
  }
  return r._value = t, r;
}
function zg(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Ig(t));
}
function Cg() {
  for (var t = this._name, n = this._id, e = Ls(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      if (l = o[u]) {
        var c = st(l, n);
        He(l, t, e, u, o, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new wt(r, this._parents, t, e);
}
function jg() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(a, o) {
    var s = { value: o }, l = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var u = pt(this, r), c = u.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && a();
  });
}
var Rg = 0;
function wt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Ls() {
  return ++Rg;
}
var gt = Xn.prototype;
wt.prototype = {
  constructor: wt,
  select: _g,
  selectAll: vg,
  selectChild: gt.selectChild,
  selectChildren: gt.selectChildren,
  filter: cg,
  merge: fg,
  selection: wg,
  transition: Cg,
  call: gt.call,
  nodes: gt.nodes,
  node: gt.node,
  size: gt.size,
  empty: gt.empty,
  each: gt.each,
  on: dg,
  attr: V0,
  attrTween: Q0,
  style: $g,
  styleTween: Ng,
  text: Eg,
  textTween: zg,
  remove: yg,
  tween: q0,
  delay: eg,
  duration: ag,
  ease: sg,
  easeVarying: lg,
  end: jg,
  [Symbol.iterator]: gt[Symbol.iterator]
};
function Lg(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Fg = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Lg
};
function Dg(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function qg(t) {
  var n, e;
  t instanceof wt ? (n = t._id, t = t._name) : (n = Ls(), (e = Fg).time = vi(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && He(l, t, n, u, o, e || Dg(l, n));
  return new wt(r, this._parents, t, n);
}
Xn.prototype.interrupt = L0;
Xn.prototype.transition = qg;
const Xr = Math.PI, Br = 2 * Xr, Ct = 1e-6, Xg = Br - Ct;
function Fs(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Bg(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return Fs;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Ds {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? Fs : Bg(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, a, o) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(n, e, r, i, a) {
    if (n = +n, e = +e, r = +r, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, l = r - n, u = i - e, c = o - n, h = s - e, f = c * c + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (f > Ct) if (!(Math.abs(h * l - u * c) > Ct) || !a)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - o, g = i - s, _ = l * l + u * u, w = p * p + g * g, b = Math.sqrt(_), d = Math.sqrt(f), M = a * Math.tan((Xr - Math.acos((_ + f - w) / (2 * b * d))) / 2), y = M / d, m = M / b;
      Math.abs(y - 1) > Ct && this._append`L${n + y * c},${e + y * h}`, this._append`A${a},${a},0,0,${+(h * p > c * g)},${this._x1 = n + m * l},${this._y1 = e + m * u}`;
    }
  }
  arc(n, e, r, i, a, o) {
    if (n = +n, e = +e, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = n + s, c = e + l, h = 1 ^ o, f = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > Ct || Math.abs(this._y1 - c) > Ct) && this._append`L${u},${c}`, r && (f < 0 && (f = f % Br + Br), f > Xg ? this._append`A${r},${r},0,1,${h},${n - s},${e - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = c}` : f > Ct && this._append`A${r},${r},0,${+(f >= Xr)},${h},${this._x1 = n + r * Math.cos(a)},${this._y1 = e + r * Math.sin(a)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function ut() {
  return new Ds();
}
ut.prototype = Ds.prototype;
function Hg(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function ze(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function ln(t) {
  return t = ze(Math.abs(t)), t ? t[1] : NaN;
}
function Ug(t, n) {
  return function(e, r) {
    for (var i = e.length, a = [], o = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), a.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(n);
  };
}
function Yg(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Gg = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ce(t) {
  if (!(n = Gg.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new bi({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
Ce.prototype = bi.prototype;
function bi(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
bi.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Vg(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var qs;
function Kg(t, n) {
  var e = ze(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], a = i - (qs = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + ze(t, Math.max(0, n + a - 1))[0];
}
function Pa(t, n) {
  var e = ze(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Ta = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Hg,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Pa(t * 100, n),
  r: Pa,
  s: Kg,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Na(t) {
  return t;
}
var ka = Array.prototype.map, Sa = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Zg(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Na : Ug(ka.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? Na : Yg(ka.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = Ce(h);
    var f = h.fill, p = h.align, g = h.sign, _ = h.symbol, w = h.zero, b = h.width, d = h.comma, M = h.precision, y = h.trim, m = h.type;
    m === "n" ? (d = !0, m = "g") : Ta[m] || (M === void 0 && (M = 12), y = !0, m = "g"), (w || f === "0" && p === "=") && (w = !0, f = "0", p = "=");
    var I = _ === "$" ? e : _ === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", z = _ === "$" ? r : /[%p]/.test(m) ? o : "", F = Ta[m], K = /[defgprs%]/.test(m);
    M = M === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function Z(v) {
      var D = I, N = z, q, It, H;
      if (m === "c")
        N = F(v) + N, v = "";
      else {
        v = +v;
        var W = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? l : F(Math.abs(v), M), y && (v = Vg(v)), W && +v == 0 && g !== "+" && (W = !1), D = (W ? g === "(" ? g : s : g === "-" || g === "(" ? "" : g) + D, N = (m === "s" ? Sa[8 + qs / 3] : "") + N + (W && g === "(" ? ")" : ""), K) {
          for (q = -1, It = v.length; ++q < It; )
            if (H = v.charCodeAt(q), 48 > H || H > 57) {
              N = (H === 46 ? i + v.slice(q + 1) : v.slice(q)) + N, v = v.slice(0, q);
              break;
            }
        }
      }
      d && !w && (v = n(v, 1 / 0));
      var Q = D.length + v.length + N.length, C = Q < b ? new Array(b - Q + 1).join(f) : "";
      switch (d && w && (v = n(C + v, C.length ? b - N.length : 1 / 0), C = ""), p) {
        case "<":
          v = D + v + N + C;
          break;
        case "=":
          v = D + C + v + N;
          break;
        case "^":
          v = C.slice(0, Q = C.length >> 1) + D + v + N + C.slice(Q);
          break;
        default:
          v = C + D + v + N;
          break;
      }
      return a(v);
    }
    return Z.toString = function() {
      return h + "";
    }, Z;
  }
  function c(h, f) {
    var p = u((h = Ce(h), h.type = "f", h)), g = Math.max(-8, Math.min(8, Math.floor(ln(f) / 3))) * 3, _ = Math.pow(10, -g), w = Sa[8 + g / 3];
    return function(b) {
      return p(_ * b) + w;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var ee, Ue, Xs;
Wg({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Wg(t) {
  return ee = Zg(t), Ue = ee.format, Xs = ee.formatPrefix, ee;
}
function Jg(t) {
  return Math.max(0, -ln(Math.abs(t)));
}
function Qg(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ln(n) / 3))) * 3 - ln(Math.abs(t)));
}
function ty(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, ln(n) - ln(t)) + 1;
}
function ny(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function ey(t) {
  return function() {
    return t;
  };
}
function ry(t) {
  return +t;
}
var Ea = [0, 1];
function Qt(t) {
  return t;
}
function Hr(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : ey(isNaN(n) ? NaN : 0.5);
}
function iy(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function ay(t, n, e) {
  var r = t[0], i = t[1], a = n[0], o = n[1];
  return i < r ? (r = Hr(i, r), a = e(o, a)) : (r = Hr(r, i), a = e(a, o)), function(s) {
    return a(r(s));
  };
}
function oy(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < r; )
    i[o] = Hr(t[o], t[o + 1]), a[o] = e(n[o], n[o + 1]);
  return function(s) {
    var l = op(t, s, 1, r) - 1;
    return a[l](i[l](s));
  };
}
function sy(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function uy() {
  var t = Ea, n = Ea, e = _i, r, i, a, o = Qt, s, l, u;
  function c() {
    var f = Math.min(t.length, n.length);
    return o !== Qt && (o = iy(t[0], t[f - 1])), s = f > 2 ? oy : ay, l = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? a : (l || (l = s(t.map(r), n, e)))(r(o(f)));
  }
  return h.invert = function(f) {
    return o(i((u || (u = s(n, t.map(r), nt)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, ry), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), c()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = $0, c();
  }, h.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : Qt, c()) : o !== Qt;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, c()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (a = f, h) : a;
  }, function(f, p) {
    return r = f, i = p, c();
  };
}
function ly() {
  return uy()(Qt, Qt);
}
function cy(t, n, e, r) {
  var i = fp(t, n, e), a;
  switch (r = Ce(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(a = Qg(i, o)) && (r.precision = a), Xs(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = ty(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = Jg(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return Ue(r);
}
function fy(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return cp(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return cy(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, a = r.length - 1, o = r[i], s = r[a], l, u, c = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); c-- > 0; ) {
      if (u = zr(o, s, e), u === l)
        return r[i] = o, r[a] = s, n(r);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      l = u;
    }
    return t;
  }, t;
}
function cn() {
  var t = ly();
  return t.copy = function() {
    return sy(t, cn());
  }, ny.apply(t, arguments), fy(t);
}
function An(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
An.prototype = {
  constructor: An,
  scale: function(t) {
    return t === 1 ? this : new An(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new An(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
An.prototype;
var Bs = typeof global == "object" && global && global.Object === Object && global, hy = typeof self == "object" && self && self.Object === Object && self, xt = Bs || hy || Function("return this")(), ft = xt.Symbol, Hs = Object.prototype, py = Hs.hasOwnProperty, dy = Hs.toString, _n = ft ? ft.toStringTag : void 0;
function gy(t) {
  var n = py.call(t, _n), e = t[_n];
  try {
    t[_n] = void 0;
    var r = !0;
  } catch {
  }
  var i = dy.call(t);
  return r && (n ? t[_n] = e : delete t[_n]), i;
}
var yy = Object.prototype, _y = yy.toString;
function vy(t) {
  return _y.call(t);
}
var my = "[object Null]", wy = "[object Undefined]", Oa = ft ? ft.toStringTag : void 0;
function pn(t) {
  return t == null ? t === void 0 ? wy : my : Oa && Oa in Object(t) ? gy(t) : vy(t);
}
function fn(t) {
  return t != null && typeof t == "object";
}
var by = "[object Symbol]";
function Ye(t) {
  return typeof t == "symbol" || fn(t) && pn(t) == by;
}
function Us(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var it = Array.isArray, Ia = ft ? ft.prototype : void 0, za = Ia ? Ia.toString : void 0;
function Ys(t) {
  if (typeof t == "string")
    return t;
  if (it(t))
    return Us(t, Ys) + "";
  if (Ye(t))
    return za ? za.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var xy = /\s/;
function My(t) {
  for (var n = t.length; n-- && xy.test(t.charAt(n)); )
    ;
  return n;
}
var Ay = /^\s+/;
function $y(t) {
  return t && t.slice(0, My(t) + 1).replace(Ay, "");
}
function hn(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var Ca = NaN, Py = /^[-+]0x[0-9a-f]+$/i, Ty = /^0b[01]+$/i, Ny = /^0o[0-7]+$/i, ky = parseInt;
function Sy(t) {
  if (typeof t == "number")
    return t;
  if (Ye(t))
    return Ca;
  if (hn(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = hn(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = $y(t);
  var e = Ty.test(t);
  return e || Ny.test(t) ? ky(t.slice(2), e ? 2 : 8) : Py.test(t) ? Ca : +t;
}
var Ey = 1 / 0, Oy = 17976931348623157e292;
function gr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Sy(t), t === Ey || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * Oy;
  }
  return t === t ? t : 0;
}
function Iy(t) {
  return t;
}
var zy = "[object AsyncFunction]", Cy = "[object Function]", jy = "[object GeneratorFunction]", Ry = "[object Proxy]";
function Gs(t) {
  if (!hn(t))
    return !1;
  var n = pn(t);
  return n == Cy || n == jy || n == zy || n == Ry;
}
var yr = xt["__core-js_shared__"], ja = (function() {
  var t = /[^.]+$/.exec(yr && yr.keys && yr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function Ly(t) {
  return !!ja && ja in t;
}
var Fy = Function.prototype, Dy = Fy.toString;
function Gt(t) {
  if (t != null) {
    try {
      return Dy.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var qy = /[\\^$.*+?()[\]{}|]/g, Xy = /^\[object .+?Constructor\]$/, By = Function.prototype, Hy = Object.prototype, Uy = By.toString, Yy = Hy.hasOwnProperty, Gy = RegExp(
  "^" + Uy.call(Yy).replace(qy, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Vy(t) {
  if (!hn(t) || Ly(t))
    return !1;
  var n = Gs(t) ? Gy : Xy;
  return n.test(Gt(t));
}
function Ky(t, n) {
  return t == null ? void 0 : t[n];
}
function dn(t, n) {
  var e = Ky(t, n);
  return Vy(e) ? e : void 0;
}
var Ur = dn(xt, "WeakMap"), Zy = 9007199254740991, Wy = /^(?:0|[1-9]\d*)$/;
function xi(t, n) {
  var e = typeof t;
  return n = n ?? Zy, !!n && (e == "number" || e != "symbol" && Wy.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function Mi(t, n) {
  return t === n || t !== t && n !== n;
}
var Jy = 9007199254740991;
function Ai(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Jy;
}
function Ge(t) {
  return t != null && Ai(t.length) && !Gs(t);
}
function Qy(t, n, e) {
  if (!hn(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Ge(e) && xi(n, e.length) : r == "string" && n in e) ? Mi(e[n], t) : !1;
}
var t_ = Object.prototype;
function n_(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || t_;
  return t === e;
}
function e_(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var r_ = "[object Arguments]";
function Ra(t) {
  return fn(t) && pn(t) == r_;
}
var Vs = Object.prototype, i_ = Vs.hasOwnProperty, a_ = Vs.propertyIsEnumerable, $i = Ra(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Ra : function(t) {
  return fn(t) && i_.call(t, "callee") && !a_.call(t, "callee");
};
function o_() {
  return !1;
}
var Ks = typeof exports == "object" && exports && !exports.nodeType && exports, La = Ks && typeof module == "object" && module && !module.nodeType && module, s_ = La && La.exports === Ks, Fa = s_ ? xt.Buffer : void 0, u_ = Fa ? Fa.isBuffer : void 0, Yr = u_ || o_, l_ = "[object Arguments]", c_ = "[object Array]", f_ = "[object Boolean]", h_ = "[object Date]", p_ = "[object Error]", d_ = "[object Function]", g_ = "[object Map]", y_ = "[object Number]", __ = "[object Object]", v_ = "[object RegExp]", m_ = "[object Set]", w_ = "[object String]", b_ = "[object WeakMap]", x_ = "[object ArrayBuffer]", M_ = "[object DataView]", A_ = "[object Float32Array]", $_ = "[object Float64Array]", P_ = "[object Int8Array]", T_ = "[object Int16Array]", N_ = "[object Int32Array]", k_ = "[object Uint8Array]", S_ = "[object Uint8ClampedArray]", E_ = "[object Uint16Array]", O_ = "[object Uint32Array]", S = {};
S[A_] = S[$_] = S[P_] = S[T_] = S[N_] = S[k_] = S[S_] = S[E_] = S[O_] = !0;
S[l_] = S[c_] = S[x_] = S[f_] = S[M_] = S[h_] = S[p_] = S[d_] = S[g_] = S[y_] = S[__] = S[v_] = S[m_] = S[w_] = S[b_] = !1;
function I_(t) {
  return fn(t) && Ai(t.length) && !!S[pn(t)];
}
function z_(t) {
  return function(n) {
    return t(n);
  };
}
var Zs = typeof exports == "object" && exports && !exports.nodeType && exports, $n = Zs && typeof module == "object" && module && !module.nodeType && module, C_ = $n && $n.exports === Zs, _r = C_ && Bs.process, Da = (function() {
  try {
    var t = $n && $n.require && $n.require("util").types;
    return t || _r && _r.binding && _r.binding("util");
  } catch {
  }
})(), qa = Da && Da.isTypedArray, Ws = qa ? z_(qa) : I_, j_ = Object.prototype, R_ = j_.hasOwnProperty;
function L_(t, n) {
  var e = it(t), r = !e && $i(t), i = !e && !r && Yr(t), a = !e && !r && !i && Ws(t), o = e || r || i || a, s = o ? e_(t.length, String) : [], l = s.length;
  for (var u in t)
    R_.call(t, u) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    xi(u, l))) && s.push(u);
  return s;
}
function F_(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var D_ = F_(Object.keys, Object), q_ = Object.prototype, X_ = q_.hasOwnProperty;
function B_(t) {
  if (!n_(t))
    return D_(t);
  var n = [];
  for (var e in Object(t))
    X_.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Pi(t) {
  return Ge(t) ? L_(t) : B_(t);
}
var H_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, U_ = /^\w*$/;
function Ti(t, n) {
  if (it(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Ye(t) ? !0 : U_.test(t) || !H_.test(t) || n != null && t in Object(n);
}
var Cn = dn(Object, "create");
function Y_() {
  this.__data__ = Cn ? Cn(null) : {}, this.size = 0;
}
function G_(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var V_ = "__lodash_hash_undefined__", K_ = Object.prototype, Z_ = K_.hasOwnProperty;
function W_(t) {
  var n = this.__data__;
  if (Cn) {
    var e = n[t];
    return e === V_ ? void 0 : e;
  }
  return Z_.call(n, t) ? n[t] : void 0;
}
var J_ = Object.prototype, Q_ = J_.hasOwnProperty;
function tv(t) {
  var n = this.__data__;
  return Cn ? n[t] !== void 0 : Q_.call(n, t);
}
var nv = "__lodash_hash_undefined__";
function ev(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Cn && n === void 0 ? nv : n, this;
}
function Ht(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Ht.prototype.clear = Y_;
Ht.prototype.delete = G_;
Ht.prototype.get = W_;
Ht.prototype.has = tv;
Ht.prototype.set = ev;
function rv() {
  this.__data__ = [], this.size = 0;
}
function Ve(t, n) {
  for (var e = t.length; e--; )
    if (Mi(t[e][0], n))
      return e;
  return -1;
}
var iv = Array.prototype, av = iv.splice;
function ov(t) {
  var n = this.__data__, e = Ve(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : av.call(n, e, 1), --this.size, !0;
}
function sv(t) {
  var n = this.__data__, e = Ve(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function uv(t) {
  return Ve(this.__data__, t) > -1;
}
function lv(t, n) {
  var e = this.__data__, r = Ve(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function Mt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Mt.prototype.clear = rv;
Mt.prototype.delete = ov;
Mt.prototype.get = sv;
Mt.prototype.has = uv;
Mt.prototype.set = lv;
var jn = dn(xt, "Map");
function cv() {
  this.size = 0, this.__data__ = {
    hash: new Ht(),
    map: new (jn || Mt)(),
    string: new Ht()
  };
}
function fv(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Ke(t, n) {
  var e = t.__data__;
  return fv(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function hv(t) {
  var n = Ke(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function pv(t) {
  return Ke(this, t).get(t);
}
function dv(t) {
  return Ke(this, t).has(t);
}
function gv(t, n) {
  var e = Ke(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function At(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
At.prototype.clear = cv;
At.prototype.delete = hv;
At.prototype.get = pv;
At.prototype.has = dv;
At.prototype.set = gv;
var yv = "Expected a function";
function Ni(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(yv);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], a = e.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return e.cache = a.set(i, o) || a, o;
  };
  return e.cache = new (Ni.Cache || At)(), e;
}
Ni.Cache = At;
var _v = 500;
function vv(t) {
  var n = Ni(t, function(r) {
    return e.size === _v && e.clear(), r;
  }), e = n.cache;
  return n;
}
var mv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, wv = /\\(\\)?/g, bv = vv(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(mv, function(e, r, i, a) {
    n.push(i ? a.replace(wv, "$1") : r || e);
  }), n;
});
function xv(t) {
  return t == null ? "" : Ys(t);
}
function Js(t, n) {
  return it(t) ? t : Ti(t, n) ? [t] : bv(xv(t));
}
function Ze(t) {
  if (typeof t == "string" || Ye(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Qs(t, n) {
  n = Js(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Ze(n[e++])];
  return e && e == r ? t : void 0;
}
function Mv(t, n, e) {
  var r = t == null ? void 0 : Qs(t, n);
  return r === void 0 ? e : r;
}
function tu(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Xa = ft ? ft.isConcatSpreadable : void 0;
function Av(t) {
  return it(t) || $i(t) || !!(Xa && t && t[Xa]);
}
function $v(t, n, e, r, i) {
  var a = -1, o = t.length;
  for (e || (e = Av), i || (i = []); ++a < o; ) {
    var s = t[a];
    e(s) ? tu(i, s) : i[i.length] = s;
  }
  return i;
}
function Pv(t) {
  var n = t == null ? 0 : t.length;
  return n ? $v(t) : [];
}
function Tv() {
  this.__data__ = new Mt(), this.size = 0;
}
function Nv(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function kv(t) {
  return this.__data__.get(t);
}
function Sv(t) {
  return this.__data__.has(t);
}
var Ev = 200;
function Ov(t, n) {
  var e = this.__data__;
  if (e instanceof Mt) {
    var r = e.__data__;
    if (!jn || r.length < Ev - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new At(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function _t(t) {
  var n = this.__data__ = new Mt(t);
  this.size = n.size;
}
_t.prototype.clear = Tv;
_t.prototype.delete = Nv;
_t.prototype.get = kv;
_t.prototype.has = Sv;
_t.prototype.set = Ov;
function Iv(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++e < r; ) {
    var o = t[e];
    n(o, e, t) && (a[i++] = o);
  }
  return a;
}
function zv() {
  return [];
}
var Cv = Object.prototype, jv = Cv.propertyIsEnumerable, Ba = Object.getOwnPropertySymbols, Rv = Ba ? function(t) {
  return t == null ? [] : (t = Object(t), Iv(Ba(t), function(n) {
    return jv.call(t, n);
  }));
} : zv;
function Lv(t, n, e) {
  var r = n(t);
  return it(t) ? r : tu(r, e(t));
}
function Ha(t) {
  return Lv(t, Pi, Rv);
}
var Gr = dn(xt, "DataView"), Vr = dn(xt, "Promise"), Kr = dn(xt, "Set"), Ua = "[object Map]", Fv = "[object Object]", Ya = "[object Promise]", Ga = "[object Set]", Va = "[object WeakMap]", Ka = "[object DataView]", Dv = Gt(Gr), qv = Gt(jn), Xv = Gt(Vr), Bv = Gt(Kr), Hv = Gt(Ur), kt = pn;
(Gr && kt(new Gr(new ArrayBuffer(1))) != Ka || jn && kt(new jn()) != Ua || Vr && kt(Vr.resolve()) != Ya || Kr && kt(new Kr()) != Ga || Ur && kt(new Ur()) != Va) && (kt = function(t) {
  var n = pn(t), e = n == Fv ? t.constructor : void 0, r = e ? Gt(e) : "";
  if (r)
    switch (r) {
      case Dv:
        return Ka;
      case qv:
        return Ua;
      case Xv:
        return Ya;
      case Bv:
        return Ga;
      case Hv:
        return Va;
    }
  return n;
});
var Za = xt.Uint8Array, Uv = "__lodash_hash_undefined__";
function Yv(t) {
  return this.__data__.set(t, Uv), this;
}
function Gv(t) {
  return this.__data__.has(t);
}
function je(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new At(); ++n < e; )
    this.add(t[n]);
}
je.prototype.add = je.prototype.push = Yv;
je.prototype.has = Gv;
function Vv(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Kv(t, n) {
  return t.has(n);
}
var Zv = 1, Wv = 2;
function nu(t, n, e, r, i, a) {
  var o = e & Zv, s = t.length, l = n.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = a.get(t), c = a.get(n);
  if (u && c)
    return u == n && c == t;
  var h = -1, f = !0, p = e & Wv ? new je() : void 0;
  for (a.set(t, n), a.set(n, t); ++h < s; ) {
    var g = t[h], _ = n[h];
    if (r)
      var w = o ? r(_, g, h, n, t, a) : r(g, _, h, t, n, a);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!Vv(n, function(b, d) {
        if (!Kv(p, d) && (g === b || i(g, b, e, r, a)))
          return p.push(d);
      })) {
        f = !1;
        break;
      }
    } else if (!(g === _ || i(g, _, e, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(t), a.delete(n), f;
}
function Jv(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Qv(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var tm = 1, nm = 2, em = "[object Boolean]", rm = "[object Date]", im = "[object Error]", am = "[object Map]", om = "[object Number]", sm = "[object RegExp]", um = "[object Set]", lm = "[object String]", cm = "[object Symbol]", fm = "[object ArrayBuffer]", hm = "[object DataView]", Wa = ft ? ft.prototype : void 0, vr = Wa ? Wa.valueOf : void 0;
function pm(t, n, e, r, i, a, o) {
  switch (e) {
    case hm:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case fm:
      return !(t.byteLength != n.byteLength || !a(new Za(t), new Za(n)));
    case em:
    case rm:
    case om:
      return Mi(+t, +n);
    case im:
      return t.name == n.name && t.message == n.message;
    case sm:
    case lm:
      return t == n + "";
    case am:
      var s = Jv;
    case um:
      var l = r & tm;
      if (s || (s = Qv), t.size != n.size && !l)
        return !1;
      var u = o.get(t);
      if (u)
        return u == n;
      r |= nm, o.set(t, n);
      var c = nu(s(t), s(n), r, i, a, o);
      return o.delete(t), c;
    case cm:
      if (vr)
        return vr.call(t) == vr.call(n);
  }
  return !1;
}
var dm = 1, gm = Object.prototype, ym = gm.hasOwnProperty;
function _m(t, n, e, r, i, a) {
  var o = e & dm, s = Ha(t), l = s.length, u = Ha(n), c = u.length;
  if (l != c && !o)
    return !1;
  for (var h = l; h--; ) {
    var f = s[h];
    if (!(o ? f in n : ym.call(n, f)))
      return !1;
  }
  var p = a.get(t), g = a.get(n);
  if (p && g)
    return p == n && g == t;
  var _ = !0;
  a.set(t, n), a.set(n, t);
  for (var w = o; ++h < l; ) {
    f = s[h];
    var b = t[f], d = n[f];
    if (r)
      var M = o ? r(d, b, f, n, t, a) : r(b, d, f, t, n, a);
    if (!(M === void 0 ? b === d || i(b, d, e, r, a) : M)) {
      _ = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (_ && !w) {
    var y = t.constructor, m = n.constructor;
    y != m && "constructor" in t && "constructor" in n && !(typeof y == "function" && y instanceof y && typeof m == "function" && m instanceof m) && (_ = !1);
  }
  return a.delete(t), a.delete(n), _;
}
var vm = 1, Ja = "[object Arguments]", Qa = "[object Array]", re = "[object Object]", mm = Object.prototype, to = mm.hasOwnProperty;
function wm(t, n, e, r, i, a) {
  var o = it(t), s = it(n), l = o ? Qa : kt(t), u = s ? Qa : kt(n);
  l = l == Ja ? re : l, u = u == Ja ? re : u;
  var c = l == re, h = u == re, f = l == u;
  if (f && Yr(t)) {
    if (!Yr(n))
      return !1;
    o = !0, c = !1;
  }
  if (f && !c)
    return a || (a = new _t()), o || Ws(t) ? nu(t, n, e, r, i, a) : pm(t, n, l, e, r, i, a);
  if (!(e & vm)) {
    var p = c && to.call(t, "__wrapped__"), g = h && to.call(n, "__wrapped__");
    if (p || g) {
      var _ = p ? t.value() : t, w = g ? n.value() : n;
      return a || (a = new _t()), i(_, w, e, r, a);
    }
  }
  return f ? (a || (a = new _t()), _m(t, n, e, r, i, a)) : !1;
}
function ki(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !fn(t) && !fn(n) ? t !== t && n !== n : wm(t, n, e, r, ki, i);
}
var bm = 1, xm = 2;
function Mm(t, n, e, r) {
  var i = e.length, a = i;
  if (t == null)
    return !a;
  for (t = Object(t); i--; ) {
    var o = e[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < a; ) {
    o = e[i];
    var s = o[0], l = t[s], u = o[1];
    if (o[2]) {
      if (l === void 0 && !(s in t))
        return !1;
    } else {
      var c = new _t(), h;
      if (!(h === void 0 ? ki(u, l, bm | xm, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function eu(t) {
  return t === t && !hn(t);
}
function Am(t) {
  for (var n = Pi(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, eu(i)];
  }
  return n;
}
function ru(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function $m(t) {
  var n = Am(t);
  return n.length == 1 && n[0][2] ? ru(n[0][0], n[0][1]) : function(e) {
    return e === t || Mm(e, t, n);
  };
}
function Pm(t, n) {
  return t != null && n in Object(t);
}
function Tm(t, n, e) {
  n = Js(n, t);
  for (var r = -1, i = n.length, a = !1; ++r < i; ) {
    var o = Ze(n[r]);
    if (!(a = t != null && e(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && Ai(i) && xi(o, i) && (it(t) || $i(t)));
}
function Nm(t, n) {
  return t != null && Tm(t, n, Pm);
}
var km = 1, Sm = 2;
function Em(t, n) {
  return Ti(t) && eu(n) ? ru(Ze(t), n) : function(e) {
    var r = Mv(e, t);
    return r === void 0 && r === n ? Nm(e, t) : ki(n, r, km | Sm);
  };
}
function Om(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function Im(t) {
  return function(n) {
    return Qs(n, t);
  };
}
function zm(t) {
  return Ti(t) ? Om(Ze(t)) : Im(t);
}
function Cm(t) {
  return typeof t == "function" ? t : t == null ? Iy : typeof t == "object" ? it(t) ? Em(t[0], t[1]) : $m(t) : zm(t);
}
function jm(t) {
  return function(n, e, r) {
    for (var i = -1, a = Object(n), o = r(n), s = o.length; s--; ) {
      var l = o[++i];
      if (e(a[l], l, a) === !1)
        break;
    }
    return n;
  };
}
var Rm = jm();
function Lm(t, n) {
  return t && Rm(t, n, Pi);
}
function Fm(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Ge(e))
      return t(e, r);
    for (var i = e.length, a = -1, o = Object(e); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return e;
  };
}
var Dm = Fm(Lm);
function qm(t, n) {
  var e = -1, r = Ge(t) ? Array(t.length) : [];
  return Dm(t, function(i, a, o) {
    r[++e] = n(i, a, o);
  }), r;
}
function no(t, n) {
  var e = it(t) ? Us : qm;
  return e(t, Cm(n));
}
var Xm = Math.ceil, Bm = Math.max;
function Hm(t, n, e, r) {
  for (var i = -1, a = Bm(Xm((n - t) / (e || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += e;
  return o;
}
function Um(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && Qy(n, e, r) && (e = r = void 0), n = gr(n), e === void 0 ? (e = n, n = 0) : e = gr(e), r = r === void 0 ? n < e ? 1 : -1 : gr(r), Hm(n, e, r);
  };
}
var Ym = Um();
const Gm = (t, n, e = 12, r = 12) => {
  const i = cn().domain([0, e]).range([0, t]), a = cn().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return Ym((e + 1) * (r + 1)).map(function(o) {
        return { m: o % (e + 1), n: Math.floor(o / (e + 1)), x: i(o % (e + 1)), y: a(Math.floor(o / (e + 1))) };
      });
    },
    position: function(o, s) {
      typeof o == "number" && (o = [o]), typeof s == "number" && (s = [s]);
      const l = Pv(no(s, function(u) {
        return no(
          o,
          function(c) {
            return { x: i(c), y: a(u) };
          }
        );
      }));
      return l.length == 1 ? l[0] : l;
    }
  };
}, Vm = "_widget_9wct0_49", Km = "_label_9wct0_69", Zm = "_lit_9wct0_74", Wm = "_button_9wct0_78", Jm = "_symbol_9wct0_78", Qm = "_radio_9wct0_79", t1 = "_radiobutton_9wct0_79", n1 = "_selected_9wct0_85", e1 = "_toggle_9wct0_86", r1 = "_slider_9wct0_95", i1 = "_track_9wct0_95", a1 = "_track_overlay_9wct0_100", o1 = "_handle_9wct0_108", x = {
  widget: Vm,
  label: Km,
  lit: Zm,
  button: Wm,
  symbol: Jm,
  radio: Qm,
  radiobutton: t1,
  selected: n1,
  toggle: e1,
  slider: r1,
  track: i1,
  track_overlay: a1,
  handle: o1
}, We = () => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", n = t.length;
  let e = "";
  for (let r = 0; r < 10; ++r)
    e += t[Math.floor(Math.random() * n)];
  return e;
}, Si = (t, n, e) => {
  var r, i, a, o;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, a = "middle", o = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, a = "middle", o = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, a = "end", o = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, a = "start", o = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, a = "middle", o = "hanging";
  }
  return { x: r, y: i, anchor: a, valign: o };
}, s1 = (t = 1) => {
  const n = ut();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, u1 = (t = 1) => {
  const n = ut(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, l1 = (t = 1) => {
  const n = ut();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, c1 = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = ut();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, f1 = (t = 1) => {
  const n = ut(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, a = 0.5, o = 0.6, s = 0.6, l = [t * (1 - a / 2) * Math.cos(i), t * (1 - a / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - a) * Math.cos(r), t * (1 - a) * Math.sin(r)), n.arc(0, 0, t * (1 - a), r, i, !1), n.lineTo(t * (1 - o - a / 2) * Math.cos(i), t * (1 - o - a / 2) * Math.sin(i)), n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(i), t * (1 + o - a / 2) * Math.sin(i)), n.closePath(), n.toString();
}, h1 = (t = 1) => {
  const n = ut(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, a = e, o = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, o), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, a, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, p1 = (t = 1) => {
  const n = ut(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, a = 0.5, o = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - a) * Math.cos(i), t * (1 - a) * Math.sin(i)), n.arc(0, 0, t * (1 - a), i, r, !0), n.lineTo(t * (1 - o - a / 2) * Math.cos(r), t * (1 - o - a / 2) * Math.sin(r));
  var l = [t * (1 - a / 2) * Math.cos(r), t * (1 - a / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(r), t * (1 + o - a / 2) * Math.sin(r)), n.closePath(), n.toString();
}, d1 = (t = 1) => {
  var n = ut(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, g1 = (t = 1) => {
  const n = ut(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, Zr = (t) => {
  switch (t) {
    case "play":
      return s1;
    case "forward":
      return u1;
    case "back":
      return l1;
    case "pause":
      return c1;
    case "reload":
      return f1;
    case "capture":
      return h1;
    case "rewind":
      return p1;
    case "stop":
      return d1;
    case "push":
      return g1;
  }
}, Ei = () => {
  const t = "button";
  var n = We(), e = 50, r = 0.3, i = "round", a = { x: 0, y: 0 }, o = null, s = "bottom", l = null, u = function(f) {
  }, c = ["play"], h = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? n : (n = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? e : (e = f, this);
    },
    symbolsize: function(f) {
      return typeof f > "u" ? r : (r = f, this);
    },
    shape: function(f) {
      return typeof f > "u" ? i : (i = f, this);
    },
    position: function(f) {
      return typeof f > "u" ? a : (a = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? a.x : (a.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? a.y : (a.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? o : (o = f, this);
    },
    labelposition: function(f) {
      return typeof f > "u" ? s : (s = f, this);
    },
    fontsize: function(f) {
      return typeof f > "u" ? l : (l = f, this);
    },
    update: function(f) {
      if (typeof f == "function")
        return u = f, this;
      u(f);
    },
    actions: function(f) {
      return typeof f > "u" ? c : (c = f, this);
    },
    value: function(f) {
      return typeof f > "u" ? h : (h = f, this);
    },
    click: function() {
      h = (h + 1) % c.length, u(), L(this.parentNode).select("." + x.symbol).attr("d", Zr(c[h])(r * e));
    },
    press: function(f) {
      h = (h + 1) % c.length, u(), f.select("#button_" + n).select("." + x.symbol).attr("d", Zr(c[h])(r * e));
    }
  };
}, y1 = () => {
  const t = "slider", n = Ue(".3f");
  var e = We(), r = 100, i = 8, a = 10, o = !1, s = { x: 0, y: 0 }, l = "top-left", u = 4, c = null, h = function(d) {
  }, f = function(d) {
  }, p = [0, 1], g = 0, _ = null, w = cn().domain(p).range([0, r]).clamp(!0);
  const b = function(d, M, y = p) {
    const m = d.select("#slider_" + e);
    w.domain(y), g = M, m.selectAll("." + x.handle).transition().attr("cx", w(M)), o && m.select("." + x.label).text(_ + " = " + n(g)), h(), f();
  };
  return {
    type: t,
    scale: w,
    id: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? _ : (_ = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    girth: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    knob: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    show: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? s.x : (s.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? s.y : (s.y = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? l : (l = d, this);
    },
    labelpadding: function(d) {
      return typeof d > "u" ? u : (u = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? c : (c = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return h = d, this;
      h(d);
    },
    update_end: function(d) {
      if (typeof d == "function")
        return f = d, this;
      f(d);
    },
    range: function(d) {
      return typeof d > "u" ? p : (p = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? g : (g = d, this);
    },
    reset: b,
    click: b
  };
}, _1 = () => {
  const t = "toggle";
  var n = We(), e = 10, r = { x: 0, y: 0 }, i = null, a = "top", o = null, s = function(u) {
  }, l = 0;
  return {
    type: t,
    id: function(u) {
      return typeof u > "u" ? n : (n = u, this);
    },
    size: function(u) {
      return typeof u > "u" ? e : (e = u, this);
    },
    position: function(u) {
      return typeof u > "u" ? r : (r = u, this);
    },
    x: function(u) {
      return typeof u > "u" ? r.x : (r.x = u, this);
    },
    y: function(u) {
      return typeof u > "u" ? r.y : (r.y = u, this);
    },
    label: function(u) {
      return typeof u > "u" ? i : (i = u, this);
    },
    labelposition: function(u) {
      return typeof u > "u" ? a : (a = u, this);
    },
    fontsize: function(u) {
      return typeof u > "u" ? o : (o = u, this);
    },
    update: function(u) {
      if (typeof u == "function")
        return s = u, this;
      s(u);
    },
    value: function(u) {
      return typeof u > "u" ? l : (l = u, this);
    },
    click: function() {
      l = !l;
      const u = L(this.parentNode);
      u.select("." + x.handle).transition().attr("cx", l ? 2 * e : 0), u.classed(x.selected, l), s();
    },
    reset: function(u, c) {
      l = c;
      const h = u.select("#toggle_" + n);
      h.selectAll("." + x.handle).transition().attr("cx", l ? 2 * e : 0), h.classed(x.selected, l), s();
    }
  };
}, v1 = () => {
  const t = "radio";
  var n = We(), e = 100, r = 20, i = 0.3, a = "round", o = "vertical", s = { x: 0, y: 0 }, l = "right", u = null, c = function(p) {
  }, h = [], f = 0;
  return {
    type: t,
    id: function(p) {
      return typeof p > "u" ? n : (n = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? e : (e = p, this);
    },
    buttonsize: function(p) {
      return typeof p > "u" ? r : (r = p, this);
    },
    buttonpadding: function(p) {
      return typeof p > "u" ? i : (i = p, this);
    },
    orientation: function(p) {
      return typeof p > "u" ? o : (o = p, this);
    },
    shape: function(p) {
      return typeof p > "u" ? a : (a = p, this);
    },
    position: function(p) {
      return typeof p > "u" ? s : (s = p, this);
    },
    x: function(p) {
      return typeof p > "u" ? s.x : (s.x = p, this);
    },
    y: function(p) {
      return typeof p > "u" ? s.y : (s.y = p, this);
    },
    labelposition: function(p) {
      return typeof p > "u" ? l : (l = p, this);
    },
    fontsize: function(p) {
      return typeof p > "u" ? u : (u = p, this);
    },
    update: function(p) {
      if (typeof p == "function")
        return c = p, this;
      c(p);
    },
    choices: function(p) {
      return typeof p > "u" ? h : (h = p, this);
    },
    value: function(p) {
      return typeof p > "u" ? f : (f = p, this);
    },
    click: function(p, g) {
      f = g, L(this.parentNode).selectAll("." + x.symbol).classed(x.selected, (_) => _ == f), c();
    },
    reset: function(p, g) {
      f = g, p.select("#radio_" + n).selectAll("." + x.symbol).classed(x.selected, (_) => _ == f), c();
    }
  };
}, m1 = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), o = L(a).attr("class", x.widget + " " + x.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = o.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = o.append("circle").attr("r", t.size() / 2), s.attr("class", x.background).on("click", t.click).on("mouseover", function() {
    L(this).classed(x.lit, !0), L(this.parentNode).select("." + x.symbol).classed(x.lit, !0);
  }).on("mouseout", function() {
    L(this).classed(x.lit, !1), L(this.parentNode).select("." + x.symbol).classed(x.lit, !1);
  }), o.append("path").attr("d", Zr(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", x.symbol), r) {
    const l = Si(t.size(), t.size(), i);
    o.append("text").text(r).attr("class", x.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + l.x + "," + l.y + ")");
  }
  return a;
}, iu = (t, n) => {
  const e = ut();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, w1 = (t, n) => {
  const e = Ue(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, a = t.size();
  t.label();
  const o = t.scale;
  var s;
  const l = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = L(l).attr("class", x.widget + " " + x.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), o.domain(i()).range([0, a]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2, c = (b) => {
    const d = b && b.sourceEvent ? b.sourceEvent : b;
    return d ? d.clientX != null ? d.clientX : d.touches && d.touches.length ? d.touches[0].clientX : d.changedTouches && d.changedTouches.length ? d.changedTouches[0].clientX : null : null;
  }, h = (b, d) => {
    const M = c(b);
    if (M == null) return null;
    const y = d.getBoundingClientRect(), m = M - y.left, I = d.width && d.width.baseVal ? d.width.baseVal.value : y.width, z = y.width ? I / y.width : 1;
    return m * z - u;
  };
  s.append("path").attr("d", iu(t.size(), t.girth())).attr("class", x.track), s.append("circle").attr("class", x.handle).attr("r", t.knob()).attr("cx", o(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", x.track_overlay).on("click", function(b) {
    const d = h(b, this);
    if (d == null) return;
    const M = Math.max(0, Math.min(t.size(), d));
    t.value(o.invert(M)), t.update(), t.update_end(), s.selectAll("." + x.handle).attr("cx", o(t.value())), t.show() && s.select("." + x.label).text(t.label() + " = " + e(t.value()));
  }).call(
    e0().on("drag", function(b) {
      const d = h(b, this);
      if (d == null) return;
      const M = Math.max(0, Math.min(t.size(), d));
      t.value(o.invert(M)), t.update(), s.selectAll("." + x.handle).attr("cx", o(t.value())), t.show() && s.select("." + x.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(b) {
      t.update_end();
    })
  );
  var f, p, g, _ = "bottom";
  const w = (typeof t.labelpadding == "function" ? t.labelpadding() : 4) || 0;
  return t.fontsize ? p = t.labelposition().match(/bottom/i) != null ? Wn([t.girth() / 2, t.knob()]) + t.fontsize() / 2 + w : -Wn([t.girth() / 2, t.knob()]) - t.fontsize() / 2 - w : p = t.labelposition().match(/bottom/i) != null ? Wn([t.girth() / 2, t.knob()]) + 7 + w : -Wn([t.girth() / 2, t.knob()]) - 7 - w, f = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, g = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", _ = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", x.label).style("text-anchor", g).style("alignment-baseline", _).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + f + "," + p + ")"), l;
}, b1 = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), a = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = L(o).attr("class", x.widget + " " + x.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(x.selected, t.value() == 1);
  if (s.append("path").attr("d", iu(2 * t.size(), 2 * t.size())).attr("class", x.track), s.append("circle").attr("class", x.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", x.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const l = Si(4 * t.size(), 2 * t.size(), a);
    s.append("text").text(i).attr("class", x.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + (l.x + r) + "," + l.y + ")");
  }
  return o;
}, x1 = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), a = t.buttonsize() * (1 - t.buttonpadding()), o = t.choices().length, s = hp(o), l = cn().domain([0, o - 1]).range([0, t.size()]), u = cn().domain([0, o - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = L(c).attr("class", x.widget + " " + x.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + x.radiobutton).data(s).enter().append("g").attr("class", x.radiobutton).attr("id", (_) => "b" + _).attr("transform", (_) => t.orientation() == "vertical" ? "translate(0," + u(_) + ")" : "translate(" + l(_) + ",0)");
  var f, p;
  t.shape() == "rect" ? (f = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), p = h.append("rect").attr("width", a).attr("height", a).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -a / 2 + "," + -a / 2 + ")")) : (f = h.append("circle").attr("r", i / 2), p = h.append("circle").attr("r", a / 2)), f.attr("class", x.background).on("mouseover", function() {
    L(this).classed(x.lit, !0), L(this.parentNode).select("." + x.symbol).classed(x.lit, !0);
  }).on("mouseout", function() {
    L(this).classed(x.lit, !1), L(this.parentNode).select("." + x.symbol).classed(x.lit, !1);
  }), p.attr("class", x.symbol), p.filter((_) => _ == t.value()).classed(x.selected, !0), h.on("click", t.click);
  const g = Si(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", x.label).text(function(_, w) {
    return t.choices()[w];
  }).attr("alignment-baseline", g.valign).attr("transform", "translate(" + g.x + "," + g.y + ")").style("font-size", t.fontsize()).attr("text-anchor", g.anchor), c;
}, mr = (t, n) => {
  switch (t.type) {
    case "button":
      return m1(t);
    case "slider":
      return w1(t);
    case "radio":
      return x1(t);
    case "toggle":
      return b1(t);
  }
}, M1 = "_displayPanel_cwpad_1", A1 = "_controlPanel_cwpad_8", $1 = "_leg_cwpad_24", P1 = "_joint_cwpad_29", T1 = "_leg_inset_cwpad_33", N1 = "_trace_cwpad_38", k1 = "_trace_ghost_cwpad_45", S1 = "_trajectory_cwpad_53", E1 = "_trajectory_ghost_cwpad_60", T = {
  displayPanel: M1,
  controlPanel: A1,
  leg: $1,
  joint: P1,
  leg_inset: T1,
  trace: N1,
  trace_ghost: k1,
  trajectory: S1,
  trajectory_ghost: E1
}, O1 = (t, n) => {
  const e = Gm(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = Rc("#" + t).classed(t + " " + n.container_class, !0), i = t + "_display", a = t + "_controls", o = r.append("div").attr("id", i).attr("class", T.displayPanel).classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), s = r.append("div").attr("id", a).attr("class", "d3-widgets " + T.controlPanel).classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height).style("width", "100%").style("height", "100%");
  return n.debug && s.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (l) => "translate(" + l.x + "," + l.y + ")").style("fill", "black"), { display: o, controls: s, grid: e };
};
var au = typeof global == "object" && global && global.Object === Object && global, I1 = typeof self == "object" && self && self.Object === Object && self, $t = au || I1 || Function("return this")(), Ot = $t.Symbol, ou = Object.prototype, z1 = ou.hasOwnProperty, C1 = ou.toString, vn = Ot ? Ot.toStringTag : void 0;
function j1(t) {
  var n = z1.call(t, vn), e = t[vn];
  try {
    t[vn] = void 0;
    var r = !0;
  } catch {
  }
  var i = C1.call(t);
  return r && (n ? t[vn] = e : delete t[vn]), i;
}
var R1 = Object.prototype, L1 = R1.toString;
function F1(t) {
  return L1.call(t);
}
var D1 = "[object Null]", q1 = "[object Undefined]", eo = Ot ? Ot.toStringTag : void 0;
function Vt(t) {
  return t == null ? t === void 0 ? q1 : D1 : eo && eo in Object(t) ? j1(t) : F1(t);
}
function Ut(t) {
  return t != null && typeof t == "object";
}
var X1 = "[object Symbol]";
function Je(t) {
  return typeof t == "symbol" || Ut(t) && Vt(t) == X1;
}
function Qe(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var at = Array.isArray, ro = Ot ? Ot.prototype : void 0, io = ro ? ro.toString : void 0;
function su(t) {
  if (typeof t == "string")
    return t;
  if (at(t))
    return Qe(t, su) + "";
  if (Je(t))
    return io ? io.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var B1 = /\s/;
function H1(t) {
  for (var n = t.length; n-- && B1.test(t.charAt(n)); )
    ;
  return n;
}
var U1 = /^\s+/;
function Y1(t) {
  return t && t.slice(0, H1(t) + 1).replace(U1, "");
}
function bt(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var ao = NaN, G1 = /^[-+]0x[0-9a-f]+$/i, V1 = /^0b[01]+$/i, K1 = /^0o[0-7]+$/i, Z1 = parseInt;
function W1(t) {
  if (typeof t == "number")
    return t;
  if (Je(t))
    return ao;
  if (bt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = bt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Y1(t);
  var e = V1.test(t);
  return e || K1.test(t) ? Z1(t.slice(2), e ? 2 : 8) : G1.test(t) ? ao : +t;
}
var oo = 1 / 0, J1 = 17976931348623157e292;
function pe(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = W1(t), t === oo || t === -oo) {
    var n = t < 0 ? -1 : 1;
    return n * J1;
  }
  return t === t ? t : 0;
}
function Q1(t) {
  var n = pe(t), e = n % 1;
  return n === n ? e ? n - e : n : 0;
}
function uu(t) {
  return t;
}
var tw = "[object AsyncFunction]", nw = "[object Function]", ew = "[object GeneratorFunction]", rw = "[object Proxy]";
function lu(t) {
  if (!bt(t))
    return !1;
  var n = Vt(t);
  return n == nw || n == ew || n == tw || n == rw;
}
var wr = $t["__core-js_shared__"], so = (function() {
  var t = /[^.]+$/.exec(wr && wr.keys && wr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function iw(t) {
  return !!so && so in t;
}
var aw = Function.prototype, ow = aw.toString;
function Kt(t) {
  if (t != null) {
    try {
      return ow.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var sw = /[\\^$.*+?()[\]{}|]/g, uw = /^\[object .+?Constructor\]$/, lw = Function.prototype, cw = Object.prototype, fw = lw.toString, hw = cw.hasOwnProperty, pw = RegExp(
  "^" + fw.call(hw).replace(sw, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function dw(t) {
  if (!bt(t) || iw(t))
    return !1;
  var n = lu(t) ? pw : uw;
  return n.test(Kt(t));
}
function gw(t, n) {
  return t == null ? void 0 : t[n];
}
function Zt(t, n) {
  var e = gw(t, n);
  return dw(e) ? e : void 0;
}
var Wr = Zt($t, "WeakMap"), uo = (function() {
  try {
    var t = Zt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
})();
function yw(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var _w = 9007199254740991, vw = /^(?:0|[1-9]\d*)$/;
function tr(t, n) {
  var e = typeof t;
  return n = n ?? _w, !!n && (e == "number" || e != "symbol" && vw.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function mw(t, n, e) {
  n == "__proto__" && uo ? uo(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function nr(t, n) {
  return t === n || t !== t && n !== n;
}
var ww = Object.prototype, bw = ww.hasOwnProperty;
function xw(t, n, e) {
  var r = t[n];
  (!(bw.call(t, n) && nr(r, e)) || e === void 0 && !(n in t)) && mw(t, n, e);
}
var Mw = 9007199254740991;
function Oi(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Mw;
}
function Hn(t) {
  return t != null && Oi(t.length) && !lu(t);
}
function Aw(t, n, e) {
  if (!bt(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Hn(e) && tr(n, e.length) : r == "string" && n in e) ? nr(e[n], t) : !1;
}
var $w = Object.prototype;
function cu(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || $w;
  return t === e;
}
function Pw(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var Tw = "[object Arguments]";
function lo(t) {
  return Ut(t) && Vt(t) == Tw;
}
var fu = Object.prototype, Nw = fu.hasOwnProperty, kw = fu.propertyIsEnumerable, hu = lo(/* @__PURE__ */ (function() {
  return arguments;
})()) ? lo : function(t) {
  return Ut(t) && Nw.call(t, "callee") && !kw.call(t, "callee");
};
function Sw() {
  return !1;
}
var pu = typeof exports == "object" && exports && !exports.nodeType && exports, co = pu && typeof module == "object" && module && !module.nodeType && module, Ew = co && co.exports === pu, fo = Ew ? $t.Buffer : void 0, Ow = fo ? fo.isBuffer : void 0, Jr = Ow || Sw, Iw = "[object Arguments]", zw = "[object Array]", Cw = "[object Boolean]", jw = "[object Date]", Rw = "[object Error]", Lw = "[object Function]", Fw = "[object Map]", Dw = "[object Number]", qw = "[object Object]", Xw = "[object RegExp]", Bw = "[object Set]", Hw = "[object String]", Uw = "[object WeakMap]", Yw = "[object ArrayBuffer]", Gw = "[object DataView]", Vw = "[object Float32Array]", Kw = "[object Float64Array]", Zw = "[object Int8Array]", Ww = "[object Int16Array]", Jw = "[object Int32Array]", Qw = "[object Uint8Array]", tb = "[object Uint8ClampedArray]", nb = "[object Uint16Array]", eb = "[object Uint32Array]", E = {};
E[Vw] = E[Kw] = E[Zw] = E[Ww] = E[Jw] = E[Qw] = E[tb] = E[nb] = E[eb] = !0;
E[Iw] = E[zw] = E[Yw] = E[Cw] = E[Gw] = E[jw] = E[Rw] = E[Lw] = E[Fw] = E[Dw] = E[qw] = E[Xw] = E[Bw] = E[Hw] = E[Uw] = !1;
function rb(t) {
  return Ut(t) && Oi(t.length) && !!E[Vt(t)];
}
function ib(t) {
  return function(n) {
    return t(n);
  };
}
var du = typeof exports == "object" && exports && !exports.nodeType && exports, Pn = du && typeof module == "object" && module && !module.nodeType && module, ab = Pn && Pn.exports === du, br = ab && au.process, ho = (function() {
  try {
    var t = Pn && Pn.require && Pn.require("util").types;
    return t || br && br.binding && br.binding("util");
  } catch {
  }
})(), po = ho && ho.isTypedArray, gu = po ? ib(po) : rb, ob = Object.prototype, sb = ob.hasOwnProperty;
function yu(t, n) {
  var e = at(t), r = !e && hu(t), i = !e && !r && Jr(t), a = !e && !r && !i && gu(t), o = e || r || i || a, s = o ? Pw(t.length, String) : [], l = s.length;
  for (var u in t)
    (n || sb.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    tr(u, l))) && s.push(u);
  return s;
}
function _u(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var ub = _u(Object.keys, Object), lb = Object.prototype, cb = lb.hasOwnProperty;
function fb(t) {
  if (!cu(t))
    return ub(t);
  var n = [];
  for (var e in Object(t))
    cb.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function er(t) {
  return Hn(t) ? yu(t) : fb(t);
}
function hb(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var pb = Object.prototype, db = pb.hasOwnProperty;
function gb(t) {
  if (!bt(t))
    return hb(t);
  var n = cu(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !db.call(t, r)) || e.push(r);
  return e;
}
function yb(t) {
  return Hn(t) ? yu(t, !0) : gb(t);
}
var _b = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, vb = /^\w*$/;
function Ii(t, n) {
  if (at(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Je(t) ? !0 : vb.test(t) || !_b.test(t) || n != null && t in Object(n);
}
var Rn = Zt(Object, "create");
function mb() {
  this.__data__ = Rn ? Rn(null) : {}, this.size = 0;
}
function wb(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var bb = "__lodash_hash_undefined__", xb = Object.prototype, Mb = xb.hasOwnProperty;
function Ab(t) {
  var n = this.__data__;
  if (Rn) {
    var e = n[t];
    return e === bb ? void 0 : e;
  }
  return Mb.call(n, t) ? n[t] : void 0;
}
var $b = Object.prototype, Pb = $b.hasOwnProperty;
function Tb(t) {
  var n = this.__data__;
  return Rn ? n[t] !== void 0 : Pb.call(n, t);
}
var Nb = "__lodash_hash_undefined__";
function kb(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Rn && n === void 0 ? Nb : n, this;
}
function Yt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Yt.prototype.clear = mb;
Yt.prototype.delete = wb;
Yt.prototype.get = Ab;
Yt.prototype.has = Tb;
Yt.prototype.set = kb;
function Sb() {
  this.__data__ = [], this.size = 0;
}
function rr(t, n) {
  for (var e = t.length; e--; )
    if (nr(t[e][0], n))
      return e;
  return -1;
}
var Eb = Array.prototype, Ob = Eb.splice;
function Ib(t) {
  var n = this.__data__, e = rr(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : Ob.call(n, e, 1), --this.size, !0;
}
function zb(t) {
  var n = this.__data__, e = rr(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function Cb(t) {
  return rr(this.__data__, t) > -1;
}
function jb(t, n) {
  var e = this.__data__, r = rr(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function Pt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Pt.prototype.clear = Sb;
Pt.prototype.delete = Ib;
Pt.prototype.get = zb;
Pt.prototype.has = Cb;
Pt.prototype.set = jb;
var Ln = Zt($t, "Map");
function Rb() {
  this.size = 0, this.__data__ = {
    hash: new Yt(),
    map: new (Ln || Pt)(),
    string: new Yt()
  };
}
function Lb(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function ir(t, n) {
  var e = t.__data__;
  return Lb(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function Fb(t) {
  var n = ir(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function Db(t) {
  return ir(this, t).get(t);
}
function qb(t) {
  return ir(this, t).has(t);
}
function Xb(t, n) {
  var e = ir(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function Tt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Tt.prototype.clear = Rb;
Tt.prototype.delete = Fb;
Tt.prototype.get = Db;
Tt.prototype.has = qb;
Tt.prototype.set = Xb;
var Bb = "Expected a function";
function zi(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Bb);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], a = e.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return e.cache = a.set(i, o) || a, o;
  };
  return e.cache = new (zi.Cache || Tt)(), e;
}
zi.Cache = Tt;
var Hb = 500;
function Ub(t) {
  var n = zi(t, function(r) {
    return e.size === Hb && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Yb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Gb = /\\(\\)?/g, Vb = Ub(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Yb, function(e, r, i, a) {
    n.push(i ? a.replace(Gb, "$1") : r || e);
  }), n;
});
function ar(t) {
  return t == null ? "" : su(t);
}
function or(t, n) {
  return at(t) ? t : Ii(t, n) ? [t] : Vb(ar(t));
}
function Un(t) {
  if (typeof t == "string" || Je(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Ci(t, n) {
  n = or(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Un(n[e++])];
  return e && e == r ? t : void 0;
}
function Kb(t, n, e) {
  var r = t == null ? void 0 : Ci(t, n);
  return r === void 0 ? e : r;
}
function vu(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Zb = _u(Object.getPrototypeOf, Object);
function mu(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var a = Array(i); ++r < i; )
    a[r] = t[r + n];
  return a;
}
function Wb(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, !n && e >= r ? t : mu(t, n, e);
}
var Jb = "\\ud800-\\udfff", Qb = "\\u0300-\\u036f", tx = "\\ufe20-\\ufe2f", nx = "\\u20d0-\\u20ff", ex = Qb + tx + nx, rx = "\\ufe0e\\ufe0f", ix = "\\u200d", ax = RegExp("[" + ix + Jb + ex + rx + "]");
function wu(t) {
  return ax.test(t);
}
function ox(t) {
  return t.split("");
}
var bu = "\\ud800-\\udfff", sx = "\\u0300-\\u036f", ux = "\\ufe20-\\ufe2f", lx = "\\u20d0-\\u20ff", cx = sx + ux + lx, fx = "\\ufe0e\\ufe0f", hx = "[" + bu + "]", Qr = "[" + cx + "]", ti = "\\ud83c[\\udffb-\\udfff]", px = "(?:" + Qr + "|" + ti + ")", xu = "[^" + bu + "]", Mu = "(?:\\ud83c[\\udde6-\\uddff]){2}", Au = "[\\ud800-\\udbff][\\udc00-\\udfff]", dx = "\\u200d", $u = px + "?", Pu = "[" + fx + "]?", gx = "(?:" + dx + "(?:" + [xu, Mu, Au].join("|") + ")" + Pu + $u + ")*", yx = Pu + $u + gx, _x = "(?:" + [xu + Qr + "?", Qr, Mu, Au, hx].join("|") + ")", vx = RegExp(ti + "(?=" + ti + ")|" + _x + yx, "g");
function mx(t) {
  return t.match(vx) || [];
}
function wx(t) {
  return wu(t) ? mx(t) : ox(t);
}
function bx(t) {
  return function(n) {
    n = ar(n);
    var e = wu(n) ? wx(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? Wb(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var xx = bx("toUpperCase");
function Mx(t) {
  return xx(ar(t).toLowerCase());
}
function Ax() {
  this.__data__ = new Pt(), this.size = 0;
}
function $x(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function Px(t) {
  return this.__data__.get(t);
}
function Tx(t) {
  return this.__data__.has(t);
}
var Nx = 200;
function kx(t, n) {
  var e = this.__data__;
  if (e instanceof Pt) {
    var r = e.__data__;
    if (!Ln || r.length < Nx - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new Tt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function vt(t) {
  var n = this.__data__ = new Pt(t);
  this.size = n.size;
}
vt.prototype.clear = Ax;
vt.prototype.delete = $x;
vt.prototype.get = Px;
vt.prototype.has = Tx;
vt.prototype.set = kx;
function Sx(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++e < r; ) {
    var o = t[e];
    n(o, e, t) && (a[i++] = o);
  }
  return a;
}
function Tu() {
  return [];
}
var Ex = Object.prototype, Ox = Ex.propertyIsEnumerable, go = Object.getOwnPropertySymbols, Nu = go ? function(t) {
  return t == null ? [] : (t = Object(t), Sx(go(t), function(n) {
    return Ox.call(t, n);
  }));
} : Tu, Ix = Object.getOwnPropertySymbols, zx = Ix ? function(t) {
  for (var n = []; t; )
    vu(n, Nu(t)), t = Zb(t);
  return n;
} : Tu;
function ku(t, n, e) {
  var r = n(t);
  return at(t) ? r : vu(r, e(t));
}
function yo(t) {
  return ku(t, er, Nu);
}
function Cx(t) {
  return ku(t, yb, zx);
}
var ni = Zt($t, "DataView"), ei = Zt($t, "Promise"), ri = Zt($t, "Set"), _o = "[object Map]", jx = "[object Object]", vo = "[object Promise]", mo = "[object Set]", wo = "[object WeakMap]", bo = "[object DataView]", Rx = Kt(ni), Lx = Kt(Ln), Fx = Kt(ei), Dx = Kt(ri), qx = Kt(Wr), yt = Vt;
(ni && yt(new ni(new ArrayBuffer(1))) != bo || Ln && yt(new Ln()) != _o || ei && yt(ei.resolve()) != vo || ri && yt(new ri()) != mo || Wr && yt(new Wr()) != wo) && (yt = function(t) {
  var n = Vt(t), e = n == jx ? t.constructor : void 0, r = e ? Kt(e) : "";
  if (r)
    switch (r) {
      case Rx:
        return bo;
      case Lx:
        return _o;
      case Fx:
        return vo;
      case Dx:
        return mo;
      case qx:
        return wo;
    }
  return n;
});
var xo = $t.Uint8Array, Xx = "__lodash_hash_undefined__";
function Bx(t) {
  return this.__data__.set(t, Xx), this;
}
function Hx(t) {
  return this.__data__.has(t);
}
function Re(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new Tt(); ++n < e; )
    this.add(t[n]);
}
Re.prototype.add = Re.prototype.push = Bx;
Re.prototype.has = Hx;
function Ux(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Yx(t, n) {
  return t.has(n);
}
var Gx = 1, Vx = 2;
function Su(t, n, e, r, i, a) {
  var o = e & Gx, s = t.length, l = n.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = a.get(t), c = a.get(n);
  if (u && c)
    return u == n && c == t;
  var h = -1, f = !0, p = e & Vx ? new Re() : void 0;
  for (a.set(t, n), a.set(n, t); ++h < s; ) {
    var g = t[h], _ = n[h];
    if (r)
      var w = o ? r(_, g, h, n, t, a) : r(g, _, h, t, n, a);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!Ux(n, function(b, d) {
        if (!Yx(p, d) && (g === b || i(g, b, e, r, a)))
          return p.push(d);
      })) {
        f = !1;
        break;
      }
    } else if (!(g === _ || i(g, _, e, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(t), a.delete(n), f;
}
function Eu(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Kx(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Zx = 1, Wx = 2, Jx = "[object Boolean]", Qx = "[object Date]", t2 = "[object Error]", n2 = "[object Map]", e2 = "[object Number]", r2 = "[object RegExp]", i2 = "[object Set]", a2 = "[object String]", o2 = "[object Symbol]", s2 = "[object ArrayBuffer]", u2 = "[object DataView]", Mo = Ot ? Ot.prototype : void 0, xr = Mo ? Mo.valueOf : void 0;
function l2(t, n, e, r, i, a, o) {
  switch (e) {
    case u2:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case s2:
      return !(t.byteLength != n.byteLength || !a(new xo(t), new xo(n)));
    case Jx:
    case Qx:
    case e2:
      return nr(+t, +n);
    case t2:
      return t.name == n.name && t.message == n.message;
    case r2:
    case a2:
      return t == n + "";
    case n2:
      var s = Eu;
    case i2:
      var l = r & Zx;
      if (s || (s = Kx), t.size != n.size && !l)
        return !1;
      var u = o.get(t);
      if (u)
        return u == n;
      r |= Wx, o.set(t, n);
      var c = Su(s(t), s(n), r, i, a, o);
      return o.delete(t), c;
    case o2:
      if (xr)
        return xr.call(t) == xr.call(n);
  }
  return !1;
}
var c2 = 1, f2 = Object.prototype, h2 = f2.hasOwnProperty;
function p2(t, n, e, r, i, a) {
  var o = e & c2, s = yo(t), l = s.length, u = yo(n), c = u.length;
  if (l != c && !o)
    return !1;
  for (var h = l; h--; ) {
    var f = s[h];
    if (!(o ? f in n : h2.call(n, f)))
      return !1;
  }
  var p = a.get(t), g = a.get(n);
  if (p && g)
    return p == n && g == t;
  var _ = !0;
  a.set(t, n), a.set(n, t);
  for (var w = o; ++h < l; ) {
    f = s[h];
    var b = t[f], d = n[f];
    if (r)
      var M = o ? r(d, b, f, n, t, a) : r(b, d, f, t, n, a);
    if (!(M === void 0 ? b === d || i(b, d, e, r, a) : M)) {
      _ = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (_ && !w) {
    var y = t.constructor, m = n.constructor;
    y != m && "constructor" in t && "constructor" in n && !(typeof y == "function" && y instanceof y && typeof m == "function" && m instanceof m) && (_ = !1);
  }
  return a.delete(t), a.delete(n), _;
}
var d2 = 1, Ao = "[object Arguments]", $o = "[object Array]", ie = "[object Object]", g2 = Object.prototype, Po = g2.hasOwnProperty;
function y2(t, n, e, r, i, a) {
  var o = at(t), s = at(n), l = o ? $o : yt(t), u = s ? $o : yt(n);
  l = l == Ao ? ie : l, u = u == Ao ? ie : u;
  var c = l == ie, h = u == ie, f = l == u;
  if (f && Jr(t)) {
    if (!Jr(n))
      return !1;
    o = !0, c = !1;
  }
  if (f && !c)
    return a || (a = new vt()), o || gu(t) ? Su(t, n, e, r, i, a) : l2(t, n, l, e, r, i, a);
  if (!(e & d2)) {
    var p = c && Po.call(t, "__wrapped__"), g = h && Po.call(n, "__wrapped__");
    if (p || g) {
      var _ = p ? t.value() : t, w = g ? n.value() : n;
      return a || (a = new vt()), i(_, w, e, r, a);
    }
  }
  return f ? (a || (a = new vt()), p2(t, n, e, r, i, a)) : !1;
}
function ji(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !Ut(t) && !Ut(n) ? t !== t && n !== n : y2(t, n, e, r, ji, i);
}
var _2 = 1, v2 = 2;
function m2(t, n, e, r) {
  var i = e.length, a = i;
  if (t == null)
    return !a;
  for (t = Object(t); i--; ) {
    var o = e[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < a; ) {
    o = e[i];
    var s = o[0], l = t[s], u = o[1];
    if (o[2]) {
      if (l === void 0 && !(s in t))
        return !1;
    } else {
      var c = new vt(), h;
      if (!(h === void 0 ? ji(u, l, _2 | v2, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function Ou(t) {
  return t === t && !bt(t);
}
function w2(t) {
  for (var n = er(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Ou(i)];
  }
  return n;
}
function Iu(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function b2(t) {
  var n = w2(t);
  return n.length == 1 && n[0][2] ? Iu(n[0][0], n[0][1]) : function(e) {
    return e === t || m2(e, t, n);
  };
}
function x2(t, n) {
  return t != null && n in Object(t);
}
function zu(t, n, e) {
  n = or(n, t);
  for (var r = -1, i = n.length, a = !1; ++r < i; ) {
    var o = Un(n[r]);
    if (!(a = t != null && e(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && Oi(i) && tr(o, i) && (at(t) || hu(t)));
}
function M2(t, n) {
  return t != null && zu(t, n, x2);
}
var A2 = 1, $2 = 2;
function P2(t, n) {
  return Ii(t) && Ou(n) ? Iu(Un(t), n) : function(e) {
    var r = Kb(e, t);
    return r === void 0 && r === n ? M2(e, t) : ji(n, r, A2 | $2);
  };
}
function T2(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function N2(t) {
  return function(n) {
    return Ci(n, t);
  };
}
function k2(t) {
  return Ii(t) ? T2(Un(t)) : N2(t);
}
function Cu(t) {
  return typeof t == "function" ? t : t == null ? uu : typeof t == "object" ? at(t) ? P2(t[0], t[1]) : b2(t) : k2(t);
}
function S2(t) {
  return function(n, e, r) {
    for (var i = -1, a = Object(n), o = r(n), s = o.length; s--; ) {
      var l = o[++i];
      if (e(a[l], l, a) === !1)
        break;
    }
    return n;
  };
}
var E2 = S2();
function O2(t, n) {
  return t && E2(t, n, er);
}
function I2(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Hn(e))
      return t(e, r);
    for (var i = e.length, a = -1, o = Object(e); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return e;
  };
}
var ju = I2(O2);
function z2(t) {
  return typeof t == "function" ? t : uu;
}
function de(t, n) {
  var e = at(t) ? yw : ju;
  return e(t, z2(n));
}
function C2(t, n) {
  return Qe(n, function(e) {
    return [e, t[e]];
  });
}
function j2(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var R2 = "[object Map]", L2 = "[object Set]";
function F2(t) {
  return function(n) {
    var e = yt(n);
    return e == R2 ? Eu(n) : e == L2 ? j2(n) : C2(n, t(n));
  };
}
var Ru = F2(er);
function D2(t, n) {
  var e = -1, r = Hn(t) ? Array(t.length) : [];
  return ju(t, function(i, a, o) {
    r[++e] = n(i, a, o);
  }), r;
}
function Yn(t, n) {
  var e = at(t) ? Qe : D2;
  return e(t, Cu(n));
}
var q2 = Object.prototype, X2 = q2.hasOwnProperty;
function B2(t, n) {
  return t != null && X2.call(t, n);
}
function Lu(t, n) {
  return t != null && zu(t, n, B2);
}
var H2 = "[object Boolean]";
function U2(t) {
  return t === !0 || t === !1 || Ut(t) && Vt(t) == H2;
}
function Y2(t, n, e, r) {
  if (!bt(t))
    return t;
  n = or(n, t);
  for (var i = -1, a = n.length, o = a - 1, s = t; s != null && ++i < a; ) {
    var l = Un(n[i]), u = e;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != o) {
      var c = s[l];
      u = void 0, u === void 0 && (u = bt(c) ? c : tr(n[i + 1]) ? [] : {});
    }
    xw(s, l, u), s = s[l];
  }
  return t;
}
function G2(t, n, e) {
  for (var r = -1, i = n.length, a = {}; ++r < i; ) {
    var o = n[r], s = Ci(t, o);
    e(s, o) && Y2(a, or(o, t), s);
  }
  return a;
}
function Ri(t, n) {
  if (t == null)
    return {};
  var e = Qe(Cx(t), function(r) {
    return [r];
  });
  return n = Cu(n), G2(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var V2 = Math.ceil, K2 = Math.max;
function Z2(t, n, e, r) {
  for (var i = -1, a = K2(V2((n - t) / (e || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += e;
  return o;
}
function W2(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && Aw(n, e, r) && (e = r = void 0), n = pe(n), e === void 0 ? (e = n, n = 0) : e = pe(e), r = r === void 0 ? n < e ? 1 : -1 : pe(r), Z2(n, e, r);
  };
}
var To = W2();
function J2() {
  var t = arguments, n = ar(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
function No(t, n, e) {
  var r = t == null ? 0 : t.length;
  return r ? (n = n === void 0 ? 1 : Q1(n), n = r - n, mu(t, n < 0 ? 0 : n, r)) : [];
}
const k = {
  widgets: {
    slider_size: 400,
    slider_gap: 2,
    slider_girth: 10,
    slider_knob: 14,
    slider_anchor: { x: 1, y: 9 },
    toggle_anchor: { x: 7, y: 1.25 },
    toggle_label_pos: "right",
    toggle_gap: 1.25,
    playbutton_size: 140,
    playbutton_anchor: { x: 3, y: 2.5 },
    backbutton_anchor: { x: 4, y: 5.5 },
    resetbutton_anchor: { x: 2, y: 5.5 }
  },
  simulation: {
    delay: 10,
    pendulum_thickness: 9,
    pendulum_border: 2
  }
}, A = {
  dt: 0.0125,
  L: 0.95,
  M: 0.1,
  g: 9.81,
  epsilon: 1e-3,
  trace_length: 100,
  trajectory_length: 5e3,
  angle_1: {
    range: [-Math.PI + 2e-3, Math.PI - 2e-3],
    default: 3 * Math.PI / 4
  },
  angle_2: {
    range: [-Math.PI, Math.PI],
    default: 3 * Math.PI / 4
  },
  show_trace: {
    default: !1
  },
  ghost: {
    default: !1
  },
  show_entire_trajectory: {
    default: !1
  },
  hide_pendulum: {
    default: !1
  },
  gravity: {
    default: !0
  }
}, Li = (t) => Yn(Ru(t), (n) => {
  n[1].id = n[0], n[1].label = n[1].label || J2(Mx(n[0]), /_/g, " ");
}), Fi = (t) => Yn(Ru(t), (n) => n[1]), Di = (t, n) => de(t, (e, r) => e.widget = n[r]), Q2 = (t) => Ri(t, (n) => Lu(n, "range")), tM = (t) => Ri(t, (n) => U2(n.default)), nM = (t) => Ri(t, (n) => Lu(n, "choices"));
qn().domain([0, 360]).range([0, 2 * Math.PI]);
qn().range([0, 360]).domain([0, 2 * Math.PI]);
const ko = (t, n, e) => {
  var r = n(t), i = n(t.map(function(s, l) {
    return s + e / 2 * r[l];
  })), a = n(t.map(function(s, l) {
    return s + e / 2 * i[l];
  })), o = n(t.map(function(s, l) {
    return s + e * a[l];
  }));
  return r.map(function(s, l) {
    return e / 6 * (s + 2 * i[l] + 2 * a[l] + o[l]);
  });
}, qi = Q2(A), Xi = tM(A), Fu = nM(A);
Li(qi);
Li(Xi);
Li(Fu);
const Du = Fi(qi), qu = Fi(Xi), Xu = Fi(Fu), ge = Yn(
  Du,
  (t) => y1().id(t.id).label(t.label).range(t.range).value(t.default).size(k.widgets.slider_size).girth(k.widgets.slider_girth).knob(k.widgets.slider_knob)
), ye = Yn(
  qu,
  (t) => _1().id(t.id).label(t.label).value(t.default)
), eM = Yn(
  Xu,
  (t) => v1().choices(t.choices).id(t.id).value(t.default).orientation(k.widgets.radio_orientation).labelposition(k.widgets.radio_label_position)
);
Di(qu, ye);
Di(Du, ge);
Di(Xu, eM);
const St = Ei().actions(["play", "pause"]), sr = Ei().actions(["back"]), ur = Ei().actions(["rewind"]), rM = [St, sr, ur], iM = (t, n) => {
  const e = n.position(k.widgets.slider_anchor.x, To(ge.length).map((i) => k.widgets.slider_anchor.y + k.widgets.slider_gap * i)), r = n.position(k.widgets.toggle_anchor.x, To(ye.length).map((i) => k.widgets.toggle_anchor.y + k.widgets.toggle_gap * i));
  ge.forEach((i, a) => i.position(e[a])), ye.forEach((i, a) => i.position(r[a]).labelposition(k.widgets.toggle_label_pos)), St.position(n.position(k.widgets.playbutton_anchor.x, k.widgets.playbutton_anchor.y)).size(k.widgets.playbutton_size), ur.position(n.position(k.widgets.backbutton_anchor.x, k.widgets.backbutton_anchor.y)), sr.position(n.position(k.widgets.resetbutton_anchor.x, k.widgets.resetbutton_anchor.y)), t.selectAll(null).data(ge).enter().append(mr), t.selectAll(null).data(ye).enter().append(mr), t.selectAll(null).data(rM).enter().append(mr);
}, aM = (t) => {
  de(qi, (n) => n.widget.reset(t, n.default)), de(Xi, (n) => n.widget.reset(t, n.default)), de(void 0, (n) => n.widget.reset(t, n.default));
}, O = A.L, So = A.dt;
A.M;
A.g;
var $ = [], P = [];
const oM = (t, n) => function(e) {
  let r = Math.cos(e[0] - e[1]), i = A.gravity.widget.value() ? A.g : 0, a = [];
  return a[0] = (e[2] - r * e[3]) / (2 - r * r), a[1] = (2 * e[3] - r * e[2]) / (2 - r * r), a[2] = -a[0] * a[1] * Math.sin(e[0] - e[1]) - 2 * i / t * Math.sin(e[0]), a[3] = a[0] * a[1] * Math.sin(e[0] - e[1]) - i / t * Math.sin(e[1]), a;
}, Eo = oM(O), sM = () => {
  A.timer = {}, A.T = 0, $.state = [A.angle_1.widget.value(), A.angle_2.widget.value(), 0, 0], P.state = [A.angle_1.widget.value(), A.angle_2.widget.value() + A.epsilon, 0, 0], $.hist = [], P.hist = [], $.hist.push({
    x: O * Math.cos($.state[0] - Math.PI / 2) + O * Math.cos($.state[1] - Math.PI / 2),
    y: O * Math.sin($.state[0] - Math.PI / 2) + O * Math.sin($.state[1] - Math.PI / 2)
  }), P.hist.push({
    x: O * Math.cos(P.state[0] - Math.PI / 2) + O * Math.cos(P.state[1] - Math.PI / 2),
    y: O * Math.sin(P.state[0] - Math.PI / 2) + O * Math.sin(P.state[1] - Math.PI / 2)
  });
}, uM = () => {
  A.T++;
  let t = ko($.state, Eo, So), n = ko(P.state, Eo, So);
  for (let e = 0; e < 4; e++)
    $.state[e] += t[e], P.state[e] += n[e];
  $.hist.length > A.trajectory_length && $.hist.shift(), P.hist.length > A.trajectory_length && P.hist.shift(), $.hist.push({
    x: O * Math.cos($.state[0] - Math.PI / 2) + O * Math.cos($.state[1] - Math.PI / 2),
    y: O * Math.sin($.state[0] - Math.PI / 2) + O * Math.sin($.state[1] - Math.PI / 2)
  }), P.hist.push({
    x: O * Math.cos(P.state[0] - Math.PI / 2) + O * Math.cos(P.state[1] - Math.PI / 2),
    y: O * Math.sin(P.state[0] - Math.PI / 2) + O * Math.sin(P.state[1] - Math.PI / 2)
  });
}, lM = () => {
  $.state = [A.angle_1.widget.value(), A.angle_2.widget.value(), 0, 0], P.state = [A.angle_1.widget.value(), A.angle_2.widget.value() + A.epsilon, 0, 0], $.hist = [], P.hist = [], $.hist.push({
    x: O * Math.cos($.state[0] - Math.PI / 2) + O * Math.cos($.state[1] - Math.PI / 2),
    y: O * Math.sin($.state[0] - Math.PI / 2) + O * Math.sin($.state[1] - Math.PI / 2)
  }), P.hist.push({
    x: O * Math.cos(P.state[0] - Math.PI / 2) + O * Math.cos(P.state[1] - Math.PI / 2),
    y: O * Math.sin(P.state[0] - Math.PI / 2) + O * Math.sin(P.state[1] - Math.PI / 2)
  });
}, Nt = A.L, j = qn().domain([-2, 2]), R = qn().domain([2, -2]), Et = np().x((t) => j(t.x)).y((t) => R(t.y));
var U, Y;
const J = (t, n) => [
  {
    x1: 0,
    y1: 0,
    x2: Nt * Math.cos(t - Math.PI / 2),
    y2: Nt * Math.sin(t - Math.PI / 2)
  },
  {
    x1: Nt * Math.cos(t - Math.PI / 2),
    y1: Nt * Math.sin(t - Math.PI / 2),
    x2: Nt * Math.cos(t - Math.PI / 2) + Nt * Math.cos(n - Math.PI / 2),
    y2: Nt * Math.sin(t - Math.PI / 2) + Nt * Math.sin(n - Math.PI / 2)
  }
], cM = (t, n) => {
  const e = n.display_size.width, r = n.display_size.height;
  j.range([0, e]), R.range([0, r]), t.selectAll("#origin").remove();
  const i = t.append("g").attr("id", "origin");
  Y = i.append("g").attr("id", "ghost").style("opacity", A.ghost.widget.value() ? 0.3 : 0), U = i.append("g").attr("id", "pendulum"), U.append("path").attr("class", T.trajectory).attr("d", Et($.hist)).style("opacity", A.show_entire_trajectory.widget.value() ? null : 0), U.append("path").attr("class", T.trace).attr("d", Et($.hist)).style("opacity", A.show_trace.widget.value() ? null : 0), Y.append("path").attr("class", T.trajectory_ghost).attr("d", Et(P.hist)).style("opacity", A.show_entire_trajectory.widget.value() ? null : 0), Y.append("path").attr("class", T.trace_ghost).attr("d", Et(P.hist)).style("opacity", A.show_trace.widget.value() ? null : 0), Y.selectAll("." + T.leg).data(J(P.state[0], P.state[1])).enter().append("line").attr("class", T.leg).attr("id", function(a, o) {
    return "leg" + 2 * o;
  }).attr("x1", function(a) {
    return j(a.x1);
  }).attr("y1", function(a) {
    return R(a.y1);
  }).attr("x2", function(a) {
    return j(a.x2);
  }).attr("y2", function(a) {
    return R(a.y2);
  }).style("stroke-width", k.simulation.pendulum_thickness + 2 * k.simulation.pendulum_border), Y.selectAll("." + T.leg_inset).data(J(P.state[0], P.state[1])).enter().append("line").attr("class", T.leg_inset).attr("id", function(a, o) {
    return "leg" + (2 * o + 1);
  }).attr("x1", function(a) {
    return j(a.x1);
  }).attr("y1", function(a) {
    return R(a.y1);
  }).attr("x2", function(a) {
    return j(a.x2);
  }).attr("y2", function(a) {
    return R(a.y2);
  }).style("stroke-width", k.simulation.pendulum_thickness), Y.select("#leg2").raise(), Y.select("#leg3").raise(), Y.selectAll("." + T.joint).data(J(P.state[0], P.state[1])).enter().append("circle").attr("class", T.joint).attr("r", 2).attr("cx", function(a) {
    return j(a.x1);
  }).attr("cy", function(a) {
    return R(a.y1);
  }).style("stroke", "black").style("fill", "black"), U.selectAll("." + T.leg).data(J($.state[0], $.state[1])).enter().append("line").attr("class", T.leg).attr("id", function(a, o) {
    return "leg" + 2 * o;
  }).attr("x1", function(a) {
    return j(a.x1);
  }).attr("y1", function(a) {
    return R(a.y1);
  }).attr("x2", function(a) {
    return j(a.x2);
  }).attr("y2", function(a) {
    return R(a.y2);
  }).style("stroke-width", k.simulation.pendulum_thickness + 2 * k.simulation.pendulum_border), U.selectAll("." + T.leg_inset).data(J($.state[0], $.state[1])).enter().append("line").attr("class", T.leg_inset).attr("id", function(a, o) {
    return "leg" + (2 * o + 1);
  }).attr("x1", function(a) {
    return j(a.x1);
  }).attr("y1", function(a) {
    return R(a.y1);
  }).attr("x2", function(a) {
    return j(a.x2);
  }).attr("y2", function(a) {
    return R(a.y2);
  }).style("stroke-width", k.simulation.pendulum_thickness), U.select("#leg2").raise(), U.select("#leg3").raise(), U.selectAll("." + T.joint).data(J($.state[0], $.state[1])).enter().append("circle").attr("class", T.joint).attr("r", 2).attr("cx", function(a) {
    return j(a.x1);
  }).attr("cy", function(a) {
    return R(a.y1);
  }).style("stroke", "black").style("fill", "black"), i.selectAll("." + T.leg).transition(1e3).style("opacity", A.hide_pendulum.widget.value() ? 0 : null), i.selectAll("." + T.leg_inset).transition(1e3).style("opacity", A.hide_pendulum.widget.value() ? 0 : null), i.selectAll("." + T.joint).transition(1e3).style("opacity", A.hide_pendulum.widget.value() ? 0 : null);
}, Bu = (t, n) => {
  Y.selectAll("." + T.leg).data(J(P.state[0], P.state[1])).attr("id", function(e, r) {
    return "leg" + 2 * r;
  }).attr("x1", function(e) {
    return j(e.x1);
  }).attr("y1", function(e) {
    return R(e.y1);
  }).attr("x2", function(e) {
    return j(e.x2);
  }).attr("y2", function(e) {
    return R(e.y2);
  }), Y.selectAll("." + T.leg_inset).data(J(P.state[0], P.state[1])).attr("id", function(e, r) {
    return "leg" + (2 * r + 1);
  }).attr("x1", function(e) {
    return j(e.x1);
  }).attr("y1", function(e) {
    return R(e.y1);
  }).attr("x2", function(e) {
    return j(e.x2);
  }).attr("y2", function(e) {
    return R(e.y2);
  }), U.selectAll("." + T.leg).data(J($.state[0], $.state[1])).attr("x1", function(e) {
    return j(e.x1);
  }).attr("y1", function(e) {
    return R(e.y1);
  }).attr("x2", function(e) {
    return j(e.x2);
  }).attr("y2", function(e) {
    return R(e.y2);
  }), U.selectAll("." + T.leg_inset).data(J($.state[0], $.state[1])).attr("x1", function(e) {
    return j(e.x1);
  }).attr("y1", function(e) {
    return R(e.y1);
  }).attr("x2", function(e) {
    return j(e.x2);
  }).attr("y2", function(e) {
    return R(e.y2);
  }), Y.selectAll("." + T.joint).data(J(P.state[0], P.state[1])).attr("cx", function(e) {
    return j(e.x1);
  }).attr("cy", function(e) {
    return R(e.y1);
  }), U.selectAll("." + T.joint).data(J($.state[0], $.state[1])).attr("cx", function(e) {
    return j(e.x1);
  }).attr("cy", function(e) {
    return R(e.y1);
  }), U.select("." + T.trace).attr("d", Et(No($.hist, A.trace_length))), U.select("." + T.trajectory).attr("d", Et($.hist)), Y.select("." + T.trace_ghost).attr("d", Et(No(P.hist, A.trace_length))), Y.select("." + T.trajectory_ghost).attr("d", Et(P.hist));
}, fM = Bu;
function hM(t, n) {
  uM(), fM();
}
function Hu(t, n) {
  sM(), cM(t, n);
}
function Oo(t, n) {
  lM(), Bu();
}
var Io = {};
const pM = (t, n) => {
  St.value() == 1 ? Io = yf(() => hM(), k.simulation.delay) : Io.stop();
}, dM = (t, n, e) => {
  ur.update(() => aM(n)), St.update(() => pM()), sr.update(() => Hu(t, e)), A.angle_1.widget.update(() => Oo()), A.angle_2.widget.update(() => Oo()), A.ghost.widget.update(() => {
    t.select("#ghost").transition(1e3).style("opacity", A.ghost.widget.value() ? 0.2 : 0);
  }), A.show_trace.widget.update(() => {
    t.selectAll("." + T.trace).transition().style("opacity", A.show_trace.widget.value() ? null : 0), t.selectAll("." + T.trace_ghost).transition().style("opacity", A.show_trace.widget.value() ? null : 0);
  }), A.show_entire_trajectory.widget.update(() => {
    t.selectAll("." + T.trajectory).transition().style("opacity", A.show_entire_trajectory.widget.value() ? null : 0), t.selectAll("." + T.trajectory_ghost).transition().style("opacity", A.show_entire_trajectory.widget.value() ? null : 0);
  }), A.hide_pendulum.widget.update(() => {
    t.selectAll("." + T.leg).transition(1e3).style("opacity", A.hide_pendulum.widget.value() ? 0 : null), t.selectAll("." + T.leg_inset).transition(1e3).style("opacity", A.hide_pendulum.widget.value() ? 0 : null), t.selectAll("." + T.joint).transition(1e3).style("opacity", A.hide_pendulum.widget.value() ? 0 : null);
  });
}, gM = {
  name: "@explorables/double_trouble",
  title: "Double Trouble",
  subtitle: "The double pendulum",
  description: "An example of chaotic dynamics in a simple mechanical system",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function yM(t, n = Uu) {
  const e = O1(t, n), r = e.display, i = e.controls, a = e.grid;
  return iM(i, a), dM(r, i, n), Hu(r, n), {
    halt() {
      St.value() === 1 && St.press(i);
    },
    reset() {
      St.value() === 1 && St.press(i), ur.press(i), sr.press(i);
    },
    config: n,
    meta: gM
  };
}
export {
  Uu as config,
  yM as default,
  yM as load,
  gM as meta
};
