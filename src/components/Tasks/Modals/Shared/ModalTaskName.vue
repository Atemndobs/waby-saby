<template>
  <div class="row q-mb-sm">
    <q-input
      autofocus
      outlined
      :value="name"
      label="Task name"
      class="col"
      v-select-all
      @input="$emit('update:name', $event)"
      :rules="[ val => !! val || 'Please type something']"
      ref="name"
      clearable
    />
  </div>
</template>

<script>
  import {selectAll} from 'src/directives/directives-select-all'
    export default {
        name: "ModalTaskName",
      props: ['name'],
       directives: {
          selectAll
      }



    }
</script>

<style scoped>

</style>
