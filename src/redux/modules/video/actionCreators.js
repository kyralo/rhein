import * as actionTypes from './actionTypes'

export const videoListReq = () => ({
	type: actionTypes.VIDEO_LIST_REQ
});

export const videoListChange = (video_list) => ({
	type: actionTypes.VIDEO_LIST_CHANGE,
	video_list
});

export const videoChange = (video) =>({
	type: actionTypes.VIDEO_CHANGE,
	video
});
