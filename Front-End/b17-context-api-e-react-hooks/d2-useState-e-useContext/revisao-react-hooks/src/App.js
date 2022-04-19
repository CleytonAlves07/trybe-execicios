import { useState } from "react";
import './App.css';
import { BsHeart, BsMoonStars, BsSun } from "react-icons/bs";
import PageUseEffect from './components/PageUseEffect';
import PageUseRef from './components/PageUseRef';
import PageUseReducer from './components/PageUseReducer';



const App = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState({theme: "light"});

  const incrementCount = () => {
    setCount((prevState) =>  prevState + 1);
  };

  const incrementTheme = () => {
    setTheme(({theme}) => ({theme: theme === "dark" ? "light" : "dark"} )) 
  };

  // const changeIconTheme = () => {
  //   setTheme(({theme}) => ({theme: theme === "dark" ? <BsMoonStars /> :<BsSun />}))
  // }
  // const decrementCount = () => {
  //   setCount((prevState) => prevState - 1);
  // }
  return (
    <main className={theme.theme}>
      <aside>
        <PageUseRef />
      </aside>
        <div className='headerBox'>
           <button
            type='button'
            className='themeBtn'
            onClick={incrementTheme}>
            {theme.theme === "light" ? <BsSun /> : <BsMoonStars />}
      </button>
          <div className='likeBox'>
          <button
            type='button '
            className='likeBtn'
            onClick={incrementCount}>
            <BsHeart />
            </button>
             <h1>{count}</h1>
            </div>
      {/* <button type='button' onClick={decrementCount}>-</button> */}
        </div>
      <PageUseReducer />
      <PageUseEffect />
    </main>
    
  );
}

export default App;
