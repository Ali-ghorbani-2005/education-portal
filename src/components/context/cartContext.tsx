import { createContext, useContext, useState, ReactNode, useEffect } from "react";

// interface CartItem {
//   id: string;
//   name: string; 
//   product: string; 
//   price: number;
//   quantity: number;
// } 


interface CartItem {
  id: string;
  product: string;  // اینجا فیلد product را اضافه می‌کنیم
  img: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  getCartCount: () => number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void; // حذف محصول از سبد خرید
}

const CartContext = createContext<CartContextType | null>(null);

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // ذخیره تغییرات در localStorage
      return updatedCart;
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, getCartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a ShoppingCartProvider");
  }
  return context;
};

