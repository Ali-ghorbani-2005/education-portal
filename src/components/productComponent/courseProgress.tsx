

export default function CourseProgress() {
  return (
    <>
    
    <div>
      
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
    
    </>
  )
}
