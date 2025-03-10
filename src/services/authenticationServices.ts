// import { STRING } from "../types/t";

import { STRING } from "../types/t";

const Api_Url = 'http://localhost:3000/user' ; 

export const loginUser = async (name:STRING , password:STRING) =>{
    try{
        const response = await fetch(Api_Url) ; 
        const data = await response.json(); 

        const user = (data as Array<{name:STRING; password:STRING;}> ).find(user=>user.name === name && user.password === password); 
        if(user){
            return{success:true , message:"ورود موفق"};
        }else{
            return{success:false , message:"ورود ناموفق"};
        }
    } catch (error) {
        console.error('Error:', error);
        return { success: false, message: 'خطا در برقراری ارتباط با سرور.' };
    }
}  



 

// userServices.ts
export const submitSignUp = async (userData: { name: string; age: string; phone: string; password: string }) => {
    try {
      const response = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error('مشکلی در ارسال اطلاعات به سرور به وجود آمد');
      }
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  
  


