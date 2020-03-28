<template>
  <v-app>
    <!-- <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>-->

    <h1 class="text-center">karistin's blog</h1>
    <!-- <v-bottom-navigation :value="activeBtn" color="purple lighten-1"> -->
    <!-- <v-menu>
      <v-btn>
        <span>Home</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Posts</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>About</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-menu>-->

    <v-card class="mx-auto">
      <v-content>
        <HelloWorld />
      </v-content>
    </v-card>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    activeBtn: 1
  })
};
</script>
<style scoped>
h1 {
  font-family: "Cute Font";
  font-size: 65px;
  color: #8bc34a;
}
</style>
