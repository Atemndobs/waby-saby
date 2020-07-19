<template>
  <div class="row q-mb-sm">
    <q-input
      clearable
      @input="$emit('update:dueDate', $event)"
      :value="dueDate"
      outlined
      type="date"
      class="col"
      label="Due Date"

    />
  </div>
</template>

<script>
    export default {
        name: "ModalDueDate",
      props :['dueDate']
    }
</script>

<style scoped>

</style>
