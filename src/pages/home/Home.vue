<template>
   <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <recommend></recommend>
    <weekend></weekend>
   </div>
</template>

<script>
import HomeHeader from './component/HomeHeader'
import HomeSwiper from './component/HomeSwiper'
import HomeIcons from './component/HomeIcons'
import Recommend from './component/Recommend'
import Weekend from './component/Weekend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    Recommend,
    Weekend
  }
}
</script>

<style>

</style>
