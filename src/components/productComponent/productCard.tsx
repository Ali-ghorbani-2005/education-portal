
interface ProductCardProps {
    id: number;
    product: string;
    information: string;
    price: string;
    img: string;
    teacher: string;
    time: number;
}


const ProductCard:React.FC<ProductCardProps>  = ({product, information, price, img, teacher,time})=>{
    return(
        <div className="product-card">
        {img && <img src={img} alt={product} />}
        <h2>{product}</h2>
        <p>{information}</p>
        <p>مدت: {time} ساعت</p>
        <p>مدرس: {teacher}</p>
        <p>قیمت: {price}</p>
    </div>
    )
} 

export default ProductCard;
