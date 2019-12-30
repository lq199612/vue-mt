<!--  -->
<template lang='pug'>
  div.m-life
    el-row
        el-col(:span=14)
            Slider
        el-col(:span=4)
            div.m-life-pic
        el-col(:span=6)
            div.m-life-login
                h4
                    img(src='https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg')
                p.m-life-login-name Hi! 你好
                p
                    nuxt-link(to='/regist')
                        el-button(round  size='medium') 注册
                p
                    nuxt-link(to='/login')
                        el-button(round  size='medium') 立即登录

    el-row  
        el-col(:span=7)
            div.m-life-hotel
        el-col(:span=7)
            div.m-life-music
        el-col(:span=4)
            div.m-life-coop
        el-col(:span=6)
            div.m-life-downapp
                img(src='https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png')
                p 美图app手机版
                h4  
                    span.red 1元起
                    em.gary 吃喝玩乐
</template>

<script>
import Slider from './slider'
export default {
    components:{
        Slider,
    }
  }
</script>

<style lang='scss' scoped>
@import '@/assets/css/index/life.scss';
</style>
