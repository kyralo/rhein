/*
* @Author: 王宸
* @Date:   2019-12-28 15:46:58
* @Last Modified by:   王宸
* @Last Modified time: 2020-01-01 16:30:52
*/
import { fork } from 'redux-saga/effects'


import userSaga from '@store/user/userSaga'
import loginSaga from '@store/login/loginSaga'




export default function* Saga() {
  yield fork(userSaga);
  yield fork(loginSaga);
}