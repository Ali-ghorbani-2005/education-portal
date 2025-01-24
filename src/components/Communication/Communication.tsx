import { useState } from 'react';

export default function Communication() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div>
                <div>
                    <button onClick={openModal} className='bg-blue-500 rounded-full w-12 h-12 flex justify-center items-center fixed'><img src="imgs/icons/message.png" className='w-10 ' alt="" /></button>
                </div>
                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-lg font-bold mb-4">این یک کادر است!</h2>
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                            >
                                بستن کادر
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
