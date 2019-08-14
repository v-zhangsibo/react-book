let express = require('express')
let app = express()
//npm install axios cors
let axios = require('axios')
let cors = require('cors')
let bodyParser = require('body-parser')
app.use(cors())//跨域中间件
app.use(bodyParser.json({extended:false}))
//npm install cors
let sliders = require('./sliders')
let list = require('./list')
//轮播图接口
app.get('/sliders', function (req, res) {
    res.json({
        code: 200,
        msg: '请求成功',
        data: sliders
    })
})
//列表接口  page表示页数，type表示类型  
//list/1/react 
app.get('/list/:page/:type', function (req, res) {
    let lessons = list;
    let { type, page } = req.params;
    page = parseInt(page);
    if (type != 'all') {
        //返回请求类型的数据
        lessons = list.filter((item) => {
            return item.type == type
        })
    }
    //根据页数返回数据 1页 0-5  2页  5-10
    let maxLen = page * 3;
    let resultlist = lessons.slice(maxLen - 3,maxLen)
    //是否有更多  hasMore
    let hasMore = maxLen >= lessons.length ? false : true
    res.json({
        code:200,
        msg:'请求成功',
        data:resultlist,
        hasMore
    })
})
//详情页接口
app.get('/details/:id',function(req,res){
        let {id} = req.params;
        let single = list.find(item=>item.id==id)||{}
        res.json({
            code:200,
            data:single,
            msg:'请求成功'
        })
})


let userlist=[{
    username:'lilei',
    password:'123'
}]

//登录接口
app.post('/login',function(req,res){
    // console.log(req.body)
    let {username,password} = req.body
    let user = userlist.find(item=>item.username==username)
    if(user&&password==user.password){
        res.json({
            code:200,
            msg:'登录成功',
            user:{
                username:user.username
            }
        })
    }else{
        res.json({
            code:201,
            msg:'登录失败,用户不存在或密码错误',
        })
    }
})

//注册接口
app.post('/reg',function(req,res){
    let {username,password} =req.body;
    let user =userlist.find(item=>item.username==username)
    if(user){
        res.json({
            code:203,
            msg:'用户已存在'
        })
    }else{
        userlist.push({username,password})
        console.log(userlist)
        res.json({
            code:200,
            msg:'注册成功',
            user:{
                username
            }
        })
    }
})
app.listen(5000)