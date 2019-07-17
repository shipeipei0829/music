require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listdetail__ = __webpack_require__(67);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__listdetail__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_listdetail_vue__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5e95167f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_listdetail_vue__ = __webpack_require__(70);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(68)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5e95167f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_listdetail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5e95167f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_listdetail_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\mycomponents\\listmore\\listdetail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] listdetail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e95167f", Component.options)
  } else {
    hotAPI.reload("data-v-5e95167f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 68:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 69:
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
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    mounted: function mounted() {
        this.mid = 'a';
        this.mthid = 'b';
        this.id = this.$root.$mp.query.id;
        this.count = this.$root.$mp.query.index;
        if (this.$root.$mp.query.other) {
            this.obj = this.$store.state.alllist[0];
        } else {
            this.obj = this.$store.state.hostlist[0];
        }

        this.getsongsinfo();
    },
    data: function data() {
        return {
            id: '',
            count: '',
            obj: ' ',
            newobj: [],
            p1: 'p1',
            p2: 'p2',
            span1: 'span1',
            span2: 'span2',
            mid: 'a',
            mthid: 'b',
            play: __webpack_require__(2),
            playing: __webpack_require__(3),
            popnow: false,
            loveorno: ''
        };
    },

    methods: {
        getsongsinfo: function getsongsinfo() {
            var that = this;
            wx.request({
                url: 'https://v1.itooi.cn/netease/songList?id=' + that.id + '&format=1&pageSize=30', //仅为示例，并非真实的接口地址
                data: {},
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                success: function success(res) {
                    that.newobj = res.data.data;
                }
            });
        },

        //
        giveid: function giveid(id, item) {},
        suspend: function suspend(item, index) {
            this.$store.commit("recentadd", item);
            if (this.mid != index) {
                this.playcheck = true;
                if (this.playcheck) {
                    this.mid = index;
                    this.mthid = index;
                    this.$store.commit("givesrc", item);
                    this.$store.commit("setcontrol");
                } else {
                    this.mthid = 'b';
                    this.$store.commit("pause");
                }
                this.playcheck = !this.playcheck;
            } else {
                if (this.playcheck) {
                    this.mid = index;
                    this.mthid = index;
                    this.$store.commit("givesrc", item);
                    this.$store.commit("setcontrol");
                } else {
                    this.mthid = 'b';
                    this.$store.commit("pause");
                }
                this.playcheck = !this.playcheck;
            }
        },
        showpopup: function showpopup() {
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
        }
    }
});

/***/ }),

/***/ 70:
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
  }, [_vm._v("取消")])], 1)]) : _vm._e(), _vm._v(" "), (_vm.obj) ? _c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "bg"
  }, [_c('img', {
    staticClass: "bgimg",
    attrs: {
      "src": _vm.obj[_vm.count].coverImgUrl
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "imgbox"
  }, [_c('img', {
    staticClass: "logo",
    attrs: {
      "src": _vm.obj[_vm.count].coverImgUrl
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_c('p', [_vm._v(_vm._s(_vm.obj[_vm.count].name))]), _vm._v(" "), _c('div', {
    staticClass: "forline"
  }, [_c('img', {
    staticClass: "autor",
    attrs: {
      "src": _vm.obj[_vm.count].creator.avatarUrl
    }
  }), _c('span', {
    staticClass: "autorname"
  }, [_vm._v(_vm._s(_vm.obj[_vm.count].creator.nickname))])])], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "songsbox"
  }, _vm._l((_vm.newobj), function(item, index) {
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
      class: _vm.mid == index ? _vm.p2 : _vm.p1
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', {
      class: _vm.mid == index ? _vm.span1 : _vm.span2
    }, [_vm._v(_vm._s(item.singer))])], 1), _vm._v(" "), _c('div', {
      staticClass: "parttwo"
    }, [_c('img', {
      staticClass: "love",
      attrs: {
        "src": _vm.mthid == index ? _vm.playing : _vm.play,
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
     require("vue-hot-reload-api").rerender("data-v-5e95167f", esExports)
  }
}

/***/ })

},[66]);