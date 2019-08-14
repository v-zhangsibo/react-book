import * as Types from '../action-types'
//初始化state
let initState = {
    type: 'all',
    sliders: [],
    lesson: {
        hasMore: true,//默认有更多
        page: 1,//默认是第一页
        list: [],//默认列表为空
        isLoading: true//表示是否正在加载
    }
}
function home(state = initState, action) {
    switch (action.type) {//判断action类型
        case Types.SET_LESSON:
            return {
                ...state,
                type: action.lesson, lesson: {
                    //把lesson全都恢复成默认值
                    hasMore: true,
                    page: 1,
                    list: [],
                    isLoading: true
                }
            }
            break;
        case Types.SET_BANNER:
            return {
                ...state, sliders: action.payload.data
            }
            break;
        case Types.SET_LIST:
            return {
                ...state, lesson: {
                    ...state.lesson,
                    hasMore: action.payload.hasMore,//修改是否有更多
                    //拿到的数据和以前的数据拼接
                    list: [...state.lesson.list, ...action.payload.data],
                    isLoading: false
                }
            }
            break;
        case Types.SET_PAGE:
            return {
                ...state, lesson: {
                    ...state.lesson,
                    page: action.page
                }
            }
            break;
    }
    return state;
}
export default home