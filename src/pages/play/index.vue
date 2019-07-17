<template>
  <div class="play_wrap">
    <div class="play_wrap_tit" style="text-align:center">
      <div style="flex:1;font-size:38rpx;height:12vh;line-height:12vh">{{name}}</div>
      <div style="flex:1;font-size:26rpx;">{{author}}</div>
    </div>
    <div class="play_wrap_con" @click="toggle()">
      <img :src="poster" alt v-if="isToggle" class="play_wrap_con_img" :animation="musicAnimation" />
      <div v-if="!isToggle" class="lyric js_lrc fade_in">
        <!-- https://www.jianshu.com/p/34efd94647b7 -->

        <scroll-view
          class="lyric__bd js_lrc_bd"
          scroll-y="true"
          scroll-with-animation="true"
          :scroll-top="marginTop"
        >
          <view class="currentTime lyric__scroll">
            <text
              v-for="(item,index) in storyContent"
              :key="index"
              :data-time="item[0]"
              :class="currentIndex222 == index ? 'currentTime' : ''"
            >{{item[1]}}</text>
          </view>
        </scroll-view>
      </div>
    </div>
    <div class="button">
      <div class="btn">
        <img src="/static/images/shoucang.png" alt />
      </div>
      <div class="btn" @click="play">
        <img src="/static/images/on.png" alt v-if="isplay" />
        <img src="/static/images/off.png" alt v-if="!isplay" />
      </div>
      <div class="btn">
        <img src="/static/images/down.png" alt />
      </div>
    </div>
    <!-- <audio
      :poster="poster"
      :name="name"
      :author="author"
      :src="src"
      id="myAudio"
      controls
      loop
      style="width:100%;display:block;"
    ></audio>-->
  </div>
</template>

<script>
import card from "@/components/card";

export default {
  data() {
    return {
      poster: "", //封面
      name: "", //歌名
      author: "", //作者
      src: "", //音频
      isToggle: true,
      isplay: true,
      musicAnimation: null, //封面动画
      lrcDir: "", //歌词
      storyContent: [],
      //文稿滚动距离
      marginTop: 0,
      //当前正在第几行
      currentIndex222: 0,
      innerAudioContext: ""
    };
  },
  components: {},
  methods: {
    toggle() {
      this.isToggle = !this.isToggle;
    },
    play() {
      this.isplay = !this.isplay;
      if (this.isplay) {
        this.innerAudioContext.play();
      } else {
        this.innerAudioContext.pause();
      }
    },
    parseLyric: function(text) {
      var result = [];
      var lines = text.split("\n"); //切割每一行
      var pattern = /\[\d{2}:\d{2}.\d{2}\]/g; //用于匹配时间的正则表达式，匹配的结果类似[xx:xx.xx]
      //去掉不含时间的行
      while (!pattern.test(lines[0])) {
        lines = lines.slice(1);
      }
      //上面用'\n'生成数组时，结果中最后一个为空元素，这里将去掉
      lines[lines.length - 1].length === 0 && lines.pop();
      lines.forEach(function(v /*数组元素值*/, i /*元素索引*/, a /*数组本身*/) {
        //提取出时间[xx:xx.xx]
        var time = v.match(pattern),
          //提取歌词
          value = v.replace(pattern, "");
        // 因为一行里面可能有多个时间，所以time有可能是[xx:xx.xx][xx:xx.xx][xx:xx.xx]的形式，需要进一步分隔
        time.forEach(function(v1, i1, a1) {
          //去掉时间里的中括号得到xx:xx.xx
          var t = v1.slice(1, -1).split(":");
          //将结果压入最终数组
          result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
        });
      });
      //最后将结果数组中的元素按时间大小排序，以便保存之后正常显示歌词
      result.sort(function(a, b) {
        return a[0] - b[0];
      });
      return result;
    },
    //去除空白
    sliceNull(lrc) {
      // console.log("22"+lrc)
      var result = [];
      for (var i = 0; i < lrc.length; i++) {
        if (lrc[i][1] == "") {
        } else {
          result.push(lrc[i]);
        }
      }
      return result;
    }
  },

  mounted() {
    // this.storyContent = this.sliceNull(this.parseLyric(this.lrcDir));

    var param = this.$root.$mp.query;
    // console.log(param);
    console.log("mounted");
    // 详情
    wx.request({
      url: "https://v1.itooi.cn/tencent/song?id=" + param.id,
      success: res => {
        // console.log(res);
        this.name = res.data.data[0].title;
        this.author = res.data.data[0].singer[0].name;
      }
    });
    // 歌词
    wx.request({
      url: "https://v1.itooi.cn/tencent/lrc?id=" + param.id,
      success: res => {
        // console.log(res);
        this.lrcDir = res.data;
        // console.log(this.lrcDir);
        this.storyContent = this.sliceNull(this.parseLyric(this.lrcDir));
        // this.storyContent = this.sliceNull(this.lrcDir);
        // console.log(this.storyContent);
      }
    });
    // 封面
    wx.request({
      url:
        "https://v1.itooi.cn/tencent/pic?id=" +
        param.id +
        "&imgSize=" +
        param.id +
        "&isRedirect=0",
      success: res => {
        // console.log(res);
        this.poster = res.data.data;
      }
    });
    // 歌曲
    wx.request({
      url:
        "https://v1.itooi.cn/tencent/url?id=" +
        param.id +
        "&quality=128&isRedirect=0",
      // data:{
      //   quality:128
      // },
      success: res => {
        // console.log(res);
        this.src = res.data.data;
        // this.innerAudioContext = wx.createInnerAudioContext();
        console.log(this.innerAudioContext, 111111111111);
        this.innerAudioContext.autoplay = true;
        this.innerAudioContext.src = this.src;
        this.innerAudioContext.onPlay(() => {
          // console.log("开始播放");
          this.isplay = true;
        });
        this.innerAudioContext.onPause(() => {
          // console.log("暂停播放");
          this.isplay = false;
        });
        console.log(this.innerAudioContext, 22222222222);
        var that = this;
        this.innerAudioContext.onTimeUpdate(function() {
          if (that.currentIndex222 >= 4) {
            //超过6行开始滚动
            that.marginTop=(that.currentIndex222 - 4) * 30
          
          }
          // 文稿对应行颜色改变
          if (that.currentIndex222 != that.storyContent.length - 1) {
            //
            var j = 0;
            for (
              var j = that.currentIndex222;
              j < that.storyContent.length;
              j++
            ) {
              // 当前时间与前一行，后一行时间作比较， j:代表当前行数
              if (
                that.currentIndex222 ==
                that.storyContent.length - 2
              ) {
                //最后一行只能与前一行时间比较
                if (
                  parseFloat(that.innerAudioContext.currentTime) >
                  parseFloat(
                    that.storyContent[that.storyContent.length - 1][0]
                  )
                ) {
                  that.currentIndex222=that.storyContent.length - 1
                  return;
                }
              } else {
                if (
                  parseFloat(that.innerAudioContext.currentTime) >
                    parseFloat(that.storyContent[j][0]) &&
                  parseFloat(that.innerAudioContext.currentTime) <
                    parseFloat(that.storyContent[j + 1][0])
                ) {
                  that.currentIndex222= j
                  return;
                }
              }
            }
          }
        });
      }
    });
  },

  onReady: function(e) {
    console.log("onready");
    // console.log(e);
    // this.audioCtx = wx.createAudioContext("myAudio");
    // this.audioCtx.play()
    // console.log('1111')

    // this.innerAudioContext = wx.createInnerAudioContext()
    // this.innerAudioContext.autoplay = true
    // this.innerAudioContext.src = this.src
    // this.innerAudioContext.onPlay(() => {
    //     console.log('开始播放')
    //     this.isplay = true
    // })
    // this.innerAudioContext.onPause(()=>{
    //   console.log('暂停播放')
    //   this.isplay = false
    // })

    //绘制动画
    // https://blog.csdn.net/chengzhf/article/details/88386160
    var rotateCount = 1;

    const animationDuration = 6000;

    const animation = wx.createAnimation({
      duration: animationDuration
    });

    animation.rotate(360).step();

    this.musicAnimation = animation.export();

    //连续动画关键步骤

    var _this = this;

    setInterval(function() {
      rotateCount++;

      const animation = wx.createAnimation({
        duration: animationDuration
      });

      animation.rotate(360 * rotateCount).step();

      _this.musicAnimation = animation.export();
    }, animationDuration);
  },
  onLoad(options) {
    // console.log("onload");
    this.innerAudioContext = wx.createInnerAudioContext();
    // 背景音频播放进度更新事件
    console.log(this.innerAudioContext, 11111111111);
    // 背景音频播放进度更新事件
  },
  created() {},
  onShow(options) {}
};
</script>

<style scoped>
.play_wrap_tit {
  height: 16vh;
  display: flex;
  flex-direction: column;
}
.play_wrap_con {
  width: 100%;
  height: 60vh;
  overflow: hidden;
  position: relative;
}
.play_wrap_con_img {
  box-sizing: border-box;
  width: 600rpx;
  height: 600rpx;
  border-radius: 50%;
  margin: 50rpx auto;
  display: block;
}

.button {
  display: grid;
  padding: 0 10%;
  box-sizing: border-box;
  grid-template-columns: 33.3% 33.3% 33.3%;
}
.btn {
  width: 70rpx;
  height: 70rpx;
  line-height: 70rpx;
  border-radius: 50%;
  background-color: #b0e4f8;
  border: 1px solid #33ccff;
  margin: 0 auto;
}
.btn img {
  width: 60%;
  height: 60%;
  display: block;
  margin: 0 auto;
  padding-top: 10rpx;
}
.song_info__bd {
  position: relative;
  height: 100%;
}
.fade_in {
  -webkit-animation: ani_fade_in 250ms ease-in-out forwards;
  pointer-events: auto;
}
.currentTime {
  color: gray;
}
.fade_in {
  -webkit-animation: ani_fade_in 250ms ease-in-out forwards;
  pointer-events: auto;
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 2;
  width: 234px;
  height: 234px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.lyric {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  /* opacity: 0; */
}

.lyric__bd {
  width: 100%;
  height: 600rpx;
  overflow: auto;
  -webkit-mask: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0),
    #fff 25%,
    #fff 75%,
    rgba(0, 0, 0, 0)
  );
  position: relative;
}
.lyric::-webkit-scrollbar {
  display: none;
}
.lyric__bd .lyric__scroll {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: top 0.3s;
}

.lyric__scroll text {
  display: block;
  line-height: 2;
  margin: 0 20px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.9);
}
.currentTime {
  color: #33ccff!important;
  animation:mymove 5s infinite;
-webkit-animation:mymove 5s infinite;
}
</style>
