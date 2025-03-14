

export default function CourseProgress() {
  return (
    <>

      

<div className="bg-white dark:bg-slate-800 shadow-md w-[350px] h-48 rounded-xl p-4 mt-5 transition-all duration-300 hover:shadow-lg">

<div className="flex justify-between mb-3">

    <div className="bg-slate-100 dark:bg-slate-700  w-32 h-16 rounded-lg flex flex-col items-center p-2 hover:bg-slate-200 transition-colors duration-200">
        <div className="flex items-center mb-1">
            <p className="text-lg font-lato dark:text-white">دانشجو</p>
            <img src="/imgs/icons/users-2.png" className="w-8 ml-2" alt="Students" />
        </div>
        <p className="text-md font-lato text-gray-600 dark:text-white">155</p>
    </div>

    <div className="bg-slate-100 dark:bg-slate-700 w-32 h-16 rounded-lg flex flex-col items-center p-2 hover:bg-slate-200 transition-colors duration-200">
        <div className="flex items-center mb-1">
            <p className="text-lg font-lato dark:text-white">رضایت</p>
            <img src="/imgs/icons/star.png" className="w-8 ml-2" alt="Satisfaction" />
        </div>
        <p className="text-md font-lato text-gray-600 dark:text-white">5.0</p>
    </div>

</div>

<div className="mt-2">
    <p className="font-bold text-center text-sm dark:text-white">میزان رضایت کلی</p>
    <p className="ml-2 font-bold text-md dark:text-white">100</p>

    <div className="bg-green-500 h-4 rounded-full w-full mt-2">
      
    </div>

</div>

</div>


    </>
  )
}
