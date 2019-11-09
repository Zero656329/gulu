import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import Buttongroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', Buttongroup)
new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: false,
    loading3: false
  }
})
import chai from 'chai'

const expect = chai.expect
//单元测试
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting'
    }
  })
  vm.$mount()

  let useElement = vm.$el.querySelector('use')
  console.log(useElement)
  expect(useElement.getAttribute('xlin:href')).to.eq('setting')

}


{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'setting',
      loading: true
    }
  })
  button.$mount()

  let useElement = button.$el.querySelector('use')
  console.log(useElement)
  expect(useElement.getAttribute('xlin:href')).to.eq('i-loading')
  button.$el.remove()
  button.$destroy()
}


{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'setting',
      loading: true
    }
  })
  button.$mount(div)

  let svg = button.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg).order;
  expect(order).to.eq("1")
  button.$el.remove()
  button.$destroy()
}
{

  const Constructor = Vue.extend(Button)
  const gbutton = new Constructor({
    propsData: {
      icon: 'setting'
    }
  })
  gbutton.$mount()
  gbutton.$on('click',function () {
    console.log(1)
  })
  let button = gbutton.$el
  button.click()

}