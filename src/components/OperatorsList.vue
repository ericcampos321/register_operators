<script setup lang="ts">
import { ref } from 'vue';
import { api } from '../services/api';
import Button from 'primevue/button';

const busca = ref('');
const operadoras = ref([]);

const buscar = async () => {
   try {
      if (!busca.value) return;
      const { data } = await api.get('/operators/search', {
         params: { search: busca.value }
      });
      operadoras.value = data;
   } catch (error) {
      console.error('Erro ao buscar operadoras', error);
   }
};

const clear = () => {
   busca.value = '';
   operadoras.value = [];
};
</script>

<template>
   <div class="flex flex-col h-screen items-center gap-10 p-10 pt-32 pl-[250px] ">
      <di class="w-full max-w-[100%]">
         <h1 class="text-xl font-semibold">
            Cadastro de Operadoras <span>🏥</span>
         </h1>
         <p class="text-sm mt-2">
            Aqui você pode <span class="text-purple-600">buscar</span> e
            <span class="text-purple-600">gerenciar</span> os registros de operadoras.
         </p>
      </di>

      <div class="flex gap-4 border border-purple-600  p-8 w-full max-w-[100%] shadow-md shadow-gray-400 rounded-md">
         <input v-model="busca" placeholder="Buscar operadora..."
            class="border p-2 rounded border-gray-400 w-full hover:border-black focus:outline-none focus:ring-2 focus:ring-purple-500" />

         <Button unstyled
            class="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-black hover:text-purple-600 transition-colors"
            @click="buscar">
            <span class="hover:text-purple-600">Filter</span>
         </Button>
         <Button unstyled
            class="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-black hover:text-purple-600 transition-colors"
            @click="clear">
            <span class="hover:text-purple-600">Clear</span>
         </Button>
      </div>

      <div :class="[
         'w-full max-w-[100%] overflow-x-auto rounded-lg border border-purple-600 shadow-md shadow-gray-400',
         operadoras.length >= 15 ? 'max-h-[100%] overflow-y-auto' : ''
      ]">
         <table class="min-w-[600px] w-full border-collapse text-sm md:text-base">
            <thead class="sticky top-0 z-20 text-purple-600 bg-white">
               <tr>
                  <th class="px-4 py-2 ">DATA REGISTRO</th>
                  <th class="px-4 py-2 ">Registro ANS</th>
                  <th class="px-4 py-2 ">CNPJ</th>
                  <th class="px-4 py-2 ">RAZÃO SOCIAL</th>
                  <th class="px-4 py-2 ">NOME FANTASIA</th>
                  <th class="px-4 py-2 ">ENDEREÇO ELETRÔNICO</th>
                  <th class="px-4 py-2 ">REPRESENTANTE</th>
                  <th class="px-4 py-2 ">CARGO REPRESENTANTE</th>
               </tr>
            </thead>
            <tbody>
               <tr v-if="operadoras.length === 0">
                  <td colspan="8" class="text-center py-10 border border-purple-200 px-1">Nenhuma operadora encontrada
                  </td>
               </tr>
               <tr v-for="operadora in operadoras" :key="operadora.REG_ANS" class="hover:bg-gray-100">
                  <td class="border border-gray-400 px-1 py-2">{{ operadora.Data_Registro_ANS }}</td>
                  <td class="border border-gray-400 px-4 py-2">{{ operadora.Registro_ANS }}</td>
                  <td class="border border-gray-400 px-4 py-2">{{ operadora.CNPJ }}</td>
                  <td class="border border-gray-400 px-4 py-2">{{ operadora.Razao_Social }}</td>
                  <td class="border border-gray-400 px-4 py-2">{{ operadora.Nome_Fantasia }}</td>
                  <td class="border border-gray-400 px-4 py-2 truncate">{{ operadora.Endereco_eletronico }}</td>
                  <td class="border border-gray-400 px-4 py-2">{{ operadora.Representante }}</td>
                  <td class="border border-gray-400 px-4 py-2">{{ operadora.Cargo_Representante }}</td>
               </tr>
            </tbody>
         </table>
      </div>
      <div class="flex justify-end w-full pr-10 text-sm text-gray-700">
         Total: {{ operadoras.length }}
      </div>

   </div>
</template>
