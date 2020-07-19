<template>
  <q-item

    v-touch-hold:1000.mouse="showEditTaskModel"
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    @click="updateTask({id:id, updates:{completed: !task.completed}})"
    clickable
    v-ripple>
    <q-item-section side top>
      <q-checkbox :value="task.completed"
                  class="no-pointer-events"
      />
    </q-item-section>

    <q-item-section>
      <q-item-label
        :class="{ 'text-strikethrough' : task.completed }"
      v-html="$options.filters.searchHighlight(task.name, search)"
      >

       <!-- {{ task.name | searchHighlight(search)}} -->
      </q-item-label>
    </q-item-section>

    <q-item-section
      side
      v-if="task.dueDate">
      <div class="row">
        <div class="column justify-center">
          <q-icon
            class="q-mr-xs"
            name="event"
            size="18px"/>
        </div>
        <div class="column">
          <q-item-label
            caption
            class="row justify-end">
            {{ task.dueDate | niceDate }}
          </q-item-label>
          <q-item-label
            caption
            class="row justify-end">
            <small>{{ task.dueTime }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <q-btn
        @click.stop="showEditTaskModel"
        color="purple"
        dense
        flat
        icon="edit"
        round/>
    </q-item-section>

    <q-item-section side>
      <q-btn
        @click.stop="promptToDelete(id)"
        color="red"
        dense
        flat
        icon="delete_forever"
        round/>
    </q-item-section>
    <q-dialog v-model="showEditTask">
      <edit-task
        @close="showEditTask =false"
        :task="task"
        :id="id"
      />
    </q-dialog>
  </q-item>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import {
    Quasar,
    QDialog,
    ClosePopup
  } from 'quasar'
  import {ok} from 'assert';
  import EditTask from "./Modals/EditTask";
  // we import all of `date`
  import { date } from 'quasar'
  export default {
    components: {EditTask},
    data() {
      return {
        showEditTask: false
      }
    },

    props: ['task', 'id'],
    methods: {
      ...mapActions('tasks', ['updateTask', 'deleteTask']),
      promptToDelete(id) {

        this.$q.dialog({
          title: 'Confirm',
          message: 'Delete? Really?',
          cancel: true,
          persistent: true,
          ok: {
            color: 'negative',
            push: true
          },
          cancel: {
            color: 'primary'
          }
        }).onOk(() => {
          this.deleteTask(id)
        })
      },
      showEditTaskModel () {
        this.showEditTask = true
      }
    },

    computed : {
      ...mapState('tasks', ['search'])
    },
    filters: {
      niceDate(value) {
       // let newDate = addToDate(new Date(), { days: 7, month: 1 })

        return date.formatDate(value, 'MMM D' )
      },

      searchHighlight(value, search) {
        console.log(search, value)
        if (search) {

          let searchRegExp = new RegExp(search, 'ig');
        //  return  value.replace(search, '<span class="bg-yellow-6">'+ search + '</span>')
          return  value.replace(searchRegExp, (match) => {
            return '<span class="bg-yellow-6">'+ match + '</span>'
          })
        }
        return value;
      }
    }
  };
</script>
