import axios from 'axios'
import util from '../util'

// http request 拦截器
axios.interceptors.request.use(
    config => {
        let token = util.getCookie('token')
        if (token) {
            // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

export const api = axios
