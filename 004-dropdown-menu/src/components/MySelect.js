import { useState } from 'react';

function MySelect({ options, value, setValue }) {
  const [state, setState] = useState([]);
  //   const [value, setValue] = useState(options[0]);
  function dropDown() {
    setState(state.length > 0 ? [] : options);
  }
  return (
    <div>
      <div className="select" onClick={dropDown}>
        {value}
      </div>
      <div className="absolute">
        {state.map((text, index) => {
          return (
            <div
              className="option"
              key={index}
              onClick={() => {
                setValue(text);
                dropDown();
              }}
            >
              {text}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MySelect;
