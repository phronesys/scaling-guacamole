<template>
  <div class="bg-white px-6 pb-10 rounded-md shadow-lg">
    <h2 class="pb-4 pt-6 text-gray-600 text-xl">Employees</h2>
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden border border-gray-200 sm:rounded-lg">
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
                <template>
                  <!-- <template v-for="item in items">-->
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img
                            class="h-9 w-9 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                            alt=""
                          />
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            Jane Cooper
                          </div>
                          <div class="text-xs text-gray-500">
                            jane.cooper@example.com
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-xs text-gray-900">
                        September 20, 2019
                      </div>
                      <div class="text-xs text-gray-500">2 days ago</div>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-xs text-gray-800"
                    >
                      Accounting
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-green-400"
                      >
                        Active
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center justify-center">
                        <a href="#" class="text-gray-500">
                          <svg class="w-4 h-4 fill-current">
                            <use
                              xlink:href="../assets/symbol-defs.svg#icon-keyboard_arrow_down"
                            ></use>
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>
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
export default {
  data() {
    return {
      items: [
        {
          department: "Sports",
          status: true,
          sessions: [
            "2020-10-01T18:33:46.587Z",
            "2020-10-04T08:12:13.224Z",
            "2020-10-14T06:42:29.716Z",
          ],
          email: "Vallie.Ullrich27@yahoo.com",
          last_name: "Schuster",
        },
      ],
    };
  },
};
</script>

<style>
</style>