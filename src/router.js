import { createRouter, createWebHistory } from 'vue-router';
import CryptoList from "./Components/Crypto/CryptoList.vue"
import WeatherApp from "./Components/Weather/WeatherApp.vue"
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/" , redirect : "/crypto"},
        { name: "crypto", path: "/crypto", component: CryptoList},
        { name: "weather", path: "/weather", component: WeatherApp},
    ],
    linkActiveClass : "active"
})
export default router