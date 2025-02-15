import  { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { fetchData } from '../../services/fetchData';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Product {
  id: number;
  product: string;
  img: string;
  teacher: string;
  time: string;
  price: number;
  information: string; 
  Student:Number;
}

export default function SliderProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData();
        const filteredProducts = result.filter(product => product.id >= 13 && product.id <= 18);
        setProducts(filteredProducts);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return <div>در حال بارگذاری...</div>;
  }

  if (error) {
    return <div> خطا: {error}</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1, 
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-right mb-4">دوره های محبوب</h2>
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className="mt-6 mx-4">
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
      </Slider>
    </div>
  );
}
