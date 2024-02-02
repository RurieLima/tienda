<template>
    <div class="divCompra">
        <div class="col">
            <div class="text-center">
                <div class="my-3">
                    <h2 class="p-2">Hasta luego {{Store.usuario.nombre}}</h2>
                </div>
                <div class="my-3">
                    <router-link class="btn btn-success my-3 p-2" to="/">Confirmar</router-link>
                </div>
                <div class="my-3">
                    <h3>¡Gracias por comprar en Amazonas!</h3>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
import {Store} from '@/components/Store.js'
export default {
  name: 'CompraView',
  data : function(){
      console.log(Store)
      return {
         Store,
      }
  }
}
</script>
<style scoped>
img{width: 50px;}
.divCompra{min-height: 70vh;}
</style>
