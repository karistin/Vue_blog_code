<template>
  <v-layout class="column justify-center pa-5 font">
    <PostCard v-for="(category,index) in categorys" :key="index">
      <span slot="header" class="header">{{category.name}}</span>
      <span slot="subtitle" class="subtitle">category</span>
      <li
        v-for="(data , index) in category.datas"
        :key="index"
        slot="text"
        class="pa-0 text"
        @click="page(data.index)"
      >
        <span>{{data.title}}</span>
        <span style="padding-left : 7px;">{{data.date}}</span>
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
    categorys() {
      var objs = [
        { name: "Programming", datas: [] },
        { name: "Music", datas: [] },
        { name: "Setting", datas: [] }
      ];
      //동적으로 카태고리 추가!
      // var category = [];

      //for in 문법 조심!
      for (var post in posts) {
        for (var obj in objs) {
          if (objs[obj].name == posts[post].attributes.category) {
            var categoryData = {
              title: posts[post].attributes.title,
              date: posts[post].attributes.subtitle,
              index: post
            };
            objs[obj].datas.push(categoryData);
            // objs[obj].title.push(posts[post].attributes.title);
            // objs[obj].date.push(posts[post].attributes.subtitle);
          }
        }
      }

      return objs;
    }
  },
  methods: {
    page(index) {
      this.$router.push({ name: "dynamicComponent", params: { no: index } });
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
  cursor: pointer;
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