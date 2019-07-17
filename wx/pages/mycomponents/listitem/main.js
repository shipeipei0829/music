require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listitem__ = __webpack_require__(62);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__listitem__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_listitem_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_aacdca7a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_listitem_vue__ = __webpack_require__(65);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(63)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-aacdca7a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_listitem_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_aacdca7a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_listitem_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\mycomponents\\listitem\\listitem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] listitem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aacdca7a", Component.options)
  } else {
    hotAPI.reload("data-v-aacdca7a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 63:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 64:
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
        this.id = 'a'; //初始化id
        this.mid = 'b';
        this.listname = '';
        this.listpg = '';
        this.count = this.$root.$mp.query.id;
        if (this.count == 11) {
            this.obj = this.$store.state.top[0];
            this.imgtext = this.$store.state.imgtext[0];
            this.check = true;
        } else if (this.count == 22) {
            this.obj = this.$store.state.new[0];
            this.imgtext = this.$store.state.imgtext[1];
            this.check = true;
        } else {
            this.obj = this.$store.state.listobj[this.count];
            this.listpg = this.$store.state.listpg[this.count];
            this.listname = this.$store.state.listname[this.count];
        }
    },
    onUnload: function onUnload() {
        this.listname = '';
        this.listpg = '';
    },
    data: function data() {
        return {
            obj: ' ',
            imgtext: {},
            count: '',
            listpg: '',
            listname: '',
            check: false,
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
            loveorno: '' //暂存点击更多的时候要收藏的歌曲
        };
    },

    methods: {
        giveid: function giveid(id, item) {},
        showpopup: function showpopup(item) {
            this.loveorno = item;
            this.popnow = true;
        },
        lovethis: function lovethis() {
            wx.showToast({
                title: '成功',
                icon: 'none',
                duration: 2000
            });
            this.popnow = false;
            this.$store.commit('mylove', this.loveorno);
        },
        back: function back() {
            this.popnow = false;
        },
        suspend: function suspend(item, index) {
            this.$store.commit("recentadd", item);
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

/***/ 65:
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
  }, [_vm._v("收藏歌曲")]), _vm._v(" "), _c('p', {
    staticClass: "opt",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.back
    }
  }, [_vm._v("取消")])], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "header"
  }, [(_vm.check) ? _c('img', {
    staticClass: "header-bg",
    attrs: {
      "src": _vm.imgtext.bgsrc
    }
  }) : _vm._e(), _vm._v(" "), _c('img', {
    staticClass: "header-bg",
    attrs: {
      "src": _vm.listpg
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "colorfor"
  }), _vm._v(" "), (_vm.check) ? _c('p', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.imgtext.font))]) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.listname))])], 1), _vm._v(" "), _c('div', {
    staticClass: "songsbox"
  }, _vm._l((_vm.obj), function(item, index) {
    return _c('div', {
      key: item.id,
      staticClass: "item",
      attrs: {
        "eventid": '4_' + index
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
        "eventid": '2_' + index
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
        "eventid": '3_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.showpopup(item)
        }
      }
    })])])])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-aacdca7a", esExports)
  }
}

/***/ })

},[61]);