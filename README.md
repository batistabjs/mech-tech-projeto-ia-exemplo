# Mech-Tech - Sistema de Gestão para Oficina Mecânica

Uma aplicação Node.js construída com o padrão MVC para gerenciar oficinas mecânicas, possuindo controle de clientes, carros, peças e serviços. Todo o armazenamento é feito de forma local utilizando arquivos JSON.

## Tecnologias Utilizadas
- **Node.js** (Ambiente de execução)
- **Express** (Framework Web)
- **EJS** (View Engine / Templates)
- **CSS Vanilla** (Foco no tema Azul e Branco)
- **Armazenamento em JSON**

## Estrutura de Arquivos e Padrão MVC
O projeto segue a arquitetura **Model-View-Controller (MVC)** para a separação de responsabilidades:
- **Models (`models/` e `db/`)**: Lógica de banco de dados (leitura e gravação de arquivos JSON na pasta `/db`).
- **Views (`views/`)**: Renderização das páginas na web utilizando templates em EJS e injetamento de HTML dinâmico.
- **Controllers (`controllers/`)**: Contêm as regras de negócio para manipular as requisições e fazer a ponte entre as Views e a camada de dados.
- **Routes (`routes/`)**: Encaminhamento e mapeamento de URLs para os Controllers corretos.

## Procedimentos para rodar a aplicação localmente

### 1. Clonando ou acessando o projeto
Certifique-se de que você está na raiz do diretório `mech-tech`.

### 2. Instale as dependências
Abra o seu terminal na pasta do projeto e rode o comando:
```bash
npm install
```
Isso instalará os pacotes necessários como `express`, `ejs`, `body-parser` e `express-session`.

### 3. Suba o servidor
Execute este outro comando para rodar a aplicação:
```bash
node app.js
```
O console exibirá a mensagem `Servidor rodando na porta 3000`.

### 4. Acesso ao Sistema
Acesse `http://localhost:3000` em seu navegador.

Para efetuar o login, utilize as credenciais de teste configuradas:
- **Usuário:** bruno
- **Senha:** 12345

Toda a base de testes (alguns clientes, carros, peças e serviços) já está carregada no módulo de administração!
