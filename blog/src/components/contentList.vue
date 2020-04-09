<template>
  <v-layout class="column justify-center pa-5 font">
    <TextCard v-for="(post , index) in posts" :key="index">
      <div slot="header" class="header" v-html="post.attributes.title"></div>
      <div slot="subtitle" class="subtitle" v-html="post.attributes.subtitle"></div>
      <!-- <div slot="text" v-html="post.html.slice(0, 250)"></div> -->
      <div slot="text">{{post.attributes.header}}</div>
      <div slot="btn">Read More...</div>
      <!-- <div slot="text">
        <ex :fileName="index"></ex>
      </div>-->
    </TextCard>
  </v-layout>
</template>
<script>
import TextCard from "./common/textCard.vue";
import posts from "@/posts";
// import ex from "@/components/ex.vue";

export default {
  data() {
    return {
      readMoreActivated: true
    };
  },
  computed: {
    posts() {
      return posts;
    }
  },
  methods: {
    page() {
      // console.log(index);
      // this.$router.push({ name: "Post" });
    }
  },
  components: {
    TextCard: TextCard
    // ex: ex
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