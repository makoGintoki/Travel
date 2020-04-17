<template>
    <div class="icons">
        <swiper :options="swiperOptions" >
            <swiper-slide v-for="(page,index) of pageCal"  :key="index">
              <div class="icon" v-for="item of page" :key="item.id">
                <div class="icon-img">
                 <img class="icon-img-content" :src="item.imgUrl" >
                </div>
                <p class="icon-desc">{{item.desc}}</p>
              </div>
            </swiper-slide>
       </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: ['list'],
  data: function () {
    return {
      swiperOptions: {
        autoplay: false
      }
    }
  },
  computed: {
    pageCal: function () {
      const pages = []
      this.list.forEach(function (item, index) {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/textcontrol.styl';
    .icons >>> .swiper-container
     height :0
     padding-bottom :50%
    .icons
     margin-top :.2rem
     width :100%
     .icon
       width :25%
       padding-bottom :25%
       height :0
       overflow :hidden
       float :left
       position :relative
       .icon-img
        width :100%
        position :absolute
        top:0
        left :0
        right :0
        bottom :25%
        .icon-img-content
         display :block
         margin :0 auto
         height :100%
       .icon-desc
        position :absolute
        bottom :0
        left :0
        right :0
        text-align :center
        color :$darkText
        height :.44rem
        line-height :.44rem
        controlEllipsis()
</style>
