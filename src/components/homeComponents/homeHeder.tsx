import AuthenticationButton from "./authenticationButton";
import CourseNavigation from "./CourseNavigation";
import SerchBox from "./serchBox";
import StatisticsCard from "./StatisticsCard";


export default function HomeHeder() {
    return (
        <>

            <div className="relative overflow-hidden h-[570px]">
                <img src="imgs/icons/bg-lap.jpeg" alt="Background" className="absolute inset-0 object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative z-10 flex gap-5 ml-10 mt-6 w-44 h-10 bg-green-600 rounded-lg">
                   <AuthenticationButton/>
                </div>
                <div className="relative z-10 flex justify-end gap-4 mr-24">
                  <CourseNavigation/>
                </div> 
                <div className="relative flex justify-center items-center mt-10">
                    <p className="text-white text-3xl font-semibold">دانش پلاس, نخستین قدم برای تبدیل شدن به یک برنامه‌نویس</p> 
                </div>   
                <div className="relative flex justify-center items-center mt-20"> 
                    <SerchBox/>
                </div> 

                <div className="relative flex justify-center items-center">
                    <StatisticsCard/>
                </div>
                <div>
                    
                </div>
            </div>

        </>
    )
}
