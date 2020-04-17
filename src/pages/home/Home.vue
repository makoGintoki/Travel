<template>
   <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <recommend :list="recommendList"></recommend>
    <weekend :list="weekendList"></weekend>
   </div>
</template>

<script>
import axios from 'axios'
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
  },
  data: function () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    sendRequest: function () {
      var that = this
      axios.get('/api/index.json')
        .then(function (res) {
          // console.log("响应1" + res.data.ret)
          that.getAllData(res)
        })
    },
    getAllData: function (res) {  
      // console.log('响应2' + res.data)
      if (res.data.ret && res.data.data){
        const data = res.data.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted: function(){
    this.sendRequest()
  }
}

</script>

<style>

</style>
