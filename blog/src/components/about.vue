<template>
  <v-layout class="column justify-center pa-5 font">
    <v-card class="elevation-16">
      <v-card-title class="px-4 py-5" style="border-bottom: 1px solid #ebeef5;">About</v-card-title>
      <v-card-text class="pa-5">
        <img src="@/assets/aboutMe.jpg" class="profile-image" />
        軍隊 / Military
        국민의 주권, 국익, 안보를 위해 공인된 무력 사용이 가능한 군인으로 구성된 국가 조직이다. 군대는 물리적 폭력수단을 합법적으로 독점하고 있는 최상위의 권한을 가진다.
        군대는 최소한의 국가 안보를 위해 반드시 필요하지만 무력집단임에도 불구하고 평화를 추구하는 것이 가장 이상적이다.
        사회 공동체의 안전과 보안을 무력으로 지켜낸다는 개념은 선사 시대부터 있어왔지만 평소에는 생산 활동에 종사하다 전쟁이 나면 모집되는 징집병,
        민병대와 달리 전문적인 직업으로 독립된지는 오래되지 않았다. 용병은 전문적인 직업이긴 했지만 철저한 명령 체계와 어느 한 나라에 소속되어 일하는 조직이란 의미에는 포함되지 않았다.
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
export default {};
</script>
<style scoped>
img {
  border: none;
}
.font {
  font-family: Raleway;
}
.profile-image {
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 0 auto;
  display: block;
  float: right;
}
</style>