import { useState } from "react";
import Switch from "./component/switch";
import Guessing from "./component/Guessing";
import GradeSystem from "./component/Grade";
import Listdisplay from "./component/ListDisplay";
import PrimeNumber from "./component/prime";
import Primelist from "./component/primeList";
import Passfail from "./component/pass";


function App(){
  const[count, setCount]=useState(0);

  const incrementCounter =() => {
    setCount(count + 1);
  };

  const decrementCounter =() => {
    setCount(count - 1);
  };

  return(
    <>
    
    <div>total count:{count}</div>
    <button onClick={incrementCounter}>Add + 1</button>
    <button onClick={decrementCounter}>Sub - 1</button>
    {/* <Switch/> */}
    {/* <Guessing/>
    <GradeSystem/>
    <Listdisplay/> */}
    {/* <PrimeNumber/> */}
    <Primelist/>
    <Passfail/>
    </>
  );
}
export default App;