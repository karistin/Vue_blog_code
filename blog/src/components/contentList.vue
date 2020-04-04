<template>
  <v-layout class="column justify-center pa-5 font">
    <TextCard v-for="(post , index) in postdb" :key="index">
      <div slot="header" class="header" v-html="post.header"></div>
      <div slot="subtitle" class="subtitle" v-html="post.subtitle"></div>
      <div slot="text" v-html="post.text"></div>
      <div slot="btn">Read More...</div>
    </TextCard>
    <TextCard>
      <div slot="header" class="header">{{ posts.attributes.header}}</div>
      <div slot="subtitle" class="subtitle">{{posts.attributes.subtitle }}</div>
      <div slot="text" v-html="posts.html"></div>
      <div slot="btn">Read More...</div>
    </TextCard>
  </v-layout>
</template>
<script>
import TextCard from "@/components/common/textCard.vue";
import globalBus from "@/globalBus";
import posts from "@/posts/first.md";
export default {
  computed: {
    postdb() {
      return globalBus.posts;
    },
    posts() {
      return posts;
    }
  },
  methods: {},
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
</style>