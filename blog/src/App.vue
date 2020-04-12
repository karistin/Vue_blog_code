<template>
  <v-app style="background-color: #f9fafc">
    <v-container style="max-width: 900px; 
    margin: 0px auto;">
      <v-layout column>
        <!-- 타이틀  -->
        <Header></Header>
        <!-- 메뉴  -->
        <Menu></Menu>
        <router-view />
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Header from "@/components/header.vue";
import Menu from "@/components/menu.vue";
export default {
  name: "App",
  data: () => ({}),
  components: {
    Header: Header,
    Menu: Menu
  }
};
</script>

<style scoped>
</style>