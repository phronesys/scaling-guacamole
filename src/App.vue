<template>
  <div id="app" class="p-10">
    <the-navbar></the-navbar>
    <div class="sub-navbar">
      <a href="#">Home</a> /
      <a href="#" class="underline">Reports & Insights</a>
    </div>

    <section class="main">
      <div class="chart">
        <the-chart></the-chart>
      </div>
      <div class="table">
        <the-table></the-table>
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
    const users = await userResponse.json();
    console.log(users.users[0]);
    // Reports
    const reportResponse = await fetch("/api/reports");
    const reports = await reportResponse.json();
    console.log(reports.reports[0]);
  },
};
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

.sub-navbar {
  @apply text-gray-500 font-medium tracking-wide relative inset-6;
}
.main {
  @apply flex  space-x-10 flex-wrap; 
}

.chart {
  @apply flex-1 max-w-xl pt-12 h-full;
}
.table {
  @apply flex-1 max-w-full pt-12 h-full;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: auto;
  font-family: Inter, sans-serif;
}
</style>
