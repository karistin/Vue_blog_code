import Vue from "vue";
import VueRouter from "vue-router";
import About from "@/components/about.vue";
import Post from "@/components/post.vue";
import ContentList from "@/components/contentList.vue";
import dynamicComponent from "@/components/ex.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/About",
    name: "About",
    component: About
  },
  {
    path: "/Post",
    name: "Post",
    component: Post
  },
  {
    path: "/",
    name: "ContentList",
    component: ContentList
  },
  {
    path: "/:no",
    name: "dynamicComponent",
    component: dynamicComponent
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
