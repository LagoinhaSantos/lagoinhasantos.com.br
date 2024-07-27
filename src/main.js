import * as Vue from 'vue';
import App from './App.vue';
import './style.css'
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas, far);
const app = Vue.createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
app.use(router);

