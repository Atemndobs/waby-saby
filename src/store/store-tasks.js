import Vue from 'vue'
import { uid } from 'quasar'
const state = {
/*  tasks: [
    {
      id: 1,
      name: 'Go to shop',
      completed: false,
      dueDate: '2019/05/12',
      dueTime: '18:30'
    },
    {
      id: 2,
      name: 'Get bananas',
      completed: false,
      dueDate: '2019/05/13',
      dueTime: '14:00'
    },
    {
      id: 3,
      name: 'Get apples',
      completed: false,
      dueDate: '2019/05/14',
      dueTime: '16:00'
    }
  ]
  */
  tasks: {
    'ID1' :{      id: 1,
      name: 'Go to shop',
      completed: false,
      dueDate: '2019-05-12',
      dueTime: '18:30'},
    'ID2' :{      id: 2,
      name: 'Get bananas',
      completed: false,
      dueDate: '2019-05-13',
      dueTime: '14:00'},
    'ID3' :{      id: 3,
      name: 'Put apples',
      completed: false,
      dueDate: '2019-09-14',
      dueTime: '16:00'},
    'ID4' :{      id: 4,
      name: 'Do more Tutorials',
      completed: false,
      dueDate: '2020-06-30',
      dueTime: '16:00'},
    'ID5' :{      id: 5,
      name: 'Everthing else',
      completed: true,
      dueDate: '2020-05-01',
      dueTime: '16:00'},
    'ID6' :{      id: 6,
      name: 'Things to see',
      completed: false,
      dueDate: '2021-10-14',
      dueTime: '17:00'},
    'ID7' :{      id: 7,
      name: 'Dope things',
      completed: false,
      dueDate: '2020-05-24',
      dueTime: '16:00'},
    'ID8' :{      id: 8,
      name: 'Enter the Contest',
      completed: true,
      dueDate: '2019-08-14',
      dueTime: '18:30'},
    'ID9' :{      id: 9,
      name: 'Wash Dishes',
      completed: false,
      dueDate: '2020-05-17',
      dueTime: '6:00'},
    'ID10' :{      id: 10,
      name: 'Wash Floor',
      completed: true,
      dueDate: '2020-05-14',
      dueTime: '19:00'}
  },
  search:'',
  sort: 'name'
}

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id) {
    Vue.delete(state.tasks, id)
  },
  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  },
  setSearch(state, value){
    state.search = value
  },

  setSort(state, value){
    state.sort = value
  },

}

const actions =  {
  updateTask({ commit }, payload) {
    commit ('updateTask', payload)
  },
  deleteTask({ commit }, id) {
    commit ('deleteTask', id)
  },

  addTask({commit}, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    commit('addTask', payload)
  },

  setSearch({commit}, value){
    commit ('setSearch', value)
  },

  setSort({commit}, value){
    commit ('setSort', value)
  },

}

const getters = {

  tasksSorted: (state) => {
    let tasksSorted = {},
    keysOrdered = Object.keys(state.tasks)

    keysOrdered.sort((a, b) => {
      let taskAProp = state.tasks[a][state.sort].toLowerCase(),
        taskBProp = state.tasks[b][state.sort].toLowerCase()

      if (taskAProp > taskBProp ) return 1;
      else if (taskAProp < taskBProp ) return -1;
      else return 0;

      return
    })

    keysOrdered.forEach((key) => {
      tasksSorted[key] = state.tasks[key]
    })

    return tasksSorted
  },

  tasksFiltered: (state, getters) => {
    let tasksSorted = getters.tasksSorted
    let tasksFiltered = {};
    if (state.search) {
      // populate  empty object

      Object.keys(tasksSorted).forEach(function(key) {
        let task = tasksSorted[key],
        taskNameLowerCase = task.name.toLowerCase(),
          searchLowerCase = state.search.toLowerCase()

        if (taskNameLowerCase.includes(searchLowerCase)) {
          tasksFiltered[key] = task
        }
      })
      return tasksFiltered;
    }
    return tasksSorted
  },

  tasksTodo : (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    Object.keys(tasksFiltered).forEach(function (key) {
      let task = tasksFiltered[key]
      if (!task.completed){
        tasks[key] = task
      }
    })
    return tasks
  },

  tasksCompleted : (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    Object.keys(tasksFiltered).forEach(function (key) {
      let task = tasksFiltered[key]
      if (task.completed){
        tasks[key] = task
      }
    })
    return tasks
  },


}

export default {
  namespaced : true,
  state,
  mutations,
  actions,
  getters
}
