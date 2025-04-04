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
                        <div className='flex md:flex sm:grid'>
                            <img src={product.img} alt={product.product} className="md:w-[650px] md:h-80  sm:w-[400px] sm:h-60  h-80 object-cover rounded-lg mt-5  md:ml-7 sm:-ml-2" />
                            <div className=' md:w-[450px] sm:w-[400px]  md:ml-52 sm:-ml-2 mt-4 '>
                                <p className="mt-4  text-right  text-xl text-gray-600 font-lato dark:text-white">{product.information}</p>
                            </div>
                        </div>

                        <div className=' md:flex  gap-3 justify-center items-center  md:ml-[500px] md:-mt-20 '>
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




                    <div className='flex gap-80'>

                        <div className='mt-10'>
                            <CourseProgress />
                        </div>

                        <div className='flex justify-center mt-20  md:-ml-40 sm:-ml-[350px] '>
                            <div className='grid md:grid-cols-3 sm:grid-cols-2  gap-5 p-4  md:w-[800px] sm:w-[450px] '>

                                <div className='bg-white dark:bg-slate-800 shadow-lg w-60 md:w-60 sm:w-48 h-20 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato dark:text-white'>نوع مشاهده</p>
                                        <p className="text-sm text-gray-500 dark:text-white">ویدیو</p>
                                    </div>
                                    <img src="/imgs/icons/camera.png" className='w-12 h-12' alt="View Type Icon" />
                                </div>

                                <div className='bg-white dark:bg-slate-800 shadow-lg w-60 h-20 md:w-60 sm:w-48 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato dark:text-white'>مدت زمان دوره</p>
                                        <p className="text-sm text-gray-500 dark:text-white">{product.time}</p>
                                    </div>
                                    <img src="/imgs/icons/clock-2.png" className='w-12 h-12' alt="Time Icon" />
                                </div>

                                <div className='bg-white dark:bg-slate-800 shadow-lg w-60 h-20 md:w-60 sm:w-48 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato dark:text-white'>بروزرسانی</p>
                                        <p className="text-sm text-gray-500 dark:text-white">1403/10/30</p>
                                    </div>
                                    <img src="/imgs/icons/calendar.png" className='w-12 h-12' alt="Update Icon" />
                                </div>

                                <div className='bg-white dark:bg-slate-800 shadow-lg w-60 h-20 md:w-60 sm:w-48 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato dark:text-white'>مدرس</p>
                                        <p className="text-sm text-gray-500 dark:text-white">{product.teacher}</p>
                                    </div>
                                    <img src="/imgs/icons/school.png" className='w-12 h-12' alt="Teacher Icon" />
                                </div>

                                <div className='bg-white dark:bg-slate-800 shadow-lg w-60 h-20 md:w-60 sm:w-48 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato dark:text-white'>وضعیت دوره</p>
                                        <p className="text-sm text-gray-500 dark:text-white">تکمیل</p>
                                    </div>
                                    <img src="/imgs/icons/status.png" className='w-12 h-12' alt="Status Icon" />
                                </div>

                                <div className='bg-white dark:bg-slate-800 shadow-lg w-60 h-20 md:w-60 sm:w-48 rounded-lg flex items-center justify-between p-4 transition-transform transform hover:scale-105'>
                                    <div>
                                        <p className='text-lg font-lato dark:text-white'>پیش نیاز</p>
                                        <p className="text-sm text-gray-500 dark:text-white">HTML</p>
                                    </div>
                                    <img src="/imgs/icons/hourglass.png" className='w-12 h-12' alt="Prerequisite Icon" />
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* <div className='flex justify-end mt-20 sm:ml-5 '> 
                        <div className='bg-white dark:bg-slate-800 w-[760px] md:w-[760px] sm:w-[600px]  h-[700px]'>

                            <div className='text-3xl flex justify-end'>
                                <p className='dark:text-white '>توضیحات</p>
                                <img src="/imgs/icons/playlist.png" className='w-14' alt="" />
                            </div>

                            <div className='mt-5 flex justify-center items-center sm:ml-20'>
                                <img src={product.img} alt={product.product} className=" md:w-[640px] sm:w-[400px] rounded-lg" />

                            </div>

                            <div className='mt-10'>
                                 
                                 <div className='text-right w-[700px] ml-10 '>
                                <p className='text-xl text-gray-500 font-serif dark:text-white'>{product.Description}</p> 
                                </div>
                            </div>

                        </div> 
                    </div> */}

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
                                <p className="text-xl text-gray-600 dark:text-white font-serif leading-relaxed text-right">
                                    {product.Description}
                                </p>
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


