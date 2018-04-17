import Vue from 'vue'
import basicInput from '@/components/input/basicInput'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(basicInput)
    const vm = new Constructor().$mount()
    
  })
})
