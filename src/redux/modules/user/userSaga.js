/*
* @Author: 王宸
* @Date:   2019-12-28 15:46:23
* @Last Modified by:   王宸
* @Last Modified time: 2020-01-02 09:49:07
*/

/**
 * put : saga -> reducer
 * take... : 监听action
 */


import { 
	put,
    takeEvery,
	takeLatest,
	fork
} from 'redux-saga/effects'

import { 
	USER_INFO_UPDATE,
	USER_INFO_CHANGE,
	USER_INFO_REQ
} from './actionTypes'

import {
	userInfoChange
} from './actionCreators'

import axios from '@utils/axios'


function* infoChange(action){
    try{
        yield put(action);
    }catch{
        console.log('修改失败')
    }
}

function* infoReq(){

    let promise =  axios({
    	method: "get",
    	url: "/user"
    })
    promise
        .then( response => {
            let user_info = response

            console.log(user_info)
			if (user_info) {
                const action = userInfoChange(user_info)
                console.log(action)
                infoChange(action)
			}
        }).catch( error => {
            console.log(error)
        })

}

function* userInfoUpdateReq(action){
    let user_info = action.user_info 
    let promise =  axios({
    	method: "put",
    	url: "/user",
    	data: user_info
    })
    promise
        .then( response => {
            console.log(response)
            const action = userInfoChange(user_info)
			
            infoChange(action);

        }).catch( error => {
            console.log(error)
        })

}

export default function* userSaga(){
	yield takeEvery(USER_INFO_REQ , infoReq);
	yield takeLatest(USER_INFO_UPDATE, action => userInfoUpdateReq(action));
}