import {api} from './base'
export default {
    async login (postData) {
        let res = await api.post('/api/signin', postData)
        return res.data.data
    },
    async register (postData) {
        let res = await api.post('/api/signup', postData)
        return res.data
    },
    async getUserInfo () {
        let res = await api.get('/api/getUser')
        return res.data
    }
}
