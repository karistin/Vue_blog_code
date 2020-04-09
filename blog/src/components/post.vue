<template>
  <div>
    <h1>This component mounts `../contents/${file name which is passed through props}.md` as Vue component dynamically</h1>
    <h2>{{ title }}</h2>
    <component :is="dynamicComponent" />
  </div>
</template>

<script>
export default {
  //   props: ["fileName"],
  props: ["first"],
  data() {
    return {
      title: null,
      dynamicComponent: null
    };
  },
  created() {
    // const markdown = require(`~/articles/${this.fileName}.md`);
    const markdown = require(`@/posts/first.md`);
    this.title = markdown.attributes.header;
    this.dynamicComponent = markdown.vue.component;

    // Use Async Components for the benefit of code splitting
    // https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components
    // this.dynamicComponent = () => import(`~/articles/${this.fileName}.md`).then(({ vue }) => vue.component
  }
};
</script>