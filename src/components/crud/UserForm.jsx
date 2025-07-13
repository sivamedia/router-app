import React, { useState, useEffect } from 'react';
import { postUserApi, updateUserApi } from './services/userApiServices';

import './userForm.css';

const UserForm = ({isDataChanged, setIsDataChanged, updateUser}) => {

const formFields = {
  name:'Ramanujam', age:50, gender:'Male', place: 'Bangalore', mobile:9999999999
}

const [userData, setUserData] = useState(formFields);

useEffect(()=>{
 console.log(updateUser);
 if(Object.values(updateUser).length>0) {
  setUserData({...updateUser});
 }
},[updateUser]);

const handleChange = (event) => {
    let { name, value } = event.target;
    if(name === 'age' || name === 'mobile') value = Number(value);
    console.log(typeof(value));
    setUserData(prevData => ({
      ...prevData,
      [name]: value,
    }));
}; 

const resetUserHandler = () => {
 let res = {...formFields}

 for(let field in res) {
    res[field] = '';
    formFields[field] ='';
 }

   setUserData({...res});
}

const addUserHandler = async ()=> {
    console.log('ADD USER : ', userData);
    try {
        const addedUser = await postUserApi(userData);
        if(addedUser) setIsDataChanged(!isDataChanged);
    } catch (err) {
        console.log('Failed to Create user');
    }
}

const updateUserHandler = async ()=>{
    console.log('UPDATE USER : ', userData);
    try {
        const updatedUser = await updateUserApi(userData);
        if(updatedUser) setIsDataChanged(!isDataChanged);
    } catch (err) {
        console.log('Failed to Update user');
    }
}

  return (
    <div className="main-adupdate">
        <div className="heading-content">
            <h4> Add User Update User </h4>
        </div>
            <form onChange={handleChange}>
                <div className="form-container">
                    <div className="form-labels"> 
                        <label> Name </label>
                        <label> Age </label>
                        <label> Gender </label>
                        <label> Place </label>
                        <label> Mobile </label>
                    </div>
                    <div className="form-inputs"> 
                        <input type="text" name="name" value={userData.name}/>
                        <input type="number" name="age" value={userData.age}/>
                        <select value={userData.gender} name="gender">
                            <option defaultValue="Female">Female</option>
                            <option defaultValue="Male">Male</option>
                            <option defaultValue="Other">Other</option>
                        </select>
                        <input type="text" name="place" value={userData.place}/>
                        <input type="number" name="mobile"  value={userData.mobile}/> 

                    </div>
                </div>
            </form>

        <div className="button-content">
            <button onClick={addUserHandler}> Add User </button>
            <button onClick={updateUserHandler}>  Update User </button>
            <button onClick={resetUserHandler}>  Reset  </button>
        </div>
        <div className="form-results">
               {/* <div> {Object.keys(userData).map((e)=> <p>{e}</p>)} </div>  
               <div> {Object.values(userData).map((e)=> <p>{e}</p>)} </div>    */}
              <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
    </div>
  )
}

export default React.memo(UserForm);
