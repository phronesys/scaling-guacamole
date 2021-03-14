<template>
  <div>
    <h1>
      {{ msg }}
    </h1>
    <button @click="count++">
      Add up
    </button>
    <p>Total count: {{ count }}</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: function () {
        return {
          message: "",
        };
      },
    },
  },
  data(){
    return {
      count: 0
    }
  }
};
</script>

<style>
</style>