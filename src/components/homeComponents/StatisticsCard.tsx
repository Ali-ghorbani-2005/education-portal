

export default function StatisticsCard() {
    return (
        <>

            <div>
                <div className="flex gap-60 mt-10">
                    <div>
                        <img src="imgs/icons/student.png" className="w-28" alt="" />
                        <p className="text-3xl text-center text-white font-bold" >1780</p>
                        <p className="text-2xl text-center text-white font-semibold" >دانشجو</p>
                    </div>
                    <div>
                        <img src="imgs/icons/computer.png" className="w-28" alt="" />
                        <p className="text-3xl text-center text-white font-bold">40</p>
                        <p className="text-2xl text-center text-white font-semibold">دوره آموزشی</p>
                    </div>
                    <div>
                        <img src="imgs/icons/clock.png" className="w-28" alt="" />
                        <p className="text-3xl text-center text-white font-bold">1566</p>
                        <p className="text-2xl text-center text-white font-semibold">ساعت آموزش</p>
                    </div>
                </div>
            </div>


        </>
    )
}
