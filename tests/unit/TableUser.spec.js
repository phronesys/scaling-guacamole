import { mount } from "@vue/test-utils";
import TableUser from "@/components/TableUser";

test("it shows the given props on their tags", () => {
  const wrapper = mount(TableUser, {
    propsData: {
      index: 0,
      department: "Software",
      email: "daniel.dazarola@gmail.com",
      firstName: "Daniel",
      lastName: "Dazarola",
      sessions: [new Date(), new Date(), new Date()],
      status: true,
    },
  });

  expect(wrapper.find("#username").exists()).toBe(true);
  expect(wrapper.find("#email").exists()).toBe(true);
  expect(wrapper.find("#lastlogin").exists()).toBe(true);
  expect(wrapper.find("#timeago").exists()).toBe(true);
  expect(wrapper.find("#department").exists()).toBe(true);
  expect(wrapper.find("#textstatus").exists()).toBe(true);
  const username = wrapper.find("#username");
  const email = wrapper.find("#email");
  const lastLogin = wrapper.find("#lastlogin");
  const timeAgo = wrapper.find("#timeago");
  const department = wrapper.find("#department");
  const status = wrapper.find("#textstatus");

  expect(username.text()).toBe("Daniel Dazarola");
  expect(email.text()).toBe("daniel.dazarola@gmail.com");

  // In order to test this, set date manually to today
  expect(lastLogin.text()).toBe("March 14, 2021");
  expect(timeAgo.text()).toBe("0 seconds ago");

  expect(department.text()).toBe("Software");
  expect(status.text()).toBe("Active");
});

test("timeDifference returns correct time ago", () => {
  const wrapper = mount(TableUser, {
    // added propsData here to evade ugly warnings
    propsData: {
      index: 0,
      department: "Software",
      email: "daniel.dazarola@gmail.com",
      firstName: "Daniel",
      lastName: "Dazarola",
      sessions: [new Date(), new Date(), new Date()],
      status: true,
    },
  });
  const now = new Date();

  const oneSecond = new Date();
  oneSecond.setSeconds(now.getSeconds() - 1);
  expect(wrapper.vm.timeDifference(oneSecond)).toBe("1 seconds ago");

  const twoMinutes = new Date(now.getTime() - 2 * 60000);
  expect(wrapper.vm.timeDifference(twoMinutes)).toBe("2 minutes ago");

  const threeHours = new Date();
  threeHours.setHours(now.getHours() - 3);
  expect(wrapper.vm.timeDifference(threeHours)).toBe("3 hours ago");

  const fourDays = new Date();
  fourDays.setDate(now.getDate() - 4);
  expect(wrapper.vm.timeDifference(fourDays)).toBe("4 days ago");

  const fiveMonths = new Date();
  fiveMonths.setMonth(now.getMonth() - 5);
  expect(wrapper.vm.timeDifference(fiveMonths)).toBe("5 months ago");

  const sixYears = new Date();
  sixYears.setFullYear(now.getFullYear() - 6);
  expect(wrapper.vm.timeDifference(sixYears)).toBe("6 years ago");
});
