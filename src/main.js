import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//??
Vue.directive("changestyle", {
  bind(e1) {
    console.log(e1);
    e1.style.color = "red";
    e1.style.fontSize = "30px";
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
