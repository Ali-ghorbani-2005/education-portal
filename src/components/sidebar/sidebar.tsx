import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* دکمه باز کردن سایدبار */}  
      <div className="ml-[380px] mt-2">
      <button
        className=" top-4 right-4 z-50 bg-blue-500 text-white p-2 rounded"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={24} />
      </button> 
      </div>

      {/* پس‌زمینه محو */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* سایدبار */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-slate-800 dark:text-white p-4 shadow-lg transform z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* دکمه بستن */}
        <button
          className="absolute top-4 left-4 dark:text-whi "
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>

        {/* لیست منو */}
        <ul className="mt-10 space-y-4"> 
          <Link to='/'>
          <li className="p-2 hover:bg-gray-700 rounded">صفحه اصلی</li> 
          </Link> 

          <Link to='/about-us'>
          <li className="p-2 hover:bg-gray-700 rounded">درباره ما</li> 
          </Link> 
          
          <li className="p-2 hover:bg-gray-700 rounded">تماس با ما</li>
        </ul>
      </div>
    </>
  );
}

