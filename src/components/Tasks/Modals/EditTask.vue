<template>
  <q-card>
    <ModalHeader>Edit Task</ModalHeader>


    <q-form @submit.prevent="onSubmit">

      <q-card-section class="q-pt-none">
        <modal-task-name
          :name.sync="taskToSubmit.name"
          ref="modalTaskName"
        />
        <modal-due-date :due-date.sync="taskToSubmit.dueDate"/>
        <modal-due-time
          :due-time.sync="taskToSubmit.dueTime"
        />
      </q-card-section>

      <modal-buttons/>

    </q-form>

    <!--    <form @submit.prevent="onSubmit">
          <q-card-section>
            <div class="row q-mb-sm">
              <q-input
                outlined
                v-model="taskToSubmit.name"
                :rules="[val => !!val || 'Field is required']"
                autofocus
                ref="name"
                label="Task name"
                class="col">
                <template v-slot:append>
                  <q-icon
                    v-if="taskToSubmit.name"
                    @click="taskToSubmit.name = ''"
                    name="close"
                    class="cursor-pointer" />
                </template>
              </q-input>
            </div>

            <div class="row q-mb-sm">
              <q-input
                outlined
                label="Due date"
                v-model="taskToSubmit.dueDate">
                <template v-slot:append>
                  <q-icon
                    v-if="taskToSubmit.dueDate"
                    @click="clearDueDate"
                    name="close"
                    class="cursor-pointer" />
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy>
                      <q-date v-model="taskToSubmit.dueDate" />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>

            <div
              v-if="taskToSubmit.dueDate"
              class="row q-mb-sm">
              <q-input
                outlined
                label="Due time"
                v-model="taskToSubmit.dueTime"
                class="col">
                <template v-slot:append>
                  <q-icon
                    v-if="taskToSubmit.dueDate"
                    @click="taskToSubmit.dueTime = ''"
                    name="close"
                    class="cursor-pointer" />
                  <q-icon name="access_time" class="cursor-pointer">
                    <q-popup-proxy>
                      <q-time
                        v-model="taskToSubmit.dueTime"
                      />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>

          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              label="Save"
              color="primary"
              type="submit" />
          </q-card-actions>
        </form>-->
  </q-card>
</template>

<script>
  import {mapActions} from 'vuex'
  import ModalHeader from "./Shared/ModalHeader";
  import ModalTaskName from "./Shared/ModalTaskName";
  import ModalDueDate from "./Shared/ModalDueDate";
  import ModalDueTime from "./Shared/ModalDueTime";
  import ModalButtons from "./Shared/ModalButtons";
//  import  mixinAddEditTask from 'src/mixins/mixin-add-edit-task'

  export default {
  //  mixins: [mixinAddEditTask],

    props: ['task', 'id'],
    data() {
      return {
        taskToSubmit: {}
      }

    },
    methods: {
      ...mapActions('tasks', ['updateTask']),
      onSubmit() {
        this.$refs.modalTaskName.$refs.name.validate()

        if (!this.$refs.modalTaskName.$refs.hasError) {
          this.submitTask()
        }
      },
      submitTask() {
        this.updateTask({
          id:this.id,
          updates: this.taskToSubmit
        })
        this.$emit('close')
      },

    },
    mounted() {
      this.taskToSubmit = Object.assign({}, this.task)

      console.log(document.getElementById('.q-field__native'));

    },

    components: {ModalButtons, ModalDueTime, ModalDueDate, ModalTaskName, ModalHeader},
  };
</script>
