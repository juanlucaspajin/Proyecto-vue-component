<template>
  <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand class="brand" href="#">
                <router-link to="/">
                    <b-img class="logo" rounded src="https://scontent.ftuc1-1.fna.fbcdn.net/v/t1.0-9/15267564_578307575696543_6059643102005025443_n.jpg?_nc_cat=100&_nc_ht=scontent.ftuc1-1.fna&oh=41917aed7f37cfc41b1fb3cd60f91eb1&oe=5D201EB9" alt="Logo" />
                </router-link>
                
            </b-navbar-brand>

            <b-navbar-toggle target="nav_collapse" />

            <b-collapse is-nav id="nav_collapse">

            <router-link to="Adding" tag="button" class="btn btn-outline-primary mr-2 ml-2">Agregar Productos</router-link>
            <router-link to="Delete" tag="button" class="btn btn-outline-primary mr-2 ml-2">Eliminar Productos</router-link>
            <router-link to="View" tag="button" class="btn btn-outline-primary mr-2 ml-2">Ver Productos</router-link>

            <b-navbar-nav class="ml-auto">

                <p class="saludo">Bienvenido, <b>{{profile}}</b></p>

                <b-img class="user" rounded="circle" src="https://picsum.photos/125/125/?image=58" alt="Profile" />

            </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
export default {
  name: 'Navbar',
  props: {
    msg: String
  },
  data() {
      return {
        profile: 'Admin'
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
    width: 100%;
    float: left;
}
.saludo {
    color: white;
    margin-right: 25px;
    margin-top: 17px
}
.brand {
    width: 35px
}
.user {
    width: 20%;
    height: 40%;
}

</style>
