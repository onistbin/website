import * as loginRegister from '../../service/login_register'
// import util from '../../util'

// initial state
const state = {
    token: null,
    formConf: {},
    tips: {}
}

// getters
const getters = {
    formConf: state => state.formConf
}

// actions
const actions = {
    async SUBMIT_LOGIN ({commit}, postData) {
        let data = await loginRegister.login(postData)
        commit('loginRegisterStatus', data)
    },
    async SUBMIT_REGISTER ({commit}, postData) {
        let data = await loginRegister.register(postData)
        commit('loginRegisterStatus', data)
    },
    async getUserInfo ({commit}) {
        let data = await loginRegister.getUserInfo()
        console.log(data)
    }
}

// mutations
const mutations = {
    loginRegisterStatus (state, data) {
        // util.setCookie('token', data.token)
        state.tips = {
            text: data.message
        }
    },
    LOGIN (state) {
        state.formConf = {
            name: '请输入用户名',
            nickname: '请输入昵称',
            password: '请输入密码',
            button: '登陆',
            tips: '没有账号？马上注册'
        }
    },
    REGISTER (state) {
        state.formConf = {
            name: '请输入用户名',
            nickname: '请输入昵称',
            password: '请输入密码',
            button: '注册',
            tips: '已有账号？马上登录'
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
