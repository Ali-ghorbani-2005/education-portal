import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  name: string;
  age: string; // یا number
  phone: string;
}

const SignUp: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      age: '',
      phone: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('فیلد نام الزامی است'),
      age: Yup.number().required('فیلد سن الزامی است').positive('سن باید مثبت باشد').integer('سن باید عدد صحیح باشد'),
      phone: Yup.string().required('فیلد شماره موبایل الزامی است').matches(/^\d{10}$/, 'شماره موبایل باید ۱۰ رقمی باشد'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      {/* <div className='flex bg-blue-400 min-h-screen'>
        <div className='mt-10'>
          <img src="imgs/bg/singup-bg.png" className='w-[600px]' alt="Signup Background" />
        </div>

        <div className='flex justify-center items-center flex-1'>
          <div className='bg-white w-96 shadow-lg rounded-lg p-8 h-96 mt-5 mr-10 transition-transform transform hover:scale-105'> 
            <p className='-mt-2 text-2xl text-center'>ثبت  نام </p>
            <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-4">
              {[
                { name: "name", label: "نام", type: "text" },
                { name: "age", label: "سن", type: "number" },
                { name: "phone", label: "شماره موبایل", type: "tel" },
              ].map(({ name, label, type }) => (
                <div className='relative' key={name}>
                  <input
                    type={type}
                    name={name}
                    placeholder=" "
                    value={formik.values[name as keyof FormValues]} // تغییر این خط
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="bg-blue-100 w-full h-10 mt-3 rounded-full px-4 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  />
                  <label
                    htmlFor={name}
                    className="absolute left-4 top-2 text-sm text-gray-500 transition-all transform -translate-y-1/2 bg-white px-1"
                  >
                    {label}
                  </label>
                  {formik.errors[name as keyof FormValues] && formik.touched[name as keyof FormValues] && (
                    <div className="text-red-500 font-semibold text-xs">{formik.errors[name as keyof FormValues]}</div>
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-200 transform hover:scale-105"
              >
                ثبت نام
              </button>
            </form>
          </div>
        </div>
      </div> */}



      {/* <div className='flex bg-blue-400 min-h-screen'>
        <div className='hidden md:block mt-10'>
          <img src="imgs/bg/singup-bg.png" className='w-[600px]' alt="Signup Background" />
        </div>

        <div className='flex justify-center items-center flex-1'>
          <div className='bg-white w-96 shadow-lg rounded-lg p-10 h-auto mt-5 mr-10 transition-transform transform hover:scale-105'>
            <p className='text-3xl font-semibold text-center text-blue-600'>ثبت نام</p>
            <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-6">
              {[
                { name: "name", label: "نام", type: "text" },
                { name: "age", label: "سن", type: "number" },
                { name: "phone", label: "شماره موبایل", type: "tel" },
              ].map(({ name, label, type }) => (
                <div className='relative' key={name}>
                  <input
                    type={type}
                    name={name}
                    placeholder=" "
                    value={formik.values[name as keyof FormValues]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="bg-blue-100 w-full h-12 rounded-lg px-4 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  />
                  <label
                    htmlFor={name}
                    className="absolute left-4 top-2 text-sm text-gray-500 transition-all transform -translate-y-1/2 bg-white px-1"
                  >
                    {label}
                  </label>
                  {formik.errors[name as keyof FormValues] && formik.touched[name as keyof FormValues] && (
                    <div className="text-red-500 font-semibold text-xs">{formik.errors[name as keyof FormValues]}</div>
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-lg px-6 py-3 hover:bg-blue-700 transition duration-200 transform hover:scale-105"
              >
                ثبت نام
              </button>
            </form>
          </div>
        </div>
      </div> */}

<div className='flex bg-blue-400 min-h-screen'>
    <div className='hidden md:block mt-10'>
        <img src="imgs/bg/singup-bg.png" className='w-[600px]' alt="Signup Background" />
    </div>

    <div className='flex justify-center items-center flex-1'>
        <div className='bg-white w-96 shadow-lg rounded-lg p-10 h-auto mt-5 mr-10 transition-transform transform hover:scale-105'> 
            <p className='text-3xl font-semibold text-center text-blue-600 mb-4'>ثبت نام</p>
            <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-6">
                {[
                    { name: "name", label: "نام", type: "text" },
                    { name: "age", label: "سن", type: "number" },
                    { name: "phone", label: "شماره موبایل", type: "tel" },
                ].map(({ name, label, type }) => (
                    <div className='relative' key={name}>
                        <input
                            type={type}
                            name={name}
                            placeholder=" "
                            value={formik.values[name as keyof FormValues]}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="bg-blue-100 w-full h-12 rounded-lg px-4 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        />
                        <label
                            htmlFor={name}
                            className={`absolute left-4 top-2 text-sm text-gray-500 transition-all duration-200 transform -translate-y-1/2 bg-white px-1 pointer-events-none ${formik.values[name] ? '-translate-y-4 text-blue-600' : ''}`}
                        >
                            {label}
                        </label>
                        {formik.errors[name as keyof FormValues] && formik.touched[name as keyof FormValues] && (
                            <div className="text-red-500 font-semibold text-xs">{formik.errors[name as keyof FormValues]}</div>
                        )}
                    </div>
                ))}
                <button
                    type="submit"
                    className="bg-blue-600 text-white rounded-lg px-6 py-3 hover:bg-blue-700 transition duration-200 transform hover:scale-105"
                >
                    ثبت نام
                </button>
            </form>
            <p className='mt-4 text-center text-gray-600'>
                قبلاً ثبت نام کرده‌اید؟ 
                <a href="/login" className='text-blue-600 hover:underline'> ورود به حساب کاربری</a>
            </p>
        </div>
    </div>
</div>
    </>
  );
};

export default SignUp;