import HomeCart from "../cartButton/homeCart";
import MessageBox from "../messageBox/messageBox";
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
            <div className="relative overflow-hidden h-[570px]">
                <img src="imgs/icons/bg-lap.jpeg" alt="Background" className="absolute inset-0 object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative flex ">
                   <UserMenu/> 
                  <HomeCart/>
                </div>
                <div className="relative z-10 flex justify-end gap-4 mr-24 text-white">
                  <CourseNavigation/> 
                  <Brand/>
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
