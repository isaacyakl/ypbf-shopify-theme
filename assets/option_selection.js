function floatToString(t, e) {
    var n = t.toFixed(e).toString();
    return n.match(/^\.\d+/) ? "0" + n : n
}
"undefined" == typeof window.Shopify && (window.Shopify = {}), Shopify.each = function(t, e) {
    for (var n = 0; n < t.length; n++) e(t[n], n)
}, Shopify.map = function(t, e) {
    for (var n = [], r = 0; r < t.length; r++) n.push(e(t[r], r));
    return n
}, Shopify.arrayIncludes = function(t, e) {
    for (var n = 0; n < t.length; n++)
        if (t[n] == e) return !0;
    return !1
}, Shopify.uniq = function(t) {
    for (var e = [], n = 0; n < t.length; n++) Shopify.arrayIncludes(e, t[n]) || e.push(t[n]);
    return e
}, Shopify.isDefined = function(t) {
    return "undefined" == typeof t ? !1 : !0
}, Shopify.getClass = function(t) {
    return Object.prototype.toString.call(t).slice(8, -1)
}, Shopify.extend = function(t, e) {
    function n() {}
    n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t, t.baseConstructor = e, t.superClass = e.prototype
}, Shopify.locationSearch = function() {
    return window.location.search
}, Shopify.locationHash = function() {
    return window.location.hash
}, Shopify.replaceState = function(t) {
    window.history.replaceState({}, document.title, t)
}, Shopify.urlParam = function(t) {
    var e = RegExp("[?&]" + t + "=([^&#]*)").exec(Shopify.locationSearch());
    return e && decodeURIComponent(e[1].replace(/\+/g, " "))
}, Shopify.newState = function(t, e) {
    var n;
    return n = Shopify.urlParam(t) ? Shopify.locationSearch().replace(RegExp("(" + t + "=)[^&#]+"), "$1" + e) : "" === Shopify.locationSearch() ? "?" + t + "=" + e : Shopify.locationSearch() + "&" + t + "=" + e, n + Shopify.locationHash()
}, Shopify.setParam = function(t, e) {
    Shopify.replaceState(Shopify.newState(t, e))
}, Shopify.Product = function(t) {
    Shopify.isDefined(t) && this.update(t)
}, Shopify.Product.prototype.update = function(t) {
    for (property in t) this[property] = t[property]
}, Shopify.Product.prototype.optionNames = function() {
    return "Array" == Shopify.getClass(this.options) ? this.options : []
}, Shopify.Product.prototype.optionValues = function(t) {
    if (!Shopify.isDefined(this.variants)) return null;
    var e = Shopify.map(this.variants, function(e) {
        var n = "option" + (t + 1);
        return void 0 == e[n] ? null : e[n]
    });
    return null == e[0] ? null : Shopify.uniq(e)
}, Shopify.Product.prototype.getVariant = function(t) {
    var e = null;
    return t.length != this.options.length ? e : (Shopify.each(this.variants, function(n) {
        for (var r = !0, i = 0; i < t.length; i++) {
            var o = "option" + (i + 1);
            n[o] != t[i] && (r = !1)
        }
        return 1 == r ? void(e = n) : void 0
    }), e)
}, Shopify.Product.prototype.getVariantById = function(t) {
    for (var e = 0; e < this.variants.length; e++) {
        var n = this.variants[e];
        if (t == n.id) return n
    }
    return null
}, Shopify.money_format = "${{amount}}", Shopify.formatMoney = function(t, e) {
    function n(t, e) {
        return "undefined" == typeof t ? e : t
    }

    function r(t, e, r, i) {
        if (e = n(e, 2), r = n(r, ","), i = n(i, "."), isNaN(t) || null == t) return 0;
        t = (t / 100).toFixed(e);
        var o = t.split("."),
            a = o[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + r),
            s = o[1] ? i + o[1] : "";
        return a + s
    }
    "string" == typeof t && (t = t.replace(".", ""));
    var i = "",
        o = /\{\{\s*(\w+)\s*\}\}/,
        a = e || this.money_format;
    switch (a.match(o)[1]) {
        case "amount":
            i = r(t, 2);
            break;
        case "amount_no_decimals":
            i = r(t, 0);
            break;
        case "amount_with_comma_separator":
            i = r(t, 2, ".", ",");
            break;
        case "amount_no_decimals_with_comma_separator":
            i = r(t, 0, ".", ",");
            break;
        case "amount_no_decimals_with_space_separator":
            i = r(t, 0, " ")
    }
    return a.replace(o, i)
}, Shopify.OptionSelectors = function(t, e) {
    return this.selectorDivClass = "selector-wrapper", this.selectorClass = "single-option-selector", this.variantIdFieldIdSuffix = "-variant-id", this.variantIdField = null, this.historyState = null, this.selectors = [], this.domIdPrefix = t, this.product = new Shopify.Product(e.product), this.onVariantSelected = Shopify.isDefined(e.onVariantSelected) ? e.onVariantSelected : function() {}, this.replaceSelector(t), this.initDropdown(), e.enableHistoryState && (this.historyState = new Shopify.OptionSelectors.HistoryState(this)), !0
}, Shopify.OptionSelectors.prototype.initDropdown = function() {
    var t = {
            initialLoad: !0
        },
        e = this.selectVariantFromDropdown(t);
    if (!e) {
        var n = this;
        setTimeout(function() {
            n.selectVariantFromParams(t) || n.fireOnChangeForFirstDropdown.call(n, t)
        })
    }
}, Shopify.OptionSelectors.prototype.fireOnChangeForFirstDropdown = function(t) {
    this.selectors[0].element.onchange(t)
}, Shopify.OptionSelectors.prototype.selectVariantFromParamsOrDropdown = function(t) {
    var e = this.selectVariantFromParams(t);
    e || this.selectVariantFromDropdown(t)
}, Shopify.OptionSelectors.prototype.replaceSelector = function(t) {
    var e = document.getElementById(t),
        n = e.parentNode;
    Shopify.each(this.buildSelectors(), function(t) {
        n.insertBefore(t, e)
    }), e.style.display = "none", this.variantIdField = e
}, Shopify.OptionSelectors.prototype.selectVariantFromDropdown = function(t) {
    var e = document.getElementById(this.domIdPrefix).querySelector("[selected]");
    if (e || (e = document.getElementById(this.domIdPrefix).querySelector('[selected="selected"]')), !e) return !1;
    var n = e.value;
    return this.selectVariant(n, t)
}, Shopify.OptionSelectors.prototype.selectVariantFromParams = function(t) {
    var e = Shopify.urlParam("variant");
    return this.selectVariant(e, t)
}, Shopify.OptionSelectors.prototype.selectVariant = function(t, e) {
    var n = this.product.getVariantById(t);
    if (null == n) return !1;
    for (var r = 0; r < this.selectors.length; r++) {
        var i = this.selectors[r].element,
            o = i.getAttribute("data-option"),
            a = n[o];
        null != a && this.optionExistInSelect(i, a) && (i.value = a)
    }
    return "undefined" != typeof jQuery ? jQuery(this.selectors[0].element).trigger("change", e) : this.selectors[0].element.onchange(e), !0
}, Shopify.OptionSelectors.prototype.optionExistInSelect = function(t, e) {
    for (var n = 0; n < t.options.length; n++)
        if (t.options[n].value == e) return !0
}, Shopify.OptionSelectors.prototype.insertSelectors = function(t, e) {
    Shopify.isDefined(e) && this.setMessageElement(e), this.domIdPrefix = "product-" + this.product.id + "-variant-selector";
    var n = document.getElementById(t);
    Shopify.each(this.buildSelectors(), function(t) {
        n.appendChild(t)
    })
}, Shopify.OptionSelectors.prototype.buildSelectors = function() {
    for (var t = 0; t < this.product.optionNames().length; t++) {
        var e = new Shopify.SingleOptionSelector(this, t, this.product.optionNames()[t], this.product.optionValues(t));
        e.element.disabled = !1, this.selectors.push(e)
    }
    var n = this.selectorDivClass,
        r = this.product.optionNames(),
        i = Shopify.map(this.selectors, function(t) {
            var e = document.createElement("div");
            if (e.setAttribute("class", n), r.length > 1) {
                var i = document.createElement("label");
                i.htmlFor = t.element.id, i.innerHTML = t.name, e.appendChild(i)
            }
            return e.appendChild(t.element), e
        });
    return i
}, Shopify.OptionSelectors.prototype.selectedValues = function() {
    for (var t = [], e = 0; e < this.selectors.length; e++) {
        var n = this.selectors[e].element.value;
        t.push(n)
    }
    return t
}, Shopify.OptionSelectors.prototype.updateSelectors = function(t, e) {
    var n = this.selectedValues(),
        r = this.product.getVariant(n);
    r ? (this.variantIdField.disabled = !1, this.variantIdField.value = r.id) : this.variantIdField.disabled = !0, this.onVariantSelected(r, this, e), null != this.historyState && this.historyState.onVariantChange(r, this, e)
}, Shopify.OptionSelectorsFromDOM = function(t, e) {
    var n = e.optionNames || [],
        r = e.priceFieldExists || !0,
        i = e.delimiter || "/",
        o = this.createProductFromSelector(t, n, r, i);
    e.product = o, Shopify.OptionSelectorsFromDOM.baseConstructor.call(this, t, e)
}, Shopify.extend(Shopify.OptionSelectorsFromDOM, Shopify.OptionSelectors), Shopify.OptionSelectorsFromDOM.prototype.createProductFromSelector = function(t, e, n, r) {
    if (!Shopify.isDefined(n)) var n = !0;
    if (!Shopify.isDefined(r)) var r = "/";
    var i = document.getElementById(t),
        o = i.childNodes,
        a = (i.parentNode, e.length),
        s = [];
    Shopify.each(o, function(t, i) {
        if (1 == t.nodeType && "option" == t.tagName.toLowerCase()) {
            var o = t.innerHTML.split(new RegExp("\\s*\\" + r + "\\s*"));
            0 == e.length && (a = o.length - (n ? 1 : 0));
            var u = o.slice(0, a),
                l = n ? o[a] : "",
                c = (t.getAttribute("value"), {
                    available: t.disabled ? !1 : !0,
                    id: parseFloat(t.value),
                    price: l,
                    option1: u[0],
                    option2: u[1],
                    option3: u[2]
                });
            s.push(c)
        }
    });
    var u = {
        variants: s
    };
    if (0 == e.length) {
        u.options = [];
        for (var l = 0; a > l; l++) u.options[l] = "option " + (l + 1)
    } else u.options = e;
    return u
}, Shopify.SingleOptionSelector = function(t, e, n, r) {
    this.multiSelector = t, this.values = r, this.index = e, this.name = n, this.element = document.createElement("select");
    for (var i = 0; i < r.length; i++) {
        var o = document.createElement("option");
        o.value = r[i], o.innerHTML = r[i], this.element.appendChild(o)
    }
    return this.element.setAttribute("class", this.multiSelector.selectorClass), this.element.setAttribute("data-option", "option" + (e + 1)), this.element.id = t.domIdPrefix + "-option-" + e, this.element.onchange = function(n, r) {
        r = r || {}, t.updateSelectors(e, r)
    }, !0
}, Shopify.Image = {
    preload: function(t, e) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            this.loadImage(this.getSizedImageUrl(r, e))
        }
    },
    loadImage: function(t) {
        (new Image).src = t
    },
    switchImage: function(t, e, n) {
        if (t && e) {
            var r = this.imageSize(e.src),
                i = this.getSizedImageUrl(t.src, r);
            n ? n(i, t, e) : e.src = i
        }
    },
    imageSize: function(t) {
        var e = t.match(/_(1024x1024|2048x2048|pico|icon|thumb|small|compact|medium|large|grande)\./);
        return null != e ? e[1] : null
    },
    getSizedImageUrl: function(t, e) {
        if (null == e) return t;
        if ("master" == e) return this.removeProtocol(t);
        var n = t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
        if (null != n) {
            var r = t.split(n[0]),
                i = n[0];
            return this.removeProtocol(r[0] + "_" + e + i)
        }
        return null
    },
    removeProtocol: function(t) {
        return t.replace(/http(s)?:/, "")
    }
}, Shopify.OptionSelectors.HistoryState = function(t) {
    this.browserSupports() && this.register(t)
}, Shopify.OptionSelectors.HistoryState.prototype.register = function(t) {
    window.addEventListener("popstate", function(e) {
        t.selectVariantFromParamsOrDropdown({
            popStateCall: !0
        })
    })
}, Shopify.OptionSelectors.HistoryState.prototype.onVariantChange = function(t, e, n) {/*update product stock display on product page*/jQuery.getJSON('/products/'+prodHand+'.js', function(product){updateInv(product)});
    this.browserSupports() && (!t || n.initialLoad || n.popStateCall || Shopify.setParam("variant", t.id))
}, Shopify.OptionSelectors.HistoryState.prototype.browserSupports = function() {
    return window.history && window.history.replaceState
};