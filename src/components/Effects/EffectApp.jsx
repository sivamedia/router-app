import React, {useState, useEffect} from 'react';


function EffectApp(){
    let tog = true;
    const onComplete = () =>{
        tog = false;    

    }
    return(
        <> 
        <h1> Rendered  Times </h1>
        {(tog) ? <ChildEffect  countProp={10} onComplete={onComplete}/> : ""}
              
        </>
    )
}

export default EffectApp;


export const ChildEffect = ({countProp,onComplete}) =>{    
    const [count, setCount] = useState(countProp)

   useEffect(()=>{

        setTimeout(()=>{
            setCount(count => count +1);
        }, 1000)
        if(count > 20){
            onComplete();
        }
        return( () => {
            console.log(" Effect Component unMounted");
        })

    },[count])

    const content= (
        <div>count {count} </div>
    )
     if(count<20)
     return(content)
    else return(false);
    

}