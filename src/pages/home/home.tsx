// import Communication from "../../components/Communication/Communication";
import Footer from "../../components/footer/footer";
import HomeHeder from "../../components/homeComponents/homeHeder";
import LearningPathComponent from "../../components/learningPathComponent/learningPathComponent";
import LearningPathSection from "../../components/learningPathSection/learningPathSection";
import FetchProduct from "../../components/productComponent/fetchProduct";
import ProductButton from "../../components/productComponent/productButton";
import SliderProduct from "../../components/productComponent/sliderProduct";
import SliderImg from "../../components/slider/slider";


export default function Home() {
  return ( 
    <> 
    <div className="bg-gray-100 dark:bg-slate-900 ">
    <div>
      <HomeHeder/> 
    </div>  
    <div>

      
      </div> 

      <div>

        <SliderImg/>
        
        </div>  

      <div className="bg-slate-100 dark:bg-slate-900 mt-12"> 
        <div>
          <ProductButton/>
        </div>
        <FetchProduct/>  
        <div className="mt-28">
        <LearningPathSection/> 
        </div> 

        <div className="mt-16 ">
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
