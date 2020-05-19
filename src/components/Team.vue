<template>
  <div id="team">
    <!-- <h2>This is about our team!</h2> -->
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#team {
  padding: 0.6rem 1rem;
  margin: 1rem auto;
  width: 60%;
  border: 1px solid rgba(0, 0, 0, 0.171);
  border-radius: 3px;
  margin-bottom: 0.5rem;
}
</style>