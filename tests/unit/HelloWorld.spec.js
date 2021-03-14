import { mount } from '@vue/test-utils';
import HelloWolrd from '@/components/HelloWorld';

test('display message', () => {
  const wrapper = mount(HelloWolrd, {
    propsData: {
      msg: "hello world"
    }
  })

  expect(wrapper.text()).toContain('hello world')
})