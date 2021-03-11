<template>
  <div class="bg-white px-6 pb-10 rounded-md shadow-lg">
    <h2 class="pb-4 pt-6 text-gray-600 text-xl">Employees</h2>
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full px-6">
          <div class="overflow-hidden border border-gray-200 rounded-lg sm:rounded-none">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-white leading-10 max-h-10">
                <tr>
                  <th
                    scope="col"
                    class="px-6 pb-3 pt-8 text-left text-xs font-semibold text-gray-500 tracking-wider"
                  >
                    Employee
                  </th>
                  <th
                    scope="col"
                    class="px-6 pb-3 pt-8 text-left text-xs font-semibold text-gray-500 tracking-wider"
                  >
                    Last login
                  </th>
                  <th
                    scope="col"
                    class="px-6 pb-3 pt-8 text-left text-xs font-semibold text-gray-500 tracking-wider"
                  >
                    Department
                  </th>
                  <th
                    scope="col"
                    class="px-6 pb-3 pt-8 text-left text-xs font-semibold text-gray-500 tracking-wider"
                  >
                    Status
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <template v-if="users.users !== undefined">
                  <!-- <template v-for="item in items">-->
                  <table-user
                    v-for="user in users.users"
                    :key="user.id"
                    :department="user.department"
                    :email="user.email"
                    :firstName="user.first_name"
                    :lastName="user.last_name"
                    :picture="user.profile_img"
                    :sessions="user.sessions"
                    :status="user.status"
                  ></table-user>
                </template>

                <!-- More items... -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* 
an example of what we can get from the users prop:
  department: "Games"
  email: "Dangelo.Kuhlman94@hotmail.com"
  first_name: "Cesar"
  id: "1"
  last_name: "Bayer"
  profile_img: "https://s3.amazonaws.com/uifaces/faces/twitter/funwatercat/128.jpg"
  sessions: Array(3)
  status: true
*/
import TableUser from "./TableUser";
export default {
  components: {
    TableUser,
  },
  props: {
    users: Object,
  },
};
</script>

<style>
</style>