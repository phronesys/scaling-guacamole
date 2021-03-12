<template>
  <div class="component__table">
    <h2 class="table__title">
      Employees
    </h2>
    <div class="table__container">
      <div class="table__content">
        <table class="table__table">
          <thead class="table__thead">
            <tr>
              <th
                scope="col"
                class="column__title pl-3"
              >
                Employee
              </th>
              <th
                scope="col"
                class="column__title"
              >
                Last login
              </th>
              <th
                scope="col"
                class="column__title"
              >
                Department
              </th>
              <th
                scope="col"
                class="column__title"
              >
                Status
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
                :first-name="user.first_name"
                :last-name="user.last_name"
                :picture="user.profile_img"
                :sessions="user.sessions"
                :status="user.status"
              />
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
    users: {
      type: Object,
      default: function () {
        return {
          message: "",
        };
      },
    },
  },
};
</script>

<style lang="postcss" >
.component__table {
  @apply px-6 pb-10 rounded-md shadow-lg bg-white dark:bg-gray-800;
}
.column__title {
  @apply px-2 2xl:px-6 pb-3 pt-8 text-left tracking-wider text-xs 2xl:text-sm font-semibold text-gray-500 dark:text-purple-300 dark:bg-gray-800;
}
.rows {
  @apply divide-y divide-gray-200 bg-white dark:bg-gray-900 dark:divide-gray-600;
}
.table__title {
  @apply pb-4 pt-6 text-xl text-gray-600 dark:text-indigo-300;
}
.table__container {
  @apply flex flex-col px-6 -mx-8 py-2 -my-2 min-w-full overflow-x-auto align-middle;
}
.table__content {
  @apply overflow-hidden border rounded-lg border-gray-200 dark:border-gray-600;
}
.table__table {
  @apply min-w-full divide-y divide-gray-200 dark:divide-gray-600;
}
.table__thead {
  @apply leading-10 max-h-10 bg-white dark:bg-black;
}
</style>