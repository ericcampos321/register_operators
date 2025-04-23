# Teste Técnico - API de Busca de Operadoras (FastAPI + Vue.js)

<img align="center" alt="" src="case.png">

Este projeto consiste em uma aplicação Full Stack composta por:

- Backend: API em Python com FastAPI para leitura de operadoras a partir de um arquivo CSV.
- Frontend: Aplicação Vue.js para realizar buscas e exibir os resultados em tabela.
- Arquivo CSV com base de operadoras disponibilizado para consulta.
- Testes de busca textual com base em parâmetro `search`.

---

## Estrutura do Projeto

```
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
```

---

##  Configuração

### 1. Criação do ambiente virtual

```bash
python -m venv venv
```

### 2. Ativar ambiente virtual

#### Windows:
```bash
venv\Scripts\activate
```

#### Linux/Mac:
```bash
source venv/bin/activate
```

---

### 3. Instalar dependências:

```bash
pip install -r requirements.txt
```

---

### 4. Executar em ambiente local:

```bash
$Env:NODE_ENV="local"; uvicorn src.main:app --reload
```

---

## 💻 Execução do Frontend (Vue.js)

```bash
cd register_operators
npm install
npm run dev
```

---

## Endpoint da API

```http
GET /operators/search
```

Busca operadoras por nome (parâmetro `search`).

### Exemplo:
```
GET http://localhost:5000/operators/search?search=unimed
```

---

## 📌 Regras de Negócio

-  A busca é feita por correspondência parcial no campo **Nome_Fantasia** (case-insensitive).
-  O CSV é lido diretamente do caminho definido na variável de ambiente `CSV_FILE_PATH`.
-  A busca retorna uma lista de dicionários representando os registros encontrados.
- ❌ Caso nenhum resultado seja encontrado, retorna status `HTTP 204` com lista vazia.
- ❗ Em caso de erro (ex: falha ao ler arquivo), retorna mensagem e status `HTTP 500`.

---

## Resultado

- ✅ Resultado exibido em tabela com colunas formatadas.
- ✅ Mensagem de sucesso ou erro via Toast (PrimeVue).

---

## 👨‍💻 Autor

Desenvolvido por **Eric Campos** – Projeto de Nivelamento Técnico
