// const API_URL = "http://localhost:3000/product";

// export const fetchData = async ()=> {
//     try {
//         const response = await fetch(API_URL);

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`)
//         }

//         const data = await response.json();
//         return data;
//     } catch (error:any) {
//         throw new Error(`Error fetching data: ${error.message}`);
//     }
// }; 



// const API_URL = "http://localhost:3000/product";

// export const fetchData = async () => {
//     try {
//         const response = await fetch(API_URL);
//         console.log("Response Status:", response.status);

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log("Fetched Data:", data);
//         return data;
//     } catch (error) {
//         console.error(`Error fetching data: ${error.message}`);
//         throw new Error(`Error fetching data: ${error.message}`);
//     }
// }; 



const API_URL = "http://localhost:3000/product";

// تعریف نوع داده‌ای برای محصولات
interface Product {
    id: number;
    product: string;
    img: string;
    teacher: string;
    time: string;
    price: number;
    information: string;
    student: number;
}

export const fetchData = async (): Promise<Product[]> => {
    try {
        const response = await fetch(API_URL);
        console.log("Response Status:", response.status);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Product[] = await response.json();
        console.log("Fetched Data:", data);
        return data;
    } catch (error) {
        console.error(`Error fetching data: ${error instanceof Error ? error.message : error}`);
        throw new Error("Error fetching data. Please try again.");
    }
};
