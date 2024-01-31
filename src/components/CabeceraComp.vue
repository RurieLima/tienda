<template>
    <header class="">
        <nav class="navbar navbar-expand-lg bg-dark text-white p-2 mb-3">
            <div class="container-fluid p-2">
                <router-link class="text-light brandNav mx-2" to="/"><h1>Amazonas</h1></router-link>
                <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbar1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                    <div class="collapse navbar-collapse" id="navbar1">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item mx-3">
                            <router-link class="text-light brandNav" to="/">Galeria</router-link> 
                        </li>
                    </ul>
                    <router-link v-if="Store.loginUsuario == false" class="btn btn-success med" to="/LoginView">Login</router-link>
                    <p v-else class="m-3">Hola {{Store.usuario.nombre}}</p>          
                    <form class="d-flex mx-3" role="search">
                        <!-- v-model paea acceder desde las dos direcciones (abajo arriba y arriba a bajo) -->
                        <input v-model="Store.filtro" class="form-control me-2" type="search" placeholder="Buscar producto" aria-label="Search">
                        <button class="btn btn-outline-secondary opac mx-3" type="submit"><i class="bi bi-search"></i></button>
                    </form>
                    <span>
                        <router-link to="/CarritoView">
                            <img class="carrito med" src="@/assets/img/carrito.png">
                            <span class="translate-middle badge rounded-pill bg-danger">
                                {{carritoCantidad}}                
                                <span class="visually-hidden">0</span>
                            </span>
                        </router-link>                        
                    </span>
                </div>
            </div>
        </nav>
        <CarritoComp/>
    </header>    
</template>
<script>
import {Store} from '@/components/Store.js'
import CarritoComp from "@/components/CarritoComp.vue";
export default {
    name: 'CabeceraComp',
    components: {
        Store,
        CarritoComp,
    },
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
.carrito{width: 50px; border-radius: 50%;}
.brandNav{text-decoration: none;}
.carListProduct{list-style: none;}
.opac{opacity: 0.7;}
.min{width: 30px;display: inline-block;}
input[type="number"]{width: 50px;align-content: center;padding: 2px;margin: 3px;}
 @media (max-width: 576px){
    .med{
        margin:15px 0px;
    }
}
</style>