import React, { useState, useEffect } from "react";
import "./message.css";
import { Link } from "react-router-dom";

const MessageBox: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const user = sessionStorage.getItem("user"); // بررسی ورود کاربر
        if (!user) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000); // نمایش پیام بعد از ۱ ثانیه
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white w-96 p-6 rounded-lg shadow-2xl relative transform transition-transform duration-300 animate-slide-up">
                        <p className="mb-4 text-center text-2xl font-katibeh text-gray-800">
                            به وب‌سایت دانش پلاس خوش آمدید
                        </p>

                        <p className="mb-5 text-center font-katibeh text-lg text-gray-600">
                            لطفاً ابتدا وارد شوید
                        </p>

                        <button
                            onClick={handleClose}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
                        >
                            ×
                        </button>

                        <div className="flex space-x-2 justify-center items-center">
                            <Link to="/login">
                                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200">
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

