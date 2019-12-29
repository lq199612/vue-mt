<!--  -->
<template lang='pug'>
  div.m-nav
    ul.nav
        li.list
            nuxt-link(to='/my') 我的美团 
            dl
                dd
                    nuxt-link(to='/order') 我的订单
                dd
                    nuxt-link(to='/morder') 我的收藏
                dd
                    nuxt-link(to='/m') 抵用卷
                dd   
                    nuxt-link(to='/my') 账户设置
        li.list
            nuxt-link(to='/order') 手机app
            dl
                dd
                    nuxt-link(to='/order') 我的订单
                dd
                    nuxt-link(to='/morder') 我的收藏
                dd
                    nuxt-link(to='/m') 抵用卷
                dd   
                    nuxt-link(to='/my') 账户设置            
        li.list.bd
            nuxt-link(to='/center') 商家中心 
            dl
                dd
                    nuxt-link(to='/userCenter') 登录商家中心
                dd
                    nuxt-link(to='/morder') 我先合作
                dd
                    nuxt-link(to='/m') 免费手机开店
                dd   
                    nuxt-link(to='/my') 免费商家开票             
        li.list.site
            nuxt-link(to='/site') 网站导航 
            div.subContainer
                dl.hotel  
                    dd
                dl.food
                    dd
                dl.movie
                    dd
                dl.app
                    dd
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
@import './nav.scss'
</style>
