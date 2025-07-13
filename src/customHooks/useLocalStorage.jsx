import React, {useState, useEffect} from 'react'

const useLocalStorage = (key, initValue) => {
    
    let StorageObj;
 
    if(localStorage.getItem(key)){
        StorageObj = JSON.parse(localStorage.getItem(key));
    }else {
        StorageObj = initValue;
    }

    console.log(StorageObj);

    //localStorage.setItem(key,  JSON.stringify(StorageObj));

    const[stateObj, setStateObj] =  useState(StorageObj);

    useEffect(()=>{
        localStorage.setItem(key,  JSON.stringify(stateObj));
    },[stateObj,key])

    return [stateObj,setStateObj]
}

export default useLocalStorage
