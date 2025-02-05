

export default function StatisticsCard() {
    return (
        <>

            <div>
                <div className="flex gap-60 mt-10">
                    <div>
                        <img src="imgs/icons/student.png" className="w-28" alt="" />
                        <p className="text-3xl text-center text-white font-gulzar" >1780</p>
                        <p className="text-3xl text-center text-white font-lato" >دانشجو</p>
                    </div>
                    <div>
                        <img src="imgs/icons/computer.png" className="w-28" alt="" />
                        <p className="text-3xl text-center text-white font-gulzar">40</p>
                        <p className="text-2xl text-center text-white font-lato">دوره آموزشی</p>
                    </div>
                    <div>
                        <img src="imgs/icons/clock.png" className="w-28" alt="" />
                        <p className="text-3xl text-center text-white font-lato">1566</p>
                        <p className="text-2xl text-center text-white font-lato">ساعت آموزش</p>
                    </div>
                </div>
            </div>


        </>
    )
}
