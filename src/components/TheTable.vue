<template>
  <div class="component__table">
    <h2 class="table__title">Employees</h2>
    <div class="table__container">
      <div class="table__content">
        <table class="table__table">
          <thead class="table__thead">
            <tr>
              <th scope="col" class="column__title">Employee</th>
              <th scope="col" class="column__title">Last login</th>
              <th scope="col" class="column__title">Department</th>
              <th scope="col" class="column__title">Status</th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="rows">
            <template v-if="users.users !== undefined">
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
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
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

<style lang="postcss" >
.component__table {
  @apply bg-white px-6 pb-10 rounded-md shadow-lg;
}
.column__title {
  @apply px-6 pb-3 pt-8 text-left text-sm font-semibold text-gray-500 tracking-wider;
}
.rows {
  @apply bg-white divide-y divide-gray-200;
}
.table__title{
  @apply pb-4 pt-6 text-gray-600 text-xl;
}
.table__container {
  @apply flex flex-col -my-2 overflow-x-auto -mx-8 py-2 align-middle min-w-full px-6;
}
.table__content {
  @apply overflow-hidden border border-gray-200 rounded-lg sm:rounded-none;
}
.table__table {
  @apply min-w-full divide-y divide-gray-200;
}
.table__thead {
  @apply bg-white leading-10 max-h-10;
}
</style>