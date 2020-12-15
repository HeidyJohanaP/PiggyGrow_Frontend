import VueRouter from "vue-router";
import consulta from "./components/consulta";


const router = new VueRouter({
    //mode: history,
    routes: [
        {
            name: "consulta",
            path: "/consulta",
            component: consulta
        }
    ]

})

export default router;