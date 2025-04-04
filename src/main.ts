import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Aura from '@primeuix/themes/aura';
import router from './routes/index';

import 'primeicons/primeicons.css';
import './assets/app.css';

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

app.use(ToastService);
app.use(router)
app.component('Toast', Toast);
app.mount('#app');
