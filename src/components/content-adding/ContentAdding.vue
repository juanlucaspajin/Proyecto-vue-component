<template>
    <div class="container">
        <b-jumbotron header="Agregado de productos" lead="Elija una opcion">
            
            <div role="tablist" class="mt-3">
                <!-- Agregado de articulos -->
                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block href="#" v-b-toggle.accordion1 variant="primary">Agregar Articulo</b-button>
                </b-card-header>
                <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <b-input-group prepend="Marca" class="my-1">
                            <b-form-select v-model="articleBrand" :options="options" />
                        </b-input-group>
                        <b-input-group prepend="Año salida" class="my-1">
                            <b-form-input v-model="year" type="number"/>
                        </b-input-group>
                        <b-input-group prepend="Temporada" class="my-1">
                            <b-form-select v-model="selectedSeason" :options="seasons" />
                        </b-input-group>
                        <b-input-group prepend="Descripcion" class="my-1">
                            <b-form-input v-model="description" type="text"/>
                        </b-input-group>
                        <b-button v-b-modal.modalArticulos variant="outline-success" class="my-2">Agregar</b-button>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <!-- Modal articulos -->
                <b-modal id="modalArticulos" title="Agregado de articulo" @ok="insertArticle()">
                    <p class="my-4">¿Agregar articulo {{articleBrand}} {{description}}?</p>
                </b-modal>

                <!-- Agregado de marcas -->
                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block href="#" v-b-toggle.accordion2 variant="primary">Agregar Marca</b-button>
                </b-card-header>
                <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <b-input-group prepend="Marca" class="my-1">
                            <b-form-input v-model="brandName" type="text" placeholder="Nombre de marca"/>
                        </b-input-group>
                        <b-button v-b-modal.modalMarcas variant="outline-success" class="my-2">Agregar</b-button>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <!-- Modal Marca -->
                <b-modal id="modalMarcas" title="Agregado de marca" @ok="insertBrands()">
                    <p class="my-4">¿Agregar marca {{brandName}}?</p>
                </b-modal>

                <!-- Agregado de zapatos -->
                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block href="#" v-b-toggle.accordion3 variant="primary">Agregar Zapato</b-button>
                </b-card-header>
                <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <b-input-group prepend="Articulo" class="mt-3">
                            <b-form-select v-model="selectedArticle" :options="articulos" />
                        </b-input-group>
                        <b-input-group prepend="Talle" class="my-1">
                            <b-form-input v-model="size" type="number" placeholder="Talle"/>
                        </b-input-group>
                        <b-input-group prepend="Stock" class="my-1">
                            <b-form-input v-model="stock" type="number" placeholder="Stock"/>
                        </b-input-group>
                        <b-input-group prepend="Precio" class="my-1">
                            <b-form-input v-model="price" type="number" placeholder="Precio"/>
                        </b-input-group>
                        <b-button v-b-modal.modalZapatos variant="outline-success" class="my-2">Agregar</b-button> 
                    </b-card-body>
                </b-collapse>
                </b-card>

                <!-- Modal Zapatos -->
                <b-modal id="modalZapatos" title="Agregado de zapato" @ok="insertShoes()">
                    <p class="my-4">¿Agregar Zapato?</p>
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

function getBrands(name) {
    return fetch('http://localhost:3000/brands').
        then(response => response.json())
}
function insertArticle(article) {
    const rawResponse = fetch('http://localhost:3000/article', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(article)
    }).then(window.location.reload());
}

function insertBrand(brand) {
        const rawResponse = fetch('http://localhost:3000/brand/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(brand)
        }).then(window.location.reload());
}

function getArticles() {
    return fetch('http://localhost:3000/articles').
        then(response => response.json())
}


function insertShoe(shoe) {
    const rawResponse = fetch('http://localhost:3000/shoes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(shoe)
    }).then(window.location.reload());
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
        marcas: [],
        brandName: '',  
        selected: null,
        selectedArticle: Number,
        articleBrand: Number,
        selectedSeason:'',
        year: Number,
        description: '',
        size: null,
        stock: null,
        price: null,
        articulos: [],
        options: [],
        seasons: [
          { value: null, text: 'Seleccione una opcion' },
          { value: 'Verano', text: 'Verano' },
          { value: 'Otoño', text: 'Otoño' },
          { value: 'Invierno', text: 'Invierno' },
          { value: 'Primavera', text: 'Primavera' }  
        ]
        
      }
    },
    mounted: function(){
        this.setOptions();
        this.setArticles();
    },
  methods: {
      getAllBrands(){
          var app = this;
            getBrands().then(function(result) {
                result.forEach(element => {
                    app.marcas.push(element)
                });
            })
        },
    setOptions() {
        var app = this;
        getBrands().then(function(result) {
                result.forEach(element => {
                    app.options.push({ value: element.idbrand, text: element.brandName })
                });
        })

    },
    insertArticle() {
        var app = this;
        let article = {
            idarticle: null,
            year: app.year,
            season: app.selectedSeason,
            description: app.description,
            idBrand: app.articleBrand
        };

        insertArticle(article);

        //window.location.reload(); 
    },
    insertBrands() {
            var app = this;
            let brand = {
                id: null,
                brandName: app.brandName
            }
            insertBrand(brand);
    },
    setArticles(){
        var app = this;
        getArticles().then(function(result){
            result.forEach(element => {
                app.articulos.push({ value: element.idarticle, text: element.description })
            });
        })
    },
    insertShoes() {
        var app = this;

        let shoe = {
            idshoe: null,
            size: app.size,
            stock: app.stock,
            price: app.price,
            idarticle: app.selectedArticle
        };
        insertShoe(shoe);
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>