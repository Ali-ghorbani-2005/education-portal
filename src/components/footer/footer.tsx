import ContactButtons from "./contactButtons";

export default function Footer() {
  return (
    <> 
    <div className="dark:bg-slate-800">
      <div className="py-10">
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
              <img src="/imgs/icons/email.png" className="w-6 mr-2" alt="Email" />
              <p className="text-gray-500 font-lato dark:text-gray-400">info@daneshplus.com</p>
            </div>
            <div className="flex items-center mb-4 md:mb-0">
              <img src="/imgs/icons/telegram-2.png" className="w-6 mr-2" alt="Telegram" />
              <p className="text-gray-500 dark:text-gray-400 font-lato">02191030926</p>
            </div>
            <div className="flex items-center">
              <img src="/imgs/icons/phone.png" className="w-6 mr-2" alt="Phone" />
              <p className="text-gray-500 font-lato dark:text-gray-400">02191030926</p>
            </div>
          </div>

          <div className="border-b border-gray-400 mt-5"></div>

          <div className="mt-10 text-right">
            <p className="text-2xl font-semibold font-lato dark:text-white">درباره دانش پلاس</p>
            <p className="font-lato text-[18px] text-center text-slate-500 dark:text-slate-400 mt-4">
              شروع هرچیزی سخته، ولی وقتی مسیر درستی رو انتخاب کنی، با خیال راحت و بدون استرس میتونی از مسیر لذت ببری. ما در سبزلرن، توی سفر به دنیای برنامه نویسی کنارت هستیم تا باهم رشد کنیم و از نتیجه زحمات مون لذت ببریم.
            </p>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-400">
              کلیه حقوق مادی و معنوی سایت برای <span className="font-gulzar text-blue-600">دانش پلاس</span> محفوظ است.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-around mt-10">
            <div className="text-center mb-8">
              <p className="text-2xl  font-lato dark:text-white">دوره های پرطرفدار</p>
              <button className="mt-5 text-lg text-slate-500 font-lato mr-5 dark:text-gray-400 hover:text-blue-600">آموزش پایتون</button>
              <button className="mt-5 text-lg text-slate-500 font-lato dark:text-gray-400 hover:text-blue-600">HTML آموزش</button>
              <button className="mt-5 text-lg text-slate-500 font-lato ml-5 dark:text-gray-400 hover:text-blue-600">CSS آموزش</button>
            </div>
            <div className="text-center mb-8">
              <p className="text-2xl font-lato dark:text-white">دسترسی سریع</p>
              <button className="mt-5 text-lg text-slate-500 font-lato mr-5 dark:text-gray-400 hover:text-blue-600">قوانین و مقررات</button>
              <button className="mt-5 text-lg text-slate-500 font-lato dark:text-gray-400 hover:text-blue-600">ارسال تیکت</button>
              <button className="mt-5 text-lg text-slate-500 font-lato ml-5 dark:text-gray-400 hover:text-blue-600">همه دوره‌ها</button>
            </div>
          </div>

          {/* دکمه برگشت به بالا */}
          {/* <div className="flex justify-center mt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
            >
              بازگشت به بالا ↑
            </button>
          </div> */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-gradient-to-l transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2">بازگشت به بالا</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div> 
      </div>
    </>
  );
}

