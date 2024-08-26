import React, { useState } from 'react';
import Box from './Box';

const Try = () => {
  const [activeBox, setActiveBox] = useState(null);

  const handleClick = (index) => {
    setActiveBox(index);
  };
  /* const handleClick = (index) => {
    // Create a new array to update the active state of the boxes
    const newActiveBoxes = [...activeBoxes];
    newActiveBoxes[index] = !newActiveBoxes[index];
    setActiveBoxes(newActiveBoxes);
  };
*/
  return (
    <div className="relative w-64 h-64 border border-black ">
   
      <div className="absolute top-0  flex p-2">
        {[0, 1, 2].map(i => (
          <Box
            key={i}
            index={i}
            isActive={activeBox === i}
            onClick={handleClick}
          />
        ))}
      </div>

      
      <div className="absolute top-[36%] p-1  flex flex-col ">
        {[3, 4].map(i => (
          <Box
            key={i}
            index={i}
            isActive={activeBox === i}
            onClick={handleClick}
          />
        ))}
      </div>

   
      <div className="absolute top-[36%] right-0 p-1 flex flex-col ">
        {[5, 6].map(i => (
          <Box
            key={i}
            index={i}
            isActive={activeBox === i}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Try;
