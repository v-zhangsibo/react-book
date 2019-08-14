import {combineReducers} from 'redux'
import home from './home'
// combineReducers的作用，会把数据组成下面这种结构
// {home:{lesson:'all'},list:{}}
export default combineReducers({
    home
})