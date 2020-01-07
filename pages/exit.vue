<!--  -->
<template lang='pug'>
  div
</template>

<script>
import Axios from 'axios'
export default {
    layout:'blank',
    middleware: async (ctx)=>{
      let {status ,data} = await Axios.get('/users/exit')
      if(status == 200 && data.code == 0){
        window.location.href = '/'
      }
    }
  }
</script>

<style lang='scss' scoped>

</style>
