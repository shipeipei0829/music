<template>
  <div class="wraper">
    <!-- banner -->
    <swiper
      indicator-dots="false"
      autoplay="true"
      interval="5000"
      duration="400"
      circular="true"
      class="swiper-container"
      indicator-active-color="#b0e4f8"
    >
      <block v-for="(item,index) in banners" :key="index">
        <swiper-item class="swiper-item">
          <image :src="item.picUrl" class="slide-image" />
        </swiper-item>
      </block>
    </swiper>
    <!-- nav -->
    <div class="nav_container">
      <navigator url>
        <div class="icon_border"><img src="/static/images/3.png" alt="" style="width:100%;height:100%"></div>每日推荐
      </navigator>
      <navigator url>
        <div class="icon_border"><img src="/static/images/7.png" alt="" style="width:100%;height:100%"></div>歌单
      </navigator>
      <navigator url>
        <div class="icon_border"><img src="/static/images/4.png" alt="" style="width:100%;height:100%"></div>排行榜
      </navigator>
      <navigator url>
        <div class="icon_border"><img src="/static/images/5.png" alt="" style="width:100%;height:100%"></div>电台
      </navigator>
      <navigator url>
        <div class="icon_border"><img src="/static/images/6.png" alt="" style="width:100%;height:100%"></div>直播
      </navigator>
    </div>
    <!-- 推荐歌单 -->
    <div class="tuijian_container">
      <div class="tuijian_title">
        <div class="tuijian_title_left">推荐歌单</div>
        <div class="tuijian_title_right">歌单广场</div>
      </div>
      <div class="tuijian_wrap">
        <div v-for="(item,index) in tuijian" :key="index" class="tuijian_item_wrap"
        @click="toDetails(item.dissid)"
        >
          <div class="tuijian_item">
            <img :src="item.imgurl" alt class="tuijian_item_imgurl" />
            <div class="tuijian_item_tit">{{item.creator.name}}</div>
          </div>
          <p class="tuijian_item_msg">{{item.dissname}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from "@/components/card";

export default {
  data() {
    return {
      banners: "",
      tuijian: "",
      page: 1
    };
  },

  components: {
    card
  },

  methods: {
    // 跳歌单详情页
    toDetails(id){
      const url = '../detail/main?id='+id
      wx.navigateTo({
        url:url,
      })
      // console.log(id)
    },  
    // 获取推荐歌单
    getList() {
      // console.log(this.page)
      wx.showLoading({
        title: "加载中"
      });
      var that = this;
      wx.request({
        url:
          "https://v1.itooi.cn/tencent/songList/hot?categoryId=10000000&sortId=5&pageSize=9&page=" +
          that.page,
        success: res => {
          // console.log(res.data.data.list);
          setTimeout(function() {
            wx.hideLoading();
          }, 500);
          var tuijian = res.data.data.list;
          if (that.page > 1) {
            that.tuijian = that.tuijian.concat(tuijian);
          } else {
            that.tuijian = tuijian;
          }
        }
      });
    }
  },
  mounted() {
    //banners
    wx.request({
      url: "https://v1.itooi.cn/netease/banner",
      success: res => {
        // console.log(res);
        this.banners = res.data.data;
      }
    });
    // tuijian
    this.getList();
  },
  created() {
    // let app = getApp()
  },

  // 上拉触底事件
  onReachBottom() {
    // 下一页
    this.page += 1;
    this.getList();
  }
};
</script>

<style scoped>
.wraper {
  /* box-sizing: border-box;
  padding: 20rpx; */
}
.swiper-container {
  width: 100%;
  height: 300rpx;
  overflow: hidden;
  box-sizing: border-box;
  padding: 20rpx;
}
.swiper-item {
  width: 100%;
  height: 100%;
}
.slide-image {
  width: 100%;
  height: 100%;
  border-radius: 20rpx;
}
/* nav */
.nav_container {
  box-sizing: border-box;
  padding: 20rpx 20rpx 30rpx;
  display: flex;
  font-size: 24rpx;
  border-bottom: 1rpx solid #ccc;
}
.nav_container navigator {
  display: inline-block;
  flex: 1;
  text-align: center;
}
.icon_border {
  width: 80rpx;
  height: 80rpx;
  /* border: 1px solid #ccc; */
  border-radius: 50%;
  background-color: #b0e4f8;
  margin: 0 auto;
  margin-bottom: 20rpx;
}
/* 推荐歌单 */
.tuijian_container {
  box-sizing: border-box;
  padding: 20rpx;
}
.tuijian_title {
  height: 100rpx;
  overflow: hidden;
}
.tuijian_title_left {
  float: left;
  font-weight: bold;
  font-size: 34rpx;
}
.tuijian_title_right {
  float: right;
  border: 1px solid #ccc;
  font-size: 24rpx;
  padding: 6rpx 20rpx;
  border-radius: 40rpx;
}
.tuijian_wrap {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 50% 50%;
}
.tuijian_item_wrap {
  margin: 0 10rpx 10rpx;
  position: relative;
}
.tuijian_item {
}
.tuijian_item_imgurl {
  width: 100%;
  height: 200rpx;
  border-radius: 8rpx;
}
.tuijian_item_tit {
  position: absolute;
  left: 10rpx;
  top: 10rpx;
  height: 40rpx;
  font-size: 24rpx;
  color: aliceblue;
  font-weight: bold;
}
.tuijian_item_msg {
  font-size: 28rpx;
  line-height: 34rpx;
  height: 68rpx;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
