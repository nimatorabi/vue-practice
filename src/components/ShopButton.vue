<template>
  <div>
    <button @click="buttonClicked">Add</button>
  </div>
</template>

<script>
export default {
  methods: {
    buttonClicked() {
      this.$emit("buttonClicked");
    }
  }
};
</script>

<style>
</style>