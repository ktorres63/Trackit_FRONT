<!-- src/pages/LandingPage.vue -->
<template>
  <q-layout>
		<q-header elevated class="tw-h-16 tw-flex" >
			<q-toolbar>
				<q-toolbar-title>
					<q-icon name="route" />
					<span class="tw-text-2xl">Trackit</span>
				</q-toolbar-title>
				<q-btn label="Login" color="secondary" @click="goToLogin" class="tw-mr-4" />
				<q-btn label="Seguimiento" color="secondary" @click="goToTracking" />
			</q-toolbar>
		</q-header>
		<div
			class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen tw-bg-gray-100"
		>
			<h1 class="tw-text-4xl tw-font-bold tw-text-blue-700">
				Bienvenido a Trackit
			</h1>
			<p class="tw-mt-4">Tu solución para el seguimiento de paquetes.</p>
			<div class="tw-mt-8"></div>
		</div>
	</q-layout>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goToLogin() {
  router.push("/login");
}

function goToTracking() {
  router.push("/tracking");
}
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí */
</style>
