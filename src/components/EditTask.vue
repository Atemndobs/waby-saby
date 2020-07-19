
  <template>
    <q-layout view="lHh Lpr lFf">
      <q-input
        v-model="editTask"
        @keyup.enter="editTask"
        class="col"
        square

        filled
        bg-color="white"
        placeholder="Add Task"
        dense
      >

        <template v-slot:append>
          <q-btn
            @click="editTask"
            round
            dense
            flat
            icon="add" />
        </template>
      </q-input>
    </q-layout>
  </template>
