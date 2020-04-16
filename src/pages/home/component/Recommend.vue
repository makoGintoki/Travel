<template>
    <div >
        <div class="title">热销推荐</div>
        <ul>
           <li class="item border-bottom" v-for="item of RecommendList" :key="item.id">
                <img class="item-img"  :src="item.imgUrl" >
                <div class="item-info">
                    <div class="item-title">
                       {{item.title}}
                    </div>
                    <div class="item-desc">
                        {{item.desc}}
                    </div>
                    <button class="item-btn">查看详情</button>
                </div>
           </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Recommend',
  data: function () {
    return {
      RecommendList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
          title: '故宫啦啦啦',
          desc: '我是描述哈哈哈哈哈哈哈哈哈哈哈哈哈啊顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶哈哈哈哈啊'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
          title: '故宫啦啦啦',
          desc: '我是描述哈哈哈哈哈哈哈哈哈哈哈哈哈啊顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶哈哈哈哈啊'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
          title: '故宫啦啦啦',
          desc: '我是描述哈哈哈哈哈哈哈哈哈哈哈哈哈啊顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶哈哈哈哈啊'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl';
 @import '~styles/textcontrol.styl';
 .title
     background-color :#eee
     text-indent :.2rem
     line-height :.8rem
     margin-top .2rem
 .item
   display :flex
   width :100%
   height :2rem
   .item-img
       width :1.8rem
       height :1.8rem
       padding :.1rem
   .item-info
       flex :1
       padding :.1rem
       min-width :0
       .item-title
           line-height :.54rem
           font-size :.4rem
           color :#000
           controlEllipsis()
       .item-desc
           line-height :.4rem
           height :.4rem
           font-size :.32rem
           color :$dartText
           controlEllipsis()
       .item-btn
           background-color :#ff9300
           padding :.1rem
           color :white
           border-radius:.1rem
           margin-top :.2rem
</style>
