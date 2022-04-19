import { useRef, useEffect, useState } from 'react';

const PageUseRef = () => {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const renders = useRef(0);
  const inputRef = useRef();
  const previousName = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  }

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  useEffect(() => {
    previousName.current = name;
  }, [name]);

  return (
    <div>
      <input
        ref={inputRef}
        value={info} 
        placeholder="Email"
        onChange={({ target }) => setInfo(target.value)}
      />
      <input
        value={name}
        placeholder="Name"
        onChange={({ target }) => setName(target.value)}
      />
      <h2>Olá meu nome é : {name}</h2>
      <h3>Nome com antes do último valor digitado... {previousName.current}</h3>
      <h4>Esse input foi renderizado {renders.current} vezes</h4>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );

}

export default PageUseRef;