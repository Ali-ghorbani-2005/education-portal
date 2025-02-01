import  { useEffect, useState } from 'react';
import { fetchData } from '../../services/fetchData';
import Loader from '../loader/loader';
import ProductCard from './productCard';


export default function FetchProduct() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <div> خطا{error}</div>
  }

  return (
    <>
     
   
     <div className='mt-10'> <p className="text-right mr-10 text-3xl text-gray-700 font-katibeh">راهی به سوی موفقیت شما</p></div>
     <div className='grid grid-cols-4 gap-4 p-4' > 
      {data.map(data=>( 
        <div  >
         <ProductCard  key={data.id} {...data} /> 
         </div>
      ))}
     </div>


    </>
  )
}
