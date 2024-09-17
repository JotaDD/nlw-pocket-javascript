
# NLW_inOrbit - Projeto

Este projeto foi criado como parte do evento **Next Level Week** da **RocketSeat**. A proposta foi desenvolver uma aplicação full-stack que facilita o gerenciamento de metas pessoais, utilizando tecnologias modernas no front-end e no back-end, com foco em desempenho e boas práticas de desenvolvimento.

## Tecnologias Empregadas

### Frontend

- **[React](https://react.dev/)**: Biblioteca para construção de interfaces dinâmicas e interativas.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build rápida e eficiente.
- **[TailwindCSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização flexível.
- **[Radix UI](https://www.radix-ui.com/)**: Conjunto de componentes acessíveis e otimizados.
- **[Zod](https://zod.dev/)**: Biblioteca para validação de esquemas no front-end.
- **[TanStack Query](https://tanstack.com/query/v4)**: Gerenciamento de dados e cache para chamadas assíncronas.
- **[dayjs](https://day.js.org/)**: Manipulação e formatação de datas de forma simples e performática.

### Backend

- **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript no lado do servidor.
- **[Fastify](https://www.fastify.io/)**: Framework web rápido e leve para construir APIs eficientes.
- **[PostgreSQL](https://www.postgresql.org/)**: Banco de dados relacional robusto e open-source.
- **[Drizzle ORM](https://orm.drizzle.team/)**: ORM que oferece consultas SQL simples e performáticas.
- **[Docker](https://www.docker.com/)**: Containerização para ambientes de desenvolvimento consistentes.
- **[CUID](https://github.com/paralleldrive/cuid2)**: Gerador de identificadores únicos e simples.
- **[BiomeJS](https://biomejs.dev/)**: Ferramenta para linting e formatação de código.

---

## Estrutura do Projeto

### Frontend

O desenvolvimento do front-end foi feito com **React** e **Vite** para garantir agilidade e eficiência. A estilização responsiva foi gerenciada com **TailwindCSS**, e componentes acessíveis e modulares foram construídos com **Radix UI**. A validação de formulários e dados foi feita com **Zod**, assegurando a qualidade dos dados antes de serem enviados ao back-end.

#### Páginas e Funcionalidades Principais

- **Lista de Metas**: Exibe metas diárias com opção de criar, visualizar e marcar como concluídas.
- **Formulário de Criação de Metas**: Utiliza **TanStack Query** para otimizar a comunicação com o back-end, evitando recarregamentos desnecessários.
- **Manipulação de Datas**: Implementada com **dayjs**, facilitando o controle de datas na interface.

### Backend

O back-end, desenvolvido com **Node.js** e **Fastify**, foi projetado para ser leve e rápido. O banco de dados escolhido foi o **PostgreSQL**, gerenciado com o **Drizzle ORM** para oferecer um controle eficiente das queries SQL. **Common Table Expressions (CTEs)** foram usadas para otimizar consultas mais complexas.

#### Arquitetura e Implementação

- **Rotas e Endpoints**: Gerenciados com Fastify, cobrindo as operações de criação, edição e consulta de metas.
- **Validação de Dados**: Realizada tanto no front-end quanto no back-end usando **Zod** para garantir a integridade dos dados.
- **Banco de Dados**: PostgreSQL foi utilizado como banco de dados relacional, com queries otimizadas por meio de CTEs.


## Common Table Expressions (CTEs) no PostgreSQL

As **CTEs** são subconsultas temporárias usadas dentro de queries maiores. Elas foram uma peça fundamental no gerenciamento de dados mais complexos no projeto, permitindo organizar melhor as consultas SQL e manter o código mais legível.


## Conclusão

Esse projeto foi uma oportunidade de explorar novas ferramentas e metodologias, como o uso de **CUID** em vez de UUIDs e a aplicação de **CTEs** no PostgreSQL. Também trouxe uma experiência rica no uso de **TanStack Query** para otimização do front-end e na criação de componentes dinâmicos com **React**.

Se quiser colaborar ou saber mais sobre o projeto, fique à vontade para explorar o repositório, abrir issues ou contribuir com pull requests.
