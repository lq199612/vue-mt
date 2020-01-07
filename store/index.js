import Vue from 'vue'
import Vuex from 'vuex'
import geo from './module/geo'
import Axios from 'axios'
import axios from '../server/interface/utils/axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    modules: {
        geo
    },
    actions: {
        async nuxtServerInit({ commit }, { req, app }) {
            let {status ,data: {province,city}} = await axios.get('/geo/getPosition')
            commit('geo/setPosition',{province,city})
        }
    }
})

export default store