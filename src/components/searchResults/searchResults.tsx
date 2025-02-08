

// import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// export default function SearchResults() {
//     const [results, setResults] = useState([]);
//     const location = useLocation();
//     const query = new URLSearchParams(location.search).get('query');

//     useEffect(() => {
//         const fetchResults = async () => {
//             if (query) {
//                 try {
//                     const response = await fetch(`http://localhost:3000/product?search=${encodeURIComponent(query)}`);
//                     if (!response.ok) {
//                         throw new Error('Network response was not ok');
//                     }
//                     const data = await response.json();
//                     setResults(data);
//                 } catch (error) {
//                     console.error('Error fetching search results:', error);
//                 }
//             }
//         };

//         fetchResults();
//     }, [query]);

//     return (
//         <div className="p-6">
//             <h2 className="text-2xl font-bold">نتایج جستجو برای: {query}</h2>
//             <ul className="mt-4">
//                 {results.length > 0 ? (
//                     results.map((product) => (
//                         <li key={product.id} className="mt-4">
//                             <h3 className="text-xl">{product.product}</h3>
//                             <p>{product.description}</p>
//                         </li>
//                     ))
//                 ) : (
//                     <p>نتیجه‌ای یافت نشد.</p>
//                 )}
//             </ul>
//         </div>
//     );
// } 




import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// تعریف نوع برای محصول
interface Product {
    id: number;
    product: string;
    information: string;
    price: string;
    img: string;
    teacher: string;
    time: number;
}

export default function SearchResults() {
    const [results, setResults] = useState<Product[]>([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query') || '';

    useEffect(() => {
        const fetchResults = async () => {
            if (query) {
                try {
                    const response = await fetch(`http://localhost:3000/product?search=${encodeURIComponent(query)}`);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data: Product[] = await response.json(); // تایپ داده‌های دریافتی
                    setResults(data);
                } catch (error) {
                    console.error('Error fetching search results:', error);
                }
            }
        };

        fetchResults();
    }, [query]);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">نتایج جستجو برای: {query}</h2>
            <ul className="mt-4">
                {results.length > 0 ? (
                    results.map((product) => (
                        <li key={product.id} className="mt-4">
                            <h3 className="text-xl">{product.product}</h3>
                            <p>{product.information}</p>
                        </li>
                    ))
                ) : (
                    <p>نتیجه‌ای یافت نشد.</p>
                )}
            </ul>
        </div>
    );
}