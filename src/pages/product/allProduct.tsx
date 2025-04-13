
import { useEffect, useState } from "react";
import { fetchData } from "../../services/fetchData";
import { Link } from "react-router-dom";
import FilterPanel from "../../components/filterPanel/filterPanel";
import { Product } from "../../types/t";
import { motion } from "framer-motion";

export default function AllProduct() {

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({ free: false, sale: false, off: false });

  console.log(filters);

  useEffect(() => {
    window.scrollTo(0, 0); // وقتی وارد صفحه میشه، اسکرول بره بالا
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchData();

        // تطبیق دستی داده‌ها
        const fixedData = data.map((item: any) => ({
          ...item,
          student: item.Student ?? item.student ?? 0,
          free: item.Free ?? 0,
          sale: item.Sale ?? 0,
          off: item.off ?? 0,
        }));

        setProducts(fixedData);
        setFilteredProducts(fixedData);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // تابع اعمال فیلترها
  const applyFilters = (filters: { free: boolean; sale: boolean; off: boolean }) => {
    let filtered = products;

    if (filters.free) {
      filtered = filtered.filter((product) => product.free === 1);
    }
    if (filters.sale) {
      filtered = filtered.filter((product) => product.sale === 55);
    }
    if (filters.off) {
      filtered = filtered.filter((product) => product.off === 123);
    }

    setFilteredProducts(filtered);
  };

  // بروزرسانی فیلترها
  const handleFilterChange = (newFilters: { free: boolean; sale: boolean; off: boolean }) => {
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  if (loading) {
    return <div>در حال بارگذاری...</div>;
  }

  if (error) {
    return <div>خطا در بارگذاری داده‌ها: {error}</div>;
  }


  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="product-detail gap-5 "
      >
        <div className='flex'>
          <div className="container mx-auto py-10 md:mr-28 sm:ml-4 ">
            <div className='flex justify-end '>
              <h2 className="text-3xl font-bold text-end mr-6 text-gray-700 dark:text-white">دوره ها</h2>
              <div className='bg-yellow-400 text-yellow-400 rounded-md w-5 h-5 mt-3 '>.</div>
            </div>
            <div className="grid grid-cols-1  md:ml-5  sm:grid-cols-1 sm:gap-10 sm: md:grid-cols-3 gap-5 mt-10">
              {filteredProducts.map((product) => (
                <div key={product.id} className="mx-2">
                  <div className="product-card bg-white dark:bg-slate-800 shadow-md w-56  md:w-72 sm:w-96  rounded-lg overflow-hidden transition-transform transform hover:scale-105">
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
                      <p className="text-sm md:text-xl font-katibeh text-gray-500 dark:text-white">قیمت</p>
                      <p className="text-sm md:text-xl font-lato text-green-600 dark:text-green-500">{product.price}</p>
                      <div className="flex ml-16 gap-1">
                        <p className="mt-1 text-gray-500">{product.Student}</p>
                        <img src="/imgs/icons/users-3.png" alt="" />
                      </div>
                    </div>

                    <div className="flex justify-center mt-4 mb-2">
                      <Link to={`/information/${product.id}`}>
                        <button className="font-bold w-64 bg-blue-500 dark:bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors">
                          مشاهده
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='mt-28 mr-6'>
            <FilterPanel onFilterChange={handleFilterChange} />
          </div>

        </div>
      </motion.div>
    </>
  );
}

