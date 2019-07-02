<template>
   <!-- 推荐 end-->
    <div class="foot-nav row">
      <ul>
        <li :class="{'home': true,'curr': comeFrom==='home'?true:false }">
          <i></i>
          首页
          </li>
        <li :class="{'find':true,'curr': comeFrom==='find'?true:false}" >
          <i></i>
          发现
          </li>
        <li :class="{'cart':true, 'curr': comeFrom==='cart'?true:false}" >
          <i></i>
          购物车
          </li>
        <li :class="{'MyEg':true, 'curr': comeFrom==='MyEg'?true:false}">
          <i></i>
          我的e购
          </li>
      </ul>
    </div>
    <!-- 底部导航 -->
</template>

<script>
export default {
  data(){
    return {
      class:'curr'
    }
  },
  props:['comeFrom']
}
</script>
<style lang="less" scoped>
.row::after {
    display: table;
    clear: both;
    content: "";
}
.foot-nav{
  clear: both;
  padding:0.23rem;
  overflow:hidden;
  li{
    float: left;
    text-align: center;
    width:24%;
    font-size:0.3rem;
    &.curr{
      color:red;
    }
    i{
    display: block;
    width:0.6rem;
    height:0.6rem;
    background: url('../../assets/home/icon-home-normal.png') no-repeat center center;
    background-size:100% 100%;
    margin:0 auto 0.16rem auto;
    }
    
  }
  .MyEg i{
    background-image: url('../../assets/home/myEg-normal.png')
    }
  .MyEg.curr i{
    background-image: url('../../assets/home/myEg-curr.png')
  }
  .find i{
    background-image: url('../../assets/home/icon-find-normal.png')
  }
  .find.curr i{
    background-image: url('../../assets/home/icon-find-curr.png')
  }
  .home i{
    background-image: url('../../assets/home/icon-home-normal.png')
  }
  .home.curr i{
    background-image: url('../../assets/home/icon-home-curr.png')
  }
  .cart i{
    background-image: url('../../assets/home/icon-cart-normal.png')
  }
  .cart.curr i{
    background-image: url('../../assets/home/icon-cart-curr.png')
  }
}
</style>
