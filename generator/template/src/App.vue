<template>
  <div id="app" class="orange">{{ version }}</div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        version: process.env.VUE_APP_VERSION
      }
    },
  }
</script>

<style lang="scss" scoped>
.orange {
  color: $brand-primary;
}
</style>
