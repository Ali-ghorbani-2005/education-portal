
import { useState } from "react";

export default function FilterPanel ({ onFilterChange }) {
  const [isFree, setIsFree] = useState(false);
  const [isSale, setIsSale] = useState(false);
  const [isOff, setIsOff] = useState(false);

  // تابعی برای مدیریت تغییر فیلترها
  const handleFilterChange = (filterType) => {
    let newFilters = { free: isFree, sale: isSale, off: isOff };

    if (filterType === "free") {
      newFilters.free = !isFree;
      setIsFree(!isFree);
    } else if (filterType === "sale") {
      newFilters.sale = !isSale;
      setIsSale(!isSale);
    } else if (filterType === "off") {
      newFilters.off = !isOff;
      setIsOff(!isOff);
    }

    onFilterChange(newFilters);
  };

  return (
    <div>
      {/* دکمه اول: فقط دوره‌های رایگان */}
      <div className="bg-white w-80 h-20 rounded-lg flex gap-20">
        <div className="mt-6 ml-5">
          <button
            onClick={() => handleFilterChange("free")}
            className={`w-14 h-7 flex items-center p-1 rounded-full transition-all duration-300 ${
              isFree ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                isFree ? "translate-x-8" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>

        <div>
          <p className="text-right font-semibold py-6 text-lg">فقط دوره های رایگان</p>
        </div>
      </div>

      {/* دکمه دوم: در حال پیش فروش */}
      <div className="bg-white w-80 h-20 rounded-lg flex gap-20 mt-5">
        <div className="mt-6 ml-5">
          <button
            onClick={() => handleFilterChange("sale")}
            className={`w-14 h-7 flex items-center p-1 rounded-full transition-all duration-300 ${
              isSale ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                isSale ? "translate-x-8" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>

        <div>
          <p className="text-right font-semibold py-6 text-lg">در حال پیش فروش</p>
        </div>
      </div>

      {/* دکمه سوم: تخفیف خورده */}
      <div className="bg-white w-80 h-20 rounded-lg flex gap-20 mt-5">
        <div className="mt-6 ml-5">
          <button
            onClick={() => handleFilterChange("off")}
            className={`w-14 h-7 flex items-center p-1 rounded-full transition-all duration-300 ${
              isOff ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                isOff ? "translate-x-8" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>

        <div>
          <p className="text-right font-semibold py-6 text-lg">تخفیف خورده</p>
        </div>
      </div>
    </div>
  );
}
 








// import { useState } from "react";

// export default function FilterPanel({ onFilterChange }) {
//   const [isFree, setIsFree] = useState(false);
//   const [isSale, setIsSale] = useState(false);
//   const [isOff, setIsOff] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleFilterChange = (filterType) => {
//     let newFilters = { free: isFree, sale: isSale, off: isOff };

//     if (filterType === "free") {
//       newFilters.free = !isFree;
//       setIsFree(!isFree);
//     } else if (filterType === "sale") {
//       newFilters.sale = !isSale;
//       setIsSale(!isSale);
//     } else if (filterType === "off") {
//       newFilters.off = !isOff;
//       setIsOff(!isOff);
//     }

//     onFilterChange(newFilters);
//   };

//   return (
//     <div>
//       {/* دکمه نمایش فیلترها در حالت sm */}
//       <div className="sm:hidden mb-4">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="w-full bg-green-600 text-white py-2 rounded-lg"
//         >
//           فیلترها
//         </button>
//         {isOpen && (
//           <div className="mt-2 p-4 bg-white shadow-lg rounded-lg flex flex-col gap-4">
//             <FilterButton label="فقط دوره‌های رایگان" isActive={isFree} onClick={() => handleFilterChange("free")} />
//             <FilterButton label="در حال پیش فروش" isActive={isSale} onClick={() => handleFilterChange("sale")} />
//             <FilterButton label="تخفیف خورده" isActive={isOff} onClick={() => handleFilterChange("off")} />
//           </div>
//         )}
//       </div>
      
//       {/* فیلترها در سایزهای بزرگتر */}
//       <div className="hidden sm:flex flex-col gap-4">
//         <FilterButton label="فقط دوره‌های رایگان" isActive={isFree} onClick={() => handleFilterChange("free")} />
//         <FilterButton label="در حال پیش فروش" isActive={isSale} onClick={() => handleFilterChange("sale")} />
//         <FilterButton label="تخفیف خورده" isActive={isOff} onClick={() => handleFilterChange("off")} />
//       </div>
//     </div>
//   );
// }

// function FilterButton({ label, isActive, onClick }) {
//   return (
//     <div className="bg-white w-80 h-20 rounded-lg flex gap-20 p-4">
//       <button
//         onClick={onClick}
//         className={`w-14 h-7 flex items-center p-1 rounded-full transition-all duration-300 ${
//           isActive ? "bg-green-500" : "bg-gray-300"
//         }`}
//       >
//         <div
//           className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
//             isActive ? "translate-x-8" : "translate-x-0"
//           }`}
//         ></div>
//       </button>
//       <p className="text-right font-semibold py-2 text-lg">{label}</p>
//     </div>
//   );
// }





