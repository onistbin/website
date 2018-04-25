<template>
    <div class="wrap">
        <div>
            <input type="text" :placeholder="formConf.nickname" v-model="nickname" v-if="buttonType==='REGISTER'">
            <input type="text" :placeholder="formConf.name" v-model="username">
            <input type="password" :placeholder="formConf.password" v-model="password">
            <p class="tips" v-if="tips.text">{{tips.text}}</p>
            <button v-on:click="submit">{{formConf.button}}</button>
            <span v-on:click="toLogin">{{formConf.tips}}</span>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Login',
    data () {
        return {
            buttonType: 'LOGIN',
            username: '',
            nickname: '',
            password: ''
        }
    },
    computed: {
        ...mapState({
            formConf: state => state.LoginRegister.formConf,
            tips: state => state.LoginRegister.tips
        })
    },
    methods: {
        ...mapActions([]),
        toLogin () {
            let buttonType = this.buttonType
            this.buttonType = buttonType === 'LOGIN' ? 'REGISTER' : 'LOGIN'
            this.$store.commit(this.buttonType)
        },
        submit () {
            this.$store.dispatch('SUBMIT_' + this.buttonType, {
                username: this.username,
                password: this.password
            })
        },
        getUserInfo () {
            this.$store.dispatch('getUserInfo')
        }
    },
    mounted () {
        this.$store.commit(this.buttonType)
    }
}
</script>

<style>
    .wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 600px;
    }
    input {
        display: block;
        width: 250px;
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        margin-bottom:  10px;
        outline: none;
        border: 1px solid #888;
        padding: 10px;
        box-sizing: border-box;
    }
    button {
        display: block;
        width: 250px;
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        border: none;
        background-color: #409eff;
        color: #fff;
        font-size: 16px;
        margin-bottom: 5px;
    }
    span {
        cursor: pointer;
    }
    span:hover {
        color: #409eff;
    }
    .tips {
        margin: 0 auto 10px;
        height: 12px;
        color: red;
        font-size: 12px;
        text-align: left;
    }
</style>
