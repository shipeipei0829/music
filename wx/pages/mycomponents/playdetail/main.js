require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__playdetail__ = __webpack_require__(77);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__playdetail__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_playdetail_vue__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f7e99e7a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_playdetail_vue__ = __webpack_require__(95);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(78)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f7e99e7a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_playdetail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f7e99e7a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_playdetail_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\mycomponents\\playdetail\\playdetail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] playdetail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f7e99e7a", Component.options)
  } else {
    hotAPI.reload("data-v-f7e99e7a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 78:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lyric_parser__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lyric_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lyric_parser__);


var _data$onUnload$onShow;

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


/* harmony default export */ __webpack_exports__["a"] = (_data$onUnload$onShow = {
    data: function data() {
        return {
            animationData: '',
            timer: null,
            moveobj: '',
            movecount: 0,
            lrcline: '',
            playcount: '', //当前播放的行数
            lrcdetail: '', //播放器实例
            timers: null //用来获得当前播放时间
        };
    },
    onUnload: function onUnload() {},
    onShow: function onShow() {
        var _this = this;

        //this.playcount=0;
        if (this.nowbug) {
            this.$store.commit('changecurrent');
            this.timers = setInterval(function () {
                if (_this.audiotime) {
                    clearInterval(_this.timers);
                    _this.lrcdetail.togglePlay();
                    var nowtime = (_this.audiotime + 1) * 1000;
                    _this.lrcdetail.seek(nowtime);
                    //that.lrcdetail.offset=5000000;
                }
            }, 30);
            this.$store.commit("mybug");
        }
        this.moveobj = wx.createAnimation({ duration: 0 });
        this.moveobj.rotate(this.movecount).step();
        this.animationData = this.moveobj.export();
        if (!this.nowsate) {
            this.movepg();
        }
        if (this.ofifchangesong) {
            if (this.lrcdetail) {
                this.playcount = '';
                this.lrcdetail.stop();
            }
            this.showlrc();
            this.$store.commit('nextonechange');
        }
    }
}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_data$onUnload$onShow, 'onUnload', function onUnload() {
    clearInterval(this.timer);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_data$onUnload$onShow, 'computed', {
    loadpg: function loadpg() {
        return this.$store.state.songsurl.pic;
    },
    song: function song() {
        return this.$store.state.songsurl.name;
    },
    singer: function singer() {
        return this.$store.state.songsurl.singer;
    },
    lrc: function lrc() {
        return this.$store.state.songsurl.lrc;
    },
    nowsate: function nowsate() {
        return this.$store.state.plarse;
    },
    control: function control() {
        return this.$store.state.control;
    },
    audiotime: function audiotime() {
        return this.$store.state.currenttime;
    },
    ofifchangesong: function ofifchangesong() {
        return this.$store.state.nextone;
    },
    nowbug: function nowbug() {
        return this.$store.state.onebug;
    }
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_data$onUnload$onShow, 'methods', {
    movepg: function movepg() {
        var count = this.movecount;
        console.log(this.animationData);
        this.moveobj = wx.createAnimation({ duration: 200 });
        var that = this;
        clearInterval(this.timer);
        this.timer = setInterval(function () {
            that.moveobj.rotate(count).step();
            that.animationData = that.moveobj.export();
            that.movecount = count;
            count += 3;
        }, 200);
    },
    holdon: function holdon() {
        this.$store.commit("pause");
        this.$store.commit("mycontrol");
        clearInterval(this.timer);
        this.lrcdetail.togglePlay();
    },
    goon: function goon() {
        this.$store.commit("setcontrol");
        this.$store.commit("mycontrol");
        this.movepg();
        this.lrcdetail.togglePlay();
    },
    showlrc: function showlrc() {
        var that = this;
        var lrcadds = this.lrc.replace("http", "https");
        wx.request({
            url: lrcadds, //仅为示例，并非真实的接口地址
            data: {},
            header: {
                'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            success: function success(res) {
                if (that.lrcdetail) {
                    that.lrcdetail.stop();
                    that.lrcdetail.stop();
                }
                that.lrcdetail = new __WEBPACK_IMPORTED_MODULE_1_lyric_parser___default.a(res.data, call);
                console.log(that.lrcdetail);
                that.lrcline = that.lrcdetail;
                // that.lrcdetail.play();
                that.$store.commit('changecurrent');
                that.timers = setInterval(function () {
                    if (that.audiotime) {
                        clearInterval(that.timers);
                        that.lrcdetail.play();
                        var nowtime = (that.audiotime + 1) * 1000;
                        that.lrcdetail.seek(nowtime);
                        //that.lrcdetail.offset=5000000;
                    }
                }, 30);
                function call(item) {
                    that.playcount = item.lineNum;
                }
                //lrcdetail.setLyric()
                //lrcdetail.setLyric(res.data);
                // lrcdetail.play()
            }
        });
    }
}), _data$onUnload$onShow);

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('img', {
    staticClass: "box",
    attrs: {
      "src": _vm.loadpg
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bg"
  }, [_c('p', {
    staticClass: "p3"
  }, [_vm._v(_vm._s(_vm.song) + "-" + _vm._s(_vm.singer))]), _vm._v(" "), _c('div', {
    staticClass: "round",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.holdon
    }
  }, [_c('img', {
    staticClass: "roundpg",
    attrs: {
      "src": _vm.loadpg,
      "animation": _vm.animationData
    }
  }), _vm._v(" "), (_vm.control) ? _c('div', {
    staticClass: "stopbox"
  }, [_c('img', {
    staticClass: "stop",
    attrs: {
      "src": "../../../image/th.png",
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.goon($event)
      }
    }
  })]) : _vm._e()]), _vm._v(" "), _c('scroll-view', {
    staticClass: "lrc",
    attrs: {
      "scroll-y": "true",
      "scroll-with-animation": "true",
      "scroll-into-view": 'line' + (_vm.playcount - 2)
    }
  }, [_c('div', _vm._l((_vm.lrcline.lines), function(item, index) {
    return _c('p', {
      key: index,
      class: index === _vm.playcount ? 'p2' : 'p1',
      attrs: {
        "id": 'line' + index
      }
    }, [_vm._v(_vm._s(item.txt))])
  }))])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f7e99e7a", esExports)
  }
}

/***/ })

},[76]);