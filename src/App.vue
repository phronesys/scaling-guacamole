<template>
  <div
    id="app"
    class="p-10"
  >
    <the-navbar />
    <div class="sub-navbar">
      <a href="#">Home</a> /
      <a
        href="#"
        class="underline"
      >Reports & Insights</a>
    </div>
    <section class="main">
      <div class="chart">
        <the-chart :reports="reports" />
      </div>
      <div class="table">
        <the-table :users="users" />
      </div>
    </section>
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";
import TheChart from "./components/TheChart";
import TheTable from "./components/TheTable";
import path from 'path';

export default {
  name: "App",
  components: {
    TheNavbar,
    TheChart,
    TheTable,
  },
  data() {
    return {
      users: {},
      reports: {},
    };
  },
  async mounted() {
    this.users = await this.fetchUsers();
    this.reports = await this.fetchReports();
  },
  methods: {
    async fetchUsers() {
      const __dirname = path.resolve();
      const userResponse = await fetch(path.join(__dirname, "api", "users"));
      return userResponse.json();
    },
    async fetchReports() {
      const __dirname = path.resolve();
      const reportResponse = await fetch(path.join(__dirname, "api", "reports"));
      return reportResponse.json();
    },
  },
};
</script>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

.sub-navbar {
  @apply relative inset-6 font-semibold tracking-wide  text-gray-500 dark:text-gray-300;
}
.main {
  @apply flex  sm:space-x-10  sm:pt-12;
}
.chart {
  @apply flex-1 md:max-w-md h-full max-w-xs;
}
.table {
  @apply flex-1 md:max-w-full h-full max-w-sm;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: auto;
  font-family: Inter, sans-serif;
  background-color: #f7fafc;
  @apply dark:bg-gray-800;
}
</style>