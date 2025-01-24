

export default function LayoutShearch() {
  return (
  <>

  <div> 

  <div className="flex w-[300px] h-12 bg-gray-200 rounded-full">
                <button className="bg-green-500 w-10 h-8 rounded-full mt-2  ml-5 hover:bg-green-600    ">
                    <img src="imgs/icons/search.png" alt="" className="w-6 ml-1 " />
                </button>
                <input type="text"
                    className="w-[280px] bg-gray-200 h-10 rounded-full text-right focus:outline-none font-extralight text-base"
                    placeholder="...جستو جو در بین دوره ها"
                />

            </div>

  </div>
  
  </>
  )
}
