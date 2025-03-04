import { useCart } from "../../components/context/cartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-right">سبد خرید شما</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500 mt-5">سبد خرید شما خالی است</p>
      ) : (
        <div className="mt-5">
          {cart.map((item: any) => (
            <div>
              <div key={item.id} className="flex justify-between items-center border-b py-4">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 mt-2 hover:underline"
                >
                  حذف
                </button>
                <p className="text-lg">تعداد: {item.quantity}</p>
                {/* <div className="bg-white   ">  
                <div className="bg-green-500 h-14 ">
                  <p className="text-right text-3xl text-white mr-3 ">سبد خرید</p>
                </div>
                <div className="flex gap-20 mt-5"> 
                  <div className="mt-10 gap-5 flex">
              <p className="text-lg ">{item.price } تومان</p>  
              <p className="text-xl  ">{item.product}</p>  
              </div>
               <div className="">
              <img src={item.img} alt={item.product} className="w-52   object-cover rounded-md" />  
              </div> 
              </div>
              </div> */}

                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  {/* هدر سبد خرید */}
                  <div className="bg-green-500 h-14 flex items-center px-4">
                    <p className="text-white text-2xl font-semibold ml-auto">سبد خرید</p>
                  </div>

                  {/* محتوای سبد خرید */}
                  <div className="flex flex-col md:flex-row gap-6 p-5">
                    {/* تصویر محصول */}
                    <div className="w-40 md:w-52">
                      <img
                        src={item.img}
                        alt={item.product}
                        className="w-full h-32 md:h-40 object-cover rounded-md shadow-md transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    {/* اطلاعات محصول */}
                    <div className="flex flex-col justify-center gap-2">
                      <p className="text-lg font-medium text-gray-700">{item.product}</p>
                      <p className="text-lg text-gray-600">{item.price} تومان</p>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


