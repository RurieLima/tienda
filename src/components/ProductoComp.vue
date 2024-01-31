<template>
    <div v-if='jasonRecibido'>
        <div class="home">
            <div class="flex-container row mx-0">
                    <div class="col flex1 flex-container center selectColor">
                        <ul class="nav flex-column shadow mb-3 bg-body rounded my-3" v-for="(modelo, i) in modelos" :key="modelo.id">
                            <li class="nav-item">
                                <img :src='modelos[i].imagen' class="min" v-on:mouseover="indiceSeleccionado = i">
                            </li>
                        </ul>
                    </div>
                    <div class="col flex1">
                        <div class="row">
                            <img :src='modelos[indiceSeleccionado].imagen'>
                        </div>
                         <div class="row my-3">
                            <NuevoComentario @nuevo-comentario="anadirComentario"></NuevoComentario>
                            <ComentariosComp :lista="comentarios"></ComentariosComp>
                        </div>
                    </div>
                    <div class="col flex2">
                        <h1 class="my-3">{{nombre}}</h1>
                        <div class="my-3" v-for="(modelo, indice) in modelos" style="display:flex" :key="modelo.id">
                                <div class="circuloColor" v-on:mouseover="indiceSeleccionado = indice" :style="{'background-color': modelo.color}"></div>
                                <span>{{modelo.nombre}}</span>
                        </div>
                        <div class="my-3">
                            <h3>{{modelos[indiceSeleccionado].precio}}€</h3>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisl metus, rutrum ac urna at, rutrum vestibulum metus. Morbi id mi gravida nibh elementum ullamcorper nec eget libero. Pellentesque tincidunt diam in lorem posuere commodo. Integer mattis vehicula vulputate. Integer pellentesque risus quis odio aliquet, vel dictum dolor interdum. Pellentesque erat eros, vehicula bibendum ligula ut, pretium convallis sapien. Quisque est libero, congue gravida tristique ut, elementum sed sapien. Duis dignissim cursus justo, non fermentum nisl tempus in. Integer faucibus placerat tristique. Proin nunc libero, mollis vel dui sed, porttitor vehicula augue. Aliquam dictum orci dolor, a vehicula enim posuere in. Maecenas pulvinar porta arcu, nec porta mauris mollis in. Sed id odio pretium, euismod leo vitae, consequat diam.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col flex1 lateral shadow p-3 mb-3 bg-body rounded">
                        <p>Devoluciones gratis</p>
                        <p>Entrega gratis</p>
                        <div class="flex-container justify-content-center">
                            <img class="min" src="@/assets/img/ubicacion.png">
                            <p>Elige tu dirección de envío</p>
                        </div>
                        <button class="btnAnadir" @click="comprar" :disabled="modelos[indiceSeleccionado].stock==0">Añadir a la cesta</button>
                        <p v-if="modelos[indiceSeleccionado].stock>0">Stock: {{modelos[indiceSeleccionado].stock}} </p>
                        <p v-else style="color:red">No hay en stock</p>
                            <p>Cantidad: </p>
                            <input class="text-center" type="number" min=1 value=1 :disabled="modelos[indiceSeleccionado].stock==0">
                        <p>Política de devoluciones: <span>Admite devoluciones sin costes</span></p>
                        <div class="flex-container justify-content-center">
                            <img class="min" src="@/assets/img/candado.png">
                        </div>
                        <p>Transacción segura</p>
                    </div>
            </div>      
        </div>
    </div>
        {{cargaProducto()}}
</template>
<script>
import {Store} from '@/components/Store.js'
import ComentariosComp from '@/components/Comentarios.vue'
import NuevoComentario from '@/components/NuevoComentario.vue'

export default {
    name: "ProductoComp",
    components:{
      ComentariosComp,
      NuevoComentario,
    },
    props : ['id'],
    watch : {
        id : function(nuevoValor,viejoValor){
            if(nuevoValor != viejoValor){
                this.jasonRecibido = false
            }
        }
    },
    data : function(){
        return {
            indiceSeleccionado : 0,
            nombre : "",
            modelos : [],
            Store,
            comentarios : [],
            jasonRecibido : false
        }
    },
    methods : {
        comprar : function (){
            //emitiremos el evento compra
            this.$emit("compra-producto", this.modelos[this.indiceSeleccionado])
        },
        anadirComentario : function (c){
            this.comentarios.push(c)
        },
        cargaProducto : function(){
            if(this.jasonRecibido == false){
                let url = "http://46.101.223.217/pcd/productos.php?id="+this.id;
                fetch(url)
                    .then(respuesta => respuesta.json())
                    .then(json => {
                        // console.log(json)
                        this.nombre = json.nombre
                        this.modelos = json.modelos
                        this.jasonRecibido = true
                        this.comentarios = json.comentarios
                        this.indiceSeleccionado = 0
                });
            }

        },
    },
    emits : ['compra-producto'],
}
</script>
<style scoped>
*{margin: 0;padding: 0;}
.flex-container{display: flex;flex-wrap: wrap;}
.flex1{flex:1}
.flex2{flex:2;}
.flex3{flex:3;}
.flex4{flex:4;}
.flex5{flex:5;}
.flex6{flex:6;}
.rol{justify-content: center;}
.col{display: inline-block;margin: 5px;padding: 10px;}
img{margin: 20px; width:200px;}
.btnComprar{margin: 20px; padding: 10px;border-radius: 15px; border: none; background-color: rgb(255, 230, 0);box-shadow: 1px 1px 1px 1px grey;}
.btnComprar:hover{background-color:rgba(245, 206, 11);color: white;}
.btnAnadir{margin: 20px; padding: 10px; border-radius: 15px; border: none; background-color: rgb(247, 188, 11);box-shadow: 1px 1px 1px 1px grey;}
.btnAnadir:hover{background-color:rgb(247, 188, 11);color: white;}
.circuloColor{width: 25px;height: 25px; border-radius: 50%;list-style:none;margin: 5px 15px;display:flex;flex-direction:row;align-items:center;}
.main_div{display: flex; justify-content: center;}
p{padding: 5px;font-family: Arial, Helvetica, sans-serif;}
li{font-family: Arial, Helvetica, sans-serif; margin: 3px; padding: 3px;list-style: none;}
h1{font-family:sans-serif;}
h3{font-size: 2rem;}
input[type="number"]{width: 50px;align-content: center;padding: 2px;margin: 3px;}
input[type="search"]{width: 400px;padding: 2px;}
span{color:blue}
.min{width: 30px;}
.lateral{border:solid 1px lightgray;border-radius: 10px;margin: 5px 10px;max-height:700px;}
.center{text-align: center;}
.divImg{border: solid 1px lightgrey;border-radius: 3px;}
.btn{background-color: orange;padding: 5px;border-radius: 5px;border: none;margin: 5px;display: inline-block;width: 100px;}
.divTextArea{display: flex;flex-direction: column;justify-content: center;}
select{width: 50px;margin: 10px;padding: 5px;border-radius: 5px;}
.descrip{padding: 5px;margin: 10px;}
hr{color: lightgray;opacity: 0.3;margin: 20px 0px;}
.nav{border:1px solid lightgray;}
.home{margin: auto;}
.selectColor{max-width: 100px;}
</style>