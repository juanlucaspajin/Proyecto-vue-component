<template>
  <div id="app">
    <Navbar/>
    <ContentDelete/>
  </div>
</template>

<script>
import Navbar from './components/navbar/AppNavbar.vue'
import ContentDelete from './components/content-delete/ContentDelete.vue'


export default {
  name: 'app',
  components: {
    Navbar,
    ContentDelete
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
