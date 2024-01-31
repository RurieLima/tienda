<template>
     <div class="center comentarios flex1">
            <div>
                <h3>Comentarios:</h3>
            </div>
            <div class="center divTextArea">
                <textarea rows=4 cols=20 v-model="nuevoComentario"></textarea>
                <h4>Valoración:</h4>
                <div>
                    <select v-model="nuevaValoracion">
                        <option v-for="numero in 5" :key="numero" :value="numero">{{numero}}</option>
                    </select>
                    <button class="btn" @click="anadirComentario">Enviar</button>
                </div>
            </div>
        </div> 
</template>
<script>
export default {
    name : "NuevoComentario",
    data : function(){
        return{
            nuevoComentario : "",
            nuevaValoracion : 0,
        }
    },
    methods : {
        anadirComentario : function(){
            if(this.nuevoComentario.length>5 && this.nuevaValoracion>0){
                this.$emit("nuevo-comentario", {
                    texto : this.nuevoComentario,
                    valoracion : this.nuevaValoracion,
                    fecha : this.fecha(),
                })
                this.postComentario()
                this.nuevoComentario = "";
                this.nuevaValoracion= "";
            }else{
                alert("Por favor rellenar comentario y valoracion")
            }
        },
        fecha : function (){
            let d=new Date();   //recogemos la fecha y hora actuales
            let day = d.getDate()
            let month = d.getMonth() + 1
            let year = d.getFullYear()
            if(month < 10){
                //d=day+"-0"+month+"-"+year
                d=(`${day}-0${month}-${year}`)
            }else{
                d=(`${day}-${month}-${year}`)
            }
            return d;
        }
    },
    emits : ['nuevo-comentario'],
}
</script>
<style scoped>
select{padding: 2px;margin: 3px;}
</style>
