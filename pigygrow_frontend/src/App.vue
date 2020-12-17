<template>
  <div id="app">
    <div class="header">
      <h1>Piggy Grow <img src="./assets/piggy-bank-1022853_960_720.png" width="70px" height="70px" align=middle></h1>
      <nav>
        <button v-on:click="Movement" >Nuevo Movimiento</button>
        <button v-on:click="mostrarConsulta">Consultar Movimientos</button>
        <button>Eliminar movimiento </button>
        <button>Cerrar Sesión</button>
      </nav>
    </div>

    <div class="main-component">
      <router-view></router-view>
    </div>

    <div v-dragscroll> ... </div>
    <!-- For more control -->
    <div v-dragscroll="true"> ... </div>

    <div class="footer">
      <h2>Copyright @PiggyGrow Inc.</h2>
    </div>
    

  </div>
</template>

<script>

import consulta from './components/consulta'
import Movimiento from './components/Movimiento'
import reportes from './components/reportes'

export default {
  name: "App",

  components: {
    Movimiento,
    consulta,
    reportes
  },
    
/*data: function () {
  return {
  is_auth: localStorage.getItem("isAuth") || false,
  };
  },*/

  methods: {
    Movement: function() {
      this.$router.push({ name: "crear_movimiento" });
    },

    mostrarConsulta: function() {
      this.$router.push({ name: "consulta" })    
  
  },

  verReporte: function() {
    this.$router.push({ name: "reporte"})
  },

},

beforeCreate: function() {
  if (this.$route.name !="crear_movimiento"){
    this.$router.push({ name: "crear_movimiento"});
  }
},

};


</script>

<style>
  body {
    margin: 0 0 0 0;
  }

  .header {
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: pink;
    color:black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: serif;
    
  }

  .header h1 {
    width: 20%;
    text-align: center;
  }

  .header nav {
    height: 100%;
    width: 45%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
  }

  .header nav button {
    color:  black;
    background:beige;
    border: 5px solid #e9e5e9;
    border-radius: 80px;
    padding: 10px 20px;
    font-family: Arial,Helvetica,sans-serif;
    font-size: 16px;
  }


  .header nav button:hover {
    color: #283747;
    background: #e5e7e9;
    border: 1px solid #e5e7e9;
  }

  main-component {
    height: 75vh;
    margin: 0%;
    padding: 0%;
    background: #fdfefe;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer {
    margin: 0;
    padding: 0;
    width: 100%;
    background-color:pink;
    color: #1b1e20;
    position: relative;
    /*bottom: 0;*/
    left: 0;
	  display: block;

  }

  .footer h2 {
    width: 100%;
    height: 100%;
    padding: 1.5em;
    margin-top: 2em;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  
  }
</style>
