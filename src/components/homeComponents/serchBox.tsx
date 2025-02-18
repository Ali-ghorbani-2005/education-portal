

// export default function SerchBox() {
//     return (
//         <>

//             <div className="flex w-[780px] h-16 bg-white rounded-full">
//                 <button className="bg-green-500 w-11 h-11 rounded-full mt-2  ml-7 hover:bg-green-600    ">
//                     <img src="imgs/icons/search.png" alt="" className="w-6 ml-2 " />
//                 </button>
//                 <input type="text"
//                     className="w-[700px] h-16 rounded-full text-right focus:outline-none font-extralight text-lg"
//                     placeholder="...جستو جو در بین دوره ها"
//                 />

//             </div>

//         </>
//     )
// } 







// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function SearchBox() {
//     const [query, setQuery] = useState('');
//     const navigate = useNavigate();

//     const handleSearch = () => {
//         if (query) {
//             navigate(`/search-results?query=${encodeURIComponent(query)}`);
//         }
//     };

//     return (
//         <div className="flex w-[780px] h-16 bg-white rounded-full">
//             <button
//                 className="bg-green-500 w-11 h-11 rounded-full mt-2 ml-7 hover:bg-green-600"
//                 onClick={handleSearch}
//             >
//                 <img src="imgs/icons/search.png" alt="" className="w-6 ml-2" />
//             </button>
//             <input
//                 type="text"
//                 className="w-[700px] h-16 rounded-full text-right focus:outline-none font-extralight text-lg"
//                 placeholder="...جستو جو در بین دوره ها"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//             />
//         </div>
//     );
// } 






// import  { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function SearchBox() {
//     const [query, setQuery] = useState('');
//     const navigate = useNavigate();

//     const handleSearch = () => {
//         if (query) {
//             navigate(`/search-results?query=${encodeURIComponent(query)}`);
//         }
//     };

//     return (
//         <div className="flex w-[780px] h-16 bg-white rounded-full">
//             <button 
//                 className="bg-green-500 w-11 h-11 rounded-full mt-2 ml-7 hover:bg-green-600" 
//                 onClick={handleSearch}
//             >
//                 <img src="imgs/icons/search.png" alt="" className="w-6 ml-2" />
//             </button>
//             <input
//                 type="text"
//                 className="w-[700px] h-16 rounded-full text-right focus:outline-none font-extralight text-lg"
//                 placeholder="...جستو جو در بین دوره ها"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//             />
//         </div>
//     );
// } 







import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBox() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (query) {
            navigate(`/search-results?query=${encodeURIComponent(query)}`);
        }
    };

    return (
        <div className="flex items-center w-[780px] h-16 bg-white rounded-full shadow-md overflow-hidden">
            <input
                type="text"
                className="flex-grow h-full rounded-full text-right focus:outline-none font-extralight text-lg px-4"
                placeholder="...جستجو در بین دوره‌ها"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-600 transition duration-200"
                onClick={handleSearch}
            >
                <img src="imgs/icons/search.png" alt="Search" className="w-6" />
            </button>
        </div>
    );
}