"use client"

import React, { FormEventHandler } from "react"

import API from "./API/api"

const HomePage:React.FC=()=>{
  
  const submitForm:FormEventHandler=(e:React.FormEvent)=>{
    e.preventDefault();
    console.log("I am form submitting");
  }

  return(
    <form onSubmit={submitForm}>
      <input type="text"/> <br/>
      <input type="text"/> <br/>
      <button type="submit"> Submit </button>
    </form>
  )
}


export async function getServerSideProps(){
  const {success}=await API();
  return {
    props: { success },
  };
}

export default HomePage;