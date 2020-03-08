/*
* @Author: 王宸
* @Date:   2019-12-28 15:45:09
* @Last Modified by:   王宸
* @Last Modified time: 2020-01-02 10:07:13
*/

/*
* @Author: 王宸
* @Date:   2019-12-23 23:11:05
* @Last Modified by:   王宸
* @Last Modified time: 2019-12-26 00:04:55
*/
// 将 action type 提取出来作为常量，防止编写错误
import { 
  USER_INFO_CHANGE
} from './actionTypes';
// state 初始化数据
//默认数据
const defaultState = {
    user_info: {
      avatarUrl: '',
      id: '',
      name: '',
      mail: '',
      sex: 0,
      sign: '',
      fettle: '',
      createTime: ''
    },
};

/*
   对应不同 action.type 的处理函数，需要返回一个新的 state
   也可以 switch 语句 处理不同 action.type
*/
const typesCommands = {
   
   [USER_INFO_CHANGE](state, action) {
    console.log(action)
    return Object.assign({}, state, { 
       user_info: action.user_info
    });
  }
};

/*
   这里会输出一个 reducer 函数，
   reducer 函数的作用是，根据当前的状态去返回一个新的状态
   state 参数是不可变的，这里返回的 state 一定是一个新的状态
*/ 
export default function user(state = defaultState, action) {

   const actionResponse = typesCommands[action.type];

   return actionResponse ? actionResponse(state, action) : state;
}