import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import axios from 'axios'
import { request } from './network/request'
import './plugins/element.js'
//import { config } from 'vue/types/umd'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//axios.defaults.baseURL='http://localhost:8080'
//axios.defaults.timeout=5

// axios({
//   url:'http://localhost:8080',
//    //默认get请求
//    method:'GET',
//    params:{

//    }
// }).then(res =>{
//   console.log(res)
// })

// 并发请求
// axios.all([axios({
//   url:''
// }),axios({
//   url:''
// })]).then(axios.spread((res1,res2) =>{
//   console.log(res1)
//   console.log(res2)
// }))

// request({
//   url: ''
// }, res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// }
// )

request({
  url:''
}).then(res =>{
  console.log(res)
}).catch(err =>{
  console.log(err)
})