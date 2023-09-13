import Model from "../../../../../API/Models/model";
import Connector from "../../../../../API/Connector/connector";
import { NextResponse } from "next/server";


interface ParamsType{
    id:string
}

export const PATCH=async (request:any, {params}:{params:ParamsType}):Promise<any>=>{
    await Connector();
    const {id}=params;
    const body=await request.json();
    const updatedData=await Model.findOneAndUpdate({_id:id},body,{new:true, runValidators:true});
    return NextResponse.json({message:"Data updated",updatedData},{status:200});
} 

export const GET=async (request:any,{params}:{params:ParamsType}):Promise<any>=>{
    await Connector();
    const {id}=params;
    const indvData=await Model.findOne({_id:id});
    return NextResponse.json({message:"Data fetching", indvData},{status:200});
}