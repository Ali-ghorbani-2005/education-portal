

import React, { useState, useEffect } from 'react';
import './message.css'
import { Link } from 'react-router-dom';
const MessageBox: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000); // ۱ ثانیه

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative transform transition-transform duration-300 animate-slide-up">
                        <p className="mb-4 text-center text-xl font-semibold">به وب سایت دانش پلاس خوش آمدید </p>

                        <p className="mb-5 text-center text-lg font-semibold ">لطفا ابتدا وارد شوید </p>

                        <button
                            onClick={handleClose}
                            className="absolute top-2 right-2 text-xl"
                        >
                            ×
                        </button>
                        <div className="flex space-x-2 justify-center items-center">
                            <Link to='/login'>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    ورود
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MessageBox;
