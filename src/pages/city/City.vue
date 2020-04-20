<template>
    <div >
        <city-header ></city-header>
        <search :cities="cities"></search>
        <list :cities="cities" :hot="hotCities" :letter="letter"></list>
        <alphabet :cities="cities" @transfer="clickWho"></alphabet>
    </div>
</template>

<script>
import CityHeader from '@/pages/city/component/CityHeader'
import CitySearch from '@/pages/city/component/Search'
import CityList from '@/pages/city/component/List'
import CityAlphabet from '@/pages/city/component/Alphabet'
import axios from 'axios'

export default {
  name: 'City',
  components: {
    CityHeader: CityHeader,
    Search: CitySearch,
    List: CityList,
    Alphabet: CityAlphabet
  },
  data: function () {
    return {
      cities: {},
      hotCities: [],
      letter: String
    }
  },
  mounted: function () {
    this.sendRequest()
  },
  methods: {
    sendRequest: function () {
      const that = this
      axios.get('/api/city.json')
        .then(function (res) {
          // console.log("1---"+JSON.stringify(res))
          that.getAllData(res.data)
        })
    },
    getAllData: function (res) {
      // console.log("2---"+JSON.stringify(res.data))
      if (res.ret && res.data) {
        this.cities = res.data.cities
        this.hotCities = res.data.hotCities
      }
    },
    clickWho: function (s) {
      // console.log("点解了"+s)
      this.letter = s
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
