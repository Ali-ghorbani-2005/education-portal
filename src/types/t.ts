export interface ProductCardProps {
    id: number;
    product: string;
    information: string;
    price: string;
    img: string;
    teacher: string;
    time: number;
    Student: number;
}



export type STRING = string;
export type NUMBER = number;
export type BOOLEAN = boolean;
export type USER = {
    id: number,
    name: string,
    lastName?: string,
    email: string,
    password: number,
    age?: number
}


export type SlickSettings = {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    [key: string]: any; // برای اضافه کردن هر گزینه‌ی دیگر
} 



export interface Product {
  id: number;
  product: string;
  teacher: string;
  img: string;
  price: number;
  Student: number;
  Free?: number;
  Sale?: number;
  off?: number;
}
