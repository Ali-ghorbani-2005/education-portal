import { Outlet } from 'react-router-dom';
import LayoutAuthentication from './layoutAuthentication';
import LayoutShearch from './layoutShearch';
import CourseNavigation from '../homeComponents/CourseNavigation';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import Footer from '../footer/footer';
import Brand from '../homeComponents/brand';
import CartButton from '../cartButton/cartButton';





export default function Layout() {
    return (
        <>

            <div className=' h-20 shadow-sm shadow-gray-400 dark:bg-slate-800'>

                <div className='flex gap-20'>
                    <div className='-mt-4 ml-4 '>

                        <LayoutAuthentication />

                    </div>  
                  
                  <div className='flex '> 
                  <div>
                        <CartButton/>
                    </div>  

                    <div>
                        <ThemeSwitcher/>
                    </div> 

                    </div>

                    <div className='mt-5'>
                        <LayoutShearch />
                    </div>

                    <div className='flex mt-5 ml-20'>
                        <CourseNavigation /> 
                         <Brand/>
                    </div>

                </div>
            </div>

            <div className='bg-gray-200  dark:bg-slate-900  h-full'>

                <main >
                    <div className=''>
                        <Outlet />
                    </div>
                </main> 
               
            </div> 

            <div className=''>
               <Footer/>  
                .
                </div> 

        </>
    )
}
