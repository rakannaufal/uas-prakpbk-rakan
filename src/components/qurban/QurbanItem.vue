<template>
  <tr align="center">
    <td>{{ index + 1 }}</td>
    <td>
      <span v-if="!isEditing">{{ Peserta.nama }}</span>
      <input v-else v-model="editedPeserta.nama" />
    </td>
    <td>
      <span v-if="!isEditing">{{ Peserta.jenisHewan }}</span>
      <select v-else v-model="editedPeserta.jenisHewan">
        <option value="Sapi">Sapi</option>
        <option value="Kerbau">Kerbau</option>
        <option value="Kambing">Kambing</option>
      </select>
    </td>
    <td>
      <button class="edit" v-if="!isEditing" @click="startEditing">Edit</button>
      <button class="save" v-else @click="saveEdit">Save</button>
      <button class="remove" @click="removePeserta">Remove</button>
    </td>
  </tr>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  Peserta: Object,
  index: Number,
});

const isEditing = ref(false);
const editedPeserta = ref({ ...props.Peserta });

const startEditing = () => {
  isEditing.value = true;
};

const saveEdit = () => {
  isEditing.value = false;
  emit("edit-Peserta", editedPeserta.value);
};

const removePeserta = () => {
  emit("remove-Peserta");
};

const emit = defineEmits(["edit-Peserta", "remove-Peserta"]);
</script>

<style scoped>
.edit {
  margin: 10px 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #22648e;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
}
.remove {
  margin: 10px 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #aa3f2c;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
}
.save {
  margin: 10px 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #337f29;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
}
.edit:hover {
  background-color: #1d6d9f;
}
.remove:hover {
  background-color: #be361e;
}
.save:hover {
  background-color: #2f9621;
}
input,
select {
  padding: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
span {
  font-weight: 500;
}
td {
  font-size: 1rem;
  color: #fff;
  font-weight: 500;
  border: solid 1px #fff;
}
</style>
