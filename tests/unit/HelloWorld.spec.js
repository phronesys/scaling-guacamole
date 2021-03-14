import { mount } from '@vue/test-utils';
import HelloWolrd from '@/components/HelloWorld';

test('display message', () => {
  const wrapper = mount(HelloWolrd, {
    // inside this object we can pass data to the test
    propsData: {
      msg: "hello world"
    }
  })

  expect(wrapper.text()).toContain('hello world')
})