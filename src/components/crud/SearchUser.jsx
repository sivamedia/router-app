import React from 'react'

const SearchUser = ({searchKey, usersCach, users,  setUsers}) => {
    
  const searchHandler = (event)=>{
    let searchWord = event.target.value;
   // console.log(usersCach);
   // let prevUsers = [...users];

     let filteredUsers = usersCach.filter((user)=>{
        searchWord = searchWord.toLowerCase();
        let userKey = user[searchKey].toString().toLowerCase();
        return userKey.startsWith(searchWord) || userKey.endsWith(searchWord) || userKey.includes(searchWord)
    })
    if(searchWord==='') {
         setUsers([...usersCach]);
    }
    else {
         setUsers([...filteredUsers]);
    } 
  }

  return (
    <div className="search-box">
      <h6>Search {searchKey} </h6>
      <input type="text" onChange={(e)=>{searchHandler(e)}}/>
      <hr></hr>
    </div>
  )
}

export default SearchUser
