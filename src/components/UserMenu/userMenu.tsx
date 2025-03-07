import { useState, useEffect } from "react";
import { useUser } from "../userProfile/context";
import AuthenticationButton from "../homeComponents/authenticationButton";

export default function UserMenu() {
  const { user, setUser } = useUser();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleLogout = (): void => {
    sessionStorage.removeItem("user");
    setUser(null);
    setIsOpen(false);
  };

  // بستن منو هنگام کلیک بیرون از آن
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (!(event.target as HTMLElement).closest(".user-menu")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  // بستن منو با کلیک روی دکمه بستن
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div className="relative ml-4 user-menu">
      {user ? (
        <div className="relative mt-6 ml-20">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img
              src="imgs/icons/user.png"
              className="w-8 cursor-pointer"
              alt="User Icon"
            />
          </button>

          {isOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-lg p-3 z-10 -ml-10">
              <div className="flex justify-between items-center"> 
                <p className="text-sm text-gray-700">نام کاربری: {user.name}</p>
                <button
                  className="text-gray-500 hover:text-red-500"
                  onClick={handleClose}
                >
                  ❌
                </button>
              </div>
              <button
                className="mt-2 w-full bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                onClick={handleLogout}
              >
                خروج
              </button>
            </div>
          )}
        </div>
      ) : (
        <AuthenticationButton />
      )}
    </div>
  );
}
