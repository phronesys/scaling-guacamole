<template>
  <div class="bg-white rounded-md shadow-lg">
    <div class="relative top-6 left-6 mb-16">
      <h1 class="text-gray-600 text-xl">Why do you create a startup?</h1>
      <span class="text-gray-400">Trends</span>
    </div>
    <div v-if="reports.reports !== undefined">
      <vue-frappe
        class="items-center justify-center"
        id="chart"
        :labels="labels"
        type="pie"
        :height="400"
        :colors="['#e289f2', '#855cf8', '#b085ff', '#503795']"
        :dataSets="this.data"
        :tooltipOptions="{}"
        :valuesOverPoints="true"
      ></vue-frappe>
    </div>
  </div>
</template>

<script>
import { VueFrappe } from "vue2-frappe";

export default {
  props: ["reports"],
  components: {
    VueFrappe,
  },
  created() {
    // console.log(this.reports.reports[0].category);
  },
  data() {
    return {
      data: [
        {
          name: "Some Data",
          chartType: "bar",
          values: [96678, 25177, 88029, 79003],
        },
      ],
      labels: [
        this.reports.reports[0].category,
        this.reports.reports[1].category,
        this.reports.reports[2].category,
        this.reports.reports[3].category,
      ],
    };
  },
};
/* 
0: {category: "DUNNO", total: 96678, id: "1"}
1: {category: "I'm boring", total: 25177, id: "2"}
2: {category: "Money", total: 88029, id: "3"}
3: {category: "Fun", total: 79003, id: "4"}
*/
</script>

<style>
</style>