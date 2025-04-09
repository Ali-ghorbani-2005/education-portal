// import { useEffect, useState } from "react";
// import { fetchData } from "../../services/fetchData";
// import Loader from "../loader/loader";
// import ProductCard from "./productCard";

// interface Product {
//   id: number;
//   product: string;
//   img: string;
//   teacher: string;
//   time: string;
//   price: number;
//   information: string;
// }

// export default function FetchProduct() {
//   const [data, setData] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const result: Product[] = await fetchData();
//         // فیلتر کردن محصولات بر اساس آیدی
//         const filteredResult = result.filter((product) => product.id >= 1 && product.id <= 13);
//         setData(filteredResult);
//       } catch (err) {
//         if (err instanceof Error) {
//           setError(err.message);
//         } else {
//           setError("خطای نامشخصی رخ داده است");
//         }
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadData();
//   }, []);

//   if (loading) {
//     return <Loader />;
//   }

//   if (error) {
//     return <div>خطا: {error}</div>;
//   }

//   return (
//     <>
//       <div className="mt-10">
//         <p className="text-right mr-10 text-3xl dark:text-white text-gray-700 font-katibeh">
//           راهی به سوی موفقیت شما
//         </p>
//       </div>
//       <div className="grid grid-cols-4 md:grid-cols-4 sm:grid-cols-1 gap-4 p-4">
//         {data.map((product) => (
//           <div key={product.id}>
//             <ProductCard {...product} Student={0} />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }







// FetchProduct.tsx
import { useEffect, useState } from "react";
import { fetchData } from "../../services/fetchData";
import Loader from "../loader/loader";
import ProductCard from "./productCard";

interface Product {
  id: number;
  product: string;
  img: string;
  teacher: string;
  time: string;
  price: number;
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

        // اطمینان از تبدیل id به عدد
        const normalizedData: Product[] = result.map((item: any) => ({
          ...item,
          id: Number(item.id), // 👈 تبدیل id به number
          price: Number(item.price), // اگر price هم رشته بود
        }));

        const filteredResult = normalizedData.filter(
          (product) => product.id >= 1 && product.id <= 13
        );

        setData(filteredResult);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("خطای نامشخصی رخ داده است");
        }
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>خطا: {error}</div>;

  return (
    <>
      <div className="mt-10">
        <p className="text-right mr-10 text-3xl dark:text-white text-gray-700 font-katibeh">
          راهی به سوی موفقیت شما
        </p>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-4 sm:grid-cols-1 gap-4 p-4">
        {data.map((product) => (
          <div key={product.id}>
            <ProductCard {...product} Student={0} />
          </div>
        ))}
      </div>
    </>
  );
}

