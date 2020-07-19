<template>
<q-input
outlined
  class="col"
    v-model="searchField"
v-select-all
    label="Search"
@keyup.esc="searchField=''"
>
<!--
<q-input
  class="col"
    bottom-slots
    v-model="searchField"
    label="Search"
    counter
    maxlength="100"
>-->


    <template v-slot:append>
     <q-icon
        v-if="searchField !== ''"
        name="close"
        @click="searchField = ''"
        class="cursor-pointer" />
      <q-icon name="search" />
    </template>

</q-input>
</template>

<script>
  import {selectAll} from "../../../directives/directives-select-all";
  import {mapState,mapActions } from 'vuex'
    export default {
        name: "Search",

      computed : {
          ...mapState('tasks', ['search']),
          searchField: {
            get() {
             return this.search
            },
            set(value) {
              this.setSearch(value)
            }
          }
      },
      methods: {
        ...mapActions('tasks', ['setSearch'])
      },
      directives : {
          selectAll
      }
    }
</script>

<style scoped>

</style>
