export const fetchAllData=async ():Promise<JSON>=>{
    const dataPromise=await fetch("http://localhost:3000/api/routes");
    return dataPromise.json();
}

export const fetchIndvData=async(id:string):Promise<JSON>=>{
    const dataPromise=await fetch(`http://localhost:3000/api/routes/${id}`);
    return dataPromise.json();
}
