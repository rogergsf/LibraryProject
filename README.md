# Sistema para gestão de biblioteca em Java com integração de banco de dados MySQL

_<b>Problema:</b>_
É preciso que haja um sistema para administrar de melhor forma uma biblioteca, pois o acervo contém milhares de livros, e é necessário manter o registro de todos eles: títulos, autores, categorias, datas de publicação e disponibilidade. Além disso, os usuários da biblioteca desejam consultar o catálogo, emprestar e devolver livros.

_<b>Resolução:</b>_ Criaremos um sistema de gerenciamento de biblioteca usando Java e MySQL com as seguintes etapas:

_Modelagem do Banco de Dados:_
- Criaremos uma estrutura de tabelas no banco de dados para armazenar informações sobre livros, autores, categorias e empréstimos.
- Definiremos relacionamentos entre as tabelas (por exemplo, um livro pertence a um autor, um usuário pode emprestar vários livros etc.).

_Implementação do CRUD:_
- Criaremos classes Java para representar entidades como Livro, Autor, Usuário e Empréstimo. Implementaremos as operações CRUD (Create, Read, Update, Delete) para cada entidade:<br>
CREATE: Adicionar novos livros, autores e usuários ao sistema;<br>
READ: Consultar informações sobre livros, autores e usuários;<br>
UPDATE: Modificar detalhes de livros, autores ou usuários;<br>
DELETE: Remover registros quando um livro é devolvido ou um usuário é excluído.

_Interface do Usuário:_
- Criaremos uma interface gráfica utilizando Java SWING para interagir com o sistema.
- Os usuários devem ter a possibilidade de:<br>
Pesquisar livros por título, autor ou categoria;<br>
Registrar empréstimos e devoluções;<br>
Visualizar informações detalhadas sobre um livro específico.<br><br>

_<b>Importância do Projeto:</b>_
- Organização: Uma biblioteca bem gerenciada é essencial para manter o acervo organizado e acessível aos usuários.
