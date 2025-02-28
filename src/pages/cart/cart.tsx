import { useCart } from "../../components/context/cartContext"; 


// interface CartItem {
//     id: number; // یا string، بسته به نوع آیدی
//     product: string;
//     img: string;
//     quantity: number;
//     price: number;
//   }

export default function Cart() {
  const { cart } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-right">سبد خرید شما</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500 mt-5">سبد خرید شما خالی است</p>
      ) : (
        <div className="mt-5">
          {cart.map((item:any) => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <img src={item.img} alt={item.product} className="w-20 h-20 object-cover rounded-md" />
              <p className="text-xl">{item.product}</p>
              <p className="text-lg">تعداد: {item.quantity}</p>
              <p className="text-lg">{item.price * item.quantity} تومان</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

