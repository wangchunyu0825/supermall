<template>
  <div id="app">
    <h1>{{$store.state.counter}}</h1>
    
    <el-button @click='dec'>-</el-button>
    <h2>{{$store.getters.fang}}</h2>
    <h2>{{$store.getters.moreagestu(8)}}</h2>
    <el-button @click='addd(4)'></el-button>
  </div>
</template>

<script>
export default{
  name:'App',
  data(){
    return{

    }
  },
  methods:{
    
    dec(){
      this.$store.commit('decrease')
    },
    addd(step){
      this.$store.commit({
        type:'increase',
        //step等数据将加到payload上通过commit提交给vuex中相应的方法
        step
      })
    }
  },
  computed:{
    
  }
}
</script>

<style>

</style>
