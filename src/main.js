import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import axios from 'axios';

import VueAxios from 'vue-axios';
import RiskView from './components/RiskView.vue';
import AddRisk from './components/AddRisk.vue';
import EditRisk from './components/EditRisk.vue';
import DeleteRisk from './components/DeleteRisk.vue';
import AddField from './components/fieldtype/AddField.vue';
import FieldtypeView from './components/fieldtype/FieldtypeView.vue';
import EditField from './components/fieldtype/EditField.vue';
import DeleteField from './components/fieldtype/DeleteField.vue';


Vue.use(VueAxios,axios);
Vue.use(VueRouter);
Vue.config.devtools = true;

//Vue.loadScript("./assets/js/jquery-3.3.1.min.js");
//Vue.loadScript("./assets/js/bootstrap.min.js");

const BASE_URL = "http://127.0.0.1:8000/api/";

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

  {
        name: 'addfield',
        path: '/addfield',
        component: AddField
  },

  {
    name: 'fieldtype',
    path: '/fieldtype',
    component: FieldtypeView
  },

  {
    name: 'editfield',
    path: '/editfield/:fid',
    component: EditField,
    props: true,
  },

  {
    name: 'deletefield',
    path: '/deletefield/:fid',
    component: DeleteField,
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

