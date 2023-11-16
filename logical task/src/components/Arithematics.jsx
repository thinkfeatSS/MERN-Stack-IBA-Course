import React, { useState } from 'react'

const Arithematics = () => {
    // Create Two State +numOne , numTwo
    const operations = ['+','-','*','/',"%"]
    const [numOne, setNumOne] = useState(0);
    const [numTwo, setNumOTwo] = useState(0);
    const [result, setResult] = useState(0);
    const [operator, setOperator] = useState('+');
    // Handlers for changed state
    const handleNumOneChange = (event)=>{
        setNumOne(event.target.value)
    }
    const handleNumTwoChange = (event)=>{
        setNumOTwo(event.target.value)
    }
    // const add = ()=>{
    //     setResult(+numOne+(+numTwo))   
    // }
    const calculateResults = (event)=>{
        setOperator(event.target.innerHTML);
        let expression = `${numOne}${operator}${numTwo}`;
        setResult(eval(expression));
        console.log(expression);
        console.log(result);
        
    }
    return (
    // Create Two InputBoxes
    <div className='flex flex-col gap-4'>
        <input type='number' value={numOne} onChange={handleNumOneChange} />
        <input type="number" value={numTwo} onChange={handleNumTwoChange}/>
        {/* <button onClick={add}>+</button> */}
        {/* <h1>{`${numOne} + ${numTwo} = ${+numOne+(+numTwo)}`}</h1> */}
        {operations.map((item)=>{return <button onClick={calculateResults}>{item}</button>})}
        <h1>{`${numOne} ${operator} ${numTwo} = ${result}`}</h1>
    </div>
  )
}

export default Arithematics