const mongoose=require("mongoose");

const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Title field is required"]
    },
    todo:{
        type:String,
        required:[true,"Todo field is required"]
    }
})

mongoose.models={}
export default mongoose.model("todo-model",todoSchema);