import './layouteffect.css';

import React, {useEffect, useLayoutEffect, useState}from 'react'

function LayoutEffectApp() {
const [arr, setArr] = useState(Array(101).fill(0).map((e,i)=>i++));
const styl = {
              margin:'4px', width:'45px', 
              display:'inline-block',
              padding : '4px',
              textAlign: 'center',
              fontWeight: 'bold'
            };
  const addOneEnd = ()=> { setArr([...arr, arr[arr.length-1]+1])};
  const addOneBeg = ()=> { setArr([arr[0]-1,...arr]);};

  const remOneBeg = ()=> { if(arr.length>1) {
                            let temp = [...arr]; 
                            
                              temp.shift();
                              setArr(temp);
                            }
                          };

  const remOneEnd = ()=> { 
                          if(arr.length>1) {
                            let temp = [...arr]; 
                            temp.pop();
                            setArr(temp);}
                          };

  useEffect(()=>{
   console.log("Use Effect Executed");
  },[arr])

  useLayoutEffect(()=>{
    console.log("Use Layout Effect Executed");
   },[arr])

  return (
    <div className='arrLi'>
      <h1>Use Layout Effect Examples</h1>
      <div>
        <button onClick={addOneBeg}>Add -1</button>
        <button onClick={remOneBeg}>Del First</button>
      </div>
       <div className="numContainer">
          <ul>
          {
            arr.map((x, i) => {
                                return (
                                        <li style={styl} key={i} onClick={()=>console.log(x)}> {x}</li>
                                      )
                              }
                  )
          }
                </ul>
       </div>
      <div>
       <button onClick={addOneEnd}>Add +1</button>
       <button onClick={remOneEnd}>Del Last</button>
      </div>
     
      <button onClick={()=> {setArr(Array(11).fill(0).map((e,i)=>i++))}}>Reset</button>

    </div>
  )
}

export default LayoutEffectApp
