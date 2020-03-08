/*
* @Author: 王宸
* @Date:   2019-12-23 23:11:05
* @Last Modified by:   王宸
* @Last Modified time: 2020-01-02 13:44:59
*/
// 将 action type 提取出来作为常量，防止编写错误
import * as actionTypes from './actionTypes';
// state 初始化数据
//默认数据
const defaultState = {
  video_list: [
	{
		authorAvatar: "https://view.moezx.cc/images/2019/12/25/avator.png",
		authorId: "0c9b46de4a6042beb5422bc86d9833ed",
		authorName: "kyralo",
		createTime: "2020-01-02 10:53",
		fettle: "0",
		id: "09fcc374d44b4a8b8d0745d8c7b747fb",
		introduction: "一个测试样例",
		kindId: 1,
		title: "测试样例",
		coverUrl: '',
		videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
	},
  ],
  video: {
	  	authorAvatar: "https://view.moezx.cc/images/2019/12/25/avator.png",
		authorId: "0c9b46de4a6042beb5422bc86d9833ed",
		authorName: "kyralo",
		createTime: "2020-01-02 10:53",
		fettle: "0",
		id: "09fcc374d44b4a8b8d0745d8c7b747fb",
		introduction: "一个测试样例",
		kindId: 1,
		title: "测试样例",
		coverUrl: '',
		videoUrl: "",
  }
};

const typesCommands = {

   [actionTypes.VIDEO_LIST_CHANGE](state, action) {
      return Object.assign({}, state, { 
        video_list: action.video_list
      });
   },
   [actionTypes.VIDEO_CHANGE](state, action) {
      return Object.assign({}, state, { 
        video: action.video
      });
   }
};


export default function home(state = defaultState, action) {
   const actionResponse = typesCommands[action.type];

   return actionResponse ? actionResponse(state, action) : state;
}