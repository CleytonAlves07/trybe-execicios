import Greeting from './Greeting';
import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <Greeting name="Cleyton" lastName="Alves" />
        <Greeting name="World" lastName="Worldinho" />
        <Greeting name="Céu Azul" lastName="Lindo" />
        <Greeting name="React" lastName="M-A-R-A-V-I-L-H-O-S-O" />
        <Greeting name="Front-End" LastName="Top" />
      </div>
    );
  }
  
}

export default App;
