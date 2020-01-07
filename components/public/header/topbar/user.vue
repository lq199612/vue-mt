<!--  -->
<template lang='pug'>
  div.m-user
    template(v-if='user') 欢迎您！,
        span.username {{user}}
        nuxt-link(to="/exit") [退出]
    template(v-else)
        nuxt-link.login(to='/login' ) 立即登录      
        nuxt-link.regist(to='/regist') 注册
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return {
            user:''
        }
    },
    async mounted(){
        let {status,data:{user}} = await Axios.get('/users/getuser')
        this.user = user
    } 
}
</script>

<style lang='scss' scoped>

</style>
/*  */