import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contacts from './Component/Contacts'
import Contactadder from './Component/Contactadder'

function App() {
  // const intialContact = [
  //   {
  //     course : "UI/UX",
  //     duration: "1 year",
  //   },
  //   {
  //     course : "UI/UX",
  //     duration: "1 year",
  //   },
  //   {
  //     course : "UI/UX",
  //     duration: "1 year",
  //   },
  //   {
  //     course : "UI/UX",
  //     duration: "1 year",
  //   }
  // ]

  const getData = JSON.parse(localStorage.getItem("contact"))

  // const [contact, setContact] = useState(intialContact)
  const [contact, setContact] = useState(getData)


  

  // const [contact, setContact] = useState()
 

  // const contacthandler = (contactdata) => {
  //   // alert("parent to child call")
  //   contact.push(contactdata);
  //   console.log(contact)
  // }
  const contacthandler = (contactdata) => {
    // alert("parent to child call")
    // contact.push(contactdata);
    const alldata = [...contact, contactdata]
    setContact(alldata)
    console.log(contact)
    // localStorage.setItem("contact",alldata)
    localStorage.setItem("contact", JSON.stringify(alldata))
  }
  const  ClearData = ()=>{
    localStorage.clear();
    setContact([]);
    
    
  }
  
  


  return (
    <>
    <button onClick={ClearData}>Clear data  </button>
   
      <Contacts contact= {contact}/>
      <Contactadder contactadd = {contacthandler}/>
    </>
  )
}

export default App
