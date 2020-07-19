

export default {
  methods: {
    onSubmit() {
      this.$refs.modalTaskName.$refs.name.validate()

      if (!this.$refs.modalTaskName.$refs.hasError) {
        this.submitTask()
      }
    },

    components: {ModalButtons, ModalDueTime, ModalDueDate, ModalTaskName, ModalHeader},
  }
}
