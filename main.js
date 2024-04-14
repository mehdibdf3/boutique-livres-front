import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// CSS de BootstrapVue et Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import BootstrapVue3 from 'bootstrap-vue-3';

// CSS personnalisé pour des styles additionnels
import './assets/main.css';

// Importation de Vuetify
import vuetify from './plugins/vuetify'; // Assurez-vous que ce chemin est correct

const app = createApp(App);

// Utilisation de Vue Router
app.use(router);

// Utilisation de BootstrapVue
app.use(BootstrapVue3);

// Utilisation de Vuetify
app.use(vuetify);

// Montage de l'application Vue à l'élément #app du DOM
app.mount('#app');