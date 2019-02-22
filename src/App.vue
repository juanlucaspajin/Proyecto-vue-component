<template>
  <div>
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/navbar/AppNavbar.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
