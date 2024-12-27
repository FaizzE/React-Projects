import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Counter App</h1>
      <h2>Count : {count}</h2>
      <div className='btn'>
          <button onClick={()=> setCount(count-1)}>-</button>
          <button onClick={()=> setCount(0)}>Reset</button>
          <button onClick={()=> setCount(count+1)}>+</button>
      </div>
    </>
  );
}

export default App;
