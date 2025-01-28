import ContactButtons from "./contactButtons";


export default function Footer() {
  return (
    <>
    
    <div>
        <div>
         
         <div >
            <p className="text-right">دانش پلاس</p>
         </div>  

         <div>
       <ContactButtons/>
         </div>  
        </div> 

        <div>
            <div className="w-72 ml-[1000px] text-right mt-20">
                <p className="text-right mr-5 text-2xl font-semibold ">درباره دانش پلاس</p> 
                <p className="font-medium text-sm text-slate-500 mt-4">شروع هرچیزی سخته، ولی وقتی مسیر درستی رو انتخاب کنی، با خیال راحت و بدون استرس میتونی از مسیر لذت ببری. ما در سبزلرن، توی سفر به دنیای برنامه نویسی کنارت هستیم تا باهم رشد کنیم و از نتیجه زحمات مون لذت ببریم.</p>
            </div>
        </div>
    </div>
    
    </>
  )
}
