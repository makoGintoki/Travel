<template>
<div>
    <div class="wrap">
      <input class="ip"
             type="text"
             placeholder="请输入城市名/拼音"
             v-model="keyword">
    </div>
    <div class="search-content"
         v-show="keyword"
         ref="content">
      <ul>
        <li class="search-item"
            v-for="item of list"
            :key="item.id"
            @click="chooseCity(item.name)" >
            {{item.name}}
        </li>
        <li  class="search-item" v-show="hasData">
          无相关内容
        </li>
      </ul>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data: function () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  watch: {
    keyword: function () {
      const that = this
      const result = []
      if (!this.keyword) {
        this.list = []
        return
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(function () {
        for (let i in that.cities) {
          that.cities[i].forEach(function (value) {
            if (value.spell.indexOf(that.keyword) > -1 || value.name.indexOf(that.keyword) > -1) {
              result.push(value)
            }
          })
        }
      }, 100)
      this.list = result
    }
    // list: function () {
    //   return !this.list.length
    // }
  },
  computed: {
    hasData: function () {
      return !this.list.length
    }
  },
  mounted: function () {
    this.scroll = new BScroll(this.$refs.content)
  },
  methods: {
    chooseCity: function (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/textcontrol.styl';
.border-bottom
  &:before
    border-color :#ccc
    z-index :2
.wrap
   box-sizing :border-box
   height :$headerHeight
   background-color :$bgColor
   padding :.1rem
   .ip
     width :100%
     height :100%
     background-color :white
     color :#999
     border-radius :.08rem
     text-align :center
     box-sizing :border-box
     padding :0 .08rem
     controlEllipsis()
.search-content
   position :absolute
   top: 1.68rem
   left:0
   bottom :0
   right :0
   overflow:hidden
   background:#eee
   z-index :1
   .search-item
     padding-left:.2rem
     line-height:.72rem
     background-color :white
</style>
