<!--  -->
<template lang='pug'>
  div.slide
    el-carousel(type='card')
      el-carousel-item(v-for='item,idx in list' :key='idx')
        img(:src='item.img')

</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          url: "#abc",
          img:
            "https://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg"
        },
        {
          url: "#bsbsb",
          img:
            "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg"
        },
        {
          url: "#sjfkajfj",
          img:
            "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg"
        },
        {
          url: "#sjfkajfja",
          img:
            "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg"
        },
        {
          url: "#kjljj",
          img:
            "http://p1.meituan.net/codeman/bb0abb3435a60c44d87e90ed4237b61039329.jpg"
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.slide {
  height: 240px;
  margin: 10px;

  img {
    height: 220px;
  }
}
</style>
