import { mount } from '@vue/test-utils';
import TheNavbar from '@/components/TheNavbar';

test('set dropdown to false on non-dropdown click', async () => {
  const wrapper = mount(TheNavbar);
  const button = wrapper.find('button'); // find profile picture

  expect(wrapper.vm.isDropdownOpen).toEqual(false); // inicialmente es falso

  button.trigger('click'); 
  expect(wrapper.vm.isDropdownOpen).toEqual(true);


  wrapper.vm.dropdownFalse();

  expect(wrapper.vm.isDropdownOpen).toEqual(false);
})