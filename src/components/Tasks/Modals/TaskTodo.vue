<template>


  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"

  >
    <!-- Wrapping only one DOM element, defined by QBtn -->
    <div>
      <list-banner
        bg-color="bg-orange-4"
      >Todo</list-banner>
      <q-list

        separator
        bordered>
        <task
          v-for="(task, key) in tasksTodo"
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
        name: "TaskTodo",
      props : ['tasksTodo'],
      components : {
        ListBanner,
        'task': require('components/Tasks/Task.vue').default,
      }
    }
</script>

<style scoped>

</style>
