/*! For license information please see app~e4317507.bundle.js.LICENSE.txt */
'use strict';(self.webpackChunkrestaurant_apps = self.webpackChunkrestaurant_apps || []).push([[74], { 300:(t, r, e)=>{
  function n(t) {
    return n = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
    }, n(t);
  } function o() {
    o = function () {
      return r;
    };var t, r = {}, e = Object.prototype, i = e.hasOwnProperty, a = Object.defineProperty || function (t, r, e) {
        t[r] = e.value;
      }, c = 'function' == typeof Symbol ? Symbol : {}, u = c.iterator || '@@iterator', s = c.asyncIterator || '@@asyncIterator', l = c.toStringTag || '@@toStringTag';function f(t, r, e) {
      return Object.defineProperty(t, r, { value:e, enumerable:!0, configurable:!0, writable:!0 }), t[r];
    } try {
      f({}, '');
    } catch (t) {
      f = function (t, r, e) {
        return t[r] = e;
      };
    } function h(t, r, e, n) {
      const o = r && r.prototype instanceof w ? r : w, i = Object.create(o.prototype), c = new T(n || []);return a(i, '_invoke', { value:S(t, e, c) }), i;
    } function p(t, r, e) {
      try {
        return { type:'normal', arg:t.call(r, e) };
      } catch (t) {
        return { type:'throw', arg:t };
      }
    }r.wrap = h;const v = 'suspendedStart', y = 'suspendedYield', d = 'executing', m = 'completed', g = {};function w() {} function b() {} function x() {} let L = {};f(L, u, (function () {
      return this;
    }));const E = Object.getPrototypeOf, _ = E && E(E(A([])));_ && _ !== e && i.call(_, u) && (L = _);const k = x.prototype = w.prototype = Object.create(L);function O(t) {
      ['next', 'throw', 'return'].forEach(((r) =>{
        f(t, r, (function (t) {
          return this._invoke(r, t);
        }));
      }));
    } function j(t, r) {
      function e(o, a, c, u) {
        const s = p(t[o], t, a);if ('throw' !== s.type) {
          const l = s.arg, f = l.value;return f && 'object' == n(f) && i.call(f, '__await') ? r.resolve(f.__await).then(((t) =>{
            e('next', t, c, u);
          }), ((t) =>{
            e('throw', t, c, u);
          })) : r.resolve(f).then(((t) =>{
            l.value = t, c(l);
          }), ((t) =>{
            return e('throw', t, c, u);
          }));
        }u(s.arg);
      } let o;a(this, '_invoke', { value:function (t, n) {
        function i() {
          return new r(((r, o) =>{
            e(t, n, r, o);
          }));
        } return o = o ? o.then(i, i) : i();
      } });
    } function S(r, e, n) {
      let o = v;return function (i, a) {
        if (o === d) throw Error('Generator is already running');if (o === m) {
          if ('throw' === i) throw a;return { value:t, done:!0 };
        } for (n.method = i, n.arg = a;;) {
          const c = n.delegate;if (c) {
            const u = P(c, n);if (u) {
              if (u === g) continue;return u;
            }
          } if ('next' === n.method)n.sent = n._sent = n.arg;else if ('throw' === n.method) {
            if (o === v) throw o = m, n.arg;n.dispatchException(n.arg);
          } else 'return' === n.method && n.abrupt('return', n.arg);o = d;const s = p(r, e, n);if ('normal' === s.type) {
            if (o = n.done ? m : y, s.arg === g) continue;return { value:s.arg, done:n.done };
          }'throw' === s.type && (o = m, n.method = 'throw', n.arg = s.arg);
        }
      };
    } function P(r, e) {
      const n = e.method, o = r.iterator[n];if (o === t) return e.delegate = null, 'throw' === n && r.iterator.return && (e.method = 'return', e.arg = t, P(r, e), 'throw' === e.method) || 'return' !== n && (e.method = 'throw', e.arg = new TypeError(`The iterator does not provide a '${n}' method`)), g;const i = p(o, r.iterator, e.arg);if ('throw' === i.type) return e.method = 'throw', e.arg = i.arg, e.delegate = null, g;const a = i.arg;return a ? a.done ? (e[r.resultName] = a.value, e.next = r.nextLoc, 'return' !== e.method && (e.method = 'next', e.arg = t), e.delegate = null, g) : a : (e.method = 'throw', e.arg = new TypeError('iterator result is not an object'), e.delegate = null, g);
    } function G(t) {
      const r = { tryLoc:t[0] };1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r);
    } function N(t) {
      const r = t.completion || {};r.type = 'normal', delete r.arg, t.completion = r;
    } function T(t) {
      this.tryEntries = [{ tryLoc:'root' }], t.forEach(G, this), this.reset(!0);
    } function A(r) {
      if (r || '' === r) {
        const e = r[u];if (e) return e.call(r);if ('function' == typeof r.next) return r;if (!isNaN(r.length)) {
          let o = -1, a = function e() {
            for (;++o < r.length;) if (i.call(r, o)) return e.value = r[o], e.done = !1, e;return e.value = t, e.done = !0, e;
          };return a.next = a;
        }
      } throw new TypeError(`${n(r)} is not iterable`);
    } return b.prototype = x, a(k, 'constructor', { value:x, configurable:!0 }), a(x, 'constructor', { value:b, configurable:!0 }), b.displayName = f(x, l, 'GeneratorFunction'), r.isGeneratorFunction = function (t) {
      const r = 'function' == typeof t && t.constructor;return !!r && (r === b || 'GeneratorFunction' === (r.displayName || r.name));
    }, r.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : (t.__proto__ = x, f(t, l, 'GeneratorFunction')), t.prototype = Object.create(k), t;
    }, r.awrap = function (t) {
      return { __await:t };
    }, O(j.prototype), f(j.prototype, s, (function () {
      return this;
    })), r.AsyncIterator = j, r.async = function (t, e, n, o, i) {
      void 0 === i && (i = Promise);const a = new j(h(t, e, n, o), i);return r.isGeneratorFunction(e) ? a : a.next().then(((t) =>{
        return t.done ? t.value : a.next();
      }));
    }, O(k), f(k, l, 'Generator'), f(k, u, (function () {
      return this;
    })), f(k, 'toString', (() =>{
      return '[object Generator]';
    })), r.keys = function (t) {
      const r = Object(t), e = [];for (const n in r)e.push(n);return e.reverse(), function t() {
        for (;e.length;) {
          const n = e.pop();if (n in r) return t.value = n, t.done = !1, t;
        } return t.done = !0, t;
      };
    }, r.values = A, T.prototype = { constructor:T, reset:function (r) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = 'next', this.arg = t, this.tryEntries.forEach(N), !r) for (const e in this)'t' === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t);
    }, stop:function () {
      this.done = !0;const t = this.tryEntries[0].completion;if ('throw' === t.type) throw t.arg;return this.rval;
    }, dispatchException:function (r) {
      if (this.done) throw r;const e = this;function n(n, o) {
        return c.type = 'throw', c.arg = r, e.next = n, o && (e.method = 'next', e.arg = t), !!o;
      } for (let o = this.tryEntries.length - 1;o >= 0;--o) {
        var a = this.tryEntries[o], c = a.completion;if ('root' === a.tryLoc) return n('end');if (a.tryLoc <= this.prev) {
          const u = i.call(a, 'catchLoc'), s = i.call(a, 'finallyLoc');if (u && s) {
            if (this.prev < a.catchLoc) return n(a.catchLoc, !0);if (this.prev < a.finallyLoc) return n(a.finallyLoc);
          } else if (u) {
            if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
          } else {
            if (!s) throw Error('try statement without catch or finally');if (this.prev < a.finallyLoc) return n(a.finallyLoc);
          }
        }
      }
    }, abrupt:function (t, r) {
      for (let e = this.tryEntries.length - 1;e >= 0;--e) {
        const n = this.tryEntries[e];if (n.tryLoc <= this.prev && i.call(n, 'finallyLoc') && this.prev < n.finallyLoc) {
          var o = n;break;
        }
      }o && ('break' === t || 'continue' === t) && o.tryLoc <= r && r <= o.finallyLoc && (o = null);const a = o ? o.completion : {};return a.type = t, a.arg = r, o ? (this.method = 'next', this.next = o.finallyLoc, g) : this.complete(a);
    }, complete:function (t, r) {
      if ('throw' === t.type) throw t.arg;return 'break' === t.type || 'continue' === t.type ? this.next = t.arg : 'return' === t.type ? (this.rval = this.arg = t.arg, this.method = 'return', this.next = 'end') : 'normal' === t.type && r && (this.next = r), g;
    }, finish:function (t) {
      for (let r = this.tryEntries.length - 1;r >= 0;--r) {
        const e = this.tryEntries[r];if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), N(e), g;
      }
    }, catch:function (t) {
      for (let r = this.tryEntries.length - 1;r >= 0;--r) {
        const e = this.tryEntries[r];if (e.tryLoc === t) {
          const n = e.completion;if ('throw' === n.type) {
            var o = n.arg;N(e);
          } return o;
        }
      } throw Error('illegal catch attempt');
    }, delegateYield:function (r, e, n) {
      return this.delegate = { iterator:A(r), resultName:e, nextLoc:n }, 'next' === this.method && (this.arg = t), g;
    } }, r;
  } function i(t, r, e, n, o, i, a) {
    try {
      var c = t[i](a), u = c.value;
    } catch (t) {
      return void e(t);
    }c.done ? r(u) : Promise.resolve(u).then(n, o);
  } function a(t) {
    return function () {
      const r = this, e = arguments;return new Promise(((n, o) =>{
        const a = t.apply(r, e);function c(t) {
          i(a, n, o, c, u, 'next', t);
        } function u(t) {
          i(a, n, o, c, u, 'throw', t);
        }c(void 0);
      }));
    };
  }e.d(r, { LC:()=>l, V:()=>s, q4:()=>u });var c = 'https://restaurant-api.dicoding.dev', u = function () {
      const t = a(o().mark((function t() {
        let r, e;return o().wrap(((t) =>{
          for (;;) switch (t.prev = t.next) {
          case 0:return t.prev = 0, t.next = 3, fetch(''.concat(c, '/list'));case 3:return r = t.sent, t.next = 6, r.json();case 6:return e = t.sent, t.abrupt('return', e.restaurants);case 10:throw t.prev = 10, t.t0 = t.catch(0), console.error('Error:', t.t0.message), t.t0;case 14:case 'end':return t.stop();
          }
        }), t, null, [[0, 10]]);
      })));return function () {
        return t.apply(this, arguments);
      };
    }(), s = function () {
      const t = a(o().mark((function t(r) {
        let e, n;return o().wrap(((t) =>{
          for (;;) switch (t.prev = t.next) {
          case 0:return t.prev = 0, t.next = 3, fetch(''.concat(c, '/detail/').concat(r));case 3:return e = t.sent, t.next = 6, e.json();case 6:return n = t.sent, t.abrupt('return', n.restaurant);case 10:throw t.prev = 10, t.t0 = t.catch(0), console.error('Error fetching restaurant details:', t.t0.message), t.t0;case 14:case 'end':return t.stop();
          }
        }), t, null, [[0, 10]]);
      })));return function (r) {
        return t.apply(this, arguments);
      };
    }();function l(t) {
    return f.apply(this, arguments);
  } function f() {
    return (f = a(o().mark((function t(r) {
      let e, n, i;return o().wrap(((t) =>{
        for (;;) switch (t.prev = t.next) {
        case 0:return t.prev = 0, t.next = 3, fetch(''.concat(c, '/review'), { method:'POST', headers:{ 'Content-Type':'application/json' }, body:JSON.stringify(r) });case 3:if ((e = t.sent).ok) {
          t.next = 10;break;
        } return t.next = 7, e.text();case 7:throw n = t.sent, console.error('Error response:', n), new Error('Failed to submit review: '.concat(e.statusText));case 10:return t.next = 12, e.json();case 12:return i = t.sent, t.abrupt('return', i);case 16:throw t.prev = 16, t.t0 = t.catch(0), console.error('Error submitting review:', t.t0), t.t0;case 20:case 'end':return t.stop();
        }
      }), t, null, [[0, 16]]);
    })))).apply(this, arguments);
  }
}, 761:(t, r, e)=>{
  e.d(r, { A:()=>a });const n = e(974), o = e(599), i = e(872);const a = { '/':i.A, '/home':i.A, '/favorite':o.A, '/detail/:id':n.A };
}, 668:(t, r, e)=>{
  e.d(r, { A:()=>n });const n = { parseActiveUrlWithCombiner:function () {
    const t = window.location.hash.slice(1).toLowerCase(), r = this._urlSplitter(t);return this._urlCombiner(r);
  }, parseActiveUrlWithoutCombiner:function () {
    const t = window.location.hash.slice(1).toLowerCase();return this._urlSplitter(t);
  }, _urlSplitter:function (t) {
    const r = t.split('/');return { resource:r[1] || null, id:r[2] || null, verb:r[3] || null };
  }, _urlCombiner:function (t) {
    return (t.resource ? '/'.concat(t.resource) : '/') + (t.id ? '/:id' : '') + (t.verb ? '/'.concat(t.verb) : '');
  } };
}, 982:(t, r, e)=>{
  e.d(r, { C:()=>i, R:()=>a });var n = document.getElementById('loading'), o = document.getElementById('overlay'), i = function () {
      n.style.display = 'block', o.style.display = 'block';
    }, a = function () {
      n.style.display = 'none', o.style.display = 'none';
    };
}, 784:(t, r, e)=>{
  e.d(r, { A:()=>s });const n = e(162), o = e(820);function i(t) {
    return i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
    }, i(t);
  } function a() {
    a = function () {
      return r;
    };var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = Object.defineProperty || function (t, r, e) {
        t[r] = e.value;
      }, c = 'function' == typeof Symbol ? Symbol : {}, u = c.iterator || '@@iterator', s = c.asyncIterator || '@@asyncIterator', l = c.toStringTag || '@@toStringTag';function f(t, r, e) {
      return Object.defineProperty(t, r, { value:e, enumerable:!0, configurable:!0, writable:!0 }), t[r];
    } try {
      f({}, '');
    } catch (t) {
      f = function (t, r, e) {
        return t[r] = e;
      };
    } function h(t, r, e, n) {
      const i = r && r.prototype instanceof w ? r : w, a = Object.create(i.prototype), c = new T(n || []);return o(a, '_invoke', { value:S(t, e, c) }), a;
    } function p(t, r, e) {
      try {
        return { type:'normal', arg:t.call(r, e) };
      } catch (t) {
        return { type:'throw', arg:t };
      }
    }r.wrap = h;const v = 'suspendedStart', y = 'suspendedYield', d = 'executing', m = 'completed', g = {};function w() {} function b() {} function x() {} let L = {};f(L, u, (function () {
      return this;
    }));const E = Object.getPrototypeOf, _ = E && E(E(A([])));_ && _ !== e && n.call(_, u) && (L = _);const k = x.prototype = w.prototype = Object.create(L);function O(t) {
      ['next', 'throw', 'return'].forEach(((r) =>{
        f(t, r, (function (t) {
          return this._invoke(r, t);
        }));
      }));
    } function j(t, r) {
      function e(o, a, c, u) {
        const s = p(t[o], t, a);if ('throw' !== s.type) {
          const l = s.arg, f = l.value;return f && 'object' == i(f) && n.call(f, '__await') ? r.resolve(f.__await).then(((t) =>{
            e('next', t, c, u);
          }), ((t) =>{
            e('throw', t, c, u);
          })) : r.resolve(f).then(((t) =>{
            l.value = t, c(l);
          }), ((t) =>{
            return e('throw', t, c, u);
          }));
        }u(s.arg);
      } let a;o(this, '_invoke', { value:function (t, n) {
        function o() {
          return new r(((r, o) =>{
            e(t, n, r, o);
          }));
        } return a = a ? a.then(o, o) : o();
      } });
    } function S(r, e, n) {
      let o = v;return function (i, a) {
        if (o === d) throw Error('Generator is already running');if (o === m) {
          if ('throw' === i) throw a;return { value:t, done:!0 };
        } for (n.method = i, n.arg = a;;) {
          const c = n.delegate;if (c) {
            const u = P(c, n);if (u) {
              if (u === g) continue;return u;
            }
          } if ('next' === n.method)n.sent = n._sent = n.arg;else if ('throw' === n.method) {
            if (o === v) throw o = m, n.arg;n.dispatchException(n.arg);
          } else 'return' === n.method && n.abrupt('return', n.arg);o = d;const s = p(r, e, n);if ('normal' === s.type) {
            if (o = n.done ? m : y, s.arg === g) continue;return { value:s.arg, done:n.done };
          }'throw' === s.type && (o = m, n.method = 'throw', n.arg = s.arg);
        }
      };
    } function P(r, e) {
      const n = e.method, o = r.iterator[n];if (o === t) return e.delegate = null, 'throw' === n && r.iterator.return && (e.method = 'return', e.arg = t, P(r, e), 'throw' === e.method) || 'return' !== n && (e.method = 'throw', e.arg = new TypeError(`The iterator does not provide a '${n}' method`)), g;const i = p(o, r.iterator, e.arg);if ('throw' === i.type) return e.method = 'throw', e.arg = i.arg, e.delegate = null, g;const a = i.arg;return a ? a.done ? (e[r.resultName] = a.value, e.next = r.nextLoc, 'return' !== e.method && (e.method = 'next', e.arg = t), e.delegate = null, g) : a : (e.method = 'throw', e.arg = new TypeError('iterator result is not an object'), e.delegate = null, g);
    } function G(t) {
      const r = { tryLoc:t[0] };1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r);
    } function N(t) {
      const r = t.completion || {};r.type = 'normal', delete r.arg, t.completion = r;
    } function T(t) {
      this.tryEntries = [{ tryLoc:'root' }], t.forEach(G, this), this.reset(!0);
    } function A(r) {
      if (r || '' === r) {
        const e = r[u];if (e) return e.call(r);if ('function' == typeof r.next) return r;if (!isNaN(r.length)) {
          let o = -1, a = function e() {
            for (;++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e;return e.value = t, e.done = !0, e;
          };return a.next = a;
        }
      } throw new TypeError(`${i(r)} is not iterable`);
    } return b.prototype = x, o(k, 'constructor', { value:x, configurable:!0 }), o(x, 'constructor', { value:b, configurable:!0 }), b.displayName = f(x, l, 'GeneratorFunction'), r.isGeneratorFunction = function (t) {
      const r = 'function' == typeof t && t.constructor;return !!r && (r === b || 'GeneratorFunction' === (r.displayName || r.name));
    }, r.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : (t.__proto__ = x, f(t, l, 'GeneratorFunction')), t.prototype = Object.create(k), t;
    }, r.awrap = function (t) {
      return { __await:t };
    }, O(j.prototype), f(j.prototype, s, (function () {
      return this;
    })), r.AsyncIterator = j, r.async = function (t, e, n, o, i) {
      void 0 === i && (i = Promise);const a = new j(h(t, e, n, o), i);return r.isGeneratorFunction(e) ? a : a.next().then(((t) =>{
        return t.done ? t.value : a.next();
      }));
    }, O(k), f(k, l, 'Generator'), f(k, u, (function () {
      return this;
    })), f(k, 'toString', (() =>{
      return '[object Generator]';
    })), r.keys = function (t) {
      const r = Object(t), e = [];for (const n in r)e.push(n);return e.reverse(), function t() {
        for (;e.length;) {
          const n = e.pop();if (n in r) return t.value = n, t.done = !1, t;
        } return t.done = !0, t;
      };
    }, r.values = A, T.prototype = { constructor:T, reset:function (r) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = 'next', this.arg = t, this.tryEntries.forEach(N), !r) for (const e in this)'t' === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t);
    }, stop:function () {
      this.done = !0;const t = this.tryEntries[0].completion;if ('throw' === t.type) throw t.arg;return this.rval;
    }, dispatchException:function (r) {
      if (this.done) throw r;const e = this;function o(n, o) {
        return c.type = 'throw', c.arg = r, e.next = n, o && (e.method = 'next', e.arg = t), !!o;
      } for (let i = this.tryEntries.length - 1;i >= 0;--i) {
        var a = this.tryEntries[i], c = a.completion;if ('root' === a.tryLoc) return o('end');if (a.tryLoc <= this.prev) {
          const u = n.call(a, 'catchLoc'), s = n.call(a, 'finallyLoc');if (u && s) {
            if (this.prev < a.catchLoc) return o(a.catchLoc, !0);if (this.prev < a.finallyLoc) return o(a.finallyLoc);
          } else if (u) {
            if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
          } else {
            if (!s) throw Error('try statement without catch or finally');if (this.prev < a.finallyLoc) return o(a.finallyLoc);
          }
        }
      }
    }, abrupt:function (t, r) {
      for (let e = this.tryEntries.length - 1;e >= 0;--e) {
        const o = this.tryEntries[e];if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
          var i = o;break;
        }
      }i && ('break' === t || 'continue' === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);const a = i ? i.completion : {};return a.type = t, a.arg = r, i ? (this.method = 'next', this.next = i.finallyLoc, g) : this.complete(a);
    }, complete:function (t, r) {
      if ('throw' === t.type) throw t.arg;return 'break' === t.type || 'continue' === t.type ? this.next = t.arg : 'return' === t.type ? (this.rval = this.arg = t.arg, this.method = 'return', this.next = 'end') : 'normal' === t.type && r && (this.next = r), g;
    }, finish:function (t) {
      for (let r = this.tryEntries.length - 1;r >= 0;--r) {
        const e = this.tryEntries[r];if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), N(e), g;
      }
    }, catch:function (t) {
      for (let r = this.tryEntries.length - 1;r >= 0;--r) {
        const e = this.tryEntries[r];if (e.tryLoc === t) {
          const n = e.completion;if ('throw' === n.type) {
            var o = n.arg;N(e);
          } return o;
        }
      } throw Error('illegal catch attempt');
    }, delegateYield:function (r, e, n) {
      return this.delegate = { iterator:A(r), resultName:e, nextLoc:n }, 'next' === this.method && (this.arg = t), g;
    } }, r;
  } function c(t, r, e, n, o, i, a) {
    try {
      var c = t[i](a), u = c.value;
    } catch (t) {
      return void e(t);
    }c.done ? r(u) : Promise.resolve(u).then(n, o);
  } function u(t) {
    return function () {
      const r = this, e = arguments;return new Promise(((n, o) =>{
        const i = t.apply(r, e);function a(t) {
          c(i, n, o, a, u, 'next', t);
        } function u(t) {
          c(i, n, o, a, u, 'throw', t);
        }a(void 0);
      }));
    };
  } const s = { init:function (t) {
    const r = this;return u(a().mark((function e() {
      let n, o;return a().wrap(((e) =>{
        for (;;) switch (e.prev = e.next) {
        case 0:return n = t.likeButtonContainer, o = t.restaurant, r._likeButtonContainer = n, r._restaurant = o, e.next = 5, r._renderButton();case 5:case 'end':return e.stop();
        }
      }), e);
    })))();
  }, _renderButton:function () {
    const t = this;return u(a().mark((function r() {
      let e;return a().wrap(((r) =>{
        for (;;) switch (r.prev = r.next) {
        case 0:return e = t._restaurant.id, r.next = 3, t._isRestaurantExist(e);case 3:if (!r.sent) {
          r.next = 7;break;
        }t._renderLiked(), r.next = 8;break;case 7:t._renderLike();case 8:case 'end':return r.stop();
        }
      }), r);
    })))();
  }, _isRestaurantExist:function (t) {
    return u(a().mark((function r() {
      let e;return a().wrap(((r) =>{
        for (;;) switch (r.prev = r.next) {
        case 0:return r.next = 2, n.A.getRestaurant(t);case 2:return e = r.sent, r.abrupt('return', !!e);case 4:case 'end':return r.stop();
        }
      }), r);
    })))();
  }, _renderLike:function () {
    const t = this;this._likeButtonContainer.innerHTML = (0, o.OK)(), document.querySelector('#likeButton').addEventListener('click', u(a().mark((function r() {
      return a().wrap(((r) =>{
        for (;;) switch (r.prev = r.next) {
        case 0:return r.next = 2, n.A.putRestaurant(t._restaurant);case 2:t._renderButton();case 3:case 'end':return r.stop();
        }
      }), r);
    }))));
  }, _renderLiked:function () {
    const t = this;this._likeButtonContainer.innerHTML = (0, o.s9)(), document.querySelector('#likeButton').addEventListener('click', u(a().mark((function r() {
      return a().wrap(((r) =>{
        for (;;) switch (r.prev = r.next) {
        case 0:return r.next = 2, n.A.deleteRestaurant(t._restaurant.id);case 2:t._renderButton();case 3:case 'end':return r.stop();
        }
      }), r);
    }))));
  } };
}, 352:(t, r, e)=>{
  e.d(r, { A:()=>l });const n = e(300), o = e(668), i = e(982);function a(t) {
    return a = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
    }, a(t);
  } function c() {
    c = function () {
      return r;
    };var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = Object.defineProperty || function (t, r, e) {
        t[r] = e.value;
      }, i = 'function' == typeof Symbol ? Symbol : {}, u = i.iterator || '@@iterator', s = i.asyncIterator || '@@asyncIterator', l = i.toStringTag || '@@toStringTag';function f(t, r, e) {
      return Object.defineProperty(t, r, { value:e, enumerable:!0, configurable:!0, writable:!0 }), t[r];
    } try {
      f({}, '');
    } catch (t) {
      f = function (t, r, e) {
        return t[r] = e;
      };
    } function h(t, r, e, n) {
      const i = r && r.prototype instanceof w ? r : w, a = Object.create(i.prototype), c = new T(n || []);return o(a, '_invoke', { value:S(t, e, c) }), a;
    } function p(t, r, e) {
      try {
        return { type:'normal', arg:t.call(r, e) };
      } catch (t) {
        return { type:'throw', arg:t };
      }
    }r.wrap = h;const v = 'suspendedStart', y = 'suspendedYield', d = 'executing', m = 'completed', g = {};function w() {} function b() {} function x() {} let L = {};f(L, u, (function () {
      return this;
    }));const E = Object.getPrototypeOf, _ = E && E(E(A([])));_ && _ !== e && n.call(_, u) && (L = _);const k = x.prototype = w.prototype = Object.create(L);function O(t) {
      ['next', 'throw', 'return'].forEach(((r) =>{
        f(t, r, (function (t) {
          return this._invoke(r, t);
        }));
      }));
    } function j(t, r) {
      function e(o, i, c, u) {
        const s = p(t[o], t, i);if ('throw' !== s.type) {
          const l = s.arg, f = l.value;return f && 'object' == a(f) && n.call(f, '__await') ? r.resolve(f.__await).then(((t) =>{
            e('next', t, c, u);
          }), ((t) =>{
            e('throw', t, c, u);
          })) : r.resolve(f).then(((t) =>{
            l.value = t, c(l);
          }), ((t) =>{
            return e('throw', t, c, u);
          }));
        }u(s.arg);
      } let i;o(this, '_invoke', { value:function (t, n) {
        function o() {
          return new r(((r, o) =>{
            e(t, n, r, o);
          }));
        } return i = i ? i.then(o, o) : o();
      } });
    } function S(r, e, n) {
      let o = v;return function (i, a) {
        if (o === d) throw Error('Generator is already running');if (o === m) {
          if ('throw' === i) throw a;return { value:t, done:!0 };
        } for (n.method = i, n.arg = a;;) {
          const c = n.delegate;if (c) {
            const u = P(c, n);if (u) {
              if (u === g) continue;return u;
            }
          } if ('next' === n.method)n.sent = n._sent = n.arg;else if ('throw' === n.method) {
            if (o === v) throw o = m, n.arg;n.dispatchException(n.arg);
          } else 'return' === n.method && n.abrupt('return', n.arg);o = d;const s = p(r, e, n);if ('normal' === s.type) {
            if (o = n.done ? m : y, s.arg === g) continue;return { value:s.arg, done:n.done };
          }'throw' === s.type && (o = m, n.method = 'throw', n.arg = s.arg);
        }
      };
    } function P(r, e) {
      const n = e.method, o = r.iterator[n];if (o === t) return e.delegate = null, 'throw' === n && r.iterator.return && (e.method = 'return', e.arg = t, P(r, e), 'throw' === e.method) || 'return' !== n && (e.method = 'throw', e.arg = new TypeError(`The iterator does not provide a '${n}' method`)), g;const i = p(o, r.iterator, e.arg);if ('throw' === i.type) return e.method = 'throw', e.arg = i.arg, e.delegate = null, g;const a = i.arg;return a ? a.done ? (e[r.resultName] = a.value, e.next = r.nextLoc, 'return' !== e.method && (e.method = 'next', e.arg = t), e.delegate = null, g) : a : (e.method = 'throw', e.arg = new TypeError('iterator result is not an object'), e.delegate = null, g);
    } function G(t) {
      const r = { tryLoc:t[0] };1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r);
    } function N(t) {
      const r = t.completion || {};r.type = 'normal', delete r.arg, t.completion = r;
    } function T(t) {
      this.tryEntries = [{ tryLoc:'root' }], t.forEach(G, this), this.reset(!0);
    } function A(r) {
      if (r || '' === r) {
        const e = r[u];if (e) return e.call(r);if ('function' == typeof r.next) return r;if (!isNaN(r.length)) {
          let o = -1, i = function e() {
            for (;++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e;return e.value = t, e.done = !0, e;
          };return i.next = i;
        }
      } throw new TypeError(`${a(r)} is not iterable`);
    } return b.prototype = x, o(k, 'constructor', { value:x, configurable:!0 }), o(x, 'constructor', { value:b, configurable:!0 }), b.displayName = f(x, l, 'GeneratorFunction'), r.isGeneratorFunction = function (t) {
      const r = 'function' == typeof t && t.constructor;return !!r && (r === b || 'GeneratorFunction' === (r.displayName || r.name));
    }, r.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : (t.__proto__ = x, f(t, l, 'GeneratorFunction')), t.prototype = Object.create(k), t;
    }, r.awrap = function (t) {
      return { __await:t };
    }, O(j.prototype), f(j.prototype, s, (function () {
      return this;
    })), r.AsyncIterator = j, r.async = function (t, e, n, o, i) {
      void 0 === i && (i = Promise);const a = new j(h(t, e, n, o), i);return r.isGeneratorFunction(e) ? a : a.next().then(((t) =>{
        return t.done ? t.value : a.next();
      }));
    }, O(k), f(k, l, 'Generator'), f(k, u, (function () {
      return this;
    })), f(k, 'toString', (() =>{
      return '[object Generator]';
    })), r.keys = function (t) {
      const r = Object(t), e = [];for (const n in r)e.push(n);return e.reverse(), function t() {
        for (;e.length;) {
          const n = e.pop();if (n in r) return t.value = n, t.done = !1, t;
        } return t.done = !0, t;
      };
    }, r.values = A, T.prototype = { constructor:T, reset:function (r) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = 'next', this.arg = t, this.tryEntries.forEach(N), !r) for (const e in this)'t' === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t);
    }, stop:function () {
      this.done = !0;const t = this.tryEntries[0].completion;if ('throw' === t.type) throw t.arg;return this.rval;
    }, dispatchException:function (r) {
      if (this.done) throw r;const e = this;function o(n, o) {
        return c.type = 'throw', c.arg = r, e.next = n, o && (e.method = 'next', e.arg = t), !!o;
      } for (let i = this.tryEntries.length - 1;i >= 0;--i) {
        var a = this.tryEntries[i], c = a.completion;if ('root' === a.tryLoc) return o('end');if (a.tryLoc <= this.prev) {
          const u = n.call(a, 'catchLoc'), s = n.call(a, 'finallyLoc');if (u && s) {
            if (this.prev < a.catchLoc) return o(a.catchLoc, !0);if (this.prev < a.finallyLoc) return o(a.finallyLoc);
          } else if (u) {
            if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
          } else {
            if (!s) throw Error('try statement without catch or finally');if (this.prev < a.finallyLoc) return o(a.finallyLoc);
          }
        }
      }
    }, abrupt:function (t, r) {
      for (let e = this.tryEntries.length - 1;e >= 0;--e) {
        const o = this.tryEntries[e];if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
          var i = o;break;
        }
      }i && ('break' === t || 'continue' === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);const a = i ? i.completion : {};return a.type = t, a.arg = r, i ? (this.method = 'next', this.next = i.finallyLoc, g) : this.complete(a);
    }, complete:function (t, r) {
      if ('throw' === t.type) throw t.arg;return 'break' === t.type || 'continue' === t.type ? this.next = t.arg : 'return' === t.type ? (this.rval = this.arg = t.arg, this.method = 'return', this.next = 'end') : 'normal' === t.type && r && (this.next = r), g;
    }, finish:function (t) {
      for (let r = this.tryEntries.length - 1;r >= 0;--r) {
        const e = this.tryEntries[r];if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), N(e), g;
      }
    }, catch:function (t) {
      for (let r = this.tryEntries.length - 1;r >= 0;--r) {
        const e = this.tryEntries[r];if (e.tryLoc === t) {
          const n = e.completion;if ('throw' === n.type) {
            var o = n.arg;N(e);
          } return o;
        }
      } throw Error('illegal catch attempt');
    }, delegateYield:function (r, e, n) {
      return this.delegate = { iterator:A(r), resultName:e, nextLoc:n }, 'next' === this.method && (this.arg = t), g;
    } }, r;
  } function u(t, r, e, n, o, i, a) {
    try {
      var c = t[i](a), u = c.value;
    } catch (t) {
      return void e(t);
    }c.done ? r(u) : Promise.resolve(u).then(n, o);
  } function s(t) {
    return function () {
      const r = this, e = arguments;return new Promise(((n, o) =>{
        const i = t.apply(r, e);function a(t) {
          u(i, n, o, a, c, 'next', t);
        } function c(t) {
          u(i, n, o, a, c, 'throw', t);
        }a(void 0);
      }));
    };
  } const l = { init:function (t) {
    const r = this;return s(c().mark((function e() {
      let n, o, i, a;return c().wrap(((e) =>{
        for (;;) switch (e.prev = e.next) {
        case 0:n = t.reviewContainer, o = t.form, i = t.nameInput, a = t.reviewInput, r._reviewContainer = n, r._form = o, r._nameInput = i, r._reviewInput = a, r._addSubmitListener();case 6:case 'end':return e.stop();
        }
      }), e);
    })))();
  }, _addSubmitListener:function () {
    const t = this;this._form.addEventListener('submit', function () {
      const r = s(c().mark((function r(e) {
        let a, u, s, l, f, h, p, v;return c().wrap(((r) =>{
          for (;;) switch (r.prev = r.next) {
          case 0:return e.preventDefault(), a = t._nameInput.value, u = t._reviewInput.value, s = o.A.parseActiveUrlWithoutCombiner(), r.next = 6, (0, n.V)(s.id);case 6:return l = r.sent, console.log('Fetched Restaurant:', l), f = l.id, h = { id:f, name:a, review:u }, r.prev = 10, (0, i.C)(), r.next = 14, (0, n.LC)(h);case 14:if (p = r.sent, console.log('API Response:', p), !p.customerReviews) {
            r.next = 25;break;
          }v = p.customerReviews, t._reviewContainer.innerHTML = v.map(((t) =>{
              return '\n              <div class="review">\n                <p class="review_name"><strong>'.concat(t.name, '</strong></p>\n                <p class="review_text">"').concat(t.review, '"</p>\n                <p><em>').concat(t.date, '</em></p>\n              </div>\n            ');
            })).join(''), t._form.reset(), (0, i.R)(), alert('Ulasan berhasil ditambahkan!'), r.next = 26;break;case 25:throw new Error('Data ulasan tidak valid');case 26:r.next = 32;break;case 28:r.prev = 28, r.t0 = r.catch(10), console.error('Failed to submit review:', r.t0), alert('Gagal mengirim ulasan. Coba lagi nanti.');case 32:case 'end':return r.stop();
          }
        }), r, null, [[10, 28]]);
      })));return function (t) {
        return r.apply(this, arguments);
      };
    }());
  } };
}, 238:(t, r, e)=>{
  e.d(r, { A:()=>c });const n = e(730);function o(t) {
    return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
    }, o(t);
  } function i() {
    i = function () {
      return r;
    };var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, a = Object.defineProperty || function (t, r, e) {
        t[r] = e.value;
      }, c = 'function' == typeof Symbol ? Symbol : {}, u = c.iterator || '@@iterator', s = c.asyncIterator || '@@asyncIterator', l = c.toStringTag || '@@toStringTag';function f(t, r, e) {
      return Object.defineProperty(t, r, { value:e, enumerable:!0, configurable:!0, writable:!0 }), t[r];
    } try {
      f({}, '');
    } catch (t) {
      f = function (t, r, e) {
        return t[r] = e;
      };
    } function h(t, r, e, n) {
      const o = r && r.prototype instanceof w ? r : w, i = Object.create(o.prototype), c = new T(n || []);return a(i, '_invoke', { value:S(t, e, c) }), i;
    } function p(t, r, e) {
      try {
        return { type:'normal', arg:t.call(r, e) };
      } catch (t) {
        return { type:'throw', arg:t };
      }
    }r.wrap = h;const v = 'suspendedStart', y = 'suspendedYield', d = 'executing', m = 'completed', g = {};function w() {} function b() {} function x() {} let L = {};f(L, u, (function () {
      return this;
    }));const E = Object.getPrototypeOf, _ = E && E(E(A([])));_ && _ !== e && n.call(_, u) && (L = _);const k = x.prototype = w.prototype = Object.create(L);function O(t) {
      ['next', 'throw', 'return'].forEach(((r) =>{
        f(t, r, (function (t) {
          return this._invoke(r, t);
        }));
      }));
    } function j(t, r) {
      function e(i, a, c, u) {
        const s = p(t[i], t, a);if ('throw' !== s.type) {
          const l = s.arg, f = l.value;return f && 'object' == o(f) && n.call(f, '__await') ? r.resolve(f.__await).then(((t) =>{
            e('next', t, c, u);
          }), ((t) =>{
            e('throw', t, c, u);
          })) : r.resolve(f).then(((t) =>{
            l.value = t, c(l);
          }), ((t) =>{
            return e('throw', t, c, u);
          }));
        }u(s.arg);
      } let i;a(this, '_invoke', { value:function (t, n) {
        function o() {
          return new r(((r, o) =>{
            e(t, n, r, o);
          }));
        } return i = i ? i.then(o, o) : o();
      } });
    } function S(r, e, n) {
      let o = v;return function (i, a) {
        if (o === d) throw Error('Generator is already running');if (o === m) {
          if ('throw' === i) throw a;return { value:t, done:!0 };
        } for (n.method = i, n.arg = a;;) {
          const c = n.delegate;if (c) {
            const u = P(c, n);if (u) {
              if (u === g) continue;return u;
            }
          } if ('next' === n.method)n.sent = n._sent = n.arg;else if ('throw' === n.method) {
            if (o === v) throw o = m, n.arg;n.dispatchException(n.arg);
          } else 'return' === n.method && n.abrupt('return', n.arg);o = d;const s = p(r, e, n);if ('normal' === s.type) {
            if (o = n.done ? m : y, s.arg === g) continue;return { value:s.arg, done:n.done };
          }'throw' === s.type && (o = m, n.method = 'throw', n.arg = s.arg);
        }
      };
    } function P(r, e) {
      const n = e.method, o = r.iterator[n];if (o === t) return e.delegate = null, 'throw' === n && r.iterator.return && (e.method = 'return', e.arg = t, P(r, e), 'throw' === e.method) || 'return' !== n && (e.method = 'throw', e.arg = new TypeError(`The iterator does not provide a '${n}' method`)), g;const i = p(o, r.iterator, e.arg);if ('throw' === i.type) return e.method = 'throw', e.arg = i.arg, e.delegate = null, g;const a = i.arg;return a ? a.done ? (e[r.resultName] = a.value, e.next = r.nextLoc, 'return' !== e.method && (e.method = 'next', e.arg = t), e.delegate = null, g) : a : (e.method = 'throw', e.arg = new TypeError('iterator result is not an object'), e.delegate = null, g);
    } function G(t) {
      const r = { tryLoc:t[0] };1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r);
    } function N(t) {
      const r = t.completion || {};r.type = 'normal', delete r.arg, t.completion = r;
    } function T(t) {
      this.tryEntries = [{ tryLoc:'root' }], t.forEach(G, this), this.reset(!0);
    } function A(r) {
      if (r || '' === r) {
        const e = r[u];if (e) return e.call(r);if ('function' == typeof r.next) return r;if (!isNaN(r.length)) {
          let i = -1, a = function e() {
            for (;++i < r.length;) if (n.call(r, i)) return e.value = r[i], e.done = !1, e;return e.value = t, e.done = !0, e;
          };return a.next = a;
        }
      } throw new TypeError(`${o(r)} is not iterable`);
    } return b.prototype = x, a(k, 'constructor', { value:x, configurable:!0 }), a(x, 'constructor', { value:b, configurable:!0 }), b.displayName = f(x, l, 'GeneratorFunction'), r.isGeneratorFunction = function (t) {
      const r = 'function' == typeof t && t.constructor;return !!r && (r === b || 'GeneratorFunction' === (r.displayName || r.name));
    }, r.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : (t.__proto__ = x, f(t, l, 'GeneratorFunction')), t.prototype = Object.create(k), t;
    }, r.awrap = function (t) {
      return { __await:t };
    }, O(j.prototype), f(j.prototype, s, (function () {
      return this;
    })), r.AsyncIterator = j, r.async = function (t, e, n, o, i) {
      void 0 === i && (i = Promise);const a = new j(h(t, e, n, o), i);return r.isGeneratorFunction(e) ? a : a.next().then(((t) =>{
        return t.done ? t.value : a.next();
      }));
    }, O(k), f(k, l, 'Generator'), f(k, u, (function () {
      return this;
    })), f(k, 'toString', (() =>{
      return '[object Generator]';
    })), r.keys = function (t) {
      const r = Object(t), e = [];for (const n in r)e.push(n);return e.reverse(), function t() {
        for (;e.length;) {
          const n = e.pop();if (n in r) return t.value = n, t.done = !1, t;
        } return t.done = !0, t;
      };
    }, r.values = A, T.prototype = { constructor:T, reset:function (r) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = 'next', this.arg = t, this.tryEntries.forEach(N), !r) for (const e in this)'t' === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t);
    }, stop:function () {
      this.done = !0;const t = this.tryEntries[0].completion;if ('throw' === t.type) throw t.arg;return this.rval;
    }, dispatchException:function (r) {
      if (this.done) throw r;const e = this;function o(n, o) {
        return c.type = 'throw', c.arg = r, e.next = n, o && (e.method = 'next', e.arg = t), !!o;
      } for (let i = this.tryEntries.length - 1;i >= 0;--i) {
        var a = this.tryEntries[i], c = a.completion;if ('root' === a.tryLoc) return o('end');if (a.tryLoc <= this.prev) {
          const u = n.call(a, 'catchLoc'), s = n.call(a, 'finallyLoc');if (u && s) {
            if (this.prev < a.catchLoc) return o(a.catchLoc, !0);if (this.prev < a.finallyLoc) return o(a.finallyLoc);
          } else if (u) {
            if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
          } else {
            if (!s) throw Error('try statement without catch or finally');if (this.prev < a.finallyLoc) return o(a.finallyLoc);
          }
        }
      }
    }, abrupt:function (t, r) {
      for (let e = this.tryEntries.length - 1;e >= 0;--e) {
        const o = this.tryEntries[e];if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
          var i = o;break;
        }
      }i && ('break' === t || 'continue' === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);const a = i ? i.completion : {};return a.type = t, a.arg = r, i ? (this.method = 'next', this.next = i.finallyLoc, g) : this.complete(a);
    }, complete:function (t, r) {
      if ('throw' === t.type) throw t.arg;return 'break' === t.type || 'continue' === t.type ? this.next = t.arg : 'return' === t.type ? (this.rval = this.arg = t.arg, this.method = 'return', this.next = 'end') : 'normal' === t.type && r && (this.next = r), g;
    }, finish:function (t) {
      for (let r = this.tryEntries.length - 1;r >= 0;--r) {
        const e = this.tryEntries[r];if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), N(e), g;
      }
    }, catch:function (t) {
      for (let r = this.tryEntries.length - 1;r >= 0;--r) {
        const e = this.tryEntries[r];if (e.tryLoc === t) {
          const n = e.completion;if ('throw' === n.type) {
            var o = n.arg;N(e);
          } return o;
        }
      } throw Error('illegal catch attempt');
    }, delegateYield:function (r, e, n) {
      return this.delegate = { iterator:A(r), resultName:e, nextLoc:n }, 'next' === this.method && (this.arg = t), g;
    } }, r;
  } function a(t, r, e, n, o, i, a) {
    try {
      var c = t[i](a), u = c.value;
    } catch (t) {
      return void e(t);
    }c.done ? r(u) : Promise.resolve(u).then(n, o);
  } const c = function () {
    let t, r = (t = i().mark((function t() {
      let r;return i().wrap(((t) =>{
        for (;;) switch (t.prev = t.next) {
        case 0:if ('serviceWorker' in navigator) {
          t.next = 3;break;
        } return console.log('Service Worker not supported in the browser'), t.abrupt('return');case 3:return r = new n.JK('./sw.bundle.js'), t.prev = 4, t.next = 7, r.register();case 7:console.log('Service worker registered'), t.next = 13;break;case 10:t.prev = 10, t.t0 = t.catch(4), console.log('Failed to register service worker', t.t0);case 13:case 'end':return t.stop();
        }
      }), t, null, [[4, 10]]);
    })), function () {
      const r = this, e = arguments;return new Promise(((n, o) =>{
        const i = t.apply(r, e);function c(t) {
          a(i, n, o, c, u, 'next', t);
        } function u(t) {
          a(i, n, o, c, u, 'throw', t);
        }c(void 0);
      }));
    });return function () {
      return r.apply(this, arguments);
    };
  }();
} }]);
//# sourceMappingURL=app~e4317507.bundle.js.map