import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld';

test('display message', () => {
  const wrapper = mount(HelloWorld);
  const h1 = wrapper.find('h1');

  expect(h1.text()).toContain('hello world')
})

test("increment count on click", async () => {
  const wrapper = mount(HelloWorld);
  const button = wrapper.find('button');
  const text = wrapper.find('p');

  // .text() is what is inside the p tag
  expect(text.text()).toContain('Total count: 0');

  await button.trigger('click');
  
  expect(text.text()).toContain('Total count: 1');
})