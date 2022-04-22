import React, { useState, useEffect } from "react";
import { MdFavoriteBorder } from "react-icons/md";


export default function App() {
  const [repositories, setRepositories] = useState([]);
  const [counter, setCounter] = useState(0);

  async function getFetch() {
    const response = await fetch('https://api.github.com/users/CleytonAlves07/repos');
    const data = await response.json();
    return setRepositories(data);
  }
  useEffect(() => (
     getFetch()
  ), []);

  
  function handleFavorites(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo
    });
    
    setRepositories(newRepositories);
  } 
  return (
    <>
    <ul>
      {repositories.length > 0 && 
        repositories.map(repo => (
          <li key={repo.id}>
            {repo.name}
            {repo.favorite && <span><MdFavoriteBorder /></span>}
            <button onClick={() => handleFavorites(repo.id)}>Favorito</button>
          </li>
      ))
      }
      
      </ul>
      <div>Counter: {counter}</div>
      <button type="button" onClick={() => setCounter(counter + 1)}>More</button>
      <button type="button" onClick={() => setCounter(counter -1)} >Less</button>
    </>
     
  );
}

//  const [repositories, setRepositories] = useState([
//     { id: 1, name: `repo-1` },
//     { id: 2, name: `repo-2` },
//     { id: 3, name: `repo-3`}
//   ]);

  // function handleAddRepository() {
  //   setRepositories([...repositories, { id: Math.random(), name: "Novo repositório adicionado!" }])
  // }
  
  // function removeRepository() {
  //   setRepositories([repositories.filter((e) => e.id === repositories.id)])
  // }

   /* <button onClick={handleAddRepository}>
        Add
      </button>
      <button onClick={removeRepository}>
        Remove
      </button>
    </>
     */