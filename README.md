# Projeto-Library
*> Projeto em Java com integração de banco de dados MySQL <*

_Problema:_
É preciso que haja um sistema para administrar de melhor forma uma biblioteca, pois o acervo contém milhares de livros, e é necessário manter o registro de todos eles: títulos, autores, categorias, datas de publicação e disponibilidade. Além disso, os usuários da biblioteca desejam consultar o catálogo, emprestar e devolver livros.

_Resolução:_
- Criaremos um sistema de gerenciamento de biblioteca usando Java e MySQL. Aqui estão os passos principais:

_Modelagem do Banco de Dados:_
- Criaremos uma estrutura de tabelas no banco de dados para armazenar informações sobre livros, autores, categorias e empréstimos.
- Definiremos relacionamentos entre as tabelas (por exemplo, um livro pertence a um autor, um usuário pode emprestar vários livros etc.).

_Implementação do CRUD:_
- Criaremos classes Java para representar entidades como Livro, Autor, Usuário e Empréstimo. Implementaremos as operações CRUD (Create, Read, Update, Delete) para cada entidade:
Criar: Adicionaremos novos livros, autores e usuários ao sistema.
Ler: Consultaremos informações sobre livros, autores e usuários.
Atualizar: Modificaremos detalhes de livros, autores ou usuários.
Excluir: Removeremos registros quando um livro é devolvido ou um usuário é excluído.

_Interface do Usuário:_
- Criaremos uma interface gráfica utilizando Java SWING para interagir com o sistema.
- Os usuários devem ter a possibilidade de:
Pesquisar livros por título, autor ou categoria.
Registrar empréstimos e devoluções.
Visualizar informações detalhadas sobre um livro específico.


_Importância do Projeto:_
- Organização: Uma biblioteca bem gerenciada é essencial para manter o acervo organizado e acessível aos usuários.

