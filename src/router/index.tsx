import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import AllProduct from '../pages/product/allProduct';
import Product from '../pages/product/product';
import Login from '../pages/authentication/login';
import SignUp from '../pages/authentication/signUp';
import AboutUs from '../pages/about-us/aboutUs';
import Layout from '../components/layout/Layout';
import Loader from '../components/loader/loader';
import Information from '../pages/product/informationProduct';
import UserProfile from '../components/userProfile/userProfile';
import Roadmap from '../pages/roadmap/roadmap';
import SearchResults from '../components/searchResults/searchResults';

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} /> 
                <Route element={<Layout />}>
                    <Route path='/allProduct' element={<AllProduct />} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/about-us' element={<AboutUs />} /> 
                    <Route path='/information/:id' element={<Information />} /> 
                    <Route path='/Search-Results' element={<SearchResults />} />  
                    <Route path='/roadmap' element={<Roadmap />} /> 
                </Route> 

                <Route path='/login' element={<Login />} />
                <Route path='/signUp' element={<SignUp />} />  
                <Route path='/loader' element={<Loader />} /> 
                <Route path='/UserProfile' element={<UserProfile />} /> 
            </Routes>
        </BrowserRouter>
    );
}
