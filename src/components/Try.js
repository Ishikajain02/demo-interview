import React, { useState } from 'react';
import Box from './Box';

const Try = () => {
 /* const [activeBox, setActiveBox] = useState(null);

  const handleClick = (index) => {
    setActiveBox(index);
  };*/
  const [activeBoxes, setActiveBoxes] = useState(Array(7).fill(false));

  const handleClick = (index) => {
    setActiveBoxes((prev) => {
      const newActiveBoxes = [...prev];
      newActiveBoxes[index] = !newActiveBoxes[index];
      return newActiveBoxes;
    });
  };

 
  return (
    <div className="relative w-64 h-64 border border-black ">
   
      <div className="absolute top-0  flex p-2">
        {[0, 1, 2].map(i => (
          <Box
            key={i}
            index={i}
            isActive={activeBoxes[i]}
            onClick={handleClick}
          />
        ))}
      </div>

      
      <div className="absolute top-[36%] p-1  flex flex-col ">
        {[3, 4].map(i => (
          <Box
            key={i}
            index={i}
            isActive={activeBoxes[i]}
            onClick={handleClick}
          />
        ))}
      </div>

   
      <div className="absolute top-[36%] right-0 p-1 flex flex-col ">
        {[5, 6].map(i => (
          <Box
            key={i}
            index={i}
            isActive={activeBoxes[i]}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Try;
