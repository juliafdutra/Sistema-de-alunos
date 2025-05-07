import React from 'react';

export default function Destaques({ destaques, emRisco }) {
  return (
    <div>
      <h2>Alunos Acima da Média da Turma</h2>
      {destaques.length > 0 ? (
        <ul>
          {destaques.map((nome, i) => <li key={i}>{nome}</li>)}
        </ul>
      ) : <p>Nenhum aluno acima da média.</p>}

      <h2>Alunos com Frequência abaixo de 75%</h2>
      {emRisco.length > 0 ? (
        <ul>
          {emRisco.map((nome, i) => <li key={i}>{nome}</li>)}
        </ul>
      ) : <p>Nenhum aluno em risco.</p>}
    </div>
  );
}
