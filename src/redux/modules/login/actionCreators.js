import {
	LOGIN_REQ,
	REGISTER_REQ
} from './actionTypes'

/** 登录 */
export const loginReq = user =>({
	type: LOGIN_REQ,
	user
});

/** 注册 */
export const registerReq = user =>({
	type: REGISTER_REQ,
	user
});