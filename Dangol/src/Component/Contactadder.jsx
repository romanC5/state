import React, { useState } from 'react'

const Contactadder = (props) => {

    const [course, setCourse] = useState("")
    const [duration, setDuration] = useState("")
  
    

// const addContactData = () => {
//     // alert("add contact")
//     const contactdata = { course, duration}
//     console.log(contactdata)
// }
const addContactData = (e) => {
    // alert("add contact")
    e.preventDefault();
    const contactdata = { course, duration}
    console.log(contactdata)
    props.contactadd(contactdata)

  // if (course.length <1 || duration.length <1){
  //   alert("please fill input field")
  // }
  // else{
  //   props.contactadd(contactdata)
  //   alert("course added successfuly!");
  //   setCourse("")
  //   setDuration("")
    
  // }

  
}

// const SaveData = ()=>{
//   localStorage.setItem("course","PHP")
//   localStorage.setItem("duration","2month")

// }
// const GetData = ()=>{
//  const getdata = localStorage.getItem("course");
//  alert(getdata)
//  const save = localStorage.getItem("duration");
//  alert(save)

// }
// const ClearData = ()=>{
//   // localStorage.removeItem("course")
//   localStorage.clear("")

// }
  return (
    <>

{/* <button onClick={SaveData}>Save Data</button>
<button onClick={GetData}>Get Data</button> */}
{/* <button onClick={ClearData}>Clear data  </button> */}
    {/* Course : <input type="text" value={course} placeholder='Enter your course' /> */}
    {/* Duration : <input type="text" value={duration} placeholder="Enter the duration of course"/> */}
    <form onSubmit={addContactData}>
    Course : <input type="text" value={course}  placeholder='Enter your course' onChange={(e) => setCourse(e.target.value)}/>
    Duration : <input type="text" value={duration} placeholder="Enter the duration of course" onChange={(e) => setDuration(e.target.value)}/>

      <button >Add course</button>
      </form>
    </>
  )
}

export default Contactadder
