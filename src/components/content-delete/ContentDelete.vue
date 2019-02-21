<template>
    <div class="container">
        <b-jumbotron header="Bienvenido" lead="Elija una opcion">
            
            <div role="tablist" class="mt-3">
                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block href="#" v-b-toggle.accordion1 variant="primary">Agregar Producto</b-button>
                </b-card-header>
                <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <b-input-group prepend="Producto" class="mt-3">
                            <b-form-input />
                            <b-input-group-append>
                            <b-button variant="outline-success">Agregar</b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block href="#" v-b-toggle.accordion3 variant="primary">Eliminar Producto</b-button>
                </b-card-header>
                <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                    <b-card-body><p class="card-text">3</p></b-card-body>
                </b-collapse>
                </b-card>
            </div>
        </b-jumbotron>

        <!-- <div>
            <b-button v-b-toggle.collapse1 variant="primary">Agregar Productos</b-button>
            <b-collapse id="collapse1" class="mt-2">
                <b-card>
                <p class="card-text">Collapse contents Here</p>
                <b-button v-b-toggle.collapse1_inner size="sm">Toggle Inner Collapse</b-button>
                <b-collapse id="collapse1_inner" class="mt-2">
                    <b-card>Hello!</b-card>
                </b-collapse>
                </b-card>
            </b-collapse>
        </div> -->

          
    </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
export default {
  name: 'ContentDelete',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>