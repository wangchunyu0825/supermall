import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //单一状态数，单一数据源，共享的数据都在这
    counter:1000,
    student:[
      {id:1,name:'wcy',age:20},
      {id:2,name:'cyz',age:2},
      {id:3,name:'mrc',age:18}
    ]
  },
  mutations: {                //更改state的唯一方式！！！
    //方法
    // increase(state){
    //   state.counter++
    // },
    decrease(state){
      state.counter--
    },
    increase(state,payload){
      return state.counter+=payload.step
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    //相当于单个组件的计算属性
    fang(state){
      return state.counter*state.counter
    },
    more19(state,getters){             //第一个形参是state，第二个形参是getters，名字无意义，看顺序
      return state.student.filter(s => {
        return s.age >=19;
      }).length
    },
    moreagestu(state){
      return function(age){
        return state.student.filter(s => {
          return s.age >=age;
        })
      }
    }
  }
})
