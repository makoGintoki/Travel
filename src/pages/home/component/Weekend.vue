<template>
    <div >
        <div class="title">周末去哪儿</div>
        <ul>
           <li class="border-bottom" 
               v-for="item of weekendList" 
               :key="item.id">
               <div class="img-wrap">
                    <img class="item-img"  :src="item.imgUrl" >
               </div>
                <div class="item-info">
                    <div class="item-title">
                       {{item.title}}
                    </div>
                    <div class="item-desc">
                        {{item.desc}}
                    </div>
                </div>
           </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Weekend',
  data: function () {
    return {
      weekendList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
          title: '故宫啦啦啦',
          desc: '我是描述哈哈哈哈哈哈哈哈哈哈哈哈哈啊顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶哈哈哈哈啊'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
          title: '故宫啦啦啦',
          desc: '我是描述哈哈哈哈哈哈哈哈哈哈哈哈哈啊顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶哈哈哈哈啊'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
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
     line-height :.8rem
     text-indent :.2rem
   .img-wrap
       width :100%
       height :0
       padding-bottom :32.5%
       overflow :hidden;
    .item-img
        width :100%
    .item-info
        padding :.1rem
        min-width :0
        text-align :center
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
