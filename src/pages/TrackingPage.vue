<!-- src/pages/TrackingPage.vue -->
<template>
    <div class="tw-p-6">
      <h1 class="tw-text-2xl tw-font-bold">Seguimiento de Paquete</h1>
      <q-input v-model="trackingNumber" label="Número de Seguimiento" class="tw-mt-4" />
      <q-btn label="Rastrear" color="primary" @click="trackPackage" class="tw-mt-4" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const trackingNumber = ref('');
  
  function trackPackage() {
    // Lógica para rastrear el paquete
    console.log(`Rastreando paquete con número: ${trackingNumber.value}`);
  }
  </script>
  