<template lang='pug'>
div.top
  el-container.layout-default
    el-header(height='197px')
      MyHeader
    el-main
      nuxt
    el-footer
      Footer
</template>

<script>
import MyHeader from "@/components/public/header/index";
import Footer from '@/components/public/footer/index'

export default {
  components: {
    MyHeader,
    Footer
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
    background:white;
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
    background-color:white;
}
</style>
