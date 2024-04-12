Este projeto é um sistema de gerenciamento de tarefas, onde os usuários podem criar, visualizar, editar e excluir suas tarefas de forma organizada. Utilizando o framework Laravel, o sistema oferece uma interface amigável e eficiente para manipular as informações das tarefas.
Funcionalidades:
Criação de Tarefas: Os usuários podem adicionar novas tarefas, especificando o título, descrição, data de conclusão e outras informações relevantes.
Listagem de Tarefas: Exibição de todas as tarefas cadastradas.
Detalhes da Tarefa: Ao clicar em uma tarefa, é possível visualizar todos os detalhes.
Edição de Tarefas: Os usuários têm a possibilidade de editar os detalhes de uma tarefa existente.
Exclusão de Tarefas: Opção para remover uma tarefa da lista, garantindo a organização e limpeza do sistema.

Tecnologias Utilizadas:

Laravel: Framework PHP para o desenvolvimento do backend e da API RESTful.
PostgreSQL: Banco de dados para armazenar as informações das tarefas.
Bootstrap (Angular e CSS): Para a estilização e responsividade da interface do usuário.
Angular e TypeScript: Utilizado para funcionalidades dinâmicas na interface, como validações e interações em tempo real.

Objetivo:

O objetivo deste sistema CRUD em Laravel é proporcionar uma maneira eficiente e intuitiva para os usuários gerenciarem seus produtos, garantindo uma experiência agradável e produtiva.

Aplicação Laravel + Angular Este guia fornece uma breve visão geral das etapas envolvidas na construção de uma aplicação.   
Passo 1: Instale o Backend  Laravel usando Laravel: Instale o Laravel usando o Composer criando um novo projeto.   
Banco de dados: configure as informações do banco de dados no arquivo .env.   
Modelos e Migrações: Use o comando php craft make:model para criar modelos e migrações para suas tabelas de banco de dados.  
Controlador: Use o comando make:controller do php artesão para criar um controlador que executa operações CRUD.  
Rota: especifica a rota Route/web.php ou Route/api.php para  o método do controlador.
 Migração: Execute uma migração usando migração artesanal do php  para criar  tabelas no banco de dados.   
API: Crie uma API para fornecer dados ao frontend.

Passo 2. Criando um  projeto Angular front-end usando Angular: Um novo projeto Angular usando o Angular CLI.  
 Componentes: O comando ng generate component aonde foi criar componentes para as diversas partes do seu aplicativo.   
Caminhos: Foi usado o Angular Router para configurar caminhos de navegação entre páginas.  
 Usando a API: Angular HttpClient para consumir  dados fornecidos pela API Laravel.   
Visualizar dados: exibe dados recuperados da API nas páginas do aplicativo.