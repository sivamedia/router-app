import React, {useState} from 'react';

const MemoChild = ({propfun}) => {

    const[num,setNum]= useState(0)

    console.log("Memo Child rendered");
    return (
      <div>Memo MemoChild Component Random Num {num} 
      <br/><br/>
      <div>
       <button onClick={()=>{setNum(Math.trunc(Math.random()*10))}}> 
         <label> Random Num </label>
        </button>
        </div>
        <br/>
        <button onClick={()=>{propfun()}}> 
         <label> Prop call back </label>
        </button>
      </div>
      
    )
  }
  
export default React.memo(MemoChild)