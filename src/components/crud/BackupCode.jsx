 const  getUserData  = ()=>{
    fetch('http://localhost:5000/users/').then((data)=>{ 
        if(!data.ok) { throw new Error(data.statusText)} 
        data.json().then((data)=>{setUsers(data); setUsersCach(data); setIsDataChanged(false);})})
        .catch((error)=>{console.log(error)});
  }


  const  addUserData  = (data)=>{
      delete data.id;
      const options = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      };
      fetch('http://localhost:5000/users/',options).then((data)=>{ 
          if(!data.ok) { throw new Error(data.statusText)} 
          data.json().then((data)=>{
              console.log(data);
              setIsDataChanged(!isDataChanged);
          })})
          .catch((error)=>{console.log(error)});
   }   


   //Event Delegation

  // UserForm.jsx:61 You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.