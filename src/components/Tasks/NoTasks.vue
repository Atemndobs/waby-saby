<template>


  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <!-- Wrapping only one DOM element, defined by QBtn -->
    <q-banner class="bg-grey-3">
      <template v-slot:avatar>
        <q-icon
          name="thumb_up_alt"
          color="primary" />
      </template>
      Nothing  todo for you now
      <template v-slot:action>
        <q-btn
          @click="$root.$emit('showAddTask')"
          flat
          color="primary"
          label="ADD TASK" />
      </template>
    </q-banner>
  </transition>
</template>

<script>
    export default {
        name: "NoTasks"
    }
</script>

<style scoped>

</style>
