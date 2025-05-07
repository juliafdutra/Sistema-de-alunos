import React from 'react';

export default function EstatisticasTurma({ mediasTurma }) {
  return (
    <div>
      <h2>Média da Turma por Disciplina</h2>
      <ul>
        {mediasTurma.map((media, i) => (
          <li key={i}>Disciplina {i + 1}: {media.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
}
