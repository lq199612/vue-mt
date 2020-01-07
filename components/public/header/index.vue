<template lang='pug'>
  div.m-header
    el-row
        el-col
            Topbar
    el-row
        el-col()
            Searchbar
</template>

<script>
import Topbar from './topbar/topbar'
import Searchbar from './searchbar/searchbar'
export default {
    components:{
        Topbar,
        Searchbar
    }
}
</script>

<style lang='scss' scoped>
@import '@/assets/css/public/header/index.scss';
@import '@/assets/css/public/header/search.scss';
@import '@/assets/css/public/header/topbar.scss';
.m-header{
  @at-root .layout-default{
    .el-header{
      .m-header {
        width: 100%;
      }
    }
  }
  >.el-row:nth-child(1){
    width: 1190px;
    margin: 0 auto;
    z-index: 9999;
    height: 40px;
    line-height: 40px;
  }
  >.el-row:nth-child(2){
    background: #fff;
    height: 100px;
    .search-panel{
      width: 1190px;
      margin: 0 auto;
    }
  }
  >.el-main {
    overflow: unset;
  }
}
</style>
