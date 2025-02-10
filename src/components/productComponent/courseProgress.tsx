

export default function CourseProgress() {
  return (
    <>

      {/* <div>
      
      <div className=" bg-white shadow-lg w-[450px] h-48 rounded-xl">
         
         <div className="flex justify-end ">

      <div className=" bg-slate-200 w-44 h-20 rounded-lg mt-5 mr-4" > 
        <div className="flex justify-end mt-1 ">
      <p className="mr-3 text-2xl font-lato">دانشجو</p> 
      <img src="/imgs/icons/users-2.png" className="w-14 mr-4" alt="" /> 
      </div> 
      <p className="-mt-4 text-center text-lg font-lato mr-3 text-gray-500">155</p>
      </div> 

      </div> 


      <div className=" bg-slate-200 w-44 h-20 rounded-lg -mt-20 ml-3 " > 
        <div className="flex justify-end mt-1 ">
      <p className="mr-3 text-2xl font-lato">رضایت</p> 
      <img src="/imgs/icons/star.png" className="w-14 mr-4" alt="" /> 
      </div> 
      <p className="-mt-4 text-center text-lg font-lato mr-3 text-gray-500">5.0</p>
      </div>  


      <div className="mt-5"> 

        <p className="ml-3 font-bold">100</p>
      
      <div className="bg-green-600 w-96 h-3 rounded-full ml-4 ">

      </div>

      </div>

      </div>

    </div>
     */}

      {/* <div className="bg-white shadow-lg w-[450px] h-64 rounded-xl p-6 mt-5">

        <div className="flex justify-between mb-4">

          <div className="bg-slate-200 w-44 h-24 rounded-lg flex flex-col items-center p-2">
            <div className="flex items-center mb-1">
              <p className="text-2xl font-lato">دانشجو</p>
              <img src="/imgs/icons/users-2.png" className="w-12 ml-2" alt="Students" />
            </div>
            <p className="text-lg font-lato text-gray-500">155</p>
          </div>

          <div className="bg-slate-200 w-44 h-24 rounded-lg flex flex-col items-center p-2">
            <div className="flex items-center mb-1">
              <p className="text-2xl font-lato">رضایت</p>
              <img src="/imgs/icons/star.png" className="w-12 ml-2" alt="Satisfaction" />
            </div>
            <p className="text-lg font-lato text-gray-500">5.0</p>
          </div>

        </div>

        <div className="mt-4">
          <p className="font-bold text-center">میزان رضایت کلی</p>
          <p className="ml-3 font-bold">100</p>

          <div className="bg-green-600 h-3 rounded-full w-full mt-2">
            <div className="bg-yellow-300 h-3 rounded-full w-1/2"></div> 
          </div>

        </div>

      </div> */} 

<div className="bg-white shadow-md w-[350px] h-48 rounded-xl p-4 mt-5 transition-all duration-300 hover:shadow-lg">

<div className="flex justify-between mb-3">

    <div className="bg-slate-100 w-32 h-16 rounded-lg flex flex-col items-center p-2 hover:bg-slate-200 transition-colors duration-200">
        <div className="flex items-center mb-1">
            <p className="text-lg font-lato">دانشجو</p>
            <img src="/imgs/icons/users-2.png" className="w-8 ml-2" alt="Students" />
        </div>
        <p className="text-md font-lato text-gray-600">155</p>
    </div>

    <div className="bg-slate-100 w-32 h-16 rounded-lg flex flex-col items-center p-2 hover:bg-slate-200 transition-colors duration-200">
        <div className="flex items-center mb-1">
            <p className="text-lg font-lato">رضایت</p>
            <img src="/imgs/icons/star.png" className="w-8 ml-2" alt="Satisfaction" />
        </div>
        <p className="text-md font-lato text-gray-600">5.0</p>
    </div>

</div>

<div className="mt-2">
    <p className="font-bold text-center text-sm">میزان رضایت کلی</p>
    <p className="ml-2 font-bold text-md">100</p>

    <div className="bg-green-500 h-2 rounded-full w-full mt-2">
        <div className="bg-yellow-300 h-2 rounded-full w-1/2"></div> 
    </div>

</div>

</div>


    </>
  )
}
