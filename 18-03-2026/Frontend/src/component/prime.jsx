import { useState } from "react";

function PrimeNumber(){
    const[number,setNumber]=useState();
    const[result,setResult]=useState();

    const checkprime =()=>{
        let n= Number(number);
        if(n<=1){
            setResult("Not a prime number");
            return;
        }
        for(let i=2; i<=Math.sqrt(n); i++){
            if(n%i==0){
                setResult("Not a prime number");
                return;
            }
        }
        setResult("Prime number");
    };

    return(
    <>
     <input type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
    />
    <button onClick={checkprime}>Check</button>
        <h1>{result}</h1>
    </>
    )

}
export default PrimeNumber; 