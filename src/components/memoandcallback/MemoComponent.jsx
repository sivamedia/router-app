import React, { useState, useMemo, useCallback } from 'react';
import MemoChild from './MemoChild';

const MemoComponent = () => {
  const [counter, setCount] = useState(0);
  const [fbNumber, setFbNum] = useState(2);

  const fibonac = (n) => {
    if (n <= 1) {
      return n;
    }
    return fibonac(n - 1) + fibonac(n - 2);
  }

  function renderFibonacciSequence(n) {
    let result = '';
    for (let i = 0; i < n; i++) {
      result += fibonac(i) + ' -- ';
    }
    //console.log(result);
    console.log("Fibonacci Function Rendered");
    return result;
  }

// eslint-disable-next-line
  const fbSeq = useMemo(() => { return renderFibonacciSequence(fbNumber) }, [fbNumber])
  //cached function below

  const propfun = useCallback(() => {
    console.log("click call back from child count : ", counter);
  }, [counter])

  return (

    <div>
      <input type="number" value={fbNumber} onChange={(e) => setFbNum(e.target.value)}></input>
      <div>Fibonacci Sequence of {fbNumber} :</div>
      <div>{fbSeq} </div>
      <br/><br/>
      <div>Counter Value is {counter}</div>
      <br/>
      <button onClick={() => setCount(counter => counter + 1)}>
        <label>Count Increment +1</label>
      </button>
      <br/><br/>
      <div>
        <MemoChild propfun={propfun} />
      </div>
    </div>
  )
}

export default MemoComponent

