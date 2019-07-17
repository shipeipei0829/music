<template>
  <div class="detail_wrap">
    <div class="detail_top">
      <div class="detail_bgc_wrap">
        <img :src="list.logo" alt class="detail_bgc" />
      </div>

      <div class="detail_logo_wrap">
        <img :src="list.logo" alt class="detail_logo" />
      </div>
      <div class="details_top_right">
        <rich-text v-html="list.desc" class="detail_desc">{{list.desc}}</rich-text>
        <div class="userName">
          <img :src="list.headurl" alt class="userPic" />
          
          {{list.nick}}
        </div>
        <div class="detail_tag">
          标签:
          <span v-for="item in list.tags" :key="item.id">{{item.name}}</span>
        </div>
        <text class="userdissname">{{list.dissname}}</text>
      </div>
      <div class="detail_top_bd">
        <div class="detail_top_bd_icon">
          <img src="/static/images/8.png" alt class="icon_image" />
          评论
        </div>
        <div class="detail_top_bd_icon">
          <img src="/static/images/9.png" alt class="icon_image" />分享
        </div>
        <div class="detail_top_bd_icon">
          <img src="/static/images/10.png" alt class="icon_image" />下载
        </div>
        <div class="detail_top_bd_icon">
          <img src="/static/images/11.png" alt class="icon_image" />多选
        </div>
      </div>
      <div style="height:100rpx"></div>
    </div>
    <!-- 歌曲列表 -->
    <div class="detailst_list">
      <div class="detailst_list_item" v-for="(item,index) in list.songlist" :key="item.id">
        <div class="detailst_list_item_num">{{index+1}}</div>
        <div class="detailst_list_item_con">
          <div class="detailst_list_item_con_name">
            {{item.title}}&nbsp;&nbsp;&nbsp;
            <span style="font-size:26rpx;color:#999">({{item.album.name}})</span>
          </div>
          <div class="detailst_list_item_con_singer">{{item.singer[0].name}}</div>
        </div>
        <div class="detailst_list_item_con_play" @click="toPlay(item.mid)">
          <img src="/static/images/play.png" style="width:80%;height:80%;display:block;" alt="">
        </div>
        <!-- <audio :src="item.url"></audio> -->
      </div>
    </div>
  </div>
</template>

<script>
import card from "@/components/card";

export default {
  data() {
    return {
      list: []
    };
  },
  components: {},
  methods: {
    toPlay(id){
      const url = '../play/main?id='+id
      wx.navigateTo({
        url:url
      })
      // console.log(id)
    }
  },
  mounted() {
    var param = this.$root.$mp.query;
    // console.log(param);
    wx.request({
      url: "https://v1.itooi.cn/tencent/songList?id=" + param.id,
      success: res => {
        console.log(res);
        this.list = res.data.data[0];
      }
    });
  },
  created() {},
  onShow(options) {}
};
</script>

<style scoped>
.detail_top {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.detail_bgc_wrap {
  width: 100%;
  height: 700rpx;
  position: absolute;
}
.detail_bgc {
  opacity: 0.2;
  width: 100%;
  height: 700rpx;
}
.detail_logo_wrap {
  float: left;
  width: 50%;
  height: 370rpx;
  padding: 20rpx;
  box-sizing: border-box;
  overflow: hidden;
}
.detail_logo {
  float: left;
  width: 100%;
  height: 340rpx;
  border-radius: 30rpx;
}
.details_top_right {
  float: right;
  width: 50%;
}
.detail_desc {
  width: 100%;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  box-sizing: border-box;
  padding: 20rpx 20rpx 0 20rpx;
}
.userName {
  margin-top: 30rpx;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  height: 80rpx;
  line-height: 80rpx;
  color: #666;
}
.userPic {
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
}
.userdissname {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  height: 50rpx;
  line-height: 50rpx;
  color: #666;
  font-size: 30rpx;
}
.detail_top_bd {
  width: 100%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  text-align: center;
}
.detail_top_bd_icon {
  color: #666;
}
.icon_image {
  width: 50rpx;
  height: 50rpx;
  border-radius: 50%;
  display: block;
  margin: 10rpx auto;
}
.detail_tag {
  color: #666;
  font-size: 30rpx;
}
/* 歌单列表 */
.detailst_list {
  background: #fff;
  border-radius: 50rpx;
  overflow: hidden;
  position: relative;
  top: -50rpx;
}
.detailst_list_item {
  height: 140rpx;
}
.detailst_list_item {
  display: flex;
}
.detailst_list_item_num {
  width: 80rpx;
  height: 140rpx;
  line-height: 140rpx;
  text-align: center;
  color: rgb(32, 31, 31);
}
.detailst_list_item_con {
  flex: 1;
  padding: 20rpx;
}
.detailst_list_item_con_name {
  font-size: 34rpx;
  color: rgb(8, 8, 8);
  height: 60rpx;
  line-height: 60rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.detailst_list_item_con_singer {
  font-size: 24rpx;
  color: rgb(32, 31, 31);
  height: 40rpx;
  line-height: 40rpx;
}
.detailst_list_item_con_play {
  width: 50rpx;
  height: 50rpx;
  border-radius: 50%;
  margin: auto 40rpx;
}
</style>
