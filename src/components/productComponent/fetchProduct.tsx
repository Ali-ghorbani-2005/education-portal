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
     
   

     <div>
      {data.map(data=>(
         <ProductCard  key={data.id} {...data} />
      ))}
     </div>


    </>
  )
}
