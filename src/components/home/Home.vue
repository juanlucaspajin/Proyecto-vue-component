<template>
    <div class="container">
        <b-jumbotron header="Bienvenido a LG Calzados" lead="Sistema de Gestion de Productos">
        </b-jumbotron>
    </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.use(BootstrapVue);
export default {
  name: 'ContentDelete',
  props: {
    msg: String
  },
  data() {
      return {
        
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>