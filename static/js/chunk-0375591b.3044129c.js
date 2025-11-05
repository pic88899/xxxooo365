(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-0375591b"], {
    "78c7": function(t, a, e) {
        "use strict";
        e.r(a);
        var D = function() {
            var t = this,
            a = t.$createElement,
            e = t._self._c || a;
            return e("div", {
                staticClass: "pageBox customerService"
            },
            [e("iframe", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showIframe,
                    expression: "showIframe"
                }],
                staticStyle: {
                    width: "100%",
                    height: "100%",
                    border: "none"
                },
                attrs: {
                    src: t.url
                }
            }), e("div", {
                staticClass: "content"
            },
            [e("div", {
                staticClass: "userInfo"
            },
            [t._m(0), e("div", {
                staticClass: "info"
            },
            [e("h5", [t._v("Hi, ")]), e("p", [t._v(t._s(t.$t("m.wap.welcome_serve")))])])]), e("a", {
                staticClass: "mainService",
                attrs: {
                    href: "javascript:;"
                },
                on: {
                    click: function(a) {
						window.open(t.getConfig("service_link"));
                        //t.clickLink(t.getConfig("service_link"))
                    }
                }
            },
            [e("div", [e("h5", [e("i", {
                staticClass: "iconfont"
            },
            [t._v("")]), e("span", [t._v(t._s(t.$t("m.wap.main_service")))])]), e("p", {
                staticClass: "textEnglish"
            },
            [t._v(t._s(t.$t("m.wap.main_service1")))]), e("p", {
                staticClass: "textChinese"
            },
            [e("span", [t._v("7*24 ")]), t._v(t._s(t.$t("m.wap.main_service2")))]), e("Icon", {
                staticClass: "right",
                attrs: {
                    name: "arrow"
                }
            })], 1)])])])
        },
        i = [function() {
            var t = this,
            a = t.$createElement,
            e = t._self._c || a;
            return e("div", {
                staticClass: "avatar"
            },
            [e("img", {
                attrs: {
                    "data-src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAABHVBMVEUAAADx8fHw8PDx8fHw8PDx8fHy8vLy8vLw8PDx8fHw8PDz8/Pw8PD////y8vL////4tgDx8fHw8PDx8fHw8PDx8fHx8fHw8PD19fX////////4tgD4tgD4tgD/vxX4twT3tQD4tgD4tgD4tgD4twD6uQD/ugDy6Mz3zFnw8PD++fJmZmb3tQD79/L08/Hn49349fGNjYx3d3dwcHDo6OeRkZDf29W6ubilpKObmpp9fX1ra2vf39/Z2dn2wzXv7uv18Orj4+Pk39rX1NHQzMjFwr63tbOVlZOCgoH303Xx7N7Pz8+/v7+vrq2qqaj42YaHh4b0zWPx6M3Kysr868Dy5L7y3qafn57535bz2ZD1yU32vyb2uhTr5uD3xkCgIOjOAAAAKXRSTlMA+fDs0rBzY8ySVUIiBjwE7effuYltWzMaDAixc14K0uffuYltMxrSPO+PXkkAAANcSURBVFjDnNXrTupQEAXg6R1FMNyFN1idGAKlUApGAbkkKDHxx3n/Nzmn5Fj2YLtb/R5gMpe1W9LpeW3HblqGYTVtp+316DceOo6JK6bTeaAfGXRbyNHqDqisvtuARsPtUxn3roUClntPheo2SrDrpFe7QUk3NdK4q+Da5DiL5uFoFO7np9nnBKnKHeWqmpCeTgeW4ve0llmlHLcGhLcDZ1i84T/jljJ5V918cI60ErzMfuRqIs41Riqjp6qYaxmzxgpfjOq3e5lirDHrLJEyr25XE3ffBKwzhqIi8yRyuApYK5TJFO8CqhEXCOYrXNSVd2pD8c7Fxsqa7MsLdsWiuYwYF276/bGgmHMpn0hZ/ayGllxO+L2lQUPfUHEGGgNKdKEKuCQoupRoQXHkstQEtM7/HagiLmsJRfKX6mSG8WO7ed2FfGWx3w6HuwUnJlB0iMiBKuazyD972YbBV414v9s8+olXTjxD4RCRmbHrkX/xvJ5O18MXX3FICkNlEvWQUWjoa0Xn8ws98iCM+Z+5rzdLmobgUTuj0NTXOi8pgtAmB0IyfuwX2DDzDIJDNoTk4ie/wJSZnyDY1ITwJ51MY80cQGqSBWHHvHj0CwyZ95AsMiAc0xDpC80gGX9bMZuehIEgDPciJJhgjUSJ/eJbu92tPRC9FQ56aBNTSwD50v//M0QCWfua7qyNz609PNmdaWdnFkXjIHjVEY1RhFvz34JnWvS9atgaBDtkT8EDo4P9wlhUDDakX7DpIyP5eJ8yJiD9ZyDSRsAH2fofUcuoVxVF8NPeVBVBGYHCFmp7BBa2itEW8PND8QcT4YHi34Z3odAJNNDGA/LA3z1XxyMbiMiEIdfQRGjGKfSBy9tTW4MQG0NqstECQr2EYaOFS0ITepBaoRlFBBEfaEahPaYWJaRH0oSG/TeRYjnQsOMIgYSKbMEIAUMNovgMYaiBMUtfJMcspFFF1CgZRYFFnklPls98pK4zHKfZlnMez9mB+ef+YbMo7qtBj+uT5YYfiZPVKolPD8sfcT4nLxBmyY6XsV1P5AWC8kojXcdcyS5J5ZVGOfcep8nvmgaNbVIe074wdHDtjkrTsV1DF9fplWl6DmgoRgPLRIlpDUZGFYZO3/K65t7Q9ay+MzQUfAEQtKHkDLdyiwAAAABJRU5ErkJggg==",
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAABHVBMVEUAAADx8fHw8PDx8fHw8PDx8fHy8vLy8vLw8PDx8fHw8PDz8/Pw8PD////y8vL////4tgDx8fHw8PDx8fHw8PDx8fHx8fHw8PD19fX////////4tgD4tgD4tgD/vxX4twT3tQD4tgD4tgD4tgD4twD6uQD/ugDy6Mz3zFnw8PD++fJmZmb3tQD79/L08/Hn49349fGNjYx3d3dwcHDo6OeRkZDf29W6ubilpKObmpp9fX1ra2vf39/Z2dn2wzXv7uv18Orj4+Pk39rX1NHQzMjFwr63tbOVlZOCgoH303Xx7N7Pz8+/v7+vrq2qqaj42YaHh4b0zWPx6M3Kysr868Dy5L7y3qafn57535bz2ZD1yU32vyb2uhTr5uD3xkCgIOjOAAAAKXRSTlMA+fDs0rBzY8ySVUIiBjwE7effuYltWzMaDAixc14K0uffuYltMxrSPO+PXkkAAANcSURBVFjDnNXrTupQEAXg6R1FMNyFN1idGAKlUApGAbkkKDHxx3n/Nzmn5Fj2YLtb/R5gMpe1W9LpeW3HblqGYTVtp+316DceOo6JK6bTeaAfGXRbyNHqDqisvtuARsPtUxn3roUClntPheo2SrDrpFe7QUk3NdK4q+Da5DiL5uFoFO7np9nnBKnKHeWqmpCeTgeW4ve0llmlHLcGhLcDZ1i84T/jljJ5V918cI60ErzMfuRqIs41Riqjp6qYaxmzxgpfjOq3e5lirDHrLJEyr25XE3ffBKwzhqIi8yRyuApYK5TJFO8CqhEXCOYrXNSVd2pD8c7Fxsqa7MsLdsWiuYwYF276/bGgmHMpn0hZ/ayGllxO+L2lQUPfUHEGGgNKdKEKuCQoupRoQXHkstQEtM7/HagiLmsJRfKX6mSG8WO7ed2FfGWx3w6HuwUnJlB0iMiBKuazyD972YbBV414v9s8+olXTjxD4RCRmbHrkX/xvJ5O18MXX3FICkNlEvWQUWjoa0Xn8ws98iCM+Z+5rzdLmobgUTuj0NTXOi8pgtAmB0IyfuwX2DDzDIJDNoTk4ie/wJSZnyDY1ITwJ51MY80cQGqSBWHHvHj0CwyZ95AsMiAc0xDpC80gGX9bMZuehIEgDPciJJhgjUSJ/eJbu92tPRC9FQ56aBNTSwD50v//M0QCWfua7qyNz609PNmdaWdnFkXjIHjVEY1RhFvz34JnWvS9atgaBDtkT8EDo4P9wlhUDDakX7DpIyP5eJ8yJiD9ZyDSRsAH2fofUcuoVxVF8NPeVBVBGYHCFmp7BBa2itEW8PND8QcT4YHi34Z3odAJNNDGA/LA3z1XxyMbiMiEIdfQRGjGKfSBy9tTW4MQG0NqstECQr2EYaOFS0ITepBaoRlFBBEfaEahPaYWJaRH0oSG/TeRYjnQsOMIgYSKbMEIAUMNovgMYaiBMUtfJMcspFFF1CgZRYFFnklPls98pK4zHKfZlnMez9mB+ef+YbMo7qtBj+uT5YYfiZPVKolPD8sfcT4nLxBmyY6XsV1P5AWC8kojXcdcyS5J5ZVGOfcep8nvmgaNbVIe074wdHDtjkrTsV1DF9fplWl6DmgoRgPLRIlpDUZGFYZO3/K65t7Q9ay+MzQUfAEQtKHkDLdyiwAAAABJRU5ErkJggg==",
                    lazy: "loaded"
                }
            })])
        }],
        s = e("5530"),
        n = (e("c3a6"), e("ad06")),
        f = e("2f62"),
        r = {
            name: "Server",
            data: function() {
                return {
                    showIframe: !1,
                    url: ""
                }
            },
            components: {
                Icon: n["a"]
            },
            computed: Object(s["a"])({},
            Object(f["c"])({
                getConfig: "common/getConfig"
            })),
            methods: {
                clickLink: function(t) {
                    return this.showIframe = !0,
                    this.url = t,
                    !1
                }
            }
        },
        A = r,
        c = (e("de98"), e("2877")),
        o = Object(c["a"])(A, D, i, !1, null, "6f116790", null);
        a["default"] = o.exports
    },
    d91c: function(t, a, e) {},
    de98: function(t, a, e) {
        "use strict";
        var D = e("d91c"),
        i = e.n(D);
        i.a
    }
}]);