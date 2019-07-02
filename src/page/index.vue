<template>
  <div class="home wrap">
    <div class="search-bar">
      <i class="icon-1"></i>
      <div class="title"></div>
      <i class="icon-2"></i>
    </div>
    <!-- 搜索 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- swipe -->
    <div class="row class-list">
      <uL>
          <router-link v-for="(item,index) in classList" :key="index" to="/foo" tag="li" ><i :class="`icon-class-${index+1}`"></i>{{item.name}}</router-link>
      </uL>
    </div>
    <!-- 分类列表 -->
    <!-- <van-row>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
    </van-row> -->

    <!-- 推荐 -->
    <div class="recommend-list">
        <ul v-if="recommendList&&recommendList.length>0">
          <li v-for="(item,index) in recommendList" :key="index" :dataId='index' class="recommend-item">
            <div class="video-box row">
              <img class="video" src="https://fc6tn.baidu.com/it/u=1510141261,1031457043&fm=202">
              <!-- <video :src="item.videoPath">video +{{index}}</video> -->
              <span class="txt line2" v-text="item.name"></span>
            </div>
            <div class="img-list row" v-if='item.imgList&&item.imgList.length>0'>
                <router-link :to="img.link" v-for="(img,i) in item.imgList" :key="i" class="link"><img :src="img.imgPath" /></router-link>
            </div>
          </li>
        </ul>
    </div>
    <!-- 推荐 end-->
    <footer-nav :comeFrom='pageName'></footer-nav>
    <!-- 底部导航 -->
  </div>
</template>

<script>
import footerNav from './module/footerNav.vue'
export default {
  name: 'home',
   data() {
    return {
      pageName: 'home',
      images: [
        'http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ],
      classList:[
        {name:"美妆护肤",link:'/foo',icon:"/icon-1.png"},
        {name:"美妆护肤",link:'/foo',icon:"/icon-2.png"},
        {name:"美妆护肤2",link:'/foo',icon:"/icon-3.png"},
        {name:"美妆护肤",link:'/foo',icon:"/icon-4.png"},
        {name:"美妆护肤2",link:'/foo',icon:"/icon-1.png"},
        {name:"美妆护肤",link:'/foo',icon:"/icon-1.png"},
        {name:"美妆护肤",link:'/foo',icon:"/icon-1.png"},
        {name:"美妆护肤",link:'/foo',icon:"/icon-1.png"},
        {name:"美妆护肤",link:'/foo',icon:"/icon-1.png"},
        {name:"美妆护肤",link:'/foo',icon:"/icon-1.png"}
      ],
      recommendList:[
        {
          name:'牛皮包视频',
          videoPath:'./video/view/01',
          introduce:'fdsfsdfsdfds',
          imgList:[
            {imgPath:'https://img.yzcdn.cn/2.jpg',link:'./p1/01.html'},
            {imgPath:'https://img.yzcdn.cn/2.jpg',link:'./p1/01.html'},
            {imgPath:'https://img.yzcdn.cn/2.jpg',link:'./p1/01.html'},
            {imgPath:'https://img.yzcdn.cn/2.jpg',link:'./p1/01.html'},
          ]
        },
         {
          name:'牛皮包视频',
          videoPath:'./video/view/01',
          introduce:'fdsfsdfsdfds',
          imgList:[
            {imgPath:'https://img.yzcdn.cn/2.jpg',link:'./p1/01.html'},
            {imgPath:'https://img.yzcdn.cn/2.jpg',link:'./p1/01.html'},
            {imgPath:'https://img.yzcdn.cn/2.jpg',link:'./p1/01.html'},
            {imgPath:'https://img.yzcdn.cn/2.jpg',link:'./p1/01.html'},
          ]
        }
      ]
    }
  },
  components:{
    footerNav,
  },
  mounted() {
    this.$toast('提示文案');
    this.getData()
  },
  methods: {
    getData(){
      console.log("getData:")
    }
  }
}
</script>
<style lang="less" scoped>
.wrap{
 border:1px solid red;
}
.row::after {
    display: table;
    clear: both;
    content: "";
}
.search-bar{
  height:185px;
  background: 'red';
  .icon-1{
    width:60px;
    height:56px;
    float:left;
  }
  .icon-2{
    width:54px;
    height:54px;
    float:right;
  }
  .title{
    float:left;
  }
}
  // 滚动播放
.van-swipe{
  height:150px;
  img{
    width:100%;
  }
}
// .row::after {
//     display: table;
//     clear: both;
//     content: "";
// }
.class-list{
  font-size:0.36rem;
  overflow:hidden;
  li{
    float:left;
    width:20%;
  }
  .icon-class-1{
    width:60px;
    height:60px;
    background: red;
  }
}
// 推荐列表
.recommend-list{
  font-size:0.42rem;
  color:#000;
  .recommend-item{

  }
  .video-box{
     position: relative;
      width:9.96rem;
      height:5.58rem;
      display: block;
      margin:0 auto;
      border-radius: 0.1rem;
  }
  .video{
    width:9.96rem;
    height:5.58rem;
  }
  .txt {
    position: absolute;
    top:5rem;
    left:0;
    color:#fff;
  }
  .img-list{
    .link{
      display: block;
       float:left;
       width:2.4rem;
       height:2.4rem;
    }
    img{
      width:100%;
    }
  }
}

</style>
