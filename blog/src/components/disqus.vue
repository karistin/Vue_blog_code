<template>
  <div id="disqus_thread"></div>
</template>

<script>
export default {
  mounted() {
    console.log("disqus");
    try {
      // var disqus_config = (function() {
      //   this.page.url = "https://blogcode.netlify.com"; // Replace PAGE_URL with your page's canonical URL variable
      //   this.page.identifier = "https://blogcode.netlify.com"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      // })
      (function() {
        // DON'T EDIT BELOW THIS LINE
        var d = document,
          s = d.createElement("script");
        s.src = "https://s4jns-blog.disqus.com/embed.js";
        s.setAttribute("data-timestamp", +new Date());
        (d.head || d.body).appendChild(s);
      })();
    } catch (e) {
      console.log("err");
    }
  }
};
</script>

<style scoped>
</style>