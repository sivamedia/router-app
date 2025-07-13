const USER_API = 'http://localhost:5000/users';

export const postUserApi = async (data) => {
    delete data.id;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    try {
        const response = await fetch(USER_API, options);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        return await response.json();
    }
    catch (error) {
        console.error('API POST Error: ', error);
        throw error;
    }
}


export const updateUserApi = async (data) => {
    let id = data.id;
    delete data.id;
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    try {
        const response = await fetch(USER_API + '/'+ id, options);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        return await response.json();
    }
    catch (error) {
        console.error('API PUT Error: ', error);
        throw error;
    }
}  

export const deleteUserApi = async (id) => {
    const options = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json' }
    };

    try {
        const response = await fetch(USER_API + '/' + id, options);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        return await response.json();
    }
    catch (error) {
        console.error('API DELETE Error: ', error);
        throw error;
    }
}


export const getUserApi = async (page) => {

    const url = new URL(USER_API);
    const params = {
    _page: page
    };

    url.search = new URLSearchParams(params).toString();

    try {
            const response = await fetch(url);
            if(!response.ok){
                throw new Error(`HTTP error Status: ${response.status}`);
            }
            const result = await response.json();
            return result;

        } catch(error) {
            console.error('API GET Error: ', error);
            throw error;
        } 
        
}


export  const deleteMultipleUsersApi = async (idsToDelete) => {
    const options = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json' }
    };

    const deletePromises = idsToDelete.map(id => fetch(USER_API + '/' + id, options));

    try {
        const results = await Promise.allSettled(deletePromises);
        console.log("DELETE MULTIPLE USERS API Response : ", results);
        let success = await results.every(res=> res.value.ok);
        if(success) {
            return true
        }
        else {
                let allDeletedResults =  await results.map(
                               async (res)=> { 
                                if( res.value.ok){
                                    let reponseSuccess =  await res.value.json();
                                    console.log('delete success : ', reponseSuccess);
                                    return reponseSuccess;
                                }
                                else{
                                    let reponsefailed =  `status : ${  res.value.statusText } => url : ${res.value.url}`;
                                    console.log('delete failed : ', reponsefailed );
                                    return  reponsefailed;
                                    
                                }
                    }
                );
               // console.log('Final Results : ', allDeletedResults)
        }
     } catch (error) {
      console.error('Error deleting selected items:', error);
    } 
  };

 

   