import { put,takeEvery } from 'redux-saga/effects'
import { DEL_TODO_ITEM,CALL_SAGA } from './actionTypes'

function* _sayHello() {
	const Test = false;
	yield put({
		type: DEL_TODO_ITEM,
		Test
	})
}

function* mySaga(){

	yield takeEvery(CALL_SAGA,_sayHello);

}

export default mySaga;