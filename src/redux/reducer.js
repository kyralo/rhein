import { DEL_TODO_ITEM , BUTTON_CHANGE} from './actionTypes'


//默认数据
const defaultState = {
    lists: [
        'java',
        'go',
        'react',
        'c++',
        'html',
        'vue',
        'python',
        'ruby',
        'rust',
        'css',
        'js',
        'php',
        'nodejs',
        'hexo'
    ]
};

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case DEL_TODO_ITEM:
            //1.1遍历
            //1.2处理选中的
            //1.3更新状态
            newState.Test = action.Test;
            return newState;
        case BUTTON_CHANGE:
            newState.Test = action.Test;
            return newState;
        default:
            return state;;
    }
}