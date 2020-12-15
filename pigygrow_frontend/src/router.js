import vueRouter from 'vue-router'
import Movimiento from './components/Movimiento'
import consulta from './components/consulta'
import App from './App'

const router = new vueRouter({

    routes: [

        {
            path: '/mov/nuevo',
            name: "crear_movimiento",
            component: Movimiento
        },
        {
            name: "consulta",
            path: "/consulta",
            component: consulta
        }
    ]
});

export default router;