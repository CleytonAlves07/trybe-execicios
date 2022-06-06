import { useState, useEffect} from 'react';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import "./page.css"

const PageUseEffect = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  const [favorite, setFavorite] = useState({ favorite: true });

  useEffect(() => {
    const fetchResourceTypes = async () => {
      console.log("Fui usado por dentro")
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      const data = await response.json();
      return setItems(data);
    };
    fetchResourceTypes();
  }, [resourceType]);

//   useEffect(() => {
//     setInterval(counterSucess, 3000);
//     return() => {
//       clearInterval(counterSucess);
//    } 
// },[resourceType, favorite])  
//   const counterSucess = () => {
//     console.log("We Can!");
//   }

  const handleFavorites = () => {
    return setFavorite({favorite: !favorite.favorite})
  }

  const changeResourceType = (resourceType) => {
    setResourceType(resourceType);
  }

  return (
    <div>
      <h1>{resourceType}</h1>
      <div>
        <button onClick={() => changeResourceType('posts')}>Post</button>
        <button onClick={() => changeResourceType('comments')}>Comments</button>
        <button onClick={() => changeResourceType('todos')}>Todos</button>
      </div>
      <div>
        <ul>
          {items.map((item) => item.title
            ?
            <li
              key={item.id}
              className="li"
            >
              {`${item.id} - ${item.title}`}
              <button  className="li" onClick={() => handleFavorites()}>
                {favorite.favorite ? <span><MdFavoriteBorder /></span> : <MdFavorite /> }
                </button>
            </li>
            
            :
            <li
             key={item.id}
             
            >{`${item.id} - ${item.name}`}
              <button className="li" onClick={() => handleFavorites()}>
                {favorite.favorite ? <span ><MdFavoriteBorder /></span> : <MdFavorite /> }
              </button>
            </li>)}
        </ul>
        
      </div>
    </div>
  )
}

export default PageUseEffect;