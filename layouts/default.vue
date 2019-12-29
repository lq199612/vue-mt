<template lang='pug'>
  el-container.layout-default
    el-header
      MyHeader
    el-main
      div
        nuxt
    el-footer Footer
</template>

<script>
import MyHeader from "@/components/public/header/index";
export default {
  components: {
    MyHeader,
  }
};
</script>
<style lang='scss'>
// @import "@/assets/css/public/layout.scss";
.el-header,.el-main,.el-footer{
    width: 1190px;
    margin: 0 auto;
    padding: 0;
    overflow: unset;
}
.el-header{
    background: rgb(212, 244, 248);
    color: #000000;
    width: 100%;
    font-size: 12px;
    .m-header{
        width: 1190px;
        margin: 0 auto;
    }
}

.layout-default{
    -webkit-font-smoothing: antialiased;
    font-family: "-apple-system",
    BlinkMacSystemFont,
    Roboto,
    "Helvetica Neue",
    "MIcrosoft YaHei",
    sans-serif !important;
    background-color: #F8F8F8;
}
</style>
