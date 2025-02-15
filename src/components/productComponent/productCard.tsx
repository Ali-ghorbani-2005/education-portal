import { Link } from "react-router-dom";
import { ProductCardProps } from "../../types/t";

const ProductCard: React.FC<ProductCardProps> = ({ product, price, img, teacher, id, Student }) => {
    return (
        <>
            <div className="mt-4 mx-2">
                <div className="product-card bg-white shadow-md rounded-lg w-72 overflow-hidden transition-transform transform hover:scale-105">
                    <div className="flex justify-center items-center p-2">
                        {img && <img src={img} alt={product} className="w-80 h-32 object-cover rounded-lg" />}
                    </div>

                    <div className="text-right mt-2 px-2">
                        <h2 className="text-sm font-mono text-gray-800 font-semibold">{product}</h2>
                    </div>

                    <div className="flex items-center justify-end mt-1 px-2">
                        <p className="text-gray-600 font-katibeh text-xs">{teacher}</p>
                        <img src="imgs/icons/techer.png" className="w-5 h-5 ml-1" alt="Teacher Icon" />
                    </div>

                    <div className="border-b border-gray-300 my-2"></div>

                    <div className="flex gap-1 mt-1 px-2">
                        <p className="text-sm font-katibeh text-gray-500">قیمت:</p>
                        <p className="text-lg font-lato text-green-600">{price}</p>
                        <div className="flex ml-24 gap-1">
                            <p className="mt-1 text-gray-500">{Student}</p>
                            <img src="/imgs/icons/users-3.png" alt="" />

                        </div>
                    </div>

                    <div className="flex justify-center mt-2 mb-2">
                        <Link to={`/information/${id}`}>
                            <button className="font-bold w-64 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors">
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
