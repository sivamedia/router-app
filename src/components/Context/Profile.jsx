import React, {useContext }from 'react'
import { AppContext } from './AppContext';
import Contact from './Contact';

function Profile() {
    // eslint-disable-next-line
    const { person, setPerson } = useContext(AppContext);

    //setPerson({'phone':9108962913});
    const changeTest = ()=> {
        //console.log("test");
        setPerson({name : "Maruti Kumar Nimmaraju", phone:9108962913});
    }

    const changePhone = (event)=>
    {
        console.log("Phone Change", event.target.value);
        setPerson({...person ,  phone:event.target.value});
    }

    const changeName = (event)=>
    {
        setPerson({...person ,  name:event.target.value});
    }

  return (
    <div className="profile">
      <label className="panelHead">Profile Component</label>
      <Contact></Contact>
      <label className="fields">Name : {person.name}</label>
      <label className="fields">Phone : {person.phone}</label>
      <label className="fields">Change Name and Phone  <button onClick={changeTest}> test </button> </label>
      <label className="fields">Change Name <input type="text" onChange={changeName} value={person.name}/>  </label>
      <label className="fields">Change Phone <input type="text" onChange={changePhone} value={person.phone}/>  </label>
      
    </div>
  )
}

export default Profile
