// import './login.css';
// import { useForm } from 'react-hook-form';
// import { loginUser } from '../../services/authenticationServices';
// import { useNavigate } from 'react-router-dom';
// import { useUser } from '../../components/userProfile/context';
// import Brand from '../../components/homeComponents/brand'; 



// interface FormData {
//   name: string;
//   password: string;
// }

// export default function Login() {

//   const { handleSubmit, register, setError } = useForm<FormData>();
//   const navigate = useNavigate();
//   const { setUser } = useUser();

//   const onSubmit = async (data: FormData) => {
//     const result = await loginUser(data.name, data.password);

//     if (result.success) {
//       setUser({ name: data.name }); // ذخیره اطلاعات کاربر
//       navigate('/'); // هدایت به صفحه خانه
//     } else {
//       setError('name', { type: 'manual', message: result.message });
//       setError('password', { type: 'manual', message: result.message });
//     }
//   };

//   return (

//     <div className="relative bg-gradient-to-br from-green-200 to-green-300 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      
//       {/* انیمیشن ستاره */}
//       <div className="absolute top-10 left-10 sm:left-20 opacity-0 animate-star">
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
//         </svg>
//       </div>

//       {/* انیمیشن ماه */}
//       <div className="absolute top-10 right-10 sm:right-20 opacity-0 animate-moon">
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16 text-gray-200" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M12 2a10 10 0 0 0 0 20c5.52 0 10-4.48 10-10S17.52 2 12 2zM12 4a8 8 0 0 1 1.89 15.6c-.06-.4-.17-.8-.34-1.18A7.953 7.953 0 0 1 12 4z" />
//         </svg>
//       </div>
//       <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row items-center gap-8 w-full max-w-4xl">
//         <img src="imgs/bg/login-bg.png" className="w-60 sm:hidden md:block md:w-[500px]" alt="Login Background" />
//         <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-sm">
//           <h2 className="text-center text-2xl sm:text-3xl  text-gray-800 mb-4"><Brand /></h2>
//           <p className="text-center text-gray-600 mb-6">ورود به حساب کاربری</p>
//           <div className="mt-4">
//             <input
//               type="text"
//               placeholder="نام کاربری"
//               {...register('name', { required: 'این فیلد الزامی است' })}
//               className="bg-gray-100 w-full h-12 rounded-full px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
//             />
//           </div>
//           <div className="mt-4">
//             <input
//               type="password"
//               placeholder="کلمه عبور"
//               {...register('password', { required: 'این فیلد الزامی است' })}
//               className="bg-gray-100 w-full h-12 rounded-full px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
//             />
//           </div>
//           <div className="flex justify-center mt-6">
//             <button type='submit' className="text-lg sm:text-xl bg-green-600 text-white w-full rounded-full h-12 hover:bg-green-700 transition duration-200">
//               ورود
//             </button>
//           </div>
//           <p className="text-center text-gray-600 mt-4">
//             <a href="#" className="hover:underline">کلمه عبور را فراموش کرده‌اید؟</a>
//           </p>
//         </div>
//       </form>
//     </div> 
//   );
// }  





import './login.css';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../services/authenticationServices';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../components/userProfile/context';
import Brand from '../../components/homeComponents/brand';

interface FormData {
  name: string;
  password: string;
}

export default function Login() {
  const { handleSubmit, register, setError } = useForm<FormData>();
  const navigate = useNavigate();
  const { setUser } = useUser();

  const onSubmit = async (data: FormData) => {
    const result = await loginUser(data.name, data.password);

    if (result.success) {
      setUser({ name: data.name }); // ذخیره اطلاعات کاربر
      navigate('/'); // هدایت به صفحه خانه
    } else {
      setError('name', { type: 'manual', message: result.message });
      setError('password', { type: 'manual', message: result.message });
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-green-200 to-green-300 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">

      {/* انیمیشن ستاره */}
      <div className="absolute top-10 left-10 sm:left-20 opacity-0 animate-star">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      </div>

      {/* انیمیشن ماه */}
      <div className="absolute top-10 right-10 sm:right-20 opacity-0 animate-moon">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16 text-gray-200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 0 0 0 20c5.52 0 10-4.48 10-10S17.52 2 12 2zM12 4a8 8 0 0 1 1.89 15.6c-.06-.4-.17-.8-.34-1.18A7.953 7.953 0 0 1 12 4z" />
        </svg>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row items-center gap-8 w-full max-w-4xl animate-fadeUp">
        <img src="imgs/bg/login-bg.png" className="w-60 sm:hidden md:block md:w-[500px]" alt="Login Background" />
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-sm">
          <h2 className="text-center text-2xl sm:text-3xl text-gray-800 mb-4"><Brand /></h2>
          <p className="text-center text-gray-600 mb-6">ورود به حساب کاربری</p>
          <div className="mt-4">
            <input
              type="text"
              placeholder="نام کاربری"
              {...register('name', { required: 'این فیلد الزامی است' })}
              className="bg-gray-100 w-full h-12 rounded-full px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
            />
          </div>
          <div className="mt-4">
            <input
              type="password"
              placeholder="کلمه عبور"
              {...register('password', { required: 'این فیلد الزامی است' })}
              className="bg-gray-100 w-full h-12 rounded-full px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
            />
          </div>
          <div className="flex justify-center mt-6">
            <button type='submit' className="text-lg sm:text-xl bg-green-600 text-white w-full rounded-full h-12 hover:bg-green-700 transition duration-200">
              ورود
            </button>
          </div>
          <p className="text-center text-gray-600 mt-4">
            <a href="#" className="hover:underline">کلمه عبور را فراموش کرده‌اید؟</a>
          </p>
        </div>
      </form>
    </div>
  );
}
