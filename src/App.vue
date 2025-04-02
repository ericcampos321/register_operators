<template>
   <div>
      <Toast />
      <Navbar />
      <OperadoraList />
   </div>
</template>

<script setup lang="ts">
import OperadoraList from './components/OperatorsList.vue';
import Navbar from './components/ui/navbar.vue';
</script>