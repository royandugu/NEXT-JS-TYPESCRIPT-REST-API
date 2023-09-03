//main dependency
require("dotenv");
const mongoose=require("mongoose");

//secondary dependency
const connect=require("./Connector/connector");

const API=async (): Promise<void>=>{
    try{
        await connect(process.env.MONGO_URI);        
    }
    catch(err){
        console.log("Failed to start the API" + err);
    }
}