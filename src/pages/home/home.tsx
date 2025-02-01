import Communication from "../../components/Communication/Communication";
import HomeHeder from "../../components/homeComponents/homeHeder";
import FetchProduct from "../../components/productComponent/fetchProduct";


export default function Home() {
  return ( 
    <>
    <div>
      <HomeHeder/> 
    </div>  
    <div>

      <Communication/>
      
      </div>  

      <div className="bg-slate-100">
        <FetchProduct/>
      </div>
    </>

   
  )
}
