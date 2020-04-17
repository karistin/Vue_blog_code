<template>
  <v-layout>
    <v-card class="pa-4 ma-4" style="width:100%">
      <div>
        <v-card-title>
          <slot name="header">default header</slot>
        </v-card-title>
        <v-card-subtitle style="border-bottom: 1px solid #ebeef5;">
          <slot name="subtitle"></slot>
        </v-card-subtitle>
      </div>
      <div>
        <v-card-text>
          <slot name="text"></slot>
        </v-card-text>
      </div>
      <v-card-actions>
        <slot name="btn"></slot>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
export default {};
</script>

<style scoped>
</style>