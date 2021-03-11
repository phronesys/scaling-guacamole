<template>
  <div id="app" class="p-10">
    <the-navbar></the-navbar>
    <div class="sub-navbar">
      <a href="#">Home</a> /
      <a href="#" class="underline">Reports & Insights</a>
    </div>

    <section class="main">
      <div class="chart">
        <the-chart :reports="reports"></the-chart>
      </div>
      <div class="table">
        <the-table :users="users"></the-table>
      </div>
    </section>
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";
import TheChart from "./components/TheChart";
import TheTable from "./components/TheTable";

export default {
  name: "app",
  data() {
    return {
      uwu: "",
      users: {},
      reports: {},
    };
  },
  components: {
    TheNavbar,
    TheChart,
    TheTable,
  },
  async mounted() {
    // Users
    const userResponse = await fetch("/api/users");
    this.users = await userResponse.json();
    console.log(this.users);

    // Reports
    const reportResponse = await fetch("/api/reports");
    this.reports = await reportResponse.json();
  },
};
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

.sub-navbar {
  @apply text-gray-500 font-semibold tracking-wide relative inset-6;
}
.main {
  @apply flex  space-x-10 md:flex-wrap md:space-x-0 pt-12 ;
}

.chart {
  @apply flex-1 max-w-md h-full md:max-w-xs;
}
.table {
  @apply flex-1 max-w-full h-full md:max-w-sm;
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
}
</style>