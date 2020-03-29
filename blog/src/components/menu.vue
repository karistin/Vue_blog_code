<template>
  <ul>
    <v-layout row justify-center>
      <button @click="actions">
        <li>Home</li>
      </button>
      <button @click="actions">
        <li>Posts</li>
      </button>
      <button @click="actions">
        <li>About</li>
      </button>
    </v-layout>
  </ul>
</template>

<script>
export default {
  methods: {
    actions(e) {
      console.log(e);
    }
  }
};
</script>

<style scoped>
li {
  padding: 0px 30px;
}
li:hover {
  background-color: rgb(199, 200, 202);
}
ol,
ul {
  list-style: none;
  font-family: "Cute Font", cursive;
  font-size: 30px;
  border-bottom: 1px solid #e6e6e6;
}
button:focus {
  outline: none;
  border: none;
}
</style>