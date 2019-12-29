<!--  -->
<template lang='pug'>
  div.m-menu
    dl.nav(@mouseleave='handlemouseleave')
        dt 全部分类
        dd(v-for='item,idx in menu' :key='idx' @mouseenter='handlemouseenter') 
            i(:class='item.type') {{item.title}}
            span.arrow       
    div.detail(v-show='curDetail.length' @mouseenter='senter' @mouseleave='sout') 
        div(v-for='item,idx in curDetail' :key='idx')
            h4 {{item.title}}
            span(v-for='i,idx in item.data' :key='idx') {{i}}
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          type: "food",
          title: "美食",
          id: 0,
          children: [
            {
              title: "美食",
              data: ["代金券", "甜品印品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        },
        {
          type: "takeout",
          title: "外卖",
          id: 1,
          children: [
            {
              title: "外卖",
              data: ["代金券", "甜品印品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        },
        {
          type: "hotel",
          title: "酒店",
          id: 2,
          children: [
            {
              title: "酒店",
              data: ["代金券", "甜品印品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        },
        {
          type: "homestay",
          title: "房装",
          id: 3,
          children: [
            {
              title: "房装",
              data: ["代金券", "甜品印品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        },
        {
          type: "movie",
          title: "电影",
          id: 4,
          children: [
            {
              title: "美食",
              data: ["代金券", "甜品印品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        },
        { type: "ktv", title: "KTV", id: 5 },
        { type: "life", title: "生活", id: 6 },
        { type: "hair", title: "发型", id: 7 },
        { type: "marry", title: "婚嫁", id: 8 }
      ],
      kind: ""
    };
  },
  computed: {
    curDetail() {
      let res;
      let rlt = this.menu.some(d => {
        res = d.children || [];
        return d.type == this.kind;
      });
      if (rlt) {
        return res;
      } else {
        return [];
      }
    }
  },
  methods: {
    handlemouseleave(e) {
      this.timer = setTimeout(() => {
        this.kind = "";
      }, 150);
    },
    handlemouseenter(e) {
      this.kind = e.target.querySelector("i").className;
    },
    senter() {
        clearTimeout(this.timer)
    },
    sout() {
        this.kind = "";
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index/index.scss";
</style>
