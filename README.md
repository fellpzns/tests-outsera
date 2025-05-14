# tests-outsera

Repositório contendo testes automatizados para diferentes frentes conforme solicitados no teste da Outsera: testes end-to-end (E2E), testes de API e testes de carga.

---

## **Tecnologias Utilizadas**

- **Cypress**: Para testes E2E e testes de API.
- **k6**: Para testes de carga.
- **JavaScript**: Linguagem principal utilizada nos testes.
- **HTML**: Utilizado nos relatórios gerados.
- **GitHub Actions**: Para CI/CD (integração contínua e execução de pipelines).

---

## **Estrutura do Projeto**

```
tests-outsera/
├── .github/workflows/         # Pipelines CI/CD
├── e2e-test-front/            # Testes E2E da aplicação web
│   ├── cypress/               # Estrutura Cypress
│   ├── cypress.config.js
│   └── package.json
├── load-test-k6/              # Testes de carga com k6
│   ├── load_test.js
│   ├── analise.txt
│   └── Captura de tela.png
├── test-api/                  # Testes de API com Cypress
│   ├── cypress/
│   │   ├── e2e/
│   │   │   ├── api-test-crud.cy.js
│   │   │   └── api-tests-task1.cy.js
│   │   ├── fixtures/
│   │   ├── reports/html/
│   │   └── support/
│   ├── cypress.config.js
│   └── package.json
```

---

## **Como Executar os Testes**

### **Pré-requisitos**

- Node.js instalado
- Git instalado
- npm ou yarn

---

### **Instalação**

1. Clone o repositório:
```bash
git clone https://github.com/fellpzns/tests-outsera.git
cd tests-outsera
```

2. Instale as dependências (para cada projeto):
```bash
# E2E Front
cd e2e-test-front
npm install

# Testes API
cd ../test-api
npm install
```

---

## **Executar os Testes**

### **1. Testes E2E (Front-End)**
```bash
cd e2e-test-front
npx cypress open   # Para abrir o Cypress com interface
npx cypress run    # Para rodar via terminal/headless
```

### **2. Testes de API**
```bash
cd test-api
npx cypress run
```

### **3. Testes de Carga com k6**
```bash
cd load-test-k6
k6 run load_test.js
```

---

## **Gerar Relatórios**

### Cypress (HTML Report)
Os testes de API já estão configurados para gerar relatórios em HTML:
- Caminho: `test-api/cypress/reports/html/index.html`

Para abrir o relatório:
```bash
# Caminho relativo:
cd test-api/cypress/reports/html
open index.html   # No macOS
start index.html  # No Windows
```

---

## **Pipelines CI/CD**

A pasta `.github/workflows` contém os arquivos de configuração para execução automática dos testes no GitHub Actions.


## **Autor**

**fellpzns** - *Automação de Testes Full Stack*

---
