 Sistema de Gestão de Alunos - Professor Carlos

Descrição

Este projeto permite a gestão de notas e frequência de alunos em um sistema simples, onde o Professor Carlos pode inserir as notas de 5 disciplinas e a frequência de cada aluno, e o sistema calcula automaticamente as médias dos alunos, a média da turma por disciplina e destaca os alunos com desempenho acima da média ou com frequência abaixo de 75%.

Instruções para executar

 1. Clone o repositório:

```bash
git clone https://github.com/juliafdutra/Sistema-de-alunos.git
 Premissas
Cada aluno possui exatamente 5 notas (de 0 a 10).

A frequência é registrada em percentual (0 a 100%).

A média da turma por disciplina é calculada considerando todos os alunos.

O aluno deve ter sua frequência acima de 75% para não ser considerado em risco.

 Decisões de Projeto
React foi utilizado para construir a interface do sistema, com componentes funcionais e hooks.

Calculadora de Média e Frequência: Funções de cálculo de médias foram organizadas no arquivo utils/calculos.js para garantir uma estrutura modular e reutilizável.

A interface é simples e responsiva, utilizando CSS customizado (sem frameworks de estilo como Bootstrap ou Tailwind).

 Funcionalidades principais
Inserção de dados: Nome do aluno, notas das 5 disciplinas e a frequência.

Cálculos automáticos:

Média do aluno

Média da turma em cada disciplina

Frequência geral do aluno

Destaques:

Alunos com média acima da média da turma.

Alunos com frequência abaixo de 75% (em risco).

Exemplo de Funcionamento
Entrada de dados:
Nome	Nota 1	Nota 2	Nota 3	Nota 4	Nota 5	Frequência (%)
João	7	8	6	9	10	80
Maria	7	8	6	9	10	70

Saída esperada:
Média dos alunos: João: 8.0, Maria: 8.0

Média da turma por disciplina: 7.5, 8.0, 6.0, 9.0, 10.0

Destaques: Nenhum aluno acima da média

Risco: Maria (frequência abaixo de 75%)

 Tecnologias Usadas
React: Para a construção do front-end.

JavaScript (ES6): Lógica do sistema.

CSS: Estilização personalizada.

Hooks: Para gerenciar o estado do aplicativo e os cálculos.

 Possíveis Melhorias
Integração com um back-end para persistência de dados.

Adição de autenticação para que apenas o professor possa inserir os dados.

Geração de relatórios em PDF ou exportação para planilhas.
