import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import store from './store';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import VueParticles from 'vue-particles';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(Buefy);
Vue.use(VueParticles);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
