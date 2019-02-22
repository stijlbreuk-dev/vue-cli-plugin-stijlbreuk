<template>
  <div id="app" class="orange">
    <symbols></symbols>
    <span>
      <svg-icon :iconId="'icon_ui_info'"></svg-icon>
      app version: {{ version }}
    </span>
  </div>
</template>

<script>
  import Symbols from '@/components/svg-symbols';
  export default {
    name: 'app',
    data() {
      return {
        version: process.env.VUE_APP_VERSION
      }
    },
    components: {
      Symbols
    }
  }
</script>

<style lang="scss">
@import '@/styles/app.scss';
.orange {
  color: $brand-primary;
}
</style>
