<template>
  <div class="bg-white rounded-md shadow-lg">
    <div class="relative top-6 left-6 mb-16">
      <h1 class="text-gray-600 text-xl">Why do you create a startup?</h1>
      <span class="text-gray-400">Trends</span>
    </div>
    <vue-frappe
      v-if="hasReports !== false"
      class="items-center justify-center"
      id="chart"
      :labels="hasReports"
      type="pie"
      :height="400"
      :colors="['#e289f2', '#855cf8', '#b085ff', '#503795']"
      :dataSets="this.getData()"
      :tooltipOptions="{}"
      :valuesOverPoints="true"
    ></vue-frappe>
  </div>
</template>

<script>
import { VueFrappe } from "vue2-frappe";

export default {
  props: ["reports"],
  components: {
    VueFrappe,
  },
  computed: {
    hasReports() {
      return this.reports.reports !== undefined ? this.getLabels() : false;
    },
  },
  methods: {
    getLabels() {
      const labels = [
        this.reports.reports[0].category,
        this.reports.reports[1].category,
        this.reports.reports[2].category,
        this.reports.reports[3].category,
      ];
      return labels;
    },
    getData() {
      const data = [
        {
          name: "Some Data",
          chartType: "bar",
          values: this.getValues(),
        },
      ];
      return data;
    },
    getValues() {
      const values = [
        this.reports.reports[0].total,
        this.reports.reports[1].total,
        this.reports.reports[2].total,
        this.reports.reports[3].total,
      ];
      return values;
    },
  },
};
</script>
<style>
</style>