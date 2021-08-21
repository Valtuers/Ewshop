import axios from 'axios';

export function request(config) {
    const INSTANCE = axios.create({
        baseURL: 'https://api.shop.eduwork.cn',
        timeout: 5000
    });

    //请求拦截
    INSTANCE.interceptors.request.use(config=>{
        //如果接口需要认证，就在这统一设置
        return config;
    },err=>{});

    //响应拦截
    INSTANCE.interceptors.response.use(res=>{
        return res.data || res;
    },err=>{})

    return INSTANCE(config);
}