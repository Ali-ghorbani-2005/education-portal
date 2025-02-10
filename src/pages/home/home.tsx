import Communication from "../../components/Communication/Communication";
import Footer from "../../components/footer/footer";
import HomeHeder from "../../components/homeComponents/homeHeder";
import LearningPathSection from "../../components/learningPathSection/learningPathSection";
import FetchProduct from "../../components/productComponent/fetchProduct";
import SliderImg from "../../components/slider/slider";


export default function Home() {
  return ( 
    <>
    <div>
      <HomeHeder/> 
    </div>  
    <div>

      <Communication/>
      
      </div> 

      <div>

        <SliderImg/>
        
        </div>  

      <div className="bg-slate-100">
        <FetchProduct/>  
        <div className="mt-5">
        <LearningPathSection/> 
        </div>
      </div>  

     
      <div className=" ">
        <Footer/>
      </div> 

    </>

   
  )
}
