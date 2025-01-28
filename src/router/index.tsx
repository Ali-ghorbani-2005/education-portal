import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import AllProduct from '../pages/product/allProduct';
import Product from '../pages/product/product';
import Login from '../pages/authentication/login';
import SignUp from '../pages/authentication/signUp';
import AboutUs from '../pages/about-us/aboutUs';
import Layout from '../components/layout/Layout';
import Loader from '../components/loader/loader';




export default function Index() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Home />} /> 
                <Route element={<Layout/>}>
                <Route path='/allProduct' element={<AllProduct />} />
                <Route path='/product' element={<Product />} />
                <Route path='/about-Us' element={<AboutUs/>}/> 
                </Route> 

                <Route path='/login' element={<Login />} />
                <Route path='/signUp' element={<SignUp />} />  
                <Route path='/Loader' element={<Loader />} />



            </Routes>


        </BrowserRouter>
    )
}
