const API_URL = "http://localhost:3000/product";

export const fetchData = async ()=> {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json();
        return data;
    } catch (error:any) {
        throw new Error(`Error fetching data: ${error.message}`);
    }
};