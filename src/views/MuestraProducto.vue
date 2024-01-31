<template>
    <main>
        <div v-if="Store.loginUsuario == true" class="container p-2">
            <!-- la función compraProducto no lleva parentesis, recibe el valor desde el evento -->
            <ProductoComp v-on:compra-producto="compraProducto" :id="idSeleccionado"></ProductoComp>
        </div>
        <div v-else class="my-3 p-2">
            <div class="row my-3">
                <h2>Iniciar sessión para visualizar el producto</h2>
            </div>    
            <div class="my-3">
                <router-link class="btn btn-success" to="/loginView">Login</router-link>
            </div>   
        </div>
    </main>
</template>
<script>
    import ProductoComp from '@/components/ProductoComp.vue'
    import {Store} from '@/components/Store.js'
    
    export default {
        name: 'MuestraProducto',
        components: {
            ProductoComp,
        },
        data: function() {
            return {
                Store,
                idSeleccionado : 1
            }
        },
        // created se ejecuta cuando la pagina se ha cargado totalmente
        created : function (){
            this.idSeleccionado = this.$route.params.idProducto
        },
        methods:{
            compraProducto : function(modelo){
                //console.log(modelo)
                // bandera o chivato
                let found = false
                for(let i in this.Store.carrito){
                    if(this.Store.carrito[i].modelo.ref == modelo.ref){
                        this.Store.carrito[i].cantidad++
                        found = true
                        break
                    }
                }
                if(!found){
                    this.Store.carrito.push({modelo:modelo,cantidad:1})
                }
            },
    }, 
}
</script>
<style scoped>
img{margin: 20px; width:50px}
.products{font-size: 1.5rem;margin:30px;padding: 10px;box-shadow: 1px 1px 1px 1px lightgray;border-radius: 10px;text-align: center;}
</style>
