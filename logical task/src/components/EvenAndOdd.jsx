import React, { useState } from "react";

const EvenAndOdd = () => {
  // 1st step --create state variable
  const [num, setNum] = useState("");
  const handleChange = (event)=>{
    // console.log(event.target.value);
    setNum(event.target.value)
  }
  return (
    <div className="flex flex-col justify-center gap-4">
        {/* Step 2 -- Biding Value */}
        {/* Step 3 -- handle onChange event */}
      <input type="text" value={num} onChange={handleChange}  />
      {num%2 === 0 ? <h1>{`${num} is even`}</h1> :<h1>{`${num} is odd`}</h1> }
      
      
    </div>
  );
};

export default EvenAndOdd;
