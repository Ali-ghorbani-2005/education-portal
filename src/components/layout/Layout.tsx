import { Outlet} from 'react-router-dom';

export default function Layout() {
    return (
        <>

            <div>

             <button>aaasamskamk</button>


                <main>
                    <div className='mt-52'>
                        <Outlet />
                    </div>
                </main>

            </div>

        </>
    )
}
