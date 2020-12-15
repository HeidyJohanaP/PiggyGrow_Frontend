<template>
 <div>
  <div id="cont_tabla">
    <table class="tb_movimientos">
      <thead>
        <tr>
          <th>Tipo</th>            
          <th>Fecha</th>
          <th>Valor</th>
          <th>Categoría</th>   
          <th>Descripción</th>                     
        </tr>
      </thead>
      <tbody>
        <tr v-for="m in movimiento" v-bind:key="m.id">
          <td>{{ m.tipo }}</td>
          <td>{{ m.fecha }}</td>
          <td>{{ m.valor }}</td>
          <td>{{ m.categoria }}</td>
          <td>{{ m.descripcion }}</td>
        </tr>       
      </tbody>
    </table>
  </div>     
 </div>
</template>

<script>
import axios from "axios";
export default {
  name: "consulta",
  data: function() {
    return {
      movimiento: [
        {
          id: 1,
          fecha: '2020-12-01',
          valor: 50000,
          categoria: "Alimentos",
          descripcion: "Almuerzo en Leños Steak",
          tipo: "Gasto"
        },
        {
          id:2,
          fecha: '2020-12-01',
          valor: 20000,
          categoria: "Transporte",
          descripcion: "Taxi al trabajo",
          tipo: "Gasto"
        },
        {
          id:3,
          fecha: '2020-12-01',
          valor: 20000,
          categoria: "Alimentos",
          descripcion: "Hamburguesa",
          tipo: "Gasto"
        },               
        {
          id:4,
          fecha: '2020-12-02',
          valor: 1000000,
          categoria: "Salario",
          descripcion: "Quincena",
          tipo: "Ingreso"
          },
        {
          id:5,
          fecha: '2020-12-02',
          valor: 6000,
          categoria: "Alimentos",
          descripcion: "Desayuno",
          tipo: "Gasto"
        }  
      ]
    }
  },
  beforeCreate: function() {
    axios
      .get("http://127.0.0.1:8000/mov")
      .then(respuesta => {
        this.movimiento = respuesta.data;
      })
      .catch(error => {
        console.log(error);
        alert("Error en la petición con código" + error.response.status);
      });
  }
}
</script>


<style scoped>
#cont_tabla {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.tb_movimientos {
  width: 50%;
  border-collapse: collapse;
}

.tb_movimientos th,
.tb_movimientos td {
  margin:auto;
  padding: 1em;
}

.tb_movimientos th {
  color: #fff;
  font-weight: 300;
  background-color: #78909C;
}

.tb_movimientos tr:nth-child(odd) td {
  background-color: #fff;
}

.tb_movimientos tr:nth-child(even) td {
  background-color: #eceff1;
}

.tb_movimientos td:nth-child(3) {
  text-align: right;
}

.tb_movimientos td:nth-child(1),
.tb_movimientos td:nth-child(2),
  .tb_movimientos td:nth-child(4) {
  text-align: center;
}
</style>