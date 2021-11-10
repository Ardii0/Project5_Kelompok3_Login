import Vue from "vue";
import Router from "vue-router";
import ProjectHome from "@/components/ProjectHome.vue"
import InfoKendaraan from "@/components/InfoKendaraan.vue"
import calculate from "@/components/calculate.vue"
import Peduli from "@/components/Peduli.vue"

Vue.use(Router)

function configRoutes() {
    return [
        {
            path: "/",
            name: "Home",
            component: ProjectHome
        },
       {
           path: "/info-kendaraan",
           name: 'Infokendaraan',
           component: InfoKendaraan
       },
       {
           path: "/cal-culate",
           name: 'calculate',
           component: calculate
       },
       {
           path: "/ped-uli",
           name: 'Peuli',
           component: Peduli
       }
    ]
}

const router = new Router({
    mode: "history",
    routes: configRoutes(),
    scrollBehavior: () => ({ y: 0 }),
});
export default router;

