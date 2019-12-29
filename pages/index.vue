<!--  -->
<template lang='pug'>
  div.page-index
    el-row()
      el-col(:span='5') 
        Emenu
      el-col(:span='5') 2
    el-row()
      el-col(:span='24') 3
</template>

<script>
import Emenu from "@/components/index/menu";
export default {
  components: {
    Emenu
  }
};
</script>

<style lang='scss' scoped>
// @import '@/assets/css/index/index.scss'
</style>