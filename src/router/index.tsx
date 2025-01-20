import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import AllProduct from '../pages/product/allProduct';
import Product from '../pages/product/product';
import Login from '../pages/authentication/login';
import SignUp from '../pages/authentication/signUp';




export default function Index() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/allProduct' element={<AllProduct />} />
                <Route path='/product' element={<Product />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signUp' element={<SignUp />} />



            </Routes>


        </BrowserRouter>
    )
}
