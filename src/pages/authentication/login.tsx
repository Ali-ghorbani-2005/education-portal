import './login.css'

export default function Login() {
  return (
    // <div className="bg-green-300">
    //   <div className="flex"> 

    //       <div className="mt-24">
    //     <img src="imgs/bg/login-bg.png" className="w-[500px]" alt="" />
    //     </div>
    //     <div className="flex justify-end py-56 ml-56 "> 
    //       <div className=" bg-white h-80 w-96 rounded-md -mt-20 "> 
    //         <p className="text-center text-2xl mt-5">ورود</p>
    //   <div className="flex justify-center items-cente  mt-7" >
    //     <input type="text" className="bg-blue-400 w-80 h-8 rounded-full"  />
    //   </div> 

    //   <div className="mt-5 flex justify-center items-cente">
    //     <input type="text" className="bg-blue-400 w-80 h-8 rounded-full"/>
    //   </div>   

    //   <div className="flex justify-center items-center mt-20">
    //     <button className="text-xl bg-green-500 w-52 rounded-lg h-10">ورود</button>
    //   </div>

    //   </div>

    //   </div>

    //   </div>
    // </div> 


    // <div className="bg-gradient-to-br from-green-200 to-green-300 min-h-screen flex items-center justify-center">
    //   <div className="flex items-center">
    //     <img src="imgs/bg/login-bg.png" className="w-[400px] mr-10" alt="Login Background" />
    //     <div className="bg-white shadow-lg rounded-lg p-10 w-96">
    //       <h2 className="text-center text-4xl font-bold text-gray-800 mb-6">ورود به حساب کاربری</h2>
    //       <div className="mt-5">
    //         <input
    //           type="text"
    //           placeholder="نام کاربری"
    //           className="bg-gray-100 w-full h-12 rounded-full px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
    //         />
    //       </div>
    //       <div className="mt-5">
    //         <input
    //           type="password"
    //           placeholder="کلمه عبور"
    //           className="bg-gray-100 w-full h-12 rounded-full px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
    //         />
    //       </div>
    //       <div className="flex justify-center mt-8">
    //         <button className="text-xl bg-green-600 text-white w-full rounded-full h-12 hover:bg-green-700 transition duration-200">
    //           ورود
    //         </button>
    //       </div>
    //       <p className="text-center text-gray-600 mt-4">
    //         <a href="#" className="hover:underline">کلمه عبور را فراموش کرده‌اید؟</a>
    //       </p>
    //     </div>
    //   </div>
    // </div> 

    // <div className="bg-gradient-to-br from-green-200 to-green-300 min-h-screen flex items-center justify-center">
    //   <div className="flex items-center">
    //     <img src="imgs/bg/login-bg.png" className="w-[500px] mr-10" alt="Login Background" />
    //     <div className="bg-white shadow-lg rounded-lg p-8 w-96">
    //       <h2 className="text-center text-3xl font-semibold text-gray-800 mb-4">ورود به حساب کاربری</h2>
    //       <p className="text-center text-gray-600 mb-6">لطفاً اطلاعات خود را وارد کنید.</p>
    //       <div className="mt-5">
    //         <input
    //           type="text"
    //           placeholder="نام کاربری"
    //           className="bg-gray-100 w-full h-12 rounded-full px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
    //         />
    //       </div>
    //       <div className="mt-5">
    //         <input
    //           type="password"
    //           placeholder="کلمه عبور"
    //           className="bg-gray-100 w-full h-12 rounded-full px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
    //         />
    //       </div>
    //       <div className="flex justify-center mt-8">
    //         <button className="text-xl bg-green-600 text-white w-full rounded-full h-12 hover:bg-green-700 transition duration-200">
    //           ورود
    //         </button>
    //       </div>
    //       <p className="text-center text-gray-600 mt-4">
    //         <a href="#" className="hover:underline">کلمه عبور را فراموش کرده‌اید؟</a>
    //       </p>
    //     </div>
    //   </div>
    // </div> 

    <div className="relative bg-gradient-to-br from-green-200 to-green-300 min-h-screen flex items-center justify-center">
      {/* انیمیشن ستاره */}
      <div className="absolute top-10 left-20 opacity-0 animate-star">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      </div>
      {/* انیمیشن ماه */}
      <div className="absolute top-10 right-20 opacity-0 animate-moon">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-gray-200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 0 0 0 20c5.52 0 10-4.48 10-10S17.52 2 12 2zM12 4a8 8 0 0 1 1.89 15.6c-.06-.4-.17-.8-.34-1.18A7.953 7.953 0 0 1 12 4z" />
        </svg>
      </div>

      <div className="flex items-center">
        <img src="imgs/bg/login-bg.png" className="w-[500px] mr-10" alt="Login Background" />
        <div className="bg-white shadow-lg rounded-lg p-8 w-96">
          <h2 className="text-center text-3xl font-semibold text-gray-800 mb-4">ورود به حساب کاربری</h2>
          <p className="text-center text-gray-600 mb-6">لطفاً اطلاعات خود را وارد کنید.</p>
          <div className="mt-5">
            <input
              type="text"
              placeholder="نام کاربری"
              className="bg-gray-100 w-full h-12 rounded-full px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
            />
          </div>
          <div className="mt-5">
            <input
              type="password"
              placeholder="کلمه عبور"
              className="bg-gray-100 w-full h-12 rounded-full px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
            />
          </div>
          <div className="flex justify-center mt-8">
            <button className="text-xl bg-green-600 text-white w-full rounded-full h-12 hover:bg-green-700 transition duration-200">
              ورود
            </button>
          </div>
          <p className="text-center text-gray-600 mt-4">
            <a href="#" className="hover:underline">کلمه عبور را فراموش کرده‌اید؟</a>
          </p>
        </div> 

      </div> 
      
    </div>
  )
}
