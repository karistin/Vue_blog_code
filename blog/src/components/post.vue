<template>
  <v-layout class="column justify-center pa-5 font">
    <PostCard v-for="(ca,index) in post" :key="index">
      <span slot="header" class="header">{{ca.name}}</span>
      <span slot="subtitle" class="subtitle">category</span>
      <li v-for="(caTitle , index) in ca.title" :key="index" slot="text" class="pa-0">
        <t class="text">{{caTitle}}</t>
      </li>
    </PostCard>
  </v-layout>
</template>

<script>
import postCard from "./common/postCard.vue";
import posts from "@/posts";
export default {
  data() {
    return {
      show: false
    };
  },
  computed: {
    post() {
      var objs = [
        { name: "Programming", title: [], date: [] },
        { name: "Music", title: [], date: [] },
        { name: "Setting", title: [], date: [] }
      ];
      //동적으로 카태고리 추가!
      // var category = [];

      //for in 문법 조심!
      for (var post in posts) {
        for (var obj in objs) {
          if (objs[obj].name == posts[post].attributes.category) {
            objs[obj].title.push(posts[post].attributes.title);
            objs[obj].date.push(posts[post].attributes.subtitle);
          }
        }
      }

      return objs;
    }
  },
  components: {
    PostCard: postCard
  }
};
</script>

<style scoped>
.font {
  font-family: "Raleway";
}
.header {
  color: #2196f3;
  font-size: 18px;
}
.subtitle {
  color: #888;
  font-size: 10.6px;
  padding-left: 5px;
}
.text {
  font-size: 16.2px;
  color: #2196f3;
  cursor: pointer;
  list-style-type: circle;
}
</style>