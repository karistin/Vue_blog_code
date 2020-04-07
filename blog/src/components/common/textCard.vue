<template>
  <v-layout>
    <v-card class="pa-4 ma-4">
      <div @click="page()">
        <v-card-title>
          <slot name="header">default header</slot>
        </v-card-title>
        <v-card-subtitle style="border-bottom: 1px solid #ebeef5;">
          <slot name="subtitle">default subtitle</slot>
        </v-card-subtitle>
      </div>
      <div>
        <v-card-text>
          <slot name="text">default text</slot>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="deep-purple accent-4" @click="page()">
            <slot name="btn"></slot>
          </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  methods: {
    page() {
      this.$router.push({ name: "Post", params: { no: "first.md" } });
    }
  }
};
</script>

<style scoped>
</style>