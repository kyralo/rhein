import {CALL_SAGA,BUTTON_CHANGE} from './actionTypes'

//1.删除一条记录
export const getDelItemAction = () =>({
	type: CALL_SAGA,
});

export const testButton = (Test) =>({
	type: BUTTON_CHANGE,
	Test
});