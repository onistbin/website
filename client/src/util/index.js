const getCookie = function (name) {
    let arr = []
    let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    if (document.cookie.match(reg) && document.cookie.match(reg).length > 2) {
        arr = document.cookie.match(reg)
        return (arr[2])
    } else {
        return ''
    }
}

const setCookie = function (cookieName, value, expiredays) {
    let exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = cookieName + '=' + escape(value) + ((expiredays == null) ? '' : 'expires=' + exdate.toGMTString())
}

const delCookie = function (name) {
    let exp = new Date()
    exp.setTime(exp.getTime() - 1)
    let cval = getCookie(name)
    if (cval != null) {
        document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
    }
}

export default {
    getCookie,
    setCookie,
    delCookie
}
