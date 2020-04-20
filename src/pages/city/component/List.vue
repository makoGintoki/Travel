<template>
    <div class="list" ref="wrapper">
        <div>
            <div  class="area ">
            <div class="title border-topbottom">当前城市</div>
            <div class="btn-list">
               <div class="btn-wrap">
                <div class="btn">
                    北京
                </div>
               </div>
            </div>
        </div>

        <div  class="area ">
            <div class="title border-topbottom">热门城市</div>
            <div class="btn-list">
               <div class="btn-wrap"
                    v-for="item of hot"
                    :key="item.id"
                    >
                <div class="btn">
                   {{item.name}}
                </div>
               </div>
            </div>
        </div>

        <div  class="area ">
            <div class="item-wrap"
                 v-for="(item,key) of cities"
                 :key="key"
                 :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item  border-bottom"
                         v-for="innerItem of item"
                         :key="innerItem.id">
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array,
    letter: ''
  },
  mounted: function () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter: function () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
  &:before
    border-color :#ccc
  &:after
    border-color :#ccc
.border-bottom
  &:before
    border-color :#ccc
.list
  overflow: hidden
  position: absolute
  top: 1.68rem
  left: 0
  right: 0
  bottom: 0
  .area
    .title
      text-indent :.2rem
      height :.54rem
      color :$darkText
      background-color #eee
      line-height :.54rem
      font-size: .26rem
    .btn-list
      overflow :hidden
      padding: .1rem .6rem .1rem .1rem
      .btn-wrap
        float:left
        width: 33.33%
        .btn
          border:1px #ddd solid
          padding .1rem .4rem
          border-radius:.1rem
          color :#999
          margin :.1rem
          text-align :center
  .item-list
      .item
         line-height: .76rem
         padding-left: .2rem
</style>
