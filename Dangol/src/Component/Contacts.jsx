import React from 'react'

const Contacts = (contact) => {
    console.log(contact)
  return (
    <>
      <h1>Add course</h1>

      {contact?.contact?.map((data)=> (
      <div>
        course:{data?.course} <br/>
        duration:{data?.duration}<br/>
      </div>
      ))}
    </>
  )
}

export default Contacts
