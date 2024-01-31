<template>
<p class="disable">Carrito</p>
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
.disable{
    display: none;
}
</style>
