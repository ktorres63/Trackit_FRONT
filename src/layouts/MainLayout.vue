<template>
  <q-layout view="hHh lpr fff">
    <q-header elevated class="tw-h-16 tw-flex">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          <q-icon name="route" />
          Trackit
        </q-toolbar-title>
        <q-btn label="Cerrar Sesion" color="secondary" @click="goToHome" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Opciones </q-item-label>
        <q-item to="/dashboard/usuarios" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="people" />
          </q-item-section>
          <q-item-section>Usuarios</q-item-section>
        </q-item>
        
        <q-item to="/dashboard/paquetes" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="inventory_2" />
          </q-item-section>
          <q-item-section>Paquetes</q-item-section>
        </q-item>

        <q-item to="/dashboard/rutas" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="route" />
          </q-item-section>
          <q-item-section>Rutas</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

defineOptions({
  name: "MainLayout",
});

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function goToHome() {
  router.push("/");
}
</script>

<style>
/* Añade tus estilos aquí */
</style>
