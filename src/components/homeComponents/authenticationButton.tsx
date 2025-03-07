import { Link } from "react-router-dom";


export default function AuthenticationButton() {
    return (
        <>
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
        </>
    )
}
