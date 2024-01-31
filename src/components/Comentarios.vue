<template>
            <div v-for="comentario in lista" class="coments" :key="comentario.id">
                <p>Fecha: <span>{{comentario.fecha}}</span></p>
                <img v-for="n in comentario.valoracion" class="estrella my-2" src="@/assets/img/estrella.png" :key="n">
                <img v-for="n in 5-comentario.valoracion" class="estrella my-2" src="@/assets/img/estrella_gris.jpg" :key="n"> 
                <p class="my-2">Valoración: <span>{{comentario.valoracion}}</span></p>
                <p class="my-2">{{comentario.texto}}</p>  
            </div>
</template>
<script>
export default {
    name: 'ComentariosComp',
    props:['lista'],        
}
</script>
<style scoped>
*{margin: 0;padding: 0;}
.flex-container{display: flex;}
.flex1{flex:1}
.flex2{flex:2;}
.flex3{flex:3;}
.flex4{flex:4;}
.flex5{flex:5;}
.flex6{flex:6;}
.comentarios{background-color: rgb(253, 253, 253);border: solid 1px lightgray; border-radius: 5px;padding:3px;margin: 10px 5px;}
.coments{margin: 10px;padding: 5px; border: solid 1px lightgray;border-radius: 5px;background-color: white;}
.divTextArea{display: flex;flex-direction: column;justify-content: center;}
select{width: 50px;margin: 10px;padding: 5px;border-radius: 5px;}
.descrip{padding: 5px;margin: 10px;}
.estrella{width: 25px;margin: 2px;}
</style>