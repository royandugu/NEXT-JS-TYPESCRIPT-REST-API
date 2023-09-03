const Connector=async (url:string) : Promise<void>=>{
    try{
        await mongoose.connect(url);
    }
    catch(err){
        console.log("Error in connecting to the database ", err);
    }
}

module.exports=Connector;