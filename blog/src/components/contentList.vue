<template>
  <v-layout class="column justify-center pa-5">
    <TextCard v-for="(post , index) in postdb" :key="index">
      <div slot="header">{{post.header}}</div>
      <div slot="subtitle">{{post.subtitle}}</div>
      <div slot="text">{{post.text}}</div>
      <div slot="btn">Read More...</div>
    </TextCard>
    {{postdb}}
  </v-layout>
</template>
<script>
import TextCard from "@/components/common/textCard.vue";
import globalBus from "@/globalBus";
export default {
  computed: {
    postdb() {
      return globalBus.posts;
    }
  },
  methods: {},
  components: {
    TextCard: TextCard
  }
};
</script>
<style scoped>
</style>