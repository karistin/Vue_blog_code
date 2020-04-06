import Vue from "vue";

const globalBus = new Vue({
  data: {
    posts: []
  }
});

export default globalBus;
