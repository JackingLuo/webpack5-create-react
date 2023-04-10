import axios from 'axios';
import { message } from 'antd';

const request = axios.create({
    baseURL: '/api',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
});

request.interceptors.response.use(function (response) {
    if (response.status === 200) { return response; }
    message.error(response?.msg || '请求失败');
    return false;
}, function (error) {
    message.error(JSON.stringify(error) || '请求失败');
    return Promise.reject(error);
});

export default request;