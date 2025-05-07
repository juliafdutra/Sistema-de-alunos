import React, { useState } from 'react';

export default function AlunoForm({ onAdd }) {
  const [nome, setNome] = useState('');
  const [notas, setNotas] = useState(Array(5).fill(''));
  const [frequencia, setFrequencia] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const notasNumericas = notas.map(n => parseFloat(n));
    onAdd({ nome, notas: notasNumericas, frequencia: parseFloat(frequencia) });
    setNome('');
    setNotas(Array(5).fill(''));
    setFrequencia('');
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome do aluno" required />
      {notas.map((n, i) => (
        <input key={i} type="number" min="0" max="10" step="0.1" value={n} onChange={e => {
          const novasNotas = [...notas];
          novasNotas[i] = e.target.value;
          setNotas(novasNotas);
        }} placeholder={`Nota ${i + 1}`} required />
      ))}
      <input type="number" min="0" max="100" value={frequencia} onChange={e => setFrequencia(e.target.value)} placeholder="Frequência (%)" required />
      <button type="submit">Adicionar Aluno</button>
    </form>
  );
}
