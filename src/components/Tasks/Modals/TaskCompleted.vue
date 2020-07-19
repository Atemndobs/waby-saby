<template>



  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <!-- Wrapping only one DOM element, defined by QBtn -->
    <div class="q-mt-lg">
      <list-banner
        bg-color="bg-green-4"
      >Completed</list-banner>
      <q-list


        separator
        bordered>
        <task

          v-for="(task, key) in tasksCompleted"
          :key="key"
          :task="task"
          :id="key"
        ></task>
      </q-list>
    </div>
  </transition>

</template>

<script>
    import ListBanner from "../../shared/ListBanner";
    export default {
        name: "TaskCompleted",
      props : ['tasksCompleted'],
      components: {
        ListBanner,
        'task': require('components/Tasks/Task.vue').default,
      }
    }
</script>

<style scoped>

</style>
