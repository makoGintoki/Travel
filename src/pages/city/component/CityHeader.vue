<template>
    <div class="wrap">
        城市选择
        <router-link to="/">
          <div class="iconfont icon-btn-back"> &#xe8b5;</div>
        </router-link>
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
    line-height :$headerHeight
    background-color :$bgColor
    color :white
    text-align :center
    font-size :.32rem
    .icon-btn-back
        margin-left :.2rem
        height :$headerHeight
        line-height :$headerHeight
        font-size :$backBtnText
        float :left;
        color :white
</style>
