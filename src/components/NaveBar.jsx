import '../components/navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const NaveBar = () => {
  return (
    <span>
        <ul className="nav-ul">
          <Link to='/'>  <li > Home </li> </Link>
          <Link to='/object-immer'> <li > Object-Immer </li></Link>
          <Link to='/effects-vplayer'> <li > Effects Hook - Video Player </li></Link>
          <Link to='/effects'> <li > Effects Hook</li></Link>
          <Link to='/memo'> <li > Memo and CallBack Hook </li></Link>
          <Link to='/main-context-app'> <li > Main Context Hook </li></Link>
          <Link to='/reducer'> <li > Reducer Hook</li></Link>
          <Link to='/layout-effect'> <li > Layout Effect Hook</li></Link>
          <Link to='/local-storage'> <li > Local Storage</li></Link>
          <Link to='/custom-hook-local-storage'> <li >Custome Hook Local Storage</li></Link>
          <Link to='/crud'> <li >Crud with json-server</li></Link>
          
         {/* <Link to='/custom-hook-local-storage'> <li >Reducer Task APP</li></Link>*/ }
          
        </ul>
    </span>
  )
}

export default NaveBar
