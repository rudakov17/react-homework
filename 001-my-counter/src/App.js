import { useState } from 'react';
import './App.css';
import ButtonUp from './components/ButtonUp';
import ButtonDown from './components/ButtonDown';
import ButtonMegaUp from './components/ButtonMegaUp';
import Counter from './components/Counter';
import ButtonMegaDown from './components/ButtonMegaDown';
import ButtonReset from './components/ButtonReset';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div>
        <Counter count={count} />
        <ButtonMegaUp count={count} onClick={setCount} />
        <ButtonUp count={count} onClick={setCount} />
        <ButtonDown count={count} onClick={setCount} />
        <ButtonMegaDown count={count} onClick={setCount} />
      </div>
      <div>
        <ButtonReset count={count} onClick={setCount} />
      </div>
    </div>
  );
}

export default App;
