import axios from '@utils/axios'

import { push } from 'react-router-redux';

import { history } from '@utils/history';

import { 
	put,
	takeLatest 
} from 'redux-saga/effects'

import { 
	LOGIN_REQ,
	REGISTER_REQ 
} from './actionTypes'




function* login(action){
	let user = action.user

    console.log(user)
    let promise =  axios({
    	method: "post",
    	url: "/user/login",
    	params: {
    		mail: user.mail,
			password: user.password
    	}
    })

    promise
        .then( response => {
            console.log(response)

            try{
                put(history.replace('/'))
            }catch{

            }
            

        }).catch( error => {
            console.log(error)
        })
}


function* register(action){
	console.log(action.user)
	let user = action.user

    let promise =  axios({
    	method: "post",
    	url: "/user/register",
    	data: user
    })

    promise
        .then( response => {
            console.log(response)
			
            try{
                put(history.replace('/login'))
            }catch{

            }


        }).catch( error => {
            console.log(error)
        })
}

export default function* loginSaga(){
	yield takeLatest(LOGIN_REQ , action => login(action));
	yield takeLatest(REGISTER_REQ , action => register(action));
}