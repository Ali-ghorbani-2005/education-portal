import { Link } from "react-router-dom";
import { ProductCardProps } from "../../types/t";




const ProductCard: React.FC<ProductCardProps> = ({ product, price, img, teacher, id }) => {
    return (
        <>

            {/* <div className="mt-10">
                <div className="product-card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                    <div className="flex justify-center items-center p-4">
                        {img && <img src={img} alt={product} className="w-72 h-48 object-cover rounded-lg" />}
                    </div>

                    <div className="text-right mt-3 px-4">
                        <h2 className="text-lg font-lato text-gray-800">{product}</h2>
                    </div>

                    <div className="flex items-center justify-end mt-4 px-4">
                        <p className="text-gray-600 font-katibeh text-lg">{teacher}</p>
                        <img src="imgs/icons/techer.png" className="w-8 h-8 ml-2" alt="Teacher Icon" />
                    </div>

                    <div className="border-b border-gray-300 mt-5"></div>

                    <div className=" flex gap-2 mt-5 px-4">
                      <p className="text-xl font-katibeh text-gray-500">قیمت </p>   <p className="text-2xl font-lato text-green-600">  {price} </p>
                    </div>
                    
                    <div className="flex justify-center mt-6 mb-4"> 
                    <Link to={`/information/${id}`}>
                        <button className=" font-lato bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                            مشاهده
                        </button> 
                        </Link>
                    </div> 
                </div>
            </div> */}

            <div className="mt-6 mx-4">
                <div className="product-card bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                    <div className="flex justify-center items-center p-2">
                        {img && <img src={img} alt={product} className="w-56 h-32 object-cover rounded-lg" />}
                    </div>

                    <div className="text-right mt-2 px-3">
                        <h2 className="text-md font-lato text-gray-800">{product}</h2>
                    </div>

                    <div className="flex items-center justify-end mt-2 px-3">
                        <p className="text-gray-600 font-katibeh text-sm">{teacher}</p>
                        <img src="imgs/icons/techer.png" className="w-6 h-6 ml-1" alt="Teacher Icon" />
                    </div>

                    <div className="border-b border-gray-300 mt-3"></div>

                    <div className="flex gap-1 mt-3 px-3">
                        <p className="text-lg font-katibeh text-gray-500">قیمت</p>
                        <p className="text-xl font-lato text-green-600">{price}</p>
                    </div>

                    <div className="flex justify-center mt-4 mb-2">
                        <Link to={`/information/${id}`}>
                            <button className="font-lato bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors">
                                مشاهده
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard;
