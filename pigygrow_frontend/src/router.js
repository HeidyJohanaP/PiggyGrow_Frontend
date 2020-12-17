import vueRouter from 'vue-router'
import Movimiento from './components/Movimiento'
import consulta from './components/consulta'
import App from './App'
import reportes from './components/reportes'


const router = new vueRouter({

    routes: [

        {
            path: '/mov/nuevo',
            name: "crear_movimiento",
            component: Movimiento
        },
        {
            name: "consulta",
            path: "/mov",
            component: consulta
        },
        {
            name: "reporte",
            path: "/reporte",
            component: reportes
        }
    ]
});

export default router;
