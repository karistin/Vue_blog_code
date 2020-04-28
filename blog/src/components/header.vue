<template>
  <div>
    <h1 class="text-center">S4JN's blog</h1>
    <div v-highlight v-html="content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "# h1"
    };
  }
};
</script>

<style scoped>
h1 {
  font-family: "Cute Font", cursive;
  font-size: 65px;
  color: #8bc34a;
}
</style>