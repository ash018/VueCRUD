import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import RiskView from './components/RiskView.vue';
import AddRisk from './components/AddRisk.vue';
import EditRisk from './components/EditRisk.vue';
import DeleteRisk from './components/DeleteRisk.vue';

Vue.use(VueAxios,axios);
Vue.use(VueRouter);
Vue.config.devtools = true;

//Vue.loadScript("./assets/js/jquery-3.3.1.min.js");
//Vue.loadScript("./assets/js/bootstrap.min.js");


const routes = [
  {
        name: 'add',
        path: '/add',
        component: AddRisk
  },

  {
    name: 'risk',
    path: '/risk',
    component: RiskView
  },

  {
    name: 'edit',
    path: '/edit/:riskid',
    component: EditRisk,
    props: true,
  },

  {
    name: 'delete',
    path: '/delete/:riskid',
    component: DeleteRisk,
    props: true,
  },

];
const router = new VueRouter({ mode: 'history', routes: routes });

Vue.config.productionTip = false;

Vue.component('modal', {
  template: '#modal-template',
  props: ['myData']
})

new Vue({
  render: h => h(App),
  router,
  currentRisk: {},
  
}).$mount('#app')

