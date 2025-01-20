'use client';

import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  const toggleFiltersModal = () => {
    setIsFiltersOpen((prev) => !prev);
  };

  return (
    <div className="relative w-full">
      {/* Search Input */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleInputChange}
        />
        </div>
    </div>
  );
};

export default SearchBar;
