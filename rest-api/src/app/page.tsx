"use client"

import React, { FormEventHandler } from "react"


require("dotenv");

const HomePage:React.FC=()=>{

  const submitForm:FormEventHandler=async (e:React.FormEvent)=>{
    //connect to the database
    
  }

  return(
    <form onSubmit={submitForm}>
      <input type="text"/> <br/>
      <input type="text"/> <br/>
      <button type="submit"> Submit </button>
    </form>
  )
}


export default HomePage;