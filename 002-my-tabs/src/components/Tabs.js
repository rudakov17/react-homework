import dataArr from '../data/data';
import { useState } from 'react';

function Tabs() {
  const [content, setContent] = useState(dataArr[0].tabContent);

  const buttonsArr = dataArr.map((elem, index) => {
    return (
      <button
        key={elem.id}
        onClick={() => setContent(dataArr[index].tabContent)}
      >
        {elem.tabName}
      </button>
    );
  });
  return (
    <>
      {buttonsArr}
      {content}
    </>
  );
}

export default Tabs;
