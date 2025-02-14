
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
import CourseProgress from '../../components/productComponent/courseProgress';

interface Product {
    id: number; // یا string (بسته به نوع آیدی شما)
    product: string;
    img: string;
    teacher: string;
    time: string;
    price: number;
    information: string; 
    img2:string;
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
        <div className="">
            {product && (
                <div className="product-detail   rounded-lg p-6">
                    <h2 className="text-4xl font-lato text-right">{product.product}</h2>
                    <div className=''>
                        <div className='flex'>
                            <img src={product.img} alt={product.product} className="w-[650px] h-80 object-cover rounded-lg mt-5 ml-7" />
                            <div className='w-[450px] ml-52 mt-4 '>
                                <p className="mt-4 text-right text-xl text-gray-600 font-lato">{product.information}</p>
                            </div>
                        </div>

                        <div className='flex gap-3 justify-center items-center ml-[500px] -mt-20'>
                            <p className='font-katibeh text-2xl mt-2'>تومان</p>   <p className="text-3xl font-lato mt-4"> {product.price} </p>

                            <button className='bg-green-500 text-white w-64 h-12 rounded-xl ml-10 shadow-lg transition-transform transform hover:scale-105 hover:bg-green-600'>
                                افزودن به سبد خرید
                            </button>
                        </div>
                    </div>




                    <div className='flex gap-80'>

                        <div className='mt-10'>
                            <CourseProgress />
                        </div>

                        {/* <div className='flex justify-end'>
                            <div className='flex gap-5 flex-wrap p-4 w-[600px] ml-24'>

                                
                                <div className='bg-white shadow-lg w-60 h-20 mt-10 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato ml-20 '>نوع مشاهده</p>
                                        <p className="text-sm text-gray-500 ml-20 ">ویدیو</p>
                                    </div>
                                    <img src="/imgs/icons/camera.png" className='w-12 h-12' alt="View Type Icon" />
                                </div>

                                
                                <div className='bg-white shadow-lg w-60 h-20 mt-10 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato ml-14'>مدت زمان دوره</p>
                                        <p className="text-sm text-gray-500 ml-20"> {product.time}</p>
                                    </div>
                                    <img src="/imgs/icons/clock-2.png" className='w-12 h-12' alt="Time Icon" />
                                </div>

                               
                                <div className='bg-white shadow-lg w-60 h-20 mt-2 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato ml-20'>بروزرسانی</p>
                                        <p className="text-sm text-gray-500 ml-20">1403/10/30</p>
                                    </div>
                                    <img src="/imgs/icons/calendar.png" className='w-12 h-12' alt="Update Icon" />
                                </div>

                              
                                <div className='bg-white shadow-lg w-60 h-20 mt-2 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato ml-20'>مدرس</p>
                                        <p className="text-sm text-gray-500 ml-16">{product.teacher}</p>
                                    </div>
                                    <img src="/imgs/icons/school.png" className='w-12 h-12' alt="Teacher Icon" />
                                </div> 

                                <div className='bg-white shadow-lg w-60 h-20 mt-2 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato ml-16'>وضعیت دوره</p>
                                        <p className="text-sm text-gray-500 ml-20">تکمیل</p>
                                    </div>
                                    <img src="/imgs/icons/school.png" className='w-12 h-12' alt="Teacher Icon" />
                                </div> 

                                <div className='bg-white shadow-lg w-60 h-20 mt-2 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato ml-24'>پیش نیاز</p>
                                        <p className="text-sm text-gray-500 ml-24">HTML</p>
                                    </div>
                                    <img src="/imgs/icons/school.png" className='w-12 h-12' alt="Teacher Icon" />
                                </div>
                            </div>
                        </div>  */}



                        <div className='flex justify-center mt-20 -ml-40 '>
                            <div className='grid grid-cols-3 gap-5 p-4 w-[800px] '>

                                <div className='bg-white shadow-lg w-60 h-20 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato'>نوع مشاهده</p>
                                        <p className="text-sm text-gray-500">ویدیو</p>
                                    </div>
                                    <img src="/imgs/icons/camera.png" className='w-12 h-12' alt="View Type Icon" />
                                </div>

                                <div className='bg-white shadow-lg w-60 h-20 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato'>مدت زمان دوره</p>
                                        <p className="text-sm text-gray-500">{product.time}</p>
                                    </div>
                                    <img src="/imgs/icons/clock-2.png" className='w-12 h-12' alt="Time Icon" />
                                </div>

                                <div className='bg-white shadow-lg w-60 h-20 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato'>بروزرسانی</p>
                                        <p className="text-sm text-gray-500">1403/10/30</p>
                                    </div>
                                    <img src="/imgs/icons/calendar.png" className='w-12 h-12' alt="Update Icon" />
                                </div>

                                <div className='bg-white shadow-lg w-60 h-20 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato'>مدرس</p>
                                        <p className="text-sm text-gray-500">{product.teacher}</p>
                                    </div>
                                    <img src="/imgs/icons/school.png" className='w-12 h-12' alt="Teacher Icon" />
                                </div>

                                <div className='bg-white shadow-lg w-60 h-20 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato'>وضعیت دوره</p>
                                        <p className="text-sm text-gray-500">تکمیل</p>
                                    </div>
                                    <img src="/imgs/icons/status.png" className='w-12 h-12' alt="Status Icon" />
                                </div>

                                <div className='bg-white shadow-lg w-60 h-20 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato'>پیش نیاز</p>
                                        <p className="text-sm text-gray-500">HTML</p>
                                    </div>
                                    <img src="/imgs/icons/hourglass.png" className='w-12 h-12' alt="Prerequisite Icon" />
                                </div>

                            </div>
                        </div> 


                          
                          <div>
                           
                           <div> 
                            <p>توضحات</p>
                            </div> 

                            <div>
                            {/* <img src={product.img} alt={product.product} className="" /> */} 
                            <p className='text-4xl'>{product.img2}</p>
                            </div>

                          </div>







                    </div>
                    <div>
                    </div>
                </div>
            )}
        </div>
    );
}
