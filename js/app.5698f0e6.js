(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"], {
    0 : function(e, t, n) {
        e.exports = n("56d7")
    },
    "02e0": function(e, t, n) {
        "use strict";
        n.r(t);
        n("4de4"),
        n("c740"),
        n("a434"),
        n("d3b7");
        var a = n("1bab");
        function i() {
            return Object(a["a"])({
                url: "/member/bank?lang=" + localStorage.getItem("ly_lang"),
                method: "get"
            })
        }
        function o(e) {
            return Object(a["a"])({
                url: "/member/bank?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function c(e) {
            return Object(a["a"])({
                url: "/member/bank/" + e + "?lang=" + localStorage.getItem("ly_lang"),
                method: "delete"
            })
        }
        function r(e) {
            return Object(a["a"])({
                url: "/member/bank/" + e.id + "?lang=" + localStorage.getItem("ly_lang"),
                method: "patch",
                data: e
            })
        }
        function s() {
            return Object(a["a"])({
                url: "/member/bank/type?lang=" + localStorage.getItem("ly_lang"),
                method: "get"
            })
        }
        var l = n("ed08"),
        u = {
            bank_list: null,
            edit_bank: null,
            isBankAddPageShow: !1,
            bank_type_list: null
        },
        m = {
            getBankList: function(e) {
                e.state;
                var t = e.commit;
                return new Promise((function(e, n) {
                    i().then((function(n) {
                        t("SET_BANK_LIST", n.data),
                        e(n)
                    })).
                    catch((function(e) {
                        n(e)
                    }))
                }))
            },
            getBankType: function(e) {
                e.state;
                var t = e.commit;
                return new Promise((function(e, n) {
                    s().then((function(n) {
                        t("SET_BANK_TYPE_LIST", Object(l["d"])(n.data)),
                        e(n)
                    })).
                    catch((function(e) {
                        n(e)
                    }))
                }))
            },
            createBank: function(e, t) {
                var n = e.commit;
                return new Promise((function(e, a) {
                    o(t).then((function(t) {
                        n("ADD_BANK", t.data),
                        e(t)
                    })).
                    catch((function(e) {
                        a(e)
                    }))
                }))
            },
            updateBank: function(e, t) {
                e.commit;
                return new Promise((function(e, n) {
                    r(t).then((function(t) {
                        e(t)
                    })).
                    catch((function(e) {
                        n(e)
                    }))
                }))
            },
            deleteBank: function(e, t) {
                var n = e.commit;
                return new Promise((function(e, a) {
                    c(t).then((function(a) {
                        n("REMOVE_BANK", t),
                        e(a)
                    })).
                    catch((function(e) {
                        a(e)
                    }))
                }))
            }
        },
        _ = {
            SET_BANK_PAGE_STATE: function(e, t) {
                e.isBankAddPageShow = t,
                0 == t && (e.edit_bank = null)
            },
            SET_BANK_LIST: function(e, t) {
                e.bank_list = t
            },
            SET_BANK_TYPE_LIST: function(e, t) {
                e.bank_type_list = t
            },
            ADD_BANK: function(e, t) {
                e.bank_list.push(t)
            },
            REMOVE_BANK: function(e, t) {
                e.bank_list = e.bank_list.filter((function(e) {
                    return e.id !== t
                }))
            },
            UPDATE_BANK: function(e, t) {
                e.bank_list.splice(e.bank_list.findIndex((function(e) {
                    return e.id == t.id
                })), 1, t)
            },
            SET_EDIT_BANK: function(e, t) {
                e.edit_bank = t
            }
        },
        h = {};
        t["default"] = {
            namespaced: !0,
            state: u,
            actions: m,
            mutations: _,
            getters: h
        }
    },
    "041d": function(e, t, n) {
        "use strict";
        n.d(t, "g", (function() {
            return i
        })),
        n.d(t, "h", (function() {
            return o
        })),
        n.d(t, "f", (function() {
            return c
        })),
        n.d(t, "a", (function() {
            return r
        })),
        n.d(t, "b", (function() {
            return s
        })),
        n.d(t, "d", (function() {
            return l
        })),
        n.d(t, "c", (function() {
            return u
        })),
        n.d(t, "e", (function() {
            return m
        }));
        n("b0c0");
        var a = n("1bab");
        function i(e) {
            return Object(a["a"])({
                url: "/recharge/online?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function o(e) {
            return Object(a["a"])({
                url: "/recharge/normal?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function c(e) {
            return Object(a["a"])({
                url: "/recharge/list?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function r(e) {
            return Object(a["a"])({
                url: "/moneylog?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function s() {
            return Object(a["a"])({
                url: "/moneylog/type?lang=" + localStorage.getItem("ly_lang"),
                method: "get"
            })
        }
        function l() {
            return Object(a["a"])({
                url: "/payment/online/list?lang=" + localStorage.getItem("ly_lang"),
                method: "get",
                loading: !1
            })
        }
        function u() {
            return Object(a["a"])({
                url: "/payment/normal/list?lang=" + localStorage.getItem("ly_lang"),
                method: "get",
                loading: !1
            })
        }
        function m(e) {
            return Object(a["a"])({
                url: "/recharge/picture/upload?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                loading: !1,
                data: e
            })
        }
    },
    "0520": function(e, t, n) {
        "use strict";
        n.r(t);
        n("d3b7");
        var a = n("8097"),
        i = {
            agent_rates: []
        },
        o = {
            getChildList: function(e, t) {
                e.commit,
                e.state;
                return new Promise((function(e, n) {
                    Object(a["e"])(t).then((function(t) {
                        e(t)
                    })).
                    catch((function(e) {
                        n(e)
                    }))
                }))
            },
            getTeamChart: function(e) {
                e.commit,
                e.state;
                return new Promise((function(e, t) {
                    Object(a["f"])().then((function(t) {
                        e(t)
                    })).
                    catch((function(e) {
                        t(e)
                    }))
                }))
            },
            getTeamReport: function(e, t) {
                e.commit,
                e.state;
                return new Promise((function(e, n) {
                    Object(a["h"])(t).then((function(t) {
                        e(t)
                    })).
                    catch((function(e) {
                        n(e)
                    }))
                }))
            },
            fdInfo: function(e, t) {
                var n = e.commit;
                e.state;
                return new Promise((function(e, i) {
                    Object(a["d"])(t).then((function(t) {
                        n("SET_FD_INFO", t.data.agent_rates),
                        e(t)
                    })).
                    catch((function(e) {
                        i(e)
                    }))
                }))
            },
            addTeam: function(e, t) {
                e.commit,
                e.state;
                return new Promise((function(e, n) {
                    Object(a["a"])(t).then((function(t) {
                        e(t)
                    })).
                    catch((function(e) {
                        n(e)
                    }))
                }))
            },
            teamMoneyLog: function(e, t) {
                e.commit,
                e.state;
                return new Promise((function(e, n) {
                    Object(a["k"])(t).then((function(t) {
                        e(t)
                    })).
                    catch((function(e) {
                        n(e)
                    }))
                }))
            },
            teamBetRecord: function(e, t) {
                e.commit,
                e.state;
                return new Promise((function(e, n) {
                    Object(a["j"])(t).then((function(t) {
                        e(t)
                    })).
                    catch((function(e) {
                        n(e)
                    }))
                }))
            },
            changeTeamRate: function(e, t) {
                e.commit,
                e.state;
                return new Promise((function(e, n) {
                    Object(a["b"])(t).then((function(t) {
                        e(t)
                    })).
                    catch((function(e) {
                        n(e)
                    }))
                }))
            },
            getTeamLink: function(e, t) {
                e.commit,
                e.state;
                return new Promise((function(e, n) {
                    Object(a["g"])(t).then((function(t) {
                        e(t)
                    })).
                    catch((function(e) {
                        n(e)
                    }))
                }))
            },
            createTeamLink: function(e, t) {
                e.commit,
                e.state;
                return new Promise((function(e, n) {
                    Object(a["c"])(t).then((function(t) {
                        e(t)
                    })).
                    catch((function(e) {
                        n(e)
                    }))
                }))
            },
            updateTeamLink: function(e, t) {
                e.commit,
                e.state;
                return new Promise((function(e, n) {
                    Object(a["l"])(t).then((function(t) {
                        e(t)
                    })).
                    catch((function(e) {
                        n(e)
                    }))
                }))
            }
        },
        c = {
            SET_FD_INFO: function(e, t) {
                e.agent_rates = t
            }
        },
        r = {};
        t["default"] = {
            namespaced: !0,
            state: i,
            actions: o,
            mutations: c,
            getters: r
        }
    },
    "089d": function(e, t, n) {
        "use strict";
        var a = n("5742"),
        i = n.n(a);
        i.a
    },
    "138c": function(e, t, n) {},
    1397 : function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-hand-holding-usd",
            use: "icon-hand-holding-usd-usage",
            viewBox: "0 0 1088 1024",
            content: '<symbol class="icon" viewBox="0 0 1088 1024" xmlns="http://www.w3.org/2000/svg" id="icon-hand-holding-usd"><path d="M515.2 288.6l100 28.6c7.2 2 12.2 8.8 12.2 16.2 0 9.2-7.6 16.8-16.8 16.8h-65.6c-7.2 0-14.2-1.6-20.6-4.4-9.6-4.4-20.8-3.4-28.2 4l-35 35c-10.6 10.6-9.4 28.6 3 36.8 19 12.6 40.6 20.2 63.6 23V480c0 17.6 14.4 32 32 32h32c17.6 0 32-14.4 32-32v-35.2c60.6-7.2 106.6-62 98.6-126-5.8-46-41.4-82.6-85.8-95.4l-100-28.6c-7.2-2-12.2-8.8-12.2-16.2 0-9.2 7.6-16.8 16.8-16.8h65.6c7.2 0 14.2 1.6 20.6 4.4 9.6 4.4 20.8 3.4 28.2-4l35-35c10.6-10.6 9.4-28.6-3-36.8-19-12.6-40.6-20.2-63.6-23V32c0-17.6-14.4-32-32-32h-32c-17.6 0-32 14.4-32 32v35.2c-60.6 7.2-106.6 62-98.6 126 5.8 46 41.4 82.6 85.8 95.4z m552.6 367.6c-22.4-21.4-57-20-80.6 0L812.8 804c-21.4 18.2-48 28-75.6 28H513.8c-16.6 0-30.2-14.4-30.2-32s13.6-32 30.2-32h147.8c30.2 0 58-21.8 62.8-53.2 6.2-40-23-74.8-59.6-74.8H362.6c-51 0-100.4 18.6-139.8 52.6L135 768H30.2C13.6 768 0 782.4 0 800v192c0 17.6 13.6 32 30.2 32H704c27.4 0 54-9.8 75.6-28l285.6-242c28.8-24.2 31-70.6 2.6-97.8z" fill="" p-id="14996" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    1425 : function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAABTUlEQVRIS63WrU4EMRDA8f9ZyIGABBQJb0ACQUCCRCGQSMBjeSQMBxgsCoW7HF+ONzkgQ9qkGfoxs9fKTdvfdnY6syPgEDgC3oFH4Ju+YwycASvA7Qi4BpaC8Qbcd0QFOwfWwv5TAY+Bg+RQvVCNzYEbAWWcAHsd0Rx2B3xEMIe+hvD+OD9pEZN9UrAHWsVy4CJoEyuBQ1ATVgM9qBlrgRbUhVnAHDoDHoBl4CK51HLP/lK/ltU6S0tz9T2VMrgBrIcFJsx6wvgSGo3PzZgXlPmnwI4KwwSQcmga1pDKZjpBIuCqvVZQY1Lu0rVm1ALmUl9a2PaQgt8CW/fM3WVqYAsrZW81vCXQirnRHOjFXKgGh2JmNAUXxUxoBHthTVTA3lgVFfAS2PJWfVPh/P83+CTgVehprqpvBHU/fRFwE9gFPoEvx0aeqfvAKvD8C1YRjD4YO40qAAAAAElFTkSuQmCC"
    },
    "166a": function(e, t, n) {
        var a = {
            "./floatNumber.js": "cb53"
        };
        function i(e) {
            var t = o(e);
            return n(t)
        }
        function o(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return a[e]
        }
        i.keys = function() {
            return Object.keys(a)
        },
        i.resolve = o,
        e.exports = i,
        i.id = "166a"
    },
    "18f0": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-link",
            use: "icon-link-usage",
            viewBox: "0 0 128 128",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-link"><path d="M115.625 127.937H.063V12.375h57.781v12.374H12.438v90.813h90.813V70.156h12.374z" /><path d="M116.426 2.821l8.753 8.753-56.734 56.734-8.753-8.745z" /><path d="M127.893 37.982h-12.375V12.375H88.706V0h39.187z" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    "1bab": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return l
        }));
        n("c975"),
        n("d3b7"),
        n("e7e5");
        var a = n("d399"),
        i = n("bc3a"),
        o = n.n(i),
        c = n("4360"),
        r = n("5f87"),
        s = n("9923");
        function l(e) {
            var t = o.a.create({
                baseURL: "https://apibc.uu365.cc/api",
                timeout: 5e4,
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            return t.interceptors.request.use((function(e) {
                return 0 != e.loading && a["a"].loading({
                    mask: !0,
                    message: s["a"].t("m.wap.is_loading")
                }),
                c["a"].getters.token && (e.headers["Authorization"] = Object(r["a"])().indexOf("Bearer ") > -1 ? Object(r["a"])() : "Bearer " + Object(r["a"])()),
                e
            }), (function(e) {
                return Promise.reject(e)
            })),
            t.interceptors.response.use((function(e) {
                var t = e.data,
                n = e.headers.authorization;
                return n && c["a"].dispatch("member/refreshToken", n).then((function() {})),
                t
            }), (function(e) {
                if (!e.response) return a["a"].fail({
                    message: "网络超时",
                    duration: 3e3
                }),
                Promise.reject(e);
                switch (e.response.status) {
                case 401:
                    return void c["a"].commit("member/HANDLE_LOGOUT");
                case 503:
                    e.response.data.redirect && (window.location.href = e.response.data.redirect);
                    break;
                default:
                    return a["a"].fail({
                        message:
                        e.response.data.message || e.message,
                        duration: 3e3
                    }),
                    Promise.reject(e)
                }
                return Promise.reject(e)
            })),
            t(e)
        }
    },
    "1d4b": function(e, t, n) {
        "use strict";
        n.r(t);
        n("d3b7"),
        n("96cf");
        var a = n("1da1"),
        i = n("ed95"),
        o = {
            activity_list: null
        },
        c = {
            getActivityList: function() {
                var e = Object(a["a"])(regeneratorRuntime.mark((function e(t) {
                    var n;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                        case 0:
                            return n = t.commit,
                            e.abrupt("return", new Promise((function(e, t) {
                                Object(i["c"])().then((function(t) {
                                    n("SET_ACTIVITY_LIST", t.data),
                                    e(t)
                                })).
                                catch((function(e) {
                                    t(e)
                                }))
                            })));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                    }), e)
                })));
                function t(t) {
                    return e.apply(this, arguments)
                }
                return t
            } ()
        },
        r = {
            SET_ACTIVITY_LIST: function(e, t) {
                e.activity_list = t
            }
        },
        s = {};
        t["default"] = {
            namespaced: !0,
            state: o,
            actions: c,
            mutations: r,
            getters: s
        }
    },
    2755 : function(e, t, n) {
        "use strict";
        n.d(t, "e", (function() {
            return i
        })),
        n.d(t, "f", (function() {
            return o
        })),
        n.d(t, "h", (function() {
            return c
        })),
        n.d(t, "y", (function() {
            return r
        })),
        n.d(t, "g", (function() {
            return s
        })),
        n.d(t, "l", (function() {
            return l
        })),
        n.d(t, "m", (function() {
            return u
        })),
        n.d(t, "k", (function() {
            return m
        })),
        n.d(t, "j", (function() {
            return _
        })),
        n.d(t, "t", (function() {
            return h
        })),
        n.d(t, "i", (function() {
            return d
        })),
        n.d(t, "u", (function() {
            return g
        })),
        n.d(t, "n", (function() {
            return p
        })),
        n.d(t, "o", (function() {
            return f
        })),
        n.d(t, "c", (function() {
            return y
        })),
        n.d(t, "b", (function() {
            return b
        })),
        n.d(t, "p", (function() {
            return w
        })),
        n.d(t, "q", (function() {
            return v
        })),
        n.d(t, "w", (function() {
            return k
        })),
        n.d(t, "r", (function() {
            return S
        })),
        n.d(t, "s", (function() {
            return T
        })),
        n.d(t, "a", (function() {
            return A
        })),
        n.d(t, "v", (function() {
            return E
        })),
        n.d(t, "z", (function() {
            return x
        })),
        n.d(t, "x", (function() {
            return C
        })),
        n.d(t, "d", (function() {
            return O
        }));
        n("b0c0");
        var a = n("1bab");
        function i(e) {
            return Object(a["a"])({
                url: "/auth/login?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function o() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
            this.name = e,
            this.password = t,
            this.key = n,
            this.captcha = a
        }
        function c() {
            return Object(a["a"])({
                url: "/auth/me?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                loading: !1
            })
        }
        function r(e) {
            return Object(a["a"])({
                url: "auth/info/update?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function s() {
            return Object(a["a"])({
                url: "/auth/logout?lang=" + localStorage.getItem("ly_lang"),
                method: "post"
            })
        }
        function l(e) {
            return Object(a["a"])({
                url: "/member/message/list?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                loading: !1,
                data: e
            })
        }
        function u(e) {
            return Object(a["a"])({
                url: "/member/message/send_list?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function m(e) {
            return Object(a["a"])({
                url: "member/message/read?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function _(e) {
            return Object(a["a"])({
                url: "member/message/delete?lang=" + localStorage.getItem("ly_lang"),
                method: "delete",
                data: e
            })
        }
        function h() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            this.title = e,
            this.content = t,
            this.pid = n
        }
        function d(e) {
            var t = "/member/message/send";
            return e.pid && (t = t + "/" + e.pid),
            t = t + "?lang=" + localStorage.getItem("ly_lang"),
            Object(a["a"])({
                url: t,
                method: "post",
                loading: !1,
                data: e
            })
        }
        function g(e) {
            return Object(a["a"])({
                url: "/member/drawing_pwd/set?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function p(e) {
            return Object(a["a"])({
                url: "/member/drawing_pwd/modify?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function f(e) {
            return Object(a["a"])({
                url: "/member/password/modify?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function y() {
            return Object(a["a"])({
                url: "/fsnow/list?lang=" + localStorage.getItem("ly_lang"),
                method: "get",
                loading: !1
            })
        }
        function b(e) {
            return Object(a["a"])({
                url: "/fsnow/fetch?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function w() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            this.oldpassword = e,
            this.password = t,
            this.password_confirmation = n
        }
        function v() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            this.old_qk_pwd = e,
            this.qk_pwd = t,
            this.qk_pwd_confirmation = n
        }
        function k(e) {
            return Object(a["a"])({
                url: "/auth/sms?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                loading: !1,
                data: e
            })
        }
        function S(e) {
            return Object(a["a"])({
                url: "/auth/register?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function T() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
            o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "",
            c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "",
            r = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "",
            s = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : "",
            l = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : "",
            u = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
            m = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "";
            this.invite_code = e,
            this.name = t,
            this.password = n,
            this.password_confirmation = a,
            this.phone = i,
            this.qk_pwd = o,
            this.realname = c,
            this.register_site = r,
            this.key = s,
            this.captcha = l,
            this.sms_code = u,
            this.lang = m
        }
        function A() {
            return Object(a["a"])({
                url: "/member/agent?lang=" + localStorage.getItem("ly_lang"),
                method: "get"
            })
        }
        function E() {
            return Object(a["a"])({
                url: "/auth/demo?lang=" + localStorage.getItem("ly_lang"),
                method: "post"
            })
        }
        function x() {
            return Object(a["a"])({
                url: "/member/vips?lang=" + localStorage.getItem("ly_lang"),
                method: "get"
            })
        }
        function C(e) {
            return Object(a["a"])({
                url: "auth/sms_bind?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function O(e) {
            return Object(a["a"])({
                url: "/auth/reg/lang?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
    },
    "2a3d": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-password",
            use: "icon-password-usage",
            viewBox: "0 0 128 128",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-password"><path d="M108.8 44.322H89.6v-5.36c0-9.04-3.308-24.163-25.6-24.163-23.145 0-25.6 16.881-25.6 24.162v5.361H19.2v-5.36C19.2 15.281 36.798 0 64 0c27.202 0 44.8 15.281 44.8 38.961v5.361zm-32 39.356c0-5.44-5.763-9.832-12.8-9.832-7.037 0-12.8 4.392-12.8 9.832 0 3.682 2.567 6.808 6.407 8.477v11.205c0 2.718 2.875 4.962 6.4 4.962 3.524 0 6.4-2.244 6.4-4.962V92.155c3.833-1.669 6.393-4.795 6.393-8.477zM128 64v49.201c0 8.158-8.645 14.799-19.2 14.799H19.2C8.651 128 0 121.359 0 113.201V64c0-8.153 8.645-14.799 19.2-14.799h89.6c10.555 0 19.2 6.646 19.2 14.799z" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    "303d": function(e, t, n) {
        "use strict";
        n.r(t);
        n("d3b7");
        var a = n("1bab");
        function i(e) {
            return Object(a["a"])({
                url: "/lottery/hot?count=" + e,
                method: "get",
                loading: !1
            })
        }
        function o() {
            return Object(a["a"])({
                url: "lottery/list",
                method: "get"
            })
        }
        var c = {
            lotteryList: []
        },
        r = {
            getHotLottery: function(e, t) {
                e.commit,
                e.state;
                return new Promise((function(e, n) {
                    i(t).then((function(t) {
                        e(t)
                    })).
                    catch((function(e) {
                        n(e)
                    }))
                }))
            },
            getLotteryList: function(e, t) {
                var n = e.commit;
                e.state;
                return new Promise((function(e, a) {
                    o(t).then((function(t) {
                        n("SET_LIST", t.data),
                        e(t)
                    })).
                    catch((function(e) {
                        a(e)
                    }))
                }))
            }
        },
        s = {
            SET_LIST: function(e, t) {
                e.lotteryList = t
            }
        },
        l = {};
        t["default"] = {
            namespaced: !0,
            state: c,
            actions: r,
            mutations: s,
            getters: l
        }
    },
    "30c3": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-example",
            use: "icon-example-usage",
            viewBox: "0 0 128 128",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-example"><path d="M96.258 57.462h31.421C124.794 27.323 100.426 2.956 70.287.07v31.422a32.856 32.856 0 0125.971 25.97zm-38.796-25.97V.07C27.323 2.956 2.956 27.323.07 57.462h31.422a32.856 32.856 0 0125.97-25.97zm12.825 64.766v31.421c30.46-2.885 54.507-27.253 57.713-57.712H96.579c-2.886 13.466-13.146 23.726-26.292 26.291zM31.492 70.287H.07c2.886 30.46 27.253 54.507 57.713 57.713V96.579c-13.466-2.886-23.726-13.146-26.291-26.292z" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    "33ba": function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "m", (function() {
            return a
        }));
        var a = {
            common: {
                app_down: "APPtải",
                index: "Trang chủ của trang web chính thức",
                promotion: "Phòng giảm giá",
                server: "Dịch vụ trực tuyến",
                apply_agent: "Ứng dụng CIA",
                chanting: "Giảm lãi",
                live: "Nâng cấp trực tiếp",
                eGame: "Nâng cấp điện tử",
                mail: "Thư trong nhà ga",
                sign_in: "Đăng nhập hàng ngày",
                red_bag: "Cướp phong bao lì xì",
                transfer_record: "Hồ sơ giao dịch",
                bet_record: "Hồ sơ cá độ",
                change_psw: "Sửa đổi mật khẩu",
                change_qk_psw: "Sửa đổi mật khẩu rút tiền",
                log_out: "Đăng xuất",
                home: "Trang chủ",
                activity: "Các hoạt động ưu đãi",
                member_center: "Trung tâm hội viên",
                recharge: "Nạp tiền",
                withdraw: "Rút tiền mặt",
                transfer: "Chuyển đổi hạn ngạch",
                money: "Số dư",
                notice: "Thông báo",
                member_info: "Thông tin cơ bản",
                promotion_center: "Trung tâm ưu đãi",
                action_success: "Hoạt động thành công!",
                action_err: "Hoạt động bất thường!",
                ssfs: "Lúc nào cũng chống nước",
                apply_draw: "Xin rút tiền",
                card: "Quản lý thẻ ngân hàng",
                sys_notice: "Thông báo hệ thống",
                yuebao: "Dư Bảo",
                fast_recharge: "Nạp tiền nhanh",
                recharge_record: "Hồ sơ nạp tiền",
                select_lang: "Lựa chọn ngôn ngữ"
            },
            header: {},
            home: {
                welcome: "Xin chào",
                login_please: "Xin chào, Vui lòng đăng nhập",
                money: "Cân đối và ưu đãi",
                login: "Đăng nhập để xem"
            },
            game: {
                hot: "Nóng bỏng",
                new: "Thời gian gần đây nhất",
                recommend: "Khuyến cáo trong tháng",
                all: "Tất cả các",
                search_desc: "Vui lòng nhập từ khóa tìm kiếm",
                search: "Tìm kiếm"
            },
            promotion: { in :"Sự tham gia của"
            },
            auth: {
                login: "Đăng nhập thành viên",
                register: "Số tài khoản đã đăng ký",
                invite: "Giới thiệu người",
                account: "Số tài khoản",
                psw: "Mật khẩu",
                confirm_psw: "Xác nhận mật khẩu",
                member_info: "Hồ sơ thành viên",
                real_name: "Tên thật",
                phone: "Số điện thoại di động",
                qk_psw: "Mật khẩu rút tiền",
                confirm_qk_psw: "Xác nhận mật khẩu rút tiền",
                captcha: "Mã xác minh",
                register_now: "Đăng ký ngay",
                register_tips1: '1. Dấu ấn có <span class="star">*</span> Đây là một mục bắt buộc.',
                register_tips2: "2. Khi điện thoại di động và mật khẩu rút tiền là bằng chứng về số tiền rút tiền, thành viên phải điền thông tin chi tiết.",
                forget_psw: "Quên mật khẩu ?",
                login_btn: "Đăng nhập",
                shiwan: "Hãy thử đăng nhập",
                go_around: "Đi lang thang một cách tùy tiện",
                go_pc: "Đến phiên bản máy tính",
                forget_tips: "Liên hệ với quản trị viên để đặt lại mật khẩu",
                shiwan_tips: "Bạn hiện đang là tài khoản dùng thử và bạn chỉ có thể dùng thử vé số trên trang web này.",
                register_success: "Đăng ký thành công, vui lòng đăng nhập"
            },
            member: {
                change_psw: "Sửa đổi mật khẩu đăng nhập",
                change_qk_psw: "Sửa đổi mật khẩu rút tiền",
                bank_info: "Thông tin ngân hàng",
                old_psw: "Mật khẩu cũ",
                new_psw: "Mật khẩu mới",
                confirm_new_psw: "Xác nhận mật khẩu mới",
                please_enter: "Vui lòng nhập",
                cancel: "Hủy bỏ",
                confirm: "Khẳng định",
                psw_tips: "Thay đổi mật khẩu thành công, vui lòng đăng nhập lại",
                qk_psw_tips: "Mật khẩu rút tiền đã được sửa đổi thành công",
                account_money: "Số dư tài khoản",
                fs_money: "Tài khoản chống nước",
                one_key: "Tài khoản chống nước",
                transfer_to_auto: "Chuyển sang chế độ tự động",
                transfer_to_hand: "Chuyển sang thủ công",
                transfer_out: "Chuyển ra ngoài",
                transfer_in: "Chuyển sang",
                money: "Số tiền",
                enter_money: "Vui lòng nhập số tiền chuyển khoản",
                transfer_err: "Không thể chuyển đổi giữa các ví",
                user_name: "Tên người dùng",
                a_draw_money: "Số tiền có thể rút",
                draw_bank: "Thẻ ngân hàng thu tiền",
                select: "Vui lòng chọn",
                bank_account: "Tài khoản ngân hàng",
                owner_name: "Tên chủ thẻ",
                draw_money: "Số tiền thu hồi",
                enter_draw_money: "Vui lòng nhập số tiền rút",
                draw_tips1: "Đầu mối ấm: khi số của bạn không đủ, rút tiền mặt sẽ được tính toán",
                draw_tips2: "%Phí dịch vụ của mật mã còn lại hiện thời",
                submit: "Trình",
                qk_psw: "Mật khẩu rút tiền",
                enter_qk_psw: "Vui lòng nhập mật khẩu rút tiền",
                no_qk_psw_tips: "Bạn chưa đặt mật khẩu rút tiền, vui lòng đặt mật khẩu rút tiền trước khi thao tác",
                no_bank_tips: "Vui lòng ràng buộc thẻ ngân hàng trước",
                bind_time: "Thời gian ràng buộc",
                bank_address: "Ngân hàng mở tài khoản",
                card_no: "Số thẻ",
                re_bind: "Ràng buộc lại",
                add_card: "Tăng cường ràng buộc",
                change_card: "Thay đổi thẻ ngân hàng",
                card_th1: "Ngân hàng mở tài khoản",
                card_th2: "Tên người mở tài khoản",
                card_th3: "Số tài khoản ngân hàng",
                card_th4: "Mở cửa hàng tài khoản",
                back: "Sự trở lại của",
                change_success: "Sửa đổi thành công",
                add_card_success: "Thêm thẻ ngân hàng thành công",
                time: "Thời gian",
                api_type: "Kiểu giao diện",
                game_type: "Các loại trò chơi",
                no_data: "Không có dữ liệu",
                no_more: "Không còn nữa.",
                statistics: "Thống kê",
                total_bet: "Tổng số tiền đặt cược",
                total_win: "Tổng lợi nhuận",
                game_detail: "Chi tiết trò chơi",
                game_detail1: "Trò chơi số đơn",
                game_detail2: "Tên trò chơi",
                game_detail3: "Các loại trò chơi",
                game_detail4: "Thông tin phiên",
                game_detail5: "Chi tiết đặt cược",
                game_detail6: "Số tiền đặt cược",
                game_detail7: "Đặt cược hiệu quả",
                game_detail8: "Số tiền trúng thưởng",
                game_detail9: "Kết quả xổ số",
                game_detail10: "Thời gian cá cược",
                game_detail11: "Thời gian trả thưởng",
                account: "Số tài khoản",
                real_name: "Tên thật",
                login_time: "Thời gian đăng nhập cuối cùng",
                change_type: "Các kiểu thay đổi",
                money_type: "Các loại số tiền",
                sum_money: "Lượng nước chảy",
                a_sum_money: "Số tiền hợp lệ",
                money_detail: "Chi tiết giao dịch",
                money_detail1: "Số tiền giao dịch",
                money_detail2: "Số dư trước khi chuyển",
                money_detail3: "Số dư sau khi chuyển",
                money_detail4: "Các loại ví",
                money_detail5: "Các loại hình chuyển",
                money_detail6: "Mô tả hoạt động",
                money_detail7: "Thời gian giao dịch",
                all: "Tất cả các",
                fs_wallet: "Ví chống nước",
                center_wallet: "Ví của Trung tâm",
                today: "Hôm nay",
                last_day: "Hôm qua",
                day_7: "Trong vòng 7 ngày",
                day_30: "Trong vòng 30 ngày",
                status: "Nhà nước",
                pay_type: "Các loại hình thanh toán",
                total_money: "Tổng số tiền",
                recharge_detail1: "Số thứ tự",
                recharge_detail2: "Số tiền",
                recharge_detail3: "Thông tin tài khoản",
                recharge_detail4: "Phương thức thanh toán",
                recharge_detail5: "Thông tin thanh toán",
                recharge_detail6: "Tình trạng thanh toán",
                recharge_detail7: "Nguyên nhân thất bại",
                recharge_detail8: "Thời gian chuyển tiền",
                recharge_detail9: "Thời gian xác nhận của quản trị viên"
            },
            act: {
                news: "Tin tức mới nhất",
                back: "Quay lại trang chủ",
                server: "Dịch vụ khách hàng trực tuyến",
                app: "Tải về APP",
                apply: "Bấm vào ứng dụng",
                register: "Mở tài khoản miễn phí",
                mobile_bet: "Cá độ qua điện thoại di động",
                slot: "Giải trí điện tử",
                xljc: "Phát hiện đường dây",
                firefox: "Trình duyệt Firefox",
                internet: "Điều hướng Internet",
                deposit: "Cách gửi tiền",
                withdraw: "Cách rút tiền",
                agent: "Các đại lý tham gia",
                congratulations: "Xin chúc mừng",
                apply_success: "Xử lý thành công",
                account: "Tài khoản thành viên",
                apply_act: "Các hoạt động ứng dụng",
                apply_time: "Thời gian áp dụng",
                apply_status: "Tình trạng ứng dụng",
                remark: "Ghi chú",
                no_results: "Không truy vấn thông tin",
                index: "Trang chủ chính thức",
                wheel: "Bàn xoay bốc thăm",
                wheel_rule: "Thể lệ rút thăm trúng thưởng",
                enter_account: "Nhập truy vấn tài khoản trò chơi",
                search: "Truy vấn",
                total_deposit: "Tổng số tiền gửi trong ngày",
                avia_bet: "Đặt cược hợp lệ trong ngày",
                win_history: "Kỷ lục chiến thắng lịch sử",
                have: "Ông hiện có",
                wheel_times: "Cơ hội rút thăm lần thứ hai",
                today_deposit: "Tiền gửi trong ngày",
                effective_flow: "Nước chảy hiệu quả",
                wheel_times2: "Số bàn xoay",
                wheel_congratulations: "Chúc mừng bạn đã trúng số, giải thưởng là ",
                check_lvl: "Truy vấn phân đoạn",
                enter_account1: "Vui lòng nhập tài khoản thành viên của bạn",
                level_th1: "Xếp hạng tiêu chuẩn thăng hạng",
                level_th2: "Mã tinh",
                level_th3: "Quà tặng cấp bậc",
                level_th4: "Tiền lương của Châu",
                level_th5: "Tiền lương hàng tháng",
                level_th6: "Mượn hạn ngạch",
                level_th7: "Quà tặng tích lũy",
                level_th8: "Lần nào nước cũng về",
                level_th9: "Kênh tăng tốc gửi và rút tiền",
                level_th10: "Quản lý dịch vụ khách hàng 1-1",
                level: "Mức độ",
                levels: "Mức độ",
                week_desc: "Được tính theo cấp độ của bạn, bạn có thể tự động nhận được tài khoản bằng cách đăng nhập lại 7 ngày sau lần đăng nhập cuối cùng. Chi tiết về mức lương hàng tuần của cấp độ như sau:",
                month_desc: "Tính theo cấp bậc của bạn, bạn có thể tự động nhận được tài khoản bằng cách đăng nhập lại 30 ngày sau lần đăng nhập cuối cùng. Chi tiết về mức lương hàng tháng của cấp bậc như sau:",
                how_month: "Làm thế nào để nộp đơn xin lương hàng tháng?",
                how_week: "Làm thế nào để xin lương hàng tuần?",
                liveUp_desc: "Chơi video video mã hóa tích lũy lâu dài, để tài khoản thành viên của bạn vào một thu nhập vĩnh viễn!",
                account_info: "Thông tin tài khoản của",
                live_info_th1: "Tài khoản thành viên",
                live_info_th2: "Mức độ hiện tại",
                live_info_th3: "Tích lũy cá cược hợp lệ",
                live_info_th4: "Xếp hạng màu vàng",
                live_info_th5: "Tiền lương của Châu",
                live_info_th6: "Tiền lương hàng tháng",
                live_info_th7: "Đặt cược hiệu quả để thăng tiến khoảng cách",
                live_next: "Vẫn còn xa cấp độ tiếp theo",
                bet: "Ghi chú",
                award_th1: "Số tài khoản thành viên",
                award_th2: "Các loại hình giải thưởng",
                award_th3: "Số tiền thưởng",
                award_th4: "Thời gian giải ngân",
                slotUp_desc: "Tin tốt: từ tháng Bảy 2, 2020, tất cả đều là quân cờ điện/ Câu cá cá tích lũy tích cực, hãy để tài khoản thành viên của cậu vào thu nhập vĩnh viễn!",
                slotUp_desc2: "Tuyên bố: sau khi nâng cấp dữ dội, tỉ lệ mã hóa tích lũy được điều chỉnh, mức quà, tuần lương và mức lương hàng tháng cũng được cải thiện.",
                credit_title: "Vay không tính lãi",
                credit_query: "Truy vấn hạn mức tín dụng",
                credit_nav1: "Quy tắc tín dụng",
                credit_nav2: "Hồ sơ vay và trả nợ",
                credit_nav3: "Tôi muốn vay tiền.",
                credit_nav4: "Tôi muốn trả nợ.",
                credit_index1: "Chi tiết sự kiện",
                credit_index2: "Quy tắc tín dụng",
                credit_index3: "Quy chế hoạt động",
                credit_index4: "Hướng dẫn vay vốn",
                credit_index5: "Hướng dẫn trả nợ",
                credit_info1: "Tài khoản thành viên",
                credit_info2: "Xếp hạng VIP",
                credit_info3: "Vay tối đa",
                credit_info4: "đã vay vốn",
                credit_info5: "Tổng số tiền vay",
                credit_info6: "Tổng số tiền trả nợ",
                credit_info11: "Tài khoản thành viên",
                credit_info12: "Số tiền vay",
                credit_info13: "Số tiền trả nợ",
                credit_info14: "Số ngày vay",
                credit_info15: "Đếm ngược trả nợ",
                credit_info16: "Tiến độ kiểm toán",
                credit_info17: "Ngày",
                no_data: "Không có dữ liệu",
                borrow_tips: "Những lời nhắc nhở ấm áp",
                borrow_tips1: '2 giờ sau khi nộp hồ sơ thành công, vui lòng đến\n          <span style="color: rgb(255, 0, 0);">“Truy vấn hạn mức tín dụng”</span>\n          Cho dù khoản vay có thành công hay không! Nếu khoản vay được nhắc nhở thành công, vui lòng đến Macau Paris để đăng nhập vào tài khoản thành viên của bạn để tham gia thành công, nếu bạn không thêm tiền thành công vào tài khoản thành viên, vui lòng liên hệ với dịch vụ khách hàng trực tuyến để xử lý!',
                borrow_tips2: 'Lưu ý: 5 phút sau khi gửi thành công, vui lòng truy cập "Truy vấn hạn mức tín dụng" để biết khoản vay có thành công hay không!',
                need_borrow: "Tôi muốn vay tiền.",
                borrow_account: "Tài khoản thành viên",
                enter_borrow_account: "Vui lòng điền vào tài khoản thành viên",
                borrow_name: "Tên thành viên",
                enter_borrow_name: "Vui lòng điền tên thành viên",
                borrow_money: "Số tiền vay",
                enter_borrow_money: "Vui lòng điền số tiền vay",
                borrow_days: "Số ngày vay",
                enter_borrow_days: "Vui lòng điền số ngày vay",
                borrow_submit: "Xác nhận trình",
                repay_tips1: 'Các bước trả nợ: 1. Nhập tài khoản thành viên và nhấp vào "Truy vấn số tiền truy thu" để xem số tiền cần trả nợ; Thứ hai, kích<span style="color: rgb(255, 0, 0);"><a href="#" target="_blank"\n                                                                                          title="Thanh toán trực tuyến">【Thanh toán trực tuyến】</a></span>Lựa chọn kênh thanh toán thuận tiện để thanh toán;<span\n            style="white-space: normal;">三</span>、Sau khi thanh toán thành công, quay lại trang này để điền các thông tin liên quan và nhấp vào "Xác nhận Gửi";<span style="white-space: normal;">四</span>、2 giờ sau khi gửi thành công, vui lòng truy cập "Truy vấn hạn mức tín dụng" để kiểm tra xem khoản thanh toán có thành công hay không; Năm, 1 phút sau khi trả nợ thành công, bạn có thể làm thủ tục vay lại!',
                need_repay: "Tôi muốn trả nợ.",
                check_repay: "Kiểm tra số tiền nợ",
                repay_money: "Số tiền trả nợ",
                enter_repay_money: "Vui lòng điền số tiền hoàn trả",
                repay_tips2: 'Lưu ý: Vui lòng nhấp vào "Thanh toán trực tuyến" để thanh toán và gửi sau khi thanh toán xong!',
                repay_tips3: 'Sau 5 phút gửi thành công, vui lòng truy cập "Truy vấn hạn mức tín dụng" để kiểm tra xem khoản thanh toán có thành công hay không!',
                qiankuan: "Số tiền nợ đọng hiện nay:",
                enter_account2: "Vui lòng điền vào tài khoản thành viên",
                enter_money: "Vui lòng điền số tiền đặt cọc",
                enter_captcha: "Vui lòng điền mã xác minh",
                act_money: "Số tiền gửi",
                submit_now: "Ngay lập tức trình",
                apply_act1: "Áp dụng ưu đãi",
                check_detail: "Xem chi tiết",
                act_center: "Trung tâm ứng dụng ưu đãi",
                act_check: "Yêu cầu về tiến độ đăng ký ưu đãi",
                act_select: "Chọn mục truy vấn",
                act_check_btn: "Nhấp vào truy vấn",
                act_th1: "Tài khoản thành viên",
                act_th2: "Tên hoạt động",
                act_th3: "Thời gian áp dụng",
                act_th4: "Tình trạng ứng dụng",
                no_act: "Không truy vấn thông tin"
            },
            fs: {
                desc: "Bạn cũng có những phản",
                lingqu: "Có thể nhận được!",
                a_bet: "Đặt cược hiệu quả",
                rate: "Tỷ lệ điểm trở lại",
                no_data: "Bạn hiện không có nước để lấy theo thời gian, hãy vào trò chơi!",
                confirm: "Nhận"
            },
            red: {
                my_award: "Phần thưởng của tôi",
                Monday: "Thứ hai",
                Tuesday: "Thứ ba",
                Wednesday: "Thứ tư",
                Thursday: "Thứ năm",
                Friday: "Thứ sáu",
                Saturday: "Thứ bảy",
                Sunday: "Chủ nhật",
                lx_award: "Gói làm thủ tục liên tục",
                day_award: "Gói quà trời",
                day_lq: "Có thể nhận được mỗi ngày",
                receive: "Nhận",
                received: "Đã nhận được",
                sign: "Đăng nhập ngay lập tức",
                signed: "Đã đăng nhập",
                no_award: "Không có dữ liệu phần thưởng",
                back_to_index: "Quay lại trang chủ",
                award: "Giải thưởng",
                date: "Ngày",
                no_data: "Không có dữ liệu",
                back: "Sự trở lại của",
                start: "Bắt đầu cuộc chơi",
                no_red: "Tính năng này tạm thời chưa được mở",
                no_red1: "Tôi không lấy được phong bao lì xì, tiếp nhiên liệu"
            },
            mail: {
                mail: "Công văn gửi",
                send_box: "Hộp thư gửi đi",
                receive_box: "Hộp thư đến",
                read: "Đã đọc",
                un_read: "Chưa đọc",
                no_data: "Không có dữ liệu",
                manager: "Quản trị viên",
                last_mail: "Thư trong trang web cuối cùng",
                reply: "Trả lời",
                mark_read: "Được đánh dấu là đã đọc",
                mark_un_read: "Được đánh dấu là chưa đọc",
                delete: "Xóa bỏ",
                send: "Gửi thư trong trạm",
                title: "Tiêu đề",
                content: "Nội dung",
                delete_success: "Xóa thành công",
                know: "Hiểu rồi."
            },
            center: {
                my_account: "Tài khoản của tôi",
                base_info: "Thông tin cơ bản",
                card: "Thẻ ngân hàng",
                change_psw: "Sửa đổi mật khẩu",
                self: "Tự phục vụ",
                ssfs: "Lần nào nước cũng về",
                yuebao: "Dư Bảo",
                record: "Hồ sơ trao đổi",
                bet_record: "Hồ sơ cá độ",
                recharge_record: "Hồ sơ nạp tiền",
                news: "Thông báo thông tin",
                new_news: "Thông báo mới nhất",
                mail: "Thư trong nhà ga"
            },
            recharge: {
                time: "Thời gian xử lý nạp tiền",
                time_desc: "7*24Dịch vụ nạp tiền giờ",
                tips: "Nếu bạn chọn chuyển khoản bằng thẻ ngân hàng, vui lòng không sử dụng các phương thức thanh toán khác, nếu không bạn sẽ không thể nạp tiền vào tài khoản",
                online: "Thanh toán trực tuyến",
                company: "Thu nhập của công ty",
                money: "Số tiền nạp vào",
                enter_money: "Vui lòng nhập số tiền nạp",
                limit: "Hạn mức nạp tiền một lần",
                min: "Mức thấp nhất",
                max: "Cao nhất từ trước đến nay.",
                tips1: "*Số tiền được điền trên nền tảng phải hoàn toàn giống với số tiền chuyển tiền qua ngân hàng trực tuyến, nếu không tài khoản sẽ không đến ngay lập tức!",
                next: "Bước tiếp theo",
                col_info: "Thông tin người nhận",
                col_account: "Tài khoản nhận tiền",
                col_bank: "Ngân hàng tiếp nhận",
                col_name: "Tên người nhận",
                address: "Chi nhánh ngân hàng tài khoản",
                col_qrcode: "Bộ sưu tập mã QR",
                copy: "Nhân rộng",
                recharge_info: "Thông tin nạp tiền của bạn",
                account: "Số tài khoản của bạn",
                enter_account: "Vui lòng nhập Số tài khoản của bạn",
                name: "Tên thanh toán",
                enter_name: "Vui lòng nhập Tên của bạn",
                recharge_time: "Thời gian chuyển tiền",
                submit: "Trình",
                money_err: "Vui lòng nhập số tiền gửi chính xác!",
                success: "Thông tin chuyển khoản đã được gửi, vui lòng kiên nhẫn chờ nhân viên chăm sóc khách hàng xác minh!",
                pay: "Đi thanh toán",
                problem: "Gặp phải vấn đề? Liên hệ với bộ phận chăm sóc khách hàng",
                copu_success: "Nhân rộng thành công!",
                usdt_address: "Địa chỉ ví",
                usdt_rate: "Tỷ lệ đổi",
                usdt_num: "Số Chính:",
                usdt_type: "Kiểu ví"
            },
            yuebao: {
                my_yuebao: "Mỹ Linh Bảo",
                is_progress: "đang tiến hành",
                is_done: "Đã kết thúc",
                no_desc: "Bạn chưa có bất kỳ kế hoạch!",
                buy_now: "Ngay lập tức, việc mua",
                buy_in: "Mua vào",
                total: "Tổng cộng",
                bi: "Cây bút",
                total_money: "Tổng số tiền",
                total_limit: "Tổng lợi nhuận/Tổng giới hạn trên",
                choose: "Lựa chọn phương án",
                sale_money: "Số tiền bán",
                settlement_cycle: "Chu kỳ giải quyết",
                circular_settlement: "Giải quyết theo chu kỳ",
                single_settlement: "Một lần giải quyết",
                hour: "Giờ",
                rate: "Lãi suất cho vay",
                interest_limit1: "Mức trần lãi suất",
                last_count: "Số tiền còn lại",
                buy_count: "Số lượng cá nhân mua",
                buy_again_time: "Thời gian mua lại",
                after: "Sau khi",
                none: "Không có gì.",
                buy_info: "Vui lòng điền thông tin mua hàng",
                money: "Số tiền mua",
                enter_money: "Vui lòng nhập bội số của 10",
                enter_money1: "Vui lòng điền số tiền mua",
                enter_money2: "Vui lòng nhập số tiền của bội số 10",
                every: "Mỗi lần",
                interest_trial_desc: "Tiền lãi theo giờ là",
                interest_trial_desc1: "Tiền lãi sau giờ là",
                interest_multiple: "Bội số kiểm toán lãi suất",
                interest_trial: "Tính lãi thử",
                buy: "Việc mua",
                buy_limit_desc: "Số lượng mua đã lên đến mức trần",
                sold_out: "đã được bán hết",
                switch: "Đề án chuyển đổi",
                no: "Chưa có kế hoạch",
                please_choose: "Hãy chọn một kịch bản phù hợp",
                settlement: "Phương thức giải quyết",
                cell1: "Tên gọi",
                cell2: "Số tiền",
                cell3: "Thời gian mua",
                cell4: "Thời gian giải quyết",
                cell5: "Thời gian rút tiền mặt",
                cell6: "Chu kỳ lãi suất",
                cell7: "Lãi suất cho vay",
                cell8: "Hiện nay lãi suất/Giới hạn trên",
                interest_limit_desc: "Lãi suất đạt đến giới hạn trên",
                settled: "đã được giải quyết",
                redeem: "Sự chuộc lỗi",
                redeeming: "Đang chuộc lại...",
                history: "Lợi nhuận lịch sử",
                interest_history: "Hành trình lãi suất",
                program_desc: "Kịch bản này tạo điều kiện thuận lợi cho",
                mode: "Chế độ",
                interest_desc: "Bội số kiểm toán lãi suất là",
                multiple: "Lần",
                di: "Điều khoản",
                ci: "Thời gian",
                confirm_redeem: "Bạn có chắc chắn để mua lại nó?"
            },
            transfer: {
                center_money: "Số dư ví trung tâm",
                update_money: "Cập nhật số dư",
                money: "Số dư",
                enter_money: "Vui lòng nhập số tiền chuyển",
                transfer_in: "Chuyển sang",
                go_deposit: "Đi ký quỹ",
                err_desc: "Đang vào trò chơi, vui lòng đợi .....",
                is_transfer: "Không chuyển nhượng đang diễn ra...",
                err_login: "Vui lòng đăng nhập trước khi vào trò chơi",
                enter_game: "Bước vào cuộc chơi"
            },
            wap: {
                cancel_collect_success: "Đã hủy bộ sưu tập thành công!",
                collect_success: "Bộ sưu tập đã thành công!",
                not_login: "Chưa đăng nhập",
                login_check: "Xem sau khi đăng nhập",
                deposit: "Tiền gửi",
                draw: "Rút tiền",
                all: "Tất cả các",
                activity: "Ưu đãi",
                service: "Dịch vụ khách hàng",
                my: "Của tôi.",
                welcome_serve: "Chào mừng đến với trung tâm dịch vụ khách hàng",
                main_service: "Dịch vụ khách hàng trực tuyến chính",
                main_service1: "Đại diện dịch vụ khách hàng",
                main_service2: "Dịch vụ đường dây chuyên dụng theo giờ là quan tâm đầu tiên",
                register_btn: "Việc đăng ký",
                welcome: "Chào mừng tới đây.",
                normal_desc: "Các chức năng thường được sử dụng",
                level_power: "Đặc quyền phân cấp",
                extension: "Khuyến mại để kiếm tiền",
                member_info: "Hồ sơ",
                member_safe: "Tài khoản và bảo mật",
                member_safe1: "Hoàn thiện thông tin tài khoản, an toàn hơn",
                collection: "Bộ sưu tập của tôi",
                collection1: "Tất cả những gì bạn yêu thích đều ở đây",
                message: "Tin của tôi.",
                setting: "Thiết lập",
                safety_setting: "Thiết lập bảo mật",
                contact_us: "Liên hệ với chúng tôi",
                about_us: "Về chúng tôi",
                logout: "Đăng nhập",
                start: "Mở ra trải nghiệm cuối cùng",
                enter_account: "Vui lòng nhập số tài khoản",
                enter_psw: "Vui lòng nhập mật khẩu",
                enter_captcha: "Vui lòng nhập mã xác minh",
                pay_way: "Các kênh thanh toán",
                pay_account: "Số tài khoản chuyển khoản",
                pay_name: "Người chuyển tiền",
                pay_money: "Số tiền thanh toán",
                pay_money1: "Số tiền bạn thực sự cần phải trả",
                pay_file: "Tải lên chứng từ chuyển khoản",
                confirm: "Quyết tâm",
                pay_tips: "Những lời nhắc nhở ấm áp",
                pay_tips1: '1.Các ngân hàng được liệt kê ở trên là những ngân hàng được hỗ trợ bởi "thanh toán trực tuyến". Hãy chọn ngân hàng thanh toán của bạn.',
                pay_tips2: '2.Điền số tiền bạn muốn thanh toán vào cột "Số tiền đặt cọc" và nhấp vào nút "Gửi"。',
                pay_tips3: "3.Sau khi đặt cọc thành công, bạn cần phải gấp đôi số tiền cược hiệu quả trước khi bạn có thể rút tiền (chống tiền mặt, chống rửa tiền)。",
                deposit_now: "Tiền gửi hiện tại",
                bet_amount_now: "Cá độ hiện nay",
                bet: "Cá độ",
                vip_desc: "độc quyền",
                my_vip1: "Quà khuyến mãi",
                my_vip2: "Quà tặng hàng ngày",
                my_vip3: "Quà tặng hàng tuần",
                my_vip4: "Quà tặng hàng tháng",
                my_vip5: "Quà tặng sinh nhật",
                my_vip6: "Hằng năm, tiền quà",
                yuan: "Nhân dân tệ",
                vip: "Đặc quyền VIP",
                vip_detail: "Thông tin chi tiết về đặc quyền VIP",
                vip_lvl: "Quy tắc thăng hạng",
                my_extend: "Việc quảng bá của tôi",
                under_check: "Truy vấn trực tiếp",
                achievement_check: "Truy vấn hiệu suất",
                history_commission: "Tổng hoa hồng lịch sử",
                can_commission: "Hoa hồng có thể rút",
                extend_detail: "Hướng dẫn quảng bá",
                my_xia: "Tuyến dưới của tôi",
                click_extend: "Nhấp vào mã QR và quảng bá ngay lập tức",
                team_r1: "Tổng số đội",
                team_r2: "Nạp tiền",
                team_r3: "Việc rút tiền",
                team_r4: "Số tiền đặt cược hợp lệ",
                team_r5: "Số người trực tuyến",
                team_r6: "Giải thưởng trúng thưởng",
                team_r7: "Số tiền trả lại",
                team_r8: "Tiền thưởng cho các hoạt động",
                team_r9: "Số người mới",
                team_r10: "Lợi nhuận ròng",
                team_r11: "Số người hoạt động",
                extension1: "Phương thức khuyến mại một",
                extension2: "Phương thức khuyến mãi hai",
                extension_link: "Thúc đẩy liên kết",
                copy: "Nhân rộng",
                account_search: "Tìm kiếm tài khoản",
                account_search_tips: "Nhập tài khoản người chơi trực tiếp",
                search_btn: "Tìm kiếm",
                reset_btn: "Đặt lại",
                single_money: "Số dư cá nhân",
                team_num: "Số lượng đội",
                team_money: "Số dư đội ngũ",
                last_login: "Lần đăng nhập cuối cùng",
                sub_account: "Tài khoản cấp dưới",
                bet_amount: "Số tiền cá cược",
                fs_amount: "Hoàn lại tiền hoa hồng",
                count_time: "Ngày tính",
                copy_success: "Nhân rộng thành công!",
                account: "Số tài khoản",
                my_qr: "Mã QR của tôi",
                copy_link: "Copy link",
                phone: "Số điện thoại di động",
                write: "Điền vào",
                email: "Địa chỉ thư điện tử",
                login_psw: "Mật khẩu đăng nhập",
                qk_psw: "Mật khẩu rút tiền",
                change: "Sửa đổi",
                slot: "Giải trí điện tử",
                casino: "Trò chơi liveaction",
                sport: "Trò chơi vận động",
                lottery: "Trò chơi xổ số",
                fish: "Trò chơi câu cá",
                board: "Trò chơi cờ vua",
                no_collect: "Không có bộ sưu tập",
                suggestion: "Khiếu nại và kiến nghị",
                online_submit: "Nộp hồ sơ trực tuyến",
                enter: "Vào cuộc",
                enter_suggestion: "Vui lòng nhập phản hồi của bạn",
                check_suggestion: "Gửi đề xuất xem khiếu nại của tôi",
                my_suggestion: "Kiến nghị khiếu nại của tôi",
                question: "Gửi câu hỏi:",
                question_des: "Mô tả vấn đề:",
                about_us_detail: "Thông tin chi tiết về chúng tôi",
                other_contact: "Thông tin liên lạc",
                phone_contact: "Đường dây nóng",
                user_name_tips: "6 chữ cái -8, bắt đầu bằng chữ cái, giới hạn với chữ cái, con số",
                user_name_tips1: "Xin hãy điền vào số tài khoản thành viên.",
                psw_tips: "Cao hơn sáu ký tự, bao gồm chữ cái và số",
                psw_tips1: "Xin hãy điền mật khẩu thành viên",
                confirm_psw: "Xin xác nhận lại mật khẩu.",
                confirm_psw1: "Xin hãy điền vào mật khẩu xác nhận.",
                real_name_tips: "Hãy nhập tên thật của bạn",
                phone_tips: "Hãy nhập số điện thoại di động",
                send_sms: "Gửi mã kiểm tra",
                re_send_sms: "Đặt",
                sms_code: "Mã kiểm tra điện thoại di động",
                sms_code_tips: "Nhập mật mã kiểm tra điện thoại di động",
                register_tips: "Mở một tài khoản ngay lập tức, kiếm tiền và vui vẻ.",
                sms_success: "Mật khẩu được gửi thành công",
                app_tips: "Duyệt ứng dụng, trải nghiệm tuyệt vời hơn!",
                down_app_now: "Tải về",
                is_loading: "Name...",
                currency: "Kiểu tiền tệ",
                select_currency: "Hãy chọn kiểu tiền tệ",
                area: "Mã vùng",
                about1: "Chứng nhận chính thức",
                about2: "Nước Anh",
                about3: "Ủy ban giám sát",
                about4: "Giấy phép đánh bạc Malta",
                about5: "xác thực",
                about6: "Quần đảo Trinh nữ Anh",
                about7: "The Philippines.",
                about8: "Giám sát chứng khoán",
                about9: "Cộng sự hợp tác"
            }
        }
    },
    "3fab": function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "m", (function() {
            return a
        }));
        var a = {
            common: {
                app_down: "App Download",
                index: "Home page of official website",
                promotion: "Discount Hall",
                server: "Online Service",
                apply_agent: "Agency application",
                chanting: "Borrowing at no rate",
                live: "Life upgrade",
                eGame: " electronic upgrade",
                mail: " inside the station",
                sign_in: " check in daily",
                red_bag: "snatching red envelopes",
                transfer_record: " transaction records",
                bet_record: " betting records",
                change_psw: " change the password",
                change_qk_psw: " change the withdrawal password",
                log_out: " posted",
                home: " first page",
                activity: " concessions",
                member_center: " membership center",
                recharge: " recharge",
                withdraw: " cash",
                transfer: " quota conversion",
                money: " balance",
                notice: " announcement",
                member_info: " basic information",
                promotion_center: " Concessions",
                action_success: " operation is successful! ",
                action_err: " abnormal operation! ",
                ssfs: " always reverse water",
                apply_draw: " apply for withdrawals",
                card: " bank card management",
                sys_notice: "systems bulletin",
                yuebao: " Yu e Bao",
                fast_recharge: " quick recharge",
                recharge_record: " recharge records",
                select_lang: " Language Selection"
            },
            header: {},
            home: {
                welcome: " hello",
                login_please: " Hello, please log in",
                money: " balance and discount",
                login: " Login View"
            },
            game: {
                hot: "hot",
                new: "latest",
                recommend: "recommended this month",
                all: "All",
                search_desc: "Please enter search keywords",
                search: "Search"
            },
            promotion: { in :"Participation"
            },
            auth: {
                login: "Member login",
                register: "Registered Account",
                invite: "Presenter",
                account: "Account number",
                psw: "Password",
                confirm_psw: "Confirm password",
                member_info: "Membership Information",
                real_name: "True Name",
                phone: "Mobile number",
                qk_psw: "Withdrawal Password",
                confirm_qk_psw: "Confirm withdrawal password",
                captcha: "Verification",
                register_now: "Immediate registration",
                register_tips1: '1. Marked <span class="star">*</span> The person must fill in the item.',
                register_tips2: "2. Mobile phone and withdrawal password are the voucher for withdrawal amount, please fill in the details.",
                forget_psw: "Forgot password ?",
                login_btn: "Login",
                shiwan: "Try logging in",
                go_around: "Take a stroll",
                go_pc: "Go to computer",
                forget_tips: "Contact Administrator to reset password",
                shiwan_tips: "You are currently a trial account, only in this site lottery trial play.",
                register_success: "Successful registration, please login"
            },
            member: {
                change_psw: "Change Login Password",
                change_qk_psw: "Change the withdrawal password",
                bank_info: "Bank information",
                old_psw: "Old password",
                new_psw: "New password",
                confirm_new_psw: "Confirm new password",
                please_enter: "Please enter",
                cancel: "Cancellation",
                confirm: "Confirmation",
                psw_tips: "Password changed successfully, please re-login",
                qk_psw_tips: "The password was changed successfully",
                account_money: "Balance of accounts",
                fs_money: "Reverse water account",
                one_key: "Reverse water account",
                transfer_to_auto: "Switch to Auto",
                transfer_to_hand: "Switch to manual",
                transfer_out: "Transfer out",
                transfer_in: "to change into",
                money: "Amount",
                enter_money: "Please enter the transfer amount",
                transfer_err: "The wallet can t be converted",
                user_name: "User name",
                a_draw_money: "Amount recoverable",
                draw_bank: "Bank Card",
                select: "Please select",
                bank_account: "Bank accounts",
                owner_name: "Name of cardholder",
                draw_money: "Amount withdrawn",
                enter_draw_money: "Please enter the withdrawal amount",
                draw_tips1: "Warm tips: when your number is insufficient, cash withdrawal will be charged",
                draw_tips2: "%The service charge of the current remaining code",
                submit: "Submit",
                qk_psw: "Withdrawal code",
                enter_qk_psw: "Please enter the withdrawal password",
                no_qk_psw_tips: "You have not set the withdrawal password, please set the withdrawal password before operation",
                no_bank_tips: "Please bind the bank card first",
                bind_time: "Binding time",
                bank_address: "Bank of deposit",
                card_no: "Card number",
                re_bind: "Rebinding",
                add_card: "Add binding",
                change_card: "Change of bank card",
                card_th1: "Bank of deposit",
                card_th2: "Name of account holder",
                card_th3: "bank account",
                card_th4: "Account opening outlets",
                back: "return",
                change_success: "Modified successfully",
                add_card_success: "Bank card added successfully",
                time: "time",
                api_type: "Interface type",
                game_type: "Game type",
                no_data: "No data available",
                no_more: "No more",
                statistics: "Statistics",
                total_bet: "Total bet amount",
                total_win: "Total profit",
                game_detail: "Game details",
                game_detail1: "Game number",
                game_detail2: "Game name",
                game_detail3: "Game type",
                game_detail4: "Session information",
                game_detail5: "Bet details",
                game_detail6: "Bet amount",
                game_detail7: "Effective bet",
                game_detail8: "Lottery amount",
                game_detail9: "Lottery results",
                game_detail10: "Bet time",
                game_detail11: "Lottery time",
                account: "account number",
                real_name: "Real name",
                login_time: "Last login time",
                change_type: "Change type",
                money_type: "Amount type",
                sum_money: "Running amount",
                a_sum_money: "Effective amount",
                money_detail: "transaction details",
                money_detail1: "Transaction amount",
                money_detail2: "Balance before transfer in",
                money_detail3: "Balance after transfer in",
                money_detail4: "Wallet type",
                money_detail5: "Transfer type",
                money_detail6: "pedagogical operation",
                money_detail7: "Transaction time",
                all: "all",
                fs_wallet: "Backwater Wallet",
                center_wallet: "Central Wallet",
                today: "today",
                last_day: "yesterday",
                day_7: "Within 7 days",
                day_30: "Within 30 days",
                status: "state",
                pay_type: "Payment type",
                total_money: "Total amount",
                recharge_detail1: "order number",
                recharge_detail2: "amount of money",
                recharge_detail3: "account information",
                recharge_detail4: "Payment method",
                recharge_detail5: "Payment information",
                recharge_detail6: "Payment status",
                recharge_detail7: "Reasons for failure",
                recharge_detail8: "remittance date",
                recharge_detail9: "Administrator confirmation time"
            },
            act: {
                news: "Latest news",
                back: "Back to home page",
                server: "Online Service",
                app: "App Download",
                apply: "Click apply",
                register: "Free account opening",
                mobile_bet: "Mobile betting",
                slot: "Electronic entertainment",
                xljc: "Line detection",
                firefox: "Firefox browser",
                internet: "Internet navigation",
                deposit: "How to deposit",
                withdraw: "How to withdraw money",
                agent: "Agent joining",
                congratulations: "congratulations",
                apply_success: "Successfully handled",
                account: "Member account number",
                apply_act: "Application activities",
                apply_time: "Application time",
                apply_status: "Application status",
                remark: "remarks",
                no_results: "No information found",
                index: "Official homepage",
                wheel: "Lottery turntable",
                wheel_rule: "Lottery rules",
                enter_account: "Input game account query",
                search: "Inquiry",
                total_deposit: "Total deposits of the day",
                avia_bet: "Effective bets of the day",
                win_history: "Winning history",
                have: "You currently have",
                wheel_times: "A lucky draw",
                today_deposit: "Day deposit",
                effective_flow: "Effective flow",
                wheel_times2: "Number of turntables",
                wheel_congratulations: "Congratulations on winning the prize. What s the prize ",
                check_lvl: "Segment query",
                enter_account1: "Please enter your member account number",
                level_th1: "Promotion standard level",
                level_th2: "Cumulative coding",
                level_th3: "Grade gift",
                level_th4: "Zhou Fenglu",
                level_th5: "Monthly salary",
                level_th6: "Loan limit",
                level_th7: "Accumulated gift money",
                level_th8: "Return to water from time to time",
                level_th9: "Deposit and withdrawal acceleration channel",
                level_th10: "One on one customer service manager",
                level: "level",
                levels: "Grade",
                week_desc: "According to your level, you can automatically get your salary when you log in again 7 days after your last login. The details of weekly salary are as follows: ",
                month_desc: "According to your level, you can login again 30 days after your last login, and the monthly salary of your level is as follows: ",
                how_month: "How to apply for monthly salary?",
                how_week: "How to apply for weekly salary?",
                liveUp_desc: "Play live video permanent cumulative coding, let your member account into a permanent income!",
                account_info: "Your account information",
                live_info_th1: "Member account number",
                live_info_th2: "Current level",
                live_info_th3: "Cumulative effective bets",
                live_info_th4: "Grade lottery",
                live_info_th5: "Zhou Fenglu",
                live_info_th6: "Monthly salary",
                live_info_th7: "Distance promotion requires effective bets",
                live_next: "It s not close to the next level",
                bet: "notes",
                award_th1: "Member account number",
                award_th2: "Reward type",
                award_th3: "Reward amount",
                award_th4: "Release time",
                slotUp_desc: "Good news: from July 2, 2020, all electronic / chess / card / fishing permanent cumulative coding, let your member account into permanent income!",
                slotUp_desc2: "Statement: after the strong upgrade, the cumulative coding standard will be adjusted, and the level gift, weekly salary and monthly salary will also be improved. It is hereby declared that the level change of all members will be subject to the update!",
                credit_title: "Interest free loan",
                credit_query: "Credit line query",
                credit_nav1: "Credit rules",
                credit_nav2: "Loan repayment record",
                credit_nav3: "I want to borrow money",
                credit_nav4: "I want to pay back",
                credit_index1: "Event details",
                credit_index2: "Credit rules",
                credit_index3: "Activity details",
                credit_index4: "Loan description",
                credit_index5: "Repayment instructions",
                credit_info1: "Member account number",
                credit_info2: "VIP level",
                credit_info3: "Maximum borrowing",
                credit_info4: "Borrowed",
                credit_info5: "Total borrowings",
                credit_info6: "Total repayment",
                credit_info11: "Member account number",
                credit_info12: "Loan amount",
                credit_info13: "Repayment amount",
                credit_info14: "Loan days",
                credit_info15: "Countdown to repayment",
                credit_info16: "Review progress",
                credit_info17: "date",
                no_data: "No data available",
                borrow_tips: "reminder",
                borrow_tips1: 'Please go to the\n          <span style="color: rgb(255, 0, 0);">"Credit limit query"</span>\n          Whether the loan is successful or not! If the loan is successful, please go to Parisian of Macao to log in the member account to see if it is successful. If the loan is not successfully added to the member account, please contact the online customer service of Jiebai!',
                borrow_tips2: 'Note: after 5 minutes of successful submission, please go to "credit line query" to check whether the loan is successful!',
                need_borrow: "I want to borrow money",
                borrow_account: "Member account number",
                enter_borrow_account: "Please fill in the member account number",
                borrow_name: "Member name",
                enter_borrow_name: "Please fill in the member s name",
                borrow_money: "Loan amount",
                enter_borrow_money: "Please fill in the loan amount",
                borrow_days: "Loan days",
                enter_borrow_days: "Please fill in the loan days",
                borrow_submit: "Confirm submission",
                repay_tips1: 'Repayment operation steps: 1. Input the member account number and click [query the amount of arrears] to view the amount to be repaid；2、 Click<span style="color: rgb(255, 0, 0);"><a href="#" target="_blank"\n                                                                                          title="Online payment">【Online payment】</a></span>Choose a convenient channel for payment;<span\n            style="white-space: normal;">3</span>、After the payment is successful, return to this page to fill in the relevant information and click [confirm submission]；<span style="white-space: normal;">4</span>、2 hours after successful submission, please go to "credit line query" to check whether the repayment is successful；5、 One minute after successful repayment, you can apply for loan again！',
                need_repay: "I want to pay back",
                check_repay: "Query the amount of arrears",
                repay_money: "Repayment amount",
                enter_repay_money: "Please fill in the repayment amount",
                repay_tips2: 'Note: Please click "online payment" to make payment and submit after payment!',
                repay_tips3: '5 minutes after successful submission, please go to "credit line query" to check whether the repayment is successful!',
                qiankuan: "Current arrears:",
                enter_account2: "Please fill in the membership account number",
                enter_money: "Please fill in the deposit amount",
                enter_captcha: "Please fill in the verification code",
                act_money: "Deposit amount",
                submit_now: "Submit immediately",
                apply_act1: "Preferential application",
                check_detail: "View details",
                act_center: "Discount Application Center",
                act_check: "Discount application progress query",
                act_select: "Select query item",
                act_check_btn: "Click query",
                act_th1: "Member account number",
                act_th2: "Activity name",
                act_th3: "Application time",
                act_th4: "Application status",
                no_act: "No information found"
            },
            fs: {
                desc: "Do you still have backwater",
                lingqu: "Available!",
                a_bet: "Effective bets",
                rate: "Rebate ratio",
                no_data: "You don t have water to collect at present. Go to the game!",
                confirm: "receive"
            },
            red: {
                my_award: "My reward",
                Monday: "Monday",
                Tuesday: "Tuesday",
                Wednesday: "Wednesday",
                Thursday: "Thursday",
                Friday: "Friday",
                Saturday: "Saturday",
                Sunday: "Sunday",
                lx_award: "Continuous check in package",
                day_award: "Gift bag",
                day_lq: "You can get it at any time",
                receive: "receive",
                received: "Received",
                sign: "Sign in right now",
                signed: "Signed in",
                no_award: "No reward data",
                back_to_index: "Home",
                award: "prize",
                date: "date",
                no_data: "No data available",
                back: "return",
                start: "Start the game",
                no_red: "This function is not open yet",
                no_red1: "I didn t get a red envelope. Come on"
            },
            mail: {
                mail: "Sending",
                send_box: "Outbox",
                receive_box: "Inbox",
                read: "Read",
                un_read: "Unread",
                no_data: "No data available",
                manager: "administrators",
                last_mail: "Last message",
                reply: "reply",
                mark_read: "Mark as read",
                mark_un_read: "Mark as unread",
                delete: "delete",
                send: "Send in station message",
                title: "title",
                content: "content",
                delete_success: "Successfully deleted",
                know: "got it"
            },
            center: {
                my_account: "My account",
                base_info: "Basic information",
                card: "bank card",
                change_psw: "Change Password",
                self: "self-service",
                ssfs: "Return to water from time to time",
                yuebao: "Yu EBAO",
                record: "Transaction records",
                bet_record: "Betting record",
                recharge_record: "Recharge record",
                news: "Information announcement",
                new_news: "Latest announcement",
                mail: "mail"
            },
            recharge: {
                time: "Recharge processing time",
                time_desc: "7 * 24-hour recharge service",
                tips: "If you choose bank card transfer, please do not use other payment methods, otherwise the recharge will not arrive at the account",
                online: "Online payment",
                company: "Company income",
                money: "Recharge amount",
                enter_money: "Please input recharge amount",
                limit: "Single recharge limit",
                min: "minimum",
                max: "highest",
                tips1: "*The amount filled in by the platform should be completely consistent with the amount of online banking remittance, otherwise it will not arrive at the account immediately!",
                next: "next step",
                col_info: "Payee information",
                col_account: "Collection account",
                col_bank: "Receiving bank",
                col_name: "Name of payee",
                address: "Bank outlets",
                col_qrcode: "Collection QR code",
                copy: "copy",
                recharge_info: "Your recharge information",
                account: "Your account number",
                enter_account: "Please enter your account number",
                name: "Payment name",
                enter_name: "Please enter your name",
                recharge_time: "remittance date",
                submit: "Submit",
                money_err: "Please input the correct deposit amount!",
                success: "Transfer information has been submitted, please wait patiently for customer service staff to check!",
                pay: "Go to pay",
                problem: "Problems? Contact customer service",
                copu_success: "Copy success!",
                usdt_address: "Wallet address",
                usdt_rate: "Exchange rate",
                usdt_num: "Number of usdt",
                usdt_type: "Wallet type"
            },
            yuebao: {
                my_yuebao: "My yu ebao",
                is_progress: "have in hand",
                is_done: "It s over",
                no_desc: "You don t have any plans yet!",
                buy_now: "Buy now",
                buy_in: "purchase",
                total: "common",
                bi: "pen",
                total_money: "Total amount",
                total_limit: "Total profit/Total upper limit",
                choose: "Scheme selection",
                sale_money: "sales amount",
                settlement_cycle: "Settlement cycle",
                circular_settlement: "Circular settlement",
                single_settlement: "Single settlement",
                hour: "hour",
                rate: "interest rate",
                interest_limit1: "Interest cap",
                last_count: "Remaining quantity",
                buy_count: "Number of individual purchases",
                buy_again_time: "Time to buy again",
                after: "after",
                none: "nothing",
                buy_info: "Please fill in the purchase information",
                money: "Purchase amount",
                enter_money: "Please enter a multiple of 10",
                enter_money1: "Please fill in the purchase amount",
                enter_money2: "Please enter the amount in multiples of 10",
                every: "each",
                interest_trial_desc: "Interest per hour",
                interest_trial_desc1: "After hours, the interest is",
                interest_multiple: "Interest audit multiple",
                interest_trial: "Interest trial",
                buy: "purchase",
                buy_limit_desc: "The purchase quantity has reached the upper limit",
                sold_out: "It s sold out",
                switch: "Handoff scheme",
                no: "No plan",
                please_choose: "Please choose the right solution",
                settlement: "Settlement method",
                cell1: "name",
                cell2: "amount of money",
                cell3: "Buying time",
                cell4: "Settlement time",
                cell5: "Withdrawal time",
                cell6: "Interest cycle",
                cell7: "interest rate",
                cell8: "Current interest/upper limit",
                interest_limit_desc: "The interest rate reaches the upper limit",
                settled: "Settled",
                redeem: "redeem",
                redeeming: "Redemption in progress...",
                history: "Historical profit",
                interest_history: "Interest history",
                program_desc: "This scheme is",
                mode: "pattern",
                interest_desc: "The interest audit multiple is",
                multiple: "times",
                di: "The third",
                ci: "second",
                confirm_redeem: "Are you sure of redemption?"
            },
            transfer: {
                center_money: "Center wallet balance",
                update_money: "Update balance",
                money: "balance",
                enter_money: "Please input transfer in amount",
                transfer_in: "to change into",
                go_deposit: "To deposit",
                err_desc: "Entering the game, please wait .....",
                is_transfer: "No transfer in progress...",
                err_login: "Please login before entering the game",
                enter_game: "Enter the game"
            },
            wap: {
                cancel_collect_success: "Cancel the collection successfully!",
                collect_success: "Collection success!",
                not_login: "No login",
                login_check: "View after login",
                deposit: "Deposit",
                draw: "Withdrawal",
                all: "All",
                activity: "Preferences",
                service: "Customer service",
                my: "Mine",
                welcome_serve: "Welcome to Customer Service Centre",
                main_service: "Main line",
                main_service1: "Customer Service Representative",
                main_service2: "Hourly dedicated service intimate",
                register_btn: "Registration",
                welcome: "Welcome",
                normal_desc: "Common functions",
                level_power: "Rank privilege",
                extension: "Promotion of money",
                member_info: "Personal Data",
                member_safe: "Accounts and security",
                member_safe1: "Improve account information, more secure",
                collection: "My collection",
                collection1: "All you love is here",
                message: "My message",
                setting: "Settings",
                safety_setting: "Security settings",
                contact_us: "Contact us",
                about_us: "About us",
                logout: "Exit Login",
                start: "Opening the ultimate experience",
                enter_account: "Please enter the account number",
                enter_psw: "Please enter the password",
                enter_captcha: "Please enter the verification code",
                pay_way: "Payment channels",
                pay_account: "Transfer Account",
                pay_name: "Transfer person",
                pay_money: "Amount paid",
                pay_money1: "The amount you actually need to pay",
                pay_file: "Upload transfer voucher",
                confirm: "Determination",
                pay_tips: "Warm Tips",
                pay_tips1: "1.The bank listed above is the bank supported by online payment, select your payment bank.",
                pay_tips2: "2.Fill in the amount you want to pay in the deposit amount column and click the submit button.",
                pay_tips3: "3.After the deposit is successful, you need to double the effective bet amount before you can withdraw money (anti cash out, anti money laundering)。",
                deposit_now: "Current deposits",
                bet_amount_now: "Current betting",
                bet: "Betting",
                vip_desc: "Exclusive",
                my_vip1: "Promotional gifts",
                my_vip2: "Daily gift",
                my_vip3: "Weekly gift",
                my_vip4: "Monthly gift",
                my_vip5: "Birthday gift",
                my_vip6: "Annual gift",
                yuan: "Yuan Yuan",
                vip: "VIP privileges",
                vip_detail: "Details of VIP Privileges",
                vip_lvl: "Promotion rules",
                my_extend: "My promotion",
                under_check: "Enquiries",
                achievement_check: "Performance query",
                history_commission: "Total historical commission",
                can_commission: "Commission available",
                extend_detail: "Outreach",
                my_xia: "My downline",
                click_extend: "Click on the QR code to promote immediately",
                team_r1: "Total team size",
                team_r2: "Recharge",
                team_r3: "Withdrawal",
                team_r4: "Effective betting",
                team_r5: "Number of people online",
                team_r6: "Winning prizes",
                team_r7: "Amount returned",
                team_r8: "Activity bonus",
                team_r9: "Increase",
                team_r10: "Net profit",
                team_r11: "Active",
                extension1: "Promotional modality",
                extension2: "Extension 2",
                extension_link: "Promotional links",
                copy: "Copy",
                account_search: "Account Search",
                account_search_tips: "Enter Direct Player Account",
                search_btn: "Search",
                reset_btn: "Reset",
                single_money: "Personal balance",
                team_num: "Number of teams",
                team_money: "Team balance",
                last_login: "Final login",
                sub_account: "Subordinate Account",
                bet_amount: "Betting amount",
                fs_amount: "Domestication",
                count_time: "Date of calculation",
                copy_success: "Copy successfully!",
                account: "Account number",
                my_qr: "My QR code",
                copy_link: "Copy link",
                phone: "Cell phone number",
                write: "Fill in",
                email: "E-mail",
                login_psw: "Login password",
                qk_psw: "Withdrawal password",
                change: "Modification",
                slot: "Electronic Fun",
                casino: "Live Game",
                sport: "Sports games",
                lottery: "Lottery games",
                fish: "Fishing game",
                board: "Chess game",
                no_collect: "No collections available",
                suggestion: "Complaints and Recommendations",
                online_submit: "Online submission",
                enter: "Entry",
                enter_suggestion: "Please enter your feedback",
                check_suggestion: "Submit my complaint recommendations",
                my_suggestion: "My complaint advice",
                question: "Submissions:",
                question_des: "Problem Description:",
                about_us_detail: "About us",
                other_contact: "Other contact information",
                phone_contact: "Service hotline",
                user_name_tips: "6 - 8 characters, beginning with a letter, limited to letters and numbers",
                user_name_tips1: "please fill in the member account",
                psw_tips: "more than 6 characters, including letters and numbers",
                psw_tips1: "please fill in the member password",
                confirm_psw: "please confirm the password again",
                confirm_psw1: "please fill in the confirmation password",
                real_name_tips: "please enter your real name",
                phone_tips: "please enter your mobile phone number",
                send_sms: "send verification code",
                re_send_sms: "resend",
                sms_code: "mobile phone verification code",
                sms_code_tips: "please input mobile phone verification code",
                register_tips: "open an account immediately, make money and have fun",
                sms_success: "verification code sent successfully",
                app_tips: "download APP, experience more wonderful!",
                down_app_now: "download now",
                is_loading: "loading...",
                currency: "Types of currency",
                select_currency: "Please select currency type",
                area: "Area code",
                about1: "Official certification",
                about2: "UK GC",
                about3: "Supervisory committee",
                about4: "Malta gaming licence",
                about5: "authentication",
                about6: "British Virgin Islands",
                about7: "the Philippines",
                about8: "Supervision of gambling licences",
                about9: "cooperative partner"
            }
        }
    },
    "402b": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-wallet",
            use: "icon-wallet-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-wallet"><path d="M922.4 256H160c-17.68 0-32-14.32-32-32s14.32-32 32-32h768c17.68 0 32-14.32 32-32 0-53.02-42.98-96-96-96H128C57.3 64 0 121.3 0 192v640c0 70.7 57.3 128 128 128h794.4c56.04 0 101.6-43.06 101.6-96V352c0-52.94-45.56-96-101.6-96zM832 672c-35.34 0-64-28.66-64-64s28.66-64 64-64 64 28.66 64 64-28.66 64-64 64z" fill="" p-id="15338" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    4175 : function(e, t, n) {
        "use strict";
        n.r(t),
        t["default"] = [{
            path: "/test",
            name: "test",
            meta: {
                keepAlive: !0
            }
        }]
    },
    4360 : function(e, t, n) {
        "use strict";
        n("4160"),
        n("b0c0"),
        n("d3b7"),
        n("ac1f"),
        n("5319"),
        n("159b"),
        n("ddb0");
        var a = n("2b0e"),
        i = n("2f62"),
        o = (n("caad"), n("c975"), n("2532"), n("ade3")),
        c = n("5530"),
        r = "@@loading",
        s = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.namespace,
            n = void 0 === t ? r: t,
            a = e.includes,
            i = void 0 === a ? [] : a,
            s = e.excludes,
            u = void 0 === s ? [] : s;
            return function(e) {
                if (e.state[n]) throw new Error("createLoadingPlugin: ".concat(n, " existed in current store"));
                e.registerModule(n, {
                    namespaced: !0,
                    state: {
                        global: !1,
                        effects: {}
                    },
                    mutations: {
                        SHOW: function(e, t) {
                            var n = t.payload;
                            e.global = !0,
                            e.effects = Object(c["a"])({},
                            e.effects, Object(o["a"])({},
                            n, !0))
                        },
                        HIDE: function(e, t) {
                            var n = t.payload;
                            e.global = !1,
                            e.effects = Object(c["a"])({},
                            e.effects, Object(o["a"])({},
                            n, !1))
                        }
                    }
                }),
                e.subscribeAction({
                    before: function(t) {
                        l(t, i, u) && e.commit({
                            type: n + "/SHOW",
                            payload: t.type
                        })
                    },
                    after: function(t) {
                        l(t, i, u) && e.commit({
                            type: n + "/HIDE",
                            payload: t.type
                        })
                    }
                })
            }
        };
        function l(e, t, n) {
            var a = e.type;
            return 0 === t.length && 0 === n.length || (t.length > 0 ? t.indexOf(a) > -1 : n.length > 0 && -1 === n.indexOf(a))
        }
        var u = s;
        a["a"].use(i["a"]);
        var m = n("d307"),
        _ = {};
        m.keys().forEach((function(e) {
            _[e.replace(/(\.\/|\.js)/g, "")] = m(e).
        default
        }));
        t["a"] = new i["a"].Store({
            plugins: [u()],
            state: {
                direction: "forward",
                isRightPanelShow: !1,
                isMarqueeDialogShow: !1
            },
            getters: {
                token: function(e) {
                    return e.member.token
                },
                name: function(e) {
                    return e.member.name
                },
                money: function(e) {
                    return e.member.money
                },
                fs_money: function(e) {
                    return e.member.fs_money
                },
                isLogin: function(e) {
                    return !! e.member.token
                },
                is_demo: function(e) {
                    return e.member.is_demo
                }
            },
            mutations: {
                updateDirection: function(e, t) {
                    e.direction = t
                },
                setRightPanelStatus: function(e, t) {
                    e.isRightPanelShow = t
                },
                setMarqueeDialogState: function(e, t) {
                    e.isMarqueeDialogShow = t
                }
            },
            actions: {},
            modules: _
        })
    },
    "46e9": function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "m", (function() {
            return a
        }));
        var a = {
            common: {
                app_down: "APPดาวน์โหลด",
                index: "เว็บไซต์อย่างเป็นทางการ",
                promotion: "ล็อบบี้ส่วนลด",
                server: "เว็บบอร์ดออนไลน์",
                apply_agent: "ใบสมัครตัวแทน",
                chanting: "ยืมดอกเบี้ยฟรี",
                live: "การอัพเกรดความเป็นจริง",
                eGame: "การอัพเกรดอิเล็กทรอนิกส์",
                mail: "จดหมายภายในสถานี",
                sign_in: "เซ็นชื่อทุกวัน",
                red_bag: "คว้าซองสีแดง",
                transfer_record: "บันทึกการซื้อขาย",
                bet_record: "ประวัติการพนัน",
                change_psw: "เปลี่ยนรหัสผ่าน",
                change_qk_psw: "เปลี่ยนรหัสผ่านการถอนเงิน",
                log_out: "ลงจอด",
                home: "หน้าแรก",
                activity: "กิจกรรมพิเศษ",
                member_center: "ศูนย์สมาชิก",
                recharge: "เติม",
                withdraw: "ถอนเงิน",
                transfer: "การเปลี่ยนแปลงโควต้า",
                money: "ยอดคงเหลือ",
                notice: "ประกาศ",
                member_info: "ข้อมูลพื้นฐาน",
                promotion_center: "ศูนย์ส่วนลด",
                action_success: "การผ่าตัดสำเร็จแล้ว",
                action_err: "การผ่าตัดผิดปกติ",
                ssfs: "การต่อต้านอย่างต่อเนื่อง",
                apply_draw: "ขอถอน",
                card: "การจัดการบัตรเครดิต",
                sys_notice: "ประกาศระบบ",
                yuebao: "สมบัติสมดุล",
                fast_recharge: "ชาร์จเร็ว",
                recharge_record: "บันทึกค่าใช้จ่าย",
                select_lang: "การเลือกภาษา"
            },
            header: {},
            home: {
                welcome: "หวัดดี",
                login_please: "หวัดดี, กรุณาเข้าสู่ระบบ",
                money: "ความสมดุลและส่วนลด",
                login: "ดูโพสต์"
            },
            game: {
                hot: "ร้อนแรง",
                new: "ทันสมัย",
                recommend: "แนะนำเดือนนี้",
                all: "จำนวนทั้งหมด",
                search_desc: "กรุณาใส่คำหลักในการค้นหา",
                search: "ค้นหา"
            },
            promotion: { in :"การมีส่วนร่วม"
            },
            auth: {
                login: "เข้าสู่ระบบสมาชิก",
                register: "ลงทะเบียนบัญชี",
                invite: "แนะนำ",
                account: "บัญชี",
                psw: "รหัสผ่าน",
                confirm_psw: "ยืนยันรหัสผ่าน",
                member_info: "ข้อมูลสมาชิก",
                real_name: "ชื่อจริง",
                phone: "หมายเลขโทรศัพท์มือถือ",
                qk_psw: "รหัสผ่านการถอน",
                confirm_qk_psw: "ยืนยันรหัสผ่านการถอนเงิน",
                captcha: "รหัสการตรวจสอบ",
                register_now: "ลงทะเบียนทันที",
                register_tips1: '1. ทำเครื่องหมายไว้ <span class="star">*</span> รายการที่ต้องกรอก。',
                register_tips2: "2. โทรศัพท์มือถือและรหัสผ่านการถอนเงินสำหรับการถอนเงิน，สมาชิกต้องกรอกรายละเอียด。",
                forget_psw: "ลืมรหัสผ่าน ?",
                login_btn: "ล็อกอิน",
                shiwan: "เล่นเข้าสู่ระบบ",
                go_around: "เดินเล่น",
                go_pc: "ไปที่คอมพิวเตอร์",
                forget_tips: "ติดต่อผู้ดูแลระบบเพื่อรีเซ็ตรหัสผ่าน",
                shiwan_tips: "ปัจจุบันคุณมีบัญชีทดลองเล่นเท่านั้นที่สามารถเล่นหวยในเว็บไซต์นี้",
                register_success: "ลงทะเบียนเรียบร้อยแล้วกรุณาเข้าสู่ระบบ"
            },
            member: {
                change_psw: "เปลี่ยนรหัสผ่านเข้าสู่ระบบ",
                change_qk_psw: "เปลี่ยนรหัสผ่านการถอนเงิน",
                bank_info: "ข้อมูลธนาคาร",
                old_psw: "รหัสผ่านเก่า",
                new_psw: "รหัสผ่านใหม่",
                confirm_new_psw: "ยืนยันรหัสผ่านใหม่",
                please_enter: "โปรดเข้ามา",
                cancel: "ยกเลิก",
                confirm: "ยืนยัน",
                psw_tips: "รหัสผ่านการเปลี่ยนแปลงเรียบร้อยแล้วกรุณาเข้าสู่ระบบอีกครั้ง",
                qk_psw_tips: "การเปลี่ยนแปลงรหัสผ่านถอนเรียบร้อยแล้ว",
                account_money: "ดุลบัญชี",
                fs_money: "บัญชีป้องกันน้ำ",
                one_key: "บัญชีป้องกันน้ำ",
                transfer_to_auto: "เปลี่ยนเป็นอัตโนมัติ",
                transfer_to_hand: "เปลี่ยนเป็นคู่มือ",
                transfer_out: "ส่งต่อไป",
                transfer_in: "ขยับเขยื้อนเคลื่อนไหว",
                money: "ผลรวม",
                enter_money: "กรุณาระบุยอดเงินโอน",
                transfer_err: "คุณไม่สามารถเปลี่ยนกระเป๋าสตางค์ของคุณกับแต่ละอื่นๆ",
                user_name: "สวัสดีเราชื่อ",
                a_draw_money: "ถอนเงิน",
                draw_bank: "บัญชีธนาคาร",
                select: "โปรดเลือก",
                bank_account: "บัญชีธนาคาร",
                owner_name: "ชื่อผู้ถือบัตร",
                draw_money: "ถอนเงิน",
                enter_draw_money: "กรุณาระบุยอดเงินถอน",
                draw_tips1: "คุณจะได้รับเงินสดเมื่อคุณพิมพ์ไม่เพียงพอ",
                draw_tips2: "%ค่าธรรมเนียมที่เหลืออยู่ในปัจจุบัน",
                submit: "ทูลเกล้าฯถวาย",
                qk_psw: "รหัสผ่านการถอน",
                enter_qk_psw: "กรุณาใส่รหัสการถอนเงิน",
                no_qk_psw_tips: "คุณยังไม่ได้ตั้งค่ารหัสผ่านการถอนเงินกรุณาตั้งค่ารหัสผ่านการถอนเงินก่อนการผ่าตัด",
                no_bank_tips: "กรุณาผูกบัตรธนาคารก่อน",
                bind_time: "เวลาผูกพัน",
                bank_address: "ธนาคารเปิดบัญชี",
                card_no: "หมายเลขบัตร",
                re_bind: "ผูกพันใหม่",
                add_card: "เพิ่มการผูกมัด",
                change_card: "เปลี่ยนบัตร",
                card_th1: "เปิดบัญชีธนาคาร",
                card_th2: "ชื่อบัญชี",
                card_th3: "เลขที่บัญชีธนาคาร",
                card_th4: "สาขาบัญชี",
                back: "วกกลับ",
                change_success: "แก้ไขเรียบร้อยแล้ว",
                add_card_success: "เพิ่มบัตรธนาคารเรียบร้อยแล้ว",
                time: "กาละ",
                api_type: "ประเภทของอินเตอร์เฟซ",
                game_type: "ประเภทของเกม",
                no_data: "ไม่มีข้อมูล",
                no_more: "ไม่อีกแล้ว",
                statistics: "สถิติ",
                total_bet: "จำนวนเงินเดิมพันทั้งหมด",
                total_win: "กำไรรวม",
                game_detail: "รายละเอียดเกม",
                game_detail1: "หมายเลขเกม",
                game_detail2: "ชื่อเกม",
                game_detail3: "ประเภทของเกม",
                game_detail4: "ข้อมูลสนาม",
                game_detail5: "รายละเอียดการเดิมพัน",
                game_detail6: "การวางเดิมพัน",
                game_detail7: "เดิมพันที่มีประสิทธิภาพ",
                game_detail8: "ส่งเงิน",
                game_detail9: "ผลรางวัล",
                game_detail10: "เวลาเดิมพัน",
                game_detail11: "เวลาจัดส่ง",
                account: "อธิบายแจกแจง",
                real_name: "ชื่อจริง",
                login_time: "เวลาเข้าสู่ระบบล่าสุด",
                change_type: "ประเภทของการเปลี่ยนแปลง",
                money_type: "ประเภทของเงิน",
                sum_money: "ปริมาณน้ำ",
                a_sum_money: "จำนวนเงินที่ถูกต้อง",
                money_detail: "รายละเอียดการซื้อขาย",
                money_detail1: "ปริมาณการซื้อขาย",
                money_detail2: "ยอดคงเหลือก่อนโอน",
                money_detail3: "ความสมดุลหลังโอน",
                money_detail4: "ประเภทกระเป๋าสตางค์",
                money_detail5: "ประเภทของการโอน",
                money_detail6: "รายละเอียดการดำเนินงาน",
                money_detail7: "เวลาซื้อขาย",
                all: "จำนวนทั้งหมด",
                fs_wallet: "กระเป๋าเงิน",
                center_wallet: "กระเป๋าสตางค์ส่วนกลาง",
                today: "ทูลเกล้าฯถวาย",
                last_day: "เมื่อวาน",
                day_7: "ภายในวัน",
                day_30: "ภายในวัน",
                status: "สภาพ",
                pay_type: "ประเภทของการชำระเงิน",
                total_money: "ผลรวม",
                recharge_detail1: "หมายเลขการสั่งซื้อ",
                recharge_detail2: "ผลรวม",
                recharge_detail3: "ข้อมูลบัญชี",
                recharge_detail4: "วิธีการชำระเงิน",
                recharge_detail5: "ข้อมูลการชำระเงิน",
                recharge_detail6: "สถานะการชำระเงิน",
                recharge_detail7: "สาเหตุของความล้มเหลว",
                recharge_detail8: "เวลาโอนเงิน",
                recharge_detail9: "ผู้ดูแลระบบยืนยันเวลา"
            },
            act: {
                news: "ข่าวร้อน",
                back: "กลับไปที่หน้าแรก",
                server: "เว็บบอร์ดออนไลน์",
                app: "APPดาวน์โหลด",
                apply: "คลิกสมัคร",
                register: "เปิดบัญชีฟรี",
                mobile_bet: "เดิมพันโทรศัพท์มือถือ",
                slot: "ความบันเทิงอิเล็กทรอนิกส์",
                xljc: "การค้นหาเส้นทาง",
                firefox: "เบราว์เซอร์ Firefox",
                internet: "การเดินเรือออนไลน์",
                deposit: "วิธีการฝากเงิน",
                withdraw: "วิธีการถอนเงิน",
                agent: "ตัวแทนพันธมิตร",
                congratulations: "ขอแสดงความยินดีด้วยครับ",
                apply_success: "จัดการเรียบร้อยแล้ว",
                account: "บัญชีสมาชิก",
                apply_act: "กิจกรรมการสมัคร",
                apply_time: "เวลาสมัคร",
                apply_status: "สถานะการสมัคร",
                remark: "ข้อคิดเห็น",
                no_results: "ไม่ได้สอบถามข้อมูล",
                index: "หน้าแรกอย่างเป็นทางการ",
                wheel: "ชิงโชค",
                wheel_rule: "กฎหวย",
                enter_account: "ป้อนบัญชีเกม",
                search: "สอบถาม",
                total_deposit: "เงินฝากทั้งหมดในวันนั้น",
                avia_bet: "วันเดิมพันที่มีประสิทธิภาพ",
                win_history: "ประวัติรางวัลชนะเลิศ",
                have: "ตอนนี้คุณมี",
                wheel_times: "โอกาสในการจับสลาก",
                today_deposit: "ฝากวัน",
                effective_flow: "การไหลที่มีประสิทธิภาพ",
                wheel_times2: "จำนวนจานหมุน",
                wheel_congratulations: "ยินดีด้วยที่คุณชนะรางวัลคือ ",
                check_lvl: "ส่วนแบบสอบถาม",
                enter_account1: "กรุณาใส่หมายเลขบัญชีสมาชิกของคุณ",
                level_th1: "เกรดมาตรฐานโปรโมชั่น",
                level_th2: "รหัสสะสม",
                level_th3: "อันดับ",
                level_th4: "เงินเดือนรายสัปดาห์",
                level_th5: "เงินเดือนรายเดือน",
                level_th6: "วงเงินยืม",
                level_th7: "สะสมของขวัญ",
                level_th8: "กลับน้ำตลอดเวลา",
                level_th9: "ช่องทางการเร่งความเร็ว",
                level_th10: "ผู้จัดการฝ่ายบริการลูกค้าแบบตัวต่อตัว",
                level: "ระดับตำแหน่ง",
                levels: "ชนชั้น",
                week_desc: "คุณสามารถเข้าสู่ระบบอีกครั้งหลังจากที่คุณเข้าสู่ระบบเจ็ดวันหลังจากที่คุณได้เข้าสู่ระบบโดยอัตโนมัติ：",
                month_desc: "คุณสามารถเข้าสู่ระบบโดยอัตโนมัติหลังจากที่คุณเข้าสู่ระบบอีกครั้งหลังจากที่คุณได้เข้าสู่ระบบอีกครั้ง：",
                how_month: "วิธีการสมัครเงินเดือนรายเดือน？",
                how_week: "วิธีการสมัครเงินเดือนรายสัปดาห์？",
                liveUp_desc: "เล่นวิดีโอความเป็นจริงอย่างถาวรสะสมรหัสเพื่อให้บัญชีสมาชิกของคุณเป็นแม่บ้านรายได้ถาวร！",
                account_info: "ข้อมูลบัญชี",
                live_info_th1: "บัญชีสมาชิก",
                live_info_th2: "ระดับปัจจุบัน",
                live_info_th3: "สะสมเดิมพันที่มีประสิทธิภาพ",
                live_info_th4: "เกรดทอง",
                live_info_th5: "เงินเดือนรายสัปดาห์",
                live_info_th6: "เงินเดือนรายเดือน",
                live_info_th7: "เดิมพันที่มีประสิทธิภาพสำหรับโปรโมชั่น",
                live_next: "มันไม่ได้ไกลจากระดับถัดไป",
                bet: "ธนบัตร",
                award_th1: "บัญชีสมาชิก",
                award_th2: "ประเภทรางวัล",
                award_th3: "รางวัล",
                award_th4: "ให้เวลา",
                slotUp_desc: "ทั้งหมดอิเล็กทรอนิกส์บัตรตกปลาและบัญชีอิเล็กทรอนิกส์และบัญชีผู้ใช้ของคุณจะถูกเก็บรวบรวมเพื่อให้บัญชีสมาชิกของคุณจะกลายเป็นรายได้ถาวร！",
                slotUp_desc2: "เราขอประกาศว่าสมาชิกทุกคนจะได้รับการเปลี่ยนแปลงในระดับที่สูงขึ้นหลังจากการอัพเกรดที่แข็งแกร่งของรหัสสะสม！",
                credit_title: "ยืมดอกเบี้ยฟรี",
                credit_query: "สอบถามวงเงินสินเชื่อ",
                credit_nav1: "กฎเครดิต",
                credit_nav2: "บันทึกการชำระคืนเงินกู้",
                credit_nav3: "ฉันต้องการเงินกู้",
                credit_nav4: "ฉันต้องจ่ายคืน",
                credit_index1: "รายละเอียดกิจกรรม",
                credit_index2: "กฎเครดิต",
                credit_index3: "รายละเอียดกิจกรรม",
                credit_index4: "หมายเหตุเงินกู้",
                credit_index5: "บันทึกการชำระคืน",
                credit_info1: "บัญชีสมาชิก",
                credit_info2: "VIPชนชั้น",
                credit_info3: "เงินกู้สูงสุด",
                credit_info4: "ให้ยืม",
                credit_info5: "เงินกู้ทั้งหมด",
                credit_info6: "การชำระหนี้ทั้งหมด",
                credit_info11: "บัญชีสมาชิก",
                credit_info12: "จำนวนเงินกู้",
                credit_info13: "การชำระคืน",
                credit_info14: "วันยืม",
                credit_info15: "นับถอยหลังการชำระหนี้",
                credit_info16: "ความคืบหน้าการตรวจสอบ",
                credit_info17: "เดท",
                no_data: "ไม่มีข้อมูล",
                borrow_tips: "เคล็ดลับอบอุ่น",
                borrow_tips1: 'กรุณาส่งเรียบร้อยแล้วหลังจากสองชั่วโมง\n          <span style="color: rgb(255, 0, 0);">“สอบถามวงเงินสินเชื่อ”</span>\n          ไม่ว่าจะยืมเงินสำเร็จหรือไม่ ถ้าคุณต้องการที่จะได้รับเงินกู้ที่ประสบความสำเร็จกรุณาเข้าสู่ระบบในบัญชีสมาชิกของคุณในมาเก๊าปารีสถ้าคุณไม่ประสบความสำเร็จในการเพิ่มเงินในบัญชีสมาชิกของคุณกรุณา',
                borrow_tips2: "ถ้าคุณต้องการที่จะได้รับเครดิตของคุณเรียบร้อยแล้วกรุณาติดต่อเรา",
                need_borrow: "ฉันต้องการเงินกู้",
                borrow_account: "บัญชีสมาชิก",
                enter_borrow_account: "กรุณากรอกบัญชีสมาชิก",
                borrow_name: "ชื่อสมาชิก",
                enter_borrow_name: "กรุณากรอกชื่อสมาชิก",
                borrow_money: "จำนวนเงินกู้",
                enter_borrow_money: "กรุณากรอกจำนวนเงินกู้",
                borrow_days: "วันยืม",
                enter_borrow_days: "กรุณากรอกวันยืม",
                borrow_submit: "ยืนยันการส่ง",
                repay_tips1: 'ขั้นตอนการชำระเงินครั้งแรกใส่บัญชีสมาชิกและคลิกเพื่อดูยอดเงินที่ต้องจ่าย；二、คลิก<span style="color: rgb(255, 0, 0);"><a href="#" target="_blank"\n                                                                                          title="การชำระเงินออนไลน์">【การชำระเงินออนไลน์】</a></span>เลือกช่องทางที่สะดวกสำหรับการชำระเงิน；<span\n            style="white-space: normal;">三</span>、คลิกที่หน้านี้เพื่อกรอกข้อมูลที่เกี่ยวข้อง【ยืนยันการส่ง】；<span style="white-space: normal;">四</span>、หลังจากส่งเสร็จเรียบร้อยแล้วสองชั่วโมงกรุณาติดต่อเราสำหรับการชำระเงิน；五、ใช้สำหรับการกู้ยืมเงินอีกครั้งภายในหนึ่งนาทีของการชำระเงินที่ประสบความสำเร็จ！',
                need_repay: "ฉันต้องจ่ายคืน",
                check_repay: "สอบถามยอดเงินค้างชำระ",
                repay_money: "การชำระคืน",
                enter_repay_money: "กรุณากรอกข้อมูลการชำระคืน",
                repay_tips2: "กรุณาคลิกที่การชำระเงินออนไลน์สำหรับการชำระเงินของคุณ",
                repay_tips3: "ส่งเรียบร้อยแล้วห้านาทีกรุณาตรวจสอบว่าวงเงินสินเชื่อที่ประสบความสำเร็จ",
                qiankuan: "หนี้สินในปัจจุบัน:",
                enter_account2: "กรุณากรอกบัญชีสมาชิก",
                enter_money: "กรุณากรอกจำนวนเงินฝาก",
                enter_captcha: "กรุณากรอกรหัสการตรวจสอบ",
                act_money: "เงินฝาก",
                submit_now: "ส่งทันที",
                apply_act1: "โปรแกรมส่วนลด",
                check_detail: "ดูรายละเอียด",
                act_center: "ศูนย์ส่วนลด",
                act_check: "สอบถามความคืบหน้าสำหรับสิทธิพิเศษ",
                act_select: "เลือกรายการแบบสอบถาม",
                act_check_btn: "คลิกเพื่อสอบถาม",
                act_th1: "บัญชีสมาชิก",
                act_th2: "ชื่อกิจกรรม",
                act_th3: "เวลาสมัคร",
                act_th4: "สถานะการสมัคร",
                no_act: "ไม่ได้สอบถามข้อมูล"
            },
            fs: {
                desc: "คุณมีน้ำกลับ",
                lingqu: "ได้รับมัน",
                a_bet: "เดิมพันที่มีประสิทธิภาพ",
                rate: "สัดส่วนกลับ",
                no_data: "คุณไม่ได้มีเวลาที่จะได้รับกลับมาในน้ำไปเล่น!",
                confirm: "ได้รับ"
            },
            red: {
                my_award: "รางวัลของฉัน",
                Monday: "วันจันทร์",
                Tuesday: "วันอังคาร",
                Wednesday: "วันพุธ",
                Thursday: "พฤหัสบดี",
                Friday: "วันศุกร์",
                Saturday: "เสาร์",
                Sunday: "อาทิตย์",
                lx_award: "เซ็นพัสดุอย่างต่อเนื่อง",
                day_award: "กระเป๋าของขวัญ",
                day_lq: "คุณสามารถได้รับมันในวัน",
                receive: "ได้รับ",
                received: "ได้รับ",
                sign: "เซ็นชื่อทันที",
                signed: "เซ็นชื่อ",
                no_award: "ไม่มีข้อมูลโบนัส",
                back_to_index: "กลับไปที่หน้าแรก",
                award: "ของรางวัล",
                date: "เดท",
                no_data: "ไม่มีข้อมูล",
                back: "วกกลับ",
                start: "เริ่มเกม",
                no_red: "ฟังก์ชันนี้จะไม่เปิด",
                no_red1: "ไม่มีกระเป๋าสีแดงที่ถูกขโมยไป"
            },
            mail: {
                mail: "ปล่อยออก",
                send_box: "กล่องขาออก",
                receive_box: "กล่องจดหมาย",
                read: "แปล",
                un_read: "ยังไม่ได้อ่าน",
                no_data: "ไม่มีข้อมูล",
                manager: "ผู้บริหาร",
                last_mail: "จดหมายจากสถานีสุดท้าย",
                reply: "หกกลับ",
                mark_read: "ทำเครื่องหมายเป็นอ่าน",
                mark_un_read: "ทำเครื่องหมายเป็นยังไม่ได้อ่าน",
                delete: "ลบทิ้ง",
                send: "ส่งจดหมายภายในสถานี",
                title: "หัวเรื่อง",
                content: "เนื้อหา",
                delete_success: "ลบสำเร็จ",
                know: "เข้าใจแล้ว"
            },
            center: {
                my_account: "บัญชีของฉัน",
                base_info: "ข้อมูลพื้นฐาน",
                card: "บัตรธนาคาร",
                change_psw: "เปลี่ยนรหัสผ่าน",
                self: "บริการตัวเอง",
                ssfs: "กลับน้ำตลอดเวลา",
                yuebao: "สมบัติสมดุล",
                record: "บันทึกการติดต่อ",
                bet_record: "ประวัติการพนัน",
                recharge_record: "บันทึกค่าใช้จ่าย",
                news: "ประกาศข่าวสาร",
                new_news: "ประกาศล่าสุด",
                mail: "จดหมายภายในสถานี"
            },
            recharge: {
                time: "เวลาการประมวลผลค่าใช้จ่าย",
                time_desc: "7*24บริการเติมเงินชั่วโมง",
                tips: "ถ้าคุณเลือกที่จะโอนเงินผ่านบัตรเครดิตของคุณโปรดอย่าใช้วิธีการอื่นๆของการชำระเงิน",
                online: "การชำระเงินออนไลน์",
                company: "บริษัทเงิน",
                money: "คิดผลรวม",
                enter_money: "กรุณาป้อนค่าใช้จ่าย",
                limit: "วงเงินเติมเงินเดี่ยว",
                min: "ต่ำสุด",
                max: "สูงสุด",
                tips1: "*จำนวนเงินที่กรอกข้อมูลในแพลตฟอร์มควรสอดคล้องกับปริมาณของการโอนเงินสุทธิมิฉะนั้นจะไม่สามารถเข้าถึงบัญชีทันที",
                next: "ขั้นตอนต่อไป",
                col_info: "ข้อมูลผู้รับเงิน",
                col_account: "บัญชีรับ",
                col_bank: "ธนาคารลูกหนี้",
                col_name: "ชื่อผู้รับ",
                address: "สาขาบัญชี",
                col_qrcode: "รหัสคอลเลกชัน",
                copy: "ทำสำเนา",
                recharge_info: "ข้อมูลค่าใช้จ่ายของคุณ",
                account: "หมายเลขบัญชีของคุณ",
                enter_account: "โปรดเข้ามา หมายเลขบัญชีของคุณ",
                name: "ชื่อผู้ใช้",
                enter_name: "โปรดเข้ามา ชื่อของคุณ",
                recharge_time: "เวลาโอนเงิน",
                submit: "ทูลเกล้าฯถวาย",
                money_err: "กรุณาระบุจำนวนเงินฝากที่ถูกต้อง",
                success: "ข้อมูลการโอนเงินที่ได้รับการส่งกรุณารอเจ้าหน้าที่บริการลูกค้าเพื่อตรวจสอบผ่าน",
                pay: "ไปจ่าย",
                problem: "เจอปัญหาเหรอ ติดต่อฝ่ายบริการลูกค้า",
                copu_success: "คัดลอกสำเร็จ！",
                usdt_address: "ที่อยู่กระเป๋าสตางค์",
                usdt_rate: "อัตราแลกเปลี่ยน",
                usdt_num: "จำนวน usdt",
                usdt_type: "ประเภทกระเป๋าสตางค์"
            },
            yuebao: {
                my_yuebao: "สมบัติสมดุลของฉัน",
                is_progress: "เจริญก้าวหน้า",
                is_done: "จบ",
                no_desc: "คุณไม่มีทางเลือก!",
                buy_now: "ซื้อทันที",
                buy_in: "ซื้อ",
                total: "คอมมอน",
                bi: "ลิขิต",
                total_money: "ผลรวม",
                total_limit: "กำไรรวม/หมวกทั้งหมด",
                choose: "ทางเลือก",
                sale_money: "ขาย",
                settlement_cycle: "วงจรการตั้งถิ่นฐาน",
                circular_settlement: "การตั้งถิ่นฐานแบบวงกลม",
                single_settlement: "การตั้งถิ่นฐานครั้งเดียว",
                hour: "ชั่วโมง",
                rate: "อัตราดอกเบี้ย",
                interest_limit1: "เพดานดอกเบี้ย",
                last_count: "จำนวนที่เหลือ",
                buy_count: "ปริมาณการซื้อส่วนบุคคล",
                buy_again_time: "ซื้อเวลาอีกครั้ง",
                after: "หลัง",
                none: "ไม่มี",
                buy_info: "กรุณากรอกข้อมูลการซื้อ",
                money: "ปริมาณการซื้อ",
                enter_money: "กรุณาระบุจำนวนของ 10",
                enter_money1: "กรุณากรอกปริมาณการซื้อ",
                enter_money2: "กรุณาระบุจำนวนของ 10",
                every: "ทุกๆ",
                interest_trial_desc: "ดอกเบี้ยต่อชั่วโมง",
                interest_trial_desc1: "ดอกเบี้ยหลังจากชั่วโมง",
                interest_multiple: "ตรวจสอบดอกเบี้ย",
                interest_trial: "ทดลองดอกเบี้ย",
                buy: "ซื้อ",
                buy_limit_desc: "ปริมาณการซื้อถึงเพดาน",
                sold_out: "หมด",
                switch: "เปลี่ยนแผน",
                no: "ไม่มีแผน",
                please_choose: "กรุณาเลือกวิธีการที่เหมาะสม",
                settlement: "โหมดการตั้งถิ่นฐาน",
                cell1: "นาม",
                cell2: "ผลรวม",
                cell3: "ซื้อเวลา",
                cell4: "ชั่วโมงการตั้งถิ่นฐาน",
                cell5: "เวลาถอนเงิน",
                cell6: "วงจรดอกเบี้ย",
                cell7: "อัตราดอกเบี้ย",
                cell8: "ดอกเบี้ยปัจจุบัน/ฝา",
                interest_limit_desc: "ดอกเบี้ยถึงเพดาน",
                settled: "แจ้งชัด",
                redeem: "ไถ่ถอน",
                redeeming: "ไถ่ถอน...",
                history: "ประวัติกำไร",
                interest_history: "หลักสูตรดอกเบี้ย",
                program_desc: "โครงการนี้",
                mode: "แพทเทิร์น",
                interest_desc: "ตรวจสอบดอกเบี้ย",
                multiple: "คราว",
                di: "ข่าว",
                ci: "ครั้งที่",
                confirm_redeem: "คุณแน่ใจนะว่ามันเป็นค่าไถ่"
            },
            transfer: {
                center_money: "ดุลเงินกลาง",
                update_money: "ปรับปรุงสมดุล",
                money: "ยอดคงเหลือ",
                enter_money: "กรุณาระบุยอดเงินโอน",
                transfer_in: "ขยับเขยื้อนเคลื่อนไหว",
                go_deposit: "ไปฝากเงิน",
                err_desc: "กำลังเข้าสู่เกมโปรดรอสักครู่ .....",
                is_transfer: "ไม่มีการหมุนเวียนในความคืบหน้า...",
                err_login: "กรุณาเข้าสู่ระบบก่อนเข้าสู่เกม",
                enter_game: "เข้าสู่เกม"
            },
            wap: {
                cancel_collect_success: "ยกเลิกการจัดเก็บเรียบร้อยแล้ว！",
                collect_success: "การจัดเก็บสำเร็จ！",
                not_login: "ยังไม่ได้ล็อกอิน",
                login_check: "ดูหลังจากล็อกอิน",
                deposit: "เงินฝาก",
                draw: "ถอนเงิน",
                all: "ทั้งหมด",
                activity: "ส่วนลด",
                service: "บริการลูกค้า",
                my: "ของฉัน",
                welcome_serve: "ยินดีต้อนรับสู่ศูนย์บริการลูกค้า",
                main_service: "การบริการลูกค้าสายหลัก",
                main_service1: "ตัวแทนฝ่ายบริการลูกค้า",
                main_service2: "บริการสายชั่วโมงใกล้ชิดมากที่สุด",
                register_btn: "ลงทะเบียน",
                welcome: "ยินดีต้อนรับสู่",
                normal_desc: "ฟังก์ชั่นทั่วไป",
                level_power: "สิทธิ์ระดับ",
                extension: "ส่งเสริมการสร้างรายได้",
                member_info: "ข้อมูลส่วนบุคคล",
                member_safe: "บัญชีและความปลอดภัย",
                member_safe1: "ปรับปรุงข้อมูลบัญชีที่ปลอดภัยมากขึ้น",
                collection: "คอลเลกชันของฉัน",
                collection1: "ทุกสิ่งที่คุณรักอยู่ที่นี่",
                message: "ข้อความของฉัน",
                setting: "ตั้งค่า",
                safety_setting: "ตั้งค่าความปลอดภัย",
                contact_us: "ติดต่อเรา",
                about_us: "เกี่ยวกับเรา",
                logout: "ออกจากการล็อกอิน",
                start: "เปิดประสบการณ์ที่ดีที่สุด",
                enter_account: "กรุณาใส่หมายเลขบัญชี",
                enter_psw: "กรุณาใส่รหัสผ่าน",
                enter_captcha: "กรุณาใส่รหัสยืนยัน",
                pay_way: "ช่องทางการชำระเงิน",
                pay_account: "โอนบัญชี",
                pay_name: "โอนเงิน",
                pay_money: "จำนวนเงินที่จ่าย",
                pay_money1: "จำนวนเงินที่คุณต้องจ่ายจริง",
                pay_file: "อัปโหลดบัตรกำนัลการโอน",
                confirm: "ตกลง",
                pay_tips: "เคล็ดลับอบอุ่น",
                pay_tips1: "1.ธนาคารที่ระบุไว้ข้างต้นเป็นธนาคารที่ได้รับการสนับสนุนโดย การชำระเงินออนไลน์ และเลือกธนาคารการชำระเงินของคุณ",
                pay_tips2: "2.กรอกจำนวนเงินที่คุณต้องการชำระในส่วน จำนวนเงินฝาก และคลิกปุ่ม ส่ง",
                pay_tips3: "3.หลังจากความสำเร็จของเงินฝากที่คุณจะต้องเพิ่มจำนวนเงินเดิมพันที่มีประสิทธิภาพ",
                deposit_now: "เงินฝากปัจจุบัน",
                bet_amount_now: "การเดิมพันปัจจุบัน",
                bet: "เดิมพัน",
                vip_desc: "เอกสิทธิ์",
                my_vip1: "ของขวัญส่งเสริมการขาย",
                my_vip2: "ของขวัญรายวัน",
                my_vip3: "ของขวัญรายสัปดาห์",
                my_vip4: "ของขวัญรายเดือน",
                my_vip5: "ของขวัญวันเกิด",
                my_vip6: "ของขวัญประจำปี",
                yuan: "หยวน",
                vip: "สิทธิพิเศษวีไอพี",
                vip_detail: "รายละเอียดสิทธิ์การใช้งานวีไอพี",
                vip_lvl: "กฎการส่งเสริมการขาย",
                my_extend: "โปรโมชั่นของฉัน",
                under_check: "สอบถามรายละเอียดเพิ่มเติมโดยตรง",
                achievement_check: "แบบสอบถามประสิทธิภาพ",
                history_commission: "ค่าคอมมิชชั่นรวมในอดีต",
                can_commission: "ค่าคอมมิชชั่นที่ถอนได้",
                extend_detail: "บทช่วยสอนการส่งเสริมการขาย",
                my_xia: "ดาวน์ไลน์ของฉัน",
                click_extend: "คลิกที่รหัส QR เพื่อโปรโมตทันที",
                team_r1: "จำนวนทีมทั้งหมด",
                team_r2: "เติมเงิน",
                team_r3: "ถอนเงิน",
                team_r4: "จำนวนเงินเดิมพันที่มีประสิทธิภาพ",
                team_r5: "จำนวนผู้ใช้ออนไลน์",
                team_r6: "รางวัลชนะเลิศ",
                team_r7: "จำนวนเงินคืน",
                team_r8: "โบนัสกิจกรรม",
                team_r9: "เพิ่มจำนวน",
                team_r10: "กำไรสุทธิ",
                team_r11: "จำนวนที่ใช้งานอยู่",
                extension1: "วิธีการส่งเสริมการขาย 1",
                extension2: "วิธีการส่งเสริมการขาย 2",
                extension_link: "ลิงค์ส่งเสริมการขาย",
                copy: "คัดลอก",
                account_search: "ค้นหาบัญชีผู้ใช้",
                account_search_tips: "ป้อนบัญชีผู้เล่นโดยตรง",
                search_btn: "ค้นหา",
                reset_btn: "ตั้งค่าใหม่",
                single_money: "ยอดคงเหลือส่วนบุคคล",
                team_num: "จำนวนทีม",
                team_money: "ยอดคงเหลือของทีม",
                last_login: "ล็อกอินล่าสุด",
                sub_account: "บัญชีผู้อยู่ใต้บังคับบัญชา",
                bet_amount: "จำนวนเงินเดิมพัน",
                fs_amount: "จำนวนเงินค่าคอมมิชชั่นคืน",
                count_time: "คำนวณวันที่",
                copy_success: "คัดลอกสำเร็จ！",
                account: "บัญชีผู้ใช้",
                my_qr: "รหัสสองมิติของฉัน",
                copy_link: "คัดลอกส่วนเชื่อมโยง",
                phone: "เบอร์มือถือ",
                write: "กรอกข้อมูล",
                email: "อีเมล",
                login_psw: "รหัสผ่านเข้าสู่ระบบ",
                qk_psw: "รหัสผ่านการถอนเงิน",
                change: "แก้ไข",
                slot: "ความบันเทิงอิเลคทรอนิคส์",
                casino: "เกมไลฟ์แอ็กชัน",
                sport: "เกมกีฬา",
                lottery: "เกมลอตเตอรี",
                fish: "เกมตกปลา",
                board: "เกมหมากรุก",
                no_collect: "ไม่มีเนื้อหาของคอลเลกชัน",
                suggestion: "การร้องเรียนและข้อเสนอแนะ",
                online_submit: "ส่งทางออนไลน์",
                enter: "ป้อน",
                enter_suggestion: "กรุณาป้อนความคิดเห็นของคุณ",
                check_suggestion: "ส่งเพื่อดูคำแนะนำการร้องเรียนของฉัน",
                my_suggestion: "คำแนะนำการร้องเรียนของฉัน",
                question: "ส่งคำถาม:",
                question_des: "คำอธิบายปัญหา:",
                about_us_detail: "เกี่ยวกับรายละเอียดของเรา",
                other_contact: "รายละเอียดการติดต่ออื่นๆ",
                phone_contact: "สายด่วนบริการ",
                user_name_tips: "ตัวอักษรเริ่มต้นตัวอักษรจำกัดตัวเลข",
                user_name_tips1: "กรุณากรอกบัญชีสมาชิก",
                psw_tips: "มากกว่าหกตัวอักษรต้องมีตัวอักษรและตัวเลข",
                psw_tips1: "กรุณากรอกรหัสผ่านสมาชิก",
                confirm_psw: "กรุณายืนยันรหัสผ่านอีกครั้ง",
                confirm_psw1: "กรุณากรอกรหัสผ่าน",
                real_name_tips: "กรุณาใส่ชื่อจริง",
                phone_tips: "กรุณาใส่หมายเลขโทรศัพท์มือถือของคุณ",
                send_sms: "ส่งรหัสการตรวจสอบ",
                re_send_sms: "ส่งใหม่",
                sms_code: "รหัสตรวจสอบโทรศัพท์มือถือ",
                sms_code_tips: "กรุณาใส่รหัสการตรวจสอบโทรศัพท์มือถือ",
                register_tips: "เปิดบัญชีทันทีเพื่อความบันเทิง",
                sms_success: "ตรวจสอบรหัสส่งเรียบร้อยแล้ว",
                app_tips: "ดาวน์โหลด app และประสบการณ์ที่ยอดเยี่ยมมากขึ้น!",
                down_app_now: "ดาวน์โหลดทันที",
                is_loading: "โหลด...",
                currency: "ประเภทของเงิน",
                select_currency: "กรุณาเลือกประเภทของสกุลเงิน",
                area: "รหัสพื้นที่",
                about1: "การรับรองอย่างเป็นทางการ",
                about2: "ภาษาอังกฤษ",
                about3: "คณะกรรมการกำกับดูแล",
                about4: "ใบอนุญาตการพนันมอลตา",
                about5: "ใบรับรอง",
                about6: "หมู่เกาะเวอร์จินบริติช",
                about7: "ฟิลิปปินส์",
                about8: "ดูแลใบอนุญาตการพนัน",
                about9: "หุ้นส่วน"
            }
        }
    },
    "47f1": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-table",
            use: "icon-table-usage",
            viewBox: "0 0 128 128",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-table"><path d="M.006.064h127.988v31.104H.006V.064zm0 38.016h38.396v41.472H.006V38.08zm0 48.384h38.396v41.472H.006V86.464zM44.802 38.08h38.396v41.472H44.802V38.08zm0 48.384h38.396v41.472H44.802V86.464zM89.598 38.08h38.396v41.472H89.598zm0 48.384h38.396v41.472H89.598z" /><path d="M.006.064h127.988v31.104H.006V.064zm0 38.016h38.396v41.472H.006V38.08zm0 48.384h38.396v41.472H.006V86.464zM44.802 38.08h38.396v41.472H44.802V38.08zm0 48.384h38.396v41.472H44.802V86.464zM89.598 38.08h38.396v41.472H89.598zm0 48.384h38.396v41.472H89.598z" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    "48fb": function(e, t, n) {
        "use strict";
        n.r(t);
        n("d3b7");
        var a = n("fe0c"),
        i = {
            activityList: null
        },
        o = {
            getActivityList: function(e, t) {
                var n = e.commit;
                e.state;
                return new Promise((function(e, i) {
                    Object(a["d"])(t).then((function(t) {
                        n("SET_ACTIVITY_LIST", t.data.activity),
                        e(t)
                    }))
                }))
            }
        },
        c = {
            SET_ACTIVITY_LIST: function(e, t) {
                e.activityList = t
            }
        },
        r = {};
        t["default"] = {
            namespaced: !0,
            state: i,
            actions: o,
            mutations: c,
            getters: r
        }
    },
    "4df5": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-eye",
            use: "icon-eye-usage",
            viewBox: "0 0 128 64",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 64" id="icon-eye"><path d="M127.072 7.994c1.37-2.208.914-5.152-.914-6.87-2.056-1.717-4.797-1.226-6.396.982-.229.245-25.586 32.382-55.74 32.382-29.24 0-55.74-32.382-55.968-32.627-1.6-1.963-4.57-2.208-6.397-.49C-.17 3.086-.399 6.275 1.2 8.238c.457.736 5.94 7.36 14.62 14.72L4.17 35.96c-1.828 1.963-1.6 5.152.228 6.87.457.98 1.6 1.471 2.742 1.471s2.284-.49 3.198-1.472l12.564-13.983c5.94 4.416 13.021 8.587 20.788 11.53l-4.797 17.418c-.685 2.699.686 5.397 3.198 6.133h1.37c2.057 0 3.884-1.472 4.341-3.68L52.6 42.83c3.655.736 7.538 1.227 11.422 1.227 3.883 0 7.767-.49 11.422-1.227l4.797 17.173c.457 2.208 2.513 3.68 4.34 3.68.457 0 .914 0 1.143-.246 2.513-.736 3.883-3.434 3.198-6.133l-4.797-17.172c7.767-2.944 14.848-7.114 20.788-11.53l12.336 13.738c.913.981 2.056 1.472 3.198 1.472s2.284-.49 3.198-1.472c1.828-1.963 1.828-4.906.228-6.87l-11.65-13.001c9.366-7.36 14.849-14.474 14.849-14.474z" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    "51be": function(e, t, n) {
        "use strict";
        n.r(t);
        n("4de4"),
        n("7db0"),
        n("b680"),
        n("d3b7");
        var a = n("bc64"),
        i = n("2b0e"),
        o = {
            api_moneys: [],
            wallet_list: [],
            gametypes: []
        },
        c = {
            getGameTypes: function(e) {
                var t = e.commit;
                return new Promise((function(e, n) {
                    Object(a["m"])().then((function(e) {
                        "success" == e.status && t("SET_GAMETYPES", e.data)
                    }))
                }))
            },
            getAllApiMoneys: function(e) {
                var t = e.commit;
                return new Promise((function(e, n) {
                    Object(a["d"])().then((function(n) {
                        t("SET_WALLET_LIST", n.data.api_moneys),
                        t("SET_API_MONEYS", n.data.api_moneys),
                        t("member/SET_MONEY", n.data.api_moneys.find((function(e) {
                            return "money" == e.api_name
                        })).money, {
                            root: !0
                        }),
                        t("member/SET_FS_MONEY", n.data.api_moneys.find((function(e) {
                            return "fs_money" == e.api_name
                        })).money, {
                            root: !0
                        }),
                        e(n)
                    })).
                    catch((function(e) {
                        n(e)
                    }))
                }))
            },
            depositApi: function(e, t) {
                var n = e.commit,
                i = e.rootState;
                return new Promise((function(e, o) {
                    Object(a["h"])(t).then((function(a) {
                        "success" == a.status && (n("INCREMENT_API_MONEYS", t), "money" == t.money_type ? n("member/SET_MONEY", (parseFloat(i.member.money) - parseFloat(t.money)).toFixed(2), {
                            root: !0
                        }) : n("member/SET_FS_MONEY", (parseFloat(i.member.fs_money) - parseFloat(t.money)).toFixed(2), {
                            root: !0
                        })),
                        e(a)
                    })).
                    catch((function(e) {
                        o(e)
                    }))
                }))
            },
            withdrawalApi: function(e, t) {
                var n = e.commit,
                i = e.rootState;
                return new Promise((function(e, o) {
                    Object(a["j"])(t).then((function(a) {
                        "success" == a.status && (n("DECREMENT_API_MONEYS", t), n("member/SET_MONEY", (parseFloat(i.member.money) + parseFloat(t.money)).toFixed(2), {
                            root: !0
                        })),
                        e(a)
                    })).
                    catch((function(e) {
                        o(e)
                    }))
                }))
            },
            changeTransMode: function(e, t) {
                var n = e.commit,
                i = e.dispatch;
                return new Promise((function(e, o) {
                    Object(a["g"])(t).then((function(a) {
                        "success" == a.status && (n("member/SET_IS_TRANS", t.status, {
                            root: !0
                        }), i("getAllApiMoneys")),
                        e(a)
                    })).
                    catch((function(e) {
                        o(e)
                    }))
                }))
            },
            refershGameBalance: function(e, t) {
                var n = e.commit;
                return new Promise((function(e, i) {
                    Object(a["f"])(t).then((function(a) {
                        "success" == a.status && (t.money = parseFloat(a.money).toFixed(2), n("UPDATE_API_MONEYS", t)),
                        e(a)
                    })).
                    catch((function(e) {
                        i(e)
                    }))
                }))
            },
            getSingleApiMoney: function(e, t) {
                var n = e.commit;
                return new Promise((function(e, i) {
                    Object(a["e"])(t).then((function(t) {
                        "success" == t.status && (n("SET_OR_UPDATE_API_MONEY", t.data.money_info), n("member/SET_MONEY", t.data.money_info.find((function(e) {
                            return "money" == e.api_name
                        })).money, {
                            root: !0
                        }), n("member/SET_IS_TRANS", t.data.is_trans_on, {
                            root: !0
                        })),
                        e(t)
                    })).
                    catch((function(e) {
                        i(e)
                    }))
                }))
            },
            recoverMoney: function(e) {
                var t = e.commit;
                return new Promise((function(e, n) {
                    Object(a["o"])().then((function(n) {
                        t("SET_WALLET_LIST", n.data.api_moneys),
                        t("SET_API_MONEYS", n.data.api_moneys),
                        t("member/SET_MONEY", n.data.api_moneys.find((function(e) {
                            return "money" == e.api_name
                        })).money, {
                            root: !0
                        }),
                        t("member/SET_FS_MONEY", n.data.api_moneys.find((function(e) {
                            return "fs_money" == e.api_name
                        })).money, {
                            root: !0
                        }),
                        e(n)
                    })).
                    catch((function(e) {
                        n(e)
                    }))
                }))
            }
        },
        r = {
            SET_GAMETYPES: function(e, t) {
                e.gametypes = t
            },
            SET_API_MONEYS: function(e, t) {
                e.api_moneys = t.filter((function(e) {
                    return "money" != e.api_name && "fs_money" != e.api_name
                }))
            },
            SET_WALLET_LIST: function(e, t) {
                e.wallet_list = t
            },
            INCREMENT_API_MONEYS: function(e, t) {
                var n = e.api_moneys.find((function(e) {
                    return e.api_name == t.api_code
                }));
                i["a"].set(n, "money", (parseFloat(n.money ? n.money: 0) + parseFloat(t.money)).toFixed(2))
            },
            DECREMENT_API_MONEYS: function(e, t) {
                var n = e.api_moneys.find((function(e) {
                    return e.api_name == t.api_code
                }));
                i["a"].set(n, "money", (parseFloat(n.money) - parseFloat(t.money)).toFixed(2))
            },
            UPDATE_API_MONEYS: function(e, t) {
                var n = e.api_moneys.find((function(e) {
                    return e.api_name == t.api_code
                }));
                i["a"].set(n, "money", t.money)
            },
            SET_OR_UPDATE_API_MONEY: function(e, t) {
                var n = t.filter((function(e) {
                    return "money" != e.api_name && "fs_money" != e.api_name
                }))[0];
                n && (0 == e.api_moneys.length || e.api_moneys.find((function(e) {
                    return e.api_name == n.api_name
                })) ? r.SET_API_MONEYS(e, t) : (n.api_code = n.api_name, r.UPDATE_API_MONEYS(e, n)))
            }
        },
        s = {};
        t["default"] = {
            namespaced: !0,
            state: o,
            actions: c,
            mutations: r,
            getters: s
        }
    },
    "51ff": function(e, t, n) {
        var a = {
            "./404.svg": "a14a",
            "./angle-double-down.svg": "7e78",
            "./angle-double-up.svg": "b527",
            "./check-circle.svg": "bad0",
            "./clipboard-list.svg": "6fbc",
            "./dashboard.svg": "f782",
            "./donate.svg": "6ba6",
            "./envelope.svg": "64e1",
            "./example.svg": "30c3",
            "./eye-open.svg": "d7ec",
            "./eye.svg": "4df5",
            "./form.svg": "eb1b",
            "./hand-holding-usd.svg": "1397",
            "./heart.svg": "c40a",
            "./history.svg": "c023",
            "./link.svg": "18f0",
            "./menu.svg": "bd3d",
            "./nested.svg": "dcf8",
            "./password.svg": "2a3d",
            "./piggy-bank.svg": "e025",
            "./refresh.svg": "b8c4",
            "./search.svg": "8e8d",
            "./spinner.svg": "5e7c",
            "./table.svg": "47f1",
            "./tree.svg": "93cd",
            "./trophy.svg": "617f",
            "./user-shield.svg": "a883",
            "./user.svg": "b3b5",
            "./wallet.svg": "402b"
        };
        function i(e) {
            var t = o(e);
            return n(t)
        }
        function o(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return a[e]
        }
        i.keys = function() {
            return Object.keys(a)
        },
        i.resolve = o,
        e.exports = i,
        i.id = "51ff"
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = {};
        n.r(a),
        n.d(a, "customCurrency", (function() {
            return K
        }));
        n("4de4"),
        n("4160"),
        n("d81d"),
        n("b64b"),
        n("d3b7"),
        n("159b"),
        n("ddb0"),
        n("66cf");
        var i, o = n("343b"),
        c = (n("e260"), n("e6cf"), n("cca6"), n("a79d"), n("2b0e")),
        r = function() {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("div", {
                attrs: {
                    id: "app"
                }
            },
            [n("transition", {
                attrs: {
                    name: e.transitionName
                }
            },
            [e.$route.meta.keepAlive ? n("keep-alive", [n("router-view", {
                staticClass: "router"
            })], 1) : n("router-view", {
                staticClass: "router"
            })], 1), n("Login"), n("van-dialog", {
                staticClass: "alert_img",
                attrs: {
                    showConfirmButton: !1,
                    closeOnClickOverlay: "",
                    "lazy-render": !0
                },
                model: {
                    value: e.showNotice,
                    callback: function(t) {
                        e.showNotice = t
                    },
                    expression: "showNotice"
                }
            },
            [n("a", {
                attrs: {
                    href: e.alertContent.url
                }
            },
            [n("img", {
                attrs: {
                    src: e.alertContent.content,
                    alt: ""
                }
            })]), n("Icon", {
                staticClass: "close_btn",
                attrs: {
                    name: "cross"
                },
                on: {
                    click: function(t) {
                        e.showNotice = !1
                    }
                }
            })], 1)], 1)
        },
        s = [],
        l = (n("c975"), n("b0c0"), n("5530")),
        u = n("ade3"),
        m = (n("c3a6"), n("ad06")),
        _ = (n("e17f"), n("2241")),
        h = n("2f62"),
        d = n("ed08"),
        g = function() {
            var e = this,
            t = e.$createElement,
            a = e._self._c || t;
            return a("Popup", {
                staticStyle: {
                    height: "80%"
                },
                attrs: {
                    value: e.showLogin,
                    position: "bottom",
                    "close-on-popstate": ""
                },
                on: {
                    "click-overlay": e.close,
                    open: e.getCaptcha
                }
            },
            [a("div", {
                staticClass: "login-container"
            },
            [a("img", {
                staticClass: "loginPopup-close",
                attrs: {
                    src: n("1425"),
                    alt: "close",
                    width: "14px"
                },
                on: {
                    click: e.close
                }
            }), a("div", {
                staticClass: "loginVersion3"
            },
            [a("form", {
                staticClass: "loginVersion3-form"
            },
            [a("img", {
                attrs: {
                    src: e.getConfig("site_wap_logo"),
                    alt: "",
                    height: "35px"
                }
            }), a("h4", [e._v(e._s(e.$t("m.wap.start")))]), a("div", {
                staticClass: "loginVersion3-form-container"
            },
            [a("div", {
                staticClass: "loginVersion3-form-group CInput"
            },
            [a("div", {
                staticClass: "CInput-prefix"
            },
            [a("img", {
                staticClass: "icon",
                attrs: {
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADfElEQVRYR8WX228TRxTGvzNrE0GiEFFVQCkXBcpVJPXih+DYiSxnCaCWBxDQSkg89gGpEnkIj/iVIkCqxB+AkJBAqC+AheNYJo7j8BDsGFC5CFEVcatQS7gkFbF3TrVuUyWwsDMOEvNmz3e+85uzM3N2CZ94UK35M/lrqyQbzTYAP9n3o6FN92rx0gKIx+Oi3fp2P0lxiMFrpickojvM8shQ+sKpeDwuVWGUAZLJUr2ot8+AseND5gRcsCeM77u7W8dVIJQBUrnR82C5S8UUhF+ssKmkVQJIDRV2QeK8UvL/RMTY3dVhesaoAWQLeRA26wCAMWx1mCGvGE+ATKbYVPbxnwQIL7Pp8wxIf4U+i0YDYx575sO2qfz1jbAr13WS/681fC1WqOXGrAAGhm+sm6yUf60JwMfrrc2bbs0KIFkq1YtX8i8wz9GCIEzKcWOB13H03ANO0tRg4TKAbi0AIGlFzK1eMUoAfdlCJxGueJlNnxfC1xlrb8l6xSgBVKuQKx4H80Evw+o80QkrHOhR0SoDMLNI50o/gbiHmV3jiIjBfDwWDvQSkVI/UAaYWk06XwxJyYeIYTEwt7pg4G8mpISgI7FQIK+y8imNNsBU4MjIiP+PN+IL5/fCOvk4GAyWdRIrAyQSiTpf46KNBuFZrN38XSVJOj+6xK7wCprXeNMKrnxR0z3gnH/jlTwsWf5AoEYADNAlBp+huTJhBYMzjDOZTEPFmN9NhL0M7ARgAHhDhNN17OuNRFqeu4G4PoJMfmRtxRbO2V/+Hnqn3A8J9MTZdQAtBvhLAO+7rJ76RN22aPuG0bf93gFwyidtOQxgqUq5NTRPhUDb24/xHYD+XPE0M+/TMFaWEuFsV9j8bnrADIC+geJXEHxbt/VqEEhiWtcV+fqu6ynoHxrtYSmPKRvWIiTqtcKBo64AqVwxCeYttfhqxKStiNnlDjBYcN7tV2qY1SCl36xIoNkdIFt4DUJ9Da46IeNWxGxw3wO5wgAzOnTcdLVMyG4Jm52uAM5tZvubfmTmAwCq9/xHHI+J6KRRHvs5Go2+dgWY+vPcOTaalpRiBuMbydIC0Wowa70Vw2nHzHcFiZRNuDj2qDW9Zw85n5IzhlI3TFy92jin4m+FLZpBvIwEPpdc3Sv/tmPCBAETLPEMTA9gyPuTvnJpe1vbS68KKgF4mcxm/h8CeDowJSVNowAAAABJRU5ErkJggg=="
                }
            })]), a("div", {
                staticClass: "CInput-container"
            },
            [a("div", {
                staticClass: "CInput-input"
            },
            [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.loginForm.name,
                    expression: "loginForm.name"
                }],
                attrs: {
                    required: "",
                    placeholder: e.$t("m.wap.enter_account"),
                    minlength: "6",
                    maxlength: "8",
                    pattern: "[A-z0-9]{6,8}",
                    type: "text"
                },
                domProps: {
                    value: e.loginForm.name
                },
                on: {
                    input: function(t) {
                        t.target.composing || e.$set(e.loginForm, "name", t.target.value)
                    }
                }
            })]), a("div", {
                staticClass: "CInput-suffix"
            })])]), a("div", {
                staticClass: "loginVersion3-form-group CInput"
            },
            [a("div", {
                staticClass: "CInput-prefix"
            },
            [a("img", {
                staticClass: "icon",
                attrs: {
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACk0lEQVRYR+2Xz3MLYRjHv89uJqlheqBFnFyiNMNMtnFANlXTN4zhhJth6K0H/gF1UP8AB7cyjJtxqjFkM6rZ4CA2M0xK5eIkaDl0YjTR3cc0SSu/kxWmDtnbO/t8n+fzfPeZd9+XsMYPrXF9/BHAw1TK5Uwv9JEsb11ugE3zU87dPXvU48nabcgWgKYnDhJwgQEB8IbyYpQhQGPgulB9T1sFaQlgcires84h32LwsVYSE+jBjyXz3PEh/3yz+KYA4emER5IRZubtzZKVvieiD5aJUGjQl2qkawjw6Hlyo2zmXgC8oywJ8xuQdJ+YZ/MzQNQHtk6AaHfFZ3lvys59R/Z7v9WDaAig6cYEgPMl4gwDo6GA7y6IuAKKwrHEaQJuACidj5tCVUZsA0SiRj8TXgOQ82JGFmQNC9Ufa2SppscDYCkCgqsYZxJjz3BQmamlq+uA9swYh4VLKyJmjIeCyuVW5iAcNa4QYWw1VsJVcUD5vS5JUh8gZrwEw1/onk0XyB0MKnOtAESjRm8WnAZRwT1CXASUvfYc0I0vAHqLohmhKt5Wiq/EaLqRBNBfXM8JVdlsCyCsJ04RUd4hyzTnDw8OPLED8Hj61SFJlnsKBjKHVN89WwB2irUTWzUDkZgxxoyToOr/BDG9Y7Ymtm3qmvJ6vbnSwslk0vnx6+IQkTTCxDsroYjBDJoUqm91sAvjUfFouvETgKNxV7wIkt6C+XNhyGgL2NoFUFdDHbMpggNluWsBlG8w7fhbQytUpaxmB6DjQMeBjgP/oQNRIwPC+r+8ARbSMb6LoFJ2nK/lwG0AZ/4JAHBHqMrZ0txVAMu3Hkd64aIkkQIunmjapSE2LYuNJXf3tcrbU9N7Qbu1m+k7AL8Au2YCMH7FOCAAAAAASUVORK5CYII="
                }
            })]), a("div", {
                staticClass: "CInput-container"
            },
            [a("div", {
                staticClass: "CInput-input"
            },
            [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.loginForm.password,
                    expression: "loginForm.password"
                }],
                attrs: {
                    required: "",
                    placeholder: e.$t("m.wap.enter_psw"),
                    minlength: "6",
                    maxlength: "13",
                    type: "password",
                    pattern: "[A-z0-9]{6,13}"
                },
                domProps: {
                    value: e.loginForm.password
                },
                on: {
                    input: function(t) {
                        t.target.composing || e.$set(e.loginForm, "password", t.target.value)
                    }
                }
            })])])]), 1 == e.getConfig("vip1_is_login_captcha_open") ? a("div", {
                staticClass: "loginVersion3-form-group CInput"
            },
            [a("div", {
                staticClass: "CInput-prefix"
            },
            [a("img", {
                staticClass: "icon",
                attrs: {
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACk0lEQVRYR+2Xz3MLYRjHv89uJqlheqBFnFyiNMNMtnFANlXTN4zhhJth6K0H/gF1UP8AB7cyjJtxqjFkM6rZ4CA2M0xK5eIkaDl0YjTR3cc0SSu/kxWmDtnbO/t8n+fzfPeZd9+XsMYPrXF9/BHAw1TK5Uwv9JEsb11ugE3zU87dPXvU48nabcgWgKYnDhJwgQEB8IbyYpQhQGPgulB9T1sFaQlgcires84h32LwsVYSE+jBjyXz3PEh/3yz+KYA4emER5IRZubtzZKVvieiD5aJUGjQl2qkawjw6Hlyo2zmXgC8oywJ8xuQdJ+YZ/MzQNQHtk6AaHfFZ3lvys59R/Z7v9WDaAig6cYEgPMl4gwDo6GA7y6IuAKKwrHEaQJuACidj5tCVUZsA0SiRj8TXgOQ82JGFmQNC9Ufa2SppscDYCkCgqsYZxJjz3BQmamlq+uA9swYh4VLKyJmjIeCyuVW5iAcNa4QYWw1VsJVcUD5vS5JUh8gZrwEw1/onk0XyB0MKnOtAESjRm8WnAZRwT1CXASUvfYc0I0vAHqLohmhKt5Wiq/EaLqRBNBfXM8JVdlsCyCsJ04RUd4hyzTnDw8OPLED8Hj61SFJlnsKBjKHVN89WwB2irUTWzUDkZgxxoyToOr/BDG9Y7Ymtm3qmvJ6vbnSwslk0vnx6+IQkTTCxDsroYjBDJoUqm91sAvjUfFouvETgKNxV7wIkt6C+XNhyGgL2NoFUFdDHbMpggNluWsBlG8w7fhbQytUpaxmB6DjQMeBjgP/oQNRIwPC+r+8ARbSMb6LoFJ2nK/lwG0AZ/4JAHBHqMrZ0txVAMu3Hkd64aIkkQIunmjapSE2LYuNJXf3tcrbU9N7Qbu1m+k7AL8Au2YCMH7FOCAAAAAASUVORK5CYII="
                }
            })]), a("div", {
                staticClass: "CInput-container"
            },
            [a("div", {
                staticClass: "CInput-input"
            },
            [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.loginForm.captcha,
                    expression: "loginForm.captcha"
                }],
                attrs: {
                    required: "",
                    placeholder: e.$t("m.wap.enter_captcha"),
                    minlength: "4",
                    maxlength: "6",
                    type: "text"
                },
                domProps: {
                    value: e.loginForm.captcha
                },
                on: {
                    focus: function(t) {
                        e.captcha_img || e.getCaptcha()
                    },
                    input: function(t) {
                        t.target.composing || e.$set(e.loginForm, "captcha", t.target.value)
                    }
                }
            })]), a("div", {
                staticClass: "CInput-suffix"
            },
            [a("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.captcha_img,
                    expression: "captcha_img"
                }],
                attrs: {
                    src: "",
                    src: e.captcha_img
                },
                on: {
                    click: e.getCaptcha
                }
            })])])]) : e._e()]), a("div", {
                staticStyle: {
                    "margin-top": "10px"
                }
            },
            [a("Checkbox", {
                attrs: {
                    shape: "square"
                },
                model: {
                    value: e.remember_psw,
                    callback: function(t) {
                        e.remember_psw = t
                    },
                    expression: "remember_psw"
                }
            },
            [e._v("记住密码")])], 1), a("button", {
                staticClass: "submitBtn",
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.onSubmit
                }
            },
            [e._v(" " + e._s(e.$t("m.auth.login_btn")))]), a("div", {
                staticClass: "loginVersion3-form-operation"
            },
            [a("span", {
                on: {
                    click: e.forgetPassword
                }
            },
            [e._v(e._s(e.$t("m.auth.forget_psw")))]), 1 == e.getConfig("is_demo_play_open") ? a("span", {
                on: {
                    click: e.shiwanLogin
                }
            },
            [e._v(e._s(e.$t("m.auth.shiwan")))]) : e._e(), a("span", {
                on: {
                    click: e.register
                }
            },
            [e._v(e._s(e.$t("m.wap.register_btn")))])])])])])])
        },
        p = [],
        f = (n("3c32"), n("417e")),
        y = (n("e7e5"), n("d399")),
        b = (n("8a58"), n("e41f")),
        w = n("2755"),
        v = n("ed95"),
        k = n("a78e"),
        S = n.n(k),
        T = {
            name: "Login",
            data: function() {
                return {
                    loginForm: new w["f"],
                    captcha_img: "",
                    remember_psw: !0
                }
            },
            components: {
                Popup: b["a"],
                Dialog: _["a"],
                Toast: y["a"],
                Checkbox: f["a"]
            },
            computed: Object(l["a"])({},
            Object(h["e"])({
                showLogin: function(e) {
                    return e.common.showLogin
                }
            }), {},
            Object(h["c"])({
                getConfig: "common/getConfig"
            })),
            mounted: function() {},
            methods: Object(l["a"])({},
            Object(h["d"])({
                CHANGE_LOGIN_STATUS: "common/CHANGE_LOGIN_STATUS"
            }), {
                close: function() {
                    this.CHANGE_LOGIN_STATUS(!1)
                },
                getCaptcha: function() {
                    var e = this;
                    this.loginForm.name = S.a.get("vue_account"),
                    this.loginForm.password = S.a.get("vue_password"),
                    Object(v["e"])().then((function(t) {
                        "success" == t.status && (e.loginForm.key = t.data.key, e.captcha_img = t.data.img)
                    }))
                },
                forgetPassword: function() {
                    Object(_["a"])({
                        message: this.$t("m.auth.forget_tips")
                    })
                },
                onSubmit: function() {
                    var e = this;
                    this.remember_psw && (S.a.set("vue_account", this.loginForm.name), S.a.set("vue_password", this.loginForm.password)),
                    this.$store.dispatch("member/login", this.loginForm).then((function(t) {
                        "success" == t.status ? (e.CHANGE_LOGIN_STATUS(!1), e.$router.push({
                            path: "/Main"
                        }), e.$store.dispatch("member/getMemberInfo"), e.loginForm = new w["f"]) : e.$store.commit("member/HANDLE_LOGOUT")
                    })).
                    catch((function(t) {
                        e.getCaptcha()
                    }))
                },
                shiwanLogin: function() {
                    var e = this;
                    this.shiwan().then((function(t) {
                        y["a"].fail(e.$t("m.auth.shiwan_tips")),
                        e.$router.push({
                            path: "/main"
                        })
                    }))
                },
                register: function() {
                    this.close(),
                    this.$router.push("/Register")
                }
            })
        },
        A = T,
        E = (n("e8fd"), n("2877")),
        x = Object(E["a"])(A, g, p, !1, null, "7fbbadca", null),
        C = x.exports,
        O = {
            name: "app",
            data: function() {
                return {
                    fs_money: 0,
                    is_fs_show: !0,
                    timer: null,
                    showNotice: !1,
                    alertContent: {}
                }
            },
            components: (i = {
                Login: C
            },
            Object(u["a"])(i, _["a"].Component.name, _["a"].Component), Object(u["a"])(i, "Icon", m["a"]), i),
            computed: Object(l["a"])({
                transitionName: function() {
                    return this.$route.meta.direction
                }
            },
            Object(h["c"])({
                getConfig: "common/getConfig",
                isLogin: "isLogin"
            }), {},
            Object(h["e"])({
                lang: function(e) {
                    return e.common.lang
                }
            })),
            mounted: function() {
                this.isLogin && this.$store.dispatch("member/getMemberInfo"),
                this.init()
            },
            methods: Object(l["a"])({},
            Object(h["b"])({
                getConfigs: "common/getConfigs",
                getSysLinks: "common/getSysLinks",
                getNotice: "common/getNotice",
                getReceiveMessage: "member/getReceiveMessageList"
            }), {},
            Object(h["d"])({
                SET_LANG: "common/SET_LANG"
            }), {
                init: function() {
                    var e = this;
                    this.lang && (this.SET_LANG(this.lang), this.$i18n.locale = this.lang, this.getNotice().then((function(t) {
                        t.alert.length > 0 && (e.showNotice = !0, e.alertContent = t.alert[0])
                    })), this.getConfigs().then((function(e) {
                        var t = location.hash,
                        n = ["LiveLevelUp", "SlotLevelUp", "Credit", "Activity", "liveLevelUp", "slotLevelUp", "credit", "activity", "Register", "register"],
                        a = "";
                        n.map((function(e) {
                            t.indexOf(e) > -1 && (a = "/" + t)
                        })),
                        Object(d["a"])() || (e.data.site_pc.indexOf("http") > -1 ? location.href = e.data.site_pc + a: location.href = location.protocol + "//" + e.data.site_pc + a)
                    })), this.getConfigs("site").then((function(t) {
                        document.title = e.getConfig("site_title")
                    })), this.getConfigs("activity"), this.getConfigs("drawing"), this.getConfigs("admin"), this.getConfigs("register"), this.getConfigs("service"), this.getConfigs("line"), this.getSysLinks(), this.getMessage())
                },
                getMessage: function() {
                    var e = this;
                    this.isLogin ? (this.getReceiveMessage(), clearInterval(this.timer), this.timer = setInterval((function() {
                        e.getReceiveMessage()
                    }), 1e4)) : clearInterval(this.timer)
                }
            }),
            watch: {
                isLogin: function() {
                    this.getMessage(),
                    this.isLogin && this.$store.dispatch("member/getMemberInfo")
                },
                lang: function() {
                    this.$i18n.locale = this.lang,
                    this.init()
                }
            }
        },
        M = O,
        I = (n("ff3e"), n("5c64"), Object(E["a"])(M, r, s, !1, null, null, null)),
        N = I.exports,
        q = n("a18c"),
        P = n("4360"),
        j = function() {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return e.isExternal ? n("div", e._g({
                staticClass: "svg-external-icon svg-icon",
                style: e.styleExternalIcon
            },
            e.$listeners)) : n("svg", e._g({
                class: e.svgClass,
                attrs: {
                    "aria-hidden": "true"
                }
            },
            e.$listeners), [n("use", {
                attrs: {
                    "xlink:href": e.iconName
                }
            })])
        },
        L = [];
        n("25f0"),
        n("498a");
        function B(e) {
            return /^(https?:|mailto:|tel:)/.test(e)
        }
        var D = {
            name: "SvgIcon",
            props: {
                iconClass: {
                    type: String,
                    required: !0
                },
                className: {
                    type: String,
                default:
                    ""
                }
            },
            computed: {
                isExternal: function() {
                    return B(this.iconClass)
                },
                iconName: function() {
                    return "#icon-".concat(this.iconClass)
                },
                svgClass: function() {
                    return this.className ? "svg-icon " + this.className: "svg-icon"
                },
                styleExternalIcon: function() {
                    return {
                        mask: "url(".concat(this.iconClass, ") no-repeat 50% 50%"),
                        "-webkit-mask": "url(".concat(this.iconClass, ") no-repeat 50% 50%")
                    }
                }
            }
        },
        V = D,
        R = (n("089d"), Object(E["a"])(V, j, L, !1, null, "2fcae5fc", null)),
        H = R.exports;
        c["a"].component("svg-icon", H);
        var z = n("51ff"),
        U = function(e) {
            return e.keys().map(e)
        };
        U(z);
        n("5cfb");
        var G = n("9923"),
        F = (n("baa5"), {
            subHttp: function(e) {
                return e.substr(e.lastIndexOf("//") + 2)
            },
            playGame: function(e, t, n) {
                t = t ? JSON.parse(t) : {};
                var a = q["default"].resolve({
                    path: "/LoginToSupplier",
                    query: Object(l["a"])({},
                    t, {},
                    n, {
                        api_code: e,
                        isMobile: 1
                    })
                }).href;
                1 === P["a"].getters.is_demo ? "LY" === e ? window.location.href = a: y["a"].fail("试玩账号仅支持本地彩票") : "LY" === e ? window.location.href = a: window.open(a, "_blank")
            },
            lineChatClick: function(e) {
                var t = window.open(e, "_open", "width=800,height=628");
                t.focus()
            },
            install: function(e, t) {
                e.prototype.$tools = F,
                e.tools = F
            }
        }),
        Y = F;
        n("ac1f"),
        n("5319");
        function K(e, t) {
            if ("未开通" == e) return "N/A";
            if (null === e) return 0;
            isNaN(e) && (e = "0"),
            e = e.toString().replace(/\$|\,/g, "");
            var n = e == (e = Math.abs(e));
            e = Math.floor(100 * e + .50000000001);
            var a = e % 100;
            e = Math.floor(e / 100).toString(),
            a < 10 && (a = "0" + a);
            for (var i = 0; i < Math.floor((e.length - (1 + i)) / 3); i++) e = e.substring(0, e.length - (4 * i + 3)) + "," + e.substring(e.length - (4 * i + 3));
            return "vi" == t ? (n ? "": "-") + e: (n ? "": "-") + e + "." + a
        }
        c["a"].config.productionTip = !1,
        c["a"].use(o["a"]),
        c["a"].use(Y),
        Object.keys(a).forEach((function(e) {
            c["a"].filter(e, a[e])
        })),
        c["a"].use((function(e) { (function(t) {
                var n = t.keys().map(t); (n || []).forEach((function(t) {
                    t = t.__esModule && t.
                default ? t.
                default:
                    t,
                    Object.keys(t).forEach((function(n) {
                        e.directive(n, t[n])
                    }))
                }))
            })(n("166a"))
        })),
        new c["a"]({
            router: q["default"],
            store: P["a"],
            i18n: G["a"],
            render: function(e) {
                return e(N)
            }
        }).$mount("#app")
    },
    5742 : function(e, t, n) {},
    "5c64": function(e, t, n) {
        "use strict";
        var a = n("d32a"),
        i = n.n(a);
        i.a
    },
    "5e7c": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-spinner",
            use: "icon-spinner-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-spinner"><defs><style type="text/css">#icon-spinner * {  }\n</style></defs><path d="M608 96c0 53.02-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.98 96 96z m-96 736c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96-42.98-96-96-96z m416-416c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96-42.98-96-96-96zM192 512c0-53.02-42.98-96-96-96S0 458.98 0 512s42.98 96 96 96 96-42.98 96-96z m25.844 198.156c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96c0-53.018-42.982-96-96-96z m588.312 0c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96c0-53.018-42.98-96-96-96zM217.844 121.844c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96-42.982-96-96-96z" fill="" p-id="15158" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    "5f87": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        })),
        n.d(t, "c", (function() {
            return r
        })),
        n.d(t, "b", (function() {
            return s
        }));
        var a = n("a78e"),
        i = n.n(a),
        o = "vue_member_login_token4";
        function c() {
            return i.a.get(o)
        }
        function r(e) {
            return i.a.set(o, e)
        }
        function s() {
            return i.a.remove(o)
        }
    },
    "617f": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-trophy",
            use: "icon-trophy-usage",
            viewBox: "0 0 1152 1024",
            content: '<symbol class="icon" viewBox="0 0 1152 1024" xmlns="http://www.w3.org/2000/svg" id="icon-trophy"><path d="M1104 128H896V48c0-26.6-21.4-48-48-48H304c-26.6 0-48 21.4-48 48v80H48C21.4 128 0 149.4 0 176v112c0 71.4 45 144.8 123.8 201.4 63 45.4 139.6 74.2 220 83.4C406.6 677 480 720 480 720v144h-96c-70.6 0-128 41.4-128 112v24c0 13.2 10.8 24 24 24h592c13.2 0 24-10.8 24-24v-24c0-70.6-57.4-112-128-112h-96v-144s73.4-43 136.2-147.2c80.6-9.2 157.2-38 220-83.4 78.6-56.6 123.8-130 123.8-201.4V176c0-26.6-21.4-48-48-48zM198.6 385.6C149.8 350.4 128 311.2 128 288v-32h128.4c2 65.2 11.6 122.4 25.6 172.4-30.2-10.4-58.4-24.8-83.4-42.8zM1024 288c0 32.2-35.4 72.2-70.6 97.6-25 18-53.4 32.4-83.6 42.8 14-50 23.6-107.2 25.6-172.4H1024v32z" fill="" p-id="15648" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    6491 : function(e, t, n) {},
    "64e1": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-envelope",
            use: "icon-envelope-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-envelope"><path d="M1004.6 381.6c7.8-6.2 19.4-0.4 19.4 9.4V800c0 53-43 96-96 96H96c-53 0-96-43-96-96V391.2c0-10 11.4-15.6 19.4-9.4 44.8 34.8 104.2 79 308.2 227.2 42.2 30.8 113.4 95.6 184.4 95.2 71.4 0.6 144-65.6 184.6-95.2 204-148.2 263.2-192.6 308-227.4zM512 640c46.4 0.8 113.2-58.4 146.8-82.8 265.4-192.6 285.6-209.4 346.8-257.4 11.6-9 18.4-23 18.4-37.8v-38c0-53-43-96-96-96H96C43 128 0 171 0 224v38c0 14.8 6.8 28.6 18.4 37.8 61.2 47.8 81.4 64.8 346.8 257.4 33.6 24.4 100.4 83.6 146.8 82.8z" fill="" p-id="15183" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    "6ba6": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-donate",
            use: "icon-donate-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-donate"><path d="M512 832c229.8 0 416-186.2 416-416S741.8 0 512 0 96 186.2 96 416s186.2 416 416 416zM467.6 194.8V161.2c0-18.4 14.8-33.2 33.2-33.2h22.2c18.4 0 33.2 14.8 33.2 33.2v34c31 1.6 61 12.2 86 30.8 11.2 8.2 12.4 24.6 2.4 34.2L612 291.2c-7.6 7.4-19 7.6-28 2-10.8-6.8-22.8-10.2-35.6-10.2h-77.8c-18 0-32.6 16.4-32.6 36.6 0 16.4 10 31 24.2 35.2l124.6 37.4c51.4 15.4 87.4 64.8 87.4 120.2 0 68-52.8 123-118.2 124.8v33.6c0 18.4-14.8 33.2-33.2 33.2h-22.2c-18.4 0-33.2-14.8-33.2-33.2v-34c-31-1.6-61-12.2-86-30.8-11.2-8.2-12.4-24.6-2.4-34.2l32.6-31c7.6-7.4 19-7.6 28-2 10.8 6.8 22.8 10.2 35.6 10.2h77.8c18 0 32.6-16.4 32.6-36.6 0-16.4-10-31-24.2-35.2l-124.6-37.4c-51.4-15.4-87.4-64.8-87.4-120.2 0.2-68 52.8-123 118.2-124.8zM960 704h-65c-39.2 52-89.2 95.4-146 128h127.6c10.6 0 19.2 7.2 19.2 16v32c0 8.8-8.6 16-19.2 16H147.2c-10.6 0-19.2-7.2-19.2-16v-32c0-8.8 8.6-16 19.2-16h127.6c-56.8-32.6-106.6-76-146-128H64c-35.4 0-64 28.6-64 64v192c0 35.4 28.6 64 64 64h896c35.4 0 64-28.6 64-64v-192c0-35.4-28.6-64-64-64z" fill="" p-id="14841" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    "6e41": function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "m", (function() {
            return a
        }));
        var a = {
            common: {
                app_down: "APP下载",
                index: "官网首页",
                promotion: "优惠大厅",
                server: "在线客服",
                apply_agent: "代理申请",
                chanting: "免息借呗",
                live: "真人升级",
                eGame: "电子升级",
                mail: "站内信",
                sign_in: "每日签到",
                red_bag: "抢红包",
                transfer_record: "交易记录",
                bet_record: "投注记录",
                change_psw: "修改密码",
                change_qk_psw: "修改取款密码",
                log_out: "登出",
                home: "首页",
                activity: "优惠活动",
                member_center: "会员中心",
                recharge: "充值",
                withdraw: "提现",
                transfer: "额度转换",
                money: "余额",
                notice: "公告",
                member_info: "基本资料",
                promotion_center: "优惠中心",
                action_success: "操作成功！",
                action_err: "操作异常！",
                ssfs: "时时反水",
                apply_draw: "申请提款",
                card: "银行卡管理",
                sys_notice: "系统公告",
                yuebao: "余额宝",
                fast_recharge: "快速充值",
                recharge_record: "充值记录",
                select_lang: "语言选择"
            },
            header: {},
            home: {
                welcome: "您好",
                login_please: "您好, 请登入",
                money: "余额与优惠",
                login: "登入查看"
            },
            game: {
                hot: "热门",
                new: "最新",
                recommend: "本月推荐",
                all: "全部",
                search_desc: "请输入搜索关键词",
                search: "搜索"
            },
            promotion: { in :"参与"
            },
            auth: {
                login: "会员登入",
                register: "注册账号",
                invite: "介绍人",
                account: "帐号",
                psw: "密码",
                confirm_psw: "确认密码",
                member_info: "会员资料",
                real_name: "真实姓名",
                phone: "手机号",
                qk_psw: "取款密码",
                confirm_qk_psw: "确认取款密码",
                captcha: "验证码",
                register_now: "立即注册",
                register_tips1: '1. 标记有 <span class="star">*</span> 者为必填项目。',
                register_tips2: "2. 手机与取款密码为取款金额时的凭证，请会员务必填写详细资料。",
                forget_psw: "忘记密码 ?",
                login_btn: "登录",
                shiwan: "试玩登录",
                go_around: "随便逛逛",
                go_pc: "去电脑版",
                forget_tips: "联系管理员重置密码",
                shiwan_tips: "您当前为试玩账号，只可在本站彩票试玩。",
                register_success: "注册成功，请进行登录"
            },
            member: {
                change_psw: "修改登入密码",
                change_qk_psw: "修改取款密码",
                bank_info: "银行资料",
                old_psw: "旧密码",
                new_psw: "新密码",
                confirm_new_psw: "确认新密码",
                please_enter: "请输入",
                cancel: "取消",
                confirm: "确认",
                psw_tips: "密码修改成功，请重新登录",
                qk_psw_tips: "取款密码修改成功",
                account_money: "账户余额",
                fs_money: "反水账户",
                one_key: "反水账户",
                transfer_to_auto: "切换至自动",
                transfer_to_hand: "切换至手动",
                transfer_out: "转出",
                transfer_in: "转入",
                money: "金额",
                enter_money: "请输入转账金额",
                transfer_err: "钱包之间不能互相转换",
                user_name: "用户名",
                a_draw_money: "可提款金额",
                draw_bank: "收款银行卡",
                select: "请选择",
                bank_account: "银行账户",
                owner_name: "持卡人姓名",
                draw_money: "提款金额",
                enter_draw_money: "请输入提款金额",
                draw_tips1: "温馨提示：当您的打码量不足时，提现会收取",
                draw_tips2: "%的手续费，当前剩余打码量",
                submit: "提交",
                qk_psw: "取款密码",
                enter_qk_psw: "请输入取款密码",
                no_qk_psw_tips: "您还未设置取款密码，请先设置取款密码再操作",
                no_bank_tips: "请先绑定银行卡",
                bind_time: "绑定时间",
                bank_address: "开户行",
                card_no: "卡号",
                re_bind: "重新绑定",
                add_card: "增加绑定",
                change_card: "银行卡变更",
                card_th1: "开户银行",
                card_th2: "开户人姓名",
                card_th3: "银行账号",
                card_th4: "开户网点",
                back: "返回",
                change_success: "修改成功",
                add_card_success: "添加银行卡成功",
                time: "时间",
                api_type: "接口类型",
                game_type: "游戏类型",
                no_data: "暂无数据",
                no_more: "没有更多了",
                statistics: "统计",
                total_bet: "总下注金额",
                total_win: "总输赢",
                game_detail: "游戏详情",
                game_detail1: "游戏单号",
                game_detail2: "游戏名称",
                game_detail3: "游戏类型",
                game_detail4: "场次信息",
                game_detail5: "下注明细",
                game_detail6: "下注金额",
                game_detail7: "有效下注",
                game_detail8: "派彩金额",
                game_detail9: "开奖结果",
                game_detail10: "下注时间",
                game_detail11: "派彩时间",
                account: "账号",
                real_name: "真实姓名",
                login_time: "最后登入时间",
                change_type: "变动类型",
                money_type: "金额类型",
                sum_money: "流水金额",
                a_sum_money: "有效金额",
                money_detail: "交易详情",
                money_detail1: "交易金额",
                money_detail2: "转入前余额",
                money_detail3: "转入后余额",
                money_detail4: "钱包类型",
                money_detail5: "转账类型",
                money_detail6: "操作描述",
                money_detail7: "交易时间",
                all: "全部",
                fs_wallet: "反水钱包",
                center_wallet: "中心钱包",
                today: "今日",
                last_day: "昨日",
                day_7: "7日内",
                day_30: "30日内",
                status: "状态",
                pay_type: "支付类型",
                total_money: "总金额",
                recharge_detail1: "订单号",
                recharge_detail2: "金额",
                recharge_detail3: "账号信息",
                recharge_detail4: "支付方式",
                recharge_detail5: "支付信息",
                recharge_detail6: "支付状态",
                recharge_detail7: "失败原因",
                recharge_detail8: "汇款时间",
                recharge_detail9: "管理员确认时间"
            },
            act: {
                news: "最新消息",
                back: "返回首页",
                server: "在线客服",
                app: "APP下载",
                apply: "点击申请",
                register: "免费开户",
                mobile_bet: "手机投注",
                slot: "电子游艺",
                xljc: "线路检测",
                firefox: "火狐浏览器",
                internet: "上网导航",
                deposit: "如何存款",
                withdraw: "如何取款",
                agent: "代理加盟",
                congratulations: "恭喜",
                apply_success: "成功办理",
                account: "会员账号",
                apply_act: "申请活动",
                apply_time: "申请时间",
                apply_status: "申请状态",
                remark: "备注",
                no_results: "未查询到信息",
                index: "官方首页",
                wheel: "抽奖转盘",
                wheel_rule: "抽奖规则",
                enter_account: "输入游戏账号查询",
                search: "查 询",
                total_deposit: "当日总存款",
                avia_bet: "当日有效投注",
                win_history: "历史中奖记录",
                have: "您当前有",
                wheel_times: "次抽奖机会",
                today_deposit: "当日存款",
                effective_flow: "有效流水",
                wheel_times2: "转盘次数",
                wheel_congratulations: "恭喜你中奖了，奖品是 ",
                check_lvl: "段位查询",
                enter_account1: "请输入你的会员账号",
                level_th1: "晋升标准等级",
                level_th2: "累计打码",
                level_th3: "等级礼金",
                level_th4: "周俸禄",
                level_th5: "月俸禄",
                level_th6: "借呗额度",
                level_th7: "累积礼金",
                level_th8: "时时返水",
                level_th9: "存取款加速通道",
                level_th10: "一对一客服经理",
                level: "级",
                levels: "等级",
                week_desc: "按您的等级计算，距离上次登录7天后再次登录即可自动到账，等级每周俸禄详情如下：",
                month_desc: "按您的等级计算，距离上次登录30天后再次登录即可自动到账，等级每月俸禄详情如下：",
                how_month: "如何申请每月俸禄？",
                how_week: "如何申请每周俸禄？",
                liveUp_desc: "玩真人视讯永久累计打码，让您的会员账号变成永久收益金管家！",
                account_info: "的账号信息",
                live_info_th1: "会员账号",
                live_info_th2: "当前等级",
                live_info_th3: "累积有效投注",
                live_info_th4: "等级彩金",
                live_info_th5: "周俸禄",
                live_info_th6: "月俸禄",
                live_info_th7: "距离晋级需有效投注",
                live_next: "距离下一级还差",
                bet: "注",
                award_th1: "会员帐号",
                award_th2: "奖励类型",
                award_th3: "奖励金额",
                award_th4: "发放时间",
                slotUp_desc: "喜讯：2020年7月2号起所有电子/棋牌/捕鱼永久累计打码，让您的会员账号变成永久收益金管家！",
                slotUp_desc2: "声明：强势升级后的累积打码标准将会进行调整，等级礼金、周俸禄、月俸禄也会进行提升；特此声明所有会员的等级变动都以更新后为准！",
                credit_title: "免息借呗",
                credit_query: "信用额度查询",
                credit_nav1: "信用规则",
                credit_nav2: "借还款记录",
                credit_nav3: "我要借款",
                credit_nav4: "我要还款",
                credit_index1: "活动详情",
                credit_index2: "信用规则",
                credit_index3: "活动细则",
                credit_index4: "借款说明",
                credit_index5: "还款说明",
                credit_info1: "会员账号",
                credit_info2: "VIP等级",
                credit_info3: "最高借款",
                credit_info4: "已借款",
                credit_info5: "总借款",
                credit_info6: "总还款",
                credit_info11: "会员账号",
                credit_info12: "借款金额",
                credit_info13: "还款金额",
                credit_info14: "借款天数",
                credit_info15: "还款倒计时",
                credit_info16: "审核进度",
                credit_info17: "日期",
                no_data: "暂无数据",
                borrow_tips: "温馨提示",
                borrow_tips1: '提交成功2小时后请到\n          <span style="color: rgb(255, 0, 0);">“信用额度查询”</span>\n          是否借款成功！若提示借款成功，请到澳门巴黎人登入会员账号是否成功加入，如果没有成功加款到会员账号上，请联系借呗在线客服处理！',
                borrow_tips2: "注意：提交成功5分钟后请到“信用额度查询”是否借款成功！",
                need_borrow: "我要借款",
                borrow_account: "会员账号",
                enter_borrow_account: "请填写会员账号",
                borrow_name: "会员姓名",
                enter_borrow_name: "请填写会员姓名",
                borrow_money: "借款金额",
                enter_borrow_money: "请填写借款金额",
                borrow_days: "借款天数",
                enter_borrow_days: "请填写借款天数",
                borrow_submit: "确认提交",
                repay_tips1: '还款操作步骤：一、输入会员账号点击【查询欠款额度】查看需要还款的金额；二、点击<span style="color: rgb(255, 0, 0);"><a href="#" target="_blank"\n                                                                                          title="在线付款">【在线付款】</a></span>选择方便支付的通道进行付款；<span\n            style="white-space: normal;">三</span>、付款成功后回到该页面填写相关信息点击【确认提交】；<span style="white-space: normal;">四</span>、提交成功2小时后，请到“信用额度查询”查询是否成功还款；五、成功还款1分钟后即可再次申请借款！',
                need_repay: "我要还款",
                check_repay: "查询欠款额度",
                repay_money: "还款金额",
                enter_repay_money: "请填写还款金额",
                repay_tips2: "注意：请点击“在线付款”进行付款，付款完成再来提交！",
                repay_tips3: "提交成功5分钟，请到“信用额度查询”查询是否成功还款！",
                qiankuan: "当前欠款:",
                enter_account2: "请填写会员帐号",
                enter_money: "请填写存款金额",
                enter_captcha: "请填写验证码",
                act_money: "存款金额",
                submit_now: "立即提交",
                apply_act1: "优惠申请",
                check_detail: "查看详情",
                act_center: "优惠申请中心",
                act_check: "优惠申请进度查询",
                act_select: "选择查询项目",
                act_check_btn: "点击查询",
                act_th1: "会员账号",
                act_th2: "活动名称",
                act_th3: "申请时间",
                act_th4: "申请状态",
                no_act: "未查询到信息"
            },
            fs: {
                desc: "您还有反水",
                lingqu: "可领取！",
                a_bet: "有效投注",
                rate: "返点比例",
                no_data: "您目前没有时时返水可以领取，快去游戏吧!",
                confirm: "领取"
            },
            red: {
                my_award: "我的奖励",
                Monday: "周一",
                Tuesday: "周二",
                Wednesday: "周三",
                Thursday: "周四",
                Friday: "周五",
                Saturday: "周六",
                Sunday: "周日",
                lx_award: "连续签到礼包",
                day_award: "天礼包",
                day_lq: "天时可以领取",
                receive: "领取",
                received: "已领取",
                sign: "马上签到",
                signed: "已签到",
                no_award: "暂无奖励数据",
                back_to_index: "回首页",
                award: "奖品",
                date: "日期",
                no_data: "暂无数据",
                back: "返回",
                start: "开始游戏",
                no_red: "该功能暂未开放",
                no_red1: "一个红包也没有抢到，多多加油"
            },
            mail: {
                mail: "发件",
                send_box: "发件箱",
                receive_box: "收件箱",
                read: "已读",
                un_read: "未读",
                no_data: "暂无数据",
                manager: "管理员",
                last_mail: "上条站内信",
                reply: "回复",
                mark_read: "标示为已读",
                mark_un_read: "标示为未读",
                delete: "删除",
                send: "发送站内信",
                title: "标题",
                content: "内容",
                delete_success: "删除成功",
                know: "知道了"
            },
            center: {
                my_account: "我的账户",
                base_info: "基本资料",
                card: "银行卡",
                change_psw: "修改密码",
                self: "自助服务",
                ssfs: "时时返水",
                yuebao: "余额宝",
                record: "往来记录",
                bet_record: "投注记录",
                recharge_record: "充值记录",
                news: "信息公告",
                new_news: "最新公告",
                mail: "站内信"
            },
            recharge: {
                time: "充值处理时间",
                time_desc: "7*24小时充值服务",
                tips: "如选择银行卡转账，请勿使用其他支付方式，否则充值将无法到账",
                online: "在线支付",
                company: "公司入款",
                money: "充值金额",
                enter_money: "请输入充值金额",
                limit: "单笔充值限额",
                min: "最低",
                max: "最高",
                tips1: "*平台填写金额应当与网银汇款金额完全一致，否则将无法即时到账！",
                next: "下一步",
                col_info: "收款方信息",
                col_account: "收款账户",
                col_bank: "收款银行",
                col_name: "收款姓名",
                address: "开户行网点",
                col_qrcode: "收款二维码",
                copy: "复制",
                recharge_info: "您的充值信息",
                account: "您的账号",
                enter_account: "请输入 您的账号",
                name: "付款姓名",
                enter_name: "请输入 您的名字",
                recharge_time: "汇款时间",
                submit: "提交",
                money_err: "请输入正确的存款金额！",
                success: "转账信息已提交，请耐心等候客服人员核查通过！",
                pay: "前往支付",
                problem: "遇到问题？联系客服",
                copu_success: "复制成功！",
                usdt_address: "钱包地址",
                usdt_rate: "兑换汇率",
                usdt_num: "usdt个数",
                usdt_type: "钱包类型"
            },
            yuebao: {
                my_yuebao: "我的余额宝",
                is_progress: "进行中",
                is_done: "已结束",
                no_desc: "您尚无任何方案!",
                buy_now: "立即购买",
                buy_in: "买入",
                total: "共",
                bi: "笔",
                total_money: "总金额",
                total_limit: "总盈利/总上限",
                choose: "方案选择",
                sale_money: "销售金额",
                settlement_cycle: "结算周期",
                circular_settlement: "循环结算",
                single_settlement: "单次结算",
                hour: "小时",
                rate: "利率",
                interest_limit1: "利息上限",
                last_count: "剩余数量",
                buy_count: "个人购买数量",
                buy_again_time: "再次购买时间",
                after: "后",
                none: "无",
                buy_info: "请填写购买信息",
                money: "购买金额",
                enter_money: "请输入10的倍数",
                enter_money1: "请填写购买金额",
                enter_money2: "请输入10的倍数的金额",
                every: "每",
                interest_trial_desc: "小时利息为",
                interest_trial_desc1: "小时后利息为",
                interest_multiple: "利息稽核倍数",
                interest_trial: "利息试算",
                buy: "购买",
                buy_limit_desc: "购买数量已达上限",
                sold_out: "已售完",
                switch: "切换方案",
                no: "暂无方案",
                please_choose: "请选择合适的方案",
                settlement: "结算方式",
                cell1: "名称",
                cell2: "金额",
                cell3: "买进时间",
                cell4: "结算时间",
                cell5: "提现时间",
                cell6: "利息周期",
                cell7: "利率",
                cell8: "目前利息/上限",
                interest_limit_desc: "利息到达上限",
                settled: "已结算",
                redeem: "赎回",
                redeeming: "正在赎回...",
                history: "历史盈利",
                interest_history: "利息历程",
                program_desc: "此方案为",
                mode: "模式",
                interest_desc: "利息稽核倍数为",
                multiple: "倍",
                di: "第",
                ci: "次",
                confirm_redeem: "确定赎回吗？"
            },
            transfer: {
                center_money: "中心钱包余额",
                update_money: "更新余额",
                money: "余额",
                enter_money: "请输入转入金额",
                transfer_in: "转入",
                go_deposit: "去存款",
                err_desc: "正在进入游戏，请稍等 .....",
                is_transfer: "正在进行免转...",
                err_login: "请先进行登录再进入游戏",
                enter_game: "进入游戏"
            },
            wap: {
                cancel_collect_success: "取消收藏成功！",
                collect_success: "收藏成功！",
                not_login: "未登录",
                login_check: "登录后查看",
                deposit: "存款",
                draw: "取款",
                all: "全部",
                activity: "优惠",
                service: "客服",
                my: "我的",
                welcome_serve: "欢迎来到客服中心",
                main_service: "主线客服",
                main_service1: "客户服务代表",
                main_service2: "小时专线服务 贴心至上",
                register_btn: "注册",
                welcome: "欢迎来到",
                normal_desc: "常用功能",
                level_power: "等级特权",
                extension: "推广赚钱",
                member_info: "个人资料",
                member_safe: "账户与安全",
                member_safe1: "完善账户信息，更安全",
                collection: "我的收藏",
                collection1: "你爱的都在这里",
                message: "我的消息",
                setting: "设置",
                safety_setting: "安全设置",
                contact_us: "联系我们",
                about_us: "关于我们",
                logout: "退出登录",
                start: "开启极致体验",
                enter_account: "请输入账号",
                enter_psw: "请输入密码",
                enter_captcha: "请输入验证码",
                pay_way: "支付渠道",
                pay_account: "转账账号",
                pay_name: "转账人",
                pay_money: "支付金额",
                pay_money1: "您实际需要支付的金额",
                pay_file: "上传转款凭证",
                confirm: "确定",
                pay_tips: "温馨提示",
                pay_tips1: "1.上面所列银行为“在线支付”所支持的银行，选择您的支付银行。",
                pay_tips2: "2.在 “存款金额” 栏目中填写您要支付的金额， 并点击“提交”按钮。",
                pay_tips3: "3.存款成功后，需达到一倍有效投注额方可提款（防套现、防洗钱）。",
                deposit_now: "当前存款",
                bet_amount_now: "当前投注",
                bet: "投注",
                vip_desc: "专享",
                my_vip1: "晋升礼金",
                my_vip2: "每日礼金",
                my_vip3: "每周礼金",
                my_vip4: "每月礼金",
                my_vip5: "生日礼金",
                my_vip6: "每年礼金",
                yuan: "元",
                vip: "VIP特权",
                vip_detail: "VIP特权详情",
                vip_lvl: "晋级规则",
                my_extend: "我的推广",
                under_check: "直属查询",
                achievement_check: "业绩查询",
                history_commission: "历史总佣金",
                can_commission: "可提取佣金",
                extend_detail: "推广教程",
                my_xia: "我的下线",
                click_extend: "点击二维码,立即推广",
                team_r1: "团队总人数",
                team_r2: "充值",
                team_r3: "提款",
                team_r4: "有效投注额",
                team_r5: "在线人数",
                team_r6: "中奖奖金",
                team_r7: "返点金额",
                team_r8: "活动奖金",
                team_r9: "新增人数",
                team_r10: "净利润",
                team_r11: "活跃人数",
                extension1: "推广方式一",
                extension2: "推广方式二",
                extension_link: "推广链接",
                copy: "复制",
                account_search: "账号搜索",
                account_search_tips: "输入直属玩家账号",
                search_btn: "搜索",
                reset_btn: "重置",
                single_money: "个人余额",
                team_num: "团队人数",
                team_money: "团队余额",
                last_login: "最后登录",
                sub_account: "下级账号",
                bet_amount: "投注金额",
                fs_amount: "返佣金额",
                count_time: "计算日期",
                copy_success: "复制成功！",
                account: "账号",
                my_qr: "我的二维码",
                copy_link: "复制链接",
                phone: "手机号码",
                write: "填写",
                email: "电子邮箱",
                login_psw: "登录密码",
                qk_psw: "提款密码",
                change: "修改",
                slot: "电子游艺",
                casino: "真人游戏",
                sport: "体育游戏",
                lottery: "彩票游戏",
                fish: "捕鱼游戏",
                board: "棋牌游戏",
                no_collect: "暂无收藏内容",
                suggestion: "投诉与建议",
                online_submit: "在线提交",
                enter: "进入",
                enter_suggestion: "请输入您的反馈意见",
                check_suggestion: "查看我的投诉建议",
                my_suggestion: "我的投诉建议",
                question: "提交问题：",
                question_des: "问题描述：",
                about_us_detail: "关于我们详情",
                other_contact: "其他联系方式",
                phone_contact: "服务热线",
                user_name_tips: "6 - 8 字符，字母开头，限字母，数字",
                user_name_tips1: "请填写会员账号",
                psw_tips: "6 个字符以上，须包含字母及数字",
                psw_tips1: "请填写会员密码",
                confirm_psw: "请再次确认密码",
                confirm_psw1: "请填写确认密码",
                real_name_tips: "请输入真实姓名",
                phone_tips: "请输入您的手机号码",
                send_sms: "发送验证码",
                re_send_sms: "重新发送",
                sms_code: "手机验证码",
                sms_code_tips: "请输入手机验证码",
                register_tips: "立即开户 赚钱娱乐两不误",
                sms_success: "验证码发送成功",
                app_tips: "下载APP，体验更多精彩！",
                down_app_now: "立即下载",
                is_loading: "正在加载...",
                currency: "货币种类",
                select_currency: "请选择货币种类",
                area: "区号",
                about1: "官方认证",
                about2: "英国GC",
                about3: "监督委员会",
                about4: "马耳他博彩牌照",
                about5: "认证",
                about6: "英属维尔京群岛",
                about7: "菲律宾",
                about8: "监督博彩牌照",
                about9: "合作伙伴"
            }
        }
    },
    "6fbc": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-clipboard-list",
            use: "icon-clipboard-list-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-clipboard-list"><path d="M800 128h-160c0-70.6-57.4-128-128-128s-128 57.4-128 128H224C171 128 128 171 128 224v704c0 53 43 96 96 96h576c53 0 96-43 96-96V224c0-53-43-96-96-96zM320 848c-26.6 0-48-21.4-48-48s21.4-48 48-48 48 21.4 48 48-21.4 48-48 48z m0-192c-26.6 0-48-21.4-48-48s21.4-48 48-48 48 21.4 48 48-21.4 48-48 48z m0-192c-26.6 0-48-21.4-48-48s21.4-48 48-48 48 21.4 48 48-21.4 48-48 48z m192-384c26.6 0 48 21.4 48 48s-21.4 48-48 48-48-21.4-48-48 21.4-48 48-48z m256 736c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v32z m0-192c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v32z m0-192c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v32z" fill="" p-id="16081" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    7820 : function(e, t, n) {
        "use strict";
        n.r(t);
        n("d3b7"),
        n("96cf");
        var a = n("1da1"),
        i = {
            number: 1
        },
        o = {
            onePlusAction: function() {
                var e = Object(a["a"])(regeneratorRuntime.mark((function e(t, n) {
                    var a, i;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                        case 0:
                            return a = t.commit,
                            i = n.val,
                            e.abrupt("return", new Promise((function(e, t) {
                                setTimeout((function() {
                                    a("onePlus", i),
                                    e()
                                }), 1500)
                            })));
                        case 3:
                        case "end":
                            return e.stop()
                        }
                    }), e)
                })));
                function t(t, n) {
                    return e.apply(this, arguments)
                }
                return t
            } ()
        },
        c = {
            onePlus: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                e.number = e.number + t
            }
        },
        r = {};
        t["default"] = {
            namespaced: !0,
            state: i,
            actions: o,
            mutations: c,
            getters: r
        }
    },
    "7e78": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-angle-double-down",
            use: "icon-angle-double-down-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-angle-double-down"><defs><style type="text/css">#icon-angle-double-down * {  }\n</style></defs><path d="M478 512.6L206 240.6c-18.8-18.8-18.8-49.2 0-67.8l45.2-45.2c18.8-18.8 49.2-18.8 67.8 0l192.8 192.8 192.8-192.8c18.8-18.8 49.2-18.8 67.8 0L818 172.6c18.8 18.8 18.8 49.2 0 67.8l-272 272c-18.8 19-49.2 19-68 0.2z m68 384l272-272c18.8-18.8 18.8-49.2 0-67.8l-45.2-45.2c-18.8-18.8-49.2-18.8-67.8 0L512 704.2l-192.8-192.8c-18.8-18.8-49.2-18.8-67.8 0L206 556.6c-18.8 18.8-18.8 49.2 0 67.8l272 272c18.8 19 49.2 19 68 0.2z" fill="" p-id="15187" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    8097 : function(e, t, n) {
        "use strict";
        n.d(t, "e", (function() {
            return i
        })),
        n.d(t, "k", (function() {
            return o
        })),
        n.d(t, "a", (function() {
            return c
        })),
        n.d(t, "j", (function() {
            return r
        })),
        n.d(t, "b", (function() {
            return s
        })),
        n.d(t, "d", (function() {
            return l
        })),
        n.d(t, "f", (function() {
            return u
        })),
        n.d(t, "h", (function() {
            return m
        })),
        n.d(t, "g", (function() {
            return _
        })),
        n.d(t, "c", (function() {
            return h
        })),
        n.d(t, "l", (function() {
            return d
        })),
        n.d(t, "i", (function() {
            return g
        }));
        var a = n("1bab");
        function i(e) {
            return Object(a["a"])({
                url: "/team/childlist?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function o(e) {
            return Object(a["a"])({
                url: "/team/moneylog?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function c(e) {
            return Object(a["a"])({
                url: "/team/add?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function r(e) {
            return Object(a["a"])({
                url: "/team/gamerecord?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function s(e) {
            return Object(a["a"])({
                url: "/team/childrates?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function l(e) {
            return Object(a["a"])({
                url: "/team/fdinfo?lang=" + localStorage.getItem("ly_lang"),
                method: "get",
                data: e
            })
        }
        function u() {
            return Object(a["a"])({
                url: "/team/chart?lang=" + localStorage.getItem("ly_lang"),
                method: "post"
            })
        }
        function m(e) {
            return Object(a["a"])({
                url: "/team/report?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function _(e) {
            return Object(a["a"])({
                url: "/team/invite/list?lang=" + localStorage.getItem("ly_lang"),
                method: "get",
                data: e
            })
        }
        function h(e) {
            return Object(a["a"])({
                url: "/team/invite/create?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function d(e) {
            return Object(a["a"])({
                url: "/team/invite/update?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function g(e) {
            return Object(a["a"])({
                url: "team/performanceDetail?lang=" + localStorage.getItem("ly_lang"),
                method: "get",
                params: e
            })
        }
    },
    "8e8d": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-search",
            use: "icon-search-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-search"><defs><style type="text/css">#icon-search * {  }\n</style></defs><path d="M1009.938827 885.313544L810.558298 685.933014c-8.999121-8.999121-21.19793-13.998633-33.99668-13.998633H743.964801c55.19461-70.593106 87.991407-159.384435 87.991407-255.975002C831.956208 186.181818 645.77439 0 415.996829 0S0.03745 186.181818 0.03745 415.959379s186.181818 415.959379 415.959379 415.959379c96.590567 0 185.381896-32.796797 255.975002-87.991407v32.596817c0 12.79875 4.999512 24.997559 13.998633 33.99668l199.38053 199.380529c18.798164 18.798164 49.195196 18.798164 67.793379 0l56.594473-56.594473c18.798164-18.798164 18.798164-49.195196 0.199981-67.99336zM415.996829 671.934381c-141.386193 0-255.975002-114.388829-255.975002-255.975002 0-141.386193 114.388829-255.975002 255.975002-255.975002 141.386193 0 255.975002 114.388829 255.975002 255.975002 0 141.386193-114.388829 255.975002-255.975002 255.975002z" fill="" p-id="14877" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    "93cd": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-tree",
            use: "icon-tree-usage",
            viewBox: "0 0 128 128",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-tree"><path d="M126.713 90.023c.858.985 1.287 2.134 1.287 3.447v29.553c0 1.423-.429 2.6-1.287 3.53-.858.93-1.907 1.395-3.146 1.395H97.824c-1.145 0-2.146-.465-3.004-1.395-.858-.93-1.287-2.107-1.287-3.53V93.47c0-.875.19-1.696.572-2.462.382-.766.906-1.368 1.573-1.806a3.84 3.84 0 012.146-.657h9.725V69.007a3.84 3.84 0 00-.43-1.806 3.569 3.569 0 00-1.143-1.313 2.714 2.714 0 00-1.573-.492h-36.47v23.149h9.725c1.144 0 2.145.492 3.004 1.478.858.985 1.287 2.134 1.287 3.447v29.553c0 .876-.191 1.696-.573 2.463-.38.766-.905 1.368-1.573 1.806a3.84 3.84 0 01-2.145.656H51.915a3.84 3.84 0 01-2.145-.656c-.668-.438-1.216-1.04-1.645-1.806a4.96 4.96 0 01-.644-2.463V93.47c0-1.313.43-2.462 1.288-3.447.858-.986 1.907-1.478 3.146-1.478h9.582v-23.15h-37.9c-.953 0-1.74.356-2.359 1.068-.62.711-.93 1.56-.93 2.544v19.538h9.726c1.239 0 2.264.492 3.074 1.478.81.985 1.216 2.134 1.216 3.447v29.553c0 1.423-.405 2.6-1.216 3.53-.81.93-1.835 1.395-3.074 1.395H4.29c-.476 0-.93-.082-1.358-.246a4.1 4.1 0 01-1.144-.657 4.658 4.658 0 01-.93-1.067 5.186 5.186 0 01-.643-1.395 5.566 5.566 0 01-.215-1.56V93.47c0-.437.048-.875.143-1.313a3.95 3.95 0 01.429-1.15c.19-.328.429-.656.715-.984.286-.329.572-.602.858-.821.286-.22.62-.383 1.001-.493.382-.11.763-.164 1.144-.164h9.726V61.619c0-.985.31-1.833.93-2.544.619-.712 1.358-1.068 2.216-1.068h44.335V39.62h-9.582c-1.24 0-2.288-.492-3.146-1.477a5.09 5.09 0 01-1.287-3.448V5.14c0-1.423.429-2.627 1.287-3.612.858-.985 1.907-1.477 3.146-1.477h25.743c.763 0 1.478.246 2.145.739a5.17 5.17 0 011.573 1.888c.382.766.573 1.587.573 2.462v29.553c0 1.313-.43 2.463-1.287 3.448-.859.985-1.86 1.477-3.004 1.477h-9.725v18.389h42.762c.954 0 1.74.355 2.36 1.067.62.711.93 1.56.93 2.545v26.925h9.582c1.239 0 2.288.492 3.146 1.478z" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    "98f2": function(e, t, n) {
        "use strict";
        n.r(t);
        n("d3b7");
        var a = n("041d"),
        i = {
            payments: [],
            online_payments: []
        },
        o = {
            submitRecharge: function(e, t) {
                e.commit;
                return new Promise((function(e, n) {
                    Object(a["h"])(t).then((function(t) {
                        e(t)
                    })).
                    catch((function(e) {
                        n(e)
                    }))
                }))
            },
            submitOnline: function(e, t) {
                e.commit;
                return new Promise((function(e, n) {
                    Object(a["g"])(t).then((function(t) {
                        e(t)
                    })).
                    catch((function(e) {
                        n(e)
                    }))
                }))
            },
            getOnlinePayments: function(e) {
                e.state;
                var t = e.commit;
                return new Promise((function(e, n) {
                    Object(a["d"])().then((function(n) {
                        t("ADD_ONLINE_PAYMENTS", n.data),
                        e(n)
                    }))
                }))
            }
        },
        c = {
            ADD_PAYMENTS: function(e, t) {
                e.payments = t
            },
            ADD_ONLINE_PAYMENTS: function(e, t) {
                e.online_payments = t
            }
        },
        r = {};
        t["default"] = {
            namespaced: !0,
            state: i,
            actions: o,
            mutations: c,
            getters: r
        }
    },
    9923 : function(e, t, n) {
        "use strict";
        n("b0d0");
        var a = n("3c69"),
        i = n("a925"),
        o = n("2b0e"),
        c = n("d4b0"),
        r = n("82db");
        a["a"].use("en-US", c["a"]),
        a["a"].use("TW", r["a"]),
        o["a"].use(i["a"]);
        var s = new i["a"]({
            locale: "zh_cn",
            messages: {
                zh_cn: n("6e41"),
                zh_hk: n("ae5e"),
                en: n("3fab"),
                th: n("46e9"),
                vi: n("33ba")
            }
        });
        t["a"] = s
    },
    a14a: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-404",
            use: "icon-404-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-404"><defs><style>@font-face{font-family:rbicon;src:url(chrome-extension://dipiagiiohfljcicegpgffpbnjmgjcnf/fonts/rbicon.woff2) format("woff2");font-weight:400;font-style:normal}</style></defs><path d="M931.6 585.6v79c28.6-60.2 44.8-127.4 44.8-198.4C976.4 211 769.4 4 514.2 4S52 211 52 466.2c0 3.2.2 6.4.2 9.6l166-206h96.4L171.8 485.6h46.4v-54.8l99.2-154.6V668h-99.2v-82.4H67.6c43 161 170.6 287.4 332.4 328.6-10.4 26.2-40.6 89.4-90.8 100.6-62.2 14 168.8 3.4 333.6-104.6C769.4 873.6 873.6 784.4 930.2 668h-97.6v-82.4H666.4V476l166.2-206.2h94L786.2 485.6h46.4v-59l99.2-154v313zM366.2 608c-4.8-11.2-7.2-23.2-7.2-36V357.6c0-12.8 2.4-24.8 7.2-36 4.8-11.2 11.4-21 19.6-29.2 8.2-8.2 18-14.8 29.2-19.6 11.2-4.8 23.2-7.2 36-7.2h81.6c12.8 0 24.8 2.4 36 7.2 11 4.8 20.6 11.2 28.8 19.2l-88.6 129.4v-23c0-4.8-1.6-8.8-4.8-12-3.2-3.2-7.2-4.8-12-4.8s-8.8 1.6-12 4.8c-3.2 3.2-4.8 7.2-4.8 12v72L372.6 620c-2.4-3.8-4.6-7.8-6.4-12zm258.2-36c0 12.8-2.4 24.8-7.2 36-4.8 11.2-11.4 21-19.6 29.2-8.2 8.2-18 14.8-29.2 19.6-11.2 4.8-23.2 7.2-36 7.2h-81.6c-12.8 0-24.8-2.4-36-7.2-11.2-4.8-21-11.4-29.2-19.6-3.6-3.6-7-7.8-10-12l99.2-144.6v50.6c0 4.8 1.6 8.8 4.8 12 3.2 3.2 7.2 4.8 12 4.8s8.8-1.6 12-4.8c3.2-3.2 4.8-7.2 4.8-12v-99.6L601 296.4c6.6 7.4 12 15.8 16 25.2 4.8 11.2 7.2 23.2 7.2 36V572z" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    a18c: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "resetRouter", (function() {
            return h
        }));
        n("99af"),
        n("4160"),
        n("d3b7"),
        n("ac1f"),
        n("5319"),
        n("2ca0"),
        n("159b"),
        n("ddb0"),
        n("e7e5");
        var a = n("d399"),
        i = (n("96cf"), n("1da1")),
        o = n("2b0e"),
        c = n("8c4f"),
        r = n("4360");
        o["a"].use(c["a"]);
        var s = c["a"].prototype.push;
        c["a"].prototype.push = function(e) {
            return s.call(this, e).
            catch((function(e) {
                return e
            }))
        };
        var l = [{
            path: "/",
            redirect: "/Main/home"
        },
        {
            path: "/Welcome",
            name: "Welcome",
            component: function() {
                return n.e("chunk-55a27ec8").then(n.bind(null, "8a85"))
            }
        },
        {
            path: "/Login",
            name: "Login",
            component: function() {
                return n.e("chunk-6edfc086").then(n.bind(null, "5326"))
            }
        },
        {
            path: "/Activity",
            name: "Act",
            component: function() {
                return Promise.all([n.e("chunk-db9b0f34"), n.e("chunk-4c824e79")]).then(n.bind(null, "60e4"))
            }
        },
        {   //申请页面
            path: "/Activity/:id",
            name: "ActDetail",
            component: function() {
                return Promise.all([n.e("chunk-db9b0f34"), n.e("chunk-fbfef568")]).then(n.bind(null, "0a74"))
            }
        },
        {
            path: "/LiveLevelUp",
            name: "LiveLevelUp",
            component: function() {
                return n.e("chunk-3f67f194").then(n.bind(null, "cd41"))
            }
        },
        {
            path: "/SlotLevelUp",
            name: "SlotLevelUp",
            component: function() {
                return n.e("chunk-54ba9c4a").then(n.bind(null, "30b52"))
            }
        },
        {
            path: "/Credit",
            name: "Credit",
            component: function() {
                return n.e("chunk-96670fd8").then(n.bind(null, "56de"))
            },
            children: [{
                path: "/Credit/Index",
                name: "CreditIndex",
                component: function() {
                    return n.e("chunk-67be8b45").then(n.bind(null, "09b3"))
                }
            },
            {
                path: "/Credit/Record",
                name: "CreditRecord",
                component: function() {
                    return n.e("chunk-2d21dc8f").then(n.bind(null, "d37a"))
                }
            },
            {
                path: "/Credit/Borrow",
                name: "CreditBorrow",
                component: function() {
                    return n.e("chunk-1941540e").then(n.bind(null, "8bd2"))
                }
            },
            {
                path: "/Credit/Repay",
                name: "CreditRepay",
                component: function() {
                    return n.e("chunk-1ee924c2").then(n.bind(null, "9bab"))
                }
            }]
        },
        {
            path: "/Register",
            name: "Register",
            component: function() {
                return Promise.all([n.e("chunk-347723a1"), n.e("chunk-f71f48ec")]).then(n.bind(null, "935e"))
            }
        },
        {
            path: "/loginToSupplier",
            name: "loginToSupplier",
            component: function() {
                return n.e("chunk-3f9b7d4d").then(n.bind(null, "a0d8"))
            },
            meta: {
                requiresAuth: !0
            }
        },
        {
            path: "/RedBag",
            name: "RedBag",
            component: function() {
                return n.e("chunk-295befc4").then(n.bind(null, "f88a"))
            },
            meta: {
                requiresAuth: !0,
                requiresDemo: !0
            }
        },
        {
            path: "/dailybonus",
            name: "DailyBonus",
            component: function() {
                return n.e("chunk-fdb9df28").then(n.bind(null, "7a66"))
            },
            meta: {
                requiresAuth: !0,
                requiresDemo: !0
            }
        },
        {
            path: "/dailybonus/log",
            name: "DailyBonusLog",
            component: function() {
                return n.e("chunk-4ef09912").then(n.bind(null, "2178"))
            },
            meta: {
                requiresAuth: !0,
                requiresDemo: !0
            }
        },
        {
            path: "/Main",
            name: "Main",
            redirect: "/Main/home",
            component: function() {
                return n.e("chunk-6646526d").then(n.bind(null, "6b61"))
            },
            children: [{
                path: "home",
                name: "home",
                component: function() {
                    return n.e("chunk-47a491ee").then(n.bind(null, "b611"))
                }
            },
            {
                path: "recommendGame/:api_code/:gametype",
                name: "RecommendGame",
                component: function() {
                    return Promise.all([n.e("chunk-57dfb8a3"), n.e("chunk-4d834b64")]).then(n.bind(null, "152f"))
                },
                meta: {
                    keepAlive: !1
                }
            },
            {
                path: "activity",
                name: "activity",
                component: function() {
                    return n.e("chunk-1f3bd171").then(n.bind(null, "a6eb"))
                }
            },
            {  //活动详情
                path: "activity/:id",
                name: "activityDetail",
                component: function() {					
                    return n.e("chunk-4a5f7538").then(n.bind(null, "fde1"))
                }
            },
            {
                path: "center",
                name: "center",
                component: function() {
                    return n.e("chunk-2574633e").then(n.bind(null, "ebca"))
                }
            },
            {
                path: "server",
                name: "server",
                component: function() {
                    return n.e("chunk-0375591b").then(n.bind(null, "78c7"))
                }
            }]
        },
        {
            path: "/Member",
            name: "Member",
            redirect: "/Member/MemberInfo",
            component: function() {
                return n.e("chunk-536097da").then(n.bind(null, "7319"))
            },
            meta: {
                requiresAuth: !0,
                requiresDemo: !0
            },
            children: [{
                path: "MemberInfo",
                name: "MemberInfo",
                component: function() {
                    return n.e("chunk-39484d6f").then(n.bind(null, "fead"))
                },
                meta: {
                    requiresAuth: !0,
                    requiresDemo: !0
                }
            },
            {
                path: "SetMemberInfo",
                name: "SetMemberInfo",
                component: function() {
                    return n.e("chunk-61acea5d").then(n.bind(null, "95c2"))
                },
                meta: {
                    requiresAuth: !0,
                    requiresDemo: !0
                }
            },
            {
                path: "Safety",
                name: "Safety",
                component: function() {
                    return n.e("chunk-2d0bdd47").then(n.bind(null, "2e53"))
                },
                meta: {
                    requiresAuth: !0,
                    requiresDemo: !0
                }
            },
            {
                path: "Modify_pwd",
                name: "Modify_pwd",
                component: function() {
                    return n.e("chunk-639400c1").then(n.bind(null, "6d4f"))
                },
                meta: {
                    requiresAuth: !0,
                    requiresDemo: !0
                }
            },
            {
                path: "Modify_drawing_pwd",
                name: "Modify_drawing_pwd",
                component: function() {
                    return n.e("chunk-37696a2a").then(n.bind(null, "2e72"))
                },
                meta: {
                    requiresAuth: !0,
                    requiresDemo: !0
                }
            },
            {
                path: "SetDrawingPwd",
                name: "SetDrawingPwd",
                component: function() {
                    return n.e("chunk-e5c3b5a6").then(n.bind(null, "df07"))
                },
                meta: {
                    requiresAuth: !0,
                    requiresDemo: !0
                }
            },
            {
                path: "Transfer",
                name: "Transfer",
                component: function() {
                    return Promise.all([n.e("chunk-18200444"), n.e("chunk-607be7bb")]).then(n.bind(null, "2d9b"))
                },
                meta: {
                    requiresAuth: !0
                }
            },
            {
                path: "Promotion",
                name: "Promotion",
                component: function() {
                    return n.e("chunk-47e19460").then(n.bind(null, "5fc9"))
                },
                meta: {
                    requiresAuth: !0
                }
            },
            {
                path: "Yuebao",
                name: "Yuebao",
                component: function() {
                    return Promise.all([n.e("chunk-74aa3729"), n.e("chunk-1925c73c")]).then(n.bind(null, "9c9e"))
                },
                meta: {
                    requiresAuth: !0,
                    requiresDemo: !0
                }
            },
            {
                path: "Fsnow",
                name: "Fsnow",
                component: function() {
                    return n.e("chunk-4c7b2846").then(n.bind(null, "8e9e"))
                },
                meta: {
                    requiresAuth: !0,
                    requiresDemo: !0
                }
            },
            {
                path: "ApplyDrawing",
                name: "ApplyDrawing",
                component: function() {
                    return n.e("chunk-31c7ea41").then(n.bind(null, "09fe"))
                },
                meta: {
                    requiresAuth: !0,
                    requiresDemo: !0
                }
            },
            {
                path: "Recharge",
                name: "Recharge",
                component: function() {
                    return Promise.all([n.e("chunk-6049f73b"), n.e("chunk-47b2780e")]).then(n.bind(null, "1e6d"))
                },
                meta: {
                    requiresAuth: !0,
                    requiresDemo: !0
                }
            },
            {
                path: "Card",
                name: "Card",
                component: function() {
                    return n.e("chunk-6493bfc7").then(n.bind(null, "4584"))
                },
                meta: {
                    requiresAuth: !0,
                    requiresDemo: !0
                }
            },
            {
                path: "Collect",
                name: "Collect",
                component: function() {
                    return Promise.all([n.e("chunk-9cfc94a8"), n.e("chunk-acdcfd38")]).then(n.bind(null, "1c22"))
                },
                meta: {
                    requiresAuth: !0,
                    requiresDemo: !0
                }
            },
            {
                path: "Vip",
                name: "Vip",
                component: function() {
                    return n.e("chunk-c2a639b2").then(n.bind(null, "33c3"))
                },
                meta: {
                    requiresAuth: !0,
                    requiresDemo: !0
                }
            },
            {
                path: "VipDetail",
                name: "VipDetail",
                component: function() {
                    return n.e("chunk-112d552a").then(n.bind(null, "2560"))
                },
                meta: {
                    requiresAuth: !0,
                    requiresDemo: !0
                }
            },
            {
                path: "Extension",
                name: "Extension",
                component: function() {
                    return n.e("chunk-5e0b19a0").then(n.bind(null, "2951"))
                },
                meta: {
                    requiresAuth: !0,
                    requiresDemo: !0
                }
            },
            {
                path: "ContactUs",
                name: "ContactUs",
                component: function() {
                    return n.e("chunk-0866cee5").then(n.bind(null, "81dc"))
                },
                meta: {
                    requiresAuth: !0,
                    requiresDemo: !0
                }
            },
            {
                path: "Suggestion",
                name: "Suggestion",
                component: function() {
                    return n.e("chunk-0729676c").then(n.bind(null, "032b"))
                },
                meta: {
                    requiresAuth: !0,
                    requiresDemo: !0
                }
            },
            {
                path: "About",
                name: "About",
                component: function() {
                    return n.e("chunk-f2bfc214").then(n.bind(null, "2cbb"))
                },
                meta: {
                    requiresAuth: !0,
                    requiresDemo: !0
                }
            },
            {
                path: "AboutDetail",
                name: "AboutDetail",
                component: function() {
                    return n.e("chunk-71e1b7d1").then(n.bind(null, "d07f"))
                },
                meta: {
                    requiresAuth: !0,
                    requiresDemo: !0
                }
            },
            {
                path: "FeedBack",
                name: "FeedBack",
                component: function() {
                    return n.e("chunk-a9fbdcd4").then(n.bind(null, "603d"))
                },
                meta: {
                    requiresAuth: !0,
                    requiresDemo: !0
                }
            },
            {
                path: "GameRecord",
                name: "GameRecord",
                component: function() {
                    return Promise.all([n.e("chunk-62e4059e"), n.e("chunk-9acea45e")]).then(n.bind(null, "4ece"))
                },
                meta: {
                    requiresAuth: !0,
                    requiresDemo: !0
                }
            },
            {
                path: "MoneyLog",
                name: "MoneyLog",
                component: function() {
                    return Promise.all([n.e("chunk-62e4059e"), n.e("chunk-6371f2f1")]).then(n.bind(null, "ce24"))
                },
                meta: {
                    requiresAuth: !0,
                    requiresDemo: !0
                }
            },
            {
                path: "RechargeList",
                name: "RechargeList",
                component: function() {
                    return Promise.all([n.e("chunk-62e4059e"), n.e("chunk-67063590")]).then(n.bind(null, "3e7e"))
                },
                meta: {
                    requiresAuth: !0,
                    requiresDemo: !0
                }
            },
            {
                path: "Message",
                name: "Message",
                component: function() {
                    return Promise.all([n.e("chunk-687b1a2e"), n.e("chunk-364cf4bf")]).then(n.bind(null, "34c0"))
                },
                meta: {
                    requiresAuth: !0,
                    requiresDemo: !0
                }
            },
            {
                path: "Notice",
                name: "Notice",
                component: function() {
                    return n.e("chunk-44f14620").then(n.bind(null, "2f4a"))
                },
                meta: {
                    requiresAuth: !0
                }
            }]
        }],
        u = n("ea2a");
        u.keys().forEach((function(e) {
            if (!e.startsWith("./index")) {
                var t = u(e);
                l = l.concat(t.
            default || t)
            }
        }));
        var m = function() {
            return new c["a"]({
                mode: "hash",
                base: "/",
                scrollBehavior: function() {
                    return {
                        y: 0
                    }
                },
                routes: l
            })
        },
        _ = m();
        function h() {
            _.replace("/login")
        }
        _.beforeEach(function() {
            var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, n, i) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        r["a"].dispatch("common/getLanguage");
                    case 2:
                        if (!t.meta.requiresAuth) {
                            e.next = 12;
                            break
                        }
                        if (!r["a"].getters.isLogin) {
                            e.next = 10;
                            break
                        }
                        if (!t.meta.requiresDemo) {
                            e.next = 8;
                            break
                        }
                        if (1 !== r["a"].getters.is_demo) {
                            e.next = 8;
                            break
                        }
                        return a["a"].fail("试玩账号不支持此操作!"),
                        e.abrupt("return");
                    case 8:
                        return i(),
                        e.abrupt("return");
                    case 10:
                        return r["a"].commit("common/CHANGE_LOGIN_STATUS", !0),
                        e.abrupt("return");
                    case 12:
                        if (!t.meta.notRequiresAuth) {
                            e.next = 16;
                            break
                        }
                        if (!r["a"].getters.isLogin) {
                            e.next = 16;
                            break
                        }
                        return i("/"),
                        e.abrupt("return");
                    case 16:
                        i();
                    case 17:
                    case "end":
                        return e.stop()
                    }
                }), e)
            })));
            return function(t, n, a) {
                return e.apply(this, arguments)
            }
        } ()),
        t["default"] = _
    },
    a883: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-user-shield",
            use: "icon-user-shield-usage",
            viewBox: "0 0 1280 1024",
            content: '<symbol class="icon" viewBox="0 0 1280 1024" xmlns="http://www.w3.org/2000/svg" id="icon-user-shield"><path d="M1244.6 542.2l-230.4-90c-8.2-3.2-25.2-7.4-44.4 0l-230.4 90c-21.4 8.4-35.4 28-35.4 49.8 0 223.2 137.4 377.6 265.8 427.8 19.2 7.4 36 3.2 44.4 0C1116.8 979.8 1280 841 1280 592c0-21.8-14-41.4-35.4-49.8zM992 924.8V546.6l191 74.6c-11.2 174.2-121.8 270.8-191 303.6zM448 512c141.4 0 256-114.6 256-256S589.4 0 448 0 192 114.6 192 256s114.6 256 256 256z m192 80c0-5 1.6-9.6 2.2-14.4-5-0.2-9.8-1.6-15-1.6h-33.4c-44.4 20.4-93.8 32-145.8 32s-101.2-11.6-145.8-32h-33.4C120.4 576 0 696.4 0 844.8V928c0 53 43 96 96 96h704c13.6 0 26.6-3 38.4-8-108-85.8-198.4-233.4-198.4-424z" fill="" p-id="15926" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    ae5e: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "m", (function() {
            return a
        }));
        var a = {
            common: {
                app_down: "APP下載",
                index: "官網首頁",
                promotion: "優惠大廳",
                server: "線上客服",
                apply_agent: "代理申請",
                chanting: "免息借唄",
                live: "真人陞級",
                eGame: "電子陞級",
                mail: "站內信",
                sign_in: "每日簽到",
                red_bag: "搶紅包",
                transfer_record: "交易記錄",
                bet_record: "投注記錄",
                change_psw: "修改密碼",
                change_qk_psw: "修改取款密碼",
                log_out: "登出",
                home: "首頁",
                activity: "優惠活動",
                member_center: "會員中心",
                recharge: "充值",
                withdraw: "提現",
                transfer: "額度轉換",
                money: "餘額",
                notice: "公告",
                member_info: "基本資料",
                promotion_center: "優惠中心",
                action_success: "操作成功！",
                action_err: "操作异常！",
                ssfs: "時時反水",
                apply_draw: "申請提款",
                card: "銀行卡管理",
                sys_notice: "系統公告",
                yuebao: "餘額寶",
                fast_recharge: "快速充值",
                recharge_record: "充值記錄",
                select_lang: "語言選擇"
            },
            header: {},
            home: {
                welcome: "您好",
                login_please: "您好,請登入",
                money: "餘額與優惠",
                login: "登入查看"
            },
            game: {
                hot: "熱門",
                new: "最新",
                recommend: "本月推薦",
                all: "全部",
                search_desc: "請輸入蒐索關鍵字",
                search: "蒐索"
            },
            promotion: { in :"參與"
            },
            auth: {
                login: "會員登入",
                register: "註冊帳號",
                invite: "介紹人",
                account: "帳號",
                psw: "密碼",
                confirm_psw: "確認密碼",
                member_info: "會員資料",
                real_name: "真實姓名",
                phone: "手機號",
                qk_psw: "取款密碼",
                confirm_qk_psw: "確認取款密碼",
                captcha: "驗證碼",
                register_now: "立即注册",
                register_tips1: "1.標記有<span class=“star”>*</span>者為必填項目。",
                register_tips2: "2.手機與取款密碼為取款金額時的憑證,請會員務必填寫詳細資料。",
                forget_psw: "忘記密碼？",
                login_btn: "登入",
                shiwan: "試玩登入",
                go_around: "隨便逛逛",
                go_pc: "去電腦版",
                forget_tips: "聯系管理員重置密碼",
                shiwan_tips: "您當前為試玩帳號,只可在本站彩票試玩。",
                register_success: "注册成功,請進行登入"
            },
            member: {
                change_psw: "修改登入密碼",
                change_qk_psw: "修改取款密碼",
                bank_info: "銀行資料",
                old_psw: "舊密碼",
                new_psw: "新密碼",
                confirm_new_psw: "確認新密碼",
                please_enter: "請輸入",
                cancel: "取消",
                confirm: "確認",
                psw_tips: "密碼修改成功,請重新登入",
                qk_psw_tips: "取款密碼修改成功",
                account_money: "帳戶餘額",
                fs_money: "反水帳戶",
                one_key: "反水帳戶",
                transfer_to_auto: "切換至自動",
                transfer_to_hand: "切換至手動",
                transfer_out: "轉出",
                transfer_in: "轉入",
                money: "金額",
                enter_money: "請輸入轉帳金額",
                transfer_err: "錢包之間不能互相轉換",
                user_name: "用戶名",
                a_draw_money: "可提款金額",
                draw_bank: "收款銀行卡",
                select: "請選擇",
                bank_account: "銀行帳戶",
                owner_name: "持卡人姓名",
                draw_money: "提款金額",
                enter_draw_money: "請輸入提款金額",
                draw_tips1: "溫馨提示：當您的打碼量不足時,提現會收取",
                draw_tips2: "%的手續費,當前剩餘打碼量",
                submit: "提交",
                qk_psw: "取款密碼",
                enter_qk_psw: "請輸入取款密碼",
                no_qk_psw_tips: "您還未設定取款密碼,請先設定取款密碼再操作",
                no_bank_tips: "請先綁定銀行卡",
                bind_time: "綁定時間",
                bank_address: "開戶行",
                card_no: "卡號",
                re_bind: "重新綁定",
                add_card: "新增綁定",
                change_card: "銀行卡變更",
                card_th1: "開戶銀行",
                card_th2: "開戶人姓名",
                card_th3: "銀行帳號",
                card_th4: "開戶網點",
                back: "返回",
                change_success: "修改成功",
                add_card_success: "添加銀行卡成功",
                time: "時間",
                api_type: "介面類別型",
                game_type: "遊戲類型",
                no_data: "暫無數據",
                no_more: "沒有更多了",
                statistics: "統計",
                total_bet: "總下注金額",
                total_win: "總輸贏",
                game_detail: "遊戲詳情",
                game_detail1: "遊戲單號",
                game_detail2: "遊戲名稱",
                game_detail3: "遊戲類型",
                game_detail4: "場次資訊",
                game_detail5: "下注明細",
                game_detail6: "下注金額",
                game_detail7: "有效下注",
                game_detail8: "派彩金額",
                game_detail9: "開獎結果",
                game_detail10: "下注時間",
                game_detail11: "派彩時間",
                account: "帳號",
                real_name: "真實姓名",
                login_time: "最後登入時間",
                change_type: "變動類型",
                money_type: "金額類型",
                sum_money: "流水金額",
                a_sum_money: "有效金額",
                money_detail: "交易詳情",
                money_detail1: "交易金額",
                money_detail2: "轉入前餘額",
                money_detail3: "轉入後餘額",
                money_detail4: "錢包類型",
                money_detail5: "轉帳類型",
                money_detail6: "操作描述",
                money_detail7: "交易時間",
                all: "全部",
                fs_wallet: "反水錢包",
                center_wallet: "中心錢包",
                today: "今日",
                last_day: "昨日",
                day_7: "7日內",
                day_30: "30日內",
                status: "狀態",
                pay_type: "支付類型",
                total_money: "總金額",
                recharge_detail1: "訂單號",
                recharge_detail2: "金額",
                recharge_detail3: "帳號資訊",
                recharge_detail4: "支付方式",
                recharge_detail5: "支付資訊",
                recharge_detail6: "支付狀態",
                recharge_detail7: "失敗原因",
                recharge_detail8: "匯款時間",
                recharge_detail9: "管理員確認時間"
            },
            act: {
                news: "最新消息",
                back: "返回首頁",
                server: "線上客服",
                app: "APP下載",
                apply: "點擊申請",
                register: "免費開戶",
                mobile_bet: "手機投注",
                slot: "電子遊藝",
                xljc: "線路檢測",
                firefox: "火狐瀏覽器",
                internet: "上網導航",
                deposit: "如何存款",
                withdraw: "如何取款",
                agent: "代理加盟",
                congratulations: "恭喜",
                apply_success: "成功辦理",
                account: "會員帳號",
                apply_act: "申請活動",
                apply_time: "申請時間",
                apply_status: "申請狀態",
                remark: "備註",
                no_results: "未査詢到資訊",
                index: "官方首頁",
                wheel: "抽獎轉盤",
                wheel_rule: "抽獎規則",
                enter_account: "輸入遊戲帳號査詢",
                search: "査詢",
                total_deposit: "當日總存款",
                avia_bet: "當日有效投注",
                win_history: "歷史中獎記錄",
                have: "您當前有",
                wheel_times: "次抽獎機會",
                today_deposit: "當日存款",
                effective_flow: "有效流水",
                wheel_times2: "轉盤次數",
                wheel_congratulations: "恭喜你中獎了,獎品是",
                check_lvl: "段位査詢",
                enter_account1: "請輸入你的會員帳號",
                level_th1: "晋昇標準等級",
                level_th2: "累計打碼",
                level_th3: "等級禮金",
                level_th4: "周俸祿",
                level_th5: "月俸祿",
                level_th6: "借唄額度",
                level_th7: "累積禮金",
                level_th8: "時時返水",
                level_th9: "存取款加速通道",
                level_th10: "一對一客服經理",
                level: "級",
                levels: "等級",
                week_desc: "按您的等級計算,距離上次登錄7天后再次登入即可自動到賬,等級每週俸祿詳情如下：",
                month_desc: "按您的等級計算,距離上次登錄30天后再次登入即可自動到賬,等級每月俸祿詳情如下：",
                how_month: "如何申請每月俸祿？",
                how_week: "如何申請每週俸祿？",
                liveUp_desc: "玩真人視訊永久累計打碼,讓您的會員帳號變成永久收益金管家！",
                account_info: "的帳號資訊",
                live_info_th1: "會員帳號",
                live_info_th2: "當前等級",
                live_info_th3: "累積有效投注",
                live_info_th4: "等級彩金",
                live_info_th5: "周俸祿",
                live_info_th6: "月俸祿",
                live_info_th7: "距離晉級需有效投注",
                live_next: "距離下一級還差",
                bet: "注",
                award_th1: "會員帳號",
                award_th2: "獎勵類型",
                award_th3: "獎勵金額",
                award_th4: "發放時間",
                slotUp_desc: "喜訊：2020年7月2號起所有電子/棋牌/捕魚永久累計打碼,讓您的會員帳號變成永久收益金管家！",
                slotUp_desc2: "聲明：強勢升級後的累積打碼標準將會進行調整,等級禮金、周俸祿、月俸祿也會進行提升；特此聲明所有會員的等級變動都以更新後為准！",
                credit_title: "免息借唄",
                credit_query: "信用額度査詢",
                credit_nav1: "信用規則",
                credit_nav2: "借還款記錄",
                credit_nav3: "我要借款",
                credit_nav4: "我要還款",
                credit_index1: "活動詳情",
                credit_index2: "信用規則",
                credit_index3: "活動細則",
                credit_index4: "借款說明",
                credit_index5: "還款說明",
                credit_info1: "會員帳號",
                credit_info2: "VIP等級",
                credit_info3: "最高借款",
                credit_info4: "已借款",
                credit_info5: "總借款",
                credit_info6: "總還款",
                credit_info11: "會員帳號",
                credit_info12: "借款金額",
                credit_info13: "還款金額",
                credit_info14: "借款天數",
                credit_info15: "還款倒數計時",
                credit_info16: "稽核進度",
                credit_info17: "日期",
                no_data: "暫無數據",
                borrow_tips: "溫馨提示",
                borrow_tips1: "提交成功2小時後請到\n <span style=“color: rgb（255,0,0）；”>“信用額度査詢”</span>\n是否借款成功！若提示借款成功,請到澳門巴黎人登入會員帳號是否成功加入,如果沒有成功加款到會員帳號上,請聯系借唄線上客服處理！",
                borrow_tips2: "注意：提交成功5分鐘後請到“信用額度査詢”是否借款成功！",
                need_borrow: "我要借款",
                borrow_account: "會員帳號",
                enter_borrow_account: "請填寫會員帳號",
                borrow_name: "會員姓名",
                enter_borrow_name: "請填寫會員姓名",
                borrow_money: "借款金額",
                enter_borrow_money: "請填寫借款金額",
                borrow_days: "借款天數",
                enter_borrow_days: "請填寫借款天數",
                borrow_submit: "確認提交",
                repay_tips1: "還款操作步驟：一、輸入會員帳號點擊【査詢欠款額度】查看需要還款的金額；二、點擊<span style=“color: rgb（255,0,0）；”><a href=“#”target=“_blank“\n title=“線上付款”>【線上付款】</a></span>選擇方便支付的通道進行付款；<span\n style=“white-space: normal；”>三</span>、付款成功後回到該頁面填寫相關資訊點擊【確認提交】；<span style=“white-space: normal；”>四</span>、提交成功2小時後,請到“信用額度査詢”査詢是否成功還款；五、成功還款1分鐘後即可再次申請借款！",
                need_repay: "我要還款",
                check_repay: "査詢欠款額度",
                repay_money: "還款金額",
                enter_repay_money: "請填寫還款金額",
                repay_tips2: "注意：請點擊“線上付款”進行付款,付款完成再來提交！",
                repay_tips3: "提交成功5分鐘,請到“信用額度査詢”査詢是否成功還款！",
                qiankuan: "當前欠款：",
                enter_account2: "請填寫會員帳號",
                enter_money: "請填寫存款金額",
                enter_captcha: "請填寫驗證碼",
                act_money: "存款金額",
                submit_now: "立即提交",
                apply_act1: "優惠申請",
                check_detail: "查看詳情",
                act_center: "優惠申請中心",
                act_check: "優惠申請進度查詢",
                act_select: "選擇査詢項目",
                act_check_btn: "點擊査詢",
                act_th1: "會員帳號",
                act_th2: "活動名稱",
                act_th3: "申請時間",
                act_th4: "申請狀態",
                no_act: "未査詢到資訊"
            },
            fs: {
                desc: "您還有反水",
                lingqu: "可領取！",
                a_bet: "有效投注",
                rate: "返點比例",
                no_data: "您現時沒有時時返水可以領取,快去遊戲吧！",
                confirm: "領取"
            },
            red: {
                my_award: "我的獎勵",
                Monday: "週一",
                Tuesday: "週二",
                Wednesday: "週三",
                Thursday: "週四",
                Friday: "週五",
                Saturday: "週六",
                Sunday: "周日",
                lx_award: "連續簽到禮包",
                day_award: "天禮包",
                day_lq: "天時可以領取",
                receive: "領取",
                received: "已領取",
                sign: "馬上簽到",
                signed: "已簽到",
                no_award: "暫無獎勵數據",
                back_to_index: "回首頁",
                award: "獎品",
                date: "日期",
                no_data: "暫無數據",
                back: "返回",
                start: "開始遊戲",
                no_red: "該功能暫未開放",
                no_red1: "一個紅包也沒有搶到,多多加油"
            },
            mail: {
                mail: "發件",
                send_box: "寄件匣",
                receive_box: "收件箱",
                read: "已讀",
                un_read: "未讀",
                no_data: "暫無數據",
                manager: "管理員",
                last_mail: "上條站內信",
                reply: "回復",
                mark_read: "標示為已讀",
                mark_un_read: "標示為未讀",
                delete: "删除",
                send: "發送站內信",
                title: "標題",
                content: "內容",
                delete_success: "删除成功",
                know: "知道了"
            },
            center: {
                my_account: "我的帳戶",
                base_info: "基本資料",
                card: "銀行卡",
                change_psw: "修改密碼",
                self: "自助服務",
                ssfs: "時時返水",
                yuebao: "餘額寶",
                record: "往來記錄",
                bet_record: "投注記錄",
                recharge_record: "充值記錄",
                news: "資訊公告",
                new_news: "最新公告",
                mail: "站內信"
            },
            recharge: {
                time: "充值處理時間",
                time_desc: "7*24小時充值服務",
                tips: "如選擇銀行卡轉帳,請勿使用其他支付方式,否則充值將無法到賬",
                online: "線上支付",
                company: "公司入款",
                money: "充值金額",
                enter_money: "請輸入充值金額",
                limit: "單筆充值限額",
                min: "最低",
                max: "最高",
                tips1: "*平臺填寫金額應當與網銀匯款金額完全一致,否則將無法即時到賬！",
                next: "下一步",
                col_info: "收款方資訊",
                col_account: "收款帳戶",
                col_bank: "收款銀行",
                col_name: "收款姓名",
                address: "開戶行網點",
                col_qrcode: "收款二維碼",
                copy: "複製",
                recharge_info: "您的充值資訊",
                account: "您的帳號",
                enter_account: "請輸入您的帳號",
                name: "付款姓名",
                enter_name: "請輸入您的名字",
                recharge_time: "匯款時間",
                submit: "提交",
                money_err: "請輸入正確的存款金額！",
                success: "轉帳資訊已提交,請耐心等候客服人員核查通過！",
                pay: "前往支付",
                problem: "遇到問題？聯系客服",
                copu_success: "複製成功！",
                usdt_address: "錢包地址",
                usdt_rate: "兌換匯率",
                usdt_num: "usdt個數",
                usdt_type: "錢包類型"
            },
            yuebao: {
                my_yuebao: "我的餘額寶",
                is_progress: "進行中",
                is_done: "已結束",
                no_desc: "您尚無任何方案！",
                buy_now: "立即購買",
                buy_in: "買入",
                total: "共",
                bi: "筆",
                total_money: "總金額",
                total_limit: "總盈利/總上限",
                choose: "方案選擇",
                sale_money: "銷售金額",
                settlement_cycle: "結算週期",
                circular_settlement: "迴圈結算",
                single_settlement: "單次結算",
                hour: "小時",
                rate: "利率",
                interest_limit1: "利息上限",
                last_count: "剩餘數量",
                buy_count: "個人購買數量",
                buy_again_time: "再次購買時間",
                after: "後",
                none: "無",
                buy_info: "請填寫購買資訊",
                money: "購買金額",
                enter_money: "請輸入10的倍數",
                enter_money1: "請填寫購買金額",
                enter_money2: "請輸入10的倍數的金額",
                every: "每",
                interest_trial_desc: "小時利息為",
                interest_trial_desc1: "小時後利息為",
                interest_multiple: "利息稽覈倍數",
                interest_trial: "利息試算",
                buy: "購買",
                buy_limit_desc: "購買數量已達上限",
                sold_out: "已售完",
                switch: "切換方案",
                no: "暫無方案",
                please_choose: "請選擇合適的方案",
                settlement: "結算方式",
                cell1: "名稱",
                cell2: "金額",
                cell3: "買進時間",
                cell4: "結算時間",
                cell5: "提現時間",
                cell6: "利息週期",
                cell7: "利率",
                cell8: "現時利息/上限",
                interest_limit_desc: "利息到達上限",
                settled: "已結算",
                redeem: "贖回",
                redeeming: "正在贖回…",
                history: "歷史盈利",
                interest_history: "利息歷程",
                program_desc: "此方案為",
                mode: "模式",
                interest_desc: "利息稽覈倍數為",
                multiple: "倍",
                di: "第",
                ci: "次",
                confirm_redeem: "確定贖回嗎？"
            },
            transfer: {
                center_money: "中心錢包餘額",
                update_money: "更新餘額",
                money: "餘額",
                enter_money: "請輸入轉入金額",
                transfer_in: "轉入",
                go_deposit: "去存款",
                err_desc: "正在進入遊戲,請稍等…..",
                is_transfer: "正在進行免轉…",
                err_login: "請先進行登入再進入遊戲",
                enter_game: "進入遊戲"
            },
            wap: {
                cancel_collect_success: "取消收藏成功！",
                collect_success: "收藏成功！",
                not_login: "未登錄",
                login_check: "登錄后查看",
                deposit: "存款",
                draw: "取款",
                all: "全部",
                activity: "優惠",
                service: "客服",
                my: "我的",
                welcome_serve: "歡迎來到客服中心",
                main_service: "主線客服",
                main_service1: "客戶服務代表",
                main_service2: "小時專線服務 貼心至上",
                register_btn: "註冊",
                welcome: "歡迎來到",
                normal_desc: "常用功能",
                level_power: "等級特權",
                extension: "推廣賺錢",
                member_info: "個人資料",
                member_safe: "賬戶與安全",
                member_safe1: "完善賬戶信息,更安全",
                collection: "我的收藏",
                collection1: "你愛的都在這裏",
                message: "我的消息",
                setting: "設置",
                safety_setting: "安全設置",
                contact_us: "聯繫我們",
                about_us: "關於我們",
                logout: "退出登錄",
                start: "開啟極致體驗",
                enter_account: "請輸入賬號",
                enter_psw: "請輸入密碼",
                enter_captcha: "請輸入驗證碼",
                pay_way: "支付渠道",
                pay_account: "轉賬賬號",
                pay_name: "轉賬人",
                pay_money: "支付金額",
                pay_money1: "您實際需要支付的金額",
                pay_file: "上傳轉款憑證",
                confirm: "確定",
                pay_tips: "溫馨提示",
                pay_tips1: "1.上面所列銀行為“在線支付”所支持的銀行,選擇您的支付銀行。",
                pay_tips2: "2.在 “存款金額” 欄目中填寫您要支付的金額, 並點擊“提交”按鈕。",
                pay_tips3: "3.存款成功後,需達到一倍有效投注額方可提款（防套現、防洗錢）。",
                deposit_now: "當前存款",
                bet_amount_now: "當前投注",
                bet: "投注",
                vip_desc: "專享",
                my_vip1: "晉陞禮金",
                my_vip2: "每日禮金",
                my_vip3: "每周禮金",
                my_vip4: "每月禮金",
                my_vip5: "生日禮金",
                my_vip6: "每年禮金",
                yuan: "元",
                vip: "VIP特權",
                vip_detail: "VIP特權詳情",
                vip_lvl: "晉級規則",
                my_extend: "我的推廣",
                under_check: "直屬查詢",
                achievement_check: "業績查詢",
                history_commission: "歷史總傭金",
                can_commission: "可提取傭金",
                extend_detail: "推廣教程",
                my_xia: "我的下線",
                click_extend: "點擊二維碼,立即推廣",
                team_r1: "團隊總人數",
                team_r2: "充值",
                team_r3: "提款",
                team_r4: "有效投注額",
                team_r5: "在線人數",
                team_r6: "中獎獎金",
                team_r7: "返點金額",
                team_r8: "活動獎金",
                team_r9: "新增人數",
                team_r10: "凈利潤",
                team_r11: "活躍人數",
                extension1: "推廣方式一",
                extension2: "推廣方式二",
                extension_link: "推廣鏈接",
                copy: "複製",
                account_search: "賬號搜索",
                account_search_tips: "輸入直屬玩家賬號",
                search_btn: "搜索",
                reset_btn: "重置",
                single_money: "個人餘額",
                team_num: "團隊人數",
                team_money: "團隊餘額",
                last_login: "最後登錄",
                sub_account: "下級賬號",
                bet_amount: "投注金額",
                fs_amount: "返傭金額",
                count_time: "計算日期",
                copy_success: "複製成功！",
                account: "賬號",
                my_qr: "我的二維碼",
                copy_link: "複製鏈接",
                phone: "手機號碼",
                write: "填寫",
                email: "电子郵箱",
                login_psw: "登錄密碼",
                qk_psw: "提款密碼",
                change: "修改",
                slot: "电子遊藝",
                casino: "真人遊戲",
                sport: "體育遊戲",
                lottery: "彩票遊戲",
                fish: "捕魚遊戲",
                board: "棋牌遊戲",
                no_collect: "暫無收藏內容",
                suggestion: "投訴與建議",
                online_submit: "在線提交",
                enter: "進入",
                enter_suggestion: "請輸入您的反饋意見",
                check_suggestion: "提交查看我的投訴建議",
                my_suggestion: "我的投訴建議",
                question: "提交問題：",
                question_des: "問題描述：",
                about_us_detail: "關於我們詳情",
                other_contact: "其他聯繫方式",
                phone_contact: "服務熱線",
                user_name_tips: "6 - 8字元,字母開頭,限字母,數位",
                user_name_tips1: "請填寫會員帳號",
                psw_tips: "6個字元以上,須包含字母及數位",
                psw_tips1: "請填寫會員密碼",
                confirm_psw: "請再次確認密碼",
                confirm_psw1: "請填寫確認密碼",
                real_name_tips: "請輸入真實姓名",
                phone_tips: "請輸入您的手機號碼",
                send_sms: "發送驗證碼",
                re_send_sms: "重新發送",
                sms_code: "手機驗證碼",
                sms_code_tips: "請輸入手機驗證碼",
                register_tips: "立即開戶賺錢娛樂兩不誤",
                sms_success: "驗證碼發送成功",
                app_tips: "下載APP,體驗更多精彩！",
                down_app_now: "立即下載",
                is_loading: "正在加載...",
                currency: "貨幣種類",
                select_currency: "請選擇貨幣種類",
                area: "區號",
                about1: "官方認證",
                about2: "英國GC",
                about3: "監督委員會",
                about4: "馬爾他博彩牌照",
                about5: "認證",
                about6: "英屬維京群島",
                about7: "菲律賓",
                about8: "監督博彩牌照",
                about9: "合作夥伴"
            }
        }
    },
    b3b5: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-user",
            use: "icon-user-usage",
            viewBox: "0 0 130 130",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 130" id="icon-user"><path d="M63.444 64.996c20.633 0 37.359-14.308 37.359-31.953 0-17.649-16.726-31.952-37.359-31.952-20.631 0-37.36 14.303-37.358 31.952 0 17.645 16.727 31.953 37.359 31.953zM80.57 75.65H49.434c-26.652 0-48.26 18.477-48.26 41.27v2.664c0 9.316 21.608 9.325 48.26 9.325H80.57c26.649 0 48.256-.344 48.256-9.325v-2.663c0-22.794-21.605-41.271-48.256-41.271z" stroke="#979797" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    b527: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-angle-double-up",
            use: "icon-angle-double-up-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-angle-double-up"><defs><style type="text/css">#icon-angle-double-up * {  }\n</style></defs><path d="M546 511.4l272 272c18.8 18.8 18.8 49.2 0 67.8l-45.2 45.2c-18.8 18.8-49.2 18.8-67.8 0L512 703.8l-192.8 192.8c-18.8 18.8-49.2 18.8-67.8 0L206 851.4c-18.8-18.8-18.8-49.2 0-67.8l272-272c18.8-19 49.2-19 68-0.2z m-68-384L206 399.4c-18.8 18.8-18.8 49.2 0 67.8l45.2 45.2c18.8 18.8 49.2 18.8 67.8 0l192.8-192.8 192.8 192.8c18.8 18.8 49.2 18.8 67.8 0l45.2-45.2c18.8-18.8 18.8-49.2 0-67.8l-272-272c-18.4-18.8-48.8-18.8-67.6 0z" fill="" p-id="15064" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    b8c4: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-refresh",
            use: "icon-refresh-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-refresh"><defs><style type="text/css">#icon-refresh * {  }\n</style></defs><path d="M881.87 25.148l7.932 165.532C798.832 83.808 663.348 16 512 16 269.626 16 67.866 189.848 24.592 419.648 21.816 434.386 33.208 448 48.206 448h98.168c11.14 0 20.754-7.684 23.352-18.518C206.814 274.816 345.862 160 512 160c121.786 0 229.024 61.712 292.208 155.602l-203.06-9.73c-13.69-0.656-25.148 10.266-25.148 23.972v94.822c0 13.254 10.746 24 24 24h400.666c13.254 0 24-10.746 24-24V24c0-13.254-10.746-24-24-24h-94.822c-13.706 0-24.63 11.458-23.974 25.148zM512 864c-121.79 0-229.034-61.716-292.218-155.61l203.736 9.742c13.69 0.654 25.146-10.268 25.146-23.972v-94.824c0-13.254-10.746-24-24-24H24c-13.254 0-24 10.746-24 24V1000c0 13.254 10.746 24 24 24h94.77c13.726 0 24.656-11.49 23.97-25.198l-8.258-165.15C225.45 940.332 360.81 1008 512 1008c242.374 0 444.134-173.848 487.408-403.648 2.776-14.738-8.616-28.352-23.614-28.352h-98.168c-11.14 0-20.754 7.684-23.352 18.518C817.186 749.184 678.138 864 512 864z" fill="" p-id="15282" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    bad0: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-check-circle",
            use: "icon-check-circle-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-check-circle"><defs><style type="text/css">#icon-check-circle * {  }\n</style></defs><path d="M1008 512c0 273.934-222.066 496-496 496S16 785.934 16 512 238.066 16 512 16s496 222.066 496 496zM454.628 774.628l368-368c12.496-12.496 12.496-32.758 0-45.254l-45.254-45.254c-12.496-12.498-32.758-12.498-45.256 0L432 616.236l-140.118-140.118c-12.496-12.496-32.758-12.496-45.256 0l-45.254 45.254c-12.496 12.496-12.496 32.758 0 45.254l208 208c12.498 12.498 32.758 12.498 45.256 0.002z" fill="" p-id="14841" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    bc64: function(e, t, n) {
        "use strict";
        n.d(t, "n", (function() {
            return i
        })),
        n.d(t, "i", (function() {
            return o
        })),
        n.d(t, "d", (function() {
            return c
        })),
        n.d(t, "e", (function() {
            return r
        })),
        n.d(t, "h", (function() {
            return s
        })),
        n.d(t, "j", (function() {
            return l
        })),
        n.d(t, "g", (function() {
            return u
        })),
        n.d(t, "f", (function() {
            return m
        })),
        n.d(t, "l", (function() {
            return _
        })),
        n.d(t, "m", (function() {
            return h
        })),
        n.d(t, "k", (function() {
            return d
        })),
        n.d(t, "o", (function() {
            return g
        })),
        n.d(t, "a", (function() {
            return p
        })),
        n.d(t, "b", (function() {
            return f
        })),
        n.d(t, "c", (function() {
            return y
        }));
        var a = n("1bab");
        function i(e) {
            return Object(a["a"])({
                url: "/game/login?lang=" + localStorage.getItem("ly_lang"),
                method: "get",
                timeout: 1e5,
                params: e
            })
        }
        function o(e) {
            return Object(a["a"])({
                url: "/game/record?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function c() {
            return Object(a["a"])({
                url: "game/api_moneys?lang=" + localStorage.getItem("ly_lang"),
                method: "post"
            })
        }
        function r(e) {
            return Object(a["a"])({
                url: "game/api_money?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                timeout: 1e5,
                data: e
            })
        }
        function s(e) {
            return Object(a["a"])({
                url: "game/deposit?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                timeout: 1e5,
                data: e
            })
        }
        function l(e) {
            return Object(a["a"])({
                url: "game/withdrawal?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                timeout: 1e5,
                data: e
            })
        }
        function u(e) {
            return Object(a["a"])({
                url: "game/change_trans?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                timeout: 1e4,
                data: e
            })
        }
        function m(e) {
            return Object(a["a"])({
                url: "game/balance?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                loading: !1,
                timeout: 1e4,
                data: e
            })
        }
        function _(e) {
            return Object(a["a"])({
                url: "games/lists?lang=" + localStorage.getItem("ly_lang"),
                method: "get",
                params: e
            })
        }
        function h() {
            return Object(a["a"])({
                url: "/game/type?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                loading: !1
            })
        }
        function d(e) {
            return Object(a["a"])({
                url: "games/apis?lang=" + localStorage.getItem("ly_lang"),
                method: "get",
                params: e
            })
        }
        function g() {
            return Object(a["a"])({
                url: "/game/recovery_last?lang=" + localStorage.getItem("ly_lang"),
                method: "post"
            })
        }
        function p(e) {
            return Object(a["a"])({
                url: "/favor/add?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                loading: !1,
                data: e
            })
        }
        function f(e) {
            return Object(a["a"])({
                url: "/favor/delete?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                loading: !1,
                data: e
            })
        }
        function y(e) {
            return Object(a["a"])({
                url: "/favor/list?lang=" + localStorage.getItem("ly_lang"),
                method: "get",
                params: e
            })
        }
    },
    bd3d: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-menu",
            use: "icon-menu-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-menu"><path d="M128 213.34016l768 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-768 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM128 725.34016l768 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-768 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM128 469.34016l768 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-768 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928z" p-id="2090" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    c023: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-history",
            use: "icon-history-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-history"><path d="M1008 511.062c0.506 273.28-222.36 496.744-495.64 496.936-118.03 0.084-226.446-41.06-311.644-109.822-22.154-17.88-23.81-51.082-3.678-71.214l22.534-22.534c17.218-17.218 44.706-19.102 63.782-3.968C346.124 850.27 425.562 880 512 880c203.41 0 368-164.622 368-368 0-203.41-164.622-368-368-368-97.628 0-186.298 37.938-252.136 99.864l101.508 101.508c20.16 20.16 5.882 54.628-22.626 54.628H48c-17.674 0-32-14.326-32-32V77.254c0-28.508 34.468-42.786 54.628-22.628l98.744 98.744C258.418 68.272 379.104 16 512 16c273.62 0 495.494 221.56 496 495.062z m-361.824 157.568l19.646-25.26c16.276-20.926 12.506-51.084-8.42-67.358L576 512.698V304c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48v271.302l130.818 101.748c20.926 16.274 51.082 12.506 67.358-8.42z" fill="" p-id="15493" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    c40a: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-heart",
            use: "icon-heart-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-heart"><path d="M924.6 125.2C815 31.8 652 48.6 551.4 152.4L512 193l-39.4-40.6C372.2 48.6 209 31.8 99.4 125.2c-125.6 107.2-132.2 299.6-19.8 415.8l387 399.6c25 25.8 65.6 25.8 90.6 0l387-399.6c112.6-116.2 106-308.6-19.6-415.8z" fill="" p-id="15803" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    c459: function(e, t, n) {
        "use strict";
        n.r(t);
        n("7db0"),
        n("b0c0"),
        n("d3b7");
        var a = n("5530"),
        i = n("ed95"),
        o = {
            systemConfigs: {},
            systemNoticeList: null,
            lang: localStorage.getItem("ly_lang"),
            is_first: sessionStorage.getItem("is_first") || "true",
            showLogin: !1,
            lang_list: []
        },
        c = {
            getConfigs: function(e, t) {
                var n = e.commit;
                t = t || "system";
                var a = location.hostname;
                return new Promise((function(e, o) {
                    Object(i["h"])(t, a).then((function(t) {
                        n("ADD_CONFIG", t.data),
                        e(t)
                    }))
                }))
            },
            getNotice: function(e) {
                var t = e.commit,
                n = e.state;
                if (!n.systemNoticeList) return new Promise((function(e, n) {
                    Object(i["j"])().then((function(n) {
                        t("SET_NOTICE", n.data),
                        e(n)
                    }))
                }))
            },
            getSysLinks: function(e) {
                var t = e.commit,
                n = e.state;
                if (!n.systemLink) return new Promise((function(e, n) {
                    Object(i["i"])().then((function(n) {
                        t("SET_LINK", n.data),
                        e(n)
                    }))
                }))
            },
            getLanguage: function(e) {
                var t = e.commit,
                n = e.state;
                return new Promise((function(e, a) {
                    Object(i["f"])().then((function(a) {
                        n.lang || t("SET_LANG", a.data.
                    default),
                        t("SET_LANG_LIST", a.data.list),
                        e(a)
                    })).
                    catch((function(e) {
                        a(e)
                    }))
                }))
            }
        },
        r = {
            ADD_CONFIG: function(e, t) {
                e.systemConfigs = Object(a["a"])({},
                e.systemConfigs, {},
                t)
            },
            SET_NOTICE: function(e, t) {
                e.systemNoticeList = t
            },
            SET_LINK: function(e, t) {
                e.systemLink = t
            },
            SET_LANG: function(e, t) {
                e.lang = t,
                localStorage.setItem("ly_lang", t)
            },
            SET_LANG_LIST: function(e, t) {
                for (var n in e.lang_list = [], t) e.lang_list.push({
                    key: n,
                    value: t[n]
                })
            },
            SET_FIRST_STATUS: function(e, t) {
                sessionStorage.setItem("is_first", t),
                e.is_first = t
            },
            CHANGE_LOGIN_STATUS: function(e, t) {
                e.showLogin = t
            }
        },
        s = {
            getConfig: function(e) {
                return function(t) {
                    return e.systemConfigs && e.systemConfigs.hasOwnProperty(t) ? e.systemConfigs[t] : ""
                }
            },
            getLink: function(e) {
                return function(t) {
                    return e.systemLink ? e.systemLink.find((function(e) {
                        if (e.name === t) return e
                    })) : []
                }
            }
        };
        t["default"] = {
            namespaced: !0,
            state: o,
            actions: c,
            mutations: r,
            getters: s
        }
    },
    cb53: function(e, t, n) {
        "use strict";
        n.r(t);
        n("ac1f"),
        n("5319");
        t["default"] = {
            floatNumber: {
                inserted: function(e) {
                    var t = "INPUT" === e.tagName ? e: e.querySelector("input");
                    t.addEventListener("keyup", (function(e) {
                        var n = t.value;
                        "string" === typeof n && (n = n.replace(/[^\d.]/g, ""), n = n.replace(/^\./g, ""), n = n.replace(/\.{2,}/g, "."), n = n.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."), n = n.replace(/^(\-)*(\d+)\.(\d\d\d).*$/, "$1$2.$3"), t.value = n)
                    }))
                }
            }
        }
    },
    cd95: function(e, t, n) {
        "use strict";
        n.r(t);
        n("99af"),
        n("4de4"),
        n("7db0"),
        n("caad"),
        n("b0c0"),
        n("d3b7"),
        n("2532");
        var a = n("2909"),
        i = n("a18c"),
        o = n("2755"),
        c = n("5f87"),
        r = function() {
            return {
                token: Object(c["a"])(),
                name: "",
                realname: "",
                mobile: null,
                phone: "",
                email: null,
                qq: "",
                facebook: "",
                line: "",
                remark: null,
                auth: !1,
                money: null,
                ml_money: null,
                fs_money: null,
                has_qk_pwd: null,
                is_agent: null,
                is_trans_on: null,
                loginTime: null,
                level: 0,
                member_lang: "",
                unread_count: 0,
                message_recevied: [],
                message_sent: [],
                fsList: [],
                is_demo: null,
                is_show_notice: !0
            }
        },
        s = r(),
        l = {
            login: function(e, t) {
                var n = e.commit,
                a = t.name,
                i = t.password,
                r = t.captcha,
                s = t.key;
                return new Promise((function(e, t) {
                    Object(o["e"])({
                        name: a,
                        password: i,
                        captcha: r,
                        key: s
                    }).then((function(t) {
                        if ("success" == t.status) {
                            var a = t.data;
                            n("SET_TOKEN", a.access_token),
                            Object(c["c"])(a.access_token)
                        } else n("HANDLE_LOGOUT");
                        e(t)
                    })).
                    catch((function(e) {
                        t(e)
                    }))
                }))
            },
            getMemberInfo: function(e) {
                var t = e.commit;
                e.state;
                return new Promise((function(e, n) {
                    Object(o["h"])().then((function(a) {
                        var i = a.data;
                        i || n("认证失败，请重新登录"),
                        t("SET_AUTH", !0),
                        t("SET_NAME", i.name),
                        t("SET_REAL_NAME", i.realname),
                        t("SET_PHONE", i.phone),
                        t("SET_EMAIL", i.email),
                        t("SET_QQ", i.qq),
                        t("SET_LINE", i.line),
                        t("SET_FACEBOOK", i.facebook),
                        t("SET_MONEY", i.money),
                        t("SET_ML_MONEY", i.ml_money),
                        t("SET_FS_MONEY", i.fs_money),
                        t("SET_HAS_QK_PWD", i.has_qk_pwd),
                        t("SET_IS_AGENT", !!i.agent_id),
                        t("SET_IS_TRANS", i.is_trans_on),
                        t("SET_IS_DEMO", i.is_demo),
                        t("SET_LOGIN_TIME", i.updated_at),
                        t("SET_LEVEL", i.level),
                        t("SET_MEMBER_LANG", i.lang),
                        e(a)
                    })).
                    catch((function(e) {
                        n(e)
                    }))
                }))
            },
            updateMemberInfo: function(e, t) {
                var n = e.commit;
                e.state;
                return new Promise((function(e, a) {
                    Object(o["y"])(t).then((function(a) {
                        t.realname ? n("SET_REAL_NAME", t.realname) : t.phone ? n("SET_PHONE", t.phone) : t.email ? n("SET_EMAIL", t.email) : t.line ? n("SET_LINE", t.line) : n("SET_FACEBOOK", t.facebook),
                        e(a)
                    })).
                    catch((function(e) {
                        a(e)
                    }))
                }))
            },
            logout: function(e) {
                var t = e.commit;
                e.state;
                return new Promise((function(e, n) {
                    Object(o["g"])().then((function(n) {
                        t("HANDLE_LOGOUT"),
                        e(n)
                    })).
                    catch((function(e) {
                        n(e)
                    }))
                }))
            },
            refreshToken: function(e, t) {
                var n = e.commit;
                n("SET_TOKEN", t),
                Object(c["c"])(t)
            },
            refreshMoney: function(e) {
                var t = e.commit;
                e.dispatch;
                return new Promise((function(e, n) {
                    Object(o["h"])().then((function(n) {
                        var a = n.data;
                        t("SET_MONEY", a.money),
                        t("SET_FS_MONEY", a.fs_money),
                        e(n)
                    })).
                    catch((function(e) {
                        n(e)
                    }))
                }))
            },
            setDrawingPwd: function(e, t) {
                var n = e.commit,
                a = {
                    qk_pwd: t
                };
                return new Promise((function(e, t) {
                    Object(o["u"])(a).then((function(t) {
                        n("SET_HAS_QK_PWD", !0),
                        e(t)
                    }))
                })).
                catch((function(e) {
                    reject(e)
                }))
            },
            getReceiveMessageList: function(e, t) {
                var n = e.commit;
                return t || (t = {
                    page: 1
                }),
                new Promise((function(e, a) {
                    Object(o["l"])(t).then((function(t) {
                        t.notice > 0 ? n("SET_IS_SHOW_NOTICE", !0) : n("SET_IS_SHOW_NOTICE", !1),
                        n("SET_UNREAD_COUNT", t.unread),
                        n("SET_MESSAGE_RECEIVED", t.data.data),
                        e(t)
                    })).
                    catch((function(e) {
                        a(e)
                    }))
                }))
            },
            readMessage: function(e, t) {
                var n = e.commit;
                return Array.isArray(t.ids) || (t.ids = [t.ids]),
                new Promise((function(e, a) {
                    Object(o["k"])(t).then((function(a) {
                        "success" == a.status && (t.state ? (n("SUB_UNREAD_COUNT", t.ids.length), n("UPDATE_MESSAGE_RECEIVED_READ", t.ids)) : (n("ADD_UNREAD_COUNT", t.ids.length), n("UPDATE_MESSAGE_RECEIVED_UNREAD", t.ids))),
                        e(a)
                    })).
                    catch((function(e) {
                        a(e)
                    }))
                }))
            },
            deleteMessage: function(e, t) {
                var n = e.commit;
                return Array.isArray(t.ids) || (t.ids = [t.ids]),
                new Promise((function(e, a) {
                    Object(o["j"])(t).then((function(a) {
                        "success" == a.status && (t.message ? n("REMOVE_MESSAGE_SENT", t.ids) : n("REMOVE_MESSAGE_RECEIVED", t.ids)),
                        e(a)
                    })).
                    catch((function(e) {
                        a(e)
                    }))
                }))
            },
            replyMessage: function(e, t) {
                var n = e.commit;
                return new Promise((function(e, a) {
                    Object(o["i"])(t).then((function(t) {
                        "success" == t.status && n("ADD_MESSAGE_SENT", t.data),
                        e(t)
                    })).
                    catch((function(e) {
                        a(e)
                    }))
                }))
            },
            getSentMessageList: function(e, t) {
                var n = e.commit;
                return t || (t = {
                    page: 1
                }),
                new Promise((function(e, a) {
                    Object(o["m"])(t).then((function(t) {
                        n("SET_MESSAGE_SENT", t.data.data),
                        e(t)
                    })).
                    catch((function(e) {
                        a(e)
                    }))
                }))
            },
            getFsList: function(e, t) {
                var n = e.commit;
                return new Promise((function(e, a) {
                    Object(o["c"])(t).then((function(t) {
                        n("SET_FSLIST", t.data),
                        e(t)
                    })).
                    catch((function(e) {
                        a(e)
                    }))
                }))
            },
            shiwan: function(e) {
                var t = e.commit;
                return new Promise((function(e, n) {
                    Object(o["v"])().then((function(n) {
                        var a = n.data;
                        t("SET_TOKEN", a.access_token),
                        t("SET_IS_DEMO", 1),
                        Object(c["c"])(a.access_token),
                        e(n)
                    })).
                    catch((function(e) {
                        n(e)
                    }))
                }))
            }
        },
        u = {
            SET_IS_SHOW_NOTICE: function(e, t) {
                e.is_show_notice = t
            },
            RESET_STATE: function(e) {
                Object.assign(e, r())
            },
            SET_TOKEN: function(e, t) {
                e.token = t
            },
            SET_AUTH: function(e, t) {
                e.auth = !0
            },
            SET_NAME: function(e, t) {
                e.name = t
            },
            SET_REAL_NAME: function(e, t) {
                e.realname = t
            },
            SET_PHONE: function(e, t) {
                e.phone = t
            },
            SET_EMAIL: function(e, t) {
                e.email = t
            },
            SET_QQ: function(e, t) {
                e.qq = t
            },
            SET_MONEY: function(e, t) {
                e.money = t
            },
            SET_LEVEL: function(e, t) {
                e.level = t
            },
            SET_MEMBER_LANG: function(e, t) {
                e.member_lang = t
            },
            SET_LOGIN_TIME: function(e, t) {
                e.loginTime = t
            },
            SET_ML_MONEY: function(e, t) {
                e.ml_money = t
            },
            SET_FS_MONEY: function(e, t) {
                e.fs_money = t
            },
            SET_HAS_QK_PWD: function(e, t) {
                e.has_qk_pwd = t
            },
            SET_IS_AGENT: function(e, t) {
                e.is_agent = t
            },
            SET_IS_TRANS: function(e, t) {
                e.is_trans_on = t
            },
            SET_IS_DEMO: function(e, t) {
                e.is_demo = t
            },
            HANDLE_LOGOUT: function(e) {
                Object(c["b"])(),
                Object.assign(e, r()),
                i["default"].push({
                    name: "home"
                })
            },
            SUB_MONEY: function(e, t) {
                e.money = e.money - t
            },
            SET_LINE: function(e, t) {
                e.line = t
            },
            SET_FACEBOOK: function(e, t) {
                e.facebook = t
            },
            SET_UNREAD_COUNT: function(e, t) {
                e.unread_count = t
            },
            SUB_UNREAD_COUNT: function(e, t) {
                e.unread_count = e.unread_count - t,
                e.unread_count = e.unread_count < 0 ? 0 : e.unread_count
            },
            ADD_UNREAD_COUNT: function(e, t) {
                e.unread_count = e.unread_count + t
            },
            UPDATE_MESSAGE_RECEIVED_READ: function(e, t) {
                e.message_recevied.find((function(e) {
                    return e.id == t
                })).is_read = 1
            },
            UPDATE_MESSAGE_RECEIVED_UNREAD: function(e, t) {
                e.message_recevied.find((function(e) {
                    return e.id == t
                })).is_read = 0
            },
            RESET_MESSAGE_RECEIVED: function(e, t) {
                e.message_recevied = []
            },
            SET_MESSAGE_RECEIVED: function(e, t) {
                e.message_recevied = e.message_recevied.filter((function(e) {
                    return ! t.find((function(t) {
                        return t.id == e.id
                    }))
                })),
                e.message_recevied = [].concat(Object(a["a"])(e.message_recevied), Object(a["a"])(t))
            },
            REMOVE_MESSAGE_RECEIVED: function(e, t) {
                e.message_recevied = e.message_recevied.filter((function(e) {
                    return ! t.includes(e.id)
                }))
            },
            SET_MESSAGE_SENT: function(e, t) {
                e.message_sent = e.message_sent.filter((function(e) {
                    return ! t.find((function(t) {
                        return t.id == e.id
                    }))
                })),
                e.message_sent = [].concat(Object(a["a"])(e.message_sent), Object(a["a"])(t))
            },
            ADD_MESSAGE_SENT: function(e, t) {
                e.message_sent.unshift(t)
            },
            RESET_MESSAGE_SENT: function(e, t) {
                e.message_sent = []
            },
            REMOVE_MESSAGE_SENT: function(e, t) {
                e.message_sent = e.message_sent.filter((function(e) {
                    return ! t.includes(e.id)
                }))
            },
            SET_FSLIST: function(e, t) {
                e.fsList = t
            }
        },
        m = {};
        t["default"] = {
            namespaced: !0,
            state: s,
            actions: l,
            mutations: u,
            getters: m
        }
    },
    d307: function(e, t, n) {
        var a = {
            "./act.js": "48fb",
            "./activity.js": "1d4b",
            "./bank.js": "02e0",
            "./common.js": "c459",
            "./game.js": "51be",
            "./lottery.js": "303d",
            "./member.js": "cd95",
            "./recharge.js": "98f2",
            "./team.js": "0520",
            "./test.js": "7820"
        };
        function i(e) {
            var t = o(e);
            return n(t)
        }
        function o(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return a[e]
        }
        i.keys = function() {
            return Object.keys(a)
        },
        i.resolve = o,
        e.exports = i,
        i.id = "d307"
    },
    d32a: function(e, t, n) {},
    d7ec: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-eye-open",
            use: "icon-eye-open-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-eye-open"><defs><style></style></defs><path d="M512 128q69.675 0 135.51 21.163t115.498 54.997 93.483 74.837 73.685 82.006 51.67 74.837 32.17 54.827L1024 512q-2.347 4.992-6.315 13.483T998.87 560.17t-31.658 51.669-44.331 59.99-56.832 64.34-69.504 60.16-82.347 51.5-94.848 34.687T512 896q-69.675 0-135.51-21.163t-115.498-54.826-93.483-74.326-73.685-81.493-51.67-74.496-32.17-54.997L0 513.707q2.347-4.992 6.315-13.483t18.816-34.816 31.658-51.84 44.331-60.33 56.832-64.683 69.504-60.331 82.347-51.84 94.848-34.816T512 128.085zm0 85.333q-46.677 0-91.648 12.331t-81.152 31.83-70.656 47.146-59.648 54.485-48.853 57.686-37.675 52.821-26.325 43.99q12.33 21.674 26.325 43.52t37.675 52.351 48.853 57.003 59.648 53.845T339.2 767.02t81.152 31.488T512 810.667t91.648-12.331 81.152-31.659 70.656-46.848 59.648-54.186 48.853-57.344 37.675-52.651T927.957 512q-12.33-21.675-26.325-43.648t-37.675-52.65-48.853-57.345-59.648-54.186-70.656-46.848-81.152-31.659T512 213.334zm0 128q70.656 0 120.661 50.006T682.667 512 632.66 632.661 512 682.667 391.339 632.66 341.333 512t50.006-120.661T512 341.333zm0 85.334q-35.328 0-60.33 25.002T426.666 512t25.002 60.33T512 597.334t60.33-25.002T597.334 512t-25.002-60.33T512 426.666z" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    dcf8: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-nested",
            use: "icon-nested-usage",
            viewBox: "0 0 128 128",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-nested"><path d="M.002 9.2c0 5.044 3.58 9.133 7.998 9.133 4.417 0 7.997-4.089 7.997-9.133 0-5.043-3.58-9.132-7.997-9.132S.002 4.157.002 9.2zM31.997.066h95.981V18.33H31.997V.066zm0 45.669c0 5.044 3.58 9.132 7.998 9.132 4.417 0 7.997-4.088 7.997-9.132 0-3.263-1.524-6.278-3.998-7.91-2.475-1.63-5.524-1.63-7.998 0-2.475 1.632-4 4.647-4 7.91zM63.992 36.6h63.986v18.265H63.992V36.6zm-31.995 82.2c0 5.043 3.58 9.132 7.998 9.132 4.417 0 7.997-4.089 7.997-9.132 0-5.044-3.58-9.133-7.997-9.133s-7.998 4.089-7.998 9.133zm31.995-9.131h63.986v18.265H63.992V109.67zm0-27.404c0 5.044 3.58 9.133 7.998 9.133 4.417 0 7.997-4.089 7.997-9.133 0-3.263-1.524-6.277-3.998-7.909-2.475-1.631-5.524-1.631-7.998 0-2.475 1.632-4 4.646-4 7.91zm31.995-9.13h31.991V91.4H95.987V73.135z" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    e025: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-piggy-bank",
            use: "icon-piggy-bank-usage",
            viewBox: "0 0 1152 1024",
            content: '<symbol class="icon" viewBox="0 0 1152 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-piggy-bank"><defs><style type="text/css">#icon-piggy-bank * {  }\n</style></defs><path d="M1120 448h-59c-17.6-40-43.2-75.4-74.8-105L1024 192h-64c-58.8 0-110.8 27-146 68.6-15.2-2.2-30.2-4.6-46-4.6H512c-154.8 0-283.8 110-313.6 256H112c-29.6 0-53-27-47-57.6C69.4 431.6 90.8 416 114 416h2c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12-57 0-107.8 40.8-115 97.2C-7.8 517.6 45.4 576 112 576h80c0 104.4 50.8 196.2 128 254.6V992c0 17.6 14.4 32 32 32h128c17.6 0 32-14.4 32-32v-96h256v96c0 17.6 14.4 32 32 32h128c17.6 0 32-14.4 32-32v-161.4c23.6-17.8 44.6-38.8 62.6-62.6H1120c17.6 0 32-14.4 32-32V480c0-17.6-14.4-32-32-32z m-256 128c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zM512 192h256c10.8 0 21.4 0.8 31.8 1.6 0-0.6 0.2-1 0.2-1.6 0-106-86-192-192-192s-192 86-192 192c0 4.2 1 8.2 1.2 12.4 30.4-7.8 62-12.4 94.8-12.4z" fill="" p-id="14877" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    e8fd: function(e, t, n) {
        "use strict";
        var a = n("6491"),
        i = n.n(a);
        i.a
    },
    ea2a: function(e, t, n) {
        var a = {
            "./about.js": "4175",
            "./index.js": "a18c"
        };
        function i(e) {
            var t = o(e);
            return n(t)
        }
        function o(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return a[e]
        }
        i.keys = function() {
            return Object.keys(a)
        },
        i.resolve = o,
        e.exports = i,
        i.id = "ea2a"
    },
    eb1b: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-form",
            use: "icon-form-usage",
            viewBox: "0 0 128 128",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-form"><path d="M84.068 23.784c-1.02 0-1.877-.32-2.572-.96a8.588 8.588 0 01-1.738-2.237 11.524 11.524 0 01-1.042-2.621c-.232-.895-.348-1.641-.348-2.238V0h.278c.834 0 1.622.085 2.363.256.742.17 1.645.575 2.711 1.214 1.066.64 2.363 1.535 3.892 2.686 1.53 1.15 3.453 2.664 5.77 4.54 2.502 2.045 4.494 3.771 5.977 5.178 1.483 1.406 2.618 2.6 3.406 3.58.787.98 1.274 1.812 1.46 2.494.185.682.277 1.278.277 1.79v2.046H84.068zM127.3 84.01c.278.682.464 1.535.556 2.558.093 1.023-.37 2.003-1.39 2.94-.463.427-.88.832-1.25 1.215-.372.384-.696.704-.974.96a6.69 6.69 0 01-.973.767l-11.816-10.741a44.331 44.331 0 001.877-1.535 31.028 31.028 0 011.737-1.406c1.112-.938 2.317-1.343 3.615-1.215 1.297.128 2.363.405 3.197.83.927.427 1.923 1.173 2.989 2.239 1.065 1.065 1.876 2.195 2.432 3.388zM78.23 95.902c2.038 0 3.752-.511 5.143-1.534l-26.969 25.83H18.037c-1.761 0-3.684-.47-5.77-1.407a24.549 24.549 0 01-5.838-3.709 21.373 21.373 0 01-4.518-5.306c-1.204-2.003-1.807-4.07-1.807-6.202V16.495c0-1.79.44-3.665 1.32-5.626A18.41 18.41 0 015.04 5.562a21.798 21.798 0 015.213-3.964C12.198.533 14.237 0 16.37 0h53.24v15.984c0 1.62.278 3.367.834 5.242a16.704 16.704 0 002.572 5.179c1.159 1.577 2.665 2.898 4.518 3.964 1.853 1.066 4.078 1.598 6.673 1.598h20.295v42.325L85.458 92.45c1.02-1.364 1.529-2.856 1.529-4.476 0-2.216-.857-4.113-2.572-5.69-1.714-1.577-3.776-2.366-6.186-2.366H26.1c-2.409 0-4.448.789-6.116 2.366-1.668 1.577-2.502 3.474-2.502 5.69 0 2.217.834 4.092 2.502 5.626 1.668 1.535 3.707 2.302 6.117 2.302h52.13zM26.1 47.951c-2.41 0-4.449.789-6.117 2.366-1.668 1.577-2.502 3.473-2.502 5.69 0 2.216.834 4.092 2.502 5.626 1.668 1.534 3.707 2.302 6.117 2.302h52.13c2.409 0 4.47-.768 6.185-2.302 1.715-1.534 2.572-3.41 2.572-5.626 0-2.217-.857-4.113-2.572-5.69-1.714-1.577-3.776-2.366-6.186-2.366H26.1zm52.407 64.063l1.807-1.663 3.476-3.196a479.75 479.75 0 004.587-4.284 500.757 500.757 0 015.004-4.667c3.985-3.666 8.48-7.758 13.485-12.276l11.677 10.741-13.485 12.404-5.004 4.603-4.587 4.22a179.46 179.46 0 00-3.267 3.068c-.88.853-1.367 1.322-1.46 1.407-.463.341-.973.703-1.529 1.087-.556.383-1.112.703-1.668.959-.556.256-1.413.575-2.572.959a83.5 83.5 0 01-3.545 1.087 72.2 72.2 0 01-3.475.895c-1.112.256-1.946.426-2.502.511-1.112.17-1.854.043-2.224-.383-.371-.426-.464-1.151-.278-2.174.092-.511.278-1.279.556-2.302.278-1.023.602-2.067.973-3.132l1.042-3.005c.325-.938.58-1.577.765-1.918a10.157 10.157 0 012.224-2.941z" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    ed08: function(e, t, n) {
        "use strict";
        n.d(t, "d", (function() {
            return a
        })),
        n.d(t, "b", (function() {
            return i
        })),
        n.d(t, "c", (function() {
            return o
        })),
        n.d(t, "a", (function() {
            return r
        })),
        n.d(t, "e", (function() {
            return s
        }));
        n("c975"),
        n("4d63"),
        n("ac1f"),
        n("25f0"),
        n("466d"),
        n("5319"),
        n("1276");
        function a(e) {
            var t = [];
            for (var n in e) {
                var a = {};
                a["value"] = n,
                a["text"] = e[n],
                t.push(a)
            }
            return t
        }
        function i(e, t) {
            var n = null;
            return function() {
                for (var a = this,
                i = arguments.length,
                o = new Array(i), c = 0; c < i; c++) o[c] = arguments[c];
                n && clearTimeout(n),
                n = setTimeout((function() {
                    e.apply(a, o)
                }), t)
            }
        }
        function o(e, t) { / (y + ) / .test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length)));
            var n = {
                "M+": e.getMonth() + 1,
                "d+": e.getDate(),
                "h+": e.getHours(),
                "m+": e.getMinutes(),
                "s+": e.getSeconds()
            };
            for (var a in n) if (new RegExp("(".concat(a, ")")).test(t)) {
                var i = n[a] + "";
                t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? i: c(i))
            }
            return t
        }
        function c(e) {
            return ("00" + e).substr(e.length)
        }
        function r() {
            var e = navigator.userAgent.toLowerCase(),
            t = "ipad" == e.match(/ipad/i),
            n = "iphone os" == e.match(/iphone os/i),
            a = "midp" == e.match(/midp/i),
            i = "rv:1.2.3.4" == e.match(/rv:1.2.3.4/i),
            o = "ucweb" == e.match(/ucweb/i),
            c = "android" == e.match(/android/i),
            r = "windows ce" == e.match(/windows ce/i),
            s = "windows mobile" == e.match(/windows mobile/i);
            return !! (t || n || a || i || o || c || r || s)
        }
        function s(e) {
            switch (e) {
            case "zh_cn":
                return "¥";
            case "zh_hk":
                return "HK$";
            case "en":
                return "$";
            case "vi":
                return "₫";
            case "th":
                return "฿"
            }
        }
    },
    ed95: function(e, t, n) {
        "use strict";
        n.d(t, "e", (function() {
            return i
        })),
        n.d(t, "c", (function() {
            return o
        })),
        n.d(t, "b", (function() {
            return c
        })),
        n.d(t, "j", (function() {
            return r
        })),
        n.d(t, "d", (function() {
            return s
        })),
        n.d(t, "g", (function() {
            return l
        })),
        n.d(t, "h", (function() {
            return u
        })),
        n.d(t, "a", (function() {
            return m
        })),
        n.d(t, "i", (function() {
            return _
        })),
        n.d(t, "f", (function() {
            return h
        }));
        var a = n("1bab");
        function i() {
            return Object(a["a"])({
                url: "/auth/captcha?lang=" + localStorage.getItem("ly_lang"),
                loading: !1,
                method: "post"
            })
        }
        function o() {
            return Object(a["a"])({
                url: "/activities?lang=" + localStorage.getItem("ly_lang"),
                method: "get"
            })
        }
        function c(e) {
            return Object(a["a"])({
                url: "/activity/" + e + "?lang=" + localStorage.getItem("ly_lang"),
                method: "get"
            })
        }
        function r() {
            return Object(a["a"])({
                url: "/system/notices?isMobile=1&lang=" + localStorage.getItem("ly_lang"),
                method: "get"
            })
        }
        function s() {
            return Object(a["a"])({
                url: "/banners?group=mobile1&lang=" + localStorage.getItem("ly_lang"),
                method: "get"
            })
        }
        function l() {
            return Object(a["a"])({
                url: "/games?lang=" + localStorage.getItem("ly_lang"),
                method: "get"
            })
        }
        function u(e, t) {
            return Object(a["a"])({
                url: "/system/configs?group=" + e + "&url=" + t + "&is_mobile=1&lang=" + localStorage.getItem("ly_lang"),
                method: "get"
            })
        }
        function m(e) {
            return e = e || 1,
            Object(a["a"])({
                url: "abouts?type=" + e + "&lang=" + localStorage.getItem("ly_lang"),
                method: "get"
            })
        }
        function _() {
            return Object(a["a"])({
                url: "/system/link?lang=" + localStorage.getItem("ly_lang"),
                method: "get"
            })
        }
        function h() {
            return Object(a["a"])({
                url: "/language",
                method: "get"
            })
        }
    },
    f782: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"),
        i = n.n(a),
        o = n("21a1"),
        c = n.n(o),
        r = new i.a({
            id: "icon-dashboard",
            use: "icon-dashboard-usage",
            viewBox: "0 0 128 100",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 100" id="icon-dashboard"><path d="M27.429 63.638c0-2.508-.893-4.65-2.679-6.424-1.786-1.775-3.94-2.662-6.464-2.662-2.524 0-4.679.887-6.465 2.662-1.785 1.774-2.678 3.916-2.678 6.424 0 2.508.893 4.65 2.678 6.424 1.786 1.775 3.94 2.662 6.465 2.662 2.524 0 4.678-.887 6.464-2.662 1.786-1.775 2.679-3.916 2.679-6.424zm13.714-31.801c0-2.508-.893-4.65-2.679-6.424-1.785-1.775-3.94-2.662-6.464-2.662-2.524 0-4.679.887-6.464 2.662-1.786 1.774-2.679 3.916-2.679 6.424 0 2.508.893 4.65 2.679 6.424 1.785 1.774 3.94 2.662 6.464 2.662 2.524 0 4.679-.888 6.464-2.662 1.786-1.775 2.679-3.916 2.679-6.424zM71.714 65.98l7.215-27.116c.285-1.23.107-2.378-.536-3.443-.643-1.064-1.56-1.762-2.75-2.094-1.19-.33-2.333-.177-3.429.462-1.095.639-1.81 1.573-2.143 2.804l-7.214 27.116c-2.857.237-5.405 1.266-7.643 3.088-2.238 1.822-3.738 4.152-4.5 6.992-.952 3.644-.476 7.098 1.429 10.364 1.905 3.265 4.69 5.37 8.357 6.317 3.667.947 7.143.474 10.429-1.42 3.285-1.892 5.404-4.66 6.357-8.305.762-2.84.619-5.607-.429-8.305-1.047-2.697-2.762-4.85-5.143-6.46zm47.143-2.342c0-2.508-.893-4.65-2.678-6.424-1.786-1.775-3.94-2.662-6.465-2.662-2.524 0-4.678.887-6.464 2.662-1.786 1.774-2.679 3.916-2.679 6.424 0 2.508.893 4.65 2.679 6.424 1.786 1.775 3.94 2.662 6.464 2.662 2.524 0 4.679-.887 6.465-2.662 1.785-1.775 2.678-3.916 2.678-6.424zm-45.714-45.43c0-2.509-.893-4.65-2.679-6.425C68.68 10.01 66.524 9.122 64 9.122c-2.524 0-4.679.887-6.464 2.661-1.786 1.775-2.679 3.916-2.679 6.425 0 2.508.893 4.65 2.679 6.424 1.785 1.774 3.94 2.662 6.464 2.662 2.524 0 4.679-.888 6.464-2.662 1.786-1.775 2.679-3.916 2.679-6.424zm32 13.629c0-2.508-.893-4.65-2.679-6.424-1.785-1.775-3.94-2.662-6.464-2.662-2.524 0-4.679.887-6.464 2.662-1.786 1.774-2.679 3.916-2.679 6.424 0 2.508.893 4.65 2.679 6.424 1.785 1.774 3.94 2.662 6.464 2.662 2.524 0 4.679-.888 6.464-2.662 1.786-1.775 2.679-3.916 2.679-6.424zM128 63.638c0 12.351-3.357 23.78-10.071 34.286-.905 1.372-2.19 2.058-3.858 2.058H13.93c-1.667 0-2.953-.686-3.858-2.058C3.357 87.465 0 76.037 0 63.638c0-8.613 1.69-16.847 5.071-24.703C8.452 31.08 13 24.312 18.714 18.634c5.715-5.68 12.524-10.199 20.429-13.559C47.048 1.715 55.333.035 64 .035c8.667 0 16.952 1.68 24.857 5.04 7.905 3.36 14.714 7.88 20.429 13.559 5.714 5.678 10.262 12.446 13.643 20.301 3.38 7.856 5.071 16.09 5.071 24.703z" /></symbol>'
        });
        c.a.add(r);
        t["default"] = r
    },
    fe0c: function(e, t, n) {
        "use strict";
        n.d(t, "d", (function() {
            return i
        })),
        n.d(t, "c", (function() {
            return o
        })),
        n.d(t, "b", (function() {
            return c
        })),
        n.d(t, "a", (function() {
            return r
        })),
        n.d(t, "k", (function() {
            return s
        })),
        n.d(t, "l", (function() {
            return l
        })),
        n.d(t, "j", (function() {
            return u
        })),
        n.d(t, "m", (function() {
            return m
        })),
        n.d(t, "i", (function() {
            return _
        })),
        n.d(t, "g", (function() {
            return h
        })),
        n.d(t, "e", (function() {
            return d
        })),
        n.d(t, "h", (function() {
            return g
        })),
        n.d(t, "f", (function() {
            return p
        }));
        var a = n("1bab");
        function i() {
            return Object(a["a"])({
                url: "/act/list?lang=" + localStorage.getItem("ly_lang"),
                method: "get"
            })
        }
        function o(e) {

            return Object(a["a"])({
                url: "/act/" + e + "?lang=" + localStorage.getItem("ly_lang"),
                method: "get"
            })
        }
        function c(e) {
            return Object(a["a"])({
                url: "/act/apply/result?lang=" + localStorage.getItem("ly_lang") + "&member_name=" + e.member_name + "&activity_id=" + e.activity_id + "&page=" + e.page + "&limit=" + e.limit,
                method: "get",
                data: e
            })
        }
        function r(e, t) {
            return Object(a["a"])({
                url: "/act/apply/" + t + "?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function s() {
            return Object(a["a"])({
                url: "/levelup/live/setting?lang=" + localStorage.getItem("ly_lang"),
                method: "get"
            })
        }
        function l() {
            return Object(a["a"])({
                url: "/levelup/slot/setting?lang=" + localStorage.getItem("ly_lang"),
                method: "get"
            })
        }
        function u(e) {
            return Object(a["a"])({
                url: "/levelup/live/search?name=" + e + "&lang=" + localStorage.getItem("ly_lang"),
                method: "get"
            })
        }
        function m(e) {
            return Object(a["a"])({
                url: "/levelup/slot/search?name=" + e + "&lang=" + localStorage.getItem("ly_lang"),
                method: "get"
            })
        }
        function _() {
            return Object(a["a"])({
                url: "/credit/rule?lang=" + localStorage.getItem("ly_lang"),
                method: "get"
            })
        }
        function h(e) {
            return Object(a["a"])({
                url: "/credit/search?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function d(e) {
            return Object(a["a"])({
                url: "/credit/borrow?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function g(e) {
            return Object(a["a"])({
                url: "/credit/lend?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
        function p(e) {
            return Object(a["a"])({
                url: "/credit/check?lang=" + localStorage.getItem("ly_lang"),
                method: "post",
                data: e
            })
        }
    },
    ff3e: function(e, t, n) {
        "use strict";
        var a = n("138c"),
        i = n.n(a);
        i.a
    }
},
[[0, "runtime", "chunk-libs"]]]);