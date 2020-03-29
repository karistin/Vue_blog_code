<template>
  <div class="content">
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
      <v-container fluid>
        <v-layout column>
          <!-- 타이틀  -->

          <h1 class="text-center">karistin's blog</h1>

          <!-- 본문  -->
          <ul>
            <v-layout row justify-center>
              <button @click="actions">
                <li>
                  <v-flex xs2>Home</v-flex>
                </li>
              </button>
              <button @click="actions">
                <li>
                  <v-flex xs2>Posts</v-flex>
                </li>
              </button>
              <button @click="actions">
                <li>
                  <v-flex xs2>About</v-flex>
                </li>
              </button>
            </v-layout>
          </ul>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "App",
  data: () => ({}),
  methods: {
    actions() {
      alert("click");
    }
  },
  components: {}
};
</script>
<style scoped>
h1 {
  font-family: "Cute Font", cursive;
  font-size: 65px;
  color: #8bc34a;
}
.content {
  max-width: 900px;
  margin: 0px 60px auto;
  background-color: rgb(249, 250, 292);
}

li {
  padding-left: 30px;
  padding-right: 30px;
}
li:hover {
  background-color: rgb(199, 200, 202);
}

ol,
ul {
  list-style: none;
  font-family: "Cute Font", cursive;
  font-size: 35px;
  border-bottom: 1px solid black;
}
</style>
