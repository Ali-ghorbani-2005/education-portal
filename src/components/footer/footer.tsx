
import ContactButtons from "./contactButtons";


export default function Footer() {
  return (
    <>

      {/* <div>

        <div>

          <div className="border-b border-gray-300 h-32">

            <div className="flex">
              <div>
                <ContactButtons />
              </div>

              <div className="ml-[1000px]">
                <p className="text-right font-gulzar text-3xl mt-5 text-blue-600">دانش پلاس</p>
              </div>
            </div>

            <div className="flex gap-20 mt-8 justify-end">

              <div className="flex">
                <p>02191030926</p>
                <img src="imgs/icons/email.png" className="w-6" alt="" />
              </div>

              <div className="flex">
                <p>02191030926</p>
                <img src="imgs/icons/telegram-2.png" className="w-6" alt="" />
              </div>


              <div className="flex">
                <p>02191030926</p>
                <img src="imgs/icons/phone.png" className="w-6" alt="" />
              </div>
            </div>



          </div>

          <div className="w-[400px]  text-right ml-[900px]  mt-10">
            <p className="text-right mr-5 text-2xl font-semibold">درباره دانش پلاس</p>
            <p className="font-lato text-[18px] text-slate-500 mt-4">
              شروع هرچیزی سخته، ولی وقتی مسیر درستی رو انتخاب کنی، با خیال راحت و بدون استرس میتونی از مسیر لذت ببری. ما در سبزلرن، توی سفر به دنیای برنامه نویسی کنارت هستیم تا باهم رشد کنیم و از نتیجه زحمات مون لذت ببریم.
            </p>
            <div className="text-center mt-8">
              <p className="text-gray-600 ">
                کلیه حقوق مادی و معنوی سایت برای <span className="font-gulzar text-blue-600">دانش پلاس</span> محفوظ است.
              </p>
            </div>
          </div> 
            
            <div className="flex justify-center items-center">
          <div className="-mt-64"> 
            <div>
           <p className="text-2xl font-semibold">دوره های پر طرفدار</p> 
           </div> 
           <div className="text-center ">
           <button >  <p className="mt-5 text-center text-lg text-slate-500 font-semibold hover:text-blue-600">آموزش پایتون</p> </button> 
           </div> 
           <div className="text-center ">
           <button>  <p  className="mt-5 text-center text-lg text-slate-500 font-semibold hover:text-blue-600">آموزش Html</p> </button> 
           </div> 
           <div className="text-center ">
           <button> <p  className="mt-5 text-center text-lg text-slate-500 font-semibold hover:text-blue-600">آموزش Css</p></button> 
           </div>
          </div> 

          </div> 


          <div className="flex justify-center items-center mr-[600px]">
          <div className="-mt-64"> 
            <div>
           <p className="text-2xl font-semibold"> دسترسی سریع </p> 
           </div> 
           <div className="text-center ">
           <button>  <p className="mt-5 text-center text-lg text-slate-500 font-semibold hover:text-blue-600 ">قوانین و مقررات</p> </button> 
           </div> 
           <div className="text-center ">
           <button>  <p  className="mt-5 text-center text-lg text-slate-500 font-semibold hover:text-blue-600"> ارسال تیکت</p> </button> 
           </div> 
           <div className="text-center ">
           <button> <p  className="mt-5 text-center text-lg text-slate-500 font-semibold hover:text-blue-600"> همه دوره ها</p></button> 
           </div>
          </div> 

          </div>

        </div>

      </div> */}

      <div className="  py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="flex-1">
              <ContactButtons />
            </div>
            <div className="text-center md:text-right md:ml-10">
              <p className="font-gulzar text-3xl text-blue-600">دانش پلاس</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between mt-8">
            <div className="flex items-center mb-4 md:mb-0">
              <img src="imgs/icons/email.png" className="w-6 mr-2" alt="Email" />
              <p className="text-gray-500">info@daneshplus.com</p>
            </div>
            <div className="flex items-center mb-4 md:mb-0">
              <img src="imgs/icons/telegram-2.png" className="w-6 mr-2" alt="Telegram" />
              <p className="text-gray-500" >02191030926</p>
            </div>
            <div className="flex items-center">
              <img src="imgs/icons/phone.png" className="w-6 mr-2" alt="Phone" />
              <p className="text-gray-500">02191030926</p>
            </div>
          </div> 

          <div className="border-b border-gray-400 mt-5"></div>

          <div className="mt-10 text-right">
            <p className="text-2xl font-semibold">درباره دانش پلاس</p>
            <p className="font-lato text-[18px] text-center text-slate-500 mt-4">
              شروع هرچیزی سخته، ولی وقتی مسیر درستی رو انتخاب کنی، با خیال راحت و بدون استرس میتونی از مسیر لذت ببری. ما در سبزلرن، توی سفر به دنیای برنامه نویسی کنارت هستیم تا باهم رشد کنیم و از نتیجه زحمات مون لذت ببریم.
            </p>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              کلیه حقوق مادی و معنوی سایت برای <span className="font-gulzar text-blue-600">دانش پلاس</span> محفوظ است.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-around mt-10">
            <div className="text-center mb-8">
              <p className="text-2xl font-semibold">دوره های پرطرفدار</p>
              <button className="mt-5 text-lg text-slate-500 font-semibold mr-5 hover:text-blue-600">آموزش پایتون</button>
              <button className="mt-5 text-lg text-slate-500 font-semibold hover:text-blue-600">HTML آموزش  </button>
              <button className="mt-5 text-lg text-slate-500 font-semibold ml-5 hover:text-blue-600">CSS  آموزش</button>
            </div>
            <div className="text-center mb-8">
              <p className="text-2xl font-semibold ">دسترسی سریع</p>
              <button className="mt-5 text-lg text-slate-500 font-semibold mr-5 hover:text-blue-600">قوانین و مقررات</button>
              <button className="mt-5 text-lg text-slate-500 font-semibold  hover:text-blue-600">ارسال تیکت</button>
              <button className="mt-5 text-lg text-slate-500 font-semibold ml-5 hover:text-blue-600">همه دوره‌ها</button>
            </div>
          </div>
        </div>
      </div>

    </>


  )
}
