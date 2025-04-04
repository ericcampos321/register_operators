<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen px-6 py-10 bg-gray-50 ml-[15rem] mt-16">
    <div class="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8 border border-purple-200">
      <h1 class="text-4xl font-bold text-purple-700 mb-6 text-center">
        Teste Técnico - API de Busca de Operadoras (FastAPI + Vue.js)
      </h1>

      <p class="text-gray-700 mb-4 text-justify">
        Este projeto consiste em uma aplicação <strong>Full Stack</strong> composta por:
      </p>
      <ul class="list-disc list-inside mt-2 text-gray-700">
        <li><strong>Backend:</strong> API em Python com FastAPI para leitura de operadoras a partir de um arquivo CSV.
        </li>
        <li><strong>Frontend:</strong> Aplicação Vue.js para realizar buscas e exibir os resultados em tabela.</li>
        <li>Base de dados CSV com informações das operadoras.</li>
        <li>Funcionalidade de busca textual com base no parâmetro <code>search</code>.</li>
      </ul>
      <h2 class="text-xl font-semibold text-purple-700 mt-6 mb-2">📁 Estrutura do Projeto</h2>
      <pre class="bg-gray-100 rounded p-4 overflow-x-auto text-sm text-gray-800">
📦 register_backend_csv/
├── src/
│   ├── config/
│   ├── controller/
│   ├── repository/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── main.py
├── .env.local
├── .env.production
├── requirements.txt
├── README.md
      </pre>

      <h2 class="text-xl font-semibold text-purple-700 mt-6 mb-2">⚙️ Configuração</h2>
      <ul class="list-decimal list-inside text-gray-700">
        <li class="mt-1">Criação do ambiente virtual:
          <pre class="bg-gray-100 rounded p-2 mt-1 text-sm">python -m venv venv</pre>
        </li>
        <li class="mt-1">Ativar ambiente virtual:
          <pre class="bg-gray-100 rounded p-2 mt-1 text-sm"># Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate</pre>
        </li>
        <li class="mt-1">Instalar dependências:
          <pre class="bg-gray-100 rounded p-2 mt-1 text-sm">pip install -r requirements.txt</pre>
        </li>
        <li class="mt-1">Rodar localmente:
          <pre class="bg-gray-100 rounded p-2 mt-1 text-sm">$Env:NODE_ENV="local"; uvicorn src.main:app --reload</pre>
        </li>
      </ul>

      <h2 class="text-xl font-semibold text-purple-700 mt-6 mb-2">🌐 Execução do Frontend (Vue.js)</h2>
      <pre class="bg-gray-100 rounded p-2 text-sm text-gray-800">
cd register_operators
npm install
npm run dev
      </pre>

      <h2 class="text-xl font-semibold text-purple-700 mt-6 mb-2">📌 Endpoint da API</h2>
      <pre class="bg-gray-100 rounded p-2 text-sm text-gray-800">
GET /operators/search

Exemplo:
http://localhost:5000/operators/search?search=unimed
      </pre>

      <h2 class="text-xl font-semibold text-purple-700 mt-6 mb-2">📋 Regras de Negócio</h2>
      <ul class="list-disc list-inside text-gray-700">
        <li>A busca é feita por correspondência parcial no campo <strong>Nome_Fantasia</strong> (case-insensitive).</li>
        <li>O CSV é lido diretamente do caminho definido em <code>CSV_FILE_PATH</code>.</li>
        <li>A busca retorna uma lista de dicionários com os registros encontrados.</li>
        <li>Se nenhum resultado for encontrado, retorna <code>204 No Content</code>.</li>
        <li>Se ocorrer erro na leitura, retorna <code>500 Internal Server Error</code> com mensagem personalizada.</li>
      </ul>

      <h2 class="text-xl font-semibold text-purple-700 mt-6 mb-2">📊 Resultado</h2>
      <ul class="list-disc list-inside text-gray-700">
        <li>Exibição em tabela com colunas formatadas.</li>
        <li>Mensagens de sucesso ou erro via Toast (PrimeVue).</li>
      </ul>

      <h2 class="text-xl font-semibold text-purple-700 mt-6 mb-2">👨‍💻 Autor</h2>
      <p class="text-gray-700">Desenvolvido por <strong>Eric Campos</strong> – Projeto de Nivelamento Técnico.</p>
    </div>
  </div>
</template>
