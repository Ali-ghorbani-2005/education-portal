import { useCart } from "../../components/context/cartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-right">سبد خرید شما</h1>
      {cart.length === 0 ? ( 
        <div> 
          <div className="flex justify-center items-center -mt-20">
            <img src="imgs/bg/cartBg.png" alt="" className="w-[520px]" />
          </div>
        <p className="text-center text-2xl text-gray-500 -mt-5">سبد خرید شما خالی است</p> 
        </div>
      ) : (
        <div className="mt-5"> 
        <div className="flex justify-end">
           <div className="bg-white p-5 rounded-lg shadow-lg w-[700px]">
           
            <div className="bg-green-500 h-14 flex items-center px-4 rounded-t-lg">
              <p className="text-3xl text-white dark:text-blue-800">سبد خرید</p>
            </div>

           
            <div className="p-4">
              {cart.map((item: any) => (
                <div key={item.id} className="flex justify-between items-center border-b py-4">
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    حذف
                  </button>
                  <div className="flex gap-10 items-center md:flex sm:grid sm:grid-cols-1 ">
                  <img src={item.img} alt={item.product} className="block md:hidden  w-72  object-cover rounded-md" />
                    <div>
                      <p className="text-xl font-semibold">{item.product}</p>
                      <p className="text-lg text-gray-700">{item.price} تومان</p>
                    </div> 
                    
                    <img src={item.img} alt={item.product} className=" hidden md:block  w-60 object-cover rounded-md" />

                  </div>

                </div>
              ))}
            </div>
          </div>  
          </div>

          

        </div>
      )}
    </div>
  );
}


