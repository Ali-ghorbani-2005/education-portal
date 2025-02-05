
// import  { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchData } from '../../services/fetchData';

// interface Product {
//     id: number; // یا string (بسته به نوع آیدی شما)
//     product: string;
//     img: string;
//     teacher: string;
//     time: string;
//     price: number;
//     information: string;
// }

// export default function Information() {
//     const { id } = useParams<{ id: string }>(); // مشخص کردن نوع پارامتر
//     const [product, setProduct] = useState<Product | null>(null); // نوع محصول
//     const [loading, setLoading] = useState<boolean>(true); // نوع بارگذاری
//     const [error, setError] = useState<string | null>(null); // نوع خطا

//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const data: Product[] = await fetchData(); // نوع داده‌های دریافتی
//                 const foundProduct = data.find(item => item.id === parseInt(id));
//                 if (foundProduct) {
//                     setProduct(foundProduct);
//                 } else {
//                     setError("Product not found");
//                 }
//             } catch (err) {
//                 setError((err as Error).message); // تبدیل خطا به نوع استاندارد
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProduct();
//     }, [id]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     } 

     

//     return (
//         <div className="mt-10">
//             {product && (
//                 <div className="product-detail bg-white shadow-lg rounded-lg p-6">
//                     <h2 className="text-2xl font-semibold">{product.product}</h2> 
//                     {/* {product.img && <img src={product.img} alt={product.product} className="w-full h-64 object-cover rounded-lg" />} */}
//                     <p className="text-lg mt-4">Teacher: {product.teacher}</p>
//                     <p className="text-lg mt-4">Time: {product.time}</p>
//                     <p className="text-lg font-bold mt-4">Price: {product.price} تومان</p>
//                     <p className="mt-4">{product.information}</p>
//                 </div>
//             )}
//         </div>
//     );
// }  








import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../services/fetchData';

interface Product {
    id: number; // یا string (بسته به نوع آیدی شما)
    product: string;
    img: string;
    teacher: string;
    time: string;
    price: number;
    information: string;
}

export default function Information() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data: Product[] = await fetchData();
                if (id) { // بررسی اینکه آیا id موجود است
                    const foundProduct = data.find(item => item.id === parseInt(id));
                    if (foundProduct) {
                        setProduct(foundProduct);
                    } else {
                        setError("Product not found");
                    }
                } else {
                    setError("Invalid product ID");
                }
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    } 

    return (
        <div className="mt-10">
            {product && (
                <div className="product-detail bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-semibold">{product.product}</h2>
                    <img src={product.img} alt={product.product} className="w-full h-64 object-cover rounded-lg" />
                    <p className="text-lg mt-4">Teacher: {product.teacher}</p>
                    <p className="text-lg mt-4">Time: {product.time}</p>
                    <p className="text-lg font-bold mt-4">Price: {product.price} تومان</p>
                    <p className="mt-4">{product.information}</p>
                </div>
            )}
        </div>
    );
}
