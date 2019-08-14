## react项目流程
1. 创建react项目 npx create-react-app 项目名
2. 下载路由 npm install react-router-dom  路由官方文档 https://reacttraining.com/react-router/web/guides/philosophy 
3. npm start 启动    *了解一下PWA
4. 删除无用文件
---------------------------------------------------------------
5. 规划文件目录
 -mock 模拟数据
 -src
  -api       请求数据
  -component 公用组件
  -container 页面组件


  ---------------------------------------
## redux书写流程  
  -store     放redux
    -actions
      -home.js
    -reducers
      -home.js
      -index.js
    -index.js
    -action-types.js

  顺序：
  ## npm install redux
    1.action-types  定义事件名
    2.书写reducer  纯函数  一个页面一个reducer
    3.合并reducer
       combineReducers的作用，会把数据组成下面这种结构
        {home:{lesson:'all'},list:{}}
    4.创建store
       applyMiddleware  使用中间件
        npm install  redux-logger redux-thunk  redux-promise
    5.npm install react-redux
      路由通过Provider组件  并注入 store  
      测试用的：测试是否成功（是否拿到数据）  
      window._store.getState() {
        home:{lesson:'all'}
      }
    6. 写action  action里面都是函数
    7. 组件连接  redux  通过connect(高阶函数) 可以把state和action渲染到组件的props上面，这样我们
      就可以通过  this.props.somestate取值  或者通过this.props.fn 进行函数调用

      connect(mapStateRoProps,mapDispatchToProps)(Home)   返回的是一个新组件
      mapStateRoProps     映射state上的数据 到this.props
      mapDispatchToProps  映射action上的方法到this.props
    
##第一种写法
        let mapStateToprops = (state) => {两种写法
          return {
            lesson: state.home.lesson
          }
      }
        let mapDispatchToProps = (dispatch) => {两种写法
           return {
              updateLesson: (...arg) => dispatch(actions.updateLesson(...arg))
          }
      }
##第二种写法
        let mapStateToprops = (state) => {
          return {
            ...state.home
          }
        }
        let mapDispatchToProps = {
         ...actions
        }  

      connect 返回的是一个新的组件 mapDispatchToProps 把action里面的方法映射组件的props 上面 `` fn 就是this.prop.fn 调用this.props.fn 去派发dispath 触发action 就等于调用action上面你定义的方法 
      fn:(...args)=>{ dispatch(actions.updateLesson(...args)) } action:{ fn(){} }

      connect(mapStateToProps,mapDispatchToProps)(Home)

## redux流程 
      ** props mapDispatchToProps mapStateToProps 

      组件调用action(映射state和action上的方法到props,并且this.prop调用方法或者进行state取值) --> action(dispatch({type:type,lesson}))通过dispath派发事件 到reducer -->reducer来进行状态管理 （state的状态只能通过dispatch来派发进行改变）
      组件 = 你 ，你（想吃苹果） ->action 快递员（拿苹果事件）  ->reducer  仓库管理员（type：吃苹果事件） 给你苹果(返回苹果的状态)
  --------------------------------------  
  
  
  -index.js  入口文件
  -common    放样式

6. 配置路由
exact = {true}  严格匹配

7. 配置导航
8. 拆分导航
    {this.props.children}  路由集合
 * 写组件的时候保证组件功能的单一性
-npm run eject  暴露webpack配置   css|less
 * Switch组件 只匹配一个就不再匹配
 npm install bootstrap@3 @符后面是版本号
 <NavLink>可以用active添加激活的样式
  this.props.history.push('路径')   跳转
  
  this.props.match.params.id       取路由参数
  
  this.props.location.state  如果传入state参数的时候取值的方法 刷新会变为undefined  这个这个必须配合
  <Link to={{ pathname: `/detail/${item.id}`,state:item }}>详情</Link>

  智能组件  木偶组件
  木偶：只负责展示
  智能： 连redux
  容器组件的根组件，都是智能组件
  withRouter的作用:给没有路由的组件赋予路由的所有方法

在个人信息页面判断用户是否有登录，有的话显示个人信息，没有登录，显示登录按钮  在登录页登录成功之后 跳转到个人中心

实现promise.all  和  promise.race方法

权限认证：ProtectedRouter

### 一个网页的形成过程
### web前端优化
1. 压缩代码
2. 压缩图片
3. 小图片转base64，减少请求
4. cdn缓存
5. 服务端开启gzip压缩
6. 图片懒加载(lazy-load images) 分页加载较多的数据
7. 使用浏览器缓存
8. 代码优化
