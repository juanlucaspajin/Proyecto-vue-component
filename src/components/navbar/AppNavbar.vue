<template>
  <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand class="brand" href="#">
                <b-img class="logo" rounded src="https://scontent.ftuc1-1.fna.fbcdn.net/v/t1.0-9/15267564_578307575696543_6059643102005025443_n.jpg?_nc_cat=100&_nc_ht=scontent.ftuc1-1.fna&oh=41917aed7f37cfc41b1fb3cd60f91eb1&oe=5D201EB9" alt="Logo" />
            </b-navbar-brand>

            <b-navbar-toggle target="nav_collapse" />

            <b-collapse is-nav id="nav_collapse">
             <b-dropdown text="Agregar productos" variant="outline-light" class="m-2">
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here</b-dropdown-item>
            </b-dropdown> 
            <b-dropdown text="Eliminar productos" variant="outline-light" class="m-2">
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here</b-dropdown-item>
            </b-dropdown> 
            <b-dropdown text="Ver productos" variant="outline-light" class="m-2">
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here</b-dropdown-item>
            </b-dropdown>

            <!-- <b-nav-item-dropdown text="Lang">
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav pills>
                <b-nav-item-dropdown
                    id="nav7_ddown"
                    text="Agregar Productos"
                    extra-toggle-classes="nav-link-light"
                    right
                >
                <b-dropdown-item>Agregar Articulo</b-dropdown-item>
                <b-dropdown-item>Agregar Marca</b-dropdown-item>
                <b-dropdown-item>Agregar Zapato</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-nav> 
            <p class="saludo">Bienvenido</p>
            <b-navbar-nav class="ml-auto">
                <b-img thumbnail class="user" rounded="circle" src="https://picsum.photos/125/125/?image=58" alt="Profile" />
            </b-navbar-nav> -->

            <b-navbar-nav class="ml-auto">

                <p class="saludo">Bienvenido, <b>Admin</b></p>

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
