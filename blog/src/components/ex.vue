<template>
  <div>
    <component :is="dynamicComponent" />
    <Disqus></Disqus>
  </div>
</template>

<script>
import disqus from "@/components/disqus.vue";
import EventBus from "@/EventBus.js";
export default {
  props: ["fileName"],
  data() {
    return {
      title: null,
      dynamicComponent: null,
      data: ""
    };
  },
  created() {
    EventBus.$on("push-msg", index => {
      console.log(index);
      this.data = index;
    });
    // console.log(this.data);
    const markdown = require(`@/posts/${this.fileName}.md`);
    this.title = markdown.attributes.title;
    this.dynamicComponent = markdown.vue.component;

    // Use Async Components for the benefit of code splitting
    // https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components
    // this.dynamicComponent = () => import(`~/articles/${this.fileName}.md`).then(({ vue }) => vue.component
  },

  components: {
    Disqus: disqus
  }
};
</script>