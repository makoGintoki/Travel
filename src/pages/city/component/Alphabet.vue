<template>
    <ul class="container" >
        <li class="item"
            v-for="item of letters"
            :key="item"
            :ref="item"
            @click="handleClick"
            @touchstart="TouchStart"
            @touchmove="TouchMove"
            @touchend="TouchEnd">
            {{item}}
        </li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data: function () {
    return {
      touchState: false,
      startY: 222,
      timer: null
    }
  },
  computed: {
    letters: function () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleClick: function (e) {
      this.$emit('transfer', e.target.innerText)
    },
    TouchStart: function () {
      this.touchState = true
    },
    TouchMove: function (e) {
      const _this = this
      if (this.touchState) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(function () {
          const touchY = e.touches[0].clientY
          const index = Math.floor((touchY - 222) / 20)
          _this.$emit('transfer', _this.letters[index])
        }, 16)
      }
    },
    TouchEnd: function () {
      this.touchState = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .container
      position :absolute
      right :0
      top:2.22rem
      width :.4rem
      display :flex
      flex-direction :column
      justify-content :center
      .item
        line-height :.4rem
        color :$bgColor
        text-align :center
</style>
