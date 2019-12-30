<!--  -->
<template lang='pug'>
    div
        div.m-istyle
            dl
                dt 有格调
                dd(v-for='item, idx in dataList' :key='idx' @mouseenter='handleMouseEnter') {{ item.name }}
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
export default {
  data() {
    return {
      dataList: [
        {
          name: "约会聚餐",
          children: [
            {
              imgUrl:
                "//p0.meituan.net/msmerchant/1f5b280c340fb5d74080ffaebb6ec76476229.jpg@331w_187h_1e_1c",
              title: "杨记兴·臭鳜鱼（王府井店）",
              pos: "经典四人餐，提供免费WiFi",
              price: 554
            },
            {
              imgUrl:
                "//p0.meituan.net/msmerchant/1f5b280c340fb5d74080ffaebb6ec76476229.jpg@331w_187h_1e_1c",
              title: "杨记兴·臭鳜鱼（王府井店）",
              pos: "经典四人餐，提供免费WiFi",
              price: 554
            },
            {
              imgUrl:
                "//p0.meituan.net/msmerchant/1f5b280c340fb5d74080ffaebb6ec76476229.jpg@331w_187h_1e_1c",
              title: "杨记兴·臭鳜鱼（王府井店）",
              pos: "经典四人餐，提供免费WiFi",
              price: 554
            },
            {
              imgUrl:
                "//p0.meituan.net/msmerchant/1f5b280c340fb5d74080ffaebb6ec76476229.jpg@331w_187h_1e_1c",
              title: "杨记兴·臭鳜鱼（王府井店）",
              pos: "经典四人餐，提供免费WiFi",
              price: 554
            },
            {
              imgUrl:
                "//p0.meituan.net/msmerchant/1f5b280c340fb5d74080ffaebb6ec76476229.jpg@331w_187h_1e_1c",
              title: "杨记兴·臭鳜鱼（王府井店）",
              pos: "经典四人餐，提供免费WiFi",
              price: 554
            }
          ]
        },
        {
          name: "丽人SPA"
        },
        {
          name: "电影演出"
        },
        {
          name: "品质出游"
        }
      ],
      text: "约会聚餐"
    };
  },
  methods: {
    handleMouseEnter(e) {
      this.text = e.target.innerText;
    }
  },
  computed: {
    curItem() {
      let curItem = [];
      this.dataList.some(d=>{
          curItem = d.children
          return d.name == this.text
      })
      return curItem;
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index/artistic.scss";
</style>
