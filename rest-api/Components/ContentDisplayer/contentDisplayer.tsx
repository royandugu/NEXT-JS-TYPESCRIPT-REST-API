import { useQuery } from "react-query";
import { fetchAllData } from "../CRUDperformers/fetchData";

const ContentDisplayer=()=>{
    const {data,status}=useQuery("all-data",fetchAllData);
    
    if(status==="loading") return <h5> Loading </h5>
    else if(status === "error") return <h5> Error </h5>
    else if (status === "success") {
        
    }
}
export default ContentDisplayer;