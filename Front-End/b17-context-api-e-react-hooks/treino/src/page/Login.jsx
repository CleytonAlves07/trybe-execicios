import React, {useState, useEffect} from 'react';
import { useData } from '../context/index';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { infoName, setInfoName, infoPasswords, setInfoPasswords } = useData();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const handleVerification = () => {
      const six = 6;
      infoName.length >= six && infoPasswords.length >= six
        ? setIsDisabled(false)
        : setIsDisabled(true);
    }
    handleVerification();
  }, [infoName, infoPasswords]);


  const handleChange = () => {
    localStorage.setItem('UserName', infoName);
    localStorage.setItem('UserPasswords', infoPasswords);
    setInfoName('');
    setInfoPasswords('');
    navigate('/drinks');
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={infoName}
        onChange={({ target }) => setInfoName(target.value)} 
      />
      <input
        type='password'
        placeholder='Passwords'
        name='passwords'
        value={infoPasswords}
        onChange={({target}) => setInfoPasswords(target.value)}
      />
      <button
        type='button'
        onClick={handleChange}
        disabled={isDisabled}
      >
        Enter
      </button>
    </div>
  );
}

export default Login;