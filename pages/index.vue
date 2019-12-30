<!--  -->
<template lang='pug'>
  div.page-index
    el-row()
      el-col(:span=5) 
        Emenu
      el-col(:span=19)
        Life
    el-row()
      el-col(:span=24)
        Artistic
</template>

<script>
import Emenu from "@/components/index/menu";
import Life from '@/components/index/life';
import Artistic from '@/components/index/artistic'
export default {
  components: {
    Emenu,
    Life,
    Artistic
  }
};
</script>

<style lang='scss' scoped>
// @import '@/assets/css/index/index.scss'
</style>