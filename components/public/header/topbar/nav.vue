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
                    dt 酒店旅游
                    dd 国际机票
                    dd 国际机票
                    dd 国际机票
                    dd 国际机票
                    dd 国际机票
                    dd 国际机票
                    dd 国际机票
                    dd 国际机票
                    dd 国际机票
                    dd 国际机票
                    dd 国际机票
                    dd 国际机票
                dl.food
                    dt 吃美食
                    dd 烤鱼
                    dd 烧烤
                    dd 烤鱼
                    dd 烧烤
                    dd 烤鱼
                    dd 烧烤
                    dd 烤鱼
                    dd 烧烤
                dl.movie
                    dt 看电影
                    dd 热映电影
                    dd 热映电影
                    dd 热映电影
                    dd 热映电影
                    dd 热映电影
                    dd 热映电影
                dl.app
                    dt 手机应用
                    dd
                        a(href='#')
                            img(src='https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png')
                    dd
                        a(href='#')
                            img(src='https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png')   
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
@import './nav.scss'
</style>
