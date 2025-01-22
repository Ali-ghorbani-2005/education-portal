

export default function SerchBox() {
    return (
        <>

            <div className="flex w-[780px] h-16 bg-white rounded-full">
                <button className="bg-green-500 w-11 h-11 rounded-full mt-2  ml-7 hover:bg-green-600    ">
                    <img src="imgs/icons/search.png" alt="" className="w-6 ml-2 " />
                </button>
                <input type="text"
                    className="w-[700px] h-16 rounded-full text-right focus:outline-none font-extralight text-lg"
                    placeholder="...جستو جو در بین دوره ها"
                />

            </div>

        </>
    )
}
