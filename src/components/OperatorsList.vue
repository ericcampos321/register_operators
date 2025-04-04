<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { api } from '../services/api';
import { useToast } from 'primevue/usetoast';
import { useToastMessage } from '../composables/useToastMessage';
import Loading from './ui/loaders/loading.vue';
import Button from 'primevue/button';
import 'primeicons/primeicons.css';

interface Operadora {
   Registro_ANS: string
   CNPJ: string
   Razao_Social: string
   Nome_Fantasia: string
   Endereco_eletronico: string
   Representante: string
   Cargo_Representante: string
   Data_Registro_ANS: string
}

const busca = ref('');
const operadoras = ref<Operadora[]>([]);
const isLoading = ref<boolean>(false);
const isFirstLoad = ref<boolean>(true);
const toast = useToast();

const { showMessage } = useToastMessage();

const buscar = async (): Promise<void> => {
   try {
      if (!busca.value) {
         if (!isFirstLoad.value) {
            toast.add({ severity: 'warn', summary: 'Aviso', detail: 'Digite um termo para buscar!', life: 3000 });
         }
         return;
      }
      isLoading.value = true;
      const { data }: { data: { data: Operadora[] } } = await api.get('/operators/search', {
         params: { search: busca.value }
      });
      operadoras.value = data.data;
      if (!isFirstLoad.value) {
         toast.add({ severity: 'success', summary: 'Sucesso', detail: 'Busca realizada com sucesso!', life: 3000 });
      }
   } catch (error: any) {
      if (!isFirstLoad.value) {
         toast.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao buscar operadoras', life: 3000 });
      }
   } finally {
      timer();
      isFirstLoad.value = false;
   }
};

const clear = (): void => {
   isLoading.value = true;
   busca.value = '';
   operadoras.value = [];
   timer();
   showMessage('info', 'Limpar', 'Busca limpa com sucesso!', !isFirstLoad.value);
};

const timer = (): void => {
   setTimeout(() => {
      isLoading.value = false;
   }, 2000);
};

onMounted(() => {
   buscar();
});
</script>

<template>
   <div class="flex flex-col h-screen items-center gap-10 p-10 pt-32 pl-[250px]">
      <div class="w-full max-w-[100%]">
         <h1 class="text-xl font-semibold">Cadastro de Operadoras <span>🏥</span></h1>
         <p class="text-sm mt-2">
            Aqui você pode <span class="text-purple-600">buscar</span> e
            <span class="text-purple-600">gerenciar</span> os registros de operadoras.
         </p>
      </div>

      <div class="flex gap-4 border border-purple-600 p-8 w-full max-w-[100%] shadow-md shadow-gray-400 rounded-md">
         <input v-model="busca" placeholder="Buscar operadora..."
            class="border p-2 rounded border-gray-400 w-full hover:border-black focus:outline-none focus:ring-2 focus:ring-purple-500" />
         <Button unstyled
            class="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-black hover:text-purple-600 transition-colors"
            @click="buscar">
            <span class="hover:text-purple-600">Search</span>
            <span class="pi pi-search"></span>
         </Button>
         <Button unstyled
            class="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-black hover:text-purple-600 transition-colors"
            @click="clear">
            <span class="hover:text-purple-600">Clear</span>
            <i class="pi pi-times"></i>
         </Button>
      </div>

      <!-- Loading -->
      <div v-if="isLoading" class="flex justify-center items-center h-20">
         <Loading />
      </div>

      <!-- Tabela -->
      <div v-else :class="[
         'w-full max-w-[100%] overflow-x-auto rounded-lg border border-purple-600 shadow-md shadow-gray-400',
         operadoras.length >= 15 ? 'max-h-[100%] overflow-y-auto' : ''
      ]">
         <table class="min-w-[600px] w-full border-collapse text-sm md:text-base">
            <thead class="sticky top-0 z-20 text-purple-600 bg-white">
               <tr>
                  <th class="px-4 py-2">DATA REGISTRO</th>
                  <th class="px-4 py-2">Registro ANS</th>
                  <th class="px-4 py-2">CNPJ</th>
                  <th class="px-4 py-2">RAZÃO SOCIAL</th>
                  <th class="px-4 py-2">NOME FANTASIA</th>
                  <th class="px-4 py-2">ENDEREÇO ELETRÔNICO</th>
                  <th class="px-4 py-2">REPRESENTANTE</th>
                  <th class="px-4 py-2">CARGO REPRESENTANTE</th>
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
