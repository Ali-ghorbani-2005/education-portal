
import { useEffect, useState } from "react";
import { fetchData } from "../../services/fetchData";
import { Link } from "react-router-dom";
import FilterPanel from "../../components/filterPanel/filterPanel";
import { Product } from "../../types/t";

export default function AllProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({ Free: false, sale: false, off: false });
  console.log(filters)
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchData();
        setProducts(data);
        setFilteredProducts(data);
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
      filtered = filtered.filter((product) => product.Free === 1);
    }
    if (filters.sale) {
      filtered = filtered.filter((product) => product.Sale === 55);
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
      <div className='flex'>
        <div className="container mx-auto py-10 md:mr-28 ">
          <div className='flex justify-end '>
            <h2 className="text-2xl font-bold text-end mr-6 text-gray-700">دوره ها</h2>
            <div className='bg-yellow-400 text-yellow-400 rounded-md w-5 h-5 mt-3 '>.</div>
          </div>
          <div className="grid grid-cols-1  md:ml-5  sm:grid-cols-1 sm:gap-10 sm: md:grid-cols-3 gap-5 mt-10">
            {filteredProducts.map((product) => (
              <div key={product.id} className="mx-2">
                <div className="product-card bg-white shadow-md w-56  md:w-72  rounded-lg overflow-hidden transition-transform transform hover:scale-105">
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
                    <p className="text-sm md:text-xl font-katibeh text-gray-500">قیمت</p>
                    <p className="text-sm md:text-xl font-lato text-green-600">{product.price}</p>
                    <div className="flex ml-16 gap-1">
                      <p className="mt-1 text-gray-500">{product.Student}</p>
                      <img src="/imgs/icons/users-3.png" alt="" />
                    </div>
                  </div>

                  <div className="flex justify-center mt-4 mb-2">
                    <Link to={`/information/${product.id}`}>
                      <button className="font-bold w-52 md:w-64 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors">
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
    </>
  );
}

