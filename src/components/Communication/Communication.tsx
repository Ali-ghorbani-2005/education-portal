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
            <div className='-mt-20 ml-5'>
                <div>
                    <button onClick={openModal} className='bg-blue-500 rounded-full w-12 h-12 flex justify-center items-center fixed'><img src="imgs/icons/message.png" className='w-10 ' alt="" /></button>
                </div>
                {isOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white w-96 h-64 rounded-lg shadow-lg p-6">
                      <div className="flex justify-between items-center mb-4">
                          <p className='text-blue-500 text-2xl font-bold'>ارتباط با ما</p>
                          <button
                              onClick={closeModal}
                              className="text-gray-500 hover:text-gray-800"
                          >
                              x
                          </button>
                      </div>
              
                      <div className='mt-2'>
                          <input 
                              type="text" 
                              placeholder="پیام خود را اینجا بنویسید..." 
                              className='border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
                          />
                      </div>
              
                      <div className='mt-4'>
                          <button
                              className="bg-blue-500 text-white font-semibold rounded-lg p-2 w-full hover:bg-blue-600 transition duration-200"
                          >
                              ارسال پیام
                          </button>
                      </div>
                  </div>
              </div>
                )}
            </div>
        </>
    );
}
