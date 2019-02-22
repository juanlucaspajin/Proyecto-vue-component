<template>
    <div class="container">
        <b-jumbotron header="Eliminacion de productos" lead="Elija una opcion">
            
            <div role="tablist" class="mt-3">
                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block href="#" v-b-toggle.accordion1 variant="primary">Eliminar Articulo</b-button>
                </b-card-header>
                <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <h4>Seleccione un articulo para eliminar</h4>
                        <b-input-group prepend="Articulo" class="mt-3">
                            <b-form-select v-model="idArticle" :options="articulos" />
                            <b-input-group-append>
                            <b-button v-b-modal.modalArticulo variant="outline-success">Eliminar</b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <!-- Modal Articulo -->
                <b-modal id="modalArticulo" title="Elimacion de articulo" @ok="deleteArticles()">
                    <p class="my-4">¿Eliminar articulo?</p>
                </b-modal>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block href="#" v-b-toggle.accordion2 variant="primary">Eliminar Marca</b-button>
                </b-card-header>
                <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <h4>Seleccione una marca para eliminar</h4>
                        <b-input-group prepend="Marca" class="mt-3">
                            <b-form-select v-model="idBrand" :options="marcas" />
                            <b-input-group-append>
                            <b-button v-b-modal.modalMarca variant="outline-success">Eliminar</b-button>
                            </b-input-group-append>
                        </b-input-group> 
                    </b-card-body>
                </b-collapse>
                </b-card>

                <!-- Modal Marca -->
                <b-modal id="modalMarca" title="Elimacion de marca" @ok="deleteBrands()">
                    <p class="my-4">¿Eliminar marca?</p>
                </b-modal>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block href="#" v-b-toggle.accordion3 variant="primary">Eliminar Zapato</b-button>
                </b-card-header>
                <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <h4>Seleccione un zapato para eliminar</h4>
                        <b-input-group prepend="Zapato" class="mt-3">
                            <b-form-select v-model="idShoe" :options="zapatos" />
                            <b-input-group-append>
                            <b-button v-b-modal.modalZapato variant="outline-success">Eliminar</b-button>
                            </b-input-group-append>
                        </b-input-group> 
                    </b-card-body>
                </b-collapse>
                </b-card>

                <!-- Modal Zapato -->
                <b-modal id="modalZapato" title="Elimacion de zapato" @ok="deleteShoes()">
                    <p class="my-4">¿Eliminar zapato?</p>
                </b-modal>
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

function deleteShoe(id) {
    const rawResponse = fetch('http://localhost:3000/shoes/delete', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({"idshoes":id})
    }).then(window.location.reload());
}
function deleteBrand(id) {
    const rawResponse = fetch('http://localhost:3000/brand/delete', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"idbrand":id})
    }).then(window.location.reload());
}
function deleteArticle(id) {
    const rawResponse = fetch('http://localhost:3000/article/delete', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({"idarticle":id})
    }).then(window.location.reload());
}

function getBrands() {
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
        idArticle: null,
        idBrand: null,
        idShoe: null, 
        marcas: [],
        zapatos: [],
        articulos: [], 
        options: [
          { value: null, text: 'Seleccione una opcion' },
          { value: 'a', text: 'Primer opcion' },
          { value: 'b', text: 'Segunda opcion' },
          { value: { C: '3PO' }, text: 'Tercer opcion' }
        ]
      }
    },
    mounted: function() {
        this.setBrands();
        this.setArticles();
        this.setShoes();
    },
  methods: {
    reload() {
          window.location.reload();
      },
    deleteShoes() {
        var app = this;
        deleteShoe(app.idShoe);
    },
    deleteBrands() {
            var app = this;
            deleteBrand(app.idBrand);
    },
    deleteArticles() {
        var app = this;
        deleteArticle(app.idArticle);
    },
    setBrands() {
        var app = this;
        getBrands().then(function(result) {
                result.forEach(element => {
                    app.marcas.push({ value: element.idbrand, text: element.brandName })
                });
        })
    },
    setArticles(){
        var app = this;
        getArticles().then(function(result){
            result.forEach(element => {
                app.articulos.push({ value: element.idarticle, text: element.description })
            });
        })
    },
    setShoes(){
        var app = this;
        getShoes().then(function(result){
            result.forEach(element => {
                app.zapatos.push({ value: element.idshoes, text: element.description })
            });
        })
    }

  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>