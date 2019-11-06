import Vue from 'vue'
import Button from './button'
import Icon from './icon'
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
console.log(Button);
new Vue({
  el: "#app"
})