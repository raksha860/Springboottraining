import { useState } from "react";

function Calculator(){
    const[num1, setNum1]=useState(0);
    const[num2, setNum2]=useState(0);
    const[result, setResult]=useState(0);

    const Add=() =>{
        setResult(Number(num1)+Number(num2));
    }
    const Sub=() =>{
        setResult(Number(num1)-Number(num2));
    }
    const Div=() =>{
        setResult(Number(num1)/Number(num2));
    }
    const Mult=() =>{
        setResult(Number(num1)*Number(num2));
    }
    const Mod=() =>{
        setResult(Number(num1)%Number(num2));
    }
    return(
        <>
        <h1>Simple calculator</h1>
        <input type="number"
         value={num1}
         onChange={(e)=>setNum1(e.target.value)}
        />
        <input type="number"
         value={num2}
         onChange={(e)=>setNum2(e.target.value)}
        />
         <button onClick={Add}>Add</button>
        <button onClick={Sub}>Subtraction</button>
         <button onClick={Mult}>Multiplication</button>
        <button onClick={Div}>Division</button>
         <button onClick={Mod}>Remainder</button>
         <h1>{result}</h1>
        </>
    )
}
export default Calculator;