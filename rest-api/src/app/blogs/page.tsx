import { getSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";

const Page=(props:any)=>{
    console.log(props);
    return(
        <h1> {props.data} </h1>
    )
}

export const getServerSideProps=async (context:GetServerSidePropsContext)=>{
    const session=getSession(context);
    return {
        props:{
            data: session 
        }
    }
}
export default Page;