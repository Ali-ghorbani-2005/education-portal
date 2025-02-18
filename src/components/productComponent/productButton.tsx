import { Link } from "react-router-dom";


export default function ProductButton() {
  return (
   <>

<div className="ml-20"> 
    <Link to='/allProduct'>
    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
        همه دوره‌ها
    </button> 
    </Link>
</div>
   
   </>
  )
}
