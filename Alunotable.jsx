import React from 'react';
import { calcularMediaAluno } from '../utils/calculos';

export default function AlunoTable({ alunos }) {
  return (
    <table className="tabela">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Média</th>
          <th>Frequência (%)</th>
        </tr>
      </thead>
      <tbody>
        {alunos.map((aluno, index) => (
          <tr key={index}>
            <td>{aluno.nome}</td>
            <td>{calcularMediaAluno(aluno.notas).toFixed(2)}</td>
            <td>{aluno.frequencia.toFixed(1)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
