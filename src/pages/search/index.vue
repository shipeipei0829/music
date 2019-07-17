<template>
<div class="search_box">
    <div class="mod_search_bar">
        <view class="search_bar_cont section">
          <input id="search_input" placeholder="搜索歌曲、歌单、专辑" v-model="value"
          @confirm="bindconfirm"
          />
        </view>
        <div class="search_bar_tip_text" @click="quxiao">取消</div>
    </div>
    <!-- 热门搜索 -->
    <div class="mod_search_result" v-if="!isshowHots">
        <h3 class="result_tit">热门搜索</h3>
        <div class="result_tags">                
          <span class="tag_s tag_hot" v-for="(item,index) in hots" :key="index" @click="changeIpt(item.con)">{{item.con}}</span>
        </div>
    </div>
    <!-- 搜索列表 -->
    <ul class="mod_search_result_list" v-if="isshowList">
        <li class="mod_search_result_list_con" v-for="(item,index) in singer" :key="index" @click="toPlay(item.songmid)">
            <div class="music_icon">♫</div>
            <div>
                <p class="mod_search_result_list_tit">{{item.songname}}</p>
                <p class="mod_search_result_list_singer">
                  <span  v-for="(i,b) in item.singer" :key="b">{{i.name}}</span>                  
                </p>
            </div>

        </li>
        <!-- <li class="lookMore" @click="showMore">查看更多搜索结果</li> -->
    </ul >
</div>
</template>

<script>


export default {
  components: {
   
  },

  data () {
    return {
      isshowHots:true,
      isshowList:true,
      singer:[],
      hots:'',
      songName:'',
      bgImg:'',
      value:'林俊杰',
       hots: [
                {
                    con: '周笔畅  新歌'
                },
                {
                    con: '林俊杰'
                },
                {
                    con: '火箭少女101'
                },
                {
                    con: '周杰伦'
                },
                {
                    con: '毛不易'
                }

            ],
    }
  },
  methods:{
    bindconfirm(e){
      // console.log(e.mp.detail.value)
      // 搜索
      wx.request({
        url:"https://v1.itooi.cn/tencent/search?keyword="+e.mp.detail.value+"&type=song&pageSize=20&page=0",
        success:res=>{
          this.singer=res.data.data.list;
          console.log(res.data.data.list);
        }
      })

    },
    // 点击li播放
    toPlay(id){
        const url = '../play/main?id='+id
        wx.navigateTo({
            url:url
        })
    }
  },

  created () {
  }
}
</script>

<style>
.span{
  display:block;
}
.mod_search_bar {
    background: #f4f4f4;
    padding: 20rpx;
    display: -webkit-box;
    box-sizing: border-box;
    -webkit-box-orient: horizontal;
    -webkit-box-align: center;
    display: flex;
}
.mod_search_bar .search_bar_cont {
    position: relative;
    border-radius: 6rpx;
    background: #fff;
    flex: 1;
    height: 60rpx;
    padding: 0.16rem 0.34rem 0.16rem 0.6rem;
}
/* 搜索 */
.mod_search_bar .search_bar_cont #search_input {
    height: 40rpx;
    line-height: 40rpx;
    width: 100%;
    color: rgba(0,0,0,.3);
    border: none  !important;
    outline:none  !important;
    font-size:34rpx;
    border-color:transparent;
    padding-top:12rpx;

}
#search_input:focus {
    border: none  !important;
    border-bottom: 1px solid white !important;
    box-shadow: none;
}
.mod_search_bar .search_bar_tip_text {
    padding-right: 20rpx;
    padding-left: 20rpx;
    font-size: 48rpx;
    height: 140rpx;
    line-height: 140rpx;
    display: none;
}

/* 热门搜索 */
.mod_search_result{
    background: #fff;
    padding: 30rpx 30rpx 20rpx 30rpx;
}
.mod_search_result .result_tit {
    color: rgba(0,0,0,.6);
    margin-bottom: 16rpx;
}
.mod_search_result .tag_s {
    display: inline-block;
    font-size: 48rpx;
    padding: 0 40rpx;
    height: 120rpx;
    line-height: 120rpx;
    color: #000;
    border: 20rpx solid rgba(0,0,0,.6);
    border-radius: 200rpx;
    word-break: keep-all;
    margin-bottom: 40rpx;
    margin-right: 48rpx;
}

/* icon图标 */
.iconStyle{
    position:absolute;
    right: 40rpx;
    top:center;
    transform: translateY(50%)
}
.iconStyle1{
    font-size: 60rpx;
    color: #000;
    position:absolute;
    left: 40rpx;
    top:50% ;
    transform: translateY(-50%)
}

/* 搜索列表 */
.mod_search_result_list{
    background: #fff;

}
.mod_search_result_list_con{
    border-bottom: 1px solid #b0e4f8;
    overflow: hidden;
}
.music_icon{
    float: left;
    width: 120rpx;
    font-size: 80rpx;
    text-align: center;
    color: #999;
}
.music_icon img{
    width: 80%;
}
.mod_search_result_list_tit{
    font-size: 34rpx;
    color: #000;
    height: 50rpx;
    line-height: 50rpx;
    margin-bottom: 8rpx;
}
.mod_search_result_list_singer{
    font-size: 26rpx;
    height: 36rpx;
    line-height: 36rpx;
    margin-bottom: 10rpx;
    padding-left:80rpx;
}
.lookMore{
    text-align: center;
}
</style>
