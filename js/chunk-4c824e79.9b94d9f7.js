(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-4c824e79"], {
    "60e4": function(t, c, i) {
        "use strict";
        i.r(c);
        var a = function() {
            var t = this,
            c = t.$createElement,
            i = t._self._c || c;
            return i("div", {
                staticClass: "container"
            },
            [i("Header"), i("div", {
                staticClass: "newlist"
            },
            [i("ul", t._l(t.activityList, (function(c) {
                return i("li", [i("a", {
                    staticClass: "yh yh36",
                    attrs: {
                        href: "javascript:;"
                    }
                },
                [i("img", {
                    attrs: {
                        src: c.hall_image
                    }
                })]), i("router-link", {
                    staticClass: "discount yh36",
                    attrs: {
                        to: "/activity/" + c.id
                    }
                },
                [t._v(t._s(t.$t("m.act.apply_act1")))]), i("router-link", {
                    staticClass: "view",
                    attrs: {
                        to: "/activity/" + c.id
                    }
                },
                [t._v(t._s(t.$t("m.act.check_detail")))])], 1)
            })), 0), i("div", {
                staticClass: "clear"
            })]), i("Footer")], 1)
        },
        e = [],
        s = i("5530"),
        n = i("2f62"),
        o = i("7c4b"),
        r = i("bd63"),
        l = {
            name: "Act",
            data: function() {
                return {
                    list: [],
                    random: [],
                    checkList: []
                }
            },
            computed: Object(s["a"])({},
            Object(n["e"])({
                logo: function(t) {
                    return t.common.systemConfigs.site_logo
                },
                activityList: function(t) {
                    return t.act.activityList
                }
            }), {},
            Object(n["c"])({
                getConfig: "common/getConfig"
            })),
            components: {
                Header: o["a"],
                Footer: r["a"]
            },
            mounted: function() {},
            methods: Object(s["a"])({},
            Object(n["b"])({
                getActivityList: "act/getActivityList"
            }))
        },
        u = l,
        d = (i("c5cb"), i("2877")),
        f = Object(d["a"])(u, a, e, !1, null, "51ff5c8a", null);
        c["default"] = f.exports
    },
    "777a": function(t, c, i) {},
    c5cb: function(t, c, i) {
        "use strict";
        var a = i("777a"),
        e = i.n(a);
        e.a
    }
}]);