<!--  -->
<template lang='pug'>
    div
        div.m-istyle
            dl
                dt 有格调
                dd(v-for='item, idx in dataList' :key='idx' :keyWord='item.keyWord' @mouseenter='handleMouseEnter') {{ item.name }}
            ul.ibody
                li(v-for='item,idx in curItem' :key='idx')
                    el-card(shadow="never" :body-style="{ padding: '0px' }")
                        img(:src='item.imgUrl')
                        div.el-card_body
                            ul.cbody
                                li.title {{ item.title }}
                                li.pos {{item.pos}}
                                li.price 
                                    em ￥{{item.price}}
                                    span /起
</template>

    

<script>
import Axios from "axios";
export default {
  data() {
    return {
      dataList: [
        {
          name: "约会聚餐",
          keyWord: "美食"
        },
        {
          name: "丽人SPA",
          keyWord: "丽人"
        },
        {
          name: "电影演出",
          keyWord: "电影"
        },
        {
          name: "品质出游",
          keyWord: "出游"
        }
      ],
      text: "美食",
      list:{}
    };
  },
  methods: {
    async handleMouseEnter(e) {
      this.text = e.target.getAttribute("keyWord");
      // this.dataList.some(d=>{
      //     curItem = d.children
      //     return d.name == this.text
      // })
      // return curItem;
      let {
        data: { pois }
      } = await Axios.get("/search/resultsByKeywords", {
        params: {
          keyword: this.text,
          city: this.$store.state.geo.position.city
        }
      });
      let l = []
      self = this;
      pois.forEach(d => {
        if (d.photos.length) {
          l.push({
            imgUrl: d.photos[0].url,
            title: d.name,
            pos: d.address,
            price: d.biz_ext.cost ? d.biz_ext.cost : 0
          });
        }
      });
      if(!self.list[this.test]){
        self.list[this.test] = l.slice(0,6)
      }
    }
  },
  async mounted() {
      let {
        data: { pois }
      } = await Axios.get("/search/resultsByKeywords", {
        params: {
          keyword: '美食',
          city: this.$store.state.geo.position.city
        }
      });
      let l = []
      self = this;
      pois.forEach(d => {
        if (d.photos.length) {
          l.push({
            imgUrl: d.photos[0].url,
            title: d.name,
            pos: d.address,
            price: d.biz_ext.cost ? d.biz_ext.cost : 0
          });
        }
      });
      if(!self.list[this.test]){
        self.list[this.test] = l.slice(0,6)
      }
  },
  computed:{
    curItem(){
      console.log('computed',this.text);
      return this.list[this.test]
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index/artistic.scss";
</style>
