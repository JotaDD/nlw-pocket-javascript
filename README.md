

# NLW_inOrbit

This project was created as part of the **Next Level Week** event by **RocketSeat**. The goal was to develop a full-stack application that helps users manage personal goals, leveraging modern technologies both on the front-end and back-end, with a focus on performance and best practices.

Este projeto foi criado como parte do evento **Next Level Week** da **RocketSeat**. A proposta foi desenvolver uma aplicação full-stack que facilita o gerenciamento de metas pessoais, utilizando tecnologias modernas no front-end e no back-end, com foco em desempenho e boas práticas de desenvolvimento.

## Technologies Used | Tecnologias Empregadas

### Frontend

- **[React](https://react.dev/)**: A library for building dynamic and interactive user interfaces. | Biblioteca para construção de interfaces dinâmicas e interativas.
- **[Vite](https://vitejs.dev/)**: Fast and efficient build tool. | Ferramenta de build rápida e eficiente.
- **[TailwindCSS](https://tailwindcss.com/)**: Utility-first CSS framework for flexible styling. | Framework CSS utilitário para estilização flexível.
- **[Radix UI](https://www.radix-ui.com/)**: Set of accessible and optimized components. | Conjunto de componentes acessíveis e otimizados.
- **[Zod](https://zod.dev/)**: Validation library for front-end schema validation. | Biblioteca para validação de esquemas no front-end.
- **[TanStack Query](https://tanstack.com/query/v4)**: Data and cache management for asynchronous operations. | Gerenciamento de dados e cache para chamadas assíncronas.
- **[dayjs](https://day.js.org/)**: Simple and performant date manipulation and formatting. | Manipulação e formatação de datas de forma simples e performática.

### Backend

- **[Node.js](https://nodejs.org/)**: JavaScript runtime environment for the server-side. | Ambiente de execução JavaScript no lado do servidor.
- **[Fastify](https://www.fastify.io/)**: Lightweight and fast web framework for efficient APIs. | Framework web rápido e leve para construir APIs eficientes.
- **[PostgreSQL](https://www.postgresql.org/)**: Robust and open-source relational database. | Banco de dados relacional robusto e open-source.
- **[Drizzle ORM](https://orm.drizzle.team/)**: ORM that provides simple and performant SQL queries. | ORM que oferece consultas SQL simples e performáticas.
- **[Docker](https://www.docker.com/)**: Containerization for consistent development environments. | Containerização para ambientes de desenvolvimento consistentes.
- **[CUID](https://github.com/paralleldrive/cuid2)**: Simple and unique identifier generator. | Gerador de identificadores únicos e simples.
- **[BiomeJS](https://biomejs.dev/)**: Tool for code linting and formatting. | Ferramenta para linting e formatação de código.

---

## Project Structure | Estrutura do Projeto

### Frontend

The front-end development was done using **React** and **Vite** to ensure agility and efficiency. Responsive styling was managed with **TailwindCSS**, and accessible, modular components were built using **Radix UI**. Form validation and data verification were handled with **Zod**, ensuring the quality of data before sending it to the back-end.

O desenvolvimento do front-end foi feito com **React** e **Vite** para garantir agilidade e eficiência. A estilização responsiva foi gerenciada com **TailwindCSS**, e componentes acessíveis e modulares foram construídos com **Radix UI**. A validação de formulários e dados foi feita com **Zod**, assegurando a qualidade dos dados antes de serem enviados ao back-end.

#### Main Pages and Features | Páginas e Funcionalidades Principais

- **Goals List**: Displays daily goals with options to create, view, and mark them as completed. | Exibe metas diárias com opção de criar, visualizar e marcar como concluídas.
- **Goal Creation Form**: Uses **TanStack Query** to optimize communication with the back-end, avoiding unnecessary reloads. | Utiliza **TanStack Query** para otimizar a comunicação com o back-end, evitando recarregamentos desnecessários.
- **Date Handling**: Implemented with **dayjs**, making date management easier in the interface. | Implementada com **dayjs**, facilitando o controle de datas na interface.

### Backend

The back-end, built with **Node.js** and **Fastify**, was designed to be lightweight and fast. The chosen database was **PostgreSQL**, managed with **Drizzle ORM** for efficient SQL query control. **Common Table Expressions (CTEs)** were used to optimize more complex queries.

O back-end, desenvolvido com **Node.js** e **Fastify**, foi projetado para ser leve e rápido. O banco de dados escolhido foi o **PostgreSQL**, gerenciado com o **Drizzle ORM** para oferecer um controle eficiente das queries SQL. **Common Table Expressions (CTEs)** foram usadas para otimizar consultas mais complexas.

#### Architecture and Implementation | Arquitetura e Implementação

- **Routes and Endpoints**: Managed with Fastify, covering the creation, editing, and retrieval of goals. | Gerenciados com Fastify, cobrindo as operações de criação, edição e consulta de metas.
- **Data Validation**: Performed both on the front-end and back-end using **Zod** to ensure data integrity. | Realizada tanto no front-end quanto no back-end usando **Zod** para garantir a integridade dos dados.
- **Database**: PostgreSQL was used as the relational database, with queries optimized through CTEs. | PostgreSQL foi utilizado como banco de dados relacional, com queries otimizadas por meio de CTEs.


## Common Table Expressions (CTEs) in PostgreSQL | Common Table Expressions (CTEs) no PostgreSQL

**CTEs** are temporary subqueries used within larger queries. They were a key element in managing more complex data in the project, allowing for better organization of SQL queries and maintaining readable code.

As **CTEs** são subconsultas temporárias usadas dentro de queries maiores. Elas foram uma peça fundamental no gerenciamento de dados mais complexos no projeto, permitindo organizar melhor as consultas SQL e manter o código mais legível.


## Conclusion | Conclusão

This project was a great opportunity to explore new tools and methodologies, such as using **CUID** instead of UUIDs and applying **CTEs** in PostgreSQL. It also provided rich experience in using **TanStack Query** for front-end optimization and in creating dynamic components with **React**.

Esse projeto foi uma oportunidade de explorar novas ferramentas e metodologias, como o uso de **CUID** em vez de UUIDs e a aplicação de **CTEs** no PostgreSQL. Também trouxe uma experiência rica no uso de **TanStack Query** para otimização do front-end e na criação de componentes dinâmicos com **React**.

If you'd like to collaborate or learn more about the project, feel free to explore the repository, open issues, or contribute with pull requests.

Se quiser colaborar ou saber mais sobre o projeto, fique à vontade para explorar o repositório, abrir issues ou contribuir com pull requests.

