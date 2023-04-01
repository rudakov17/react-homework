import './App.css';
import { useState } from 'react';
import Tab from './components/Tab';

const myArray = ['first', 'second', 'third'];

function App() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="App">
      <h1>TABS</h1>

      {myArray.map((content, index) => {
        return (
          <Tab
            key={content}
            onClick={() => setTabIndex(index)}
            buttonName={index}
          />
        );
      })}

      <p>{myArray[tabIndex]}</p>
    </div>
  );
}

export default App;
