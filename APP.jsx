import React, { useState } from 'react';
import AlunoForm from './components/AlunoForm';
import AlunoTable from './components/AlunoTable';
import Destaques from './components/Destaques';
import EstatisticasTurma from './components/EstatisticasTurma';
import { calcularMedias, calcularEstatisticas } from './utils/calculos';

export default function App() {
  const [alunos, setAlunos] = useState([]);

  const adicionarAluno = (aluno) => {
    setAlunos((prev) => [...prev, aluno]);
  };

  const { mediasTurma, destaques, emRisco } = calcularEstatisticas(alunos);

  return (
    <div className="container">
      <h1>Sistema de Gestão de Alunos</h1>
      <AlunoForm onAdd={adicionarAluno} />
      <AlunoTable alunos={alunos} />
      <EstatisticasTurma mediasTurma={mediasTurma} />
      <Destaques destaques={destaques} emRisco={emRisco} />
    </div>
  );
}
