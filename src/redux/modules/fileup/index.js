/*
* @Author: 王宸
* @Date:   2019-12-23 23:11:05
* @Last Modified by:   王宸
* @Last Modified time: 2019-12-26 00:04:55
*/
// 将 action type 提取出来作为常量，防止编写错误
import { DEL_TODO_ITEM, BUTTON_CHANGE, LITS_CHANGE } from './actionTypes';
// state 初始化数据
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

/*
   对应不同 action.type 的处理函数，需要返回一个新的 state
   也可以 switch 语句 处理不同 action.type
*/
const typesCommands = {

   [DEL_TODO_ITEM](state, action) {
      // let newState = JSON.parse(JSON.stringify(state));
      return Object.assign({}, state, { 
      	// newState.Test = action.Test
      });
   },
   [BUTTON_CHANGE](state, action) {
      return Object.assign({}, state, {
  	  });
   },
   [LITS_CHANGE](state = defaultState, action) {
   	 return Object.assign({}, state, {
        lists: [
			'java',
	        'go',
	        'react',
	        'c++',
	        'html',
	        'vue',
	        'python',
	        'ruby'
        ] 
	  }); 
   }
};

/*
   这里会输出一个 reducer 函数，
   reducer 函数的作用是，根据当前的状态去返回一个新的状态
   state 参数是不可变的，这里返回的 state 一定是一个新的状态
*/
export default function home(state = defaultState, action) {
   const actionResponse = typesCommands[action.type];

   return actionResponse ? actionResponse(state, action) : state;
}