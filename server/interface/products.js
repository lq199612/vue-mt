import Router from 'koa-router'
import axios from './utils/axios'

let router = new Router({
    prefix: '/products'
})

router.get('/crumbs', async (ctx, next) => {
    let { status, data: { code, areas,types} } = await axios.get('http://cp-tools.cn/categroy/crumbs',{
        params:{
            city: ctx.query.city.replace('市','')
        }
    })
    if (status == 200 && code==0 ) {
        ctx.body = {
            areas,
            types
        }
    } else {
        ctx.body = {
            areas:[],
            types:[]
        }
    }
})


export default router