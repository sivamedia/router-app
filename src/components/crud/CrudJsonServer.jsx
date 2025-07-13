import React, {useState, useEffect} from 'react';
import { deleteUserApi, deleteMultipleUsersApi} from './services/userApiServices';
import useFetch from './useFetch';
import UserForm from './UserForm';
import DataTable from './DataTable';
import SearchUser from './SearchUser';
import Pagination from './Pagination';

import './crudTable.css';


const CrudJsonServer = () => {

  const [users, setUsers] = useState([]); 
  const [usersCach, setUsersCach] =  useState([]);
  const [isDataChanged, setIsDataChanged] = useState(false);
  const [updateUser, setUpdateUser] = useState({});
  const [paging, setPaging] = useState({"first": 0, "prev": null, "next": 0, "last": 0,  "pages": 0, "items": 0});
  const [currentPage, setCurrentPage] = useState(1);

  const {data, loading, error } = useFetch(isDataChanged, currentPage);
 
  const updateHandler = (id)=> {
     console.log("Update : " + id);
     setUpdateUser({...users.filter(e=>e.id==id)[0]});
     //console.log(updateUser)
  }

  useEffect(()=>{
    if(data){
      setUsersCach(data.data);
      setUsers(data.data);

      let pagData = {};
      Object.assign(pagData, data);
      delete pagData.data;
      console.log(pagData);
      setPaging({...pagData})
      //let {first, prev, next, last, pages, items } = data;
      
    } 
  },[data]);
 
const deleteHandler = async (id)=> {
    console.log('DELETE USER : ', id);
    try {
        const deletedUser = await deleteUserApi(id);
        if(deletedUser) setIsDataChanged(!isDataChanged);
    } catch (err) {
        console.log('Failed to Delete user');
    }
}

const deleteSelected = async (idArray)=> {
   if(idArray.length<1) return false;
   console.log(idArray);
    try {
        const deletedDone = await deleteMultipleUsersApi(idArray);
        if(deletedDone) setIsDataChanged(!isDataChanged);
    } catch (err) {
        console.log('Failed to Delete Multiple User ');
    }
}

const navPagination = (page)=> {
   console.log(page);
   setCurrentPage(page);
}

 return (
    <div>
      <h2> Crud Json-Server</h2>
      <hr></hr>
      
      {users && usersCach &&
        <div className="search-content">
          <SearchUser searchKey={"name"} usersCach={usersCach} users={users} setUsers={setUsers} />
          <SearchUser searchKey={"place"} usersCach={usersCach} users={users} setUsers={setUsers} />
          <SearchUser searchKey={"mobile"} usersCach={usersCach} users={users} setUsers={setUsers} />
        </div>
      }
      <hr></hr>
      <div className="main-content">
          <div>
              {/* {loading && <h2>Loading...</h2>}  { error && <h2>error.message</h2>} */}
              {users &&
               <DataTable users={users} updateHandler={updateHandler} deleteHandler={deleteHandler} deleteSelected={deleteSelected}/>
              }
          </div>
          <div className="add-form">
              <UserForm isDataChanged= {isDataChanged} setIsDataChanged={setIsDataChanged} updateUser={updateUser}/>
          </div>
      </div>

      <hr></hr>
      <div>
        <Pagination paging={paging} navPagination={navPagination}/>
      </div>
    </div>
  )
}

export default CrudJsonServer
