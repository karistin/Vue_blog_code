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
    <div style="position:fixed; bottom:15px;right:15px;" @click="Top()">
      <a href="#header">
        <img src="@/assets/Top.png" title="위로가기" />
      </a>
    </div>
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
  },
  methods: {
    Top() {
      console.log(this.$router.options.scrollBehavior());
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
</style>