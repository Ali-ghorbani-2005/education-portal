import { Link } from "react-router-dom";


export default function CourseNavigation() {
    return (
        <>

            <div>  
                <Link to='/about-Us'>
                <button className="text-white text-sm font-semibold rounded-lg px-5 py-2">درباره ما</button> 
                </Link>
                <button className="text-white text-sm font-semibold  rounded-lg px-4 py-2">همه دوره ها</button>
                <button className="text-white text-sm font-semibold  rounded-lg px-4 py-2">دوره های آموزشی</button>
            </div>



        </>
    )
}
