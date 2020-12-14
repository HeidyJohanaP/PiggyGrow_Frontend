import vueRouter from 'vue-router'
import Movimiento from './components/Movimiento'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "root",
            component: App
        },
        {
            path: '/mov/:nuevo',
            name: "crear_movimiento",
            component: Movimiento
        },

    ]
})

export default router