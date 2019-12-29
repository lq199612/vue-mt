<template lang='pug'>
    el-row.m-header(:gutter='0')
        el-col(:span='5')
            Geo
        el-col(:span='6')
            User
        el-col(:span='12')
            Nav                       
</template>

<script>
import Geo from "./geo"
import User from './user'
import Nav from './nav'
export default {
  components: {
    Geo,
    User,
    Nav
  }
};
</script>

<style lang='scss' scoped>
// @import "@/assets/css/public/layout.scss";

</style>
