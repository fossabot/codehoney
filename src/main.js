import Vue from 'vue';
import App from './App.vue';
import store from './store/';
import SvgIcon from './components/SvgIcon.vue'

// Default tag name is 'svgicon'
Vue.component('svgicon', SvgIcon)
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
