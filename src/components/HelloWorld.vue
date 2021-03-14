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
 
  data(){
    return {
      count: 0,
      msg:"hello world",
    }
  }
};
</script>

<style>
</style>