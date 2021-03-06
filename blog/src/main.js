import "v-markdown-editor/dist/v-markdown-editor.css";
import Vue from "vue";
import App from "./App.vue";
import Editor from "v-markdown-editor";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "highlight.js/styles/default.css";
import Highlight from "vue-markdown-highlight";

Vue.use(Highlight);

Vue.use(Editor);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
