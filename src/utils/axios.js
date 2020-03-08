/**
 *
 * ajax全局配置
 *
 */
import axios from 'axios';

// axios 配置
axios.defaults.timeout = 5000; //响应时间

// 当实例创建时设置默认配置
// axios.defaults.baseURL = 'https://api.apiopen.top';
axios.defaults.baseURL = 'http://127.0.0.1:8888/sbs/api/v2';


//http request 拦截器
axios.interceptors.request.use(config => {
    let token  = window.sessionStorage.getItem('authorization');
    if (token) {
        config.headers.authorization = token
    }

    return config
    
}, (error) => {

    console.log(error)
    return Promise.reject(error);
});

//http response 拦截器:返回状态判断（添加响应拦截器）
axios.interceptors.response.use(
    response => {


        let token = response.headers.authorization;

        if (token) {
            window.sessionStorage.setItem('authorization', token);
        }

        if (response.status === 401) {
            // 40008 说明 token 验证失败
            // 可以直接跳转到登录页面，重新登录获取 token
            window.sessionStorage.setItem('authorization', '');
        }
        
        return response.data;
    },
    error => {
        return Promise.reject(error.response) // 返回接口返回的错误信息
    }
);

export default axios;