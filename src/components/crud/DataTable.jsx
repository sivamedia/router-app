import {useState, useEffect} from 'react'

const DataTable = ({users, updateHandler, deleteHandler, deleteSelected}) => {

 const [usersCache,  setUsersCache]  = useState(null)
 const [selectAll,   setSelectAll] = useState(false);
 const [selectedIds, setSelectedIds] = useState([]); 

 useEffect(()=>{
    if(users) {
      const updatedItems = users.map(item => {
        return { ...item, checked: false };
      });
      setUsersCache(updatedItems);
      //console.log(updatedItems);
    }
 },[users]);

   const deleteSelectedHandler = ()=> {
    const selectCheckedUsers = usersCache.filter(item=>  item.checked);
    const selectedIds = selectCheckedUsers.map(item =>  item.id);
    //console.log(selectedId);
    deleteSelected(selectedIds)
   }


   const allCeckHandleChange = (event) => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    const updatedItems = usersCache.map(item => ({ ...item, checked: newSelectAll }));
    setUsersCache(updatedItems);
  };

  const handleItemChange = (id) => {
    const updatedItems = usersCache.map(item => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setUsersCache(updatedItems);
   // console.log(updatedItems);

    const allChecked = updatedItems.every(item => item.checked);
    setSelectAll(allChecked);
  };


  return (<div className="user-table"> 
                <table>
                  <tbody> 
                  <tr> 
                        { usersCache && Object.keys({...usersCache[0]}).map((h)=>{return (
                           h !== 'checked' &&
                            <th key={h}><h5>{h}</h5></th>
                          )})}
                        { usersCache && usersCache.length>0 && <th key={'actions'}> 
                            <span className="delete-selected"> 
                                  <span></span>
                                  <button onClick={deleteSelectedHandler}> Delete Selected </button>
                                  <input type="checkbox"  name="select-all" checked={selectAll}  onChange={allCeckHandleChange} />
                          </span>
                        </th>}
                     
                  </tr>
                  {   usersCache &&
                      usersCache.map((user)=>{ return (
                          <tr key={user.id}>
                            <td>{user.id}</td>
                            <td className="user-name">{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>
                            <td>{user.place}</td>
                            <td>{user.mobile}</td>
                            <td className="action-container">
                              <button onClick={()=>{updateHandler(user.id)}}>Update</button>
                              <button onClick={()=>{deleteHandler(user.id)}}>Delete</button>
                              <span className='checkbox'>
                                 <input type="checkbox" id={user.id} name="select-user" checked={user.checked} onChange={() => handleItemChange(user.id)}/>
                              </span>
                            </td>
                          </tr>
                      )})
                  }
                </tbody>
                </table>
  </div>)
}

export default DataTable
