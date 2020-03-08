/*
* @Author: 王宸
* @Date:   2019-12-28 15:44:24
* @Last Modified by:   王宸
* @Last Modified time: 2020-01-02 00:15:13
*/

import {
	USER_INFO_UPDATE,
	USER_INFO_REQ,
	USER_INFO_CHANGE
} from './actionTypes'

/**
 *  获取用户信息
 * @return {[type]} [description]
 */
export const userInfoUpdate = (user_info) => ({
	type: USER_INFO_UPDATE,
	user_info
});

export const userInfoChange = (user_info) =>({
	type: USER_INFO_CHANGE,
	user_info
});


export const userInfoReq = () => ({
	type: USER_INFO_REQ
});