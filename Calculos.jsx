export function calcularMediaAluno(notas) {
  if (notas.length === 0) return 0;
  const soma = notas.reduce((acc, val) => acc + val, 0);
  return soma / notas.length;
}

export function calcularMediasTurma(alunos) {
  const somaPorDisciplina = Array(5).fill(0);
  const totalAlunos = alunos.length;

  alunos.forEach(({ notas }) => {
    notas.forEach((nota, i) => somaPorDisciplina[i] += nota);
  });

  return somaPorDisciplina.map(soma => totalAlunos > 0 ? soma / totalAlunos : 0);
}

export function calcularEstatisticas(alunos) {
  const mediasTurma = calcularMediasTurma(alunos);

  const destaques = [];
  const emRisco = [];

  alunos.forEach((aluno) => {
    const mediaAluno = calcularMediaAluno(aluno.notas);
    const mediaTurmaGeral = calcularMediaAluno(mediasTurma);
    if (mediaAluno > mediaTurmaGeral) {
      destaques.push(aluno.nome);
    }
    if (aluno.frequencia < 75) {
      emRisco.push(aluno.nome);
    }
  });

  return { mediasTurma, destaques, emRisco };
}
