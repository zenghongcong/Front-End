! function() {
	var t, e, r, n, i, a, s, o, l, u, c, h, f, g, d, p, v, m, x, y, b, _, w, k, C, S, A, T, I, B, P, L, M, R, N, F, E, O, D, G, z, V, j, U, Y, q, W, H, X, $, Z, J, Q, K, te, ee, re, ne, ie, ae, se, oe, le, ue, ce, he, fe, ge, de, pe, ve, me, xe, ye, be, _e, we, ke, Ce, Se, Ae, Te, Ie, Be, Pe;
	t = function(t) {
		function e(t, e) {
			var r = t.length,
				n = t[0];
			if (e < t[0]) return a;
			if (e >= t[r - 1]) return t[r - 1];
			for (var i = 1; i < t.length && !(e < t[i]); i++) n = t[i];
			return n
		}

		function r(t, e) {
			var r, n = t.length,
				i = t[0];
			if (e > t[n - 1]) return a;
			if (e < t[0]) return t[0];
			for (var s = 1; s < t.length; s++) {
				if (e <= t[s]) {
					r = t[s];
					break
				}
				i = t[s]
			}
			return r
		}

		function n(t, e) {
			var r = e.toString(),
				n = r.indexOf(".");
			if (-1 == n) return parseInt(t);
			var i = r.substr(n + 1).length;
			return parseFloat(t.toFixed(i))
		}

		function i(t, e, r) {
			r = r || 0;
			for (var n in e)
				if (e.hasOwnProperty(n)) {
					var a = e[n];
					null !== a && u.isObject(a) ? (u.isObject(t[n]) || (t[n] = {}), l > r ? i(t[n], e[n]) : t[n] = e[n]) : u.isArray(a) ? (t[n] = [], t[n] = t[n].concat(a)) : void 0 !== a && (t[n] = e[n])
				}
		}
		var a = 0 / 0,
			s = Object.prototype,
			o = s.toString,
			l = 5,
			u = {
				substitute: function(t, e) {
					return t && e ? t.replace(/\\?\{([^{}]+)\}/g, function(t, r) {
						return "\\" === t.charAt(0) ? t.slice(1) : void 0 === e[r] ? "" : e[r]
					}) : t
				},
				ucfirst: function(t) {
					return t += "", t.charAt(0).toUpperCase() + t.substring(1)
				},
				isString: function(t) {
					return "string" == typeof t
				},
				isNumber: function(t) {
					return "number" == typeof t
				},
				isNumeric: function(t) {
					return !isNaN(parseFloat(t)) && isFinite(t)
				},
				isBoolean: function(t) {
					return "boolean" == typeof t
				},
				isFunction: function(t) {
					return "function" == typeof t
				},
				isArray: "isArray" in Array ? Array.isArray : function(t) {
					return "[object Array]" === o.call(t)
				},
				isDate: function(t) {
					return "[object Date]" === o.call(t)
				},
				isObject: "[object Object]" === o.call(null) ? function(t) {
					return null !== t && void 0 !== t && "[object Object]" === o.call(t) && void 0 === t.ownerDocument
				} : function(t) {
					return "[object Object]" === o.call(t)
				},
				extend: function(t, e, r, n) {
					u.isFunction(e) || (r = e, e = t, t = function() {});
					var i = Object.create ? function(t, e) {
							return Object.create(t, {
								constructor: {
									value: e
								}
							})
						} : function(t, e) {
							function r() {}
							r.prototype = t;
							var n = new r;
							return n.constructor = e, n
						},
						a = i(e.prototype, t);
					return t.prototype = u.mix(a, t.prototype), t.superclass = i(e.prototype, e), u.mix(a, r), u.mix(t, n), t
				},
				augment: function(t) {
					for (var e = u.toArray(arguments), r = 1; r < e.length; r++) {
						var n = e[r];
						u.isFunction(n) && (n = n.prototype), u.mix(t.prototype, n)
					}
				},
				toArray: function(t) {
					if (!t || !t.length) return [];
					if (u.vml) {
						for (var e = [], r = 0; r < t.length; r++) e.push(t[r]);
						return e
					}
					return Array.prototype.slice.call(t)
				},
				mix: function() {
					var t = u.toArray(arguments),
						e = t[0];
					if (1 == e) {
						e = t[1];
						for (var r = 2; r < t.length; r++) {
							var n = t[r];
							i(e, n)
						}
					} else
						for (var r = 1; r < t.length; r++) {
							var n = t[r];
							for (var a in n) n.hasOwnProperty(a) && "constructor" != a && (e[a] = n[a])
						}
					return e
				},
				mixin: function(t, e) {
					if (t && e) {
						t._mixins = e, t.ATTRS = t.ATTRS || {};
						var r = {};
						u.each(e, function(e) {
							u.augment(t, e);
							var n = e.ATTRS;
							n && u.mix(r, n)
						}), t.ATTRS = u.mix(r, t.ATTRS)
					}
				},
				map: function(t, e) {
					var r = [];
					return u.each(t, function(t, n) {
						r.push(e(t, n))
					}), r
				},
				filter: function(t, e) {
					var r = [];
					return u.each(t, function(t, n) {
						e(t, n) && r.push(t)
					}), r
				},
				each: function(t, e) {
					if (t)
						if (u.isObject(t)) {
							for (var r in t)
								if (t.hasOwnProperty(r)) {
									var n = e(t[r], r);
									if (0 == n) break
								}
						} else if (t.length)
						for (var i = 0; i < t.length; i++) {
							var n = e(t[i], i);
							if (0 == n) break
						}
				},
				requestAnimationFrame: function(t) {
					var e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
						return setTimeout(t, 16)
					};
					return e(t)
				},
				cancelAnimationFrame: function(t) {
					var e = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || function(t) {
						return clearTimeout(t)
					};
					return e(t)
				},
				guid: function() {
					var t = {};
					return function(e) {
						return e = e || "acharts", t[e] ? t[e] += 1 : t[e] = 1, e + t[e]
					}
				}(),
				indexOf: function(t, e) {
					var r = Array.prototype.indexOf;
					if (r) return r.call(t, e);
					for (var n = -1, i = 0; i < t.length; i++)
						if (t[i] == e) {
							n = i;
							break
						}
					return n
				},
				remove: function(t, e) {
					var r = u.indexOf(t, e); - 1 !== r && t.splice(r, 1)
				},
				empty: function(t) {
					if (!(t instanceof Array))
						for (var e = t.length - 1; e >= 0; e--) delete t[e];
					t.length = 0
				},
				equalsArray: function(t, e) {
					if (t == e) return !0;
					if (!t || !e) return !1;
					if (t.length != e.length) return !1;
					for (var r = !0, n = 0; n < t.length; n++)
						if (t[n] !== e[n]) {
							r = !1;
							break
						}
					return r
				},
				wrapBehavior: function(t, e) {
					return t["_wrap_" + e] = function(r) {
						t[e](r)
					}
				},
				getWrapBehavior: function(t, e) {
					return t["_wrap_" + e]
				},
				snapTo: function(t, n, i) {
					if (i) return Raphael.snapTo(t, n, i);
					var a = e(t, n),
						s = r(t, n);
					if (isNaN(a) || isNaN(s)) {
						if (t[0] >= n) return t[0];
						var o = t[t.length - 1];
						if (n >= o) return o
					}
					return Math.abs(n - a) < Math.abs(s - n) ? a : s
				},
				snapFloor: function(t, r) {
					return e(t, r)
				},
				snapCeiling: function(t, e) {
					return r(t, e)
				},
				tryFixed: function(t, e) {
					return n(t, e)
				}
			};
		return t = u
	}(), e = function(t) {
		var e = Array,
			r = {
				create: function(t, r) {
					var n = new e(2);
					return n[0] = t || 0, n[1] = r || 0, n
				},
				copy: function(t, e) {
					return t[0] = e[0], t[1] = e[1], t
				},
				clone: function(t) {
					var r = new e(2);
					return r[0] = t[0], r[1] = t[1], r
				},
				set: function(t, e, r) {
					return t[0] = e, t[1] = r, t
				},
				add: function(t, e, r) {
					return t[0] = e[0] + r[0], t[1] = e[1] + r[1], t
				},
				scaleAndAdd: function(t, e, r, n) {
					return t[0] = e[0] + r[0] * n, t[1] = e[1] + r[1] * n, t
				},
				sub: function(t, e, r) {
					return t[0] = e[0] - r[0], t[1] = e[1] - r[1], t
				},
				len: function(t) {
					return Math.sqrt(this.lenSquare(t))
				},
				lenSquare: function(t) {
					return t[0] * t[0] + t[1] * t[1]
				},
				mul: function(t, e, r) {
					return t[0] = e[0] * r[0], t[1] = e[1] * r[1], t
				},
				div: function(t, e, r) {
					return t[0] = e[0] / r[0], t[1] = e[1] / r[1], t
				},
				dot: function(t, e) {
					return t[0] * e[0] + t[1] * e[1]
				},
				scale: function(t, e, r) {
					return t[0] = e[0] * r, t[1] = e[1] * r, t
				},
				normalize: function(t, e) {
					var n = r.len(e);
					return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t
				},
				distance: function(t, e) {
					return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
				},
				distanceSquare: function(t, e) {
					return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
				},
				negate: function(t, e) {
					return t[0] = -e[0], t[1] = -e[1], t
				},
				lerp: function(t, e, r, n) {
					return t[0] = e[0] + n * (r[0] - e[0]), t[1] = e[1] + n * (r[1] - e[1]), t
				},
				applyTransform: function(t, e, r) {
					var n = e[0],
						i = e[1];
					return t[0] = r[0] * n + r[2] * i + r[4], t[1] = r[1] * n + r[3] * i + r[5], t
				},
				min: function(t, e, r) {
					return t[0] = Math.min(e[0], r[0]), t[1] = Math.min(e[1], r[1]), t
				},
				max: function(t, e, r) {
					return t[0] = Math.max(e[0], r[0]), t[1] = Math.max(e[1], r[1]), t
				}
			};
		return r.length = r.len, r.lengthSquare = r.lenSquare, r.dist = r.distance, r.distSquare = r.distanceSquare, t = r
	}(), r = function(t) {
		var e, r, n = window,
			i = "0.4.2",
			a = "hasOwnProperty",
			s = /[\.\/]/,
			o = "*",
			l = function() {},
			u = function(t, e) {
				return t - e
			},
			c = {
				n: {}
			},
			h = function(t, n) {
				t = String(t);
				var i, a = r,
					s = Array.prototype.slice.call(arguments, 2),
					o = h.listeners(t),
					l = 0,
					c = [],
					f = {},
					g = [],
					d = e;
				e = t, r = 0;
				for (var p = 0, v = o.length; v > p; p++) "zIndex" in o[p] && (c.push(o[p].zIndex), o[p].zIndex < 0 && (f[o[p].zIndex] = o[p]));
				for (c.sort(u); c[l] < 0;)
					if (i = f[c[l++]], g.push(i.apply(n, s)), r) return r = a, g;
				for (p = 0; v > p; p++)
					if (i = o[p], "zIndex" in i)
						if (i.zIndex == c[l]) {
							if (g.push(i.apply(n, s)), r) break;
							do
								if (l++, i = f[c[l]], i && g.push(i.apply(n, s)), r) break;
							while (i)
						} else f[i.zIndex] = i;
				else if (g.push(i.apply(n, s)), r) break;
				return r = a, e = d, g.length ? g : null
			};
		return h._events = c, h.listeners = function(t) {
			var e, r, n, i, a, l, u, h, f = t.split(s),
				g = c,
				d = [g],
				p = [];
			for (i = 0, a = f.length; a > i; i++) {
				for (h = [], l = 0, u = d.length; u > l; l++)
					for (g = d[l].n, r = [g[f[i]], g[o]], n = 2; n--;) e = r[n], e && (h.push(e), p = p.concat(e.f || []));
				d = h
			}
			return p
		}, h.on = function(t, e) {
			if (t = String(t), "function" != typeof e) return function() {};
			for (var r = t.split(s), n = c, i = 0, a = r.length; a > i; i++) n = n.n, n = n.hasOwnProperty(r[i]) && n[r[i]] || (n[r[i]] = {
				n: {}
			});
			for (n.f = n.f || [], i = 0, a = n.f.length; a > i; i++)
				if (n.f[i] == e) return l;
			return n.f.push(e),
				function(t) {
					+t == +t && (e.zIndex = +t)
				}
		}, h.f = function(t) {
			var e = [].slice.call(arguments, 1);
			return function() {
				h.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
			}
		}, h.stop = function() {
			r = 1
		}, h.nt = function(t) {
			return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
		}, h.nts = function() {
			return e.split(s)
		}, h.off = h.unbind = function(t, e) {
			if (!t) return void(h._events = c = {
				n: {}
			});
			var r, n, i, l, u, f, g, d = t.split(s),
				p = [c];
			for (l = 0, u = d.length; u > l; l++)
				for (f = 0; f < p.length; f += i.length - 2) {
					if (i = [f, 1], r = p[f].n, d[l] != o) r[d[l]] && i.push(r[d[l]]);
					else
						for (n in r) r[a](n) && i.push(r[n]);
					p.splice.apply(p, i)
				}
			for (l = 0, u = p.length; u > l; l++)
				for (r = p[l]; r.n;) {
					if (e) {
						if (r.f) {
							for (f = 0, g = r.f.length; g > f; f++)
								if (r.f[f] == e) {
									r.f.splice(f, 1);
									break
								}!r.f.length && delete r.f
						}
						for (n in r.n)
							if (r.n[a](n) && r.n[n].f) {
								var v = r.n[n].f;
								for (f = 0, g = v.length; g > f; f++)
									if (v[f] == e) {
										v.splice(f, 1);
										break
									}!v.length && delete r.n[n].f
							}
					} else {
						delete r.f;
						for (n in r.n) r.n[a](n) && r.n[n].f && delete r.n[n].f
					}
					r = r.n
				}
		}, h.once = function(t, e) {
			var r = function() {
				return h.unbind(t, r), e.apply(this, arguments)
			};
			return h.on(t, r)
		}, h.version = i, h.toString = function() {
			return "You are running Eve " + i
		}, n.eve = h, t = h
	}(), n = function(t) {
		function e(t) {
			return t instanceof Date ? t : new Date(t)
		}

		function r(t, e, r) {
			var n = new Date(r);
			switch (isNaN(n) && (n = new Date), e = parseInt(e, 10), t) {
				case "s":
					n = new Date(n.getTime() + 1e3 * e);
					break;
				case "n":
					n = new Date(n.getTime() + 6e4 * e);
					break;
				case "h":
					n = new Date(n.getTime() + 36e5 * e);
					break;
				case "d":
					n = new Date(n.getTime() + 864e5 * e);
					break;
				case "w":
					n = new Date(n.getTime() + 6048e5 * e);
					break;
				case "m":
					n = new Date(n.getFullYear(), n.getMonth() + e, n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds());
					break;
				case "y":
					n = new Date(n.getFullYear() + e, n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds())
			}
			return n
		}
		var n = /^(?:(?!0000)[0-9]{4}([-/.]+)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-/.]?)0?2\2(?:29))(\s+([01]|([01][0-9]|2[0-3])):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9]))?$/,
			i = function() {
				var t = /w{1}|d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
					e = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
					r = /[^-+\dA-Z]/g,
					n = function(t, e) {
						for (t = String(t), e = e || 2; t.length < e;) t = "0" + t;
						return t
					},
					i = {
						"default": "ddd mmm dd yyyy HH:MM:ss",
						shortDate: "m/d/yy",
						longDate: "mmmm d, yyyy",
						fullDate: "dddd, mmmm d, yyyy",
						shortTime: "h:MM TT",
						longTime: "h:MM:ss TT Z",
						isoDate: "yyyy-mm-dd",
						isoTime: "HH:MM:ss",
						isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
						isoUTCDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
						localShortDate: "yy\u5e74mm\u6708dd\u65e5",
						localShortDateTime: "yy\u5e74mm\u6708dd\u65e5 hh:MM:ss TT",
						localLongDate: "yyyy\u5e74mm\u6708dd\u65e5",
						localLongDateTime: "yyyy\u5e74mm\u6708dd\u65e5 hh:MM:ss TT",
						localFullDate: "yyyy\u5e74mm\u6708dd\u65e5 w",
						localFullDateTime: "yyyy\u5e74mm\u6708dd\u65e5 w hh:MM:ss TT"
					},
					a = {
						dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"],
						monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
					};
				return function(s, o, l) {
					if (1 !== arguments.length || "[object String]" !== Object.prototype.toString.call(s) || /\d/.test(s) || (o = s, s = void 0), s = s ? new Date(s) : new Date, isNaN(s)) throw SyntaxError("invalid date");
					o = String(i[o] || o || i["default"]), "UTC:" === o.slice(0, 4) && (o = o.slice(4), l = !0);
					var u = l ? "getUTC" : "get",
						c = s[u + "Date"](),
						h = s[u + "Day"](),
						f = s[u + "Month"](),
						g = s[u + "FullYear"](),
						d = s[u + "Hours"](),
						p = s[u + "Minutes"](),
						v = s[u + "Seconds"](),
						m = s[u + "Milliseconds"](),
						x = l ? 0 : s.getTimezoneOffset(),
						y = {
							d: c,
							dd: n(c, void 0),
							ddd: a.dayNames[h],
							dddd: a.dayNames[h + 7],
							w: a.dayNames[h + 14],
							m: f + 1,
							mm: n(f + 1, void 0),
							mmm: a.monthNames[f],
							mmmm: a.monthNames[f + 12],
							yy: String(g).slice(2),
							yyyy: g,
							h: d % 12 || 12,
							hh: n(d % 12 || 12, void 0),
							H: d,
							HH: n(d, void 0),
							M: p,
							MM: n(p, void 0),
							s: v,
							ss: n(v, void 0),
							l: n(m, 3),
							L: n(m > 99 ? Math.round(m / 10) : m, void 0),
							t: 12 > d ? "a" : "p",
							tt: 12 > d ? "am" : "pm",
							T: 12 > d ? "A" : "P",
							TT: 12 > d ? "AM" : "PM",
							Z: l ? "UTC" : (String(s).match(e) || [""]).pop().replace(r, ""),
							o: (x > 0 ? "-" : "+") + n(100 * Math.floor(Math.abs(x) / 60) + Math.abs(x) % 60, 4),
							S: ["th", "st", "nd", "rd"][c % 10 > 3 ? 0 : (c % 100 - c % 10 !== 10) * c % 10]
						};
					return o.replace(t, function(t) {
						return t in y ? y[t] : t.slice(1, t.length - 1)
					})
				}
			}(),
			a = {
				add: function(t, e, n) {
					return r(t, e, n)
				},
				addHour: function(t, e) {
					return r("h", t, e)
				},
				addMinute: function(t, e) {
					return r("n", t, e)
				},
				addSecond: function(t, e) {
					return r("s", t, e)
				},
				addDay: function(t, e) {
					return r("d", t, e)
				},
				addWeek: function(t, e) {
					return r("w", t, e)
				},
				addMonths: function(t, e) {
					return r("m", t, e)
				},
				addYear: function(t, e) {
					return r("y", t, e)
				},
				isDateEquals: function(t, e) {
					return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()
				},
				isEquals: function(t, e) {
					return t == e ? !0 : t && e && t.getTime && e.getTime ? t.getTime() == e.getTime() : !1
				},
				isDateString: function(t) {
					return n.test(t)
				},
				format: function(t, e, r) {
					return i(t, e, r)
				},
				parse: function(t) {
					return "string" == typeof t && (t = t.replace(/-/g, "/")), e(t)
				},
				today: function() {
					var t = new Date;
					return new Date(t.getFullYear(), t.getMonth(), t.getDate())
				},
				getDate: function(t) {
					return new Date(t.getFullYear(), t.getMonth(), t.getDate())
				}
			};
		return t = a
	}(), i = function(t) {
		return function(e) {
			var r, n, i = "0.4.2",
				a = "hasOwnProperty",
				s = /[\.\/]/,
				o = "*",
				l = function() {},
				u = function(t, e) {
					return t - e
				},
				c = {
					n: {}
				},
				h = function(t, e) {
					t = String(t);
					var i, a = n,
						s = Array.prototype.slice.call(arguments, 2),
						o = h.listeners(t),
						l = 0,
						c = [],
						f = {},
						g = [],
						d = r;
					r = t, n = 0;
					for (var p = 0, v = o.length; v > p; p++) "zIndex" in o[p] && (c.push(o[p].zIndex), o[p].zIndex < 0 && (f[o[p].zIndex] = o[p]));
					for (c.sort(u); c[l] < 0;)
						if (i = f[c[l++]], g.push(i.apply(e, s)), n) return n = a, g;
					for (p = 0; v > p; p++)
						if (i = o[p], "zIndex" in i)
							if (i.zIndex == c[l]) {
								if (g.push(i.apply(e, s)), n) break;
								do
									if (l++, i = f[c[l]], i && g.push(i.apply(e, s)), n) break;
								while (i)
							} else f[i.zIndex] = i;
					else if (g.push(i.apply(e, s)), n) break;
					return n = a, r = d, g.length ? g : null
				};
			h._events = c, h.listeners = function(t) {
				var e, r, n, i, a, l, u, h, f = t.split(s),
					g = c,
					d = [g],
					p = [];
				for (i = 0, a = f.length; a > i; i++) {
					for (h = [], l = 0, u = d.length; u > l; l++)
						for (g = d[l].n, r = [g[f[i]], g[o]], n = 2; n--;) e = r[n], e && (h.push(e), p = p.concat(e.f || []));
					d = h
				}
				return p
			}, h.on = function(t, e) {
				if (t = String(t), "function" != typeof e) return function() {};
				for (var r = t.split(s), n = c, i = 0, a = r.length; a > i; i++) n = n.n, n = n.hasOwnProperty(r[i]) && n[r[i]] || (n[r[i]] = {
					n: {}
				});
				for (n.f = n.f || [], i = 0, a = n.f.length; a > i; i++)
					if (n.f[i] == e) return l;
				return n.f.push(e),
					function(t) {
						+t == +t && (e.zIndex = +t)
					}
			}, h.f = function(t) {
				var e = [].slice.call(arguments, 1);
				return function() {
					h.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
				}
			}, h.stop = function() {
				n = 1
			}, h.nt = function(t) {
				return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(r) : r
			}, h.nts = function() {
				return r.split(s)
			}, h.off = h.unbind = function(t, e) {
				if (!t) return void(h._events = c = {
					n: {}
				});
				var r, n, i, l, u, f, g, d = t.split(s),
					p = [c];
				for (l = 0, u = d.length; u > l; l++)
					for (f = 0; f < p.length; f += i.length - 2) {
						if (i = [f, 1], r = p[f].n, d[l] != o) r[d[l]] && i.push(r[d[l]]);
						else
							for (n in r) r[a](n) && i.push(r[n]);
						p.splice.apply(p, i)
					}
				for (l = 0, u = p.length; u > l; l++)
					for (r = p[l]; r.n;) {
						if (e) {
							if (r.f) {
								for (f = 0, g = r.f.length; g > f; f++)
									if (r.f[f] == e) {
										r.f.splice(f, 1);
										break
									}!r.f.length && delete r.f
							}
							for (n in r.n)
								if (r.n[a](n) && r.n[n].f) {
									var v = r.n[n].f;
									for (f = 0, g = v.length; g > f; f++)
										if (v[f] == e) {
											v.splice(f, 1);
											break
										}!v.length && delete r.n[n].f
								}
						} else {
							delete r.f;
							for (n in r.n) r.n[a](n) && r.n[n].f && delete r.n[n].f
						}
						r = r.n
					}
			}, h.once = function(t, e) {
				var r = function() {
					return h.unbind(t, r), e.apply(this, arguments)
				};
				return h.on(t, r)
			}, h.version = i, h.toString = function() {
				return "You are running Eve " + i
			}, e.eve = h, t = h
		}(this), t
	}(), a = function(e) {
		var r = t;
		return e = r
	}(), s = function(t) {
		var n = e;
		return function(t, e) {
			var n = r;
			e(t, n)
		}(this, function(t, e) {
			function r(t) {
				if (r.is(t, "function")) return w ? t() : e.on("raphael.DOMload", t);
				if (r.is(t, $)) return r._engine.create[L](r, t.splice(0, 3 + r.is(t[0], H))).add(t);
				var n = Array.prototype.slice.call(arguments, 0);
				if (r.is(n[n.length - 1], "function")) {
					var i = n.pop();
					return w ? i.call(r._engine.create[L](r, n)) : e.on("raphael.DOMload", function() {
						i.call(r._engine.create[L](r, n))
					})
				}
				return r._engine.create[L](r, arguments)
			}

			function i(t) {
				if ("function" == typeof t || Object(t) !== t) return t;
				var e = new t.constructor;
				for (var r in t) t[T](r) && (e[r] = i(t[r]));
				return e
			}

			function a(t, e) {
				for (var r = 0, n = t.length; n > r; r++)
					if (t[r] === e) return t.push(t.splice(r, 1)[0])
			}

			function s(t, e, r) {
				function n() {
					var i = Array.prototype.slice.call(arguments, 0),
						s = i.join("\u2400"),
						o = n.cache = n.cache || {},
						l = n.count = n.count || [];
					return o[T](s) ? (a(l, s), r ? r(o[s]) : o[s]) : (l.length >= 1e3 && delete o[l.shift()], l.push(s), o[s] = t[L](e, i), r ? r(o[s]) : o[s])
				}
				return n
			}

			function o() {
				return this.hex
			}

			function l(t, e, r, i) {
				var a, s, o, l, u = [],
					c = [],
					h = [],
					f = [],
					g = !!i;
				if (g) {
					o = [1 / 0, 1 / 0], l = [-1 / 0, -1 / 0];
					for (var d = 0, p = t.length; p > d; d++) n.min(o, o, t[d]), n.max(l, l, t[d]);
					n.min(o, o, i[0]), n.max(l, l, i[1])
				}
				for (var d = 0, p = t.length; p > d; d++) {
					var v = t[d];
					if (r) a = t[d ? d - 1 : p - 1], s = t[(d + 1) % p];
					else {
						if (0 === d || d === p - 1) {
							u.push(n.clone(t[d]));
							continue
						}
						a = t[d - 1], s = t[d + 1]
					}
					n.sub(c, s, a), n.scale(c, c, e);
					var m = n.distance(v, a),
						x = n.distance(v, s),
						y = m + x;
					0 !== y && (m /= y, x /= y), n.scale(h, c, -m), n.scale(f, c, x);
					var b = n.add([], v, h),
						_ = n.add([], v, f);
					g && (n.max(b, b, o), n.min(b, b, l), n.max(_, _, o), n.min(_, _, l)), u.push(b), u.push(_)
				}
				return r && u.push(n.clone(u.shift())), u
			}

			function u(t, e) {
				for (var r = !!e, i = [], a = 0; a < t.length; a += 2) i.push(n.create(t[a], t[a + 1]));
				var s;
				! function() {
					s = this.top.__ACharts__smoothProtect ? l(i, .4, r, [
						[0, 0],
						[100, 100]
					]) : l(i, .4, r)
				}();
				for (var o, u, c, h = i.length, f = [], a = 0; h - 1 > a; a++) o = s[2 * a], u = s[2 * a + 1], c = i[a + 1], f.push(["C", o[0], o[1], u[0], u[1], c[0], c[1]]);
				return r && (o = s[h], u = s[h + 1], c = i[0], f.push(["C", o[0], o[1], u[0], u[1], c[0], c[1]])), f
			}

			function c(t, e, r, n, i) {
				var a = -3 * e + 9 * r - 9 * n + 3 * i,
					s = t * a + 6 * e - 12 * r + 6 * n;
				return t * s - 3 * e + 3 * r
			}

			function h(t, e, r, n, i, a, s, o, l) {
				null == l && (l = 1), l = l > 1 ? 1 : 0 > l ? 0 : l;
				for (var u = l / 2, h = 12, f = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], g = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], d = 0, p = 0; h > p; p++) {
					var v = u * f[p] + u,
						m = c(v, t, r, i, s),
						x = c(v, e, n, a, o),
						y = m * m + x * x;
					d += g[p] * V.sqrt(y)
				}
				return u * d
			}

			function f(t, e, r, n, i, a, s, o, l) {
				if (!(0 > l || h(t, e, r, n, i, a, s, o) < l)) {
					var u, c = 1,
						f = c / 2,
						g = c - f,
						d = .01;
					for (u = h(t, e, r, n, i, a, s, o, g); Y(u - l) > d;) f /= 2, g += (l > u ? 1 : -1) * f, u = h(t, e, r, n, i, a, s, o, g);
					return g
				}
			}

			function g(t, e, r, n, i, a, s, o) {
				if (!(j(t, r) < U(i, s) || U(t, r) > j(i, s) || j(e, n) < U(a, o) || U(e, n) > j(a, o))) {
					var l = (t * n - e * r) * (i - s) - (t - r) * (i * o - a * s),
						u = (t * n - e * r) * (a - o) - (e - n) * (i * o - a * s),
						c = (t - r) * (a - o) - (e - n) * (i - s);
					if (c) {
						var h = l / c,
							f = u / c,
							g = +h.toFixed(2),
							d = +f.toFixed(2);
						if (!(g < +U(t, r).toFixed(2) || g > +j(t, r).toFixed(2) || g < +U(i, s).toFixed(2) || g > +j(i, s).toFixed(2) || d < +U(e, n).toFixed(2) || d > +j(e, n).toFixed(2) || d < +U(a, o).toFixed(2) || d > +j(a, o).toFixed(2))) return {
							x: h,
							y: f
						}
					}
				}
			}

			function d(t, e, n) {
				var i = r.bezierBBox(t),
					a = r.bezierBBox(e);
				if (!r.isBBoxIntersect(i, a)) return n ? 0 : [];
				for (var s = h.apply(0, t), o = h.apply(0, e), l = j(~~(s / 5), 1), u = j(~~(o / 5), 1), c = [], f = [], d = {}, p = n ? 0 : [], v = 0; l + 1 > v; v++) {
					var m = r.findDotsAtSegment.apply(r, t.concat(v / l));
					c.push({
						x: m.x,
						y: m.y,
						t: v / l
					})
				}
				for (v = 0; u + 1 > v; v++) m = r.findDotsAtSegment.apply(r, e.concat(v / u)), f.push({
					x: m.x,
					y: m.y,
					t: v / u
				});
				for (v = 0; l > v; v++)
					for (var x = 0; u > x; x++) {
						var y = c[v],
							b = c[v + 1],
							_ = f[x],
							w = f[x + 1],
							k = Y(b.x - y.x) < .001 ? "y" : "x",
							C = Y(w.x - _.x) < .001 ? "y" : "x",
							S = g(y.x, y.y, b.x, b.y, _.x, _.y, w.x, w.y);
						if (S) {
							if (d[S.x.toFixed(4)] == S.y.toFixed(4)) continue;
							d[S.x.toFixed(4)] = S.y.toFixed(4);
							var A = y.t + Y((S[k] - y[k]) / (b[k] - y[k])) * (b.t - y.t),
								T = _.t + Y((S[C] - _[C]) / (w[C] - _[C])) * (w.t - _.t);
							A >= 0 && 1.001 >= A && T >= 0 && 1.001 >= T && (n ? p++ : p.push({
								x: S.x,
								y: S.y,
								t1: U(A, 1),
								t2: U(T, 1)
							}))
						}
					}
				return p
			}

			function p(t, e, n) {
				t = r._path2curve(t), e = r._path2curve(e);
				for (var i, a, s, o, l, u, c, h, f, g, p = n ? 0 : [], v = 0, m = t.length; m > v; v++) {
					var x = t[v];
					if ("M" == x[0]) i = l = x[1], a = u = x[2];
					else {
						"C" == x[0] ? (f = [i, a].concat(x.slice(1)), i = f[6], a = f[7]) : (f = [i, a, i, a, l, u, l, u], i = l, a = u);
						for (var y = 0, b = e.length; b > y; y++) {
							var _ = e[y];
							if ("M" == _[0]) s = c = _[1], o = h = _[2];
							else {
								"C" == _[0] ? (g = [s, o].concat(_.slice(1)), s = g[6], o = g[7]) : (g = [s, o, s, o, c, h, c, h], s = c, o = h);
								var w = d(f, g, n);
								if (n) p += w;
								else {
									for (var k = 0, C = w.length; C > k; k++) w[k].segment1 = v, w[k].segment2 = y, w[k].bez1 = f, w[k].bez2 = g;
									p = p.concat(w)
								}
							}
						}
					}
				}
				return p
			}

			function v(t, e, r, n, i, a) {
				null != t ? (this.a = +t, this.b = +e, this.c = +r, this.d = +n, this.e = +i, this.f = +a) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
			}

			function m() {
				return this.x + F + this.y + F + this.width + " \xd7 " + this.height
			}

			function x(t, e, r, n, i, a) {
				function s(t) {
					return ((h * t + c) * t + u) * t
				}

				function o(t, e) {
					var r = l(t, e);
					return ((d * r + g) * r + f) * r
				}

				function l(t, e) {
					var r, n, i, a, o, l;
					for (i = t, l = 0; 8 > l; l++) {
						if (a = s(i) - t, Y(a) < e) return i;
						if (o = (3 * h * i + 2 * c) * i + u, Y(o) < 1e-6) break;
						i -= a / o
					}
					if (r = 0, n = 1, i = t, r > i) return r;
					if (i > n) return n;
					for (; n > r;) {
						if (a = s(i), Y(a - t) < e) return i;
						t > a ? r = i : n = i, i = (n - r) / 2 + r
					}
					return i
				}
				var u = 3 * e,
					c = 3 * (n - e) - u,
					h = 1 - u - c,
					f = 3 * r,
					g = 3 * (i - r) - f,
					d = 1 - f - g;
				return o(t, 1 / (200 * a))
			}

			function y(t, e) {
				var r = [],
					n = {};
				if (this.ms = e, this.times = 1, t) {
					for (var i in t) t[T](i) && (n[ee(i)] = t[i], r.push(ee(i)));
					r.sort(ge)
				}
				this.anim = n, this.top = r[r.length - 1], this.percents = r
			}

			function b(t, n, i, a, s, o) {
				i = ee(i);
				var l, u, c, h, f, g, d = t.ms,
					p = {},
					m = {},
					y = {};
				if (a)
					for (_ = 0, w = cr.length; w > _; _++) {
						var b = cr[_];
						if (b.el.id == n.id && b.anim == t) {
							b.percent != i ? (cr.splice(_, 1), c = 1) : u = b, n.attr(b.totalOrigin);
							break
						}
					} else a = +m;
				for (var _ = 0, w = t.percents.length; w > _; _++) {
					if (t.percents[_] == i || t.percents[_] > a * t.top) {
						i = t.percents[_], f = t.percents[_ - 1] || 0, d = d / t.top * (i - f), h = t.percents[_ + 1], l = t.anim[i];
						break
					}
					a && n.attr(t.anim[t.percents[_]])
				}
				if (l) {
					if (u) u.initstatus = a, u.start = new Date - u.ms * a;
					else {
						for (var k in l)
							if (l[T](k) && (ae[T](k) || n.paper.customAttributes[T](k))) switch (p[k] = n.attr(k), null == p[k] && (p[k] = ie[k]), m[k] = l[k], ae[k]) {
								case H:
									y[k] = (m[k] - p[k]) / d;
									break;
								case "colour":
									p[k] = r.getRGB(p[k]);
									var S = r.getRGB(m[k]);
									y[k] = {
										r: (S.r - p[k].r) / d,
										g: (S.g - p[k].g) / d,
										b: (S.b - p[k].b) / d
									};
									break;
								case "path":
									var A = De(p[k], m[k]),
										I = A[1];
									for (p[k] = A[0], y[k] = [], _ = 0, w = p[k].length; w > _; _++) {
										y[k][_] = [0];
										for (var B = 1, P = p[k][_].length; P > B; B++) y[k][_][B] = (I[_][B] - p[k][_][B]) / d
									}
									break;
								case "transform":
									var L = n._,
										R = Ue(L[k], m[k]);
									if (R)
										for (p[k] = R.from, m[k] = R.to, y[k] = [], y[k].real = !0, _ = 0, w = p[k].length; w > _; _++)
											for (y[k][_] = [p[k][_][0]], B = 1, P = p[k][_].length; P > B; B++) y[k][_][B] = (m[k][_][B] - p[k][_][B]) / d;
									else {
										var N = n.matrix || new v,
											F = {
												_: {
													transform: L.transform
												},
												getBBox: function() {
													return n.getBBox(1)
												}
											};
										p[k] = [N.a, N.b, N.c, N.d, N.e, N.f], Ve(F, m[k]), m[k] = F._.transform, y[k] = [(F.matrix.a - N.a) / d, (F.matrix.b - N.b) / d, (F.matrix.c - N.c) / d, (F.matrix.d - N.d) / d, (F.matrix.e - N.e) / d, (F.matrix.f - N.f) / d]
									}
									break;
								case "csv":
									var D = E(l[k])[O](C),
										G = E(p[k])[O](C);
									if ("clip-rect" == k || "clip-circle" == k || "clip-angle" == k)
										for (p[k] = G, y[k] = [], _ = G.length; _--;) y[k][_] = (D[_] - p[k][_]) / d;
									m[k] = D;
									break;
								default:
									for (D = [][M](l[k]), G = [][M](p[k]), y[k] = [], _ = n.paper.customAttributes[k].length; _--;) y[k][_] = ((D[_] || 0) - (G[_] || 0)) / d
							}
							var z = l.easing,
								V = r.easing_formulas[z];
						if (!V)
							if (V = E(z).match(K), V && 5 == V.length) {
								var j = V;
								V = function(t) {
									return x(t, +j[1], +j[2], +j[3], +j[4], d)
								}
							} else V = pe;
						if (g = l.start || t.start || +new Date, b = {
								anim: t,
								percent: i,
								timestamp: g,
								start: g + (t.del || 0),
								status: 0,
								initstatus: a || 0,
								stop: !1,
								ms: d,
								easing: V,
								from: p,
								diff: y,
								to: m,
								el: n,
								callback: l.callback,
								prev: f,
								next: h,
								repeat: o || t.times,
								origin: n.attr(),
								totalOrigin: s
							}, cr.push(b), a && !u && !c && (b.stop = !0, b.start = new Date - d * a, 1 == cr.length)) return fr();
						c && (b.start = new Date - b.ms * a), 1 == cr.length && hr(fr)
					}
					e("raphael.anim.start." + n.id, n, t)
				}
			}

			function _(t) {
				for (var e = 0; e < cr.length; e++) cr[e].el.paper == t && cr.splice(e--, 1)
			}
			r.version = "2.1.2", r.eve = e;
			var w, k, C = /[, ]+/,
				S = {
					circle: 1,
					rect: 1,
					path: 1,
					ellipse: 1,
					text: 1,
					image: 1
				},
				A = /\{(\d+)\}/g,
				T = "hasOwnProperty",
				I = {
					doc: document,
					win: t
				},
				B = {
					was: Object.prototype[T].call(I.win, "Raphael"),
					is: I.win.Raphael
				},
				P = function() {
					this.ca = this.customAttributes = {}
				},
				L = "apply",
				M = "concat",
				R = "ontouchstart" in I.win || I.win.DocumentTouch && I.doc instanceof DocumentTouch,
				N = "",
				F = " ",
				E = String,
				O = "split",
				D = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [O](F),
				G = {
					mousedown: "touchstart",
					mousemove: "touchmove",
					mouseup: "touchend"
				},
				z = E.prototype.toLowerCase,
				V = Math,
				j = V.max,
				U = V.min,
				Y = V.abs,
				q = V.pow,
				W = V.PI,
				H = "number",
				X = "string",
				$ = "array",
				Z = Object.prototype.toString,
				J = (r._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
				Q = {
					NaN: 1,
					Infinity: 1,
					"-Infinity": 1
				},
				K = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
				te = V.round,
				ee = parseFloat,
				re = parseInt,
				ne = E.prototype.toUpperCase,
				ie = r._availableAttrs = {
					"arrow-end": "none",
					"arrow-start": "none",
					blur: 0,
					"clip-rect": "0 0 1e9 1e9",
					"clip-angle": "0 0 1e9 1e9",
					"clip-circle": "0 0 1e9",
					cursor: "default",
					cx: 0,
					cy: 0,
					fill: "#fff",
					"fill-opacity": 1,
					font: '10px "Arial"',
					"font-family": '"Arial"',
					"font-size": "10",
					"font-style": "normal",
					"font-weight": 400,
					gradient: 0,
					height: 0,
					href: "http://raphaeljs.com/",
					"letter-spacing": 0,
					opacity: 1,
					path: "M0,0",
					r: 0,
					rx: 0,
					ry: 0,
					src: "",
					stroke: "#000",
					"stroke-dasharray": "",
					"stroke-linecap": "butt",
					"stroke-linejoin": "butt",
					"stroke-miterlimit": 0,
					"stroke-opacity": 1,
					"stroke-width": 1,
					target: "_blank",
					"text-anchor": "middle",
					title: "Raphael",
					transform: "",
					width: 0,
					x: 0,
					y: 0
				},
				ae = r._availableAnimAttrs = {
					blur: H,
					"clip-rect": "csv",
					"clip-angle": "csv",
					"clip-circle": "csv",
					cx: H,
					cy: H,
					fill: "colour",
					"fill-opacity": H,
					"font-size": H,
					height: H,
					opacity: H,
					path: "path",
					r: H,
					rx: H,
					ry: H,
					stroke: "colour",
					"stroke-opacity": H,
					"stroke-width": H,
					transform: "transform",
					width: H,
					x: H,
					y: H
				},
				se = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
				oe = {
					hs: 1,
					rg: 1
				},
				le = /,?([achlmqrstvxz]),?/gi,
				ue = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
				ce = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
				he = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
				fe = (r._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
				ge = function(t, e) {
					return ee(t) - ee(e)
				},
				de = function() {},
				pe = function(t) {
					return t
				},
				ve = r._rectPath = function(t, e, r, n, i) {
					return i ? [
						["M", t + i, e],
						["l", r - 2 * i, 0],
						["a", i, i, 0, 0, 1, i, i],
						["l", 0, n - 2 * i],
						["a", i, i, 0, 0, 1, -i, i],
						["l", 2 * i - r, 0],
						["a", i, i, 0, 0, 1, -i, -i],
						["l", 0, 2 * i - n],
						["a", i, i, 0, 0, 1, i, -i],
						["z"]
					] : [
						["M", t, e],
						["l", r, 0],
						["l", 0, n],
						["l", -r, 0],
						["z"]
					]
				},
				me = function(t, e, r, n) {
					return null == n && (n = r), [
						["M", t, e],
						["m", 0, -n],
						["a", r, n, 0, 1, 1, 0, 2 * n],
						["a", r, n, 0, 1, 1, 0, -2 * n],
						["z"]
					]
				},
				xe = r._getPath = {
					path: function(t) {
						return t.attr("path")
					},
					circle: function(t) {
						var e = t.attrs;
						return me(e.cx, e.cy, e.r)
					},
					ellipse: function(t) {
						var e = t.attrs;
						return me(e.cx, e.cy, e.rx, e.ry)
					},
					rect: function(t) {
						var e = t.attrs;
						return ve(e.x, e.y, e.width, e.height, e.r)
					},
					image: function(t) {
						var e = t.attrs;
						return ve(e.x, e.y, e.width, e.height)
					},
					text: function(t) {
						var e = t._getBBox();
						return ve(e.x, e.y, e.width, e.height)
					},
					set: function(t) {
						var e = t._getBBox();
						return ve(e.x, e.y, e.width, e.height)
					}
				},
				ye = r.mapPath = function(t, e) {
					if (!e) return t;
					var r, n, i, a, s, o, l;
					for (t = De(t), i = 0, s = t.length; s > i; i++)
						for (l = t[i], a = 1, o = l.length; o > a; a += 2) r = e.x(l[a], l[a + 1]), n = e.y(l[a], l[a + 1]), l[a] = r, l[a + 1] = n;
					return t
				};
			if (r._g = I, r.type = I.win.SVGAngle || I.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == r.type) {
				var be, _e = I.doc.createElement("div");
				if (_e.innerHTML = '<v:shape adj="1"/>', be = _e.firstChild, be.style.behavior = "url(#default#VML)", !be || "object" != typeof be.adj) return r.type = N;
				_e = null
			}
			r.svg = !(r.vml = "VML" == r.type), r._Paper = P, r.fn = k = P.prototype = r.prototype, r._id = 0, r._oid = 0, r.is = function(t, e) {
				return e = z.call(e), "finite" == e ? !Q[T](+t) : "array" == e ? t instanceof Array : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || Z.call(t).slice(8, -1).toLowerCase() == e
			}, r.angle = function(t, e, n, i, a, s) {
				if (null == a) {
					var o = t - n,
						l = e - i;
					return o || l ? (180 + 180 * V.atan2(-l, -o) / W + 360) % 360 : 0
				}
				return r.angle(t, e, a, s) - r.angle(n, i, a, s)
			}, r.rad = function(t) {
				return t % 360 * W / 180
			}, r.deg = function(t) {
				return 180 * t / W % 360
			}, r.snapTo = function(t, e, n) {
				if (n = r.is(n, "finite") ? n : 10, r.is(t, $)) {
					for (var i = t.length; i--;)
						if (Y(t[i] - e) <= n) return t[i]
				} else {
					t = +t;
					var a = e % t;
					if (n > a) return e - a;
					if (a > t - n) return e - a + t
				}
				return e
			};
			r.createUUID = function(t, e) {
				return function() {
					return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t, e).toUpperCase()
				}
			}(/[xy]/g, function(t) {
				var e = 16 * V.random() | 0,
					r = "x" == t ? e : 3 & e | 8;
				return r.toString(16)
			});
			r.setWindow = function(t) {
				e("raphael.setWindow", r, I.win, t), I.win = t, I.doc = I.win.document, r._engine.initWin && r._engine.initWin(I.win)
			};
			var we = function(t) {
					if (r.vml) {
						var e, n = /^\s+|\s+$/g;
						try {
							var i = new ActiveXObject("htmlfile");
							i.write("<body>"), i.close(), e = i.body
						} catch (a) {
							e = createPopup().document.body
						}
						var o = e.createTextRange();
						we = s(function(t) {
							try {
								e.style.color = E(t).replace(n, N);
								var r = o.queryCommandValue("ForeColor");
								return r = (255 & r) << 16 | 65280 & r | (16711680 & r) >>> 16, "#" + ("000000" + r.toString(16)).slice(-6)
							} catch (i) {
								return "none"
							}
						})
					} else {
						var l = I.doc.createElement("i");
						l.title = "Rapha\xebl Colour Picker", l.style.display = "none", I.doc.body.appendChild(l), we = s(function(t) {
							return l.style.color = t, I.doc.defaultView.getComputedStyle(l, N).getPropertyValue("color")
						})
					}
					return we(t)
				},
				ke = function() {
					return "hsb(" + [this.h, this.s, this.b] + ")"
				},
				Ce = function() {
					return "hsl(" + [this.h, this.s, this.l] + ")"
				},
				Se = function() {
					return this.hex
				},
				Ae = function(t, e, n) {
					if (null == e && r.is(t, "object") && "r" in t && "g" in t && "b" in t && (n = t.b, e = t.g, t = t.r), null == e && r.is(t, X)) {
						var i = r.getRGB(t);
						t = i.r, e = i.g, n = i.b
					}
					return (t > 1 || e > 1 || n > 1) && (t /= 255, e /= 255, n /= 255), [t, e, n]
				},
				Te = function(t, e, n, i) {
					t *= 255, e *= 255, n *= 255;
					var a = {
						r: t,
						g: e,
						b: n,
						hex: r.rgb(t, e, n),
						toString: Se
					};
					return r.is(i, "finite") && (a.opacity = i), a
				};
			r.color = function(t) {
				var e;
				return r.is(t, "object") && "h" in t && "s" in t && "b" in t ? (e = r.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : r.is(t, "object") && "h" in t && "s" in t && "l" in t ? (e = r.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : (r.is(t, "string") && (t = r.getRGB(t)), r.is(t, "object") && "r" in t && "g" in t && "b" in t ? (e = r.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = r.rgb2hsb(t), t.v = e.b) : (t = {
					hex: "none"
				}, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1)), t.toString = Se, t
			}, r.hsb2rgb = function(t, e, r, n) {
				this.is(t, "object") && "h" in t && "s" in t && "b" in t && (r = t.b, e = t.s, t = t.h, n = t.o), t *= 360;
				var i, a, s, o, l;
				return t = t % 360 / 60, l = r * e, o = l * (1 - Y(t % 2 - 1)), i = a = s = r - l, t = ~~t, i += [l, o, 0, 0, o, l][t], a += [o, l, l, o, 0, 0][t], s += [0, 0, o, l, l, o][t], Te(i, a, s, n)
			}, r.hsl2rgb = function(t, e, r, n) {
				this.is(t, "object") && "h" in t && "s" in t && "l" in t && (r = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || r > 1) && (t /= 360, e /= 100, r /= 100), t *= 360;
				var i, a, s, o, l;
				return t = t % 360 / 60, l = 2 * e * (.5 > r ? r : 1 - r), o = l * (1 - Y(t % 2 - 1)), i = a = s = r - l / 2, t = ~~t, i += [l, o, 0, 0, o, l][t], a += [o, l, l, o, 0, 0][t], s += [0, 0, o, l, l, o][t], Te(i, a, s, n)
			}, r.rgb2hsb = function(t, e, r) {
				r = Ae(t, e, r), t = r[0], e = r[1], r = r[2];
				var n, i, a, s;
				return a = j(t, e, r), s = a - U(t, e, r), n = 0 == s ? null : a == t ? (e - r) / s : a == e ? (r - t) / s + 2 : (t - e) / s + 4, n = (n + 360) % 6 * 60 / 360, i = 0 == s ? 0 : s / a, {
					h: n,
					s: i,
					b: a,
					toString: ke
				}
			}, r.rgb2hsl = function(t, e, r) {
				r = Ae(t, e, r), t = r[0], e = r[1], r = r[2];
				var n, i, a, s, o, l;
				return s = j(t, e, r), o = U(t, e, r), l = s - o, n = 0 == l ? null : s == t ? (e - r) / l : s == e ? (r - t) / l + 2 : (t - e) / l + 4, n = (n + 360) % 6 * 60 / 360, a = (s + o) / 2, i = 0 == l ? 0 : .5 > a ? l / (2 * a) : l / (2 - 2 * a), {
					h: n,
					s: i,
					l: a,
					toString: Ce
				}
			}, r._path2string = function() {
				return this.join(",").replace(le, "$1")
			};
			r._preload = function(t, e) {
				var r = I.doc.createElement("img");
				r.style.cssText = "position:absolute;left:-9999em;top:-9999em", r.onload = function() {
					e.call(this), this.onload = null, I.doc.body.removeChild(this)
				}, r.onerror = function() {
					I.doc.body.removeChild(this)
				}, I.doc.body.appendChild(r), r.src = t
			};
			r.getRGB = s(function(t) {
				if (!t || (t = E(t)).indexOf("-") + 1) return {
					r: -1,
					g: -1,
					b: -1,
					hex: "none",
					error: 1,
					toString: o
				};
				if ("none" == t) return {
					r: -1,
					g: -1,
					b: -1,
					hex: "none",
					toString: o
				};
				!(oe[T](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = we(t));
				var e, n, i, a, s, l, u = t.match(J);
				return u ? (u[2] && (i = re(u[2].substring(5), 16), n = re(u[2].substring(3, 5), 16), e = re(u[2].substring(1, 3), 16)), u[3] && (i = re((s = u[3].charAt(3)) + s, 16), n = re((s = u[3].charAt(2)) + s, 16), e = re((s = u[3].charAt(1)) + s, 16)), u[4] && (l = u[4][O](se), e = ee(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), n = ee(l[1]), "%" == l[1].slice(-1) && (n *= 2.55), i = ee(l[2]), "%" == l[2].slice(-1) && (i *= 2.55), "rgba" == u[1].toLowerCase().slice(0, 4) && (a = ee(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100)), u[5] ? (l = u[5][O](se), e = ee(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), n = ee(l[1]), "%" == l[1].slice(-1) && (n *= 2.55), i = ee(l[2]), "%" == l[2].slice(-1) && (i *= 2.55), ("deg" == l[0].slice(-3) || "\xb0" == l[0].slice(-1)) && (e /= 360), "hsba" == u[1].toLowerCase().slice(0, 4) && (a = ee(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100), r.hsb2rgb(e, n, i, a)) : u[6] ? (l = u[6][O](se), e = ee(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), n = ee(l[1]), "%" == l[1].slice(-1) && (n *= 2.55), i = ee(l[2]), "%" == l[2].slice(-1) && (i *= 2.55), ("deg" == l[0].slice(-3) || "\xb0" == l[0].slice(-1)) && (e /= 360), "hsla" == u[1].toLowerCase().slice(0, 4) && (a = ee(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100), r.hsl2rgb(e, n, i, a)) : (u = {
					r: e,
					g: n,
					b: i,
					toString: o
				}, u.hex = "#" + (16777216 | i | n << 8 | e << 16).toString(16).slice(1), r.is(a, "finite") && (u.opacity = a), u)) : {
					r: -1,
					g: -1,
					b: -1,
					hex: "none",
					error: 1,
					toString: o
				}
			}, r), r.hsb = s(function(t, e, n) {
				return r.hsb2rgb(t, e, n).hex
			}), r.hsl = s(function(t, e, n) {
				return r.hsl2rgb(t, e, n).hex
			}), r.rgb = s(function(t, e, r) {
				return "#" + (16777216 | r | e << 8 | t << 16).toString(16).slice(1)
			}), r.getColor = function(t) {
				var e = this.getColor.start = this.getColor.start || {
						h: 0,
						s: 1,
						b: t || .75
					},
					r = this.hsb2rgb(e.h, e.s, e.b);
				return e.h += .075, e.h > 1 && (e.h = 0, e.s -= .2, e.s <= 0 && (this.getColor.start = {
					h: 0,
					s: 1,
					b: e.b
				})), r.hex
			}, r.getColor.reset = function() {
				delete this.start
			}, r.parsePathString = function(t) {
				if (!t) return null;
				var e = Ie(t);
				if (e.arr) return Pe(e.arr);
				var n = {
						a: 7,
						c: 6,
						h: 1,
						l: 2,
						m: 2,
						r: 4,
						q: 4,
						s: 4,
						t: 2,
						v: 1,
						z: 0
					},
					i = [];
				return r.is(t, $) && r.is(t[0], $) && (i = Pe(t)), i.length || E(t).replace(ue, function(t, e, r) {
					var a = [],
						s = e.toLowerCase();
					if (r.replace(he, function(t, e) {
							e && a.push(+e)
						}), "m" == s && a.length > 2 && (i.push([e][M](a.splice(0, 2))), s = "l", e = "m" == e ? "l" : "L"), "r" == s) i.push([e][M](a));
					else
						for (; a.length >= n[s] && (i.push([e][M](a.splice(0, n[s]))), n[s]););
				}), i.toString = r._path2string, e.arr = Pe(i), i
			}, r.parseTransformString = s(function(t) {
				if (!t) return null;
				var e = [];
				return r.is(t, $) && r.is(t[0], $) && (e = Pe(t)), e.length || E(t).replace(ce, function(t, r, n) {
					{
						var i = [];
						z.call(r)
					}
					n.replace(he, function(t, e) {
						e && i.push(+e)
					}), e.push([r][M](i))
				}), e.toString = r._path2string, e
			});
			var Ie = function(t) {
				var e = Ie.ps = Ie.ps || {};
				return e[t] ? e[t].sleep = 100 : e[t] = {
					sleep: 100
				}, setTimeout(function() {
					for (var r in e) e[T](r) && r != t && (e[r].sleep--, !e[r].sleep && delete e[r])
				}), e[t]
			};
			r.findDotsAtSegment = function(t, e, r, n, i, a, s, o, l) {
				var u = 1 - l,
					c = q(u, 3),
					h = q(u, 2),
					f = l * l,
					g = f * l,
					d = c * t + 3 * h * l * r + 3 * u * l * l * i + g * s,
					p = c * e + 3 * h * l * n + 3 * u * l * l * a + g * o,
					v = t + 2 * l * (r - t) + f * (i - 2 * r + t),
					m = e + 2 * l * (n - e) + f * (a - 2 * n + e),
					x = r + 2 * l * (i - r) + f * (s - 2 * i + r),
					y = n + 2 * l * (a - n) + f * (o - 2 * a + n),
					b = u * t + l * r,
					_ = u * e + l * n,
					w = u * i + l * s,
					k = u * a + l * o,
					C = 90 - 180 * V.atan2(v - x, m - y) / W;
				return (v > x || y > m) && (C += 180), {
					x: d,
					y: p,
					m: {
						x: v,
						y: m
					},
					n: {
						x: x,
						y: y
					},
					start: {
						x: b,
						y: _
					},
					end: {
						x: w,
						y: k
					},
					alpha: C
				}
			}, r.bezierBBox = function(t, e, n, i, a, s, o, l) {
				r.is(t, "array") || (t = [t, e, n, i, a, s, o, l]);
				var u = Oe.apply(null, t);
				return {
					x: u.min.x,
					y: u.min.y,
					x2: u.max.x,
					y2: u.max.y,
					width: u.max.x - u.min.x,
					height: u.max.y - u.min.y
				}
			}, r.isPointInsideBBox = function(t, e, r) {
				return e >= t.x && e <= t.x2 && r >= t.y && r <= t.y2
			}, r.isBBoxIntersect = function(t, e) {
				var n = r.isPointInsideBBox;
				return n(e, t.x, t.y) || n(e, t.x2, t.y) || n(e, t.x, t.y2) || n(e, t.x2, t.y2) || n(t, e.x, e.y) || n(t, e.x2, e.y) || n(t, e.x, e.y2) || n(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
			}, r.pathIntersection = function(t, e) {
				return p(t, e)
			}, r.pathIntersectionNumber = function(t, e) {
				return p(t, e, 1)
			}, r.isPointInsidePath = function(t, e, n) {
				var i = r.pathBBox(t);
				return r.isPointInsideBBox(i, e, n) && p(t, [
					["M", e, n],
					["H", i.x2 + 10]
				], 1) % 2 == 1
			}, r._removedFactory = function(t) {
				return function() {
					e("raphael.log", null, "Rapha\xebl: you are calling to method \u201c" + t + "\u201d of removed object", t)
				}
			};
			var Be = r.pathBBox = function(t) {
					var e = Ie(t);
					if (e.bbox) return i(e.bbox);
					if (!t) return {
						x: 0,
						y: 0,
						width: 0,
						height: 0,
						x2: 0,
						y2: 0
					};
					t = De(t);
					for (var r, n = 0, a = 0, s = [], o = [], l = 0, u = t.length; u > l; l++)
						if (r = t[l], "M" == r[0]) n = r[1], a = r[2], s.push(n), o.push(a);
						else {
							var c = Oe(n, a, r[1], r[2], r[3], r[4], r[5], r[6]);
							s = s[M](c.min.x, c.max.x), o = o[M](c.min.y, c.max.y), n = r[5], a = r[6]
						}
					var h = U[L](0, s),
						f = U[L](0, o),
						g = j[L](0, s),
						d = j[L](0, o),
						p = g - h,
						v = d - f,
						m = {
							x: h,
							y: f,
							x2: g,
							y2: d,
							width: p,
							height: v,
							cx: h + p / 2,
							cy: f + v / 2
						};
					return e.bbox = i(m), m
				},
				Pe = function(t) {
					var e = i(t);
					return e.toString = r._path2string, e
				},
				Le = r._pathToRelative = function(t) {
					var e = Ie(t);
					if (e.rel) return Pe(e.rel);
					r.is(t, $) && r.is(t && t[0], $) || (t = r.parsePathString(t));
					var n = [],
						i = 0,
						a = 0,
						s = 0,
						o = 0,
						l = 0;
					"M" == t[0][0] && (i = t[0][1], a = t[0][2], s = i, o = a, l++, n.push(["M", i, a]));
					for (var u = l, c = t.length; c > u; u++) {
						var h = n[u] = [],
							f = t[u];
						if (f[0] != z.call(f[0])) switch (h[0] = z.call(f[0]), h[0]) {
							case "a":
								h[1] = f[1], h[2] = f[2], h[3] = f[3], h[4] = f[4], h[5] = f[5], h[6] = +(f[6] - i).toFixed(3), h[7] = +(f[7] - a).toFixed(3);
								break;
							case "v":
								h[1] = +(f[1] - a).toFixed(3);
								break;
							case "m":
								s = f[1], o = f[2];
							default:
								for (var g = 1, d = f.length; d > g; g++) h[g] = +(f[g] - (g % 2 ? i : a)).toFixed(3)
						} else {
							h = n[u] = [], "m" == f[0] && (s = f[1] + i, o = f[2] + a);
							for (var p = 0, v = f.length; v > p; p++) n[u][p] = f[p]
						}
						var m = n[u].length;
						switch (n[u][0]) {
							case "z":
								i = s, a = o;
								break;
							case "h":
								i += +n[u][m - 1];
								break;
							case "v":
								a += +n[u][m - 1];
								break;
							default:
								i += +n[u][m - 2], a += +n[u][m - 1]
						}
					}
					return n.toString = r._path2string, e.rel = Pe(n), n
				},
				Me = r._pathToAbsolute = function(t) {
					var e = Ie(t);
					if (e.abs) return Pe(e.abs);
					if (r.is(t, $) && r.is(t && t[0], $) || (t = r.parsePathString(t)), !t || !t.length) return [
						["M", 0, 0]
					];
					var n = [],
						i = 0,
						a = 0,
						s = 0,
						o = 0,
						l = 0;
					"M" == t[0][0] && (i = +t[0][1], a = +t[0][2], s = i, o = a, l++, n[0] = ["M", i, a]);
					for (var c, h, f = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), g = l, d = t.length; d > g; g++) {
						if (n.push(c = []), h = t[g], h[0] != ne.call(h[0])) switch (c[0] = ne.call(h[0]), c[0]) {
								case "A":
									c[1] = h[1], c[2] = h[2], c[3] = h[3], c[4] = h[4], c[5] = h[5], c[6] = +(h[6] + i), c[7] = +(h[7] + a);
									break;
								case "V":
									c[1] = +h[1] + a;
									break;
								case "H":
									c[1] = +h[1] + i;
									break;
								case "R":
									for (var p = [i, a][M](h.slice(1)), v = 2, m = p.length; m > v; v++) p[v] = +p[v] + i, p[++v] = +p[v] + a;
									n.pop(), n = n[M](u(p, f));
									break;
								case "M":
									s = +h[1] + i, o = +h[2] + a;
								default:
									for (v = 1, m = h.length; m > v; v++) c[v] = +h[v] + (v % 2 ? i : a)
							} else if ("R" == h[0]) p = [i, a][M](h.slice(1)), n.pop(), n = n[M](u(p, f)), c = ["R"][M](h.slice(-2));
							else
								for (var x = 0, y = h.length; y > x; x++) c[x] = h[x];
						switch (c[0]) {
							case "Z":
								i = s, a = o;
								break;
							case "H":
								i = c[1];
								break;
							case "V":
								a = c[1];
								break;
							case "M":
								s = c[c.length - 2], o = c[c.length - 1];
							default:
								i = c[c.length - 2], a = c[c.length - 1]
						}
					}
					return n.toString = r._path2string, e.abs = Pe(n), n
				},
				Re = function(t, e, r, n) {
					return [t, e, r, n, r, n]
				},
				Ne = function(t, e, r, n, i, a) {
					var s = 1 / 3,
						o = 2 / 3;
					return [s * t + o * r, s * e + o * n, s * i + o * r, s * a + o * n, i, a]
				},
				Fe = function(t, e, r, n, i, a, o, l, u, c) {
					var h, f = 120 * W / 180,
						g = W / 180 * (+i || 0),
						d = [],
						p = s(function(t, e, r) {
							var n = t * V.cos(r) - e * V.sin(r),
								i = t * V.sin(r) + e * V.cos(r);
							return {
								x: n,
								y: i
							}
						});
					if (c) C = c[0], S = c[1], w = c[2], k = c[3];
					else {
						h = p(t, e, -g), t = h.x, e = h.y, h = p(l, u, -g), l = h.x, u = h.y;
						var v = (V.cos(W / 180 * i), V.sin(W / 180 * i), (t - l) / 2),
							m = (e - u) / 2,
							x = v * v / (r * r) + m * m / (n * n);
						x > 1 && (x = V.sqrt(x), r = x * r, n = x * n);
						var y = r * r,
							b = n * n,
							_ = (a == o ? -1 : 1) * V.sqrt(Y((y * b - y * m * m - b * v * v) / (y * m * m + b * v * v))),
							w = _ * r * m / n + (t + l) / 2,
							k = _ * -n * v / r + (e + u) / 2,
							C = V.asin(((e - k) / n).toFixed(9)),
							S = V.asin(((u - k) / n).toFixed(9));
						C = w > t ? W - C : C, S = w > l ? W - S : S, 0 > C && (C = 2 * W + C), 0 > S && (S = 2 * W + S), o && C > S && (C -= 2 * W), !o && S > C && (S -= 2 * W)
					}
					var A = S - C;
					if (Y(A) > f) {
						var T = S,
							I = l,
							B = u;
						S = C + f * (o && S > C ? 1 : -1), l = w + r * V.cos(S), u = k + n * V.sin(S), d = Fe(l, u, r, n, i, 0, o, I, B, [S, T, w, k])
					}
					A = S - C;
					var P = V.cos(C),
						L = V.sin(C),
						R = V.cos(S),
						N = V.sin(S),
						F = V.tan(A / 4),
						E = 4 / 3 * r * F,
						D = 4 / 3 * n * F,
						G = [t, e],
						z = [t + E * L, e - D * P],
						j = [l + E * N, u - D * R],
						U = [l, u];
					if (z[0] = 2 * G[0] - z[0], z[1] = 2 * G[1] - z[1], c) return [z, j, U][M](d);
					d = [z, j, U][M](d).join()[O](",");
					for (var q = [], H = 0, X = d.length; X > H; H++) q[H] = H % 2 ? p(d[H - 1], d[H], g).y : p(d[H], d[H + 1], g).x;
					return q
				},
				Ee = function(t, e, r, n, i, a, s, o, l) {
					var u = 1 - l;
					return {
						x: q(u, 3) * t + 3 * q(u, 2) * l * r + 3 * u * l * l * i + q(l, 3) * s,
						y: q(u, 3) * e + 3 * q(u, 2) * l * n + 3 * u * l * l * a + q(l, 3) * o
					}
				},
				Oe = s(function(t, e, r, n, i, a, s, o) {
					var l, u = i - 2 * r + t - (s - 2 * i + r),
						c = 2 * (r - t) - 2 * (i - r),
						h = t - r,
						f = (-c + V.sqrt(c * c - 4 * u * h)) / 2 / u,
						g = (-c - V.sqrt(c * c - 4 * u * h)) / 2 / u,
						d = [e, o],
						p = [t, s];
					return Y(f) > "1e12" && (f = .5), Y(g) > "1e12" && (g = .5), f > 0 && 1 > f && (l = Ee(t, e, r, n, i, a, s, o, f), p.push(l.x), d.push(l.y)), g > 0 && 1 > g && (l = Ee(t, e, r, n, i, a, s, o, g), p.push(l.x), d.push(l.y)), u = a - 2 * n + e - (o - 2 * a + n), c = 2 * (n - e) - 2 * (a - n), h = e - n, f = (-c + V.sqrt(c * c - 4 * u * h)) / 2 / u, g = (-c - V.sqrt(c * c - 4 * u * h)) / 2 / u, Y(f) > "1e12" && (f = .5), Y(g) > "1e12" && (g = .5), f > 0 && 1 > f && (l = Ee(t, e, r, n, i, a, s, o, f), p.push(l.x), d.push(l.y)), g > 0 && 1 > g && (l = Ee(t, e, r, n, i, a, s, o, g), p.push(l.x), d.push(l.y)), {
						min: {
							x: U[L](0, p),
							y: U[L](0, d)
						},
						max: {
							x: j[L](0, p),
							y: j[L](0, d)
						}
					}
				}),
				De = r._path2curve = s(function(t, e) {
					var r = !e && Ie(t);
					if (!e && r.curve) return Pe(r.curve);
					for (var n = Me(t), i = e && Me(e), a = {
							x: 0,
							y: 0,
							bx: 0,
							by: 0,
							X: 0,
							Y: 0,
							qx: null,
							qy: null
						}, s = {
							x: 0,
							y: 0,
							bx: 0,
							by: 0,
							X: 0,
							Y: 0,
							qx: null,
							qy: null
						}, o = (function(t, e, r) {
							var n, i;
							if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
							switch (!(t[0] in {
								T: 1,
								Q: 1
							}) && (e.qx = e.qy = null), t[0]) {
								case "M":
									e.X = t[1], e.Y = t[2];
									break;
								case "A":
									t = ["C"][M](Fe[L](0, [e.x, e.y][M](t.slice(1))));
									break;
								case "S":
									"C" == r || "S" == r ? (n = 2 * e.x - e.bx, i = 2 * e.y - e.by) : (n = e.x, i = e.y), t = ["C", n, i][M](t.slice(1));
									break;
								case "T":
									"Q" == r || "T" == r ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"][M](Ne(e.x, e.y, e.qx, e.qy, t[1], t[2]));
									break;
								case "Q":
									e.qx = t[1], e.qy = t[2], t = ["C"][M](Ne(e.x, e.y, t[1], t[2], t[3], t[4]));
									break;
								case "L":
									t = ["C"][M](Re(e.x, e.y, t[1], t[2]));
									break;
								case "H":
									t = ["C"][M](Re(e.x, e.y, t[1], e.y));
									break;
								case "V":
									t = ["C"][M](Re(e.x, e.y, e.x, t[1]));
									break;
								case "Z":
									t = ["C"][M](Re(e.x, e.y, e.X, e.Y))
							}
							return t
						}), l = function(t, e) {
							if (t[e].length > 7) {
								t[e].shift();
								for (var r = t[e]; r.length;) t.splice(e++, 0, ["C"][M](r.splice(0, 6)));
								t.splice(e, 1), h = j(n.length, i && i.length || 0)
							}
						}, u = function(t, e, r, a, s) {
							t && e && "M" == t[s][0] && "M" != e[s][0] && (e.splice(s, 0, ["M", a.x, a.y]), r.bx = 0, r.by = 0, r.x = t[s][1], r.y = t[s][2], h = j(n.length, i && i.length || 0))
						}, c = 0, h = j(n.length, i && i.length || 0); h > c; c++) {
						n[c] = o(n[c], a), l(n, c), i && (i[c] = o(i[c], s)), i && l(i, c), u(n, i, a, s, c), u(i, n, s, a, c);
						var f = n[c],
							g = i && i[c],
							d = f.length,
							p = i && g.length;
						a.x = f[d - 2], a.y = f[d - 1], a.bx = ee(f[d - 4]) || a.x, a.by = ee(f[d - 3]) || a.y, s.bx = i && (ee(g[p - 4]) || s.x), s.by = i && (ee(g[p - 3]) || s.y), s.x = i && g[p - 2], s.y = i && g[p - 1]
					}
					return i || (r.curve = Pe(n)), i ? [n, i] : n
				}, null, Pe),
				Ge = (r._parseDots = s(function(t) {
					for (var e = [], n = 0, i = t.length; i > n; n++) {
						var a = {},
							s = t[n].match(/^([^:]*):?([\d\.]*)/);
						if (a.color = r.getRGB(s[1]), a.color.error) return null;
						a.color = a.color.hex, s[2] && (a.offset = s[2] + "%"), e.push(a)
					}
					for (n = 1, i = e.length - 1; i > n; n++)
						if (!e[n].offset) {
							for (var o = ee(e[n - 1].offset || 0), l = 0, u = n + 1; i > u; u++)
								if (e[u].offset) {
									l = e[u].offset;
									break
								}
							l || (l = 100, u = i), l = ee(l);
							for (var c = (l - o) / (u - n + 1); u > n; n++) o += c, e[n].offset = o + "%"
						}
					return e
				}), r._tear = function(t, e) {
					t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next)
				}),
				ze = (r._tofront = function(t, e) {
					e.top !== t && (Ge(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t)
				}, r._toback = function(t, e) {
					e.bottom !== t && (Ge(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t)
				}, r._insertafter = function(t, e, r) {
					Ge(t, r), e == r.top && (r.top = t), e.next && (e.next.prev = t), t.next = e.next, t.prev = e, e.next = t
				}, r._insertbefore = function(t, e, r) {
					Ge(t, r), e == r.bottom && (r.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, e.prev = t, t.next = e
				}, r.toMatrix = function(t, e) {
					var r = Be(t),
						n = {
							_: {
								transform: N
							},
							getBBox: function() {
								return r
							}
						};
					return Ve(n, e), n.matrix
				}),
				Ve = (r.transformPath = function(t, e) {
					return ye(t, ze(t, e))
				}, r._extractTransform = function(t, e) {
					if (null == e) return t._.transform;
					e = E(e).replace(/\.{3}|\u2026/g, t._.transform || N);
					var n = r.parseTransformString(e),
						i = 0,
						a = 0,
						s = 0,
						o = 1,
						l = 1,
						u = t._,
						c = new v;
					if (u.transform = n || [], n)
						for (var h = 0, f = n.length; f > h; h++) {
							var g, d, p, m, x, y = n[h],
								b = y.length,
								_ = E(y[0]).toLowerCase(),
								w = y[0] != _,
								k = w ? c.invert() : 0;
							"t" == _ && 3 == b ? w ? (g = k.x(0, 0), d = k.y(0, 0), p = k.x(y[1], y[2]), m = k.y(y[1], y[2]), c.translate(p - g, m - d)) : c.translate(y[1], y[2]) : "r" == _ ? 2 == b ? (x = x || t.getBBox(1), c.rotate(y[1], x.x + x.width / 2, x.y + x.height / 2), i += y[1]) : 4 == b && (w ? (p = k.x(y[2], y[3]), m = k.y(y[2], y[3]), c.rotate(y[1], p, m)) : c.rotate(y[1], y[2], y[3]), i += y[1]) : "s" == _ ? 2 == b || 3 == b ? (x = x || t.getBBox(1), c.scale(y[1], y[b - 1], x.x + x.width / 2, x.y + x.height / 2), o *= y[1], l *= y[b - 1]) : 5 == b && (w ? (p = k.x(y[3], y[4]), m = k.y(y[3], y[4]), c.scale(y[1], y[2], p, m)) : c.scale(y[1], y[2], y[3], y[4]), o *= y[1], l *= y[2]) : "m" == _ && 7 == b && c.add(y[1], y[2], y[3], y[4], y[5], y[6]), u.dirtyT = 1, t.matrix = c
						}
					t.matrix = c, u.sx = o, u.sy = l, u.deg = i, u.dx = a = c.e, u.dy = s = c.f, 1 == o && 1 == l && !i && u.bbox ? (u.bbox.x += +a, u.bbox.y += +s) : u.dirtyT = 1
				}),
				je = function(t) {
					var e = t[0];
					switch (e.toLowerCase()) {
						case "t":
							return [e, 0, 0];
						case "m":
							return [e, 1, 0, 0, 1, 0, 0];
						case "r":
							return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
						case "s":
							return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
					}
				},
				Ue = r._equaliseTransform = function(t, e) {
					e = E(e).replace(/\.{3}|\u2026/g, t), t = r.parseTransformString(t) || [], e = r.parseTransformString(e) || [];
					for (var n, i, a, s, o = j(t.length, e.length), l = [], u = [], c = 0; o > c; c++) {
						if (a = t[c] || je(e[c]), s = e[c] || je(a), a[0] != s[0] || "r" == a[0].toLowerCase() && (a[2] != s[2] || a[3] != s[3]) || "s" == a[0].toLowerCase() && (a[3] != s[3] || a[4] != s[4])) return;
						for (l[c] = [], u[c] = [], n = 0, i = j(a.length, s.length); i > n; n++) n in a && (l[c][n] = a[n]), n in s && (u[c][n] = s[n])
					}
					return {
						from: l,
						to: u
					}
				};
			r._getContainer = function(t, e, n, i) {
					var a;
					return a = null != i || r.is(t, "object") ? t : I.doc.getElementById(t), null != a ? a.tagName ? null == e ? {
						container: a,
						width: a.style.pixelWidth || a.offsetWidth,
						height: a.style.pixelHeight || a.offsetHeight
					} : {
						container: a,
						width: e,
						height: n
					} : {
						container: 1,
						x: t,
						y: e,
						width: n,
						height: i
					} : void 0
				}, r.pathToRelative = Le, r._engine = {}, r.path2curve = De, r.matrix = function(t, e, r, n, i, a) {
					return new v(t, e, r, n, i, a)
				},
				function(t) {
					function e(t) {
						return t[0] * t[0] + t[1] * t[1]
					}

					function n(t) {
						var r = V.sqrt(e(t));
						t[0] && (t[0] /= r), t[1] && (t[1] /= r)
					}
					t.add = function(t, e, r, n, i, a) {
						var s, o, l, u, c = [
								[],
								[],
								[]
							],
							h = [
								[this.a, this.c, this.e],
								[this.b, this.d, this.f],
								[0, 0, 1]
							],
							f = [
								[t, r, i],
								[e, n, a],
								[0, 0, 1]
							];
						for (t && t instanceof v && (f = [
								[t.a, t.c, t.e],
								[t.b, t.d, t.f],
								[0, 0, 1]
							]), s = 0; 3 > s; s++)
							for (o = 0; 3 > o; o++) {
								for (u = 0, l = 0; 3 > l; l++) u += h[s][l] * f[l][o];
								c[s][o] = u
							}
						this.a = c[0][0], this.b = c[1][0], this.c = c[0][1], this.d = c[1][1], this.e = c[0][2], this.f = c[1][2]
					}, t.invert = function() {
						var t = this,
							e = t.a * t.d - t.b * t.c;
						return new v(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
					}, t.clone = function() {
						return new v(this.a, this.b, this.c, this.d, this.e, this.f)
					}, t.translate = function(t, e) {
						this.add(1, 0, 0, 1, t, e)
					}, t.scale = function(t, e, r, n) {
						null == e && (e = t), (r || n) && this.add(1, 0, 0, 1, r, n), this.add(t, 0, 0, e, 0, 0), (r || n) && this.add(1, 0, 0, 1, -r, -n)
					}, t.rotate = function(t, e, n) {
						t = r.rad(t), e = e || 0, n = n || 0;
						var i = +V.cos(t).toFixed(9),
							a = +V.sin(t).toFixed(9);
						this.add(i, a, -a, i, e, n), this.add(1, 0, 0, 1, -e, -n)
					}, t.x = function(t, e) {
						return t * this.a + e * this.c + this.e
					}, t.y = function(t, e) {
						return t * this.b + e * this.d + this.f
					}, t.get = function(t) {
						return +this[E.fromCharCode(97 + t)].toFixed(4)
					}, t.toString = function() {
						return r.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
					}, t.toFilter = function() {
						return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
					}, t.offset = function() {
						return [this.e.toFixed(4), this.f.toFixed(4)]
					}, t.split = function() {
						var t = {};
						t.dx = this.e, t.dy = this.f;
						var i = [
							[this.a, this.c],
							[this.b, this.d]
						];
						t.scalex = V.sqrt(e(i[0])), n(i[0]), t.shear = i[0][0] * i[1][0] + i[0][1] * i[1][1], i[1] = [i[1][0] - i[0][0] * t.shear, i[1][1] - i[0][1] * t.shear], t.scaley = V.sqrt(e(i[1])), n(i[1]), t.shear /= t.scaley;
						var a = -i[0][1],
							s = i[1][1];
						return 0 > s ? (t.rotate = r.deg(V.acos(s)), 0 > a && (t.rotate = 360 - t.rotate)) : t.rotate = r.deg(V.asin(a)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t
					}, t.toTransformString = function(t) {
						var e = t || this[O]();
						return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [e.dx, e.dy] : N) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : N) + (e.rotate ? "r" + [e.rotate, 0, 0] : N)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
					}
				}(v.prototype);
			var Ye = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
			k.safari = "Apple Computer, Inc." == navigator.vendor && (Ye && Ye[1] < 4 || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && Ye && Ye[1] < 8 ? function() {
				var t = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
					stroke: "none"
				});
				setTimeout(function() {
					t.remove()
				})
			} : de;
			for (var qe = function() {
					this.returnValue = !1
				}, We = function() {
					return this.originalEvent.preventDefault()
				}, He = function() {
					this.cancelBubble = !0
				}, Xe = function() {
					return this.originalEvent.stopPropagation()
				}, $e = function(t) {
					var e = I.doc.documentElement.scrollTop || I.doc.body.scrollTop,
						r = I.doc.documentElement.scrollLeft || I.doc.body.scrollLeft;
					return {
						x: t.clientX + r,
						y: t.clientY + e
					}
				}, Ze = function() {
					return I.doc.addEventListener ? function(t, e, r, n) {
						var i = function(t) {
							var e = $e(t);
							return r.call(n, t, e.x, e.y)
						};
						if (t.addEventListener(e, i, !1), R && G[e]) {
							var a = function(e) {
								for (var i = $e(e), a = e, s = 0, o = e.targetTouches && e.targetTouches.length; o > s; s++)
									if (e.targetTouches[s].target == t) {
										e = e.targetTouches[s], e.originalEvent = a, e.preventDefault = We, e.stopPropagation = Xe;
										break
									}
								return r.call(n, e, i.x, i.y)
							};
							t.addEventListener(G[e], a, !1)
						}
						return function() {
							return t.removeEventListener(e, i, !1), R && G[e] && t.removeEventListener(G[e], i, !1), !0
						}
					} : I.doc.attachEvent ? function(t, e, r, n) {
						var i = function(t) {
							t = t || I.win.event;
							var e = I.doc.documentElement.scrollTop || I.doc.body.scrollTop,
								i = I.doc.documentElement.scrollLeft || I.doc.body.scrollLeft,
								a = t.clientX + i,
								s = t.clientY + e;
							return t.preventDefault = t.preventDefault || qe, t.stopPropagation = t.stopPropagation || He, r.call(n, t, a, s)
						};
						t.attachEvent("on" + e, i);
						var a = function() {
							return t.detachEvent("on" + e, i), !0
						};
						return a
					} : void 0
				}(), Je = [], Qe = function(t) {
					for (var r, n = t.clientX, i = t.clientY, a = I.doc.documentElement.scrollTop || I.doc.body.scrollTop, s = I.doc.documentElement.scrollLeft || I.doc.body.scrollLeft, o = Je.length; o--;) {
						if (r = Je[o], R && t.touches) {
							for (var l, u = t.touches.length; u--;)
								if (l = t.touches[u], l.identifier == r.el._drag.id) {
									n = l.clientX, i = l.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
									break
								}
						} else t.preventDefault();
						var c, h = r.el.node,
							f = h.nextSibling,
							g = h.parentNode,
							d = h.style.display;
						I.win.opera && g.removeChild(h), h.style.display = "none", c = r.el.paper.getElementByPoint(n, i), h.style.display = d, I.win.opera && (f ? g.insertBefore(h, f) : g.appendChild(h)), c && e("raphael.drag.over." + r.el.id, r.el, c), n += s, i += a, e("raphael.drag.move." + r.el.id, r.move_scope || r.el, n - r.el._drag.x, i - r.el._drag.y, n, i, t)
					}
				}, Ke = function(t) {
					r.unmousemove(Qe).unmouseup(Ke);
					for (var n, i = Je.length; i--;) n = Je[i], n.el._drag = {}, e("raphael.drag.end." + n.el.id, n.end_scope || n.start_scope || n.move_scope || n.el, t);
					Je = []
				}, tr = r.el = {}, er = D.length; er--;) ! function(t) {
				r[t] = tr[t] = function(e, n) {
					return r.is(e, "function") && (this.events = this.events || [], this.events.push({
						name: t,
						f: e,
						unbind: Ze(this.shape || this.node || I.doc, t, e, n || this)
					})), this
				}, r["un" + t] = tr["un" + t] = function(e) {
					for (var n = this.events || [], i = n.length; i--;) n[i].name != t || !r.is(e, "undefined") && n[i].f != e || (n[i].unbind(), n.splice(i, 1), !n.length && delete this.events);
					return this
				}
			}(D[er]);
			tr.data = function(t, n) {
				var i = fe[this.id] = fe[this.id] || {};
				if (0 == arguments.length) return i;
				if (1 == arguments.length) {
					if (r.is(t, "object")) {
						for (var a in t) t[T](a) && this.data(a, t[a]);
						return this
					}
					return e("raphael.data.get." + this.id, this, i[t], t), i[t]
				}
				return i[t] = n, e("raphael.data.set." + this.id, this, n, t), this
			}, tr.removeData = function(t) {
				return null == t ? fe[this.id] = {} : fe[this.id] && delete fe[this.id][t], this
			}, tr.getData = function() {
				return i(fe[this.id] || {})
			}, tr.hover = function(t, e, r, n) {
				return this.mouseover(t, r).mouseout(e, n || r)
			}, tr.unhover = function(t, e) {
				return this.unmouseover(t).unmouseout(e)
			};
			var rr = [];
			tr.drag = function(t, n, i, a, s, o) {
				function l(l) {
					(l.originalEvent || l).preventDefault();
					var u = l.clientX,
						c = l.clientY,
						h = I.doc.documentElement.scrollTop || I.doc.body.scrollTop,
						f = I.doc.documentElement.scrollLeft || I.doc.body.scrollLeft;
					if (this._drag.id = l.identifier, R && l.touches)
						for (var g, d = l.touches.length; d--;)
							if (g = l.touches[d], this._drag.id = g.identifier, g.identifier == this._drag.id) {
								u = g.clientX, c = g.clientY;
								break
							}
					this._drag.x = u + f, this._drag.y = c + h, !Je.length && r.mousemove(Qe).mouseup(Ke), Je.push({
						el: this,
						move_scope: a,
						start_scope: s,
						end_scope: o
					}), n && e.on("raphael.drag.start." + this.id, n), t && e.on("raphael.drag.move." + this.id, t), i && e.on("raphael.drag.end." + this.id, i), e("raphael.drag.start." + this.id, s || a || this, l.clientX + f, l.clientY + h, l)
				}
				return this._drag = {}, rr.push({
					el: this,
					start: l
				}), this.mousedown(l), this
			}, tr.onDragOver = function(t) {
				t ? e.on("raphael.drag.over." + this.id, t) : e.unbind("raphael.drag.over." + this.id)
			}, tr.undrag = function() {
				for (var t = rr.length; t--;) rr[t].el == this && (this.unmousedown(rr[t].start), rr.splice(t, 1), e.unbind("raphael.drag.*." + this.id));
				!rr.length && r.unmousemove(Qe).unmouseup(Ke), Je = []
			}, k.circle = function(t, e, n) {
				var i = r._engine.circle(this, t || 0, e || 0, n || 0);
				return this.__set__ && this.__set__.push(i), i
			}, k.rect = function(t, e, n, i, a) {
				var s = r._engine.rect(this, t || 0, e || 0, n || 0, i || 0, a || 0);
				return this.__set__ && this.__set__.push(s), s
			}, k.ellipse = function(t, e, n, i) {
				var a = r._engine.ellipse(this, t || 0, e || 0, n || 0, i || 0);
				return this.__set__ && this.__set__.push(a), a
			}, k.path = function(t) {
				t && !r.is(t, X) && !r.is(t[0], $) && (t += N);
				var e = r._engine.path(r.format[L](r, arguments), this);
				return this.__set__ && this.__set__.push(e), e
			}, k.image = function(t, e, n, i, a) {
				var s = r._engine.image(this, t || "about:blank", e || 0, n || 0, i || 0, a || 0);
				return this.__set__ && this.__set__.push(s), s
			}, k.text = function(t, e, n) {
				var i = r._engine.text(this, t || 0, e || 0, E(n));
				return this.__set__ && this.__set__.push(i), i
			}, k.set = function(t) {
				!r.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length));
				var e = new dr(t);
				return this.__set__ && this.__set__.push(e), e.paper = this, e.type = "set", e
			}, k.setStart = function(t) {
				this.__set__ = t || this.set()
			}, k.setFinish = function() {
				var t = this.__set__;
				return delete this.__set__, t
			}, k.setSize = function(t, e) {
				return r._engine.setSize.call(this, t, e)
			}, k.setViewBox = function(t, e, n, i, a) {
				return r._engine.setViewBox.call(this, t, e, n, i, a)
			}, k.top = k.bottom = null, k.raphael = r;
			var nr = function(t) {
				var e = t.getBoundingClientRect(),
					r = t.ownerDocument,
					n = r.body,
					i = r.documentElement,
					a = i.clientTop || n.clientTop || 0,
					s = i.clientLeft || n.clientLeft || 0,
					o = e.top + (I.win.pageYOffset || i.scrollTop || n.scrollTop) - a,
					l = e.left + (I.win.pageXOffset || i.scrollLeft || n.scrollLeft) - s;
				return {
					y: o,
					x: l
				}
			};
			k.getElementByPoint = function(t, e) {
				var r = this,
					n = r.canvas,
					i = I.doc.elementFromPoint(t, e);
				if (I.win.opera && "svg" == i.tagName) {
					var a = nr(n),
						s = n.createSVGRect();
					s.x = t - a.x, s.y = e - a.y, s.width = s.height = 1;
					var o = n.getIntersectionList(s, null);
					o.length && (i = o[o.length - 1])
				}
				if (!i) return null;
				for (; i.parentNode && i != n.parentNode && !i.raphael;) i = i.parentNode;
				return i == r.canvas.parentNode && (i = n), i = i && i.raphael ? r.getById(i.raphaelid) : null
			}, k.getElementsByBBox = function(t) {
				var e = this.set();
				return this.forEach(function(n) {
					r.isBBoxIntersect(n.getBBox(), t) && e.push(n)
				}), e
			}, k.getById = function(t) {
				for (var e = this.bottom; e;) {
					if (e.id == t) return e;
					e = e.next
				}
				return null
			}, k.forEach = function(t, e) {
				for (var r = this.bottom; r;) {
					if (t.call(e, r) === !1) return this;
					r = r.next
				}
				return this
			}, k.getElementsByPoint = function(t, e) {
				var r = this.set();
				return this.forEach(function(n) {
					n.isPointInside(t, e) && r.push(n)
				}), r
			}, tr.isPointInside = function(t, e) {
				var n = this.realPath = xe[this.type](this);
				return this.attr("transform") && this.attr("transform").length && (n = r.transformPath(n, this.attr("transform"))), r.isPointInsidePath(n, t, e)
			}, tr.getBBox = function(t) {
				if (this.removed) return {};
				var e = this._;
				return t ? ((e.dirty || !e.bboxwt) && (this.realPath = xe[this.type](this), e.bboxwt = Be(this.realPath), e.bboxwt.toString = m, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && ((e.dirty || !this.realPath) && (e.bboxwt = 0, this.realPath = xe[this.type](this)), e.bbox = Be(ye(this.realPath, this.matrix)), e.bbox.toString = m, e.dirty = e.dirtyT = 0), e.bbox)
			}, tr.clone = function() {
				if (this.removed) return null;
				var t = this.paper[this.type]().attr(this.attr());
				return this.__set__ && this.__set__.push(t), t
			}, tr.glow = function(t) {
				if ("text" == this.type) return null;
				t = t || {};
				var e = {
						width: (t.width || 10) + (+this.attr("stroke-width") || 1),
						fill: t.fill || !1,
						opacity: t.opacity || .5,
						offsetx: t.offsetx || 0,
						offsety: t.offsety || 0,
						color: t.color || "#000"
					},
					r = e.width / 2,
					n = this.paper,
					i = n.set(),
					a = this.realPath || xe[this.type](this);
				a = this.matrix ? ye(a, this.matrix) : a;
				for (var s = 1; r + 1 > s; s++) i.push(n.path(a).attr({
					stroke: e.color,
					fill: e.fill ? e.color : "none",
					"stroke-linejoin": "round",
					"stroke-linecap": "round",
					"stroke-width": +(e.width / r * s).toFixed(3),
					opacity: +(e.opacity / r).toFixed(3)
				}));
				return i.insertBefore(this).translate(e.offsetx, e.offsety)
			};
			var ir = function(t, e, n, i, a, s, o, l, u) {
					return null == u ? h(t, e, n, i, a, s, o, l) : r.findDotsAtSegment(t, e, n, i, a, s, o, l, f(t, e, n, i, a, s, o, l, u))
				},
				ar = function(t, e) {
					return function(n, i, a) {
						n = De(n);
						for (var s, o, l, u, c, h = "", f = {}, g = 0, d = 0, p = n.length; p > d; d++) {
							if (l = n[d], "M" == l[0]) s = +l[1], o = +l[2];
							else {
								if (u = ir(s, o, l[1], l[2], l[3], l[4], l[5], l[6]), g + u > i) {
									if (e && !f.start) {
										if (c = ir(s, o, l[1], l[2], l[3], l[4], l[5], l[6], i - g), h += ["C" + c.start.x, c.start.y, c.m.x, c.m.y, c.x, c.y], a) return h;
										f.start = h, h = ["M" + c.x, c.y + "C" + c.n.x, c.n.y, c.end.x, c.end.y, l[5], l[6]].join(), g += u, s = +l[5], o = +l[6];
										continue
									}
									if (!t && !e) return c = ir(s, o, l[1], l[2], l[3], l[4], l[5], l[6], i - g), {
										x: c.x,
										y: c.y,
										alpha: c.alpha
									}
								}
								g += u, s = +l[5], o = +l[6]
							}
							h += l.shift() + l
						}
						return f.end = h, c = t ? g : e ? f : r.findDotsAtSegment(s, o, l[0], l[1], l[2], l[3], l[4], l[5], 1), c.alpha && (c = {
							x: c.x,
							y: c.y,
							alpha: c.alpha
						}), c
					}
				},
				sr = ar(1),
				or = ar(),
				lr = ar(0, 1);
			r.getTotalLength = sr, r.getPointAtLength = or, r.getSubpath = function(t, e, r) {
				if (this.getTotalLength(t) - r < 1e-6) return lr(t, e).end;
				var n = lr(t, r, 1);
				return e ? lr(n, e).end : n
			}, tr.getTotalLength = function() {
				var t = this.getPath();
				if (t) return this.node.getTotalLength ? this.node.getTotalLength() : sr(t)
			}, tr.getPointAtLength = function(t) {
				var e = this.getPath();
				if (e) return or(e, t)
			}, tr.getPath = function() {
				var t, e = r._getPath[this.type];
				if ("text" != this.type && "set" != this.type) return e && (t = e(this)), t
			}, tr.getSubpath = function(t, e) {
				var n = this.getPath();
				if (n) return r.getSubpath(n, t, e)
			};
			var ur = r.easing_formulas = {
				linear: function(t) {
					return t
				},
				"<": function(t) {
					return q(t, 1.7)
				},
				">": function(t) {
					return q(t, .48)
				},
				"<>": function(t) {
					var e = .48 - t / 1.04,
						r = V.sqrt(.1734 + e * e),
						n = r - e,
						i = q(Y(n), 1 / 3) * (0 > n ? -1 : 1),
						a = -r - e,
						s = q(Y(a), 1 / 3) * (0 > a ? -1 : 1),
						o = i + s + .5;
					return 3 * (1 - o) * o * o + o * o * o
				},
				backIn: function(t) {
					var e = 1.70158;
					return t * t * ((e + 1) * t - e)
				},
				backOut: function(t) {
					t -= 1;
					var e = 1.70158;
					return t * t * ((e + 1) * t + e) + 1
				},
				elastic: function(t) {
					return t == !!t ? t : q(2, -10 * t) * V.sin(2 * (t - .075) * W / .3) + 1
				},
				bounce: function(t) {
					var e, r = 7.5625,
						n = 2.75;
					return 1 / n > t ? e = r * t * t : 2 / n > t ? (t -= 1.5 / n, e = r * t * t + .75) : 2.5 / n > t ? (t -= 2.25 / n, e = r * t * t + .9375) : (t -= 2.625 / n, e = r * t * t + .984375), e
				}
			};
			ur.easeIn = ur["ease-in"] = ur["<"], ur.easeOut = ur["ease-out"] = ur[">"], ur.easeInOut = ur["ease-in-out"] = ur["<>"], ur["back-in"] = ur.backIn, ur["back-out"] = ur.backOut;
			var cr = [],
				hr = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
					setTimeout(t, 16)
				},
				fr = function() {
					for (var t = +new Date, n = 0; n < cr.length; n++) {
						var i = cr[n];
						if (!i.el.removed && !i.paused) {
							var a, s, o = t - i.start,
								l = i.ms,
								u = i.easing,
								c = i.from,
								h = i.diff,
								f = i.to,
								g = (i.t, i.el),
								d = {},
								p = {};
							if (i.initstatus ? (o = (i.initstatus * i.anim.top - i.prev) / (i.percent - i.prev) * l, i.status = i.initstatus, delete i.initstatus, i.stop && cr.splice(n--, 1)) : i.status = (i.prev + (i.percent - i.prev) * (o / l)) / i.anim.top, !(0 > o))
								if (l > o) {
									var v = u(o / l);
									for (var m in c)
										if (c[T](m)) {
											switch (ae[m]) {
												case H:
													a = +c[m] + v * l * h[m];
													break;
												case "colour":
													a = "rgb(" + [gr(te(c[m].r + v * l * h[m].r)), gr(te(c[m].g + v * l * h[m].g)), gr(te(c[m].b + v * l * h[m].b))].join(",") + ")";
													break;
												case "path":
													a = [];
													for (var x = 0, y = c[m].length; y > x; x++) {
														a[x] = [c[m][x][0]];
														for (var _ = 1, w = c[m][x].length; w > _; _++) a[x][_] = +c[m][x][_] + v * l * h[m][x][_];
														a[x] = a[x].join(F)
													}
													a = a.join(F);
													break;
												case "transform":
													if (h[m].real)
														for (a = [], x = 0, y = c[m].length; y > x; x++)
															for (a[x] = [c[m][x][0]], _ = 1, w = c[m][x].length; w > _; _++) a[x][_] = c[m][x][_] + v * l * h[m][x][_];
													else {
														var k = function(t) {
															return +c[m][t] + v * l * h[m][t]
														};
														a = [
															["m", k(0), k(1), k(2), k(3), k(4), k(5)]
														]
													}
													break;
												case "csv":
													if ("clip-rect" == m)
														for (a = [], x = 4; x--;) a[x] = +c[m][x] + v * l * h[m][x];
													else if ("clip-circle" == m)
														for (a = [], x = 3; x--;) a[x] = +c[m][x] + v * l * h[m][x];
													else if ("clip-angle" == m)
														for (a = [], x = 4; x--;) a[x] = +c[m][x] + v * l * h[m][x];
													break;
												default:
													var C = [][M](c[m]);
													for (a = [], x = g.paper.customAttributes[m].length; x--;) a[x] = +C[x] + v * l * h[m][x]
											}
											d[m] = a
										}
									g.attr(d),
										function(t, r, n) {
											setTimeout(function() {
												e("raphael.anim.frame." + t, r, n)
											})
										}(g.id, g, i.anim)
								} else {
									if (function(t, n, i) {
											setTimeout(function() {
												e("raphael.anim.frame." + n.id, n, i), e("raphael.anim.finish." + n.id, n, i), r.is(t, "function") && t.call(n)
											})
										}(i.callback, g, i.anim), g.attr(f), cr.splice(n--, 1), i.repeat > 1 && !i.next) {
										for (s in f) f[T](s) && (p[s] = i.totalOrigin[s]);
										i.el.attr(p), b(i.anim, i.el, i.anim.percents[0], null, i.totalOrigin, i.repeat - 1)
									}
									i.next && !i.stop && b(i.anim, i.el, i.next, null, i.totalOrigin, i.repeat)
								}
						}
					}
					r.svg && g && g.paper && g.paper.safari(), cr.length && hr(fr)
				},
				gr = function(t) {
					return t > 255 ? 255 : 0 > t ? 0 : t
				};
			tr.animateWith = function(t, e, n, i, a, s) {
				var o = this;
				if (o.removed) return s && s.call(o), o;
				var l = n instanceof y ? n : r.animation(n, i, a, s);
				b(l, o, l.percents[0], null, o.attr());
				for (var u = 0, c = cr.length; c > u; u++)
					if (cr[u].anim == e && cr[u].el == t) {
						cr[c - 1].start = cr[u].start;
						break
					}
				return o
			}, tr.onAnimation = function(t) {
				return t ? e.on("raphael.anim.frame." + this.id, t) : e.unbind("raphael.anim.frame." + this.id), this
			}, y.prototype.delay = function(t) {
				var e = new y(this.anim, this.ms);
				return e.times = this.times, e.del = +t || 0, e
			}, y.prototype.repeat = function(t) {
				var e = new y(this.anim, this.ms);
				return e.del = this.del, e.times = V.floor(j(t, 0)) || 1, e
			}, r.animation = function(t, e, n, i) {
				if (t instanceof y) return t;
				(r.is(n, "function") || !n) && (i = i || n || null, n = null), t = Object(t), e = +e || 0;
				var a, s, o = {};
				for (s in t) t[T](s) && ee(s) != s && ee(s) + "%" != s && (a = !0, o[s] = t[s]);
				return a ? (n && (o.easing = n), i && (o.callback = i), new y({
					100: o
				}, e)) : new y(t, e)
			}, tr.animate = function(t, e, n, i) {
				var a = this;
				if (a.removed) return i && i.call(a), a;
				var s = t instanceof y ? t : r.animation(t, e, n, i);
				return b(s, a, s.percents[0], null, a.attr()), a
			}, tr.setTime = function(t, e) {
				return t && null != e && this.status(t, U(e, t.ms) / t.ms), this
			}, tr.status = function(t, e) {
				var r, n, i = [],
					a = 0;
				if (null != e) return b(t, this, -1, U(e, 1)), this;
				for (r = cr.length; r > a; a++)
					if (n = cr[a], n.el.id == this.id && (!t || n.anim == t)) {
						if (t) return n.status;
						i.push({
							anim: n.anim,
							status: n.status
						})
					}
				return t ? 0 : i
			}, tr.pause = function(t) {
				for (var r = 0; r < cr.length; r++) cr[r].el.id != this.id || t && cr[r].anim != t || e("raphael.anim.pause." + this.id, this, cr[r].anim) !== !1 && (cr[r].paused = !0);
				return this
			}, tr.resume = function(t) {
				for (var r = 0; r < cr.length; r++)
					if (cr[r].el.id == this.id && (!t || cr[r].anim == t)) {
						var n = cr[r];
						e("raphael.anim.resume." + this.id, this, n.anim) !== !1 && (delete n.paused, this.status(n.anim, n.status))
					}
				return this
			}, tr.stop = function(t) {
				for (var r = 0; r < cr.length; r++) cr[r].el.id != this.id || t && cr[r].anim != t || e("raphael.anim.stop." + this.id, this, cr[r].anim) !== !1 && cr.splice(r--, 1);
				return this
			}, e.on("raphael.remove", _), e.on("raphael.clear", _), tr.toString = function() {
				return "Rapha\xebl\u2019s object"
			};
			var dr = function(t) {
					if (this.items = [], this.length = 0, this.type = "set", t)
						for (var e = 0, r = t.length; r > e; e++) !t[e] || t[e].constructor != tr.constructor && t[e].constructor != dr || (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
				},
				pr = dr.prototype;
			pr.push = function() {
				for (var t, e, r = 0, n = arguments.length; n > r; r++) t = arguments[r], !t || t.constructor != tr.constructor && t.constructor != dr || (e = this.items.length, this[e] = this.items[e] = t, this.length++);
				return this
			}, pr.pop = function() {
				return this.length && delete this[this.length--], this.items.pop()
			}, pr.forEach = function(t, e) {
				for (var r = 0, n = this.items.length; n > r; r++)
					if (t.call(e, this.items[r], r) === !1) return this;
				return this
			};
			for (var vr in tr) tr[T](vr) && (pr[vr] = function(t) {
				return function() {
					var e = arguments;
					return this.forEach(function(r) {
						r[t][L](r, e)
					})
				}
			}(vr));
			return pr.attr = function(t, e) {
					if (t && r.is(t, $) && r.is(t[0], "object"))
						for (var n = 0, i = t.length; i > n; n++) this.items[n].attr(t[n]);
					else
						for (var a = 0, s = this.items.length; s > a; a++) this.items[a].attr(t, e);
					return this
				}, pr.clear = function() {
					for (; this.length;) this.pop()
				}, pr.splice = function(t, e) {
					t = 0 > t ? j(this.length + t, 0) : t, e = j(0, U(this.length - t, e));
					var r, n = [],
						i = [],
						a = [];
					for (r = 2; r < arguments.length; r++) a.push(arguments[r]);
					for (r = 0; e > r; r++) i.push(this[t + r]);
					for (; r < this.length - t; r++) n.push(this[t + r]);
					var s = a.length;
					for (r = 0; r < s + n.length; r++) this.items[t + r] = this[t + r] = s > r ? a[r] : n[r - s];
					for (r = this.items.length = this.length -= e - s; this[r];) delete this[r++];
					return new dr(i)
				}, pr.exclude = function(t) {
					for (var e = 0, r = this.length; r > e; e++)
						if (this[e] == t) return this.splice(e, 1), !0
				}, pr.animate = function(t, e, n, i) {
					(r.is(n, "function") || !n) && (i = n || null);
					var a, s, o = this.items.length,
						l = o,
						u = this;
					if (!o) return this;
					i && (s = function() {
						!--o && i.call(u)
					}), n = r.is(n, X) ? n : s;
					var c = r.animation(t, e, n, s);
					for (a = this.items[--l].animate(c); l--;) this.items[l] && !this.items[l].removed && this.items[l].animateWith(a, c, c), this.items[l] && !this.items[l].removed || o--;
					return this
				}, pr.insertAfter = function(t) {
					for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
					return this
				}, pr.getBBox = function() {
					for (var t = [], e = [], r = [], n = [], i = this.items.length; i--;)
						if (!this.items[i].removed) {
							var a = this.items[i].getBBox();
							t.push(a.x), e.push(a.y), r.push(a.x + a.width), n.push(a.y + a.height)
						}
					return t = U[L](0, t), e = U[L](0, e), r = j[L](0, r), n = j[L](0, n), {
						x: t,
						y: e,
						x2: r,
						y2: n,
						width: r - t,
						height: n - e
					}
				}, pr.clone = function(t) {
					t = this.paper.set();
					for (var e = 0, r = this.items.length; r > e; e++) t.push(this.items[e].clone());
					return t
				}, pr.toString = function() {
					return "Rapha\xebl\u2018s set"
				}, pr.glow = function(t) {
					var e = this.paper.set();
					return this.forEach(function(r) {
						var n = r.glow(t);
						null != n && n.forEach(function(t) {
							e.push(t)
						})
					}), e
				}, pr.isPointInside = function(t, e) {
					var r = !1;
					return this.forEach(function(n) {
						return n.isPointInside(t, e) ? (r = !0, !1) : void 0
					}), r
				}, r.registerFont = function(t) {
					if (!t.face) return t;
					this.fonts = this.fonts || {};
					var e = {
							w: t.w,
							face: {},
							glyphs: {}
						},
						r = t.face["font-family"];
					for (var n in t.face) t.face[T](n) && (e.face[n] = t.face[n]);
					if (this.fonts[r] ? this.fonts[r].push(e) : this.fonts[r] = [e], !t.svg) {
						e.face["units-per-em"] = re(t.face["units-per-em"], 10);
						for (var i in t.glyphs)
							if (t.glyphs[T](i)) {
								var a = t.glyphs[i];
								if (e.glyphs[i] = {
										w: a.w,
										k: {},
										d: a.d && "M" + a.d.replace(/[mlcxtrv]/g, function(t) {
											return {
												l: "L",
												c: "C",
												x: "z",
												t: "m",
												r: "l",
												v: "c"
											}[t] || "M"
										}) + "z"
									}, a.k)
									for (var s in a.k) a[T](s) && (e.glyphs[i].k[s] = a.k[s])
							}
					}
					return t
				}, k.getFont = function(t, e, n, i) {
					if (i = i || "normal", n = n || "normal", e = +e || {
							normal: 400,
							bold: 700,
							lighter: 300,
							bolder: 800
						}[e] || 400, r.fonts) {
						var a = r.fonts[t];
						if (!a) {
							var s = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, N) + "(\\s|$)", "i");
							for (var o in r.fonts)
								if (r.fonts[T](o) && s.test(o)) {
									a = r.fonts[o];
									break
								}
						}
						var l;
						if (a)
							for (var u = 0, c = a.length; c > u && (l = a[u], l.face["font-weight"] != e || l.face["font-style"] != n && l.face["font-style"] || l.face["font-stretch"] != i); u++);
						return l
					}
				}, k.print = function(t, e, n, i, a, s, o, l) {
					s = s || "middle", o = j(U(o || 0, 1), -1), l = j(U(l || 1, 3), 1);
					var u, c = E(n)[O](N),
						h = 0,
						f = 0,
						g = N;
					if (r.is(i, "string") && (i = this.getFont(i)), i) {
						u = (a || 16) / i.face["units-per-em"];
						for (var d = i.face.bbox[O](C), p = +d[0], v = d[3] - d[1], m = 0, x = +d[1] + ("baseline" == s ? v + +i.face.descent : v / 2), y = 0, b = c.length; b > y; y++) {
							if ("\n" == c[y]) h = 0, w = 0, f = 0, m += v * l;
							else {
								var _ = f && i.glyphs[c[y - 1]] || {},
									w = i.glyphs[c[y]];
								h += f ? (_.w || i.w) + (_.k && _.k[c[y]] || 0) + i.w * o : 0, f = 1
							}
							w && w.d && (g += r.transformPath(w.d, ["t", h * u, m * u, "s", u, u, p, x, "t", (t - p) / u, (e - x) / u]))
						}
					}
					return this.path(g).attr({
						fill: "#000",
						stroke: "none"
					})
				}, k.add = function(t) {
					if (r.is(t, "array"))
						for (var e, n = this.set(), i = 0, a = t.length; a > i; i++) e = t[i] || {}, S[T](e.type) && n.push(this[e.type]().attr(e));
					return n
				}, r.format = function(t, e) {
					var n = r.is(e, $) ? [0][M](e) : arguments;
					return t && r.is(t, X) && n.length - 1 && (t = t.replace(A, function(t, e) {
						return null == n[++e] ? N : n[e]
					})), t || N
				}, r.fullfill = function() {
					var t = /\{([^\}]+)\}/g,
						e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
						r = function(t, r, n) {
							var i = n;
							return r.replace(e, function(t, e, r, n, a) {
								e = e || n, i && (e in i && (i = i[e]), "function" == typeof i && a && (i = i()))
							}), i = (null == i || i == n ? t : i) + ""
						};
					return function(e, n) {
						return String(e).replace(t, function(t, e) {
							return r(t, e, n)
						})
					}
				}(), r.ninja = function() {
					return B.was ? I.win.Raphael = B.is : delete Raphael, r
				}, r.st = pr,
				function(t, e, n) {
					function i() {
						/in/.test(t.readyState) ? setTimeout(i, 9) : r.eve("raphael.DOMload")
					}
					null == t.readyState && t.addEventListener && (t.addEventListener(e, n = function() {
						t.removeEventListener(e, n, !1), t.readyState = "complete"
					}, !1), t.readyState = "loading"), i()
				}(document, "DOMContentLoaded"), e.on("raphael.DOMload", function() {
					w = !0
				}), B.was ? I.win.Raphael = r : Raphael = r, r
		}), t = Raphael
	}(), o = function() {
		window.Raphael && window.Raphael.svg && function(t) {
			var e = "hasOwnProperty",
				r = String,
				n = parseFloat,
				i = parseInt,
				a = Math,
				s = a.max,
				o = a.abs,
				l = a.pow,
				u = /[, ]+/,
				c = t.eve,
				h = "",
				f = " ",
				g = "http://www.w3.org/1999/xlink",
				d = {
					block: "M5,0 0,2.5 5,5z",
					classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
					diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
					open: "M6,1 1,3.5 6,6",
					oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
				},
				p = {};
			t.toString = function() {
				return "Your browser supports SVG.\nYou are running Rapha\xebl " + this.version
			};
			var v = function(n, i) {
					if (i) {
						"string" == typeof n && (n = v(n));
						for (var a in i) i[e](a) && ("xlink:" == a.substring(0, 6) ? n.setAttributeNS(g, a.substring(6), r(i[a])) : n.setAttribute(a, r(i[a])))
					} else n = t._g.doc.createElementNS("http://www.w3.org/2000/svg", n), n.style && (n.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
					return n
				},
				m = function(e, i) {
					var u = "linear",
						c = e.id + i,
						f = .5,
						g = .5,
						d = e.node,
						p = e.paper,
						m = d.style,
						x = t._g.doc.getElementById(c);
					if (!x) {
						if (i = r(i).replace(t._radial_gradient, function(t, e, r) {
								if (u = "radial", e && r) {
									f = n(e), g = n(r);
									var i = 2 * (g > .5) - 1;
									l(f - .5, 2) + l(g - .5, 2) > .25 && (g = a.sqrt(.25 - l(f - .5, 2)) * i + .5) && .5 != g && (g = g.toFixed(5) - 1e-5 * i)
								}
								return h
							}), i = i.split(/\s*\-\s*/), "linear" == u) {
							var y = i.shift();
							if (y = -n(y), isNaN(y)) return null;
							var b = [0, 0, a.cos(t.rad(y)), a.sin(t.rad(y))],
								_ = 1 / (s(o(b[2]), o(b[3])) || 1);
							b[2] *= _, b[3] *= _, b[2] < 0 && (b[0] = -b[2], b[2] = 0), b[3] < 0 && (b[1] = -b[3], b[3] = 0)
						}
						var w = t._parseDots(i);
						if (!w) return null;
						if (c = c.replace(/[\(\)\s,\xb0#]/g, "_"), e.gradient && c != e.gradient.id && (p.defs.removeChild(e.gradient), delete e.gradient), !e.gradient) {
							x = v(u + "Gradient", {
								id: c
							}), e.gradient = x, v(x, "radial" == u ? {
								fx: f,
								fy: g
							} : {
								x1: b[0],
								y1: b[1],
								x2: b[2],
								y2: b[3],
								gradientTransform: e.matrix.invert()
							}), p.defs.appendChild(x);
							for (var k = 0, C = w.length; C > k; k++) x.appendChild(v("stop", {
								offset: w[k].offset ? w[k].offset : k ? "100%" : "0%",
								"stop-color": w[k].color || "#fff"
							}))
						}
					}
					return v(d, {
						fill: "url(#" + c + ")",
						opacity: 1,
						"fill-opacity": 1
					}), m.fill = h, m.opacity = 1, m.fillOpacity = 1, 1
				},
				x = function(t) {
					var e = t.getBBox(1);
					v(t.pattern, {
						patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")"
					})
				},
				y = function(n, i, a) {
					if ("path" == n.type) {
						for (var s, o, l, u, c, f = r(i).toLowerCase().split("-"), g = n.paper, m = a ? "end" : "start", x = n.node, y = n.attrs, b = y["stroke-width"], _ = f.length, w = "classic", k = 3, C = 3, S = 5; _--;) switch (f[_]) {
							case "block":
							case "classic":
							case "oval":
							case "diamond":
							case "open":
							case "none":
								w = f[_];
								break;
							case "wide":
								C = 5;
								break;
							case "narrow":
								C = 2;
								break;
							case "long":
								k = 5;
								break;
							case "short":
								k = 2
						}
						if ("open" == w ? (k += 2, C += 2, S += 2, l = 1, u = a ? 4 : 1, c = {
								fill: "none",
								stroke: y.stroke
							}) : (u = l = k / 2, c = {
								fill: y.stroke,
								stroke: "none"
							}), n._.arrows ? a ? (n._.arrows.endPath && p[n._.arrows.endPath]--, n._.arrows.endMarker && p[n._.arrows.endMarker]--) : (n._.arrows.startPath && p[n._.arrows.startPath]--, n._.arrows.startMarker && p[n._.arrows.startMarker]--) : n._.arrows = {}, "none" != w) {
							var A = "raphael-marker-" + w,
								T = "raphael-marker-" + m + w + k + C;
							t._g.doc.getElementById(A) ? p[A]++ : (g.defs.appendChild(v(v("path"), {
								"stroke-linecap": "round",
								d: d[w],
								id: A
							})), p[A] = 1);
							var I, B = t._g.doc.getElementById(T);
							B ? (p[T]++, I = B.getElementsByTagName("use")[0]) : (B = v(v("marker"), {
								id: T,
								markerHeight: C,
								markerWidth: k,
								orient: "auto",
								refX: u,
								refY: C / 2
							}), I = v(v("use"), {
								"xlink:href": "#" + A,
								transform: (a ? "rotate(180 " + k / 2 + " " + C / 2 + ") " : h) + "scale(" + k / S + "," + C / S + ")",
								"stroke-width": (1 / ((k / S + C / S) / 2)).toFixed(4)
							}), B.appendChild(I), g.defs.appendChild(B), p[T] = 1), v(I, c);
							var P = l * ("diamond" != w && "oval" != w);
							a ? (s = n._.arrows.startdx * b || 0, o = t.getTotalLength(y.path) - P * b) : (s = P * b, o = t.getTotalLength(y.path) - (n._.arrows.enddx * b || 0)), c = {}, c["marker-" + m] = "url(#" + T + ")", (o || s) && (c.d = t.getSubpath(y.path, s, o)), v(x, c), n._.arrows[m + "Path"] = A, n._.arrows[m + "Marker"] = T, n._.arrows[m + "dx"] = P, n._.arrows[m + "Type"] = w, n._.arrows[m + "String"] = i
						} else a ? (s = n._.arrows.startdx * b || 0, o = t.getTotalLength(y.path) - s) : (s = 0, o = t.getTotalLength(y.path) - (n._.arrows.enddx * b || 0)), n._.arrows[m + "Path"] && v(x, {
							d: t.getSubpath(y.path, s, o)
						}), delete n._.arrows[m + "Path"], delete n._.arrows[m + "Marker"], delete n._.arrows[m + "dx"], delete n._.arrows[m + "Type"], delete n._.arrows[m + "String"];
						for (c in p)
							if (p[e](c) && !p[c]) {
								var L = t._g.doc.getElementById(c);
								L && L.parentNode.removeChild(L)
							}
					}
				},
				b = {
					"": [0],
					none: [0],
					"-": [3, 1],
					".": [1, 1],
					"-.": [3, 1, 1, 1],
					"-..": [3, 1, 1, 1, 1, 1],
					". ": [1, 3],
					"- ": [4, 3],
					"--": [8, 3],
					"- .": [4, 3, 1, 3],
					"--.": [8, 3, 1, 3],
					"--..": [8, 3, 1, 3, 1, 3]
				},
				_ = function(t, e, n) {
					if (e = b[r(e).toLowerCase()]) {
						for (var i = t.attrs["stroke-width"] || "1", a = {
								round: i,
								square: i,
								butt: 0
							}[t.attrs["stroke-linecap"] || n["stroke-linecap"]] || 0, s = [], o = e.length; o--;) s[o] = e[o] * i + (o % 2 ? 1 : -1) * a;
						v(t.node, {
							"stroke-dasharray": s.join(",")
						})
					}
				},
				w = function(n, a) {
					var l = n.node,
						c = n.attrs,
						f = l.style.visibility;
					l.style.visibility = "hidden";
					for (var d in a)
						if (a[e](d)) {
							if (!t._availableAttrs[e](d)) continue;
							var p = a[d];
							switch (c[d] = p, d) {
								case "blur":
									n.blur(p);
									break;
								case "href":
								case "title":
									var b = v("title"),
										w = t._g.doc.createTextNode(p);
									b.appendChild(w), l.appendChild(b);
									break;
								case "target":
									var k = l.parentNode;
									if ("a" != k.tagName.toLowerCase()) {
										var b = v("a");
										k.insertBefore(b, l), b.appendChild(l), k = b
									}
									"target" == d ? k.setAttributeNS(g, "show", "blank" == p ? "new" : p) : k.setAttributeNS(g, d, p);
									break;
								case "cursor":
									l.style.cursor = p;
									break;
								case "transform":
									n.transform(p);
									break;
								case "arrow-start":
									y(n, p);
									break;
								case "arrow-end":
									y(n, p, 1);
									break;
								case "clip-angle":
									var S = r(p).split(u);
									if (4 == S.length) {
										var A = {
												x: parseInt(S[0], 10),
												y: parseInt(S[1], 10)
											},
											T = Math.PI / 180,
											I = function(t, e) {
												var r = {};
												return r.x = A.x + e * Math.sin(t * T), r.y = A.y - e * Math.cos(t * T), r
											},
											B = function(t, e, r) {
												var n, i = A.x,
													a = A.y,
													s = I(t, r),
													o = I(e, r);
												return n = ["M", i + ",", a, "L", s.x + ",", s.y, "A", r + ",", r + ",", "0,", +(e - t > 180) + ",", "1,", o.x + ",", o.y, "z"], n.join("")
											};
										n.clip && n.clip.parentNode.parentNode.removeChild(n.clip.parentNode);
										var P = v("clipPath"),
											L = v("path");
										P.id = t.createUUID();
										var M = B(0, parseInt(S[3], 10), parseInt(S[2], 10));
										v(L, {
											d: M,
											fill: "#ffffff",
											stroke: "#000000",
											"stroke-width": 1.5
										}), P.appendChild(L), n.paper.defs.appendChild(P), v(l, {
											"clip-path": "url(#" + P.id + ")"
										}), n.clip = L
									}
									if (!p) {
										var R = l.getAttribute("clip-path");
										if (R) {
											var N = t._g.doc.getElementById(R.replace(/(^url\(#|\)$)/g, h));
											N && N.parentNode.removeChild(N), v(l, {
												"clip-path": h
											}), delete n.clip
										}
									}
									break;
								case "clip-circle":
									var F = r(p).split(u);
									if (3 == F.length) {
										n.clip && n.clip.parentNode.parentNode.removeChild(n.clip.parentNode);
										var P = v("clipPath"),
											E = v("circle");
										P.id = t.createUUID(), v(E, {
											cx: F[0],
											cy: F[1],
											r: F[2]
										}), P.appendChild(E), n.paper.defs.appendChild(P), v(l, {
											"clip-path": "url(#" + P.id + ")"
										}), n.clip = E
									}
									if (!p) {
										var R = l.getAttribute("clip-path");
										if (R) {
											var N = t._g.doc.getElementById(R.replace(/(^url\(#|\)$)/g, h));
											N && N.parentNode.removeChild(N), v(l, {
												"clip-path": h
											}), delete n.clip
										}
									}
									break;
								case "clip-rect":
									var O = r(p).split(u);
									if (4 == O.length) {
										n.clip && n.clip.parentNode.parentNode.removeChild(n.clip.parentNode);
										var P = v("clipPath"),
											D = v("rect");
										P.id = t.createUUID(), v(D, {
											x: O[0],
											y: O[1],
											width: O[2],
											height: O[3]
										}), P.appendChild(D), n.paper.defs.appendChild(P), v(l, {
											"clip-path": "url(#" + P.id + ")"
										}), n.clip = D
									}
									if (!p) {
										var R = l.getAttribute("clip-path");
										if (R) {
											var N = t._g.doc.getElementById(R.replace(/(^url\(#|\)$)/g, h));
											N && N.parentNode.removeChild(N), v(l, {
												"clip-path": h
											}), delete n.clip
										}
									}
									break;
								case "path":
									"path" == n.type && (v(l, {
										d: p ? c.path = t._pathToAbsolute(p) : "M0,0"
									}), n._.dirty = 1, n._.arrows && ("startString" in n._.arrows && y(n, n._.arrows.startString), "endString" in n._.arrows && y(n, n._.arrows.endString, 1)));
									break;
								case "width":
									if (l.setAttribute(d, p), n._.dirty = 1, !c.fx) break;
									d = "x", p = c.x;
								case "x":
									c.fx && (p = -c.x - (c.width || 0));
								case "rx":
									if ("rx" == d && "rect" == n.type) break;
								case "cx":
									l.setAttribute(d, p), n.pattern && x(n), n._.dirty = 1;
									break;
								case "height":
									if (l.setAttribute(d, p), n._.dirty = 1, !c.fy) break;
									d = "y", p = c.y;
								case "y":
									c.fy && (p = -c.y - (c.height || 0));
								case "ry":
									if ("ry" == d && "rect" == n.type) break;
								case "cy":
									l.setAttribute(d, p), n.pattern && x(n), n._.dirty = 1;
									break;
								case "r":
									"rect" == n.type ? v(l, {
										rx: p,
										ry: p
									}) : l.setAttribute(d, p), n._.dirty = 1;
									break;
								case "src":
									"image" == n.type && l.setAttributeNS(g, "href", p);
									break;
								case "stroke-width":
									(1 != n._.sx || 1 != n._.sy) && (p /= s(o(n._.sx), o(n._.sy)) || 1), n.paper._vbSize && (p *= n.paper._vbSize), l.setAttribute(d, p), c["stroke-dasharray"] && _(n, c["stroke-dasharray"], a), n._.arrows && ("startString" in n._.arrows && y(n, n._.arrows.startString), "endString" in n._.arrows && y(n, n._.arrows.endString, 1));
									break;
								case "stroke-dasharray":
									_(n, p, a);
									break;
								case "fill":
									var G = r(p).match(t._ISURL);
									if (G) {
										P = v("pattern");
										var z = v("image");
										P.id = t.createUUID(), v(P, {
												x: 0,
												y: 0,
												patternUnits: "userSpaceOnUse",
												height: 1,
												width: 1
											}), v(z, {
												x: 0,
												y: 0,
												"xlink:href": G[1]
											}), P.appendChild(z),
											function(e) {
												t._preload(G[1], function() {
													var t = this.offsetWidth,
														r = this.offsetHeight;
													v(e, {
														width: t,
														height: r
													}), v(z, {
														width: t,
														height: r
													}), n.paper.safari()
												})
											}(P), n.paper.defs.appendChild(P), v(l, {
												fill: "url(#" + P.id + ")"
											}), n.pattern = P, n.pattern && x(n);
										break
									}
									var V = t.getRGB(p);
									if (V.error) {
										if (("circle" == n.type || "ellipse" == n.type || "r" != r(p).charAt()) && m(n, p)) {
											if ("opacity" in c || "fill-opacity" in c) {
												var j = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, h));
												if (j) {
													var U = j.getElementsByTagName("stop");
													v(U[U.length - 1], {
														"stop-opacity": ("opacity" in c ? c.opacity : 1) * ("fill-opacity" in c ? c["fill-opacity"] : 1)
													})
												}
											}
											c.gradient = p, c.fill = "none";
											break
										}
									} else delete a.gradient, delete c.gradient, !t.is(c.opacity, "undefined") && t.is(a.opacity, "undefined") && v(l, {
										opacity: c.opacity
									}), !t.is(c["fill-opacity"], "undefined") && t.is(a["fill-opacity"], "undefined") && v(l, {
										"fill-opacity": c["fill-opacity"]
									});
									V[e]("opacity") && v(l, {
										"fill-opacity": V.opacity > 1 ? V.opacity / 100 : V.opacity
									});
								case "stroke":
									V = t.getRGB(p), l.setAttribute(d, V.hex), "stroke" == d && V[e]("opacity") && v(l, {
										"stroke-opacity": V.opacity > 1 ? V.opacity / 100 : V.opacity
									}), "stroke" == d && n._.arrows && ("startString" in n._.arrows && y(n, n._.arrows.startString), "endString" in n._.arrows && y(n, n._.arrows.endString, 1));
									break;
								case "gradient":
									("circle" == n.type || "ellipse" == n.type || "r" != r(p).charAt()) && m(n, p);
									break;
								case "opacity":
									c.gradient && !c[e]("stroke-opacity") && v(l, {
										"stroke-opacity": p > 1 ? p / 100 : p
									});
								case "fill-opacity":
									if (c.gradient) {
										j = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, h)), j && (U = j.getElementsByTagName("stop"), v(U[U.length - 1], {
											"stop-opacity": p
										}));
										break
									}
								default:
									"font-size" == d && (p = i(p, 10) + "px");
									var Y = d.replace(/(\-.)/g, function(t) {
										return t.substring(1).toUpperCase()
									});
									l.style[Y] = p, n._.dirty = 1, l.setAttribute(d, p)
							}
						}
					C(n, a), l.style.visibility = f
				},
				k = 1.2,
				C = function(n, a) {
					if ("text" == n.type && (a[e]("text") || a[e]("font") || a[e]("font-size") || a[e]("x") || a[e]("y"))) {
						var s = n.attrs,
							o = n.node,
							l = o.firstChild ? i(t._g.doc.defaultView.getComputedStyle(o.firstChild, h).getPropertyValue("font-size"), 10) : 10;
						if (a[e]("text")) {
							for (s.text = a.text; o.firstChild;) o.removeChild(o.firstChild);
							for (var u, c = r(a.text).split("\n"), f = [], g = 0, d = c.length; d > g; g++) u = v("tspan"), g && v(u, {
								dy: l * k,
								x: s.x
							}), u.appendChild(t._g.doc.createTextNode(c[g])), o.appendChild(u), f[g] = u
						} else
							for (f = o.getElementsByTagName("tspan"), g = 0, d = f.length; d > g; g++) g ? v(f[g], {
								dy: l * k,
								x: s.x
							}) : v(f[0], {
								dy: 0
							});
						v(o, {
							x: s.x,
							y: s.y
						}), n._.dirty = 1;
						var p = n._getBBox(),
							m = s.y - (p.y + p.height / 2);
						m && t.is(m, "finite") && v(f[0], {
							dy: m
						})
					}
				},
				S = function(e, r) {
					this[0] = this.node = e, e.raphael = !0, this.id = t._oid++, e.raphaelid = this.id, this.matrix = t.matrix(), this.realPath = null, this.paper = r, this.attrs = this.attrs || {}, this._ = {
						transform: [],
						sx: 1,
						sy: 1,
						deg: 0,
						dx: 0,
						dy: 0,
						dirty: 1
					}, !r.bottom && (r.bottom = this), this.prev = r.top, r.top && (r.top.next = this), r.top = this, this.next = null
				},
				A = t.el;
			S.prototype = A, A.constructor = S, t._engine.path = function(t, e) {
				var r = v("path");
				e.canvas && e.canvas.appendChild(r);
				var n = new S(r, e);
				return n.type = "path", w(n, {
					fill: "none",
					stroke: "#000",
					path: t
				}), n
			}, A.rotate = function(t, e, i) {
				if (this.removed) return this;
				if (t = r(t).split(u), t.length - 1 && (e = n(t[1]), i = n(t[2])), t = n(t[0]), null == i && (e = i), null == e || null == i) {
					var a = this.getBBox(1);
					e = a.x + a.width / 2, i = a.y + a.height / 2
				}
				return this.transform(this._.transform.concat([
					["r", t, e, i]
				])), this
			}, A.scale = function(t, e, i, a) {
				if (this.removed) return this;
				if (t = r(t).split(u), t.length - 1 && (e = n(t[1]), i = n(t[2]), a = n(t[3])), t = n(t[0]), null == e && (e = t), null == a && (i = a), null == i || null == a) var s = this.getBBox(1);
				return i = null == i ? s.x + s.width / 2 : i, a = null == a ? s.y + s.height / 2 : a, this.transform(this._.transform.concat([
					["s", t, e, i, a]
				])), this
			}, A.translate = function(t, e) {
				return this.removed ? this : (t = r(t).split(u), t.length - 1 && (e = n(t[1])), t = n(t[0]) || 0, e = +e || 0, this.transform(this._.transform.concat([
					["t", t, e]
				])), this)
			}, A.transform = function(r) {
				var n = this._;
				if (null == r) return n.transform;
				if (t._extractTransform(this, r), this.clip && v(this.clip, {
						transform: this.matrix.invert()
					}), this.pattern && x(this), this.node && v(this.node, {
						transform: this.matrix
					}), 1 != n.sx || 1 != n.sy) {
					var i = this.attrs[e]("stroke-width") ? this.attrs["stroke-width"] : 1;
					this.attr({
						"stroke-width": i
					})
				}
				return this
			}, A.hide = function() {
				return !this.removed && this.paper.safari(this.node.style.display = "none"), this
			}, A.show = function() {
				return !this.removed && this.paper.safari(this.node.style.display = ""), this
			}, A.remove = function() {
				if (!this.removed && this.node.parentNode) {
					var e = this.paper;
					e.__set__ && e.__set__.exclude(this), c.unbind("raphael.*.*." + this.id), this.gradient && e.defs.removeChild(this.gradient), t._tear(this, e), "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
					for (var r in this) this[r] = "function" == typeof this[r] ? t._removedFactory(r) : null;
					this.removed = !0
				}
			}, A._getBBox = function() {
				if ("none" == this.node.style.display) {
					this.show();
					var t = !0
				}
				var e = {};
				try {
					e = this.node.getBBox()
				} catch (r) {} finally {
					e = e || {}
				}
				return t && this.hide(), e
			}, A.attr = function(r, n) {
				if (this.removed) return this;
				if (null == r) {
					var i = {};
					for (var a in this.attrs) this.attrs[e](a) && (i[a] = this.attrs[a]);
					return i.gradient && "none" == i.fill && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i
				}
				if (null == n && t.is(r, "string")) {
					if ("fill" == r && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
					if ("transform" == r) return this._.transform;
					for (var s = r.split(u), o = {}, l = 0, h = s.length; h > l; l++) r = s[l], o[r] = r in this.attrs ? this.attrs[r] : t.is(this.paper.customAttributes[r], "function") ? this.paper.customAttributes[r].def : t._availableAttrs[r];
					return h - 1 ? o : o[s[0]]
				}
				if (null == n && t.is(r, "array")) {
					for (o = {}, l = 0, h = r.length; h > l; l++) o[r[l]] = this.attr(r[l]);
					return o
				}
				if (null != n) {
					var f = {};
					f[r] = n
				} else null != r && t.is(r, "object") && (f = r);
				for (var g in f) c("raphael.attr." + g + "." + this.id, this, f[g]);
				for (g in this.paper.customAttributes)
					if (this.paper.customAttributes[e](g) && f[e](g) && t.is(this.paper.customAttributes[g], "function")) {
						var d = this.paper.customAttributes[g].apply(this, [].concat(f[g]));
						this.attrs[g] = f[g];
						for (var p in d) d[e](p) && (f[p] = d[p])
					}
				return w(this, f), this
			}, A.toFront = function() {
				if (this.removed) return this;
				"a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
				var e = this.paper;
				return e.top != this && t._tofront(this, e), this
			}, A.toBack = function() {
				if (this.removed) return this;
				var e = this.node.parentNode;
				"a" == e.tagName.toLowerCase() ? e.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : e.firstChild != this.node && e.insertBefore(this.node, this.node.parentNode.firstChild), t._toback(this, this.paper);
				this.paper;
				return this
			}, A.insertAfter = function(e) {
				if (this.removed) return this;
				var r = e.node || e[e.length - 1].node;
				return r.nextSibling ? r.parentNode.insertBefore(this.node, r.nextSibling) : r.parentNode.appendChild(this.node), t._insertafter(this, e, this.paper), this
			}, A.insertBefore = function(e) {
				if (this.removed) return this;
				var r = e.node || e[0].node;
				return r.parentNode.insertBefore(this.node, r), t._insertbefore(this, e, this.paper), this
			}, A.blur = function(e) {
				var r = this;
				if (0 !== +e) {
					var n = v("filter"),
						i = v("feGaussianBlur");
					r.attrs.blur = e, n.id = t.createUUID(), v(i, {
						stdDeviation: +e || 1.5
					}), n.appendChild(i), r.paper.defs.appendChild(n), r._blur = n, v(r.node, {
						filter: "url(#" + n.id + ")"
					})
				} else r._blur && (r._blur.parentNode.removeChild(r._blur), delete r._blur, delete r.attrs.blur), r.node.removeAttribute("filter");
				return r
			}, t._engine.circle = function(t, e, r, n) {
				var i = v("circle");
				t.canvas && t.canvas.appendChild(i);
				var a = new S(i, t);
				return a.attrs = {
					cx: e,
					cy: r,
					r: n,
					fill: "none",
					stroke: "#000"
				}, a.type = "circle", v(i, a.attrs), a
			}, t._engine.rect = function(t, e, r, n, i, a) {
				var s = v("rect");
				t.canvas && t.canvas.appendChild(s);
				var o = new S(s, t);
				return o.attrs = {
					x: e,
					y: r,
					width: n,
					height: i,
					r: a || 0,
					rx: a || 0,
					ry: a || 0,
					fill: "none",
					stroke: "#000"
				}, o.type = "rect", v(s, o.attrs), o
			}, t._engine.ellipse = function(t, e, r, n, i) {
				var a = v("ellipse");
				t.canvas && t.canvas.appendChild(a);
				var s = new S(a, t);
				return s.attrs = {
					cx: e,
					cy: r,
					rx: n,
					ry: i,
					fill: "none",
					stroke: "#000"
				}, s.type = "ellipse", v(a, s.attrs), s
			}, t._engine.image = function(t, e, r, n, i, a) {
				var s = v("image");
				v(s, {
					x: r,
					y: n,
					width: i,
					height: a,
					preserveAspectRatio: "none"
				}), s.setAttributeNS(g, "href", e), t.canvas && t.canvas.appendChild(s);
				var o = new S(s, t);
				return o.attrs = {
					x: r,
					y: n,
					width: i,
					height: a,
					src: e
				}, o.type = "image", o
			}, t._engine.text = function(e, r, n, i) {
				var a = v("text");
				e.canvas && e.canvas.appendChild(a);
				var s = new S(a, e);
				return s.attrs = {
					x: r,
					y: n,
					"text-anchor": "middle",
					text: i,
					font: t._availableAttrs.font,
					stroke: "none",
					fill: "#000"
				}, s.type = "text", w(s, s.attrs), s
			}, t._engine.setSize = function(t, e) {
				return this.width = t || this.width, this.height = e || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
			}, t._engine.create = function() {
				var e = t._getContainer.apply(0, arguments),
					r = e && e.container,
					n = e.x,
					i = e.y,
					a = e.width,
					s = e.height;
				if (!r) throw new Error("SVG container not found.");
				var o, l = v("svg"),
					u = "overflow:hidden;";
				return n = n || 0, i = i || 0, a = a || 512, s = s || 342, v(l, {
					height: s,
					version: 1.1,
					width: a,
					xmlns: "http://www.w3.org/2000/svg"
				}), 1 == r ? (l.style.cssText = u + "position:absolute;left:" + n + "px;top:" + i + "px", t._g.doc.body.appendChild(l), o = 1) : (l.style.cssText = u + "position:relative", r.firstChild ? r.insertBefore(l, r.firstChild) : r.appendChild(l)), r = new t._Paper, r.width = a, r.height = s, r.canvas = l, r.clear(), r._left = r._top = 0, o && (r.renderfix = function() {}), r.renderfix(), r
			}, t._engine.setViewBox = function(t, e, r, n, i) {
				c("raphael.setViewBox", this, this._viewBox, [t, e, r, n, i]);
				var a, o, l = s(r / this.width, n / this.height),
					u = this.top,
					h = i ? "meet" : "xMinYMin";
				for (null == t ? (this._vbSize && (l = 1), delete this._vbSize, a = "0 0 " + this.width + f + this.height) : (this._vbSize = l, a = t + f + e + f + r + f + n), v(this.canvas, {
						viewBox: a,
						preserveAspectRatio: h
					}); l && u;) o = "stroke-width" in u.attrs ? u.attrs["stroke-width"] : 1, u.attr({
					"stroke-width": o
				}), u._.dirty = 1, u._.dirtyT = 1, u = u.prev;
				return this._viewBox = [t, e, r, n, !!i], this
			}, t.prototype.renderfix = function() {
				var t, e = this.canvas,
					r = e.style;
				try {
					t = e.getScreenCTM() || e.createSVGMatrix()
				} catch (n) {
					t = e.createSVGMatrix()
				}
				var i = -t.e % 1,
					a = -t.f % 1;
				(i || a) && (i && (this._left = (this._left + i) % 1, r.left = this._left + "px"), a && (this._top = (this._top + a) % 1, r.top = this._top + "px"))
			}, t.prototype.clear = function() {
				t.eve("raphael.clear", this);
				for (var e = this.canvas; e.firstChild;) e.removeChild(e.firstChild);
				this.bottom = this.top = null, (this.desc = v("desc")).appendChild(t._g.doc.createTextNode("Created with Rapha\xebl " + t.version)), e.appendChild(this.desc), e.appendChild(this.defs = v("defs"))
			}, t.prototype.remove = function() {
				c("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
				for (var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null
			};
			var T = t.st;
			for (var I in A) A[e](I) && !T[e](I) && (T[I] = function(t) {
				return function() {
					var e = arguments;
					return this.forEach(function(r) {
						r[t].apply(r, e)
					})
				}
			}(I))
		}(window.Raphael)
	}(), l = function() {
		window.Raphael && window.Raphael.vml && function(t) {
			var e = "hasOwnProperty",
				r = String,
				n = parseFloat,
				i = Math,
				a = i.round,
				s = i.max,
				o = i.min,
				l = i.abs,
				u = "fill",
				c = /[, ]+/,
				h = t.eve,
				f = " progid:DXImageTransform.Microsoft",
				g = " ",
				d = "",
				p = {
					M: "m",
					L: "l",
					C: "c",
					Z: "x",
					m: "t",
					l: "r",
					c: "v",
					z: "x"
				},
				v = /([clmz]),?([^clmz]*)/gi,
				m = / progid:\S+Blur\([^\)]+\)/g,
				x = /-?[^,\s-]+/g,
				y = "position:absolute;left:0;top:0;width:1px;height:1px",
				b = 21600,
				_ = {
					path: 1,
					rect: 1,
					image: 1
				},
				w = {
					circle: 1,
					ellipse: 1
				},
				k = function(e) {
					var n = /[ahqstv]/gi,
						i = t._pathToAbsolute;
					if (r(e).match(n) && (i = t._path2curve), n = /[clmz]/g, i == t._pathToAbsolute && !r(e).match(n)) {
						var s = r(e).replace(v, function(t, e, r) {
							var n = [],
								i = "m" == e.toLowerCase(),
								s = p[e];
							return r.replace(x, function(t) {
								i && 2 == n.length && (s += n + p["m" == e ? "l" : "L"], n = []), n.push(a(t * b))
							}), s + n
						});
						return s
					}
					var o, l, u = i(e);
					s = [];
					for (var c = 0, h = u.length; h > c; c++) {
						o = u[c], l = u[c][0].toLowerCase(), "z" == l && (l = "x");
						for (var f = 1, m = o.length; m > f; f++) l += a(o[f] * b) + (f != m - 1 ? "," : d);
						s.push(l)
					}
					return s.join(g)
				},
				C = function(e, r, n) {
					var i = t.matrix();
					return i.rotate(-e, .5, .5), {
						dx: i.x(r, n),
						dy: i.y(r, n)
					}
				},
				S = function(t, e, r, n, i, a) {
					var s = t._,
						o = t.matrix,
						c = s.fillpos,
						h = t.node,
						f = h.style,
						d = 1,
						p = "",
						v = b / e,
						m = b / r;
					if (f.visibility = "hidden", e && r) {
						if (h.coordsize = l(v) + g + l(m), f.rotation = a * (0 > e * r ? -1 : 1), a) {
							var x = C(a, n, i);
							n = x.dx, i = x.dy
						}
						if (0 > e && (p += "x"), 0 > r && (p += " y") && (d = -1), f.flip = p, h.coordorigin = n * -v + g + i * -m, c || s.fillsize) {
							var y = h.getElementsByTagName(u);
							y = y && y[0], h.removeChild(y), c && (x = C(a, o.x(c[0], c[1]), o.y(c[0], c[1])), y.position = x.dx * d + g + x.dy * d), s.fillsize && (y.size = s.fillsize[0] * l(e) + g + s.fillsize[1] * l(r)), h.appendChild(y)
						}
						f.visibility = "visible"
					}
				};
			t.toString = function() {
				return "Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\xebl " + this.version
			};
			var A = function(t, e, n) {
					for (var i = r(e).toLowerCase().split("-"), a = n ? "end" : "start", s = i.length, o = "classic", l = "medium", u = "medium"; s--;) switch (i[s]) {
						case "block":
						case "classic":
						case "oval":
						case "diamond":
						case "open":
						case "none":
							o = i[s];
							break;
						case "wide":
						case "narrow":
							u = i[s];
							break;
						case "long":
						case "short":
							l = i[s]
					}
					var c = t.node.getElementsByTagName("stroke")[0];
					c[a + "arrow"] = o, c[a + "arrowlength"] = l, c[a + "arrowwidth"] = u
				},
				T = function(i, l) {
					i.attrs = i.attrs || {};
					var h = i.node,
						f = i.attrs,
						p = h.style,
						v = _[i.type] && (l.x != f.x || l.y != f.y || l.width != f.width || l.height != f.height || l.cx != f.cx || l.cy != f.cy || l.rx != f.rx || l.ry != f.ry || l.r != f.r),
						m = w[i.type] && (f.cx != l.cx || f.cy != l.cy || f.r != l.r || f.rx != l.rx || f.ry != l.ry),
						x = i;
					for (var y in l) l[e](y) && (f[y] = l[y]);
					if (v && (f.path = t._getPath[i.type](i), i._.dirty = 1), l.href && (h.href = l.href), l.title && (h.title = l.title), l.target && (h.target = l.target), l.cursor && (p.cursor = l.cursor), "blur" in l && i.blur(l.blur), (l.path && "path" == i.type || v) && (h.path = k(~r(f.path).toLowerCase().indexOf("r") ? t._pathToAbsolute(f.path) : f.path), "image" == i.type && (i._.fillpos = [f.x, f.y], i._.fillsize = [f.width, f.height], S(i, 1, 1, 0, 0, 0))), "transform" in l && i.transform(l.transform), m) {
						var C = +f.cx,
							T = +f.cy,
							B = +f.rx || +f.r || 0,
							P = +f.ry || +f.r || 0;
						h.path = t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", a((C - B) * b), a((T - P) * b), a((C + B) * b), a((T + P) * b), a(C * b)), i._.dirty = 1
					}
					if ("clip-rect" in l) {
						var M = r(l["clip-rect"]).split(c);
						if (4 == M.length) {
							M[2] = +M[2] + +M[0], M[3] = +M[3] + +M[1];
							var R = h.clipRect || t._g.doc.createElement("div"),
								N = R.style;
							N.clip = t.format("rect({1}px {2}px {3}px {0}px)", M), h.clipRect || (N.position = "absolute", N.top = 0, N.left = 0, N.width = i.paper.width + "px", N.height = i.paper.height + "px", h.parentNode.insertBefore(R, h), R.appendChild(h), h.clipRect = R)
						}
						l["clip-rect"] || h.clipRect && (h.clipRect.style.clip = "auto")
					}
					if (i.textpath) {
						var F = i.textpath.style;
						l.font && (F.font = l.font), l["font-family"] && (F.fontFamily = '"' + l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, d) + '"'), l["font-size"] && (F.fontSize = l["font-size"]), l["font-weight"] && (F.fontWeight = l["font-weight"]), l["font-style"] && (F.fontStyle = l["font-style"])
					}
					if ("arrow-start" in l && A(x, l["arrow-start"]), "arrow-end" in l && A(x, l["arrow-end"], 1), null != l.opacity || null != l["stroke-width"] || null != l.fill || null != l.src || null != l.stroke || null != l["stroke-width"] || null != l["stroke-opacity"] || null != l["fill-opacity"] || null != l["stroke-dasharray"] || null != l["stroke-miterlimit"] || null != l["stroke-linejoin"] || null != l["stroke-linecap"]) {
						var E = h.getElementsByTagName(u),
							O = !1;
						if (E = E && E[0], !E && (O = E = L(u)), "image" == i.type && l.src && (E.src = l.src), l.fill && (E.on = !0), (null == E.on || "none" == l.fill || null === l.fill) && (E.on = !1), E.on && l.fill) {
							var D = r(l.fill).match(t._ISURL);
							if (D) {
								E.parentNode == h && h.removeChild(E), E.rotate = !0, E.src = D[1], E.type = "tile";
								var G = i.getBBox(1);
								E.position = G.x + g + G.y, i._.fillpos = [G.x, G.y], t._preload(D[1], function() {
									i._.fillsize = [this.offsetWidth, this.offsetHeight]
								})
							} else E.color = t.getRGB(l.fill).hex, E.src = d, E.type = "solid", t.getRGB(l.fill).error && (x.type in {
								circle: 1,
								ellipse: 1
							} || "r" != r(l.fill).charAt()) && I(x, l.fill, E) && (f.fill = "none", f.gradient = l.fill, E.rotate = !1)
						}
						if ("fill-opacity" in l || "opacity" in l) {
							var z = ((+f["fill-opacity"] + 1 || 2) - 1) * ((+f.opacity + 1 || 2) - 1) * ((+t.getRGB(l.fill).o + 1 || 2) - 1);
							z = o(s(z, 0), 1), E.opacity = z, E.src && (E.color = "none")
						}
						h.appendChild(E);
						var V = h.getElementsByTagName("stroke") && h.getElementsByTagName("stroke")[0],
							j = !1;
						!V && (j = V = L("stroke")), (l.stroke && "none" != l.stroke || l["stroke-width"] || null != l["stroke-opacity"] || l["stroke-dasharray"] || l["stroke-miterlimit"] || l["stroke-linejoin"] || l["stroke-linecap"]) && (V.on = !0), ("none" == l.stroke || null === l.stroke || null == V.on || 0 == l.stroke || 0 == l["stroke-width"]) && (V.on = !1);
						var U = t.getRGB(l.stroke);
						V.on && l.stroke && (V.color = U.hex), z = ((+f["stroke-opacity"] + 1 || 2) - 1) * ((+f.opacity + 1 || 2) - 1) * ((+U.o + 1 || 2) - 1);
						var Y = .75 * (n(l["stroke-width"]) || 1);
						if (z = o(s(z, 0), 1), null == l["stroke-width"] && (Y = f["stroke-width"]), l["stroke-width"] && (V.weight = Y), Y && 1 > Y && (z *= Y) && (V.weight = 1), V.opacity = z, l["stroke-linejoin"] && (V.joinstyle = l["stroke-linejoin"] || "miter"), V.miterlimit = l["stroke-miterlimit"] || 8, l["stroke-linecap"] && (V.endcap = "butt" == l["stroke-linecap"] ? "flat" : "square" == l["stroke-linecap"] ? "square" : "round"), l["stroke-dasharray"]) {
							var q = {
								"-": "shortdash",
								".": "shortdot",
								"-.": "shortdashdot",
								"-..": "shortdashdotdot",
								". ": "dot",
								"- ": "dash",
								"--": "longdash",
								"- .": "dashdot",
								"--.": "longdashdot",
								"--..": "longdashdotdot"
							};
							V.dashstyle = q[e](l["stroke-dasharray"]) ? q[l["stroke-dasharray"]] : d
						}
						j && h.appendChild(V)
					}
					if ("text" == x.type) {
						x.paper.canvas.style.display = d;
						var W = x.paper.span,
							H = 100,
							X = f.font && f.font.match(/\d+(?:\.\d*)?(?=px)/);
						p = W.style, f.font && (p.font = f.font), f["font-family"] && (p.fontFamily = f["font-family"]), f["font-weight"] && (p.fontWeight = f["font-weight"]), f["font-style"] && (p.fontStyle = f["font-style"]), X = n(f["font-size"] || X && X[0]) || 10, p.fontSize = X * H + "px", x.textpath.string && (W.innerHTML = r(x.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
						var $ = W.getBoundingClientRect();
						x.W = f.w = ($.right - $.left) / H, x.H = f.h = ($.bottom - $.top) / H, x.X = f.x, x.Y = f.y + x.H / 2, ("x" in l || "y" in l) && (x.path.v = t.format("m{0},{1}l{2},{1}", a(f.x * b), a(f.y * b), a(f.x * b) + 1));
						for (var Z = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], J = 0, Q = Z.length; Q > J; J++)
							if (Z[J] in l) {
								x._.dirty = 1;
								break
							}
						switch (f["text-anchor"]) {
							case "start":
								x.textpath.style["v-text-align"] = "left", x.bbx = x.W / 2;
								break;
							case "end":
								x.textpath.style["v-text-align"] = "right", x.bbx = -x.W / 2;
								break;
							default:
								x.textpath.style["v-text-align"] = "center", x.bbx = 0
						}
						x.textpath.style["v-text-kern"] = !0
					}
				},
				I = function(e, a, s) {
					e.attrs = e.attrs || {};
					var o = (e.attrs, Math.pow),
						l = "linear",
						u = ".5 .5";
					if (e.attrs.gradient = a, a = r(a).replace(t._radial_gradient, function(t, e, r) {
							return l = "radial", e && r && (e = n(e), r = n(r), o(e - .5, 2) + o(r - .5, 2) > .25 && (r = i.sqrt(.25 - o(e - .5, 2)) * (2 * (r > .5) - 1) + .5), u = e + g + r), d
						}), a = a.split(/\s*\-\s*/), "linear" == l) {
						var c = a.shift();
						if (c = -n(c), isNaN(c)) return null
					}
					var h = t._parseDots(a);
					if (!h) return null;
					if (e = e.shape || e.node, h.length) {
						e.removeChild(s), s.on = !0, s.method = "none", s.color = h[0].color, s.color2 = h[h.length - 1].color;
						for (var f = [], p = 0, v = h.length; v > p; p++) h[p].offset && f.push(h[p].offset + g + h[p].color);
						s.colors = f.length ? f.join() : "0% " + s.color, "radial" == l ? (s.type = "gradientTitle", s.focus = "100%", s.focussize = "0 0", s.focusposition = u, s.angle = 0) : (s.type = "gradient", s.angle = (270 - c) % 360), e.appendChild(s)
					}
					return 1
				},
				B = function(e, r) {
					this[0] = this.node = e, e.raphael = !0, this.id = t._oid++, e.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = r, this.matrix = t.matrix(), this._ = {
						transform: [],
						sx: 1,
						sy: 1,
						dx: 0,
						dy: 0,
						deg: 0,
						dirty: 1,
						dirtyT: 1
					}, !r.bottom && (r.bottom = this), this.prev = r.top, r.top && (r.top.next = this), r.top = this, this.next = null
				},
				P = t.el;
			B.prototype = P, P.constructor = B, P.transform = function(e) {
				if (null == e) return this._.transform;
				var n, i = this.paper._viewBoxShift,
					a = i ? "s" + [i.scale, i.scale] + "-1-1t" + [i.dx, i.dy] : d;
				i && (n = e = r(e).replace(/\.{3}|\u2026/g, this._.transform || d)), t._extractTransform(this, a + e);
				var s, o = this.matrix.clone(),
					l = this.skew,
					u = this.node,
					c = ~r(this.attrs.fill).indexOf("-"),
					h = !r(this.attrs.fill).indexOf("url(");
				if (o.translate(1, 1), h || c || "image" == this.type)
					if (l.matrix = "1 0 0 1", l.offset = "0 0", s = o.split(), c && s.noRotation || !s.isSimple) {
						u.style.filter = o.toFilter();
						var f = this.getBBox(),
							p = this.getBBox(1),
							v = f.x - p.x,
							m = f.y - p.y;
						u.coordorigin = v * -b + g + m * -b, S(this, 1, 1, v, m, 0)
					} else u.style.filter = d, S(this, s.scalex, s.scaley, s.dx, s.dy, s.rotate);
				else l && (u.style.filter = d, l.matrix = r(o), l.offset = o.offset());
				return n && (this._.transform = n), this
			}, P.rotate = function(t, e, i) {
				if (this.removed) return this;
				if (null != t) {
					if (t = r(t).split(c), t.length - 1 && (e = n(t[1]), i = n(t[2])), t = n(t[0]), null == i && (e = i), null == e || null == i) {
						var a = this.getBBox(1);
						e = a.x + a.width / 2, i = a.y + a.height / 2
					}
					return this._.dirtyT = 1, this.transform(this._.transform.concat([
						["r", t, e, i]
					])), this
				}
			}, P.translate = function(t, e) {
				return this.removed ? this : (t = r(t).split(c), t.length - 1 && (e = n(t[1])), t = n(t[0]) || 0, e = +e || 0, this._.bbox && (this._.bbox.x += t, this._.bbox.y += e), this.transform(this._.transform.concat([
					["t", t, e]
				])), this)
			}, P.scale = function(t, e, i, a) {
				if (this.removed) return this;
				if (t = r(t).split(c), t.length - 1 && (e = n(t[1]), i = n(t[2]), a = n(t[3]), isNaN(i) && (i = null), isNaN(a) && (a = null)), t = n(t[0]), null == e && (e = t), null == a && (i = a), null == i || null == a) var s = this.getBBox(1);
				return i = null == i ? s.x + s.width / 2 : i, a = null == a ? s.y + s.height / 2 : a, this.transform(this._.transform.concat([
					["s", t, e, i, a]
				])), this._.dirtyT = 1, this
			}, P.hide = function() {
				return !this.removed && (this.node.style.display = "none"), this
			}, P.show = function() {
				return !this.removed && (this.node.style.display = d), this
			}, P._getBBox = function() {
				return this.removed ? {} : {
					x: this.X + (this.bbx || 0) - this.W / 2,
					y: this.Y - this.H,
					width: this.W,
					height: this.H
				}
			}, P.remove = function() {
				if (!this.removed && this.node.parentNode) {
					this.paper.__set__ && this.paper.__set__.exclude(this), t.eve.unbind("raphael.*.*." + this.id), t._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
					for (var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
					this.removed = !0
				}
			}, P.attr = function(r, n) {
				if (this.removed) return this;
				if (null == r) {
					var i = {};
					for (var a in this.attrs) this.attrs[e](a) && (i[a] = this.attrs[a]);
					return i.gradient && "none" == i.fill && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i
				}
				if (null == n && t.is(r, "string")) {
					if (r == u && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
					for (var s = r.split(c), o = {}, l = 0, f = s.length; f > l; l++) r = s[l], o[r] = r in this.attrs ? this.attrs[r] : t.is(this.paper.customAttributes[r], "function") ? this.paper.customAttributes[r].def : t._availableAttrs[r];
					return f - 1 ? o : o[s[0]]
				}
				if (this.attrs && null == n && t.is(r, "array")) {
					for (o = {}, l = 0, f = r.length; f > l; l++) o[r[l]] = this.attr(r[l]);
					return o
				}
				var g;
				null != n && (g = {}, g[r] = n), null == n && t.is(r, "object") && (g = r);
				for (var d in g) h("raphael.attr." + d + "." + this.id, this, g[d]);
				if (g) {
					for (d in this.paper.customAttributes)
						if (this.paper.customAttributes[e](d) && g[e](d) && t.is(this.paper.customAttributes[d], "function")) {
							var p = this.paper.customAttributes[d].apply(this, [].concat(g[d]));
							this.attrs[d] = g[d];
							for (var v in p) p[e](v) && (g[v] = p[v])
						}
					g.text && "text" == this.type && (this.textpath.string = g.text), T(this, g)
				}
				return this
			}, P.toFront = function() {
				return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && t._tofront(this, this.paper), this
			}, P.toBack = function() {
				return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), t._toback(this, this.paper)), this)
			}, P.insertAfter = function(e) {
				return this.removed ? this : (e.constructor == t.st.constructor && (e = e[e.length - 1]), e.node.nextSibling ? e.node.parentNode.insertBefore(this.node, e.node.nextSibling) : e.node.parentNode.appendChild(this.node), t._insertafter(this, e, this.paper), this)
			}, P.insertBefore = function(e) {
				return this.removed ? this : (e.constructor == t.st.constructor && (e = e[0]), e.node.parentNode.insertBefore(this.node, e.node), t._insertbefore(this, e, this.paper), this)
			}, P.blur = function(e) {
				var r = this.node.runtimeStyle,
					n = r.filter;
				return n = n.replace(m, d), 0 !== +e ? (this.attrs.blur = e, r.filter = n + g + f + ".Blur(pixelradius=" + (+e || 1.5) + ")", r.margin = t.format("-{0}px 0 0 -{0}px", a(+e || 1.5))) : (r.filter = n, r.margin = 0, delete this.attrs.blur), this
			}, t._engine.path = function(t, e) {
				var r = L("shape");
				r.style.cssText = y, r.coordsize = b + g + b, r.coordorigin = e.coordorigin;
				var n = new B(r, e),
					i = {
						fill: "none",
						stroke: "#000"
					};
				t && (i.path = t), n.type = "path", n.path = [], n.Path = d, T(n, i), e.canvas.appendChild(r);
				var a = L("skew");
				return a.on = !0, r.appendChild(a), n.skew = a, n.transform(d), n
			}, t._engine.rect = function(e, r, n, i, a, s) {
				var o = t._rectPath(r, n, i, a, s),
					l = e.path(o),
					u = l.attrs;
				return l.X = u.x = r, l.Y = u.y = n, l.W = u.width = i, l.H = u.height = a, u.r = s, u.path = o, l.type = "rect", l
			}, t._engine.ellipse = function(t, e, r, n, i) {
				{
					var a = t.path();
					a.attrs
				}
				return a.X = e - n, a.Y = r - i, a.W = 2 * n, a.H = 2 * i, a.type = "ellipse", T(a, {
					cx: e,
					cy: r,
					rx: n,
					ry: i
				}), a
			}, t._engine.circle = function(t, e, r, n) {
				{
					var i = t.path();
					i.attrs
				}
				return i.X = e - n, i.Y = r - n, i.W = i.H = 2 * n, i.type = "circle", T(i, {
					cx: e,
					cy: r,
					r: n
				}), i
			}, t._engine.image = function(e, r, n, i, a, s) {
				var o = t._rectPath(n, i, a, s),
					l = e.path(o).attr({
						stroke: "none"
					}),
					c = l.attrs,
					h = l.node,
					f = h.getElementsByTagName(u)[0];
				return c.src = r, l.X = c.x = n, l.Y = c.y = i, l.W = c.width = a, l.H = c.height = s, c.path = o, l.type = "image", f.parentNode == h && h.removeChild(f), f.rotate = !0, f.src = r, f.type = "tile", l._.fillpos = [n, i], l._.fillsize = [a, s], h.appendChild(f), S(l, 1, 1, 0, 0, 0), l
			}, t._engine.text = function(e, n, i, s) {
				var o = L("shape"),
					l = L("path"),
					u = L("textpath");
				n = n || 0, i = i || 0, s = s || "", l.v = t.format("m{0},{1}l{2},{1}", a(n * b), a(i * b), a(n * b) + 1), l.textpathok = !0, u.string = r(s), u.on = !0, o.style.cssText = y, o.coordsize = b + g + b, o.coordorigin = "0 0";
				var c = new B(o, e),
					h = {
						fill: "#000",
						stroke: "none",
						font: t._availableAttrs.font,
						text: s
					};
				c.shape = o, c.path = l, c.textpath = u, c.type = "text", c.attrs.text = r(s), c.attrs.x = n, c.attrs.y = i, c.attrs.w = 1, c.attrs.h = 1, T(c, h), o.appendChild(u), o.appendChild(l), e.canvas.appendChild(o);
				var f = L("skew");
				return f.on = !0, o.appendChild(f), c.skew = f, c.transform(d), c
			}, t._engine.setSize = function(e, r) {
				var n = this.canvas.style;
				return this.width = e, this.height = r, e == +e && (e += "px"), r == +r && (r += "px"), n.width = e, n.height = r, n.clip = "rect(0 " + e + " " + r + " 0)", this._viewBox && t._engine.setViewBox.apply(this, this._viewBox), this
			}, t._engine.setViewBox = function(e, r, n, i, a) {
				t.eve("raphael.setViewBox", this, this._viewBox, [e, r, n, i, a]);
				var o, l, u = this.width,
					c = this.height,
					h = 1 / s(n / u, i / c);
				return a && (o = c / i, l = u / n, u > n * o && (e -= (u - n * o) / 2 / o), c > i * l && (r -= (c - i * l) / 2 / l)), this._viewBox = [e, r, n, i, !!a], this._viewBoxShift = {
					dx: -e,
					dy: -r,
					scale: h
				}, this.forEach(function(t) {
					t.transform("...")
				}), this
			};
			var L;
			t._engine.initWin = function(t) {
				var e = t.document;
				e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
				try {
					!e.namespaces.rvml && e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), L = function(t) {
						return e.createElement("<rvml:" + t + ' class="rvml">')
					}
				} catch (r) {
					L = function(t) {
						return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
					}
				}
			}, t._engine.initWin(t._g.win), t._engine.create = function() {
				var e = t._getContainer.apply(0, arguments),
					r = e.container,
					n = e.height,
					i = e.width,
					a = e.x,
					s = e.y;
				if (!r) throw new Error("VML container not found.");
				var o = new t._Paper,
					l = o.canvas = t._g.doc.createElement("div"),
					u = l.style;
				return a = a || 0, s = s || 0, i = i || 512, n = n || 342, o.width = i, o.height = n, i == +i && (i += "px"), n == +n && (n += "px"), o.coordsize = 1e3 * b + g + 1e3 * b, o.coordorigin = "0 0", o.span = t._g.doc.createElement("span"), o.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", l.appendChild(o.span), u.cssText = t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", i, n), 1 == r ? (t._g.doc.body.appendChild(l), u.left = a + "px", u.top = s + "px", u.position = "absolute") : r.firstChild ? r.insertBefore(l, r.firstChild) : r.appendChild(l), o.renderfix = function() {}, o
			}, t.prototype.clear = function() {
				t.eve("raphael.clear", this), this.canvas.innerHTML = d, this.span = t._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
			}, t.prototype.remove = function() {
				t.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
				for (var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
				return !0
			};
			var M = t.st;
			for (var R in P) P[e](R) && !M[e](R) && (M[R] = function(t) {
				return function() {
					var e = arguments;
					return this.forEach(function(r) {
						r[t].apply(r, e)
					})
				}
			}(R))
		}(window.Raphael)
	}(), u = function(t) {
		var e = a,
			r = function() {};
		return e.augment(r, {
			toFront: function() {
				return this.get("el").toFront(), this
			},
			toBack: function() {
				return this.get("el").toBack(), this
			},
			translate: function(t, e) {
				var r = this,
					n = r.get("el");
				return n.translate(t, e), this
			},
			index: function() {
				var t = this,
					r = t.get("parent");
				return e.indexOf(r.get("children"), t)
			},
			animate: function(t, e, r, n) {
				return this.get("el").animate(t, e, r, n), this
			},
			stopAnimate: function() {
				return this.get("el").stop(), this
			},
			drag: function(t, e, r, n, i, a) {
				return this.get("el").drag(t, e, r, n, i, a), this
			}
		}), t = r
	}(), c = function(t) {
		function e(t, e) {
			return t > e ? e : t
		}

		function r(t, e) {
			return t > e ? t : e
		}

		function n(t, e) {
			this.start = t, this.end = e, this.init()
		}
		var i = a;
		return i.augment(n, {
			init: function() {
				var t = this;
				start = t.start, end = t.end;
				var n = t.tl = {};
				n.x = e(start.x, end.x), n.y = e(start.y, end.y);
				var i = t.tr = {};
				i.x = r(start.x, end.x), i.y = e(start.y, end.y);
				var a = t.bl = {};
				a.x = e(start.x, end.x), a.y = r(start.y, end.y);
				var s = t.br = {};
				s.x = r(start.x, end.x), s.y = r(start.y, end.y);
				var o = t.cc = {};
				o.x = (s.x - n.x) / 2 + n.x, o.y = (s.y - n.y) / 2 + n.y
			},
			reset: function(t, e) {
				this.start = t, this.end = e, this.init()
			},
			isInRange: function(t, e) {
				i.isObject(t) && (e = t.y, t = t.x);
				var r = this,
					n = r.tl,
					a = r.br;
				return t >= n.x && t <= a.x && e >= n.y && e <= a.y
			},
			isInVertical: function(t) {
				i.isObject(t) && (t = t.y);
				var e = this,
					r = e.tl,
					n = e.br;
				return t >= r.y && t <= n.y
			},
			isInHorizontal: function(t) {
				i.isObject(t) && (t = t.x);
				var e = this,
					r = e.tl,
					n = e.br;
				return t >= r.x && t <= n.x
			},
			getWidth: function() {
				var t = this.tl,
					e = this.br;
				return e.x - t.x
			},
			getHeight: function() {
				var t = this.tl,
					e = this.br;
				return e.y - t.y
			}
		}), t = n
	}(), h = function(t) {
		var e = a,
			r = function() {};
		return r.ATTRS = {
			actived: !1
		}, e.augment(r, {
			isActived: function() {
				return this.get("actived")
			},
			setActived: function() {
				this.setActiveStatus(!0), this.set("actived", !0)
			},
			setActiveStatus: function() {},
			clearActived: function() {
				this.setActiveStatus(!1), this.set("actived", !1), this.clearActivedItem && this.clearActivedItem()
			}
		}), t = r
	}(), f = function(t) {
		var e = a,
			r = function() {};
		return r.ATTRS = {}, e.augment(r, {
			isItemActived: function(t) {
				return t.isActived()
			},
			getActiveItems: function() {
				return this.get("children")
			},
			setItemActived: function(t, e) {
				e ? t.setActived() : t.clearActived()
			},
			onActived: function(t) {
				this.fire("itemactived", {
					item: t
				}), this.fireUpGroup && this.fireUpGroup("actived", t)
			},
			onUnActived: function(t) {
				this.fire("itemunactived", {
					item: t
				}), this.fireUpGroup && this.fireUpGroup("unactived", t)
			},
			setActivedItem: function(t) {
				var e = this;
				e.clearActivedItem(), t && !e.isItemActived(t) && (e.setItemActived(t, !0), e.onActived(t))
			},
			getActived: function() {
				var t = this,
					r = t.getActiveItems(),
					n = null;
				return e.each(r, function(e) {
					return t.isItemActived(e) ? (n = e, !1) : void 0
				}), n
			},
			clearActivedItem: function(t) {
				var e = this;
				t = t || e.getActived(), t && (e.setItemActived(t, !1), e.onUnActived(t))
			}
		}), t = r
	}(), g = function(t) {
		function e(t) {
			return null == t
		}

		function r(t) {
			var e = 1;
			if (1e-6 > t) return e;
			for (; t > 10;) e = 10 * e, t /= 10;
			for (; 1 > t;) e /= 10, t = 10 * t;
			return e
		}

		function i(t, e, n) {
			n = n || C;
			var i = n == C ? !1 : !0,
				a = 1;
			0 > t && (a = -1), t *= a;
			var o = r(t);
			return a *= o, t /= o, t = i ? s(n, t) : e && a > 0 ? w.snapFloor(n, t) : w.snapCeiling(n, t), t * a
		}

		function s(t, e) {
			for (var r = e, n = e, i = e, a = 1; a < t.length; a++) {
				var s = t[a];
				if (s > e) {
					r = s;
					break
				}
				n = s
			}
			return i = Math.abs(n - e) < Math.abs(r - e) ? n : r
		}

		function o(t, e, r) {
			if (r) var n = Math.ceil(t / e, 10);
			else var n = Math.floor(t / e, 10);
			return n * e
		}

		function l(t, e) {
			var r = e.toString(),
				n = r.indexOf(".");
			if (-1 == n) return t;
			var i = r.substr(n + 1).length;
			return parseFloat(t.toFixed(i))
		}

		function u(t) {
			for (var e = t[0], r = t[0], n = t.length, i = 1; n > i; i++) {
				var a = t[i];
				a > e && (e = a), r > a && (r = a)
			}
			return r == e && (r > 0 ? r = 0 : e = 0), {
				max: e,
				min: r
			}
		}

		function c(t, e) {
			var r = [];
			return e ? w.isArray(t[0]) && w.each(t[0], function(e, n) {
				for (var i = e, a = 1; a < t.length; a++) i += t[a][n];
				r.push(i)
			}) : w.each(t, function(t) {
				w.isArray(t) ? r = r.concat(t) : r.push(t)
			}), r
		}

		function h(t, e, r) {
			var n = c(t, r);
			return e && (n = w.map(n, e)), u(n)
		}

		function f(t) {
			return t = new Date(t), k.getDate(t).getTime()
		}

		function g(t) {
			t = new Date(t);
			var e = k.getDate(t);
			return t > e && (e = k.addDay(1, e)), e.getTime()
		}

		function d(t) {
			return new Date(t).getFullYear()
		}

		function p(t) {
			return new Date(t, 0, 1).getTime()
		}

		function v(t) {
			return new Date(t).getMonth()
		}

		function m(t, e) {
			var r = d(t),
				n = d(e),
				i = v(t),
				a = v(e);
			return 12 * (n - r) + (a - i) % 12
		}

		function x(t, e) {
			return new Date(t, e, 1).getTime()
		}

		function y(t, e) {
			return Math.ceil((e - t) / M)
		}

		function b(t, e) {
			return Math.ceil((e - t) / L)
		}

		function _(t, e) {
			return Math.ceil((e - t) / 6e4)
		}
		var w = a,
			k = n,
			C = [0, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10],
			S = [0, 1, 2, 5, 10],
			A = [1, 2, 4, 6, 8, 12],
			T = 5,
			I = 7,
			B = {};
		B.caculate = function(t, r) {
			var n, a = t.min,
				s = t.max,
				u = t.data,
				c = t.interval,
				f = [],
				g = t.minCount || T,
				d = t.maxCount || I,
				p = (g + d) / 2,
				v = !1;
			if (r && "percent" == r && (a = 0, s = 100, c = 25), e(a) || e(s) || e(c)) {
				var m = h(u, null, v);
				if (e(s) && (s = m.max + .05 * (m.max - m.min)), e(a) && (a = m.min), s == a && (s = a + 1, a -= 1, c = 1), e(c)) {
					var x = (s - a) / p;
					c = i(x, !0, S), n = parseInt((s - a) / c, 10), n > d && (n = d), g > n && (n = g), c = i((s - a) / n, !0, S), s = o(s, c, !0), a = o(a, c), n = Math.round((s - a) / c)
				}
			}
			e(n) && (n = (s - a) / c), a = l(a, c), e(a) || f.push(a);
			for (var y = 1; n >= y; y++) f.push(l(c * y + a, c));
			return {
				min: a,
				max: l(s, c),
				interval: c,
				count: n,
				ticks: f,
				info: m
			}
		}, B.Time = {};
		var P = 6e4,
			L = 36e5,
			M = 864e5;
		return B.Time.caculate = function(t) {
			var r, n = t.min,
				i = t.max,
				a = t.data,
				s = t.interval,
				o = [],
				u = {};
			if (e(n) || e(i) || e(s)) {
				if (u = h(a, function(t) {
						return w.isDate(t) && (t = t.getTime()), w.isString(t) && (t = t.replace(/-/gi, "/"), t = new Date(t)), t
					}), e(i) && (i = u.max), e(n) && (n = u.min), i - n > M && (n = f(n), i = g(i)), i == n) throw "max not  equal to min";
				if (e(s)) {
					var c, k, C = i - n,
						S = M,
						T = 365 * S;
					s = parseInt(C / (t.maxCount || 8)), c = s / T;
					var I = d(n);
					if (c > .51) {
						k = Math.ceil(c), s = k * T;
						for (var B = d(i), R = I; B + k >= R; R += k) o.push(p(R));
						s = null
					} else if (c > .0834) {
						for (var k = d(n), N = Math.floor(c / .0834), F = v(n), E = m(n, i), R = 0; E + N >= R; R += N) o.push(x(I, R + F));
						s = null
					} else if (s > .5 * S) {
						var O = new Date(n),
							k = O.getFullYear(),
							N = O.getMonth(n),
							D = O.getDate(),
							G = Math.ceil(s / S),
							z = y(n, i);
						s = G * S;
						for (var R = 0; z + G > R; R += G) o.push(new Date(k, N, D + R).getTime())
					} else if (s > L) {
						var O = new Date(n),
							k = O.getFullYear(),
							N = O.getMonth(n),
							G = O.getDate(),
							V = O.getHours(),
							j = w.snapTo(A, Math.ceil(s / L)),
							U = b(n, i);
						s = j * L;
						for (var R = 0; U + j >= R; R += j) o.push(new Date(k, N, G, V + R).getTime())
					} else if (s > P) {
						var Y = _(n, i),
							q = Math.ceil(s / P);
						s = q * P;
						for (var R = 0; Y + q >= R; R += q) o.push(n + R * P)
					} else {
						n = 1e3 * Math.floor(n / 1e3);
						var W = Math.ceil((i - n) / 1e3),
							H = Math.ceil(s / 1e3);
						s = 1e3 * H;
						for (var R = 0; W + H > R; R += H) o.push(n + 1e3 * R)
					}
				}
			}
			if (!o.length) {
				n = 1e3 * Math.floor(n / 1e3), i = 1e3 * Math.ceil(i / 1e3);
				for (var r = (i - n) / s, R = 0; r >= R; R++) o.push(l(s * R + n, s))
			}
			return {
				max: u.max || i,
				min: u.min || n,
				interval: s,
				ticks: o,
				count: o.length
			}
		}, B.TimeCategory = {}, B.TimeCategory.caculate = function(t) {
			var e = {},
				r = [],
				n = t.maxCount || I,
				i = c(t.data);
			if (i.length < n) r = [].concat(i);
			else {
				for (var a = i.length, s = parseInt(a / n, 10), o = 0; a - 1 > o; o += s) r.push(i[o]);
				var l = i[a - 1];
				i[1] - i[0] > 2 * (l - i[i.length - 2]) && r.pop(), r.push(l)
			}
			return e.categories = i, e.ticks = r, e
		}, t = B
	}(), d = function(t) {
		var e = a,
			r = function() {};
		return r.ATTRS = {
			stackType: "none"
		}, e.augment(r, {
			processStackedPoint: function(t, e) {
				var r = this,
					n = r.getVisiblePrev(),
					i = r.getXName(),
					a = r.getYName();
				if (n) {
					var s = n.getPoints()[e],
						o = r.getBaseValue();
					if (r.isInCircle()) {
						var l, u = r.get("xAxis"),
							c = u.getDistance(t.x, t.y),
							h = s.r || u.getDistance(s.x, s.y);
						c = h + c, l = u.getCirclePoint(t.xValue, c), t.x = l.x, t.y = l.y, t.r = c, t.ir = h
					} else t[a] = t[a] + s[a] - o;
					t.lowY = s[a], t.lowX = s[i]
				}
			},
			getStackedPercent: function(t, e) {
				var r = this,
					n = r.get("parent").getStackedData(r.get("yAxis"), "yAxis"),
					i = n[e];
				return i ? t / i : 0 / 0
			},
			parseYValue: function(t, r) {
				var n, i = this,
					a = i.get("stackType"),
					s = i.get("data"),
					r = null == r ? e.indexOf(s, t) : r;
				return "percent" == a && (n = i.getStackedPercent(t, r), t = 100 * n), t
			},
			getVisiblePrev: function() {
				var t, r = this,
					n = r.get("parent"),
					i = r.get("yAxis"),
					a = n.get("children");
				return e.each(a, function(e) {
					return e == r ? !1 : void(e.get("visible") && e.get("yAxis") == i && (t = e))
				}), t
			},
			getTipInfo: function(t) {
				var e = this,
					r = e.get("stackType");
				if ("percent" == r) {
					var n = t.yValue || 0;
					return [t.value, "\uff08" + n.toFixed(2) + "%\uff09"]
				}
				return t.value
			},
			isStacked: function() {
				var t = this,
					e = t.get("stackType");
				return e && "none" !== e
			}
		}), t = r
	}(), p = function(t) {
		var e = a,
			r = function(t, e) {
				return r.initTheme(t, e)
			};
		r.initTheme = function(t, r) {
			return e.mix(!0, {}, t, r)
		};
		var n = {
			duration: 1e3,
			line: {
				"stroke-width": 2,
				"stroke-linejoin": "round",
				"stroke-linecap": "round"
			},
			lineActived: {
				"stroke-width": 3
			},
			markers: {
				marker: {
					radius: 3
				},
				actived: {
					radius: 6,
					stroke: "#fff"
				}
			},
			animate: !0
		};
		return r.Origin = r({
			plotCfg: {
				margin: [50]
			},
			yTickCounts: [3, 5],
			xTickCounts: [5, 10],
			title: {
				"font-size": "16px",
				"font-family": "SimSun,Georgia, Times, serif",
				fill: "#274b6d"
			},
			subTitle: {
				"font-size": 14,
				"font-family": "tahoma,arial,SimSun,Georgia, Times, serif",
				fill: "#4d759e"
			},
			xAxis: {
				labels: {
					label: {
						y: 12
					}
				}
			},
			yAxis: {
				line: null,
				tickLine: null,
				grid: {
					line: {
						stroke: "#c0c0c0"
					}
				},
				title: {
					text: "",
					rotate: -90,
					x: -30
				},
				position: "left",
				labels: {
					label: {
						x: -12
					}
				}
			},
			legend: {
				dy: 30
			},
			seriesOptions: {
				lineCfg: n,
				areaCfg: {
					line: {
						"stroke-width": .5,
						"stroke-linejoin": "round",
						"stroke-linecap": "round"
					},
					lineActived: {
						"stroke-width": 1
					},
					animate: !0,
					markers: n.markers
				},
				arearangeCfg: {
					markers: null,
					line: {
						stroke: null
					},
					area: {
						stroke: null
					},
					lineActived: {
						stroke: null
					},
					areaActived: {
						stroke: null
					}
				},
				flagCfg: {
					flags: {
						flag: {
							distance: -15,
							line: {
								stroke: "#333",
								"stroke-width": 1
							},
							shapeType: "rect",
							shapeCfg: {
								stroke: "#333",
								width: 22,
								height: 22
							},
							title: "A",
							titleCfg: {
								rotate: 90,
								fill: "#333333",
								"font-size": 13,
								"font-weight": "bold"
							},
							text: ""
						}
					},
					duration: 1e3,
					animate: !0,
					onSeries: "xaxis"
				},
				candlestickCfg: {
					candlesticks: {
						candlestick: {
							riseLine: {
								stroke: "red"
							},
							fallLine: {
								stroke: "green"
							},
							riseShape: {
								stroke: "red",
								fill: "red"
							},
							fallShape: {
								stroke: "green",
								fill: "green"
							}
						}
					}
				},
				bubbleCfg: {
					circle: {
						"stroke-width": 1,
						"fill-opacity": .5
					},
					activeCircle: {
						"stroke-width": 2
					}
				},
				pieCfg: {
					colors: ["#5e90c9", "#1c2d3f", "#a9d052", "#a12d2d", "#43bbb4", "#5a2a94", "#fabe3c", "#2279dc", "#e360e5", "#48000c"],
					item: {
						stroke: "#fff"
					},
					labels: {
						distance: 30,
						label: {}
					}
				}
			},
			tooltip: {
				x: -999,
				y: -999,
				offset: 5
			}
		}), r.Base = r.initTheme(r.Origin, {
			colors: ["#5e90c9", "#1c2d3f", "#a9d052", "#a12d2d", "#43bbb4", "#5a2a94", "#fabe3c", "#2279dc", "#e360e5", "#48000c"],
			symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
			plotCfg: {
				margin: [50, 50, 100]
			},
			seriesOptions: {
				pieCfg: {
					colors: ["#5e90c9", "#1c2d3f", "#a9d052", "#a12d2d", "#43bbb4", "#5a2a94", "#fabe3c", "#2279dc", "#e360e5", "#48000c"]
				}
			}
		}), r.SmoothBase = r.initTheme(r.Origin, {
			title: {
				fill: "#505050"
			},
			subTitle: {
				fill: "#999"
			},
			xAxis: {
				line: {
					"stroke-width": 1,
					stroke: "#a7a7a7"
				},
				tickLine: null,
				labels: {
					label: {
						y: 12,
						fill: "#444444",
						"font-size": "12"
					}
				}
			},
			yAxis: {
				grid: {
					line: {
						stroke: "#a7a7a7",
						"stroke-dasharray": "."
					}
				},
				title: {
					text: "",
					rotate: -90,
					x: -35,
					fill: "#444"
				},
				position: "left",
				labels: {
					label: {
						x: -20,
						fill: "#444444",
						"font-size": "12"
					}
				}
			},
			plotCfg: {
				margin: [50, 50, 100]
			},
			legend: {
				back: null,
				spacingX: 30,
				itemCfg: {
					label: {
						fill: "#a7a7a7",
						"text-anchor": "start",
						cursor: "pointer",
						"font-size": "12"
					}
				}
			},
			colors: ["#FF6400", "#FECD06", "#61c681", "#74D1DB", "#2B7AB9", "#EBEBEB"],
			symbols: ["circle"],
			seriesOptions: {
				lineCfg: {
					line: {
						"stroke-width": 4
					},
					lineActived: {
						"stroke-width": 4
					},
					markers: {
						marker: {
							fill: "#fff",
							radius: 6,
							"stroke-width": 4
						},
						actived: {
							fill: "#fff",
							"stroke-width": 5,
							stroke: null
						}
					}
				},
				areaCfg: {
					markers: {
						single: !0,
						marker: {
							fill: "#fff",
							radius: 6,
							"stroke-width": 4
						},
						actived: {
							fill: "#fff",
							"stroke-width": 5,
							stroke: null
						}
					},
					area: {
						"fill-opacity": .5,	
						stroke: null
					}
				},
				pieCfg: {
					colors: ["#ff6400", "#f4b350", "#e87e04", "#00b16a", "#3fc380", "#5c97bf", "#66cc99","#3ba9e1","#3ba9e1","#81cfe0"],//扇形内颜色
					labels: {
						distance: 30,
						label: {
							"font-size": "12",
							fill: "#a7a7a7"
						}
					}
				}
			},
			tooltip: {
				offset: 10,
				title: {
					"font-size": "12",
					"text-anchor": "start",
					x: 8,
					y: 15,
					fill: "#444"
				},
				value: {
					"font-size": "12",
					"font-weight": "normal",
					"text-anchor": "start",
					fill: "#444"
				},
				crossLine: {
					stroke: "#d7d7d7"
				}
			}
		}), r.Smooth1 = r.initTheme(r.SmoothBase), 
			r.Smooth2 = r.initTheme(r.SmoothBase, {
			colors: ["#00a3d7", "#6ebb46", "#f6c100", "#ff6a00", "#e32400", "#423ba8"],
			symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
			seriesOptions: {
				pieCfg: {
					colors: ["#00a3d7", "#6ebb46", "#f6c100", "#ff6a00", "#e32400", "#423ba8"]
				}
			}
		}), r.Smooth3 = r.initTheme(r.SmoothBase, {
			colors: ["#40a00e", "#444444", "#85cc82", "#5e5e64", "#60b336", "#89847f"],
			seriesOptions: {	
				pieCfg: {
					colors: ["#40a00e", "#444444", "#85cc82", "#5e5e64", "#60b336", "#89847f"]
				}
			}
		}), r.Smooth4 = r.initTheme(r.SmoothBase, {
			colors: ["#e1c673", "#c49756", "#8c6c42", "#595348", "#c86c4b", "#7c4f34"],
			seriesOptions: {
				pieCfg: {
					colors: ["#e1c673", "#c49756", "#8c6c42", "#595348", "#c86c4b", "#7c4f34"]
				}
			}
		}), r.Smooth5 = r.initTheme(r.SmoothBase, {
			colors: ["#89847f", "#aea9a2", "#606060", "#232323", "#d8d2c7", "#444444"],
			seriesOptions: {
				pieCfg: {
					colors: ["#89847f", "#aea9a2", "#606060", "#232323", "#d8d2c7", "#444444"]
				}
			}
		}), r.Smooth6 = r.initTheme(r.SmoothBase, {
			colors: ["#ff9d40", "#89847f", "#ff8127", "#b4aea7", "#ffba66", "#606060"],
			seriesOptions: {
				pieCfg: {
					colors: ["#ff9d40", "#89847f", "#ff8127", "#b4aea7", "#ffba66", "#606060"]
				}
			}
		}), r.Smooth7 = r.initTheme(r.SmoothBase, {
			colors: ["#25b0dd", "#7fdcff", "#30b2c8", "#5dc5ee", "#266796", "#258bca"],
			seriesOptions: {
				pieCfg: {
					colors: ["#25b0dd", "#7fdcff", "#30b2c8", "#5dc5ee", "#266796", "#258bca"]
				}
			}
		}), t = r
	}(), v = function(t) {
		return function(t, e) {
			"function" == typeof define && define.amd ? define(["eve"], function(r) {
				return e(t, r)
			}) : e(t, t.eve)
		}(this, function(t, e) {
			function r(t) {
				if (r.is(t, "function")) return b ? t() : e.on("raphael.DOMload", t);
				if (r.is(t, H)) return r._engine.create[B](r, t.splice(0, 3 + r.is(t[0], q))).add(t);
				var n = Array.prototype.slice.call(arguments, 0);
				if (r.is(n[n.length - 1], "function")) {
					var i = n.pop();
					return b ? i.call(r._engine.create[B](r, n)) : e.on("raphael.DOMload", function() {
						i.call(r._engine.create[B](r, n))
					})
				}
				return r._engine.create[B](r, arguments)
			}

			function n(t) {
				if ("function" == typeof t || Object(t) !== t) return t;
				var e = new t.constructor;
				for (var r in t) t[S](r) && (e[r] = n(t[r]));
				return e
			}

			function i(t, e) {
				for (var r = 0, n = t.length; n > r; r++)
					if (t[r] === e) return t.push(t.splice(r, 1)[0])
			}

			function a(t, e, r) {
				function n() {
					var a = Array.prototype.slice.call(arguments, 0),
						s = a.join("\u2400"),
						o = n.cache = n.cache || {},
						l = n.count = n.count || [];
					return o[S](s) ? (i(l, s), r ? r(o[s]) : o[s]) : (l.length >= 1e3 && delete o[l.shift()], l.push(s), o[s] = t[B](e, a), r ? r(o[s]) : o[s])
				}
				return n
			}

			function s() {
				return this.hex
			}

			function o(t, e) {
				for (var r = [], n = 0, i = t.length; i - 2 * !e > n; n += 2) {
					var a = [{
						x: +t[n - 2],
						y: +t[n - 1]
					}, {
						x: +t[n],
						y: +t[n + 1]
					}, {
						x: +t[n + 2],
						y: +t[n + 3]
					}, {
						x: +t[n + 4],
						y: +t[n + 5]
					}];
					e ? n ? i - 4 == n ? a[3] = {
						x: +t[0],
						y: +t[1]
					} : i - 2 == n && (a[2] = {
						x: +t[0],
						y: +t[1]
					}, a[3] = {
						x: +t[2],
						y: +t[3]
					}) : a[0] = {
						x: +t[i - 2],
						y: +t[i - 1]
					} : i - 4 == n ? a[3] = a[2] : n || (a[0] = {
						x: +t[n],
						y: +t[n + 1]
					}), r.push(["C", (-a[0].x + 6 * a[1].x + a[2].x) / 6, (-a[0].y + 6 * a[1].y + a[2].y) / 6, (a[1].x + 6 * a[2].x - a[3].x) / 6, (a[1].y + 6 * a[2].y - a[3].y) / 6, a[2].x, a[2].y])
				}
				return r
			}

			function l(t, e, r, n, i) {
				var a = -3 * e + 9 * r - 9 * n + 3 * i,
					s = t * a + 6 * e - 12 * r + 6 * n;
				return t * s - 3 * e + 3 * r
			}

			function u(t, e, r, n, i, a, s, o, u) {
				null == u && (u = 1), u = u > 1 ? 1 : 0 > u ? 0 : u;
				for (var c = u / 2, h = 12, f = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], g = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], d = 0, p = 0; h > p; p++) {
					var v = c * f[p] + c,
						m = l(v, t, r, i, s),
						x = l(v, e, n, a, o),
						y = m * m + x * x;
					d += g[p] * G.sqrt(y)
				}
				return c * d
			}

			function c(t, e, r, n, i, a, s, o, l) {
				if (!(0 > l || u(t, e, r, n, i, a, s, o) < l)) {
					var c, h = 1,
						f = h / 2,
						g = h - f,
						d = .01;
					for (c = u(t, e, r, n, i, a, s, o, g); j(c - l) > d;) f /= 2, g += (l > c ? 1 : -1) * f, c = u(t, e, r, n, i, a, s, o, g);
					return g
				}
			}

			function h(t, e, r, n, i, a, s, o) {
				if (!(z(t, r) < V(i, s) || V(t, r) > z(i, s) || z(e, n) < V(a, o) || V(e, n) > z(a, o))) {
					var l = (t * n - e * r) * (i - s) - (t - r) * (i * o - a * s),
						u = (t * n - e * r) * (a - o) - (e - n) * (i * o - a * s),
						c = (t - r) * (a - o) - (e - n) * (i - s);
					if (c) {
						var h = l / c,
							f = u / c,
							g = +h.toFixed(2),
							d = +f.toFixed(2);
						if (!(g < +V(t, r).toFixed(2) || g > +z(t, r).toFixed(2) || g < +V(i, s).toFixed(2) || g > +z(i, s).toFixed(2) || d < +V(e, n).toFixed(2) || d > +z(e, n).toFixed(2) || d < +V(a, o).toFixed(2) || d > +z(a, o).toFixed(2))) return {
							x: h,
							y: f
						}
					}
				}
			}

			function f(t, e, n) {
				var i = r.bezierBBox(t),
					a = r.bezierBBox(e);
				if (!r.isBBoxIntersect(i, a)) return n ? 0 : [];
				for (var s = u.apply(0, t), o = u.apply(0, e), l = z(~~(s / 5), 1), c = z(~~(o / 5), 1), f = [], g = [], d = {}, p = n ? 0 : [], v = 0; l + 1 > v; v++) {
					var m = r.findDotsAtSegment.apply(r, t.concat(v / l));
					f.push({
						x: m.x,
						y: m.y,
						t: v / l
					})
				}
				for (v = 0; c + 1 > v; v++) m = r.findDotsAtSegment.apply(r, e.concat(v / c)), g.push({
					x: m.x,
					y: m.y,
					t: v / c
				});
				for (v = 0; l > v; v++)
					for (var x = 0; c > x; x++) {
						var y = f[v],
							b = f[v + 1],
							_ = g[x],
							w = g[x + 1],
							k = j(b.x - y.x) < .001 ? "y" : "x",
							C = j(w.x - _.x) < .001 ? "y" : "x",
							S = h(y.x, y.y, b.x, b.y, _.x, _.y, w.x, w.y);
						if (S) {
							if (d[S.x.toFixed(4)] == S.y.toFixed(4)) continue;
							d[S.x.toFixed(4)] = S.y.toFixed(4);
							var A = y.t + j((S[k] - y[k]) / (b[k] - y[k])) * (b.t - y.t),
								T = _.t + j((S[C] - _[C]) / (w[C] - _[C])) * (w.t - _.t);
							A >= 0 && 1.001 >= A && T >= 0 && 1.001 >= T && (n ? p++ : p.push({
								x: S.x,
								y: S.y,
								t1: V(A, 1),
								t2: V(T, 1)
							}))
						}
					}
				return p
			}

			function g(t, e, n) {
				t = r._path2curve(t), e = r._path2curve(e);
				for (var i, a, s, o, l, u, c, h, g, d, p = n ? 0 : [], v = 0, m = t.length; m > v; v++) {
					var x = t[v];
					if ("M" == x[0]) i = l = x[1], a = u = x[2];
					else {
						"C" == x[0] ? (g = [i, a].concat(x.slice(1)), i = g[6], a = g[7]) : (g = [i, a, i, a, l, u, l, u], i = l, a = u);
						for (var y = 0, b = e.length; b > y; y++) {
							var _ = e[y];
							if ("M" == _[0]) s = c = _[1], o = h = _[2];
							else {
								"C" == _[0] ? (d = [s, o].concat(_.slice(1)), s = d[6], o = d[7]) : (d = [s, o, s, o, c, h, c, h], s = c, o = h);
								var w = f(g, d, n);
								if (n) p += w;
								else {
									for (var k = 0, C = w.length; C > k; k++) w[k].segment1 = v, w[k].segment2 = y, w[k].bez1 = g, w[k].bez2 = d;
									p = p.concat(w)
								}
							}
						}
					}
				}
				return p
			}

			function d(t, e, r, n, i, a) {
				null != t ? (this.a = +t, this.b = +e, this.c = +r, this.d = +n, this.e = +i, this.f = +a) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
			}

			function p() {
				return this.x + R + this.y + R + this.width + " \xd7 " + this.height
			}

			function v(t, e, r, n, i, a) {
				function s(t) {
					return ((h * t + c) * t + u) * t
				}

				function o(t, e) {
					var r = l(t, e);
					return ((d * r + g) * r + f) * r
				}

				function l(t, e) {
					var r, n, i, a, o, l;
					for (i = t, l = 0; 8 > l; l++) {
						if (a = s(i) - t, j(a) < e) return i;
						if (o = (3 * h * i + 2 * c) * i + u, j(o) < 1e-6) break;
						i -= a / o
					}
					if (r = 0, n = 1, i = t, r > i) return r;
					if (i > n) return n;
					for (; n > r;) {
						if (a = s(i), j(a - t) < e) return i;
						t > a ? r = i : n = i, i = (n - r) / 2 + r
					}
					return i
				}
				var u = 3 * e,
					c = 3 * (n - e) - u,
					h = 1 - u - c,
					f = 3 * r,
					g = 3 * (i - r) - f,
					d = 1 - f - g;
				return o(t, 1 / (200 * a))
			}

			function m(t, e) {
				var r = [],
					n = {};
				if (this.ms = e, this.times = 1, t) {
					for (var i in t) t[S](i) && (n[K(i)] = t[i], r.push(K(i)));
					r.sort(he)
				}
				this.anim = n, this.top = r[r.length - 1], this.percents = r
			}

			function x(t, n, i, a, s, o) {
				i = K(i);
				var l, u, c, h, f, g, p = t.ms,
					m = {},
					x = {},
					y = {};
				if (a)
					for (_ = 0, k = lr.length; k > _; _++) {
						var b = lr[_];
						if (b.el.id == n.id && b.anim == t) {
							b.percent != i ? (lr.splice(_, 1), c = 1) : u = b, n.attr(b.totalOrigin);
							break
						}
					} else a = +x;
				for (var _ = 0, k = t.percents.length; k > _; _++) {
					if (t.percents[_] == i || t.percents[_] > a * t.top) {
						i = t.percents[_], f = t.percents[_ - 1] || 0, p = p / t.top * (i - f), h = t.percents[_ + 1], l = t.anim[i];
						break
					}
					a && n.attr(t.anim[t.percents[_]])
				}
				if (l) {
					if (u) u.initstatus = a, u.start = new Date - u.ms * a;
					else {
						for (var C in l)
							if (l[S](C) && (ne[S](C) || n.paper.customAttributes[S](C))) switch (m[C] = n.attr(C), null == m[C] && (m[C] = re[C]), x[C] = l[C], ne[C]) {
								case q:
									y[C] = (x[C] - m[C]) / p;
									break;
								case "colour":
									m[C] = r.getRGB(m[C]);
									var A = r.getRGB(x[C]);
									y[C] = {
										r: (A.r - m[C].r) / p,
										g: (A.g - m[C].g) / p,
										b: (A.b - m[C].b) / p
									};
									break;
								case "path":
									var T = Ee(m[C], x[C]),
										I = T[1];
									for (m[C] = T[0], y[C] = [], _ = 0, k = m[C].length; k > _; _++) {
										y[C][_] = [0];
										for (var B = 1, L = m[C][_].length; L > B; B++) y[C][_][B] = (I[_][B] - m[C][_][B]) / p
									}
									break;
								case "transform":
									var M = n._,
										R = Ve(M[C], x[C]);
									if (R)
										for (m[C] = R.from, x[C] = R.to, y[C] = [], y[C].real = !0, _ = 0, k = m[C].length; k > _; _++)
											for (y[C][_] = [m[C][_][0]], B = 1, L = m[C][_].length; L > B; B++) y[C][_][B] = (x[C][_][B] - m[C][_][B]) / p;
									else {
										var E = n.matrix || new d,
											O = {
												_: {
													transform: M.transform
												},
												getBBox: function() {
													return n.getBBox(1)
												}
											};
										m[C] = [E.a, E.b, E.c, E.d, E.e, E.f], Ge(O, x[C]), x[C] = O._.transform, y[C] = [(O.matrix.a - E.a) / p, (O.matrix.b - E.b) / p, (O.matrix.c - E.c) / p, (O.matrix.d - E.d) / p, (O.matrix.e - E.e) / p, (O.matrix.f - E.f) / p]
									}
									break;
								case "csv":
									var D = N(l[C])[F](w),
										G = N(m[C])[F](w);
									if ("clip-rect" == C)
										for (m[C] = G, y[C] = [], _ = G.length; _--;) y[C][_] = (D[_] - m[C][_]) / p;
									x[C] = D;
									break;
								default:
									for (D = [][P](l[C]), G = [][P](m[C]), y[C] = [], _ = n.paper.customAttributes[C].length; _--;) y[C][_] = ((D[_] || 0) - (G[_] || 0)) / p
							}
							var z = l.easing,
								V = r.easing_formulas[z];
						if (!V)
							if (V = N(z).match(J), V && 5 == V.length) {
								var j = V;
								V = function(t) {
									return v(t, +j[1], +j[2], +j[3], +j[4], p)
								}
							} else V = ge;
						if (g = l.start || t.start || +new Date, b = {
								anim: t,
								percent: i,
								timestamp: g,
								start: g + (t.del || 0),
								status: 0,
								initstatus: a || 0,
								stop: !1,
								ms: p,
								easing: V,
								from: m,
								diff: y,
								to: x,
								el: n,
								callback: l.callback,
								prev: f,
								next: h,
								repeat: o || t.times,
								origin: n.attr(),
								totalOrigin: s
							}, lr.push(b), a && !u && !c && (b.stop = !0, b.start = new Date - p * a, 1 == lr.length)) return cr();
						c && (b.start = new Date - b.ms * a), 1 == lr.length && ur(cr)
					}
					e("raphael.anim.start." + n.id, n, t)
				}
			}

			function y(t) {
				for (var e = 0; e < lr.length; e++) lr[e].el.paper == t && lr.splice(e--, 1)
			}
			r.version = "2.1.2", r.eve = e;
			var b, _, w = /[, ]+/,
				k = {
					circle: 1,
					rect: 1,
					path: 1,
					ellipse: 1,
					text: 1,
					image: 1
				},
				C = /\{(\d+)\}/g,
				S = "hasOwnProperty",
				A = {
					doc: document,
					win: t
				},
				T = {
					was: Object.prototype[S].call(A.win, "Raphael"),
					is: A.win.Raphael
				},
				I = function() {
					this.ca = this.customAttributes = {}
				},
				B = "apply",
				P = "concat",
				L = "ontouchstart" in A.win || A.win.DocumentTouch && A.doc instanceof DocumentTouch,
				M = "",
				R = " ",
				N = String,
				F = "split",
				E = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [F](R),
				O = {
					mousedown: "touchstart",
					mousemove: "touchmove",
					mouseup: "touchend"
				},
				D = N.prototype.toLowerCase,
				G = Math,
				z = G.max,
				V = G.min,
				j = G.abs,
				U = G.pow,
				Y = G.PI,
				q = "number",
				W = "string",
				H = "array",
				X = Object.prototype.toString,
				$ = (r._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
				Z = {
					NaN: 1,
					Infinity: 1,
					"-Infinity": 1
				},
				J = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
				Q = G.round,
				K = parseFloat,
				te = parseInt,
				ee = N.prototype.toUpperCase,
				re = r._availableAttrs = {
					"arrow-end": "none",
					"arrow-start": "none",
					blur: 0,
					"clip-rect": "0 0 1e9 1e9",
					cursor: "default",
					cx: 0,
					cy: 0,
					fill: "#fff",
					"fill-opacity": 1,
					font: '10px "Arial"',
					"font-family": '"Arial"',
					"font-size": "10",
					"font-style": "normal",
					"font-weight": 400,
					gradient: 0,
					height: 0,
					href: "http://raphaeljs.com/",
					"letter-spacing": 0,
					opacity: 1,
					path: "M0,0",
					r: 0,
					rx: 0,
					ry: 0,
					src: "",
					stroke: "#000",
					"stroke-dasharray": "",
					"stroke-linecap": "butt",
					"stroke-linejoin": "butt",
					"stroke-miterlimit": 0,
					"stroke-opacity": 1,
					"stroke-width": 1,
					target: "_blank",
					"text-anchor": "middle",
					title: "Raphael",
					transform: "",
					width: 0,
					x: 0,
					y: 0
				},
				ne = r._availableAnimAttrs = {
					blur: q,
					"clip-rect": "csv",
					cx: q,
					cy: q,
					fill: "colour",
					"fill-opacity": q,
					"font-size": q,
					height: q,
					opacity: q,
					path: "path",
					r: q,
					rx: q,
					ry: q,
					stroke: "colour",
					"stroke-opacity": q,
					"stroke-width": q,
					transform: "transform",
					width: q,
					x: q,
					y: q
				},
				ie = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
				ae = {
					hs: 1,
					rg: 1
				},
				se = /,?([achlmqrstvxz]),?/gi,
				oe = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
				le = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
				ue = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
				ce = (r._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
				he = function(t, e) {
					return K(t) - K(e)
				},
				fe = function() {},
				ge = function(t) {
					return t
				},
				de = r._rectPath = function(t, e, r, n, i) {
					return i ? [
						["M", t + i, e],
						["l", r - 2 * i, 0],
						["a", i, i, 0, 0, 1, i, i],
						["l", 0, n - 2 * i],
						["a", i, i, 0, 0, 1, -i, i],
						["l", 2 * i - r, 0],
						["a", i, i, 0, 0, 1, -i, -i],
						["l", 0, 2 * i - n],
						["a", i, i, 0, 0, 1, i, -i],
						["z"]
					] : [
						["M", t, e],
						["l", r, 0],
						["l", 0, n],
						["l", -r, 0],
						["z"]
					]
				},
				pe = function(t, e, r, n) {
					return null == n && (n = r), [
						["M", t, e],
						["m", 0, -n],
						["a", r, n, 0, 1, 1, 0, 2 * n],
						["a", r, n, 0, 1, 1, 0, -2 * n],
						["z"]
					]
				},
				ve = r._getPath = {
					path: function(t) {
						return t.attr("path")
					},
					circle: function(t) {
						var e = t.attrs;
						return pe(e.cx, e.cy, e.r)
					},
					ellipse: function(t) {
						var e = t.attrs;
						return pe(e.cx, e.cy, e.rx, e.ry)
					},
					rect: function(t) {
						var e = t.attrs;
						return de(e.x, e.y, e.width, e.height, e.r)
					},
					image: function(t) {
						var e = t.attrs;
						return de(e.x, e.y, e.width, e.height)
					},
					text: function(t) {
						var e = t._getBBox();
						return de(e.x, e.y, e.width, e.height)
					},
					set: function(t) {
						var e = t._getBBox();
						return de(e.x, e.y, e.width, e.height)
					}
				},
				me = r.mapPath = function(t, e) {
					if (!e) return t;
					var r, n, i, a, s, o, l;
					for (t = Ee(t), i = 0, s = t.length; s > i; i++)
						for (l = t[i], a = 1, o = l.length; o > a; a += 2) r = e.x(l[a], l[a + 1]), n = e.y(l[a], l[a + 1]), l[a] = r, l[a + 1] = n;
					return t
				};
			if (r._g = A, r.type = A.win.SVGAngle || A.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == r.type) {
				var xe, ye = A.doc.createElement("div");
				if (ye.innerHTML = '<v:shape adj="1"/>', xe = ye.firstChild, xe.style.behavior = "url(#default#VML)", !xe || "object" != typeof xe.adj) return r.type = M;
				ye = null
			}
			r.svg = !(r.vml = "VML" == r.type), r._Paper = I, r.fn = _ = I.prototype = r.prototype, r._id = 0, r._oid = 0, r.is = function(t, e) {
				return e = D.call(e), "finite" == e ? !Z[S](+t) : "array" == e ? t instanceof Array : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || X.call(t).slice(8, -1).toLowerCase() == e
			}, r.angle = function(t, e, n, i, a, s) {
				if (null == a) {
					var o = t - n,
						l = e - i;
					return o || l ? (180 + 180 * G.atan2(-l, -o) / Y + 360) % 360 : 0
				}
				return r.angle(t, e, a, s) - r.angle(n, i, a, s)
			}, r.rad = function(t) {
				return t % 360 * Y / 180
			}, r.deg = function(t) {
				return 180 * t / Y % 360
			}, r.snapTo = function(t, e, n) {
				if (n = r.is(n, "finite") ? n : 10, r.is(t, H)) {
					for (var i = t.length; i--;)
						if (j(t[i] - e) <= n) return t[i]
				} else {
					t = +t;
					var a = e % t;
					if (n > a) return e - a;
					if (a > t - n) return e - a + t
				}
				return e
			};
			r.createUUID = function(t, e) {
				return function() {
					return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t, e).toUpperCase()
				}
			}(/[xy]/g, function(t) {
				var e = 16 * G.random() | 0,
					r = "x" == t ? e : 3 & e | 8;
				return r.toString(16)
			});
			r.setWindow = function(t) {
				e("raphael.setWindow", r, A.win, t), A.win = t, A.doc = A.win.document, r._engine.initWin && r._engine.initWin(A.win)
			};
			var be = function(t) {
					if (r.vml) {
						var e, n = /^\s+|\s+$/g;
						try {
							var i = new ActiveXObject("htmlfile");
							i.write("<body>"), i.close(), e = i.body
						} catch (s) {
							e = createPopup().document.body
						}
						var o = e.createTextRange();
						be = a(function(t) {
							try {
								e.style.color = N(t).replace(n, M);
								var r = o.queryCommandValue("ForeColor");
								return r = (255 & r) << 16 | 65280 & r | (16711680 & r) >>> 16, "#" + ("000000" + r.toString(16)).slice(-6)
							} catch (i) {
								return "none"
							}
						})
					} else {
						var l = A.doc.createElement("i");
						l.title = "Rapha\xebl Colour Picker", l.style.display = "none", A.doc.body.appendChild(l), be = a(function(t) {
							return l.style.color = t, A.doc.defaultView.getComputedStyle(l, M).getPropertyValue("color")
						})
					}
					return be(t)
				},
				_e = function() {
					return "hsb(" + [this.h, this.s, this.b] + ")"
				},
				we = function() {
					return "hsl(" + [this.h, this.s, this.l] + ")"
				},
				ke = function() {
					return this.hex
				},
				Ce = function(t, e, n) {
					if (null == e && r.is(t, "object") && "r" in t && "g" in t && "b" in t && (n = t.b, e = t.g, t = t.r), null == e && r.is(t, W)) {
						var i = r.getRGB(t);
						t = i.r, e = i.g, n = i.b
					}
					return (t > 1 || e > 1 || n > 1) && (t /= 255, e /= 255, n /= 255), [t, e, n]
				},
				Se = function(t, e, n, i) {
					t *= 255, e *= 255, n *= 255;
					var a = {
						r: t,
						g: e,
						b: n,
						hex: r.rgb(t, e, n),
						toString: ke
					};
					return r.is(i, "finite") && (a.opacity = i), a
				};
			r.color = function(t) {
				var e;
				return r.is(t, "object") && "h" in t && "s" in t && "b" in t ? (e = r.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : r.is(t, "object") && "h" in t && "s" in t && "l" in t ? (e = r.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : (r.is(t, "string") && (t = r.getRGB(t)), r.is(t, "object") && "r" in t && "g" in t && "b" in t ? (e = r.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = r.rgb2hsb(t), t.v = e.b) : (t = {
					hex: "none"
				}, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1)), t.toString = ke, t
			}, r.hsb2rgb = function(t, e, r, n) {
				this.is(t, "object") && "h" in t && "s" in t && "b" in t && (r = t.b, e = t.s, t = t.h, n = t.o), t *= 360;
				var i, a, s, o, l;
				return t = t % 360 / 60, l = r * e, o = l * (1 - j(t % 2 - 1)), i = a = s = r - l, t = ~~t, i += [l, o, 0, 0, o, l][t], a += [o, l, l, o, 0, 0][t], s += [0, 0, o, l, l, o][t], Se(i, a, s, n)
			}, r.hsl2rgb = function(t, e, r, n) {
				this.is(t, "object") && "h" in t && "s" in t && "l" in t && (r = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || r > 1) && (t /= 360, e /= 100, r /= 100), t *= 360;
				var i, a, s, o, l;
				return t = t % 360 / 60, l = 2 * e * (.5 > r ? r : 1 - r), o = l * (1 - j(t % 2 - 1)), i = a = s = r - l / 2, t = ~~t, i += [l, o, 0, 0, o, l][t], a += [o, l, l, o, 0, 0][t], s += [0, 0, o, l, l, o][t], Se(i, a, s, n)
			}, r.rgb2hsb = function(t, e, r) {
				r = Ce(t, e, r), t = r[0], e = r[1], r = r[2];
				var n, i, a, s;
				return a = z(t, e, r), s = a - V(t, e, r), n = 0 == s ? null : a == t ? (e - r) / s : a == e ? (r - t) / s + 2 : (t - e) / s + 4, n = (n + 360) % 6 * 60 / 360, i = 0 == s ? 0 : s / a, {
					h: n,
					s: i,
					b: a,
					toString: _e
				}
			}, r.rgb2hsl = function(t, e, r) {
				r = Ce(t, e, r), t = r[0], e = r[1], r = r[2];
				var n, i, a, s, o, l;
				return s = z(t, e, r), o = V(t, e, r), l = s - o, n = 0 == l ? null : s == t ? (e - r) / l : s == e ? (r - t) / l + 2 : (t - e) / l + 4, n = (n + 360) % 6 * 60 / 360, a = (s + o) / 2, i = 0 == l ? 0 : .5 > a ? l / (2 * a) : l / (2 - 2 * a), {
					h: n,
					s: i,
					l: a,
					toString: we
				}
			}, r._path2string = function() {
				return this.join(",").replace(se, "$1")
			};
			r._preload = function(t, e) {
				var r = A.doc.createElement("img");
				r.style.cssText = "position:absolute;left:-9999em;top:-9999em", r.onload = function() {
					e.call(this), this.onload = null, A.doc.body.removeChild(this)
				}, r.onerror = function() {
					A.doc.body.removeChild(this)
				}, A.doc.body.appendChild(r), r.src = t
			};
			r.getRGB = a(function(t) {
				if (!t || (t = N(t)).indexOf("-") + 1) return {
					r: -1,
					g: -1,
					b: -1,
					hex: "none",
					error: 1,
					toString: s
				};
				if ("none" == t) return {
					r: -1,
					g: -1,
					b: -1,
					hex: "none",
					toString: s
				};
				!(ae[S](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = be(t));
				var e, n, i, a, o, l, u = t.match($);
				return u ? (u[2] && (i = te(u[2].substring(5), 16), n = te(u[2].substring(3, 5), 16), e = te(u[2].substring(1, 3), 16)), u[3] && (i = te((o = u[3].charAt(3)) + o, 16), n = te((o = u[3].charAt(2)) + o, 16), e = te((o = u[3].charAt(1)) + o, 16)), u[4] && (l = u[4][F](ie), e = K(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), n = K(l[1]), "%" == l[1].slice(-1) && (n *= 2.55), i = K(l[2]), "%" == l[2].slice(-1) && (i *= 2.55), "rgba" == u[1].toLowerCase().slice(0, 4) && (a = K(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100)), u[5] ? (l = u[5][F](ie), e = K(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), n = K(l[1]), "%" == l[1].slice(-1) && (n *= 2.55), i = K(l[2]), "%" == l[2].slice(-1) && (i *= 2.55), ("deg" == l[0].slice(-3) || "\xb0" == l[0].slice(-1)) && (e /= 360), "hsba" == u[1].toLowerCase().slice(0, 4) && (a = K(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100), r.hsb2rgb(e, n, i, a)) : u[6] ? (l = u[6][F](ie), e = K(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), n = K(l[1]), "%" == l[1].slice(-1) && (n *= 2.55), i = K(l[2]), "%" == l[2].slice(-1) && (i *= 2.55), ("deg" == l[0].slice(-3) || "\xb0" == l[0].slice(-1)) && (e /= 360), "hsla" == u[1].toLowerCase().slice(0, 4) && (a = K(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100), r.hsl2rgb(e, n, i, a)) : (u = {
					r: e,
					g: n,
					b: i,
					toString: s
				}, u.hex = "#" + (16777216 | i | n << 8 | e << 16).toString(16).slice(1), r.is(a, "finite") && (u.opacity = a), u)) : {
					r: -1,
					g: -1,
					b: -1,
					hex: "none",
					error: 1,
					toString: s
				}
			}, r), r.hsb = a(function(t, e, n) {
				return r.hsb2rgb(t, e, n).hex
			}), r.hsl = a(function(t, e, n) {
				return r.hsl2rgb(t, e, n).hex
			}), r.rgb = a(function(t, e, r) {
				return "#" + (16777216 | r | e << 8 | t << 16).toString(16).slice(1)
			}), r.getColor = function(t) {
				var e = this.getColor.start = this.getColor.start || {
						h: 0,
						s: 1,
						b: t || .75
					},
					r = this.hsb2rgb(e.h, e.s, e.b);
				return e.h += .075, e.h > 1 && (e.h = 0, e.s -= .2, e.s <= 0 && (this.getColor.start = {
					h: 0,
					s: 1,
					b: e.b
				})), r.hex
			}, r.getColor.reset = function() {
				delete this.start
			}, r.parsePathString = function(t) {
				if (!t) return null;
				var e = Ae(t);
				if (e.arr) return Ie(e.arr);
				var n = {
						a: 7,
						c: 6,
						h: 1,
						l: 2,
						m: 2,
						r: 4,
						q: 4,
						s: 4,
						t: 2,
						v: 1,
						z: 0
					},
					i = [];
				return r.is(t, H) && r.is(t[0], H) && (i = Ie(t)), i.length || N(t).replace(oe, function(t, e, r) {
					var a = [],
						s = e.toLowerCase();
					if (r.replace(ue, function(t, e) {
							e && a.push(+e)
						}), "m" == s && a.length > 2 && (i.push([e][P](a.splice(0, 2))), s = "l", e = "m" == e ? "l" : "L"), "r" == s) i.push([e][P](a));
					else
						for (; a.length >= n[s] && (i.push([e][P](a.splice(0, n[s]))), n[s]););
				}), i.toString = r._path2string, e.arr = Ie(i), i
			}, r.parseTransformString = a(function(t) {
				if (!t) return null;
				var e = [];
				return r.is(t, H) && r.is(t[0], H) && (e = Ie(t)), e.length || N(t).replace(le, function(t, r, n) {
					{
						var i = [];
						D.call(r)
					}
					n.replace(ue, function(t, e) {
						e && i.push(+e)
					}), e.push([r][P](i))
				}), e.toString = r._path2string, e
			});
			var Ae = function(t) {
				var e = Ae.ps = Ae.ps || {};
				return e[t] ? e[t].sleep = 100 : e[t] = {
					sleep: 100
				}, setTimeout(function() {
					for (var r in e) e[S](r) && r != t && (e[r].sleep--, !e[r].sleep && delete e[r])
				}), e[t]
			};
			r.findDotsAtSegment = function(t, e, r, n, i, a, s, o, l) {
				var u = 1 - l,
					c = U(u, 3),
					h = U(u, 2),
					f = l * l,
					g = f * l,
					d = c * t + 3 * h * l * r + 3 * u * l * l * i + g * s,
					p = c * e + 3 * h * l * n + 3 * u * l * l * a + g * o,
					v = t + 2 * l * (r - t) + f * (i - 2 * r + t),
					m = e + 2 * l * (n - e) + f * (a - 2 * n + e),
					x = r + 2 * l * (i - r) + f * (s - 2 * i + r),
					y = n + 2 * l * (a - n) + f * (o - 2 * a + n),
					b = u * t + l * r,
					_ = u * e + l * n,
					w = u * i + l * s,
					k = u * a + l * o,
					C = 90 - 180 * G.atan2(v - x, m - y) / Y;
				return (v > x || y > m) && (C += 180), {
					x: d,
					y: p,
					m: {
						x: v,
						y: m
					},
					n: {
						x: x,
						y: y
					},
					start: {
						x: b,
						y: _
					},
					end: {
						x: w,
						y: k
					},
					alpha: C
				}
			}, r.bezierBBox = function(t, e, n, i, a, s, o, l) {
				r.is(t, "array") || (t = [t, e, n, i, a, s, o, l]);
				var u = Fe.apply(null, t);
				return {
					x: u.min.x,
					y: u.min.y,
					x2: u.max.x,
					y2: u.max.y,
					width: u.max.x - u.min.x,
					height: u.max.y - u.min.y
				}
			}, r.isPointInsideBBox = function(t, e, r) {
				return e >= t.x && e <= t.x2 && r >= t.y && r <= t.y2
			}, r.isBBoxIntersect = function(t, e) {
				var n = r.isPointInsideBBox;
				return n(e, t.x, t.y) || n(e, t.x2, t.y) || n(e, t.x, t.y2) || n(e, t.x2, t.y2) || n(t, e.x, e.y) || n(t, e.x2, e.y) || n(t, e.x, e.y2) || n(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
			}, r.pathIntersection = function(t, e) {
				return g(t, e)
			}, r.pathIntersectionNumber = function(t, e) {
				return g(t, e, 1)
			}, r.isPointInsidePath = function(t, e, n) {
				var i = r.pathBBox(t);
				return r.isPointInsideBBox(i, e, n) && g(t, [
					["M", e, n],
					["H", i.x2 + 10]
				], 1) % 2 == 1
			}, r._removedFactory = function(t) {
				return function() {
					e("raphael.log", null, "Rapha\xebl: you are calling to method \u201c" + t + "\u201d of removed object", t)
				}
			};
			var Te = r.pathBBox = function(t) {
					var e = Ae(t);
					if (e.bbox) return n(e.bbox);
					if (!t) return {
						x: 0,
						y: 0,
						width: 0,
						height: 0,
						x2: 0,
						y2: 0
					};
					t = Ee(t);
					for (var r, i = 0, a = 0, s = [], o = [], l = 0, u = t.length; u > l; l++)
						if (r = t[l], "M" == r[0]) i = r[1], a = r[2], s.push(i), o.push(a);
						else {
							var c = Fe(i, a, r[1], r[2], r[3], r[4], r[5], r[6]);
							s = s[P](c.min.x, c.max.x), o = o[P](c.min.y, c.max.y), i = r[5], a = r[6]
						}
					var h = V[B](0, s),
						f = V[B](0, o),
						g = z[B](0, s),
						d = z[B](0, o),
						p = g - h,
						v = d - f,
						m = {
							x: h,
							y: f,
							x2: g,
							y2: d,
							width: p,
							height: v,
							cx: h + p / 2,
							cy: f + v / 2
						};
					return e.bbox = n(m), m
				},
				Ie = function(t) {
					var e = n(t);
					return e.toString = r._path2string, e
				},
				Be = r._pathToRelative = function(t) {
					var e = Ae(t);
					if (e.rel) return Ie(e.rel);
					r.is(t, H) && r.is(t && t[0], H) || (t = r.parsePathString(t));
					var n = [],
						i = 0,
						a = 0,
						s = 0,
						o = 0,
						l = 0;
					"M" == t[0][0] && (i = t[0][1], a = t[0][2], s = i, o = a, l++, n.push(["M", i, a]));
					for (var u = l, c = t.length; c > u; u++) {
						var h = n[u] = [],
							f = t[u];
						if (f[0] != D.call(f[0])) switch (h[0] = D.call(f[0]), h[0]) {
							case "a":
								h[1] = f[1], h[2] = f[2], h[3] = f[3], h[4] = f[4], h[5] = f[5], h[6] = +(f[6] - i).toFixed(3), h[7] = +(f[7] - a).toFixed(3);
								break;
							case "v":
								h[1] = +(f[1] - a).toFixed(3);
								break;
							case "m":
								s = f[1], o = f[2];
							default:
								for (var g = 1, d = f.length; d > g; g++) h[g] = +(f[g] - (g % 2 ? i : a)).toFixed(3)
						} else {
							h = n[u] = [], "m" == f[0] && (s = f[1] + i, o = f[2] + a);
							for (var p = 0, v = f.length; v > p; p++) n[u][p] = f[p]
						}
						var m = n[u].length;
						switch (n[u][0]) {
							case "z":
								i = s, a = o;
								break;
							case "h":
								i += +n[u][m - 1];
								break;
							case "v":
								a += +n[u][m - 1];
								break;
							default:
								i += +n[u][m - 2], a += +n[u][m - 1]
						}
					}
					return n.toString = r._path2string, e.rel = Ie(n), n
				},
				Pe = r._pathToAbsolute = function(t) {
					var e = Ae(t);
					if (e.abs) return Ie(e.abs);
					if (r.is(t, H) && r.is(t && t[0], H) || (t = r.parsePathString(t)), !t || !t.length) return [
						["M", 0, 0]
					];
					var n = [],
						i = 0,
						a = 0,
						s = 0,
						l = 0,
						u = 0;
					"M" == t[0][0] && (i = +t[0][1], a = +t[0][2], s = i, l = a, u++, n[0] = ["M", i, a]);
					for (var c, h, f = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), g = u, d = t.length; d > g; g++) {
						if (n.push(c = []), h = t[g], h[0] != ee.call(h[0])) switch (c[0] = ee.call(h[0]), c[0]) {
								case "A":
									c[1] = h[1], c[2] = h[2], c[3] = h[3], c[4] = h[4], c[5] = h[5], c[6] = +(h[6] + i), c[7] = +(h[7] + a);
									break;
								case "V":
									c[1] = +h[1] + a;
									break;
								case "H":
									c[1] = +h[1] + i;
									break;
								case "R":
									for (var p = [i, a][P](h.slice(1)), v = 2, m = p.length; m > v; v++) p[v] = +p[v] + i, p[++v] = +p[v] + a;
									n.pop(), n = n[P](o(p, f));
									break;
								case "M":
									s = +h[1] + i, l = +h[2] + a;
								default:
									for (v = 1, m = h.length; m > v; v++) c[v] = +h[v] + (v % 2 ? i : a)
							} else if ("R" == h[0]) p = [i, a][P](h.slice(1)), n.pop(), n = n[P](o(p, f)), c = ["R"][P](h.slice(-2));
							else
								for (var x = 0, y = h.length; y > x; x++) c[x] = h[x];
						switch (c[0]) {
							case "Z":
								i = s, a = l;
								break;
							case "H":
								i = c[1];
								break;
							case "V":
								a = c[1];
								break;
							case "M":
								s = c[c.length - 2], l = c[c.length - 1];
							default:
								i = c[c.length - 2], a = c[c.length - 1]
						}
					}
					return n.toString = r._path2string, e.abs = Ie(n), n
				},
				Le = function(t, e, r, n) {
					return [t, e, r, n, r, n]
				},
				Me = function(t, e, r, n, i, a) {
					var s = 1 / 3,
						o = 2 / 3;
					return [s * t + o * r, s * e + o * n, s * i + o * r, s * a + o * n, i, a]
				},
				Re = function(t, e, r, n, i, s, o, l, u, c) {
					var h, f = 120 * Y / 180,
						g = Y / 180 * (+i || 0),
						d = [],
						p = a(function(t, e, r) {
							var n = t * G.cos(r) - e * G.sin(r),
								i = t * G.sin(r) + e * G.cos(r);
							return {
								x: n,
								y: i
							}
						});
					if (c) C = c[0], S = c[1], w = c[2], k = c[3];
					else {
						h = p(t, e, -g), t = h.x, e = h.y, h = p(l, u, -g), l = h.x, u = h.y;
						var v = (G.cos(Y / 180 * i), G.sin(Y / 180 * i), (t - l) / 2),
							m = (e - u) / 2,
							x = v * v / (r * r) + m * m / (n * n);
						x > 1 && (x = G.sqrt(x), r = x * r, n = x * n);
						var y = r * r,
							b = n * n,
							_ = (s == o ? -1 : 1) * G.sqrt(j((y * b - y * m * m - b * v * v) / (y * m * m + b * v * v))),
							w = _ * r * m / n + (t + l) / 2,
							k = _ * -n * v / r + (e + u) / 2,
							C = G.asin(((e - k) / n).toFixed(9)),
							S = G.asin(((u - k) / n).toFixed(9));
						C = w > t ? Y - C : C, S = w > l ? Y - S : S, 0 > C && (C = 2 * Y + C), 0 > S && (S = 2 * Y + S), o && C > S && (C -= 2 * Y), !o && S > C && (S -= 2 * Y)
					}
					var A = S - C;
					if (j(A) > f) {
						var T = S,
							I = l,
							B = u;
						S = C + f * (o && S > C ? 1 : -1), l = w + r * G.cos(S), u = k + n * G.sin(S), d = Re(l, u, r, n, i, 0, o, I, B, [S, T, w, k])
					}
					A = S - C;
					var L = G.cos(C),
						M = G.sin(C),
						R = G.cos(S),
						N = G.sin(S),
						E = G.tan(A / 4),
						O = 4 / 3 * r * E,
						D = 4 / 3 * n * E,
						z = [t, e],
						V = [t + O * M, e - D * L],
						U = [l + O * N, u - D * R],
						q = [l, u];
					if (V[0] = 2 * z[0] - V[0], V[1] = 2 * z[1] - V[1], c) return [V, U, q][P](d);
					d = [V, U, q][P](d).join()[F](",");
					for (var W = [], H = 0, X = d.length; X > H; H++) W[H] = H % 2 ? p(d[H - 1], d[H], g).y : p(d[H], d[H + 1], g).x;
					return W
				},
				Ne = function(t, e, r, n, i, a, s, o, l) {
					var u = 1 - l;
					return {
						x: U(u, 3) * t + 3 * U(u, 2) * l * r + 3 * u * l * l * i + U(l, 3) * s,
						y: U(u, 3) * e + 3 * U(u, 2) * l * n + 3 * u * l * l * a + U(l, 3) * o
					}
				},
				Fe = a(function(t, e, r, n, i, a, s, o) {
					var l, u = i - 2 * r + t - (s - 2 * i + r),
						c = 2 * (r - t) - 2 * (i - r),
						h = t - r,
						f = (-c + G.sqrt(c * c - 4 * u * h)) / 2 / u,
						g = (-c - G.sqrt(c * c - 4 * u * h)) / 2 / u,
						d = [e, o],
						p = [t, s];
					return j(f) > "1e12" && (f = .5), j(g) > "1e12" && (g = .5), f > 0 && 1 > f && (l = Ne(t, e, r, n, i, a, s, o, f), p.push(l.x), d.push(l.y)), g > 0 && 1 > g && (l = Ne(t, e, r, n, i, a, s, o, g), p.push(l.x), d.push(l.y)), u = a - 2 * n + e - (o - 2 * a + n), c = 2 * (n - e) - 2 * (a - n), h = e - n, f = (-c + G.sqrt(c * c - 4 * u * h)) / 2 / u, g = (-c - G.sqrt(c * c - 4 * u * h)) / 2 / u, j(f) > "1e12" && (f = .5), j(g) > "1e12" && (g = .5), f > 0 && 1 > f && (l = Ne(t, e, r, n, i, a, s, o, f), p.push(l.x), d.push(l.y)), g > 0 && 1 > g && (l = Ne(t, e, r, n, i, a, s, o, g), p.push(l.x), d.push(l.y)), {
						min: {
							x: V[B](0, p),
							y: V[B](0, d)
						},
						max: {
							x: z[B](0, p),
							y: z[B](0, d)
						}
					}
				}),
				Ee = r._path2curve = a(function(t, e) {
					var r = !e && Ae(t);
					if (!e && r.curve) return Ie(r.curve);
					for (var n = Pe(t), i = e && Pe(e), a = {
							x: 0,
							y: 0,
							bx: 0,
							by: 0,
							X: 0,
							Y: 0,
							qx: null,
							qy: null
						}, s = {
							x: 0,
							y: 0,
							bx: 0,
							by: 0,
							X: 0,
							Y: 0,
							qx: null,
							qy: null
						}, o = (function(t, e, r) {
							var n, i;
							if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
							switch (!(t[0] in {
								T: 1,
								Q: 1
							}) && (e.qx = e.qy = null), t[0]) {
								case "M":
									e.X = t[1], e.Y = t[2];
									break;
								case "A":
									t = ["C"][P](Re[B](0, [e.x, e.y][P](t.slice(1))));
									break;
								case "S":
									"C" == r || "S" == r ? (n = 2 * e.x - e.bx, i = 2 * e.y - e.by) : (n = e.x, i = e.y), t = ["C", n, i][P](t.slice(1));
									break;
								case "T":
									"Q" == r || "T" == r ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"][P](Me(e.x, e.y, e.qx, e.qy, t[1], t[2]));
									break;
								case "Q":
									e.qx = t[1], e.qy = t[2], t = ["C"][P](Me(e.x, e.y, t[1], t[2], t[3], t[4]));
									break;
								case "L":
									t = ["C"][P](Le(e.x, e.y, t[1], t[2]));
									break;
								case "H":
									t = ["C"][P](Le(e.x, e.y, t[1], e.y));
									break;
								case "V":
									t = ["C"][P](Le(e.x, e.y, e.x, t[1]));
									break;
								case "Z":
									t = ["C"][P](Le(e.x, e.y, e.X, e.Y))
							}
							return t
						}), l = function(t, e) {
							if (t[e].length > 7) {
								t[e].shift();
								for (var r = t[e]; r.length;) t.splice(e++, 0, ["C"][P](r.splice(0, 6)));
								t.splice(e, 1), h = z(n.length, i && i.length || 0)
							}
						}, u = function(t, e, r, a, s) {
							t && e && "M" == t[s][0] && "M" != e[s][0] && (e.splice(s, 0, ["M", a.x, a.y]), r.bx = 0, r.by = 0, r.x = t[s][1], r.y = t[s][2], h = z(n.length, i && i.length || 0))
						}, c = 0, h = z(n.length, i && i.length || 0); h > c; c++) {
						n[c] = o(n[c], a), l(n, c), i && (i[c] = o(i[c], s)), i && l(i, c), u(n, i, a, s, c), u(i, n, s, a, c);
						var f = n[c],
							g = i && i[c],
							d = f.length,
							p = i && g.length;
						a.x = f[d - 2], a.y = f[d - 1], a.bx = K(f[d - 4]) || a.x, a.by = K(f[d - 3]) || a.y, s.bx = i && (K(g[p - 4]) || s.x), s.by = i && (K(g[p - 3]) || s.y), s.x = i && g[p - 2], s.y = i && g[p - 1]
					}
					return i || (r.curve = Ie(n)), i ? [n, i] : n
				}, null, Ie),
				Oe = (r._parseDots = a(function(t) {
					for (var e = [], n = 0, i = t.length; i > n; n++) {
						var a = {},
							s = t[n].match(/^([^:]*):?([\d\.]*)/);
						if (a.color = r.getRGB(s[1]), a.color.error) return null;
						a.color = a.color.hex, s[2] && (a.offset = s[2] + "%"), e.push(a)
					}
					for (n = 1, i = e.length - 1; i > n; n++)
						if (!e[n].offset) {
							for (var o = K(e[n - 1].offset || 0), l = 0, u = n + 1; i > u; u++)
								if (e[u].offset) {
									l = e[u].offset;
									break
								}
							l || (l = 100, u = i), l = K(l);
							for (var c = (l - o) / (u - n + 1); u > n; n++) o += c, e[n].offset = o + "%"
						}
					return e
				}), r._tear = function(t, e) {
					t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next)
				}),
				De = (r._tofront = function(t, e) {
					e.top !== t && (Oe(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t)
				}, r._toback = function(t, e) {
					e.bottom !== t && (Oe(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t)
				}, r._insertafter = function(t, e, r) {
					Oe(t, r), e == r.top && (r.top = t), e.next && (e.next.prev = t), t.next = e.next, t.prev = e, e.next = t
				}, r._insertbefore = function(t, e, r) {
					Oe(t, r), e == r.bottom && (r.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, e.prev = t, t.next = e
				}, r.toMatrix = function(t, e) {
					var r = Te(t),
						n = {
							_: {
								transform: M
							},
							getBBox: function() {
								return r
							}
						};
					return Ge(n, e), n.matrix
				}),
				Ge = (r.transformPath = function(t, e) {
					return me(t, De(t, e))
				}, r._extractTransform = function(t, e) {
					if (null == e) return t._.transform;
					e = N(e).replace(/\.{3}|\u2026/g, t._.transform || M);
					var n = r.parseTransformString(e),
						i = 0,
						a = 0,
						s = 0,
						o = 1,
						l = 1,
						u = t._,
						c = new d;
					if (u.transform = n || [], n)
						for (var h = 0, f = n.length; f > h; h++) {
							var g, p, v, m, x, y = n[h],
								b = y.length,
								_ = N(y[0]).toLowerCase(),
								w = y[0] != _,
								k = w ? c.invert() : 0;
							"t" == _ && 3 == b ? w ? (g = k.x(0, 0), p = k.y(0, 0), v = k.x(y[1], y[2]), m = k.y(y[1], y[2]), c.translate(v - g, m - p)) : c.translate(y[1], y[2]) : "r" == _ ? 2 == b ? (x = x || t.getBBox(1), c.rotate(y[1], x.x + x.width / 2, x.y + x.height / 2), i += y[1]) : 4 == b && (w ? (v = k.x(y[2], y[3]), m = k.y(y[2], y[3]), c.rotate(y[1], v, m)) : c.rotate(y[1], y[2], y[3]), i += y[1]) : "s" == _ ? 2 == b || 3 == b ? (x = x || t.getBBox(1), c.scale(y[1], y[b - 1], x.x + x.width / 2, x.y + x.height / 2), o *= y[1], l *= y[b - 1]) : 5 == b && (w ? (v = k.x(y[3], y[4]), m = k.y(y[3], y[4]), c.scale(y[1], y[2], v, m)) : c.scale(y[1], y[2], y[3], y[4]), o *= y[1], l *= y[2]) : "m" == _ && 7 == b && c.add(y[1], y[2], y[3], y[4], y[5], y[6]), u.dirtyT = 1, t.matrix = c
						}
					t.matrix = c, u.sx = o, u.sy = l, u.deg = i, u.dx = a = c.e, u.dy = s = c.f, 1 == o && 1 == l && !i && u.bbox ? (u.bbox.x += +a, u.bbox.y += +s) : u.dirtyT = 1
				}),
				ze = function(t) {
					var e = t[0];
					switch (e.toLowerCase()) {
						case "t":
							return [e, 0, 0];
						case "m":
							return [e, 1, 0, 0, 1, 0, 0];
						case "r":
							return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
						case "s":
							return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
					}
				},
				Ve = r._equaliseTransform = function(t, e) {
					e = N(e).replace(/\.{3}|\u2026/g, t), t = r.parseTransformString(t) || [], e = r.parseTransformString(e) || [];
					for (var n, i, a, s, o = z(t.length, e.length), l = [], u = [], c = 0; o > c; c++) {
						if (a = t[c] || ze(e[c]), s = e[c] || ze(a), a[0] != s[0] || "r" == a[0].toLowerCase() && (a[2] != s[2] || a[3] != s[3]) || "s" == a[0].toLowerCase() && (a[3] != s[3] || a[4] != s[4])) return;
						for (l[c] = [], u[c] = [], n = 0, i = z(a.length, s.length); i > n; n++) n in a && (l[c][n] = a[n]), n in s && (u[c][n] = s[n])
					}
					return {
						from: l,
						to: u
					}
				};
			r._getContainer = function(t, e, n, i) {
					var a;
					return a = null != i || r.is(t, "object") ? t : A.doc.getElementById(t), null != a ? a.tagName ? null == e ? {
						container: a,
						width: a.style.pixelWidth || a.offsetWidth,
						height: a.style.pixelHeight || a.offsetHeight
					} : {
						container: a,
						width: e,
						height: n
					} : {
						container: 1,
						x: t,
						y: e,
						width: n,
						height: i
					} : void 0
				}, r.pathToRelative = Be, r._engine = {}, r.path2curve = Ee, r.matrix = function(t, e, r, n, i, a) {
					return new d(t, e, r, n, i, a)
				},
				function(t) {
					function e(t) {
						return t[0] * t[0] + t[1] * t[1]
					}

					function n(t) {
						var r = G.sqrt(e(t));
						t[0] && (t[0] /= r), t[1] && (t[1] /= r)
					}
					t.add = function(t, e, r, n, i, a) {
						var s, o, l, u, c = [
								[],
								[],
								[]
							],
							h = [
								[this.a, this.c, this.e],
								[this.b, this.d, this.f],
								[0, 0, 1]
							],
							f = [
								[t, r, i],
								[e, n, a],
								[0, 0, 1]
							];
						for (t && t instanceof d && (f = [
								[t.a, t.c, t.e],
								[t.b, t.d, t.f],
								[0, 0, 1]
							]), s = 0; 3 > s; s++)
							for (o = 0; 3 > o; o++) {
								for (u = 0, l = 0; 3 > l; l++) u += h[s][l] * f[l][o];
								c[s][o] = u
							}
						this.a = c[0][0], this.b = c[1][0], this.c = c[0][1], this.d = c[1][1], this.e = c[0][2], this.f = c[1][2]
					}, t.invert = function() {
						var t = this,
							e = t.a * t.d - t.b * t.c;
						return new d(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
					}, t.clone = function() {
						return new d(this.a, this.b, this.c, this.d, this.e, this.f)
					}, t.translate = function(t, e) {
						this.add(1, 0, 0, 1, t, e)
					}, t.scale = function(t, e, r, n) {
						null == e && (e = t), (r || n) && this.add(1, 0, 0, 1, r, n), this.add(t, 0, 0, e, 0, 0), (r || n) && this.add(1, 0, 0, 1, -r, -n)
					}, t.rotate = function(t, e, n) {
						t = r.rad(t), e = e || 0, n = n || 0;
						var i = +G.cos(t).toFixed(9),
							a = +G.sin(t).toFixed(9);
						this.add(i, a, -a, i, e, n), this.add(1, 0, 0, 1, -e, -n)
					}, t.x = function(t, e) {
						return t * this.a + e * this.c + this.e
					}, t.y = function(t, e) {
						return t * this.b + e * this.d + this.f
					}, t.get = function(t) {
						return +this[N.fromCharCode(97 + t)].toFixed(4)
					}, t.toString = function() {
						return r.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
					}, t.toFilter = function() {
						return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
					}, t.offset = function() {
						return [this.e.toFixed(4), this.f.toFixed(4)]
					}, t.split = function() {
						var t = {};
						t.dx = this.e, t.dy = this.f;
						var i = [
							[this.a, this.c],
							[this.b, this.d]
						];
						t.scalex = G.sqrt(e(i[0])), n(i[0]), t.shear = i[0][0] * i[1][0] + i[0][1] * i[1][1], i[1] = [i[1][0] - i[0][0] * t.shear, i[1][1] - i[0][1] * t.shear], t.scaley = G.sqrt(e(i[1])), n(i[1]), t.shear /= t.scaley;
						var a = -i[0][1],
							s = i[1][1];
						return 0 > s ? (t.rotate = r.deg(G.acos(s)), 0 > a && (t.rotate = 360 - t.rotate)) : t.rotate = r.deg(G.asin(a)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t
					}, t.toTransformString = function(t) {
						var e = t || this[F]();
						return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [e.dx, e.dy] : M) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : M) + (e.rotate ? "r" + [e.rotate, 0, 0] : M)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
					}
				}(d.prototype);
			var je = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
			_.safari = "Apple Computer, Inc." == navigator.vendor && (je && je[1] < 4 || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && je && je[1] < 8 ? function() {
				var t = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
					stroke: "none"
				});
				setTimeout(function() {
					t.remove()
				})
			} : fe;
			for (var Ue = function() {
					this.returnValue = !1
				}, Ye = function() {
					return this.originalEvent.preventDefault()
				}, qe = function() {
					this.cancelBubble = !0
				}, We = function() {
					return this.originalEvent.stopPropagation()
				}, He = function(t) {
					var e = A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
						r = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft;
					return {
						x: t.clientX + r,
						y: t.clientY + e
					}
				}, Xe = function() {
					return A.doc.addEventListener ? function(t, e, r, n) {
						var i = function(t) {
							var e = He(t);
							return r.call(n, t, e.x, e.y)
						};
						if (t.addEventListener(e, i, !1), L && O[e]) {
							var a = function(e) {
								for (var i = He(e), a = e, s = 0, o = e.targetTouches && e.targetTouches.length; o > s; s++)
									if (e.targetTouches[s].target == t) {
										e = e.targetTouches[s], e.originalEvent = a, e.preventDefault = Ye, e.stopPropagation = We;
										break
									}
								return r.call(n, e, i.x, i.y)
							};
							t.addEventListener(O[e], a, !1)
						}
						return function() {
							return t.removeEventListener(e, i, !1), L && O[e] && t.removeEventListener(O[e], i, !1), !0
						}
					} : A.doc.attachEvent ? function(t, e, r, n) {
						var i = function(t) {
							t = t || A.win.event;
							var e = A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
								i = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft,
								a = t.clientX + i,
								s = t.clientY + e;
							return t.preventDefault = t.preventDefault || Ue, t.stopPropagation = t.stopPropagation || qe, r.call(n, t, a, s)
						};
						t.attachEvent("on" + e, i);
						var a = function() {
							return t.detachEvent("on" + e, i), !0
						};
						return a
					} : void 0
				}(), $e = [], Ze = function(t) {
					for (var r, n = t.clientX, i = t.clientY, a = A.doc.documentElement.scrollTop || A.doc.body.scrollTop, s = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft, o = $e.length; o--;) {
						if (r = $e[o], L && t.touches) {
							for (var l, u = t.touches.length; u--;)
								if (l = t.touches[u], l.identifier == r.el._drag.id) {
									n = l.clientX, i = l.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
									break
								}
						} else t.preventDefault();
						var c, h = r.el.node,
							f = h.nextSibling,
							g = h.parentNode,
							d = h.style.display;
						A.win.opera && g.removeChild(h), h.style.display = "none", c = r.el.paper.getElementByPoint(n, i), h.style.display = d, A.win.opera && (f ? g.insertBefore(h, f) : g.appendChild(h)), c && e("raphael.drag.over." + r.el.id, r.el, c), n += s, i += a, e("raphael.drag.move." + r.el.id, r.move_scope || r.el, n - r.el._drag.x, i - r.el._drag.y, n, i, t)
					}
				}, Je = function(t) {
					r.unmousemove(Ze).unmouseup(Je);
					for (var n, i = $e.length; i--;) n = $e[i], n.el._drag = {}, e("raphael.drag.end." + n.el.id, n.end_scope || n.start_scope || n.move_scope || n.el, t);
					$e = []
				}, Qe = r.el = {}, Ke = E.length; Ke--;) ! function(t) {
				r[t] = Qe[t] = function(e, n) {
					return r.is(e, "function") && (this.events = this.events || [], this.events.push({
						name: t,
						f: e,
						unbind: Xe(this.shape || this.node || A.doc, t, e, n || this)
					})), this
				}, r["un" + t] = Qe["un" + t] = function(e) {
					for (var n = this.events || [], i = n.length; i--;) n[i].name != t || !r.is(e, "undefined") && n[i].f != e || (n[i].unbind(), n.splice(i, 1), !n.length && delete this.events);
					return this
				}
			}(E[Ke]);
			Qe.data = function(t, n) {
				var i = ce[this.id] = ce[this.id] || {};
				if (0 == arguments.length) return i;
				if (1 == arguments.length) {
					if (r.is(t, "object")) {
						for (var a in t) t[S](a) && this.data(a, t[a]);
						return this
					}
					return e("raphael.data.get." + this.id, this, i[t], t), i[t]
				}
				return i[t] = n, e("raphael.data.set." + this.id, this, n, t), this
			}, Qe.removeData = function(t) {
				return null == t ? ce[this.id] = {} : ce[this.id] && delete ce[this.id][t], this
			}, Qe.getData = function() {
				return n(ce[this.id] || {})
			}, Qe.hover = function(t, e, r, n) {
				return this.mouseover(t, r).mouseout(e, n || r)
			}, Qe.unhover = function(t, e) {
				return this.unmouseover(t).unmouseout(e)
			};
			var tr = [];
			Qe.drag = function(t, n, i, a, s, o) {
				function l(l) {
					(l.originalEvent || l).preventDefault();
					var u = l.clientX,
						c = l.clientY,
						h = A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
						f = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft;
					if (this._drag.id = l.identifier, L && l.touches)
						for (var g, d = l.touches.length; d--;)
							if (g = l.touches[d], this._drag.id = g.identifier, g.identifier == this._drag.id) {
								u = g.clientX, c = g.clientY;
								break
							}
					this._drag.x = u + f, this._drag.y = c + h, !$e.length && r.mousemove(Ze).mouseup(Je), $e.push({
						el: this,
						move_scope: a,
						start_scope: s,
						end_scope: o
					}), n && e.on("raphael.drag.start." + this.id, n), t && e.on("raphael.drag.move." + this.id, t), i && e.on("raphael.drag.end." + this.id, i), e("raphael.drag.start." + this.id, s || a || this, l.clientX + f, l.clientY + h, l)
				}
				return this._drag = {}, tr.push({
					el: this,
					start: l
				}), this.mousedown(l), this
			}, Qe.onDragOver = function(t) {
				t ? e.on("raphael.drag.over." + this.id, t) : e.unbind("raphael.drag.over." + this.id)
			}, Qe.undrag = function() {
				for (var t = tr.length; t--;) tr[t].el == this && (this.unmousedown(tr[t].start), tr.splice(t, 1), e.unbind("raphael.drag.*." + this.id));
				!tr.length && r.unmousemove(Ze).unmouseup(Je), $e = []
			}, _.circle = function(t, e, n) {
				var i = r._engine.circle(this, t || 0, e || 0, n || 0);
				return this.__set__ && this.__set__.push(i), i
			}, _.rect = function(t, e, n, i, a) {
				var s = r._engine.rect(this, t || 0, e || 0, n || 0, i || 0, a || 0);
				return this.__set__ && this.__set__.push(s), s
			}, _.ellipse = function(t, e, n, i) {
				var a = r._engine.ellipse(this, t || 0, e || 0, n || 0, i || 0);
				return this.__set__ && this.__set__.push(a), a
			}, _.path = function(t) {
				t && !r.is(t, W) && !r.is(t[0], H) && (t += M);
				var e = r._engine.path(r.format[B](r, arguments), this);
				return this.__set__ && this.__set__.push(e), e
			}, _.image = function(t, e, n, i, a) {
				var s = r._engine.image(this, t || "about:blank", e || 0, n || 0, i || 0, a || 0);
				return this.__set__ && this.__set__.push(s), s
			}, _.text = function(t, e, n) {
				var i = r._engine.text(this, t || 0, e || 0, N(n));
				return this.__set__ && this.__set__.push(i), i
			}, _.set = function(t) {
				!r.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length));
				var e = new fr(t);
				return this.__set__ && this.__set__.push(e), e.paper = this, e.type = "set", e
			}, _.setStart = function(t) {
				this.__set__ = t || this.set()
			}, _.setFinish = function() {
				var t = this.__set__;
				return delete this.__set__, t
			}, _.setSize = function(t, e) {
				return r._engine.setSize.call(this, t, e)
			}, _.setViewBox = function(t, e, n, i, a) {
				return r._engine.setViewBox.call(this, t, e, n, i, a)
			}, _.top = _.bottom = null, _.raphael = r;
			var er = function(t) {
				var e = t.getBoundingClientRect(),
					r = t.ownerDocument,
					n = r.body,
					i = r.documentElement,
					a = i.clientTop || n.clientTop || 0,
					s = i.clientLeft || n.clientLeft || 0,
					o = e.top + (A.win.pageYOffset || i.scrollTop || n.scrollTop) - a,
					l = e.left + (A.win.pageXOffset || i.scrollLeft || n.scrollLeft) - s;
				return {
					y: o,
					x: l
				}
			};
			_.getElementByPoint = function(t, e) {
				var r = this,
					n = r.canvas,
					i = A.doc.elementFromPoint(t, e);
				if (A.win.opera && "svg" == i.tagName) {
					var a = er(n),
						s = n.createSVGRect();
					s.x = t - a.x, s.y = e - a.y, s.width = s.height = 1;
					var o = n.getIntersectionList(s, null);
					o.length && (i = o[o.length - 1])
				}
				if (!i) return null;
				for (; i.parentNode && i != n.parentNode && !i.raphael;) i = i.parentNode;
				return i == r.canvas.parentNode && (i = n), i = i && i.raphael ? r.getById(i.raphaelid) : null
			}, _.getElementsByBBox = function(t) {
				var e = this.set();
				return this.forEach(function(n) {
					r.isBBoxIntersect(n.getBBox(), t) && e.push(n)
				}), e
			}, _.getById = function(t) {
				for (var e = this.bottom; e;) {
					if (e.id == t) return e;
					e = e.next
				}
				return null
			}, _.forEach = function(t, e) {
				for (var r = this.bottom; r;) {
					if (t.call(e, r) === !1) return this;
					r = r.next
				}
				return this
			}, _.getElementsByPoint = function(t, e) {
				var r = this.set();
				return this.forEach(function(n) {
					n.isPointInside(t, e) && r.push(n)
				}), r
			}, Qe.isPointInside = function(t, e) {
				var n = this.realPath = ve[this.type](this);
				return this.attr("transform") && this.attr("transform").length && (n = r.transformPath(n, this.attr("transform"))), r.isPointInsidePath(n, t, e)
			}, Qe.getBBox = function(t) {
				if (this.removed) return {};
				var e = this._;
				return t ? ((e.dirty || !e.bboxwt) && (this.realPath = ve[this.type](this), e.bboxwt = Te(this.realPath), e.bboxwt.toString = p, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && ((e.dirty || !this.realPath) && (e.bboxwt = 0, this.realPath = ve[this.type](this)), e.bbox = Te(me(this.realPath, this.matrix)), e.bbox.toString = p, e.dirty = e.dirtyT = 0), e.bbox)
			}, Qe.clone = function() {
				if (this.removed) return null;
				var t = this.paper[this.type]().attr(this.attr());
				return this.__set__ && this.__set__.push(t), t
			}, Qe.glow = function(t) {
				if ("text" == this.type) return null;
				t = t || {};
				var e = {
						width: (t.width || 10) + (+this.attr("stroke-width") || 1),
						fill: t.fill || !1,
						opacity: t.opacity || .5,
						offsetx: t.offsetx || 0,
						offsety: t.offsety || 0,
						color: t.color || "#000"
					},
					r = e.width / 2,
					n = this.paper,
					i = n.set(),
					a = this.realPath || ve[this.type](this);
				a = this.matrix ? me(a, this.matrix) : a;
				for (var s = 1; r + 1 > s; s++) i.push(n.path(a).attr({
					stroke: e.color,
					fill: e.fill ? e.color : "none",
					"stroke-linejoin": "round",
					"stroke-linecap": "round",
					"stroke-width": +(e.width / r * s).toFixed(3),
					opacity: +(e.opacity / r).toFixed(3)
				}));
				return i.insertBefore(this).translate(e.offsetx, e.offsety)
			};
			var rr = function(t, e, n, i, a, s, o, l, h) {
					return null == h ? u(t, e, n, i, a, s, o, l) : r.findDotsAtSegment(t, e, n, i, a, s, o, l, c(t, e, n, i, a, s, o, l, h))
				},
				nr = function(t, e) {
					return function(n, i, a) {
						n = Ee(n);
						for (var s, o, l, u, c, h = "", f = {}, g = 0, d = 0, p = n.length; p > d; d++) {
							if (l = n[d], "M" == l[0]) s = +l[1], o = +l[2];
							else {
								if (u = rr(s, o, l[1], l[2], l[3], l[4], l[5], l[6]), g + u > i) {
									if (e && !f.start) {
										if (c = rr(s, o, l[1], l[2], l[3], l[4], l[5], l[6], i - g), h += ["C" + c.start.x, c.start.y, c.m.x, c.m.y, c.x, c.y], a) return h;
										f.start = h, h = ["M" + c.x, c.y + "C" + c.n.x, c.n.y, c.end.x, c.end.y, l[5], l[6]].join(), g += u, s = +l[5], o = +l[6];
										continue
									}
									if (!t && !e) return c = rr(s, o, l[1], l[2], l[3], l[4], l[5], l[6], i - g), {
										x: c.x,
										y: c.y,
										alpha: c.alpha
									}
								}
								g += u, s = +l[5], o = +l[6]
							}
							h += l.shift() + l
						}
						return f.end = h, c = t ? g : e ? f : r.findDotsAtSegment(s, o, l[0], l[1], l[2], l[3], l[4], l[5], 1), c.alpha && (c = {
							x: c.x,
							y: c.y,
							alpha: c.alpha
						}), c
					}
				},
				ir = nr(1),
				ar = nr(),
				sr = nr(0, 1);
			r.getTotalLength = ir, r.getPointAtLength = ar, r.getSubpath = function(t, e, r) {
				if (this.getTotalLength(t) - r < 1e-6) return sr(t, e).end;
				var n = sr(t, r, 1);
				return e ? sr(n, e).end : n
			}, Qe.getTotalLength = function() {
				var t = this.getPath();
				if (t) return this.node.getTotalLength ? this.node.getTotalLength() : ir(t)
			}, Qe.getPointAtLength = function(t) {
				var e = this.getPath();
				if (e) return ar(e, t)
			}, Qe.getPath = function() {
				var t, e = r._getPath[this.type];
				if ("text" != this.type && "set" != this.type) return e && (t = e(this)), t
			}, Qe.getSubpath = function(t, e) {
				var n = this.getPath();
				if (n) return r.getSubpath(n, t, e)
			};
			var or = r.easing_formulas = {
				linear: function(t) {
					return t
				},
				"<": function(t) {
					return U(t, 1.7)
				},
				">": function(t) {
					return U(t, .48)
				},
				"<>": function(t) {
					var e = .48 - t / 1.04,
						r = G.sqrt(.1734 + e * e),
						n = r - e,
						i = U(j(n), 1 / 3) * (0 > n ? -1 : 1),
						a = -r - e,
						s = U(j(a), 1 / 3) * (0 > a ? -1 : 1),
						o = i + s + .5;
					return 3 * (1 - o) * o * o + o * o * o
				},
				backIn: function(t) {
					var e = 1.70158;
					return t * t * ((e + 1) * t - e)
				},
				backOut: function(t) {
					t -= 1;
					var e = 1.70158;
					return t * t * ((e + 1) * t + e) + 1
				},
				elastic: function(t) {
					return t == !!t ? t : U(2, -10 * t) * G.sin(2 * (t - .075) * Y / .3) + 1
				},
				bounce: function(t) {
					var e, r = 7.5625,
						n = 2.75;
					return 1 / n > t ? e = r * t * t : 2 / n > t ? (t -= 1.5 / n, e = r * t * t + .75) : 2.5 / n > t ? (t -= 2.25 / n, e = r * t * t + .9375) : (t -= 2.625 / n, e = r * t * t + .984375), e
				}
			};
			or.easeIn = or["ease-in"] = or["<"], or.easeOut = or["ease-out"] = or[">"], or.easeInOut = or["ease-in-out"] = or["<>"], or["back-in"] = or.backIn, or["back-out"] = or.backOut;
			var lr = [],
				ur = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
					setTimeout(t, 16)
				},
				cr = function() {
					for (var t = +new Date, n = 0; n < lr.length; n++) {
						var i = lr[n];
						if (!i.el.removed && !i.paused) {
							var a, s, o = t - i.start,
								l = i.ms,
								u = i.easing,
								c = i.from,
								h = i.diff,
								f = i.to,
								g = (i.t, i.el),
								d = {},
								p = {};
							if (i.initstatus ? (o = (i.initstatus * i.anim.top - i.prev) / (i.percent - i.prev) * l, i.status = i.initstatus, delete i.initstatus, i.stop && lr.splice(n--, 1)) : i.status = (i.prev + (i.percent - i.prev) * (o / l)) / i.anim.top, !(0 > o))
								if (l > o) {
									var v = u(o / l);
									for (var m in c)
										if (c[S](m)) {
											switch (ne[m]) {
												case q:
													a = +c[m] + v * l * h[m];
													break;
												case "colour":
													a = "rgb(" + [hr(Q(c[m].r + v * l * h[m].r)), hr(Q(c[m].g + v * l * h[m].g)), hr(Q(c[m].b + v * l * h[m].b))].join(",") + ")";
													break;
												case "path":
													a = [];
													for (var y = 0, b = c[m].length; b > y; y++) {
														a[y] = [c[m][y][0]];
														for (var _ = 1, w = c[m][y].length; w > _; _++) a[y][_] = +c[m][y][_] + v * l * h[m][y][_];
														a[y] = a[y].join(R)
													}
													a = a.join(R);
													break;
												case "transform":
													if (h[m].real)
														for (a = [], y = 0, b = c[m].length; b > y; y++)
															for (a[y] = [c[m][y][0]], _ = 1, w = c[m][y].length; w > _; _++) a[y][_] = c[m][y][_] + v * l * h[m][y][_];
													else {
														var k = function(t) {
															return +c[m][t] + v * l * h[m][t]
														};
														a = [
															["m", k(0), k(1), k(2), k(3), k(4), k(5)]
														]
													}
													break;
												case "csv":
													if ("clip-rect" == m)
														for (a = [], y = 4; y--;) a[y] = +c[m][y] + v * l * h[m][y];
													break;
												default:
													var C = [][P](c[m]);
													for (a = [], y = g.paper.customAttributes[m].length; y--;) a[y] = +C[y] + v * l * h[m][y]
											}
											d[m] = a
										}
									g.attr(d),
										function(t, r, n) {
											setTimeout(function() {
												e("raphael.anim.frame." + t, r, n)
											})
										}(g.id, g, i.anim)
								} else {
									if (function(t, n, i) {
											setTimeout(function() {
												e("raphael.anim.frame." + n.id, n, i), e("raphael.anim.finish." + n.id, n, i), r.is(t, "function") && t.call(n)
											})
										}(i.callback, g, i.anim), g.attr(f), lr.splice(n--, 1), i.repeat > 1 && !i.next) {
										for (s in f) f[S](s) && (p[s] = i.totalOrigin[s]);
										i.el.attr(p), x(i.anim, i.el, i.anim.percents[0], null, i.totalOrigin, i.repeat - 1)
									}
									i.next && !i.stop && x(i.anim, i.el, i.next, null, i.totalOrigin, i.repeat)
								}
						}
					}
					r.svg && g && g.paper && g.paper.safari(), lr.length && ur(cr)
				},
				hr = function(t) {
					return t > 255 ? 255 : 0 > t ? 0 : t
				};
			Qe.animateWith = function(t, e, n, i, a, s) {
				var o = this;
				if (o.removed) return s && s.call(o), o;
				var l = n instanceof m ? n : r.animation(n, i, a, s);
				x(l, o, l.percents[0], null, o.attr());
				for (var u = 0, c = lr.length; c > u; u++)
					if (lr[u].anim == e && lr[u].el == t) {
						lr[c - 1].start = lr[u].start;
						break
					}
				return o
			}, Qe.onAnimation = function(t) {
				return t ? e.on("raphael.anim.frame." + this.id, t) : e.unbind("raphael.anim.frame." + this.id), this
			}, m.prototype.delay = function(t) {
				var e = new m(this.anim, this.ms);
				return e.times = this.times, e.del = +t || 0, e
			}, m.prototype.repeat = function(t) {
				var e = new m(this.anim, this.ms);
				return e.del = this.del, e.times = G.floor(z(t, 0)) || 1, e
			}, r.animation = function(t, e, n, i) {
				if (t instanceof m) return t;
				(r.is(n, "function") || !n) && (i = i || n || null, n = null), t = Object(t), e = +e || 0;
				var a, s, o = {};
				for (s in t) t[S](s) && K(s) != s && K(s) + "%" != s && (a = !0, o[s] = t[s]);
				return a ? (n && (o.easing = n), i && (o.callback = i), new m({
					100: o
				}, e)) : new m(t, e)
			}, Qe.animate = function(t, e, n, i) {
				var a = this;
				if (a.removed) return i && i.call(a), a;
				var s = t instanceof m ? t : r.animation(t, e, n, i);
				return x(s, a, s.percents[0], null, a.attr()), a
			}, Qe.setTime = function(t, e) {
				return t && null != e && this.status(t, V(e, t.ms) / t.ms), this
			}, Qe.status = function(t, e) {
				var r, n, i = [],
					a = 0;
				if (null != e) return x(t, this, -1, V(e, 1)), this;
				for (r = lr.length; r > a; a++)
					if (n = lr[a], n.el.id == this.id && (!t || n.anim == t)) {
						if (t) return n.status;
						i.push({
							anim: n.anim,
							status: n.status
						})
					}
				return t ? 0 : i
			}, Qe.pause = function(t) {
				for (var r = 0; r < lr.length; r++) lr[r].el.id != this.id || t && lr[r].anim != t || e("raphael.anim.pause." + this.id, this, lr[r].anim) !== !1 && (lr[r].paused = !0);
				return this
			}, Qe.resume = function(t) {
				for (var r = 0; r < lr.length; r++)
					if (lr[r].el.id == this.id && (!t || lr[r].anim == t)) {
						var n = lr[r];
						e("raphael.anim.resume." + this.id, this, n.anim) !== !1 && (delete n.paused, this.status(n.anim, n.status))
					}
				return this
			}, Qe.stop = function(t) {
				for (var r = 0; r < lr.length; r++) lr[r].el.id != this.id || t && lr[r].anim != t || e("raphael.anim.stop." + this.id, this, lr[r].anim) !== !1 && lr.splice(r--, 1);
				return this
			}, e.on("raphael.remove", y), e.on("raphael.clear", y), Qe.toString = function() {
				return "Rapha\xebl\u2019s object"
			};
			var fr = function(t) {
					if (this.items = [], this.length = 0, this.type = "set", t)
						for (var e = 0, r = t.length; r > e; e++) !t[e] || t[e].constructor != Qe.constructor && t[e].constructor != fr || (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
				},
				gr = fr.prototype;
			gr.push = function() {
				for (var t, e, r = 0, n = arguments.length; n > r; r++) t = arguments[r], !t || t.constructor != Qe.constructor && t.constructor != fr || (e = this.items.length, this[e] = this.items[e] = t, this.length++);
				return this
			}, gr.pop = function() {
				return this.length && delete this[this.length--], this.items.pop()
			}, gr.forEach = function(t, e) {
				for (var r = 0, n = this.items.length; n > r; r++)
					if (t.call(e, this.items[r], r) === !1) return this;
				return this
			};
			for (var dr in Qe) Qe[S](dr) && (gr[dr] = function(t) {
				return function() {
					var e = arguments;
					return this.forEach(function(r) {
						r[t][B](r, e)
					})
				}
			}(dr));
			return gr.attr = function(t, e) {
					if (t && r.is(t, H) && r.is(t[0], "object"))
						for (var n = 0, i = t.length; i > n; n++) this.items[n].attr(t[n]);
					else
						for (var a = 0, s = this.items.length; s > a; a++) this.items[a].attr(t, e);
					return this
				}, gr.clear = function() {
					for (; this.length;) this.pop()
				}, gr.splice = function(t, e) {
					t = 0 > t ? z(this.length + t, 0) : t, e = z(0, V(this.length - t, e));
					var r, n = [],
						i = [],
						a = [];
					for (r = 2; r < arguments.length; r++) a.push(arguments[r]);
					for (r = 0; e > r; r++) i.push(this[t + r]);
					for (; r < this.length - t; r++) n.push(this[t + r]);
					var s = a.length;
					for (r = 0; r < s + n.length; r++) this.items[t + r] = this[t + r] = s > r ? a[r] : n[r - s];
					for (r = this.items.length = this.length -= e - s; this[r];) delete this[r++];
					return new fr(i)
				}, gr.exclude = function(t) {
					for (var e = 0, r = this.length; r > e; e++)
						if (this[e] == t) return this.splice(e, 1), !0
				}, gr.animate = function(t, e, n, i) {
					(r.is(n, "function") || !n) && (i = n || null);
					var a, s, o = this.items.length,
						l = o,
						u = this;
					if (!o) return this;
					i && (s = function() {
						!--o && i.call(u)
					}), n = r.is(n, W) ? n : s;
					var c = r.animation(t, e, n, s);
					for (a = this.items[--l].animate(c); l--;) this.items[l] && !this.items[l].removed && this.items[l].animateWith(a, c, c), this.items[l] && !this.items[l].removed || o--;
					return this
				}, gr.insertAfter = function(t) {
					for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
					return this
				}, gr.getBBox = function() {
					for (var t = [], e = [], r = [], n = [], i = this.items.length; i--;)
						if (!this.items[i].removed) {
							var a = this.items[i].getBBox();
							t.push(a.x), e.push(a.y), r.push(a.x + a.width), n.push(a.y + a.height)
						}
					return t = V[B](0, t), e = V[B](0, e), r = z[B](0, r), n = z[B](0, n), {
						x: t,
						y: e,
						x2: r,
						y2: n,
						width: r - t,
						height: n - e
					}
				}, gr.clone = function(t) {
					t = this.paper.set();
					for (var e = 0, r = this.items.length; r > e; e++) t.push(this.items[e].clone());
					return t
				}, gr.toString = function() {
					return "Rapha\xebl\u2018s set"
				}, gr.glow = function(t) {
					var e = this.paper.set();
					return this.forEach(function(r) {
						var n = r.glow(t);
						null != n && n.forEach(function(t) {
							e.push(t)
						})
					}), e
				}, gr.isPointInside = function(t, e) {
					var r = !1;
					return this.forEach(function(n) {
						return n.isPointInside(t, e) ? (r = !0, !1) : void 0
					}), r
				}, r.registerFont = function(t) {
					if (!t.face) return t;
					this.fonts = this.fonts || {};
					var e = {
							w: t.w,
							face: {},
							glyphs: {}
						},
						r = t.face["font-family"];
					for (var n in t.face) t.face[S](n) && (e.face[n] = t.face[n]);
					if (this.fonts[r] ? this.fonts[r].push(e) : this.fonts[r] = [e], !t.svg) {
						e.face["units-per-em"] = te(t.face["units-per-em"], 10);
						for (var i in t.glyphs)
							if (t.glyphs[S](i)) {
								var a = t.glyphs[i];
								if (e.glyphs[i] = {
										w: a.w,
										k: {},
										d: a.d && "M" + a.d.replace(/[mlcxtrv]/g, function(t) {
											return {
												l: "L",
												c: "C",
												x: "z",
												t: "m",
												r: "l",
												v: "c"
											}[t] || "M"
										}) + "z"
									}, a.k)
									for (var s in a.k) a[S](s) && (e.glyphs[i].k[s] = a.k[s])
							}
					}
					return t
				}, _.getFont = function(t, e, n, i) {
					if (i = i || "normal", n = n || "normal", e = +e || {
							normal: 400,
							bold: 700,
							lighter: 300,
							bolder: 800
						}[e] || 400, r.fonts) {
						var a = r.fonts[t];
						if (!a) {
							var s = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, M) + "(\\s|$)", "i");
							for (var o in r.fonts)
								if (r.fonts[S](o) && s.test(o)) {
									a = r.fonts[o];
									break
								}
						}
						var l;
						if (a)
							for (var u = 0, c = a.length; c > u && (l = a[u], l.face["font-weight"] != e || l.face["font-style"] != n && l.face["font-style"] || l.face["font-stretch"] != i); u++);
						return l
					}
				}, _.print = function(t, e, n, i, a, s, o, l) {
					s = s || "middle", o = z(V(o || 0, 1), -1), l = z(V(l || 1, 3), 1);
					var u, c = N(n)[F](M),
						h = 0,
						f = 0,
						g = M;
					if (r.is(i, "string") && (i = this.getFont(i)), i) {
						u = (a || 16) / i.face["units-per-em"];
						for (var d = i.face.bbox[F](w), p = +d[0], v = d[3] - d[1], m = 0, x = +d[1] + ("baseline" == s ? v + +i.face.descent : v / 2), y = 0, b = c.length; b > y; y++) {
							if ("\n" == c[y]) h = 0, k = 0, f = 0, m += v * l;
							else {
								var _ = f && i.glyphs[c[y - 1]] || {},
									k = i.glyphs[c[y]];
								h += f ? (_.w || i.w) + (_.k && _.k[c[y]] || 0) + i.w * o : 0, f = 1
							}
							k && k.d && (g += r.transformPath(k.d, ["t", h * u, m * u, "s", u, u, p, x, "t", (t - p) / u, (e - x) / u]))
						}
					}
					return this.path(g).attr({
						fill: "#000",
						stroke: "none"
					})
				}, _.add = function(t) {
					if (r.is(t, "array"))
						for (var e, n = this.set(), i = 0, a = t.length; a > i; i++) e = t[i] || {}, k[S](e.type) && n.push(this[e.type]().attr(e));
					return n
				}, r.format = function(t, e) {
					var n = r.is(e, H) ? [0][P](e) : arguments;
					return t && r.is(t, W) && n.length - 1 && (t = t.replace(C, function(t, e) {
						return null == n[++e] ? M : n[e]
					})), t || M
				}, r.fullfill = function() {
					var t = /\{([^\}]+)\}/g,
						e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
						r = function(t, r, n) {
							var i = n;
							return r.replace(e, function(t, e, r, n, a) {
								e = e || n, i && (e in i && (i = i[e]), "function" == typeof i && a && (i = i()))
							}), i = (null == i || i == n ? t : i) + ""
						};
					return function(e, n) {
						return String(e).replace(t, function(t, e) {
							return r(t, e, n)
						})
					}
				}(), r.ninja = function() {
					return T.was ? A.win.Raphael = T.is : delete Raphael, r
				}, r.st = gr,
				function(t, e, n) {
					function i() {
						/in/.test(t.readyState) ? setTimeout(i, 9) : r.eve("raphael.DOMload")
					}
					null == t.readyState && t.addEventListener && (t.addEventListener(e, n = function() {
						t.removeEventListener(e, n, !1), t.readyState = "complete"
					}, !1), t.readyState = "loading"), i()
				}(document, "DOMContentLoaded"), e.on("raphael.DOMload", function() {
					b = !0
				}), T.was ? A.win.Raphael = r : Raphael = r, r
		}), t = Raphael
	}(), m = function() {
		window.Raphael && window.Raphael.svg && function(t) {
			var e = "hasOwnProperty",
				r = String,
				n = parseFloat,
				i = parseInt,
				a = Math,
				s = a.max,
				o = a.abs,
				l = a.pow,
				u = /[, ]+/,
				c = t.eve,
				h = "",
				f = " ",
				g = "http://www.w3.org/1999/xlink",
				d = {
					block: "M5,0 0,2.5 5,5z",
					classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
					diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
					open: "M6,1 1,3.5 6,6",
					oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
				},
				p = {};
			t.toString = function() {
				return "Your browser supports SVG.\nYou are running Rapha\xebl " + this.version
			};
			var v = function(n, i) {
					if (i) {
						"string" == typeof n && (n = v(n));
						for (var a in i) i[e](a) && ("xlink:" == a.substring(0, 6) ? n.setAttributeNS(g, a.substring(6), r(i[a])) : n.setAttribute(a, r(i[a])))
					} else n = t._g.doc.createElementNS("http://www.w3.org/2000/svg", n), n.style && (n.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
					return n
				},
				m = function(e, i) {
					var u = "linear",
						c = e.id + i,
						f = .5,
						g = .5,
						d = e.node,
						p = e.paper,
						m = d.style,
						x = t._g.doc.getElementById(c);
					if (!x) {
						if (i = r(i).replace(t._radial_gradient, function(t, e, r) {
								if (u = "radial", e && r) {
									f = n(e), g = n(r);
									var i = 2 * (g > .5) - 1;
									l(f - .5, 2) + l(g - .5, 2) > .25 && (g = a.sqrt(.25 - l(f - .5, 2)) * i + .5) && .5 != g && (g = g.toFixed(5) - 1e-5 * i)
								}
								return h
							}), i = i.split(/\s*\-\s*/), "linear" == u) {
							var y = i.shift();
							if (y = -n(y), isNaN(y)) return null;
							var b = [0, 0, a.cos(t.rad(y)), a.sin(t.rad(y))],
								_ = 1 / (s(o(b[2]), o(b[3])) || 1);
							b[2] *= _, b[3] *= _, b[2] < 0 && (b[0] = -b[2], b[2] = 0), b[3] < 0 && (b[1] = -b[3], b[3] = 0)
						}
						var w = t._parseDots(i);
						if (!w) return null;
						if (c = c.replace(/[\(\)\s,\xb0#]/g, "_"), e.gradient && c != e.gradient.id && (p.defs.removeChild(e.gradient), delete e.gradient), !e.gradient) {
							x = v(u + "Gradient", {
								id: c
							}), e.gradient = x, v(x, "radial" == u ? {
								fx: f,
								fy: g
							} : {
								x1: b[0],
								y1: b[1],
								x2: b[2],
								y2: b[3],
								gradientTransform: e.matrix.invert()
							}), p.defs.appendChild(x);
							for (var k = 0, C = w.length; C > k; k++) x.appendChild(v("stop", {
								offset: w[k].offset ? w[k].offset : k ? "100%" : "0%",
								"stop-color": w[k].color || "#fff"
							}))
						}
					}
					return v(d, {
						fill: "url(#" + c + ")",
						opacity: 1,
						"fill-opacity": 1
					}), m.fill = h, m.opacity = 1, m.fillOpacity = 1, 1
				},
				x = function(t) {
					var e = t.getBBox(1);
					v(t.pattern, {
						patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")"
					})
				},
				y = function(n, i, a) {
					if ("path" == n.type) {
						for (var s, o, l, u, c, f = r(i).toLowerCase().split("-"), g = n.paper, m = a ? "end" : "start", x = n.node, y = n.attrs, b = y["stroke-width"], _ = f.length, w = "classic", k = 3, C = 3, S = 5; _--;) switch (f[_]) {
							case "block":
							case "classic":
							case "oval":
							case "diamond":
							case "open":
							case "none":
								w = f[_];
								break;
							case "wide":
								C = 5;
								break;
							case "narrow":
								C = 2;
								break;
							case "long":
								k = 5;
								break;
							case "short":
								k = 2
						}
						if ("open" == w ? (k += 2, C += 2, S += 2, l = 1, u = a ? 4 : 1, c = {
								fill: "none",
								stroke: y.stroke
							}) : (u = l = k / 2, c = {
								fill: y.stroke,
								stroke: "none"
							}), n._.arrows ? a ? (n._.arrows.endPath && p[n._.arrows.endPath]--, n._.arrows.endMarker && p[n._.arrows.endMarker]--) : (n._.arrows.startPath && p[n._.arrows.startPath]--, n._.arrows.startMarker && p[n._.arrows.startMarker]--) : n._.arrows = {}, "none" != w) {
							var A = "raphael-marker-" + w,
								T = "raphael-marker-" + m + w + k + C;
							t._g.doc.getElementById(A) ? p[A]++ : (g.defs.appendChild(v(v("path"), {
								"stroke-linecap": "round",
								d: d[w],
								id: A
							})), p[A] = 1);
							var I, B = t._g.doc.getElementById(T);
							B ? (p[T]++, I = B.getElementsByTagName("use")[0]) : (B = v(v("marker"), {
								id: T,
								markerHeight: C,
								markerWidth: k,
								orient: "auto",
								refX: u,
								refY: C / 2
							}), I = v(v("use"), {
								"xlink:href": "#" + A,
								transform: (a ? "rotate(180 " + k / 2 + " " + C / 2 + ") " : h) + "scale(" + k / S + "," + C / S + ")",
								"stroke-width": (1 / ((k / S + C / S) / 2)).toFixed(4)
							}), B.appendChild(I), g.defs.appendChild(B), p[T] = 1), v(I, c);
							var P = l * ("diamond" != w && "oval" != w);
							a ? (s = n._.arrows.startdx * b || 0, o = t.getTotalLength(y.path) - P * b) : (s = P * b, o = t.getTotalLength(y.path) - (n._.arrows.enddx * b || 0)), c = {}, c["marker-" + m] = "url(#" + T + ")", (o || s) && (c.d = t.getSubpath(y.path, s, o)), v(x, c), n._.arrows[m + "Path"] = A, n._.arrows[m + "Marker"] = T, n._.arrows[m + "dx"] = P, n._.arrows[m + "Type"] = w, n._.arrows[m + "String"] = i
						} else a ? (s = n._.arrows.startdx * b || 0, o = t.getTotalLength(y.path) - s) : (s = 0, o = t.getTotalLength(y.path) - (n._.arrows.enddx * b || 0)), n._.arrows[m + "Path"] && v(x, {
							d: t.getSubpath(y.path, s, o)
						}), delete n._.arrows[m + "Path"], delete n._.arrows[m + "Marker"], delete n._.arrows[m + "dx"], delete n._.arrows[m + "Type"], delete n._.arrows[m + "String"];
						for (c in p)
							if (p[e](c) && !p[c]) {
								var L = t._g.doc.getElementById(c);
								L && L.parentNode.removeChild(L)
							}
					}
				},
				b = {
					"": [0],
					none: [0],
					"-": [3, 1],
					".": [1, 1],
					"-.": [3, 1, 1, 1],
					"-..": [3, 1, 1, 1, 1, 1],
					". ": [1, 3],
					"- ": [4, 3],
					"--": [8, 3],
					"- .": [4, 3, 1, 3],
					"--.": [8, 3, 1, 3],
					"--..": [8, 3, 1, 3, 1, 3]
				},
				_ = function(t, e, n) {
					if (e = b[r(e).toLowerCase()]) {
						for (var i = t.attrs["stroke-width"] || "1", a = {
								round: i,
								square: i,
								butt: 0
							}[t.attrs["stroke-linecap"] || n["stroke-linecap"]] || 0, s = [], o = e.length; o--;) s[o] = e[o] * i + (o % 2 ? 1 : -1) * a;
						v(t.node, {
							"stroke-dasharray": s.join(",")
						})
					}
				},
				w = function(n, a) {
					var l = n.node,
						c = n.attrs,
						f = l.style.visibility;
					l.style.visibility = "hidden";
					for (var d in a)
						if (a[e](d)) {
							if (!t._availableAttrs[e](d)) continue;
							var p = a[d];
							switch (c[d] = p, d) {
								case "blur":
									n.blur(p);
									break;
								case "href":
								case "title":
									var b = v("title"),
										w = t._g.doc.createTextNode(p);
									b.appendChild(w), l.appendChild(b);
									break;
								case "target":
									var k = l.parentNode;
									if ("a" != k.tagName.toLowerCase()) {
										var b = v("a");
										k.insertBefore(b, l), b.appendChild(l), k = b
									}
									"target" == d ? k.setAttributeNS(g, "show", "blank" == p ? "new" : p) : k.setAttributeNS(g, d, p);
									break;
								case "cursor":
									l.style.cursor = p;
									break;
								case "transform":
									n.transform(p);
									break;
								case "arrow-start":
									y(n, p);
									break;
								case "arrow-end":
									y(n, p, 1);
									break;
								case "clip-rect":
									var S = r(p).split(u);
									if (4 == S.length) {
										n.clip && n.clip.parentNode.parentNode.removeChild(n.clip.parentNode);
										var A = v("clipPath"),
											T = v("rect");
										A.id = t.createUUID(), v(T, {
											x: S[0],
											y: S[1],
											width: S[2],
											height: S[3]
										}), A.appendChild(T), n.paper.defs.appendChild(A), v(l, {
											"clip-path": "url(#" + A.id + ")"
										}), n.clip = T
									}
									if (!p) {
										var I = l.getAttribute("clip-path");
										if (I) {
											var B = t._g.doc.getElementById(I.replace(/(^url\(#|\)$)/g, h));
											B && B.parentNode.removeChild(B), v(l, {
												"clip-path": h
											}), delete n.clip
										}
									}
									break;
								case "path":
									"path" == n.type && (v(l, {
										d: p ? c.path = t._pathToAbsolute(p) : "M0,0"
									}), n._.dirty = 1, n._.arrows && ("startString" in n._.arrows && y(n, n._.arrows.startString), "endString" in n._.arrows && y(n, n._.arrows.endString, 1)));
									break;
								case "width":
									if (l.setAttribute(d, p), n._.dirty = 1, !c.fx) break;
									d = "x", p = c.x;
								case "x":
									c.fx && (p = -c.x - (c.width || 0));
								case "rx":
									if ("rx" == d && "rect" == n.type) break;
								case "cx":
									l.setAttribute(d, p), n.pattern && x(n), n._.dirty = 1;
									break;
								case "height":
									if (l.setAttribute(d, p), n._.dirty = 1, !c.fy) break;
									d = "y", p = c.y;
								case "y":
									c.fy && (p = -c.y - (c.height || 0));
								case "ry":
									if ("ry" == d && "rect" == n.type) break;
								case "cy":
									l.setAttribute(d, p), n.pattern && x(n), n._.dirty = 1;
									break;
								case "r":
									"rect" == n.type ? v(l, {
										rx: p,
										ry: p
									}) : l.setAttribute(d, p), n._.dirty = 1;
									break;
								case "src":
									"image" == n.type && l.setAttributeNS(g, "href", p);
									break;
								case "stroke-width":
									(1 != n._.sx || 1 != n._.sy) && (p /= s(o(n._.sx), o(n._.sy)) || 1), n.paper._vbSize && (p *= n.paper._vbSize), l.setAttribute(d, p), c["stroke-dasharray"] && _(n, c["stroke-dasharray"], a), n._.arrows && ("startString" in n._.arrows && y(n, n._.arrows.startString), "endString" in n._.arrows && y(n, n._.arrows.endString, 1));
									break;
								case "stroke-dasharray":
									_(n, p, a);
									break;
								case "fill":
									var P = r(p).match(t._ISURL);
									if (P) {
										A = v("pattern");
										var L = v("image");
										A.id = t.createUUID(), v(A, {
												x: 0,
												y: 0,
												patternUnits: "userSpaceOnUse",
												height: 1,
												width: 1
											}), v(L, {
												x: 0,
												y: 0,
												"xlink:href": P[1]
											}), A.appendChild(L),
											function(e) {
												t._preload(P[1], function() {
													var t = this.offsetWidth,
														r = this.offsetHeight;
													v(e, {
														width: t,
														height: r
													}), v(L, {
														width: t,
														height: r
													}), n.paper.safari()
												})
											}(A), n.paper.defs.appendChild(A), v(l, {
												fill: "url(#" + A.id + ")"
											}), n.pattern = A, n.pattern && x(n);
										break
									}
									var M = t.getRGB(p);
									if (M.error) {
										if (("circle" == n.type || "ellipse" == n.type || "r" != r(p).charAt()) && m(n, p)) {
											if ("opacity" in c || "fill-opacity" in c) {
												var R = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, h));
												if (R) {
													var N = R.getElementsByTagName("stop");
													v(N[N.length - 1], {
														"stop-opacity": ("opacity" in c ? c.opacity : 1) * ("fill-opacity" in c ? c["fill-opacity"] : 1)
													})
												}
											}
											c.gradient = p, c.fill = "none";
											break
										}
									} else delete a.gradient, delete c.gradient, !t.is(c.opacity, "undefined") && t.is(a.opacity, "undefined") && v(l, {
										opacity: c.opacity
									}), !t.is(c["fill-opacity"], "undefined") && t.is(a["fill-opacity"], "undefined") && v(l, {
										"fill-opacity": c["fill-opacity"]
									});
									M[e]("opacity") && v(l, {
										"fill-opacity": M.opacity > 1 ? M.opacity / 100 : M.opacity
									});
								case "stroke":
									M = t.getRGB(p), l.setAttribute(d, M.hex), "stroke" == d && M[e]("opacity") && v(l, {
										"stroke-opacity": M.opacity > 1 ? M.opacity / 100 : M.opacity
									}), "stroke" == d && n._.arrows && ("startString" in n._.arrows && y(n, n._.arrows.startString), "endString" in n._.arrows && y(n, n._.arrows.endString, 1));
									break;
								case "gradient":
									("circle" == n.type || "ellipse" == n.type || "r" != r(p).charAt()) && m(n, p);
									break;
								case "opacity":
									c.gradient && !c[e]("stroke-opacity") && v(l, {
										"stroke-opacity": p > 1 ? p / 100 : p
									});
								case "fill-opacity":
									if (c.gradient) {
										R = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, h)), R && (N = R.getElementsByTagName("stop"), v(N[N.length - 1], {
											"stop-opacity": p
										}));
										break
									}
								default:
									"font-size" == d && (p = i(p, 10) + "px");
									var F = d.replace(/(\-.)/g, function(t) {
										return t.substring(1).toUpperCase()
									});
									l.style[F] = p, n._.dirty = 1, l.setAttribute(d, p)
							}
						}
					C(n, a), l.style.visibility = f
				},
				k = 1.2,
				C = function(n, a) {
					if ("text" == n.type && (a[e]("text") || a[e]("font") || a[e]("font-size") || a[e]("x") || a[e]("y"))) {
						var s = n.attrs,
							o = n.node,
							l = o.firstChild ? i(t._g.doc.defaultView.getComputedStyle(o.firstChild, h).getPropertyValue("font-size"), 10) : 10;
						if (a[e]("text")) {
							for (s.text = a.text; o.firstChild;) o.removeChild(o.firstChild);
							for (var u, c = r(a.text).split("\n"), f = [], g = 0, d = c.length; d > g; g++) u = v("tspan"), g && v(u, {
								dy: l * k,
								x: s.x
							}), u.appendChild(t._g.doc.createTextNode(c[g])), o.appendChild(u), f[g] = u
						} else
							for (f = o.getElementsByTagName("tspan"), g = 0, d = f.length; d > g; g++) g ? v(f[g], {
								dy: l * k,
								x: s.x
							}) : v(f[0], {
								dy: 0
							});
						v(o, {
							x: s.x,
							y: s.y
						}), n._.dirty = 1;
						var p = n._getBBox(),
							m = s.y - (p.y + p.height / 2);
						m && t.is(m, "finite") && v(f[0], {
							dy: m
						})
					}
				},
				S = function(e, r) {
					this[0] = this.node = e, e.raphael = !0, this.id = t._oid++, e.raphaelid = this.id, this.matrix = t.matrix(), this.realPath = null, this.paper = r, this.attrs = this.attrs || {}, this._ = {
						transform: [],
						sx: 1,
						sy: 1,
						deg: 0,
						dx: 0,
						dy: 0,
						dirty: 1
					}, !r.bottom && (r.bottom = this), this.prev = r.top, r.top && (r.top.next = this), r.top = this, this.next = null
				},
				A = t.el;
			S.prototype = A, A.constructor = S, t._engine.path = function(t, e) {
				var r = v("path");
				e.canvas && e.canvas.appendChild(r);
				var n = new S(r, e);
				return n.type = "path", w(n, {
					fill: "none",
					stroke: "#000",
					path: t
				}), n
			}, A.rotate = function(t, e, i) {
				if (this.removed) return this;
				if (t = r(t).split(u), t.length - 1 && (e = n(t[1]), i = n(t[2])), t = n(t[0]), null == i && (e = i), null == e || null == i) {
					var a = this.getBBox(1);
					e = a.x + a.width / 2, i = a.y + a.height / 2
				}
				return this.transform(this._.transform.concat([
					["r", t, e, i]
				])), this
			}, A.scale = function(t, e, i, a) {
				if (this.removed) return this;
				if (t = r(t).split(u), t.length - 1 && (e = n(t[1]), i = n(t[2]), a = n(t[3])), t = n(t[0]), null == e && (e = t), null == a && (i = a), null == i || null == a) var s = this.getBBox(1);
				return i = null == i ? s.x + s.width / 2 : i, a = null == a ? s.y + s.height / 2 : a, this.transform(this._.transform.concat([
					["s", t, e, i, a]
				])), this
			}, A.translate = function(t, e) {
				return this.removed ? this : (t = r(t).split(u), t.length - 1 && (e = n(t[1])), t = n(t[0]) || 0, e = +e || 0, this.transform(this._.transform.concat([
					["t", t, e]
				])), this)
			}, A.transform = function(r) {
				var n = this._;
				if (null == r) return n.transform;
				if (t._extractTransform(this, r), this.clip && v(this.clip, {
						transform: this.matrix.invert()
					}), this.pattern && x(this), this.node && v(this.node, {
						transform: this.matrix
					}), 1 != n.sx || 1 != n.sy) {
					var i = this.attrs[e]("stroke-width") ? this.attrs["stroke-width"] : 1;
					this.attr({
						"stroke-width": i
					})
				}
				return this
			}, A.hide = function() {
				return !this.removed && this.paper.safari(this.node.style.display = "none"), this
			}, A.show = function() {
				return !this.removed && this.paper.safari(this.node.style.display = ""), this
			}, A.remove = function() {
				if (!this.removed && this.node.parentNode) {
					var e = this.paper;
					e.__set__ && e.__set__.exclude(this), c.unbind("raphael.*.*." + this.id), this.gradient && e.defs.removeChild(this.gradient), t._tear(this, e), "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
					for (var r in this) this[r] = "function" == typeof this[r] ? t._removedFactory(r) : null;
					this.removed = !0
				}
			}, A._getBBox = function() {
				if ("none" == this.node.style.display) {
					this.show();
					var t = !0
				}
				var e = {};
				try {
					e = this.node.getBBox()
				} catch (r) {} finally {
					e = e || {}
				}
				return t && this.hide(), e
			}, A.attr = function(r, n) {
				if (this.removed) return this;
				if (null == r) {
					var i = {};
					for (var a in this.attrs) this.attrs[e](a) && (i[a] = this.attrs[a]);
					return i.gradient && "none" == i.fill && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i
				}
				if (null == n && t.is(r, "string")) {
					if ("fill" == r && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
					if ("transform" == r) return this._.transform;
					for (var s = r.split(u), o = {}, l = 0, h = s.length; h > l; l++) r = s[l], o[r] = r in this.attrs ? this.attrs[r] : t.is(this.paper.customAttributes[r], "function") ? this.paper.customAttributes[r].def : t._availableAttrs[r];
					return h - 1 ? o : o[s[0]]
				}
				if (null == n && t.is(r, "array")) {
					for (o = {}, l = 0, h = r.length; h > l; l++) o[r[l]] = this.attr(r[l]);
					return o
				}
				if (null != n) {
					var f = {};
					f[r] = n
				} else null != r && t.is(r, "object") && (f = r);
				for (var g in f) c("raphael.attr." + g + "." + this.id, this, f[g]);
				for (g in this.paper.customAttributes)
					if (this.paper.customAttributes[e](g) && f[e](g) && t.is(this.paper.customAttributes[g], "function")) {
						var d = this.paper.customAttributes[g].apply(this, [].concat(f[g]));
						this.attrs[g] = f[g];
						for (var p in d) d[e](p) && (f[p] = d[p])
					}
				return w(this, f), this
			}, A.toFront = function() {
				if (this.removed) return this;
				"a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
				var e = this.paper;
				return e.top != this && t._tofront(this, e), this
			}, A.toBack = function() {
				if (this.removed) return this;
				var e = this.node.parentNode;
				"a" == e.tagName.toLowerCase() ? e.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : e.firstChild != this.node && e.insertBefore(this.node, this.node.parentNode.firstChild), t._toback(this, this.paper);
				this.paper;
				return this
			}, A.insertAfter = function(e) {
				if (this.removed) return this;
				var r = e.node || e[e.length - 1].node;
				return r.nextSibling ? r.parentNode.insertBefore(this.node, r.nextSibling) : r.parentNode.appendChild(this.node), t._insertafter(this, e, this.paper), this
			}, A.insertBefore = function(e) {
				if (this.removed) return this;
				var r = e.node || e[0].node;
				return r.parentNode.insertBefore(this.node, r), t._insertbefore(this, e, this.paper), this
			}, A.blur = function(e) {
				var r = this;
				if (0 !== +e) {
					var n = v("filter"),
						i = v("feGaussianBlur");
					r.attrs.blur = e, n.id = t.createUUID(), v(i, {
						stdDeviation: +e || 1.5
					}), n.appendChild(i), r.paper.defs.appendChild(n), r._blur = n, v(r.node, {
						filter: "url(#" + n.id + ")"
					})
				} else r._blur && (r._blur.parentNode.removeChild(r._blur), delete r._blur, delete r.attrs.blur), r.node.removeAttribute("filter");
				return r
			}, t._engine.circle = function(t, e, r, n) {
				var i = v("circle");
				t.canvas && t.canvas.appendChild(i);
				var a = new S(i, t);
				return a.attrs = {
					cx: e,
					cy: r,
					r: n,
					fill: "none",
					stroke: "#000"
				}, a.type = "circle", v(i, a.attrs), a
			}, t._engine.rect = function(t, e, r, n, i, a) {
				var s = v("rect");
				t.canvas && t.canvas.appendChild(s);
				var o = new S(s, t);
				return o.attrs = {
					x: e,
					y: r,
					width: n,
					height: i,
					r: a || 0,
					rx: a || 0,
					ry: a || 0,
					fill: "none",
					stroke: "#000"
				}, o.type = "rect", v(s, o.attrs), o
			}, t._engine.ellipse = function(t, e, r, n, i) {
				var a = v("ellipse");
				t.canvas && t.canvas.appendChild(a);
				var s = new S(a, t);
				return s.attrs = {
					cx: e,
					cy: r,
					rx: n,
					ry: i,
					fill: "none",
					stroke: "#000"
				}, s.type = "ellipse", v(a, s.attrs), s
			}, t._engine.image = function(t, e, r, n, i, a) {
				var s = v("image");
				v(s, {
					x: r,
					y: n,
					width: i,
					height: a,
					preserveAspectRatio: "none"
				}), s.setAttributeNS(g, "href", e), t.canvas && t.canvas.appendChild(s);
				var o = new S(s, t);
				return o.attrs = {
					x: r,
					y: n,
					width: i,
					height: a,
					src: e
				}, o.type = "image", o
			}, t._engine.text = function(e, r, n, i) {
				var a = v("text");
				e.canvas && e.canvas.appendChild(a);
				var s = new S(a, e);
				return s.attrs = {
					x: r,
					y: n,
					"text-anchor": "middle",
					text: i,
					font: t._availableAttrs.font,
					stroke: "none",
					fill: "#000"
				}, s.type = "text", w(s, s.attrs), s
			}, t._engine.setSize = function(t, e) {
				return this.width = t || this.width, this.height = e || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
			}, t._engine.create = function() {
				var e = t._getContainer.apply(0, arguments),
					r = e && e.container,
					n = e.x,
					i = e.y,
					a = e.width,
					s = e.height;
				if (!r) throw new Error("SVG container not found.");
				var o, l = v("svg"),
					u = "overflow:hidden;";
				return n = n || 0, i = i || 0, a = a || 512, s = s || 342, v(l, {
					height: s,
					version: 1.1,
					width: a,
					xmlns: "http://www.w3.org/2000/svg"
				}), 1 == r ? (l.style.cssText = u + "position:absolute;left:" + n + "px;top:" + i + "px", t._g.doc.body.appendChild(l), o = 1) : (l.style.cssText = u + "position:relative", r.firstChild ? r.insertBefore(l, r.firstChild) : r.appendChild(l)), r = new t._Paper, r.width = a, r.height = s, r.canvas = l, r.clear(), r._left = r._top = 0, o && (r.renderfix = function() {}), r.renderfix(), r
			}, t._engine.setViewBox = function(t, e, r, n, i) {
				c("raphael.setViewBox", this, this._viewBox, [t, e, r, n, i]);
				var a, o, l = s(r / this.width, n / this.height),
					u = this.top,
					h = i ? "meet" : "xMinYMin";
				for (null == t ? (this._vbSize && (l = 1), delete this._vbSize, a = "0 0 " + this.width + f + this.height) : (this._vbSize = l, a = t + f + e + f + r + f + n), v(this.canvas, {
						viewBox: a,
						preserveAspectRatio: h
					}); l && u;) o = "stroke-width" in u.attrs ? u.attrs["stroke-width"] : 1, u.attr({
					"stroke-width": o
				}), u._.dirty = 1, u._.dirtyT = 1, u = u.prev;
				return this._viewBox = [t, e, r, n, !!i], this
			}, t.prototype.renderfix = function() {
				var t, e = this.canvas,
					r = e.style;
				try {
					t = e.getScreenCTM() || e.createSVGMatrix()
				} catch (n) {
					t = e.createSVGMatrix()
				}
				var i = -t.e % 1,
					a = -t.f % 1;
				(i || a) && (i && (this._left = (this._left + i) % 1, r.left = this._left + "px"), a && (this._top = (this._top + a) % 1, r.top = this._top + "px"))
			}, t.prototype.clear = function() {
				t.eve("raphael.clear", this);
				for (var e = this.canvas; e.firstChild;) e.removeChild(e.firstChild);
				this.bottom = this.top = null, (this.desc = v("desc")).appendChild(t._g.doc.createTextNode("Created with Rapha\xebl " + t.version)), e.appendChild(this.desc), e.appendChild(this.defs = v("defs"))
			}, t.prototype.remove = function() {
				c("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
				for (var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null
			};
			var T = t.st;
			for (var I in A) A[e](I) && !T[e](I) && (T[I] = function(t) {
				return function() {
					var e = arguments;
					return this.forEach(function(r) {
						r[t].apply(r, e)
					})
				}
			}(I))
		}(window.Raphael)
	}(), x = function() {
		window.Raphael && window.Raphael.vml && function(t) {
			var e = "hasOwnProperty",
				r = String,
				n = parseFloat,
				i = Math,
				a = i.round,
				s = i.max,
				o = i.min,
				l = i.abs,
				u = "fill",
				c = /[, ]+/,
				h = t.eve,
				f = " progid:DXImageTransform.Microsoft",
				g = " ",
				d = "",
				p = {
					M: "m",
					L: "l",
					C: "c",
					Z: "x",
					m: "t",
					l: "r",
					c: "v",
					z: "x"
				},
				v = /([clmz]),?([^clmz]*)/gi,
				m = / progid:\S+Blur\([^\)]+\)/g,
				x = /-?[^,\s-]+/g,
				y = "position:absolute;left:0;top:0;width:1px;height:1px",
				b = 21600,
				_ = {
					path: 1,
					rect: 1,
					image: 1
				},
				w = {
					circle: 1,
					ellipse: 1
				},
				k = function(e) {
					var n = /[ahqstv]/gi,
						i = t._pathToAbsolute;
					if (r(e).match(n) && (i = t._path2curve), n = /[clmz]/g, i == t._pathToAbsolute && !r(e).match(n)) {
						var s = r(e).replace(v, function(t, e, r) {
							var n = [],
								i = "m" == e.toLowerCase(),
								s = p[e];
							return r.replace(x, function(t) {
								i && 2 == n.length && (s += n + p["m" == e ? "l" : "L"], n = []), n.push(a(t * b))
							}), s + n
						});
						return s
					}
					var o, l, u = i(e);
					s = [];
					for (var c = 0, h = u.length; h > c; c++) {
						o = u[c], l = u[c][0].toLowerCase(), "z" == l && (l = "x");
						for (var f = 1, m = o.length; m > f; f++) l += a(o[f] * b) + (f != m - 1 ? "," : d);
						s.push(l)
					}
					return s.join(g)
				},
				C = function(e, r, n) {
					var i = t.matrix();
					return i.rotate(-e, .5, .5), {
						dx: i.x(r, n),
						dy: i.y(r, n)
					}
				},
				S = function(t, e, r, n, i, a) {
					var s = t._,
						o = t.matrix,
						c = s.fillpos,
						h = t.node,
						f = h.style,
						d = 1,
						p = "",
						v = b / e,
						m = b / r;
					if (f.visibility = "hidden", e && r) {
						if (h.coordsize = l(v) + g + l(m), f.rotation = a * (0 > e * r ? -1 : 1), a) {
							var x = C(a, n, i);
							n = x.dx, i = x.dy
						}
						if (0 > e && (p += "x"), 0 > r && (p += " y") && (d = -1), f.flip = p, h.coordorigin = n * -v + g + i * -m, c || s.fillsize) {
							var y = h.getElementsByTagName(u);
							y = y && y[0], h.removeChild(y), c && (x = C(a, o.x(c[0], c[1]), o.y(c[0], c[1])), y.position = x.dx * d + g + x.dy * d), s.fillsize && (y.size = s.fillsize[0] * l(e) + g + s.fillsize[1] * l(r)), h.appendChild(y)
						}
						f.visibility = "visible"
					}
				};
			t.toString = function() {
				return "Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\xebl " + this.version
			};
			var A = function(t, e, n) {
					for (var i = r(e).toLowerCase().split("-"), a = n ? "end" : "start", s = i.length, o = "classic", l = "medium", u = "medium"; s--;) switch (i[s]) {
						case "block":
						case "classic":
						case "oval":
						case "diamond":
						case "open":
						case "none":
							o = i[s];
							break;
						case "wide":
						case "narrow":
							u = i[s];
							break;
						case "long":
						case "short":
							l = i[s]
					}
					var c = t.node.getElementsByTagName("stroke")[0];
					c[a + "arrow"] = o, c[a + "arrowlength"] = l, c[a + "arrowwidth"] = u
				},
				T = function(i, l) {
					i.attrs = i.attrs || {};
					var h = i.node,
						f = i.attrs,
						p = h.style,
						v = _[i.type] && (l.x != f.x || l.y != f.y || l.width != f.width || l.height != f.height || l.cx != f.cx || l.cy != f.cy || l.rx != f.rx || l.ry != f.ry || l.r != f.r),
						m = w[i.type] && (f.cx != l.cx || f.cy != l.cy || f.r != l.r || f.rx != l.rx || f.ry != l.ry),
						x = i;
					for (var y in l) l[e](y) && (f[y] = l[y]);
					if (v && (f.path = t._getPath[i.type](i), i._.dirty = 1), l.href && (h.href = l.href), l.title && (h.title = l.title), l.target && (h.target = l.target), l.cursor && (p.cursor = l.cursor), "blur" in l && i.blur(l.blur), (l.path && "path" == i.type || v) && (h.path = k(~r(f.path).toLowerCase().indexOf("r") ? t._pathToAbsolute(f.path) : f.path), "image" == i.type && (i._.fillpos = [f.x, f.y], i._.fillsize = [f.width, f.height], S(i, 1, 1, 0, 0, 0))), "transform" in l && i.transform(l.transform), m) {
						var C = +f.cx,
							T = +f.cy,
							B = +f.rx || +f.r || 0,
							P = +f.ry || +f.r || 0;
						h.path = t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", a((C - B) * b), a((T - P) * b), a((C + B) * b), a((T + P) * b), a(C * b)), i._.dirty = 1
					}
					if ("clip-rect" in l) {
						var M = r(l["clip-rect"]).split(c);
						if (4 == M.length) {
							M[2] = +M[2] + +M[0], M[3] = +M[3] + +M[1];
							var R = h.clipRect || t._g.doc.createElement("div"),
								N = R.style;
							N.clip = t.format("rect({1}px {2}px {3}px {0}px)", M), h.clipRect || (N.position = "absolute", N.top = 0, N.left = 0, N.width = i.paper.width + "px", N.height = i.paper.height + "px", h.parentNode.insertBefore(R, h), R.appendChild(h), h.clipRect = R)
						}
						l["clip-rect"] || h.clipRect && (h.clipRect.style.clip = "auto")
					}
					if (i.textpath) {
						var F = i.textpath.style;
						l.font && (F.font = l.font), l["font-family"] && (F.fontFamily = '"' + l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, d) + '"'), l["font-size"] && (F.fontSize = l["font-size"]), l["font-weight"] && (F.fontWeight = l["font-weight"]), l["font-style"] && (F.fontStyle = l["font-style"])
					}
					if ("arrow-start" in l && A(x, l["arrow-start"]), "arrow-end" in l && A(x, l["arrow-end"], 1), null != l.opacity || null != l["stroke-width"] || null != l.fill || null != l.src || null != l.stroke || null != l["stroke-width"] || null != l["stroke-opacity"] || null != l["fill-opacity"] || null != l["stroke-dasharray"] || null != l["stroke-miterlimit"] || null != l["stroke-linejoin"] || null != l["stroke-linecap"]) {
						var E = h.getElementsByTagName(u),
							O = !1;
						if (E = E && E[0], !E && (O = E = L(u)), "image" == i.type && l.src && (E.src = l.src), l.fill && (E.on = !0), (null == E.on || "none" == l.fill || null === l.fill) && (E.on = !1), E.on && l.fill) {
							var D = r(l.fill).match(t._ISURL);
							if (D) {
								E.parentNode == h && h.removeChild(E), E.rotate = !0, E.src = D[1], E.type = "tile";
								var G = i.getBBox(1);
								E.position = G.x + g + G.y, i._.fillpos = [G.x, G.y], t._preload(D[1], function() {
									i._.fillsize = [this.offsetWidth, this.offsetHeight]
								})
							} else E.color = t.getRGB(l.fill).hex, E.src = d, E.type = "solid", t.getRGB(l.fill).error && (x.type in {
								circle: 1,
								ellipse: 1
							} || "r" != r(l.fill).charAt()) && I(x, l.fill, E) && (f.fill = "none", f.gradient = l.fill, E.rotate = !1)
						}
						if ("fill-opacity" in l || "opacity" in l) {
							var z = ((+f["fill-opacity"] + 1 || 2) - 1) * ((+f.opacity + 1 || 2) - 1) * ((+t.getRGB(l.fill).o + 1 || 2) - 1);
							z = o(s(z, 0), 1), E.opacity = z, E.src && (E.color = "none")
						}
						h.appendChild(E);
						var V = h.getElementsByTagName("stroke") && h.getElementsByTagName("stroke")[0],
							j = !1;
						!V && (j = V = L("stroke")), (l.stroke && "none" != l.stroke || l["stroke-width"] || null != l["stroke-opacity"] || l["stroke-dasharray"] || l["stroke-miterlimit"] || l["stroke-linejoin"] || l["stroke-linecap"]) && (V.on = !0), ("none" == l.stroke || null === l.stroke || null == V.on || 0 == l.stroke || 0 == l["stroke-width"]) && (V.on = !1);
						var U = t.getRGB(l.stroke);
						V.on && l.stroke && (V.color = U.hex), z = ((+f["stroke-opacity"] + 1 || 2) - 1) * ((+f.opacity + 1 || 2) - 1) * ((+U.o + 1 || 2) - 1);
						var Y = .75 * (n(l["stroke-width"]) || 1);
						if (z = o(s(z, 0), 1), null == l["stroke-width"] && (Y = f["stroke-width"]), l["stroke-width"] && (V.weight = Y), Y && 1 > Y && (z *= Y) && (V.weight = 1), V.opacity = z, l["stroke-linejoin"] && (V.joinstyle = l["stroke-linejoin"] || "miter"), V.miterlimit = l["stroke-miterlimit"] || 8, l["stroke-linecap"] && (V.endcap = "butt" == l["stroke-linecap"] ? "flat" : "square" == l["stroke-linecap"] ? "square" : "round"), l["stroke-dasharray"]) {
							var q = {
								"-": "shortdash",
								".": "shortdot",
								"-.": "shortdashdot",
								"-..": "shortdashdotdot",
								". ": "dot",
								"- ": "dash",
								"--": "longdash",
								"- .": "dashdot",
								"--.": "longdashdot",
								"--..": "longdashdotdot"
							};
							V.dashstyle = q[e](l["stroke-dasharray"]) ? q[l["stroke-dasharray"]] : d
						}
						j && h.appendChild(V)
					}
					if ("text" == x.type) {
						x.paper.canvas.style.display = d;
						var W = x.paper.span,
							H = 100,
							X = f.font && f.font.match(/\d+(?:\.\d*)?(?=px)/);
						p = W.style, f.font && (p.font = f.font), f["font-family"] && (p.fontFamily = f["font-family"]), f["font-weight"] && (p.fontWeight = f["font-weight"]), f["font-style"] && (p.fontStyle = f["font-style"]), X = n(f["font-size"] || X && X[0]) || 10, p.fontSize = X * H + "px", x.textpath.string && (W.innerHTML = r(x.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
						var $ = W.getBoundingClientRect();
						x.W = f.w = ($.right - $.left) / H, x.H = f.h = ($.bottom - $.top) / H, x.X = f.x, x.Y = f.y + x.H / 2, ("x" in l || "y" in l) && (x.path.v = t.format("m{0},{1}l{2},{1}", a(f.x * b), a(f.y * b), a(f.x * b) + 1));
						for (var Z = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], J = 0, Q = Z.length; Q > J; J++)
							if (Z[J] in l) {
								x._.dirty = 1;
								break
							}
						switch (f["text-anchor"]) {
							case "start":
								x.textpath.style["v-text-align"] = "left", x.bbx = x.W / 2;
								break;
							case "end":
								x.textpath.style["v-text-align"] = "right", x.bbx = -x.W / 2;
								break;
							default:
								x.textpath.style["v-text-align"] = "center", x.bbx = 0
						}
						x.textpath.style["v-text-kern"] = !0
					}
				},
				I = function(e, a, s) {
					e.attrs = e.attrs || {};
					var o = (e.attrs, Math.pow),
						l = "linear",
						u = ".5 .5";
					if (e.attrs.gradient = a, a = r(a).replace(t._radial_gradient, function(t, e, r) {
							return l = "radial", e && r && (e = n(e), r = n(r), o(e - .5, 2) + o(r - .5, 2) > .25 && (r = i.sqrt(.25 - o(e - .5, 2)) * (2 * (r > .5) - 1) + .5), u = e + g + r), d
						}), a = a.split(/\s*\-\s*/), "linear" == l) {
						var c = a.shift();
						if (c = -n(c), isNaN(c)) return null
					}
					var h = t._parseDots(a);
					if (!h) return null;
					if (e = e.shape || e.node, h.length) {
						e.removeChild(s), s.on = !0, s.method = "none", s.color = h[0].color, s.color2 = h[h.length - 1].color;
						for (var f = [], p = 0, v = h.length; v > p; p++) h[p].offset && f.push(h[p].offset + g + h[p].color);
						s.colors = f.length ? f.join() : "0% " + s.color, "radial" == l ? (s.type = "gradientTitle", s.focus = "100%", s.focussize = "0 0", s.focusposition = u, s.angle = 0) : (s.type = "gradient", s.angle = (270 - c) % 360), e.appendChild(s)
					}
					return 1
				},
				B = function(e, r) {
					this[0] = this.node = e, e.raphael = !0, this.id = t._oid++, e.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = r, this.matrix = t.matrix(), this._ = {
						transform: [],
						sx: 1,
						sy: 1,
						dx: 0,
						dy: 0,
						deg: 0,
						dirty: 1,
						dirtyT: 1
					}, !r.bottom && (r.bottom = this), this.prev = r.top, r.top && (r.top.next = this), r.top = this, this.next = null
				},
				P = t.el;
			B.prototype = P, P.constructor = B, P.transform = function(e) {
				if (null == e) return this._.transform;
				var n, i = this.paper._viewBoxShift,
					a = i ? "s" + [i.scale, i.scale] + "-1-1t" + [i.dx, i.dy] : d;
				i && (n = e = r(e).replace(/\.{3}|\u2026/g, this._.transform || d)), t._extractTransform(this, a + e);
				var s, o = this.matrix.clone(),
					l = this.skew,
					u = this.node,
					c = ~r(this.attrs.fill).indexOf("-"),
					h = !r(this.attrs.fill).indexOf("url(");
				if (o.translate(1, 1), h || c || "image" == this.type)
					if (l.matrix = "1 0 0 1", l.offset = "0 0", s = o.split(), c && s.noRotation || !s.isSimple) {
						u.style.filter = o.toFilter();
						var f = this.getBBox(),
							p = this.getBBox(1),
							v = f.x - p.x,
							m = f.y - p.y;
						u.coordorigin = v * -b + g + m * -b, S(this, 1, 1, v, m, 0)
					} else u.style.filter = d, S(this, s.scalex, s.scaley, s.dx, s.dy, s.rotate);
				else l && (u.style.filter = d, l.matrix = r(o), l.offset = o.offset());
				return n && (this._.transform = n), this
			}, P.rotate = function(t, e, i) {
				if (this.removed) return this;
				if (null != t) {
					if (t = r(t).split(c), t.length - 1 && (e = n(t[1]), i = n(t[2])), t = n(t[0]), null == i && (e = i), null == e || null == i) {
						var a = this.getBBox(1);
						e = a.x + a.width / 2, i = a.y + a.height / 2
					}
					return this._.dirtyT = 1, this.transform(this._.transform.concat([
						["r", t, e, i]
					])), this
				}
			}, P.translate = function(t, e) {
				return this.removed ? this : (t = r(t).split(c), t.length - 1 && (e = n(t[1])), t = n(t[0]) || 0, e = +e || 0, this._.bbox && (this._.bbox.x += t, this._.bbox.y += e), this.transform(this._.transform.concat([
					["t", t, e]
				])), this)
			}, P.scale = function(t, e, i, a) {
				if (this.removed) return this;
				if (t = r(t).split(c), t.length - 1 && (e = n(t[1]), i = n(t[2]), a = n(t[3]), isNaN(i) && (i = null), isNaN(a) && (a = null)), t = n(t[0]), null == e && (e = t), null == a && (i = a), null == i || null == a) var s = this.getBBox(1);
				return i = null == i ? s.x + s.width / 2 : i, a = null == a ? s.y + s.height / 2 : a, this.transform(this._.transform.concat([
					["s", t, e, i, a]
				])), this._.dirtyT = 1, this
			}, P.hide = function() {
				return !this.removed && (this.node.style.display = "none"), this
			}, P.show = function() {
				return !this.removed && (this.node.style.display = d), this
			}, P._getBBox = function() {
				return this.removed ? {} : {
					x: this.X + (this.bbx || 0) - this.W / 2,
					y: this.Y - this.H,
					width: this.W,
					height: this.H
				}
			}, P.remove = function() {
				if (!this.removed && this.node.parentNode) {
					this.paper.__set__ && this.paper.__set__.exclude(this), t.eve.unbind("raphael.*.*." + this.id), t._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
					for (var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
					this.removed = !0
				}
			}, P.attr = function(r, n) {
				if (this.removed) return this;
				if (null == r) {
					var i = {};
					for (var a in this.attrs) this.attrs[e](a) && (i[a] = this.attrs[a]);
					return i.gradient && "none" == i.fill && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i
				}
				if (null == n && t.is(r, "string")) {
					if (r == u && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
					for (var s = r.split(c), o = {}, l = 0, f = s.length; f > l; l++) r = s[l], o[r] = r in this.attrs ? this.attrs[r] : t.is(this.paper.customAttributes[r], "function") ? this.paper.customAttributes[r].def : t._availableAttrs[r];
					return f - 1 ? o : o[s[0]]
				}
				if (this.attrs && null == n && t.is(r, "array")) {
					for (o = {}, l = 0, f = r.length; f > l; l++) o[r[l]] = this.attr(r[l]);
					return o
				}
				var g;
				null != n && (g = {}, g[r] = n), null == n && t.is(r, "object") && (g = r);
				for (var d in g) h("raphael.attr." + d + "." + this.id, this, g[d]);
				if (g) {
					for (d in this.paper.customAttributes)
						if (this.paper.customAttributes[e](d) && g[e](d) && t.is(this.paper.customAttributes[d], "function")) {
							var p = this.paper.customAttributes[d].apply(this, [].concat(g[d]));
							this.attrs[d] = g[d];
							for (var v in p) p[e](v) && (g[v] = p[v])
						}
					g.text && "text" == this.type && (this.textpath.string = g.text), T(this, g)
				}
				return this
			}, P.toFront = function() {
				return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && t._tofront(this, this.paper), this
			}, P.toBack = function() {
				return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), t._toback(this, this.paper)), this)
			}, P.insertAfter = function(e) {
				return this.removed ? this : (e.constructor == t.st.constructor && (e = e[e.length - 1]), e.node.nextSibling ? e.node.parentNode.insertBefore(this.node, e.node.nextSibling) : e.node.parentNode.appendChild(this.node), t._insertafter(this, e, this.paper), this)
			}, P.insertBefore = function(e) {
				return this.removed ? this : (e.constructor == t.st.constructor && (e = e[0]), e.node.parentNode.insertBefore(this.node, e.node), t._insertbefore(this, e, this.paper), this)
			}, P.blur = function(e) {
				var r = this.node.runtimeStyle,
					n = r.filter;
				return n = n.replace(m, d), 0 !== +e ? (this.attrs.blur = e, r.filter = n + g + f + ".Blur(pixelradius=" + (+e || 1.5) + ")", r.margin = t.format("-{0}px 0 0 -{0}px", a(+e || 1.5))) : (r.filter = n, r.margin = 0, delete this.attrs.blur), this
			}, t._engine.path = function(t, e) {
				var r = L("shape");
				r.style.cssText = y, r.coordsize = b + g + b, r.coordorigin = e.coordorigin;
				var n = new B(r, e),
					i = {
						fill: "none",
						stroke: "#000"
					};
				t && (i.path = t), n.type = "path", n.path = [], n.Path = d, T(n, i), e.canvas.appendChild(r);
				var a = L("skew");
				return a.on = !0, r.appendChild(a), n.skew = a, n.transform(d), n
			}, t._engine.rect = function(e, r, n, i, a, s) {
				var o = t._rectPath(r, n, i, a, s),
					l = e.path(o),
					u = l.attrs;
				return l.X = u.x = r, l.Y = u.y = n, l.W = u.width = i, l.H = u.height = a, u.r = s, u.path = o, l.type = "rect", l
			}, t._engine.ellipse = function(t, e, r, n, i) {
				{
					var a = t.path();
					a.attrs
				}
				return a.X = e - n, a.Y = r - i, a.W = 2 * n, a.H = 2 * i, a.type = "ellipse", T(a, {
					cx: e,
					cy: r,
					rx: n,
					ry: i
				}), a
			}, t._engine.circle = function(t, e, r, n) {
				{
					var i = t.path();
					i.attrs
				}
				return i.X = e - n, i.Y = r - n, i.W = i.H = 2 * n, i.type = "circle", T(i, {
					cx: e,
					cy: r,
					r: n
				}), i
			}, t._engine.image = function(e, r, n, i, a, s) {
				var o = t._rectPath(n, i, a, s),
					l = e.path(o).attr({
						stroke: "none"
					}),
					c = l.attrs,
					h = l.node,
					f = h.getElementsByTagName(u)[0];
				return c.src = r, l.X = c.x = n, l.Y = c.y = i, l.W = c.width = a, l.H = c.height = s, c.path = o, l.type = "image", f.parentNode == h && h.removeChild(f), f.rotate = !0, f.src = r, f.type = "tile", l._.fillpos = [n, i], l._.fillsize = [a, s], h.appendChild(f), S(l, 1, 1, 0, 0, 0), l
			}, t._engine.text = function(e, n, i, s) {
				var o = L("shape"),
					l = L("path"),
					u = L("textpath");
				n = n || 0, i = i || 0, s = s || "", l.v = t.format("m{0},{1}l{2},{1}", a(n * b), a(i * b), a(n * b) + 1), l.textpathok = !0, u.string = r(s), u.on = !0, o.style.cssText = y, o.coordsize = b + g + b, o.coordorigin = "0 0";
				var c = new B(o, e),
					h = {
						fill: "#000",
						stroke: "none",
						font: t._availableAttrs.font,
						text: s
					};
				c.shape = o, c.path = l, c.textpath = u, c.type = "text", c.attrs.text = r(s), c.attrs.x = n, c.attrs.y = i, c.attrs.w = 1, c.attrs.h = 1, T(c, h), o.appendChild(u), o.appendChild(l), e.canvas.appendChild(o);
				var f = L("skew");
				return f.on = !0, o.appendChild(f), c.skew = f, c.transform(d), c
			}, t._engine.setSize = function(e, r) {
				var n = this.canvas.style;
				return this.width = e, this.height = r, e == +e && (e += "px"), r == +r && (r += "px"), n.width = e, n.height = r, n.clip = "rect(0 " + e + " " + r + " 0)", this._viewBox && t._engine.setViewBox.apply(this, this._viewBox), this
			}, t._engine.setViewBox = function(e, r, n, i, a) {
				t.eve("raphael.setViewBox", this, this._viewBox, [e, r, n, i, a]);
				var o, l, u = this.width,
					c = this.height,
					h = 1 / s(n / u, i / c);
				return a && (o = c / i, l = u / n, u > n * o && (e -= (u - n * o) / 2 / o), c > i * l && (r -= (c - i * l) / 2 / l)), this._viewBox = [e, r, n, i, !!a], this._viewBoxShift = {
					dx: -e,
					dy: -r,
					scale: h
				}, this.forEach(function(t) {
					t.transform("...")
				}), this
			};
			var L;
			t._engine.initWin = function(t) {
				var e = t.document;
				e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
				try {
					!e.namespaces.rvml && e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), L = function(t) {
						return e.createElement("<rvml:" + t + ' class="rvml">')
					}
				} catch (r) {
					L = function(t) {
						return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
					}
				}
			}, t._engine.initWin(t._g.win), t._engine.create = function() {
				var e = t._getContainer.apply(0, arguments),
					r = e.container,
					n = e.height,
					i = e.width,
					a = e.x,
					s = e.y;
				if (!r) throw new Error("VML container not found.");
				var o = new t._Paper,
					l = o.canvas = t._g.doc.createElement("div"),
					u = l.style;
				return a = a || 0, s = s || 0, i = i || 512, n = n || 342, o.width = i, o.height = n, i == +i && (i += "px"), n == +n && (n += "px"), o.coordsize = 1e3 * b + g + 1e3 * b, o.coordorigin = "0 0", o.span = t._g.doc.createElement("span"), o.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", l.appendChild(o.span), u.cssText = t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", i, n), 1 == r ? (t._g.doc.body.appendChild(l), u.left = a + "px", u.top = s + "px", u.position = "absolute") : r.firstChild ? r.insertBefore(l, r.firstChild) : r.appendChild(l), o.renderfix = function() {}, o
			}, t.prototype.clear = function() {
				t.eve("raphael.clear", this), this.canvas.innerHTML = d, this.span = t._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
			}, t.prototype.remove = function() {
				t.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
				for (var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
				return !0
			};
			var M = t.st;
			for (var R in P) P[e](R) && !M[e](R) && (M[R] = function(t) {
				return function() {
					var e = arguments;
					return this.forEach(function(r) {
						r[t].apply(r, e)
					})
				}
			}(R))
		}(window.Raphael)
	}(), y = function(t) {
		var e = s;
		return t = e
	}(), b = function(t) {
		var e = h;
		return e.Group = f, t = e
	}(), _ = function(t) {
		var e = v;
		return t = e
	}(), w = function(t) {
		var e = y;
		return t = e
	}(), k = function() {
		function t(t) {
			return r._g.doc.createElementNS("http://www.w3.org/2000/svg", t)
		}
		var e = a,
			r = w;
		r.fn.group = function() {
			var t = r._engine.group(this);
			return this.__set__ && this.__set__.push(t), t
		}, r._getPath.group = function(t) {
			var e = t._getBBox();
			return r._rectPath(0, 0, e.width, e.height)
		};
		var n, i = function(t, e) {
			i.superclass.constructor.call(this, t, e)
		};
		if (e.extend(i, r.el.constructor), n = i.prototype, n.group = function() {
				var t = this.paper,
					e = t.group();
				return this.node.appendChild(e.node), e
			}, window.Raphael.svg && (r._engine.group = function(e) {
				var r = t("g");
				e.canvas && e.canvas.appendChild(r);
				var n = new i(r, e);
				return n.type = "group", n
			}, n.add = function(t) {
				var e = this.paper.add(t),
					r = this.node;
				return e.forEach(function(t) {
					r.appendChild(t.node)
				}), e
			}), window.Raphael.vml) {
			var t = function() {
				return r._g.doc.createElement("div")
			};
			r._getPath.group = function(t) {
				var e = (t.node, t.__set),
					n = 0,
					i = 0;
				return e && e.forEach(function(t) {
					var e = t.getBBox();
					n < e.width && (n = n), i < e.height && (i = e.height)
				}), r._rectPath(0, 0, n, i)
			}, n.add = function(t) {
				var e = this.paper.add(t),
					r = this.node,
					n = this.__set;
				return e.forEach(function(t) {
					r.appendChild(t.node), n && n.push(t)
				}), this.__set || (this.__set = e), e
			}, n.translate = function(t, e) {
				var r = this.node,
					n = parseFloat(r.style.top, 10) || 0,
					i = parseFloat(r.style.left, 10) || 0;
				r.style.top = n + e + "px", r.style.left = i + t + "px"
			}, n.move = function(t, e) {
				var r = this.node;
				r.style.top = e + "px", r.style.left = t + "px"
			}, n.animate = function(t, r, n, i) {
				var a = this.node,
					s = parseFloat(a.style.top, 10) || 0,
					o = parseFloat(a.style.left, 10) || 0;
				e.animStep(r, function(e) {
					a.style.top = s + (t.y - s) * e + "px", a.style.left = o + (t.x - o) * e + "px"
				}, i)
			}, n.transform = function(t) {
				var e = this.__set;
				e && e.forEach(function(e) {
					e.transform(t)
				}), i.superclass.transform.call(this, t)
			}, r._engine.group = function(e) {
				var r = t();
				e.canvas.appendChild(r);
				var n = new i(r, e);
				return n.type = "group", r.style.position = "relative", n
			}
		}
	}(), C = function(t) {
		var e = _;
		return t = e
	}(), S = function(t) {
		function e(t, e, r) {
			function n(t, e, r, l) {
				var u = (new Date).getTime(),
					c = u - a;
				if (c >= r) return e(1, t), void(l && l());
				var h = Math.pow(c / r, 1.7);
				e(h, t), o[s] = i.requestAnimationFrame(function() {
					n(t + 1, e, r, l)
				})
			}
			var a = (new Date).getTime(),
				s = i.guid(l);
			return n(0, e, t, r), s
		}

		function r(t) {
			o[t] && (i.cancelAnimationFrame(o[t]), delete o[t])
		}

		function n(t) {
			var e = {};
			return e.target = t.srcElement, e.pageX = t.clientX + document.body.scrollLeft - document.body.clientLeft, e.pageY = t.clientY + document.body.scrollTop - document.body.clientTop, i.each(c, function(r) {
				e[r] = t[r]
			}), e.stopPropagation = function() {
				window.event.cancelBubble = !0
			}, e
		}
		var i = a,
			s = w,
			o = {},
			l = "h",
			u = Object.prototype,
			c = (u.toString, ["srcElement", "toElement", "clientX", "clientY", "keyCode"]),
			h = /^\s*<(\w+|!)[^>]*>/,
			f = document.createElement("table"),
			g = document.createElement("tr"),
			d = {
				tr: document.createElement("tbody"),
				tbody: f,
				thead: f,
				tfoot: f,
				td: g,
				th: g,
				"*": document.createElement("div")
			};
		return i.mix(i, {
			vml: s.vml,
			svg: s.svg,
			createDom: function(t) {
				var e = h.test(t) && RegExp.$1;
				return e in d || (e = "*"), container = d[e], t = t.replace(/(^\s*)|(\s*$)/g, ""), container.innerHTML = "" + t, container.childNodes[0]
			},
			getOffset: function(t) {
				for (var e = {}, r = 0, n = 0; null != t && t != document.body;) r += t.offsetLeft || 0, n += t.offsetTop || 0, t = t.offsetParent;
				return e.top = n, e.left = r, e
			},
			contains: function(t, e) {
				if (!t || !e) return !1;
				for (var r = !1, n = e.parentNode; null != n && n != document.body;) {
					if (n == t) {
						r = !0;
						break
					}
					n = n.parentNode
				}
				return r
			},
			getWidth: function(t) {
				var e = i.getStyle(t, "width");
				return "auto" == e && (e = t.offsetWidth), parseFloat(e)
			},
			getHeight: function(t) {
				var e = i.getStyle(t, "height");
				return "auto" == e && (e = t.offsetHeight), parseFloat(e)
			},
			getOuterWidth: function(t) {
				var e = i.getWidth(t),
					r = parseFloat(i.getStyle(t, "borderLeftWidth")) || 0,
					n = parseFloat(i.getStyle(t, "paddingLeft")),
					a = parseFloat(i.getStyle(t, "paddingRight")),
					s = parseFloat(i.getStyle(t, "borderRightWidth")) || 0;
				return e + r + s + n + a
			},
			getOuterHeight: function(t) {
				var e = i.getHeight(t),
					r = parseFloat(i.getStyle(t, "borderTopWidth")) || 0,
					n = parseFloat(i.getStyle(t, "paddingTop")),
					a = parseFloat(i.getStyle(t, "paddingBottom")),
					s = parseFloat(i.getStyle(t, "borderBottomWidth")) || 0;
				return e + r + s + n + a
			},
			getStyle: function(t, e) {
				return window.getComputedStyle ? window.getComputedStyle(t, null)[e] : t.currentStyle[e]
			},
			addEvent: function(t, e, r) {
				t.attachEvent ? (t["e" + e + r] = r, t[e + r] = function() {
					window.event.target = window.event.srcElement, t["e" + e + r](n(window.event))
				}, t.attachEvent("on" + e, t[e + r])) : t.addEventListener(e, r, !1)
			},
			removeEvent: function(t, e, r) {
				t.detachEvent ? (t.detachEvent("on" + e, t[e + r]), t[e + r] = null) : t.removeEventListener(e, r, !1)
			},
			angle: function(t, e, r, n) {
				return s.angle(t, e, r, n)
			},
			animStep: function(t, r, n) {
				return e(t, r, n)
			},
			stopStep: function(t) {
				r(t)
			},
			animPath: function(t, e, r, n, a, s) {
				function o() {
					t.attr("path", e), s && s()
				}
				if (i.vml) return void o();
				if (r = r || 0, n = n || 400, !e) return void o();
				var l = t.getPath();
				if (!l) return void o();
				var u, c = i.parsePathString(e),
					h = l.slice(-1 * r);
				if (l.length > c.length) u = l.slice(0, c.length);
				else if (u = l.concat([]), r)
					for (var f = u.length; f < c.length; f++) u = u.concat(h);
				t.attr("path", u), t.animate({
					path: c
				}, n, a, o)
			},
			getPointAtLength: function(t, e) {
				return s.getPointAtLength(t, e)
			},
			isPointInsidePath: function(t, e, r) {
				return s.isPointInsidePath(t, e, r)
			},
			getSubpath: function(t, e, r) {
				return s.getSubpath(t, e, r)
			},
			parsePathString: function(t) {
				return s.parsePathString(t)
			},
			parsePathArray: function(t) {
				if (i.isArray(t)) {
					var e = i.map(t, function(t) {
						var e = t.join(" ");
						return e.replace(/([a-z,A-Z])\s+/, "$1")
					});
					return e.join(" ")
				}
				return t
			},
			transformPath: function(t, e) {
				return s.transformPath(t, e)
			},
			trySet: function(t, e, r) {
				return t && !t[e] && (t[e] = r), t[e]
			},
			highlight: function(t, e) {
				var r = s.color(t),
					n = r.l * (1 + e);
				return n >= 1 && (n = 1), s.hsl2rgb(r.h, r.s, n).hex
			},
			dark: function(t, e) {
				var r = s.color(t),
					n = r.l * (1 - e);
				return s.hsl2rgb(r.h, r.s, n).hex
			}
		}), t = i
	}(), A = function(t) {
		function e(t, e) {
			var r = t.length,
				n = t[0];
			if (e < t[0]) return c;
			if (e >= t[r - 1]) return t[r - 1];
			for (var i = 1; i < t.length && !(e < t[i]); i++) n = t[i];
			return n
		}

		function r(t, e) {
			var r, n = t.length,
				i = t[0];
			if (e > t[n - 1]) return c;
			if (e < t[0]) return t[0];
			for (var a = 1; a < t.length; a++) {
				if (e <= t[a]) {
					r = t[a];
					break
				}
				i = t[a]
			}
			return r
		}

		function n(t, e) {
			var r = e.toString(),
				n = r.indexOf(".");
			if (-1 == n) return parseInt(t);
			var i = r.substr(n + 1).length;
			return parseFloat(t.toFixed(i))
		}

		function i(t, e, r) {
			function n(t, e, r, s) {
				var o = (new Date).getTime(),
					l = o - i;
				if (l >= r) return e(1, t), void(s && s());
				var c = Math.pow(l / r, 1.7);
				e(c, t), u[a] = p.requestAnimationFrame(function() {
					n(t + 1, e, r, s)
				})
			}
			var i = (new Date).getTime(),
				a = p.guid(h);
			return n(0, e, t, r), a
		}

		function a(t) {
			u[t] && (p.cancelAnimationFrame(u[t]), delete u[t])
		}

		function s(t, e, r) {
			r = r || 0;
			for (var n in e)
				if (e.hasOwnProperty(n)) {
					var i = e[n];
					null !== i && p.isObject(i) ? (p.isObject(t[n]) || (t[n] = {}), d > r ? s(t[n], e[n]) : t[n] = e[n]) : p.isArray(i) ? (t[n] = [], t[n] = t[n].concat(i)) : void 0 !== i && (t[n] = e[n])
				}
		}

		function o(t) {
			var e = {};
			return e.target = t.srcElement, e.pageX = t.clientX + document.body.scrollLeft - document.body.clientLeft, e.pageY = t.clientY + document.body.scrollTop - document.body.clientTop, p.each(v, function(r) {
				e[r] = t[r]
			}), e.stopPropagation = function() {
				window.event.cancelBubble = !0
			}, e
		}
		var l = C,
			u = {},
			c = 0 / 0,
			h = "h",
			f = Object.prototype,
			g = f.toString,
			d = 5,
			p = {
				substitute: function(t, e) {
					return t && e ? t.replace(/\\?\{([^{}]+)\}/g, function(t, r) {
						return "\\" === t.charAt(0) ? t.slice(1) : void 0 === e[r] ? "" : e[r]
					}) : t
				},
				ucfirst: function(t) {
					return t += "", t.charAt(0).toUpperCase() + t.substring(1)
				},
				isString: function(t) {
					return "string" == typeof t
				},
				isNumber: function(t) {
					return "number" == typeof t
				},
				isNumeric: function(t) {
					return !isNaN(parseFloat(t)) && isFinite(t)
				},
				isBoolean: function(t) {
					return "boolean" == typeof t
				},
				isFunction: function(t) {
					return "function" == typeof t
				},
				isArray: "isArray" in Array ? Array.isArray : function(t) {
					return "[object Array]" === g.call(t)
				},
				isDate: function(t) {
					return "[object Date]" === g.call(t)
				},
				isObject: "[object Object]" === g.call(null) ? function(t) {
					return null !== t && void 0 !== t && "[object Object]" === g.call(t) && void 0 === t.ownerDocument
				} : function(t) {
					return "[object Object]" === g.call(t)
				},
				extend: function(t, e, r, n) {
					p.isFunction(e) || (r = e, e = t, t = function() {});
					var i = Object.create ? function(t, e) {
							return Object.create(t, {
								constructor: {
									value: e
								}
							})
						} : function(t, e) {
							function r() {}
							r.prototype = t;
							var n = new r;
							return n.constructor = e, n
						},
						a = i(e.prototype, t);
					return t.prototype = p.mix(a, t.prototype), t.superclass = i(e.prototype, e), p.mix(a, r), p.mix(t, n), t
				},
				augment: function(t) {
					for (var e = p.toArray(arguments), r = 1; r < e.length; r++) {
						var n = e[r];
						p.isFunction(n) && (n = n.prototype), p.mix(t.prototype, n)
					}
				},
				toArray: function(t) {
					if (!t || !t.length) return [];
					if (p.vml) {
						for (var e = [], r = 0; r < t.length; r++) e.push(t[r]);
						return e
					}
					return Array.prototype.slice.call(t)
				},
				mix: function() {
					var t = p.toArray(arguments),
						e = t[0];
					if (1 == e) {
						e = t[1];
						for (var r = 2; r < t.length; r++) {
							var n = t[r];
							s(e, n)
						}
					} else
						for (var r = 1; r < t.length; r++) {
							var n = t[r];
							for (var i in n) n.hasOwnProperty(i) && "constructor" != i && (e[i] = n[i])
						}
					return e
				},
				mixin: function(t, e) {
					if (t && e) {
						t._mixins = e, t.ATTRS = t.ATTRS || {};
						var r = {};
						p.each(e, function(e) {
							p.augment(t, e);
							var n = e.ATTRS;
							n && p.mix(r, n)
						}), t.ATTRS = p.mix(r, t.ATTRS)
					}
				},
				map: function(t, e) {
					var r = [];
					return p.each(t, function(t, n) {
						r.push(e(t, n))
					}), r
				},
				filter: function(t, e) {
					var r = [];
					return p.each(t, function(t, n) {
						e(t, n) && r.push(t)
					}), r
				},
				each: function(t, e) {
					if (t)
						if (p.isObject(t)) {
							for (var r in t)
								if (t.hasOwnProperty(r)) {
									var n = e(t[r], r);
									if (0 == n) break
								}
						} else if (t.length)
						for (var i = 0; i < t.length; i++) {
							var n = e(t[i], i);
							if (0 == n) break
						}
				},
				requestAnimationFrame: function(t) {
					var e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
						return setTimeout(t, 16)
					};
					return e(t)
				},
				cancelAnimationFrame: function(t) {
					var e = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || function(t) {
						return clearTimeout(t)
					};
					return e(t)
				},
				guid: function() {
					var t = {};
					return function(e) {
						return e = e || "acharts", t[e] ? t[e] += 1 : t[e] = 1, e + t[e]
					}
				}(),
				indexOf: function(t, e) {
					var r = Array.prototype.indexOf;
					if (r) return r.call(t, e);
					for (var n = -1, i = 0; i < t.length; i++)
						if (t[i] == e) {
							n = i;
							break
						}
					return n
				},
				remove: function(t, e) {
					var r = p.indexOf(t, e); - 1 !== r && t.splice(r, 1)
				},
				empty: function(t) {
					if (!(t instanceof Array))
						for (var e = t.length - 1; e >= 0; e--) delete t[e];
					t.length = 0
				},
				equalsArray: function(t, e) {
					if (t == e) return !0;
					if (!t || !e) return !1;
					if (t.length != e.length) return !1;
					for (var r = !0, n = 0; n < t.length; n++)
						if (t[n] !== e[n]) {
							r = !1;
							break
						}
					return r
				},
				wrapBehavior: function(t, e) {
					return t["_wrap_" + e] = function(r) {
						t[e](r)
					}
				},
				getWrapBehavior: function(t, e) {
					return t["_wrap_" + e]
				}
			},
			v = ["srcElement", "toElement", "clientX", "clientY", "keyCode"],
			m = /^\s*<(\w+|!)[^>]*>/,
			x = document.createElement("table"),
			y = document.createElement("tr"),
			b = {
				tr: document.createElement("tbody"),
				tbody: x,
				thead: x,
				tfoot: x,
				td: y,
				th: y,
				"*": document.createElement("div")
			};
		return p.mix(p, {
			vml: l.vml,
			svg: l.svg,
			createDom: function(t) {
				var e = m.test(t) && RegExp.$1;
				return e in b || (e = "*"), container = b[e], t = t.replace(/(^\s*)|(\s*$)/g, ""), container.innerHTML = "" + t, container.childNodes[0]
			},
			getOffset: function(t) {
				for (var e = {}, r = 0, n = 0; null != t && t != document.body;) r += t.offsetLeft || 0, n += t.offsetTop || 0, t = t.offsetParent;
				return e.top = n, e.left = r, e
			},
			contains: function(t, e) {
				if (!t || !e) return !1;
				for (var r = !1, n = e.parentNode; null != n && n != document.body;) {
					if (n == t) {
						r = !0;
						break
					}
					n = n.parentNode
				}
				return r
			},
			getWidth: function(t) {
				var e = p.getStyle(t, "width");
				return ("auto" == e || e.indexOf("%") > -1) && (e = t.offsetWidth), parseFloat(e)
			},
			getHeight: function(t) {
				var e = p.getStyle(t, "height");
				return "auto" == e && (e = t.offsetHeight), parseFloat(e)
			},
			getOuterWidth: function(t) {
				var e = p.getWidth(t),
					r = parseFloat(p.getStyle(t, "borderLeftWidth")) || 0,
					n = parseFloat(p.getStyle(t, "paddingLeft")),
					i = parseFloat(p.getStyle(t, "paddingRight")),
					a = parseFloat(p.getStyle(t, "borderRightWidth")) || 0;
				return e + r + a + n + i
			},
			getOuterHeight: function(t) {
				var e = p.getHeight(t),
					r = parseFloat(p.getStyle(t, "borderTopWidth")) || 0,
					n = parseFloat(p.getStyle(t, "paddingTop")),
					i = parseFloat(p.getStyle(t, "paddingBottom")),
					a = parseFloat(p.getStyle(t, "borderBottomWidth")) || 0;
				return e + r + a + n + i
			},
			getStyle: function(t, e) {
				return window.getComputedStyle ? window.getComputedStyle(t, null)[e] : t.currentStyle[e]
			},
			addEvent: function(t, e, r) {
				t.attachEvent ? (t["e" + e + r] = r, t[e + r] = function() {
					window.event.target = window.event.srcElement, t["e" + e + r](o(window.event))
				}, t.attachEvent("on" + e, t[e + r])) : t.addEventListener(e, r, !1)
			},
			removeEvent: function(t, e, r) {
				t.detachEvent ? (t.detachEvent("on" + e, t[e + r]), t[e + r] = null) : t.removeEventListener(e, r, !1)
			},
			angle: function(t, e, r, n) {
				return l.angle(t, e, r, n)
			},
			animStep: function(t, e, r) {
				return i(t, e, r)
			},
			stopStep: function(t) {
				a(t)
			},
			animPath: function(t, e, r, n, i, a) {
				function s() {
					t.attr("path", e), a && a()
				}
				if (p.vml) return void s();
				if (r = r || 0, n = n || 400, !e) return void s();
				var o, l = t.getPath(),
					u = p.parsePathString(e),
					c = l.slice(-1 * r);
				if (l.length > u.length) o = l.slice(0, u.length);
				else if (o = l.concat([]), r)
					for (var h = o.length; h < u.length; h++) o = o.concat(c);
				t.attr("path", o), t.animate({
					path: u
				}, n, i, s)
			},
			getPointAtLength: function(t, e) {
				return l.getPointAtLength(t, e)
			},
			isPointInsidePath: function(t, e, r) {
				return l.isPointInsidePath(t, e, r)
			},
			getSubpath: function(t, e, r) {
				return l.getSubpath(t, e, r)
			},
			parsePathString: function(t) {
				return l.parsePathString(t)
			},
			parsePathArray: function(t) {
				if (p.isArray(t)) {
					var e = p.map(t, function(t) {
						var e = t.join(" ");
						return e.replace(/([a-z,A-Z])\s+/, "$1")
					});
					return e.join(" ")
				}
				return t
			},
			transformPath: function(t, e) {
				return l.transformPath(t, e)
			},
			snapTo: function(t, n, i) {
				if (i) return l.snapTo(t, n, i);
				var a = e(t, n),
					s = r(t, n);
				if (isNaN(a) || isNaN(s)) {
					if (t[0] >= n) return t[0];
					var o = t[t.length - 1];
					if (n >= o) return o
				}
				return Math.abs(n - a) < Math.abs(s - n) ? a : s
			},
			snapFloor: function(t, r) {
				return e(t, r)
			},
			snapCeiling: function(t, e) {
				return r(t, e)
			},
			tryFixed: function(t, e) {
				return n(t, e)
			},
			trySet: function(t, e, r) {
				return t && !t[e] && (t[e] = r), t[e]
			},
			highlight: function(t, e) {
				var r = l.color(t),
					n = r.l * (1 + e);
				return l.hsl2rgb(r.h, r.s, n).hex
			},
			dark: function(t, e) {
				var r = l.color(t),
					n = r.l * (1 - e);
				return l.hsl2rgb(r.h, r.s, n).hex
			}
		}), t = p
	}(), T = function(t) {
		var e = S,
			r = function(t) {
				this.cfg = t, this._attrs = {
					autoRender: !0,
					visible: !0
				}, this.events = {};
				var r = this.getDefaultCfg();
				e.mix(this._attrs, r, t), this.get("autoRender") && this.render()
			};
		return r.ATTRS = {
			zIndex: null,
			el: null,
			node: null,
			canvas: null,
			visible: !0
		}, e.augment(r, {
			getDefaultCfg: function() {
				return {}
			},
			set: function(t, r) {
				var n = "_onRender" + e.ucfirst(t);
				this[n] && this[n](r, this._attrs[t]), this._attrs[t] = r
			},
			get: function(t) {
				return this._attrs[t]
			},
			getCfgAttr: function(t) {
				return this.cfg[t]
			},
			show: function() {
				this.get("el").show(), this.get("visible") || this.fire("show"), this.set("visible", !0)
			},
			hide: function() {
				this.get("el").hide(), this.get("visible") && this.fire("hide"), this.set("visible", !1)
			},
			attr: function(t, r) {
				{
					var n = this;
					n.get("el")
				}
				return e.isObject(t) ? (e.each(t, function(t, e) {
					n.attr(e, t)
				}), n) : void 0 !== r ? n._setAttr(t, r) : n._getAttr(t)
			},
			on: function(t, r) {
				var n = this,
					i = n.get("node"),
					a = this.events,
					s = a[t];
				return e.addEvent(i, t, r), s || (s = a[t] = []), s.push(r), this
			},
			off: function(t, r) {
				var n = this,
					i = n.get("node"),
					a = this.events,
					s = a[t];
				return t ? (e.removeEvent(i, t, r), s && e.remove(s, r), this) : (e.each(a, function(t, r) {
					e.each(t, function(t) {
						e.removeEvent(i, r, t)
					})
				}), this.events = {}, this)
			},
			fire: function(t, r) {
				var n = this,
					i = n.events,
					a = i[t];
				a && e.each(a, function(t) {
					t(r)
				})
			},
			_getAttr: function(t) {
				var r = this,
					n = r.get("el"),
					i = n.attr ? n.attr(t) : "",
					a = "__get" + e.ucfirst(t);
				return r[a] && (i = r[a](i)), i
			},
			_setAttr: function(t, r) {
				var n = this,
					i = n.get("el"),
					a = "__set" + e.ucfirst(t);
				return n[a] ? n[a](r) : i.attr && i.attr(t, r), n
			},
			_onRenderElCls: function(t, r) {
				var n = this,
					i = n.get("node"),
					a = i.getAttribute("class"),
					s = a ? a.split(" ") : [];
				r && e.remove(s, r), t && s.push(t), i.setAttribute("class", s.join(" "))
			},
			_onRenderZIndex: function(t) {
				var r = this,
					n = r.get("node");
				null != t && (n.setAttribute("zIndex", t), e.vml && (n.style.zIndex = t))
			},
			beforeRenderUI: function() {},
			render: function() {
				var t, r = this,
					n = (r.get("zIndex"), r._attrs);
				r.get("rendered") || (r.createDom(), r.beforeRenderUI(), r.renderUI(), r.set("rendered", !0), t = r.get("node"), 0 == this.get("visible") && this.hide(), e.each(n, function(t, n) {
					var i = r["_onRender" + e.ucfirst(n)];
					i && i.call(r, t)
				}), r.bindUI())
			},
			createDom: function() {},
			renderUI: function() {},
			bindUI: function() {},
			remove: function(t) {
				void 0 == t && (t = !0);
				var e = this;
				e.get("parent") && (e.get("parent").removeChild(e, t), e.set("parent", null)), t && e.destroy()
			},
			destroy: function() {
				{
					var t = this,
						e = t.get("el"),
						r = t.get("destroyed");
					t.get("node")
				}
				r || (e.remove && e.remove(), t._attrs = {}, t.events = {}, t.set("destroyed", !0))
			}
		}), t = r
	}(), I = function(t) {
		var e = A;
		return t = e
	}(), B = function(t) {
		function e(t) {
			return r.isString(t) ? .01 * parseFloat(t) : t
		}
		var r = I,
			n = function() {};
		return n.ATTRS = {
			size: "80%",
			center: ["50%", "50%"]
		}, n.prototype = {
			getPlotRange: function() {
				return this.get("parent").get("plotRange")
			},
			getRadius: function() {
				var t = this,
					r = t._getMinLength(),
					n = e(t.get("size"));
				return r * n / 2
			},
			_getMinLength: function() {
				var t = this.getPlotRange();
				return width = t.getWidth(), height = t.getHeight(), Math.min(width, height)
			},
			getCenter: function() {
				var t = this,
					r = this.getPlotRange(),
					n = t.get("center"),
					i = e(n[0]),
					a = e(n[0]),
					s = r.getWidth(),
					o = r.getHeight(),
					l = r.tl,
					u = {};
				return 1 > i && (i = l.x + s * i), 1 > a && (a = l.y + o * a), u.x = i, u.y = a, u
			}
		}, t = n
	}(), P = function(t) {
		function e(t, e) {
			return i.isArray(t) && (t = t.join(" ")), "M" + t + e
		}
		var r = T,
			n = u,
			i = a,
			s = function(t) {
				s.superclass.constructor.call(this, t)
			};
		s.ATTRS = {
			attrs: {}
		}, i.extend(s, r), i.mixin(s, [n]), i.augment(s, {
			isShape: !0,
			createDom: function() {
				var t, e, r, n = this,
					i = n.get("el");
				i || (e = n.cfg, r = n.parseElCfg(e.attrs), i = n.createElement(r), n.set("el", i)), t = i.node, t.shape = this, n.set("node", t), 0 == this.get("visible") && i.hide()
			},
			createElement: function(t) {
				var e, r = this,
					n = r.get("parent"),
					i = n.get("el").add([t]);
				return e = i[0]
			},
			parseElCfg: function(t) {
				return t.type = this.get("type"), t
			},
			getTotalLength: function() {
				return this.get("el").getTotalLength()
			},
			rotate: function(t, e, r) {
				var n = this;
				if (n.isGroup && null == e && null == r) {
					var i = n._getTranslatePoint();
					e = i.x, r = i.y
				}
				this.get("el").rotate(t, e, r)
			},
			scale: function(t, e, r, n) {
				var i = this,
					a = i.get("el");
				a.scale(t, e, r, n)
			},
			transform: function(t) {
				var e = this,
					r = e.get("el");
				r.transform(t)
			},
			getBBox: function() {
				return this.get("el").getBBox()
			},
			getPath: function() {
				var t = this,
					e = t.get("el"),
					r = e.getPath();
				return i.isString(r) && (r = i.parsePathString(r)), r
			},
			getPathString: function() {
				var t = this,
					e = t.getPath();
				return i.parsePathArray(e)
			},
			getTransformPath: function() {
				var t = this,
					e = t.getPath(),
					r = t.get("el").matrix;
				return i.transformPath(e, r.toTransformString())
			},
			_getTranslatePoint: function() {
				var t = this,
					e = t.getTransformPath(),
					r = {
						x: 0,
						y: 0
					};
				return i.each(e, function(t) {
					"M" == t[0] && (r.x = t[1], r.y = t[2])
				}), r
			},
			__getTransform: function(t) {
				if (i.isString(t)) {
					t = t.replace(/([t,s,r])/, ";$1 ").split(";");
					var e = [];
					i.each(t, function(t) {
						if (t) {
							var r = t.split(" ");
							r = i.map(r, function(t) {
								return i.isNumeric(t) ? parseFloat(t) : t
							}), e.push(r)
						}
					}), t = e
				}
				return t
			}
		});
		var o = function(t) {
			o.superclass.constructor.call(this, t)
		};
		o.ATTRS = {
			cx: null,
			cy: null,
			r: null
		}, i.extend(o, s), s.Circle = o;
		var l = function(t) {
			l.superclass.constructor.call(this, t)
		};
		l.ATTRS = {
			x: null,
			y: null,
			width: null,
			height: null,
			r: {
				value: 0
			}
		}, i.extend(l, s), s.Rect = l;
		var c = function(t) {
			c.superclass.constructor.call(this, t)
		};
		c.ATTRS = {
			cx: null,
			cy: null,
			rx: null,
			ry: null
		}, i.extend(c, s), s.Ellipse = c;
		var h = function(t) {
			h.superclass.constructor.call(this, t)
		};
		h.ATTRS = {
			path: null
		}, i.extend(h, s), s.Path = h;
		var f = function(t) {
			f.superclass.constructor.call(this, t)
		};
		f.ATTRS = {
			x1: null,
			y1: null,
			x2: null,
			y2: null
		}, i.extend(f, h), i.augment(f, {
			parseElCfg: function(t) {
				return t.type = "path", t.path = i.substitute("M {x1},{y1}L{x2},{y2}", t), t
			},
			_getLinePoint: function(t, e) {
				var r = this.getPath();
				return r[t][e]
			},
			_setLinePoint: function(t, e, r) {
				var n = this,
					i = this.getPath();
				i[t][e] = r, n.attr("path", i)
			},
			__setX1: function(t) {
				this._setLinePoint(0, 1, t)
			},
			__getX1: function() {
				return this._getLinePoint(0, 1)
			},
			__setX2: function(t) {
				this._setLinePoint(1, 1, t)
			},
			__getX2: function() {
				return this._getLinePoint(1, 1)
			},
			__setY1: function(t) {
				this._setLinePoint(0, 2, t)
			},
			__getY1: function() {
				return this._getLinePoint(0, 2)
			},
			__setY2: function(t) {
				this._setLinePoint(1, 2, t)
			},
			__getY2: function() {
				return this._getLinePoint(1, 2)
			}
		}), s.Line = f;
		var g = function(t) {
			g.superclass.constructor.call(this, t)
		};
		g.ATTRS = {
			points: []
		}, i.extend(g, h), i.augment(g, {
			__setPoints: function(t) {
				var r = this,
					n = (r.get("el"), e(t, ""));
				r.attr("path", n)
			},
			parseElCfg: function(t) {
				return t.type = "path", t.path = e(t.points, ""), t
			}
		}), s.PolyLine = g;
		var d = function(t) {
			g.superclass.constructor.call(this, t)
		};
		d.ATTRS = {
			points: []
		}, i.extend(d, h), i.augment(d, {
			__setPoints: function(t) {
				var r = this,
					n = (r.get("el"), e(t, "z"));
				r.attr("path", n)
			},
			parseElCfg: function(t) {
				return t.type = "path", t.path = e(t.points, "z"), t
			}
		}), s.Polygon = d;
		var p = function(t) {
			p.superclass.constructor.call(this, t)
		};
		p.ATTRS = {
			x: null,
			y: null,
			text: null,
			font: null,
			"text-anchor": null
		}, i.extend(p, s), s.Text = p;
		var v = function(t) {
			v.superclass.constructor.call(this, t)
		};
		i.extend(v, p), v.ATTRS = {
			rotate: null
		}, i.augment(v, {
			parseElCfg: function(t) {
				return t.type = "text", t.rotate && (t.transform = i.substitute("r{rotate} {x} {y}", t)), t
			}
		}), s.Label = v;
		var m = function(t) {
			m.superclass.constructor.call(this, t)
		};
		m.ATTRS = {
			symbol: {
				value: "custom"
			},
			radius: {
				value: 5
			},
			path: {},
			x: null,
			y: null
		}, m.Symbols = {
			circle: function(t, e, r) {
				return [
					["M", t, e - r],
					["a", r, r, 0, 1, 1, 0, 2 * r],
					["a", r, r, 0, 1, 1, 0, -2 * r],
					["z"]
				]
			},
			square: function(t, e, r) {
				return [
					["M", t - r, e - r],
					["L", t + r, e - r],
					["L", t + r, e + r],
					["L", t - r, e + r],
					["z"]
				]
			},
			diamond: function(t, e, r) {
				return [
					["M", t - r, e],
					["L", t, e - r],
					["L", t + r, e],
					["L", t, e + r],
					["z"]
				]
			},
			triangle: function(t, e, r) {
				var n = r / .866,
					i = r;
				return [
					["M", t, e - r],
					["L", t + n, e + i],
					["L", t - n, e + i],
					["z"]
				]
			},
			"triangle-down": function(t, e, r) {
				var n = r / .866,
					i = r;
				return [
					["M", t, e + r],
					["L", t + n, e - i],
					["L", t - n, e - i],
					["z"]
				]
			}
		}, i.extend(m, s), i.augment(m, {
			__setRadius: function(t) {
				var e = this,
					r = e.get("attrs");
				e._setSize(r.x, r.y, t)
			},
			__getRadius: function() {
				return this.get("attrs").radius
			},
			__setX: function(t) {
				var e = this,
					r = e.get("attrs");
				e._setSize(t, r.y, r.radius)
			},
			__getX: function() {
				return this.get("attrs").x
			},
			__setY: function(t) {
				var e = this,
					r = e.get("attrs");
				e._setSize(r.x, t, r.radius)
			},
			__getY: function() {
				return this.get("attrs").y
			},
			__getSymbol: function() {
				return this.get("attrs").symbol
			},
			_setSize: function(t, e, r) {
				var n = this,
					a = n.get("attrs"),
					s = n.get("el");
				if ("image" !== s.type) {
					var o = {
						x: t,
						y: e,
						radius: r
					};
					i.mix(a, o);
					var l = n._getPath(a);
					s.attr("path", l)
				} else i.mix(a, {
					width: 2 * r,
					height: 2 * r,
					x: t - (r - a.radius),
					y: e - (r - a.radius),
					radius: r
				}), s.attr(a)
			},
			animate: function(t, e, r, n) {
				var a, s = this,
					o = s.get("attrs");
				if ("image" == s.get("el").type) {
					var l = t.radius || s.attr("radius");
					t.x = t.x - l, t.y = t.y - l, i.mix(o, {
						x: t.x,
						y: t.y
					}), s.get("el").animate(t, e, r, n)
				} else i.mix(o, {
					x: t.x,
					y: t.y
				}), a = s._getPath(o), s.get("el").animate({
					path: a
				}, e, r, n)
			},
			parseElCfg: function(t) {
				var e = this,
					r = t.symbol,
					n = t.radius || 5;
				return r && !i.isFunction(r) && -1 != r.indexOf("url") ? (t.type = "image", t.src = r.replace(/url\((.*)\)/, "$1"), t.width = 2 * t.radius, t.height = 2 * t.radius, i.vml ? (t.x -= n - 1, t.y -= n - 1) : (t.x -= n, t.y -= n)) : (t.type = "path", t.path = e._getPath(t)), t
			},
			_getPath: function(t) {
				if (!t.symbol && t.path) return i.substitute(t.path, t);
				var e;
				if (e = i.isFunction(t.symbol) ? t.symbol : m.Symbols[t.symbol]) return e(t.x, t.y, t.radius);
				throw "not support this type " + t.symbol
			}
		}), s.Marker = m;
		var x = function(t) {
			x.superclass.constructor.call(this, t)
		};
		return x.ATTRS = {
			src: null,
			x: null,
			y: null,
			width: null,
			height: null
		}, i.extend(x, s), s.Image = x, t = s
	}(), L = function(t) {
		var e = P,
			r = T,
			n = a,
			i = function(t) {
				i.superclass.constructor.call(this, t)
			};
		return n.extend(i, r), i.ATTRS = {
			children: []
		}, n.augment(i, {
			isContainer: !0,
			beforeRenderUI: function() {
				this.set("children", [])
			},
			getGroupClass: function() {},
			getShapeClass: function(t) {
				var r = n.ucfirst(t);
				return e[r] ? e[r] : e
			},
			addShape: function(t, e) {
				var r, i, a, s = this;
				return n.isObject(t) ? (i = t, t = i.type) : i = {
					type: t,
					attrs: e,
					canvas: s.get("canvas")
				}, i.parent = s, r = s.getShapeClass(t), a = new r(i), a.set("canvas", s.get("canvas")), s.addChild(a), a
			},
			addGroup: function(t, e) {
				n.isObject(t) && (e = t, t = null);
				var r, i = this,
					e = n.mix({
						parent: i,
						canvas: i.get("canvas")
					}, e);
				return t = t || i.getGroupClass(), r = new t(e), i.addChild(r), r
			},
			removeChild: function(t, e) {
				void 0 == e && (e = !0);
				var r = this,
					i = r.get("el"),
					a = r.get("children");
				return n.remove(a, t), i.__set && i.__set.exclude && i.__set.exclude(t.get("el")), e && t.destroy(), t
			},
			addChild: function(t) {
				var e = this,
					r = e.get("children");
				r.push(t), t.parent = t
			},
			getChildAt: function(t) {
				return this.get("children")[t]
			},
			getCount: function() {
				return this.get("children").length
			},
			getLast: function() {
				return this.getChildAt(this.getCount() - 1)
			},
			getFirst: function() {
				return this.getChildAt(0)
			},
			find: function(t) {
				var e = this;
				return e.findBy(function(e) {
					return e.get("id") == t
				})
			},
			sort: function() {
				var t = this,
					e = t.get("node"),
					r = n.toArray(e.childNodes);
				n.svg ? (r.sort(function(t, e) {
					var r = t.getAttribute("zIndex") || 0,
						n = e.getAttribute("zIndex") || 0;
					return +r - +n
				}), n.each(r, function(t) {
					e.appendChild(t)
				})) : n.each(r, function(t) {
					var e = t.getAttribute("zIndex");
					e && (t.style.zIndex = e)
				})
			},
			findBy: function(t) {
				var e = this,
					r = e.get("children"),
					i = null;
				return n.each(r, function(e) {
					return t(e) ? i = e : e.findBy && (i = e.findBy(t)), i ? !1 : void 0
				}), i
			},
			findByNode: function(t) {
				return this.findBy(function(e) {
					return e.get("node") == t
				})
			},
			clear: function() {
				var t = this,
					e = t.get("children"),
					r = t.get("el");
				n.each(e, function(t) {
					t.destroy()
				}), e && n.empty(e), r.__set && r.__set.clear && r.__set.clear(), r.clear && r.clear()
			},
			destroy: function() {
				{
					var t = this;
					t.get("children"), t.get("el"), t.get("node")
				}
				t.get("destroyed") || (t.clear(), i.superclass.destroy.call(this))
			}
		}), t = i
	}(), M = function(t) {
		var e = L,
			r = u,
			n = a,
			i = function(t) {
				i.superclass.constructor.call(this, t)
			};
		return i.ATTRS = {
			x: null,
			y: null
		}, n.extend(i, e), n.mixin(i, [r]), n.augment(i, {
			isGroup: !0,
			createDom: function() {
				var t, e = this,
					r = e.get("el"),
					n = e.get("attrs");
				r || (r = e.createElement(), n && r.attr(n), e.set("el", r)), t = r.node, t.group = e, e.set("node", t)
			},
			renderUI: function() {
				this._initTranslate()
			},
			_initTranslate: function() {
				var t = this,
					e = t.get("x"),
					r = t.get("y");
				e || r ? t._translate(e || 0, r || 0) : (t.set("x", e || 0), t.set("y", r || 0))
			},
			translate: function(t, e) {
				var r = this,
					n = r.get("x") || 0,
					i = r.get("y") || 0;
				r.set("x", n + t), r.set("y", i + e), r._translate(t, e)
			},
			getBBox: function() {
				var t = this,
					e = t.get("children"),
					r = 0,
					i = 0,
					a = {};
				return n.each(e, function(t) {
					var e = t.getBBox(),
						n = e.width + e.x,
						a = e.height + e.y;
					n > r && (r = n), a > i && (i = a)
				}), a.x = t.get("x"), a.y = t.get("y"), a.width = r, a.height = i, a
			},
			_translate: function(t, e) {
				var r = this,
					n = r.get("el");
				n.translate(t, e)
			},
			containsElement: function(t) {
				var e = this,
					r = e.get("node");
				return r == t || n.contains(r, t)
			},
			animate: function(t, e, r, i) {
				var a = this,
					s = a.get("el");
				if (n.svg) {
					var o = {};
					void 0 != t.x && (o.transform = "t " + t.x + " " + t.y), t["clip-rect"] && (o["clip-rect"] = t["clip-rect"]), t["clip-circle"] && (o["clip-circle"] = t["clip-circle"]), t["clip-angle"] && (o["clip-angle"] = t["clip-angle"]), t.transform && (o.transform = t.transform), s.animate(o, e, r, i)
				} else s.animate(t, e, r, i);
				a.set("x", t.x), a.set("y", t.y)
			},
			move: function(t, e) {
				var r = this,
					i = r.get("x") || 0,
					a = r.get("y") || 0;
				n.svg ? r._translate(t - i, e - a) : r.get("el").move(t, e), r.set("x", t), r.set("y", e)
			},
			createElement: function() {
				var t = this,
					e = t.get("parent").get("el");
				return e.group()
			},
			getGroupClass: function() {
				return i
			}
		}), t = i
	}(), R = function(t) {
		var e = a,
			r = M,
			n = w,
			i = L,
			s = function(t) {
				s.superclass.constructor.call(this, t)
			};
		return s.ATTRS = {
			width: {},
			height: {},
			id: {},
			viewbox: {}
		}, e.extend(s, i), e.augment(s, {
			getGroupClass: function() {
				return r
			},
			renderUI: function() {
				var t, e = this,
					r = e.get("id"),
					i = e.get("width"),
					a = e.get("height");
				t = n(r, i, a), e.set("canvas", e), e.set("el", t), e.set("node", t.canvas)
			},
			setSize: function(t, e) {
				this.set("width", t), this.set("height", e), this.get("el").setSize(t, e)
			},
			setViewBox: function(t, e, r, n, i) {
				this.get("el").setViewBox(t, e, r, n, i), this.set("viewbox", {
					x: t,
					y: e,
					width: r,
					height: n
				})
			},
			getPoint: function(t, e) {
				var r = this,
					n = r.get("node"),
					i = r.get("viewbox"),
					a = n.getBoundingClientRect(),
					s = {};
				if (i) {
					var o = i.width / r.get("width"),
						l = i.height / r.get("height");
					s.x = (t - a.left) * o + i.x, s.y = (e - a.top) * l + i.y
				} else s.x = t - a.left, s.y = e - a.top;
				return s
			},
			getRelativePoint: function(t, e) {
				var r = this,
					n = r.get("viewbox"),
					i = {};
				if (n) {
					{
						var a = n.width / r.get("width");
						n.height / r.get("height")
					}
					i.x = t * a + n.x, i.y = e * a + n.y
				} else i.x = t, i.y = e;
				return i
			}
		}), t = s
	}(), N = function(t) {
		var e = R;
		return e.Group = M, e.Shape = P, t = e
	}(), F = function(t) {
		function e(t) {
			if (!t._attrs && t != i.Group) {
				var r = t.superclass.constructor;
				r && !r._attrs && e(r), t._attrs = {}, n.mix(!0, t._attrs, r._attrs), n.mix(!0, t._attrs, t.ATTRS)
			}
		}

		function r(t) {
			e(this.constructor), r.superclass.constructor.call(this, t)
		}
		var n = a,
			i = N;
		return r.ATTRS = {
			itemName: "item",
			groupName: "group",
			events: null
		}, n.extend(r, i.Group), n.augment(r, {
			getDefaultCfg: function() {
				var t = this,
					e = t.constructor,
					r = e._attrs,
					i = n.mix(!0, {}, r);
				return i
			},
			beforeRenderUI: function() {
				var t = this,
					e = t.get("events");
				r.superclass.beforeRenderUI.call(this), e && n.each(e, function(e, r) {
					t.on(r, e)
				})
			},
			getVisibleChildren: function() {
				var t = this,
					e = t.get("children");
				return n.filter(e, function(t) {
					return t.get("visible")
				})
			},
			showChild: function(t) {
				t && t.show()
			},
			hideChild: function(t) {
				t && t.hide()
			},
			fireUp: function(t, e) {
				var r = this,
					n = r.get("canvas"),
					i = n.chart;
				e = e || {}, i && (e.target = e.target || i, i.fire(t, e))
			},
			fireUpGroup: function(t, e, r) {
				var n = this,
					i = n.get("itemName"),
					a = n.get("groupName");
				r = r || {}, r[i] = e, a && (r[a] = n.get("parent")), n.fireUp(i.toLowerCase() + t, r)
			}
		}), t = r
	}(), E = function(t) {
		var e = a,
			r = F,
			n = c,
			i = function(t) {
				i.superclass.constructor.call(this, t)
			};
		return i.ATTRS = {
			elCls: "x-chart-back",
			zIndex: 0,
			margin: 20,
			plotRange: null,
			background: null,
			border: null
		}, e.extend(i, r), e.augment(i, {
			beforeRenderUI: function() {
				i.superclass.beforeRenderUI.call(this), this._calculateRange()
			},
			renderUI: function() {
				i.superclass.renderUI.call(this), this._renderBorder(), this._renderBackground()
			},
			repaint: function() {
				return this._calculateRange(), this._renderBorder(), this._renderBackground(), this
			},
			_renderBorder: function() {
				var t, r = this,
					n = r.get("border"),
					i = r.get("canvas"),
					a = r.get("borderShape");
				if (n) {
					var s = i.get("width"),
						o = i.get("height");
					a ? a.attr({
						width: s,
						height: o
					}) : (t = e.mix({
						width: s,
						height: o
					}, n), a = this.addShape("rect", t), this.set("borderShape", a))
				}
			},
			_renderBackground: function() {
				var t, r, n, i, a = this,
					s = a.get("background"),
					o = a.get("plotRange"),
					l = a.get("backShape");
				s && (t = o.getWidth(), r = o.getHeight(), n = o.tl, i = {
					x: n.x,
					y: n.y,
					width: t,
					height: r
				}, l ? l.attr(i) : (s.image ? (i.src = s.image, l = a.addShape("image", i)) : (e.mix(i, s), l = a.addShape("rect", i)), a.set("backShape", l)))
			},
			_calculateRange: function() {
				var t, r, i = this,
					a = i.get("margin"),
					s = i.get("canvas"),
					o = s.get("width"),
					l = s.get("height"),
					u = i.get("plotRange"),
					c = 0,
					h = 0,
					f = 0,
					g = 0;
				e.isNumber(a) && (c = h = f = g = a), e.isArray(a) && (c = a[0], f = null != a[1] ? a[1] : a[0], g = null != a[2] ? a[2] : a[0], h = null != a[3] ? a[3] : f), t = s.getRelativePoint(h, l - g), r = s.getRelativePoint(o - f, c), u ? u.reset(t, r) : (u = new n(t, r), i.set("plotRange", u))
			}
		}), t = i
	}(), O = function(t) {
		var e = {};
		return e.Item = F, e.Back = E, e.Range = c, t = e
	}(), D = function(t) {
		var e = a,
			r = O.Item,
			n = 20,
			i = 7,
			s = function(t) {
				s.superclass.constructor.call(this, t)
			};
		return s.ATTRS = {
			elCls: "x-chart-legend-item",
			label: {
				x: n,
				"text-anchor": "start",
				y: i,
				cursor: "pointer"
			},
			checked: !0,
			legend: null,
			x: null,
			y: null,
			name: null,
			color: null,
			symbol: null,
			type: "rect",
			uncheckedColor: "#CCC",
			line: {
				x1: 3,
				y1: 7,
				x2: 17,
				y2: 7,
				"stroke-width": 2
			},
			circle: {
				cx: 10,
				cy: 7,
				r: 5,
				"fill-opacity": .5
			},
			rect: {
				x: 2,
				y: 2,
				width: 15,
				height: 10
			}
		}, e.extend(s, r), e.augment(s, {
			renderUI: function() {
				var t = this;
				s.superclass.renderUI.call(t), t._createShape(), t._createMarker(), t._createLabel()
			},
			bindUI: function() {
				var t = this;
				s.superclass.bindUI.call(t)
			},
			_setChecked: function(t) {
				var e = this,
					r = e.get("shape"),
					n = e.get("marker"),
					i = e.get(t ? "color" : "uncheckedColor");
				r && r.attr({
					stroke: i,
					fill: i
				}), n && n.attr({
					stroke: i,
					fill: i
				})
			},
			_onRenderChecked: function(t) {
				var e = this;
				e.get("rendered") && e._setChecked(t)
			},
			getWidth: function() {
				var t = this,
					e = t.get("labelShape");
				return e.getBBox().width + n
			},
			_createLabel: function() {
				var t, r = this,
					a = r.get("name"),
					s = r.get("label"),
					o = e.mix({}, s, {
						text: a
					});
				o.x || (o.x = n), o.y || (o.y = i), t = r.addShape("label", o), r.set("labelShape", t)
			},
			_createShape: function() {
				var t, r = this,
					n = r.get("type"),
					i = r.get("color"),
					a = e.mix({
						fill: i,
						stroke: i
					}, r.get(n));
				a && n && (t = r.addShape(n, a)), t && t.attr("cursor", "pointer"), r.set("shape", t)
			},
			_createMarker: function() {
				var t, e = this,
					r = e.get("symbol");
				r && (t = {
					symbol: r,
					fill: e.get("color"),
					stroke: e.get("color")
				}, t.radius = 3, t.x = 10, t.y = 7, t = e.addShape("marker", t)), e.set("marker", t)
			}
		}), t = s
	}(), G = function(t) {
		function e(t, e) {
			for (var r = t.getElementsByTagName("*"), n = r.length, i = [], a = 0; n > a; a++) {
				var s = r[a].className || "";
				if (!(s.indexOf(e) < 0)) {
					s = s.split(/\s+/);
					for (var o = s.length, l = 0; o > l; l++)
						if (e == s[l]) {
							i.push(r[a]);
							break
						}
				}
			}
			return i
		}

		function r(t, r) {
			return t.getElementsByClassName ? t.getElementsByClassName(r)[0] : e(t, r)[0]
		}
		var n = O.Item,
			i = a,
			s = "ac-title",
			o = "ac-list",
			l = Math.max,
			u = function(t) {
				u.superclass.constructor.call(this, t)
			};
		return u.ATTRS = {
			zIndex: 10,
			elCls: "x-chart-tootip",
			itemName: "tootip",
			crosshairs: !1,
			plotRange: null,
			shared: !1,
			offset: 0,
			title: {
				"font-size": "10",
				"text-anchor": "start",
				x: 5,
				y: 15
			},
			name: {
				"font-size": "12",
				"text-anchor": "start"
			},
			value: {
				"font-size": "12",
				"font-weight": "bold",
				"text-anchor": "start"
			},
			border: {
				x: 0,
				y: 0,
				r: 3,
				fill: "#fff",
				"fill-opacity": .85
			},
			animate: !0,
			duration: 100,
			pointRenderer: null,
			valueSuffix: "",
			valueSplit: " ",
			visible: !1,
			custom: !1,
			customFollow: !0,
			html: '<div class="ac-tooltip" style="position:absolute;visibility: hidden;"><h4 class="' + s + '"></h4><ul class="' + o + '"></ul></div>',
			itemTpl: '<li><span style="color:{color}">{name}</span> : {value}</li>',
			items: [],
			crossLine: {
				stroke: "#C0C0C0"
			}
		}, i.extend(u, n), i.augment(u, {
			renderUI: function() {
				var t = this,
					e = t.get("custom");
				u.superclass.renderUI.call(t), e ? t._renderCustom() : (t._renderBorer(), t._renderText(), t._renderItemGroup()), t._renderCrossLine()
			},
			_renderBorer: function() {
				var t = this,
					e = (t.getBBox(), t.addShape("rect", t.get("border")));
				t.set("borderShape", e)
			},
			_renderText: function() {
				var t = this,
					e = t.get("title");
				e && t.setTitle(e.text)
			},
			_renderCustom: function() {
				var t, e = this,
					r = e.get("html"),
					n = e.get("canvas").get("node").parentNode;
				if (/^\#/.test(r)) {
					var a = r.replace("#", "");
					t = document.getElementById(a)
				} else t = i.createDom(r);
				e.get("customFollow") && (n.appendChild(t), n.style.position = "relative"), e.set("customDiv", t);
				var s = e.get("items");
				i.each(s, function(t, r) {
					e.addCustomItem(t, r)
				})
			},
			_renderItemGroup: function() {
				var t, e = this,
					r = e.get("items"),
					n = e.get("titleShape"),
					i = {
						x: 8,
						y: 10
					};
				n && (i.y += 20), t = e.addGroup(i), e.set("textGroup", t), r && e.setItems(r)
			},
			_renderCrossLine: function() {
				var t, e = this,
					r = e.get("crosshairs"),
					n = e.get("canvas"),
					i = e.get("plotRange");
				if (r) {
					var a, s;
					i ? (a = i.bl.y, s = i.tl.y) : (a = n.get("height"), s = 0), t = e.get("parent").addShape({
						type: "line",
						visible: !1,
						zIndex: 3,
						attrs: {
							stroke: e.get("crossLine").stroke,
							x1: 0,
							y1: a,
							x2: 0,
							y2: s
						}
					}), e.set("crossShape", t)
				}
			},
			setTitle: function(t) {
				var e, n = this,
					i = n.get("title"),
					a = n.get("custom");
				if (i) {
					if (n.set("titleText", t), a) {
						var o = n.get("customDiv"),
							l = r(o, s);
						return void(l && (l.innerHTML = t))
					}
					e = n.get("titleShape"), e || (i.text = t || "", i["text-anchor"] = "start", e = n.addShape("text", i), n.set("titleShape", e)), e.attr("text", t)
				}
			},
			getInnerBox: function() {
				var t = this,
					e = {},
					r = t.get("textGroup"),
					n = t.get("titleShape"),
					i = r.getBBox(),
					a = i.width;
				if (n) {
					var s = n.getBBox();
					a = Math.max(a, s.width)
				}
				return e.width = i.x + a + 8, e.height = i.height + i.y + 8, e
			},
			setColor: function(t) {
				var e = this,
					r = e.get("borderShape"),
					n = e.get("customDiv");
				r && r.attr("stroke", t), n && (n.style.borderColor = t)
			},
			show: function() {
				var t = this,
					e = t.get("crossShape"),
					r = t.get("customDiv"),
					n = t.get("hideHandler");
				n && clearTimeout(n), u.superclass.show.call(t), r && t.get("customFollow") && (r.style.visibility = "visible"), t.fireUp("tooltipshow", t.getEventObj()), e && e.show()
			},
			hide: function() {
				var t = this,
					e = t.get("customDiv"),
					r = t.get("crossShape"),
					n = setTimeout(function() {
						t.fireUp("tooltiphide", t.getEventObj()), e && t.get("customFollow") && (e.style.visibility = "hidden"), u.superclass.hide.call(t), t.set("hideHandler", null)
					}, t.get("duration"));
				t.set("hideHandler", n), r && r.hide()
			},
			setPosition: function(t, e) {
				var r = this,
					n = r.get("plotRange"),
					a = r.get("offset"),
					s = r.get("crossShape"),
					o = r.getBBox(),
					u = r.get("customDiv"),
					c = !0,
					h = r.get("animate"),
					f = t;
				if (t = t - o.width - a, e -= o.height, u && r.get("customFollow")) {
					var g = parseFloat(i.getStyle(u, "paddingLeft")) || 0;
					t = t - i.getOuterWidth(u) + g
				}
				n && (n.isInRange(t, e) || (n.isInVertical(e) || (e = n.tl.y), n.isInHorizontal(t) || (t = l(n.tl.x, f) + a, c = !1))), (r.get("x") != t || r.get("y") != e) && (h && i.svg && r.get("visible") && r.animate({
					x: t,
					y: e
				}, r.get("duration")), r.move(t, e), r.moveCustom(t, e, c), s && (c ? s.attr("transform", "t" + f + " 0") : s.attr("transform", "t" + (t - a) + " 0")))
			},
			resetBorder: function() {
				var t = this,
					e = t.getInnerBox(),
					r = t.get("borderShape");
				r.attr({
					width: e.width,
					height: e.height
				})
			},
			moveCustom: function(t, e, r) {
				var n = this,
					a = n.get("offset"),
					s = n.get("customDiv");
				if (r || (t += 2 * a), s && n.get("customFollow")) {
					var o = parseFloat(i.getStyle(s, "paddingTop")),
						l = parseFloat(i.getStyle(s, "borderTopWidth")) || 0,
						u = parseFloat(i.getStyle(s, "paddingLeft")),
						c = parseFloat(i.getStyle(s, "borderLeftWidth")) || 0;
					s.style.left = t - c - u + "px", s.style.top = e - l - o + "px"
				}
			},
			addCustomItem: function(t, e) {
				t.index = e;
				var n = this,
					a = n.get("customDiv"),
					s = r(a, o);
				if (s) {
					var l = n.get("itemTpl"),
						u = i.substitute(l, t),
						c = i.createDom(u);
					s.appendChild(c)
				}
			},
			addItem: function(t, e) {
				function r(t, e) {
					var r = i.mix({}, c, {
						x: f,
						y: h,
						text: t + ""
					}, e);
					return l.addShape("text", r)
				}
				var n, a, s = this,
					o = s.get("textGroup"),
					l = o.addGroup(),
					u = s.get("name"),
					c = s.get("value"),
					h = 16 * e,
					f = 0;
				u && (n = i.mix({}, u, {
					x: 0,
					y: h,
					text: t.name + ":",
					fill: t.color
				}), a = l.addShape("text", n), f = a.getBBox().width + 10);
				var g, d = t.suffix || s.get("valueSuffix");
				i.isArray(t.value) ? i.each(t.value, function(t) {
					var e;
					e = i.isObject(t) ? r(t.text, t) : r(t), f += e.getBBox().width
				}) : (g = d ? t.value + s.get("valueSplit") + d : t.value, r(g))
			},
			setItems: function(t) {
				var e = this,
					r = e.get("custom");
				e.clearItems(), i.each(t, function(t, n) {
					r ? e.addCustomItem(t, n) : e.addItem(t, n)
				}), t[0] && e.setColor(t[0].color), r || e.resetBorder(), e.get("items") != t && (e.set("items", t), e.onChange())
			},
			onChange: function() {
				this.fireUp("tooltipchange", this.getEventObj())
			},
			getEventObj: function() {
				var t = this;
				return {
					title: t.get("titleText"),
					items: t.get("items"),
					dom: t.get("customDiv"),
					tooltip: t
				}
			},
			clearItems: function() {
				var t = this,
					e = t.get("textGroup"),
					n = t.get("customDiv");
				if (e && e.clear(), n) {
					var i = r(n, o);
					i && (i.innerHTML = "")
				}
			},
			remove: function() {
				var t = this,
					e = t.get("crossShape"),
					r = t.get("customDiv");
				e && e.remove(), u.superclass.remove.call(this), r && r.parentNode.removeChild(r)
			}
		}), t = u
	}(), z = function(t) {
		function e(t, e, r) {
			var n = e.get(t);
			return n || (n = r, e.set(t, n)), n
		}

		function r(t, e) {
			var r = "",
				n = s.mix({}, e);
			return s.each(t, function(t) {
				var e = s.substitute("M{x1} {y1}L{x2} {y2}", t);
				r += e
			}), n.path = r, n
		}

		function n(t) {
			n.superclass.constructor.call(this, t)
		}
		var i = O.Item,
			s = a,
			o = "x-chart-grid";
		return s.extend(n, i), n.ATTRS = {
			zIndex: 1,
			elCls: o,
			type: "line",
			line: null,
			minorLine: null,
			minorCount: 0,
			renderer: null,
			items: null,
			odd: null,
			even: null,
			animate: !0,
			duration: 1e3
		}, s.augment(n, {
			renderUI: function() {
				var t = this;
				n.superclass.renderUI.call(t), t._drawLines()
			},
			_drawLines: function() {
				var t = this,
					e = t.get("line"),
					r = t.get("items");
				if (r) {
					t._precessItems(r), t._drawGridLines(r, e, o + "-line"), t.get("minorCount") && t.drawMinorLines()
				}
			},
			_precessItems: function(t) {
				var e, r = this,
					n = r.get("minorCount"),
					i = r.get("renderer");
				s.each(t, function(t, a) {
					i ? i.call(this, t, a) : n && e && r._addMonorItem(t, e), e && (r.get("odd") || r.get("even")) && r._drawOddEven(t, e, a), e = t
				})
			},
			change: function(t) {
				var e = this;
				e.set("items", t), e._clearPre(), e._precessItems(t), e._changeGridLines(t, o + "-line"), e._changeMinorLinses()
			},
			_clearPre: function() {
				var t, e = this;
				e.get("minorCount") && e.set("minorItems", []), t = e.findBy(function(t) {
					var e = t.get("elCls");
					return e == o + "-line" || e == o + "-minor" ? !1 : !0
				}), s.each(t, function(t) {
					t.remove()
				})
			},
			_isVertical: function(t) {
				return t.x1 == t.x2 ? !0 : !1
			},
			_drawGridLines: function(t, e, r) {
				var n = this,
					i = n._linesToPath(t, e),
					a = n.addShape({
						type: "path",
						elCls: r,
						attrs: i
					});
				n.set("gridLine" + r, a)
			},
			_changeGridLines: function(t, e) {
				var r = this,
					n = r.get("animate"),
					i = r.get("gridLine" + e);
				if (i) {
					var a = r._linesToPath(t, {});
					n ? s.animPath(i, a.path, 2) : i.attr("path", a.path)
				} else if (t && t.length) {
					var l;
					l = r.get(e == o + "-line" ? "line" : "minorLine"), r._drawGridLines(t, l, e)
				}
			},
			_linesToPath: function(t, e) {
				var n, i = this,
					a = [],
					o = i.get("type");
				return "line" == o ? 0 == t.length ? "" : r(t, e) : (n = s.mix({}, e), s.each(t, function(t) {
					a = a.concat(i._getMultiplePath(t, o))
				}), n.path = a, n)
			},
			_getMultiplePath: function(t, e) {
				var r = t.points,
					n = [];
				if ("polygon" == e) s.each(r, function(t, e) {
					n.push(0 == e ? ["M", t.x, t.y] : ["L", t.x, t.y])
				}), n.push(["L", r[0].x, r[0].y]), n.push(["z"]);
				else {
					var i = t.center.x,
						a = t.center.y,
						o = t.r,
						l = t.r;
					n = 0 == o ? [] : [
						["M", i, a],
						["m", 0, -l],
						["a", o, l, 0, 1, 1, 0, 2 * l],
						["a", o, l, 0, 1, 1, 0, -2 * l]
					]
				}
				return n
			},
			_drawOddEven: function(t, e, r) {
				var n, i, a = this,
					s = a.get("odd"),
					l = a.get("even");
				r % 2 == 0 ? l && (i = a._getBackItem(e, t, l), n = "even") : s && (i = a._getBackItem(e, t, s), n = "odd"), i && a.addShape({
					type: "path",
					elCls: o + "-" + n,
					attrs: i
				})
			},
			_getBackItem: function(t, e, r) {
				var n = s.substitute("M {x1} {y1} L{x2} {y2}", t);
				return n += s.substitute("L{x2} {y2} L{x1} {y1}Z", e), r = s.mix({}, r, {
					path: n
				})
			},
			_getMinorItem: function(t, e, r, n) {
				var i = this,
					a = i._isVertical(t, e),
					s = a ? "x" : "y",
					o = a ? "y" : "x",
					l = e[s + "1"] - t[s + "1"],
					u = l / (n + 1),
					c = {};
				return c[s + "1"] = c[s + "2"] = (r + 1) * u + t[s + "1"], c[o + "1"] = t[o + "1"], c[o + "2"] = t[o + "2"], c
			},
			_addMonorItem: function(t, r) {
				var n = this,
					i = e("minorItems", n, []),
					a = n.get("minorCount");
				if (a)
					for (var s = 0; a > s; s++) {
						var o = n._getMinorItem(r, t, s, a);
						i.push(o)
					}
			},
			drawMinorLines: function() {
				var t = this,
					e = t.get("minorLine"),
					r = t.get("minorItems");
				t._drawGridLines(r, e, o + "-minor")
			},
			_changeMinorLinses: function() {
				var t = this,
					e = t.get("minorItems");
				t._changeGridLines(e, o + "-minor")
			}
		}), t = n
	}(), V = function(t) {
		var e = O.Item,
			r = a,
			n = "x-chart-labels",
			i = function(t) {
				i.superclass.constructor.call(this, t)
			};
		return i.ATTRS = {
			elCls: n,
			zIndex: 6,
			items: null,
			label: null,
			renderer: null,
			custom: !1,
			html: '<div class="ac-labels" style="position:absolute;top:0;left:0;"></div>',
			itemTpl: '<div class="ac-label" style="position:absolute;">{text}</div>',
			animate: !0,
			duration: 400
		}, r.extend(i, e), r.augment(i, {
			renderUI: function() {
				var t = this;
				i.superclass.renderUI.call(t), t._drawLabels()
			},
			addLabel: function(t) {
				var e = this,
					r = e.get("items"),
					n = r.length;
				return r.push(t), e._addLabel(t, n)
			},
			setItems: function(t) {
				var e = this;
				e.clear(), e.set("items", t), e._drawLabels()
			},
			clear: function() {
				var t = this,
					e = t.get("customDiv");
				e && (e.innerHTML = ""), i.superclass.clear.call(t)
			},
			_drawLabels: function() {
				var t = this,
					e = t.get("items");
				r.each(e, function(e, r) {
					t._addLabel(e, r)
				})
			},
			_addLabel: function(t, e) {
				var r = this,
					n = r._getLabelCfg(t, e);
				return r._createText(n)
			},
			_getLabelCfg: function(t, e) {
				var n = this,
					i = n.get("label"),
					a = n.get("renderer");
				if (!r.isObject(t)) {
					var s = t;
					t = {}, t.text = s
				}
				return a && (t.text = a(t.text, t, e)), null == t.text && (t.text = ""), "" === t.text && r.vml && (t.text = " "), t.text = t.text.toString(), t.x = (t.x || 0) + (i.x || 0), t.y = (t.y || 0) + (i.y || 0), cfg = r.mix({}, i, t)
			},
			getLabels: function() {
				var t = this,
					e = t.get("customDiv");
				return e ? r.makArray(e.childNodes) : t.get("children")
			},
			changeLabel: function(t, e) {
				var n, i, a = this,
					s = a.get("custom");
				if (n = r.indexOf(a.get("children"), t), i = a._getLabelCfg(e, n), t)
					if (s) {
						var o = a._createDom(i);
						t.innerHTML = o.innerHTML, a._setCustomPosition(i, t)
					} else t.attr("text", i.text), (t.attr("x") != i.x || t.attr("y") != i.y) && (r.svg && a.get("animate") && !i.rotate ? (i.rotate && t.attr("transform", ""), t.animate({
						x: i.x,
						y: i.y
					}, a.get("duration"))) : (t.attr(i), i.rotate && t.attr("transform", r.substitute("r{rotate} {x} {y}", i))))
			},
			_setCustomPosition: function(t, e) {
				var n = t["text-anchor"] || "middle",
					i = t.y,
					a = t.x,
					s = r.getWidth(e),
					o = r.getHeight(e);
				i -= o / 2, "middle" == n ? a -= s / 2 : "end" == n && (a -= s), e.style.top = parseInt(i) + "px", e.style.left = parseInt(a) + "px"
			},
			_createText: function(t) {
				var e = this,
					n = e.get("custom"),
					i = e.get("customDiv");
				if (!n) return this.addShape("label", t);
				if (!i) {
					var a = e.get("html"),
						s = e.get("canvas").get("node").parentNode;
					i = r.createDom(a), s.style.position = "relative", s.appendChild(i), e.set("customDiv", i)
				}
				var o = e._createDom(t);
				i.appendChild(o), e._setCustomPosition(t, o)
			},
			_createDom: function(t) {
				var e = this,
					n = e.get("itemTpl"),
					i = r.substitute(n, t),
					a = r.createDom(i);
				return a
			},
			remove: function() {
				var t = this,
					e = t.get("customDiv");
				i.superclass.remove.call(this), e && e.parentNode.removeChild(e)
			}
		}), t = i
	}(), j = function(t) {
		function e(t) {
			t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
		}
		var r = a,
			n = V,
			i = function() {};
		return i.ATTRS = {
			labels: null
		}, r.augment(i, {
			renderLabels: function() {
				var t, e = this,
					r = e.get("labels");
				r && (r.items || (r.items = []), null == r.animate && (r.animate = e.get("animate")), t = e.addGroup(n, r), e.set("labelsGroup", t))
			},
			resetLabels: function(t) {
				var n = this,
					i = n.get("labels");
				if (i) {
					var a = n.get("labelsGroup"),
						s = a.getLabels(),
						o = s.length;
					t = t || i.items, r.each(t, function(t, e) {
						if (o > e) {
							var r = s[e];
							a.changeLabel(r, t)
						} else n.addLabel(t.text, t)
					});
					for (var l = o - 1; l >= t.length; l--) e(s[l])
				}
			},
			addLabel: function(t, e) {
				var r, n = this,
					i = n.get("labelsGroup"),
					a = {};
				return i && (a.text = t, a.x = e.x, a.y = e.y, a.point = e, r = i.addLabel(a)), r
			},
			removeLabels: function() {
				var t = this,
					e = t.get("labelsGroup");
				e && e.remove(), t.set("labelsGroup", null)
			}
		}), t = i
	}(), U = function(t) {
		var e = a,
			r = b.Group,
			n = O.Item,
			i = function(t) {
				i.superclass.constructor.call(this, t)
			};
		return e.extend(i, n), e.mixin(i, [r]), i.ATTRS = {
			elCls: "x-chart-markers",
			zIndex: 6,
			marker: null,
			actived: null,
			single: !1,
			xCache: null
		}, e.augment(i, {
			renderUI: function() {
				var t = this;
				t.set("xCache", []), i.superclass.renderUI.call(t), t._drawMarkers()
			},
			bindUI: function() {
				var t = this;
				t.on("click", function(e) {
					var r = e.target.shape;
					if (r) {
						var n = r.get("point") || r.get("item");
						t.fire("markerclick", {
							marker: r,
							point: n
						})
					}
				})
			},
			isItemActived: function(t) {
				return t.get("actived")
			},
			setItemActived: function(t, e) {
				var r = this,
					n = r.get("marker"),
					i = r.get("actived"),
					a = r.get("single");
				e ? (t.attr(i), t.set("actived", !0), a && !t.get("visible") && t.show()) : (t.attr(n), t.set("actived", !1), a && t.hide())
			},
			change: function(t) {
				var r = this,
					n = r.get("children"),
					i = r.get("invert"),
					a = [];
				if (!r.get("single")) {
					r.set("items", t), e.each(t, function(t, s) {
						var o = n[s];
						if (o) {
							if (e.svg)
								if (r.get("animate")) {
									var l = {
											x: t.x,
											y: t.y
										},
										u = e.mix({}, t);
									delete u.x, delete u.y, o.animate(l, 400), o.attr(u)
								} else o.attr(t);
							else o.attr(t);
							a.push(i ? t.y : t.x), o.set("item", t)
						} else r._addMarker(t)
					});
					for (var s = r.getCount(), o = s - 1; o > t.length - 1; o--) r.getChildAt(o).remove();
					r.set("xCache", a)
				}
			},
			_drawMarkers: function() {
				var t = this,
					r = t.get("single"),
					n = t.get("items");
				if (r) {
					var i = t._addMarker({
						x: 0,
						y: 0
					});
					i.hide()
				} else e.each(n, function(e) {
					t._addMarker(e)
				})
			},
			addMarker: function(t) {
				return this._addMarker(t)
			},
			_addMarker: function(t) {
				var r = this,
					n = r.get("xCache"),
					i = r.get("marker"),
					a = e.mix({}, i, t);
				n.push(parseInt(r.get("invert") ? t.y : t.x));
				var s = r.addShape("marker", a);
				return s.set("item", t), s
			},
			getSnapMarker: function(t, r) {
				var n, i = this,
					a = i.get("xCache"),
					s = i.get("single");
				if (s) return i.getChildAt(0);
				if (e.isObject(t)) {
					var o = i.get("children");
					e.each(o, function(e) {
						return e.attr("x") == t.x && e.attr("y") == t.y ? (n = e, !1) : void 0
					})
				} else {
					var l = [].concat(a).sort(function(t, e) {
							return t - e
						}),
						u = e.snapTo(l, t, r),
						c = e.indexOf(a, u);
					n = i.getChildAt(c)
				}
				return n
			}
		}), t = i
	}(), Y = function(t) {
		var e = a,
			r = O.Item,
			n = function(t) {
				n.superclass.constructor.call(this, t)
			};
		return n.ATTRS = {
			title: "",
			titleCfg: null,
			text: "",
			line: null,
			distance: 0,
			shapeCfg: {},
			shapeType: "",
			point: null,
			cash: {}
		}, e.extend(n, r), e.augment(n, {
			renderUI: function() {
				var t = this;
				n.superclass.renderUI.call(t), t.drawFlag()
			},
			drawFlag: function() {
				var t = this;
				t._drawLine(), t._drawShape(), t._drawTitle()
			},
			_drawLine: function() {
				var t = this,
					e = t.get("cash"),
					r = t.addShape("line", t.__getLineAttr());
				e.line = r
			},
			__getLineAttr: function() {
				var t = this,
					r = t.get("line"),
					n = t.get("point"),
					i = n.x,
					a = n.y,
					s = t.get("distance"),
					o = e.mix(r, {
						x1: i,
						y1: a,
						x2: i,
						y2: s + a
					});
				return 0 >= s ? t.set("bottomY", a) : t.set("topY", a), o
			},
			_drawShape: function() {
				var t = this,
					e = t.get("cash"),
					r = t.addShape(t.__getShapeAttr());
				e.shape = r
			},
			__getShapeAttr: function() {
				var t, r = this,
					n = r.get("point"),
					i = n.x,
					a = n.y,
					s = r.get("shapeType"),
					o = r.get("shapeCfg"),
					l = r.get("distance"),
					u = o.width || 24,
					c = o.height || 24;
				switch (s) {
					case "rect":
						t = e.mix(o, {
							x: i - u / 2,
							y: l > 0 ? a + l : a - c + l,
							width: u,
							height: c
						}), 0 >= l ? r.set("topY", t.y) : r.set("bottomY", t.y + c);
						break;
					case "image":
						t = e.mix(o, {
							x: i - u / 2,
							y: l > 0 ? a + l : a + l - c,
							width: u,
							height: c
						}), 0 >= l ? r.set("topY", t.y) : r.set("bottomY", t.y + c);
						break;
					default:
						s = "circle", t = e.mix(o, {
							cx: i,
							cy: l > 0 ? a + o.r + l : a - o.r + l
						}), 0 >= l ? r.set("topY", t.cy - o.r) : r.set("bottomY", t.cy + o.r)
				}
				return {
					type: s,
					attrs: t
				}
			},
			_drawTitle: function() {
				var t = this,
					e = t.get("cash"),
					r = t.__getTitleAttr();
				if (r) {
					var n = t.addShape("text", t.__getTitleAttr());
					e.title = n
				}
			},
			__getTitleAttr: function() {
				var t = this,
					r = t.get("title"),
					n = t.get("shapeCfg"),
					i = t.get("titleCfg"),
					a = t.get("point"),
					s = a.x,
					o = a.y,
					l = t.get("distance"),
					u = (n.width || 24, n.height || 24);
				if (r) {
					var c = e.mix(i, {
						text: r,
						x: s,
						y: l > 0 ? o + l + u / 2 : o + l - u / 2
					});
					return c
				}
			},
			removeFlag: function() {
				var t = this,
					e = t.get("cash");
				e.line && e.line.remove(), e.shape && e.shape.remove(), e.title && e.title.remove(), t.remove()
			},
			change: function(t) {
				var r = this;
				e.mix(r._attrs, t), r.repaint()
			},
			repaint: function() {
				var t = this,
					e = t.get("cash");
				e.line && e.line.remove(), e.shape && e.shape.remove(), e.title && e.title.remove(), t._drawLine(), t._drawShape(), t._drawTitle()
			},
			changeStackCfg: function(t) {
				var r, n = this,
					i = t.point,
					a = i.y,
					s = t.distance,
					o = t.shapeCfg,
					l = t.shapeType;
				0 >= s ? n.set("bottomY", a) : n.set("topY", a);
				var u = o.height || 24;
				switch (l) {
					case "rect":
						r = e.mix(o, {
							y: s > 0 ? a + s : a - u + s
						}), 0 >= s ? n.set("topY", r.y) : n.set("bottomY", r.y + u);
						break;
					case "image":
						r = e.mix(o, {
							y: s > 0 ? a + s : a + s - u
						}), 0 >= s ? n.set("topY", r.y) : n.set("bottomY", r.y + u);
						break;
					default:
						l = "circle", r = e.mix(o, {
							cy: s > 0 ? a + o.r + s : a - o.r + s
						}), 0 >= s ? n.set("topY", r.cy - o.r) : n.set("bottomY", r.cy + o.r)
				}
			}
		}), t = n
	}(), q = function(t) {
		var e = a,
			r = O.Item,
			n = function(t) {
				n.superclass.constructor.call(this, t)
			};
		return n.ATTRS = {
			riseLine: null,
			fallLine: null,
			riseShape: null,
			fallShape: null,
			points: null,
			singleWidth: null
		}, e.extend(n, r), e.augment(n, {
			renderUI: function() {
				var t = this;
				n.superclass.renderUI.call(t), t._drawCandlestick()
			},
			_drawCandlestick: function() {
				var t = this;
				t._setType(), t._drawLine(), t._drawShape()
			},
			_setType: function() {
				var t = this,
					e = t.get("points"),
					r = e[0],
					n = e[3],
					i = r.value >= n.value ? !1 : !0;
				t.set("isRise", i)
			},
			_drawLine: function() {
				var t = this,
					r = t.get("isRise"),
					n = t.get(r ? "riseLine" : "fallLine"),
					i = t.get("points"),
					a = i[1],
					s = i[2],
					o = e.mix(n, {
						x1: a.x,
						y1: a.y,
						x2: s.x,
						y2: s.y
					}),
					l = t.addShape("line", o);
				t.set("lineShape", l)
			},
			_drawShape: function() {
				var t = this,
					r = t.get("points"),
					n = t.get("isRise"),
					i = t.get(n ? "riseShape" : "fallShape"),
					a = r[0],
					s = r[3],
					o = t.get("singleWidth") || i.width || 20,
					l = e.mix(i, {
						x: a.x - o / 2,
						y: Math.min(a.y, s.y),
						width: o,
						height: Math.max(Math.abs(a.y - s.y), .1)
					}),
					u = t.addShape("rect", l);
				t.set("rectShape", u)
			}
		}), t = n
	}(), W = function(t) {
		var e = a,
			r = O.Item,
			n = D,
			i = 15,
			s = 5,
			o = function(t) {
				o.superclass.constructor.call(this, t)
			};
		return o.ATTRS = {
			zIndex: 8,
			elCls: "x-chart-legend",
			items: null,
			spacingX: s,
			spacingY: s,
			itemCfg: null,
			checkable: !0,
			titleCfg: {
				"text-anchor": "start",
				"font-size": 12,
				y: 10,
				x: 15
			},
			title: null,
			leaveChecked: !0,
			layout: "horizontal",
			dx: 0,
			dy: 0,
			align: "bottom",
			back: {
				stroke: "#909090",
				fill: "#fff"
			}
		}, e.extend(o, r), e.augment(o, {
			renderUI: function() {
				var t = this;
				o.superclass.renderUI.call(t), t._renderTitle(), t._renderItems(), t._renderBorder()
			},
			bindUI: function() {
				o.superclass.bindUI.call(this);
				var t = this;
				t.on("mousemove", function(t) {
					t.stopPropagation ? t.stopPropagation() : window.event.cancelBubble = !0
				}), t._bindOverOut(), t._bindClick()
			},
			_bindOverOut: function() {
				var t = this;
				t.on("mouseover", function(e) {
					var r = t.getItemByNode(e.target);
					r && t.fire("itemover", {
						item: r
					})
				}), t.on("mouseout", function(e) {
					var r = t.getItemByNode(e.target);
					r && t.fire("itemout", {
						item: r
					})
				})
			},
			_bindClick: function() {
				var t = this,
					e = t.get("checkable");
				e && t.on("click", function(r) {
					var n = t.getItemByNode(r.target);
					if (n && (t.fire("itemclick", {
							item: n
						}), e)) {
						var i = n.get("checked");
						if (t.get("leaveChecked") && i && 1 == t._getLeaveCount()) return;
						n.set("checked", !i), i ? t.fire("itemunchecked", {
							item: n
						}) : t.fire("itemchecked", {
							item: n
						})
					}
				})
			},
			getItemByNode: function(t) {
				var r = this,
					n = r.get("itemsGroup"),
					i = n.get("children"),
					a = null;
				return e.each(i, function(e) {
					return e.containsElement(t) ? (a = e, !1) : void 0
				}), a
			},
			_getLeaveCount: function() {
				var t = this,
					r = t.get("itemsGroup"),
					n = r.get("children"),
					i = [];
				return i = e.filter(n, function(t) {
					return t.get("checked")
				}), i.length
			},
			_renderItems: function() {
				var t = this,
					e = t.get("items"),
					r = t.addGroup(),
					n = [];
				t.set("itemsGroups", n), n.push(r), t.set("itemsGroup", r), t._setItems(e)
			},
			_setItems: function(t) {
				var r = this;
				e.each(t, function(t, e) {
					r._addItem(t, e)
				}), t && t.length && (r.resetPosition(), r.resetBorder())
			},
			addItem: function(t) {
				var e = this,
					r = e.get("items");
				e._addItem(t, r.length), e.resetBorder(), e.resetPosition()
			},
			setItems: function(t) {
				for (var e = this, r = e.get("itemsGroups"), n = r.length, i = n - 1; i >= 0; i--) {
					var a = r[i];
					a.remove()
				}
				r = [];
				var a = e.addGroup();
				r.push(a), e.set("itemsGroups", r), e.set("itemsGroup", a), e.set("items", t), e._setItems(t)
			},
			_addItem: function(t, r) {
				var i = this,
					a = i.get("itemsGroup"),
					s = i._getNextX(),
					o = i._getNextY(),
					l = i.get("itemCfg"),
					u = e.mix({
						x: s,
						y: o
					}, t, l);
				u.legend = i;
				var c = a.addGroup(n, u);
				i._checkOverflow(t, r, c)
			},
			_checkOverflow: function(t, r, n) {
				var i = this,
					a = i.get("itemsGroup"),
					s = a.getBBox(),
					o = i.get("plotRange"),
					l = i.get("spacingX"),
					u = i.get("spacingY"),
					c = i.get("itemsGroups");
				if (o) {
					var h = o.tl,
						f = o.br,
						g = f.x - h.x,
						d = f.y - h.y;
					if ("horizontal" == i.get("layout")) {
						if (s.width + l > g) {
							n.remove();
							var p = i.get("borderWidth");
							p ? i.set("borderWidth", Math.max(i._getNextX(), p)) : i.set("borderWidth", i._getNextX());
							var v = i.addGroup();
							i.set("itemsGroup", v), c.push(v), i._addItem(t, r)
						}
					} else {
						var m = i._getTitleHeight();
						if (s.height + u + m > d) {
							n.remove();
							var p = i.get("borderWidth") || 0,
								x = 0;
							e.each(a.get("children"), function(t) {
								var e = t.getBBox();
								x = Math.max(e.width, x)
							}), i.set("borderWidth", p + x); {
								i.get("maxGroupCount") || 0
							}
							i.set("maxGroupCount", 0);
							var v = i.addGroup();
							i.set("itemsGroup", v), c.push(v), i._addItem(t, r)
						}
					}
				}
			},
			_renderTitle: function() {
				var t, r, n = this,
					i = n.get("titleCfg"),
					a = n.get("title");
				a && (r = e.mix({}, i, {
					text: a
				}), t = n.addShape("text", r), n.set("titleShape", t))
			},
			_getTitleHeight: function() {
				var t, e = this,
					r = e.get("titleShape"),
					n = 0;
				return r && (t = r.getBBox(), n = t.height + t.y), n
			},
			_getTitleWidth: function() {
				var t, e = this,
					r = e.get("titleShape"),
					n = 0;
				return r && (t = r.getBBox(), n = t.width + t.x + s), n
			},
			_renderBorder: function() {
				var t, r, n, i, a = this,
					s = a.get("back");
				s && (t = a._getTotalWidth(), r = a._getTotalHeight(), n = e.mix({
					r: 5,
					width: t,
					height: r
				}, s), i = a.addShape("rect", n), i.toBack(), a.set("borderShape", i))
			},
			resetBorder: function() {
				var t = this,
					e = t.get("borderShape");
				e && e.attr({
					width: t._getTotalWidth(),
					height: t._getTotalHeight()
				})
			},
			resetPosition: function() {
				var t = this,
					e = t.get("align"),
					r = t.get("plotRange");
				if (r) {
					var n, i, a = r.tl,
						s = r.br,
						o = t.get("dx"),
						l = t.get("dy"),
						u = t._getTotalWidth();
					switch (e) {
						case "top":
							n = a.x, i = a.y;
							break;
						case "left":
							n = a.x, i = (a.y + s.y) / 2;
							break;
						case "right":
							n = s.x - u, i = (a.y + s.y) / 2;
							break;
						case "bottom":
							n = (a.x + s.x) / 2 - u / 2, i = s.y
					}
					t.move(n + o, i + l)
				}
			},
			_getCount: function() {
				return this.get("itemsGroup").get("children").length
			},
			_getMaxHeight: function() {
				var t = this,
					r = t.get("itemsGroups"),
					n = t.get("spacingY"),
					a = 0;
				return e.each(r, function(t) {
					a = Math.max(t.get("children").length, a)
				}), i * a + n * (a + 1) + t._getTitleHeight()
			},
			_getNextX: function() {
				var t = this,
					r = t.get("layout"),
					n = t.get("spacingX"),
					i = t.get("itemsGroups"),
					a = (i.length, n);
				if ("horizontal" == r) {
					var s = t.get("itemsGroup").get("children");
					return e.each(s, function(t) {
						t.isGroup && (a += t.getWidth() + n)
					}), a
				}
				var o = t.get("borderWidth") || 0;
				return a + o
			},
			_getNextY: function() {
				var t, e = this,
					r = e.get("spacingY"),
					n = e.get("layout"),
					a = e._getCount(),
					s = e._getTitleHeight(),
					o = e.get("itemsGroups"),
					l = o.length;
				return t = "horizontal" == n ? r * l + i * (l - 1) : i * a + r * (a + 1), t + s
			},
			_getTotalWidth: function() {
				var t, r = this,
					n = r.get("spacingX"),
					i = r._getTitleWidth();
				if ("horizontal" == r.get("layout")) {
					var a = r.get("borderWidth");
					t = a || r._getNextX()
				} else {
					var a = r.get("borderWidth") || 0,
						s = r.get("itemsGroup").get("children"),
						o = n;
					e.each(s, function(t) {
						var e = t.getWidth();
						t.isGroup && e > o && (o = e)
					}), t = a + o + 2 * n
				}
				return Math.max(t, i)
			},
			_getTotalHeight: function() {
				var t = this,
					e = (t._getNextY(), t.get("itemsGroups")),
					r = e.length;
				return "horizontal" == t.get("layout") ? i * r + s * (1 + r) + t._getTitleHeight() : t._getMaxHeight()
			}
		}), t = o
	}(), H = function(t) {
		var e = W,
			r = function() {};
		return r.ATTRS = {
			legend: null,
			legendGroup: null
		}, r.prototype = {
			renderLegend: function() {
				var t = this,
					r = t.get("legend"),
					n = t.get("canvas");
				if (r) {
					r.plotRange || (r.plotRange = t.get("plotRange") || t.get("parent").get("plotRange")), r.items = r.items || t.getLengendItems();
					var i = n.addGroup(e, r);
					t.set("legendGroup", i), t._bindLegendEvent()
				}
			},
			getLengendItems: function() {
				return []
			},
			getByLendItem: function(t) {
				return t.get("item")
			},
			addLengendItem: function(t) {
				var e = this,
					r = e.get("legendGroup");
				r && r.addItem(t)
			},
			resetLegendItems: function() {
				var t = this,
					e = t.get("legendGroup"),
					r = t.getLengendItems();
				e.setItems(r)
			},
			_bindLegendEvent: function() {
				var t = this,
					e = t.get("legendGroup");
				e.on("itemover", function(e) {
					var r = e.item,
						n = t.getByLendItem(r);
					t.setActivedItem && t.setActivedItem(n)
				}), e.on("itemout", function(e) {
					var r = e.item,
						n = t.getByLendItem(r);
					t.clearActivedItem && t.clearActivedItem(n)
				}), e.on("itemchecked", function(e) {
					var r = e.item,
						n = t.getByLendItem(r);
					t.showChild(n)
				}), e.on("itemunchecked", function(e) {
					var r = e.item,
						n = t.getByLendItem(r);
					t.hideChild(n)
				})
			},
			removeLegend: function() {
				var t = this,
					e = t.get("legendGroup");
				e && e.remove()
			}
		}, t = r
	}(), X = function(t) {
		var e = G;
		return t = e
	}(), $ = function(t) {
		var e = V;
		return e.ShowLabels = j, t = e
	}(), Z = function(t) {
		var e = U;
		return t = e
	}(), J = function(t) {
		var e = a,
			r = Y,
			n = b.Group,
			i = O.Item,
			s = function(t) {
				s.superclass.constructor.call(this, t)
			};
		return e.extend(s, i), e.mixin(s, [n]), s.ATTRS = {
			elCls: "x-chart-flags",
			zIndex: 6,
			flag: null,
			items: null,
			flagGroups: null
		}, e.augment(s, {
			renderUI: function() {
				var t = this;
				s.superclass.renderUI.call(t), t._drawFlags()
			},
			bindUI: function() {
				var t = this;
				t.on("click", function(e) {
					var r = t.findBy(function(t) {
						return t.containsElement && t.containsElement(e.target)
					});
					t.fire("flagclick", {
						flag: r
					})
				}), t.on("mouseover", function(e) {
					var r = t.findBy(function(t) {
						return t.containsElement && t.containsElement(e.target)
					});
					t.fire("flagover", {
						flag: r
					})
				}), t.on("mouseout", function(e) {
					var r = t.findBy(function(t) {
						return t.containsElement && t.containsElement(e.target)
					});
					t.fire("flagout", {
						flag: r
					})
				})
			},
			_drawFlags: function() {
				var t = this,
					r = t.get("items"),
					n = [];
				e.each(r, function(e) {
					n.push(t._addFlag(e))
				}), t.set("flagGroups", n)
			},
			addFlag: function(t) {
				var e = this,
					r = e.get("flagGroups"),
					n = e.get("items");
				n || (n = [], e.set("items", n)), n.push(t);
				var i = this._addFlag(t);
				return r.push(i), i
			},
			_addFlag: function(t) {
				var n = this,
					i = n.get("flag"),
					a = (n.get("items"), e.mix({}, i, t));
				return n.addGroup(r, a)
			},
			removeAll: function() {
				var t = this,
					r = t.get("flagGroups");
				e.each(r, function(t) {
					t.removeFlag()
				}), t.set("flagGroups", []), t.set("items", [])
			},
			removeByIndex: function(t) {
				var e = this,
					r = e.get("flagGroups"),
					n = e.get("items"),
					i = r[t];
				i && (i.remove(), r.splice(t, 1), n.splice(t, 1))
			},
			change: function(t, r) {
				var n = this,
					i = n.get("items"),
					a = n.get("flagGroups");
				if (r) {
					var s = t.length > a.length ? t : a,
						o = [];
					e.each(s, function(e, r) {
						var s = a[r],
							l = i[r],
							u = t[r];
						if (t.length > a.length && !s) s = n.addFlag(u);
						else if (t.length < a.length && !u) o.push(r);
						else {
							var c = s.get("point"),
								h = c.x,
								f = c.y,
								g = u.point.x,
								d = u.point.y;
							s.animate({
								x: g - h,
								y: d - f
							}, 400, function() {
								s.animate({
									x: 0,
									y: 0
								}), s.change(u)
							}), l = u
						}
					}), e.each(o, function(t, e) {
						n.removeByIndex(e)
					})
				} else n.removeAll(), n.set("items", t), n._drawFlags()
			},
			changeStackCfg: function(t, r) {
				var n = this,
					i = n.get("flag"),
					a = n.get("flagGroups"),
					s = (n.get("items"), e.mix({}, i, r));
				a[t] && a[t].changeStackCfg(s)
			}
		}), t = s
	}(), Q = function(t) {
		var e = a,
			r = q,
			n = b.Group,
			i = O.Item,
			s = function(t) {
				s.superclass.constructor.call(this, t)
			};
		return e.extend(s, i), e.mixin(s, [n]), s.ATTRS = {
			elCls: "x-chart-candlesticks",
			zIndex: 6,
			candlestick: {},
			items: null,
			candlestickGroup: []
		}, e.augment(s, {
			renderUI: function() {
				var t = this;
				s.superclass.renderUI.call(t), t._drawCandlesticks()
			},
			bindUI: function() {
				var t = this;
				t.on("click", function(e) {
					var r = t.findBy(function(t) {
						return t.containsElement && t.containsElement(e.target)
					});
					t.fire("stockclick", {
						candlestick: r
					})
				}), t.on("mouseover", function(e) {
					var r = t.findBy(function(t) {
						return t.containsElement && t.containsElement(e.target)
					});
					t.fire("stockover", {
						candlestick: r
					})
				}), t.on("mouseout", function(e) {
					var r = t.findBy(function(t) {
						return t.containsElement && t.containsElement(e.target)
					});
					t.fire("stockout", {
						candlestick: r
					})
				})
			},
			_drawCandlesticks: function() {
				var t = this,
					r = (t.get("candlestickGroup"), t.get("items"));
				e.each(r, function(e) {
					t._drawSingle(e)
				})
			},
			_drawSingle: function(t) {
				var n = this,
					i = n.get("candlestickGroup"),
					a = n.get("candlestick"),
					s = e.mix({}, a, t),
					o = n.addGroup(r, s);
				return i.push(o), o
			},
			addCandlestick: function(t) {
				var e = this,
					r = e.get("items");
				return r || (r = [], e.set("items", r)), r.push(t), e._drawSingle(t)
			},
			removeAll: function() {
				var t = this,
					r = t.get("candlestickGroup");
				e.each(r, function(t) {
					t.remove()
				}), t.set("candlestickGroup", []), t.set("items", [])
			},
			change: function(t) {
				var e = this;
				e.removeAll(), e.set("items", t), e._drawCandlesticks()
			}
		}), t = s
	}(), K = function(t) {
		var e = W;
		return e.Item = D, e.UseLegend = H, t = e
	}(), te = function(t) {
		var e = O.Item,
			r = z,
			n = a,
			i = $.ShowLabels,
			s = "x-chart-axis",
			o = function(t) {
				o.superclass.constructor.call(this, t)
			};
		return o.ATTRS = {
			ticks: null,
			plotRange: null,
			line: null,
			tickLine: null,
			grid: null,
			labels: null,
			autoPaint: !0,
			animate: !0,
			formatter: null
		}, n.extend(o, e), n.mixin(o, [i]), n.augment(o, {
			beforeRenderUI: function() {
				o.superclass.beforeRenderUI.call(this), this.set("pointCache", [])
			},
			renderUI: function() {
				var t = this;
				o.superclass.renderUI.call(t), t.renderLabels(), t.get("title") && t._renderTitle(), t.get("autoPaint") && t.paint()
			},
			paint: function() {
				var t = this;
				t._drawLines(), t._renderTicks(), t._renderGrid()
			},
			_renderTitle: function() {},
			_renderGrid: function() {
				var t, e = this,
					n = e.get("grid");
				n && (null == n.animate && (n.animate = e.get("animate")), t = e.get("parent").addGroup(r, n), e.set("gridGroup", t))
			},
			isInAxis: function(t, e) {
				var r = this,
					n = r.get("plotRange");
				return n && n.isInRange(t, e)
			},
			getLinePath: function() {},
			getOffsetPoint: function() {},
			getValue: function() {},
			getSnapValue: function(t) {
				var e = this,
					r = e.get("pointCache");
				return n.snapTo(r, t)
			},
			getTicksCount: function() {
				return this.get("ticks").length
			},
			getTickOffsetPoint: function(t) {
				return this.getOffsetPoint(t)
			},
			getOffsetByIndex: function() {},
			_drawLines: function() {
				var t, e = this,
					r = e.get("line"),
					i = e.get("ticks");
				if (r) {
					t = e.getLinePath(), r = n.mix({
						path: t
					}, r);
					var a = e.addShape({
						type: "path",
						elCls: s + "-line",
						attrs: r
					});
					e.set("lineShape", a)
				}
				e._processTicks(i)
			},
			_processTicks: function(t, e) {
				var r = this,
					i = r.get("pointCache"),
					a = r.get("labels");
				t = t || r.get("ticks"), n.each(t, function(t, n) {
					var s = r.getTickOffsetPoint(n),
						o = r.getOffsetPoint(n),
						l = r.getOffsetByIndex(n);
					i.push(l), r.get("tickLine") && r._addTickItem(s, l), r.get("grid") && r._addGridItem(s), a && (e ? a.items.push({
						text: r.formatPoint(t),
						x: o.x,
						y: o.y
					}) : r.addLabel(r.formatPoint(t), o, l))
				})
			},
			_renderTicks: function() {
				var t = this,
					e = t.get("tickItems"),
					r = t.get("tickLine"),
					i = "",
					a = n.mix({}, r);
				if (e) {
					n.each(e, function(t) {
						var e = n.substitute("M{x1} {y1}L{x2} {y2}", t);
						i += e
					}), delete a.value, a.path = i;
					var o = t.addShape({
						type: "path",
						elCls: s + "-ticks",
						attrs: a
					});
					t.set("tickShape", o)
				}
			},
			_addTickItem: function(t, e) {
				var r = this,
					i = r.get("tickItems"),
					a = {
						x1: t.x,
						y1: t.y
					},
					s = r.getTickEnd(a, e);
				i || (i = [], r.set("tickItems", i)), n.mix(a, s), i.push(a)
			},
			getTickEnd: function() {},
			formatPoint: function(t) {
				var e = this,
					r = e.get("formatter");
				return r && (t = r.call(this, t)), t
			},
			_addGridItem: function(t) {
				var e, r = this,
					i = r.get("grid"),
					a = (r.get("plotRange"), {});
				i.items || (i.items = []), e = r.getGridItemCfg(t), n.mix(a, e), i.items.push(a)
			},
			getGridItemCfg: function() {},
			remove: function() {
				{
					var t = this,
						e = t.get("gridGroup");
					t.get("labelsGroup")
				}
				e && e.remove(), t.removeLabels(), o.superclass.remove.call(this)
			}
		}), t = o
	}(), ee = function(t) {
		function e(t, e, r) {
			var n = t.getCenter(),
				a = {};
			return a.x = n.x + e * Math.sin(r * i), a.y = n.y - e * Math.cos(r * i), a
		}
		var r = a,
			n = te,
			i = Math.PI / 180,
			s = function(t) {
				s.superclass.constructor.call(this, t)
			};
		return r.extend(s, n), s.ATTRS = {
			type: "circle",
			startAngle: 0,
			endAngle: 360,
			margin: 20,
			radius: null,
			tickInterval: null,
			grid: {
				line: {
					"stroke-width": 1,
					stroke: "#C0D0E0"
				}
			},
			formatter: function(t) {
				var e = this,
					n = e.get("ticks");
				if (r.isNumber(t)) {
					var i = r.indexOf(n, t);
					if (-1 == i) {
						var a = e.getTickAvgAngle();
						i = parseInt(t / a, 10), t = n[i]
					}
				}
				return t
			}
		}, r.augment(s, {
			beforeRenderUI: function() {
				var t = this;
				s.superclass.beforeRenderUI.call(t);
				var e, r = t.get("tickInterval"),
					n = t.get("ticks"),
					i = t.get("startAngle"),
					a = t.get("endAngle");
				if (r && !n) {
					n = [], e = (a - i) / r;
					for (var o = 0; e > o; o++) n.push(i + r * o);
					t.set("ticks", n)
				}
			},
			getCenter: function() {
				var t = this,
					e = t.get("plotRange");
				return e.cc
			},
			getRadius: function() {
				var t = this,
					e = t.get("radius"),
					r = t.get("plotRange");
				return e || (e = Math.min(r.getWidth(), r.getHeight()) / 2 - t.get("margin"), t.set("radius", e)), e
			},
			getTickAvgAngle: function() {
				var t = this,
					e = t.get("ticks"),
					r = t.get("startAngle"),
					n = t.get("endAngle");
				return (n - r) / e.length
			},
			getLinePath: function() {
				var t = this,
					e = t.getCenter(),
					r = e.x,
					n = e.y,
					i = t.getRadius(),
					a = i;
				return [
					["M", r, n],
					["m", 0, -a],
					["a", i, a, 0, 1, 1, 0, 2 * a],
					["a", i, a, 0, 1, 1, 0, -2 * a],
					["z"]
				]
			},
			getOffsetPoint: function(t) {
				var e = this,
					r = e.getOffsetByIndex(t),
					n = e.getRadius();
				return e.getCirclePoint(r, n)
			},
			getCirclePoint: function(t, r) {
				return null == r && (r = this.getRadius()), e(this, r, t)
			},
			getDistance: function(t, e) {
				var r = this,
					n = r.getCenter();
				return Math.sqrt(Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2))
			},
			getCircleAngle: function(t, e) {
				var r = this,
					n = r.getCenter(),
					i = r.getDistance(t, e),
					a = Math.asin(Math.abs(t - n.x) / i) / Math.PI * 180;
				return t >= n.x && e <= n.y ? a : t >= n.x && e >= n.y ? 180 - a : t <= n.x && e >= n.y ? a + 180 : 360 - a
			},
			getOffsetByIndex: function(t) {
				var e = this,
					r = e.get("ticks"),
					n = r.length,
					i = e.get("startAngle"),
					a = e.get("endAngle");
				return i + (a - i) / n * t
			},
			getValue: function(t) {
				return this.getSnapValue(t)
			},
			getSnapValue: function(t) {
				var e = this,
					n = e.get("pointCache");
				return r.snapFloor(n, t)
			},
			getGridItemCfg: function(t) {
				var e = this,
					r = e.getCenter();
				return {
					x1: r.x,
					y1: r.y,
					x2: t.x,
					y2: t.y
				}
			},
			addLabel: function(t, e, r) {
				var n = this,
					i = n.get("margin"),
					a = n.getRadius();
				e = n.getCirclePoint(r, a + i), s.superclass.addLabel.call(n, t, e)
			},
			getTickEnd: function(t, e) {
				var r = this,
					n = r.getRadius(),
					i = r.get("tickLine"),
					a = i.value,
					s = r.getCirclePoint(e, n + a);
				return {
					x2: s.x,
					y2: s.y
				}
			}
		}), t = s
	}(), re = function(t) {
		var e = a,
			r = O.Item,
			n = $.ShowLabels,
			i = b,
			s = Z,
			o = function(t) {
				o.superclass.constructor.call(this, t)
			};
		return e.extend(o, r), e.mixin(o, [n, i]), o.ATTRS = {
			zIndex: 5,
			markers: null,
			labels: null,
			animate: !1,
			duration: 1e3,
			changeDuration: 400,
			data: [],
			autoPaint: !0,
			enableMouseTracking: !0,
			stickyTracking: !0,
			xField: "x",
			yField: "y",
			itemName: "seriesItem",
			legendType: "rect",
			groupName: "series",
			effectChart: !1
		}, e.augment(o, {
			renderUI: function() {
				var t = this;
				o.superclass.renderUI.call(t), t.processColor(this.get("color")), t.renderLabels(), t.renderMarkers(), t.get("autoPaint") && t.paint()
			},
			bindUI: function() {
				var t = this;
				if (o.superclass.bindUI.call(t), t.get("enableMouseTracking")) {
					t.bindMouseOver();
					var e = t.get("parent");
					t.on("mouseover", function() {
						e.setActivedItem && (e.isItemActived(t) || e.setActivedItem(t))
					})
				}
				t.get("stickyTracking") || t.bindMouseOut()
			},
			changeData: function(t, e) {
				var r = this,
					n = r.get("data"),
					i = r.get("parent");
				t != n && r.set("data", t), e && (r.get("effectChart") && i && i.repaint ? i.repaint() : r.get("visible") && r.repaint()), r.fire("datachange", {
					data: t
				})
			},
			addPoint: function(t, e, r) {
				var n = this,
					i = n.get("data"),
					a = n.get("animate");
				i.push(t), e && i.shift(), a ? (e && r && i.unshift(i[0]), n.changeData(i, r), e && r && setTimeout(function() {
					i.shift(), n.set("points", null), n.shiftPoint(), n.repaint(), n.fire("datachange", {
						data: i
					})
				}, 800)) : n.changeData(i, r)
			},
			shiftPoint: function() {
				var t, e = this,
					r = e.get("markersGroup"),
					n = e.get("labelsGroup"),
					i = e.get("xAxis");
				if (r && (t = r.getChildAt(0), t && t.remove()), n && (t = n.getChildAt(0), t && t.remove()), i) {
					var a = i.get("labelsGroup");
					a && (t = a.getChildAt(0), t && t.remove())
				}
			},
			getData: function() {},
			bindMouseOver: function() {},
			bindMouseOut: function() {},
			onStickyTracking: function() {},
			processColor: function() {},
			getTrackingInfo: function() {},
			getPoints: function() {
				var t = this,
					e = t.get("points");
				return e || (e = t._getPoints(), t.set("points", e)), e
			},
			_getPoints: function() {
				var t = this,
					r = t.get("data"),
					n = t.get("xField"),
					i = t.get("yField"),
					a = [];
				return e.each(r, function(r, s) {
					var o;
					if (e.isObject(r)) {
						var l = r[n],
							u = r[i];
						o = null == l ? t.getPointByIndex(u, s) : t.getPointByValue(l, u), o.obj = r
					} else e.isArray(r) ? (o = t.hasXValueInArray() ? t.getPointByValue(r[0], r[1]) : t.getPointByIndex(r[0], s), o.arr = r) : o = t.getPointByIndex(r, s);
					o.name = o.name || t.get("name"), o.seriesName = t.get("name"), t.processPoint(o, s), a.push(o)
				}), a
			},
			hasXValueInArray: function() {
				return !0
			},
			processPoint: function() {},
			getPointByIndex: function() {},
			getPointByValue: function() {},
			getTipInfo: function(t) {
				return t.value
			},
			findPointByValue: function(t) {
				var r, n, i = this,
					a = i.get("points"),
					s = a[0],
					o = a[a.length - 1];
				return s ? e.isNumber(t) && (t > o.xValue || t < s.xValue) ? null : (e.each(a, function(s, l) {
					return i.snapEqual(s.xValue, t) && null != s.value ? (r = s, !1) : void(e.isNumber(t) && s.xValue < t && (o = s, n = a[l + 1]))
				}), o && n && Math.abs(o.xValue - t) > Math.abs(n.xValue - t) && (o = n), r || o) : null
			},
			snapEqual: function(t, e) {
				return t == e
			},
			draw: function() {},
			paint: function() {
				var t = this,
					e = t.getPoints();
				!t.get("isPaint") && t.get("data").length && (t.set("painting", !0), t.fire("beforepaint"), t.draw(e, function() {
					t.fire("afterpaint")
				}), t.sort(), t.set("isPaint", !0), t.set("painting", !1))
			},
			repaint: function() {
				var t, r = this,
					n = r.get("labels"),
					i = r.get("markers");
				return r.set("points", null), r.get("isPaint") || r.get("painting") ? (r.set("repainting", !0), t = r.getPoints(), n && (n.items = []), i && (i.items = []), r.changeShapes(t), e.each(t, function(t) {
					if (null != t.value) {
						if (n) {
							var e = {};
							e.text = t.value, e.x = t.x, e.y = t.y, n.items.push(e)
						}
						i && i.items.push(t)
					}
				}), r._changeMarkers(), r._changeLabels(), void r.set("repainting", !1)) : void r.paint()
			},
			changeShapes: function() {},
			addMarker: function(t) {
				var r, n = this,
					i = n.get("markersGroup"),
					a = {};
				return i && (a.x = t.x, a.y = t.y, t.obj && t.obj.marker && e.mix(a, t.obj.marker), r = i.addMarker(a), r.set("point", t)), r
			},
			renderMarkers: function() {
				var t, r = this,
					n = r.get("markers");
				if (n) {
					var i = e.mix({}, n);
					null == i.animate && (i.animate = r.get("animate")), i.invert = r.get("invert"), t = r.addGroup(s, i), r.set("markersGroup", t)
				}
			},
			_changeMarkers: function() {
				var t, r = this,
					n = r.get("markers");
				if (n) {
					t = r.get("markersGroup"), t.change(n.items);
					var i = t.get("children");
					e.each(i, function(t, e) {
						t.set("point", n.items[e])
					})
				}
			},
			_changeLabels: function() {
				this.resetLabels()
			},
			removeMarkers: function() {
				var t = this,
					e = t.get("markersGroup");
				e && e.remove()
			},
			setActiveStatus: function() {},
			remove: function() {
				var t = this;
				t.removeMarkers(), t.removeLabels(), o.superclass.remove.call(this)
			}
		}), t = o
	}(), ne = function(t) {
		function e(t) {
			return i.isNumber(t) ? t : (i.isString(t) ? (t = t.replace(/'-'/gi, "/"), t = new Date(t).getTime()) : i.isDate(t) && (t = t.getTime()), t)
		}

		function r(t) {
			r.superclass.constructor.call(this, t)
		}
		var n = re,
			i = a;
		return r.ATTRS = {
			pointInterval: null,
			pointStart: 0,
			xAxis: null,
			yAxis: null,
			effectChart: !0,
			invert: !1,
			pointsCache: {}
		}, i.extend(r, n), i.augment(r, {
			getXName: function() {
				var t = this,
					e = t.get("xName");
				return e || (e = t.get("invert") ? "y" : "x", t.set("xName", e)), e
			},
			getYName: function() {
				var t = this,
					e = t.get("yName");
				return e || (e = t.get("invert") ? "x" : "y", t.set("yName", e)), e
			},
			getPoint: function(t, r) {
				var n = this,
					a = n.get("xAxis"),
					s = n.get("yAxis"),
					o = n.parseYValue(r),
					l = n.getXName(),
					u = n.getYName(),
					c = {};
				return "time" == a.get("type") && (t = e(t)), n.isInCircle() ? c = s.getPointByAngle(t, o) : (c[l] = a.getOffset(t), c[u] = s.getOffset(o)), i.mix(c, {
					yValue: o,
					xValue: t,
					value: r
				}), c
			},
			changeData: function(t, e) {
				this.set("pointsCache", {}), r.superclass.changeData.call(this, t, e)
			},
			hasXValueInArray: function() {
				var t = this,
					e = t.get("xAxis"),
					r = e.get("type");
				return ("number" != r && "time" != r || !t.get("pointInterval")) && ("category" != r || e.get("autoTicks")) ? !0 : !1
			},
			getPointByValue: function(t, e) {
				return this.getPoint(t, e)
			},
			parseYValue: function(t) {
				return t
			},
			animateClip: function(t, e) {
				if (i.svg) {
					var r = this,
						n = r.get("canvas"),
						a = r.get("invert"),
						s = n.get("width"),
						o = r.get("duration"),
						l = n.get("height"),
						u = a ? "0,0," + s + ",0" : "0,0,0," + l;
					r.attr("clip-rect", u), t && t(), r.animate({
						"clip-rect": "0,0," + s + "," + l
					}, o, function() {
						e && e(), r.attr("clip-rect", "")
					})
				} else e && e()
			},
			snapEqual: function(t, e) {
				var r = this;
				if (i.isString(t)) return t == e;
				var n = r.get("pointInterval");
				return n ? Math.abs(t - e) < n / 2 : t == e
			},
			isInCircle: function() {
				return "circle" == this.get("xAxis").get("type")
			},
			getCircleCenter: function() {
				var t = this,
					e = t.get("xAxis"),
					r = null;
				return "circle" == e.get("type") && (r = e.getCenter()), r
			},
			getCircle: function() {
				return this.isInCircle() ? this.get("xAxis") : null
			},
			getData: function(t) {
				var e = this,
					r = e.get("data"),
					n = e.get("pointsCache"),
					a = e.get("xAxis"),
					s = (r[0], []),
					o = e.get("pointStart");
				if (t = t || "yAxis", n[t]) return n[t];
				if ("xAxis" != t || null == o || "time" == a.get("type") && 0 == o || !e.get("pointInterval")) {
					var l = e.get("xField"),
						u = e.get("yField");
					i.each(r, function(e) {
						if (i.isNumber(e) || i.isString(e)) s.push(e);
						else if (i.isArray(e)) {
							var r = "yAxis" == t ? e[1] : e[0];
							s.push(r)
						} else if (e) {
							var r = "yAxis" == t ? e[u] : e[l];
							s.push(r)
						}
					})
				} else {
					var c = e.get("pointInterval"),
						h = r.length - 1 == 0 ? 1 : r.length - 1;
					s.push(o), s.push(o + h * c)
				}
				return n[t] = s, s
			},
			getPointByIndex: function(t, e) {
				var r, n, a = this,
					s = a.get("xAxis"),
					o = a.get("yAxis"),
					l = a.getXName(),
					u = a.getYName(),
					c = a.parseYValue(t, e),
					h = o.getOffset(c),
					f = {};
				if ("number" == s.get("type") || "time" == s.get("type")) {
					var g = a.get("pointStart"),
						d = a.get("pointInterval");
					r = s.getOffset(g + d * e)
				} else r = s.getOffsetByIndex(e);
				return a.isInCircle() ? a.getPoint(r, t) : (n = s.getValue(r), d && (n = i.tryFixed(n, d)), f[l] = r, f[u] = h, i.mix(f, {
					xValue: n,
					yValue: c,
					value: t
				}))
			},
			getTrackingInfo: function(t) {
				var e, r = this,
					n = r.get("xAxis"),
					i = r.getXName();
				if (r.isInCircle()) {
					var a = n.getCircleAngle(t.x, t.y);
					e = n.getValue(a)
				} else e = n.getValue(t[i]);
				return r.findPointByValue(e)
			},
			getBaseValue: function() {
				var t = this,
					e = t.get("yAxis"),
					r = e.getOffset(0) || e.getStartOffset();
				return r
			}
		}), t = r
	}(), ie = function(t) {
		function e(t, e, r) {
			t && !t[e] && (t[e] = r)
		}

		function r(t) {
			r.superclass.constructor.call(this, t)
		}
		var n = ne,
			i = a;
		return i.extend(r, n), r.ATTRS = {
			type: "line",
			elCls: "x-chart-line-series",
			connectNulls: !1,
			line: null,
			lineActived: null,
			tolerance: 20,
			smooth: !1,
			legendType: "line"
		}, i.augment(r, {
			processColor: function() {
				var t = this,
					r = t.get("color");
				if (r) {
					var n = t.get("line"),
						i = t.get("markers");
					e(n, "stroke", r), i && !/http/.test(i.marker.symbol) && (e(i.marker, "stroke", r), e(i.marker, "fill", r))
				}
			},
			onStickyTracking: function(t) {
				var e = this,
					r = t.point,
					n = e.get("markersGroup"),
					i = e.getSnapMarker(r);
				n && n.setActivedItem(i)
			},
			changeShapes: function(t, e) {
				t = t || this.getPoints();
				var r = this,
					n = r.get("lineShape"),
					a = r.get("trackerShape"),
					s = r.points2path(t);
				if (null == e && (e = r.get("animate")), a) {
					var o = r.points2tracker(t);
					a.attr("path", o)
				}
				if (n)
					if (e) {
						if (i.svg && r.get("smooth")) {
							var l = n.getPath();
							n.attr("path", s), s = n.attr("path"), n.attr("path", l)
						}
						i.animPath(n, s)
					} else n.attr("path", s)
			},
			draw: function(t, e) {
				function r() {
					l = s.points2path(t), s.drawInner(t), a = s._createLine(l), i.each(t, function(t) {
						s._drawPoint(t)
					})
				}

				function n() {
					e && e()
				}
				var a, s = this,
					o = s.get("animate"),
					l = (s.get("duration"), "");
				if (o && i.svg)
					if (s.isInCircle()) {
						var u = s.getCircle(),
							c = u.getCenter(),
							h = s.getBaseValue(),
							f = [];
						i.each(t, function() {
							var t = i.mix({
								value: h
							}, c);
							f.push(t)
						}), s.drawInner(f), a = s._createLine(l), s.circleAnimate(t, a), n()
					} else s.animateClip(r, n);
				else r(), n();
				s.drawTracker(t)
			},
			circleAnimate: function(t, e) {
				var r, n = this,
					a = n.getCircle(),
					s = a.getCenter(),
					o = [],
					l = n.getBaseValue();
				i.each(t, function() {
					var t = i.mix({
						value: l
					}, s);
					o.push(t), n._drawPoint(t)
				}), r = n.points2path(o), e.attr("path", r), n.repaint()
			},
			drawInner: function() {},
			_drawPoint: function(t) {
				var e = this;
				null != t.value && (e.get("markers") && !e.get("markersGroup").get("single") && e.addMarker(t), e.get("labels") && e.addLabel(t.value, t))
			},
			_createLine: function(t) {
				var e = this,
					r = e.get("line"),
					n = i.mix({}, r);
				return n.path = t, lineShape = e.addShape("path", n), e.set("lineShape", lineShape), lineShape
			},
			drawTracker: function(t) {
				var e, r = this,
					n = r.get("line"),
					a = r.get("tolerance"),
					s = r.points2tracker(t),
					o = i.mix({}, n),
					l = Number(n["stroke-width"]);
				o["stroke-width"] = l + a, o["stroke-opacity"] = .001, o.path = s, e = r.addShape("path", o), r.set("trackerShape", e)
			},
			points2path: function(t) {
				if (!t.length) return "";
				var e, r, n = this,
					a = n.get("smooth"),
					s = n.get("connectNulls"),
					o = "";
				t.length <= 2 && (a = !1);
				var l = n.get("smoothProtect");
				return window.top.__ACharts__smoothProtect = l ? !0 : !1, i.each(t, function(t) {
					if (null == t.value) {
						if (s) return;
						r = ""
					} else r = null == e || null == e.value ? a ? "M{x} {y} R" : "M{x} {y}" : a ? " {x} {y}" : "L{x} {y}";
					o += i.substitute(r, t), e = t
				}), n.isInCircle() && (o += "z"), o
			},
			points2tracker: function(t) {
				if (!t.length) return "";
				var e = this,
					r = e.get("tolerance"),
					n = (t[0], "M" + (t[0].x - r) + " " + (t[0].y || 0));
				return i.each(t, function(t) {
					if (null != t.value) {
						var e = "L{x} {y}";
						n += i.substitute(e, t)
					}
				}), e.isInCircle() && (n += "z"), n
			},
			setActiveStatus: function(t) {
				var e = this,
					r = e.get("line"),
					n = e.get("lineShape"),
					i = e.get("lineActived");
				if (t) i && n.attr(i);
				else {
					r && n.attr(r);
					var a = e.get("markersGroup");
					a && a.clearActivedItem()
				}
			},
			getSnapMarker: function(t) {
				var e = this,
					r = e.get("markersGroup"),
					n = e.getXName(),
					i = null;
				if (r)
					if (e.isInCircle()) {
						var a = e.getTrackingInfo(t);
						i = r.getSnapMarker(a)
					} else i = r.getSnapMarker(t[n]);
				return i
			}
		}), t = r
	}(), ae = function(t) {
		function e(t) {
			t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
		}
		var r = re,
			n = a,
			i = function() {};
		return i.ATTRS = {
			item: void 0,
			group: null,
			allowPointSelect: !1,
			cancelSelect: !0
		}, n.extend(i, r), n.augment(i, {
			addItem: function(t, e) {
				var r, n = this,
					i = n.get("group");
				if (null != t.value) {
					null == e && (e = n.getItems().length), i || (i = n.addGroup(), n.set("group", i)), r = n.getItemCfg(t, e), r.path = n.get("animate") ? n.pointToFactorPath(t, 0) : n.pointToPath(t);
					var a = i.addShape("path", r);
					return a.isSeriesItem = !0, a.set("point", t), a
				}
			},
			bindItemClick: function() {
				var t = this,
					e = t.get("cancelSelect");
				t.on("click", function(r) {
					var n, i = r.target,
						a = i.shape;
					a && a.isSeriesItem && (t.get("allowPointSelect") && (n = a.get("selected"), e && n ? t.clearSelected(a) : t.setSelected(a)), t.fire("itemclick", {
						item: a,
						point: a.get("point")
					}), t.fireUpGroup("click", a))
				})
			},
			setSelected: function(t) {
				var e = this;
				e.isSelected(t) || (e.clearSelected(), e.setItemSelected(t, !0), e.onSelected(t))
			},
			changePoints: function(t) {
				var e = this,
					r = e.getItems(),
					i = e.get("animate");
				t = t || e.getPoints(), n.each(r, function(r, n) {
					var a, s, o = t[n];
					o && r.get("visible") && (a = r.get("point"), r.set("point", o), r.set("prePoint", a), i ? e.animateItem(r, a) : (s = e.pointToPath(o), r.attr("path", s)), o.obj && o.obj.attrs && r.attr(o.obj.attrs))
				});
				for (var a = t.length, s = r.length, o = r[r.length - 1], l = s; a > l; l++) {
					var u = e.addItem(t[l], l);
					s > 1 && i && e.animateItem(u, o.get("prePoint"))
				}
				for (var l = s - 1; l >= a; l--) {
					var c = r[l];
					e.removeItem(c)
				}
			},
			onSelected: function(t) {
				this.fire("itemselected", {
					item: t,
					point: t.get("point")
				}), this.fireUpGroup("selected", t)
			},
			onUnSelected: function(t) {
				this.fire("itemunselected", {
					item: t,
					point: t.get("point")
				}), this.fireUpGroup("unselected", t)
			},
			clearSelected: function(t) {
				var e = this;
				t = t || e.getSelected(), t && (e.setItemSelected(t, !1), e.onUnSelected(t))
			},
			setItemSelected: function() {},
			isSelected: function(t) {
				return t && t.get("selected")
			},
			getSelected: function() {
				var t, e = this,
					r = e.getItems();
				return n.each(r, function(r) {
					return e.isSelected(r) ? (t = r, !1) : void 0
				}), t
			},
			getItemCfg: function(t) {
				var e = this,
					r = e.get("item"),
					i = t.obj,
					a = {};
				return n.mix(a, r), i && i.attrs && n.mix(a, i.attrs), a
			},
			getItems: function() {
				var t = this.get("group");
				return t ? t.get("children") : []
			},
			animateItems: function(t) {
				var e = this,
					r = e.getItems();
				n.animStep(e.get("duration"), function(t) {
					n.each(r, function(r) {
						var n = r.get("point"),
							i = e.pointToFactorPath(n, t);
						r.attr("path", i)
					})
				}, t)
			},
			animateItem: function(t) {
				var e = this,
					r = t.get("point"),
					n = e.pointToPath(r);
				t.animate({
					path: n
				}, e.get("changeDuration"))
			},
			removeItem: function(t) {
				var e = this,
					r = t.get("animHadler");
				e.removeLabel(t), r && n.stopStep(r), t.remove()
			},
			removeLabel: function(t) {
				var r = t.get("label");
				r && e(r)
			},
			pointToFactorPath: function() {},
			pointToPath: function(t) {
				return this.pointToFactorPath(t, 1)
			}
		}), t = i
	}(), se = function(t) {
		function e(t, e, r) {
			t && !t[e] && (t[e] = r)
		}

		function r(t, e, r, n) {
			return n ? t + r + " " + e : t + e + " " + r
		}

		function n(t, e) {
			if (e) {
				var r = t[1];
				t[1] = t[2], t[2] = r
			}
			return t
		}
		var i = ie,
			s = a,
			o = d,
			l = /^M.*(M).*$/,
			u = function(t) {
				u.superclass.constructor.call(this, t)
			};
		return u.ATTRS = {
			elCls: "x-chart-area-series",
			area: {
				stroke: "",
				"fill-opacity": "0.70"
			}
		}, s.extend(u, i), s.mixin(u, [o]), s.augment(u, {
			processColor: function() {
				u.superclass.processColor.call(this);
				var t = this,
					r = t.get("color"),
					n = t.get("area");
				e(n, "fill", r)
			},
			renderUI: function() {
				u.superclass.renderUI.call(this);
				var t = this,
					e = t.get("canvas"),
					r = t.get("markersGroup");
				t.on("afterpaint", function() {
					r && t.isStacked() && e.get("node").appendChild(r.get("node"))
				})
			},
			hide: function() {
				u.superclass.hide.call(this);
				var t = this,
					e = t.get("markersGroup");
				e && e.hide()
			},
			show: function() {
				u.superclass.show.call(this);
				var t = this,
					e = t.get("markersGroup");
				e && e.show()
			},
			drawInner: function(t) {
				var e = this,
					r = e.get("areaShape");
				if (r) {
					var n = e._getAreaPath(t);
					r.attr("path", n)
				} else e.drawArea(t)
			},
			_getAreaPath: function(t) {
				var e, r = this,
					n = r.get("stackType");
				return e = n && "none" != n ? r.points2StackArea(t) : r.points2area(t)
			},
			changeShapes: function() {
				u.superclass.changeShapes.call(this);
				var t = this,
					e = t.get("areaShape"),
					r = t.getPoints(),
					n = t._getAreaPath(r);
				t.get("animate") ? s.animPath(e, n) : e.attr("path", n)
			},
			drawArea: function(t) {
				var e, r = this,
					n = r.get("area"),
					i = r.isStacked() ? r.points2StackArea(t) : r.points2area(t),
					a = s.mix({
						path: i
					}, n);
				e = r.addShape("path", a), r.set("areaShape", e)
			},
			processPoint: function(t, e) {
				var r = this,
					n = r.get("stackType");
				n && "none" != n && r.processStackedPoint(t, e)
			},
			points2StackArea: function(t) {
				{
					var e, n, i = this,
						a = t.length,
						s = i.getBaseValue(),
						o = t[0],
						l = t[a - 1],
						u = i.isInCircle(),
						c = "",
						h = i.get("invert"),
						f = i.getXName();
					i.getYName()
				}
				if (a) {
					if (n = i.getVisiblePrev(), e = i.points2path(t), c = e, n) {
						var g = n.getPoints().slice(0, t.length),
							d = g[0],
							p = i.points2path(g.reverse());
						p = p.replace("M", "L"), c = u ? e + "L" + d.x + " " + d.y + p : e + p
					} else u || (c = r("M ", o[f], s, h) + e.replace("M", "L"), c = c + r("L ", l[f], s, h) + "");
					c && !u && (c += "z")
				}
				return c
			},
			_getFirstPoint: function(t) {
				var e = null;
				return s.each(t, function(t) {
					return null != t.value ? (e = t, !1) : void 0
				}), e
			},
			_getLastPoint: function(t) {
				for (var e = null, r = t.length - 1; r >= 0; r--) {
					var n = t[r];
					if (null != n.value) {
						e = n;
						break
					}
				}
				return e
			},
			points2area: function(t) {
				var e, i = this,
					a = t.length,
					o = i.getBaseValue(),
					u = i._getFirstPoint(t) || t[0],
					c = i._getLastPoint(t) || t[a - 1],
					h = i.isInCircle(),
					f = i.get("invert"),
					g = i.getXName(),
					d = (i.getYName(), "");
				if (a)
					if (e = i.points2path(t), h) {
						{
							i.getCircleCenter()
						}
						d = e
					} else if (d = r("M", u[g], o, f), d += e.replace("M", "L"), l.test(d)) {
					d = s.parsePathString(d);
					var p = [],
						v = d[0];
					s.each(d, function(t, e) {
						if (0 !== e && "M" == t[0]) {
							var r = [],
								i = [],
								a = [],
								s = d[e - 1];
							r[0] = "L", r[1] = s[1], r[2] = o, i[0] = "L", i[1] = v[1], i[2] = o, a[0] = "M", a[1] = t[1], a[2] = o, "R" == s[0] ? (s[0] = "L", t[0] = "R") : t[0] = "L", p.push(n(r, f)), p.push(n(i, f)), p.push(n(a, f)), v = t
						}
						p.push(n(t))
					}), d = p, d.push(n(["L", c.x, o], f)), s.svg && d.push(["Z"])
				} else d = d + r("L", c[g], o, f) + "z";
				return d
			}
		}), t = u
	}(), oe = function(t) {
		function e(t, e) {
			if (c.isNumber(e)) return e;
			var r = i(t),
				a = n(e),
				s = r.getWidth();
			return r.tl.x + s * a
		}

		function r(t, e) {
			if (c.isNumber(e)) return e;
			var r = i(t),
				a = n(e),
				s = r.getHeight();
			return r.tl.y + s * a
		}

		function n(t) {
			return .01 * parseFloat(t)
		}

		function i(t) {
			return t.get("parent").get("plotRange")
		}

		function s(t, e, r, n, i, a) {
			var s = Math.acos((n - e) / n) / Math.PI * 180,
				o = a ? r - 180 + s : r - s;
			t.orignAngle = t.angle, t.angle = o, t.orignX = t.x, t.orignY = t.y, t.x = i.x + (n + 5) * Math.cos(t.angle * g), t.y = i.y + (n + 5) * Math.sin(t.angle * g)
		}

		function o(t, e, r, n, i, a) {
			var o = parseInt(2 * e / a, 10),
				l = t.y + e,
				u = t.y - e;
			o < r.length && r.splice(o, r.length - o);
			for (var c, h, f, g = 0, d = r.length, p = 0, v = 0; d > v; v++) {
				var m = r[v],
					x = (m.angle, m.y);
				if (h = d - v, c = i > 0 ? (l - x) / h : (x - u) / h, v > 0 && (p = i > 0 ? (x - u) / v : (l - x) / v), g = v, a > c) {
					0 != g && (g = v + 1);
					break
				}
				p > 0 && a > p && (f = v)
			}
			if (f)
				for (var v = 0; f >= v; v++) {
					var y = v * a;
					s(r[v], y, n, e, t, !0, a)
				}
			if (d - 1 > g) {
				var b = 0 == g ? 0 : g - 1,
					_ = r[b],
					x = _.y,
					w = i > 0 ? l : u;
				h = d - b - 1, c = Math.abs(w - x) / h, a > c && (c = a);
				for (var v = d - 1; v >= b; v--) {
					var y = (d - 1 - v) * c;
					s(r[v], y, n, e, t)
				}
				for (var k = i > 0 ? u : l, C = !1, v = b - 1; v > 0; v--) {
					var S = r[v];
					if (!C && Math.abs(k - S.y) / (v + 1) < a && (C = !0), C) {
						var y = Math.abs(r[v + 1].y - w) + a;
						s(r[v], y, n, e, t)
					}
				}
			}
		}
		var l = ae,
			u = b.Group,
			c = a,
			h = K,
			f = re,
			g = Math.PI / 180,
			d = 5,
			p = function(t) {
				p.superclass.constructor.call(this, t)
			};
		return p.ATTRS = {
			size: "80%",
			innerSize: null,
			center: ["50%", "50%"],
			colors: null,
			colorHighlight: 0,
			radius: null,
			innerRadius: null,
			startAngle: -90,
			endAngle: 270,
			labelHeight: 16,
			labelLine: !0,
			item: {
				stroke: "#fff"
			},
			visibleCache: {},
			borderCircle: null,
			cancelSelect: !0,
			xField: "name",
			stickyTracking: !1,
			animate: !0,
			duration: 1e3
		}, c.extend(p, f), c.mixin(p, [l, u, h.UseLegend]), c.augment(p, {
			draw: function(t) {
				function e() {
					r && n.setSelected(r)
				}
				var r, n = this;
				c.each(t, function(t, e) {
					n.formatPoint(t, e);
					var i = n.addItem(t, e);
					t.obj && t.obj.selected && (r = i)
				}), n.get("animate") ? n.animateItems(e) : e(), n.get("borderCircle") && n.drawBorderCircle(), n.get("labelsGroup") && (n.processLabels(t), n.get("labelsGroup").toFront()), this.get("legedGroup") || this.renderLegend()
			},
			drawBorderCircle: function() {
				var t = this,
					e = t.getCenter(),
					r = t.get("borderCircle"),
					n = r.distance || 10,
					i = t.get("radius"),
					a = t.get("innerRadius"),
					s = c.mix({
						cx: e.x,
						cy: e.y,
						r: i + n
					}, r);
				if (t.addShape("circle", s), a && a - n > 0) {
					var s = c.mix({
						cx: e.x,
						cy: e.y,
						r: a - n
					}, r);
					t.addShape("circle", s)
				}
			},
			changeShapes: function(t) {
				var e = this;
				t = t || e.getPoints(), c.each(t, function(t, r) {
					e.formatPoint(t, r)
				}), this.clearSelected(), e.changePoints(t)
			},
			repaint: function() {
				var t = this;
				p.superclass.repaint.call(this), t.get("legend") && t.resetLegendItems()
			},
			processLabels: function(t) {
				var e = this,
					r = e.get("labelsGroup"),
					n = r.get("distance"),
					i = [],
					a = e.getCenter(),
					s = e.getRadius(),
					l = s + n,
					u = e.get("startAngle"),
					h = (e.get("endAngle"), e.get("labelHeight")),
					f = e.get("labelLine"),
					g = [];
				if (c.each(t, function(t) {
						if (t.visible) {
							var a = e._getLabelCfg(t, n, l);
							0 > n ? r.addLabel(a) : a.factor > 0 ? g.push(a) : i.push(a)
						}
					}), i.length) {
					var d;
					d = u >= -90 ? 270 : -90, o(a, l, i, d, -1, h), c.each(i, function(t) {
						r.addLabel(t), f && e.lineToLabel(t, s, n)
					})
				}
				g.length && (o(a, l, g, 90, 1, h), c.each(g, function(t) {
					r.addLabel(t), f && e.lineToLabel(t, s, n)
				}))
			},
			getLengendItems: function() {
				var t = this,
					e = t.getItems(),
					r = t.get("legendType") || "rect",
					n = [];
				return c.each(e, function(t) {
					var e = {
						name: t.get("point").xValue,
						color: t.attr("fill"),
						type: r,
						item: t
					};
					n.push(e)
				}), n
			},
			resetLabels: function() {
				var t = this,
					e = t.get("labelsGroup"),
					r = t.get("lineGroup");
				e && (e.clear(), r && r.clear(), t.processLabels(t.getPoints()))
			},
			lineToLabel: function(t, e, r) {
				var n, i = this,
					a = t.orignAngle || t.angle,
					s = i.getCenter(),
					o = i._getOffset(a, e + d / 2),
					l = i.get("labelHeight"),
					u = i.get("lineGroup"),
					c = [];
				if (-90 == t.angle && (r -= l / 2), c.push(["M", s.x + o.x, s.y + o.y]), null != t.orignX) {
					n = i._getOffset(a, e + r / 2);
					var h = -90 == t.angle ? t.y + l / 2 : t.y;
					c.push(["R", s.x + n.x, s.y + n.y, t.x, h])
				} else c.push(["L", t.x, t.y]);
				u || (u = i.addGroup({
					elCls: "x-line-group"
				}), i.set("lineGroup", u)), u.addShape("path", {
					path: c,
					fill: null,
					stroke: t.color
				})
			},
			bindUI: function() {
				p.superclass.bindUI.call(this), this.bindItemClick()
			},
			bindMouseOver: function() {
				var t = this;
				t.on("mouseover", function(e) {
					var r = e.target,
						n = r.shape;
					n && t.setActivedItem(n)
				})
			},
			_getLabelCfg: function(t, e, r) {
				var n = this,
					i = t.startAngle + (t.endAngle - t.startAngle) / 2,
					a = n.getCenter(),
					s = a.x + (r + d) * Math.cos(i * g),
					o = a.y + (r + d) * Math.sin(i * g),
					l = {},
					u = 1;
				return l.x = s, l.y = o, 0 > e ? i > -90 && 90 >= i ? (l["text-anchor"] = "end", l.rotate = i) : (l["text-anchor"] = "start", l.rotate = i - 180) : i > -90 && 90 >= i ? (l["text-anchor"] = "start", u = 1) : (u = -1, l["text-anchor"] = "end"), l.factor = u, l.angle = i, l.color = t.color, l.point = t, l.text = t.xValue, l
			},
			getActiveItems: function() {
				return this.getItems()
			},
			isPlaceHolder: function(t) {
				var e = t.get("point");
				return e && e.obj && e.obj.placeHolder
			},
			setItemActived: function(t, e) {
				var r = this,
					n = t.getCfgAttr("attrs").fill || t.getCfgAttr("attrs").color;
				r.isPlaceHolder(t) || (e ? (t.attr({
					fill: c.highlight(n, .1)
				}), t.set("actived", !0)) : (t.attr({
					fill: n
				}), t.set("actived", !1)))
			},
			getTrackingInfo: function() {
				var t = this,
					e = t.getActived();
				return e && e.get("point")
			},
			isItemActived: function(t) {
				return t.get("actived")
			},
			getRadius: function() {
				var t = this,
					e = t.get("radius");
				return e || (e = t.calculateRadius(t.get("size")), t.set("radius", e)), e
			},
			getInnerRadius: function() {
				var t = this,
					e = t.get("innerRadius"),
					r = t.get("innerSize");
				return !e && r && (e = t.calculateRadius(r), t.set("innerRadius", e)), e
			},
			calculateRadius: function(t) {
				var e = this,
					r = e.get("parent").get("plotRange"),
					i = n(t);
				return Math.min(r.getWidth(), r.getHeight()) / 2 * i
			},
			getCenter: function() {
				var t, n = this,
					i = n.get("centerPoint");
				return i || (i = {}, t = n.get("center"), i.x = e(n, t[0]), i.y = r(n, t[1]), n.set("centerPoint", i)), i
			},
			getItemCfg: function(t) {
				var e = this,
					r = e.get("item"),
					n = t.obj,
					i = {};
				return c.mix(i, r), n && n.attrs && c.mix(i, n.attrs), i.fill = t.color, e.get("allowPointSelect") && (i.cursor = "pointer"), i
			},
			_getColor: function(t) {
				var e, r = this,
					n = r.get("colors"),
					i = r.get("colorHighlight");
				return t %= n.length, e = n[t], i && (e = c.highlight(i)), e
			},
			formatPoint: function(t, e) {
				var r = this,
					n = r.getVisiblePoints(),
					i = !1;
				if (t.index = e, c.each(n, function(e) {
						(t.index == e.index || t == e) && (i = !0)
					}), t.visible = i, i) {
					var a = r._getPiePercent(t, n),
						s = r.get("startAngle"),
						o = r.get("endAngle"),
						l = o - s;
					t.percent = a.percent, t.obj && t.obj.attrs && (t.color = t.obj.attrs.fill), t.color = t.color || r._getColor(e), t.prePercent = a.prePercent, t.startAngle = s + l * a.prePercent, t.endAngle = s + l * (t.prePercent + t.percent)
				}
			},
			getPointByValue: function(t, e) {
				return {
					xValue: t,
					value: e
				}
			},
			_getPiePercent: function(t, e) {
				var r = 0,
					n = 0,
					i = null,
					a = {};
				return c.each(e, function(e, r) {
					(t.index == e.index || t == e) && (i = r)
				}), c.each(e, function(t, e) {
					i > e && (n += t.value), r += t.value
				}), a.percent = t.value / r, a.prePercent = n / r, a
			},
			getVisiblePoints: function() {
				var t, e = this,
					r = [],
					n = e.getItems();
				return !e.get("isPaint") || 0 == n.length || e.get("repainting") ? e.getPoints() : (t = e.get("visiblePoints")) ? t : (c.each(n, function(t) {
					t.get("visible") && r.push(t.get("point"))
				}), e.set("visiblePoints", r), r)
			},
			animateItem: function(t, e) {
				var r = this,
					n = t.get("point"),
					i = n.startAngle,
					a = n.endAngle,
					s = e == t.get("prePoint"),
					o = s ? e.startAngle : e.endAngle,
					l = s ? e.endAngle : e.endAngle,
					u = t.get("animHadler");
				u && c.stopStep(u), u = c.animStep(r.get("changeDuration"), function(e) {
					var n, u, c;
					if (s ? (u = o + (i - o) * e, c = l + (a - l) * e) : (u = o - (o - i) * e, c = l - (l - a) * e), n = r._getPiePath(u, c), t.attr("path", n), r.isSelected(t)) {
						var h = r._getOffset(u, c, 10);
						t.attr("transform", "t" + h.x + " " + h.y)
					}
				}), t.set("animHadler", u)
			},
			pointToFactorPath: function(t, e) {
				var r, n, i = this,
					a = i.get("startAngle");
				return r = t.startAngle, n = t.endAngle, i._getPiePath(a + (r - a) * e, a + (n - a) * e)
			},
			_getPiePath: function(t, e) {
				var r, n = this,
					i = n.getCenter(),
					a = i.x,
					s = i.y,
					o = n.getRadius(),
					l = n.getInnerRadius(),
					u = a + o * Math.cos(t * g),
					c = a + o * Math.cos(e * g),
					h = s + o * Math.sin(t * g),
					f = s + o * Math.sin(e * g);
				if (l) {
					var d = a + l * Math.cos(t * g),
						p = a + l * Math.cos(e * g),
						v = s + l * Math.sin(t * g),
						m = s + l * Math.sin(e * g);
					r = [], e - t == 360 ? (r.push(["M", a, s - o]), r.push(["a", o, o, 0, 1, 1, 0, 2 * o]), r.push(["a", o, o, 0, 1, 1, 0, -2 * o]), r.push(["M", a, s - l]), r.push(["a", l, l, 0, 1, 0, 0, 2 * l]), r.push(["a", l, l, 0, 1, 0, 0, -2 * l]), r.push(["z"])) : (r.push(["M", d, v]), r.push(["L", u, h]), r.push(["A", o, o, 0, +(e - t > 180), 1, c, f]), r.push(["L", p, m]), r.push(["A", l, l, 0, +(e - t > 180), 0, d, v]), r.push(["z"]))
				} else r = e - t == 360 ? [
					["M", a, s - o],
					["a", o, o, 0, 1, 1, 0, 2 * o],
					["a", o, o, 0, 1, 1, 0, -2 * o],
					["z"]
				] : ["M", a, s, "L", u, h, "A", o, o, 0, +(e - t > 180), 1, c, f, "z"];
				return r
			},
			_getOffset: function(t, e, r) {
				var n, i = {};
				return null == r ? (n = t, r = e) : n = t + (e - t) / 2, i.x = r * Math.cos(n * g), i.y = r * Math.sin(n * g), i
			},
			setItemSelected: function(t, e) {
				var r, n = this,
					i = t.get("point"),
					a = n.get("changeDuration");
				e ? (r = n._getOffset(i.startAngle, i.endAngle, 10), t.animate({
					transform: "t" + r.x + " " + r.y
				}, a)) : t.animate({
					transform: "t0 0"
				}, a), t.set("selected", e)
			},
			_onVisibleChange: function() {
				var t = this;
				t.set("points", null), this.set("visiblePoints", null), this.changeShapes(), t.resetLabels()
			},
			showChild: function(t) {
				p.superclass.showChild.call(this, t), this._onVisibleChange()
			},
			hideChild: function(t) {
				p.superclass.hideChild.call(this, t), this._onVisibleChange()
			},
			remove: function() {
				this.removeLegend(), p.superclass.remove.call(this)
			}
		}), t = p
	}(), le = function(t) {
		var e = J;
		return t = e
	}(), ue = function(t) {
		var e = Q;
		return t = e
	}(), ce = function(t) {
		function e(t) {
			e.superclass.constructor.call(this, t)
		}
		var r = te,
			n = a,
			i = "x-chart-axis";
		return e.ATTRS = {
			zIndex: 4,
			x: null,
			y: null,
			start: null,
			end: null,
			tickOffset: 0,
			elCls: i,
			position: "bottom",
			line: {
				"stroke-width": 1,
				stroke: "#C0D0E0"
			},
			tickLine: {
				"stroke-width": 1,
				stroke: "#C0D0E0",
				value: 5
			}
		}, n.extend(e, r), n.augment(e, {
			beforeRenderUI: function() {
				var t, r = this;
				if (e.superclass.beforeRenderUI.call(r), t = r.get("plotRange")) {
					var n = r.getRangeInfo();
					r.set("start", n.start), r.set("end", n.end), r.set("orthoEnd", r._getOrthoEnd())
				}
				r.set("indexCache", {}), r.set("pointCache", [])
			},
			getRangeInfo: function() {
				var t = this,
					e = t.get("plotRange"),
					r = {};
				if (e) {
					var n = e.start,
						i = t.get("position"),
						a = {};
					t.isVertical() ? "left" == i ? (a.y = e.end.y, a.x = n.x) : (n = {}, a = e.end, n.x = e.end.x, n.y = e.start.y) : "top" == i ? (n = {}, n.x = e.start.x, n.y = e.end.y, a = e.end) : (a.x = e.end.x, a.y = n.y), r.start = n, r.end = a
				}
				return r
			},
			change: function(t) {
				var e = this;
				e.isChange(t.ticks) && (e.fire("beforechange", {
					info: t
				}), e._resetRange(), e._clearTicksInfo(), e.changeInfo(t), e._processTicks(null, !0), e._changeLine(), e._changeTicks(), e._changeGrid(), e.resetLabels(), e.fire("afterchange"))
			},
			_resetRange: function() {
				var t = this,
					e = t.getRangeInfo();
				t.set("start", e.start), t.set("end", e.end), t.set("orthoEnd", t._getOrthoEnd())
			},
			isRangeChange: function() {
				var t = this,
					e = t.getRangeInfo(),
					r = t.get("start"),
					n = t.get("end");
				return e.start.x != r.x || e.start.y != r.y || e.end.x != n.x || e.end.y != n.y ? !0 : t.get("orthoEnd") !== t._getOrthoEnd() ? !0 : !1
			},
			isChange: function(t) {
				var e = this,
					r = e.get("ticks");
				return e.isRangeChange() || !n.equalsArray(t, r)
			},
			changeInfo: function(t) {
				var e = this;
				e.set("ticks", t.ticks)
			},
			_clearTicksInfo: function() {
				var t = this,
					e = t.get("grid"),
					r = t.get("labels");
				t.set("pointCache", []), t.set("indexCache", []), t.set("tickItems", []), e && (e.items = []), r && (r.items = [])
			},
			paint: function() {
				var t = this;
				t.fire("beforepaint"), t._drawLines(), t._renderTicks(), t._renderGrid(), t.fire("afterpaint")
			},
			_changeLine: function() {
				var t, e = this,
					r = e.get("lineShape");
				r && (t = e.getLinePath(), r.attr("path", t))
			},
			isVertical: function() {
				var t, e = this,
					r = e.get("isVertical");
				return null != r ? r : (t = e.get("position"), r = "bottom" == t || "top" == t ? !1 : !0, e.set("isVertical", r), r)
			},
			getOffset: function(t) {
				var e = this,
					r = e.get("ticks"),
					i = n.indexOf(r, t);
				return e.getOffsetByIndex(i)
			},
			getStartOffset: function() {
				return this._getStartCoord()
			},
			getEndOffset: function() {
				return this._getEndCoord()
			},
			getValue: function(t) {
				var e = this,
					r = e._getStartCoord(),
					n = e._getEndCoord();
				return r > t || t > n ? 0 / 0 : e.parseOffsetValue(t)
			},
			getStartValue: function() {
				var t = this,
					e = t.get("ticks");
				return e[0]
			},
			getEndValue: function() {
				var t = this,
					e = t.get("ticks");
				return e[e.length - 1]
			},
			getSnapIndex: function(t) {
				var e = this,
					r = e.get("pointCache"),
					i = [].concat(r).sort(function(t, e) {
						return t - e
					}),
					a = n.snapTo(i, t);
				return n.indexOf(r, a)
			},
			_appendEndOffset: function(t) {
				var e, r = this,
					n = r.get("tickOffset");
				return "number" != typeof n && (n = n[0]), n && (e = r._getDirectFactor(), 0 == t ? t += n * e : e > 0 ? t += n : t -= n), t
			},
			getOffsetByIndex: function(t) {
				var e = this,
					r = e._getLength(),
					n = e.get("ticks"),
					i = n.length,
					a = r / (i - 1) * t;
				return e._appendEndOffset(a) + e._getStartCoord()
			},
			getOffsetPoint: function(t, e) {
				var r = this,
					n = r._getOrthoCoord(),
					i = r.get("indexCache");
				return e || (void 0 !== i[t] ? e = i[t] : (e = r.getOffsetByIndex(t), i[t] = e)), r.isVertical() ? {
					x: n,
					y: e
				} : {
					x: e,
					y: n
				}
			},
			getTickOffsetPoint: function(t) {
				return this.getOffsetPoint(t)
			},
			_getStartCoord: function() {
				var t = this,
					e = t.get("start");
				return t.isVertical() ? e.y : e.x
			},
			_getOrthoCoord: function() {
				var t = this,
					e = t.get("start");
				return t.isVertical() ? e.x : e.y
			},
			_getEndCoord: function() {
				var t = this,
					e = t.get("end");
				return t.isVertical() ? e.y : e.x
			},
			_getOrthoEnd: function() {
				var t, e = this,
					r = e.get("plotRange");
				return t = e.isVertical() ? r.end.x : r.end.y
			},
			_getMiddleCoord: function() {
				var t = this,
					e = t._getStartCoord(),
					r = t._getLength();
				return e + t._appendEndOffset(r / 2)
			},
			getLength: function() {
				return Math.abs(this._getLength())
			},
			getTickAvgLength: function() {
				var t = this,
					e = t.get("ticks");
				return t.getLength() / (e.length - 1)
			},
			_getLength: function() {
				var t, e = this,
					r = e.get("start"),
					n = e.get("tickOffset"),
					i = e.get("end");
				return n = "number" != typeof n ? n[0] + n[1] : 2 * n, t = e.isVertical() ? i.y - r.y : i.x - r.x, t > 0 ? t -= n : t += n, t
			},
			getLinePath: function() {
				var t = this,
					e = t.get("start"),
					r = t.get("end"),
					n = [];
				return n.push(["M", e.x, e.y]), n.push(["L", r.x, r.y]), n
			},
			getTickEnd: function(t) {
				var e = this,
					r = e.get("tickLine"),
					n = e._getAlignFactor(),
					i = r.value,
					a = {};
				return e.isVertical() ? (a.x2 = t.x1 + i * n, a.y2 = t.y1) : (a.x2 = t.x1, a.y2 = t.y1 + i * n), a
			},
			_changeTicks: function() {
				var t = this,
					e = t.get("tickShape"),
					r = t.get("tickItems"),
					i = "";
				return e ? (n.each(r, function(t) {
					var e = n.substitute("M{x1} {y1}L{x2} {y2}", t);
					i += e
				}), void(t.get("animate") ? n.animPath(e, i, 2) : e.attr("path", i))) : void(r && r.length && t._renderTicks())
			},
			_getDirectFactor: function() {
				var t, e, r, n = this,
					i = n.get("directfactor");
				return i ? i : (i = 1, t = n.get("position"), e = n.get("start"), r = n.get("end"), "bottom" == t || "top" == t ? e.x > r.x && (i = -1) : e.y > r.y && (i = -1), n.set("directfactor", i), i)
			},
			_getAlignFactor: function() {
				var t, e = this,
					r = e.get("factor");
				return r ? r : (t = e.get("position"), r = "bottom" == t || "right" == t ? 1 : -1, e.set("factor", r), r)
			},
			_renderTitle: function() {
				var t = this,
					e = t.get("title"),
					r = t._getMiddleCoord(),
					a = t.getOffsetPoint(null, r),
					s = n.mix({}, e);
				e.text && (s.x = a.x + (e.x || 0), s.y = a.y + (e.y || 0), t.addShape({
					type: "label",
					elCls: i + "-title",
					attrs: s
				}))
			},
			getGridItemCfg: function(t) {
				var e = this,
					r = {},
					n = e.get("plotRange");
				return r.x1 = t.x, r.y1 = t.y, e.isVertical() ? (r.y2 = r.y1, r.x2 = n.end.x) : (r.x2 = r.x1, r.y2 = n.end.y), r
			},
			_changeGrid: function() {
				var t, e = this,
					r = e.get("grid");
				r && (t = e.get("gridGroup"), t && t.change(r.items))
			},
			remove: function() {
				{
					var t = this,
						r = t.get("gridGroup");
					t.get("labelsGroup")
				}
				r && r.remove(), t.removeLabels(), e.superclass.remove.call(this)
			}
		}), t = e
	}(), he = function(t) {
		function e(t) {
			e.superclass.constructor.call(this, t)
		}
		var r = a,
			n = ce;
		return r.extend(e, n), e.ATTRS = {
			categories: null,
			type: "category",
			tickAlignCenter: !0
		}, r.augment(e, {
			beforeRenderUI: function() {
				var t = this;
				if (e.superclass.beforeRenderUI.call(t), t.get("ticks")) {
					if (!t.get("categories")) {
						var r = [];
						r.concat(t.get("ticks")), t.set("categories", r)
					}
				} else {
					var r = t.get("categories"),
						n = [];
					n = n.concat(r), t.get("tickAlignCenter") && " " != n[n.length - 1] && n.push(" "), t.set("ticks", n)
				}
			},
			changeInfo: function(t) {
				var e = this,
					n = t.ticks;
				n ? t.categories || (t.categories = [].concat(t.ticks), r.remove(t.categories, " ")) : (n = [].concat(t.categories), e.get("tickAlignCenter") && n.length && " " != n[n.length - 1] && n.push(" ")), e.set("categories", t.categories), e.set("ticks", n)
			},
			getOffsetByIndex: function(t) {
				return this._getOffsetByTicks(t)
			},
			getValue: function(t) {
				var e, r = this,
					n = r.get("ticks"),
					i = r.get("categories"),
					a = r.get("pointCache");
				if (i.length <= n.length) e = r.getSnapIndex(t);
				else {
					var s = a[0],
						o = t - s,
						l = r.get("tickAlignCenter") ? i.length + 1 : i.length,
						u = r._getAvgLength(l);
					e = Math.round(o / u)
				}
				return i[e]
			},
			getOffset: function(t) {
				var e = this,
					n = e.get("categories"),
					i = r.indexOf(n, t);
				return e._getOffsetByCategories(i)
			},
			_getOffsetByIndex: function(t, e) {
				var r = this,
					n = r._getAvgLength(e),
					i = n * t;
				return r.get("tickAlignCenter") && (i += n / 2), r._appendEndOffset(i) + r._getStartCoord()
			},
			_getOffsetByCategories: function(t) {
				var e = this,
					r = e.get("categories"),
					n = e.get("tickAlignCenter") ? r.length + 1 : r.length;
				return e._getOffsetByIndex(t, n)
			},
			_getOffsetByTicks: function(t) {
				var e = this,
					n = e.get("ticks"),
					i = e.get("categories"),
					a = n[t],
					s = r.indexOf(i, a);
				return -1 != s ? e._getOffsetByCategories(s) : e._getOffsetByIndex(t)
			},
			_getAvgLength: function(t) {
				var e = this,
					r = e._getLength(),
					t = t || e.get("ticks").length,
					n = r / (t - 1);
				return n
			},
			getTickOffsetPoint: function(t) {
				var e = this,
					r = e._getOrthoCoord(),
					n = e._getAvgLength(),
					i = e.getOffsetByIndex(t);
				return e.get("tickAlignCenter") && (i -= n / 2), e.isVertical() ? {
					x: r,
					y: i
				} : {
					x: i,
					y: r
				}
			}
		}), t = e
	}(), fe = function(t) {
		function e(t, e, r) {
			var n = Math.min(t, e),
				i = Math.max(t, e);
			return (r >= n || 2 > n - r) && (i >= r || 2 > r - i)
		}

		function r(t) {
			r.superclass.constructor.call(this, t)
		}
		var n = ce,
			i = a,
			s = ["k", "m", "g", "t"],
			o = 0 / 0,
			l = i.snapFloor,
			u = i.snapCeiling;
		return i.extend(r, n), r.ATTRS = {
			min: null,
			max: null,
			tickInterval: null,
			autoOffset: !1,
			autoAppend: 5,
			type: "number",
			formatter: function(t) {
				if (null == t || isNaN(t)) return "";
				if (1e3 > t) return t;
				var e = this.get("tickInterval");
				if (e % 1e3 !== 0) return t;
				for (var r = 1e3, n = 1; n <= s.length; n++) {
					if (t >= r && 1e3 * r > t) return t / r + s[n - 1];
					r = 1e3 * r
				}
				return t / 1e12 + "t"
			}
		}, i.augment(r, {
			beforeRenderUI: function() {
				var t = this;
				r.superclass.beforeRenderUI.call(t);
				var e = t.get("ticks");
				t.get("autoOffset") && e && t._setAutoOffset({
					ticks: e,
					min: t.get("min"),
					max: t.get("max")
				}), e || (e = t._getTicks(t.get("max"), t.get("min"), t.get("tickInterval")), t.set("ticks", e))
			},
			_getTicks: function(t, e, r) {
				var n, i = [],
					a = (t - e) / r;
				if (!(t > e) || isNaN(t) || null == t || isNaN(e) || null == e || isNaN(r) || null == r) return [];
				i.push(e);
				for (var s = 1; a >= s; s++) n = r * s + e, i.push(n);
				return i
			},
			changeInfo: function(t) {
				var e = this;
				if (t.interval && (t.tickInterval = t.interval), e.get("autoOffset") && e._setAutoOffset(t), t.ticks) e.set("ticks", t.ticks);
				else {
					var r = e._getTicks(t.max, t.min, t.tickInterval);
					e.set("ticks", r)
				}
				e.set("tickInterval", t.tickInterval)
			},
			_setAutoOffset: function(t) {
				var e, r = this,
					n = t.ticks,
					i = 0,
					a = 0,
					s = [],
					o = r.get("autoAppend"),
					l = r.getEndOffset() - r.getStartOffset();
				if (null != t.min && t.min > n[0]) {
					for (; t.min > n[1];) n.shift();
					i = (n[1] - t.min) / (n[1] - n[0]), .8 > i ? n.shift() : i = 0
				}
				var u = n.length;
				if (null != t.max && t.max < n[u - 1]) {
					for (; t.max < n[u - 2];) n.pop(), u = n.length;
					a = (t.max - n[u - 2]) / (n[u - 1] - n[u - 2]), n.pop()
				}
				e = l / (n.length - 1 + i + a), s[0] = e * i + o, s[1] = e * a + o, r.set("tickOffset", s)
			},
			getOffset: function(t) {
				t = parseFloat(t);
				var r = this,
					n = r.getRelativeOffset(t),
					i = r._getStartCoord(),
					a = r._getEndCoord();
				return n = r._appendEndOffset(n) + r._getStartCoord(), e(i, a, n) ? n : o
			},
			getValue: function(t) {
				var e, r, n, a, s, o, c, h, f = this,
					g = f._getStartCoord(),
					d = f._getEndCoord(),
					p = f.isVertical();
				e = f.get("pointCache");
				var v = Math.max(g, d),
					m = Math.min(g, d);
				if (m > t || t > v) return 0 / 0;
				var x = e.slice(0).sort(function(t, e) {
					return t - e
				});
				if (r = p ? u(x, t) : l(x, t), isNaN(r) && (r = x[0], o = x[1]), a = r, n = i.indexOf(e, r), s = n, h = f.get("ticks"), c = f.get("tickInterval"), avg = f._getAvgLength(h.length), r == t) return h[n];
				if (c) return h[n] + (t - a) / avg * c;
				if (null == o && (o = u(x, t), isNaN(o))) {
					var y = x.length;
					n = y - 2, s = y - 1, a = x[y - 1]
				}
				return h[s] + (t - a) / avg * (h[n + 1] - h[n])
			},
			_getAvgLength: function(t) {
				var e = this,
					r = e._getLength();
				return r / (t - 1)
			},
			getRelativeOffset: function(t) {
				var e, r, n, a, s = this,
					o = s.get("ticks"),
					c = i.indexOf(o, t),
					h = s.get("tickInterval"),
					f = o.length,
					g = s._getAvgLength(o.length);
				return -1 !== c ? g * c : (e = l(o, t), r = u(o, t), n = e, isNaN(e) ? (e = o[0], r = o[1], n = e, a = 0) : (c = i.indexOf(o, e), a = g * c), isNaN(r) && (e = o[f - 2], r = o[f - 1], n = r, a = g * (f - 1)), a += h ? (t - n) / h * g : (t - n) / (r - e) * g)
			}
		}), t = r
	}(), ge = function(t) {
		function e(t) {
			if (t instanceof Date) return t.getTime();
			if (r.isNumber(t)) return t;
			var e = t;
			return r.isString(t) && (e = t.replace("-", "/"), e = new Date(e).getTime()), e
		}
		var r = a,
			n = fe,
			i = function(t) {
				i.superclass.constructor.call(this, t)
			};
		return i.ATTRS = {
			type: "time",
			startDate: null,
			autoOffset: !0,
			endDate: null
		}, r.extend(i, n), r.augment(i, {
			beforeRenderUI: function() {
				var t = this,
					r = e(t.get("startDate")),
					n = e(t.get("endDate"));
				r && !t.get("min") && t.set("min", r), n && !t.get("max") && t.set("max", n), i.superclass.beforeRenderUI.call(t)
			}
		}), t = i
	}(), de = function(t) {
		var e = a,
			r = he,
			n = function(t) {
				n.superclass.constructor.call(this, t)
			};
		return n.ATTRS = {
			type: "timeCategory",
			tickAlignCenter: !1
		}, e.extend(n, r), t = n
	}(), pe = function(t) {
		var e = a,
			r = he,
			n = function(t) {
				n.superclass.constructor.call(this, t)
			};
		return n.ATTRS = {
			type: "numberCategory",
			tickAlignCenter: !1
		}, e.extend(n, r), t = n
	}(), ve = function(t) {
		var e = a,
			r = fe,
			n = function(t) {
				n.superclass.constructor.call(this, t)
			};
		return n.ATTRS = {
			circle: null,
			position: "left",
			type: "radius"
		}, e.extend(n, r), e.augment(n, {
			beforeRenderUI: function() {
				n.superclass.beforeRenderUI.call(this);
				var t = this,
					e = t.get("circle");
				e && (t.set("start", e.getCenter()), t.set("end", e.getCirclePoint(0)))
			},
			getGridItemCfg: function(t) {
				for (var e = this, r = {}, n = [], i = e.get("circle"), a = i.getCenter(), s = i.getTicksCount(), o = Math.abs(t.y - a.y), l = 0; s > l; l++) {
					var u = i.getOffsetByIndex(l),
						c = i.getCirclePoint(u, o);
					n.push(c)
				}
				return r.points = n, r.r = o, r.center = a, r
			},
			getPointByAngle: function(t, e) {
				var r = this,
					n = r.get("circle"),
					i = n.getCenter(),
					a = r.getOffset(e);
				return n.getCirclePoint(t, Math.abs(a - i.y))
			},
			_resetRange: function() {},
			isRangeChange: function() {
				return !1
			},
			getValueByPoint: function(t, e) {
				var r = this,
					n = r.get("circle"),
					i = n.getCenter(),
					a = n.getDistance(t, e);
				return r.getValue(i.y - a)
			}
		}), t = n
	}(), me = function(t) {
		function e(t, e) {
			var r = Raphael.color(t),
				n = r.l * (1 + e);
			return Raphael.hsl2rgb(r.h, r.s, n).hex
		}

		function r(t, e, r, n, i) {
			var a, s = i.getCenter(),
				o = s.x,
				l = s.y,
				u = i.getCirclePoint(t, r),
				c = i.getCirclePoint(e, r);
			if (n) {
				var h = i.getCirclePoint(t, n),
					f = i.getCirclePoint(e, n);
				a = [], a.push(["M", h.x, h.y]), a.push(["L", u.x, u.y]), a.push(["A", r, r, 0, +(e - t > 180), 1, c.x, c.y]), a.push(["L", f.x, f.y]), a.push(["A", n, n, 0, +(e - t > 180), 0, h.x, h.y]), a.push(["z"])
			} else a = ["M", o, l, "L", u.x, u.y, "A", r, r, 0, +(e - t > 180), 1, c.x, c.y, "z"];
			return a
		}
		var n = a,
			i = ne,
			s = b.Group,
			o = d,
			l = ae,
			u = function(t) {
				u.superclass.constructor.call(this, t)
			};
		return u.ATTRS = {
			type: "column",
			elCls: "x-chart-column",
			columnWidth: null,
			autoWidth: !0,
			columnOffset: 0,
			cancelSelect: !1,
			stackPadding: 1,
			animate: !0,
			duration: 1e3,
			columnActive: !0,
			item: {
				stroke: "none",
				"stroke-width": 1,
				"fill-opacity": .75
			}
		}, n.extend(u, i), n.mixin(u, [l, s, o]), n.augment(u, {
			processColor: function() {
				var t = this,
					e = t.get("color");
				if (e) {
					var r = t.get("item");
					r.fill || (r.fill = e)
				}
			},
			bindUI: function() {
				u.superclass.bindUI.call(this), this.bindItemClick()
			},
			draw: function(t) {
				var e = this;
				e.resetWidth(), n.each(t, function(t, r) {
					e._drawPoint(t, r)
				}), e.get("animate") && e.animateItems(), e.sort()
			},
			_drawPoint: function(t, e) {
				var r = this,
					n = r.addItem(t, e);
				if (r.get("labels")) {
					var i = r.addLabel(t.value, t);
					n.set("label", i)
				}
			},
			addPoint: function(t, e, r) {
				var n = this,
					i = n.get("data");
				i.push(t), e && (i.shift(), r && n.shiftPoint()), n.changeData(i, r)
			},
			shiftPoint: function() {
				var t = this,
					e = t.getItems()[0];
				e && e.remove(), u.superclass.shiftPoint.call(this)
			},
			resetWidth: function() {
				if (this.get("autoWidth")) {
					if (this.isInCircle()) return void this.resetCircleWidth();
					var t, e, r, n, i = this,
						a = (i.get("xAxis"), i._getAvgLength()),
						s = 10,
						o = i._getIndexInfo();
					e = o.count, t = o.curIndex, r = a / 2 / e, s = .5 * r, n = .5 * (a - e * r - (e - 1) * s) + ((t + 1) * r + t * s) - .5 * r - .5 * a, i.set("columnWidth", r), i.set("columnOffset", n)
				}
			},
			_getAvgLength: function() {
				var t, e = this,
					r = e.get("xAxis"),
					n = r.get("type"),
					i = e.get("data");
				if ("time" != n && "number" != n && "timeCategory" != n) t = r.getTickAvgLength();
				else {
					var a = r.getLength();
					t = a / i.length
				}
				return t
			},
			_getIndexInfo: function() {
				var t, e, r = this,
					i = r.get("parent"),
					a = i.getSeries ? i.getSeries() : i.get("children"),
					s = [];
				return r.isStacked() ? (e = 1, t = 0) : (n.each(a, function(t) {
					t.get("visible") && "column" == t.get("type") && s.push(t)
				}), e = s.length, t = n.indexOf(s, r)), {
					curIndex: t,
					count: e
				}
			},
			resetCircleWidth: function() {
				var t, e, r, n, i = this,
					a = i.get("xAxis"),
					s = a.getTickAvgAngle();
				info = i._getIndexInfo(), e = info.count, t = info.curIndex, r = s / e, n = t * r, i.set("columnWidth", r), i.set("columnOffset", n)
			},
			changeShapes: function(t) {
				var e = this;
				e.resetWidth(), e.changePoints(t)
			},
			getActiveItems: function() {
				return this.getItems()
			},
			isItemActived: function(t) {
				return t.get("actived")
			},
			setItemActived: function(t, r) {
				var n = this,
					i = t.getCfgAttr("attrs").fill;
				n.get("columnActive") && (r ? (t.attr("fill", e(i, .2)), t.set("actived", !0)) : (t.attr("fill", i), t.set("actived", !1)))
			},
			setItemSelected: function(t, e) {
				var r = t.getCfgAttr("attrs"),
					i = r.fill,
					a = r.stroke,
					s = r["stroke-width"];
				e ? (t.attr({
					stroke: n.dark(i, .3),
					"stroke-width": 2
				}), t.set("selected", !0)) : (t.attr({
					stroke: a,
					"stroke-width": s
				}), t.set("selected", !1))
			},
			onStickyTracking: function(t) {
				var e = this,
					r = e.getTrackingInfo(t.point),
					i = e.getItems();
				r && n.each(i, function(t) {
					t.get("point").x == r.x && t.get("point").y == r.y && e.setActivedItem(t)
				})
			},
			pointToFactorPath: function(t, e) {
				var n, i, a = this,
					s = (a.get("item"), a.get("columnWidth")),
					o = a.get("columnOffset"),
					l = a.getXName(),
					u = a.getYName(),
					c = a.get("invert"),
					h = c ? "h" : "v",
					f = c ? "v" : "h",
					g = 0,
					d = a.getBaseValue(),
					p = a.isInCircle(),
					v = [];
				if (p) {
					var m = a.get("xAxis"),
						x = t.xValue,
						y = o + x,
						b = o + x + s,
						_ = t.r || m.getDistance(t.x, t.y),
						w = t.ir || 0;
					_ *= e, w *= e, v = r(y, b, _, w, m)
				} else {
					a.isStacked() && t.lowY ? (i = t.lowY, g = a.get("stackPadding")) : i = d, i -= g, n = t[u] - i;
					var k = t[l] + o - s / 2,
						C = d + (i - d) * e;
					v.push(c ? ["M", C, k] : ["M", k, C]), v.push([h, n * e]), v.push([f, s]), v.push([h, -1 * n * e]), v.push(["z"])
				}
				return v
			},
			processPoint: function(t, e) {
				var r = this,
					n = r.get("stackType");
				n && "none" != n && r.processStackedPoint(t, e)
			}
		}), t = u
	}(), xe = function(t) {
		var e = ce;
		return e.Category = he, e.Number = fe, e.Time = ge, e.TimeCategory = de, e.NumberCategory = pe, e.Auto = g, e.Circle = ee, e.Radius = ve, t = e
	}(), ye = function(t) {
		var e = re;
		return e.Cartesian = ne, e.Line = ie, e.Column = me, e.Area = se, e.Pie = oe, e.Stacked = d, e.ItemGroup = ae, t = e
	}(), be = function(t) {
		var e = ye,
			r = a,
			n = function(t) {
				n.superclass.constructor.call(this, t)
			};
		return r.extend(n, e.Cartesian), n.ATTRS = {
			elCls: "x-chart-arearange-series",
			connectNulls: !1,
			area: {},
			line: {},
			lineActived: {},
			areaActived: {}
		}, r.augment(n, {
			processColor: function(t) {
				var e = this,
					r = e.get("line"),
					n = e.get("area");
				r.stroke || (r.stroke = t), n.fill || (n.fill = t)
			},
			draw: function(t, e) {
				var r = this;
				r.get("animate") ? r.animateClip(function() {
					r._drawArea(t), r._drawLine(t)
				}, e) : (r._drawArea(t), r._drawLine(t))
			},
			getTipInfo: function(t) {
				return t.lowValue + " ~ " + t.highValue
			},
			getData: function(t) {
				var e = this,
					n = e.get("data"),
					i = [];
				return "xAxis" == t ? i = r.map(n, function(t) {
					return t[0]
				}) : r.each(n, function(t) {
					var e = t.slice(1, 3);
					i.push(Math.max.apply(null, e)), i.push(Math.min.apply(null, e))
				}), i
			},
			processPoint: function(t) {
				var e = this,
					r = t.arr,
					n = r.length,
					i = e.get("yAxis");
				return t.lowY = t.y, t.lowValue = r[n - 2], t.highY = i.getOffset(r[n - 1]), t.highValue = r[n - 1], t
			},
			_drawLine: function(t) {
				var e = this,
					n = e.get("line"),
					i = r.mix({}, n);
				i.path = e.point2path(t), lineShape = e.addShape("path", i), e.set("lineShape", lineShape)
			},
			_drawArea: function(t) {
				var e = this,
					n = e.get("area"),
					i = r.mix({}, n);
				i.path = e.point2Area(t);
				var a = e.addShape("path", i);
				e.set("areaShape", a)
			},
			_getFirstPoint: function(t) {
				var e = null;
				return r.each(t, function(t, r) {
					return null != t.value ? (e = t, e.index = r, !1) : void 0
				}), e
			},
			_getLastPoint: function(t) {
				for (var e = null, r = t.length - 1; r >= 0; r--) {
					var n = t[r];
					if (null != n.value) {
						e = n, e.index = r;
						break
					}
				}
				return e
			},
			_getNextPoint: function(t, e) {
				for (var r = null, n = e; n < t.length; n++) {
					var i = t[n];
					if (null != i.value) {
						r = i, r.index = n;
						break
					}
				}
				return r
			},
			getLinePath: function(t) {
				for (var e = this, n = e.get("connectNulls"), i = t.length, a = (e._getFirstPoint(t) || t[0], e._getLastPoint(t) || t[i - 1], {
						lowPath: [],
						highPath: []
					}), s = [], o = [], l = 0; i > l; l++) {
					var u = t[l];
					null != u.value && s.push(l)
				}
				var c, h;
				if (r.each(s, function(t, e) {
						0 == e ? h = t : c + 1 != t ? (o.push({
							startIndex: h,
							endIndex: c
						}), h = t, e == s.length - 1 && o.push({
							startIndex: t,
							endIndex: t
						})) : e == s.length - 1 && o.push({
							startIndex: h,
							endIndex: s[e]
						}), c = t
					}), r.each(o, function(e) {
						var r = [],
							n = [],
							i = e.startIndex,
							s = e.endIndex;
						r.push(["M", t[i].x, t[i].highY]), i == s && r.push(["L", t[s].x, t[s].highY]);
						for (var o = i + 1; s >= o; o++) {
							var e = ["L", t[o].x, t[o].highY];
							r.push(e)
						}
						n.push(["M", t[s].x, t[s].lowY]), i == s && n.push(["L", t[s].x, t[s].highY]);
						for (var o = s - 1; o >= i; o--) {
							var e = ["L", t[o].x, t[o].lowY];
							n.push(e)
						}
						a.highPath.push(r), a.lowPath.push(n)
					}), n) {
					for (var f = [], g = [], d = a.highPath.length, p = 0; d > p; p++) {
						var v = a.highPath[p],
							m = a.lowPath[d - p - 1];
						p > 0 && (v[0][0] = "L", m[0][0] = "L");
						for (var x = 0; x < v.length; x++) f.push(v[x]);
						for (var x = 0; x < m.length; x++) g.push(m[x])
					}
					a = {
						lowPath: [g],
						highPath: [f]
					}
				}
				return a
			},
			point2path: function(t) {
				var e = this,
					n = (e.get("connectNulls"), e.getLinePath(t)),
					i = [],
					a = [],
					s = [];
				return r.each(n.highPath, function(t) {
					a = a.concat(t)
				}), r.each(n.lowPath, function(t) {
					s = s.concat(t)
				}), i = a.concat(s)
			},
			point2Area: function(t) {
				var e = this,
					n = e.getLinePath(t),
					i = [],
					a = [];
				return r.each(n.lowPath, function(t, e) {
					var r = n.highPath[e],
						a = [];
					t[0][0] = "L", a = r.concat(t), a.push(["z"]), i.push(a)
				}), a = i.join()
			},
			changeShapes: function(t) {
				var e = this,
					n = e.get("lineShape"),
					i = e.get("areaShape"),
					a = e.point2path(t),
					s = e.point2Area(t);
				e.get("animate") ? (r.animPath(i, s), r.animPath(n, a)) : (n.attr("path", a), i.attr("path", s))
			},
			setActiveStatus: function(t) {
				var e = this,
					r = e.get("line"),
					n = e.get("area"),
					i = e.get("lineShape"),
					a = e.get("areaShape"),
					s = e.get("lineActived"),
					o = e.get("areaActived");
				t ? (s && i.attr(s), o && a.attr(o)) : (r && i.attr(r), n && a.attr(n))
			}
		}), t = n
	}(), _e = function(t) {
		var e = I,
			r = ye,
			n = b.Group,
			i = B,
			a = K,
			s = function(t) {
				s.superclass.constructor.call(this, t)
			};
		return e.extend(s, r), s.ATTRS = {
			xField: "name",
			yField: "value",
			width: null,
			labelLine: {
				"stroke-width": 1
			},
			item: {
				stroke: "#fff"
			},
			legendType: "rect",
			topShape: "angle",
			sort: "desc",
			animate: !0,
			border: {
				stroke: "#ddd",
				"stroke-width": 1
			}
		}, e.mixin(s, [n, a.UseLegend, i]), e.augment(s, {
			renderUI: function() {
				s.superclass.renderUI.call(this), this._sortData(this.get("data")), this._initpplot(), this._initGroup()
			},
			_initpplot: function() {
				var t = this,
					e = 2 * t.getRadius();
				this.set("width", e), this.set("height", e)
			},
			_initGroup: function() {
				var t = this,
					e = t.addGroup();
				t.set("group", e)
			},
			_sortData: function(t) {
				var e = this;
				t.sort(function(t, r) {
					return "asc" == e.get("sort") ? t.value - r.value : r.value - t.value
				})
			},
			getPointByValue: function(t, e) {
				return {
					xValue: t,
					value: e
				}
			},
			processPoint: function(t, e, r) {
				var n = this,
					i = n.get("width"),
					a = n._getStartPoint(),
					s = a.x + i / 2,
					o = n._getAvgHeight(r),
					l = a.y + o * e,
					u = l + o / 2;
				t.x = s, t.y = u, t.beginY = l, t.endY = l + o
			},
			draw: function(t, r) {
				function n() {
					i.resetBorder(), i._addLabels(t), r && r()
				}
				var i = this,
					a = i.get("animate"),
					s = [];
				e.each(t, function(t, e) {
					var r = a ? 0 : 1,
						n = i._drawShape(t, e, r);
					s.push(n)
				}), a ? e.animStep(1e3, function(t) {
					e.each(s, function(e, r) {
						var n = i._getItemPath(e.get("point"), r, t);
						e.attr("path", n)
					})
				}, function() {
					n()
				}) : n(), i.get("legendGroup") || i.renderLegend()
			},
			changeData: function(t, e) {
				this._sortData(t), s.superclass.changeData.call(this, t, e)
			},
			changeShapes: function(t) {
				var e = this,
					r = e.get("group"),
					n = e.get("labelsGroup"),
					i = e.get("lineGroup");
				r.clear(), n.clear(), i && i.clear(), e.draw(t, function() {
					e.resetLegendItems()
				})
			},
			_addLabels: function(t) {
				var r = this,
					n = r._getMaxValue(t);
				e.each(t, function(t) {
					var e = t.xValue;
					r.addLabel(e, t, n)
				})
			},
			resetBorder: function() {
				var t = this,
					r = t.get("border"),
					n = t.get("borderShape");
				if (r) {
					var i = t._getBorderPath();
					if (n) n.animate({
						path: i
					}, t.get("changeDuration"));
					else {
						var a = e.mix({}, r);
						a.path = i, n = t.addShape("path", a), t.set("borderShape", n)
					}
				}
			},
			_getBorderPath: function() {
				var t = this,
					r = t.get("group"),
					n = r.get("children"),
					i = "desc" == t.get("sort") ? 1 : -1,
					a = [],
					s = [],
					o = 8,
					l = [];
				e.each(n, function(t) {
					t.get("visible") && l.push(t.get("point"))
				}), e.each(n, function(r) {
					var n, i, a = r.get("point");
					r.get("visible") ? (i = e.indexOf(l, a), n = t._getItemPath(a, i, 1, l)) : n = s[s.length - 1] || r.attr("path"), s.push(n)
				});
				var u = s.length,
					c = 2 * i,
					h = i > 0 ? o + c : 0,
					f = s[0],
					g = s[u - 1],
					d = 0,
					p = 1,
					v = 3;
				a.push(["M", f[d][1] - h, f[d][2] - (o - c)]);
				for (var m = 1; u > m; m++) {
					var x = s[m];
					a.push(["L", x[d][1] - o, x[d][2]])
				}
				i > 0 ? a.push(["L", g[v][1], g[v][2] + o]) : (a.push(["L", g[v][1] - (o - c), g[v][2] + (o + c)]), a.push(["L", g[2][1] + (o - c), g[2][2] + (o + c)]));
				for (var m = u - 1; m > 0; m--) {
					var x = s[m];
					a.push(["L", x[p][1] + o, x[p][2]])
				}
				return a.push(["L", f[p][1] + h, f[p][2] - (o - c)]), a.push("z"), a
			},
			_getAvgHeight: function(t) {
				return t = t || this.get("data").length, this.get("height") / t
			},
			_drawShape: function(t, e, r) {
				var n = this,
					i = n._getItemCfg(t, e),
					a = n.get("group");
				i.path = n._getItemPath(t, e, r);
				var s = a.addShape("path", i);
				return s.set("point", t), s
			},
			addLabel: function(t, e, r) {
				var n, i = this,
					a = i.get("labelsGroup"),
					s = {},
					o = i.get("width"),
					l = i.get("labels"),
					u = 0,
					c = l.offset || 20;
				return "right" == l.position ? u = e.value / r * o / 2 + c : "left" == l.position && (u = -(e.value / r * o / 2 + c)), a && (s.text = t, s.x = e.x + u, s.y = e.y, s.point = e, s.fill || (s.fill = e.color), n = a.addLabel(s)), u && i.lineToLabel(e, n), n
			},
			_getStartPoint: function() {
				var t = this,
					e = t.getCenter(),
					r = t.get("width");
				return {
					x: e.x - r / 2,
					y: e.y - r / 2
				}
			},
			_getMaxValue: function(t) {
				t = t || this.getPoints();
				for (var e = t[0].value, r = 1; r < t.length; r++) t[r].value > e && (e = t[r].value);
				return e
			},
			_getMinValue: function(t) {
				t = t || this.getPoints();
				for (var e = t.value, r = 1; r < t.length; r++) t[r].value < e && (e = t[r].value);
				return e
			},
			_getItemPath: function(t, e, r, n) {
				null == r && (r = 1);
				var i, a, s = this,
					o = s._getMaxValue(n),
					l = s._getMinValue(n),
					u = s.get("width"),
					c = s.get("topShape"),
					h = s._getStartPoint().y,
					n = n || s.getPoints();
				"angle" == c ? topValue = 0 : "rect" == c && (topValue = l);
				var f, g;
				"asc" == s.get("sort") ? (i = n[e - 1] ? n[e - 1].value : topValue, f = i / o, g = t.value / o) : (a = n[e + 1] ? n[e + 1].value : topValue, f = t.value / o, g = a / o);
				var d = t.x - f * u / 2 * r,
					p = t.x + f * u / 2 * r,
					v = t.x - g * u / 2 * r,
					m = t.x + g * u / 2 * r,
					x = h + (t.beginY - h) * r,
					y = h + (t.endY - h) * r;
				return [
					["M", d, x],
					["L", p, x],
					["L", m, y],
					["L", v, y],
					["z"]
				]
			},
			getLengendItems: function() {
				var t = this,
					r = t.get("group"),
					n = [];
				return children = r.get("children"), e.each(children, function(e) {
					var r = e.get("attrs").fill,
						i = e.get("point"),
						a = {
							name: i.name,
							color: r,
							type: t.get("legendType"),
							item: e
						};
					n.push(a)
				}), n
			},
			showChild: function(t) {
				t && (t.show(), this._resetPath())
			},
			hideChild: function(t) {
				t && (t.hide(), this._resetPath(), setTimeout(function() {
					var e = t.index(),
						r = t.get("parent").getChildAt(e - 1);
					if (r) {
						var n = r.attr("path"),
							i = [];
						i.push(["M", n[3][1], n[3][2]]), i.push(["L", n[2][1], n[2][2]]), i.push(["L", n[2][1], n[2][2]]), i.push(["L", n[3][1], n[3][2]]), i.push(["z"]), t.attr("path", i)
					}
				}, 500))
			},
			_resetPath: function() {
				var t = this,
					r = t.get("group").get("children"),
					n = [],
					i = [],
					a = t.get("labelsGroup"),
					s = (t.get("borderShape"), t.get("lineGroup"));
				s && s.clear(), e.each(r, function(t) {
					t.get("visible") && (n.push(t), i.push(t.get("point")))
				}), a.clear(), e.each(n, function(e, r) {
					var a = e.get("point");
					t.processPoint(a, r, n.length);
					var s = t._getItemPath(a, r, 1, i);
					e.animate({
						path: s
					}, t.get("changeDuration"))
				}), t.resetBorder();
				var o = t.get("timeout");
				o && clearTimeout(o), o = setTimeout(function() {
					t._addLabels(i), t.set("timeout", null)
				}, 500), t.set("timeout", o)
			},
			_getItemCfg: function(t, r) {
				var n = this,
					i = n.get("colors"),
					a = n.get("item"),
					s = {};
				return e.mix(s, a), s.fill = i[r % i.length], t.color = s.fill, s
			},
			lineToLabel: function(t, r) {
				var n, i = this,
					a = i.get("lineGroup"),
					s = i.get("labelLine");
				if (s && r) {
					a || (a = i.addGroup(), i.set("lineGroup", a)), n = e.isObject(s) ? s : {
						"stroke-width": 1
					}, n = e.mix({}, n);
					var o = r.getBBox();
					n.path = e.substitute("M{x1} {y1} L {x2} {y2}", {
						x1: t.x,
						y1: t.y,
						x2: o.x,
						y2: o.y + o.height / 2
					}), n.stroke || (n.stroke = t.color), a.addShape("path", n)
				}
			},
			getActiveItems: function() {
				return this.get("group").get("children")
			},
			isItemActived: function(t) {
				return t.get("actived")
			},
			setItemActived: function(t, r) {
				var n = t.getCfgAttr("attrs").fill;
				r ? (t.set("actived", !0), t.attr("fill", e.highlight(n, .15))) : (t.set("actived", !1), t.attr("fill", n))
			},
			bindMouseOver: function() {
				var t = this;
				t.get("group").on("mouseover", function(e) {
					var r = e.target.shape;
					r && t.setActivedItem(r)
				})
			},
			getTrackingInfo: function(t) {
				var r = this,
					n = r.getActived();
				return n && e.mix(n.get("point"), t)
			}
		}), t = s
	}(), we = function(t) {
		var e = ye.Cartesian,
			r = b.Group,
			n = a,
			i = function(t) {
				i.superclass.constructor.call(this, t)
			};
		return i.ATTRS = {
			elCls: "x-chart-bubble",
			type: "bubble",
			circle: {},
			activeCircle: {},
			legendType: "circle",
			radiusField: "r",
			animate: !0,
			radiusFormatter: function(t) {
				return Math.pow(t, .75)
			},
			autoPaint: !1,
			stickyTracking: !1
		}, n.extend(i, e), n.mixin(i, [r]), n.augment(i, {
			processColor: function() {
				var t = this,
					e = t.get("color");
				if (e) {
					var r = t.get("circle");
					r && (n.trySet(r, "stroke", e), n.trySet(r, "fill", e))
				}
			},
			renderUI: function() {
				i.superclass.renderUI.call(this), this._renderGroup()
			},
			draw: function(t) {
				var e = this;
				n.each(t, function(t) {
					e.addBubble(t)
				})
			},
			changeShapes: function() {
				var t = this,
					e = t.getPoints(),
					r = t.getItems();
				n.each(r, function(r, n) {
					var i = e[n];
					i && (r.animate({
						cx: i.x,
						cy: i.y
					}, t.get("changeDuration")), r.set("point", i))
				});
				var i = r.length;
				if (e.length < i)
					for (var a = i - 1; a >= e.length; a--) r[a].remove();
				if (e.length > i)
					for (var a = i; a < e.length; a++) t.addBubble(e[a])
			},
			getItems: function() {
				return this.get("group").get("children")
			},
			getActiveItems: function() {
				return this.getItems()
			},
			_renderGroup: function() {
				var t = this,
					e = t.addGroup();
				t.set("group", e)
			},
			setItemActived: function(t, e) {
				var r = this,
					n = r.get("circle"),
					i = r.get("activeCircle");
				e ? (t.attr(i), t.set("actived", !0)) : (t.attr(n), t.set("actived", !1))
			},
			getTrackingInfo: function() {
				var t = this,
					e = t.getActived();
				return e && e.get("point")
			},
			isItemActived: function(t) {
				return t.get("actived")
			},
			addBubble: function(t) {
				var e, r, i = this,
					a = i.get("circle"),
					s = 5,
					o = i.get("radiusField"),
					l = n.mix({}, a);
				t.obj && (s = t.obj[o]), t.arr && (s = t.arr[2], null == s && (s = t.arr[1])), e = i._getRadius(s), l.cx = t.x, l.cy = t.y, i.get("animate") && n.svg ? (l.r = 0, r = i.get("group").addShape("circle", l), r.animate({
					r: e
				}, i.get("duration"))) : (l.r = e, r = i.get("group").addShape("circle", l)), i.get("labels") && i.addLabel(t.value, t), r.set("point", t)
			},
			_getRadius: function(t) {
				var e = this,
					r = e.get("radiusFormatter");
				return r ? r(t) : t
			},
			bindMouseOver: function() {
				var t = this;
				t.get("group").on("mouseover", function(e) {
					var r = e.target,
						n = r.shape;
					t.setItemActived(n, !0)
				})
			},
			bindMouseOut: function() {
				var t = this;
				t.get("group").on("mouseout", function(e) {
					var r = e.target,
						n = r.shape;
					t.setItemActived(n, !1)
				})
			}
		}), t = i
	}(), ke = function(t) {
		function e(t, e, r) {
			t && !t[e] && (t[e] = r)
		}
		var r = a,
			n = ye.Cartesian,
			i = (b.Group, function(t) {
				i.superclass.constructor.call(this, t)
			});
		return i.ATTRS = {
			elCls: "x-chart-scatter",
			stickyTracking: !1,
			autoPaint: !1,
			animate: !1,
			legendType: null
		}, r.extend(i, n), r.augment(i, {
			processColor: function() {
				var t = this,
					r = t.get("color");
				if (r) {
					var n = t.get("markers");
					n && (e(n.marker, "stroke", r), e(n.marker, "fill", r))
				}
			},
			draw: function(t) {
				var e = this;
				r.each(t, function(t) {
					e.addMarker(t)
				})
			},
			bindMouseOver: function() {
				var t = this,
					e = t.get("markersGroup");
				e && e.on("mouseover", function(t) {
					var r = t.target,
						n = r.shape;
					n && e.setActivedItem(n)
				})
			},
			getTrackingInfo: function() {
				var t, e, r = this,
					n = r.get("markersGroup");
				return n && (t = n.getActived(), t && (e = t.get("point"))), e
			},
			bindMouseOut: function() {
				var t = this,
					e = t.get("markersGroup");
				e && e.on("mouseout", function(t) {
					var r = t.target,
						n = r.shape;
					n && e.clearActivedItem(n)
				})
			}
		}), t = i
	}(), Ce = function(t) {
		function e(t) {
			e.superclass.constructor.call(this, t)
		}
		var r = ye.Cartesian,
			n = le,
			i = a;
		return i.extend(e, r), e.ATTRS = {
			type: "flag",
			elCls: "x-chart-flag-series",
			flags: null,
			onSeries: null,
			zIndex: 6
		}, i.augment(e, {
			_getPoints: function() {
				var t = this,
					e = t.get("data"),
					r = t.get("xField"),
					n = (t.get("yField"), t.get("onSeries") || ""),
					a = t.get("parent"),
					s = a.find(n),
					o = t.get("flag"),
					l = t.get("line"),
					u = t.get("xAxis"),
					c = t.get("yAxis"),
					h = [];
				return cfg = i.mix({}, o, l), i.each(e, function(n, a) {
					var o, l = 0;
					if (i.isObject(n)) {
						var f = n[r];
						if (s && s.get("visible")) o = s.findPointByValue(f);
						else {
							var g = u.getOffset(f),
								d = c.getStartOffset();
							o = {
								x: g,
								y: d,
								xValue: f
							}
						}
						if (!o) return !0;
						i.each(e, function(t, e) {
							a > e && n[r] == t[r] && l++
						}), o = i.mix({}, o, {
							y: o.y,
							index: l
						}), n.tooltip = n.flag && n.flag.text ? n.flag.text : t.get("flags").flag.text, o.obj = n
					}
					t.processPoint(o, a), h.push(o)
				}), h
			},
			changeShapes: function(t, e) {
				var r = this,
					n = r.get("flag"),
					a = r.get("line"),
					s = (i.mix({}, n, a), r.get("flagGroup"));
				e = e || r.get("animate"), t = t || this._getPoints();
				var o = [];
				i.each(t, function(t, e) {
					var n = r.__getShapeCfg(t, e);
					o.push(n), s.changeStackCfg(e, n)
				}), s.change(o, e)
			},
			getTipInfo: function(t) {
				return t.obj.tooltip ? t.obj.tooltip : t.value
			},
			draw: function(t, e) {
				function r() {
					e && e()
				}

				function a(e) {
					i.each(t, function(t, r) {
						t.x != e.x || t.isDraw || (s._drawShape(t, r), t.isDraw = !0)
					})
				}
				var s = this,
					o = s.get("animate"),
					l = s.get("duration");
				if (s.set("flagGroup", s.addGroup(n, s.get("flags"))), o) {
					var u = (s.get("onSeries"), s.get("parent"), s._getPoints()),
						c = 0,
						h = [],
						f = u.length;
					i.animStep(l, function(e) {
						var r = c;
						if (c = parseInt(e * f, 10), c > f - 1 && (c = f - 1), c != r) {
							h = t.slice(0, c + 1);
							for (var n = r; c > n; n++) a(u[n])
						}
						1 == e && a(u[c])
					}, r)
				} else i.each(t, function(t, e) {
					s._drawShape(t, e)
				}), r()
			},
			_drawShape: function(t, e) {
				var r = this,
					n = r.get("flagGroup"),
					i = r.__getShapeCfg(t, e),
					a = n.addFlag(i);
				return a
			},
			__getShapeCfg: function(t, e) {
				var r = this,
					n = r.get("data"),
					a = r.get("flagGroup"),
					s = r.get("flags");
				s.flag.point = t;
				var o = i.mix({}, {}, {
					point: t
				});
				return n && n[e] && n[e].flag && i.mix(o, n[e].flag), t.index > 0 && i.each(a.get("children"), function(e) {
					var r = e.get("point");
					if (r.x == t.x && r.index + 1 == t.index) {
						var n = e.get(o.distance || e.get("distance") <= 0 ? "topY" : "bottomY");
						n && (o.point.y = n)
					}
				}), o
			}
		}), t = e
	}(), Se = function(t) {
		function e(t, e) {
			return t > e ? e : t
		}

		function r(t, e) {
			if (!t) return !1;
			var r = "";
			return r = null != t.className.baseVal ? t.className.baseVal : t.className, -1 !== r.indexOf(e)
		}

		function n(t) {
			n.superclass.constructor.call(this, t)
		}
		var i = a,
			s = b.Group,
			o = O.Item,
			l = K,
			u = X,
			c = xe,
			h = ye;
		return n.ATTRS = {
			elCls: "x-chart-series-group",
			zIndex: 5,
			plotRange: null,
			colors: ["#2f7ed8", "#0d233a", "#8bbc21", "#910000", "#1aadce", "#492970", "#f28f43", "#77a1e5", "#c42525", "#a6c96a"],
			symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
			seriesOptions: {},
			yTickCounts: [3, 5],
			xTickCounts: [5, 10],
			series: null,
			legend: null,
			xAxis: null,
			yAxis: null,
			tooltip: null,
			stackedData: null,
			data: null,
			itemName: "series"
		}, i.extend(n, o), i.mixin(n, [s, l.UseLegend]), i.augment(n, {
			renderUI: function() {
				var t = this;
				n.superclass.renderUI.call(t), t._renderSeries(), t._renderAxis(), t._addSeriesAxis(), t._paintAxis(t.get("xAxis"), "xAxis"), t._paintAxis(t.get("yAxis"), "yAxis"), t._paintSeries(), t.renderLegend(), t._renderTooltip()
			},
			bindUI: function() {
				var t = this;
				n.superclass.bindUI.call(t), t.bindCanvasEvent(), t.bindChartEvent()
			},
			bindCanvasEvent: function() {
				function t(r) {
					i.contains(a.get("node"), r.target) || a.get("node") == r.target || (e.onTriggerOut(r), i.removeEvent(document, "click", t))
				}
				var e = this,
					r = e.get("tipGroup"),
					n = r ? r.get("triggerEvent") : "",
					a = e.get("canvas");
				"click" == n ? a.on("click", function(r) {
					e.onCanvasMove(r), setTimeout(function() {
						i.removeEvent(document, "click", t), i.addEvent(document, "click", t)
					})
				}) : (a.on("mousemove", i.wrapBehavior(e, "onCanvasMove")), a.on("mouseout", i.wrapBehavior(e, "onMouseOut")))
			},
			bindChartEvent: function() {
				var t = this,
					e = t.get("canvas");
				e.on("click", function(r) {
					var n = e.getPoint(r.clientX, r.clientY);
					if (t._isInAxis(n)) {
						var i = t.getPointInfo(n, r);
						t.fireUp("plotclick", i)
					}
				}), e.on("mousemove", function(r) {
					var n = e.getPoint(r.clientX, r.clientY),
						i = t.get("isOver");
					if (t._isInAxis(n)) {
						var a = t.getPointInfo(n, r);
						t.fireUp("plotmove", a), i || (t.fireUp("plotover", a), t.set("isOver", !0))
					} else i && (t.fireUp("plotout"), t.set("isOver", !1))
				}), e.on("mouseout", function() {})
			},
			getPointInfo: function(t, e) {
				var r = e.target.shape;
				return i.mix({
					shape: r
				}, t)
			},
			onCanvasMove: function(t) {
				var e, r = this,
					n = r.get("canvas"),
					i = r.get("tipGroup");
				i && (e = n.getPoint(t.clientX, t.clientY), r._isInAxis(e) ? r._processTracking(e, i) : r.onMouseOut())
			},
			onTriggerOut: function(t) {
				var e = this,
					r = e.get("tipGroup"),
					n = e.get("canvas").get("node");
				if (e.clearActivedItem(), r && r.get("visible")) {
					if (r.get("shared")) return i.each(e.getVisibleSeries(), function(t) {
						var e = t.get("markersGroup");
						e && e.clearActivedItem(), t.clearActivedItem && t.clearActivedItem()
					}), t && t.relatedTarget && (t.toElement = t.relatedTarget), void((!t || !i.contains(n, t.toElement) && n !== t.toElement) && e._hideTip());
					e._hideTip()
				}
			},
			onMouseOut: function(t) {
				var e = this,
					n = e.get("canvas").get("node");
				(!t || !i.contains(n, t.toElement) && n !== t.toElement) && (t && r(t.toElement, "ac-tooltip") || e.onTriggerOut(t))
			},
			getSeries: function() {
				return this.get("children")
			},
			_processTracking: function(t, e) {
				var r, n = this,
					a = [];
				if (e.get("shared")) a = n.getSeries();
				else {
					var s = n.getActived();
					s && a.push(s)
				}
				i.each(a, function(e) {
					e && e.get("stickyTracking") && e.get("visible") && e.onStickyTracking({
						point: t
					})
				}), a.length && (r = n._getTipInfo(a, t), r.items.length && n._showTooltip(r.title, r.point, r.items))
			},
			_getTipInfo: function(t, e) {
				var r = {
						items: [],
						point: {}
					},
					n = 0,
					a = this.get("tipGroup") && this.get("tipGroup").get("pointRenderer");
				return i.each(t, function(s) {
					var o, l = s.getTrackingInfo(e),
						u = {},
						c = s.get("invert"),
						h = c ? "y" : "x",
						f = c ? "x" : "y";
					if (l) {
						if (s.get("visible")) {
							var g = s.get("markersGroup");
							if (null != l.value) {
								var d = a;
								s.get("pointRenderer") && (d = s.get("pointRenderer")), n += 1;
								var p = s.getTipInfo(l);
								if (i.isObject(p) ? r.items.push(p) : i.isArray(p) && i.isObject(p[0]) ? r.items = r.items.concat(p) : (u.name = s.get("name"), u.value = d ? d(l, s) : p, u.color = l.color || s.get("color"), u.suffix = s.get("suffix"), r.items.push(u)), g && g.get("single")) {
									g.show();
									var v = g.getChildAt(0);
									v && v.attr({
										x: l.x,
										y: l.y
									})
								}
							} else g && g.get("single") && g.hide()
						}
						o = s.get("xAxis") ? s.get("xAxis").formatPoint(l.xValue) : l.xValue, 1 == n && (r.title = o, r.point.name = l.name, l[h] ? (r.point[h] = l[h], r.point[f] = 1 == t.length ? l[f] : e[f]) : (r.point[h] = e[h], r.point[f] = e[f]))
					}
				}), r
			},
			_showTooltip: function(t, e, r) {
				var n = this,
					i = n.get("tipGroup"),
					a = n.get("prePoint");
				a && a.x == e.x && a.y == e.y && e.name == a.name || (i.setPosition(e.x, e.y), n.set("prePoint", e), i.get("visible") || i.show(), i.setTitle(t), i.setItems(r))
			},
			_hideTip: function() {
				var t = this,
					e = t.get("tipGroup");
				e && e.get("visible") && (e.hide(), t.set("prePoint", null))
			},
			_isInAxis: function(t) {
				var e = this,
					r = e.get("plotRange");
				return r.isInRange(t)
			},
			_renderSeries: function() {
				var t = this,
					e = t.get("series");
				i.each(e, function(e, r) {
					t.addSeries(e, r)
				})
			},
			getLengendItems: function() {
				var t = this,
					e = t.getSeries(),
					r = [];
				return i.each(e, function(t) {
					var e = t.get("markers"),
						n = e && e.marker.symbol,
						i = t.get("visible"),
						t = {
							name: t.get("name"),
							color: t.get("color"),
							type: t.get("legendType"),
							symbol: n,
							item: t,
							checked: i
						};
					r.push(t)
				}), r
			},
			_renderTooltip: function() {
				var t, e = this,
					r = e.get("tooltip");
				r && (r.plotRange = e.get("plotRange"), t = e.get("parent").addGroup(u, r), e.set("tipGroup", t))
			},
			_renderAxis: function() {
				var t = this,
					e = t.get("xAxis"),
					r = t.get("yAxis");
				if (e && !e.isGroup && (e = t._createAxis(e), t.set("xAxis", e)), i.isArray(r) && !r[0].isGroup) {
					var n = [];
					i.each(r, function(e) {
						n.push(t._createAxis(e)), t.set("yAxis", n)
					})
				} else r && !r.isGroup && (e && "circle" == e.get("type") && (r.type = "radius", r.circle = e), r = t._createAxis(r), t.set("yAxis", r))
			},
			_createAxis: function(t) {
				var e, r, n = this,
					a = t.type;
				return !a && t.categories && (a = "category"), "category" == a || "timeCategory" == a ? t.categories || (t.autoTicks = !0) : t.ticks || "circle" == a || (t.autoTicks = !0), t.plotRange = n.get("plotRange"), t.autoPaint = !1, a = a || "number", r = i.ucfirst(a), e = c[r], e ? n.get("parent").addGroup(e, t) : null
			},
			_caculateAxisInfo: function(t, e) {
				if ("category" == t.get("type")) return this._caculateCategories(t, e);
				var r, n, i, a, s, o, l, u = this,
					h = [],
					f = t.get("type"),
					g = (t.getLength(), u.get("xAxis" == e ? "xTickCounts" : "yTickCounts") || []);
				if ("number" == f || "radius" == f) i = t.getCfgAttr("min"), a = t.getCfgAttr("max"), o = c.Auto;
				else if ("time" == f) {
					var d = t.get("startDate"),
						p = t.get("endDate");
					d && (i = d.getTime()), p && (a = p.getTime()), o = c.Auto.Time
				} else "timeCategory" == f && (o = c.Auto.TimeCategory);
				s = t.getCfgAttr("tickInterval"), n = u._getRelativeSeries(t, e);
				var v = {
					min: i,
					max: a,
					minCount: g[0],
					maxCount: g[1],
					interval: s
				};
				return "yAxis" == e && n.length && (r = n[0].get("stackType")), h = r && "none" != r ? u.getStackedData(t, e) : u.getSeriesData(t, e), h.length ? (v.data = h, l = o.caculate(v, r)) : l = {
					ticks: []
				}, l
			},
			_caculateCategories: function(t, e) {
				var r = this,
					n = r.getSeriesData(t, e),
					a = [];
				if (n.length && (a = a.concat(n[0])), n.length > 1 && !r.get("data"))
					for (var s = 1; s < n.length; s++) {
						var o = n[s];
						i.each(o, function(t) {
							-1 == i.indexOf(a, t) && a.push(t)
						})
					}
				return {
					categories: a
				}
			},
			getSeriesData: function(t, e, r) {
				var n = this,
					a = [],
					s = n._getRelativeSeries(t, e);
				return t = t || n.get("yAxis"), e = e || "yAxis", i.each(s, function(n) {
					if (("xAxis" == e || r && n.isStacked && n.isStacked() || !r && (!n.isStacked || !n.isStacked())) && n.get(e) == t) {
						var i = n.getData(e);
						i.length && a.push(i)
					}
				}), a
			},
			_parseData: function(t, e) {
				var r = [];
				return i.each(e, function(e) {
					r.push(t[e])
				}), r
			},
			getStackedData: function(t, r) {
				var n, a, s = this;
				stackedData = s.get("stackedData"), rst = [], arr = [], stackedData ? arr = stackedData : (n = s.getSeriesData(t, r, !0), a = n[0], e = Math.min.apply(null, a), i.each(a, function(t, r) {
					for (var i = t, a = 1; a < n.length; a++) {
						var s = n[a][r];
						i += s, (null == e || e > s) && (e = s)
					}
					arr.push(i)
				}), arr.push(e), s.set("stackedData", arr));
				var o = s.getSeriesData(t, r, !1);
				return o.length ? (rst.push(arr), rst = rst.concat(o)) : rst = arr, rst
			},
			_paintAxis: function(t, e) {
				var r, n = this;
				r = i.isArray(t) ? t : [t], i.each(r, function(t) {
					if (n._hasRelativeSeries(t, e)) {
						if (t.get("autoTicks")) {
							var r = n._caculateAxisInfo(t, e);
							t.changeInfo(r)
						}
						t.paint()
					}
				})
			},
			_getRelativeSeries: function(t, e) {
				var r = this,
					n = r.getVisibleSeries(),
					a = [];
				return i.each(n, function(r) {
					r.get(e) == t && a.push(r)
				}), a
			},
			_hasRelativeSeries: function(t, e) {
				var r = this,
					n = r.getVisibleSeries(),
					a = !1;
				return i.each(n, function(r) {
					return r.get(e) == t ? (a = !0, !1) : void 0
				}), a
			},
			_resetAxis: function(t, e) {
				if (!t.get("autoTicks")) return void(t.isRangeChange() && t.change({
					ticks: t.get("ticks")
				}));
				e = e || "yAxis", this.set("stackedData", null);
				var r = this,
					n = r._caculateAxisInfo(t, e);
				t.change(n)
			},
			_resetSeries: function() {
				var t = this,
					e = t.getSeries();
				i.each(e, function(t) {
					t.get("visible") && t.repaint()
				})
			},
			repaint: function() {
				var t = this,
					e = t.get("legendGroup"),
					r = t.get("xAxis"),
					n = t.get("yAxis");
				r && t._resetAxis(r, "xAxis"), n && (i.isArray(n) ? i.each(n, function(e) {
					t._resetAxis(e, "yAxis")
				}) : t._resetAxis(n, "yAxis")), t._resetSeries(), e && e.resetPosition()
			},
			changeData: function(t) {
				var e = this,
					r = e.getSeries(),
					n = e.get("fields");
				e.set("data", t), i.each(r, function(r, a) {
					if (n) {
						var s = e._getSeriesData(r.get("name"), a);
						r.changeData(s)
					} else r.changeData(i.isArray(t[0]) ? t[a] : t)
				}), e.repaint()
			},
			_getSeriesData: function(t, e) {
				var r = this,
					n = r.get("data"),
					a = r.get("fields"),
					s = n[e];
				return t && i.each(n, function(e) {
					return e.name == t ? (s = e, !1) : void 0
				}), r._parseData(s, a)
			},
			_getDefaultType: function() {
				var t = this,
					e = t.get("seriesOptions"),
					r = "line";
				return i.each(e, function(t, e) {
					return r = e.replace("Cfg", ""), !1
				}), r
			},
			getVisibleSeries: function() {
				var t = this,
					e = t.getSeries();
				return i.filter(e, function(t) {
					return t.get("visible")
				})
			},
			addSeries: function(t, e) {
				var r, n = this,
					i = t.type || n._getDefaultType(),
					a = n._getSeriesClass(i),
					s = n._getSeriesCfg(i, t, e);
				return s.autoPaint = s.autoPaint || !1, r = n.addGroup(a, s)
			},
			_paintSeries: function() {
				var t = this,
					e = t.getSeries();
				i.each(e, function(t) {
					t.paint()
				})
			},
			_addSeriesAxis: function() {
				var t = this,
					e = t.getSeries();
				i.each(e, function(e) {
					if (!(e instanceof h.Cartesian)) return !0;
					e.get("xAxis") || e.set("xAxis", t.get("xAxis"));
					var r = t.get("yAxis");
					null == e.get("yAxis") && (i.isArray(r) ? e.set("yAxis", r[0]) : e.set("yAxis", r)), i.isNumber(e.get("yAxis")) && e.set("yAxis", r[e.get("yAxis")])
				})
			},
			showChild: function(t) {
				var e = this,
					r = t.get("yAxis");
				t.get("visible") || (t.show(), r && (e._resetAxis(r), e._resetSeries()))
			},
			hideChild: function(t) {
				var e = this,
					r = t.get("yAxis");
				t.get("visible") && (t.hide(), r && (e._resetAxis(r), e._resetSeries()))
			},
			_getSeriesCfg: function(t, e, r) {
				var n = this,
					a = n.get("seriesOptions"),
					s = n.get("colors"),
					o = n.get("data"),
					l = n.get("fields"),
					u = n.get("symbols");
				return e = i.mix(!0, {}, a[t + "Cfg"], e), e.invert = n.get("invert"), !e.color && s.length && (e.color = s[r % s.length]), e.markers && e.markers.marker && !e.markers.marker.symbol && (e.markers.marker.symbol = u[r % u.length]), o && !e.data && (e.data = l ? n._getSeriesData(e.name, r) : o), e
			},
			_getSeriesClass: function(t) {
				var e = i.ucfirst(t),
					r = h[e] || h;
				return r
			},
			remove: function() {
				var t = this,
					e = t.get("canvas");
				e.off("mousemove", i.getWrapBehavior(t, "onCanvasMove")), e.off("mouseout", i.getWrapBehavior(t, "onMouseOut")), n.superclass.remove.call(t)
			}
		}), t = n
	}(), Ae = function(t) {
		var e = be;
		return t = e
	}(), Te = function(t) {
		var e = _e;
		return t = e
	}(), Ie = function(t) {
		var e = ye;
		return e.Bubble = we, e.Scatter = ke, e.Flag = Ce, t = e
	}(), Be = function(t) {
		var e = a,
			r = N,
			n = O.Back,
			i = Se,
			s = p,
			o = function(t) {
				this._attrs = e.mix({}, o.ATTRS, t), this.events = {}
			};
		return o.ATTRS = {
			canvas: void 0,
			colors: void 0,
			data: void 0,
			yTickCounts: void 0,
			xTickCounts: void 0,
			width: null,
			height: null,
			legend: void 0,
			plotCfg: void 0,
			plotRange: void 0,
			series: void 0,
			invert: !1,
			seriesOptions: void 0,
			subTitle: void 0,
			title: void 0,
			tooltip: void 0,
			xAxis: void 0,
			yAxis: void 0,
			forceFit: !1,
			fitRatio: 0,
			fields: void 0,
			theme: s.SmoothBase
		}, e.augment(o, {
			get: function(t) {
				return this._attrs[t]
			},
			set: function(t, e) {
				return this._attrs[t] = e, this
			},
			render: function() {
				var t = this;
				if (!t.get("id")) throw "You must assign id for the chart!";
				t.paint()
			},
			clear: function() {
				var t = this,
					e = t.get("canvas");
				e.destroy(), t.set("isPaint", !1)
			},
			paint: function() {
				var t = this;
				t.get("isPaint") || (t._renderCanvas(), t._renderPlot(), t._renderTitle(), t._renderSeries(), t.get("canvas").sort(), t.get("forceFit") && t.bindFitEvent())
			},
			_getFitInfo: function() {
				var t = this,
					r = t.get("el"),
					n = t.get("fitRatio"),
					i = e.getWidth(r),
					a = t.get("height") || e.getHeight(r);
				return n && (a = i * n), {
					width: i,
					height: a
				}
			},
			forceFit: function() {
				var t = this,
					e = t.get("plotBack"),
					r = t.get("canvas"),
					n = t._getFitInfo(),
					i = t.get("seriesGroup");
				r.setSize(n.width, n.height), e.repaint(), t._renderTitle(), i.repaint()
			},
			_renderCanvas: function() {
				var t = this,
					n = t.get("id") || t.get("render") || "";
				n = n.replace("#", "");
				var i, a, s, o = document.getElementById(n);
				if (t.set("el", o), t.get("forceFit")) {
					var l = t._getFitInfo();
					i = l.width, a = l.height
				} else i = t.get("width") || e.getWidth(o), a = t.get("height") || e.getHeight(o);
				s = new r({
					width: i,
					height: a,
					id: n
				}), s.chart = t, t.set("canvas", s)
			},
			_renderPlot: function() {
				var t, r, i = this,
					a = i.get("plotCfg"),
					s = i.get("canvas"),
					o = i.get("theme");
				a = e.mix({}, o.plotCfg, a), t = s.addGroup(n, a), r = t.get("plotRange"), i.set("plotBack", t), i.set("plotRange", r)
			},
			_renderTitle: function() {
				var t = this,
					r = t.get("title"),
					n = t.get("subTitle"),
					i = t.get("theme"),
					a = t.get("canvas"),
					s = {},
					o = {};
				if (r) {
					var l = t.get("titleShape");
					null == r.x && (s.x = a.get("width") / 2, s.y = r.y || 15), l ? l.attr(s) : (s = e.mix(s, i.title, r), l = a.addShape("label", s), t.set("titleShape", l))
				}
				if (n) {
					var u = t.get("subTitleShape");
					null == n.x && (o.x = a.get("width") / 2, o.y = n.y || 35), u ? u.attr(o) : (o = e.mix(o, i.subTitle, n), u = a.addShape("label", o), t.set("subTitleShape", u))
				}
			},
			_getDefaultType: function() {
				var t = this,
					r = t.get("seriesOptions"),
					n = "line";
				return e.each(r, function(t, e) {
					return n = e.replace("Cfg", ""), !1
				}), n
			},
			_renderSeries: function() {
				var t, r = this,
					n = r.get("theme"),
					a = {},
					s = r._attrs,
					o = r._getDefaultType();
				e.each(s.series, function(t) {
					t.type || (t.type = o)
				}), e.mix(!0, a, n, {
					colors: s.colors,
					xTickCounts: s.xTickCounts,
					yTickCounts: s.yTickCounts,
					data: s.data,
					invert: r.get("invert"),
					fields: s.fields,
					series: s.series,
					seriesOptions: s.seriesOptions,
					tooltip: s.tooltip,
					legend: s.legend,
					xAxis: s.xAxis
				}), e.mix(a, {
					plotRange: s.plotRange
				}), e.isObject(s.yAxis) ? e.mix(!0, a, {
					yAxis: s.yAxis
				}) : e.isArray(s.yAxis) && (e.each(s.yAxis, function(t, r) {
					s.yAxis[r] = e.mix(!0, {}, n.yAxis, t)
				}), a.yAxis = s.yAxis), t = r.get("canvas").addGroup(i, a), r.set("seriesGroup", t)
			},
			bindFitEvent: function() {
				function t() {
					clearTimeout(n), n = setTimeout(function() {
						r.forceFit()
					}, 200)
				}
				var r = this,
					n = null;
				e.addEvent(window, "resize", t)
			},
			repaint: function() {
				var t = this;
				t.get("seriesGroup").repaint()
			},
			getSeries: function() {
				return this.get("seriesGroup").getSeries()
			},
			getSerieByName: function(t) {
				return this.get("seriesGroup").findBy(function(e) {
					return e.get("name") == t
				})
			},
			getXAxis: function(t) {
				var e, r = this;
				return e = t ? r.getSerieByName(t) : r.getSeries()[0], e.get("xAxis")
			},
			getYAxis: function(t) {
				var e, r = this;
				return e = t ? r.getSerieByName(t) : r.getSeries()[0], e.get("yAxis")
			},
			changeData: function(t) {
				var e = this,
					r = e.get("seriesGroup");
				t !== e.get("data") && e.set("data", t), r.changeData(t)
			},
			on: function(t, e) {
				var r = this.events,
					n = r[t];
				return n || (n = r[t] = []), n.push(e), this
			},
			fire: function(t, r) {
				var n = this,
					i = n.events,
					a = i[t];
				a && e.each(a, function(t) {
					t(r)
				})
			},
			off: function(t, r) {
				var n = this,
					i = (n.get("node"), this.events),
					a = i[t];
				return t ? (a && e.remove(a, r), this) : (this.events = {}, this)
			}
		}), t = o
	}(), Pe = function(t) {
		var e = Be;
		return e.Util = a, e.Canvas = N, e.Plot = O, e.Actived = b, e.Date = n, e.Theme = p, e.Series = ye, e.Series.Arearange = Ae, e.Series.Funnel = Te, e.Legend = K, e.Flags = le, e.Candlesticks = ue, e.Axis = xe, e.Tooltip = X, window.Chart = e, window.AChart = e, t = e
	}()
}();