<template>
    <div class="header">
        <div class="header_left">
            <div class="iconfont btn-back">
                &#xe8b5;
            </div>
        </div>
        <div class="header_input">
            <span  class="iconfont">&#xe86e;</span>
            输入城市/景点/游玩主题</div>
        <router-link to='/City'>
            <div class="header_right">城市
            <span class="tangle-icon"></span>
        </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl';
    .header
     display:flex
     height:$headerHeight
     color:white
     background-color:$bgColor
     .header_left
      float:left
      width:.64rem
      text-align :center
      line-height $headerHeight
      .btn-back
       margin-left :.12rem
       font-size :$backBtnText
     .header_input
      flex :1
      background-color :white
      border-radius:.1rem
      color :#333
      margin-top :.10rem
      height .64rem
      line-height .64rem
      padding-left .12rem
     .header_right
      padding-left:.24rem
      min-width :1.1rem
      line-height :$headerHeight
      position :relative
      color: white
      .tangle-icon
       position :absolute
       top:45%
       right :.24rem
       border-left: 5px solid transparent;
       border-top: 5px solid white;
       border-right: 5px solid transparent;
       border-bottom: 15px solid transparent;

</style>
