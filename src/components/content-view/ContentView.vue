<template>
    <div class="container">
        <b-jumbotron header="Productos" lead="Elija una opcion">
            
            <div role="tablist" class="mt-3">
                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block href="#" v-b-toggle.accordion1 variant="primary">Ver Articulos</b-button>
                </b-card-header>
                <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <h4>Articulos</h4>
                        <b-table striped hover :items="articulos" />
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block href="#" v-b-toggle.accordion2 variant="primary">Ver Marcas</b-button>
                </b-card-header>
                <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                       <h4>Marcas</h4>
                        <b-table striped hover :items="marcas" /> 
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block href="#" v-b-toggle.accordion3 variant="primary">Ver Zapatos</b-button>
                </b-card-header>
                <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <h4>Zapatos</h4>
                        <b-table striped hover :items="shoes" /> 
                    </b-card-body>
                </b-collapse>
                </b-card>
            </div>
        </b-jumbotron>
     
    </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'

function getBrandByName(name) {
    return fetch('http://localhost:3000/brands/' + name).
        then(response => response.json())
}
function getBrands(name) {
    return fetch('http://localhost:3000/brands').
        then(response => response.json())
}
function getArticles() {
    return fetch('http://localhost:3000/articles').
        then(response => response.json())
}
function getShoes() {
    return fetch('http://localhost:3000/shoes').
        then(response => response.json())
}

Vue.use(VueRouter)

Vue.use(BootstrapVue);
export default {
  name: 'ContentDelete',
  props: {
    msg: String
  },
  data() {
      return {
        items: [
          { Marca: 'Adidas', Anio: 2018, Temporada: 'Invierno', Descripcion: 'Superstar' },
          { Marca: 'Nike', Anio: 2017, Temporada: 'Verano', Descripcion: 'NB-5' },
          { Marca: 'Puma', Anio: 2018, Temporada: 'Primavera', Descripcion: 'Pumita' },
          { Marca: 'New Balance', Anio: 2016, Temporada: 'Otoño', Descripcion: 'New Balance 5' }
        ],
        items2: [
          { Marca: 'Adidas' },
          { Marca: 'Nike' },
          { Marca: 'Puma'},
          { Marca: 'New Balance' }
        ],
        items3: [
          { Articulo: 'Superstar', Talle: 36, Stock: 15, Precio: 2156.36 },
          { Articulo: 'NB-5', Talle: 39, Stock: 5, Precio: 1509.60 },
          { Articulo: 'Pumita', Talle: 40, Stock: 20, Precio: 2000.48 },
          { Articulo: 'Superstar', Talle: 38, Stock: 25, Precio: 2156.36 },
          { Articulo: 'New Balance 5', Talle: 41, Stock: 22, Precio: 1956.17 },
        ],
        marcas: [],
        articulos: [],
        shoes: []
      }
    },
    mounted:function(){
        this.getAllBrands();
        this.getAllArticles();
        this.getAllShoes();
    },
    methods: {
      reload() {
          window.location.reload();
      },
      getAllBrands(){
          var app = this;
            getBrands().then(function(result) {
                result.forEach(element => {
                    app.marcas.push(element)
                });
            })
    },
    getAllArticles(){
        var app = this;
        getArticles().then(function(result){
            result.forEach(element => {
                app.articulos.push(element)
            });
        })
    },
    getAllShoes() {
        var app = this;
        getShoes().then(function(result) {
            result.forEach(element => {
                app.shoes.push(element)
            })
        })
    }

  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>