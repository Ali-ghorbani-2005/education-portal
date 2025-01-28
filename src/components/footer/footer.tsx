import Brand from "../homeComponents/brand";
import ContactButtons from "./contactButtons";


export default function Footer() {
  return (
    <div>
      <div>
              <div className="border-b flex items-center justify-between border-gray-300 h-32">
                <div>
                  <ContactButtons />
                </div>
                <div className="flex items-center">
                  <Brand />
                  <p className="text-right font-gulzar text-3xl mt-5 text-blue-600">دانش پلاس</p>
                </div>
              </div>
      
              <div className="w-80   ml-[1000px] text-right mt-20">
                <p className="text-right mr-5 text-2xl font-semibold">درباره دانش پلاس</p>
                <p className="font-lato text-[19px] text-slate-500 mt-4">
                  شروع هرچیزی سخته، ولی وقتی مسیر درستی رو انتخاب کنی، با خیال راحت و بدون استرس میتونی از مسیر لذت ببری. ما در سبزلرن، توی سفر به دنیای برنامه نویسی کنارت هستیم تا باهم رشد کنیم و از نتیجه زحمات مون لذت ببریم.
                </p>
              </div>
            </div>
    </div>
  )
}
