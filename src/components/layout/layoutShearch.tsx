

export default function LayoutShearch() {
    return (
        <>
            <div className="flex justify-center">
                <div className="flex items-center w-full max-w-xs h-12 bg-gray-200 rounded-full overflow-hidden shadow-md">
                    <button className="bg-green-500 w-10 h-10 rounded-full flex justify-center items-center hover:bg-green-600 transition duration-200">
                        <img src="/imgs/icons/search.png" alt="Search" className="w-6" />
                    </button>
                    <input
                        type="text"
                        className="flex-1 bg-gray-200 h-full rounded-full text-right focus:outline-none font-light text-base px-3"
                        placeholder="...جستجو در بین دوره‌ها"
                    />
                </div>
            </div>
        </>
    )
}
