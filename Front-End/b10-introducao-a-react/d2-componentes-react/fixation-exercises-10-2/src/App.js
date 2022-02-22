import catb10d2 from './catb10d2.jpeg'
import Image from './Image';
import './App.css';
import React from 'react';

function App() {
  return(
    <main>
      <Image source={catb10d2} alternativeText='Cute cat staring' />
    </main>
  );
}

export default App;
