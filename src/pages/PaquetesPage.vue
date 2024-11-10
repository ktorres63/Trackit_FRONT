<template>
  <div class="tw-p-4">
    <div class="tw-flex tw-flex-row tw-justify-between">
      <h1 class="tw-text-2xl tw-p-3">Paquetes</h1>
      <q-btn
        class="tw-h-fit tw-self-center"
        color="primary"
        label="Añadir Paquete"
        @click="openPackageDialog"
      />
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
      <template #body-cell-action="props">
        <q-td :props="props">
          <div class="tw-flex tw-justify-center tw-gap-2">
            <q-btn
              data-test="edit-btn"
              class="tw-bg-decoration"
              dense
              round
              flat
            >
              <q-icon name="edit" :style="{ color: '#f59e0b'}"/>
              <q-tooltip>Editar</q-tooltip>
            </q-btn>
            <q-btn
              data-test="remove-btn"
              class="tw-bg-decoration"
              dense
              round
              flat
            >
            
            <q-icon name="delete" color="red" />
              <q-tooltip>Eliminar</q-tooltip>
            </q-btn>
          </div>
        </q-td>
      </template>


    </q-table>

    <!-- Diálogo para crear un nuevo paquete -->
    <q-dialog v-model="packageDialog">
      <q-card style="width: 700px; max-width: 80vw">
        <q-card-section>
          <div class="text-h6">Crear Paquete</div>
        </q-card-section>

        <q-card-section>
          <!-- Selección de Usuario -->
          <q-select
            v-model="newPackage.usuario"
            :options="userOptions"
            label="Usuario"
            option-label="name"
            option-value="id"
            emit-value
            map-options
            filled
          />

          <!-- Selección de Nodo de Inicio -->
          <q-select
            v-model="newPackage.nodo_origen"
            :options="nodeOptions"
            label="Nodo de Inicio"
            option-label="name"
            option-value="id"
            emit-value
            map-options
            filled
          />

          <!-- Selección de Nodo de Destino -->
          <q-select
            v-model="newPackage.nodo_destino"
            :options="nodeOptions"
            label="Nodo de Destino"
            option-label="name"
            option-value="id"
            emit-value
            map-options
            filled
          />
        </q-card-section>

        <q-card-actions class="tw-p-5">
          <q-btn
            :loading="creatingPackage"
            color="primary"
            label="Crear"
            @click="createPackage"
          />
          <q-btn flat label="Cancelar" @click="closePackageDialog" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { API_URL } from "../apiConfig";

const nodeOptions = ref([
  { id: 1, name: "Tacna" },
  { id: 2, name: "Arequipa" },
  { id: 3, name: "Madre de Dios" },
  { id: 4, name: "Ayacucho" },
  { id: 5, name: "Ucayali" },
  { id: 6, name: "Lima" },
  { id: 7, name: "San Martin" },
  { id: 8, name: "Tumbes" },
  { id: 9, name: "Loreto" },
]);

// Datos para almacenar los paquetes y usuarios
const packages = ref([]);
const userOptions = ref([]);
const loading = ref(true);
const filter = "";
const pagination = { page: 1, rowsPerPage: 10 };
const packageDialog = ref(false); // Controlar la visibilidad del diálogo de paquetes

const newPackage = ref({
  usuario: null,
  nodo_origen: null,
  nodo_destino: null,
});



const creatingPackage = ref(false); // Estado de carga para el botón de crear

// Función para cargar los usuarios
const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/usuario/api/list/`);
    userOptions.value = response.data.map(user => ({
      id: user.dni,
      name: `${user.nombres} ${user.apellidos}`,
    }));
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

// Función para cargar los paquetes
const fetchPackages = async () => {
  loading.value = true;
  try {
    const response = await axios.get(`${API_URL}/paquete/api/list/`);
    packages.value = response.data;
  } catch (error) {
    console.error("Error fetching packages:", error);
  } finally {
    loading.value = false;
  }
};

// Definir las columnas de la tabla
const columns = [
  { name: "index", label: "Nro.", align: "center" },
  { name: "id", label: "ID Paquete", align: "left", field: "id" },
  {
    name: "user",
    label: "Usuario",
    align: "left",
    field: (row) => `${row.usuario}`,
  },
  {
    name: "origin",
    label: "Origen",
    align: "left",
    field: (row) => nodeOptions.value.find(node => node.id === row.nodo_origen)?.name || "Desconocido",
  },
  {
    name: "destination",
    label: "Destino",
    align: "left",
    field: (row) => nodeOptions.value.find(node => node.id === row.nodo_destino)?.name || "Desconocido",
  },
  { name: "action", label: "Acciones", align: "center" },
];

// Función para abrir el diálogo de creación de paquete
const openPackageDialog = () => {
  packageDialog.value = true;
  newPackage.value = { usuario: null, nodo_origen: null, nodo_destino: null }; // Limpiar el formulario
};

// Función para cerrar el diálogo
const closePackageDialog = () => {
  packageDialog.value = false;
};

// Función para crear un paquete
const createPackage = async () => {
  console.log('Enviando paquete:', newPackage.value); // Para verificar qué datos se están enviando
  creatingPackage.value = true;
  try {
    await axios.post(`${API_URL}/paquete/api/create/`, newPackage.value);
    fetchPackages(); // Refrescar la lista de paquetes
    closePackageDialog(); // Cerrar el diálogo
  } catch (error) {
    console.error("Error creating package:", error);
  } finally {
    creatingPackage.value = false;
  }
};

// Cargar los usuarios y los paquetes cuando el componente se monta
onMounted(() => {
  fetchUsers();
  fetchPackages();
});
</script>