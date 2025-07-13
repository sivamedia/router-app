import React, {useState, useEffect} from 'react';

const LocalStorageApp = () => {

  let storageObj = {name: 'Sivakumar', age: 44, phone: 9986683395};
  localStorage.setItem('www.sivamedia.com',  JSON.stringify(storageObj));
  
  const[storeObj, setStoreObj] =  useState(storageObj);

  useEffect(()=>{
   localStorage.setItem('www.sivamedia.com', JSON.stringify(storeObj));
  },[storeObj]);

  const handleStore = (e) => {
    setStoreObj({...storeObj, [e.target.name] : e.target.value })
  }
  

  return (
    <div>
      <div>
        <label>Name :  </label>
        <input type="text" name='name' value={storeObj.name} onChange={(e)=>{handleStore(e)}} placeholder='Enter Your Name'/>
      </div>   
      <div>
        <label>Age :  </label>
        <input type="number" name='age' value={storeObj.age} onChange={(e)=>{handleStore(e)}} placeholder='Enter Your age'/>
      </div>    
      <div>
        <label>Mobile :  </label>
        <input type="number" name='phone' value={storeObj.phone} onChange={(e)=>{handleStore(e)}} placeholder='Enter Your Phone Number'/>
      </div>  
      <div>
        <label> {JSON.stringify(storeObj) }</label>
      </div>
    </div>
    
  )
}

export default LocalStorageApp
