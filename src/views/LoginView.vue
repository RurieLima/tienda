<template>
      <div class="mt-5 mb-3">
        <h2>¡Bienvenido!</h2>   
      </div>
      <div class="my-3">
          <img src="@/assets/img/logoAmazonas.png">
      </div>    
      <div class="my-3">
         <p>Elija el id de usuario:</p>   
        <select v-model="id" class="my-2">
          <option v-for="numero in 49" :key="numero" :value="numero">{{numero}}</option>
        </select>
      </div>
      <div class="my-3">
        <button class="btn btn-success my-1 px-3 py-2" @click="loginUsuario">Login</button>
      </div>
</template>
<script>
import {Store} from '@/components/Store.js'
export default {
  name: 'LoginView',
  data : function(){
      return {
         id: "",
         Store,
      }
  },
  methods:{
    loginUsuario : function(){
        if(this.id!=""){
           let url = "http://46.101.223.217/pcd/usuario.php?id="+this.id;
            fetch(url)
                .then(respuesta => respuesta.json())
                .then(json => {
                    console.log(json)
                    this.Store.usuario = json;
                    this.Store.loginUsuario = true
                    console.log(this.Store)
                    this.$router.push('/')
            });
        }

    },
  }
}
</script>
<style scoped>
select{padding: 10px;background-color: rgba(0, 0, 0, 0.100);border-radius: 5px;}
img{width: 200px;}
</style>
