import React,{ createContext, useState, useContext, useEffect } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [infoName, setInfoName] = useState([]);
  const [infoPasswords, setInfoPasswords] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const api = await getApi();
      console.log(api);
      setDrinks(api);
    }
    getApi();
  }, [infoName, infoPasswords]);

  const allInfomation = {
    infoName,
    setInfoName,
    infoPasswords,
    setInfoPasswords,
    drinks,
    setDrinks,
  }

  return (
    <MyContext.Provider value={allInfomation} >
      {children}
    </MyContext.Provider>
  );
};

export const useData = () => useContext(MyContext);

export default MyProvider;
