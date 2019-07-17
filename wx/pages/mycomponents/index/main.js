require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([1],Array(26).concat([
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(27);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8de3146e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(55);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(28)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8de3146e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8de3146e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\mycomponents\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8de3146e", Component.options)
  } else {
    hotAPI.reload("data-v-8de3146e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hostsongs__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newsongs__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__songslist__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hostlist__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer__ = __webpack_require__(50);
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
      jws: true,
      bthcheck: false,
      playtime: '',
      timerth: null
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
    },
    doornot: function doornot() {
      return this.$store.state.current;
    }
  },
  watch: {
    audiourl: function audiourl() {
      var _this = this;

      var that = this;
      this.audio.src = this.audiourl;
      /**/
      this.audio.onPlay(function () {
        clearInterval(that.timerth);
        that.timerth = setInterval(function () {
          _this.playtime = _this.audio.currentTime;
        }, 500);
      });
    },
    control: function control() {
      if (this.control == false) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    },
    doornot: function doornot() {
      if (this.doornot == true) {
        this.$store.commit('givetime', this.playtime);
        this.$store.commit("changecurrent");
      }
    }
  },
  components: {
    headersearch: __WEBPACK_IMPORTED_MODULE_0__search__["a" /* default */],
    hostsongs: __WEBPACK_IMPORTED_MODULE_1__hostsongs__["a" /* default */],
    newsongs: __WEBPACK_IMPORTED_MODULE_2__newsongs__["a" /* default */],
    songslist: __WEBPACK_IMPORTED_MODULE_3__songslist__["a" /* default */],
    hostlist: __WEBPACK_IMPORTED_MODULE_4__hostlist__["a" /* default */],
    foot: __WEBPACK_IMPORTED_MODULE_5__footer_footer__["a" /* default */]
  },

  methods: {
    open: function open() {
      var that = this;
      wx.getSetting({
        success: function success(res) {
          if (!res.authSetting['scope.userInfo']) {//未授权getUserInfo

          } else {
            //已授权
            clearInterval(that.timer);
            that.jws = false;
            that.$store.commit("losepage");
          }
        }
      });
    }
  }
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_search_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_147f1cc1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_search_vue__ = __webpack_require__(33);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(31)
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
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
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
                url: '../../searchdetail/main?'
            });
        }
    }
});

/***/ }),
/* 33 */
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
      "src": "../../../image/211.png"
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
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_hostsongs_vue__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4548b666_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_hostsongs_vue__ = __webpack_require__(37);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(35)
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
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
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
                url: '../listitem/main?id=11'
            });
        },
        play: function play(item) {
            this.$store.commit("givesrc", item);
            this.$store.commit("recentadd", item);
        }
    }
});

/***/ }),
/* 37 */
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
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_newsongs_vue__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4b974f92_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_newsongs_vue__ = __webpack_require__(41);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(39)
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
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
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
                url: '../listitem/main?id=22'
            });
        },
        play: function play(item) {
            this.$store.commit("givesrc", item);
            this.$store.commit("recentadd", item);
        }
    }
});

/***/ }),
/* 41 */
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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_songslist_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_bd9f7fda_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_songslist_vue__ = __webpack_require__(45);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(43)
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
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */
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
        url: '../alllist/main?'
      });
    },
    movethree: function movethree(id) {
      var mcount = this.$store.state.threeindex[id];
      wx.navigateTo({
        url: '../listitem/main?id=' + mcount
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
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('p', {
    staticClass: "host"
  }, [_vm._v("歌单")]), _vm._v(" "), _c('p', {
    staticClass: "more",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.movelist
    }
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
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_hostlist_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_147dae1f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_hostlist_vue__ = __webpack_require__(49);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(47)
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
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */
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
                url: '../listall/main'
            });
        },
        moveone: function moveone(id, count) {
            wx.navigateTo({
                url: '../listmore/main?id=' + id + '&index=' + count
            });
        }
    }
});

/***/ }),
/* 49 */
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
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_footer_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_bed145fa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_footer_vue__ = __webpack_require__(54);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(51)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-bed145fa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_footer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_bed145fa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_footer_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\mycomponents\\footer\\footer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] footer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bed145fa", Component.options)
  } else {
    hotAPI.reload("data-v-bed145fa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */
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
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    mounted: function mounted() {
        this.getuserinfo();
    },
    onHide: function onHide() {
        clearInterval(this.timer);
    },
    onUnload: function onUnload() {
        clearInterval(this.timer);
    },
    onShow: function onShow() {
        if (this.animationData) {
            var count = this.index;
            console.log(this.animationData);
            this.moveobj = wx.createAnimation({ duration: 200 });
            var that = this;
            clearInterval(this.timer);
            this.timer = setInterval(function () {
                that.moveobj.rotate(count).step();
                that.animationData = that.moveobj.export();
                that.index = count;
                count += 3;
            }, 200);
        }
        if (this.controlstate) {
            clearInterval(this.timer);
        }
        /*else{
                this.moveobj=wx.createAnimation({ duration: 0,});
                 this.moveobj.rotate(this.movecount).step();                      忘记用途
                 this.animationData=this.moveobj.export();
           }*/
    },
    data: function data() {
        return {
            minepg: '',
            loadpg: '',
            check: __webpack_require__(53),
            animationData: '',
            moveobj: '', //存放动画实例
            timer: null,
            index: 0
        };
    },

    methods: {
        move: function move() {
            if (this.loadpg == '') {
                return false;
            } else {
                wx.navigateTo({
                    url: '../playdetail/main'
                });
            }
        },
        getuserinfo: function getuserinfo() {
            if (this.playpg != 'bug') {
                this.loadpg = this.playpg;
            }
            // 调用登录接口
            var _this = this;
            wx.getUserInfo({
                success: function success(res) {
                    _this.minepg = res.userInfo.avatarUrl;
                },
                fail: function fail(err) {
                    //console.log(err);
                }
            });
        },
        changemusic: function changemusic() {
            clearInterval(this.timer);
            wx.navigateBack({
                delta: 99
            });
        },
        addborder: function addborder() {
            wx.navigateTo({
                url: '../mine/main'
            });
        },
        goons: function goons() {
            this.$store.commit("setcontrol");
            this.$store.commit("mycontrol");
            if (this.animationData) {
                var count = this.index;
                console.log(this.animationData);
                this.moveobj = wx.createAnimation({ duration: 200 });
                var that = this;
                clearInterval(this.timer);
                this.timer = setInterval(function () {
                    that.moveobj.rotate(count).step();
                    that.animationData = that.moveobj.export();
                    that.index = count;
                    count += 3;
                }, 200);
            }
            this.$store.commit('mybug');
        }
    },
    computed: {
        playpg: function playpg() {
            return this.$store.state.songsurl.pic;
        },
        user: function user() {
            return this.$store.state.lose;
        },
        controlstate: function controlstate() {
            return this.$store.state.plarse;
        }
    },
    watch: {
        playpg: function playpg() {
            this.loadpg = this.playpg;
            if (this.animationData == '') {
                var count = this.index;
                console.log(this.animationData);
                this.moveobj = wx.createAnimation({ duration: 200 });
                var that = this;
                clearInterval(this.timer);
                this.timer = setInterval(function () {
                    that.moveobj.rotate(count).step();
                    that.animationData = that.moveobj.export();
                    that.index = count;
                    count += 3;
                }, 200);
            }
        },
        user: function user() {
            this.getuserinfo();
        }
    }
});

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "music"
  }, [_c('div', {
    staticClass: "currency"
  }, [_c('img', {
    staticClass: "leftpg",
    attrs: {
      "src": _vm.check,
      "eventid": '0'
    },
    on: {
      "click": _vm.changemusic
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "lfrtfont"
  }, [_vm._v("乐库")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "audio"
  }, [_c('img', {
    staticClass: "round",
    attrs: {
      "src": _vm.loadpg ? _vm.loadpg : _vm.minepg,
      "animation": _vm.animationData,
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.move()
      }
    }
  }), _vm._v(" "), (_vm.controlstate) ? _c('div', {
    staticClass: "stops",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.goons($event)
      }
    }
  }, [_c('img', {
    staticClass: "moment",
    attrs: {
      "src": "../../../image/th.png"
    }
  })]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "mine"
  }, [_c('div', {
    staticClass: "currency"
  }, [_c('img', {
    staticClass: "rightpg",
    attrs: {
      "src": _vm.minepg,
      "eventid": '3'
    },
    on: {
      "click": _vm.addborder
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "lfrtfont"
  }, [_vm._v("我的")])], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bed145fa", esExports)
  }
}

/***/ }),
/* 55 */
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
  }, [_vm._v("You are Welcome Sir")]), _vm._v(" "), _c('button', {
    staticClass: "try",
    attrs: {
      "open-type": "getUserInfo",
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
      "src": "../../../image/15.png"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8de3146e", esExports)
  }
}

/***/ })
]),[26]);