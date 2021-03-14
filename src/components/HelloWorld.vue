<template>
  <div>
    <h1>
      {{ msg }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: function () {
        return {
          message: ""
        }
      }
    }
  }
};
</script>

<style>
</style>