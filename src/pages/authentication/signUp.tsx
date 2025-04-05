import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { submitSignUp } from '../../services/authenticationServices'; 
import { motion } from "framer-motion";

interface FormValues {
  name: string;
  age: string; // تغییر به number
  phone: string;
  password: string;
}

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      age: '', // مقدار دهی اولیه به number
      phone: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('فیلد نام الزامی است'),
      age: Yup.number()
        .required('فیلد سن الزامی است')
        .positive('سن باید مثبت باشد')
        .integer('سن باید عدد صحیح باشد'),
      phone: Yup.string()
        .required('فیلد شماره موبایل الزامی است')
        .matches(/^\d{10}$/, 'شماره موبایل باید ۱۰ رقمی باشد'),
      password: Yup.string()
        .required('فیلد رمز عبور الزامی است')
        .min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد'),
    }),
    onSubmit: async (values) => {
      try {
        await submitSignUp(values);
        navigate('/login');
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });

  return ( 
 
    <div className="min-h-screen bg-blue-400 flex items-center justify-center p-4"> 
   <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="product-detail rounded-lg p-6"
  >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-4xl w-full bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="hidden md:flex justify-center">
          <img src="imgs/bg/singup-bg.png" className="w-[600px]" alt="Signup Background" />
        </div>

        <div className="p-10 w-full">
          <p className="text-3xl font-semibold text-center text-blue-600 mb-6">ثبت نام</p>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {[
              { name: 'name', label: 'نام', type: 'text' },
              { name: 'age', label: 'سن', type: 'number' },
              { name: 'phone', label: 'شماره موبایل', type: 'tel' },
              { name: 'password', label: 'رمز عبور', type: 'password' },
            ].map(({ name, label, type }) => (
              <div className="relative" key={name}>
                <input
                  type={type}
                  name={name}
                  placeholder=" "
                  value={formik.values[name as keyof FormValues] as string}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full h-12 bg-blue-50 border border-blue-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                />
                <label
                  htmlFor={name}
                  className={`absolute left-4 top-3 text-sm text-gray-500 transition-all duration-200 transform -translate-y-1/2 bg-white px-1 pointer-events-none ${formik.values[name as keyof FormValues] ? '-translate-y-4 text-blue-600' : ''}`}
                >
                  {label}
                </label>
                {formik.errors[name as keyof FormValues] && formik.touched[name as keyof FormValues] && (
                  <div className="text-red-500 font-semibold text-xs mt-1">{formik.errors[name as keyof FormValues]}</div>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition duration-200 transform hover:scale-105"
            >
              ثبت نام
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            قبلاً ثبت‌نام کرده‌اید؟
            <a href="/login" className="text-blue-600 hover:underline"> ورود به حساب کاربری</a>
          </p>
        </div>
      </div> 
      </motion.div>
    </div> 
    
  );
};

export default SignUp;