<!--  -->
<template lang='pug'>
  div.m-geo
    i.el-icon-location  {{ $store.state.geo.position.city }}
    nuxt-link.changecity(to='/changecity')   切换城市 [香河 天津]
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
</style>

