import Koa from 'koa'
// const Koa = require('koa')
// const consola = require('consola')
import consola from 'consola'
import { Nuxt, Builder } from 'nuxt'
// import cityInterferce from './interferce/city'
import moogoose from 'mongoose'
// post参数获取
import bodyParser from 'koa-bodyparser'
// session cookie操作相关
import session from 'koa-generic-session'
import Redis from 'koa-redis'
//  json格式美化 格式化
import json from 'koa-json'
import dbConfig from './dbs/config'
import passport from './interface/utils/passport'

// 导入路由
import users from './interface/users'
import geo from './interface/geo'
import search from './interface/search'
import product from  './interface/products'

// import user
const app = new Koa()

// 配置moogdb & redis

// 与session有关
app.keys = ['mt', 'keyskeys']
app.proxy = true
// session配置
app.use(session({
  key: 'mt',   // 浏览器键名
  prefix: 'mt:uid',  // 数据库键的前缀
  store: new Redis()
}))

app.use(json())
// post 处理
app.use(bodyParser({
  extendTypes: ['json', 'form', 'text']
}))

// 连接数据库
moogoose.connect(dbConfig.dbs, {
  useNewUrlParser: true,
})
app.use(passport.initialize())
app.use(passport.session())




// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // 路由配置

  // app.use(cityInterferce.routes()).use(cityInterferce.allowedMethods())
  app.use(users.routes()).use(users.allowedMethods())
  app.use(geo.routes()).use(geo.allowedMethods())
  app.use(search.routes()).use(search.allowedMethods())
  app.use(product.routes()).use(product.allowedMethods())


  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })


  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}


start()
