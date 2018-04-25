import Vue from 'vue'
import Vuex from 'vuex'
import LoginRegister from './modules/login_register.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        LoginRegister
    },
    strict: debug
})
