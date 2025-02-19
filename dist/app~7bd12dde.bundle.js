/*! For license information please see app~7bd12dde.bundle.js.LICENSE.txt */
(self.webpackChunkrestaurant_apps = self.webpackChunkrestaurant_apps || []).push([[71], { 162:(t, n, e)=>{
  'use strict';e.d(n, { A:()=>f });const r = e(602);function o(t) {
    return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
    }, o(t);
  } function i() {
    i = function () {
      return n;
    };var t, n = {}, e = Object.prototype, r = e.hasOwnProperty, a = Object.defineProperty || function (t, n, e) {
        t[n] = e.value;
      }, c = 'function' == typeof Symbol ? Symbol : {}, u = c.iterator || '@@iterator', l = c.asyncIterator || '@@asyncIterator', f = c.toStringTag || '@@toStringTag';function s(t, n, e) {
      return Object.defineProperty(t, n, { value:e, enumerable:!0, configurable:!0, writable:!0 }), t[n];
    } try {
      s({}, '');
    } catch (t) {
      s = function (t, n, e) {
        return t[n] = e;
      };
    } function p(t, n, e, r) {
      const o = n && n.prototype instanceof g ? n : g, i = Object.create(o.prototype), c = new M(r || []);return a(i, '_invoke', { value:P(t, e, c) }), i;
    } function y(t, n, e) {
      try {
        return { type:'normal', arg:t.call(n, e) };
      } catch (t) {
        return { type:'throw', arg:t };
      }
    }n.wrap = p;const d = 'suspendedStart', h = 'suspendedYield', v = 'executing', b = 'completed', m = {};function g() {} function w() {} function x() {} let O = {};s(O, u, (function () {
      return this;
    }));const j = Object.getPrototypeOf, _ = j && j(j(z([])));_ && _ !== e && r.call(_, u) && (O = _);const k = x.prototype = g.prototype = Object.create(O);function E(t) {
      ['next', 'throw', 'return'].forEach(((n) =>{
        s(t, n, (function (t) {
          return this._invoke(n, t);
        }));
      }));
    } function S(t, n) {
      function e(i, a, c, u) {
        const l = y(t[i], t, a);if ('throw' !== l.type) {
          const f = l.arg, s = f.value;return s && 'object' == o(s) && r.call(s, '__await') ? n.resolve(s.__await).then(((t) =>{
            e('next', t, c, u);
          }), ((t) =>{
            e('throw', t, c, u);
          })) : n.resolve(s).then(((t) =>{
            f.value = t, c(f);
          }), ((t) =>{
            return e('throw', t, c, u);
          }));
        }u(l.arg);
      } let i;a(this, '_invoke', { value:function (t, r) {
        function o() {
          return new n(((n, o) =>{
            e(t, r, n, o);
          }));
        } return i = i ? i.then(o, o) : o();
      } });
    } function P(n, e, r) {
      let o = d;return function (i, a) {
        if (o === v) throw Error('Generator is already running');if (o === b) {
          if ('throw' === i) throw a;return { value:t, done:!0 };
        } for (r.method = i, r.arg = a;;) {
          const c = r.delegate;if (c) {
            const u = L(c, r);if (u) {
              if (u === m) continue;return u;
            }
          } if ('next' === r.method)r.sent = r._sent = r.arg;else if ('throw' === r.method) {
            if (o === d) throw o = b, r.arg;r.dispatchException(r.arg);
          } else 'return' === r.method && r.abrupt('return', r.arg);o = v;const l = y(n, e, r);if ('normal' === l.type) {
            if (o = r.done ? b : h, l.arg === m) continue;return { value:l.arg, done:r.done };
          }'throw' === l.type && (o = b, r.method = 'throw', r.arg = l.arg);
        }
      };
    } function L(n, e) {
      const r = e.method, o = n.iterator[r];if (o === t) return e.delegate = null, 'throw' === r && n.iterator.return && (e.method = 'return', e.arg = t, L(n, e), 'throw' === e.method) || 'return' !== r && (e.method = 'throw', e.arg = new TypeError(`The iterator does not provide a '${r}' method`)), m;const i = y(o, n.iterator, e.arg);if ('throw' === i.type) return e.method = 'throw', e.arg = i.arg, e.delegate = null, m;const a = i.arg;return a ? a.done ? (e[n.resultName] = a.value, e.next = n.nextLoc, 'return' !== e.method && (e.method = 'next', e.arg = t), e.delegate = null, m) : a : (e.method = 'throw', e.arg = new TypeError('iterator result is not an object'), e.delegate = null, m);
    } function T(t) {
      const n = { tryLoc:t[0] };1 in t && (n.catchLoc = t[1]), 2 in t && (n.finallyLoc = t[2], n.afterLoc = t[3]), this.tryEntries.push(n);
    } function R(t) {
      const n = t.completion || {};n.type = 'normal', delete n.arg, t.completion = n;
    } function M(t) {
      this.tryEntries = [{ tryLoc:'root' }], t.forEach(T, this), this.reset(!0);
    } function z(n) {
      if (n || '' === n) {
        const e = n[u];if (e) return e.call(n);if ('function' == typeof n.next) return n;if (!isNaN(n.length)) {
          let i = -1, a = function e() {
            for (;++i < n.length;) if (r.call(n, i)) return e.value = n[i], e.done = !1, e;return e.value = t, e.done = !0, e;
          };return a.next = a;
        }
      } throw new TypeError(`${o(n)} is not iterable`);
    } return w.prototype = x, a(k, 'constructor', { value:x, configurable:!0 }), a(x, 'constructor', { value:w, configurable:!0 }), w.displayName = s(x, f, 'GeneratorFunction'), n.isGeneratorFunction = function (t) {
      const n = 'function' == typeof t && t.constructor;return !!n && (n === w || 'GeneratorFunction' === (n.displayName || n.name));
    }, n.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : (t.__proto__ = x, s(t, f, 'GeneratorFunction')), t.prototype = Object.create(k), t;
    }, n.awrap = function (t) {
      return { __await:t };
    }, E(S.prototype), s(S.prototype, l, (function () {
      return this;
    })), n.AsyncIterator = S, n.async = function (t, e, r, o, i) {
      void 0 === i && (i = Promise);const a = new S(p(t, e, r, o), i);return n.isGeneratorFunction(e) ? a : a.next().then(((t) =>{
        return t.done ? t.value : a.next();
      }));
    }, E(k), s(k, f, 'Generator'), s(k, u, (function () {
      return this;
    })), s(k, 'toString', (() =>{
      return '[object Generator]';
    })), n.keys = function (t) {
      const n = Object(t), e = [];for (const r in n)e.push(r);return e.reverse(), function t() {
        for (;e.length;) {
          const r = e.pop();if (r in n) return t.value = r, t.done = !1, t;
        } return t.done = !0, t;
      };
    }, n.values = z, M.prototype = { constructor:M, reset:function (n) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = 'next', this.arg = t, this.tryEntries.forEach(R), !n) for (const e in this)'t' === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t);
    }, stop:function () {
      this.done = !0;const t = this.tryEntries[0].completion;if ('throw' === t.type) throw t.arg;return this.rval;
    }, dispatchException:function (n) {
      if (this.done) throw n;const e = this;function o(r, o) {
        return c.type = 'throw', c.arg = n, e.next = r, o && (e.method = 'next', e.arg = t), !!o;
      } for (let i = this.tryEntries.length - 1;i >= 0;--i) {
        var a = this.tryEntries[i], c = a.completion;if ('root' === a.tryLoc) return o('end');if (a.tryLoc <= this.prev) {
          const u = r.call(a, 'catchLoc'), l = r.call(a, 'finallyLoc');if (u && l) {
            if (this.prev < a.catchLoc) return o(a.catchLoc, !0);if (this.prev < a.finallyLoc) return o(a.finallyLoc);
          } else if (u) {
            if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
          } else {
            if (!l) throw Error('try statement without catch or finally');if (this.prev < a.finallyLoc) return o(a.finallyLoc);
          }
        }
      }
    }, abrupt:function (t, n) {
      for (let e = this.tryEntries.length - 1;e >= 0;--e) {
        const o = this.tryEntries[e];if (o.tryLoc <= this.prev && r.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
          var i = o;break;
        }
      }i && ('break' === t || 'continue' === t) && i.tryLoc <= n && n <= i.finallyLoc && (i = null);const a = i ? i.completion : {};return a.type = t, a.arg = n, i ? (this.method = 'next', this.next = i.finallyLoc, m) : this.complete(a);
    }, complete:function (t, n) {
      if ('throw' === t.type) throw t.arg;return 'break' === t.type || 'continue' === t.type ? this.next = t.arg : 'return' === t.type ? (this.rval = this.arg = t.arg, this.method = 'return', this.next = 'end') : 'normal' === t.type && n && (this.next = n), m;
    }, finish:function (t) {
      for (let n = this.tryEntries.length - 1;n >= 0;--n) {
        const e = this.tryEntries[n];if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), R(e), m;
      }
    }, catch:function (t) {
      for (let n = this.tryEntries.length - 1;n >= 0;--n) {
        const e = this.tryEntries[n];if (e.tryLoc === t) {
          const r = e.completion;if ('throw' === r.type) {
            var o = r.arg;R(e);
          } return o;
        }
      } throw Error('illegal catch attempt');
    }, delegateYield:function (n, e, r) {
      return this.delegate = { iterator:z(n), resultName:e, nextLoc:r }, 'next' === this.method && (this.arg = t), m;
    } }, n;
  } function a(t, n, e, r, o, i, a) {
    try {
      var c = t[i](a), u = c.value;
    } catch (t) {
      return void e(t);
    }c.done ? n(u) : Promise.resolve(u).then(r, o);
  } function c(t) {
    return function () {
      const n = this, e = arguments;return new Promise(((r, o) =>{
        const i = t.apply(n, e);function c(t) {
          a(i, r, o, c, u, 'next', t);
        } function u(t) {
          a(i, r, o, c, u, 'throw', t);
        }c(void 0);
      }));
    };
  } const u = 'restaurants', l = (0, r.P2)('restaurant-catalogue-database', 1, { upgrade:function (t) {
    t.createObjectStore(u, { keyPath:'id' });
  } });const f = { getRestaurant:function (t) {
    return c(i().mark((function n() {
      return i().wrap(((n) =>{
        for (;;) switch (n.prev = n.next) {
        case 0:if (t) {
          n.next = 2;break;
        } return n.abrupt('return');case 2:return n.next = 4, l;case 4:return n.abrupt('return', n.sent.get(u, t));case 5:case 'end':return n.stop();
        }
      }), n);
    })))();
  }, getRestaurantsAll:function () {
    return c(i().mark((function t() {
      return i().wrap(((t) =>{
        for (;;) switch (t.prev = t.next) {
        case 0:return t.next = 2, l;case 2:return t.abrupt('return', t.sent.getAll(u));case 3:case 'end':return t.stop();
        }
      }), t);
    })))();
  }, putRestaurant:function (t) {
    return c(i().mark((function n() {
      return i().wrap(((n) =>{
        for (;;) switch (n.prev = n.next) {
        case 0:if (t.hasOwnProperty('id')) {
          n.next = 2;break;
        } return n.abrupt('return');case 2:return n.next = 4, l;case 4:return n.abrupt('return', n.sent.put(u, t));case 5:case 'end':return n.stop();
        }
      }), n);
    })))();
  }, deleteRestaurant:function (t) {
    return c(i().mark((function n() {
      return i().wrap(((n) =>{
        for (;;) switch (n.prev = n.next) {
        case 0:return n.next = 2, l;case 2:return n.abrupt('return', n.sent.delete(u, t));case 3:case 'end':return n.stop();
        }
      }), n);
    })))();
  } };
}, 629:()=>{
  function t(n) {
    return t = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
    }, t(n);
  } function n(t, n) {
    for (let r = 0;r < n.length;r++) {
      const o = n[r];o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(t, e(o.key), o);
    }
  } function e(n) {
    const e = function (n) {
      if ('object' != t(n) || !n) return n;const e = n[Symbol.toPrimitive];if (void 0 !== e) {
        const r = e.call(n, 'string');if ('object' != t(r)) return r;throw new TypeError('@@toPrimitive must return a primitive value.');
      } return String(n);
    }(n);return 'symbol' == t(e) ? e : `${e  }`;
  } function r(t) {
    const n = 'function' == typeof Map ? new Map : void 0;return r = function (t) {
      if (null === t || !function (t) {
        try {
          return -1 !== Function.toString.call(t).indexOf('[native code]');
        } catch (n) {
          return 'function' == typeof t;
        }
      }(t)) return t;if ('function' != typeof t) throw new TypeError('Super expression must either be null or a function');if (void 0 !== n) {
        if (n.has(t)) return n.get(t);n.set(t, e);
      } function e() {
        return function (t, n, e) {
          if (o()) return Reflect.construct.apply(null, arguments);const r = [null];r.push.apply(r, n);const a = new(t.bind.apply(t, r));return e && i(a, e.prototype), a;
        }(t, arguments, a(this).constructor);
      } return e.prototype = Object.create(t.prototype, { constructor:{ value:e, enumerable:!1, writable:!0, configurable:!0 } }), i(e, t);
    }, r(t);
  } function o() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() =>{})));
    } catch (t) {} return (o = function () {
      return !!t;
    })();
  } function i(t, n) {
    return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, n) {
      return t.__proto__ = n, t;
    }, i(t, n);
  } function a(t) {
    return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, a(t);
  } const c = function (e) {
    function r() {
      return function (t, n) {
        if (!(t instanceof n)) throw new TypeError('Cannot call a class as a function');
      }(this, r), function (n, e, r) {
        return e = a(e), function (n, e) {
          if (e && ('object' == t(e) || 'function' == typeof e)) return e;if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined');return function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;
          }(n);
        }(n, o() ? Reflect.construct(e, r || [], a(n).constructor) : e.apply(n, r));
      }(this, r);
    } return function (t, n) {
      if ('function' != typeof n && null !== n) throw new TypeError('Super expression must either be null or a function');t.prototype = Object.create(n && n.prototype, { constructor:{ value:t, writable:!0, configurable:!0 } }), Object.defineProperty(t, 'prototype', { writable:!1 }), n && i(t, n);
    }(r, e), c = r, (u = [{ key:'connectedCallback', value:function () {
      this.render();
    } }, { key:'render', value:function () {
      this.innerHTML = '\n        <style>\n        .cta_container {\n  position: relative;\n  display: flex;\n  height: 100vh;\n  padding: 5rem;\n  justify-content: start;\n  align-items: center;\n  flex-wrap: wrap;\n  overflow: hidden;\n}\n\n.cta_container::before {\n  content: \'\';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(\'images/cta/cta-image.jpg\');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  filter: brightness(0.7);\n  z-index: 1; \n}\n\n.cta_description {\n  max-width: 750px;\n  font-size: 1.5rem;\n  font-family: Poppins, sans-serif;\n  padding-inline-start: 3rem;\n  color: white;\n  z-index: 999;\n}\n\n.cta_description p {\n  font-size: 1.4rem;\n  font-family: Quicksand, sans-serif;\n  margin: 0;\n}\n\n.cta_description h1 {\n  margin-block-end: 0.5rem;\n}\n\n.cta_description a {\n  border: none;\n  padding: 1rem;\n  font-size: 1.2rem;\n  font-family: Poppins, sans-serif;\n  font-weight: bold;\n  background-color: orange;\n  color: #13181d;\n  margin-block-start: 3rem;\n  transition: ease-in-out 0.5s;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.cta_description a:hover {\n  background-color: #13181d;\n  color: orange;\n}\n\n@media (max-width: 670px) {\n  .cta_description p {\n    font-size: 1rem;\n  }\n\n  .cta_container {\n    padding-inline: 2rem;\n  }\n}\n\n@media (max-width: 420px) {\n  .cta_description h1 {\n    font-size: 1.2rem;\n  }\n\n  .cta_description p {\n    font-size: 0.8rem;\n  }\n\n  .cta_description {\n    padding: 0;  \n  }\n\n  .cta_description a {\n    padding: 1rem;  \n    font-size: 1rem;\n  }\n}\n\n        </style>\n        <div class="cta_discover">\n          <div class="cta_container">\n            <div class="cta_description">\n              <h1>Temukan Restoran Yang Membuat Lidah Anda Bergoyang –</h1>\n              <p>Dari Hidangan Lokal Hingga Cita Rasa Internasional!</p>\n              <a href="#/home">Jelajahi Restoran</a>\n            </div>\n          </div>\n        </div>\n        ';
    } }]) && n(c.prototype, u), Object.defineProperty(c, 'prototype', { writable:!1 }), c;let c, u;
  }(r(HTMLElement));customElements.define('cta-section', c);
}, 124:()=>{
  function t(n) {
    return t = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
    }, t(n);
  } function n(t, n) {
    for (let e = 0;e < n.length;e++) {
      const r = n[e];r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, a(r.key), r);
    }
  } function e(t) {
    const n = 'function' == typeof Map ? new Map : void 0;return e = function (t) {
      if (null === t || !function (t) {
        try {
          return -1 !== Function.toString.call(t).indexOf('[native code]');
        } catch (n) {
          return 'function' == typeof t;
        }
      }(t)) return t;if ('function' != typeof t) throw new TypeError('Super expression must either be null or a function');if (void 0 !== n) {
        if (n.has(t)) return n.get(t);n.set(t, e);
      } function e() {
        return function (t, n, e) {
          if (r()) return Reflect.construct.apply(null, arguments);const i = [null];i.push.apply(i, n);const a = new(t.bind.apply(t, i));return e && o(a, e.prototype), a;
        }(t, arguments, i(this).constructor);
      } return e.prototype = Object.create(t.prototype, { constructor:{ value:e, enumerable:!1, writable:!0, configurable:!0 } }), o(e, t);
    }, e(t);
  } function r() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() =>{})));
    } catch (t) {} return (r = function () {
      return !!t;
    })();
  } function o(t, n) {
    return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, n) {
      return t.__proto__ = n, t;
    }, o(t, n);
  } function i(t) {
    return i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, i(t);
  } function a(n) {
    const e = function (n) {
      if ('object' != t(n) || !n) return n;const e = n[Symbol.toPrimitive];if (void 0 !== e) {
        const r = e.call(n, 'string');if ('object' != t(r)) return r;throw new TypeError('@@toPrimitive must return a primitive value.');
      } return String(n);
    }(n);return 'symbol' == t(e) ? e : `${e  }`;
  } let c, u, l, f = function (e) {
    function a() {
      let n;return function (t, n) {
        if (!(t instanceof n)) throw new TypeError('Cannot call a class as a function');
      }(this, a), (n = function (n, e, o) {
        return e = i(e), function (n, e) {
          if (e && ('object' == t(e) || 'function' == typeof e)) return e;if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined');return function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;
          }(n);
        }(n, r() ? Reflect.construct(e, o || [], i(n).constructor) : e.apply(n, o));
      }(this, a))['_my-footer'] = n.getAttribute('my-footer'), n;
    } return function (t, n) {
      if ('function' != typeof n && null !== n) throw new TypeError('Super expression must either be null or a function');t.prototype = Object.create(n && n.prototype, { constructor:{ value:t, writable:!0, configurable:!0 } }), Object.defineProperty(t, 'prototype', { writable:!1 }), n && o(t, n);
    }(a, e), c = a, (u = [{ key:'connectedCallback', value:function () {
      this.render();
    } }, { key:'render', value:function () {
      this.innerHTML = '\n        \n      <p>'.concat(this['_my-footer'], '</p>\n        ');
    } }]) && n(c.prototype, u), Object.defineProperty(c, 'prototype', { writable:!1 }), c;let c, u;
  }(e(HTMLElement));c = f, l = ['my-footer'], (u = a(u = 'observedAttributes')) in c ? Object.defineProperty(c, u, { value:l, enumerable:!0, configurable:!0, writable:!0 }) : c[u] = l, customElements.define('footer-app', f);
}, 262:()=>{
  function t(n) {
    return t = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
    }, t(n);
  } function n(t, n) {
    for (let r = 0;r < n.length;r++) {
      const o = n[r];o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(t, e(o.key), o);
    }
  } function e(n) {
    const e = function (n) {
      if ('object' != t(n) || !n) return n;const e = n[Symbol.toPrimitive];if (void 0 !== e) {
        const r = e.call(n, 'string');if ('object' != t(r)) return r;throw new TypeError('@@toPrimitive must return a primitive value.');
      } return String(n);
    }(n);return 'symbol' == t(e) ? e : `${e  }`;
  } function r(t) {
    const n = 'function' == typeof Map ? new Map : void 0;return r = function (t) {
      if (null === t || !function (t) {
        try {
          return -1 !== Function.toString.call(t).indexOf('[native code]');
        } catch (n) {
          return 'function' == typeof t;
        }
      }(t)) return t;if ('function' != typeof t) throw new TypeError('Super expression must either be null or a function');if (void 0 !== n) {
        if (n.has(t)) return n.get(t);n.set(t, e);
      } function e() {
        return function (t, n, e) {
          if (o()) return Reflect.construct.apply(null, arguments);const r = [null];r.push.apply(r, n);const a = new(t.bind.apply(t, r));return e && i(a, e.prototype), a;
        }(t, arguments, a(this).constructor);
      } return e.prototype = Object.create(t.prototype, { constructor:{ value:e, enumerable:!1, writable:!0, configurable:!0 } }), i(e, t);
    }, r(t);
  } function o() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() =>{})));
    } catch (t) {} return (o = function () {
      return !!t;
    })();
  } function i(t, n) {
    return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, n) {
      return t.__proto__ = n, t;
    }, i(t, n);
  } function a(t) {
    return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, a(t);
  } const c = function (e) {
    function r() {
      return function (t, n) {
        if (!(t instanceof n)) throw new TypeError('Cannot call a class as a function');
      }(this, r), function (n, e, r) {
        return e = a(e), function (n, e) {
          if (e && ('object' == t(e) || 'function' == typeof e)) return e;if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined');return function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;
          }(n);
        }(n, o() ? Reflect.construct(e, r || [], a(n).constructor) : e.apply(n, r));
      }(this, r);
    } return function (t, n) {
      if ('function' != typeof n && null !== n) throw new TypeError('Super expression must either be null or a function');t.prototype = Object.create(n && n.prototype, { constructor:{ value:t, writable:!0, configurable:!0 } }), Object.defineProperty(t, 'prototype', { writable:!1 }), n && i(t, n);
    }(r, e), c = r, (u = [{ key:'connectedCallback', value:function () {
      this.render();
    } }, { key:'render', value:function () {
      this.innerHTML = '\n    <style>\n     header {\n    position: sticky;\n    top: 0;\n    z-index: 9999;\n  }\n\n.my-header {\n  display: flex;\n  justify-content: space-between;\n  padding-inline: 5rem;\n  background-color: #13181d;\n  align-items: center;\n}\n\n.my-header .title-app a{\n  color: white;\n  font-size: 1.5rem;\n  padding: 1.2rem;\n  font-family: Poppins, sans-serif;\n  text-decoration: none;\n}\n\n.navbar ul {\n  display: flex;\n  list-style: none;\n}\n\n.navbar ul li a {\ndisplay: inline-block;\n  color: white;\n  text-decoration: none;\n  font-size: 1.2rem;\n  transition: ease-in-out 0.5s;\n  font-family: Quicksand;\n  padding: 2rem;\n  border-bottom: 2px solid transparent;\n}\n\n.navbar ul li a:hover {\n  color: orange;\n  border-bottom: 2px solid orange;\n}\n\n.toggle-menu {\n  color: white;\n  font-size: 2rem;\n  display: none;\n  align-items: center;\n  cursor: pointer;\n}\n\n<<<<<<< HEAD\n@media (max-width: 420px) {\n  .my-header {\n    padding-inline: 0;\n  }\n\n  .my-header .title-app {\n    font-size: 1rem;\n  }\n\n@media (max-width:420px) {\n    .my-header {\n        padding-inline:0\n    }\n    .my-header .title-app {\n        font-size:1rem\n    }\n\n}\n    </style>\n      <div class="my-header">\n        <div class="title-app">\n        <a href="#/home">\n          <h2 style="margin: 0">\n            <span style="color: orange">F</span>ood shops\n          </h2>\n        </a>\n        </div>\n        <div class="navbar">\n          <nav\n            id="navDrawer"\n            role="navigation"\n            aria-label="Main Navigation"\n            style="display: flex"\n          >\n            <div\n              role="button"\n              id="toggleMenu"\n              class="toggle-menu"\n              tabindex="0"\n              aria-expanded="false"\n              aria-controls="navbar-menu"\n            >\n              ☰\n            </div>\n            <ul class="navbar-menu" id="navbar-menu" style="margin: 0;" hidden>\n              <li><a href="#/home" tabindex="0">Home</a></li>\n              <li><a href="#/favorite" tabindex="0">Favorite</a></li>\n              <li>\n                <a href="https://github.com/wraleydi" tabindex="0">About Us</a>\n              </li>\n            </ul>\n          </nav>\n        </div>\n      </div>\n        ';const t = document.querySelector('.toggle-menu');t.addEventListener('click', (() =>{
        console.log('Toggle menu diklik!'), document.querySelector('.navbar-menu').classList.toggle('navbar-expand'), t.classList.toggle('remove-menu');
      })), window.onscroll = function () {
        document.querySelector('.navbar-menu').classList.remove('navbar-expand');
      }, t.addEventListener('keydown', ((n) =>{
        'Enter' !== n.key && ' ' !== n.key || (n.preventDefault(), t.click());
      }));
    } }]) && n(c.prototype, u), Object.defineProperty(c, 'prototype', { writable:!1 }), c;let c, u;
  }(r(HTMLElement));customElements.define('header-app', c);
}, 506:(t, n, e)=>{
  'use strict';e(452), e(810), e(262), e(124), e(629);const r = e(279), o = e(982), i = e(238), a = new r.A({ button:document.querySelector('#toggleMenu'), drawer:document.querySelector('#navDrawer'), content:document.querySelector('#main-content') });window.addEventListener('DOMContentLoaded', (() =>{
    (0, i.A)(), (0, o.C)(), a.renderPage().then((() =>{
      (0, o.R)();
    })).catch(((t) =>{
      alert('Terjadi kesalahan saat memuat halaman. Silakan coba lagi.'), console.error('Error rendering page:', t);
    }));
  })), window.addEventListener('hashchange', (() =>{
    console.log('Hash changed:', window.location.hash), window.scrollTo(0, 0), (0, o.C)(), a.renderPage().then((() =>{
      (0, o.R)(), window.scrollTo(0, 0);
    })).catch(((t) =>{
      alert('Terjadi kesalahan saat memuat halaman. Silakan coba lagi.'), console.error('Error rendering page:', t);
    }));
  }));
} }]);
//# sourceMappingURL=app~7bd12dde.bundle.js.map