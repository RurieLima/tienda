<template>
    <div class="my-3">
        <div class="col my-5">
            <h5 >Unidades: {{carritoCantidad}} | Total: <strong>{{precioTotal}}€</strong></h5>
        </div>
        <div class="my-5">
            <div v-if="this.Store.carrito.length == 0">
                <p>Carrito vacio. Aproveches las rebajas</p>
            </div>
            <div class="row" v-for="elementoCarrito in Store.carrito" :key="elementoCarrito.id">
                <div class="col">
                    <img class="min" :src="elementoCarrito.modelo.imagen">
                    <span class="badge bg-primary rounded-pill">{{elementoCarrito.cantidad}}</span>
                    <p class="my-3">{{elementoCarrito.modelo.nombre}} {{elementoCarrito.modelo.precio}}€</p>
                </div>
            </div>
        </div>
        <div class="my-5">
            <router-link v-if="this.Store.carrito.length > 0" @click="finalCompra()" class="btn btn-success" to="/CompraView">Comprar</router-link>
            <router-link v-else class="btn btn-warning" to="/">Galeria</router-link>
        </div>
    </div>
</template>
<script>
import {Store} from '@/components/Store.js'
export default {
    name: 'CarritoComp',
    data: function(){
        return{
            Store,
        }    
    },
    methods : {
        finalCompra : function(){
            this.Store.carrito = []
        }
    },
    //para crear variables como de data, pero claculadas, realizando una function (calculo, etc) antes de enviar el resultado 
    computed : {
        precioTotal : function(){
            let suma = 0;
            for(let i in this.Store.carrito){
                suma = suma + this.Store.carrito[i].modelo.precio * this.Store.carrito[i].cantidad;
            }
            return suma
        },
        carritoCantidad : function(){
            let total = 0;
            for(let i in this.Store.carrito){
                total = total + this.Store.carrito[i].cantidad;
            }
            return total;

        },
    },   
}
</script>
<style scoped>
img{width: 75px;}
</style>
