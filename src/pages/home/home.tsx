// import Communication from "../../components/Communication/Communication";
import Footer from "../../components/footer/footer";
import HomeHeder from "../../components/homeComponents/homeHeder";
import LearningPathComponent from "../../components/learningPathComponent/learningPathComponent";
import LearningPathSection from "../../components/learningPathSection/learningPathSection";
import FetchProduct from "../../components/productComponent/fetchProduct";
import SliderProduct from "../../components/productComponent/sliderProduct";
import SliderImg from "../../components/slider/slider";


export default function Home() {
  return ( 
    <> 
    <div className="bg-gray-100">
    <div>
      <HomeHeder/> 
    </div>  
    <div>

      {/* <Communication/> */}
      
      </div> 

      <div>

        <SliderImg/>
        
        </div>  

      <div className="bg-slate-100 mt-12"> 
        
        <FetchProduct/>  
        <div className="mt-28">
        <LearningPathSection/> 
        </div> 

        <div className="mt-16">
          <SliderProduct/>
        </div>
      </div>   

      <div className="mt-10">
        <LearningPathComponent/>
      </div>

      </div>  

     
      <div className=" ">
        <Footer/>
      </div> 

    </>

   
  )
}
