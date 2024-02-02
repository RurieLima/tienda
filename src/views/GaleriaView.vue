<template>
    <main>
        <div class="divCard container">
            <div class="row mx-0">
                <div class="d-flex col justify-content-center" v-for="(producto,indice) in productosFiltrados" :key="producto.id">
                    <div class="card shadow p-3 my-3 bg-body rounded">
                        <div class="card-body">
                            <div class="divImg my-3">
                                <img :src="productosFiltrados[indice].imagen" class="card-img-top m-3 imgProducto" alt="producto">
                            </div>
                            <h5 class="card-title">{{productosFiltrados[indice].nombre}}</h5>
                            <p class="card-text">{{productosFiltrados[indice].precio}}</p>
                            <router-link :to="{name: 'MuestraProducto', params:{idProducto:productosFiltrados[indice].id} }" class="btn btn-warning">Ver producto</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </main>   
</template>
<script>
import {Store} from '@/components/Store.js'
export default {
    name: "GaleriaView",
    data: function() {
        return {
            //Store es como las variables globales (no componente)
            Store,
            productos : [],
        }
    },
    created : function (){
        //Cambios para subir en Githubpages -> No acepta links http...error mixed content
        // let url = "http://46.101.223.217/pcd/productos.php";
        // fetch(url)
        //     .then(respuesta => respuesta.json())
        //     .then(json => {
        //         this.productos = json
        //         // console.log(json)
        //     })
        //Cambios para subir en Githubpages -> No acepta links http...error mixed content
        this.productos = this.Store.productos
        console.log(this.Store)
    },
    // propiedades calculadas
    computed : {
         productosFiltrados:function (){
             const filtro = this.Store.filtro.toLowerCase();
             const productos_filtrados = this.productos.filter(
                 producto=>producto.nombre.toLowerCase().includes(filtro)
             )
             return productos_filtrados
         }
    }
}
</script>
<style scoped>
.imgProducto{margin: 20px; width:150px; height: 150px;}
.card{box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);}
.divCard{max-width: 895px;margin: auto;}
</style>
