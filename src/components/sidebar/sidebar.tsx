import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* دکمه باز کردن سایدبار */}
      <button
        className="fixed top-4 right-4 z-50 bg-blue-500 text-white p-2 rounded"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* سایدبار */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white p-4 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* دکمه بستن */}
        <button
          className="absolute top-4 left-4 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>

        {/* لیست منو */}
        <ul className="mt-10 space-y-4">
          <li className="p-2 hover:bg-gray-700 rounded">صفحه اصلی</li>
          <li className="p-2 hover:bg-gray-700 rounded">درباره ما</li>
          <li className="p-2 hover:bg-gray-700 rounded">تماس با ما</li>
        </ul>
      </div>

      {/* پس‌زمینه محو برای بستن سایدبار */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}
