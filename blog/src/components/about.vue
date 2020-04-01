<template>
  <v-layout class="column justify-center pa-5">
    <v-card class="elevation-16" id="font">
      <v-card-title class="px-4 py-5" style="border-bottom: 1px solid #ebeef5;">About</v-card-title>
      <v-card-text class="pa-5">
        <img src="@/assets/proFile.jpg" class="profile-image" />

        <h4>
          <a href="#school" aria-hidden="true">#</a>
          School
        </h4>
        <br />
        <p>
          School of Computing, KPU(Undergraduate)
          <br />Call OF Duty(Proceeding)
          <br />Jeongbal High School
        </p>
        <h4>
          <a href="#Contacts" aria-hidden="true">#</a>
          Contacts
        </h4>
        <br />
        <p>
          E-mail:
          <a href="mailto:seongjung1109@gmail.com">seongjung1109@gmail.com</a>
        </p>
        <h4>
          <a href="#Interests" aria-hidden="true">#</a>
          Interests
        </h4>
        <br />
        <p>
          WEB(Vue.js) , Game(Card) , Book(Fansty) , BoradGame , Anime
          <br clear="left" />
        </p>

        <i>Profile Image by Cowboy Bepop.</i>
        <p>S4JN = sejn = 성준이라고 부르면 됩니다.</p>
        <p>
          대학교에서 유니티 건들다가 군데와서 웹공부 하고 있습니다.
          <del>(둘다 독학으로 배우는거 더많은게 함정)</del>
          <br />요즘은 Vue.js에 관심이 있어 공부중입니다.
        </p>
        <br />
      </v-card-text>
    </v-card>
    <div id="disqus_thread"></div>
    <noscript>
      Please enable JavaScript to view the
      <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
    </noscript>
  </v-layout>
</template>

<script>
/**
 *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
 *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() {
  // DON'T EDIT BELOW THIS LINE
  var d = document,
    s = d.createElement("script");
  s.src = "https://s4jns-blog.disqus.com/embed.js";
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
})();
export default {};
</script>
<style scoped>
a,
h4,
p {
  font-size: 15px;
  color: black;
}
del {
  color: rgba(0, 0, 0, 0.6);
}
img {
  border: none;
  position: relative;
  max-width: 100%;
  height: auto;
  margin: 15px;
}

#font {
  background-color: white;
  font-family: Raleway;
}

.profile-image {
  /* border-radius: 10px; */
  border-radius: 30%;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 0 auto;
  display: block;
  float: right;
}
</style>