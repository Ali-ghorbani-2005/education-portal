import { Outlet } from 'react-router-dom';
import LayoutAuthentication from './layoutAuthentication';
import LayoutShearch from './layoutShearch';
import CourseNavigation from '../homeComponents/CourseNavigation';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';




export default function Layout() {
    return (
        <>

            <div className=' h-20 shadow-sm shadow-gray-400'>

                <div className='flex gap-20'>
                    <div className='-mt-4 ml-4 '>

                        <LayoutAuthentication />

                    </div>  

                    <div>
                        <ThemeSwitcher/>
                    </div>

                    <div className='mt-5'>
                        <LayoutShearch />
                    </div>

                    <div className='mt-5 ml-52'>
                        <CourseNavigation />
                    </div>

                </div>
            </div>

            <div className='bg-gray-100 mt-5'>

                <main>
                    <div className=''>
                        <Outlet />
                    </div>
                </main>
            </div>

        </>
    )
}
