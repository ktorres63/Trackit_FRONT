<template>
  <div class="tw-p-4">
    <div class="tw-flex tw-flex-row tw-justify-between">
      <h1 class="tw-text-2xl tw-p-3">Usuarios</h1>
      <q-btn
        class="tw-h-fit tw-self-center"
        color="primary"
        label="Añadir"
        @click="openDialog"
      />
    </div>

    <q-table
      :rows="users"
      :columns="columns"
      row-key="dni"
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
              <q-icon name="edit" />
              <q-tooltip>Editar</q-tooltip>
            </q-btn>
            <q-btn
              data-test="remove-btn"
              class="tw-bg-decoration"
              dense
              round
              flat
            >
            
            <q-icon name="delete" />
              <q-tooltip>Eliminar</q-tooltip>
            </q-btn>
          </div>
        </q-td>
      </template>
    </q-table>

    <!-- Dialog for creating a new user -->
    <q-dialog v-model="dialog">
      <q-card style="width: 700px; max-width: 80vw">
        <q-card-section>
          <div class="text-h6">Crear Usuario</div>
        </q-card-section>

        <q-card-section class="">
          <q-input v-model="newUser.dni" label="DNI" />
          <q-input v-model="newUser.nombres" label="Nombres" />
          <q-input v-model="newUser.apellidos" label="Apellidos" />
          <q-input v-model="newUser.email" label="Email" />
        </q-card-section>

        <q-card-actions class="tw-p-5">
          <q-btn color="primary" label="Crear" @click="createUser" />
          <q-btn flat label="Cancelar" @click="closeDialog" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { API_URL } from '../apiConfig';

// Definimos referencias para almacenar los usuarios y su estado
const users = ref([]);
const loading = ref(true);
const filter = "";
const pagination = { page: 1, rowsPerPage: 10 };
const dialog = ref(false); // Controlar la visibilidad del diálogo

// Para el nuevo usuario
const newUser = ref({
  dni: "",
  nombres: "",
  apellidos: "",
  email: "",
});

// Definimos las columnas para la q-table
const columns = [
  {
    name: "index",
    label: "Nro.",
    align: "center",
  },
  { name: "dni", label: "DNI", align: "left", field: "dni" },
  { name: "nombres", label: "Nombre", align: "left", field: "nombres" },
  { name: "apellidos", label: "Apellidos", align: "left", field: "apellidos" },
  { name: "email", label: "Email", align: "left", field: "email" },
  { name: "action", label: "Acciones", align: "center", field: "action" },
];

// Función para obtener usuarios
const fetchUsers = async () => {
  loading.value = true;
  try {
    const response = await axios.get(`${API_URL}usuario/api/list/`);
    users.value = response.data; // Almacenamos los usuarios en la referencia
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    loading.value = false; // Cambiamos el estado de carga
  }
};

// Función para abrir el diálogo
const openDialog = () => {
  dialog.value = true;
  // Limpiar el formulario al abrir el diálogo
  newUser.value = {
    dni: "",
    nombres: "",
    apellidos: "",
    email: "",
  };
};

// Función para cerrar el diálogo
const closeDialog = () => {
  dialog.value = false;
};

// Función para crear un nuevo usuario
const createUser = async () => {
  try {
    await axios.post(
      `${API_URL}usuario/api/create/`,
      newUser.value
    );
    fetchUsers(); // Actualizamos la lista de usuarios después de crear
    closeDialog(); // Cerramos el diálogo
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

// Llamamos a la función para obtener usuarios al montar el componente
onMounted(fetchUsers);
</script>

<style></style>
