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
        <div className="flex items-center w-[780px] md:w-[780px] sm:w-[400px] md:h-16 sm:h-14 h-16 bg-white rounded-full shadow-md overflow-hidden">
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