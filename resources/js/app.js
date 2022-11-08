// resources/app.js

require('./bootstrap');

import { createApp } from 'vue';
import HelloVue from './components/HelloVue.vue';
import About from './components/About.vue';
import PrimeVue from 'primevue/config';
import ButtonClick from "primevue/button";


const app = createApp({
    components: {
        HelloVue,About,ButtonClick
    }
}).use(PrimeVue)
    
app.component('ButtonClick', ButtonClick);
app.mount('#app');