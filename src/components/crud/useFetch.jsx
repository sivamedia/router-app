import {useState, useEffect} from 'react';
import { getUserApi } from './services/userApiServices';

const useFetch = (isDataChanged, currentPage) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchData = async () => {
        console.log('GET USERS ');
        setLoading(true);
            try {
                    const users = await getUserApi(currentPage);
                     if(users) setData(users);
            } catch(error) {
                    setError(error);
            } finally {
                    setLoading(false);
            }
        }
        fetchData();
    },[isDataChanged, currentPage]);
 return {data, loading, error};
};

export default useFetch
