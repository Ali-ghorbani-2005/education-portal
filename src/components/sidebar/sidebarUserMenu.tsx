import { useState, useEffect } from "react";
import { useUser } from "../userProfile/context";
import SiderbarAuthentication from "./siderbarAuthentication";


export default function SidebarUserMenu() {
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

  return (
    <div className="relative ml-4 user-menu">
      {user ? (
        <div className=" bg-gray-200 dark:bg-gray-800 w-12 h-12  rounded-full relative mt-7 ml-20  ">
          <button onClick={() => setIsOpen(!isOpen)} className="flex justify-center items-center">
            <img
              src="imgs/icons/user.png"
              className="w-8 cursor-pointer ml-2 mt-1"
              alt="User Icon"
            />
          </button>

          {isOpen && (
            <div
              className=" left-0 mt-5 w-72 bg-white dark:bg-slate-800 shadow-lg rounded-lg p-4 z-10 -ml-56
                         animate-fade-slide"
            >
              {/* بخش بالایی: نام و تصویر کاربر */}
              <div className="flex items-center justify-between">
                <div className="text-right">
                  <p className="text-gray-800 text-lg font-semibold dark:text-white">{user.name}</p>
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 w-12 h-12 flex items-center justify-center rounded-full">
                  <img src="imgs/user/user.png" className="w-10 h-10 rounded-full" alt="User" />
                </div>
              </div>

              {/* نمایش موجودی کاربر */}
              <div className="mt-3 text-right">
                <p className="text-green-500 text-sm font-medium">موجودی: 0</p>
              </div>

              {/* خط جداکننده */}
              <div className="border-b border-gray-300 dark:border-gray-600 my-4"></div>

              {/* لینک‌های داشبورد */}
              <div className="space-y-3">
                <div className="flex justify-end items-center gap-3 cursor-pointer hover:text-blue-500 transition">
                  <p>پیشخوان</p>
                  <img src="imgs/user/home-1.png" className="w-6" alt="Dashboard" />
                </div>
                <div className="flex justify-end items-center gap-3 cursor-pointer hover:text-blue-500 transition">
                  <p>دوره‌های من</p>
                  <img src="imgs/user/folder.png" className="w-6" alt="Courses" />
                </div>
                <div className="flex justify-end items-center gap-3 cursor-pointer hover:text-blue-500 transition">
                  <p>جزئیات حساب</p>
                  <img src="imgs/user/user-2.png" className="w-6" alt="Account" />
                </div>
              </div>

              {/* خط جداکننده */}
              <div className="border-b border-gray-300 dark:border-gray-600 my-4"></div>

              {/* دکمه خروج */}
              <button
                className="w-full flex justify-center items-center gap-2 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition"
                onClick={handleLogout}
              >
                <p>خروج</p>
                <img src="imgs/user/power.png" className="w-5" alt="Logout" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <SiderbarAuthentication />
      )}
    </div>
  );
}
