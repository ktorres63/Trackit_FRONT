<template>
  <div class="tw-p-4">
    <div class="tw-flex tw-flex-row tw-justify-between">
      <h1 class="tw-text-2xl tw-p-3">Rutas</h1>
    </div>

    <q-table
      :rows="packages"
      :columns="columns"
      row-key="id"
      :loading="loading"
      :filter="filter"
      :pagination.sync="pagination"
    >
      <template #header="props">
        <q-tr :props="props">
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            <span
              class="tw-font-roboto-condensed tw-font-bold tw-text-primary tw-text-sm"
            >
              {{ col.label }}
            </span>
          </q-th>
        </q-tr>
      </template>
      <template #body-cell-index="props">
        <q-td :props="props">
          {{ props.rowIndex + 1 }}
        </q-td>
      </template>

       <!-- Template personalizado para la columna Estado -->
      <template #body-cell-state="props">
        <q-td :props="props">
          {{ estadoLabels[props.row.estado] || "Desconocido" }}
        </q-td>
      </template>

      <template #body-cell-duration="props">
        <q-td :props="props">
          {{ `${props.row.duracion} horas `   }}
        </q-td>
      </template>
    </q-table>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { API_URL } from "../apiConfig";

const estadoLabels = {
  0: "Pendiente",
  1: "Recibido en origen",
  2: "En transito",
  3: "llego al destino",
  4: "Entregado al destinatario",
};

// Datos para almacenar los paquetes y usuarios
const packages = ref([]);
const loading = ref(true);
const filter = "";
const pagination = { page: 1, rowsPerPage: 10 };


// Función para cargar los paquetes
const fetchRoutes = async () => {
  loading.value = true;
  try {
    const response = await axios.get(`${API_URL}/ruta/api/list/`);
    packages.value = response.data;
  } catch (error) {
    console.error("Error fetching rutas:", error);
  } finally {
    loading.value = false;
  }
};

// Definir las columnas de la tabla
const columns = [
  { name: "index", label: "Nro.", align: "center" },
  { name: "id", label: "ID Ruta", align: "left", field: "id" },
  {
    name: "paquete",
    label: "Paquete Id",
    align: "left",
    field: "paquete",
  },
  {
    name: "node-start",
    label: "Nodo Inicio",
    align: "left",
    field: "nodo_inicio",
  },
  {
    name: "node-end",
    label: "Nodo Destino",
    align: "left",
    field: "nodo_fin",
  },
  {
    name: "duration",
    label: "Tiempo Aprox",
    align: "left",
    field: "duracion",
  },

  {
    name: "state",
    label: "Estado",
    align: "left",
    field: "estado",
  },
];




// Cargar los usuarios y los paquetes cuando el componente se monta
onMounted(() => {
  fetchRoutes();
});
</script>