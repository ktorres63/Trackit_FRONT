<!-- src/pages/TrackingPage.vue -->
<template>
  <div class="tw-p-6">
    <h1 class="tw-text-2xl tw-font-bold">Seguimiento de Paquete</h1>

    <!-- Input para ingresar el número de seguimiento -->
    <q-input
      v-model="trackingNumber"
      label="ID del Paquete"
      class="tw-mt-4"
      @keyup.enter="trackPackage" 
    />

    <!-- Botón para rastrear el paquete -->
    <q-btn
      label="Rastrear"
      color="primary"
      @click="trackPackage"
      class="tw-mt-4"
      :loading="isLoading" 
      :disable="isLoading" 
    />



    <!-- Mostrar resultados de rastreo -->
    <div v-if="trackingData && !isLoading" class="tw-mt-6">
      <h2 class="tw-text-lg tw-font-semibold">Resultado de Rastreo</h2>
      <p><strong>ID del Paquete:</strong> {{ trackingData.paquete_id }}</p>
      <p><strong>Ubicación Actual:</strong> {{ trackingData.ubicacion_actual }}</p>
    </div>

    <!-- Mostrar mensaje de error si el rastreo falla -->
    <div v-if="error && !isLoading" class="tw-mt-6 tw-text-red-500">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { API_URL } from "../apiConfig";

// Estado para el número de seguimiento, datos de rastreo, posibles errores y carga
const trackingNumber = ref('');
const trackingData = ref(null);
const error = ref(null);
const isLoading = ref(false); // Nuevo estado para controlar el indicador de carga

// Función para rastrear el paquete
async function trackPackage() {
  if (!trackingNumber.value) {
    error.value = "Por favor, ingrese un ID de paquete.";
    return;
  }

  // Iniciar carga
  isLoading.value = true;
  error.value = null;
  trackingData.value = null;

  try {
    // Realizar la solicitud al endpoint con el ID de paquete ingresado
    const response = await axios.get(`${API_URL}/paquete/api/track/${trackingNumber.value}`);
    trackingData.value = response.data;
  } catch (err) {
    // Manejar errores en la solicitud
    error.value = "No se encontró el paquete o ocurrió un error al rastrear.";
  } finally {
    // Finalizar carga
    isLoading.value = false;
  }
}
</script>
