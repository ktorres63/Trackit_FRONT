<template>
    <div class="tw-p-6">
      <h1 class="tw-text-2xl tw-font-bold">Login de Operadores</h1>
      <q-input v-model="username" label="Usuario" class="tw-mt-4" />
      <q-input v-model="password" label="Contraseña" type="password" class="tw-mt-2" />
      <q-btn label="Entrar" color="primary" @click="login" class="tw-mt-4" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const username = ref('');
  const password = ref('');
  
  function login() {
    if(username.value =="admin" && password.value =="admin"){
        router.push('/dashboard')
    }
    
    console.log(`Usuario: ${username.value}, Contraseña: ${password.value}`);
  }
  </script>
  