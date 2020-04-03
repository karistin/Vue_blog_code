<template>
  <ul>
    <v-layout class="row justify-center">
      <!-- <v-hover v-slot:default="{hover}" close-delay="100"> -->
      <router-link class="routerLink" :to="{name:'ContentList'}">
        <li>Home</li>
      </router-link>
      <router-link class="routerLink" :to="{name:'Post'}">
        <li>Posts</li>
      </router-link>
      <router-link class="routerLink" :to="{name:'About'}">
        <li>About</li>
      </router-link>
    </v-layout>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
.routerLink {
  text-decoration: none;
}
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