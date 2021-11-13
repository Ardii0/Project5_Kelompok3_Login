import Vue from "vue";
import Router from "vue-router";
import ProjectHome from "@/components/ProjectHome.vue"
import InfoKendaraan from "@/components/InfoKendaraan.vue"
import InfoMotor from "@/components/InfoMotor.vue"
import calculate from "@/components/calculate.vue"
import BeliMotor from "@/components/BeliMotor.vue"
import Peduli from "@/components/Peduli.vue"
import PeduliCrud from "@/components/PeduliCrud.vue"
import Admin from "@/components/Admin.vue"
import Dasboard from "@/components/Dasboard.vue"

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
           path: "/info-motor",
           name: 'InfoMotor',
           component: InfoMotor
       },
       {
           path: "/cal-culate",
           name: 'calculate',
           component: calculate
       },
       {
           path: "/beli-motor",
           name: 'BeliMotor',
           component: BeliMotor
       },
       {
           path: "/ped-uli",
           name: 'Peduli',
           component: Peduli
       },
       {
           path: "/peduli-crud",
           name: 'PeduliCrud',
           component: PeduliCrud
       },
       {
           path: "/ad-min",
           name: 'Admin',
           component: Admin
       },
       {
           path: "/das-board",
           name: 'Dasboard',
           component: Dasboard
       }
       
    ]
}

const router = new Router({
    mode: "history",
    routes: configRoutes(),
    scrollBehavior: () => ({ y: 0 }),
});
export default router;

