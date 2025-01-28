
export default function ContactButtons() {
  return (
   <>
   
   <div className="flex">
   <div className="bg-gray-300 rounded-full w-11 h-11 hover:bg-blue-500 ml-5 "> 
            <div className="flex justify-center items-center "> 
                <button>
            <img src="imgs/icons/telegram.png" className="w-9 mt-1 " alt="" />  
            </button>
            </div> 

         </div> 
         <div className="bg-gray-300 rounded-full w-11 h-11 hover:bg-blue-500 ml-5 "> 
            <div className="flex justify-center items-center "> 
                <button>
            <img src="imgs/icons/instagram.png" className="w-9 mt-1 " alt="" />  
            </button>
            </div> 

         </div> 

         <div className="bg-gray-300 rounded-full w-11 h-11 hover:bg-blue-500 ml-5 "> 
            <div className="flex justify-center items-center "> 
                <button>
            <img src="imgs/icons/linkedin.png" className="w-9 mt-1 " alt="" />  
            </button>
            </div> 

         </div> 
   </div>
   
   </>
  )
}
