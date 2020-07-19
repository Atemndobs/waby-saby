<template>
  <div
    class="row q-mb-sm">
    <q-input
      clearable
      @input="$emit('update:dueTime', $event)"
      :value="dueTime"
      outlined
      type="time"
      class="col"
      label="Due time"
    />
  </div>
</template>

<script>
    export default {
        name: "ModalDueTime",
      props :['dueTime']
    }
</script>

<style scoped>

</style>
