import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };
  return (
    <form onSubmit={handleSearch} className="p-2 text-gray-400 focus-within:text-gray-600">
      <label htmlFor="seach-field" className="sr-only">
        search all songs
      </label>
      <div className="relative flex flex-row justify-start items-center mt-5">
        <FiSearch className="absolute w-5 h-5 ml-4" />
        <input
          autoComplete="off"
          id="seach-field"
          className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-full bg-white/5 text-white focus:outline-none sm:text-sm"
          placeholder="Search all songs"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Searchbar;
