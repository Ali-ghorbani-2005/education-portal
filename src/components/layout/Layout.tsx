import { Outlet } from 'react-router-dom';
import LayoutAuthentication from './layoutAuthentication';




export default function Layout() {
    return (
        <>

            <div> 


               <div className='-mt-4 ml-4'>
                
                <LayoutAuthentication/>

               </div>



                <div>

                    <main>
                        <div className=''>
                            <Outlet />
                        </div>
                    </main>
                </div>

            </div>

        </>
    )
}
