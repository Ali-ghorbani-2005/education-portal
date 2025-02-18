import { useEffect, useState } from 'react';
import { fetchData } from '../../services/fetchData';
import Loader from '../loader/loader';
import ProductCard from './productCard';

interface Product {
  id: number;
  product: string;
  img: string;
  teacher: string;
  time: string;
  price: number; // number
  information: string;
}

export default function FetchProduct() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData();
        // فیلتر کردن محصولات بر اساس آیدی
        const filteredResult = result.filter(product => product.id >= 1 && product.id <= 13);
        setData(filteredResult);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div> خطا: {error}</div>;
  }

  return (
    <>
      <div className='mt-10'>
        <p className="text-right mr-10 text-3xl text-gray-700 font-katibeh">راهی به سوی موفقیت شما</p>
      </div>
      <div className='grid grid-cols-4 gap-4 p-4'>
        {data.map(product => (
          <div key={product.id}>
            <ProductCard {...product} /> {/* price به عنوان number */}
          </div>
        ))}
      </div>
    </>
  );
}







