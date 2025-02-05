import { Link } from "react-router-dom";
import { useState } from 'react';


export default function CourseNavigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [timeoutId, setTimeoutId] = useState<number | null>(null);

    const handleMouseEnter = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        const id = setTimeout(() => {
            setIsOpen(false);
        }, 100);
        setTimeoutId(id);
    };

    return (
        <>
            <div>
                <Link to='/about-Us'>
                    <button className="  font-lato text-lg  rounded-lg px-5 py-2">درباره ما</button>
                </Link>
                <button className="  font-lato rounded-lg text-lg  px-4 py-2">همه دوره ها</button>

                <div className="relative inline-block text-left">
                    <div>
                        <button
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="  font-lato text-lg rounded-lg px-4 py-2"
                        >
                            دوره های آموزشی
                        </button>
                    </div>

                    {isOpen && (
                        <div
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                        >
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    دکمه ۱
                                </button>
                                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    دکمه ۲
                                </button>
                                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    دکمه ۳
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

          
        </>
    );
}
