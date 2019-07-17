require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
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
    staticClass: "try"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: (_vm.keyword),
      expression: "keyword",
      modifiers: {
        "lazy": true
      }
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入歌手或歌曲名",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.keyword)
    },
    on: {
      "focus": _vm.clean,
      "change": function($event) {
        _vm.keyword = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.show) ? _c('img', {
    staticClass: "search",
    attrs: {
      "src": "../../image/211.png"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.deorno) ? _c('img', {
    staticClass: "delete",
    attrs: {
      "src": "../../image/112.png",
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.cleanword($event)
      }
    }
  }) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "songsbox"
  }, _vm._l((_vm.obj), function(item, index) {
    return _c('div', {
      key: item.id,
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
        "src": "../../image/more.png",
        "eventid": '5_' + index
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
     require("vue-hot-reload-api").rerender("data-v-2d9593de", esExports)
  }
}

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__searchdetail__ = __webpack_require__(97);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__searchdetail__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_searchdetail_vue__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2d9593de_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_searchdetail_vue__ = __webpack_require__(100);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(98)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2d9593de"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_searchdetail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2d9593de_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_searchdetail_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\searchdetail\\searchdetail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] searchdetail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d9593de", Component.options)
  } else {
    hotAPI.reload("data-v-2d9593de", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 98:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 99:
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
//

/* harmony default export */ __webpack_exports__["a"] = ({
    mounted: function mounted() {
        this.id = 'a';
        this.mid = 'b';
    },
    data: function data() {
        return {
            keyword: '',
            obj: '',
            p1: 'p1',
            p2: 'p2',
            span1: 'span1',
            span2: 'span2',
            id: 'a',
            mid: 'b',
            play: __webpack_require__(2),
            playing: __webpack_require__(3),
            popnow: false,
            show: true,
            deorno: false,
            loveorno: ''
        };
    },

    watch: {
        keyword: function keyword() {
            if (this.keyword) {
                this.deorno = true;
                //this.$store.commit('recentsearch',this.keyword)
                var that = this;
                wx.request({
                    url: 'https://v1.itooi.cn/netease/search?keyword=' + this.keyword + '&type=song&pageSize=50&page=0&format=1', //仅为示例，并非真实的接口地址
                    data: {
                        x: '',
                        y: ''
                    },
                    header: {
                        'content-type': 'application/x-www-form-urlencoded' // 默认值
                    },
                    success: function success(res) {
                        that.obj = res.data.data;
                    }
                });
            } else {
                this.deorno = false;
                this.show = true;
            }
        }
    },
    methods: {
        clean: function clean() {
            this.show = false;
        },
        cleanword: function cleanword() {
            this.keyword = '';
            this.obj = '';
        },
        giveid: function giveid(id, item) {},
        showpopup: function showpopup(item) {
            this.popnow = true;
            this.loveorno = item;
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

/***/ })

},[96]);