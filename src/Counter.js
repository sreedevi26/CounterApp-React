import React, { useState } from 'react'

function Counter() {
    const[Counter,setCounter]=useState(0);
    const Increment=()=>{
        setCounter(Counter+1)
    }
    const decrement=()=>{
        setCounter(Counter-1)
    }
    const reset =()=>{
        setCounter(0)
    }
    // const timeout = setTimeout
  return (
    <div className='text-center  '>

    <br /><br /><br /><br /><br /><br />
        <h1 className='text-warning'>Counter App</h1><br />
        <h3>{Counter}</h3><br />
    <button onClick={Increment} className='btn btn-warning me-2 fw-bold btn-lg'>Increment</button>
    <button onClick={decrement} className='btn btn-danger me-2 fw-bold btn-lg'>Decrement</button>
    <button onClick={reset} className='btn btn-warning me-2 fw-bold btn-lg'>Reset</button>
    <br />
    </div>

  )
}

export default Counter