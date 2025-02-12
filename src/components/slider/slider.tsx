import { SlickSettings } from "../../types/t";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

export default function SliderImg() {
    const settings: SlickSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const imgs = [
        <div key={1}>
            <img src="imgs/slider/slider-1.jpg" alt="Slider 1" className=" rounded-xl"  />
        </div>,
        <div key={2}>
            <img src="imgs/slider/slider-2.jpg" alt="Slider 2" className=" rounded-xl" />
        </div>,
        <div key={3}>
            <img src="imgs/slider/slider-3.jpg" alt="Slider 3" className=" rounded-xl" />
        </div>,
        <div key={4}>
            <img src="imgs/slider/slider-4.jpg" alt="Slider 4" className=" rounded-xl" />
        </div>,
    ];

    return ( 
        <div className="ml-10">
        <div className="mt-24">
            <Slider {...settings}>
                {imgs.map((img, index) => (
                    <div key={index}>
                        {img}
                    </div>
                ))}
            </Slider>
        </div> 
        </div>
    );
}
