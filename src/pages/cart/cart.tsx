import { useCart } from "../../components/context/cartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  // محاسبه مجموع قیمت محصولات (تبدیل رشته‌ها به عدد)
  const totalPrice = cart.reduce((total, item) => total + (item.price), 0);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-right dark:text-white">سبد خرید شما</h1>

      {cart.length === 0 ? (
        <div>
          <div className="flex justify-center items-center -mt-20">
            <img src="imgs/bg/cartBg.png" alt="" className="w-[520px]" />
          </div>
          <p className="text-center text-2xl text-gray-500 -mt-5">
            سبد خرید شما خالی است
          </p>
        </div>
      ) : (
        <div className="mt-5 flex gap-3 items-start justify-end">


          {/* کادر جداگانه برای نمایش قیمت کل */}
          <div className="bg-white dark:bg-slate-800 p-5 mr-20 rounded-lg shadow-lg w-[400px] h-fit"> 
            <div className="bg-green-500 rounded-t-lg">  
              <div className="flex justify-end mr-5">
              <img src="imgs/icons/card.png"  alt="" /> 
              </div>
            </div>
            <h2 className="text-xl font-semibold text-right mb-4">مجموع قیمت</h2> 
            <div className="flex"> 
              
            <p className="text-2xl ml-3 font-bold text-gray-800 text-right dark:text-white">
              {totalPrice.toLocaleString()} 
            </p>  
            <p className="ml-40 text-xl dark:text-white">مبلغ کل</p>
            </div> 

            <div className="flex mt-5 ml-5">
            <p className="text-2xl font-bold text-gray-800 text-right dark:text-white">
              0
            </p>  
            <p className="ml-40 text-xl dark:text-white">موجودی کیف پول</p>
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white dark:text-white py-2 rounded-lg hover:bg-blue-700">
              پرداخت
            </button>
          </div>

          {/* کادر محصولات */}
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-lg w-[800px]">
            <div className="bg-green-500 h-14 flex items-center px-4 rounded-t-lg">
              <p className="text-3xl text-white ">سبد خرید</p>
            </div>

            <div className="p-4">
              {cart.map((item: any) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b py-4"
                >
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    حذف
                  </button>
                  <div className="flex gap-10 items-center md:flex sm:grid sm:grid-cols-1">
                    <img
                      src={item.img}
                      alt={item.product}
                      className="block md:hidden w-72 object-cover rounded-md"
                    />
                    <div>
                      <p className="text-xl font-semibold dark:text-white">{item.product}</p>
                      <p className="text-lg text-gray-700 dark:text-white">
                        {Number(item.price).toLocaleString()} تومان
                      </p>
                    </div>
                    <img
                      src={item.img}
                      alt={item.product}
                      className="hidden md:block w-60 object-cover rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
