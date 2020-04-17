<template>
    <div class="wrap">
        <div class="iconfont icon-btn-back"> &#xe8b5;</div>
        <p>城市选择</p>
        
        
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  .wrap
    height :$headerHeight
    background-color :$bgColor
    color :white
    text-align :center
     .icon-btn-back
         margin-left :.2rem
         font-size :$backBtnText
         widows 0.64rem
         float :left;
</style>
