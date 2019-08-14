import axios from 'axios'
//响应拦截
axios.defaults.baseURL ='http://localhost:5000'
axios.interceptors.response.use(res=>{
    return res.data
},err=>{
    return Promise.reject(err)
})
export default axios