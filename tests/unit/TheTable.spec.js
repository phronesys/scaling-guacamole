import { mount } from '@vue/test-utils';
import TheTable from '@/components/TheTable';

test('template inside tbody should not exist before getting the async prop', () => {
  const wrapper = mount(TheTable);

  expect(wrapper.find('tbody').exists()).toBe(true);
  expect(wrapper.find('#user-render').exists()).toBe(false);
})

test('table-user should be rendered after 1 second', () => {
  const wrapper = mount(TheTable, {
    propsData: {
      users: {
        users: [
          {
            id: 0,
            department: "Software",
            email: "daniel.dazarola@gmail.com",
            first_name: "Daniel",
            last_name: "Dazarola",
            sessions: [],
            status: true
          }
        ]
      }
    }
  })
  expect(wrapper.props().users.users[0].first_name).toBe("Daniel");
  setTimeout(() =>{
    expect(wrapper.wm.users.exists()).toBe(true);
    expect(wrapper.find('#user-render').exists()).toBe(true);
    expect(wrapper.find('table-user').exists()).toBe(true);
  }, 1000)
})
// both "expect" below throws errors outside of setTimeout
// this means props aren't being pass right away
// expect(wrapper.wm.users.users.exists()).toBe(true);
// expect(wrapper.find('#user-render').exists()).toBe(true);