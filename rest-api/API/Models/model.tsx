import mongoose from "mongoose";

const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Title field is required"]
    },
    todo:{
        type:String,
        required:[true,"Todo field is required"]
    } 
},{timestamps:true})

export default mongoose.model("todo-model",todoSchema);