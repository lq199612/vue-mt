import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fa482764 = () => interopDefault(import('..\\pages\\changeCity.vue' /* webpackChunkName: "pages_changeCity" */))
const _20f7ea1e = () => interopDefault(import('..\\pages\\exit.vue' /* webpackChunkName: "pages_exit" */))
const _2275a2b4 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _55eefab7 = () => interopDefault(import('..\\pages\\products.vue' /* webpackChunkName: "pages_products" */))
const _35a22aee = () => interopDefault(import('..\\pages\\regist.vue' /* webpackChunkName: "pages_regist" */))
const _3237f780 = () => interopDefault(import('..\\pages\\text.vue' /* webpackChunkName: "pages_text" */))
const _251d8b8f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/changeCity",
    component: _fa482764,
    name: "changeCity"
  }, {
    path: "/exit",
    component: _20f7ea1e,
    name: "exit"
  }, {
    path: "/login",
    component: _2275a2b4,
    name: "login"
  }, {
    path: "/products",
    component: _55eefab7,
    name: "products"
  }, {
    path: "/regist",
    component: _35a22aee,
    name: "regist"
  }, {
    path: "/text",
    component: _3237f780,
    name: "text"
  }, {
    path: "/",
    component: _251d8b8f,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
