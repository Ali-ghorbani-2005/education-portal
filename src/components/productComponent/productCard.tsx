import { Link } from "react-router-dom";
import { ProductCardProps } from "../../types/t";




const ProductCard: React.FC<ProductCardProps> = ({ product,  price, img, teacher,  id }) => {
    return (
        <>

            <div className="mt-10">
                <div className="product-card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                    <div className="flex justify-center items-center p-4">
                        {img && <img src={img} alt={product} className="w-72 h-48 object-cover rounded-lg" />}
                    </div>

                    <div className="text-right mt-3 px-4">
                        <h2 className="text-lg font-semibold text-gray-800">{product}</h2>
                    </div>

                    <div className="flex items-center justify-end mt-4 px-4">
                        <p className="text-gray-600 font-medium">{teacher}</p>
                        <img src="imgs/icons/techer.png" className="w-8 h-8 ml-2" alt="Teacher Icon" />
                    </div>

                    <div className="border-b border-gray-300 mt-5"></div>

                    <div className="mt-5 px-4">
                        <p className="text-lg font-bold text-gray-800">قیمت: {price} تومان</p>
                    </div>
                    
                    <div className="flex justify-center mt-6 mb-4"> 
                    <Link to={`/information/${id}`}>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                            جزیات
                        </button> 
                        </Link>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default ProductCard;
