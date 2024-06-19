<template>
  <q-page class="flex flex-center custom-page">
    <div class="qurban-list">
      <SlotCom />
      <QurbanInput @add-Peserta="addPeserta" />
      <table class="Peserta-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Peserta</th>
            <th>Jenis Hewan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <QurbanItem
            v-for="(Peserta, index) in Pesertas"
            :key="index"
            :Peserta="Peserta"
            :index="index"
            @edit-Peserta="editedPeserta(index, $event)"
            @remove-Peserta="removePeserta(index)"
          />
        </tbody>
      </table>
      <a
        href="https://github.com/rakannaufal/Rakan-Qurban"
        class="cta"
        target="_blank"
        >Link Tugas 4</a
      >
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import SlotCom from "./qurban/TitleSlot.vue";
import QurbanInput from "./qurban/QurbanInput.vue";
import QurbanItem from "./qurban/QurbanItem.vue";

const Pesertas = ref([]);

const addPeserta = (Peserta) => {
  Pesertas.value.push(Peserta);
};

const removePeserta = (index) => {
  Pesertas.value.splice(index, 1);
};

const editedPeserta = (index, updatedPeserta) => {
  Pesertas.value[index] = updatedPeserta;
};
</script>
<style scoped>
.qurban-list {
  margin: 5rem auto;
  padding: 2rem;
  width: 800px;
  background-color: #526d82;
  border-radius: 7px;
}

.Peserta-table {
  width: 100%;
  border-collapse: collapse;
}
.Peserta-table th,
.Peserta-table td {
  padding: 8px;
  border: 1px solid;
}
.Peserta-table th {
  background-color: #9db2bf;
  text-align: center;
  color: #fff;
}
td {
  text-align: center;
}
.cta {
  margin-top: 1rem;
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #949494;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
  text-decoration: none;
  font-weight: bold;
}
</style>
