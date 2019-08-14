import axios from './index'
//轮播图接口
export let getbanner = ()=>{
   return axios.get('/sliders')
}
//列表页接口
export let getlist = (page,type)=>{
    return axios.get(`/list/${page}/${type}`)
}
//详情页接口  
export let gitdetails = (id)=>{
    return axios.get(`/details/${id}`)
}
//登录接口
export let postlogin = (username,password)=>{
    return axios.post('/login',{username,password})
}
//注册接口
export let postregister = (username,password)=>{
    return axios.post('./reg',{username,password})
}