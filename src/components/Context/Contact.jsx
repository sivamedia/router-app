import React, {useContext }from 'react'
import { AppContext } from './AppContext'



function Contact() {
// eslint-disable-next-line
const { person, setPerson } = useContext(AppContext);
  return (
    <div className="contact">
      <label className="panelHead">Contact Component</label>
      <label className="fields">Phone : {person.phone}</label>
    </div>
  )
}

export default Contact
