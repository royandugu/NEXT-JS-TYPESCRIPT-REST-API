import Connector from "../../../../API/Connector/connector";
import Model from "../../../../API/Models/model";

import { NextResponse } from "next/server";

export const POST=async (request:any):Promise<any>=>{
    const {title,todo}=await request.json();

    await Connector();
    await Model.create({title:title, todo:todo});

    return NextResponse.json({message:"Data created"},{status:201});
}

export const GET=async (request:any):Promise<any>=>{
    await Connector();
    const todo=await Model.find({});
    return NextResponse.json({message:"Data fetched sucesfully", todo:todo},{status:200}) 
}

export const DELETE=async (request:any):Promise<any>=>{
    const id=request.nextUrl.searchParams.get("id");
    await Connector();
    await Model.findByIdAndDelete(id);
    return NextResponse.json({message: "Data deleted sucesfully"},{status:200})
}