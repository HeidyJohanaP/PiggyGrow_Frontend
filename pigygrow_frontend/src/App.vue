<template>
  <div id="app">
    <h2>Registro de movimientos:</h2>
    <!--<img src="./assets/logo.png">
    <HelloWorld/>-->
    <router-view></router-view>
    <consulta /> 
    <!--<consulta />-->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
import consulta from './components/consulta'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    consulta
  },
  methods: {
    mostrarConsulta: function() {
      this.$router.push({ name: consulta })
    }
  }
  //beforeCreate: function() {
  //  this.$router.push({ name: "consulta" });
  //}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
