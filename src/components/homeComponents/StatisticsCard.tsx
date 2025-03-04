

export default function StatisticsCard() {
    return (
        <>

            <div>
                <div className="flex gap-60 mt-10 md:gap-60 sm:gap-20">
                    <div>
                        <img src="imgs/icons/student.png" className="w-28 md:w-28 sm:w-16 " alt="" />
                        <p className="text-3xl text-center md:text-3xl  text-white font-gulzar sm:text-xl sm:text-center " >1780</p>
                        <p className="text-3xl text-center md:text-3xl text-white font-lato sm:text-lg sm:text-center " >دانشجو</p>
                    </div>
                    <div>
                        <img src="imgs/icons/computer.png" className="w-28 md:w-28  sm:w-16" alt="" />
                        <p className="text-3xl text-center md:text-3xl text-white font-gulzar sm:text-xl sm:text-center">40</p>
                        <p className="text-2xl text-center md:text-2xl text-white font-lato sm:text-lg sm:text-center">دوره آموزشی</p>
                    </div>
                    <div>
                        <img src="imgs/icons/clock.png" className="w-28 md:w-28  sm:w-16" alt="" />
                        <p className="text-3xl text-center md:text-3xl text-white font-lato sm:text-xl sm:text-center">1566</p>
                        <p className="text-2xl text-center md:text-2xl text-white font-lato sm:text-lg sm:text-center">ساعت آموزش</p>
                    </div>
                </div>
            </div>


        </>
    )
}
