import { useEffect, useState } from 'react';
import { fetchData } from '../../services/fetchData'; // آدرس فایل fetchData را به درستی وارد کنید
import { Link } from 'react-router-dom';

// تعریف نوع محصول
interface Product {
  id: number;
  product: string;
  teacher: string;
  img: string;
  price: number;
  Student: number



}

// تعریف نوع وضعیت کامپوننت
interface AllProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export default function AllProduct() {
  const [state, setState] = useState<AllProductState>({
    products: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchData();
        setState({ products: data, loading: false, error: null });
      } catch (err:any) {
        setState({ products: [], loading: false, error: err.message });
      }
    };

    loadData();
  }, []);

  const { products, loading, error } = state;

  if (loading) {
    return <div>در حال بارگذاری...</div>;
  }

  if (error) {
    return <div>خطا در بارگذاری داده‌ها: {error}</div>;
  }

  return (
    // <div className="container mx-auto py-10">
    //     <h2 className="text-2xl font-bold text-center mb-6">محصولات</h2>
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    //         {products.map((product) => (
    //           <div key={product.id} className="mt-6 mx-4">
    //           <div className="product-card bg-white shadow-md w-72 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
    //             <div className="flex justify-center items-center p-2">
    //               {product.img && <img src={product.img} alt={product.product} className="w-80 h-32 object-cover rounded-lg" />}
    //             </div>

    //             <div className="text-right mt-2 px-3">
    //               <h2 className="text-sm font-semibold text-gray-800">{product.product}</h2>
    //             </div>

    //             <div className="flex items-center justify-end mt-2 px-3">
    //               <p className="text-gray-600 font-katibeh text-sm">{product.teacher}</p>
    //               <img src="imgs/icons/techer.png" className="w-6 h-6 ml-1" alt="Teacher Icon" />
    //             </div>

    //             <div className="border-b border-gray-300 mt-3"></div>

    //             <div className="flex gap-1 mt-3 px-3">
    //               <p className="text-lg font-katibeh text-gray-500">قیمت</p>
    //               <p className="text-xl font-lato text-green-600">{product.price}</p>  
    //               <div className="flex ml-16 gap-1">
    //                           <p className="mt-1 text-gray-500">{product.Student}</p>
    //                           <img src="/imgs/icons/users-3.png" alt="" />

    //                       </div>
    //             </div>

    //             <div className="flex justify-center mt-4 mb-2">
    //               <Link to={`/information/${product.id}`}>
    //                 <button className="font-bold w-64 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors">
    //                   مشاهده
    //                 </button>
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //         ))}
    //     </div>
    // </div> 


    <div className="container mx-auto py-10 "> 
    <div className='flex justify-end'>
      <h2 className="text-2xl font-bold text-end mr-6 text-gray-700">دوره ها</h2>  
      <div className='bg-yellow-400 text-yellow-400 rounded-md w-5 h-5 mt-3 '>.</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-10"> {/* کاهش gap از 6 به 4 */}
        {products.map((product) => (
          <div key={product.id} className="mx-2"> {/* حذف mt-6 */}
            <div className="product-card bg-white shadow-md w-72 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <div className="flex justify-center items-center p-2">
                {product.img && <img src={product.img} alt={product.product} className="w-80 h-32 object-cover rounded-lg" />}
              </div>

              <div className="text-right mt-2 px-3">
                <h2 className="text-sm font-semibold text-gray-800">{product.product}</h2>
              </div>

              <div className="flex items-center justify-end mt-2 px-3">
                <p className="text-gray-600 font-katibeh text-sm">{product.teacher}</p>
                <img src="imgs/icons/techer.png" className="w-6 h-6 ml-1" alt="Teacher Icon" />
              </div>

              <div className="border-b border-gray-300 mt-3"></div>

              <div className="flex gap-1 mt-3 px-3">
                <p className="text-lg font-katibeh text-gray-500">قیمت</p>
                <p className="text-xl font-lato text-green-600">{product.price}</p>
                <div className="flex ml-16 gap-1">
                  <p className="mt-1 text-gray-500">{product.Student}</p>
                  <img src="/imgs/icons/users-3.png" alt="" />
                </div>
              </div>

              <div className="flex justify-center mt-4 mb-2">
                <Link to={`/information/${product.id}`}>
                  <button className="font-bold w-64 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors">
                    مشاهده
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
