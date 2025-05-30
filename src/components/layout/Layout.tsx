import { Outlet } from "react-router-dom";
import LayoutShearch from "./layoutShearch";
import CourseNavigation from "../homeComponents/CourseNavigation";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Footer from "../footer/footer";
import Brand from "../homeComponents/brand";
import CartButton from "../cartButton/cartButton";
import Sidebar from "../sidebar/sidebar";
import LayoutUserMenu from "./layoutUserMenu";


export default function Layout() {
  return (
    <>
      <div className="h-20 shadow-sm shadow-gray-400 dark:bg-slate-800">
        <div className="flex gap-20">
          {/* در سایز sm، سایدبار نمایش داده می‌شود */}
          <div className="sm:block md:block lg:hidden "> 
            <div className="md:ml-80">
            <Sidebar />  
            </div>
            <div className="-mt-7 sm:-mt-7   flex justify-center">  
            <Brand/> 
          </div>  

          <div className="-mt-14 ml-3">
            <CartButton/> 
            </div>
          </div> 

          

          {/* در سایز md و بزرگ‌تر، کامپوننت‌های دیگر نمایش داده می‌شوند */}
          <div className="hidden md:hidden lg:block lg:flex ml-24 mt-1 md:flex gap-10">
            <div className="-mt-4 -ml-4">
              <LayoutUserMenu/>
            </div>

            <div className="flex">
              <CartButton />
              <ThemeSwitcher />
            </div>

            <div className="mt-5">
              <LayoutShearch />
            </div>

            <div className="flex mt-5 ml-20">
              <CourseNavigation />
              <Brand />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 dark:bg-slate-900 h-full">
        <main>
          <div className="">
            <Outlet />
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}

