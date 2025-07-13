import React, {useContext} from 'react'
import { AppContext } from './AppContext'

function Footer() {
// eslint-disable-next-line    
const { person, setPerson } = useContext(AppContext);
  return (
    <div className="footer">
      <label className="panelHead">Footer Component</label>
      <label className="fields">Phone : {person.phone}</label>
    </div>
  )
}

export default Footer
