
// export default function Roadmap() {
//     return (
//         <>
//              <div className="flex flex-col lg:flex-row lg:justify-between mt-5">

//                 <div className="lg:w-3/5">
//                     <img src="/imgs/icons/map.png" className="w-full h-80 rounded-lg" alt="Map" />
//                     <div className="p-5">
//                         <h2 className="text-right text-3xl font-semibold">مسیر یادگیری برنامه نویسی</h2>
//                         <p className="text-right mt-3 text-lg">برنامه نویسی شغل سختی است یا راحت؟! چه چیزهایی را باید آموزش دید و چقدر طول می‌کشد تا به یک برنامه نویس تبدیل شویم؟ اینجا بهترین مسیر یادگیری برنامه نویسی را به شما گفته ایم</p>
//                         <p className="text-right mt-5 font-semibold">
//                             اگر شما هم علاقه‌مند به آشنایی با مسیر یادگیری برنامه‌نویسی هستید، بدون شک این موضوع را شنیده‌اید که برنامه‌نویسی یک شغل بسیار پول‌ساز است. اما برخی از افراد بعد از ورود به این حوزه، موفق نمی‌شوند و شروع به بدگویی درباره این فیلد می‌کنند. دلیل این موضوع عدم آگاهی درباره چارچوب کلی یادگیری برنامه‌نویسی است.
//                         </p>
//                     </div>

//                     <img src="/imgs/bg/map-bg1.jpg" className="w-full mt-5 rounded-lg" alt="Background 1" />

//                     <div className="p-5">
//                         <h3 className="text-right mt-3 text-blue-600 text-2xl font-bold">سوالات رایج در حوزه برنامه‌نویسی</h3>
//                         <p className="text-right mt-3 font-bold">قبل از صحبت درباره مسیر یادگیری، اجازه دهید تا برخی از سوالات رایج را مطرح کنیم:</p>
//                         <ul className="list-disc list-inside text-right mt-3 text-sm">
//                             <li>آیا برای یادگیری آن نیازمند دانش زبان انگلیسی هستیم؟</li>
//                             <li>آیا دانش ریاضی ما باید در سطح بالایی قرار داشته باشد؟</li>
//                             <li>سن ما برای یادگیری برنامه‌نویسی بالا نیست؟</li>
//                         </ul>
//                         <p className="text-right mt-4 font-bold">برای یادگیری برنامه‌نویسی به مدرک زبان نیاز نیست و با دانش ابتدایی هم می‌توانید به مباحث مربوط به این حوزه تسلط پیدا کنید.</p>
//                     </div>

//                     <img src="/imgs/bg/map-bg2.jpg" className="w-full mt-5 rounded-lg" alt="Background 2" />

//                     <div className="p-5">
//                         <h3 className="text-right mt-3 text-2xl text-blue-600 font-bold">یک نکته کلیدی برای یادگیری برنامه‌نویسی</h3>
//                         <p className="text-right mt-3 font-bold">یادگیری برنامه‌نویسی کار ساده‌ای نیست و نیاز به تمرین مداوم دارد. صبر و حوصله کلید موفقیت شماست.</p>
//                     </div>
//                 </div>

//                 <div className=" top-20 right-0 p-5 w-96">
//                     <h2 className="text-right text-3xl font-thin">موضوعات ویژه</h2>
//                     <p className="text-right mt-3 text-2xl font-thin">موضوع موردعلاقه‌ات را انتخاب کن</p>

//                     {[
//                         { title: "مسیر یادگیری برنامه نویسی موبایل", teacher: "ساسان صفری", icon: "/imgs/icons/mobile.png", bgColor: "bg-blue-500" },
//                         { title: "مسیر یادگیری برنامه نویسی وب", teacher: "سوگند قاسم پور", icon: "/imgs/icons/web.png", bgColor: "bg-red-700" },
//                         { title: "مسیر یادگیری برنامه نویسی بک اند", teacher: "محمد حمیدی", icon: "/imgs/icons/backend.png", bgColor: "bg-blue-700" },
//                         { title: "مسیر یادگیری سئو", teacher: "ساسان صفری", icon: "/imgs/icons/search.png", bgColor: "bg-yellow-400" },
//                     ].map((item, index) => (
//                         <div key={index} className={`flex gap-2 mt-3 ${item.bgColor} text-white rounded-lg p-4`}>
//                             <div className="flex-1 text-right">
//                                 <p className="font-bold">{item.title}</p>
//                                 <p className="text-sm">{`مدرس: ${item.teacher}`}</p>
//                             </div>
//                             <div className="flex justify-center items-center w-14 h-14 rounded-full">
//                                 <img src={item.icon} className="w-9" alt="" />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div> 

            

//         </>
//     )
// }






import { useEffect } from 'react'; 
import { motion } from "framer-motion";

export default function Roadmap() {

    useEffect(() => {
        window.scrollTo(0, 0); // وقتی وارد صفحه میشه، اسکرول بره بالا
    }, []);

    return ( 
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="product-detail rounded-lg p-6"
      >
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* بخش اصلی */}
                <div className="lg:w-3/5 space-y-8">
                    <img src="/imgs/icons/map.png" className="w-full h-80 object-cover rounded-2xl shadow-md" alt="Map" />

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-right dark:text-white">مسیر یادگیری برنامه نویسی</h2>
                        <p className="text-lg text-right leading-relaxed dark:text-white">
                            برنامه نویسی شغل سختی است یا راحت؟! چه چیزهایی را باید آموزش دید و چقدر طول می‌کشد تا به یک برنامه نویس تبدیل شویم؟ اینجا بهترین مسیر یادگیری برنامه نویسی را به شما گفته ایم
                        </p>
                        <p className="text-right font-medium text-gray-800 dark:text-gray-400">
                            اگر شما هم علاقه‌مند به آشنایی با مسیر یادگیری برنامه‌نویسی هستید، بدون شک این موضوع را شنیده‌اید که برنامه‌نویسی یک شغل بسیار پول‌ساز است...
                        </p>
                    </div>

                    <img src="/imgs/bg/map-bg1.jpg" className="w-full rounded-2xl shadow-md" alt="Background 1" />

                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-blue-600 text-right">سوالات رایج در حوزه برنامه‌نویسی</h3>
                        <p className="font-bold text-right dark:text-white">قبل از صحبت درباره مسیر یادگیری، اجازه دهید تا برخی از سوالات رایج را مطرح کنیم:</p>
                        <ul className="list-disc list-inside text-right text-sm text-gray-700 dark:text-gray-400 space-y-2">
                            <li>آیا برای یادگیری آن نیازمند دانش زبان انگلیسی هستیم؟</li>
                            <li>آیا دانش ریاضی ما باید در سطح بالایی قرار داشته باشد؟</li>
                            <li>سن ما برای یادگیری برنامه‌نویسی بالا نیست؟</li>
                        </ul>
                        <p className="text-right font-bold text-gray-800 dark:text-white">
                            برای یادگیری برنامه‌نویسی به مدرک زبان نیاز نیست و با دانش ابتدایی هم می‌توانید به مباحث مربوط به این حوزه تسلط پیدا کنید.
                        </p>
                    </div>

                    <img src="/imgs/bg/map-bg2.jpg" className="w-full rounded-2xl shadow-md" alt="Background 2" />

                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-blue-600 text-right">یک نکته کلیدی برای یادگیری برنامه‌نویسی</h3>
                        <p className="text-right font-bold text-gray-800 dark:text-white">
                            یادگیری برنامه‌نویسی کار ساده‌ای نیست و نیاز به تمرین مداوم دارد. صبر و حوصله کلید موفقیت شماست.
                        </p>
                    </div>
                </div>

                {/* سایدبار */}
                <aside className="lg:w-2/5 space-y-4">
                    <h2 className="text-2xl font-light text-right">موضوعات ویژه</h2>
                    <p className="text-xl font-light text-right">موضوع موردعلاقه‌ات را انتخاب کن</p>

                    {[
                        { title: "مسیر یادگیری برنامه نویسی موبایل", teacher: "ساسان صفری", icon: "/imgs/icons/mobile.png", bgColor: "bg-blue-500" },
                        { title: "مسیر یادگیری برنامه نویسی وب", teacher: "سوگند قاسم پور", icon: "/imgs/icons/web.png", bgColor: "bg-red-700" },
                        { title: "مسیر یادگیری برنامه نویسی بک اند", teacher: "محمد حمیدی", icon: "/imgs/icons/backend.png", bgColor: "bg-blue-700" },
                        { title: "مسیر یادگیری سئو", teacher: "ساسان صفری", icon: "/imgs/icons/search.png", bgColor: "bg-yellow-400" },
                    ].map((item, index) => (
                        <div key={index} className={`flex items-center gap-4 p-4 rounded-xl shadow-md ${item.bgColor} text-white`}>
                            <div className="flex-1 text-right">
                                <p className="font-bold">{item.title}</p>
                                <p className="text-sm">مدرس: {item.teacher}</p>
                            </div>
                            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                                <img src={item.icon} className="w-8" alt={item.title} />
                            </div>
                        </div>
                    ))}
                </aside>
            </div>
        </div> 
        </motion.div>
    );
}
