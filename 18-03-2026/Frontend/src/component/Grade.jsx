import { useState } from "react";

function GradeSystem(){
    const[number,setNumber]=useState();
    const[result,setResult]=useState();

    const grade =() =>{
        if(number>=90){
            setResult("Grade A");
        }else if(number>=80){
            setResult("Grade B");
        }else if(number>=70){
            setResult("Grade C");
        }else if(number>=60){
            setResult("Grade D");
        }else if(number>=50){
            setResult("Grade E");
        }else{
            setResult("Fail");
        }
    }

    return(
        <>
        <div>
       <input type="number"
       value={number}
       onChange={(e) => setNumber(e.target.value)}
       />
       <button onClick={grade}>Check</button>
       <h1>{result}</h1>
       </div>
        </>
    );
}
export default GradeSystem;