<template>
  <q-banner
    dense
    inline-actions
    class="text-white text-center"
    :class="bgColor"
  >
    <span class="text-bold text-subtitle"><slot></slot></span>

  </q-banner>
</template>

<script>
    export default {
        name: "ListBanner",
      props : ['bgColor']
    }
</script>

<style scoped>

</style>
