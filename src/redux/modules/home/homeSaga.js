import { put,takeEvery } from 'redux-saga/effects'
import { DEL_TODO_ITEM,CALL_SAGA } from './actionTypes'

export function* _sayHello() {
	const Test = false;
	yield put({
		type: DEL_TODO_ITEM,
		Test
	})
}

export function* _sayHi(){
	yield takeEvery(CALL_SAGA,_sayHello);
}