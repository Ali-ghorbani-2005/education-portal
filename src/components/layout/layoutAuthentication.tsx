import { Link } from "react-router-dom";


export default function LayoutAuthentication() {
    return (
        <>
            {/* <div className="flex justify-center mt-10">
                <div className="bg-blue-600 rounded-lg flex shadow-lg"> 
                    <Link to='/signUp'>
                    <button className="text-white font-semibold py-2 px-6 rounded-l-lg hover:bg-blue-500 transition duration-200">
                        ثبت نام
                    </button> 
                    </Link> 
                    <Link to='/login'>
                    <button className="text-white font-semibold py-2 px-6 rounded-r-lg hover:bg-blue-500 transition duration-200">
                        ورود
                    </button> 
                    </Link>
                </div>
            </div> */}

            <div className="flex justify-center mt-10">
                <div className="flex rounded-xl overflow-hidden shadow-md border border-blue-600">
                    <Link to="/signUp">
                        <button className="bg-blue-600 text-white font-medium py-2 px-6 hover:bg-blue-500 active:scale-95 transition-all duration-200">
                            ثبت نام
                        </button>
                    </Link>
                    <Link to="/login">
                        <button className="bg-blue-600 text-white font-medium py-2 px-6 border-r border-blue-400 hover:bg-blue-500 active:scale-95 transition-all duration-200">
                            ورود
                        </button>
                    </Link>
                </div>
            </div>


        </>
    )
}
