(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-f71f48ec"], {
    "0ca8": function(e, c, t) {},
    "6baa": function(e, c, t) {
        "use strict";
        var i = t("0ca8"),
        o = t.n(i);
        o.a
    },
    "935e": function(e, c, t) {
        "use strict";
        t.r(c);
        var i, o = function() {
            var e = this,
            c = e.$createElement,
            t = e._self._c || c;
            return t("div", {
                staticClass: "registerVersion3"
            },
            [t("header", {
                staticClass: "header"
            },
            [t("Icon", {
                attrs: {
                    name: "arrow-left"
                },
                on: {
                    click: function(c) {
                        return e.$router.go( - 1)
                    }
                }
            }), e._v(" " + e._s(e.$t("m.wap.register_btn")) + " ")], 1), t("div", {
                staticClass: "registerVersion3-form"
            },
            [t("van-form", {
                on: {
                    submit: e.onSubmit
                }
            },
            [1 == e.register_setting.isInviteCodeRequired_mobile ? t("div", {
                staticClass: "registerVersion3-form-group"
            },
            [t("label", [e._v(e._s(e.$t("m.auth.invite")))]), t("van-field", {
                attrs: {
                    clearable: "",
                    placeholder: e.$t("m.auth.invite")
                },
                model: {
                    value: e.params.invite_code,
                    callback: function(c) {
                        e.$set(e.params, "invite_code", c)
                    },
                    expression: "params.invite_code"
                }
            })], 1) : e._e(), t("div", {
                staticClass: "registerVersion3-form-group"
            },
            [t("label", [e._v(e._s(e.$t("m.member.user_name")))]), t("van-field", {
                attrs: {
                    required: "",
                    clearable: "",
                    placeholder: e.$t("m.wap.user_name_tips"),
                    maxlength: "8",
                    rules: [{
                        required: !0,
                        message: e.$t("m.wap.user_name_tips1")
                    }]
                },
                model: {
                    value: e.params.name,
                    callback: function(c) {
                        e.$set(e.params, "name", c)
                    },
                    expression: "params.name"
                }
            })], 1), t("div", {
                staticClass: "registerVersion3-form-group"
            },
            [t("label", [e._v(e._s(e.$t("m.auth.psw")))]), t("van-field", {
                attrs: {
                    required: "",
                    clearable: "",
                    type: "password",
                    maxlength: "12",
                    placeholder: e.$t("m.wap.psw_tips"),
                    rules: [{
                        required: !0,
                        message: e.$t("m.wap.psw_tips1")
                    }]
                },
                model: {
                    value: e.params.password,
                    callback: function(c) {
                        e.$set(e.params, "password", c)
                    },
                    expression: "params.password"
                }
            })], 1), t("div", {
                staticClass: "registerVersion3-form-group"
            },
            [t("label", [e._v(e._s(e.$t("m.auth.confirm_psw")))]), t("van-field", {
                attrs: {
                    required: "",
                    clearable: "",
                    type: "password",
                    maxlength: "12",
                    placeholder: e.$t("m.wap.confirm_psw"),
                    rules: [{
                        required: !0,
                        message: e.$t("m.wap.confirm_psw1")
                    }]
                },
                model: {
                    value: e.params.password_confirmation,
                    callback: function(c) {
                        e.$set(e.params, "password_confirmation", c)
                    },
                    expression: "params.password_confirmation"
                }
            })], 1), 1 == e.register_setting.isRealNameRequred_mobile ? t("div", {
                staticClass: "registerVersion3-form-group"
            },
            [t("label", [e._v(e._s(e.$t("m.auth.real_name")))]), t("van-field", {
                attrs: {
                    required: "",
                    clearable: "",
                    placeholder: e.$t("m.wap.real_name_tips"),
                    rules: [{
                        required: !0,
                        message: e.$t("m.wap.real_name_tips")
                    }]
                },
                model: {
                    value: e.params.realname,
                    callback: function(c) {
                        e.$set(e.params, "realname", c)
                    },
                    expression: "params.realname"
                }
            })], 1) : e._e(), t("div", {
                staticClass: "registerVersion3-form-group"
            },
            [t("label", [e._v(e._s(e.$t("m.auth.qk_psw")))]), t("van-field", {
                attrs: {
                    required: "",
                    maxlength: "6",
                    clearable: "",
                    placeholder: e.$t("m.member.enter_qk_psw"),
                    rules: [{
                        required: !0,
                        message: e.$t("m.member.enter_qk_psw")
                    }]
                },
                model: {
                    value: e.params.qk_pwd,
                    callback: function(c) {
                        e.$set(e.params, "qk_pwd", c)
                    },
                    expression: "params.qk_pwd"
                }
            })], 1), 1 == e.register_setting.isPhoneRequired_mobile ? t("div", {
                staticClass: "registerVersion3-form-group"
            },
            [t("label", [e._v(e._s(e.$t("m.wap.phone")))]), t("van-field", {
                attrs: {
                    type: "tel",
                    maxlength: "11",
                    required: "",
                    clearable: "",
                    placeholder: e.$t("m.wap.phone_tips"),
                    rules: [{
                        required: !0,
                        message: e.$t("m.wap.phone_tips")
                    }]
                },
                scopedSlots: e._u([{
                    key: "label",
                    fn: function() {
                        return [t("select", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: e.phone_pre,
                                expression: "phone_pre"
                            }],
                            staticClass: "select",
                            staticStyle: {
                                border: "none",
                                background: "transparent"
                            },
                            on: {
                                change: function(c) {
                                    var t = Array.prototype.filter.call(c.target.options, (function(e) {
                                        return e.selected
                                    })).map((function(e) {
                                        var c = "_value" in e ? e._value: e.value;
                                        return c
                                    }));
                                    e.phone_pre = c.target.multiple ? t: t[0]
                                }
                            }
                        },
                        [t("option", {
                            attrs: {
                                value: ""
                            }
                        },
                        [e._v(e._s(e.$t("m.wap.area")))]), e._l(e.phone_pre_list, (function(c) {
                            return [t("option", {
                                domProps: {
                                    value: c.code
                                }
                            },
                            [e._v(e._s(c.code))])]
                        }))], 2)]
                    },
                    proxy: !0
                },
                1 == e.getConfig("vip1_is_register_sms_open") ? {
                    key: "button",
                    fn: function() {
                        return [t("Button", {
                            class: e.countDown > 0 && e.countDown < 60 ? "disabled": "",
                            attrs: {
                                size: "small",
                                type: "info"
                            },
                            on: {
                                click: e.phone_captcha
                            }
                        },
                        [e._v(" " + e._s(60 == e.countDown || e.countDown <= 0 ? e.$t("m.wap.send_sms") : e.$t("m.wap.re_send_sms") + "（" + e.countDown + ")") + " ")])]
                    },
                    proxy: !0
                }: null], null, !0),
                model: {
                    value: e.params.phone,
                    callback: function(c) {
                        e.$set(e.params, "phone", c)
                    },
                    expression: "params.phone"
                }
            })], 1) : e._e(), 1 == e.getConfig("vip1_is_register_sms_open") ? [t("div", {
                staticClass: "registerVersion3-form-group"
            },
            [t("label", [e._v(e._s(e.$t("m.wap.sms_code")))]), t("van-field", {
                attrs: {
                    type: "tel",
                    maxlength: "11",
                    required: "",
                    clearable: "",
                    placeholder: e.$t("m.wap.sms_code_tips"),
                    rules: [{
                        required: !0,
                        message: e.$t("m.wap.sms_code_tips")
                    }]
                },
                model: {
                    value: e.params.sms_code,
                    callback: function(c) {
                        e.$set(e.params, "sms_code", c)
                    },
                    expression: "params.sms_code"
                }
            })], 1)] : e._e(), t("div", {
                staticClass: "registerVersion3-form-group"
            },
            [t("label", [e._v(e._s(e.$t("m.wap.currency")))]), t("van-field", {
                attrs: {
                    readonly: "",
                    clickable: "",
                    name: "lang",
                    value: e.resolveMoneys(e.params.lang),
                    placeholder: e.$t("m.wap.select_currency"),
                    required: "",
                    rules: [{
                        required: !0,
                        message: e.$t("m.wap.select_currency")
                    }]
                },
                on: {
                    click: function(c) {
                        e.showPicker = !0
                    }
                }
            })], 1), 1 == e.register_setting.isCaptchaRequired_mobile ? t("div", {
                staticClass: "registerVersion3-form-group"
            },
            [t("label", [e._v(e._s(e.$t("m.auth.captcha")))]), t("van-field", {
                attrs: {
                    clearable: "",
                    required: "",
                    placeholder: e.$t("m.auth.captcha")
                },
                scopedSlots: e._u([{
                    key: "button",
                    fn: function() {
                        return [t("img", {
                            staticStyle: {
                                width: "100px"
                            },
                            attrs: {
                                src: e.captcha_img,
                                alt: ""
                            },
                            on: {
                                click: e.getCaptcha
                            }
                        })]
                    },
                    proxy: !0
                }], null, !1, 1219598025),
                model: {
                    value: e.params.captcha,
                    callback: function(c) {
                        e.$set(e.params, "captcha", c)
                    },
                    expression: "params.captcha"
                }
            })], 1) : e._e(), t("button", {
                staticClass: "submitBtn",
                attrs: {
                    type: "submit"
                }
            },
            [e._v(e._s(e.$t("m.wap.register_tips")))]
			),t("button", {
                staticClass: "submitBtn",
                attrs: {
                    type: "bottom"
                },
	            on: {
                    click: function(a) {
                        window.location.href = "/";
                    }
                }			
            },
            [e._v(e._s(e.$t("已有账号 去登陆")))]
			)], 2)], 1), t("Popup", {
                attrs: {
                    position: "bottom"
                },
                model: {
                    value: e.showPicker,
                    callback: function(c) {
                        e.showPicker = c
                    },
                    expression: "showPicker"
                }
            },
            [t("Picker", {
                attrs: {
                    "show-toolbar": "",
                    columns: e.langs
                },
                on: {
                    confirm: e.onConfirm,
                    cancel: function(c) {
                        e.showPicker = !1
                    }
                }
            })], 1)], 1)
        },
        a = [],
        s = (t("d81d"), t("b0c0"), t("ade3")),
        r = (t("5f5f"), t("f253")),
        n = (t("8a58"), t("e41f")),
        d = (t("66b9"), t("b650")),
        y = (t("38d5"), t("772a")),
        l = (t("be7f"), t("565f")),
        p = (t("c3a6"), t("ad06")),
        m = (t("e7e5"), t("d399")),
        u = (t("e17f"), t("2241")),
        _ = t("5530"),
        h = t("2f62"),
        g = t("2755"),
        f = t("ed95"),
        v = t("ed08"),
        w = t("cf5f"),
        b = {
            name: "Login",
            data: function() {
                return {
                    params: new g["s"],
                    captcha_img: "",
                    invite_code: "",
                    isDialogShow: !1,
                    redirect: "/Main/home",
                    register_setting: {},
                    countDown: 60,
                    phone_timer: null,
                    showPicker: !1,
                    token: "",
                    phone_pre: "",
                    phone_pre_list: []
                }
            },
            computed: Object(_["a"])({},
            Object(h["c"])({
                getConfig: "common/getConfig"
            }), {},
            Object(h["e"])({
                lang_list: function(e) {
                    return e.common.lang_list
                }
            }), {
                langs: function() {
                    var e = this,
                    c = [];
                    return this.lang_list.map((function(t) {
                        c.push({
                            text: e.resolveMoneys(t.key),
                            key: t.key
                        })
                    })),
                    c
                }
            }),
            components: (i = {
                Dialog: u["a"],
                Toast: m["a"],
                Icon: p["a"]
            },
            Object(s["a"])(i, l["a"].name, l["a"]), Object(s["a"])(i, y["a"].name, y["a"]), Object(s["a"])(i, "Button", d["a"]), Object(s["a"])(i, "Popup", n["a"]), Object(s["a"])(i, "Picker", r["a"]), i),
            mounted: function() {
                var e = this;
                this.phone_pre_list = w["a"],
                this.getConfigs("register").then((function(c) {
                    e.register_setting = JSON.parse(c.data.register_setting_json)
                })),
                this.$route.query.hasOwnProperty("i") && (this.invite_code = this.$route.query.i, this.params.invite_code = this.invite_code),
                this.params.register_site = window.location.origin,
                this.getCaptcha(),
                this.$route.query.hasOwnProperty("token") && (this.token = this.$route.query.token),
                this.getLang()
            },
            methods: Object(_["a"])({
                resolveMoney: v["e"],
                resolveMoneys: function(e) {
                    switch (e) {
                    case "zh_cn":
                        return "¥ 【人民币】";
                    case "zh_hk":
                        return "HK$ 【港幣】";
                    case "en":
                        return "$ 【dollar】";
                    case "th":
                        return "฿ 【บาท】";
                    case "vi":
                        return "₫ 【Việt tên dong】"
                    }
                }
            },
            Object(h["b"])({
                getConfigs: "common/getConfigs"
            }), {},
            Object(h["d"])({
                SET_LANG: "common/SET_LANG"
            }), {
                onSubmit: function() {
                    var e = this,
                    c = Object.assign({},
                    this.params);
                    c.phone = this.phone_pre + c.phone,
                    Object(g["r"])(c).then((function(c) {
                        "success" == c.status ? u["a"].alert({
                            message: e.$t("m.auth.register_success")
                        }).then((function() {
                            e.params = new g["s"],
                            e.captcha_img = "",
                            e.$router.push({
                                path: e.redirect || "/"
                            })
                        })) : u["a"].alert({
                            message: c.message || e.$t("m.common.action_err")
                        })
                    })).
                    catch((function(c) {
                        e.getCaptcha()
                    }))
                },
                getCaptcha: function() {
                    var e = this;
                    Object(f["e"])().then((function(c) {
                        "success" == c.status && (e.params.key = c.data.key, e.captcha_img = c.data.img)
                    }))
                },
                phone_captcha: function() {
                    var e = this,
                    c = {
                        phone: this.phone_pre + this.params.phone
                    };
                    this.params.phone && this.phone_pre ? this.countDown >= 60 && (this.phone_timer = setInterval((function() {
                        e.countDown--,
                        e.countDown <= 0 && (clearInterval(e.phone_timer), e.countDown = 60)
                    }), 1e3), Object(g["w"])(c).then((function(c) {
                        "success" == c.status && m["a"].success(e.$t("m.wap.sms_success"))
                    }))) : m["a"].fail(this.$t("m.wap.sms_code_tips"))
                },
                onConfirm: function(e) {
                    this.params.lang = e.key,
                    this.showPicker = !1
                },
                getLang: function() {
                    var e = this,
                    c = {
                        register_site: this.params.register_site,
                        invite_code: this.params.invite_code,
                        token: this.token
                    };
                    Object(g["d"])(c).then((function(c) {
                        "success" == c.status && c.lang && (e.SET_LANG(c.lang), e.$i18n.locale = c.lang, e.params.lang = c.lang)
                    }))
                }
            })
        },
        $ = b,
        k = (t("6baa"), t("2877")),
        q = Object(k["a"])($, o, a, !1, null, "4fa51212", null);
        c["default"] = q.exports
    },
    cf5f: function(e, c, t) {
        "use strict";
        c["a"] = [{
            city: "中国大陆",
            code: "+86"
        },
        {
            city: "中国香港",
            code: "+852"
        },
        {
            city: "中国澳门",
            code: "+853"
        },
        {
            city: "中国台湾",
            code: "+886"
        },
        {
            city: "新加坡",
            code: "+65"
        },
        {
            city: "阿富汗",
            code: "+93"
        },
        {
            city: "阿尔巴尼亚",
            code: "+355"
        },
        {
            city: "阿尔格拉",
            code: "+213"
        },
        {
            city: "安道尔",
            code: "+376"
        },
        {
            city: "安哥拉",
            code: "+244"
        },
        {
            city: "安圭拉",
            code: "+1264"
        },
        {
            city: "阿森松岛",
            code: "+247"
        },
        {
            city: "安提瓜和巴布达",
            code: "+1268"
        },
        {
            city: "阿根廷",
            code: "+54"
        },
        {
            city: "亚美尼亚",
            code: "+374"
        },
        {
            city: "阿鲁巴",
            code: "+297"
        },
        {
            city: "澳大利亚",
            code: "+61"
        },
        {
            city: "奥地利",
            code: "+43"
        },
        {
            city: "阿塞拜疆",
            code: "+994"
        },
        {
            city: "巴哈马",
            code: "+1242"
        },
        {
            city: "巴林",
            code: "+973"
        },
        {
            city: "孟加拉国",
            code: "+880"
        },
        {
            city: "巴巴多斯",
            code: "+1246"
        },
        {
            city: "白俄罗斯",
            code: "+375"
        },
        {
            city: "比利时",
            code: "+32"
        },
        {
            city: "伯利兹",
            code: "+501"
        },
        {
            city: "贝宁",
            code: "+229"
        },
        {
            city: "百慕大",
            code: "+1441"
        },
        {
            city: "不丹",
            code: "+975"
        },
        {
            city: "玻利维亚",
            code: "+591"
        },
        {
            city: "波斯尼亚和黑塞哥维那",
            code: "+387"
        },
        {
            city: "博茨瓦纳",
            code: "+267"
        },
        {
            city: "巴西",
            code: "+55"
        },
        {
            city: "文莱",
            code: "+673"
        },
        {
            city: "保加利亚",
            code: "+359"
        },
        {
            city: "布基纳法索",
            code: "+226"
        },
        {
            city: "布隆迪",
            code: "+257"
        },
        {
            city: "柬埔寨",
            code: "+855"
        },
        {
            city: "喀麦隆",
            code: "+237"
        },
        {
            city: "加拿大",
            code: "+1"
        },
        {
            city: "佛得角",
            code: "+238"
        },
        {
            city: "开曼群岛",
            code: "+1345"
        },
        {
            city: "中非共和国",
            code: "+236"
        },
        {
            city: "乍得",
            code: "+235"
        },
        {
            city: "智利",
            code: "+56"
        },
        {
            city: "哥伦比亚",
            code: "+57"
        },
        {
            city: "科摩罗",
            code: "+269"
        },
        {
            city: "刚果共和国",
            code: "+242"
        },
        {
            city: "刚果民主共和国",
            code: "+243"
        },
        {
            city: "库克群岛",
            code: "+682"
        },
        {
            city: "哥斯达黎加",
            code: "+506"
        },
        {
            city: "科特迪沃",
            code: "+225"
        },
        {
            city: "克罗地亚",
            code: "+385"
        },
        {
            city: "古巴",
            code: "+53"
        },
        {
            city: "塞浦路斯",
            code: "+357"
        },
        {
            city: "+捷克共和国",
            code: "+420"
        },
        {
            city: "丹麦",
            code: "+45"
        },
        {
            city: "吉布提",
            code: "+253"
        },
        {
            city: "多米尼加",
            code: "+1767"
        },
        {
            city: "多米尼加共和国",
            code: "+1809"
        },
        {
            city: "厄瓜多尔",
            code: "+593"
        },
        {
            city: "埃及",
            code: "+20"
        },
        {
            city: "艾萨尔瓦多",
            code: "+503"
        },
        {
            city: "爱沙尼亚",
            code: "+372"
        },
        {
            city: "埃塞俄比亚",
            code: "+251"
        },
        {
            city: "法罗群岛",
            code: "+298"
        },
        {
            city: "斐济",
            code: "+679"
        },
        {
            city: "芬兰",
            code: "+358"
        },
        {
            city: "法国",
            code: "+33"
        },
        {
            city: "法属圭亚那",
            code: "+594"
        },
        {
            city: "法属波利尼西亚",
            code: "+689"
        },
        {
            city: "加蓬",
            code: "+241"
        },
        {
            city: "冈比亚",
            code: "+220"
        },
        {
            city: "格鲁吉亚",
            code: "+995"
        },
        {
            city: "德国",
            code: "+94"
        },
        {
            city: "加纳",
            code: "+233"
        },
        {
            city: "直布罗陀",
            code: "+350"
        },
        {
            city: "希腊",
            code: "+30"
        },
        {
            city: "格陵兰",
            code: "+299"
        },
        {
            city: "格林纳达",
            code: "+1473"
        },
        {
            city: "瓜德罗普",
            code: "+590"
        },
        {
            city: "关岛",
            code: "+1671"
        },
        {
            city: "危地马拉",
            code: "+502"
        },
        {
            city: "几内亚",
            code: "+240"
        },
        {
            city: "根西",
            code: "+44"
        },
        {
            city: "几内亚",
            code: "+224"
        },
        {
            city: "圭亚那",
            code: "+592"
        },
        {
            city: "海地",
            code: "+509"
        },
        {
            city: "洪都拉斯",
            code: "+504"
        },
        {
            city: "缅甸",
            code: "+95"
        },
        {
            city: "匈牙利",
            code: "+36"
        },
        {
            city: "冰岛",
            code: "+354"
        },
        {
            city: "印度",
            code: "+91"
        },
        {
            city: "印度尼西亚",
            code: "+62"
        },
        {
            city: "伊朗",
            code: "+98"
        },
        {
            city: "伊拉克",
            code: "+964"
        },
        {
            city: "爱尔兰",
            code: "+353"
        },
        {
            city: "马恩岛",
            code: "+44"
        },
        {
            city: "以色列",
            code: "+972"
        },
        {
            city: "意大利",
            code: "+93"
        },
        {
            city: "牙买加",
            code: "+1876"
        },
        {
            city: "日本",
            code: "+81"
        },
        {
            city: "泽西岛",
            code: "+44"
        },
        {
            city: "约旦",
            code: "+962"
        },
        {
            city: "哈萨克斯坦",
            code: "+7"
        },
        {
            city: "肯尼亚",
            code: "+254"
        },
        {
            city: "科索沃",
            code: "+383"
        },
        {
            city: "科威特",
            code: "+965"
        },
        {
            city: "吉尔吉斯斯坦",
            code: "+996"
        },
        {
            city: "老挝",
            code: "+856"
        },
        {
            city: "拉脱维亚",
            code: "+371"
        },
        {
            city: "黎巴嫩",
            code: "+961"
        },
        {
            city: "莱索托",
            code: "+266"
        },
        {
            city: "利比里亚",
            code: "+231"
        },
        {
            city: "利比亚",
            code: "+218"
        },
        {
            city: "列支敦士登",
            code: "+423"
        },
        {
            city: "立陶宛",
            code: "+370"
        },
        {
            city: "卢森堡",
            code: "+352"
        },
        {
            city: "马其顿",
            code: "+389"
        },
        {
            city: "马达加斯加",
            code: "+261"
        },
        {
            city: "马拉维",
            code: "+265"
        },
        {
            city: "马来西亚",
            code: "+60"
        },
        {
            city: "马尔代夫",
            code: "+960"
        },
        {
            city: "马里",
            code: "+223"
        },
        {
            city: "马耳他",
            code: "+356"
        },
        {
            city: "马提尼克",
            code: "+596"
        },
        {
            city: "毛里塔尼亚",
            code: "+222"
        },
        {
            city: "毛里求斯",
            code: "+230"
        },
        {
            city: "马约特",
            code: "+262"
        },
        {
            city: "墨西哥",
            code: "+52"
        },
        {
            city: "摩尔多瓦",
            code: "+373"
        },
        {
            city: "摩纳哥",
            code: "+377"
        },
        {
            city: "蒙古",
            code: "+976"
        },
        {
            city: "黑山",
            code: "+382"
        },
        {
            city: "蒙特塞拉特",
            code: "+1664"
        },
        {
            city: "摩洛哥",
            code: "+212"
        },
        {
            city: "莫桑比克",
            code: "+258"
        },
        {
            city: "纳米比亚",
            code: "+264"
        },
        {
            city: "尼泊尔",
            code: "+977"
        },
        {
            city: "荷兰",
            code: "+31"
        },
        {
            city: "荷属安的列斯",
            code: "+599"
        },
        {
            city: "新喀里多尼亚",
            code: "+687"
        },
        {
            city: "新西兰",
            code: "+64"
        },
        {
            city: "尼加拉瓜",
            code: "+505"
        },
        {
            city: "尼日尔",
            code: "+227"
        },
        {
            city: "尼日利亚",
            code: "+234"
        },
        {
            city: "挪威",
            code: "+47"
        },
        {
            city: "阿曼",
            code: "+968"
        },
        {
            city: "巴基斯坦",
            code: "+92"
        },
        {
            city: "巴勒斯坦",
            code: "+970"
        },
        {
            city: "巴拿马",
            code: "+507"
        },
        {
            city: "巴布亚新几内亚",
            code: "+675"
        },
        {
            city: "巴拉圭",
            code: "+595"
        },
        {
            city: "秘鲁",
            code: "+51"
        },
        {
            city: "菲律宾",
            code: "+63"
        },
        {
            city: "波兰",
            code: "+48"
        },
        {
            city: "葡萄牙",
            code: "+351"
        },
        {
            city: "波多黎各",
            code: "+1"
        },
        {
            city: "库塔",
            code: "+974"
        },
        {
            city: "留尼汪",
            code: "+262"
        },
        {
            city: "罗马尼亚",
            code: "+40"
        },
        {
            city: "俄罗斯",
            code: "+7"
        },
        {
            city: "卢旺达",
            code: "+250"
        },
        {
            city: "萨摩亚东部",
            code: "+684"
        },
        {
            city: "萨摩亚西部",
            code: "+685"
        },
        {
            city: "圣马力诺",
            code: "+378"
        },
        {
            city: "圣多美和普林西比",
            code: "+239"
        },
        {
            city: "沙特阿拉伯",
            code: "+966"
        },
        {
            city: "塞内加尔",
            code: "+221"
        },
        {
            city: "塞尔维亚",
            code: "+381"
        },
        {
            city: "塞舌尔",
            code: "+248"
        },
        {
            city: "塞拉利昂",
            code: "+232"
        },
        {
            city: "斯洛伐克",
            code: "+421"
        },
        {
            city: "斯洛文尼亚",
            code: "+386"
        },
        {
            city: "南非",
            code: "+27"
        },
        {
            city: "韩国",
            code: "+82"
        },
        {
            city: "西班牙",
            code: "+34"
        },
        {
            city: "斯里兰卡",
            code: "+94"
        },
        {
            city: "圣基茨和尼维斯",
            code: "+1869"
        },
        {
            city: "圣卢西亚",
            code: "+1758"
        },
        {
            city: "圣文森特",
            code: "+1784"
        },
        {
            city: "苏丹",
            code: "+249"
        },
        {
            city: "苏里南",
            code: "+597"
        },
        {
            city: "斯威士兰",
            code: "+268"
        },
        {
            city: "瑞典",
            code: "+46"
        },
        {
            city: "瑞士",
            code: "+41"
        },
        {
            city: "叙利亚",
            code: "+963"
        },
        {
            city: "塔吉克斯坦",
            code: "+992"
        },
        {
            city: "坦桑尼亚",
            code: "+255"
        },
        {
            city: "泰国",
            code: "+66"
        },
        {
            city: "东帝汶",
            code: "+670"
        },
        {
            city: "多哥",
            code: "+228"
        },
        {
            city: "汤加",
            code: "+676"
        },
        {
            city: "特立尼达和多巴哥",
            code: "+1868"
        },
        {
            city: "突尼斯",
            code: "+216"
        },
        {
            city: "土耳其",
            code: "+90"
        },
        {
            city: "土库曼斯坦",
            code: "+993"
        },
        {
            city: "特克斯和凯科斯群岛",
            code: "+1649"
        },
        {
            city: "乌干达",
            code: "+256"
        },
        {
            city: "乌克兰",
            code: "+380"
        },
        {
            city: "阿拉伯联合酋长国",
            code: "+971"
        },
        {
            city: "英国",
            code: "+44"
        },
        {
            city: "美国",
            code: "+1"
        },
        {
            city: "乌拉圭",
            code: "+598"
        },
        {
            city: "乌兹别克斯坦",
            code: "+998"
        },
        {
            city: "瓦努阿图",
            code: "+678"
        },
        {
            city: "委内瑞拉",
            code: "+58"
        },
        {
            city: "越南",
            code: "+84"
        },
        {
            city: "维尔京群岛",
            code: "+1340"
        },
        {
            city: "也门",
            code: "+967"
        },
        {
            city: "赞比亚",
            code: "+260"
        },
        {
            city: "津巴布韦",
            code: "+263"
        }]
    }
}]);