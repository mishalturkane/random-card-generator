import React , {useEffect, useState} from "react";
import "./style.css"

const Counter = () => {
 
  const [counter,setCounter] = useState(0);

  useEffect(() =>{
 console.log("Counter Mounted");
 return function(){
  console.log("Counter Ummounted");
}
 
  },[]);
  useEffect(() =>{
    console.log("Counter Updated");
   
     },[counter]);

  const IncrementCounter=()=>{
    setCounter(counter+1);
  }
  const DecrementCounter=()=>{
    if(counter ===0 ) return;
    setCounter(counter-1);
  }

  
 
  return (
    <div className="counter-container">
      <h1>{counter}</h1>
      <button onClick={IncrementCounter} style={{background: "lightgreen"}}>INC</button>
      <button onClick={DecrementCounter} style={{background: "tomato"}}>DEC</button>
    </div>
  );
};
export default Counter;
