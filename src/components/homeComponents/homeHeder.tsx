import HomeCart from "../cartButton/homeCart";
import MessageBox from "../messageBox/messageBox";
import Sidebar from "../sidebar/sidebar";
import HomeThemeSwitcher from "../ThemeSwitcher/homeTemSwicher";
import UserMenu from "../UserMenu/userMenu";
import { useUser } from "../userProfile/context";
import Brand from "./brand";
import CourseNavigation from "./CourseNavigation";
import SerchBox from "./serchBox";
import StatisticsCard from "./StatisticsCard";


export default function HomeHeder() {
    const { user } = useUser();
    return (
        <>
            <div className="  relative overflow-hidden h-[570px]">  
                
                <img src="imgs/icons/bg-lap.jpeg" alt="Background" className="absolute inset-0 object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black bg-opacity-60"></div> 
                <div className="relative sm:block md:hidden flex ">
                    <Sidebar/>  
                    <div className="-mt-6 flex justify-center">
                   <Brand/> 
                   </div>  
                   <div className="-mt-16 w-96">
                   <HomeCart/> 
                   </div> 
                </div>
                <div className="relative sm:hidden md:block  "> 
                    <div className="flex">
                   <UserMenu/> 
                  <HomeCart/> 
                  <HomeThemeSwitcher/> 
                  </div> 
                </div>
                <div className="relative z-10  mr-24 -mt-5 text-white sm:hidden  md:block "> 
                    <div className="flex justify-end gap-4 ">
                  <CourseNavigation/> 
                  <Brand/> 
                  </div>
                </div>  
                <div className="relative flex justify-center items-center mt-10 ">
                    <p className="text-white text-3xl font-gulzar sm:text-lg sm:text-center md:text-3xl ">دانش پلاس, نخستین قدم برای تبدیل شدن به یک برنامه‌نویس</p> 
                </div>   
                <div className="relative flex justify-center items-center mt-20"> 
                    <SerchBox/>
                </div> 

                <div className="relative flex justify-center items-center">
                    <StatisticsCard/>
                </div>
                <div> 
                    <MessageBox/>
                    
                </div> 

                <div>
                <h1>خوش آمدید، {user?.name}</h1> 
                </div>
            </div>
        </>
    )
} 




