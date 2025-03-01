
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { useEffect, useState } from "react";

export default function CartButton() {
  const { getCartCount } = useCart();
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    setCartCount(getCartCount());
  }, [getCartCount]);

  return (
    <div className="mr-10 mt-5 relative">
      <Link to="/cart">
        <button className="bg-gray-300 w-11 h-11 rounded-full relative">
          <img src="/imgs/icons/shopping.png" alt="" className="w-7 ml-2" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-500 text-white w-5 h-5 flex items-center justify-center text-sm rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </Link>
    </div>
  );
}



