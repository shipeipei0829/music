require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mine__ = __webpack_require__(72);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__mine__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_mine_vue__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6b3e0b03_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_mine_vue__ = __webpack_require__(75);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(73)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6b3e0b03"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_mine_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6b3e0b03_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_mine_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\mycomponents\\mine\\mine.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mine.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b3e0b03", Component.options)
  } else {
    hotAPI.reload("data-v-6b3e0b03", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 73:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);

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
    this.bginfo();
    var that = this;
    wx.getStorage({
      key: 'played',
      success: function success(res) {
        that.obj = JSON.parse(res.data);
        that.num = 1;
        that.rcount = that.obj.length;
      },
      fail: function fail() {
        that.rcount = 0;
      }
    });
    wx.getStorage({
      key: 'loves',
      success: function success(res) {
        var mlove = JSON.parse(res.data);
        that.lcount = mlove.length;
      },
      fail: function fail() {
        that.lcount = 0;
      }
    });
  },
  data: function data() {
    return {
      userInfo: '',
      obj: '',
      style: 'recent',
      styleother: 'collection',
      p1: 'p1',
      p2: 'p2',
      span1: 'span1',
      span2: 'span2',
      id: 'a',
      mid: 'b', //控制播放图标
      playcheck: true,
      play: __webpack_require__(2),
      playing: __webpack_require__(3),
      popnow: false,
      rcount: '',
      lcount: '',
      decount: '', //暂存点击更多的时候要收藏的歌曲  
      num: 0 //用来判断是最近还是收藏 
    };
  },

  methods: {
    showpopup: function showpopup(index) {
      this.popnow = true;
      this.decount = index;
    },
    back: function back() {
      this.popnow = false;
    },
    lovethis: function lovethis() {
      wx.showToast({
        title: '移除成功',
        icon: 'none',
        duration: 2000
      });
      this.obj.splice(this.decount, 1);
      if (this.num == 1) {
        var newobj = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.obj);
        wx.setStorage({
          key: "played",
          data: newobj
        });
        this.rcount = this.obj.length;
      } else {
        var _newobj = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.obj);
        wx.setStorage({
          key: "loves",
          data: _newobj
        });
        this.lcount = this.obj.length;
      }
      this.popnow = false;
    },
    bginfo: function bginfo() {
      // 调用登录接口
      var _this = this;
      wx.getUserInfo({
        success: function success(res) {
          _this.userInfo = res.userInfo;
        },
        fail: function fail(err) {
          console.log(err);
        }
      });
    },
    change1: function change1() {
      this.style = 'recent';
      this.styleother = 'collection';
      var that = this;
      wx.getStorage({
        key: 'played',
        success: function success(res) {
          that.obj = JSON.parse(res.data);
          that.num = 1;
          that.rcount = that.obj.length;
        }
      });
    },
    change2: function change2() {
      this.style = 'recent2';
      this.styleother = 'collection2';
      var that = this;
      wx.getStorage({
        key: 'loves',
        success: function success(res) {
          that.obj = JSON.parse(res.data);
          that.num = 2;
          that.lcount = JSON.parse(res.data).length;
        },
        fail: function fail() {
          that.obj = '';
          that.lcount = 0;
        }
      });
    },
    suspend: function suspend(item, index) {
      if (this.id != index) {
        this.playcheck = true;
        if (this.playcheck) {
          this.id = index;
          this.mid = index;
          this.$store.commit("givesrc", item);
          this.$store.commit("setcontrol");
        } else {
          this.mid = 'b';
          this.$store.commit("pause");
        }
        this.playcheck = !this.playcheck;
      } else {
        if (this.playcheck) {
          this.id = index;
          this.mid = index;
          this.$store.commit("givesrc", item);
          this.$store.commit("setcontrol");
        } else {
          this.mid = 'b';
          this.$store.commit("pause");
        }
        this.playcheck = !this.playcheck;
      }
    }
  }
});

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box"
  }, [(_vm.popnow) ? _c('div', {
    staticClass: "background"
  }, [_c('div', {
    staticClass: "popup"
  }, [_c('p', {
    staticClass: "opt",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.lovethis
    }
  }, [_vm._v("移出该歌曲")]), _vm._v(" "), _c('p', {
    staticClass: "opt",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.back
    }
  }, [_vm._v("取消")])], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "header"
  }, [_c('img', {
    staticClass: "header-bg",
    attrs: {
      "src": _vm.userInfo.avatarUrl
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "colorfor"
  }, [_c('img', {
    staticClass: "touxiang",
    attrs: {
      "src": _vm.userInfo.avatarUrl
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.userInfo.nickName))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "songsbox"
  }, [_c('div', {
    staticClass: "option"
  }, [_c('div', {
    ref: "sss",
    class: _vm.style,
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.change1
    }
  }, [_vm._v("最近/" + _vm._s(_vm.rcount))]), _vm._v(" "), _c('div', {
    class: _vm.styleother,
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.change2
    }
  }, [_vm._v("收藏/" + _vm._s(_vm.lcount))]), _vm._v(" "), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  })]), _vm._v(" "), _vm._l((_vm.obj), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      attrs: {
        "eventid": '6_' + index
      },
      on: {
        "click": function($event) {
          _vm.giveid(index, item)
        }
      }
    }, [_c('div', {
      staticClass: "num"
    }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('div', {
      staticClass: "songs"
    }, [_c('div', {
      staticClass: "partone"
    }, [_c('p', {
      class: _vm.id == index ? _vm.p2 : _vm.p1
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', {
      class: _vm.id == index ? _vm.span1 : _vm.span2
    }, [_vm._v(_vm._s(item.singer))])], 1), _vm._v(" "), _c('div', {
      staticClass: "parttwo"
    }, [_c('img', {
      staticClass: "love",
      attrs: {
        "src": _vm.mid == index ? _vm.playing : _vm.play,
        "eventid": '4_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.suspend(item, index)
        }
      }
    }), _vm._v(" "), _c('img', {
      staticClass: "love",
      attrs: {
        "src": "../../../image/more.png",
        "eventid": '5_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.showpopup(index)
        }
      }
    })])])])
  })], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6b3e0b03", esExports)
  }
}

/***/ })

},[71]);