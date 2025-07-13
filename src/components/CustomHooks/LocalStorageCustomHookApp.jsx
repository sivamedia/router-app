import React from 'react';
import useLocalStorage from '../../customHooks/useLocalStorage';

const LocalStorageCustomHookApp = () => {

    /*setItem('www.sivamedia.com',  JSON.stringify(storageObj));
    const[storeObj, setStoreObj] =  useState(storageObj);
    useEffect(()=>{
      localStorage.setItem('www.sivamedia.com', JSON.stringify(storeObj));
    },[storeObj]);
  */
  let storageObj = {name: 'Sivakumar', age: 44, phone: 9986683395};
  const [strObj,setStrObj] = useLocalStorage('www.sivamedia.com',storageObj)

  let userData = {name: 'Vamsi', age: 32, phone: 8639037700};

  const [user,setUser] = useLocalStorage('user',userData)


  let userDatamas = {name: 'Master', age: 52, phone: 934289040};
  const [user2,setUser2] = useLocalStorage('Master',userData)


  const handleStore = (e) => {
    setStrObj({...strObj, [e.target.name] : e.target.value })
  }

  return (
    <div>
      <div>
        <label>Name :  </label>
        <input type="text" name='name' value={strObj.name} onChange={(e)=>{handleStore(e)}} placeholder='Enter Your Name'/>
      </div>   
      <div>
        <label>Age :  </label>
        <input type="number" name='age' value={strObj.age} onChange={(e)=>{handleStore(e)}} placeholder='Enter Your age'/>
      </div>    
      <div>
        <label>Mobile :  </label>
        <input type="number" name='phone' value={strObj.phone} onChange={(e)=>{handleStore(e)}} placeholder='Enter Your Phone Number'/>
      </div>  
      <div>
        <label> {JSON.stringify(strObj) }</label>
      </div>
      <div>
        user
        <label> {JSON.stringify(user) }</label>
      </div>
    </div>
    
  )
}

export default LocalStorageCustomHookApp
