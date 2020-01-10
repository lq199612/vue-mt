<!--  -->
<template lang='pug'>
  div.m-crumbs
    el-breadcrumb(separator='>')
      el-breadcrumb-item(to='/') 首页
      el-breadcrumb-item {{$store.state.geo.position.city}}
      el-breadcrumb-item {{keyWord}}
</template>

<script>
export default {
    props:{
        keyWord:{
            type:String,
            required: true
        },

    }
  }
</script>

<style lang='scss' scoped>
.m-crumbs{
  margin: 10px 0;
}
</style>
