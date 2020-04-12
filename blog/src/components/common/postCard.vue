<template>
  <v-layout>
    <v-card class="pa-4 ma-4" style="width:100%">
      <span>
        <v-card-title>
          <slot name="header">default header</slot>
          <slot name="subtitle"></slot>
        </v-card-title>
        <v-card-subtitle style="border-bottom: 1px solid #ebeef5;"></v-card-subtitle>
      </span>

      <v-card-text>
        <slot name="text"></slot>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
export default {};
</script>

<style scoped>
</style>