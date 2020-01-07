import Router from 'koa-router'
import axios from './utils/axios'

let router = new Router({
    prefix: '/search'
})

router.get('/top', async ctx => {
    let { status, data: { code, top } } = await axios.get('http://cp-tools.cn/search/top', {
        params: {
            input: ctx.query.input,
            city: ctx.query.city
        }
    })
    if (status == 200 && code == 0) {
        ctx.body = {
            top
        }
    } else {
        ctx.body = {
            top: []
        }
    }
})

router.get('/hotPlace', async ctx => {
    let city = ctx.store ? ctx.store.geo.position.city : ctx.query.city
    let { status, data: { code, result } } = await axios.get('http://cp-tools.cn/search/hotPlace', {
        params: {
            city: city.replace('市', '')
        }
    })
    ctx.body = {
        result: (status == 200 && code == 0) ? result : []
    }
})

router.get('/resultsByKeywords', async ctx => {
    let { status, data: { pois } } = await axios.get('http://cp-tools.cn/search/resultsByKeywords', {
        params: {
            keyword: ctx.query.keyword,
            city: ctx.query.city.replace('市','')
        }
    })
    ctx.body = {
        pois: status == 200 ? pois: []
    }
})
export default router