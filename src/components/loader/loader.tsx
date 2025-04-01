
import './loader.css'

export default function Loader() {
    return (
        <>


            <div className='flex justify-center items-center mt-20'>
                <p className="font-gulzar text-7xl text-blue-500">دانش پلاس</p>
            </div>

            <div className="loader">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div> 
                
                <p className='text-3xl font-lato'>در حال بارگذاری</p>
            </div>
        </>
    )
}
