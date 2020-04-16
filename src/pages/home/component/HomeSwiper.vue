<template>
  <div class="wrap">
    <swiper :options="swiperOptions">
    <swiper-slide  v-for="item of imgList" :key="item.id">
        <img class="img-content" :src="item.path" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>

export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      },
      imgList: [
        {
          id: '1',
          path: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
        },
        {
          id: '2',
          path: 'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg'
        },
        {
          id: '3',
          path: 'http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
 .wrapper >>> .swiper-pagination-bullet-active
   background: #fff
 .wrap
  text-align :center
  width :100%
  height :0
  padding-bottom :31.25%
  background: #eee
  .img-content
    width :100%
</style>
