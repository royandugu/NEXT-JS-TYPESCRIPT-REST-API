import Connector from "../../../../API/Connector/connector";
import Model from "../../../../API/Models/model";

import { NextResponse } from "next/server";

export const POST=async (request:any):Promise<any>=>{
    const {title,todo}=await request.json();

    await Connector();
    await Model.create({title:title, todo:todo});

    return NextResponse.json({message:"Data created"},{status:200});
}