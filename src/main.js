import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

require('./css/SideBar.css')
require('./css/TopBar.css')
require('./css/main.css')

Vue.use(BootstrapVue)
Vue.component('icon', Icon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
