import { Link } from "react-router-dom";


export default function SiderbarAuthentication() {
  return (
    <>
    <div>
    <Link to='/login'>
          <li className="p-2 text-gray-700 dark:text-white hover:bg-gray-700 rounded">ورود</li> 
          </Link>  

          <Link to='/signUp'>
          <li className="p-2 text-gray-700 dark:text-white hover:bg-gray-700 rounded">ثبت نام</li> 
          </Link> 
          </div>
    </>
  )
}
