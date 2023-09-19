"use client"

import React from "react"
import { useState } from "react";


const Page=()=>{
    const [email,setEmail]=useState<string>("");
    const [password,setPassword]=useState<string>("");

    return(
        <form>
            <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/><br/>
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
            <button type="submit"> Submit </button>
        </form>
    )
}
export default Page;