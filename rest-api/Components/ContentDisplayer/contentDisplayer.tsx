import { useQuery } from "react-query";
import { fetchAllData } from "../CRUDperformers/fetchData";

interface TodoType{
    id:any,
    title:String,
    todo:String
}

const ContentDisplayer = () => {
    const { data, status } = useQuery("all-data", fetchAllData);

    if (status === "loading") return <h5> Loading </h5>
    else if (status === "error") return <h5> Error </h5>
    else if (status === "success" && data) {
        if (typeof data === 'object' && 'todo' in data) {
            console.log(data);
            const todoData = data as { todo: Array<TodoType> }; // Replace YourTodoType with the actual type of todo
            
            return (
        
                <>
                    {todoData.todo.map((todos) => (
                        <h5 key={todos.id}> {todos.title} </h5>
                    ))}
                </>
            );
        } else {
            // Handle the case where 'todo' property is missing in 'data'
            return <h5>Data is missing the 'todo' property</h5>;
        }
    } else {
        // Handle other cases
        return null;
    }
}
export default ContentDisplayer;