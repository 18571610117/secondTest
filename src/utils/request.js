/*
 * @Description: 公共请求
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-07-29 16:59:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-06 22:10:14
 */
import axios from 'axios';
axios.defaults.withCredentials = true; // 默认开启cookie
axios.defaults.headers['Content-Type'] = 'application/json';

const httpRequest = axios.create({
  baseURL: '/',
});

httpRequest.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // 这里错误不做任何处理，通常404错误居多
    return Promise.reject(error);
  }
);

httpRequest.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default httpRequest;
