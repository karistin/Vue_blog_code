<template>
  <v-layout class="column justify-center pa-5 font" :class="{ 'font' :create}">
    <Dynamic>
      <div slot="header" :class="{ 'header' :create}">
        {{title}}
        <v-btn text color="deep-purple accent-4" right absolute @click="pageToPost()">
          <v-icon dark left>mdi-keyboard-backspace</v-icon>Back
        </v-btn>
      </div>
      <div slot="subtitle" :class="{'subtitle':create}">{{subtitle}}</div>
      <div slot="text">
        <component :is="dynamicComponent"></component>
      </div>

      <!-- <v-btn color="white darken-2" px-4 black left absolute @click="pageToPost()">
          <v-icon dark left>mdi-keyboard-backspace</v-icon>Back TO Post
      </v-btn>-->
      <div slot="btn">
        <v-btn text color="deep-purple accent-4" @click="pageToPost()">
          <v-icon dark left>mdi-keyboard-backspace</v-icon>Back TO Post
        </v-btn>
      </div>
    </Dynamic>
    <!-- <Disqus></Disqus> -->
  </v-layout>
</template>

<script>
import disqus from "@/components/disqus.vue";
import Dynamic from "./common/dynamic.vue";
export default {
  props: ["fileName"],
  data() {
    return {
      title: null,
      subtitle: null,
      dynamicComponent: null,
      markdown: "",
      create: false
    };
  },
  created() {
    this.fetchData();
    // const markdown = require(`@/posts/${this.fileName}.md`);
    this.title = this.markdown.attributes.title;
    this.subtitle = this.markdown.attributes.subtitle;

    this.dynamicComponent = this.markdown.vue.component;

    // Use Async Components for the benefit of code splitting
    // https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components
    // this.dynamicComponent = () => import(`~/articles/${this.fileName}.md`).then(({ vue }) => vue.component
  },
  methods: {
    fetchData() {
      this.markdown = require(`@/posts${this.$route.path}.md`);
      this.create = true;
    },
    pageToPost() {
      this.$router.push({ name: "ContentList" });
    }
  },

  components: {
    Disqus: disqus,
    Dynamic: Dynamic
  }
};
</script>
<style scoped>
.font {
  font-family: "Raleway";
}

.header {
  color: #2196f3;
  cursor: pointer;
}
.subtitle {
  color: #888;
  cursor: pointer;
}
</style>