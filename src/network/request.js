import axios from 'axios'

export function request(config) {
    //创建一个实例
    const instance = axios.create({
        baseURL: 'http://localhost:8080',
        timeout: 5000
    })

    //添加一个拦截器
    instance.interceptors.request.use(config =>{
        console.log(config)
        return config
    },err =>{
        console.log(err)
    })

    //发送网络请求，返回的是一个promise
    return instance(config)
}