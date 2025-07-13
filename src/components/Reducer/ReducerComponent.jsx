import React, {useState, useReducer} from 'react';

function ReducerComponent() {

  const [increment, setIncrement] = useState(10);
  const initialState = {count:0};

  const reducer = (state, action) => {
    switch(action.type) {
      case 'increment' : {return {count: state.count +1};}
      case 'decrement' : {return {count: state.count -1};}
      case 'incrementby' : {return {count: state.count + increment};}
      case 'decrementby' : {return {count: state.count - increment};}
      default :  {return {count: action.value};}
    }
    
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  

  return (
    <div>
      <label>Counter : {state.count} </label> <br/>  <br/>

      <button onClick={()=> dispatch({type: 'decrement'})}> Decrement </button>
      <button onClick={()=> dispatch({type: 'increment'})}> Increment </button>

      <br/> <br/>
      <input type="number" onChange={(event)=> dispatch({type: 'default', value:Number(event.target.value)})} value={state.count}></input>
      <button onClick={()=> dispatch({type: '',value:0})}> Default </button>
      <br/>  <br/>
      <input  value={increment} onChange={(e)=>setIncrement(Number(e.target.value))}type="number" ></input>
      <br/><br/>
      <button onClick={()=> dispatch({type: 'incrementby'})}> Increment {increment}</button>
      <button onClick={()=> dispatch({type: 'decrementby'})}> Decrement {increment}</button>
    </div>
  )
}

export default ReducerComponent
