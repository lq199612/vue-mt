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
            span(v-for='i,idx in item.child' :key='idx') {{i}}
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      menu: [],
      // menu: [
      //   // {
      //   //   type: "food",
      //   //   title: "美食",
      //   //   id: 0,
      //   //   children: [
      //   //     {
      //   //       title: "美食",
      //   //       data: ["代金券", "甜品印品", "火锅", "自助餐", "小吃快餐",'侯杨波']
      //   //     }
      //   //   ]
      //   // },
      // ],
      kind: ""
    };
  },
  computed: {
    curDetail() {
      let res;
      let rlt = this.menu.some(d => {
        res = d.children || {};
        return d.type == this.kind;
      });
      if (rlt) {
        return res;
      } else {
        return [];
      }
      // return [];
    }
  },
  async mounted() {
    self = this;
    let {
      stataus,
      data: { menu: menu1 }
    } = await Axios.get("/geo/getMenu");
    menu1.forEach(d => {
      self.menu.push({
        type: d.type,
        title: d.name,
        children: d.child
      });
    });
  },
  // async asyncData({ params }) {
  //   let {
  //     status,
  //     data: { menu: menu1 }
  //   } = await Axios.get("/geo/menu");
  //   console.log(menu1);
  //   let menu2 = menu1.map(d => {
  //     return {
  //       type: d.type,
  //       title: d.name,
  //       children: d.child
  //     };
  //   });
  //   console.log(menu2);
  //   return {
  //     menu:menu2
  //   };
  // },
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
      clearTimeout(this.timer);
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
