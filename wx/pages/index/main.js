require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(17);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0f999fb8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(44);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(18)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0f999fb8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0f999fb8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f999fb8", Component.options)
  } else {
    hotAPI.reload("data-v-0f999fb8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mycomponents_index_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mycomponents_index_hostsongs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mycomponents_index_newsongs__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mycomponents_index_songslist__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mycomponents_index_hostlist__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mycomponents_footer_footer__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      audio: '',
      moveobj: '',
      animationData: '',
      timer: null,
      latertimer: null,
      jws: true,
      bthcheck: false
    };
  },
  mounted: function mounted() {
    this.audio = wx.createInnerAudioContext();
    this.audio.autoplay = true;
    this.audio.src = 'https://music-1259405003.cos.ap-chengdu.myqcloud.com/music.mp3';
    var that = this;
    this.moveobj = wx.createAnimation({ duration: 1000 });
    var count = 120;
    this.timer = setInterval(function () {
      that.moveobj.rotate(count).step();
      that.animationData = that.moveobj.export();
      count += 120;
    }, 1000);
  },

  computed: {
    audiourl: function audiourl() {
      return this.$store.state.songsurl.url;
    },
    control: function control() {
      return this.$store.state.plarse;
    }
  },
  watch: {
    audiourl: function audiourl() {
      this.audio.src = this.audiourl;
    },
    control: function control() {
      if (this.control == false) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    }
  },
  components: {
    headersearch: __WEBPACK_IMPORTED_MODULE_0__mycomponents_index_search__["a" /* default */],
    hostsongs: __WEBPACK_IMPORTED_MODULE_1__mycomponents_index_hostsongs__["a" /* default */],
    newsongs: __WEBPACK_IMPORTED_MODULE_2__mycomponents_index_newsongs__["a" /* default */],
    songslist: __WEBPACK_IMPORTED_MODULE_3__mycomponents_index_songslist__["a" /* default */],
    hostlist: __WEBPACK_IMPORTED_MODULE_4__mycomponents_index_hostlist__["a" /* default */],
    foot: __WEBPACK_IMPORTED_MODULE_5__mycomponents_footer_footer__["a" /* default */]
  },

  methods: {
    open: function open() {
        clearInterval(this.timer);
        clearInterval(this.latertimer);
        this.jws = false;
    }
  }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_search_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_147f1cc1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_search_vue__ = __webpack_require__(23);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(21)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-147f1cc1"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_search_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_147f1cc1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_search_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\mycomponents\\index\\search.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] search.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-147f1cc1", Component.options)
  } else {
    hotAPI.reload("data-v-147f1cc1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {};
    },

    methods: {
        move: function move() {
            wx.navigateTo({
                url: '../searchdetail/main?'
            });
        }
    }
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "try"
  }, [_c('input', {
    attrs: {
      "type": "text",
      "placeholder": "请输入歌手或歌曲名",
      "eventid": '0'
    },
    on: {
      "focus": _vm.move
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "search",
    attrs: {
      "src": "../../../image/搜索.png"
    }
  })])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-147f1cc1", esExports)
  }
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_hostsongs_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4548b666_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_hostsongs_vue__ = __webpack_require__(27);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(25)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4548b666"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_hostsongs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4548b666_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_hostsongs_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\mycomponents\\index\\hostsongs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] hostsongs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4548b666", Component.options)
  } else {
    hotAPI.reload("data-v-4548b666", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'hostsongs',
    data: function data() {
        return {
            obj: ''
        };
    },
    mounted: function mounted() {
        var that = this;
        wx.request({
            url: 'https://v1.itooi.cn/netease/songList?id=3778678&format=1', //仅为示例，并非真实的接口地址
            data: {},
            header: {
                'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            success: function success(res) {
                that.$store.commit('top100', res.data.data.slice(0, 100));
                that.obj = res.data.data.slice(0, 6);
            }
        });
    },

    methods: {
        movetop100: function movetop100() {
            wx.navigateTo({
                url: '../mycomponents/listitem/main?id=11'
            });
        },
        play: function play(item) {
            this.$store.commit("givesrc", item);
            this.$store.commit("recentadd", item);
        }
    }
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('p', {
    staticClass: "host"
  }, [_vm._v("热门歌曲")]), _vm._v(" "), _c('p', {
    staticClass: "more",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.movetop100
    }
  }, [_vm._v("更多＞")])], 1), _vm._v(" "), _c('div', {
    staticClass: "itembox"
  }, _vm._l((_vm.obj), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.play(item)
        }
      }
    }, [_c('div', {
      staticClass: "imgbox"
    }, [_c('img', {
      attrs: {
        "src": item.pic,
        "alt": "资源错误"
      }
    })]), _vm._v(" "), _c('p', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', {
      staticClass: "singer"
    }, [_vm._v(_vm._s(item.singer))])], 1)
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4548b666", esExports)
  }
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_newsongs_vue__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4b974f92_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_newsongs_vue__ = __webpack_require__(31);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(29)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4b974f92"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_newsongs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4b974f92_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_newsongs_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\mycomponents\\index\\newsongs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] newsongs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b974f92", Component.options)
  } else {
    hotAPI.reload("data-v-4b974f92", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'hostsongs',
    data: function data() {
        return {
            obj: ''
        };
    },
    mounted: function mounted() {
        var that = this;
        wx.request({
            url: 'https://v1.itooi.cn/netease/songList?id=3779629&pageSize=30&format=1', //仅为示例，并非真实的接口地址
            data: {},
            header: {
                'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            success: function success(res) {
                that.$store.commit('new100', res.data.data.slice(0, 100));
                that.obj = res.data.data.slice(0, 6);
            }
        });
    },

    methods: {
        movenew100: function movenew100() {
            wx.navigateTo({
                url: '../mycomponents/listitem/main?id=22'
            });
        },
        play: function play(item) {
            this.$store.commit("givesrc", item);
            this.$store.commit("recentadd", item);
        }
    }
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('p', {
    staticClass: "host"
  }, [_vm._v("新歌首发")]), _vm._v(" "), _c('p', {
    staticClass: "more",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.movenew100
    }
  }, [_vm._v("更多＞")])], 1), _vm._v(" "), _c('div', {
    staticClass: "itembox"
  }, _vm._l((_vm.obj), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.play(item)
        }
      }
    }, [_c('div', {
      staticClass: "imgbox"
    }, [_c('img', {
      attrs: {
        "src": item.pic,
        "alt": "资源错误"
      }
    })]), _vm._v(" "), _c('p', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', {
      staticClass: "singer"
    }, [_vm._v(_vm._s(item.singer))])], 1)
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4b974f92", esExports)
  }
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_songslist_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_bd9f7fda_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_songslist_vue__ = __webpack_require__(35);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(33)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-bd9f7fda"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_songslist_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_bd9f7fda_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_songslist_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\mycomponents\\index\\songslist.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] songslist.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bd9f7fda", Component.options)
  } else {
    hotAPI.reload("data-v-bd9f7fda", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'hostsongs',
  data: function data() {
    return {
      obj: [],
      listpg: [],
      showthree: [],
      listname: []
    };
  },

  methods: {
    movelist: function movelist() {
      wx.navigateTo({
        url: '../mycomponents/alllist/main?'
      });
    },
    movethree: function movethree(id) {
      var mcount = this.$store.state.threeindex[id];
      console.log(mcount);

      wx.navigateTo({
        url: '../mycomponents/listitem/main?id=' + mcount
      });
    }
  },
  mounted: function mounted() {
    var that = this;
    wx.request({
      url: 'https://v1.itooi.cn/netease/songList?id=19723756&pageSize=30&format=1', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function success(res) {
        that.listname.push('云音乐飙升榜');
        that.$store.commit('givename', '云音乐飙升榜');
        that.listpg.push("http://music.163.com/api/img/blur/18696095720518497?param=170y170");
        var pg = "http://music.163.com/api/img/blur/18696095720518497?param=170y170";
        that.$store.commit('pushpg', pg);
        that.showthree.push(res.data.data.slice(0, 3));
        that.$store.commit('pushobj', res.data.data);
        that.$store.commit('givecount');
      }
    });
    wx.request({
      url: 'https://v1.itooi.cn/netease/songList?id=3779629&pageSize=20&format=1', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function success(res) {
        that.listname.push('云音乐原创歌曲榜');
        that.$store.commit('givename', '云音乐原创歌曲榜');
        that.listpg.push("http://music.163.com/api/img/blur/18740076185638788?param=170y170");
        var pg = "http://music.163.com/api/img/blur/18740076185638788?param=170y170";
        that.$store.commit('pushpg', pg);
        that.showthree.push(res.data.data.slice(0, 3));
        that.$store.commit('pushobj', res.data.data);
        that.$store.commit('givecount');
      }
    });
    wx.request({
      url: 'https://v1.itooi.cn/netease/songList?id=2884035&pageSize=20&format=1', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function success(res) {
        that.listname.push('云音乐新歌榜');
        that.$store.commit('givename', '云音乐新歌榜');
        that.listpg.push("http://music.163.com/api/img/blur/18713687906568048?param=170y170");
        that.$store.commit('pushpg', "http://music.163.com/api/img/blur/18713687906568048?param=170y170");
        that.showthree.push(res.data.data.slice(0, 3));
        that.$store.commit('pushobj', res.data.data);
        that.$store.commit('givecount');
      }
    });
    //
    wx.request({
      url: 'https://v1.itooi.cn/netease/songList?id=3778678&pageSize=20&format=1', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function success(res) {
        that.$store.commit('givename', '云音乐热歌榜');
        that.$store.commit('pushpg', "http://music.163.com/api/img/blur/18708190348409091?param=170y170");
        that.$store.commit('pushobj', res.data.data);
      }
    });
    //
    wx.request({
      url: 'https://v1.itooi.cn/netease/songList?id=2250011882&pageSize=20&format=1', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function success(res) {
        that.$store.commit('givename', '抖音热歌榜');
        that.$store.commit('pushpg', "http://music.163.com/api/img/blur/109951163326845001?param=170y170");
        that.$store.commit('pushobj', res.data.data);
      }
    });
    //
    wx.request({
      url: 'https://v1.itooi.cn/netease/songList?id=2617766278&pageSize=20&format=1', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function success(res) {
        that.$store.commit('givename', '云音乐新声榜');
        that.$store.commit('pushpg', "http://music.163.com/api/img/blur/109951163785427934?param=170y170");
        that.$store.commit('pushobj', res.data.data);
      }
    });
    //
    wx.request({
      url: 'https://v1.itooi.cn/netease/songList?id=991319590&pageSize=20&format=1', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function success(res) {
        that.$store.commit('givename', '云音乐说唱榜');
        that.$store.commit('pushpg', "http://music.163.com/api/img/blur/109951163781770038?param=170y170");
        that.$store.commit('pushobj', res.data.data);
      }
    });
    //
    wx.request({
      url: 'https://v1.itooi.cn/netease/songList?id=2006508653&pageSize=20&format=1', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function success(res) {
        that.$store.commit('givename', '电竞音乐榜');
        that.$store.commit('pushpg', "http://music.163.com/api/img/blur/109951163078922993?param=170y170");
        that.$store.commit('pushobj', res.data.data);
      }
    });
    wx.request({
      url: 'https://v1.itooi.cn/netease/songList?id=21845217&pageSize=20&format=1', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function success(res) {
        that.$store.commit('givename', 'KTV麦霸榜');
        that.$store.commit('pushpg', "http://music.163.com/api/img/blur/19174383276805159?param=170y170");
        that.$store.commit('pushobj', res.data.data);
      }
    });
    wx.request({
      url: 'https://v1.itooi.cn/netease/songList?id=10169002&pageSize=20&format=1', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function success(res) {
        that.$store.commit('givename', '香港电台中文榜');
        that.$store.commit('pushpg', "http://music.163.com/api/img/blur/18976471183805915?param=170y170");
        that.$store.commit('pushobj', res.data.data);
      }
    });
    wx.request({
      url: 'https://v1.itooi.cn/netease/songList?id=10520166&pageSize=20&format=1', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function success(res) {
        that.$store.commit('givename', '云音乐国电榜');
        that.$store.commit('pushpg', "http://music.163.com/api/img/blur/109951163424197392?param=170y170");
        that.$store.commit('pushobj', res.data.data);
      }
    });
    wx.request({
      url: 'https://v1.itooi.cn/netease/songList?id=3812895&pageSize=20&format=1', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function success(res) {
        that.$store.commit('givename', 'Beatport全球电子舞曲榜');
        that.$store.commit('pushpg', "http://music.163.com/api/img/blur/18613632348448741?param=170y170");
        that.$store.commit('pushobj', res.data.data);
      }
    });
    wx.request({
      url: 'https://v1.itooi.cn/netease/songList?id=2809513713&pageSize=20&format=1', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function success(res) {
        that.$store.commit('givename', '云音乐欧美热歌榜');
        that.$store.commit('pushpg', "http://music.163.com/api/img/blur/109951164091703579?param=170y170");
        that.$store.commit('pushobj', res.data.data);
      }
    });
    wx.request({
      url: 'https://v1.itooi.cn/netease/songList?id=120001&pageSize=20&format=1', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function success(res) {
        that.$store.commit('givename', 'Hit FM Top榜');
        that.$store.commit('pushpg', "http://music.163.com/api/img/blur/19187577416338508?param=170y170");
        that.$store.commit('pushobj', res.data.data);
      }
    });
  }
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('p', {
    staticClass: "host",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.movelist
    }
  }, [_vm._v("歌单")]), _vm._v(" "), _c('p', {
    staticClass: "more"
  }, [_vm._v("更多＞")])], 1), _vm._v(" "), _c('div', {
    staticClass: "itembox"
  }, _vm._l((_vm.listpg), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.movethree(index)
        }
      }
    }, [_c('div', {
      staticClass: "imgbox"
    }, [_c('img', {
      attrs: {
        "src": _vm.listpg[index],
        "alt": "资源错误"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "text"
    }, [_c('p', {
      staticClass: "bangdan"
    }, [_vm._v(_vm._s(_vm.listname[index]) + " ")]), _vm._v(" "), _vm._l((_vm.showthree[index]), function(part, count) {
      return _c('p', {
        key: count,
        staticClass: "name"
      }, [_vm._v(_vm._s(part.singer) + "-" + _vm._s(part.name))])
    })], 2)])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bd9f7fda", esExports)
  }
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_hostlist_vue__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_147dae1f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_hostlist_vue__ = __webpack_require__(39);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(37)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-147dae1f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_hostlist_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_147dae1f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_hostlist_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\mycomponents\\index\\hostlist.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] hostlist.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-147dae1f", Component.options)
  } else {
    hotAPI.reload("data-v-147dae1f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'hostsongs',
    data: function data() {
        return {
            obj: ''
        };
    },
    mounted: function mounted() {
        var that = this;
        wx.request({
            url: 'https://v1.itooi.cn/netease/songList/hot?cat=全部&pageSize=6&page=0&format=1', //仅为示例，并非真实的接口地址
            data: {},
            header: {
                'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            success: function success(res) {
                that.obj = res.data.data;
                that.$store.commit("giveobj", that.obj);
            }
        });
    },

    methods: {
        moveall: function moveall() {
            wx.navigateTo({
                url: '../mycomponents/listall/main'
            });
        },
        moveone: function moveone(id, count) {
            wx.navigateTo({
                url: '../mycomponents/listmore/main?id=' + id + '&index=' + count
            });
        }
    }
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('p', {
    staticClass: "host"
  }, [_vm._v("热门歌单")]), _vm._v(" "), _c('p', {
    staticClass: "more",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.moveall
    }
  }, [_vm._v("更多＞")])], 1), _vm._v(" "), _c('div', {
    staticClass: "itembox"
  }, _vm._l((_vm.obj), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.moveone(item.id, index)
        }
      }
    }, [_c('div', {
      staticClass: "imgbox"
    }, [_c('img', {
      attrs: {
        "src": item.coverImgUrl,
        "alt": "资源错误"
      }
    })]), _vm._v(" "), _c('p', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.name))])], 1)
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-147dae1f", esExports)
  }
}

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box"
  }, [(_vm.jws) ? _c('div', {
    staticClass: "cool"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "bug"
  }, [_c('p', {
    staticClass: "welcome"
  }, [_vm._v("You are Welcome Sir")]), _vm._v(" "), _c('img', {
    staticClass: "loading",
    attrs: {
      "src": "../../image/1120.png",
      "animation": _vm.animationData,
      "eventid": '0'
    },
    on: {
      "click": _vm.open
    }
  }), _vm._v(" "), _c('p')], 1)]) : _vm._e(), _vm._v(" "), _c('headersearch', {
    attrs: {
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('hostsongs', {
    attrs: {
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('newsongs', {
    attrs: {
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('hostlist', {
    attrs: {
      "mpcomid": '3'
    }
  }), _vm._v(" "), _c('songslist', {
    attrs: {
      "mpcomid": '4'
    }
  }), _vm._v(" "), _c('foot', {
    attrs: {
      "mpcomid": '5'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "imgbox"
  }, [_c('img', {
    staticClass: "pg",
    attrs: {
      "src": "../../image/15.png"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0f999fb8", esExports)
  }
}

/***/ })
],[16]);