<template>
<q-select
    outlined
    filled
    v-model="sortBy"
    emit-value
    map-options
    :options="options"
    label="Sort by"
    stack-label
    class="col q-ml-sm"
    :dense="dense"
    :options-dense="denseOpts"
    />
</template>

<script>
  import {mapState, mapActions} from 'vuex'
    export default {
        name: "Sort",
      data () {
        return {

          options: [
           {
             label: 'Name',
             value:'name'
           },
           {
             label: 'Date',
             value:'dueDate'
           },
           {
             label: 'Status',
             value:'completed'
           },
           {
             label: 'Owner',
             value:'user'
           },
          ],

          dense: false,
          denseOpts: false
        }
      },
      computed : {
          ...mapState('tasks', ['sort']),
        sortBy : {
            get(){
              return this.sort
            },
          set(value){
              this.setSort(value)
          }
        }
      },
      methods : {
        ...mapActions('tasks', ['setSort']),
      }
    }
</script>

<style scoped>
.q-select {
  flex: 0 0 120px;
}
</style>
