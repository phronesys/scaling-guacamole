<template>
  <div class="chart-box">
    <div class="chart__text">
      <h1 class="chart__title">
        Why do you create a startup?
      </h1>
      <span class="text-gray-400">Trends</span>
    </div>
    <div class="chart__pie">
      <vue-frappe
        v-if="hasReports !== false"
        id="chart"
        class="w-full"
        :labels="hasReports"
        type="pie"
        :height="384"
        :colors="['#e289f2', '#855cf8', '#b085ff', '#503795']"
        :data-sets="getData()"
        :tooltip-options="{}"
        :values-over-points="true"
      />
    </div>
  </div>
</template>

<script>
import { VueFrappe } from "vue2-frappe";

export default {
  components: {
    VueFrappe,
  },
  props: {
    reports: {
      type: Object,
      default: function () {
        return { message: "error in reports prop in TheChart.vue" };
      },
    },
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
<style lang="postcss">

.chart-box {
  @apply 2xl:pb-4 rounded-md shadow-lg bg-white dark:bg-gray-900;
}
.chart__text {
  @apply relative top-6 left-6 mb-3 2xl:mb-16;
}
.chart__title {
  @apply text-xl text-gray-600 dark:text-indigo-300;
}
.chart__pie {
  @apply flex items-center justify-center flex-grow flex-shrink rounded-md pb-2;
}
</style>