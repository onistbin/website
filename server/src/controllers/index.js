import md5 from 'md5'
import moment from 'moment'
import CODES from '../codes'
import models from '../models'
import jsonwebtoken from 'jsonwebtoken'
import { secret } from '../conf/config'

let setCookie = function (ctx, key, val) {
    ctx.cookies.set(
        key,
        val,
        {
            domain: 'localhost',
            path: '/',
            expires: new Date(new Date().getTime() + 1000 * 60 * 60 * 12),
            httpOnly: false,
            overwrite: false
        }
    );
};

let signUpPost = async (ctx) => {
    
    let user = {
        username: ctx.request.body.username,
        password: ctx.request.body.password
    };
    let result = await models.findDataByName(user.username);

    if (result.length) {
        ctx.body = {
            errno: 0,
            data: CODES.FAIL_USER_NAME_IS_EXIST
        };
    } else {
        let insertData = [
            user.username, 
            md5(user.password),
            moment().format('YYYY-MM-DD HH:mm:ss')
        ];

        let insertRlt = await models.insertData(insertData);

        if (insertRlt.insertId) {
            //注册成功
           ctx.body = {
               errno: 0,
               data: CODES.SIGNUP_SUCCESS
           };
       }
    }
};

let signInPost = async (ctx) => {

    let { username, password } = ctx.request.body;

    let result = await models.findDataByName(username);

    if (result[0] && username === result[0]['username'] && md5(password) === result[0]['password']) {
        ctx.status = 200;
        const userInfo = {
            username,
            uid: result[0]['id']
        };
        const token = jsonwebtoken.sign({
            data: username,
            exp: new Date().getTime() + 1000 * 60 * 60 * 12
        }, secret);

        setCookie(ctx, 'token', token);
        ctx.body = {
            errno: 0,
            data: {
                message: '登录成功',
                userInfo,
                token
            }
        };
    } else {
        ctx.body = {
            errno: 1,
            data: CODES.FAIL_USER_NAME_OR_PASSWORD_ERROR
        };
    }
};

let signOutPost = async (ctx) => {
    let postData = ctx.request.body;
    let { uid } = postData;
    let data = await models.findDataById(uid).then((result) => {
        let res = result;
        if (uid == res[0]['id']) {
            ctx.session = null;
            ctx.body = {
                errno: 0,
                data: CODES.SIGNOUT_SUCCESS
            };
        } else {
            ctx.body = {
                errno: 1,
                data: CODES.ERROR_SYS
            };
        } 
    });
};

// get请求通过 ctx.query 获取请求的参数
let getUserInfo = async (ctx) => {
    let data = await models.getUserInfo();
    ctx.body = data;
};

let defaultMethod = async (ctx) => {

};


export default {
    signUpPost,
    signInPost,
    signOutPost,
    getUserInfo,
    defaultMethod
};