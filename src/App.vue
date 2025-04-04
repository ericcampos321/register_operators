<template>
   <div>
      <Toast />
      <Navbar />
      <OperadoraList />
      <router-view />
   </div>
</template>

<script setup lang="ts">
import Navbar from './components/ui/navbar.vue';
</script>