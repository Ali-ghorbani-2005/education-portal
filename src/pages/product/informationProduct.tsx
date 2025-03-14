import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../services/fetchData';
import CourseProgress from '../../components/productComponent/courseProgress';
import { useCart } from '../../components/context/cartContext';

interface Product {
    id: number; // یا string (بسته به نوع آیدی شما)
    product: string;
    img: string;
    teacher: string;
    time: string;
    price: number;
    information: string;
    Description: string;
}

export default function Information() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null); 
    const { addToCart } = useCart();

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
                    <h2 className="text-4xl font-lato text-right dark:text-white">{product.product}</h2>
                    <div className=''>
                        <div className='flex'>
                            <img src={product.img} alt={product.product} className="w-[650px] h-80 object-cover rounded-lg mt-5 ml-7" />
                            <div className='w-[450px] ml-52 mt-4 '>
                                <p className="mt-4 text-right text-xl text-gray-600 font-lato dark:text-white">{product.information}</p>
                            </div>
                        </div>

                        <div className='flex gap-3 justify-center items-center ml-[500px] -mt-20'>
                            <p className='font-katibeh text-2xl mt-2 dark:text-white'>تومان</p>   <p className="dark:text-white text-3xl font-lato mt-4"> {product.price} </p>

                            {/* <button className='bg-green-500 text-white w-64 h-12 rounded-xl ml-10 shadow-lg transition-transform transform hover:scale-105 hover:bg-green-600'>
                                افزودن به سبد خرید
                            </button> */}
                            <button
                                onClick={() =>
                                    addToCart({
                                        id: product.id,
                                        product: product.product,
                                        img: product.img,
                                        price: product.price,
                                        quantity: 1,
                                    })
                                }
                                className="bg-green-500 text-white w-64 h-12 rounded-xl ml-10 shadow-lg transition-transform transform hover:scale-105 hover:bg-green-600"
                            >
                                افزودن به سبد خرید
                            </button>
                        </div>
                    </div>




                    <div className='flex gap-80'>

                        <div className='mt-10'>
                            <CourseProgress />
                        </div>

                        <div className='flex justify-center mt-20 -ml-40 '>
                            <div className='grid grid-cols-3 gap-5 p-4 w-[800px] '>

                                <div className='bg-white dark:bg-slate-800 shadow-lg w-60 h-20 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato dark:text-white'>نوع مشاهده</p>
                                        <p className="text-sm text-gray-500 dark:text-white">ویدیو</p>
                                    </div>
                                    <img src="/imgs/icons/camera.png" className='w-12 h-12' alt="View Type Icon" />
                                </div>

                                <div className='bg-white dark:bg-slate-800 shadow-lg w-60 h-20 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato dark:text-white'>مدت زمان دوره</p>
                                        <p className="text-sm text-gray-500 dark:text-white">{product.time}</p>
                                    </div>
                                    <img src="/imgs/icons/clock-2.png" className='w-12 h-12' alt="Time Icon" />
                                </div>

                                <div className='bg-white dark:bg-slate-800 shadow-lg w-60 h-20 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato dark:text-white'>بروزرسانی</p>
                                        <p className="text-sm text-gray-500 dark:text-white">1403/10/30</p>
                                    </div>
                                    <img src="/imgs/icons/calendar.png" className='w-12 h-12' alt="Update Icon" />
                                </div>

                                <div className='bg-white dark:bg-slate-800 shadow-lg w-60 h-20 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato dark:text-white'>مدرس</p>
                                        <p className="text-sm text-gray-500 dark:text-white">{product.teacher}</p>
                                    </div>
                                    <img src="/imgs/icons/school.png" className='w-12 h-12' alt="Teacher Icon" />
                                </div>

                                <div className='bg-white dark:bg-slate-800 shadow-lg w-60 h-20 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato dark:text-white'>وضعیت دوره</p>
                                        <p className="text-sm text-gray-500 dark:text-white">تکمیل</p>
                                    </div>
                                    <img src="/imgs/icons/status.png" className='w-12 h-12' alt="Status Icon" />
                                </div>

                                <div className='bg-white dark:bg-slate-800 shadow-lg w-60 h-20 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato dark:text-white'>پیش نیاز</p>
                                        <p className="text-sm text-gray-500 dark:text-white">HTML</p>
                                    </div>
                                    <img src="/imgs/icons/hourglass.png" className='w-12 h-12' alt="Prerequisite Icon" />
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='flex justify-end mt-20 '> 
                    

                    <div>
                        
                    </div>



                        <div className='bg-white dark:bg-slate-800 w-[760px] h-[700px]'>

                            <div className='text-3xl flex justify-end'>
                                <p className='dark:text-white '>توضیحات</p>
                                <img src="/imgs/icons/playlist.png" className='w-14' alt="" />
                            </div>

                            <div className='mt-5 flex justify-center items-center'>
                                <img src={product.img} alt={product.product} className="w-[640px] rounded-lg" />

                            </div>

                            <div className='mt-10'>
                                 
                                 <div className='text-right w-[700px] ml-10 '>
                                <p className='text-xl text-gray-500 font-serif dark:text-white'>{product.Description}</p> 
                                </div>
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


