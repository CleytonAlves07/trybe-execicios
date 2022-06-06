import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Drinks from './page/Drinks';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} exact />
          <Route path='/drinks' element={<Drinks/>} exact />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
