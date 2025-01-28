

export default function LayoutAuthentication() {
    return (
        <>

            {/* <div>

                <div className="bg-blue-600 w-36 h-10 rounded-lg flex items-center justify-around mt-10 shadow-lg">
                    <button className="text-white font-semibold py-2 px-4 rounded hover:bg-blue-500 transition duration-200">
                        ثبت نام
                    </button>
                    <button className="text-white font-semibold py-2 px-4 rounded hover:bg-blue-500 transition duration-200">
                        ورود
                    </button>
                </div>

            </div> */}
            <div className="flex justify-center mt-10">
                <div className="bg-blue-600 rounded-lg flex shadow-lg">
                    <button className="text-white font-semibold py-2 px-6 rounded-l-lg hover:bg-blue-500 transition duration-200">
                        ثبت نام
                    </button>
                    <button className="text-white font-semibold py-2 px-6 rounded-r-lg hover:bg-blue-500 transition duration-200">
                        ورود
                    </button>
                </div>
            </div>

        </>
    )
}
