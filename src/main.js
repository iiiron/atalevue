/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import App from './test/App'

import inputTest from './test/inputTest.vue'

Vue.use(Router);

var router = new Router({
  routes: [
    {
      path:"/inputTest",
      component:inputTest
    }
  ]
});

var vue=new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});