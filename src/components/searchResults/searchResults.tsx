import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// تعریف نوع برای محصول
interface Product {
    id: number;
    product: string;
    information: string;
    price: string;
    img: string;
    teacher: string;
    time: number;
    Student: number;
}

export default function SearchResults() {
    const [results, setResults] = useState<Product[]>([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query') || '';

    useEffect(() => {
        const fetchResults = async () => {
            if (query) {
                try {
                    const response = await fetch(`http://localhost:3000/product?product_like=${encodeURIComponent(query)}`);
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
            <h2 className="text-3xl font-semibold text-right text-gray-700 mr-10 dark:text-white "> جستجو : {query}</h2>
            {results.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                    {results.map((product) => (
                        <div key={product.id} className="bg-white dark:bg-slate-800 shadow-md w-72 md:w-72 sm:w-96 rounded-lg overflow-hidden mt-10 transition-transform transform hover:scale-105">
                            <div className="flex justify-center items-center p-2">
                                {product.img && <img src={product.img} alt={product.product} className="w-80 md:w-80 sm:w-96 h-32 object-cover rounded-lg" />}
                            </div>

                            <div className="text-right mt-2 px-3">
                                <h2 className="text-sm font-semibold text-gray-800 dark:text-white">{product.product}</h2>
                            </div>

                            <div className="flex items-center justify-end mt-2 px-3">
                                <p className="text-gray-600 font-katibeh text-sm dark:text-white">{product.teacher}</p>
                                <img src="imgs/icons/techer.png" className="w-6 h-6 ml-1" alt="Teacher Icon" />
                            </div>

                            <div className="border-b border-gray-300 mt-3"></div>

                            <div className="flex gap-1 mt-3 px-3">
                                <p className="text-lg font-katibeh text-gray-500 dark:text-white">قیمت</p>
                                <p className="text-xl font-lato text-green-600">{product.price}</p>
                                <div className="flex ml-16 gap-1">
                                    <p className="mt-1 text-gray-500 dark:text-white">{product.Student}</p>
                                    <img src="/imgs/icons/users-3.png" alt="" />
                                </div>
                            </div>

                            <div className="flex justify-center mt-4 mb-2">
                                <Link to={`/information/${product.id}`}>
                                    <button className="font-bold w-64 bg-blue-500 dark:bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors">
                                        مشاهده
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div> 
                    <div className='flex justify-center items-center mt-7'>
                        <img src="imgs/bg/notFound.png" alt="" className='w-96' />
                    </div>  
                    <div className='flex gap-1 justify-center'> 
                        <p className='dark:text-white text-2xl md:text-2xl  sm:text-lg font-bold '>):</p>
                    <p className='dark:text-white text-2xl md:text-2xl  sm:text-lg font-bold ' >متاسفانه دوره ای مطابق با جستجوی شما پیدا نشد </p> 
                    </div>
                </div>
            )}
        </div>

    );
}
