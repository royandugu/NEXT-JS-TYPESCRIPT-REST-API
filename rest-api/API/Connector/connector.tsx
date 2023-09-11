require("dotenv").config();

import mongoose from "mongoose";

const Connector=async () : Promise<void>=>{
    try{
        await mongoose.connect("mongodb+srv://royandugu99009:UWVjeKpxEsDQPqQv@cluster0.ugh6det.mongodb.net/");
    }
    catch(err){
        console.log("Error in connecting to the database ", err);
    }
}

export default Connector;