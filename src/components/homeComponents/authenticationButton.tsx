import { Link } from "react-router-dom";


export default function AuthenticationButton() {
    return (
        <>

            {/* <div className="flex">
                <div className="border-r border-white w-[87px] flex justify-center items-center">
                    <button className="text-white text-lg font-semibold">ثبت نام</button>
                </div>
                <div className="flex justify-center items-center">
                    <button className="text-white text-lg font-semibold">ورود</button>
                    <img src="imgs/icons/user.png" className="w-7" alt="" />
                </div>
            </div> */}


            <div className="flex items-center mt-4 ml-4">
                <div className="border-r border-white pr-4"> 
                    <Link to='/signUp'>
                    <button className="bg-blue-600 text-white text-lg font-lato py-2 px-4 rounded hover:bg-blue-700 transition duration-200">ثبت نام</button> 
                    </Link>
                </div>
                <div className="flex items-center ml-4"> 
                    <Link to='/login'>
                    <button className="bg-green-600 text-white text-lg font-lato py-2 px-4 rounded hover:bg-green-700 transition duration-200">ورود</button> 
                    </Link>
                    <img src="imgs/icons/user.png" className="w-7 ml-2" alt="User Icon" /> 
                </div>
            </div>

            {/* <div className="flex bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="border-r border-white pr-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-2 px-4 rounded transition duration-300">
                        ثبت نام
                    </button>
                </div>
                <div className="flex items-center pl-4">
                    <button className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-2 px-4 rounded transition duration-300">
                        ورود
                    </button>
                    <img src="imgs/icons/user.png" className="w-7 ml-2" alt="User Icon" />
                </div>
            </div> */}

        </>
    )
}
