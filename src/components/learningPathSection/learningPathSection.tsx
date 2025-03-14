import { Link } from "react-router-dom"


export default function LearningPathSection() {
    return (
        <>

            <div>

                <div>
                    <div className="flex justify-around md:flex sm:grid mt-10 mx-20 ">
                        <div className="relative bg-white dark:bg-slate-800 w-72 md:w-72 sm:w-96 md:ml-0 sm:-ml-14 h-52 rounded-lg text-center shadow-lg flex flex-col items-center p-4">
                            <div className="bg-blue-700 dark:bg-blue-600 w-20 h-20 rounded-full flex justify-center items-center absolute -top-8">
                                <img src="/imgs/icons/computer-2.png" className="w-9" alt="Computer Icon" />
                            </div>
                            <h3 className="text-blue-500 text-2xlfont-lato mt-12">ثبت نام بوت کمپ</h3>
                            <p className="text-gray-600 mt-10 dark:text-gray-400">ثبت نام بوت کمپ طراحی سایت</p>
                        </div>
                            
                        <Link to='/roadmap'>
                        <div className="relative bg-white dark:bg-slate-800 w-72 md:w-72 sm:w-96 md:ml-0 sm:-ml-14 h-52 rounded-lg text-center shadow-lg flex flex-col items-center p-4 md:mt-0 sm:mt-10"> 
                            <div className="bg-blue-700 dark:bg-blue-600 w-20 h-20 rounded-full flex justify-center items-center absolute -top-8">
                                <img src="/imgs/icons/video.png" className="w-9" alt="Computer Icon" />
                            </div>
                            <h3 className="text-blue-500 text-2xl font-lato md:text-2xl sm:text-3xl mt-12">نقشه راه</h3>
                            <p className="text-gray-600 mt-10 dark:text-gray-400">توضیحات مربوط به نقشه راه</p> 
                        </div>  
                        </Link>

                        <div className="relative bg-white dark:bg-slate-800 w-72 md:w-72 sm:w-96 md:ml-0 sm:-ml-14 h-52 rounded-lg text-center shadow-lg flex flex-col items-center p-4 md:mt-0 sm:mt-10">
                            <div className="bg-blue-700 dark:bg-blue-600 w-20 h-20 rounded-full flex justify-center items-center absolute -top-8">
                                <img src="/imgs/icons/training.png" className="w-9" alt="Computer Icon" />
                            </div>
                            <h3 className="text-blue-500 text-2xl font-lato mt-12">آموزش رایگان</h3>
                            <p className="text-gray-600 mt-10 dark:text-gray-400">آموزش رایگان برنامه نویسی</p>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
