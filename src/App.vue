<template>
  <q-layout>
    <!-- Header -->
    <q-header elevated class="bg-primary text-white header" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="q-mx-md"><b>MyCuaca</b></q-toolbar-title>

        <q-tabs align="right" class="tugas" v-model="currentTab">
          <q-route-tab to="/">Cuaca</q-route-tab>
          <q-route-tab to="/tugas1">Tugas 1</q-route-tab>
          <q-route-tab to="/tugas2">Tugas 2</q-route-tab>
          <q-route-tab to="/tugas3">Tugas 3</q-route-tab>
          <q-route-tab to="/tugas4">Tugas 4</q-route-tab>
          <q-route-tab to="/tugas5">Tugas 5</q-route-tab>
          <q-route-tab to="/tugas6">Tugas 6</q-route-tab>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <!-- Content -->
    <q-page-container class="container">
      <router-view></router-view>
    </q-page-container>

    <!-- Footer -->
    <q-footer elevated class="bg-grey-8 text-white footer">
      <q-toolbar>
        <q-toolbar-title>
          <div align="center">Copyright © 2024 MyCuaca.</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      currentTab: this.$route.path,
    };
  },
  watch: {
    $route(to) {
      this.currentTab = to.path;
    },
  },
};
</script>

<style scoped>
.tugas {
  font-weight: bold;
  font-size: 1rem;
}
.q-mt-md {
  margin-top: 1rem;
}
.header {
  padding: 1.4rem 4%;
}
.custom-page {
  margin-top: -3rem;
}
.container {
  background-image: url(../../public/bg.jpg);
  background-size: cover;
}
</style>
