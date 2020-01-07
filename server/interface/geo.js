import Router from 'koa-router'
import axios from './utils/axios'
import Province from '../dbs/models/provinces'

let router = new Router({
    prefix: '/geo'
})

router.get('/getPosition', async (ctx, next) => {
    let { status, data: { province, city } } = await axios.get('http://cp-tools.cn/geo/getPosition')
    if (status == 200) {
        ctx.body = {
            province,
            city
        }
    } else {
        ctx.body = {
            province: '',
            city: ''
        }
    }
})

// 接口获取省份数据
router.get('/province', async ctx => {
    let { status, data: { province } } = await axios.get('http://cp-tools.cn/geo/province')
    if (status == 200) {
        ctx.body = {
            province
        }
    } else {
        ctx.body = {
            province: []
        }
    }
}
)

// 本地数据库获取省份数据
router.get('/getAllProvinces', async ctx => {
    let provinces = await Province.find()
    ctx.body = {
        province: provinces.map(d => {
            return {
                id: d.id,
                value: d.value
            }
        })
    }
})

router.get('/getMenu', async ctx => {
    let { status, data: { menu } } = await axios.get('http://cp-tools.cn/geo/menu')
    if (status == 200) {
        ctx.body = {
            menu
        }
    } else {
        ctx.body = {
            menu: []
        }
    }
}
)

router.get('/getCity',async ctx=>{
    let {status, data:{code,city}} = await axios('http://cp-tools.cn/geo/city')
    ctx.body = {
        city
    }
})

router.get('/getHotCity',async ctx=>{
    let {status, data:{hots}} =await axios.get('http://cp-tools.cn/geo/hotCity')
    ctx.body = {
        hots: status == 200? hots:[]
    }
})

export default router