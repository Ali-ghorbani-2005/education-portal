import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <> 
           <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="product-detail rounded-lg p-6"
>
      <div className="max-w-4xl  mx-auto p-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg ">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl font-gulzar mb-6 dark:text-white ">هدف ما</h1>
          <p className="text-2xl font-katibeh mt-4 dark:text-white">
            در <span className="text-blue-500 font-gulzar">دانش پلاس</span>، هدف ما فراهم کردن یک پلتفرم آموزشی معتبر و کارآمد برای افرادی است که به یادگیری و توسعه مهارت‌های برنامه‌نویسی علاقه‌مند هستند. ما با ارائه دوره‌های آموزشی متنوع و محتوای باکیفیت، به شما کمک می‌کنیم تا در دنیای فناوری اطلاعات پیشرفت کنید.
          </p>
          <p className="text-lg mt-4 font-katibeh dark:text-white">
            تیم ما متشکل از متخصصان باتجربه در حوزه‌های مختلف فناوری است که به آموزش و انتقال دانش خود به نسل جدید برنامه‌نویسان متعهد هستند. ما به شما ابزارها و منابع لازم را ارائه می‌دهیم تا بتوانید با اعتماد به نفس در مسیر یادگیری خود قدم بردارید.
          </p>
          <p className="text-lg mt-4 font-katibeh dark:text-white">
            در <span className="text-blue-500 font-gulzar">دانش پلاس</span>، ما به یادگیری مادام‌العمر اعتقاد داریم و به همین دلیل همیشه در حال به‌روزرسانی و گسترش محتوای آموزشی خود هستیم. به ما بپیوندید و مهارت‌های خود را در زمینه برنامه‌نویسی تقویت کنید!
          </p>
          <img src="imgs/icons/code typing.png" className="w-64 mt-6 rounded-lg shadow-md" alt="Code Typing" />
        </div>
      </div> 
      </motion.div>
    </>
  )
}
