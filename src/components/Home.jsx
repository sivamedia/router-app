import React from 'react';
import useLocalStorage from '../customHooks/useLocalStorage';

const Home = () => {

  const [user,setUser] = useLocalStorage('user',{})
  return (
    <div>
      Home Component {JSON.stringify(user)}
    </div>
  )
}

export default Home
// test git