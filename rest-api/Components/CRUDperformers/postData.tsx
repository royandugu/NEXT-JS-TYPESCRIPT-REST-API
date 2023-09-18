export const createData = async (title:string, todo:string) : Promise<JSON | void> => {
    const url = `http://localhost:3000/api/routes`;

    const data:Object = {
        title: title,
        todo: todo
    }
    const requestOptions:Object = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };

    try {
        const response = await fetch(url, requestOptions);
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error:', error);
    }
}