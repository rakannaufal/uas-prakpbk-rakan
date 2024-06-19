<template>
  <div class="qurban-input">
    <form @submit.prevent="submitPeserta">
      <input
        v-model="newPeserta.nama"
        type="text"
        placeholder="Nama Peserta"
        required
      />
      <select v-model="newPeserta.jenisHewan" required>
        <option value="" disabled>Pilih Jenis Hewan</option>
        <option value="Sapi">Sapi</option>
        <option value="Kerbau">Kerbau</option>
        <option value="Kambing">Kambing</option>
      </select>
      <button type="submit">Tambah</button>
    </form>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const newPeserta = ref({
  nama: "",
  jenisHewan: "",
});

const emit = defineEmits(["add-Peserta"]);

const submitPeserta = () => {
  if (newPeserta.value.nama && newPeserta.value.jenisHewan) {
    emit("add-Peserta", { ...newPeserta.value });
    newPeserta.value.nama = "";
    newPeserta.value.jenisHewan = "";
  }
};
</script>

<style scoped>
.qurban-input {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
.qurban-input form {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.qurban-input input,
.qurban-input select {
  margin-right: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.qurban-input button {
  padding: 0.5rem 1rem;
  background-color: #337f29;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
}
.qurban-input button:hover {
  background-color: #2f9621;
}
</style>
