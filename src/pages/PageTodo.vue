<template>

  <q-page >

<div class="q-pa-md-absolute full-width full-height column">
      <div class="row q-mb-lg">
      <search />
      <sort/>
    </div>
    <p v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length">No search results</p>

  
      <no-tasks
        v-if="!Object.keys(tasksTodo).length && !search"
      />
      <task-todo
        v-if="Object.keys(tasksTodo).length"
        :tasks-todo="tasksTodo"
      />
      <task-completed
        v-if="Object.keys(tasksCompleted).length"
        :tasks-completed="tasksCompleted"
      />
    </q-scroll-area>


<div class="absolute-bottom text-center q-mb-lg ">
      <q-btn
      @click="showAddTask = true"
      round
      color="primary"
      size="24px"
      icon="add"
    />
</div>
</div>




    <q-dialog v-model="showAddTask">
   <add-task @close="showAddTask =false"
   />
    </q-dialog>
  </q-page>
</template>

<script>
  import {mapGetters, mapState} from 'vuex'
  import TaskTodo from "../components/Tasks/Modals/TaskTodo";
  import TaskCompleted from "../components/Tasks/Modals/TaskCompleted";
  import NoTasks from "../components/Tasks/NoTasks";
  import Search from "../components/Tasks/Tools/Search";
  import Sort from "../components/Tasks/Tools/Sort";
	export default {
    data() {
      return {
        showAddTask: false
      }
    },
	  computed: {
	    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted', ]),
      ...mapState('tasks', ['search'])
    },
    components: {
      Sort,
      Search,
      NoTasks,
      TaskCompleted,
      TaskTodo,
	    'add-task': require('components/Tasks/Modals/AddTask.vue').default
    },
    mounted() {
      this.$root.$on('showAddTask', ()=>{
        this.showAddTask = true
      })
    }

	}
</script>

<style >
.q-scroll-area-tasks {
  display: flex;
  flex-grow: 1;
}
</style>
