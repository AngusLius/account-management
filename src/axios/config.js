import axios from 'axios'

//拦截响应
axios.interceptors.response.use(res => {
    let data = res.data
    if (data.statusCode === 302) {
        window.location.href = '/login'
    }
    return res
}, err => {
    console.log(err)
})