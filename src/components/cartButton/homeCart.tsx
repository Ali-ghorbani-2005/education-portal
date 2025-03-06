


import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { useEffect, useState } from "react";

export default function HomeCart() {
  const { getCartCount } = useCart();
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    setCartCount(getCartCount());
  }, [getCartCount]);

  return (
    <div className="ml-5 mt-5 relative">
      <Link to="/cart">
        <button className="w-11 h-11 rounded-full relative">
          <img src="/imgs/icons/shopping2.png" alt="" className="w-7 ml-2" />
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
