import './App.css';
import MySelect from './components/MySelect';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');
  return (
    <div className="App">
      <div className="selects">
        <MySelect
          value={value}
          setValue={setValue}
          options={['кофе', 'пиво', 'кола']}
        />
        <MySelect
          value={value1}
          setValue={setValue1}
          options={['пицца', 'бургер', 'пельмени']}
        />
      </div>
      <p>
        Ваш выбор: {value} {value1}
      </p>
    </div>
  );
}

export default App;
