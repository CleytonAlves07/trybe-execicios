import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['Acordar', 'Fazer fisioterapia', 'Levar Eli no trabalho', 'Estudar programação', 'Estudar inglês', 'Assistir conteúdo do dia', 'Assistir Aula', 'Fazer atividades do soft skills'];

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Lista de tarefas</h1>
        <ul>{ tarefas.map(tarefa => Task(tarefa))}</ul>
      </div>
    );
  }
}

export default App;