(self.webpackChunkrestaurant_apps = self.webpackChunkrestaurant_apps || []).push([[608], { 452:(t)=>{
  const e = function (t) {
    'use strict';let e, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      }, i = 'function' == typeof Symbol ? Symbol : {}, a = i.iterator || '@@iterator', c = i.asyncIterator || '@@asyncIterator', u = i.toStringTag || '@@toStringTag';function s(t, e, r) {
      return Object.defineProperty(t, e, { value:r, enumerable:!0, configurable:!0, writable:!0 }), t[e];
    } try {
      s({}, '');
    } catch (t) {
      s = function (t, e, r) {
        return t[e] = r;
      };
    } function f(t, e, r, n) {
      const i = e && e.prototype instanceof g ? e : g, a = Object.create(i.prototype), c = new T(n || []);return o(a, '_invoke', { value:S(t, r, c) }), a;
    } function l(t, e, r) {
      try {
        return { type:'normal', arg:t.call(e, r) };
      } catch (t) {
        return { type:'throw', arg:t };
      }
    }t.wrap = f;const h = 'suspendedStart', p = 'suspendedYield', v = 'executing', d = 'completed', y = {};function g() {} function m() {} function w() {} let b = {};s(b, a, (function () {
      return this;
    }));const E = Object.getPrototypeOf, L = E && E(E(I([])));L && L !== r && n.call(L, a) && (b = L);const x = w.prototype = g.prototype = Object.create(b);function j(t) {
      ['next', 'throw', 'return'].forEach(((e) =>{
        s(t, e, (function (t) {
          return this._invoke(e, t);
        }));
      }));
    } function P(t, e) {
      function r(o, i, a, c) {
        const u = l(t[o], t, i);if ('throw' !== u.type) {
          const s = u.arg, f = s.value;return f && 'object' == typeof f && n.call(f, '__await') ? e.resolve(f.__await).then(((t) =>{
            r('next', t, a, c);
          }), ((t) =>{
            r('throw', t, a, c);
          })) : e.resolve(f).then(((t) =>{
            s.value = t, a(s);
          }), ((t) =>{
            return r('throw', t, a, c);
          }));
        }c(u.arg);
      } let i;o(this, '_invoke', { value:function (t, n) {
        function o() {
          return new e(((e, o) =>{
            r(t, n, e, o);
          }));
        } return i = i ? i.then(o, o) : o();
      } });
    } function S(t, r, n) {
      let o = h;return function (i, a) {
        if (o === v) throw new Error('Generator is already running');if (o === d) {
          if ('throw' === i) throw a;return { value:e, done:!0 };
        } for (n.method = i, n.arg = a;;) {
          const c = n.delegate;if (c) {
            const u = k(c, n);if (u) {
              if (u === y) continue;return u;
            }
          } if ('next' === n.method)n.sent = n._sent = n.arg;else if ('throw' === n.method) {
            if (o === h) throw o = d, n.arg;n.dispatchException(n.arg);
          } else 'return' === n.method && n.abrupt('return', n.arg);o = v;const s = l(t, r, n);if ('normal' === s.type) {
            if (o = n.done ? d : p, s.arg === y) continue;return { value:s.arg, done:n.done };
          }'throw' === s.type && (o = d, n.method = 'throw', n.arg = s.arg);
        }
      };
    } function k(t, r) {
      const n = r.method, o = t.iterator[n];if (o === e) return r.delegate = null, 'throw' === n && t.iterator.return && (r.method = 'return', r.arg = e, k(t, r), 'throw' === r.method) || 'return' !== n && (r.method = 'throw', r.arg = new TypeError(`The iterator does not provide a '${n}' method`)), y;const i = l(o, t.iterator, r.arg);if ('throw' === i.type) return r.method = 'throw', r.arg = i.arg, r.delegate = null, y;const a = i.arg;return a ? a.done ? (r[t.resultName] = a.value, r.next = t.nextLoc, 'return' !== r.method && (r.method = 'next', r.arg = e), r.delegate = null, y) : a : (r.method = 'throw', r.arg = new TypeError('iterator result is not an object'), r.delegate = null, y);
    } function O(t) {
      const e = { tryLoc:t[0] };1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    } function _(t) {
      const e = t.completion || {};e.type = 'normal', delete e.arg, t.completion = e;
    } function T(t) {
      this.tryEntries = [{ tryLoc:'root' }], t.forEach(O, this), this.reset(!0);
    } function I(t) {
      if (null != t) {
        const r = t[a];if (r) return r.call(t);if ('function' == typeof t.next) return t;if (!isNaN(t.length)) {
          let o = -1, i = function r() {
            for (;++o < t.length;) if (n.call(t, o)) return r.value = t[o], r.done = !1, r;return r.value = e, r.done = !0, r;
          };return i.next = i;
        }
      } throw new TypeError(`${typeof t} is not iterable`);
    } return m.prototype = w, o(x, 'constructor', { value:w, configurable:!0 }), o(w, 'constructor', { value:m, configurable:!0 }), m.displayName = s(w, u, 'GeneratorFunction'), t.isGeneratorFunction = function (t) {
      const e = 'function' == typeof t && t.constructor;return !!e && (e === m || 'GeneratorFunction' === (e.displayName || e.name));
    }, t.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, w) : (t.__proto__ = w, s(t, u, 'GeneratorFunction')), t.prototype = Object.create(x), t;
    }, t.awrap = function (t) {
      return { __await:t };
    }, j(P.prototype), s(P.prototype, c, (function () {
      return this;
    })), t.AsyncIterator = P, t.async = function (e, r, n, o, i) {
      void 0 === i && (i = Promise);const a = new P(f(e, r, n, o), i);return t.isGeneratorFunction(r) ? a : a.next().then(((t) =>{
        return t.done ? t.value : a.next();
      }));
    }, j(x), s(x, u, 'Generator'), s(x, a, (function () {
      return this;
    })), s(x, 'toString', (() =>{
      return '[object Generator]';
    })), t.keys = function (t) {
      const e = Object(t), r = [];for (const n in e)r.push(n);return r.reverse(), function t() {
        for (;r.length;) {
          const n = r.pop();if (n in e) return t.value = n, t.done = !1, t;
        } return t.done = !0, t;
      };
    }, t.values = I, T.prototype = { constructor:T, reset:function (t) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = 'next', this.arg = e, this.tryEntries.forEach(_), !t) for (const r in this)'t' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e);
    }, stop:function () {
      this.done = !0;const t = this.tryEntries[0].completion;if ('throw' === t.type) throw t.arg;return this.rval;
    }, dispatchException:function (t) {
      if (this.done) throw t;const r = this;function o(n, o) {
        return c.type = 'throw', c.arg = t, r.next = n, o && (r.method = 'next', r.arg = e), !!o;
      } for (let i = this.tryEntries.length - 1;i >= 0;--i) {
        var a = this.tryEntries[i], c = a.completion;if ('root' === a.tryLoc) return o('end');if (a.tryLoc <= this.prev) {
          const u = n.call(a, 'catchLoc'), s = n.call(a, 'finallyLoc');if (u && s) {
            if (this.prev < a.catchLoc) return o(a.catchLoc, !0);if (this.prev < a.finallyLoc) return o(a.finallyLoc);
          } else if (u) {
            if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
          } else {
            if (!s) throw new Error('try statement without catch or finally');if (this.prev < a.finallyLoc) return o(a.finallyLoc);
          }
        }
      }
    }, abrupt:function (t, e) {
      for (let r = this.tryEntries.length - 1;r >= 0;--r) {
        const o = this.tryEntries[r];if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
          var i = o;break;
        }
      }i && ('break' === t || 'continue' === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);const a = i ? i.completion : {};return a.type = t, a.arg = e, i ? (this.method = 'next', this.next = i.finallyLoc, y) : this.complete(a);
    }, complete:function (t, e) {
      if ('throw' === t.type) throw t.arg;return 'break' === t.type || 'continue' === t.type ? this.next = t.arg : 'return' === t.type ? (this.rval = this.arg = t.arg, this.method = 'return', this.next = 'end') : 'normal' === t.type && e && (this.next = e), y;
    }, finish:function (t) {
      for (let e = this.tryEntries.length - 1;e >= 0;--e) {
        const r = this.tryEntries[e];if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), _(r), y;
      }
    }, catch:function (t) {
      for (let e = this.tryEntries.length - 1;e >= 0;--e) {
        const r = this.tryEntries[e];if (r.tryLoc === t) {
          const n = r.completion;if ('throw' === n.type) {
            var o = n.arg;_(r);
          } return o;
        }
      } throw new Error('illegal catch attempt');
    }, delegateYield:function (t, r, n) {
      return this.delegate = { iterator:I(t), resultName:r, nextLoc:n }, 'next' === this.method && (this.arg = e), y;
    } }, t;
  }(t.exports);try {
    regeneratorRuntime = e;
  } catch (t) {
    'object' == typeof globalThis ? globalThis.regeneratorRuntime = e : Function('r', 'regeneratorRuntime = r')(e);
  }
}, 72:(t)=>{
  'use strict';const e = [];function r(t) {
    for (var r = -1, n = 0;n < e.length;n++) if (e[n].identifier === t) {
      r = n;break;
    } return r;
  } function n(t, n) {
    for (var i = {}, a = [], c = 0;c < t.length;c++) {
      const u = t[c], s = n.base ? u[0] + n.base : u[0], f = i[s] || 0, l = ''.concat(s, ' ').concat(f);i[s] = f + 1;const h = r(l), p = { css:u[1], media:u[2], sourceMap:u[3], supports:u[4], layer:u[5] };if (-1 !== h)e[h].references++, e[h].updater(p);else {
        const v = o(p, n);n.byIndex = c, e.splice(c, 0, { identifier:l, updater:v, references:1 });
      }a.push(l);
    } return a;
  } function o(t, e) {
    const r = e.domAPI(e);return r.update(t), function (e) {
      if (e) {
        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap && e.supports === t.supports && e.layer === t.layer) return;r.update(t = e);
      } else r.remove();
    };
  }t.exports = function (t, o) {
    let i = n(t = t || [], o = o || {});return function (t) {
      t = t || [];for (let a = 0;a < i.length;a++) {
        const c = r(i[a]);e[c].references--;
      } for (var u = n(t, o), s = 0;s < i.length;s++) {
        const f = r(i[s]);0 === e[f].references && (e[f].updater(), e.splice(f, 1));
      }i = u;
    };
  };
}, 659:(t)=>{
  'use strict';const e = {};t.exports = function (t, r) {
    const n = function (t) {
      if (void 0 === e[t]) {
        let r = document.querySelector(t);if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
          r = r.contentDocument.head;
        } catch (t) {
          r = null;
        }e[t] = r;
      } return e[t];
    }(t);if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r);
  };
}, 540:(t)=>{
  'use strict';t.exports = function (t) {
    const e = document.createElement('style');return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
  };
}, 56:(t, e, r)=>{
  'use strict';t.exports = function (t) {
    const e = r.nc;e && t.setAttribute('nonce', e);
  };
}, 825:(t)=>{
  'use strict';t.exports = function (t) {
    if ('undefined' == typeof document) return { update:function () {}, remove:function () {} };const e = t.insertStyleElement(t);return { update:function (r) {
      !function (t, e, r) {
        let n = '';r.supports && (n += '@supports ('.concat(r.supports, ') {')), r.media && (n += '@media '.concat(r.media, ' {'));const o = void 0 !== r.layer;o && (n += '@layer'.concat(r.layer.length > 0 ? ' '.concat(r.layer) : '', ' {')), n += r.css, o && (n += '}'), r.media && (n += '}'), r.supports && (n += '}');const i = r.sourceMap;i && 'undefined' != typeof btoa && (n += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), ' */')), e.styleTagTransform(n, t, e.options);
      }(e, t, r);
    }, remove:function () {
      !function (t) {
        if (null === t.parentNode) return !1;t.parentNode.removeChild(t);
      }(e);
    } };
  };
}, 113:(t)=>{
  'use strict';t.exports = function (t, e) {
    if (e.styleSheet)e.styleSheet.cssText = t;else {
      for (;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t));
    }
  };
}, 730:(t, e, r)=>{
  'use strict';r.d(e, { JK:()=>d });try {
    self['workbox:window:7.2.0'] && _();
  } catch (n) {} function n(t, e) {
    return new Promise(((r) =>{
      const n = new MessageChannel;n.port1.onmessage = function (t) {
        r(t.data);
      }, t.postMessage(e, [n.port2]);
    }));
  } function o(t) {
    const e = function (t) {
      if ('object' != typeof t || !t) return t;const e = t[Symbol.toPrimitive];if (void 0 !== e) {
        const r = e.call(t, 'string');if ('object' != typeof r) return r;throw new TypeError('@@toPrimitive must return a primitive value.');
      } return String(t);
    }(t);return 'symbol' == typeof e ? e : `${e  }`;
  } function i(t, e) {
    for (let r = 0;r < e.length;r++) {
      const n = e[r];n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, o(n.key), n);
    }
  } function a(t, e) {
    return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, a(t, e);
  } function c(t, e) {
    (null == e || e > t.length) && (e = t.length);for (var r = 0, n = new Array(e);r < e;r++)n[r] = t[r];return n;
  } try {
    self['workbox:core:7.2.0'] && _();
  } catch (n) {} const u = function () {
    const t = this;this.promise = new Promise(((e, r) =>{
      t.resolve = e, t.reject = r;
    }));
  };function s(t, e) {
    const r = location.href;return new URL(t, r).href === new URL(e, r).href;
  } const f = function (t, e) {
    this.type = t, Object.assign(this, e);
  };function l(t, e, r) {
    return r ? e ? e(t) : t : (t && t.then || (t = Promise.resolve(t)), e ? t.then(e) : t);
  } function h() {} const p = { type:'SKIP_WAITING' };function v(t, e) {
    if (!e) return t && t.then ? t.then(h) : Promise.resolve();
  } var d = function (t) {
    function e(e, r) {
      let n, o;return void 0 === r && (r = {}), (n = t.call(this) || this).nn = {}, n.tn = 0, n.rn = new u, n.en = new u, n.on = new u, n.un = 0, n.an = new Set, n.cn = function () {
        const t = n.fn, e = t.installing;n.tn > 0 || !s(e.scriptURL, n.sn.toString()) || performance.now() > n.un + 6e4 ? (n.vn = e, t.removeEventListener('updatefound', n.cn)) : (n.hn = e, n.an.add(e), n.rn.resolve(e)), ++n.tn, e.addEventListener('statechange', n.ln);
      }, n.ln = function (t) {
        const e = n.fn, r = t.target, o = r.state, i = r === n.vn, a = { sw:r, isExternal:i, originalEvent:t };!i && n.mn && (a.isUpdate = !0), n.dispatchEvent(new f(o, a)), 'installed' === o ? n.wn = self.setTimeout((() =>{
          'installed' === o && e.waiting === r && n.dispatchEvent(new f('waiting', a));
        }), 200) : 'activating' === o && (clearTimeout(n.wn), i || n.en.resolve(r));
      }, n.yn = function (t) {
        const e = n.hn, r = e !== navigator.serviceWorker.controller;n.dispatchEvent(new f('controlling', { isExternal:r, originalEvent:t, sw:e, isUpdate:n.mn })), r || n.on.resolve(e);
      }, n.gn = (o = function (t) {
        const e = t.data, r = t.ports, o = t.source;return l(n.getSW(), (() =>{
          n.an.has(o) && n.dispatchEvent(new f('message', { data:e, originalEvent:t, ports:r, sw:o }));
        }));
      }, function () {
        for (var t = [], e = 0;e < arguments.length;e++)t[e] = arguments[e];try {
          return Promise.resolve(o.apply(this, t));
        } catch (t) {
          return Promise.reject(t);
        }
      }), n.sn = e, n.nn = r, navigator.serviceWorker.addEventListener('message', n.gn), n;
    } let r, o;o = t, (r = e).prototype = Object.create(o.prototype), r.prototype.constructor = r, a(r, o);let c, h, d = e.prototype;return d.register = function (t) {
      const e = (void 0 === t ? {} : t).immediate, r = void 0 !== e && e;try {
        const n = this;return l(function (t, e) {
          const r = t();return r && r.then ? r.then(e) : e();
        }((() =>{
          if (!r && 'complete' !== document.readyState) return v(new Promise(((t) =>{
            return window.addEventListener('load', t);
          })));
        }), (() =>{
          return n.mn = Boolean(navigator.serviceWorker.controller), n.dn = n.pn(), l(n.bn(), ((t) =>{
            n.fn = t, n.dn && (n.hn = n.dn, n.en.resolve(n.dn), n.on.resolve(n.dn), n.dn.addEventListener('statechange', n.ln, { once:!0 }));const e = n.fn.waiting;return e && s(e.scriptURL, n.sn.toString()) && (n.hn = e, Promise.resolve().then((() =>{
              n.dispatchEvent(new f('waiting', { sw:e, wasWaitingBeforeRegister:!0 }));
            })).then((() =>{}))), n.hn && (n.rn.resolve(n.hn), n.an.add(n.hn)), n.fn.addEventListener('updatefound', n.cn), navigator.serviceWorker.addEventListener('controllerchange', n.yn), n.fn;
          }));
        })));
      } catch (t) {
        return Promise.reject(t);
      }
    }, d.update = function () {
      try {
        return this.fn ? l(v(this.fn.update())) : l();
      } catch (t) {
        return Promise.reject(t);
      }
    }, d.getSW = function () {
      return void 0 !== this.hn ? Promise.resolve(this.hn) : this.rn.promise;
    }, d.messageSW = function (t) {
      try {
        return l(this.getSW(), ((e) =>{
          return n(e, t);
        }));
      } catch (t) {
        return Promise.reject(t);
      }
    }, d.messageSkipWaiting = function () {
      this.fn && this.fn.waiting && n(this.fn.waiting, p);
    }, d.pn = function () {
      const t = navigator.serviceWorker.controller;return t && s(t.scriptURL, this.sn.toString()) ? t : void 0;
    }, d.bn = function () {
      try {
        const t = this;return l(function (t, e) {
          try {
            var r = t();
          } catch (t) {
            return e(t);
          } return r && r.then ? r.then(void 0, e) : r;
        }((() =>{
          return l(navigator.serviceWorker.register(t.sn, t.nn), ((e) =>{
            return t.un = performance.now(), e;
          }));
        }), ((t) =>{
          throw t;
        })));
      } catch (t) {
        return Promise.reject(t);
      }
    }, c = e, (h = [{ key:'active', get:function () {
      return this.en.promise;
    } }, { key:'controlling', get:function () {
      return this.on.promise;
    } }]) && i(c.prototype, h), Object.defineProperty(c, 'prototype', { writable:!1 }), c;
  }(function () {
    function t() {
      this.Pn = new Map;
    } const e = t.prototype;return e.addEventListener = function (t, e) {
      this.jn(t).add(e);
    }, e.removeEventListener = function (t, e) {
      this.jn(t).delete(e);
    }, e.dispatchEvent = function (t) {
      t.target = this;for (var e, r = function (t) {
        let e = 'undefined' != typeof Symbol && t[Symbol.iterator] || t['@@iterator'];if (e) return (e = e.call(t)).next.bind(e);if (Array.isArray(t) || (e = function (t, e) {
          if (t) {
            if ('string' == typeof t) return c(t, e);let r = Object.prototype.toString.call(t).slice(8, -1);return 'Object' === r && t.constructor && (r = t.constructor.name), 'Map' === r || 'Set' === r ? Array.from(t) : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? c(t, e) : void 0;
          }
        }(t))) {
          e && (t = e);let r = 0;return function () {
            return r >= t.length ? { done:!0 } : { done:!1, value:t[r++] };
          };
        } throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }(this.jn(t.type));!(e = r()).done;)(0, e.value)(t);
    }, e.jn = function (t) {
      return this.Pn.has(t) || this.Pn.set(t, new Set), this.Pn.get(t);
    }, t;
  }());
} }]);
//# sourceMappingURL=608.bundle.js.map