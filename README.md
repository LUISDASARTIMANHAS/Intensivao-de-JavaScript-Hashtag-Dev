# Repositório do Intensivão de JavaScript

## 1. Resumo

Este repositório documenta e armazena os projetos desenvolvidos durante o "Intensivão de JavaScript", uma iniciativa educacional da Hashtag Programação. O conteúdo abrange desde conceitos fundamentais de JavaScript, HTML e CSS até a implementação de aplicações complexas com frameworks modernos como React, e integrações com serviços de backend e APIs de Inteligência Artificial.

## 2. Objetivo do Projeto

O objetivo central deste repositório é servir como um recurso de aprendizado e portfólio para estudantes de desenvolvimento web. Ele visa demonstrar a aplicação prática de tecnologias web em diferentes níveis de complexidade, consolidando o conhecimento adquirido durante o curso intensivo.

## 3. Proposta Educacional

A estrutura do curso e dos projetos foi desenhada para oferecer uma progressão de aprendizado lógica e incremental:

- **Módulo 1: Manipulação do DOM:** Introdução à interação entre JavaScript e HTML, focando em eventos e manipulação de elementos da página.
- **Módulo 2: JavaScript Moderno (ES6+):** Utilização de funcionalidades avançadas da linguagem para criar interações mais ricas e dinâmicas.
- **Módulo 3: Frameworks de Front-End:** Introdução ao React e ao ecossistema de desenvolvimento com Vite, focando na criação de Single Page Applications (SPAs).
- **Módulo 4: Aplicações Avançadas e Integrações:** Desenvolvimento de uma aplicação completa com gerenciamento de estado, componentização avançada, e integração com serviços de backend (Supabase) e APIs externas.

## 4. Estrutura e Descrição dos Projetos

O repositório está organizado em projetos autocontidos, cada um correspondendo a uma etapa do aprendizado.

### 4.1. Audiobook Player (`audiobook-website`)

- **Descrição:** Uma aplicação simples que funciona como um player de audiobook. O projeto permite ao usuário tocar, pausar e navegar entre as faixas de áudio de um livro.
- **Tecnologias:** HTML5, CSS3, JavaScript (Vanilla).
- **Foco de Aprendizado:** Manipulação de elementos de áudio e vídeo via DOM e gerenciamento de estado básico.

### 4.2. Página de Produto (`apple-watch-website`)

- **Descrição:** Uma simulação de uma página de e-commerce para um produto (Apple Watch). O usuário pode interagir com a página para selecionar diferentes cores e tamanhos do produto, com a interface respondendo dinamicamente a essas seleções.
- **Tecnologias:** HTML5, CSS3, JavaScript (Vanilla).
- **Foco de Aprendizado:** Manipulação avançada do DOM, eventos de usuário e atualização dinâmica de conteúdo e imagens.

### 4.3. Cardápio Digital (`cardapio-digital-com-react-website`)

- **Descrição:** Uma aplicação de cardápio digital para um restaurante. Este projeto introduz o conceito de componentização com React, onde a interface é dividida em componentes reutilizáveis (Banner, Categorias, Itens do Cardápio).
- **Tecnologias:** React, Vite.
- **Foco de Aprendizado:** Fundamentos de React, componentização, props e state.

### 4.4. ChatBot com IA (`ChatBot-com-IA`)

- **Descrição:** O projeto mais complexo do curso. Trata-se de um ChatBot funcional que se integra a um serviço de backend (Supabase) para persistir informações e interage com uma API de IA para gerar respostas. A interface é construída com um design system moderno.
- **Tecnologias:** React, TypeScript, Vite, Tailwind CSS, Shadcn/UI, Supabase.
- **Foco de Aprendizado:** Desenvolvimento full-stack com React, tipagem com TypeScript, estilização com utility-first CSS, gerenciamento de estado assíncrono (`react-query`), e integração com APIs de terceiros.

## 5. Tecnologias Utilizadas

- **Linguagens:** JavaScript (ES6+), TypeScript, HTML5, CSS3.
- **Frameworks e Bibliotecas:** React.js.
- **Ferramentas de Build:** Vite.
- **Estilização:** CSS, Tailwind CSS, Shadcn/UI.
- **Backend e Banco de Dados:** Supabase.
- **Gerenciamento de Estado:** React Query.
- **Controle de Versão:** Git.

## 6. Como Utilizar

Cada projeto é autocontido em sua respectiva pasta.

- Para os projetos `audiobook-website` e `apple-watch-website`, basta abrir o arquivo `index.html` em um navegador.
- Para os projetos baseados em React (`cardapio-digital-com-react-website` e `ChatBot-com-IA`), siga os passos:
  1. Navegue até a pasta do projeto (ex: `cd cardapio-digital-com-react-website`).
  2. Instale as dependências: `npm install`.
  3. Inicie o servidor de desenvolvimento: `npm run dev`.

## 7. Autoria

Este conjunto de projetos foi desenvolvido como parte do **Intensivão de JavaScript**, oferecido pela **Hashtag Programação**.