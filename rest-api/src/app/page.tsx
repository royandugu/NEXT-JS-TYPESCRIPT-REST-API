"use client"

import { useState } from "react";
import React, { FormEventHandler } from "react"
import ContentDisplayer from "../../Components/ContentDisplayer/contentDisplayer";
import { QueryClientProvider, QueryClient } from 'react-query';
import { createData } from "../../Components/CRUDperformers/postData";

const HomePage:React.FC=()=>{

  const [title,setTitle]=useState<string>(" ");
  const [todo,setTodo]=useState<string>(" ");

  const submitForm:FormEventHandler=async (e:React.FormEvent)=>{
    e.preventDefault();
    const dataCreated=createData(title,todo);
    console.log(dataCreated);
  }

  const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  });
  

  return(
    <QueryClientProvider client={queryClient}>
      <form onSubmit={submitForm}>
        <input type="text" onChange={(e)=>setTitle(e.target.value)}/> <br />
        <input type="text" onChange={(e)=>setTodo(e.target.value)}/> <br />
        <button type="submit"> Submit </button>
        <ContentDisplayer />
      </form>
    </QueryClientProvider>
  )
}


export default HomePage;