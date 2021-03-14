import { mount } from '@vue/test-utils';
import TheNavbar from '@/components/TheNavbar';

test('set dropdown to false on non-dropdown click', async () => {
  const wrapper = mount(TheNavbar);       // select component
  const button = wrapper.find('button');  // select the only possible button

  expect(wrapper.vm.isDropdownOpen).toEqual(false); // should start as false

  await button.trigger('click');                    // opens the dropdown
  expect(wrapper.vm.isDropdownOpen).toEqual(true);  // dropdown opened

  expect(wrapper.find('#backdrop').exists()).toBe(true); // backdrop exist
  const backdrop = wrapper.find('#backdrop');            // select backdrop
  backdrop.trigger('click');  // executes the method commented below
  // wrapper.vm.dropdownFalse();

  expect(wrapper.vm.isDropdownOpen).toEqual(false);  // now should be false
})

test("if button is not clicked dropdown does not exist", () => {
  const wrapper = mount(TheNavbar);

  expect(wrapper.find('#dropdown').exists()).toBe(false);
})
test("if button is clicked dropdown exist and is visible", async () => {
  const wrapper = mount(TheNavbar);
  const button = wrapper.find('button');

  await button.trigger('click');

  expect(wrapper.find('#dropdown').exists()).toBe(true);
  expect(wrapper.find('#dropdown').isVisible()).toBe(true);
})