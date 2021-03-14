import { mount } from '@vue/test-utils';
import TableUser from '@/components/TableUser';

test('it shows the props on their tags', () => {
  const wrapper = mount(TableUser, {
    propsData: {
      index: 0,
      department: "Software",
      email: "daniel.dazarola@gmail.com",
      firstName: "Daniel",
      lastName: "Dazarola",
      sessions: [new Date(), new Date(), new Date()],
      status: true,
    }
  });


  expect(wrapper.find('#username').exists()).toBe(true);
  const username = wrapper.find('#username');
  const email = wrapper.find('#email');
  const lastLogin = wrapper.find('#lastlogin');
  // const timeAgo = wrapper.find('#timeago');
  // const department = wrapper.find('#department');
  // const status = wrapper.find('#textstatus');
  expect(username.text()).toBe('Daniel Dazarola');
  expect(email.text()).toBe('daniel.dazarola@gmail.com');
  expect(lastLogin.text()).toBe('March 14, 2021');
})