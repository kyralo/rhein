/*
* @Author: 王宸
* @Date:   2019-12-28 15:46:49
* @Last Modified by:   王宸
* @Last Modified time: 2020-01-02 11:09:16
*/

import { combineReducers } from 'redux';

import user from './modules/user';
import video from './modules/video';

// 合并到主reducer
// combineReducers() 函数用于将分离的 reducer 合并为一个 reducer
const reducers = {
   user,
   video
};


export default combineReducers(reducers);
