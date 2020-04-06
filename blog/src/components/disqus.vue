<template>
  <div id="disqus_thread"></div>
</template>

<script>
export default {
  mounted() {
    // var disqus_config = function() {
    //   this.page.url = window.location.origin;
    //   this.page.identifier = window.location.pathname;
    // };
    (function() {
      // DON'T EDIT BELOW THIS LINE
      var d = document,
        s = d.createElement("script");
      s.src = "https://s4jns-blog.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    })();
  }
};
</script>
<style scoped>
</style>