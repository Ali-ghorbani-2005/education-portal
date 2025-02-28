import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function CartButton() {
  const { getCartCount } = useCart();

  return (
    <div className="mr-10 mt-5 relative">
      <Link to="/cart">
        <button className="bg-gray-300 w-11 h-11 rounded-full relative">
          <img src="/imgs/icons/shopping.png" alt="" className="w-7 ml-2" />
          {getCartCount() > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-500 text-white w-5 h-5 flex items-center justify-center text-sm rounded-full">
              {getCartCount()}
            </span>
          )}
        </button>
      </Link>
    </div>
  );
}

