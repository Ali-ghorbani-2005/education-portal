import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../services/fetchData';
import CourseProgress from '../../components/productComponent/courseProgress';
import { useCart } from '../../components/context/cartContext'; 
import { motion } from "framer-motion";

export interface ProductData {
    id: string;
    product: string;
    img: string;
    teacher: string;
    time: string;
    price: number;
    information: string; 
    // Description: string;
    // احتمالاً Description توی API نیست
}

export default function Information() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { addToCart } = useCart();

    useEffect(() => {
        window.scrollTo(0, 0); // اضافه کن: صفحه رو می‌بره بالا
        const fetchProduct = async () => {
            try {
                const data: ProductData[] = await fetchData();
                if (id) {
                    const foundProduct = data.find(item => item.id === id);
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
        <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="product-detail rounded-lg p-6"
>
  {/* کل محتوای محصول داخل این قرار می‌گیره */}

        <div className="">
            {product && (
                <div className="product-detail   rounded-lg p-6">
                    <h2 className="text-4xl font-lato text-right dark:text-white">{product.product}</h2>
                    <div className=''>
                        <div className='lg:flex md:grid sm:grid'>
                            <img src={product.img} alt={product.product} className="md:w-[650px] lg:w-[650px] lg:h-80 md:h-80  sm:w-[400px] sm:h-60  h-80 object-cover rounded-lg mt-5  md:ml-7 sm:-ml-2" />
                            <div className=' md:w-[450px]  lg:w-[450px] sm:w-[400px]  md:ml-52 lg:ml-52  sm:-ml-2 mt-4 '>
                                <p className="mt-4  text-right  text-xl text-gray-600 font-lato dark:text-white">{product.information}</p>
                            </div>
                        </div>

                        <div className=' md:flex lg:flex  gap-3 justify-center items-center  md:justify-center lg:ml-[500px] md:mt-5 lg:-mt-20 '>
                            <div className='sm:flex '>
                                <p className='font-katibeh text-2xl mt-2 dark:text-white'>تومان</p>   <p className="dark:text-white text-3xl font-lato mt-4"> {product.price} </p>
                            </div>
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
                                className="bg-green-500 sm:mt-2 text-white w-64 md:w-64 sm:w-96 h-12 rounded-xl  md:ml-10  shadow-lg transition-transform transform hover:scale-105 hover:bg-green-600"
                            >
                                افزودن به سبد خرید
                            </button>
                        </div>
                    </div>
                    <div className='flex lg:flex md:grid gap-80'>

                        <div className='mt-10'>
                            <CourseProgress />
                        </div>

                        <div className='flex justify-center mt-20 lg:mt-20  md:-ml-14 md:-mt-52 lg:-ml-40 sm:-ml-[350px] '>
                            <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2  gap-5 p-4  md:w-[800px] lg:w-[800px]  sm:w-[450px] '>

                                <div className='bg-white dark:bg-slate-800 shadow-lg w-60 md:w-52 lg:w-60 sm:w-48 h-20 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato dark:text-white'>نوع مشاهده</p>
                                        <p className="text-sm text-gray-500 dark:text-white">ویدیو</p>
                                    </div>
                                    <img src="/imgs/icons/camera.png" className='w-12 h-12' alt="View Type Icon" />
                                </div>

                                <div className='bg-white dark:bg-slate-800 shadow-lg w-60 h-20 md:w-52 lg:w-60 sm:w-48 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato dark:text-white'>مدت زمان دوره</p>
                                        <p className="text-sm text-gray-500 dark:text-white">{product.time}</p>
                                    </div>
                                    <img src="/imgs/icons/clock-2.png" className='w-12 h-12' alt="Time Icon" />
                                </div>

                                <div className='bg-white dark:bg-slate-800 shadow-lg w-60 h-20 md:w-52 lg:w-60 sm:w-48 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato dark:text-white'>بروزرسانی</p>
                                        <p className="text-sm text-gray-500 dark:text-white">1403/10/30</p>
                                    </div>
                                    <img src="/imgs/icons/calendar.png" className='w-12 h-12' alt="Update Icon" />
                                </div>

                                <div className='bg-white dark:bg-slate-800 shadow-lg w-60 h-20 md:w-52 lg:w-60 sm:w-48 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato dark:text-white'>مدرس</p>
                                        <p className="text-sm text-gray-500 dark:text-white">{product.teacher}</p>
                                    </div>
                                    <img src="/imgs/icons/school.png" className='w-12 h-12' alt="Teacher Icon" />
                                </div>

                                <div className='bg-white dark:bg-slate-800 shadow-lg w-60 h-20 md:w-52 lg:w-60 sm:w-48 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato dark:text-white'>وضعیت دوره</p>
                                        <p className="text-sm text-gray-500 dark:text-white">تکمیل</p>
                                    </div>
                                    <img src="/imgs/icons/status.png" className='w-12 h-12' alt="Status Icon" />
                                </div>

                                <div className='bg-white dark:bg-slate-800 shadow-lg w-60 h-20 md:w-52 lg:w-60 sm:w-48 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato dark:text-white'>پیش نیاز</p>
                                        <p className="text-sm text-gray-500 dark:text-white">HTML</p>
                                    </div>
                                    <img src="/imgs/icons/hourglass.png" className='w-12 h-12' alt="Prerequisite Icon" />
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="flex justify-center mt-20 px-4">
                        <div className="bg-white dark:bg-slate-800 w-full max-w-[760px] sm:max-w-[600px] rounded-lg shadow-lg p-6">

                            {/* عنوان بخش */}
                            <div className="flex items-center justify-end gap-3">
                                <p className="text-3xl font-bold dark:text-white">توضیحات</p>
                                <img src="/imgs/icons/playlist.png" className="w-12 h-12" alt="Playlist Icon" />
                            </div>

                            {/* تصویر محصول */}
                            <div className="mt-5 flex justify-center">
                                <img src={product.img} alt={product.product} className="w-full max-w-[640px] sm:max-w-[400px] rounded-lg shadow-md" />
                            </div>

                            {/* توضیحات محصول */}
                            <div className="mt-10">
                                {/* <p className="text-xl text-gray-600 dark:text-white font-serif leading-relaxed text-right">
                                    {product.Description}
                                </p> */}
                            </div>

                        </div>
                    </div>

                    <div>
                    </div>
                </div>
            )}
        </div> 

        </motion.div>
    );
}


