require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([2],[
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_vuex_store__ = __webpack_require__(18);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__pages_vuex_store__["a" /* default */];

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_738a329b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(17);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(14)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-738a329b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_738a329b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-738a329b", Component.options)
  } else {
    hotAPI.reload("data-v-738a329b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div')
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-738a329b", esExports)
  }
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(20);

// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system



__WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */].Store({
  state: {
    hostlist: [], ///主页六个歌单 保存文本图片信息 当页请求格式化的数据
    alllist: [], //用来传全部歌单
    top: [], //热门歌曲全部歌曲
    new: [], //新歌
    imgtext: [{ bgsrc: 'http://p4.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=170y170', font: '云音乐热歌榜' }, //存放热门歌曲 新歌 以及排行榜的图片信息
    { bgsrc: "http://music.163.com/api/img/blur/18713687906568048?param=170y170", font: '云音乐新歌榜' }],
    threeindex: [], //存储主页三个歌单的下标
    listpg: [], //存放所有歌单初次加载的时候的所有图片
    listobj: [], //存放所有歌单初次加载时候的所有歌曲
    listname: [], //用来存放歌单初次加载所有歌单名称
    justthree: [],
    songsurl: {
      url: 'bug',
      pic: 'bug'
    }, //当前播放歌曲的对象
    plarse: '',
    recent: [], //最近播放记录
    lovesongs: [], //收藏的歌曲
    lose: '', //判断是否关掉钢铁侠进入主界面
    control: false, //detail页面暂停小图标
    current: false, //判断是否发送当前播放时间
    currenttime: "", //当前播放的时间值
    nextone: false, //判断是否换歌
    onebug: false //footer暂停/播放控制歌词
  },
  mutations: {
    mybug: function mybug(state) {
      state.onebug = !state.onebug;
    },
    nextonechange: function nextonechange(state) {
      state.nextone = !state.nextone;
    },
    changecurrent: function changecurrent(state) {
      state.current = !state.current;
    },
    givetime: function givetime(state, time) {
      state.currenttime = time;
    },
    mycontrol: function mycontrol(state) {
      state.control = !state.control;
    },
    giveobj: function giveobj(state, res) {
      state.hostlist.push(res);
    },
    giveall: function giveall(state, res) {
      state.alllist.push(res);
    },
    top100: function top100(state, res) {
      state.top.push(res);
    },
    new100: function new100(state, res) {
      state.new.push(res);
    },
    givename: function givename(state, res) {
      state.listname.push(res);
    },
    pushpg: function pushpg(state, res) {
      state.listpg.push(res);
    },
    pushobj: function pushobj(state, res) {
      state.listobj.push(res);
      state.justthree.push(res.slice(0, 3));
    },
    givecount: function givecount(state) {
      state.threeindex.push(state.listobj.length - 1);
    },
    givesrc: function givesrc(state, obj) {
      state.songsurl = obj;
      state.control = false;
      state.plarse = false;
      state.nextone = !state.nextone;
    },
    setcontrol: function setcontrol(state) {
      state.plarse = false;
    },
    pause: function pause(state) {
      state.plarse = true;
    },
    recentadd: function recentadd(state, obj) {
      //////////////////重要
      if (state.recent.length == 0) {
        wx.getStorage({
          key: 'played',
          success: function success(res) {
            state.recent = JSON.parse(res.data);
            state.recent.unshift(obj);
            var str = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(state.recent);
            wx.setStorage({
              key: "played",
              data: str
            });
          },
          fail: function fail() {
            state.recent.unshift(obj);
            var str = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(state.recent);
            wx.setStorage({
              key: "played",
              data: str
            });
          }
        });
      } else {
        state.recent.unshift(obj);
        var str = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(state.recent);
        wx.setStorage({
          key: "played",
          data: str
        });
      }
    },
    mylove: function mylove(state, item) {

      if (state.lovesongs.length == 0) {
        wx.getStorage({
          key: 'loves',
          success: function success(res) {
            state.lovesongs = JSON.parse(res.data);
            state.lovesongs.unshift(item);
            console.log(state.lovesongs);
            var str = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(state.lovesongs);
            wx.setStorage({
              key: "loves",
              data: str
            });
          },
          fail: function fail() {
            state.lovesongs.unshift(item);
            var str = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(state.lovesongs);
            wx.setStorage({
              key: "loves",
              data: str
            });
          }
        });
      } else {
        state.lovesongs.unshift(item);
        var str = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(state.lovesongs);
        wx.setStorage({
          key: "loves",
          data: str
        });
      }
    },
    losepage: function losepage(state) {
      state.lose = false;
    }
  }
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ })
],[12]);