import { Link } from "react-router-dom"


export default function LearningPathSection() {
    return (
        <>

            <div>

                <div>
                    <div className="flex justify-around mt-10 mx-20">
                        <div className="relative bg-white w-72 h-52 rounded-lg text-center shadow-lg flex flex-col items-center p-4">
                            <div className="bg-blue-700 w-20 h-20 rounded-full flex justify-center items-center absolute -top-8">
                                <img src="/imgs/icons/computer-2.png" className="w-9" alt="Computer Icon" />
                            </div>
                            <h3 className="text-blue-500 text-2xlfont-lato mt-12">ثبت نام بوت کمپ</h3>
                            <p className="text-gray-600 mt-10">ثبت نام بوت کمپ طراحی سایت</p>
                        </div>
                            
                        <Link to='/roadmap'>
                        <div className="relative bg-white w-72 h-52 rounded-lg text-center shadow-lg flex flex-col items-center p-4"> 
                            <div className="bg-blue-700 w-20 h-20 rounded-full flex justify-center items-center absolute -top-8">
                                <img src="/imgs/icons/video.png" className="w-9" alt="Computer Icon" />
                            </div>
                            <h3 className="text-blue-500 text-2xl font-lato mt-12">نقشه راه</h3>
                            <p className="text-gray-600 mt-10">توضیحات مربوط به نقشه راه</p> 
                        </div>  
                        </Link>

                        <div className="relative bg-white w-72 h-52 rounded-lg text-center shadow-lg flex flex-col items-center p-4">
                            <div className="bg-blue-700 w-20 h-20 rounded-full flex justify-center items-center absolute -top-8">
                                <img src="/imgs/icons/training.png" className="w-9" alt="Computer Icon" />
                            </div>
                            <h3 className="text-blue-500 text-2xl font-lato mt-12">آموزش رایگان</h3>
                            <p className="text-gray-600 mt-10">آموزش رایگان برنامه نویسی</p>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
