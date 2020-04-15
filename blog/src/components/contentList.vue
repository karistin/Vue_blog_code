<template>
  <v-layout class="column justify-center pa-5 font">
    <TextCard v-for="(post , index) in posts" :key="index">
      <div slot="header" class="header" @click="page(index)" v-html="post.attributes.title"></div>
      <div slot="subtitle" class="subtitle" v-html="post.attributes.subtitle"></div>
      <div slot="text" v-html="post.attributes.header"></div>
      <div slot="btn" @click="page(index)">Read More...</div>
    </TextCard>
  </v-layout>
</template>
<script>
import TextCard from "./common/textCard.vue";
import posts from "@/posts";

export default {
  data() {
    return {};
  },
  computed: {
    posts() {
      return posts;
    }
  },
  methods: {
    page(index) {
      this.$router.push({ name: "dynamicComponent", params: { no: index } });
    }
  },
  components: {
    TextCard: TextCard
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
a {
  color: purple;
}
</style>